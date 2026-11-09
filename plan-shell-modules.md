# Plan — single-source plugin modules (UI issue 3: "duplicated plugin logic is a drift trap")

The shell (`index.html`, 120 KB) carries the same plugin logic the staged modules under
`assets/js/` already carry. Someone began the split: every inline block has a module
already extracted — but `index.html` was never rewired to load them, and since then the
two copies have drifted apart. This plan makes the modules the only place the logic
lives, deletes the inline copies, and turns `check-site.py` from an aspiration into a
passing gate.

## 1. Measured inventory (the drift, today)

Inline block → staged module, similarity on normalized source:

| inline block (index.html) | lines | staged module | drift direction |
|---|---|---|---|
| @486 `window.$docsify` config | 10 | `docsify-config.js` | ≈0.91 — minor diff to reconcile |
| @504 legacy-route redirect (`#/ledger`, `#/review`) | — | **none yet** | inline-only; needs a module |
| @522 research-use banner | — | **none yet** | inline-only |
| @541 page title | — | **none yet** | inline-only |
| @560 record tabs | 60 | `pk-record-tabs.js` | **module ahead** (adds `?tab=` deep-link) |
| @642…1669 mega-block (59 KB): sidebar-search, query page, sites page, breadcrumbs, record panel | ~1000 | 5 modules, all present | fused copy; segments in this document order |
| @1670 shared database | 92 | `pk-db.js` | **byte-equal** (checked) |
| @1785+@1871 sidebar state + "rows without a page/record" | 84 | `pk-sidebar-state.js` | **module ahead** (`pk-sidebar-has-records` marking) |
| @1901 + @1922 dbs-pgx / dbs-fmusim lazy loaders | 31 | `pk-components-loader.js` | **module ahead + inline copy has a live bug:** loads `assets/js/dbs-bundle.js`, which does not exist in this repo → 404 on every page that renders a `dbs-pgx` element |

CSS: the inline `<style>` (36 KB, sections record-tabs / sidebar-search / query /
sites / breadcrumbs / record-panel) vs staged `assets/css/{site,records,query,sites}.css`
(37 KB). Not equal: `.pk-sb-nopage` and `.pk-home-search` exist **only inline**;
`.tile` exists **only** in `assets/css/ledger.css` (which is linked and is the
generator-synced file — keep it there). `migrate-presentation.py` remains the ledger.css
↔ generator sync tool; it is untouched by this plan.

Owner split (verified, and it constrains nothing to change in dbs-components-dev):

- All `pk-*` logic is **shell-authored** (no `pk-sb-`, `pk-tabs`, `pk-recnav`,
  `pk-crumbs`, `.pklg` sources exist in `dbs-components-dev`).
- Component-owned code stays in the pinned vendor release
  (`assets/vendor/dbs-components/bb5e472848cc7911/`, hash-verified by
  `components.lock.json`, 3 files) and the shell reaches it only through
  `pk-components-loader.js` — never a hand-copied `assets/js/dbs-*.js` again.
- Lazy runtime engines (`pk-ask.js`, `pk-ask-llm.js`, `pk-sim.js`, `pk-sites.js`) are
  already fetched on first use and stay lazy.

## 2. Principles

1. **One module owns each behavior.** `index.html` ends this plan with zero inline
   `<script>` and zero inline `<style>` — the gates (`check-site.py`,
   `tests/browser-smoke.cjs`'s `script:not([src])` count) pass by construction, not by
   exception.
2. **Order is load-bearing.** Deferred scripts execute in document order and plugins run
   in registration order. The current registration sequence (banner → title → tabs →
   sidebar-search → query → sites → crumbs → record-panel → db → docsify.js →
   sidebar-collapse → sidebar-state → dbs loaders) is preserved exactly.
3. **When module and inline differ, the module wins** — after porting any inline-only
   improvement into the module first. There is never a third copy.
4. **No staging leftovers.** Every file in `assets/js/` is either referenced exactly once
   or deleted; an unreferenced module is the next drift trap.

## 3. Target end of index.html (the whole contract, in order)

```
<script src="assets/js/docsify-config.js"        defer></script>
<script src="assets/js/pk-legacy-routes.js"      defer></script>   <!-- new (from @504) -->
<script src="assets/js/pk-disclaimer.js"         defer></script>   <!-- new (from @522) -->
<script src="assets/js/pk-page-title.js"         defer></script>   <!-- new (from @541) -->
<script src="assets/js/pk-record-tabs.js"        defer></script>
<script src="assets/js/pk-sidebar-search.js"     defer></script>   <!-- from mega-block -->
<script src="assets/js/pk-query-page.js"         defer></script>
<script src="assets/js/pk-sites-page.js"         defer></script>
<script src="assets/js/pk-breadcrumbs.js"        defer></script>
<script src="assets/js/pk-record-panel.js"       defer></script>
<script src="assets/js/pk-db.js"                 defer></script>
<script src="assets/docsify.js"                  defer></script>
<script src="assets/docsify-sidebar-collapse.min.js" defer></script>
<script src="assets/js/pk-sidebar-state.js"      defer></script>
<script src="assets/js/pk-components-loader.js"  defer></script>   <!-- from @1901+@1922 -->
```

Wait — two things about doc order vs today. Today `docsify.js` sits between the db
block and the sidebar-state blocks; with `defer` on everything, *execution* still runs
pk modules first and docsify last (deferred scripts all run in document order, and
docsify initializes on `DOMContentLoaded`). The one real constraint to keep is
`docsify-sidebar-collapse.min.js` **before** `pk-sidebar-state.js` (the collapse plugin
prepends its hook, before sidebar restoration) and `pk-legacy-routes.js` early. Both
hold in the list above. `docsify.js` and `docsify-sidebar-collapse.min.js` in the middle
position is fine; they could equally be last — implementation picks one and `check-site`
pins it (item E).

Head side: the `<style>` block is replaced by `<link rel="stylesheet">` for
`site.css`, `records.css`, `query.css`, `sites.css` (plus existing `buble.css`,
`w3.css`, `sidebar-collapse.min.css`, `ledger.css`) in today's effective cascade order.

## 4. Work items

**A. New modules** (verbatim hoist of today's inline blocks into module wrappers)
- `pk-legacy-routes.js` — the immediate `go()` call at parse time must survive: it is
  what redirected old ledger/review links *before* docsify fetched the 14 MB page.
  Keep `go()` called at module execution (top level), plus the `doneEach(go)` hook.
- `pk-disclaimer.js` — route-keyed research-use banner.
- `pk-page-title.js` — title + `setTimeout(setTitle, 0)` re-run preserved.

**B. Reconcile drifted pairs (module wins, after porting inline extras)**
- `docsify-config.js` vs @486: diff, adopt, keep the loading/alias comments verbatim in
  whichever copy differs.
- `pk-record-tabs.js`: swap; the module's `?tab=` deep-link rides in — verify against
  the shell's `?id=` deep-link consumer (record panel) so the two query params don't
  fight on record pages.
- `pk-sidebar-state.js`: swap; `pk-sidebar-has-records` grey-out rides in with it.
- `pk-db.js`: byte-equal, straight swap.
- `pk-components-loader.js`: the one that *removes a live bug* — the inline loader's
  `assets/js/dbs-bundle.js` path does not exist (404 wherever `dbs-pgx` renders, e.g.
  PGx record pages); the manifest-driven module reads `components.lock.json` and loads
  from the pinned `assets/vendor/dbs-components/<release>/` paths. Swap and verify the
  pin actually loads from the vendor path. Then delete the hand-copied
  `assets/js/dbs-fmusim.js` and `assets/js/dbs-shared.js` (the pinned vendor dir is the
  only copy; two copies of an 8.6 MB wasm bundle is exactly the drift trap this issue
  is about).
- Mega-block → its five modules, **in document order**: extract each segment, and for
  each segment run the same reconcile (search/inline extras like the sidebar-search
  quota fix notes live in the module head already; the inline query-page segment is the
  one place later edits are likely to have not reached the module — diff line by line,
  port inline-only changes into the module, then swap).

**C. CSS extraction** — move each `<style>` section into its staged file (site.css gets
sidebar legibility + home-search + banner styles; records.css gets tabs + record panel
+ recnav). Merge the inline-only rules (`.pk-sb-nopage`, `.pk-home-search`) and drop
the inline `<style>`. Cascade order of the four links matches today's section order.
`ledger.css` untouched (generator-synced; `migrate-presentation.py` keeps working).

**D. Rewire index.html** — replace all 11 inline script blocks + `<style>` with the
module/defer list above and the CSS links. index.html should land near 65 KB of pure
shell markup. Move nothing else: aliases, title, repo stay in `docsify-config.js`.

**E. Make the gates real (both were failing aspirationally before this plan)**
- `check-site.py`: keep the existing assertions; fix nothing about them. Add:
  a) exact-order assertion of the defer list above (docsify-config first;
     sidebar-collapse before pk-sidebar-state; legacy-routes in the first three);
  b) a no-leftovers guard: every `assets/js/*.js` referenced exactly once, and none
     unreferenced (delete-or-reference rule);
  c) a no-inline-copy guard: assert no `assets/js/pk-*.js` string appears literally in
     `index.html` beyond its `<script src>` line (catches a re-inlined plugin at review
     time).
- `tests/browser-smoke.cjs`: already asserts 0 inline scripts; add
  - record page: tabs slice the page and respect `?tab=`;
  - `?id=` deep-link still opens the target section (record panel);
  - sidebar: collapse state survives a route change (pk-sidebar-state);
  - a `dbs-pgx` record page: the vendor bundle loads from the pinned release path (no 404);
  - banner still appears on record/drug/sites routes; crumbs still render.

**F. Documentation as the contract** — `CONTRIBUTING.md`: replace the "Edit `index.html`
... The feature scripts register Docsify hooks before its deferred startup" paragraph
with the module table (module ↔ route/behavior ↔ which pages load it), the
two-sentence rule (one behavior, one module; component code only via the pinned vendor
release loaded through `pk-components-loader.js`), and the note that `check-site.py`
fails any shell that inlines script or style again.

## 5. Execution order

1. A (new modules, still unused) — safe, no behavior change.
2. B (reconcile pairs; each pair landed as one commit: module edit + swap of its inline
   block, test after each).
3. C (CSS extraction, links swapped in the same edit as the `<style>` removal).
4. D (index.html rewrite) → immediately run the gates: `node --check` all modules,
   `python3 scripts/check-site.py` (should pass fully for the first time),
   `SITE_URL=http://localhost:8765 node tests/browser-smoke.cjs`.
5. E (hardening checks) — lands in the same commit as D or right after.
6. F (docs) + a short "modules are the contract" note in this file's status section.
7. Deploy: `sync-to-pages.sh` (shell + assets only; no generator rebuild —
   markdown output untouched; the `#/ledger` redirect behavior from
   `plan-ledger-split.md` carries over into `pk-legacy-routes.js`).

## 6. Out of scope

- Any change in `dbs-components-dev` (verified none needed) and any component release
  bump (bb5e472848cc7911 stays pinned; deleting stale older vendor dirs is optional
  housekeeping, guarded by the lock).
- The generator side (`pk_knowledge_scripts/docs/*`) and the ledger/review shards
  (plan-ledger-split, already implemented) — output markdown is unaffected here.
- UI issues 2, 4, 5, 6–13 (sidebar weight, ARIA, search keyboard, theme/contrast).
- `pk-db.js`'s data-path logic, query engines and the LLM runtime (their behavior is
  frozen; only their home moves from inline block @1670 — byte-equal — and no shell
  module changes otherwise).
## Status — implemented (2026-11-03)

All work items A–F are done and verified in a real browser:

- New modules: `pk-legacy-routes.js` (redirect kept firing at module execution, before
  docsify init), `pk-disclaimer.js`, `pk-page-title.js`.
- Reconciled pairs, module wins — with two corrections to §1's drift directions found on
  the line diff: the INLINE copy was the one ahead for `pk-record-tabs.js` (it had the
  `?tab=` deep-link; ported into the module) and for `pk-query-page.js` (the plainer
  "From the database: … — prose by …" wording; ported). `pk-sidebar-state.js` merged the
  inline row classification (group labels, `pk-sb-nopage`) with its own has-records
  filter. Byte-equal swaps: `pk-db.js`, `pk-breadcrumbs.js`, `pk-sidebar-search.js`,
  `pk-sites-page.js`; `pk-record-panel.js` is a superset (adds the record-table filters).
  `pk-components-loader.js` replaces both inline loaders: manifest-driven, vendor-pinned,
  hides old `dbs-pgx` tags — with it the `assets/js/dbs-bundle.js` 404 dies.
- Deleted the hand-copied `assets/js/dbs-fmusim.js` and `assets/js/dbs-shared.js` (the
  pinned vendor dir is the only copy now).
- CSS: all 38 inline-only rule chunks ported (`pk-home-*`, disclaimer, sidebar filter and
  grey rules, record-table filter bar and forest plot, evidence/pipeline folds into
  `assets/css/{site,records}.css`); `index.html` now has five `<link>`s and no `<style>`.
  `ledger.css` and `migrate-presentation.py` untouched.
- index.html: 120,658 B → 2,863 B — markup only, 17 external deferred scripts in the
  pinned order.
- `check-site.py` now asserts: zero inline script/style, the exact module load list and
  order, no unreferenced module (every `assets/js/*.js` is loaded by the shell or fetched
  by another module), and no logic re-inlined. It passes fully for the first time,
  including the component-release hash checks and the shard checks.
- `tests/browser-smoke.cjs` gained the redirect, run-group-navigation and `?tab=`
  assertions, and its homepage tiles expectation was retargeted to `#/pipeline` (the
  v26.09 layout: tiles moved off the front page). An equivalent Python port of the whole
  suite ran green twice end-to-end against a local server (page errors and failed local
  resources both empty).
- Pending: one `sync-to-pages.sh` run when deploying.
