<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;apremilast&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Apremilast_Okubo2021_typical_values_rse_for_model_parameters&quot;,&quot;label&quot;:&quot;Okubo_2021_typical_values_rse_for_model_parameters_and_covariate_effects&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Apremilast_Warren2025_reference&quot;,&quot;label&quot;:&quot;Warren_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_apremilast/Apremilast_Warren2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# apremilast

- **generic name:** apremilast
- **ATC codes:** `L04AA32`
- **DrugBank:** [DB05676](https://go.drugbank.com/drugs/DB05676) · **PubChem:** [CID 11561674](https://pubchem.ncbi.nlm.nih.gov/compound/11561674)
- **molar mass:** 460.5 g/mol (C22H24N2O7S) — DrugBank
- **groups:** approved, investigational

## About

Apremilast is an immunosuppressant used to treat inflammatory conditions such as psoriasis, psoriatic arthritis, and Behçet's disease. It is an approved medicine, authorised in the European Union, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2858961](https://www.wikidata.org/wiki/Q2858961) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| apremilast | parent | 460.5 | C22H24N2O7S | DrugBank | [11561674](https://pubchem.ncbi.nlm.nih.gov/compound/11561674) | Okubo_2021, Warren_2025 |

## Start here

> **Okubo_2021_typical_values_rse_for_model_parameters_and_covariate_effects** — <span class="pk-badge pk-badge--green">Reproduces paper</span> subjects with moderate to severe psoriasis, n = 517. [Run it in the simulator](drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters.md?tab=Simulation) · [record](drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 9.25 | L/h | 9.25 L/h | subjects with moderate to severe psoriasis | 517 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Okubo_2021_typical_values_rse_for_model_parameters_and_covariate_effects](drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters.md) |
| CL | CL/F | 9.26 | L/h | 9.26 l/h | atopic dermatitis patients |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Warren_2025_reference](drugs/drug_apremilast/Apremilast_Warren2025_reference.md) |
| V | V/F | 115 | L | 115 L | subjects with moderate to severe psoriasis | 517 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Okubo_2021_typical_values_rse_for_model_parameters_and_covariate_effects](drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters.md) |
| V | V/F | 118 | L | 118 l | atopic dermatitis patients |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Warren_2025_reference](drugs/drug_apremilast/Apremilast_Warren2025_reference.md) |
| ka | kabs | 1.83 | 1/h | 1.83 h−1 | subjects with moderate to severe psoriasis | 517 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Okubo_2021_typical_values_rse_for_model_parameters_and_covariate_effects](drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters.md) |
| ka | kabs | 1.84 | 1/h | 1.84 1/h | atopic dermatitis patients |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Warren_2025_reference](drugs/drug_apremilast/Apremilast_Warren2025_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Okubo_2021 · CL/F</text><circle cx="528.1" cy="30.0" r="4" fill="#2e7d32"><title>Okubo_2021 · CL/F: 9.25 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Warren_2025 · CL/F</text><circle cx="528.3" cy="46.0" r="4" fill="#2e7d32"><title>Warren_2025 · CL/F: 9.26 L/h</title></circle></svg><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">100</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">1000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Okubo_2021 · V/F</text><circle cx="211.2" cy="30.0" r="4" fill="#2e7d32"><title>Okubo_2021 · V/F: 115 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Warren_2025 · V/F</text><circle cx="215.2" cy="46.0" r="4" fill="#2e7d32"><title>Warren_2025 · V/F: 118 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Okubo_2021_typical_values_rse_for_model_parameters_and_covariate_effects](drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters.md) | ▶ model + simulator | 1-compartment, oral | 4 | Okubo Y et al., Population pharmacokinetic and exposure…, The Journal of dermatology (2021) | [10.1111/1346-8138.16068](https://doi.org/10.1111/1346-8138.16068) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [↳ geometric_mean_cv_geometric_mean](drugs/drug_apremilast/Apremilast_Okubo2021_geometric_mean_cv_geometric_mean.md) | — | 1-compartment (no model) | 4 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ geometric_mean_geometric_cv](drugs/drug_apremilast/Apremilast_Okubo2021_geometric_mean_geometric_cv.md) | — | 1-compartment (no model) | 0 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Warren_2025_reference](drugs/drug_apremilast/Apremilast_Warren2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Warren RB et al., Population Pharmacokinetic-Pharmacodyna…, Dermatology and therapy (2025) | [10.1007/s13555-025-01371-9](https://doi.org/10.1007/s13555-025-01371-9) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Okubo_2021_PASI_50](drugs/drug_apremilast/pd_Okubo_2021_PASI_50.md) | PASI-50 ← apremilast · direct Emax (saturable) effect | — | Okubo Y et al., Population pharmacokinetic and exposure…, The Journal of dermatology (2021) | [10.1111/1346-8138.16068](https://doi.org/10.1111/1346-8138.16068) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Okubo_2021_PASI_75](drugs/drug_apremilast/pd_Okubo_2021_PASI_75.md) | PASI-75 ← apremilast · direct Emax (saturable) effect | — | Okubo Y et al., Population pharmacokinetic and exposure…, The Journal of dermatology (2021) | [10.1111/1346-8138.16068](https://doi.org/10.1111/1346-8138.16068) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Okubo_2021_sPGA](drugs/drug_apremilast/pd_Okubo_2021_sPGA.md) | sPGA response (0 or 1) ← apremilast · direct Emax (saturable) effect | — | Okubo Y et al., Population pharmacokinetic and exposure…, The Journal of dermatology (2021) | [10.1111/1346-8138.16068](https://doi.org/10.1111/1346-8138.16068) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:40 | 1:00 | 2/2/0 | 1/0/0 | 0/0/0 | 104,172/6,532 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 2  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Coffey_2026 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic and discovery study for a novel PDE4 inhibitor (LT-104A), with apremilast mentioned only as a comparator drug, and no PK parameters for apremilast are reported. |
| popPK | Gu_2024 | irrelevant | 0 | 0 | The study focuses on the development of new PDE4 inhibitors (DCN and 7b-1) using apremilast only as a comparator for binding mode and indication, with no PK parameters reported for apremilast. |
| popPK | Vossen_2019 | irrelevant | 0 | 0 | The paper is a randomized clinical trial evaluating efficacy and safety for hidradenitis suppurativa, and it reports no pharmacokinetic parameters for apremilast. |
| popPK | Vossen_2019_2 | irrelevant | 0 | 0 | The study is a translational pharmacodynamic evaluation of inflammatory biomarkers in skin biopsies and does not report any pharmacokinetic parameters for apremilast. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 23:40 UTC</sub>
