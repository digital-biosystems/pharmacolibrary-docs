<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;sevelamer&quot;}]"></div>

# sevelamer

- **generic name:** sevelamer
- **ATC codes:** `V03AE02`
- **DrugBank:** [DB00658](https://go.drugbank.com/drugs/DB00658) · **PubChem:** [CID 3085017](https://pubchem.ncbi.nlm.nih.gov/compound/3085017)
- **molar mass:** 149.619 g/mol (C6H12ClNO) — DrugBank
- **groups:** approved, investigational

## About

Sevelamer is a phosphate-binding (chelating) agent used to treat high blood phosphate levels in people with chronic kidney disease. It is authorised in the European Union for controlling hyperphosphatemia in patients on dialysis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q904153](https://www.wikidata.org/wiki/Q904153) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:59 | 0:15 | 0/0/0 | 0/0/0 | 0/0/0 | 22,792/381 | ollama / glm-5.3-flash | 1 | 1/0 | 0/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sevelamer) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: Phosphate (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dhungana_2025 | irrelevant | 1 | 0 | This is a scoping review of pCS reduction strategies where sevelamer is only a comparator; no PK disposition parameters for sevelamer are reported. |
| popPK | Rekić_2021 | irrelevant | 0 | 0 | This is a population PK study of roxadustat; sevelamer is only a co-administered phosphate binder investigated as a covariate, with no sevelamer PK parameters reported. |
| popPK | Sprague_2016 | irrelevant | 0 | 0 | Pharmacodynamic study of phosphate binders on iPTH; no PK parameters for sevelamer reported. |
| popPK | Takada_2022 | irrelevant | 0 | 0 | Sevelamer is only a covariate in a roxadustat PK/PD model; no sevelamer PK parameters are reported. |
| popPK | de_2025 | irrelevant | 0 | 0 | The evidence contains only ICMJE disclosure forms for a rat osteomalacia study; no sevelamer PK parameters or numeric values appear. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
