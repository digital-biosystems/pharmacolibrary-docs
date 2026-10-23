<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05C&quot;,&quot;href&quot;:&quot;atc/R05C.md&quot;},{&quot;label&quot;:&quot;dornase alfa (desoxyribonuclease)&quot;}]"></div>

# dornase alfa (desoxyribonuclease)

- **generic name:** dornase alfa (desoxyribonuclease)
- **ATC codes:** `R05CB13`
- **DrugBank:** [DB00003](https://go.drugbank.com/drugs/DB00003) · **PubChem:** none
- **groups:** approved, investigational

## About

Dornase alfa is a mucolytic drug used to treat cystic fibrosis and has also been used for acute bronchitis. It is an approved medicine, used mainly in the management of cystic fibrosis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2067922](https://www.wikidata.org/wiki/Q2067922) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Geller_1998_FEV1](drugs/drug_dornase_alfa_desoxyribonuclease/pd_Geller_1998_FEV1.md) | forced expiratory flow in 1 s biomarker turnover ← dornase alfa | — | Geller DE et al., Effect of smaller droplet size of dorna…, Pediatric pulmonology (1998) | [10.1002/(sici)1099-0496(199802)25:2&lt;83::aid-ppul2&gt;3.0.co;2-o](https://doi.org/10.1002/(sici)1099-0496(199802)25:2&lt;83::aid-ppul2&gt;3.0.co;2-o) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dornase_alfa_desoxyribonuclease).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: DNASE1 (other).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:58 | 3:58 | 0/0/0 | 1/0/0 | 0/0/0 | 134,082/1,796 | einfracz / qwen3.8-27b | 12 | 0/5 | 11/1 | 0 |

## Coverage

- **PubMed hits:** 47 matched, 43 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amelina_2021 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study (biosimilarity trial) reporting pulmonary function endpoints (FEV1, FVC), not pharmacokinetic parameters (CL, V, etc.). |
| popPK | Baldo_2015 | irrelevant | 0 | 0 | The paper is a general review of approved enzyme therapies and does not report quantitative pharmacokinetic parameters for dornase alfa. |
| popPK | Hall_2021 | irrelevant | 0 | 0 | The paper is a review focusing on toxicology and pathology challenges of inhaled biologics, and it does not contain any quantitative pharmacokinetic parameters for dornase alfa. |
| PGx | Hardaker_2019 | not_relevant | 2 | 1 | The paper associates the F508del genotype with higher dornase alfa use and lung function metrics, but does not report a pharmacokinetic or pharmacodynamic effect of the genotype on the drug itself (e.g., it does not measure drug clearance or efficacy change attributable to the gene). |
| PGx | Jiang_2026 | not_relevant | 0 | 0 | The paper investigates dornase alfa as a therapeutic for heterotopic ossification and mentions genetic knockout of DNase1, but it does not report pharmacogenomic effects of a gene variant on the PK or PD parameters of dornase alfa. |
| popPK | McCoy_2021 | irrelevant | 0 | 0 | The paper is a computational study on drug repurposing for COVID-19 and contains no pharmacokinetic data or analysis for dornase alfa. |
| PGx | Sheikh_2025 | not_relevant | 0 | 0 | The study evaluates the efficacy of ETI (a CFTR modulator) on lung function and BMI, and only notes the concomitant use/discontinuation of dornase alfa; it does not report PK or PD parameters of dornase alfa. |
| PGx | Sheikh_2026 | not_relevant | 0 | 0 | The paper studies the efficacy of elexacaftor-tezacaftor-ivacaftor (ETI) and its impact on the need for dornase alfa, but does not report how genetic variants alter the pharmacokinetics or pharmacodynamics of dornase alfa itself. |
| PGx | Stamm_2024 | not_relevant | 0 | 0 | The paper reports on the engineering of a modified Dornase alfa molecule using PASylation technology to improve PK/PD, but it does not study the effect of human gene variants or genotypes on drug response. |
| popPK | Stern_2024 | irrelevant | 0 | 0 | This is an in vitro tissue engineering study using dornase alfa (Pulmozyme) as a decellularizing enzyme, not a pharmacokinetic study measuring drug disposition. |
| PGx | unknown_2023 | not_relevant | 0 | 0 | The text is a general clinical consensus statement for cystic fibrosis diagnosis and treatment; it does not report pharmacogenomic effects on the PK/PD parameters of dornase alfa. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdornase_alfa_desoxyribonuclease%5D&body=Drug%3A%20dornase_alfa_desoxyribonuclease%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dornase_alfa_desoxyribonuclease/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
