<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;mesuximide&quot;}]"></div>

# mesuximide

- **generic name:** mesuximide
- **ATC codes:** `N03AD03`
- **DrugBank:** [DB05246](https://go.drugbank.com/drugs/DB05246) · **PubChem:** not captured
- **groups:** approved

## About

Mesuximide (methsuximide) is a succinimide anticonvulsant used to treat epilepsy, especially childhood absence epilepsy. It is an approved antiepileptic, though it is not widely used and no EU marketing authorisation is recorded.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q906414](https://www.wikidata.org/wiki/Q906414) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:31 | 0:58 | 0/0/0 | 0/0/0 | 0/0/0 | 89,897/3,967 | einfracz / qwen3.8-27b | 3 | 12/18 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mesuximide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1G (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 925 matched, 53 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adeagbo_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for amodiaquine, not mesuximide. |
| PD | Adeagbo_2025 | not_relevant | 0 | 0 | The paper is a population pharmacokinetic (PK) study for amodiaquine (not mesuximide) and does not report any pharmacodynamic (PD) or exposure-response model parameters. |
| popPK | Amooei_2026 | irrelevant | 0 | 0 | The paper is a systematic review on tacrolimus dosing models and does not mention mesuximide or provide its pharmacokinetic parameters. |
| PD | Amooei_2026 | not_relevant | 0 | 0 | The paper is a systematic review of pharmacokinetic (PK) and machine learning models for tacrolimus dosing; it does not report any pharmacodynamic (PD) or exposure-response relationships for mesuximide. |
| popPK | Bachmann_2024 | irrelevant | 0 | 0 | The paper describes a methodological approach for optimal dosing using NONMEM and does not provide specific pharmacokinetic parameter values for mesuximide. |
| PD | Bachmann_2024 | not_relevant | 0 | 0 | The paper describes a method for optimal dosing using NONMEM and applies it to generic or unrelated examples (biomarker, antibiotic), but does not report any pharmacodynamic data, model, or parameters for mesuximide. |
| popPK | Baehler_1980 | irrelevant | 2 | 0 | The paper discusses mesuximide (misidentified as methsuximide) in a clinical case report of overdose but lacks quantitative PK parameter values for the parent drug or its metabolite. |
| popPK | Battino_1995 | irrelevant | 4 | 1 | This is a review article that discusses mesuximide only qualitatively in the abstract (stating C/D is less sensitive to age) without providing specific quantitative PK parameter values like CL, V, or t1/2. |
| popPK | Bender_2024 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for mosunetuzumab, not mesuximide. |
| PD | Bender_2024 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) and receptor occupancy (RO) modeling for mosunetuzumab, not mesuximide, and does not provide numeric PD parameters (e.g., Emax, EC50) for the queried drug. |
| PD | Bialer_2025 | not_relevant | 1 | 0 | The paper is a qualitative review of chirality in antiseizure medications and does not report specific numeric PD parameters or exposure-response data for mesuximide. |
| popPK | Biesdorf_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for Cofetuzumab pelidotin and its payload Aur0101, not mesuximide. |
| popPK | Browne_1983 | irrelevant | 2 | 4 | The drug is methsuximide, not mesuximide; while PK values for the metabolite N-desmethylmethsuximide are provided, they pertain to a different chemical entity than the target drug. |
| popPK | Carrascosa-Arteaga_2025 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for risperidone and paliperidone, not mesuximide. |
| PD | Carrascosa-Arteaga_2025 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PopPK) models for risperidone and paliperidone, not mesuximide, and does not report specific numeric PD parameters. |
| popPK | Cheng_2026 | irrelevant | 0 | 0 | The paper is a review of pharmacometrics in antibody-drug conjugates and does not mention mesuximide or provide its PK parameters. |
| PD | Cheng_2026 | not_relevant | 0 | 0 | The paper is a review of pharmacometric methods for antibody-drug conjugates and does not contain any data, analysis, or numeric parameters for mesuximide. |
| popPK | Choi_2026 | irrelevant | 0 | 0 | The paper is a narrative review on pharmacometrics and real-world data in special populations and does not report specific PK parameters for mesuximide. |
| PD | Choi_2026 | not_relevant | 0 | 0 | The paper is a narrative review of pharmacometrics in special populations and does not report any specific pharmacodynamic or exposure-response data for mesuximide. |
| popPK | Dobrinska_1977 | irrelevant | 0 | 0 | The study investigates methsuximide in dogs, which is a different drug from the target subject mesuximide. |
| popPK | Elenjickal_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for canagliflozin, not mesuximide. |
| PD | Elenjickal_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of canagliflozin and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Elmowafy_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mycophenolic acid (MPA) from mycophenolate mofetil, not mesuximide. |
| PD | Elmowafy_2026 | not_relevant | 0 | 0 | The paper investigates mycophenolate mofetil (MMF), not mesuximide, and reports only a categorical association between MPA exposure (AUC) and clinical response without deriving numeric PD parameters (e.g., EC50, Emax) for mesuximide. |
| popPK | Eun_2026 | irrelevant | 0 | 0 | The paper describes a computational platform for kinase inhibitor screening and contains no pharmacokinetic data for mesuximide. |
| PD | Eun_2026 | not_relevant | 0 | 0 | The paper describes a computational platform for kinase inhibitor screening and selectivity profiling using deep learning and docking; it does not report pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for mesuximide or any other drug. |
| popPK | Garamani_2026 | irrelevant | 0 | 0 | The study focuses on a PBPK model for rifampicin (a tuberculosis drug), not mesuximide. |
| PD | Garamani_2026 | not_relevant | 0 | 0 | The paper focuses on rifampicin, not mesuximide, and does not report any PD parameters for the target drug. |
| popPK | Girelli_2026 | irrelevant | 0 | 0 | The paper studies fluid dynamics and waste clearance in the human dura mater, not the pharmacokinetics of mesuximide. |
| PD | Girelli_2026 | not_relevant | 0 | 0 | The paper focuses on the hydrodynamics and solute transport (advection-diffusion) of tracers in the cranial dura and meningeal lymphatics, not on the pharmacodynamic (exposure-response) effects of mesuximide. |
| popPK | Hall_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mephenytoin metabolism, and mesuximide (likely a typo for methsuximide/phensuximide in the abstract) is only a comparative inhibitor, with no PK parameters reported. |
| PGx | Hall_1987 | not_relevant | 2 | 1 | The paper investigates the in vitro metabolism of mephenytoin and mentions methsuximide only as an inhibitor, failing to report any pharmacogenomic effect on mesuximide's PK/PD parameters. |
| popPK | Hallock_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of caffeine, not mesuximide. |
| PD | Hallock_2026 | not_relevant | 0 | 0 | The paper focuses on the external validation of a pharmacokinetic (PK) model for caffeine, not mesuximide, and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Helfer_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lansoprazole, not mesuximide. |
| PD | Helfer_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of lansoprazole and does not report any pharmacodynamic (PD) or exposure-response data. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper describes a methodological tool for generating initial PK estimates and does not report quantitative disposition parameters for mesuximide. |
| PD | Huang_2025 | not_relevant | 0 | 0 | The paper describes a pipeline for generating initial estimates for population pharmacokinetic (PK) models and does not report any pharmacodynamic (PD) or exposure-response relationships for mesuximide or any other drug. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper evaluates an automated modeling tool on general datasets and does not mention or provide pharmacokinetic parameters for mesuximide. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper focuses on automated population pharmacokinetic (PopPK) modeling methods and does not report any pharmacodynamic (PD) or exposure-response relationships for mesuximide or any other drug. |
| popPK | Huang_2026_2 | irrelevant | 0 | 0 | The paper describes a methodology for automated PopPK model selection using simulated data and does not study mesuximide or report parameters for it. |
| PD | Huang_2026_2 | not_relevant | 0 | 0 | The paper focuses on automated population pharmacokinetic (PopPK) model selection algorithms using simulated data and does not report any pharmacodynamic (PD) or exposure-response relationships for mesuximide. |
| popPK | Jeon_2026 | irrelevant | 0 | 0 | The study focuses on carboplatin pharmacokinetics in breast cancer patients and does not involve mesuximide. |
| PD | Jeon_2026 | not_relevant | 0 | 0 | The paper focuses on carboplatin pharmacokinetics and dosing formula optimization, not mesuximide, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Jeong_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sirolimus, not mesuximide. |
| PD | Jeong_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for sirolimus, not mesuximide, and does not contain any pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Jia_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for rivaroxaban, not mesuximide. |
| PD | Jia_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PopPK) of rivaroxaban and does not report any pharmacodynamic (PD) or exposure-response model parameters (e.g., Emax, EC50) for the drug. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The paper describes a computational model for predicting drug-food interactions and does not report pharmacokinetic parameters for mesuximide. |
| PD | Kang_2026 | not_relevant | 0 | 0 | The paper describes a machine learning model for predicting drug-food interactions and does not report any pharmacodynamic or exposure-response data for mesuximide. |
| popPK | Kwack_2026 | irrelevant | 0 | 0 | The study evaluates an AI tool for PopPK modeling using warfarin, theophylline, and tobramycin datasets; mesuximide is not mentioned or studied. |
| PD | Kwack_2026 | not_relevant | 0 | 0 | The paper focuses on automated population pharmacokinetic (PopPK) modeling for warfarin, theophylline, and tobramycin, and does not mention mesuximide or report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of moxifloxacin, not mesuximide. |
| PD | Lee_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the external validation of population pharmacokinetic (popPK) models for moxifloxacin to optimize limited sampling strategies; it does not report any pharmacodynamic (PD) or exposure-response relationships, nor does it provide numeric PD parameters. |
| popPK | Lee_2026 | irrelevant | 0 | 0 | The study focuses on optimization algorithms for generic mechanistic models and does not report pharmacokinetic parameters for mesuximide. |
| PD | Lee_2026 | not_relevant | 0 | 0 | The paper is a methodological study on optimization algorithms using simulated data for generic PK/PD models (2CMT and Friberg myelosuppression) and does not report any pharmacodynamic relationship or parameters for mesuximide. |
| popPK | May_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of topiramate, not mesuximide. |
| popPK | May_2011 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of rufinamide, mentioning mesuximide only as a minor interaction factor ("methsuximide") without reporting its PK parameters. |
| popPK | May_2018 | irrelevant | 0 | 0 | The study focuses on lacosamide pharmacokinetics, and mesuximide is only mentioned as a comparator drug that affects lacosamide levels. |
| popPK | Navarrete_2024 | irrelevant | 0 | 0 | The paper is about the pharmacokinetics of ketamine, not mesuximide. |
| PD | Navarrete_2024 | not_relevant | 0 | 0 | The paper reports a PK/PD model for ketamine, not mesuximide. |
| popPK | Olivo_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not mesuximide. |
| PD | Olivo_2024 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for methotrexate, not mesuximide, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Porter_1979 | irrelevant | 0 | 0 | The study investigates phensuximide and methsuximide, not mesuximide. |
| popPK | Rantanen_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for methylprednisolone, not mesuximide. |
| PD | Rantanen_2026 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of methylprednisolone, not mesuximide, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Shin_2024 | irrelevant | 0 | 0 | The study evaluates LLMs for NONMEM coding and does not report pharmacokinetic parameters for mesuximide. |
| PD | Shin_2024 | not_relevant | 0 | 0 | The paper evaluates LLMs for generating NONMEM PK code and does not report any pharmacodynamic or exposure-response data for mesuximide. |
| popPK | Silvola_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gabapentin, not mesuximide. |
| PD | Silvola_2025 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of gabapentin and its transfer into breast milk; it does not report a pharmacodynamic model or exposure-response relationship for mesuximide (or any other drug). |
| popPK | Sim_2026 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| PD | Sim_2026 | not_relevant | 0 | 0 | The paper studies gaylussacin, not mesuximide, and does not report any pharmacodynamic parameters for mesuximide. |
| popPK | Steffens_2025 | irrelevant | 0 | 0 | The paper describes the population pharmacokinetics of amikacin, not mesuximide. |
| PD | Steffens_2025 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of amikacin, not mesuximide, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Tachet_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ruxolitinib, not mesuximide. |
| PD | Tachet_2026 | not_relevant | 3 | 2 | The paper is about ruxolitinib, not mesuximide, and only reports a qualitative exposure-toxicity association without numeric PD parameters. |
| popPK | Teixeira_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of meloxicam, not mesuximide. |
| PD | Teixeira_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for meloxicam but contains no pharmacodynamic (PD) data, exposure-response analysis, or numeric PD parameters. |
| popPK | Tran_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetics for the monoclonal antibody CIS43LS (anti-malaria), not the drug mesuximide. |
| popPK | Wagner_1994 | irrelevant | 0 | 0 | The paper is a review of felbamate, not mesuximide, and only mentions methsuximide (a different drug) in the context of drug interactions without providing its PK parameters. |
| PGx | Wright_1995 | not_relevant | 0 | 0 | The study focuses on the metabolism of antimalarial biguanides (proguanil/chlorproguanil) by CYP2C19 and does not report any pharmacokinetic or pharmacodynamic parameters for the drug 'mesuximide' (or methsuximide, which is a different anticonvulsant). |
| popPK | Yu_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of amlodipine and telmisartan, not mesuximide. |
| PD | Yu_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics of amlodipine and telmisartan and does not report any pharmacodynamic or exposure-response data for mesuximide. |
| popPK | de_1979 | irrelevant | 1 | 0 | The paper mentions methsuximide (a related anticonvulsant) in the context of hemoperfusion for overdose treatment, but reports no pharmacokinetic parameters (CL, V, ka) for the drug mesuximide, which is a different compound. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
