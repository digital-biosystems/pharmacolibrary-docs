# Maintaining the website

## Ownership

| Repository | Maintained here |
| --- | --- |
| `pharmacolibrary-docs` | Site shell, CSS, Docsify plugins, authored pages, intro template and pinned component assets |
| `pharmacolibrary-dev` | Extraction, Markdown generation, databases, model parameters, FMU/WASM exports |
| `dbs-components-dev` | Reusable component source, internal HTML/CSS, tests and builds |
| `dbs-components` | Matched component releases and component documentation |
| `pharmacolibrary.github.io` | Deployment mirror |

Edit `index.html` and `assets/css/*.css` / `assets/js/pk-*.js` directly in this repository.
The feature scripts register Docsify hooks before its deferred startup. Preserve the
order in `index.html`; sidebar-collapse prepends its hook, before sidebar restoration.
`pk-db.js` resolves database URLs through `data/*latest.json`; content updates do not
require changing the shell. Query/LLM engines, databases and simulator payloads remain
on-demand resources.

`README.md`, `ledger.md`, `_sidebar.md`, `atc/`, `drugs/` and `toxins/` contain generated
content. Edit `README-template.md` for the introduction. The generator preserves text
outside its marked regions. Scientific downloads and database exports remain pipeline
outputs; correct their source records rather than editing generated numbers here.

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
```

It checks lazy loading, search, tabs, record navigation, two independent simulator
instances, query answers, sites controls, route changes and mobile tabs. Set `SITE_URL`
to test another HTTP origin. The optional `BASELINE_JSON` input compares simulator
reference rows with a previously captured shadow-root HTML snapshot.

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
