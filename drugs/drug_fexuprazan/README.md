<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;fexuprazan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fexuprazan_Kim2022_reference&quot;,&quot;label&quot;:&quot;Kim_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fexuprazan/Fexuprazan_Kim2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Kim_2022_pH_4&quot;,&quot;label&quot;:&quot;Kim_2022 \u00b7 pH&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_fexuprazan/pd_Kim_2022_pH_4.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# fexuprazan

- **generic name:** fexuprazan
- **ATC codes:** `A02BC10`
- **DrugBank:** [DB16078](https://go.drugbank.com/drugs/DB16078) · **PubChem:** not captured
- **molar mass:** 410.41 g/mol (C19H17F3N2O3S) — DrugBank
- **groups:** investigational

## About

Fexuprazan is an investigational proton pump inhibitor being studied for acid-related disorders such as peptic ulcer and gastro-oesophageal reflux disease. It is not yet approved; it remains in clinical development and has no marketing authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q123583148](https://www.wikidata.org/wiki/Q123583148) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fexuprazan | parent | 410.41 | C19H17F3N2O3S | DrugBank | — | Jung_2026 |

## Start here

> **Kim_2022_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> review reference. [Run it in the simulator](drugs/drug_fexuprazan/Fexuprazan_Kim2022_reference.md?tab=Simulation) · [record](drugs/drug_fexuprazan/Fexuprazan_Kim2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 108.6 | L/h | 1810.0 mL/min | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Kim_2022_reference](drugs/drug_fexuprazan/Fexuprazan_Kim2022_reference.md) |
| V | V/F | 736 | L | 736000.0 mL | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Kim_2022_reference](drugs/drug_fexuprazan/Fexuprazan_Kim2022_reference.md) |
| ka | kabs | 0.5568 | 1/h | 0.00928 min−1 | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Kim_2022_reference](drugs/drug_fexuprazan/Fexuprazan_Kim2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Kim_2022_reference](drugs/drug_fexuprazan/Fexuprazan_Kim2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Kim MS et al., Model-Based Prediction of Acid Suppress…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15060709](https://doi.org/10.3390/ph15060709) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Jung_2026_reference](drugs/drug_fexuprazan/Fexuprazan_Jung2026_reference.md) | — | general linear (no model) | 0 | Jung W et al., A Mechanism-Based Multi-Level Populatio…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70181](https://doi.org/10.1002/psp4.70181) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Jung_2026_pH](drugs/drug_fexuprazan/pd_Jung_2026_pH.md) | intragastric pH ← fexuprazan · indirect response — drug stimulates the production of intragastric pH | — | Jung W et al., A Mechanism-Based Multi-Level Populatio…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70181](https://doi.org/10.1002/psp4.70181) |
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kim_2022_pH](drugs/drug_fexuprazan/pd_Kim_2022_pH.md) | gastric pH ← fexuprazan · indirect response — drug inhibits the production of gastric pH | model (no simulator) | Kim MS et al., Model-Based Prediction of Acid Suppress…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15060709](https://doi.org/10.3390/ph15060709) |
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kim_2022_pH_2](drugs/drug_fexuprazan/pd_Kim_2022_pH_2.md) | gastric pH ← fexuprazan · indirect response — drug inhibits the production of gastric pH | model (no simulator) | Kim MS et al., Model-Based Prediction of Acid Suppress…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15060709](https://doi.org/10.3390/ph15060709) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Kim_2022_pH_3](drugs/drug_fexuprazan/pd_Kim_2022_pH_3.md) | gastric pH ← fexuprazan · indirect response — drug inhibits the production of gastric pH | model (no simulator) | Kim MS et al., Model-Based Prediction of Acid Suppress…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15060709](https://doi.org/10.3390/ph15060709) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Kim_2022_pH_4](drugs/drug_fexuprazan/pd_Kim_2022_pH_4.md) | gastric pH ← fexuprazan · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Kim MS et al., Model-Based Prediction of Acid Suppress…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15060709](https://doi.org/10.3390/ph15060709) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:29 | 1:08 | 1/1/0 | 2/0/0 | 0/0/0 | 121,386/12,697 | einfracz / qwen3.8-27b | 8 | 0/9 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 23 matched, 23 returned
- **screened:** 6  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahn_2023 | irrelevant | 0 | 0 | The paper is a review of H. pylori eradication therapies and does not report any quantitative pharmacokinetic parameters for fexuprazan. |
| PD | Ahn_2023 | not_relevant | 1 | 0 | The text is a clinical review of PCAB-based H. pylori eradication therapies that reports clinical outcomes (eradication rates) but contains no pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for fexuprazan. |
| PGx | Ahn_2023 | not_relevant | 0 | 0 | The text is a general review of PCABs and does not report specific pharmacogenomic effects on PK/PD parameters for fexuprazan. |
| popPK | Hwang_2020 | relevant | 10 | 0 | The title confirms a PK study of fexuprazan, but the provided evidence contains no numeric parameter values. |
| PGx | Kang_2026 | not_relevant | 1 | 1 | The study performs CYP2C19 genotyping for subgroup analysis but reports no difference in efficacy (H. pylori eradication rate) and does not analyze pharmacokinetic or pharmacodynamic parameters of fexuprazan. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study regarding dosing timing, not a pharmacokinetic study, and reports no quantitative PK parameters (CL, V, ka, etc.) for fexuprazan. |
| PD | Lee_2025 | not_relevant | 0 | 0 | The paper is a clinical efficacy study comparing dosing timing (before vs. after meal) and reports healing rates, but it does not provide pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper is a systematic review of drug-drug and food interactions for P-CABs, with no analysis of pharmacogenomic variants or genetic phenotypes affecting PK/PD. |
| PD | Oh_2023 | not_relevant | 2 | 1 | The study reports PK parameters and qualitative PD outcomes (platelet aggregation) but does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve for fexuprazan. |
| popPK | Ramani_2023 | irrelevant | 1 | 0 | The paper is a review of clinical development and efficacy without reporting original quantitative pharmacokinetic parameter values. |
| PD | Ramani_2023 | not_relevant | 2 | 0 | The text is a narrative review summarizing clinical development and general pharmacological properties without providing specific numeric PD parameters or exposure-response data. |
| PGx | Ramani_2023 | not_relevant | 0 | 0 | The paper is a general review of fexuprazan's clinical development and explicitly states it lacks CYP2C19 metabolism, indicating no specific pharmacogenomic effect is reported. |
| PGx | Ranbhise_2026 | not_relevant | 0 | 0 | The paper is a review discussing the general pharmacological advantages of P-CABs (like fexuprazan) over PPIs, but it does not report specific pharmacogenomic studies showing how gene variants change fexuprazan's PK/PD parameters. |
| PGx | Remes-Troche_2024 | not_relevant | 0 | 0 | The paper is a review of P-CABs and does not report any pharmacogenomic effects of gene variants on the PK/PD parameters of fexuprazan. |
| PGx | Seong_2025 | not_relevant | 2 | 3 | The paper reports a case of drug-induced liver injury where pharmacokinetics were altered due to acute hepatic dysfunction, and while a CYP2C19 PM genotype was identified, the authors explicitly state its clinical relevance was limited and the PK changes were attributed to the injury itself rather than the genotype. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study focuses on CYP1B1 inhibitors (specifically compound C27) for paclitaxel resistance, and fexuprazan is only mentioned as the source of a lead intermediate (W-1) without any PK parameters reported for fexuprazan itself. |
| PD | Wang_2026 | not_relevant | 3 | 2 | The paper reports an IC50 for a CYP1B1 inhibitor (C27, a fexuprazan intermediate) and qualitative PK data, but does not provide a pharmacodynamic exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for fexuprazan itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 19:28 UTC</sub>
