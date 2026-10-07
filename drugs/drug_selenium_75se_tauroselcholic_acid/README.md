<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09D&quot;,&quot;href&quot;:&quot;atc/V09D.md&quot;},{&quot;label&quot;:&quot;selenium (75Se) tauroselcholic acid&quot;}]"></div>

# selenium (75Se) tauroselcholic acid

- **generic name:** selenium (75Se) tauroselcholic acid
- **ATC codes:** `V09DX01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Selenium tauroselcholic acid is a diagnostic radiopharmaceutical used for imaging of the liver and the reticuloendothelial system. It is classified under diagnostic radiopharmaceuticals for hepatic and reticuloendothelial system use.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:22 | 1:15 | 0/0/0 | 0/0/0 | 0/0/0 | 9,395/5,313 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Galatola_1988.pdf` | Galatola G et al., Hepatic handling of a synthetic gamma-l…, Gastroenterology (1988) | popPK | 9 | [10.1016/0016-5085(88)90253-3](https://doi.org/10.1016/0016-5085(88)90253-3) | [3338647](https://pubmed.ncbi.nlm.nih.gov/3338647) | Human subjects have reported quantitative 75SeHCAT disposition values, including plasma clearance; values are present in the evidence. |

<sub>queue written 2026-10-07T19:21:36.244150+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Galatola_1991 | irrelevant | 2 | 5 | SeHCAT is used as a diagnostic tracer to measure ileal absorption, with numeric absorption efficiencies reported but no population-PK disposition parameters. |
| popPK | Hastie_1991 | irrelevant | 1 | 1 | Clearance values are for taurocholate; SeHCAT has retention measurements but no quantitative PK disposition parameters. |
| popPK | Indovina_1987 | irrelevant | 1 | 0 | Reports SeHCAT retention percentages in patients, not quantitative pharmacokinetic disposition parameters. |
| popPK | Lembcke_1994 | irrelevant | 0 | 0 | This review only mentions 75Se-HCAT as a diagnostic test and reports no quantitative pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
