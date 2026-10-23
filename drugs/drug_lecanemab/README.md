<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;lecanemab&quot;}]"></div>

# lecanemab

- **generic name:** lecanemab
- **ATC codes:** `N06DX04`
- **DrugBank:** [DB14580](https://go.drugbank.com/drugs/DB14580) · **PubChem:** none
- **groups:** approved, investigational

## About

Lecanemab is a monoclonal antibody used to treat Alzheimer's disease. It is authorised in the European Union and is an approved anti-dementia medicine, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q56274769](https://www.wikidata.org/wiki/Q56274769) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 1.6 | L/h | 1.60 L/h | subjects with early Alzheimer's disease (MCI or mild dementia) | 1619 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Majid_2024_reference](drugs/drug_lecanemab/Lecanemab_Majid2024_reference.md) |
| V | V1 | 0.799 | L | 0.799 L | subjects with early Alzheimer's disease (MCI or mild dementia) | 1619 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Majid_2024_reference](drugs/drug_lecanemab/Lecanemab_Majid2024_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q31 — no SI value to build from</sub> | [Majid_2024_reference](drugs/drug_lecanemab/Lecanemab_Majid2024_reference.md) | — | 2-compartment (no model) | 6 (+6 cov.) | Majid O et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13224](https://doi.org/10.1002/psp4.13224) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Hayato_2022_reference](drugs/drug_lecanemab/Lecanemab_Hayato2022_reference.md) | — | 2-compartment (no model) | 5 (+6 cov.) | Hayato S et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12862](https://doi.org/10.1002/psp4.12862) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Lim_2025_reference](drugs/drug_lecanemab/Lecanemab_Lim2025_reference.md) | — | 2-compartment (no model) | 3 | Lim S et al., Sex differences in efficacy/safety of a…, Translational and clinical… (2025) | [10.12793/tcp.2025.33.e19](https://doi.org/10.12793/tcp.2025.33.e19) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Bhagunde_2026_2_A_42_40](drugs/drug_lecanemab/pd_Bhagunde_2026_2_A_42_40.md) | plasma Aβ42/40 ratio ← lecanemab · indirect response — drug stimulates the production of plasma Aβ42/40 ratio | — | Bhagunde P et al., Pharmacokinetic/pharmacodynamic analyse…, Alzheimer's & dementia (New… (2026) | [10.1002/trc2.70246](https://doi.org/10.1002/trc2.70246) |
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Bhagunde_2026_2_p_tau181](drugs/drug_lecanemab/pd_Bhagunde_2026_2_p_tau181.md) | plasma p-tau181 ← lecanemab · indirect response — drug inhibits the production of plasma p-tau181 | — | Bhagunde P et al., Pharmacokinetic/pharmacodynamic analyse…, Alzheimer's & dementia (New… (2026) | [10.1002/trc2.70246](https://doi.org/10.1002/trc2.70246) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hayato_2022_A_42_40_ratio](drugs/drug_lecanemab/pd_Hayato_2022_A_42_40_ratio.md) | plasma Aβ42/40 ratio ← lecanemab · indirect response — drug stimulates the production of plasma Aβ42/40 ratio | — | Hayato S et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12862](https://doi.org/10.1002/psp4.12862) |
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Hayato_2022_SUVr](drugs/drug_lecanemab/pd_Hayato_2022_SUVr.md) | amyloid PET standard uptake ratio ← lecanemab · indirect response — drug stimulates the loss of amyloid PET standard uptake ratio | — | Hayato S et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12862](https://doi.org/10.1002/psp4.12862) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hayato_2022_p_tau181](drugs/drug_lecanemab/pd_Hayato_2022_p_tau181.md) | plasma p‐tau181 ← lecanemab · indirect response — drug inhibits the production of plasma p‐tau181 | — | Hayato S et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12862](https://doi.org/10.1002/psp4.12862) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Majid_2024_ARIA_E](drugs/drug_lecanemab/pd_Majid_2024_ARIA_E.md) | incidence of ARIA-E (amyloid-related imaging abnormalities–edema/effusion) ← lecanemab · direct linear effect | — | Majid O et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13224](https://doi.org/10.1002/psp4.13224) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [van_2025_CL](drugs/drug_lecanemab/pd_van_2025_CL.md) | Amyloid plaque burden (amyloid PET, Centiloid) ← lecanemab · indirect response — drug stimulates the loss of Amyloid plaque burden (amyloid PET, Centiloid) | — | van Maanen E et al., Modeling amyloid plaque turnover dynami…, Alzheimer's & dementia (New… (2025) | [10.1002/trc2.70169](https://doi.org/10.1002/trc2.70169) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Bhagunde_2026_2_GFAP](drugs/drug_lecanemab/pd_Bhagunde_2026_2_GFAP.md) | plasma GFAP ← relative decrease in amyloid plaque (driven by lecanemab concentration) · indirect response — drug inhibits the production of plasma GFAP | — | Bhagunde P et al., Pharmacokinetic/pharmacodynamic analyse…, Alzheimer's & dementia (New… (2026) | [10.1002/trc2.70246](https://doi.org/10.1002/trc2.70246) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lecanemab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: APP (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:00 | 8:01 | 1/2/0 | 4/0/0 | 0/0/0 | 405,776/25,382 | ollama / glm-5.3-flash | 11 | 1/10 | 11/0 | 0 |

## Coverage

- **PubMed hits:** 19 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bhagunde_2026 | irrelevant | 4 | 2 | This is a PK/PD disease-progression model; the lecanemab population PK parameters (2-compartment model) are only in supplementary Table S1, not provided in the evidence. |
| popPK | Bhagunde_2026_2 | relevant | 6 | 3 | Population PK model for lecanemab (CL, V1, V2, Q) is described but numeric parameter values are in Table S1/supplementary material not provided; only PD biomarker half-lives appear. |
| popPK | Bregman_2025 | irrelevant | 0 | 0 | Real-world clinical outcomes study (MMSE, ARIA, safety) with no PK parameters such as CL, V, or half-life reported. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | Clinical efficacy/safety and biomarker study; no PK parameters (CL, V, half-life, or PK model) for lecanemab are reported. |
| popPK | Dou_2026 | irrelevant | 0 | 0 | This is an amyloid-PET imaging study of amyloid clearance (Centiloid/SUVR changes), not a pharmacokinetic study reporting CL, V, or a population-PK model for lecanemab. |
| popPK | Hartz_2024 | irrelevant | 0 | 0 | This is a clinical outcomes study of CDR-SB and independence in AD; lecanemab appears only as a treatment with published trial effect sizes, with no PK parameters (CL, V, half-life, or PK model) reported. |
| popPK | Hartz_2025 | irrelevant | 0 | 0 | Clinical meaningfulness study of CDR-SB and ADLs; no PK parameters for lecanemab are reported. |
| popPK | Li_2026 | irrelevant | 0 | 0 | MRI volumetric imaging study of lecanemab-treated AD patients; no PK parameters (CL, V, half-life, or PK model) for lecanemab are reported. |
| popPK | Lim_2025 | relevant | 6 | 4 | Review citing population PK models of lecanemab with some numeric covariate effects (F/M CL ratio 0.792, V1 0.893, AUC +26%), but full parameter values live in cited references/supplementary tables not provided. |
| popPK | van_2025 | irrelevant | 2 | 3 | This is a plaque turnover E-R model, not a PK study of lecanemab; lecanemab appears only as a comparator with an effect slope (13.8-fold Kout increase), and no lecanemab disposition parameters (CL, V, half-life) are given — details live in supplementary tables. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blecanemab%5D&body=Drug%3A%20lecanemab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lecanemab/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 02:53 UTC</sub>
