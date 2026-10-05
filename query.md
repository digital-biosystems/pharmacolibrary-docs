<!-- AUTOGEN:none — this page is hand-written scaffolding, copied to the site by _seed_scaffold -->

# Ask the data

<div id="pkq" class="pkq-chat">
  <div id="pkq-status" class="pkq-status">Loading the knowledge database…</div>
  <div id="pkq-ui" hidden>
    <div id="pkq-log" class="pkq-log" aria-live="polite"></div>
    <div id="pkq-llmbox" class="pkq-llmbox" hidden>
      <p>A small language model can read questions the keywords miss and answer in prose. It runs on your GPU (WebGPU) and downloads once into this browser; nothing is sent anywhere. It never supplies a number: values come from the database, and a sentence with a number the rows do not hold is dropped.</p>
      <p class="pkq-row"><select id="pkq-llm-model" aria-label="Model"></select><button id="pkq-llm-load" class="pkq-btn" type="button">Download and enable</button></p>
      <p id="pkq-llm-status" class="pkq-meta" aria-live="polite"></p>
    </div>
    <div class="pkq-bar">
      <button id="pkq-mode" class="pkq-mode" type="button" aria-expanded="false" title="Language model (optional)">keywords</button>
      <input id="pkq-ask" type="text" enterkeyhint="send" placeholder="Ask about a drug, a parameter, a gene…" autocomplete="off" aria-label="Your question">
      <button id="pkq-askbtn" class="pkq-send" type="button" aria-label="Ask">Ask</button>
    </div>
  </div>
</div>

## Local knowledge database content

Answers come from one SQLite file (~8 MB) that your browser downloads once and queries
itself — no server, nothing sent. Literature data, not medical advice.

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
