<!-- AUTOGEN:none — this page is hand-written scaffolding, copied to the site by _seed_scaffold -->

# Ask the data

<div id="pkq" class="pkq-chat">
  <div id="pkq-status" class="pkq-status">Loading the knowledge database…</div>
  <div id="pkq-ui" hidden>
    <div id="pkq-log" class="pkq-log" aria-live="polite"></div>
    <div class="pkq-bar">
      <select id="pkq-mode" class="pkq-mode" aria-label="How questions are read"><option value="">keywords (no LLM)</option></select>
      <label id="pkq-thinking-control" class="pkq-thinking-control" hidden><input id="pkq-thinking" type="checkbox"> Thinking</label>
      <input id="pkq-ask" type="text" enterkeyhint="send" placeholder="Ask about a drug, a parameter, a gene…" autocomplete="off" aria-label="Your question">
      <button id="pkq-askbtn" class="pkq-send" type="button" aria-label="Ask">Ask</button>
    </div>
    <p id="pkq-llmnote" class="pkq-llmnote" aria-live="polite"></p>
  </div>
</div>

## Local knowledge database content

Two SQLite files, queried in the browser with sql.js; no server. Literature data, not medical advice.

**Query database** (~8 MB, loaded with the page):

| table | rows | what it holds |
|---|---|---|
| `drug` | 869 | generic name, ATC codes, drug or toxin |
| `paper` | 3,990 | title, year, DOI, PMID per source paper |
| `record` | 8,087 | one per extracted model: domain, population, status, `model_id` |
| `parameter` | 28,196 | value, `value_si` + `unit_si`, units, origin paper, `link_method` |
| `pd_record` | 3,697 | model family, effect form, the response (`biomarker`), `driver_kind` — how a PD model attaches to PK |
| `pgx_record` | 2,239 | gene, mechanism, `applies_to`, the Q-code it modifies |
| `qcode` | 158 | the PK ontology, with 849 synonyms |
| `drug_alias` | 11,559 | brand names and synonyms → the drug |
| `search_doc` | 11,757 | every name the sidebar search knows, including drugs not extracted yet |

`value_si` is in SI base units, named by `unit_si` (`m3/s` for a clearance, `m3`, `1/s`, `s`) —
not `unit_canonical`, the display unit (`L/h`); quote `value` with `unit_verbatim`, compare across
papers with `value_si`. `link_method`: `exact` was read from that paper, `review_gapfill` was
borrowed from a review. Every answer's SQL can be opened, edited and re-run.
Download: **[pharmacolibrary.sqlite](data/latest.json)**.

**Passage database** (`knowledge-*.sqlite`, 26 MB, loaded only when a model is selected): table
`passage`, 19,690 rows for 867 drugs, FTS4 index `passage_fts` (porter).

| kind | rows | source | licence |
|---|---|---|---|
| `drugbank` | 6,745 | DrugBank: description, indication, mechanism, PD, absorption, metabolism, half-life, Vd, clearance, protein binding | CC BY-NC 4.0 |
| `guideline` | 1,996 | ClinPGx guideline annotations (CPIC, DPWG, …) | CC BY-SA 4.0 |
| `clinical` | 1,130 | ClinPGx clinical annotations, evidence level 1A–2B | CC BY-SA 4.0 |
| `abstract` | 9,819 | PubMed abstracts of the papers behind the records | per paper |

Download: **[knowledge.sqlite](data/knowledge-latest.json)**.

**Language model** (optional): WebLLM, Qwen3.5 0.8B / 4B / 9B on WebGPU, weights cached in
IndexedDB. Per question: up to 6 passages (~3,200 characters, BM25 within the named drugs) go into
the prompt, are cited as [n] and listed under the answer. A sentence with a number found in neither
the rows nor the passages is dropped. Thinking: off by default.
