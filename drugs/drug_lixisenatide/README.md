# lixisenatide

- **generic name:** lixisenatide
- **ATC codes:** `A10AE54`, `A10BJ03`
- **DrugBank:** [DB09265](https://go.drugbank.com/drugs/DB09265)
- **groups:** approved, investigational

## About

**Description.** Lixisenatide is a glucagon-like peptide-1 (GLP-1) receptor agonist used in the treatment of type II diabetes mellitus (T2DM). It is sold by Sanofi-Aventis under the brand name Adlyxin in the US[L763] and Lyxumia in the EU.[L764] Adlyxin recieved FDA approval July 28, 2016.[L763]

**Indication.** Lixisenatide is indicated as an adjunct to diet and exercise to improve glycemic control in adult patients with type II diabetes mellitus.[L48400] It is also available in combination with [insulin glargine] for the same indication.[L48405]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-26 20:07 | 35:44 | 0/0/0 | 0/5/0 | 0/0/0 | 836,657/10,744 | ollama / qwen3.8:27b-mtp-q8_0 | 61 | 5/52 | 60/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Becker_2015](drugs/drug_lixisenatide/pd_Becker_2015_C_peptide.md) | Becker RH et al., Lixisenatide reduces postprandial hyper…, Diabetes/metabolism researc… (2015) | [10.1002/dmrr.2647](https://doi.org/10.1002/dmrr.2647) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Becker_2015](drugs/drug_lixisenatide/pd_Becker_2015_acetaminophen_absorption.md) | Becker RH et al., Lixisenatide reduces postprandial hyper…, Diabetes/metabolism researc… (2015) | [10.1002/dmrr.2647](https://doi.org/10.1002/dmrr.2647) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Becker_2015](drugs/drug_lixisenatide/pd_Becker_2015_glucagon.md) | Becker RH et al., Lixisenatide reduces postprandial hyper…, Diabetes/metabolism researc… (2015) | [10.1002/dmrr.2647](https://doi.org/10.1002/dmrr.2647) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Becker_2015](drugs/drug_lixisenatide/pd_Becker_2015_insulin.md) | Becker RH et al., Lixisenatide reduces postprandial hyper…, Diabetes/metabolism researc… (2015) | [10.1002/dmrr.2647](https://doi.org/10.1002/dmrr.2647) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Becker_2015](drugs/drug_lixisenatide/pd_Becker_2015_postprandial_plasma_glucose.md) | Becker RH et al., Lixisenatide reduces postprandial hyper…, Diabetes/metabolism researc… (2015) | [10.1002/dmrr.2647](https://doi.org/10.1002/dmrr.2647) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Franken_2026](drugs/drug_lixisenatide/pd_Franken_2026_hallucinations.md) | Franken LG et al., Pediatric pharmacokinetics and pharmaco…, Scientific reports (2026) | [10.1038/s41598-026-47959-9](https://doi.org/10.1038/s41598-026-47959-9) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Franken_2026](drugs/drug_lixisenatide/pd_Franken_2026_mean_arterial_pressure.md) | Franken LG et al., Pediatric pharmacokinetics and pharmaco…, Scientific reports (2026) | [10.1038/s41598-026-47959-9](https://doi.org/10.1038/s41598-026-47959-9) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Gautier_2022](drugs/drug_lixisenatide/pd_Gautier_2022_unknown.md) | Gautier T et al., Modeling the Effect of Subcutaneous Lix…, Journal of diabetes science… (2022) | [10.1177/19322968211015671](https://doi.org/10.1177/19322968211015671) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Saporta_2026](drugs/drug_lixisenatide/pd_Saporta_2026_bacterial_counts.md) | Saporta R et al., Pharmacokinetic-pharmacodynamic modelin…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01788-25](https://doi.org/10.1128/aac.01788-25) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Takayanagi_2018](drugs/drug_lixisenatide/pd_Takayanagi_2018_HbA1c.md) | Takayanagi R et al., Evaluation of Drug Efficacy of GLP-1 Re…, Biological & pharmaceutical… (2018) | [10.1248/bpb.b17-00237](https://doi.org/10.1248/bpb.b17-00237) |

## Coverage

- **PubMed hits:** 5422 matched, 71 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barrientos-Pérez_2022 | relevant | 8 | 2 | The study reports PK parameters (Cmax, AUC, tmax) for lixisenatide, but the specific numeric values are located in Table 2 and Supplementary Figures which are not included in the provided evidence. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of population PK models for therapeutic enzymes in lysosomal storage diseases (e.g., imiglucerase, avalglucosidase alfa) and does not mention or report parameters for lixisenatide. |
| PD | Barzel_2026 | not_relevant | 0 | 0 | The paper is a review of pharmacokinetic/pharmacodynamic models for therapeutic enzymes in lysosomal storage diseases and does not contain any data, analysis, or parameters for lixisenatide. |
| popPK | Becker_2015 | irrelevant | 2 | 1 | The study reports only descriptive PK parameters (AUC, Cmax, tmax) for dose proportionality and lacks compartmental model parameters (CL, V, ka) or population PK estimates. |
| popPK | Blackman_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for methotrexate, not lixisenatide. |
| PD | Blackman_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling of high-dose methotrexate and contains no pharmacodynamic (PD) or exposure-response analysis. |
| PD | Brown_2013 | not_relevant | 2 | 1 | The text is a narrative review discussing clinical trial outcomes (HbA1c, PPG changes) and mechanisms, but it does not report a pharmacokinetic/pharmacodynamic model, exposure-response analysis, or numeric PD parameters (e.g., Emax, EC50) for lixisenatide. |
| popPK | Chung_2019 | irrelevant | 0 | 0 | The study focuses on the renal mechanisms of empagliflozin in rats, using lixisenatide only as a comparator agent without reporting any pharmacokinetic parameters for it. |
| popPK | Dai_2025 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for tigecycline, not lixisenatide. |
| PD | Dai_2025 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics (PK) for tigecycline, not lixisenatide, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Dalsgaard_2018 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular risk factors in head-to-head trials and does not report quantitative pharmacokinetic parameters for lixisenatide. |
| popPK | Dodeja_2026 | irrelevant | 0 | 0 | The paper is a review on drug secretion into human milk and does not report pharmacokinetic parameters for lixisenatide. |
| PD | Dodeja_2026 | not_relevant | 0 | 0 | The paper is a review on drug secretion into human milk and does not contain any pharmacodynamic or exposure-response data for lixisenatide. |
| popPK | Franken_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of guanabenz, not lixisenatide. |
| popPK | Fresquet-Molina_2025 | irrelevant | 0 | 0 | The paper is a systematic review of pharmacokinetic models for vancomycin, not lixisenatide. |
| PD | Fresquet-Molina_2025 | not_relevant | 0 | 0 | The paper is a systematic review of pharmacokinetic models for vancomycin and does not contain any pharmacodynamic or exposure-response data for lixisenatide. |
| popPK | Gallego-Hernández_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for linezolid, not lixisenatide. |
| PD | Gallego-Hernández_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for linezolid, not lixisenatide, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Gandhi_2025 | irrelevant | 0 | 0 | The paper is a narrative review on the neuroprotective mechanisms of GLP-1RAs in Alzheimer's and Parkinson's disease and does not report any quantitative pharmacokinetic parameters for lixisenatide. |
| popPK | Gao_2025 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of mycophenolate sodium (MPS) and mycophenolic acid (MPA), not lixisenatide. |
| PD | Gao_2025 | not_relevant | 0 | 0 | The paper focuses on the external validation of population pharmacokinetic (popPK) models for mycophenolate sodium and does not report any pharmacodynamic (PD) or exposure-response relationships for lixisenatide. |
| popPK | García-Orueta_2026 | irrelevant | 0 | 0 | The paper focuses on population pharmacokinetic models for teicoplanin, piperacillin, and meropenem, and does not study lixisenatide. |
| PD | García-Orueta_2026 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetic (PK) design optimization for antibiotics (teicoplanin, piperacillin, meropenem) and does not involve lixisenatide or report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Gautier_2022 | relevant | 8 | 2 | The paper describes a compartmental PK model for lixisenatide, but the specific numeric parameter values are explicitly stated to be in Supplementary Figures S6-S9, which are not included in the provided evidence. |
| popPK | Hanefeld_2017 | irrelevant | 0 | 0 | The paper is a post hoc meta-analysis of efficacy and safety outcomes (HbA1c, glucose, adverse events) in patients with renal impairment, and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for lixisenatide. |
| popPK | Hardiansyah_2025 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetic modeling in radiopharmaceutical therapy and does not report any pharmacokinetic parameters for lixisenatide. |
| PD | Hardiansyah_2025 | not_relevant | 0 | 0 | The paper is a review of population pharmacokinetic modeling in radiopharmaceutical therapy and does not report any pharmacodynamic or exposure-response analysis for lixisenatide. |
| popPK | Hernández-Gago_2026 | irrelevant | 0 | 0 | The paper is a systematic review of high-alert medications in obese pediatric patients and does not mention lixisenatide or provide any pharmacokinetic parameters for it. |
| PD | Hernández-Gago_2026 | not_relevant | 0 | 0 | The paper is a systematic review of dosing strategies in obese pediatric patients and does not report specific pharmacodynamic or exposure-response data for lixisenatide. |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for utreloxastat, not lixisenatide. |
| PD | Hu_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PopPK) modeling of utreloxastat, specifically time-varying clearance, and does not report any pharmacodynamic (PD) or exposure-response data. |
| popPK | Husheng_2026 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetics for vancomycin, not lixisenatide. |
| PD | Husheng_2026 | not_relevant | 0 | 0 | The paper is a review of population pharmacokinetic (PK) models for vancomycin and does not report any pharmacodynamic (PD) or exposure-response relationships for lixisenatide. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not lixisenatide. |
| PD | Jia_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for rivaroxaban, not lixisenatide, and does not include a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50). |
| PD | Kalra_2016 | not_relevant | 1 | 0 | The paper is a narrative review of GLP-1 receptor agonists that discusses general pharmacological profiles and clinical trial outcomes (HbA1c, weight) but does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response models for lixisenatide. |
| popPK | Lee_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for gentamicin, not lixisenatide. |
| PD | Lee_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) of gentamicin in an obese hemodialysis patient and does not report any pharmacodynamic (PD) or exposure-response relationship for lixisenatide. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of PF-06804103, not lixisenatide. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper reports PK/PD models for PF-06804103, not lixisenatide. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for tislelizumab, not lixisenatide. |
| PD | Liu_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) of tislelizumab (a different drug) and does not contain any data or analysis regarding lixisenatide or any pharmacodynamic (PD) relationships. |
| popPK | Marques_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of propranolol and omeprazole, and does not report any data for lixisenatide. |
| PD | Marques_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) and drug-drug interactions of propranolol and omeprazole, with no mention of lixisenatide or any pharmacodynamic (PD) modeling. |
| PD | Meier_2012 | not_relevant | 2 | 1 | The paper is a narrative review that qualitatively discusses the pharmacodynamic profiles of GLP-1 receptor agonists but does not report original data, numeric PD parameters, or extractable exposure-response curves for lixisenatide. |
| PD | Miñambres_2017 | not_relevant | 2 | 1 | The paper is a qualitative review comparing clinical trial outcomes (HbA1c, glucose levels) and pharmacokinetic profiles of GLP-1 agonists, but it does not report or derive numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect curves for lixisenatide. |
| PGx | Nauck_2021 | not_relevant | 0 | 0 | The paper is a general review of GLP-1 receptor agonists and does not report specific pharmacogenomic effects on the PK or PD of lixisenatide. |
| PD | Orozco_2025 | not_relevant | 1 | 0 | The paper is a comprehensive review of GLP-1 signaling in Parkinson's disease and does not report any primary pharmacokinetic or pharmacodynamic data, nor does it provide numeric PD parameters for lixisenatide. |
| popPK | Pan_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for adalimumab, not lixisenatide. |
| PD | Prasad-Reddy_2015 | not_relevant | 2 | 0 | The paper is a clinical review that qualitatively discusses the pharmacodynamics of GLP-1 agonists but does not provide specific numeric PD parameters (e.g., Emax, EC50) or exposure-response curves for lixisenatide. |
| PD | Raccah_2013 | not_relevant | 3 | 2 | The paper is a clinical review that reports dose-dependent efficacy trends (HbA1c, PPG) and PK properties (Cmax, AUC) but does not provide a formal PK/PD model, concentration-effect curve, or specific numeric PD parameters (e.g., Emax, EC50) for lixisenatide. |
| popPK | Saporta_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for meropenem in mice, not lixisenatide. |
| popPK | Sleem_2024 | irrelevant | 0 | 0 | The study is a mechanistic investigation of nephroprotective effects in rats and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for lixisenatide. |
| popPK | Soeorg_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetic-pharmacodynamic modeling of meropenem and colistin/polymyxin B against Acinetobacter baumannii and does not involve lixisenatide. |
| PD | Soeorg_2026 | not_relevant | 0 | 0 | The paper reports a PK/PD model for meropenem and colistin/polymyxin B, not lixisenatide. |
| popPK | Soria-Chacartegui_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tramadol, not lixisenatide. |
| PD | Soria-Chacartegui_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of tramadol and the influence of pharmacogenetics on PK parameters; it does not report any pharmacodynamic (PD) or exposure-response data for lixisenatide or any other drug. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for 5-fluorouracil (5-FU), not lixisenatide. |
| PD | Suthahar_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for 5-fluorouracil and does not contain any pharmacodynamic (PD) or exposure-response analysis for lixisenatide. |
| popPK | Sürmelioğlu_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic studies for vancomycin, not lixisenatide. |
| PD | Sürmelioğlu_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PopPK) studies for vancomycin in CRRT patients and does not report any pharmacodynamic (PD) or exposure-response data for lixisenatide. |
| popPK | Tang_2020 | irrelevant | 2 | 0 | The paper is a medicinal chemistry study on lixisenatide analogues that uses lixisenatide as a comparator/reference, and it does not report quantitative population pharmacokinetic parameters (CL, V, Q, ka) for lixisenatide itself. |
| popPK | Tonneijck_2017 | irrelevant | 0 | 0 | The study investigates renal hemodynamics and glycaemic control, not the pharmacokinetic disposition parameters (CL, V, ka) of lixisenatide. |
| popPK | Tsai_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for vancomycin, not lixisenatide. |
| PD | Tsai_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of vancomycin in hemodialysis patients and does not report any pharmacodynamic or exposure-response relationship for lixisenatide. |
| popPK | Wassef_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefazolin, not lixisenatide. |
| PD | Wassef_2026 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (popPK) of cefazolin in obese patients and does not report any pharmacodynamic (PD) or exposure-response relationship for lixisenatide. |
| PD | Yamada_2017 | not_relevant | 2 | 1 | The paper reports group-level mean changes in pharmacodynamic endpoints (PPG AUC, C-peptide) but does not provide individual concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50) for lixisenatide. |
| popPK | Yan_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of escitalopram, not lixisenatide. |
| PD | Yan_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the external validation of population pharmacokinetic (PopPK) models for escitalopram and does not report any pharmacodynamic (PD) or exposure-response relationships for lixisenatide. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for imipenem, not lixisenatide. |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for imipenem and does not report any pharmacodynamic (PD) or exposure-response relationships for lixisenatide. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of linezolid, not lixisenatide. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetics (PopPK) and machine learning for linezolid concentration prediction; it does not report any pharmacodynamic (PD) or exposure-response relationship for lixisenatide or any other drug. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for immunoglobulins (IVIg/SCIg), not lixisenatide. |
| PD | van_2026 | not_relevant | 0 | 0 | The paper is a systematic review of pharmacokinetic models for immunoglobulins (IVIg/SCIg) and does not contain any data, analysis, or parameters for lixisenatide. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_lixisenatide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
