<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;brigatinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Brigatinib_Gupta2021_reference&quot;,&quot;label&quot;:&quot;Gupta_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brigatinib/Brigatinib_Gupta2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# brigatinib

- **generic name:** brigatinib
- **ATC codes:** `L01ED04`, `L01XE43`
- **DrugBank:** [DB12267](https://go.drugbank.com/drugs/DB12267) · **PubChem:** [CID 68165256](https://pubchem.ncbi.nlm.nih.gov/compound/68165256)
- **molar mass:** 584.1 g/mol (C29H39ClN7O2P) — DrugBank
- **groups:** approved, investigational

## About

Brigatinib is a protein kinase inhibitor used to treat non-small-cell lung carcinoma. It is authorised in the European Union for this cancer indication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27456393](https://www.wikidata.org/wiki/Q27456393) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| brigatinib | parent | 584.1 | C29H39ClN7O2P | DrugBank | [68165256](https://pubchem.ncbi.nlm.nih.gov/compound/68165256) | Gupta_2021, Gupta_2023 |

## Start here

> **Gupta_2021_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy volunteers and patients with cancer, n = 442. [Run it in the simulator](drugs/drug_brigatinib/Brigatinib_Gupta2021_reference.md?tab=Simulation) · [record](drugs/drug_brigatinib/Brigatinib_Gupta2021_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 10.6 | L/h | 10.6 L/h | healthy volunteers and patients with cancer | 442 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2021_reference](drugs/drug_brigatinib/Brigatinib_Gupta2021_reference.md) |
| V | V1/F | 207 | L | 207 L | healthy volunteers and patients with cancer | 442 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2021_reference](drugs/drug_brigatinib/Brigatinib_Gupta2021_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Gupta_2021_reference](drugs/drug_brigatinib/Brigatinib_Gupta2021_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 (+1 cov.) | Gupta N et al., Population Pharmacokinetics of Brigatin…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00929-4](https://doi.org/10.1007/s40262-020-00929-4) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Gupta_2022_reference](drugs/drug_brigatinib/Brigatinib_Gupta2022_reference.md) | — | 1-compartment (no model) | 0 | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Gupta_2023_fasted](drugs/drug_brigatinib/Brigatinib_Gupta2023_fasted.md) | — | 1-compartment (no model) | 0 | Gupta N et al., Clinical Pharmacology of Brigatinib: A…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01284-w](https://doi.org/10.1007/s40262-023-01284-w) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ fed](drugs/drug_brigatinib/Brigatinib_Gupta2023_fed.md) | — | 1-compartment (no model) | 0 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Gupta_2020_HR](drugs/drug_brigatinib/pd_Gupta_2020_HR.md) | change from baseline in heart rate ← brigatinib · direct linear effect | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Gupta_2020_PR](drugs/drug_brigatinib/pd_Gupta_2020_PR.md) | change from baseline in PR interval ← brigatinib · direct linear effect | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Gupta_2020_QTcF](drugs/drug_brigatinib/pd_Gupta_2020_QTcF.md) | change from baseline in QTcF interval ← brigatinib · direct linear effect | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2020_ORR](drugs/drug_brigatinib/pd_Gupta_2020_ORR.md) | objective response rate ← brigatinib · categorical (graded) response model | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2020_OS](drugs/drug_brigatinib/pd_Gupta_2020_OS.md) | overall survival ← brigatinib · time-to-event model | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2020_PFS](drugs/drug_brigatinib/pd_Gupta_2020_PFS.md) | progression-free survival ← brigatinib · time-to-event model | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2020_amylase_elevation](drugs/drug_brigatinib/pd_Gupta_2020_amylase_elevation.md) | grade ≥ 2 amylase elevation ← brigatinib · categorical (graded) response model | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2020_iORR](drugs/drug_brigatinib/pd_Gupta_2020_iORR.md) | intracranial objective response rate ← brigatinib · categorical (graded) response model | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2020_iPFS](drugs/drug_brigatinib/pd_Gupta_2020_iPFS.md) | intracranial progression-free survival ← brigatinib · time-to-event model | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2020_rash](drugs/drug_brigatinib/pd_Gupta_2020_rash.md) | grade ≥ 2 rash ← brigatinib · categorical (graded) response model | — | Gupta N et al., Brigatinib Dose Rationale in Anaplastic…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12569](https://doi.org/10.1002/psp4.12569) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2022_AE](drugs/drug_brigatinib/pd_Gupta_2022_AE.md) | Composite grade ≥3 AE endpoint ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2022_ALT](drugs/drug_brigatinib/pd_Gupta_2022_ALT.md) | ALT increase (grade ≥2) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2022_ALT_2](drugs/drug_brigatinib/pd_Gupta_2022_ALT_2.md) | ALT increase (grade ≥3) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2022_AST](drugs/drug_brigatinib/pd_Gupta_2022_AST.md) | AST increase (grade ≥2) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2022_AST_2](drugs/drug_brigatinib/pd_Gupta_2022_AST_2.md) | AST increase (grade ≥3) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2022_Amylase](drugs/drug_brigatinib/pd_Gupta_2022_Amylase.md) | Amylase increase (grade ≥2) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2022_Amylase_2](drugs/drug_brigatinib/pd_Gupta_2022_Amylase_2.md) | Amylase increase (grade ≥3) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2022_Bradycardia](drugs/drug_brigatinib/pd_Gupta_2022_Bradycardia.md) | Bradycardia (grade ≥2) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2022_CPK](drugs/drug_brigatinib/pd_Gupta_2022_CPK.md) | CPK increase (grade ≥3) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2022_Hyperglycemia](drugs/drug_brigatinib/pd_Gupta_2022_Hyperglycemia.md) | Hyperglycemia (grade ≥2) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2022_Hypertension](drugs/drug_brigatinib/pd_Gupta_2022_Hypertension.md) | Hypertension (grade ≥2) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2022_Lipase](drugs/drug_brigatinib/pd_Gupta_2022_Lipase.md) | Lipase increase (grade ≥3) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2022_ORR](drugs/drug_brigatinib/pd_Gupta_2022_ORR.md) | Objective response rate ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2022_PFS](drugs/drug_brigatinib/pd_Gupta_2022_PFS.md) | Progression-free survival ← brigatinib · time-to-event model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2022_Pulmonary_AEs](drugs/drug_brigatinib/pd_Gupta_2022_Pulmonary_AEs.md) | Pulmonary events (pneumonitis or ILD) (grade ≥2) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2022_Rash](drugs/drug_brigatinib/pd_Gupta_2022_Rash.md) | Rash (grade ≥2) ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2022_Time_to_first_brigatinib_dose_reduction](drugs/drug_brigatinib/pd_Gupta_2022_Time_to_first_brigatinib_dose_reduction.md) | Time to first brigatinib dose reduction ← brigatinib · time-to-event model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Gupta_2022_iORR](drugs/drug_brigatinib/pd_Gupta_2022_iORR.md) | Intracranial objective response rate ← brigatinib · categorical (graded) response model | — | Gupta N et al., Population pharmacokinetic and exposure…, Clinical and translational… (2022) | [10.1111/cts.13231](https://doi.org/10.1111/cts.13231) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [unknown_2021_OS](drugs/drug_brigatinib/pd_unknown_2021_OS.md) | overall survival ← brigatinib · time-to-event model | — | unknown, Corrigendum to: Brigatinib dose rationa…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12698](https://doi.org/10.1002/psp4.12698) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [unknown_2021_PFS](drugs/drug_brigatinib/pd_unknown_2021_PFS.md) | progression-free survival ← brigatinib · time-to-event model | — | unknown, Corrigendum to: Brigatinib dose rationa…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12698](https://doi.org/10.1002/psp4.12698) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [unknown_2021_iPFS](drugs/drug_brigatinib/pd_unknown_2021_iPFS.md) | intracranial PFS ← brigatinib · time-to-event model | — | unknown, Corrigendum to: Brigatinib dose rationa…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12698](https://doi.org/10.1002/psp4.12698) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=brigatinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` inducer/substrate, `SLC22A1` unknown | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `ABCG2` inhibitor/substrate, `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ABCB5 (inhibitor), ABCB5 (substrate), ABL1 (inhibitor), ALK (inhibitor), EGFR (inhibitor), ERBB2 (inhibitor), ERBB4 (inhibitor), FLT3 (inhibitor), IGF1R (inhibitor), INSR (binding), MET (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:02 | 8:21 | 1/3/0 | 3/0/0 | 0/0/0 | 162,161/48,522 | openai / gpt-6-luna | 7 | 0/7 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Damoiseaux_2022 | relevant | 10 | 2 | Mouse population-PK models include brigatinib, but numeric CL and other model parameter values are only referenced in supplementary material not provided. |
| popPK | Gupta_2020 | irrelevant | 2 | 0 | This human exposure–response analysis uses a previously developed population-PK model but reports no numeric brigatinib disposition parameters. |
| popPK | unknown_2021 | irrelevant | 1 | 0 | This is an exposure–response corrigendum with efficacy values, not quantitative brigatinib disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 21:55 UTC</sub>
