<!-- AUTOGEN:none — this page is hand-written scaffolding, copied to the site by _seed_scaffold -->

# Query the data

Every extracted parameter, with the paper it came from. The whole database is a
**single 3.9 MB file** your browser downloads once and queries itself — nothing is sent
anywhere, and there is no server to be down.

<div id="pkq">
  <div id="pkq-status" class="pkq-status">Loading the query engine…</div>
  <div id="pkq-ui" hidden>
    <p class="pkq-canned">
      <button class="pkq-btn" data-q="param">absorption rate of a drug</button>
      <button class="pkq-btn" data-q="pdpk">PD models driven by a PK model</button>
      <button class="pkq-btn" data-q="dose">dose-response PD models</button>
      <button class="pkq-btn" data-q="pgx">PGx acting on PK or PD</button>
      <button class="pkq-btn" data-q="gapfill">values taken from a review, not the paper</button>
      <button class="pkq-btn" data-q="disagree">drugs where papers disagree &gt;2&times; on CL/F</button>
    </p>
    <p class="pkq-row">
      <label for="pkq-drug">drug</label>
      <input id="pkq-drug" list="pkq-drugs" placeholder="tolvaptan" autocomplete="off">
      <datalist id="pkq-drugs"></datalist>
      <label for="pkq-code">parameter</label>
      <input id="pkq-code" list="pkq-codes" placeholder="absorption rate constant" autocomplete="off">
      <datalist id="pkq-codes"></datalist>
    </p>
    <textarea id="pkq-sql" rows="6" spellcheck="false"></textarea>
    <p class="pkq-row">
      <button id="pkq-run" class="pkq-btn pkq-run">Run</button>
      <span id="pkq-meta" class="pkq-meta"></span>
    </p>
    <div id="pkq-out"></div>
  </div>
</div>

## What is in it

| table | rows | what it holds |
|---|---|---|
| `drug` | 588 | generic name, ATC codes, drug or toxin |
| `paper` | 3,144 | title, year, DOI, PMID per source paper |
| `record` | 6,952 | one per extracted model: domain, population, status, `model_id` |
| `parameter` | 23,327 | value, `value_si` + `unit_si`, units, origin paper, `link_method` |
| `pd_record` | 4,024 | model family, effect form, **`driver_kind`** — how a PD model attaches to PK |
| `pgx_record` | 1,434 | gene, mechanism, **`applies_to`**, the Q-code it modifies |
| `qcode` | 149 | the PK ontology, with 740 synonyms |

`value_si` is in **SI base units** — `unit_si` names which (`m3/s` for a clearance, `m3`,
`1/s`, `s`). That is *not* `unit_canonical`, which is the display unit (`L/h`): the two differ
by orders of magnitude, so quote `value` with `unit_verbatim` and use `value_si` only to compare
across papers.

`link_method` is worth knowing: `exact` means the value was read from that paper,
`review_gapfill` means it was borrowed from a review because the paper lacked it. A number
and its provenance travel together here, because one without the other is not evidence.

The same file is downloadable: **[pharmacolibrary.sqlite](data/latest.json)** (see `data/`).
