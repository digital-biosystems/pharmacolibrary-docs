# Plan — sidebar & ask-box keyboard + ARIA, and drug-name headers (UI issue 5)

Three connected pieces: the sidebar search's missing keyboard model, the same
accessibility treatment for the "Ask the data" input on `/#/query`, and a data/UX change
so that typing a drug name or a **drug brand name** ("clopidogrel", "plavix") returns the
drug page's header with a link straight to `/#/drugs/drug_clopidogrel/`.

## What the audit found

- **Sidebar search** (`pk-sidebar-search.js`, the `.pks` box): mouse-only — every result
  is a tab stop, no arrows, no Enter-to-open, no Escape-to-clear; no combobox ARIA
  (`role=combobox`, `aria-expanded`, `aria-activedescendant`, `role=option`s, `role=status`
  hint). The SQL ranks exact/prefix first but a drug hit looks identical to the 30 papers
  below it.
- **Brands:** the shipped database *already carries* `drug_alias` (synonyms + brands —
  `plavix`, `iscover`, `grepid` → `drug_clopidogrel`; the schema comment even says the
  question box resolves "Plavix" through it, and `pk-ask.js` reads it for the ask engine) —
  but `export/sqlite.py:_build_search()` never joins it into `search_doc`, so
  `WHERE label='plavix'` returns nothing. **The blocker is one missing index pass in the
  export, not missing data.**
- **Query page** (`/#/query`): Enter already submits (bound on `#pkq-ask`); the ask
  lexicon already resolves brands. Missing: the brand→drug-page affordance when the ask IS
  a drug name; `aria-live` announcements (answer pending/done is written into `#pkq-status`
  with roles unset); focus-visible styles.

## Work items

**A. Export: index the aliases** (`pk_knowledge_scripts/export/sqlite.py:_build_search`)
- One pass over `drug_alias` joined to `drug`: rows of kind `brand`/`synonym`,
  `label = alias`, `detail = '<alias> — generic: <name>'` (e.g. "plavix — generic:
  clopidogrel"), `href = 'drugs/<slug>/'`. Deduped by the pass; the `_ALIAS_STOP`/
  `_common_words` guards stay where they are (they guard the ask parser, not the index).
- Rebuild with `python -m pk_knowledge_scripts.export.sqlite …` in the **data cycle**
  (new content-hash file name → `data/latest.json` republished) — belongs in the same
  post-runs refresh already pending for issue 1's data, not a build of its own.
- One regression test pinned to the export: `_build_search` emits `('brand', 'plavix', …,
  'drugs/drug_clopidogrel/')`.

**B. Sidebar search client** (`pk-sidebar-search.js`, unchanged module list)
- **Drug header as the first result:** when any hit is exact/prefix on a `drug` row (or a
  `synonym`/`brand` alias row pointing at an extracted drug), render ONE pinned
  header option above the matches — styled after the drug page's own header: the generic
  name in title case, the ATC code, and the matched alias when it drove the hit
  ("Plavix → clopidogrel · B01AC"), linking `#/drugs/drug_clopidogrel/`. It is the first
  `role=option`, so the keyboard reaches it without special cases. The remaining matches
  list unchanged (papers, genes, parameters, classes).
  Unextracted-ATC drug rows (`detail` says "not extracted yet") do NOT get a header —
  they land on the class worklist as today.
- **Keyboard model (the issue-5 core):** the input becomes a combobox:
  `role=combobox` + `aria-expanded` + `aria-controls="pks-res"` + `aria-activedescendant`;
  the results list becomes `role=listbox` with `role=option` items (stable ids for
  `aria-activedescendant`); `↓`/`↑` move the active option (highlighted, scrolled into
  view), `Home`/`End` reach the ends, `Enter` opens the active option (the drug header
  included), `Escape` clears and closes and returns focus to the input, `Tab` closes
  without opening. The `.pks-hint` becomes `role=status`.
- Pointer behavior unchanged; clicking an option opens and clears as today.

**C. Query page** (`pk-query-page.js` + the `#pkq-ui` markup in `query.md`)
- ARIA parity: the input keeps its `aria-label`; a visually-hidden submit form wrapper
  (`role=search`), and `#pkq-status` becomes `role=status` + `aria-live=polite` so the
  "Loading the query engine…" / pending / error states announce. Focus-visible styles on
  input and Ask button.
- **Drug quick-card on an exact name ask:** when the submitted text resolves through
  `drug` OR `drug_alias` (already in the loaded DB — one small query) to exactly one drug,
  prepend a header card to the answer turn — same presentation as B, plus a note line
  ("you typed a brand") when an alias drove it — linking `#/drugs/<slug>/`. The
  deterministic answer still runs below it (the drug name is also a data question).
- **The README box is covered by the redirect, not by new front-page code.** `pk-home-search`
  onsubmit is a pure `location.hash = '#/query?ask=…'` redirect (no SQLite on the landing
  page), and `askFromHash()` auto-runs a prefilled question once `/query` loads its
  database — so a brand typed on the front page ("Glucophage", "plavix") flows through the
  same quick-card end to end. The README box gets only the same ARIA/CSS treatment:
  `role=search` on the form in `README-template.md` and the shared focus-visible style.

**D. CSS** (`site.css` for `.pks`, `query.css` for `#pkq-*`)
- active-option highlight (`.pks-res [aria-selected="true"]` — the `#eef6ff` the record
  panel already uses), drug-header card (name row + ATC/alias detail), `:focus-visible`
  outlines on the input, results, and Ask button.

**E. Verification**
- Export unit test (item A) via pytest.
- Both smoke ports gain: type `plavix` in the sidebar box → the header card is the first
  option and Enter lands on `#/drugs/drug_clopidogrel/` (h1 clopidogrel); `↓`/`↑` move the
  highlighted option with `aria-activedescendant` tracking; Escape clears. Query: ask
  `plavix` → the turn carries the drug quick-card; `#pkq-status` has `role=status`; and
  the README chain: type `Glucophage` in `pk-home-search` → lands on `#/query?ask=…` with
  the same quick-card.
- check-site untouched (no new module; the rebuilt `data/*.sqlite` ships via the data
  cycle's pages).

## Order

A (export pass + test, lands in the pending data cycle) → B → C → D → E; B and C ride
behind nothing and can ship alone (the header logic simply doesn't fire on brand terms
until A is built).
## Status — implemented (2026-11-04)

- **A:** `export/sqlite.py:_build_search` now indexes `drug_alias` (brands + salts) into
  `search_doc` — one pass, `detail = '<kind> name · <generic>'`, `href = drugs/<slug>/`;
  pinned by `test/test_export_search.py`. The shipped query DB was rebuilt and republished
  via the docs build's own publisher (`_publish_database`, content-hash-churns
  `data/latest.json`): 18.7 MB, kinds now atc 246 / drug 5137 / brand 16164 / synonym 6998 /
  gene 1959 / paper 10195 / parameter 959.
- **B:** `pk-sidebar-search.js` is a combobox (`role=combobox`, `aria-expanded`,
  `aria-controls`, `aria-activedescendant`, `role=listbox`/`option`, `role=status` hint):
  `↓`/`↑`/`Home`/`End`/`Enter`/`Escape`, pointer behavior unchanged. An exact drug name,
  salt or brand pins the drug page's header card as the FIRST option — title-cased
  generic, ATC, "— you typed the brand plavix" — one card per drug; several drugs sharing
  an alias stay a plain list; unextracted-ATC rows never get one. The card is one more
  option, so the keyboard reaches it without special cases.
- **C:** `pk-query-page.js` resolves an exact name/brand in `ask()` and prepends the same
  card to the answer turn (the deterministic answer still runs underneath — the drug name
  is also a data question). `query.md` got `role=search` on the controls and
  `role=status`/`aria-live` on the status line; `README-template.md`'s form got
  `role=search` (the box itself stays the zero-data redirect — a brand typed on the front
  page surfaces through `askFromHash()` at /query).
- **D:** `site.css` (header card, active-option highlight, focus-visible) and `query.css`
  (quick-card, focus-visible).
- **E:** the Python smoke port gained three scenario blocks — front-page brand redirect,
  sidebar `plavix` card + combobox keys + Escape, query `plavix` card — and the whole
  14-step suite ran green; `tests/browser-smoke.cjs` carries the same assertions. Two
  bugs were caught and fixed by those runs: the quick-card keyed its dedupe on the
  LABEL column after the SELECT gained `label` (so the card silently went null on brand
  asks), and the smoke itself raced the previous search's card in the DOM.
- Note remembered: `_publish_database` runs in the drug-pass tail (line ~714 of
  build_docs_set), so the alias rows re-publish with the normal docs cycle; the manual
  publish here was only so the site could ship before the runs finish.
