# Orforglipron

- **generic name:** Orforglipron
- **ATC codes:** not captured
- **DrugBank:** [DB18964](https://go.drugbank.com/drugs/DB18964)
- **groups:** investigational

## About

**Description.** Orforglipron is under investigation in clinical trial NCT06010004 (A Long-term Safety Study of Orforglipron (LY3502970) in Participants With Type 2 Diabetes).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-26 21:00 | 12:36 | 0/0/0 | 0/2/0 | 0/0/0 | 158,755/10,531 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 4/8 | 11/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Guo_2025](drugs/drug_orforglipron/pd_Guo_2025_weight_reduction.md) | Guo H et al., Comparative efficacy and safety of GLP-…, Obesity pillars (2025) | [10.1016/j.obpill.2025.100162](https://doi.org/10.1016/j.obpill.2025.100162) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Sonne_2026](drugs/drug_orforglipron/pd_Sonne_2026_cAMP.md) | Sonne N et al., Generation and characterisation of a hu…, EBioMedicine (2026) | [10.1016/j.ebiom.2026.106121](https://doi.org/10.1016/j.ebiom.2026.106121) |

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Guo_2025 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis of weight reduction efficacy, not a pharmacokinetic study, and does not report PK parameters like clearance or volume for orforglipron. |
| popPK | Hageen_2026_2 | irrelevant | 0 | 0 | The paper is a network meta-analysis of safety outcomes (GI adverse events and liver/pancreatic enzymes) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life for orforglipron. |
| PD | Hageen_2026_2 | not_relevant | 3 | 2 | The paper is a network meta-analysis reporting dose-response trends for adverse events and enzyme changes (ORs/MDs) but does not provide pharmacodynamic parameters (Emax, EC50) or concentration-effect relationships. |
| popPK | Ismaiel_2025 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis of gastrointestinal adverse events, not a pharmacokinetic study, and contains no PK parameters for orforglipron. |
| PD | Ismaiel_2025 | not_relevant | 1 | 0 | The paper is a systematic review and network meta-analysis of adverse event risks (relative risks) and does not report pharmacokinetic or pharmacodynamic modeling, concentration-effect curves, or numeric PD parameters like Emax or EC50. |
| PGx | Morse_2026 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (DDIs) involving enzyme/transporter inhibitors and inducers, but does not report pharmacogenomic effects based on gene variants or genotypes. |
| popPK | Niazi_2026 | irrelevant | 0 | 0 | The paper is a review of oral peptide delivery that mentions orforglipron only as a small molecule GLP-1 agonist in the context of competitive landscape, without reporting any quantitative PK parameters for it. |
| PD | Niazi_2026 | not_relevant | 1 | 0 | The paper is a review on oral peptide delivery strategies and mentions orforglipron only as an emerging small molecule GLP-1 agonist without providing any specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for it. |
| popPK | Nong_2026 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy and safety outcomes (weight loss, adverse events) for obesity drugs, not a pharmacokinetic study, and contains no PK parameters for orforglipron. |
| PD | Nong_2026 | not_relevant | 1 | 0 | The paper is a systematic review and network meta-analysis of clinical outcomes (weight loss) for obesity drugs, not a pharmacokinetic/pharmacodynamic modeling study; it does not report exposure-response relationships or numeric PD parameters (e.g., Emax, EC50) for orforglipron. |
| popPK | Ohwaki_2026 | relevant | 6 | 4 | The study reports non-compartmental PK parameters (tmax, t1/2) for orforglipron, but lacks compartmental model parameters (CL, V, Q, ka) and detailed numeric tables for Cmax/AUC are likely in supplementary material. |
| PD | Pratt_2023 | not_relevant | 3 | 1 | The abstract reports qualitative dose-dependent effects (weight loss, glucose reduction) but does not provide numeric PD parameters (Emax, EC50) or a formal concentration-effect model. |
| popPK | Pratt_2023_2 | relevant | 8 | 4 | The paper reports PK parameters for orforglipron, but specific numeric values for Cmax, AUC, and CL are in Table S1 (supplementary), while only tmax and half-life ranges are provided in the main text. |
| popPK | Tantoush_2026 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis focusing on efficacy and safety outcomes (weight, HbA1c, adverse events) rather than pharmacokinetic parameters. |
| PD | Tantoush_2026 | not_relevant | 3 | 2 | The paper is a network meta-analysis reporting mean differences in clinical outcomes (HbA1c, weight) across fixed doses, but it does not provide a pharmacodynamic model, concentration-effect curve, or specific PD parameters (Emax, EC50) for orforglipron. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs_non_atc/drug_orforglipron`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
