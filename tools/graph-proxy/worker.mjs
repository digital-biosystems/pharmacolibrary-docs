// Read-only proxy between the public /graph page and a Neo4j AuraDB instance.
//
// The page sends {name, params}; the proxy looks the name up in the site's own query
// catalogue (assets/graph/catalogue.mjs), checks every parameter against its declared type,
// and forwards that fixed statement to Neo4j's Query API in a READ transaction. No reader
// ever sends Cypher, and the database login never leaves the Worker (it is a Worker secret).
// Answers are cached at the edge for an hour: the graph changes only when it is re-uploaded.
//
// Settings (wrangler.toml [vars] and `wrangler secret put`):
//   NEO4J_QUERY_URL   https://<id>.databases.neo4j.io/db/neo4j/query/v2      (secret)
//   NEO4J_USER        neo4j                                                     (var)
//   NEO4J_PASSWORD    the instance password                                     (secret)
//   ALLOWED_ORIGINS   comma-separated page origins allowed to call it           (var)
//   LIMITER           optional Workers rate-limiting binding, keyed by client IP
import { QUERIES, prepare } from '../../assets/graph/catalogue.mjs';

const MAX_BODY = 2048;
const TIMEOUT_MS = 20000;
const CACHE_SECONDS = 3600;

function corsHeaders(origin, env) {
  const allowed = (env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
  if (!origin || !allowed.includes(origin)) return null;
  return { 'Access-Control-Allow-Origin': origin, Vary: 'Origin' };
}

function json(body, status, headers) {
  return new Response(JSON.stringify(body), {
    status, headers: { 'Content-Type': 'application/json; charset=utf-8', ...(headers || {}) },
  });
}

export async function handle(request, env, ctx) {
  const url = new URL(request.url);
  const origin = request.headers.get('Origin');
  const cors = corsHeaders(origin, env);

  if (request.method === 'OPTIONS') {
    if (!cors) return new Response(null, { status: 403 });
    return new Response(null, { status: 204, headers: { ...cors, 'Access-Control-Allow-Methods': 'POST, GET',
      'Access-Control-Allow-Headers': 'content-type', 'Access-Control-Max-Age': '86400' } });
  }
  if (request.method === 'GET' && url.pathname === '/health') {
    return json({ ok: true, queries: Object.keys(QUERIES) }, 200, cors || {});
  }
  if (request.method !== 'POST' || url.pathname !== '/query') return json({ error: 'not found' }, 404, cors || {});
  if (!cors) return json({ error: 'origin not allowed' }, 403);

  if (env.LIMITER) {
    const { success } = await env.LIMITER.limit({ key: request.headers.get('CF-Connecting-IP') || 'unknown' });
    if (!success) return json({ error: 'too many requests, try again in a minute' }, 429, cors);
  }

  const text = await request.text();
  if (text.length > MAX_BODY) return json({ error: 'request too large' }, 413, cors);
  let body;
  try { body = JSON.parse(text); } catch { return json({ error: 'request is not JSON' }, 400, cors); }
  let stmt;
  try { stmt = prepare(body && body.name, body && body.params); } catch (e) { return json({ error: e.message }, 400, cors); }

  const cacheKey = new Request('https://graph-proxy.invalid/' + encodeURIComponent(body.name) + '?p=' +
    encodeURIComponent(JSON.stringify(stmt.parameters)));
  const cache = typeof caches !== 'undefined' ? caches.default : null;
  const hit = cache && await cache.match(cacheKey);
  if (hit) return json(await hit.json(), 200, { ...cors, 'X-Cache': 'hit' });

  let res;
  try {
    res = await fetch(env.NEO4J_QUERY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json',
        Authorization: 'Basic ' + btoa(`${env.NEO4J_USER || 'neo4j'}:${env.NEO4J_PASSWORD}`) },
      body: JSON.stringify({ statement: stmt.statement, parameters: stmt.parameters, accessMode: 'Read' }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch {
    return json({ error: 'the graph did not answer in time' }, 504, cors);
  }
  const answer = await res.json().catch(() => null);
  // database messages are not passed on: they can name internals a reader has no use for
  if (!res.ok || !answer || (answer.errors && answer.errors.length) || !answer.data) {
    return json({ error: 'the graph could not answer this query' }, 502, cors);
  }
  const payload = { data: answer.data };
  if (cache) {
    const stored = json(payload, 200, { 'Cache-Control': `public, max-age=${CACHE_SECONDS}` });
    const put = cache.put(cacheKey, stored);
    if (ctx && ctx.waitUntil) ctx.waitUntil(put); else await put;
  }
  return json(payload, 200, cors);
}

export default { fetch: handle };
