# mesuximide

- **generic name:** mesuximide
- **ATC codes:** `N03AD03`
- **DrugBank:** [DB05246](https://go.drugbank.com/drugs/DB05246)
- **groups:** approved

## About

**Description.** Mesuximide (or methsuximide) is an anticonvulsant medication. It is sold by Pfizer under the name Petinutin.

**Indication.** For the control of absence (petit mal) seizures that are refractory to other drugs.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 01:22 | 5:03 | 0/0/0 | 0/0/2 | 0/0/0 | 80,375/2,170 | ollama / qwen3.8:27b-mtp-q8_0 | 30 | 12/18 | 30/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Biesdorf_2026](drugs/drug_mesuximide/pd_Biesdorf_2026_CBR6.md) | Biesdorf C et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70432](https://doi.org/10.1002/cpt.70432) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Biesdorf_2026](drugs/drug_mesuximide/pd_Biesdorf_2026_ORR.md) | Biesdorf C et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70432](https://doi.org/10.1002/cpt.70432) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Biesdorf_2026](drugs/drug_mesuximide/pd_Biesdorf_2026_unknown.md) | Biesdorf C et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70432](https://doi.org/10.1002/cpt.70432) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Tran_2026](drugs/drug_mesuximide/pd_Tran_2026_infection.md) | Tran TM et al., Pharmacokinetics and pharmacodynamics o…, The Journal of clinical inv… (2026) | [10.1172/jci207559](https://doi.org/10.1172/jci207559) |

## Coverage

- **PubMed hits:** 925 matched, 53 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Browne_1983.pdf` | Browne TR et al., Methsuximide for complex partial seizur…, Neurology (1983) | popPK | 8 | [10.1212/wnl.33.4.414](https://doi.org/10.1212/wnl.33.4.414) | [6403891](https://pubmed.ncbi.nlm.nih.gov/6403891) | The paper reports quantitative pharmacokinetic parameters (half-lives, time to steady state) for the principal metabolite N-desmethylmethsuximide, which serves as a proxy for the parent drug's disposition in this clinical context. |

<sub>queue written 2026-09-10T01:20:58.348086+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adeagbo_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for amodiaquine and desethylamodiaquine, not mesuximide. |
| PD | Adeagbo_2025 | not_relevant | 0 | 0 | The paper is a population pharmacokinetic (PK) study for amodiaquine (not mesuximide) and does not report any pharmacodynamic (PD) or exposure-response model parameters. |
| popPK | Amooei_2026 | irrelevant | 0 | 0 | The paper is a systematic review focused on tacrolimus pharmacokinetics and does not report any data for mesuximide. |
| PD | Amooei_2026 | not_relevant | 0 | 0 | The paper is a systematic review of pharmacokinetic (PK) and machine learning models for tacrolimus dosing; it does not report any pharmacodynamic (PD) or exposure-response relationships for mesuximide. |
| popPK | Bachmann_2024 | irrelevant | 0 | 0 | The paper describes an optimal dosing algorithm (OptiDose) using generic or unrelated example drugs (tumor/myelosuppression, biomarker, antibiotic) and does not study mesuximide. |
| PD | Bachmann_2024 | not_relevant | 0 | 0 | The paper describes a method for optimal dosing using NONMEM and applies it to generic or unrelated examples (biomarker, antibiotic), but does not report any pharmacodynamic data, model, or parameters for mesuximide. |
| popPK | Baehler_1980 | irrelevant | 1 | 0 | The paper is a case report on hemoperfusion for overdose, focusing on the metabolite N-desmethylmethsuximide rather than mesuximide, and does not provide quantitative population PK parameters for the parent drug. |
| popPK | Battino_1995 | irrelevant | 2 | 0 | The paper is a review that discusses mesuximide only qualitatively (noting C/D ratio sensitivity) without providing specific quantitative PK parameter values like clearance or volume. |
| popPK | Bender_2024 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for mosunetuzumab, not mesuximide. |
| PD | Bender_2024 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) and receptor occupancy (RO) modeling for mosunetuzumab, not mesuximide, and does not provide numeric PD parameters (e.g., Emax, EC50) for the queried drug. |
| PD | Bialer_2025 | not_relevant | 1 | 0 | The paper is a qualitative review of chirality in antiseizure medications and does not report specific numeric PD parameters or exposure-response data for mesuximide. |
| popPK | Biesdorf_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for Cofetuzumab Pelidotin and its payload Aur0101, not mesuximide. |
| popPK | Carrascosa-Arteaga_2025 | irrelevant | 0 | 0 | The provided evidence is garbled text containing no readable pharmacokinetic parameters or mention of mesuximide. |
| PD | Carrascosa-Arteaga_2025 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PopPK) models for risperidone and paliperidone, not mesuximide, and does not report specific numeric PD parameters. |
| popPK | Cheng_2026 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetics for antibody-drug conjugates (ADCs) and does not mention mesuximide or provide any PK parameters for it. |
| PD | Cheng_2026 | not_relevant | 0 | 0 | The paper is a review of pharmacometric methods for antibody-drug conjugates and does not contain any data, analysis, or numeric parameters for mesuximide. |
| popPK | Choi_2026 | irrelevant | 0 | 0 | The paper is a narrative review on pharmacometrics in special populations and does not mention mesuximide or report any specific pharmacokinetic parameters for it. |
| PD | Choi_2026 | not_relevant | 0 | 0 | The paper is a narrative review of pharmacometrics in special populations and does not report any specific pharmacodynamic or exposure-response data for mesuximide. |
| popPK | Dobrinska_1977 | irrelevant | 0 | 0 | The study investigates methsuximide, not mesuximide, which is a different drug. |
| popPK | Elenjickal_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of canagliflozin, not mesuximide. |
| PD | Elenjickal_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of canagliflozin and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Elmowafy_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mycophenolic acid (MPA) from mycophenolate mofetil, not mesuximide. |
| PD | Elmowafy_2026 | not_relevant | 0 | 0 | The paper investigates mycophenolate mofetil (MMF), not mesuximide, and reports only a categorical association between MPA exposure (AUC) and clinical response without deriving numeric PD parameters (e.g., EC50, Emax) for mesuximide. |
| popPK | Eun_2026 | irrelevant | 0 | 0 | The paper describes a computational platform for kinase inhibitor screening and does not contain any pharmacokinetic data or parameters for mesuximide. |
| PD | Eun_2026 | not_relevant | 0 | 0 | The paper describes a computational platform for kinase inhibitor screening and selectivity profiling using deep learning and docking; it does not report pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for mesuximide or any other drug. |
| popPK | Garamani_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and pharmacodynamics of rifampicin for tuberculosis, not mesuximide. |
| PD | Garamani_2026 | not_relevant | 0 | 0 | The paper focuses on rifampicin, not mesuximide, and does not report any PD parameters for the target drug. |
| popPK | Girelli_2026 | irrelevant | 0 | 0 | The paper is a computational modeling study of dural lymphatic clearance using gadobutrol as a tracer, not a pharmacokinetic study of mesuximide. |
| PD | Girelli_2026 | not_relevant | 0 | 0 | The paper focuses on the hydrodynamics and solute transport (advection-diffusion) of tracers in the cranial dura and meningeal lymphatics, not on the pharmacodynamic (exposure-response) effects of mesuximide. |
| popPK | Hall_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mephenytoin metabolism, and mesuximide is not the subject drug (only methsuximide/phensuximide are mentioned as inhibitors). |
| PGx | Hall_1987 | not_relevant | 0 | 0 | The paper investigates the metabolism of mephenytoin and the inhibition of its 4-hydroxylase by other compounds (including methsuximide), but does not report pharmacogenomic effects on the PK/PD of mesuximide. |
| popPK | Hallock_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of caffeine, not mesuximide. |
| PD | Hallock_2026 | not_relevant | 0 | 0 | The paper focuses on the external validation of a pharmacokinetic (PK) model for caffeine, not mesuximide, and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Helfer_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lansoprazole, not mesuximide. |
| PD | Helfer_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of lansoprazole and does not report any pharmacodynamic (PD) or exposure-response data. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper describes a general method for calculating initial PK estimates and uses various other drugs (e.g., ceftriaxone, vancomycin) as test cases, but does not report pharmacokinetic parameters for mesuximide. |
| PD | Huang_2025 | not_relevant | 0 | 0 | The paper describes a pipeline for generating initial estimates for population pharmacokinetic (PK) models and does not report any pharmacodynamic (PD) or exposure-response relationships for mesuximide or any other drug. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a methodological study on automated PopPK modeling using 22 datasets (e.g., bedaquiline, cefaclor) and does not mention or report parameters for mesuximide. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper focuses on automated population pharmacokinetic (PopPK) modeling methods and does not report any pharmacodynamic (PD) or exposure-response relationships for mesuximide or any other drug. |
| popPK | Huang_2026_2 | irrelevant | 0 | 0 | The paper describes a methodological framework for automated population pharmacokinetic modeling using simulated data and does not report any pharmacokinetic parameters for the specific drug mesuximide. |
| PD | Huang_2026_2 | not_relevant | 0 | 0 | The paper focuses on automated population pharmacokinetic (PopPK) model selection algorithms using simulated data and does not report any pharmacodynamic (PD) or exposure-response relationships for mesuximide. |
| popPK | Jeon_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carboplatin, not mesuximide. |
| PD | Jeon_2026 | not_relevant | 0 | 0 | The paper focuses on carboplatin pharmacokinetics and dosing formula optimization, not mesuximide, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Jeong_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sirolimus, not mesuximide. |
| PD | Jeong_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for sirolimus, not mesuximide, and does not contain any pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Jia_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not mesuximide. |
| PD | Jia_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PopPK) of rivaroxaban and does not report any pharmacodynamic (PD) or exposure-response model parameters (e.g., Emax, EC50) for the drug. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The paper is a computational study on drug-food interaction prediction using knowledge graphs and does not report any pharmacokinetic parameters for mesuximide. |
| PD | Kang_2026 | not_relevant | 0 | 0 | The paper describes a machine learning model for predicting drug-food interactions and does not report any pharmacodynamic or exposure-response data for mesuximide. |
| popPK | Kwack_2026 | irrelevant | 0 | 0 | The paper is a methodological study on an LLM agent (PKGPT) using warfarin, theophylline, and tobramycin as benchmark datasets, and does not report pharmacokinetic parameters for mesuximide. |
| PD | Kwack_2026 | not_relevant | 0 | 0 | The paper focuses on automated population pharmacokinetic (PopPK) modeling for warfarin, theophylline, and tobramycin, and does not mention mesuximide or report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of moxifloxacin, not mesuximide. |
| PD | Lee_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the external validation of population pharmacokinetic (popPK) models for moxifloxacin to optimize limited sampling strategies; it does not report any pharmacodynamic (PD) or exposure-response relationships, nor does it provide numeric PD parameters. |
| popPK | Lee_2026 | irrelevant | 0 | 0 | The paper is a methodological simulation study using generic PK/PD models and does not report pharmacokinetic parameters for the specific drug mesuximide. |
| PD | Lee_2026 | not_relevant | 0 | 0 | The paper is a methodological study on optimization algorithms using simulated data for generic PK/PD models (2CMT and Friberg myelosuppression) and does not report any pharmacodynamic relationship or parameters for mesuximide. |
| popPK | May_2002 | irrelevant | 0 | 0 | The study focuses on topiramate pharmacokinetics, and mesuximide is not mentioned (only methsuximide, a different drug, is listed as a comedication). |
| popPK | May_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rufinamide, and mesuximide is only mentioned as a co-administered drug affecting rufinamide concentrations. |
| popPK | May_2018 | irrelevant | 0 | 0 | The study focuses on lacosamide pharmacokinetics, and mesuximide is only mentioned as a comedication affecting lacosamide levels, not as the subject drug. |
| popPK | Navarrete_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of ketamine, not mesuximide. |
| PD | Navarrete_2024 | not_relevant | 0 | 0 | The paper reports a PK/PD model for ketamine, not mesuximide. |
| popPK | Olivo_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for methotrexate, not mesuximide. |
| PD | Olivo_2024 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for methotrexate, not mesuximide, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Porter_1979 | irrelevant | 0 | 0 | The study focuses on phensuximide and methsuximide, not mesuximide. |
| popPK | Rantanen_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for methylprednisolone, not mesuximide. |
| PD | Rantanen_2026 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of methylprednisolone, not mesuximide, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Shin_2024 | irrelevant | 0 | 0 | The paper evaluates LLMs for generating NONMEM code and does not report pharmacokinetic parameters for mesuximide. |
| PD | Shin_2024 | not_relevant | 0 | 0 | The paper evaluates LLMs for generating NONMEM PK code and does not report any pharmacodynamic or exposure-response data for mesuximide. |
| popPK | Silvola_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gabapentin, not mesuximide. |
| PD | Silvola_2025 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of gabapentin and its transfer into breast milk; it does not report a pharmacodynamic model or exposure-response relationship for mesuximide (or any other drug). |
| popPK | Sim_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of gaylussacin and pinosylvic acid, not mesuximide. |
| PD | Sim_2026 | not_relevant | 0 | 0 | The paper studies gaylussacin, not mesuximide, and does not report any pharmacodynamic parameters for mesuximide. |
| popPK | Steffens_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for amikacin, not mesuximide. |
| PD | Steffens_2025 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of amikacin, not mesuximide, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Tachet_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ruxolitinib, not mesuximide. |
| PD | Tachet_2026 | not_relevant | 3 | 2 | The paper is about ruxolitinib, not mesuximide, and only reports a qualitative exposure-toxicity association without numeric PD parameters. |
| popPK | Teixeira_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of meloxicam, not mesuximide. |
| PD | Teixeira_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for meloxicam but contains no pharmacodynamic (PD) data, exposure-response analysis, or numeric PD parameters. |
| popPK | Tran_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the monoclonal antibody CIS43LS, not for the drug mesuximide. |
| popPK | Wagner_1994 | irrelevant | 0 | 0 | The paper is a review of felbamate, and mesuximide is only mentioned as a drug whose pharmacokinetics are affected by felbamate, with no quantitative PK parameters provided for mesuximide. |
| PGx | Wright_1995 | not_relevant | 0 | 0 | The paper studies the metabolism of proguanil and chlorproguanil, not mesuximide. |
| popPK | Yu_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of amlodipine and telmisartan, not mesuximide. |
| PD | Yu_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics of amlodipine and telmisartan and does not report any pharmacodynamic or exposure-response data for mesuximide. |
| popPK | de_1979 | irrelevant | 0 | 0 | The paper studies hemoperfusion efficacy for various drugs (including methsuximide, not mesuximide) and does not report population pharmacokinetic parameters for mesuximide. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_mesuximide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
