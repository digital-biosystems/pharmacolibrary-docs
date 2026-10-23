<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Cagrilintide&quot;}]"></div>

# Cagrilintide

- **generic name:** Cagrilintide
- **ATC codes:** none (no WHO ATC code)
- **DrugBank:** [DB18887](https://go.drugbank.com/drugs/DB18887) · **PubChem:** none
- **groups:** investigational

## About

**Description.** Cagrilintide is under investigation in clinical trial NCT06221969 (A Research Study to See How Much Cagrisema Lowers Blood Sugar and Body Weight Compared to Tirzepatide in People With Type 2 Diabetes Treated With Metformin With or Without an SGLT2 Inhibitor).

<p><small>Source: <a href="https://go.drugbank.com/drugs/DB18887">DrugBank DB18887</a> · <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a></small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Al-Harbi_2025_weight_loss](drugs/drug_cagrilintide/pd_Al_Harbi_2025_weight_loss.md) | name ← amycretin · direct Emax (saturable) effect | — | Al-Harbi FA et al., Synthetic target trial emulation and pr…, Metabolism open (2025) | [10.1016/j.metop.2025.100414](https://doi.org/10.1016/j.metop.2025.100414) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-26 21:11 | 11:02 | 0/0/0 | 0/1/0 | 0/0/0 | 165,141/5,385 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 3/3 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Harbi_2025 | irrelevant | 1 | 0 | The paper is a synthetic target trial emulation and predictive modeling study focused on efficacy and safety outcomes, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, Q, ka) for cagrilintide. |
| popPK | Lau_2021 | irrelevant | 2 | 1 | The paper is a clinical efficacy/safety trial for weight loss that only mentions a half-life of ~180 hours in passing, without reporting quantitative disposition parameters (CL, V, Q, ka) or a compartmental/population-PK model. |
| PD | Lau_2021 | not_relevant | 2 | 0 | The text is a clinical trial protocol describing the *planned* dose-response and PK/PD modeling analyses, but it does not report the actual results, fitted models, or numeric PD parameters. |
| popPK | Ludwig_2026 | irrelevant | 0 | 0 | The paper is a mechanistic neuroanatomy study using cagrilintide to identify neural mediators in the brainstem, and it does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for the drug. |
| PD | Ludwig_2026 | not_relevant | 1 | 0 | The paper is a mechanistic study using transcriptomics and neuroanatomy to identify neural mediators of cagrilintide; it does not report pharmacokinetic data, exposure-response modeling, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Min_2025 | irrelevant | 0 | 0 | The paper is a review of GLP-1 RAs (exenatide, liraglutide, etc.) and does not mention cagrilintide. |
| PD | Min_2025 | not_relevant | 0 | 0 | The paper is a review of GLP-1 RAs and tirzepatide, focusing on PK and DDIs; it does not mention cagrilintide or report any PD parameters for it. |
| popPK | Nong_2026 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy and safety outcomes (weight loss, adverse events) for obesity drugs, not a pharmacokinetic study, and contains no PK parameters for cagrilintide. |
| PD | Nong_2026 | not_relevant | 1 | 0 | The paper is a systematic review and network meta-analysis of clinical outcomes (benefits/harms) for obesity drugs, not a pharmacokinetic/pharmacodynamic modeling study; it does not report specific exposure-response or dose-response PD parameters (e.g., Emax, EC50) for cagrilintide. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcagrilintide%5D&body=Drug%3A%20cagrilintide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cagrilintide/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
