<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;briakinumab&quot;}]"></div>

# briakinumab

- **generic name:** briakinumab
- **ATC codes:** `L04AC09`
- **DrugBank:** [DB05459](https://go.drugbank.com/drugs/DB05459) · **PubChem:** not captured
- **groups:** investigational

## About

Briakinumab, a monoclonal antibody that blocks interleukin signalling, was investigated as a treatment for psoriasis. It was never marketed; the marketing application in the European Union was withdrawn, and it remains an investigational drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3644426](https://www.wikidata.org/wiki/Q3644426) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:36 | 2:21 | 0/0/0 | 1/0/1 | 0/0/0 | 89,286/2,288 | einfracz / qwen3.8-27b | 4 | 4/0 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Checchio_2017_PASI75](drugs/drug_briakinumab/pd_Checchio_2017_PASI75.md) | PASI75 ← briakinumab · direct sigmoid Emax (Hill) effect | — | Checchio T et al., Quantitative Evaluations of Time-Course…, Clinical pharmacology and t… (2017) | [10.1002/cpt.732](https://doi.org/10.1002/cpt.732) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [He_2021_PASI75](drugs/drug_briakinumab/pd_He_2021_PASI75.md) | proportion of patients achieving ≥75% reduction from baseline Psoriasis Area and Severity Index score ← briakinumab · direct sigmoid Emax (Hill) effect | — | He H et al., Model-Based Meta-Analysis in Psoriasis:…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.586827](https://doi.org/10.3389/fphar.2021.586827) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [He_2021_PASI90](drugs/drug_briakinumab/pd_He_2021_PASI90.md) | proportion of patients achieving ≥90% reduction from baseline Psoriasis Area and Severity Index score ← briakinumab · direct sigmoid Emax (Hill) effect | — | He H et al., Model-Based Meta-Analysis in Psoriasis:…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.586827](https://doi.org/10.3389/fphar.2021.586827) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=briakinumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL12B (unknown), IL23A (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kelly_2016.pdf` | Kelly RL et al., Target-independent variable region medi…, mAbs (2016) | popPK | 7 | [10.1080/19420862.2016.1208330](https://doi.org/10.1080/19420862.2016.1208330) | [27610650](https://pubmed.ncbi.nlm.nih.gov/27610650) | The study reports qualitative PK findings (faster clearance) for briakinumab in mice, but specific numeric parameter values are not provided in the evidence. |

<sub>queue written 2026-10-06T23:35:43.932619+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Checchio_2017 | irrelevant | 0 | 0 | This is a pharmacodynamic meta-analysis modeling Psoriasis Area and Severity Index (PASI) response, not a pharmacokinetic study reporting disposition parameters (CL, V, ka) for briakinumab. |
| popPK | He_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic/efficacy meta-analysis modeling PASI scores, not a pharmacokinetic study, and contains no PK parameters for briakinumab. |
| popPK | Jensen_2017 | irrelevant | 1 | 0 | This is a mechanistic/in vitro study on FcRn binding mechanisms, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, Q, ka) or compartmental models for briakinumab in vivo. |
| popPK | Kelly_2016 | relevant | 7 | 2 | The study reports qualitative PK findings (faster clearance) for briakinumab in mice, but specific numeric parameter values are not provided in the evidence. |
| popPK | Kerbusch_2020 | irrelevant | 0 | 0 | The study focuses on tildrakizumab, not briakinumab. |
| PGx | Schoch_2015 | not_relevant | 0 | 0 | The paper describes FcRn-mediated PK mechanisms of briakinumab via charge interactions, not the influence of human gene variants or genotypes. |
| popPK | Spanke_2026 | irrelevant | 0 | 0 | The paper is a computational and biophysical study on antibody framework design and developability (aggregation, viscosity, surface patches) and does not report pharmacokinetic parameters for briakinumab. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
