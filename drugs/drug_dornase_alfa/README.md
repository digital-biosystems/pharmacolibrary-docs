<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05C&quot;,&quot;href&quot;:&quot;atc/R05C.md&quot;},{&quot;label&quot;:&quot;Dornase alfa&quot;}]"></div>

# Dornase alfa

- **generic name:** Dornase alfa
- **ATC codes:** `R05CB13`
- **DrugBank:** [DB00003](https://go.drugbank.com/drugs/DB00003) · **PubChem:** none
- **groups:** approved, investigational

## About

Dornase alfa is an inhaled mucolytic enzyme used to thin mucus in the airways of people with cystic fibrosis. It is an approved medicine, widely used as a maintenance inhalation treatment in cystic fibrosis care.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.40).">human + animal</span> | [Aksenova_2024_purulent_sputum_of_patients](drugs/drug_dornase_alfa/pd_Aksenova_2024_purulent_sputum_of_patients.md) | purulent sputum of patients biomarker turnover ← dornase_alfa | — | Aksenova MS et al., A Study of the Comparability of the Pha…, Doklady. Biochemistry and b… (2024) | [10.1134/S1607672924701151](https://doi.org/10.1134/S1607672924701151) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dornase_alfa).

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
| 2026-10-07 22:54 | 4:13 | 0/0/0 | 0/1/0 | 0/0/0 | 82,789/1,361 | einfracz / qwen3.8-27b | 7 | 0/5 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 47 matched, 25 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amelina_2021 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial for dornase alfa in cystic fibrosis patients, reporting lung function outcomes (FEV1, FVC) rather than pharmacokinetic parameters (clearance, volume, half-life). |
| popPK | Baldo_2015 | irrelevant | 0 | 0 | The paper is a review of approved enzyme therapies discussing mechanisms and adverse effects, but it does not contain quantitative pharmacokinetic parameters (CL, V, half-life) for dornase alfa. |
| popPK | Hall_2021 | irrelevant | 0 | 0 | The paper is a review discussing the general challenges of inhaled biologics and does not report any quantitative pharmacokinetic parameters for dornase alfa. |
| PGx | Hardaker_2019 | not_relevant | 0 | 0 | The paper investigates lung function outcomes in CF patients and notes an association with dornase alfa usage, but it does not report any pharmacokinetic or pharmacodynamic changes driven by a specific gene variant or genotype. |
| PGx | Jiang_2026 | not_relevant | 0 | 0 | The study investigates the therapeutic efficacy of dornase alfa in treating heterotopic ossification via extracellular trap clearance, not the impact of human genetic variants on the drug's pharmacokinetics or pharmacodynamics. |
| popPK | McCoy_2021 | irrelevant | 0 | 0 | The paper is a bioinformatics study on drug repurposing for COVID-19 and does not mention dornase alfa or contain any pharmacokinetic data. |
| PGx | Sheikh_2025 | not_relevant | 2 | 1 | The study reports clinical outcomes of ETI therapy in CF, noting the *discontinuation* of concomitant dornase alfa, but does not report pharmacokinetic or pharmacodynamic parameters of dornase alfa modified by genotype. |
| PGx | Sheikh_2026 | not_relevant | 0 | 0 | The paper focuses on the efficacy of elexacaftor-tezacaftor-ivacaftor, and dornase alfa is only mentioned as an adjunctive therapy whose usage decreased; no pharmacogenomic effect on dornase alfa's PK/PD is reported. |
| PGx | Stamm_2024 | not_relevant | 0 | 0 | The paper describes the engineering of a modified version of dornase alfa (PASylated) using PASylation technology, not a pharmacogenomic study involving human gene variants affecting PK/PD. |
| popPK | Stern_2024 | irrelevant | 0 | 0 | The paper is a tissue engineering study on skin decellularization where dornase alfa (Pulmozyme) is used as a reagent, not as the subject of pharmacokinetic analysis. |
| PGx | unknown_2023 | not_relevant | 0 | 0 | This is a clinical consensus guideline for Cystic Fibrosis and does not report any pharmacogenomic studies or PK/PD parameter data for dornase alfa. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdornase_alfa%5D&body=Drug%3A%20dornase_alfa%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dornase_alfa/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
