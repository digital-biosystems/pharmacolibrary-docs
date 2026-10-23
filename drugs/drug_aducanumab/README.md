<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;aducanumab&quot;}]"></div>

# aducanumab

- **generic name:** aducanumab
- **ATC codes:** `N06DX03`
- **DrugBank:** [DB12274](https://go.drugbank.com/drugs/DB12274) · **PubChem:** none
- **groups:** approved, investigational

## About

Aducanumab is a monoclonal antibody against beta-amyloid that was developed to treat Alzheimer's disease. Its marketing application was withdrawn in the European Union, and it is not in routine use there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15708278](https://www.wikidata.org/wiki/Q15708278) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Kandadi_2022_reference](drugs/drug_aducanumab/Aducanumab_Kandadi2022_reference.md) | — | parent + metabolite (no model) | 0 (+4 cov.) | Kandadi Muralidharan K et al., Population pharmacokinetics and standar…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12728](https://doi.org/10.1002/psp4.12728) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Lim_2025_reference](drugs/drug_aducanumab/Aducanumab_Lim2025_reference.md) | — | 2-compartment (no model) | 3 | Lim S et al., Sex differences in efficacy/safety of a…, Translational and clinical… (2025) | [10.12793/tcp.2025.33.e19](https://doi.org/10.12793/tcp.2025.33.e19) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Kandadi_2022_SUVR](drugs/drug_aducanumab/pd_Kandadi_2022_SUVR.md) | composite standard uptake value ratio (SUVR) ← aducanumab · indirect response — drug stimulates the loss of composite standard uptake value ratio (SUVR) | — | Kandadi Muralidharan K et al., Population pharmacokinetics and standar…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12728](https://doi.org/10.1002/psp4.12728) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Muralidharan_2022_ARIA_E](drugs/drug_aducanumab/pd_Muralidharan_2022_ARIA_E.md) | first incidence of ARIA-E ← aducanumab · time-to-event model | — | Muralidharan KK et al., A Time-to-Event Exposure-Response Model…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2047](https://doi.org/10.1002/jcph.2047) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Muralidharan_2022_ARIA_E_resolution](drugs/drug_aducanumab/pd_Muralidharan_2022_ARIA_E_resolution.md) | time to ARIA-E resolution ← aducanumab · time-to-event model | — | Muralidharan KK et al., A Time-to-Event Exposure-Response Model…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2047](https://doi.org/10.1002/jcph.2047) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [van_2025_CL](drugs/drug_aducanumab/pd_van_2025_CL.md) | Amyloid plaque burden (amyloid PET, Centiloid) ← aducanumab · indirect response — drug stimulates the loss of Amyloid plaque burden (amyloid PET, Centiloid) | — | van Maanen E et al., Modeling amyloid plaque turnover dynami…, Alzheimer's & dementia (New… (2025) | [10.1002/trc2.70169](https://doi.org/10.1002/trc2.70169) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=aducanumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: APP (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:03 | 2:06 | 0/2/0 | 3/0/0 | 0/0/0 | 107,958/7,067 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lim_2025 | relevant | 6 | 4 | Review citing population PK models of aducanumab with some numeric covariate effects (CL +13.4%, V1 +14.6%, V2 +12.9% in males), but full parameter values live in cited references/supplementary material. |
| popPK | Muralidharan_2022 | irrelevant | 3 | 0 | This is an exposure-response safety (ARIA-E) time-to-event model using aducanumab concentrations, not a PK disposition model; no numeric PK parameters (CL, V, half-life) appear in the evidence. |
| popPK | van_2025 | irrelevant | 2 | 2 | This is a plaque-turnover exposure-response model, not a PK model; aducanumab is only one of several mAbs with a plaque-elimination slope, and no aducanumab PK parameters (CL, V, half-life) are reported; detailed values live in supplementary tables not provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baducanumab%5D&body=Drug%3A%20aducanumab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aducanumab/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 01:02 UTC</sub>
