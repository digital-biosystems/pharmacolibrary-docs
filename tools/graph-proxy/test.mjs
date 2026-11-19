// node --test tools/graph-proxy/test.mjs — the proxy forwards catalogue queries only, in a
// READ transaction, never passes database errors on, and refuses other origins.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { handle } from './worker.mjs';
import { QUERIES, prepare } from '../../assets/graph/catalogue.mjs';

const ENV = { NEO4J_QUERY_URL: 'https://db.example/db/neo4j/query/v2', NEO4J_USER: 'neo4j', NEO4J_PASSWORD: 'secret',
  ALLOWED_ORIGINS: 'https://pharmacolibrary.github.io' };
const ORIGIN = { Origin: 'https://pharmacolibrary.github.io', 'Content-Type': 'application/json' };

function post(body, headers = ORIGIN) {
  return new Request('https://proxy.example/query', { method: 'POST', headers, body: typeof body === 'string' ? body : JSON.stringify(body) });
}
function withNeo4j(answer, status = 200) {
  const sent = [];
  globalThis.fetch = async (url, init) => { sent.push({ url, init, body: JSON.parse(init.body) }); return new Response(JSON.stringify(answer), { status }); };
  return sent;
}

test('a catalogue query is forwarded as its fixed statement, read-only, with the login', async () => {
  const sent = withNeo4j({ data: { fields: ['n'], values: [[1]] } });
  const res = await handle(post({ name: 'drug_card', params: { slug: 'drug_allopurinol' } }), ENV, {});
  assert.equal(res.status, 200);
  assert.deepEqual((await res.json()).data.values, [[1]]);
  assert.equal(res.headers.get('Access-Control-Allow-Origin'), 'https://pharmacolibrary.github.io');
  assert.equal(sent.length, 1);
  assert.equal(sent[0].body.accessMode, 'Read');
  assert.equal(sent[0].body.statement, QUERIES.drug_card.cypher);
  assert.deepEqual(sent[0].body.parameters, { slug: 'drug_allopurinol' });
  assert.equal(sent[0].init.headers.Authorization, 'Basic ' + btoa('neo4j:secret'));
});

test('anything outside the catalogue never reaches the database', async () => {
  const sent = withNeo4j({ data: { fields: [], values: [] } });
  for (const body of [{ name: 'nope' }, { statement: 'MATCH (n) DETACH DELETE n' },
                      { name: 'drug_card', params: { slug: "x'}) DETACH DELETE n //" } },
                      { name: 'drug_card', params: { slug: 'drug_a', statement: 'x' } }, 'not json']) {
    const res = await handle(post(body), ENV, {});
    assert.equal(res.status, 400, JSON.stringify(body));
  }
  assert.equal((await handle(post('x'.repeat(5000)), ENV, {})).status, 413);
  assert.equal(sent.length, 0);
});

test('a limit is clamped and other origins are refused', async () => {
  assert.equal(prepare('drug_search', { q: 'allo', limit: 100000 }).parameters.limit, QUERIES.drug_search.params.limit.max);
  const sent = withNeo4j({ data: { fields: [], values: [] } });
  const res = await handle(post({ name: 'probe' }, { Origin: 'https://evil.example', 'Content-Type': 'application/json' }), ENV, {});
  assert.equal(res.status, 403);
  assert.equal(res.headers.get('Access-Control-Allow-Origin'), null);
  assert.equal(sent.length, 0);
});

test("the database's own error text is not passed on", async () => {
  withNeo4j({ errors: [{ code: 'Neo.ClientError.Security.Forbidden', message: 'internal detail' }] }, 400);
  const res = await handle(post({ name: 'probe' }), ENV, {});
  assert.equal(res.status, 502);
  assert.doesNotMatch(JSON.stringify(await res.json()), /internal detail/);
});

test('every catalogue statement only reads', () => {
  for (const [name, q] of Object.entries(QUERIES)) {
    assert.doesNotMatch(q.cypher, /\b(CREATE|MERGE|DELETE|DETACH|SET|REMOVE|LOAD\s+CSV|FOREACH)\b|CALL\s+(apoc|dbms|db\.(?!labels))/i, name);
  }
});
