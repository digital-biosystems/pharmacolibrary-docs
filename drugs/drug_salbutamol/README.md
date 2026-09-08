# salbutamol

- **generic name:** salbutamol
- **ATC codes:** `R03AC02`, `R03AK04`, `R03AK13`, `R03AK15`, `R03AL02`, `R03CC02`
- **DrugBank:** [DB01001](https://go.drugbank.com/drugs/DB01001)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Salbutamol (Albuterol [USAN]) is a short-acting, selective beta2-adrenergic receptor agonist used in the treatment of asthma and COPD. It is 29 times more selective for beta2 receptors than beta1 receptors giving it higher specificity for pulmonary beta receptors versus beta1-adrenergic receptors located in the heart. Salbutamol is formulated as a racemic mixture of the R- and S-isomers. The R-isomer has 150 times greater affinity for the beta2-receptor than the S-isomer and the S-isomer has been associated with toxicity. This lead to the development of levalbuterol, the single R-isomer of salbutamol. However, the high cost of levalbuterol compared to salbutamol has deterred wide-spread use of this enantiomerically pure version of the drug. Salbutamol is generally used for acute episodes of bronchospasm caused by bronchial asthma, chronic bronchitis and other chronic bronchopulmonary disorders such as chronic obstructive pulmonary disorder (COPD). It is also used prophylactically for exercise-induced asthma.[Label,A174379,A174400]

**Indication.** Salbutamol is indicated for (i) the symptomatic relief and prevention of bronchospasm due to bronchial asthma, chronic bronchitis, reversible obstructive airway disease, and other chronic bronchopulmonary disorders in which bronchospasm is a complicating factor, and/or (ii) the acute prophylaxis against exercise-induced bronchospasm and other stimuli known to induce bronchospasm.[Label,F3265,F3268]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 03:16 | 28:43 | 9/4/3 | 2/6/0 | 0/0/0 | 604,632/75,887 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 5/12 | 17/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Courlet_2022](drugs/drug_salbutamol/Salbutamol_Courlet2022_reference.md) | Courlet P et al., Model-based meta-analysis of salbutamol…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12773](https://doi.org/10.1002/psp4.12773) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Marques_2024](drugs/drug_salbutamol/Salbutamol_Marques2024_covariate.md) | Marques (2024) | — |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Marques_2024](drugs/drug_salbutamol/Salbutamol_Marques2024_estimate.md) | Marques (2024) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Marques_2024](drugs/drug_salbutamol/Salbutamol_Marques2024_fold_error.md) | Marques (2024) | — |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 0.7234)</sub><br><sub>route_to: `human_review`</sub> | [Marques_2024](drugs/drug_salbutamol/Salbutamol_Marques2024_geometric_mean.md) | Marques (2024) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Marques_2024](drugs/drug_salbutamol/Salbutamol_Marques2024_observed.md) | Marques (2024) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Marques_2024](drugs/drug_salbutamol/Salbutamol_Marques2024_predicted.md) | Marques (2024) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Marques_2024](drugs/drug_salbutamol/Salbutamol_Marques2024_value.md) | Marques (2024) | — |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Marques_2024_2](drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference.md) | Marques (2024) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Vet_2020](drugs/drug_salbutamol/Salbutamol_Vet2020_estimation.md) | Vet NJ et al., Population Pharmacokinetics of Intraven…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00811-y](https://doi.org/10.1007/s40262-019-00811-y) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Vet_2020](drugs/drug_salbutamol/Salbutamol_Vet2020_ipv.md) | Vet NJ et al., Population Pharmacokinetics of Intraven…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00811-y](https://doi.org/10.1007/s40262-019-00811-y) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Vet_2020](drugs/drug_salbutamol/Salbutamol_Vet2020_shrinkage.md) | Vet NJ et al., Population Pharmacokinetics of Intraven…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00811-y](https://doi.org/10.1007/s40262-019-00811-y) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Walsh_2023](drugs/drug_salbutamol/Salbutamol_Walsh2023_reference.md) | Walsh S et al., Optimising intravenous salbutamol in ch…, Archives of disease in chil… (2023) | [10.1136/archdischild-2022-324008](https://doi.org/10.1136/archdischild-2022-324008) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Walsh_2023](drugs/drug_salbutamol/Salbutamol_Walsh2023_fixed_effects.md) | Walsh S et al., Optimising intravenous salbutamol in ch…, Archives of disease in chil… (2023) | [10.1136/archdischild-2022-324008](https://doi.org/10.1136/archdischild-2022-324008) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Walsh_2023](drugs/drug_salbutamol/Salbutamol_Walsh2023_random_effects.md) | Walsh S et al., Optimising intravenous salbutamol in ch…, Archives of disease in chil… (2023) | [10.1136/archdischild-2022-324008](https://doi.org/10.1136/archdischild-2022-324008) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Walsh_2023](drugs/drug_salbutamol/Salbutamol_Walsh2023_residual_variability.md) | Walsh S et al., Optimising intravenous salbutamol in ch…, Archives of disease in chil… (2023) | [10.1136/archdischild-2022-324008](https://doi.org/10.1136/archdischild-2022-324008) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Cullum_2023](drugs/drug_salbutamol/pd_Cullum_2023_RIU.md) | Cullum SA et al., Kinetic analysis of endogenous β2 -adre…, British journal of pharmaco… (2023) | [10.1111/bph.16008](https://doi.org/10.1111/bph.16008) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Cullum_2023](drugs/drug_salbutamol/pd_Cullum_2023_cAMP.md) | Cullum SA et al., Kinetic analysis of endogenous β2 -adre…, British journal of pharmaco… (2023) | [10.1111/bph.16008](https://doi.org/10.1111/bph.16008) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ellis_1995](drugs/drug_salbutamol/pd_Ellis_1995_IP_accumulation.md) | Ellis KE et al., Correlation of cyclic AMP accumulation…, British journal of pharmaco… (1995) | [10.1111/j.1476-5381.1995.tb15103.x](https://doi.org/10.1111/j.1476-5381.1995.tb15103.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ellis_1995](drugs/drug_salbutamol/pd_Ellis_1995_cAMP.md) | Ellis KE et al., Correlation of cyclic AMP accumulation…, British journal of pharmaco… (1995) | [10.1111/j.1476-5381.1995.tb15103.x](https://doi.org/10.1111/j.1476-5381.1995.tb15103.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ellis_1995](drugs/drug_salbutamol/pd_Ellis_1995_relaxation.md) | Ellis KE et al., Correlation of cyclic AMP accumulation…, British journal of pharmaco… (1995) | [10.1111/j.1476-5381.1995.tb15103.x](https://doi.org/10.1111/j.1476-5381.1995.tb15103.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Iredale_1991](drugs/drug_salbutamol/pd_Iredale_1991_sGaw.md) | Iredale MJ et al., Salbutamol inhibits metabisulphite-indu…, British journal of clinical… (1991) | [10.1111/j.1365-2125.1991.tb03967.x](https://doi.org/10.1111/j.1365-2125.1991.tb03967.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kume_2018](drugs/drug_salbutamol/pd_Kume_2018_percent_inhibition_of_methacholine_induced_contrac.md) | Kume H et al., Involvement of Allosteric Effect and KC…, International journal of mo… (2018) | [10.3390/ijms19071999](https://doi.org/10.3390/ijms19071999) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kume_2018](drugs/drug_salbutamol/pd_Kume_2018_resp.md) | Kume H et al., Involvement of Allosteric Effect and KC…, International journal of mo… (2018) | [10.3390/ijms19071999](https://doi.org/10.3390/ijms19071999) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Qian_1993](drugs/drug_salbutamol/pd_Qian_1993_Emax.md) | Qian Y et al., Effects of rolipram and siguazodan on t…, British journal of pharmaco… (1993) | [10.1111/j.1476-5381.1993.tb13641.x](https://doi.org/10.1111/j.1476-5381.1993.tb13641.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Qian_1993](drugs/drug_salbutamol/pd_Qian_1993_human_isolated_bronchus_relaxation.md) | Qian Y et al., Effects of rolipram and siguazodan on t…, British journal of pharmaco… (1993) | [10.1111/j.1476-5381.1993.tb13641.x](https://doi.org/10.1111/j.1476-5381.1993.tb13641.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rower_2025](drugs/drug_salbutamol/pd_Rower_2025_MAP_reduction.md) | Rower JE et al., Pharmacokinetics and Pharmacodynamics o…, Journal of clinical pharmac… (2025) | [10.1002/jcph.6179](https://doi.org/10.1002/jcph.6179) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rower_2025](drugs/drug_salbutamol/pd_Rower_2025_PRAM.md) | Rower JE et al., Pharmacokinetics and Pharmacodynamics o…, Journal of clinical pharmac… (2025) | [10.1002/jcph.6179](https://doi.org/10.1002/jcph.6179) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rower_2025](drugs/drug_salbutamol/pd_Rower_2025_PRAM_score_reduction.md) | Rower JE et al., Pharmacokinetics and Pharmacodynamics o…, Journal of clinical pharmac… (2025) | [10.1002/jcph.6179](https://doi.org/10.1002/jcph.6179) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rower_2025](drugs/drug_salbutamol/pd_Rower_2025_hypotension.md) | Rower JE et al., Pharmacokinetics and Pharmacodynamics o…, Journal of clinical pharmac… (2025) | [10.1002/jcph.6179](https://doi.org/10.1002/jcph.6179) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Venkatasubramanian_2020](drugs/drug_salbutamol/pd_Venkatasubramanian_2020_HR.md) | Venkatasubramanian R et al., Semi-mechanistic modelling platform to…, British journal of pharmaco… (2020) | [10.1111/bph.15079](https://doi.org/10.1111/bph.15079) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Venkatasubramanian_2020](drugs/drug_salbutamol/pd_Venkatasubramanian_2020_MAP.md) | Venkatasubramanian R et al., Semi-mechanistic modelling platform to…, British journal of pharmaco… (2020) | [10.1111/bph.15079](https://doi.org/10.1111/bph.15079) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Venkatasubramanian_2020](drugs/drug_salbutamol/pd_Venkatasubramanian_2020_dPdt_max.md) | Venkatasubramanian R et al., Semi-mechanistic modelling platform to…, British journal of pharmaco… (2020) | [10.1111/bph.15079](https://doi.org/10.1111/bph.15079) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Walsh_2023](drugs/drug_salbutamol/pd_Walsh_2023_DBP.md) | Walsh S et al., Optimising intravenous salbutamol in ch…, Archives of disease in chil… (2023) | [10.1136/archdischild-2022-324008](https://doi.org/10.1136/archdischild-2022-324008) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Walsh_2023](drugs/drug_salbutamol/pd_Walsh_2023_HR.md) | Walsh S et al., Optimising intravenous salbutamol in ch…, Archives of disease in chil… (2023) | [10.1136/archdischild-2022-324008](https://doi.org/10.1136/archdischild-2022-324008) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Walsh_2023](drugs/drug_salbutamol/pd_Walsh_2023_PASS.md) | Walsh S et al., Optimising intravenous salbutamol in ch…, Archives of disease in chil… (2023) | [10.1136/archdischild-2022-324008](https://doi.org/10.1136/archdischild-2022-324008) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Walsh_2023](drugs/drug_salbutamol/pd_Walsh_2023_base_excess.md) | Walsh S et al., Optimising intravenous salbutamol in ch…, Archives of disease in chil… (2023) | [10.1136/archdischild-2022-324008](https://doi.org/10.1136/archdischild-2022-324008) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Walsh_2023](drugs/drug_salbutamol/pd_Walsh_2023_glucose.md) | Walsh S et al., Optimising intravenous salbutamol in ch…, Archives of disease in chil… (2023) | [10.1136/archdischild-2022-324008](https://doi.org/10.1136/archdischild-2022-324008) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Walsh_2023](drugs/drug_salbutamol/pd_Walsh_2023_lactate.md) | Walsh S et al., Optimising intravenous salbutamol in ch…, Archives of disease in chil… (2023) | [10.1136/archdischild-2022-324008](https://doi.org/10.1136/archdischild-2022-324008) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Walsh_2023](drugs/drug_salbutamol/pd_Walsh_2023_pH.md) | Walsh S et al., Optimising intravenous salbutamol in ch…, Archives of disease in chil… (2023) | [10.1136/archdischild-2022-324008](https://doi.org/10.1136/archdischild-2022-324008) |

## Coverage

- **PubMed hits:** 741 matched, 56 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 16  ·  extracted 9  ·  needs_review 3  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bisaso_2026 | irrelevant | 0 | 0 | The paper is a simulation study using hypothetical drugs A and B, not salbutamol, and does not report specific pharmacokinetic parameters for salbutamol. |
| PD | Bisaso_2026 | not_relevant | 2 | 1 | The paper is a theoretical simulation study using hypothetical drugs A and B to analyze variability propagation; it does not report specific pharmacodynamic data or parameters for salbutamol. |
| PD | Courlet_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model and simulations of urinary concentrations for doping control, but it does not model or report any pharmacodynamic (PD) or exposure-response relationship (e.g., bronchodilation effect). |
| popPK | Cullum_2023 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological analysis of cAMP signaling kinetics in HEK293 cells, not a pharmacokinetic study reporting disposition parameters like clearance or volume for salbutamol. |
| popPK | Ellis_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of salbutamol's mechanism of action (cAMP accumulation and relaxation) in bovine tracheal smooth muscle, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Kume_2018 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor crosstalk in guinea pig airway smooth muscle, not a pharmacokinetic study, and reports no disposition parameters for salbutamol. |
| PD | Marques_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (popPK) modeling of oral salbutamol using virtual patients and does not report any pharmacodynamic (PD) data, exposure-response relationships, or numeric PD parameters. |
| PD | Marques_2024_2 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) model for salbutamol, focusing on concentration-time profiles and covariates affecting PK parameters, but it does not report any pharmacodynamic (PD) data, exposure-response relationships, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Marques_2024_3 | irrelevant | 0 | 0 | The paper is a general review of in silico approaches in precision medicine and does not report any pharmacokinetic parameters for salbutamol. |
| PD | Marques_2024_3 | not_relevant | 1 | 0 | The paper is a general review of in silico approaches and mentions salbutamol only in the context of a PBPK model for drug-drug interactions, without reporting any specific pharmacodynamic (PD) parameters or exposure-response relationships for salbutamol. |
| popPK | Qian_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of bronchial smooth muscle relaxation, not a pharmacokinetic study, and reports no disposition parameters for salbutamol. |
| popPK | Rower_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of intravenous magnesium sulfate, not salbutamol. |
| popPK | Sofianopoulou_2017 | irrelevant | 0 | 0 | The paper is an epidemiological study modeling seasonal and spatiotemporal variation in salbutamol prescribing rates, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Thoueille_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of salmeterol and its metabolite, not salbutamol. |
| PD | Thoueille_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) model for salmeterol and its metabolite, but it does not model or report any pharmacodynamic (PD) or exposure-response relationship (e.g., bronchodilation, heart rate, or other physiological effects). |
| popPK | Venkatasubramanian_2020 | irrelevant | 2 | 0 | The study focuses on cardiovascular pharmacodynamics (PD) and uses salbutamol only as a reference drug for diurnal variation, with PK parameters explicitly stated to be in the Supplemental Section which is not provided. |
| PD | Vet_2020 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for salbutamol but does not include a pharmacodynamic (PD) model or analysis of exposure-response relationships, despite collecting asthma scores. |
| popPK | Wahab_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic cough challenge trial that reports cough counts and lung function changes, but contains no pharmacokinetic parameters (e.g., clearance, volume, half-life) for salbutamol. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_salbutamol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
