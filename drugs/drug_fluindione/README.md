# fluindione

- **generic name:** fluindione
- **ATC codes:** `B01AA12`
- **DrugBank:** [DB13136](https://go.drugbank.com/drugs/DB13136)
- **groups:** approved, withdrawn

## About

**Description.** Fluindione is under investigation for the treatment of Venous Thrombosis, Pulmonary Embolism, Permanent Atrial Fibrillation, and Anticoagulating Treatment on a Duration at Least 12-month-old Superior. Fluindione has been investigated for the treatment of Blood Coagulation Disorders.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 22:20 | 8:23 | 0/0/0 | 0/1/0 | 0/0/0 | 27,172/1,972 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 2/0 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Comets_1998](drugs/drug_fluindione/pd_Comets_1998_INR.md) | Comets E et al., Modeling INR data to predict maintenanc…, Therapeutic drug monitoring (1998) | [10.1097/00007691-199812000-00009](https://doi.org/10.1097/00007691-199812000-00009) |

## Coverage

- **PubMed hits:** 39 matched, 38 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Comets_2012_2.pdf` | Comets E et al., Pharmacokinetic and pharmacodynamic var…, Clinical pharmacology and t… (2012) | popPK | 10 | [10.1038/clpt.2011.309](https://doi.org/10.1038/clpt.2011.309) | [22472992](https://pubmed.ncbi.nlm.nih.gov/22472992) | The paper describes a population PK study of fluindione, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Verstuyft_2012_2.pdf` | Verstuyft C et al., A pharmacokinetic-pharmacodynamic model…, Clinical pharmacokinetics (2012) | popPK | 10 | [10.2165/11595560-000000000-00000](https://doi.org/10.2165/11595560-000000000-00000) | [22149257](https://pubmed.ncbi.nlm.nih.gov/22149257) | The paper describes a population PK/PD model for fluindione, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Comets_1998.pdf` | Comets E et al., Modeling INR data to predict maintenanc…, Therapeutic drug monitoring (1998) | popPK | 9 | [10.1097/00007691-199812000-00009](https://doi.org/10.1097/00007691-199812000-00009) | [9853979](https://pubmed.ncbi.nlm.nih.gov/9853979) | The study explicitly states that population characteristics of fluindione were estimated, but the specific numeric parameter values are not present in the provided abstract or text. |
| `Mentré_1998_2.pdf` | Mentré F et al., Population pharmacokinetic-pharmacodyna…, Clinical pharmacology and t… (1998) | popPK | 9 | [10.1016/S0009-9236(98)90122-9](https://doi.org/10.1016/S0009-9236(98)90122-9) | [9465843](https://pubmed.ncbi.nlm.nih.gov/9465843) | The paper is a population PK/PD study of fluindione, but the evidence only provides a median half-life (69 hours) and IC50 values, lacking specific numeric values for clearance, volume, or intercompartmental clearance. |
| `Konecki_2024.pdf` | Konecki C et al., Population pharmacokinetics of unfracti…, Biomedicine & pharmacothera… (2024) | pd | 5 | [10.1016/j.biopha.2024.117700](https://doi.org/10.1016/j.biopha.2024.117700) | [39571244](https://www.ncbi.nlm.nih.gov/pubmed/39571244) | metadata signals extractable PD data (PK-PD) |
| `Moreau_2012.pdf` | Moreau C et al., Vitamin K antagonists in children with…, Blood (2012) | pgx | 5 | [10.1182/blood-2011-07-365502](https://doi.org/10.1182/blood-2011-07-365502) | [22130800](https://www.ncbi.nlm.nih.gov/pubmed/22130800) | metadata signals extractable PGX data (VKORC1) |

<sub>queue written 2026-09-05T22:18:50.095292+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Comets_1998 | relevant | 9 | 0 | The study explicitly states that population characteristics of fluindione were estimated, but the specific numeric parameter values are not present in the provided abstract or text. |
| PD | Comets_2000_2 | not_relevant | 4 | 2 | The paper discusses a PK/PD model involving C50 but reports only aggregate prediction errors and variability metrics (RMSE, %CV) for the product Cl*C50, without providing the specific numeric value for C50 or the underlying concentration-effect curve parameters. |
| popPK | Comets_2012_2 | relevant | 10 | 0 | The paper describes a population PK study of fluindione, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| PGx | Cullell_2018 | not_relevant | 0 | 0 | The paper is a review of pharmacogenomics for oral anticoagulants and does not report specific pharmacokinetic or pharmacodynamic parameters for fluindione. |
| PGx | Espana_2017 | not_relevant | 0 | 0 | The study investigates the role of ABC transporters in cell models but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PD | Keréveur_1997_2 | not_relevant | 3 | 2 | The paper describes a case of resistance with qualitative PK/PD observations (e.g., low epoxide/vitamin K quotient) but does not provide a dose-response curve or numeric PD parameters (Emax, EC50) for fluindione. |
| popPK | Konecki_2024 | irrelevant | not captured | not captured | Fluindione is only mentioned as a pretreatment covariate affecting baseline ACT, while the population PK modeling focuses entirely on unfractionated heparin. |
| PD | Konecki_2024 | not_relevant | 0 | 0 | The paper reports a PK/PD model for unfractionated heparin, not fluindione; fluindione is only mentioned as a covariate affecting baseline ACT. |
| PGx | Lamoureux_2017 | not_relevant | 0 | 0 | The paper is a general review of pharmacogenetics in cardiovascular diseases and does not report specific pharmacokinetic or pharmacodynamic effects of gene variants on fluindione. |
| popPK | Mentré_1998_2 | relevant | 9 | 2 | The paper is a population PK/PD study of fluindione, but the evidence only provides a median half-life (69 hours) and IC50 values, lacking specific numeric values for clearance, volume, or intercompartmental clearance. |
| PGx | Militaru_2015 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for coumarin derivatives (warfarin, acenocoumarol) but does not report specific PK/PD data or quantitative effects for fluindione. |
| PD | Moreau_2012 | not_relevant | 3 | 2 | The paper reports a dose-requirement model (covariates predicting maintenance dose) rather than a pharmacodynamic exposure-response or concentration-effect relationship with numeric PD parameters like Emax or EC50. |
| PGx | Moreau_2012 | not_relevant | 5 | 2 | The paper reports genetic determinants for warfarin dose, but the results section explicitly states that no covariates were associated with time in range, and specific quantitative effects for fluindione are not detailed in the provided text. |
| PD | Moreau_2014_2 | not_relevant | 3 | 0 | The paper reports a regression model for dose prediction based on genetic and clinical factors, not a pharmacodynamic exposure-response or dose-response curve with numeric PD parameters like Emax or EC50. |
| PGx | Self_2015 | not_relevant | 0 | 0 | The paper reviews the effect of body weight on VKA dose, not the effect of gene variants on PK/PD parameters. |
| PGx | Verstuyft_2003 | not_relevant | 2 | 5 | The study focuses on warfarin and acenocoumarol, explicitly excludes fluindione from the significant risk factor analysis, and reports clinical outcomes (INR/bleeding) rather than specific PK/PD parameters for fluindione. |
| popPK | Verstuyft_2012_2 | relevant | 10 | 0 | The paper describes a population PK/PD model for fluindione, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| PD | Warot_2000_2 | not_relevant | 1 | 0 | The study reports PK parameters and qualitative PD observations (PT/INR) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response model. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | The provided evidence contains only a conference title and no pharmacokinetic data or parameters for fluindione. |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a header for conference oral presentations and contains no data, analysis, or mention of fluindione pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_fluindione`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
