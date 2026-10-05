<!-- AUTOGEN:none — this page is hand-written scaffolding, copied to the site by _seed_scaffold -->

# Query the data

Every extracted parameter, with the paper it came from. The whole database is a
**single ~8 MB file** your browser downloads once and queries itself — nothing is sent
anywhere, and there is no server to be down.

Ask in words, or write SQL. A question is matched against the database's own names — drugs,
brands and synonyms, parameters, genes, who was studied — and turned into a query; the answer
is the rows that come back, and the SQL it ran is in the editor below, to read or change. No language model is
involved unless you switch one on below, and even then it only reads the question: what is
not in the extraction comes back as no rows. This is literature data, not medical advice.

<div id="pkq">
  <div id="pkq-status" class="pkq-status">Loading the query engine…</div>
  <div id="pkq-ui" hidden>
    <p class="pkq-row pkq-askrow">
      <input id="pkq-ask" type="search" placeholder="clearance of metformin · CYP2C19 and clopidogrel · PD models of warfarin" autocomplete="off" aria-label="Ask a question about the data">
      <button id="pkq-askbtn" class="pkq-btn pkq-run" type="button">Ask</button>
    </p>
    <details id="pkq-llm" class="pkq-llm">
      <summary>Read questions with a language model — optional, runs in your browser</summary>
      <p class="pkq-meta">Keywords answer most questions. A small model reads the rest: paraphrases ("how fast is it cleared"), counts and rankings (it writes the SQL, which is checked read-only). It runs on your own GPU (WebGPU); the weights download once from Hugging Face and stay in this browser. It never supplies a number: values come from the database, and an explanation sentence with a number the rows do not contain is dropped.</p>
      <p class="pkq-row">
        <select id="pkq-llm-model" aria-label="Model"></select>
        <button id="pkq-llm-load" class="pkq-btn" type="button">Download and enable</button>
        <label><input id="pkq-llm-explain" type="checkbox"> add a short explanation (its numbers are checked against the rows)</label>
      </p>
      <p id="pkq-llm-status" class="pkq-meta" aria-live="polite"></p>
    </details>
    <div id="pkq-understood" class="pkq-chips" aria-live="polite"></div>
    <p id="pkq-answer" class="pkq-answer" aria-live="polite" hidden></p>
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
| `drug` | 869 | generic name, ATC codes, drug or toxin |
| `paper` | 3,990 | title, year, DOI, PMID per source paper |
| `record` | 8,087 | one per extracted model: domain, population, status, `model_id` |
| `parameter` | 28,196 | value, `value_si` + `unit_si`, units, origin paper, `link_method` |
| `pd_record` | 3,697 | model family, effect form, the response (`biomarker`), **`driver_kind`** — how a PD model attaches to PK |
| `pgx_record` | 2,239 | gene, mechanism, **`applies_to`**, the Q-code it modifies |
| `qcode` | 158 | the PK ontology, with 849 synonyms |
| `drug_alias` | 11,559 | brand names and synonyms → the drug (a brand of several drugs is listed under each) |
| `search_doc` | 11,757 | every name the sidebar search knows, including drugs not extracted yet |

`value_si` is in **SI base units** — `unit_si` names which (`m3/s` for a clearance, `m3`,
`1/s`, `s`). That is *not* `unit_canonical`, which is the display unit (`L/h`): the two differ
by orders of magnitude, so quote `value` with `unit_verbatim` and use `value_si` only to compare
across papers.

`link_method` is worth knowing: `exact` means the value was read from that paper,
`review_gapfill` means it was borrowed from a review because the paper lacked it. A number
and its provenance travel together here, because one without the other is not evidence.

The same file is downloadable: **[pharmacolibrary.sqlite](data/latest.json)** (see `data/`).
