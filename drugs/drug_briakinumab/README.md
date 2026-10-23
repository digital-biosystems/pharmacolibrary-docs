<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;briakinumab&quot;}]"></div>

# briakinumab

- **generic name:** briakinumab
- **ATC codes:** `L04AC09`
- **DrugBank:** [DB05459](https://go.drugbank.com/drugs/DB05459) · **PubChem:** none
- **groups:** investigational

## About

Briakinumab, a monoclonal antibody that blocks interleukin signalling, was investigated as a treatment for psoriasis. It was never marketed; the marketing application in the European Union was withdrawn, and it remains an investigational drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3644426](https://www.wikidata.org/wiki/Q3644426) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Checchio_2017_PASI75](drugs/drug_briakinumab/pd_Checchio_2017_PASI75.md) | PASI75 ← briakinumab · direct sigmoid Emax (Hill) effect | — | Checchio T et al., Quantitative Evaluations of Time-Course…, Clinical pharmacology and t… (2017) | [10.1002/cpt.732](https://doi.org/10.1002/cpt.732) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [He_2021_PASI75](drugs/drug_briakinumab/pd_He_2021_PASI75.md) | proportion of patients achieving ≥75% reduction from baseline Psoriasis Area and Severity Index score ← briakinumab · direct sigmoid Emax (Hill) effect | — | He H et al., Model-Based Meta-Analysis in Psoriasis:…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.586827](https://doi.org/10.3389/fphar.2021.586827) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [He_2021_PASI90](drugs/drug_briakinumab/pd_He_2021_PASI90.md) | proportion of patients achieving ≥90% reduction from baseline Psoriasis Area and Severity Index score ← briakinumab · direct sigmoid Emax (Hill) effect | — | He H et al., Model-Based Meta-Analysis in Psoriasis:…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.586827](https://doi.org/10.3389/fphar.2021.586827) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=briakinumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL12B (unknown), IL23A (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:36 | 2:21 | 0/0/0 | 2/0/0 | 0/0/0 | 89,286/2,288 | einfracz / qwen3.8-27b | 4 | 4/0 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kelly_2016.pdf` | Kelly RL et al., Target-independent variable region medi…, mAbs (2016) | popPK | 7 | [10.1080/19420862.2016.1208330](https://doi.org/10.1080/19420862.2016.1208330) | [27610650](https://pubmed.ncbi.nlm.nih.gov/27610650) | The study reports qualitative PK findings (faster clearance) for briakinumab in mice, but specific numeric parameter values are not provided in the evidence. |

<sub>queue written 2026-10-06 23:35 UTC</sub>

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbriakinumab%5D&body=Drug%3A%20briakinumab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_briakinumab/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
