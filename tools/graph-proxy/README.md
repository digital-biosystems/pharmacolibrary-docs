# Graph proxy (read-only)

The public `/graph` page cannot hold a Neo4j login: on AuraDB Free (and on Community Edition)
the only user is the admin. This Cloudflare Worker holds it instead and runs **only** the named
queries of `assets/graph/catalogue.mjs`, with checked parameters, in a READ transaction, with a
20 s timeout. Readers never send Cypher. Database error messages are not passed on, and answers
are cached at the edge for an hour.

## Deploy

1. Upload the demo package to an AuraDB instance (`graph-demo-*/README.md`, "Neo4j AuraDB").
2. From this directory:
   ```bash
   npx wrangler login
   npx wrangler secret put NEO4J_QUERY_URL     # https://<id>.databases.neo4j.io/db/neo4j/query/v2
   npx wrangler secret put NEO4J_PASSWORD
   npx wrangler deploy                         # prints https://pharmacolibrary-graph-proxy.<account>.workers.dev
   ```
3. Put that URL in `assets/graph/config.json` → `"proxy"` and publish the site.
4. Check it: `curl https://…workers.dev/health` lists the query names.

`ALLOWED_ORIGINS` in `wrangler.toml` lists the page origins that may call it. A per-IP rate
limit can be enabled there (commented; check Cloudflare's current binding syntax first).

## Changing a query

Edit `assets/graph/catalogue.mjs`, run the tests, then redeploy the Worker and publish the site
together, so the page never asks for a query the proxy does not know.

```bash
node --test tools/graph-proxy/test.mjs
```
