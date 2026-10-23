<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;zavegepant&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zavegepant_Shahin2025_reference&quot;,&quot;label&quot;:&quot;Shahin_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zavegepant/Zavegepant_Shahin2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# zavegepant

- **generic name:** zavegepant
- **ATC codes:** `N02CD08`
- **DrugBank:** [DB15688](https://go.drugbank.com/drugs/DB15688) · **PubChem:** not captured
- **molar mass:** 638.817 g/mol (C36H46N8O3) — DrugBank
- **groups:** approved, investigational

## About

Zavegepant is a CGRP antagonist used as an antimigraine medicine for the acute treatment of migraine attacks. It is an approved active ingredient, though it is not authorised in the European Union and appears to be used mainly in the United States.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q99388898](https://www.wikidata.org/wiki/Q99388898) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| zavegepant | parent | 638.817 | C36H46N8O3 | DrugBank | — | Comisar_2025 |

## Start here

> **Shahin_2025_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> review reference. [Run it in the simulator](drugs/drug_zavegepant/Zavegepant_Shahin2025_reference.md?tab=Simulation) · [record](drugs/drug_zavegepant/Zavegepant_Shahin2025_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 293.9 | L/h | 293.9 L/h | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Shahin_2025_reference](drugs/drug_zavegepant/Zavegepant_Shahin2025_reference.md) |
| V | V/F | 1232 | L | 1232.0 L | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Shahin_2025_reference](drugs/drug_zavegepant/Zavegepant_Shahin2025_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Shahin_2025_reference](drugs/drug_zavegepant/Zavegepant_Shahin2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Shahin MH et al., A Pharmacokinetic Study of Zavegepant N…, Clinical and translational… (2025) | [10.1111/cts.70199](https://doi.org/10.1111/cts.70199) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Comisar_2025_reference](drugs/drug_zavegepant/Zavegepant_Comisar2025_reference.md) | — | 3-compartment (no model) | 0 | Comisar CM et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13257](https://doi.org/10.1002/psp4.13257) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=zavegepant).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate, `SLC10A1` substrate, `SLCO1B3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate, `SLC47A1` substrate, `SLC47A2` unknown | DrugBank actor |
| excretion | liver | `ABCB1` substrate, `SLC47A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CALCRL (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:46 | 0:19 | 1/1/0 | 0/0/0 | 0/0/0 | 35,942/2,763 | einfracz / qwen3.8-27b | 4 | 0/3 | 4/0 | 1 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Bhardwaj_2024 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic (PK) parameters (AUC, Cmax) and safety data; it does not report any pharmacodynamic (PD) or exposure-response relationship. |
| PGx | Bhardwaj_2024_2 | not_relevant | 0 | 0 | The study reports pharmacokinetic drug-drug interactions with rifampin and itraconazole, not pharmacogenomic effects based on genetic variants. |
| popPK | Hughes_2024 | irrelevant | 2 | 0 | The study is a cardiac safety assessment focusing on QTc interval and concentration-QTc relationship, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume of distribution. |
| PGx | Lipton_2026 | not_relevant | 0 | 0 | The paper is a clinical review comparing triptans and gepants and does not report pharmacogenomic variants or their effects on zavegepant's PK/PD parameters. |
| PGx | Takizawa_2023 | not_relevant | 0 | 0 | The paper is a narrative review regarding drug-drug interactions between gepants and COVID-19 treatments (Paxlovid), not a study on pharmacogenomic variants affecting zavegepant PK/PD. |
| PD | unknown_2023 | not_relevant | 1 | 0 | The text is a title or brief mention of "Drugs for migraine" without providing any specific data, models, or numeric parameters for zavegepant. |
| PD | unknown_2023_2 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding pharmacodynamics or exposure-response relationships. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 18:46 UTC</sub>
