# Plan — split the ledger and curator queue into sharded pages (UI issue 1)

## Problem

Two docsify routes fetch and parse far more page than a browser can comfortably render:

- `#/ledger` — `ledger.md`, **14,134,370 bytes**, one file holding tiles, corpus cards,
  6 panel tables, **411 collapsible run-group sections** (407 `dg-*` + `tg` + `ttd`) ×
  one dense HTML table each, a wanted-drugs table, benchmark scores and notes. Docsify
  parses the whole file on every visit, and re-renders it on every navigation away.
- `#/review` — `review.md`, **766,497 bytes**, 4,683 markdown table rows in four
  sections (disputed 3,462 · stale 466 · quarantined 64 · needs review 691).

A reader who clicks "Ledger" in the sidebar can lock the tab. Both pages also bloat
build output and rsync paging.

Note: both pages are plain HTML tables + `assets/css/ledger.css`. Neither uses the
`dbs-*` web components (verified: `docs/ledger.py` and `docs/build_set.py` reference no
custom elements), so **no work in `~/Projects/dbs-components-dev` is required**.

## Repos and ownership

| Repo | Owns | Role in this plan |
|---|---|---|
| `~/Projects/pharmacolibrary-dev` | `pk_knowledge_scripts/docs/ledger.py`, `build_set.py`, `nav.py` | The generators: section-split rendering, shard writes, sidebar links |
| `~/Projects/pharmacolibrary-docs` | templates (`README-template.md`), scaffold (`index.html`, `pipeline.md`, `CONTRIBUTING.md`), `assets/css/ledger.css` | Redirect for old deep links, updated cross-references, small CSS |
| `~/Projects/dbs-components-dev` | `dbs-*` elements | Unaffected |

Generated files are written by the generator into the docs repo; the generator is the
only place that may change what lands there.

## Target layout (docs repo)

```
ledger/README.md          overview: tiles, corpus cards, benchmark + notes, and an
                          index table linking every panel and run-group shard
ledger/p-dbs.md           one panel's table (6 pages: p-ddd, p-dbs, p-dph, p-dse, p-dn1, p-do1)
ledger/dg-A06A-2.md       one run group, its <details> expanded (≈407 pages, ~25 KB each)
ledger/wanted.md          the wanted-drugs section
review/README.md          overview: per-reason counts and links
review/disputed-1..3.md   chunked at ≤ 1,200 rows (~120–170 KB each)
review/stale.md           466 rows
review/quarantined.md     64 rows
review/needs-review.md    691 rows
ledger.md, review.md      small generated stubs: "moved to …" + link (old links keep working)
```

Sharding granularity comes from the structure already in `render()` (`docs/ledger.py`):
panels are rendered by `_panel_section`, run groups by `_group_section`, wanted by
`_wanted_section`. Only the assembly step changes.

## Work items

### A. Generator — `ledger.py` (dev repo)

1. Add `render_section(key, docs_dir, link_prefix)` that renders **one** unit (a
   panel, a group, or wanted) as a standalone page body, reusing the existing
   `_panel_section` / `_group_section` / `_wanted_section` (they already build exactly
   one table; just drop the outer `<div class="pklg">` per-shard, keep it on the
   overview).
2. Add `section_index(blob)` → the overview's index table: panel → row/record totals,
   status badge, link; run-group label → drugs, time, counts, link. Data is already in
   `collect()`'s blob (`.ledger.json`), no new computation.
3. Keep `render()` for backward compatibility or delete it once `build_set.py` uses
   the sharded writer. The tiles/corpus renderers (`render_tiles` used by
   `pipeline.md`) stay; their `ledger_href` changes to `ledger/`.
4. Drug/DOI links inside sections are already `#/drugs/…` root-route URLs
   (`_row_html`, `_drug_cell`) and survive the move into `ledger/`; the wanted
   section uses the same scheme. Verify once via the link-imaging step in F.

### B. Generator — `build_set.py` (dev repo)

1. Rework `_write_ledger`: write `ledger/README.md`, `ledger/p-*.md`,
   `ledger/dg-*.md`, `ledger/wanted.md`, and the `ledger.md` stub, using `_write`'s
   existing content-hash "skip unchanged" semantics.
2. Prune unchanged: before writing, delete stale shards the new build would not
   regenerate (e.g. a run group removed from the KB). The directory name `ledger` is
   already in `_SITE_DIRS`, so the existing cleanup guard covers it.
3. Rework `review_page` → sharded: overview page plus one file per reason; for
   `disputed` chunk the table at ≤ 1,200 rows per file (3 files), keeping the same
   markdown rows and links. Rewrite row links `drugs/drug_x/…` → `#/drugs/…`
   (route-root form) so they keep resolving from a subdirectory — same convention
   `atc_group_page` already documents (`href="#/drugs/…"`, "resolved from the site
   root wherever the page lives").
4. Move the reason TOC (the `·`-separated links) onto `review/README.md` pointing to
   the shard routes; drop the now-meaningless same-page `#anchor` links.

### C. Generator — `nav.py` (dev repo)

- `_page_links`: `[Ledger](/ledger/)` and `[Curator queue](/review/)`(docsify maps the
  trailing-slash route to the folder's `README.md`; one `#/ledger/`-style URL in the
  sidebar becomes the sharded overview). Shards themselves are deliberately **not**
  in the sidebar.

### D. Templates / scaffold — docs repo

1. `index.html`: one small plugin (same pattern as the disclaimer plugin) that
   redirects the legacy routes once per render:
   `#/ledger` → `#/ledger/`, `#/review` → `#/review/`. `history.replaceState`-style
   `location.replace` avoids a second render of the 14 MB file — do the redirect
   **before** docsify fetches, i.e. in `hook.init` or immediately on parse of the
   route, not in `doneEach`.
2. `README-template.md` / `pipeline.md` template text that links `#/ledger` or
   `review.md`: point the pnote link to `#/ledger/` and the curator-queue mention to
   `#/review/`. These regions are generated (`AUTOGEN` markers), so the fix is in the
   generator strings in `build_set.py` (`_write_read`, `_write_pipeline`), not edits
   of generated files.
3. `CONTRIBUTING.md`: update the sentence in which `ledger.md` is generated to
   `ledger/` shards + stubs; mention the shard-size budget so future generators
   respect it.
4. `assets/css/ledger.css`: scoped `.pklg` styling stays as-is; add nothing unless the
   shard pages want a one-line breadcrumbs row (optional, see F).

### E. Regression / verification

1. Extend `scripts/check-site.py` (docs repo) with two assertions: no generated page
   exceeds **2 MB**; every `#/`-link target on the ledger/review shard pages resolves
   (reuse whatever link-crawling `check-site.py` already does for ATC pages).
2. Run the standard build (`python -m pk_knowledge_scripts.docs.build_set …` per the
   docs CLAUDE.md) and confirm: generated page count ≈ +418, `ledger.md` and
   `review.md` dropped to stubs (byte sizes in the build log), sidebar shows the new
   links, `sync-to-pages.sh` output unchanged in mechanics.
3. Manual spot checks in a browser: open `#/ledger` (redirect lands on overview),
   open a deep link to a group page, follow drug and DOI links from a shard, check
   `#/review`, and figure out that a *stale* old link like `#/review#disputed`
   degrades to the stub (acceptable; document it).

### F. Optional polish (only if cheap)

- Stamp `.pk-crumbs` on shard pages (`Ledger › dg-A06A-2`) — the existing breadcrumb
  plugin renders it for free.
- Put "next/previous shard" links at the shard foot for the alphabetical-ish walk.
- A curator-hash link (`#/ledger?g=dg-A06A-2`) — postpone; the shard route is already
  the shareable URL.

## Order of execution

1. A1–A2 (section renderers + index) — pure functions, testable with fixtures.
2. B1–B2 (ledger shard writer + pruning) — feature-off by default flag, then flip.
3. C + generated-string text updates (D2 within build_set).
4. D1–D3 (docs repo redirect plugin + template/CONTRIBUTING text).
5. E regression harness, then the F polish items.
6. Flip default, full rebuild, sync to Pages.

## Explicitly out of scope

- Client-side ledger rendering from `.ledger.json` (attractive long-term: ~415 files
  become one app + data file, matching how `/sites` works — but it needs a JS table
  renderer with comparable density and loses "view source" pages; record here as a
  future option).
- Sidebar weight reduction and search improvements (UI issues 2, 5).
- Any `dbs-components-dev` change.

## Status — implemented (2026-11-03)

All work items A–F are done and verified on the live corpus:

- `docs/ledger.py`: `render()` replaced by `ledger_pages()` (+ `_overview`, `_page`,
  `_shard_name`, `_registry` cache, `LEDGER_STUB`); the retrieval queue is chunked at
  `_WANTED_MAX_ROWS = 1200` rows (it measured 12,136 papers / 6.3 MB), shard budget
  `_SHARD_MAX_BYTES` = 2.5 MB enforced with a hard error.
- `docs/build_set.py`: `_write_ledger` writes the shards, the `ledger.md` stub, and prunes
  stale shards; `review_page` → `review_pages()` (one page per reason, chunked at
  `_REVIEW_MAX_ROWS = 1200` rows, root-hash `#/drugs/…` row links, crumbs); pipeline text
  links updated; `"review"` added to `_SITE_DIRS`.
- `docs/nav.py`: sidebar links `/ledger/`, `/review/`.
- Site shell: `index.html` redirect plugin (`#/ledger` → `#/ledger/`, `#/review` →
  `#/review/`, before docsify fetches); `check-site.py --generated` enforces the 2.5 MB
  budget + resolvable `#/` links on all 435 shard/stub pages; `CONTRIBUTING.md` updated.
- `refresh_text.py` and the dashboard `/ledger` route follow the new paths.
- Result on the live corpus: ledger = 1 overview (linked 1-row-per-line indexes for 6
  panels and 408 run groups) + 419 shard pages, largest 710 KB; review = overview + 6
  pages; both legacy files replaced by stubs. Old-generation pages under the new
  directories are pruned by content.
- Regression tests: `test/test_ledger_shards.py` (new) plus
  `test_docs_sidebar.py`/`test_docs_display.py` updated — 36 tests pass.
- Still pending before deploy: one full `build_set --aggregates-only` run once the
  currently-running (`dbs`, …) groups finish — `collect()` bypasses its cache while a run
  is live — then `sync-to-pages.sh`.

### Erratum — link forms in the generated markdown (2026-11-03 afternoon)

The first shard build wrote markdown table links as `#/ledger/dg-…`; docsify's router
turns every MARKDOWN-compiled link through `toURL`, and a markdown href starting with
`#` is re-encoded as a same-page anchor: `#/ledger/x` → `#/ledger/?id=/ledger/x` (that
`?id=` form is how docsify's in-page heading anchors work at all). Raw-HTML anchors
(`<a href="#/drugs/…">` inside html blocks) bypass the renderer and keep the hash form —
which is why every pre-existing route link on the site worked. Fixed: generator markdown
links now use root-absolute path form (`(/ledger/p-ddd)`, `(/drugs/drug_x/rec.md)`,
`(/review/disputed-1)`), raw-HTML links keep `#/…`; check-site.py scans both forms.
Also: when regenerating from a cached `.ledger.json` outside `collect()`, run
`apply_tally()` on the loaded rows first — the cache stores pre-tally counts (a raw load
rewrote 365 shards with wrong e/r/o before this was caught).
