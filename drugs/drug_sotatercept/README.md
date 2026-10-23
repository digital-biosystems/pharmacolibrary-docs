<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;sotatercept&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sotatercept_AitOudhia2024_reference&quot;,&quot;label&quot;:&quot;Ait-Oudhia_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# sotatercept

- **generic name:** sotatercept
- **ATC codes:** `C02KX06`
- **DrugBank:** [DB12118](https://go.drugbank.com/drugs/DB12118) · **PubChem:** none
- **groups:** approved, investigational

## About

Sotatercept is a fusion-protein medication used to treat pulmonary arterial hypertension. It is an approved drug and is used for pulmonary hypertension, classified among antihypertensives for pulmonary arterial hypertension.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q103815273](https://www.wikidata.org/wiki/Q103815273) and the WHO ATC classification; not checked by a person.</small>

## Start here

> **Ait-Oudhia_2024_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> healthy participants and patients with pulmonary arterial hypertension, n = 350. [Run it in the simulator](drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference.md?tab=Simulation) · [record](drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.2592 | L/h | 6.22 L/day | healthy participants and patients with pulmonary arterial hypertension | 350 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Ait-Oudhia_2024_reference](drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference.md) |
| V | V1 | 5.5 | L | 5.50 L | healthy participants and patients with pulmonary arterial hypertension | 350 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Ait-Oudhia_2024_reference](drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference.md) |
| ka | kabs | 16 | 1/h | 16.0 1/h | healthy participants and patients with pulmonary arterial hypertension | 350 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Ait-Oudhia_2024_reference](drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference.md) |
| F | Fab | 0.0629 |  | 6.29 | healthy participants and patients with pulmonary arterial hypertension | 350 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Ait-Oudhia_2024_reference](drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>stale — current check: Not simulated</sub> | [Ait-Oudhia_2024_reference](drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+3 cov.) | Ait-Oudhia S et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13166](https://doi.org/10.1002/psp4.13166) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ait-Oudhia_2025_6MWD](drugs/drug_sotatercept/pd_Ait_Oudhia_2025_6MWD.md) | 6-minute walk distance ← sotatercept · direct Emax (saturable) effect | — | Ait-Oudhia S et al., Population Pharmacokinetic/Pharmacodyna…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3524](https://doi.org/10.1002/cpt.3524) |
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Ait-Oudhia_2025_PVR](drugs/drug_sotatercept/pd_Ait_Oudhia_2025_PVR.md) | pulmonary vascular resistance ← sotatercept · direct linear effect | model (no simulator) | Ait-Oudhia S et al., Population Pharmacokinetic/Pharmacodyna…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3524](https://doi.org/10.1002/cpt.3524) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Ait-Oudhia_2025_Hgb](drugs/drug_sotatercept/pd_Ait_Oudhia_2025_Hgb.md) | hemoglobin ← sotatercept · direct sigmoid Emax (Hill) effect | model (no simulator) | Ait-Oudhia S et al., Population Pharmacokinetic/Pharmacodyna…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3524](https://doi.org/10.1002/cpt.3524) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Ait-Oudhia_2025_NT_proBNP](drugs/drug_sotatercept/pd_Ait_Oudhia_2025_NT_proBNP.md) | time to NT‐proBNP &lt; 300 pg/mL ← sotatercept · time-to-event model | — | Ait-Oudhia S et al., Population Pharmacokinetic/Pharmacodyna…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3524](https://doi.org/10.1002/cpt.3524) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Sherman_2013_hemoglobin](drugs/drug_sotatercept/pd_Sherman_2013_hemoglobin.md) | hemoglobin biomarker turnover ← sotatercept | — | Sherman ML et al., Multiple-dose, safety, pharmacokinetic,…, Journal of clinical pharmac… (2013) | [10.1002/jcph.160](https://doi.org/10.1002/jcph.160) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sotatercept).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ACVR1B (binder), ACVR2A (binder), GDF11 (binder), MSTN (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:32 | 2:12 | 1/0/0 | 1/1/0 | 0/0/0 | 88,057/7,733 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Ait-Oudhia_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling and does not report pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Ait-Oudhia_2025 | irrelevant | 3 | 1 | The paper describes exposure-response (E-R) and PK/PD models for efficacy and safety endpoints but does not report the structural population PK parameters (CL, V, Q, ka) or a standalone population PK model for sotatercept. |
| PGx | Bose_2019 | not_relevant | 0 | 0 | The paper is a review of myelofibrosis treatments and does not mention sotatercept, genetic variants, or pharmacokinetic parameters. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy that does not report any quantitative pharmacokinetic parameters for sotatercept. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain any specific data, analysis, or numeric parameters for sotatercept. |
| popPK | Coyne_2019 | irrelevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes (hemoglobin, bone density, vascular calcification) but contains no pharmacokinetic parameters or disposition data for sotatercept. |
| PGx | Miranda_2025 | not_relevant | 0 | 0 | The paper states that BMPR2 genetic variant status was not associated with significant differences in treatment effects, reporting a lack of pharmacogenomic effect rather than describing a specific PK/PD parameter modification. |
| popPK | Rothman_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of imatinib, not sotatercept. |
| popPK | Sherman_2013 | relevant | 8 | 2 | The paper is a PK study of sotatercept reporting a terminal half-life, but lacks other quantitative disposition parameters like clearance or volume of distribution in the provided text. |
| PGx | Yoshida_2026 | not_relevant | 0 | 0 | The paper is a clinical trial protocol for sotatercept in pulmonary arterial hypertension and does not report any pharmacogenomic data or associations between genetic variants and PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsotatercept%5D&body=Drug%3A%20sotatercept%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sotatercept/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 15:30 UTC</sub>
