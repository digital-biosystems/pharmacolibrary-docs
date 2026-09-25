<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;etirinotecan pegol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;EtirinotecanPegol_Sy2018_population_parameter_estimate_se&quot;,&quot;label&quot;:&quot;Sy_2018_population_parameter_estimate_se&quot;,&quot;href&quot;:&quot;drugs/drug_etirinotecan_pegol/EtirinotecanPegol_Sy2018_population_parameter_estimate_se.md&quot;,&quot;status&quot;:&quot;not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;EtirinotecanPegol_Sy2018_parameter&quot;,&quot;label&quot;:&quot;Sy_2018_parameter&quot;,&quot;href&quot;:&quot;drugs/drug_etirinotecan_pegol/EtirinotecanPegol_Sy2018_parameter.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# etirinotecan pegol

- **generic name:** etirinotecan pegol
- **ATC codes:** `L01CE03`
- **DrugBank:** [DB14951](https://go.drugbank.com/drugs/DB14951)
- **groups:** investigational

## About

**Description.** Etirinotecan pegol is under investigation in clinical trial NCT01663012 (Phase II NKTR-102 In Bevacizumab-Resistant High Grade Glioma).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 09:21 | 3:50 | 1/1/0 | 0/0/0 | 0/0/0 | 46,865/8,499 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">not simulated</span> | [Sy_2018_population_parameter_estimate_se](drugs/drug_etirinotecan_pegol/EtirinotecanPegol_Sy2018_population_parameter_estimate_se.md) | Sy SKB et al., Integrated population pharmacokinetics…, Cancer chemotherapy and pha… (2018) | [10.1007/s00280-018-3562-3](https://doi.org/10.1007/s00280-018-3562-3) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: split column 'parameter' is a table statistic/structure column, not a study pop…</sub><br><sub>route_to: `human_review`</sub> | [Sy_2018_parameter](drugs/drug_etirinotecan_pegol/EtirinotecanPegol_Sy2018_parameter.md) | Sy SKB et al., Integrated population pharmacokinetics…, Cancer chemotherapy and pha… (2018) | [10.1007/s00280-018-3562-3](https://doi.org/10.1007/s00280-018-3562-3) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=etirinotecan_pegol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TOP1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Shah_2018 | not_relevant | 0 | 0 | The text is a general review of breast cancer brain metastases treatments and does not contain specific data, models, or numeric parameters for etirinotecan pegol. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-15 09:19 UTC</sub>
