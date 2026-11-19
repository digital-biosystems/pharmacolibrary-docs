# Plan — tab ARIA + keyboard (UI issue 4: "tab ARIA")

Two custom tab surfaces: record pages (`pk-record-tabs.js`, 3 tabs) and the Sites page's
views (`pk-sites-page.js`, heatmap/diagnosis/help/help tabs, rebuilt on every switch).
Both implement parts of the WAI-ARIA Tabs pattern by hand, and neither implements the
keyboard half — a mouse reader can use them, a keyboard reader cannot reach the other
tabs at all (every tab is a tab stop, and no arrow keys work).

## Current state (measured)

- record tabs: `role=tablist/tab`, `aria-selected`, `role=tabpanel`, `aria-selected`-driven
  hidden; missing: ids + `aria-controls` + `aria-labelledby`, `aria-label` on the bar,
  roving `tabindex`, all keyboard support.
- sites tabs: the roles are already right, INCLUDING the expanded mode's honest downgrade
  (the bar becomes `navigation`/`region` + links with `aria-current`); missing: roving
  `tabindex`, keyboard support, focus-visible styling.

## The fix: one helper, two surfaces

**New module `assets/js/pk-tablist.js`** (`window.pkTablist`):

```js
pkTablist.wire(bar, { panels, onSelect, label, idp, mode })   // 'auto' | 'manual' (default)
pkTablist.sync(bar)                                           // re-rove from aria-selected
```

- completes semantics: ids on every tab/panel (unique), `aria-controls` on tabs,
  `aria-labelledby` on panels, `role=tabpanel` when unset, `aria-label` on the bar;
- roving `tabindex`: the selected tab is 0, the rest −1; a `focusin` listener keeps the
  rover honest when focus arrives another way (deep-link `focus()`, click);
- keyboard on the bar: `←`/`→`/`Home`/`End` move focus among tabs; in `auto` mode
  selection follows focus (via the consumer's own `onSelect`, which keeps persistence
  owned by the consumer); in `manual` mode selection happens on the button's native
  Enter/Space click only — the Sites page redraws heavy charts on every switch;
- panel `tabindex=0` only when the panel contains no focusable element;
- idempotent — the Sites page rebuilds its tab DOM on every `tab()` call.

## Consumers

1. `pk-record-tabs.js`: `wire(bar, …, auto)` after building the panels; its `select()`
   ends with `pkTablist.sync(bar)`.
2. `pk-sites-page.js`: `wire(bar, …, manual)` inside `tab()`'s collapsed branch (the
   expanded branch is navigation, not tabs — untouched).
3. `records.css` / `sites.css`: a `:focus-visible` outline on tab buttons so keyboard
   arrival is visible.
4. `index.html`: `pk-tablist.js` in the defer list right before `pk-record-tabs.js`;
   `check-site.py`'s `MODULE_ORDER` grows by one; the CONTRIBUTING table gains a row.
5. Smoke tests (both ports): arrow to "Models" selects it and shows the panel with the
   roving `tabindex`; on Sites, `→` moves focus WITHOUT selecting until Enter.

## Verification

- `node --check` + `check-site.py` (order + no-leftovers gates) green.
- Python smoke port extended with the two keyboard scenarios, run green against a local
  server; node port gets the same assertions for its Playwright run.
- No generator or component-repo change anywhere.
## Status — implemented (2026-11-03)

- `assets/js/pk-tablist.js` is the one implementation of the keyboard + semantics half:
  ids, `aria-controls`, `aria-labelledby`, `role=tabpanel` when unset, `aria-label` on
  the bar, roving tabindex, `←`/`→`/`Home`/`End`, auto mode (record tabs: selection
  follows focus) and manual mode (Sites views: arrows move focus, the button's own
  Enter/Space click activates), panel `tabindex=0` only when the panel holds nothing
  focusable.
- Two things the implementation caught that the plan's reading of the code missed:
  the Sites page REBUILDS its tab buttons on every switch, so the helper resolves the
  live tabs per keydown instead of capturing them at wire time (a captured list died
  with the replaced buttons — focus() on detached nodes is a silent no-op); and the
  bar element persists across switches, so wire() is idempotent (re-sync instead of a
  second listener).
- `pk-record-tabs.js` wires the bar (auto) and `sync()`s after every `select()`;
  `pk-sites-page.js` wires once and re-syncs per rebuild, collapsed branch only.
- `records.css` / `sites.css`: `:focus-visible` outlines on the tab buttons.
- `index.html`: `pk-tablist.js` in the pinned order before `pk-record-tabs.js`;
  `check-site.py`'s module list asserts it; CONTRIBUTING's table has the row.
- Both smoke ports gained the keyboard scenarios (node + the Python port here); the
  Python whole-suite run is green end to end.
- `check-site.py --generated` gained a warning lane for drug-record links that go stale
  while a panel run is live (they clear at the next drug render) — today it reports the
  2 metformin links whose records became directory-form mid-run.
