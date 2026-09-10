# various

- **generic name:** various
- **ATC codes:** `A01AB11`, `A01AD11`, `M02AX10`, `R01AX10`, `R02AA20`, `V01AA20`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 13:16 | 26:18 | 0/0/0 | 1/2/2 | 0/0/0 | 531,784/22,130 | ollama / qwen3.8:27b-mtp-q8_0 | 36 | 2/34 | 35/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Soeorg_2026](drugs/drug_various/pd_Soeorg_2026_bacterial_count.md) | Soeorg H et al., Pharmacokinetic-pharmacodynamic modelin…, Antimicrobial agents and ch… (2026) | [10.1128/aac.00274-26](https://doi.org/10.1128/aac.00274-26) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Li_2026](drugs/drug_various/pd_Li_2026_Grade_2_peripheral_neuropathy.md) | Li (2026) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Li_2026](drugs/drug_various/pd_Li_2026_Tumor_size.md) | Li (2026) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lin_2026](drugs/drug_various/pd_Lin_2026_TTE.md) | Lin CW et al., Integration of Time-Varying Pharmacomet…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70253](https://doi.org/10.1002/psp4.70253) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Bauer_2025](drugs/drug_various/pd_Bauer_2025_Hb.md) | Bauer RJ et al., Tutorial for Modeling Delays in Biologi…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70046](https://doi.org/10.1002/psp4.70046) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Bauer_2025](drugs/drug_various/pd_Bauer_2025_RBC.md) | Bauer RJ et al., Tutorial for Modeling Delays in Biologi…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70046](https://doi.org/10.1002/psp4.70046) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Bauer_2025](drugs/drug_various/pd_Bauer_2025_RET.md) | Bauer RJ et al., Tutorial for Modeling Delays in Biologi…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70046](https://doi.org/10.1002/psp4.70046) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ooi_2026](drugs/drug_various/pd_Ooi_2026_ALP.md) | Ooi QX et al., Population Pharmacokinetics and Pharmac…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70247](https://doi.org/10.1002/psp4.70247) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ooi_2026](drugs/drug_various/pd_Ooi_2026_TB.md) | Ooi QX et al., Population Pharmacokinetics and Pharmac…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70247](https://doi.org/10.1002/psp4.70247) |

## Coverage

- **PubMed hits:** 6667 matched, 50 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `He_2021.pdf` | He CY et al., Population Pharmacokinetics and Dosing…, Antimicrobial agents and ch… (2021) | popPK | 10 | [10.1128/AAC.00897-21](https://doi.org/10.1128/AAC.00897-21) | [34339268](https://pubmed.ncbi.nlm.nih.gov/34339268) | The paper is a population PK study for vancomycin, but the specific numeric parameter values (CL, V) are not present in the provided text, which only describes the model structure and covariates. |

<sub>queue written 2026-09-10T13:11:20.073340+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aarons_1989 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tobramycin, not the subject drug 'various'. |
| popPK | Allen_1975 | irrelevant | 0 | 0 | The paper studies ifosfamide, not the target drug 'various'. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of population PK models for various lysosomal storage disease enzymes (e.g., imiglucerase, avalglucosidase alfa), not a study of a specific drug named "various," and the drug name "various" does not appear in the text. |
| PD | Barzel_2026 | not_relevant | 3 | 0 | The paper is a review summarizing PK/PD models but does not report specific numeric PD parameters (Emax, EC50, etc.) or derivable concentration-effect curves in the provided text. |
| popPK | Bauer_2025 | irrelevant | 0 | 0 | The paper is a software tutorial on modeling delays in NONMEM using generic examples (logistic growth, EPO/RBC simulation) and does not report original PK parameters for the drug "various". |
| popPK | Beermann_1977 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for bendroflumethiazide, not for the drug 'various'. |
| popPK | Chai_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for metoprolol, not for the drug "various". |
| PD | Chai_2026 | not_relevant | 2 | 1 | The paper reports a population pharmacokinetic (PopPK) model and simulations of exposure (concentration) based on covariates, but it does not fit a pharmacodynamic (PD) model or report numeric PD parameters (e.g., Emax, EC50) derived from the data; it only references literature-based concentration thresholds for effect. |
| popPK | Chasseaud_1985 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for benzydamine, not for the target drug 'various'. |
| popPK | Dahan_2026 | irrelevant | 0 | 0 | The paper is a narrative review of Model-Informed Drug Development methodologies for analgesics and does not report original quantitative PK parameters for a specific subject drug named "various". |
| PD | Dahan_2026 | not_relevant | 2 | 0 | The paper is a narrative review of MIDD methodologies and regulatory frameworks; it describes PK/PD concepts and mentions case studies (e.g., atezolizumab, opioids) but does not present original data, specific numeric PD parameters (Emax, EC50), or extractable concentration-effect curves for any drug. |
| popPK | Dai_2025 | irrelevant | 2 | 8 | The paper is a systematic review of tigecycline (not "various") and does not report original quantitative PK parameters for the subject drug. |
| PD | Dai_2025 | not_relevant | 1 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models only, with no pharmacodynamic (PD) or exposure-response analysis or numeric PD parameters reported. |
| popPK | Eleveld_2026 | irrelevant | 0 | 0 | The paper is a software validation study comparing OpenPMX and NONMEM using simulated data for various drugs (propofol, fentanyl, warfarin), not a primary pharmacokinetic study reporting original disposition parameters for a specific subject drug. |
| PD | Eleveld_2026 | not_relevant | 0 | 0 | The paper is a software validation study comparing estimation precision (bias/RMSE) of OpenPMX vs NONMEM using simulated PK/PD datasets; it does not report a specific drug's pharmacodynamic relationship or extractable PD parameters for a clinical context. |
| popPK | Genissel_1989 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for rilmenidine, not the drug "various". |
| popPK | Hardiansyah_2025 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetic modeling in radiopharmaceutical therapy and does not report original quantitative PK parameters for the specific drug "various". |
| PD | Hardiansyah_2025 | not_relevant | 2 | 0 | The paper is a review that summarizes other studies; while it mentions PK/PD models in the context of cited works, it does not present original data or specific numeric PD parameters (Emax, EC50, etc.) that can be extracted from this text. |
| popPK | He_2021 | relevant | 10 | 2 | The paper is a population PK study for vancomycin, but the specific numeric parameter values (CL, V) are not present in the provided text, which only describes the model structure and covariates. |
| popPK | Holt_1983 | irrelevant | 0 | 0 | The paper studies amiodarone, not the subject drug 'various'. |
| popPK | Jaruratanasirikul_2019 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for sulbactam, not for the drug 'various'. |
| popPK | Jermain_1991 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for lithium, not for the target drug 'various'. |
| PD | Jovanović_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling of Adalimumab (clearance, volume, absorption) and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Kong_2025 | irrelevant | 0 | 0 | The paper describes a software framework (PKPy) and uses simulation data or theophylline as examples, not the drug "various" as the subject of a PK study. |
| PD | Kong_2025 | not_relevant | 0 | 0 | The paper describes a pharmacokinetic (PK) analysis framework and reports PK parameters (CL, V, Ka) but contains no pharmacodynamic (PD) or exposure-response modeling or data. |
| popPK | Laporte-Amargos_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for piperacillin, not for the drug "various". |
| popPK | Lea-Henry_2018 | irrelevant | 0 | 0 | The paper is a general review of pharmacokinetic principles in kidney disease and does not report specific quantitative PK parameters for the drug 'various'. |
| popPK | Li_2026 | relevant | 10 | 0 | The paper describes a population PK model for PF-06804103, but the specific numeric parameter estimates are in Table 1, which is not included in the provided evidence. |
| popPK | Liang_2026 | relevant | 10 | 2 | The paper is a population pharmacokinetic study of remimazolam, but the specific numeric parameter estimates (CL, V, Q) are not present in the provided text, appearing only as references to tables or figures. |
| PD | Liang_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetic (PopPK and PBPK) modeling to derive dose recommendations based on exposure matching; it does not report any pharmacodynamic (PD) or exposure-response relationship, nor does it provide numeric PD parameters such as Emax or EC50. |
| popPK | Lin_2026 | irrelevant | 0 | 0 | The paper is a methodological simulation study using a hypothetical drug to demonstrate a statistical technique, not a pharmacokinetic study of the specific drug "various." |
| popPK | Oie_1986 | irrelevant | 0 | 0 | The text is a general theoretical discussion of drug distribution principles and does not report specific pharmacokinetic parameters for the drug 'various'. |
| popPK | Ooi_2026 | relevant | 10 | 2 | The paper is a population PK study for elafibranor, but the specific numeric parameter values (CL, V, Q) are located in Table S3 (supplementary material) which is not included in the evidence, leaving only half-lives and AUCs. |
| popPK | Qiao_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for imipenem, not for the drug "various". |
| popPK | Shahraz_2026 | irrelevant | 0 | 0 | The paper studies savolitinib, not the drug "various". |
| PD | Shahraz_2026 | not_relevant | 4 | 2 | The paper reports a qualitative positive trend between Cmin,ss and objective response rate but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response model in the abstract. |
| popPK | Soeorg_2026 | irrelevant | 0 | 0 | The paper is an in-vitro PKPD modeling study of meropenem and colistin/polymyxin B, not a population pharmacokinetic study of the drug "various" (which is not a recognized drug name in this context). |
| popPK | Sonders_1986 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for terazosin, not the subject drug "various". |
| popPK | Swartling_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for cefotaxime, not for the drug "various". |
| popPK | Tan_2026 | relevant | 10 | 2 | The paper is a population PK study for 5-FU, but the specific numeric parameter estimates (CL, V, Q, Vmax) are not present in the provided text, appearing only as a fragment or likely residing in the referenced tables/supplementary material. |
| PD | Tan_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling and dose optimization based on exposure (AUC) targets, without reporting any pharmacodynamic (PD) or exposure-response relationship parameters (e.g., Emax, EC50). |
| PD | Teixeira_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for meloxicam but does not include any pharmacodynamic (PD) data, exposure-response analysis, or numeric PD parameters. |
| popPK | Tosca_2025 | irrelevant | 0 | 0 | The paper is a review on the application of Large Language Models in pharmacometrics and does not report quantitative PK parameters for the drug 'various'. |
| PD | Tosca_2025 | not_relevant | 0 | 0 | The paper is a conceptual review on the application of Large Language Models in pharmacometrics and does not report any specific drug exposure-response data or numeric PD parameters. |
| popPK | Tucker_1979 | irrelevant | 0 | 0 | The paper is a general review of pharmacokinetic principles and does not report specific quantitative parameters for the drug 'various'. |
| popPK | Tulbah_2026 | irrelevant | 0 | 0 | The paper is a review of PKPD models for anesthetic drugs (propofol, remifentanil, etc.) and does not report quantitative PK parameters for the drug "various". |
| PD | Tulbah_2026 | not_relevant | 3 | 2 | The paper is a review that summarizes historical PK/PD models and lists equations (e.g., Hill equation) and some PK parameters, but it does not report original experimental data, specific numeric PD parameter estimates (like Emax or EC50 values) for a specific study, or an extractable concentration-effect curve derived from new data. |
| popPK | Wagner_2013 | irrelevant | 0 | 0 | The provided text is a general educational overview of pediatric pharmacokinetics principles and does not report specific quantitative PK parameters for the drug 'various'. |
| popPK | Weiss_2024 | irrelevant | 0 | 0 | The paper is a review of distribution clearance for 15 specific drugs (e.g., rocuronium, propranolol) and does not report pharmacokinetic parameters for the drug "various". |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetic models for daptomycin, not a study on the drug "various". |
| PD | Xie_2026 | not_relevant | 2 | 1 | The paper focuses on population pharmacokinetic (PopPK) modeling and exposure targets (AUC, Cmin) for daptomycin, but does not report a pharmacodynamic (PD) model or concentration-effect relationship with numeric PD parameters (e.g., Emax, EC50). |
| PD | Xu_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetic (PK) modeling and exposure prediction (AUC) using Bayesian and machine learning methods, with no analysis of pharmacodynamic (PD) or exposure-response relationships. |
| PD | Yamasaki_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (popPK) modeling and simulation of aripiprazole concentration-time profiles; it does not report any pharmacodynamic (PD) or exposure-response relationships, efficacy data, or numeric PD parameters. |
| popPK | Yin_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ceftazidime, not for the drug "various". |
| PD | Yin_2026 | not_relevant | 3 | 2 | The paper reports a population PK model and Monte Carlo simulations for probability of target attainment (PTA) based on a PK/PD index (fT&gt;MIC), but it does not fit a pharmacodynamic model (e.g., Emax, IC50) or report numeric PD parameters describing the concentration-effect relationship. |
| popPK | Zaidi_2026 | irrelevant | 0 | 0 | The paper is a systematic review of opioid pharmacokinetics in pregnancy and does not report original quantitative disposition parameters for the specific drug "various". |
| PD | Zaidi_2026 | not_relevant | 1 | 0 | The paper is a systematic review of pharmacokinetic (PopPK and PBPK) models for opioids in pregnancy and explicitly identifies the lack of integrated PK/PD frameworks as a future research priority, reporting no numeric PD parameters. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a systematic review of imipenem, not the drug "various" (which appears to be a placeholder or error in the prompt, but the paper clearly studies imipenem). |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models only, with no pharmacodynamic (PD) or exposure-response analysis reported. |
| popPK | Zhang_2026 | relevant | 10 | 2 | The paper is a population pharmacokinetic study of linezolid, but the specific numeric parameter values (CL, V) are located in Table 2, which is not included in the provided evidence. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetics (PopPK) and machine learning for concentration prediction, with no pharmacodynamic (PD) modeling, exposure-response analysis, or numeric PD parameters (e.g., Emax, EC50) reported. |
| popPK | Zhang_2026_2 | irrelevant | 2 | 1 | The paper is an external validation study of imipenem (not "various") and only reports ranges of parameters from cited models rather than original quantitative PK estimates for the subject drug. |
| PD | Zhang_2026_2 | not_relevant | 0 | 0 | The paper focuses exclusively on the external validation of population pharmacokinetic (popPK) models for imipenem, reporting PK metrics (rPE, NPDE) without any pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Zhenyan_2026 | irrelevant | 2 | 1 | The paper is a systematic review of rituximab (not "various") and lacks specific numeric PK parameter values for the subject drug in the provided evidence. |
| PD | Zhenyan_2026 | not_relevant | 1 | 0 | The paper is a systematic review of pharmacokinetics (PK) only; it reports PK parameters (CL, Vc, etc.) and covariates but does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper is a systematic review of pharmacokinetics for immunoglobulins (IVIg/SCIg), not the drug "various". |
| PD | van_2026 | not_relevant | 3 | 0 | This is a systematic review that summarizes PK models and mentions the existence of two PK-PD models, but it does not provide the specific numeric PD parameters (Emax, EC50, etc.) or effect-concentration curves required for extraction. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_various`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
