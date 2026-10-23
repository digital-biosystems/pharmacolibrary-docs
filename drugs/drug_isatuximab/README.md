<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;isatuximab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Isatuximab_Fau2020_reference&quot;,&quot;label&quot;:&quot;Fau_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_isatuximab/Isatuximab_Fau2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# isatuximab

- **generic name:** isatuximab
- **ATC codes:** `L01FC02`, `L01XC38`
- **DrugBank:** [DB14811](https://go.drugbank.com/drugs/DB14811) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Isatuximab is a monoclonal antibody that inhibits CD38 and is used to treat multiple myeloma. It is authorised in the European Union and is used in cancer treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20707906](https://www.wikidata.org/wiki/Q20707906) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Fau_2020_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> patients with relapsed/refractory multiple myeloma, n = 476. [Run it in the simulator](drugs/drug_isatuximab/Isatuximab_Fau2020_reference.md?tab=Simulation) · [record](drugs/drug_isatuximab/Isatuximab_Fau2020_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.00955 | L/h | 0.00955 L/hour | patients with relapsed/refractory multiple myeloma | 476 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Fau_2020_reference](drugs/drug_isatuximab/Isatuximab_Fau2020_reference.md) |
| V | V | 5.13 | L | 5.13 L | patients with relapsed/refractory multiple myeloma | 476 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Fau_2020_reference](drugs/drug_isatuximab/Isatuximab_Fau2020_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Fau_2020_reference](drugs/drug_isatuximab/Isatuximab_Fau2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Fau JB et al., Drug-Disease Interaction and Time-Depen…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12561](https://doi.org/10.1002/psp4.12561) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Brillac_2025_final](drugs/drug_isatuximab/Isatuximab_Brillac2025_final.md) | — | 2-compartment (no model) | 3 | Brillac C et al., Selection of isatuximab dosing regimen…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04832-2](https://doi.org/10.1007/s00280-025-04832-2) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ model_1](drugs/drug_isatuximab/Isatuximab_Brillac2025_model_1.md) | — | 2-compartment (no model) | 3 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Koiwai_2021_M_protein](drugs/drug_isatuximab/pd_Koiwai_2021_M_protein.md) | serum M-protein concentrations ← isatuximab · disease-progression model | model (no simulator) | Koiwai K et al., PK/PD modeling analysis for dosing regi…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12666](https://doi.org/10.1002/psp4.12666) |
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Koiwai_2021_M_protein_2](drugs/drug_isatuximab/pd_Koiwai_2021_M_protein_2.md) | serum M-protein concentrations ← isatuximab and lenalidomide · disease-progression model | model (no simulator) | Koiwai K et al., PK/PD modeling analysis for dosing regi…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12666](https://doi.org/10.1002/psp4.12666) |
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Koiwai_2021_M_protein_3](drugs/drug_isatuximab/pd_Koiwai_2021_M_protein_3.md) | serum M-protein concentrations ← isatuximab and pomalidomide · disease-progression model | model (no simulator) | Koiwai K et al., PK/PD modeling analysis for dosing regi…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12666](https://doi.org/10.1002/psp4.12666) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Pitoy_2024_MPROT](drugs/drug_isatuximab/pd_Pitoy_2024_MPROT.md) | serum M-protein level ← isatuximab · direct Emax (saturable) effect | — | Pitoy A et al., Isatuximab-dexamethasone-pomalidomide c…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13206](https://doi.org/10.1002/psp4.13206) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Rachedi_2022_ORR](drugs/drug_isatuximab/pd_Rachedi_2022_ORR.md) | Overall response rate ← isatuximab · direct log-linear effect | — | Rachedi F et al., Exposure-response analyses for selectio…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12789](https://doi.org/10.1002/psp4.12789) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Rachedi_2022_ORR_2](drugs/drug_isatuximab/pd_Rachedi_2022_ORR_2.md) | Overall response rate ← isatuximab · direct log-linear effect | — | Rachedi F et al., Exposure-response analyses for selectio…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12789](https://doi.org/10.1002/psp4.12789) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Rachedi_2022_ORR_3](drugs/drug_isatuximab/pd_Rachedi_2022_ORR_3.md) | Overall response rate ← isatuximab · direct linear effect | — | Rachedi F et al., Exposure-response analyses for selectio…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12789](https://doi.org/10.1002/psp4.12789) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Pitoy_2024_PFS](drugs/drug_isatuximab/pd_Pitoy_2024_PFS.md) | progression-free survival · time-to-event model | — | Pitoy A et al., Isatuximab-dexamethasone-pomalidomide c…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13206](https://doi.org/10.1002/psp4.13206) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rachedi_2022_PFS](drugs/drug_isatuximab/pd_Rachedi_2022_PFS.md) | Progression-free survival ← isatuximab · time-to-event model | — | Rachedi F et al., Exposure-response analyses for selectio…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12789](https://doi.org/10.1002/psp4.12789) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:10 | 8:14 | 1/2/0 | 3/0/0 | 0/0/0 | 197,411/46,283 | openai / gpt-6-luna | 6 | 0/6 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Koiwai_2021 | relevant | 10 | 3 | The paper reports a human population PK model, but its PK parameter table is not provided in readable form; the numeric fragments cannot be reliably mapped to parameters. |
| popPK | Korver_2019 | irrelevant | 0 | 0 | The study measures TAK-079 in monkeys; isatuximab is mentioned only as a non-crossreactive comparator. |
| popPK | Pape_2025 | irrelevant | 0 | 0 | Isatuximab is only mentioned as a CD38-targeting comparator; the reported half-life values are for BARs, not isatuximab. |
| popPK | Pitoy_2024 | irrelevant | 2 | 0 | The study uses an existing isatuximab PK model but reports no numeric isatuximab disposition parameters; referenced parameter details are not provided here. |
| popPK | Rachedi_2022 | irrelevant | 2 | 1 | This is an exposure-response analysis, not a report of readable isatuximab disposition parameters; further model details are referenced in supplementary material. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 13:03 UTC</sub>
