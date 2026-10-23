<!-- AUTOGEN:none — this page is hand-written scaffolding, copied to the site by _seed_scaffold -->

# Ask the data

<div id="pkq" class="pkq-chat">
  <div id="pkq-status" class="pkq-status">Loading the knowledge database…</div>
  <div id="pkq-ui" hidden>
    <div id="pkq-log" class="pkq-log" aria-live="polite"></div>
    <div class="pkq-bar">
      <select id="pkq-mode" class="pkq-mode" aria-label="Query interpretation"><option value="">Keyword search (no LLM)</option></select>
      <label id="pkq-thinking-control" class="pkq-thinking-control" hidden><input id="pkq-thinking" type="checkbox"> Thinking</label>
      <input id="pkq-ask" type="text" enterkeyhint="send" placeholder="Ask about a drug, a parameter, a gene…" autocomplete="off" aria-label="Your question">
      <button id="pkq-askbtn" class="pkq-send" type="button" aria-label="Ask">Ask</button>
    </div>
    <p id="pkq-llmnote" class="pkq-llmnote" aria-live="polite"></p>
  </div>
</div>

## Databases

Current file sizes, row counts and licences: [Data & downloads](data.md). Two SQLite databases are queried locally using sql.js. Results summarise literature evidence,
not medical advice.

**Query database** (~8 MB, loaded with the page):

| Table | Rows | Content |
|---|---|---|
| `drug` | 869 | Drug/toxin names and ATC codes |
| `paper` | 3,990 | Source citations: title, year, DOI, PMID |
| `record` | 8,087 | Model records: domain, population, status, `model_id` |
| `parameter` | 28,196 | Source and SI-normalised estimates, units, provenance, `link_method` |
| `pd_record` | 3,697 | Model family, effect form, biomarker, PK-driver relationship |
| `pgx_record` | 2,239 | Gene, mechanism, applicability, target Q-code |
| `qcode` | 158 | PK parameter ontology; 849 synonyms |
| `drug_alias` | 11,559 | Brand and synonym mappings |
| `search_doc` | 11,757 | Search index, including drugs without extracted records |

`value_si` uses SI units specified by `unit_si` (e.g. `m3/s` for clearance); `unit_canonical`
is the display unit (e.g. `L/h`). Cite source estimates using `value` and `unit_verbatim`;
use `value_si` for cross-study comparison. `review_gapfill` identifies secondary-review
substitutions. SQL statements can be inspected, edited, and rerun.
Download: **[pharmacolibrary.sqlite](data/latest.json)**.

**Passage database** (`knowledge-*.sqlite`, 26 MB; loaded when a language model is selected):
19,690 passages covering 867 drugs; FTS4 index `passage_fts` with Porter stemming.

| Type | Rows | Source | Licence |
|---|---|---|---|
| `drugbank` | 6,745 | DrugBank: description, indication, mechanism, PD, absorption, metabolism, half-life, Vd, clearance, protein binding | CC BY-NC 4.0 |
| `guideline` | 1,996 | ClinPGx guideline annotations (CPIC, DPWG, …) | CC BY-SA 4.0 |
| `clinical` | 1,130 | ClinPGx clinical annotations, evidence level 1A–2B | CC BY-SA 4.0 |
| `abstract` | 9,819 | PubMed abstracts of the papers behind the records | per paper |

Download: **[knowledge.sqlite](data/knowledge-latest.json)**.

**Simulation:** specify a drug and regimen, e.g. “tolvaptan 120 mg daily for 1 week”.
Up to five PK models run with source-fitted parameters using WebAssembly (horizon ≤28 days).
Results include final concentration, peak, last-interval trough, and the cross-model range.

**Language models:** optional WebLLM/Qwen3.5 models run on WebGPU; weights are cached in
IndexedDB. Responses cite up to six retrieved passages (~3,200 characters). Sentences with
numeric claims absent from the result rows and passages are excluded. Reasoning is disabled by default.
