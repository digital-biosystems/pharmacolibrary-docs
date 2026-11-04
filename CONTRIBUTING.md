# Maintaining the website

## Ownership

| Repository | Maintained here |
| --- | --- |
| `pharmacolibrary-docs` | Site shell, CSS, Docsify plugins, authored pages, intro template and pinned component assets |
| `pharmacolibrary-dev` | Extraction, Markdown generation, databases, model parameters, FMU/WASM exports |
| `dbs-components-dev` | Reusable component source, internal HTML/CSS, tests and builds |
| `dbs-components` | Matched component releases and component documentation |
| `pharmacolibrary.github.io` | Deployment mirror |

## The shell's modules: one behavior, one file

`index.html` carries markup only — no inline `<script>`, no inline `<style>`
(`scripts/check-site.py` fails the build otherwise). Every piece of shell behavior lives
in exactly one module under `assets/js/pk-*.js` (config in `docsify-config.js`), loaded
at the end of the body in the pinned order: deferred scripts execute in document order,
and docsify runs the registered hooks at its init — so the order in `index.html` IS
behavior, and `check-site.py` asserts it. Load-bearing positions: `pk-legacy-routes.js`
redirects old `#/ledger` and `#/review` links before docsify fetches anything;
`docsify-sidebar-collapse.min.js` (vendored, pinned 1.3.5) registers its hook before
`pk-sidebar-state.js` restores the sidebar as the reader left it.

| module | behavior | loads anything on demand |
|---|---|---|
| `pk-legacy-routes.js` | `#/ledger`, `#/review` → their sharded overviews | — |
| `pk-disclaimer.js` | research-use banner on drug, record, Sites routes | — |
| `pk-page-title.js` | browser-tab title from the page's h1 | — |
| `pk-demo.js` | the demo section's two tiles: `pk-sim.js` runs the clopidogrel record (active metabolite only; dose + CYP2C19 controls; the default run drawn beside for the difference) and `pk-sites.js` draws the anatomogram — both fetch only when scrolled into view; the tiles live in `README-template.md`'s demo section | — |
| `pk-cover.js` | the home route's first screen: `#/` shows README.md's whole front page **without the sidebar**, replaced by the fixed section line (`Drugs · Ask · Simulate · Downloads · About`); every content route restores the sidebar | — |
| `pk-tablist.js` | the tabs' keyboard half (WAI-ARIA Tabs: roving tabindex, `←`/`→`/`Home`/`End`, ids + `aria-controls`/`aria-labelledby`), shared by the record tabs (selection follows focus) and the Sites views (manual: arrows move focus, Enter activates) | — |
| `pk-record-tabs.js` | slices record pages at the build's sentinels into 3 tabs; remembers the tab; honors `…?tab=Models` links | — |
| `pk-sidebar-search.js` | the sidebar search box, over the database (loads it on the first keystroke) | `pk-db.js` |
| `pk-query-page.js` | the `/query` chat page; engines are fetched on first use | `pk-ask.js`, `pk-sim.js`, `pk-ask-llm.js`, DOMPurify from CDN |
| `pk-sites-page.js` | the `/sites` ADME page | `pk-sites.js`
| `pk-breadcrumbs.js` | renders the `.pk-crumbs` trail the builder stamped | — |
| `pk-record-panel.js` | the floating simulatable-models panel + the record-table filters (`pk-rf`, `pk-forest`) | — |
| `pk-db.js` | the SQLite engine and its Cache-API caching; database URLs resolve through `data/*latest.json`, so content updates never change the shell | `assets/sqljs/*`, `data/*` |
| `pk-sidebar-state.js` | keeps the sidebar as the reader left it; marks non-page / no-record rows; the has-records filter | — |
| `pk-components-loader.js` | loads `<dbs-fmusim>` (and hides legacy `<dbs-pgx>` tags) from the pinned component release, on the first page that uses one | the pinned `assets/vendor/dbs-components/<sha>/` files |

The dbs-* web components themselves (implementation and styles) come only from the
pinned release `components.lock.json` pins; never hand-copy a component file into
`assets/js/` — two copies of an 8.6 MB wasm bundle drifting apart is what happens then.
When module and shell ever differ, the module wins: fix the module, never re-inline.
Query/LLM engines, databases and simulator payloads remain on-demand resources.

`README.md`, `ledger/` (an overview plus one small page per curated panel and run group,
with `ledger.md` as a stub for old links), `review/` (one page per curator-queue reason,
with `review.md` as a stub), `_sidebar.md`, `atc/`, `drugs/` and `toxins/` contain generated
content. No generated page may exceed the shard budget enforced by
`scripts/check-site.py --generated` (2.5 MB): a bigger unit is split into a new page, not
shipped as a freeze-the-tab route. Edit `README-template.md` for the introduction. The
generator preserves text outside its marked regions. Scientific downloads and database
exports remain pipeline
outputs; correct their source records rather than editing generated numbers here.
The `{{built_at}}` placeholder in `README-template.md` is replaced with the current UTC
date and time whenever the generator refreshes the homepage introduction.

## Preview and checks

```bash
python3 -m http.server 8765
node --test tests/components-loader.test.cjs
python3 scripts/check-site.py
```

Open `http://localhost:8765`. The integration test requires Playwright and its Chromium
installation (`npm install --prefix /tmp/opencode/site-check playwright` followed by
`/tmp/opencode/site-check/node_modules/.bin/playwright install chromium`):

```bash
NODE_PATH=/tmp/opencode/site-check/node_modules node tests/browser-smoke.cjs
NODE_PATH=/tmp/opencode/site-check/node_modules node tests/sites-style.cjs
NODE_PATH=/tmp/opencode/site-check/node_modules node tests/sites-view.cjs
NODE_PATH=/tmp/opencode/site-check/node_modules node tests/sidebar.cjs
NODE_PATH=/tmp/opencode/site-check/node_modules node tests/pgx-curated-baseline.cjs
NODE_PATH=/tmp/opencode/site-check/node_modules node tests/ddd-diagrams.cjs
```

It checks lazy loading, search, tabs, record navigation, two independent simulator
instances, query answers, sites controls, route changes and mobile tabs. Set `SITE_URL`
to test another HTTP origin. The optional `BASELINE_JSON` input compares simulator
reference rows with a previously captured shadow-root HTML snapshot.
The focused Sites checks cover evidence styling and the tabbed/expanded layouts,
including jump navigation, control preservation and session preferences on desktop and mobile.
The PGx baseline check requires exact Normal/curated PK trajectory equality and verifies
phenotype switching in the browser.

## Shared documentation text

Edit `README-template.md`, `query.md`, and `sites.md` here; shared generated legends,
captions, and explanatory text live in `pharmacolibrary-dev/pk_knowledge_scripts/docs/`.
Use a text-only refresh to update existing pages without rerunning extraction or exports:

```bash
# From pharmacolibrary-dev; omit --write to preview:
python -m pk_knowledge_scripts.docs.refresh_text --docs-dir ../pharmacolibrary-docs --write
```

The refresh preserves source-derived About text, scientific tables, code blocks,
simulation inputs, and model files. Token totals include cross-check calls recorded in
the reported extraction run; they are not lifetime usage totals.

Missing model diagrams can be refreshed for `ddd` from existing published parameter files,
even when the external KB is disconnected:

```bash
# From pharmacolibrary-dev; omit --write to preview:
python -m pk_knowledge_scripts.docs.diagrams --source ddd --docs-dir ../pharmacolibrary-docs --write
```

This updates only `ddd` SVG files and Models-tab figures, not source records or databases.
Template graphics and component bindings are shipped with the pipeline; the external KB's
generated template cache is optional for rendering.

## Component upgrades

In `dbs-components-dev`:

```bash
npm ci --ignore-scripts
npm test -- --runInBand
bash sync_release_docs.sh ../dbs-components
```

This builds components, refreshes demos and stages files in the local release checkout.
It does not switch branches, commit or push. Review and commit the source changes and
release checkout, and tag the release according to your release policy. Rebuild after
the source commit if you want that commit recorded as `source_commit`.

In this repository:

```bash
python3 scripts/update-components.py ../dbs-components
python3 scripts/check-site.py
```

The importer checks hashes, copies the simulator and its matched shared chunk plus
license files into `assets/vendor/dbs-components/<release-id>/`, and writes
`components.lock.json`. Releases are content-addressed; the full manifest records
source commit, source-file hashes, build inputs and Node version. A locally staged,
uncommitted release is explicitly marked as such in the lock file. Re-run the importer
after committing the release to record the final release-checkout commit.

Never hand-edit a bundled component in this repository. Fix it in `dbs-components-dev`,
test, rebuild and re-import. The existing `dbs-pksites` component is independently
released too, but this site's richer PGx/PharmCAT sites page currently uses `pk-sites.js`
and `pk-sites-page.js`; replacing that UI needs a separate feature-parity migration.

## Integration contract

- `<dbs-fmusim>` receives `paramsurl`, `metaurl`, `wasmurl` and `controlsurl` from the
  generator. Model metadata supplies the Emscripten factory name, value-reference map,
  defaults and output names; record JSON supplies parameters and reference results.
- The component owns its internal styles and independent WASM instance. Site code
  owns routing, tabs and lazy loading. The shared chunk and entry must be from the
  same release and loaded in manifest order.
- `.pk-tab-mark` / `.pk-tab-end`, `.pk-crumbs[data-crumbs]` and
  `.pk-recnav[data-items]` are generator-to-frontend interfaces. Change both sides
  together when changing these formats.
- `.pk-model-meta[hidden]` stores metadata formerly emitted as the unwired `<dbs-pgx>`
  placeholder. It is not a component and does not trigger downloads.
- Ledger presentation lives in `assets/css/ledger.css`. `scripts/migrate-presentation.py`
  can migrate old generated pages; normal builds already emit the new markup.

## Initialize, generate and deploy

The generator's `docs.init_site` command clones a selected committed site revision;
there is no second frontend scaffold in `pharmacolibrary-dev/docs`.

```bash
# From pharmacolibrary-dev; target must not already exist:
python -m pk_knowledge_scripts.docs.init_site /path/to/site \
  --source ../pharmacolibrary-docs --ref <site-commit-or-tag>
python -m pk_knowledge_scripts.docs.build clopidogrel --docs-dir /path/to/site
```

Use `--docs-dir` or `PHARMACOLIB_DOCS_DIR` to select the generator output. Template WASM
compilation is an explicit `python -m pk_knowledge_scripts.export.fmu --wasm` operation
targeting the same site. Ordinary content builds never replace site CSS/JS or components.

After checking the complete site, `./sync-to-pages.sh` mirrors it into
`~/Projects/pharmacolibrary.github.io`, preserving that repository's Git metadata.
Review, commit and push the deployment repository to publish. A rollback uses the prior
committed site revision, including its pinned component assets.
