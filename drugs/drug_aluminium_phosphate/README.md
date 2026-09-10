# aluminium phosphate

- **generic name:** aluminium phosphate
- **ATC codes:** `A02AB03`
- **DrugBank:** [DB14517](https://go.drugbank.com/drugs/DB14517)
- **groups:** approved, investigational

## About

**Indication.** Aluminum phosphate, in its colloidal form, is an ingredient in some over-the-counter antacids.[L51509] It is also used as an adjuvant to boost immune response in vaccines.[A264449]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 12:28 | 6:36 | 0/0/0 | 0/0/0 | 0/0/0 | 82,783/2,209 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 3/7 | 10/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 152 matched, 25 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Morera-Díaz_2023.pdf` | Morera-Díaz Y et al., Active immunization with a structurally…, Cancer letters (2023) | pd | 4 | [10.1016/j.canlet.2023.216156](https://doi.org/10.1016/j.canlet.2023.216156) | [37019172](https://www.ncbi.nlm.nih.gov/pubmed/37019172) | metadata signals extractable PD data (PKPD) |
| `Schipper_2017.pdf` | Schipper P et al., Diphtheria toxoid and N-trimethyl chito…, Journal of controlled relea… (2017) | pd | 4 | [10.1016/j.jconrel.2017.07.017](https://doi.org/10.1016/j.jconrel.2017.07.017) | [28710002](https://www.ncbi.nlm.nih.gov/pubmed/28710002) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-10T12:27:32.415502+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | COHEN_1959 | irrelevant | 0 | 0 | The paper is a potency assay study for tetanus toxoid where aluminium phosphate is used only as an adsorbent, not as the subject drug for pharmacokinetic analysis. |
| PD | COHEN_1959 | not_relevant | 3 | 0 | The paper describes a bioassay method for tetanus toxoid potency using AlPO4 as an adsorbent, reporting parallel log-dose-response lines for the vaccine but providing no numeric PD parameters (e.g., EC50, Emax) for aluminium phosphate itself. |
| popPK | Dahhas_2022 | irrelevant | 0 | 0 | The paper is a review on anthrax vaccine stability and adjuvants, where aluminum phosphate is mentioned only as an adjuvant, not as a subject drug for pharmacokinetic analysis. |
| popPK | Fabrizi_2015 | irrelevant | 0 | 0 | The paper is a review of HBV vaccine immunogenicity in CKD patients where aluminium phosphate is mentioned only as a vaccine adjuvant, not as the subject drug for pharmacokinetic analysis. |
| popPK | Gupta_1995 | irrelevant | 0 | 0 | The paper is a review on vaccine adjuvants and does not report any pharmacokinetic parameters for aluminium phosphate. |
| popPK | Gupta_1998 | irrelevant | 0 | 0 | The study focuses on the immunogenicity of vaccines using aluminium phosphate as an adjuvant, not on the pharmacokinetic disposition parameters of aluminium phosphate itself. |
| popPK | Jeon_2021 | irrelevant | 0 | 0 | The paper is a vaccine manufacturing and immunogenicity study where aluminium phosphate is used only as an adjuvant, not as the subject drug for pharmacokinetic analysis. |
| popPK | Joffe_1994 | irrelevant | 0 | 0 | The study focuses on osteocalcin pharmacokinetics in CAPD patients and does not report PK parameters for aluminium phosphate. |
| popPK | Joki_2009 | irrelevant | 0 | 0 | The paper is a review of lanthanum carbonate, not a pharmacokinetic study of aluminium phosphate, and contains no quantitative PK parameters for the subject drug. |
| PD | Joki_2009 | not_relevant | 1 | 0 | The text is a qualitative review of lanthanum carbonate and does not report any numeric PD parameters or exposure-response relationships for aluminium phosphate. |
| popPK | Juergens_2014 | irrelevant | 0 | 0 | The paper is an immunogenicity and safety study of a pneumococcal vaccine where aluminum phosphate is an adjuvant, not a drug subject to pharmacokinetic analysis. |
| PD | Juergens_2014 | not_relevant | 0 | 0 | The paper is a clinical trial assessing vaccine immunogenicity and safety, reporting geometric mean concentrations and titers, but it does not contain any pharmacokinetic data, exposure-response modeling, or numeric PD parameters (e.g., Emax, EC50) for aluminum phosphate. |
| popPK | Lu_2022 | irrelevant | 0 | 0 | The paper is a review on nano-alum adjuvants for vaccines and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for aluminium phosphate as a subject drug. |
| popPK | Madhi_2023 | irrelevant | 0 | 0 | The paper is a clinical trial of a Group B Streptococcus vaccine where aluminium phosphate is used only as an adjuvant, and it reports immunogenicity and safety data rather than pharmacokinetic parameters for aluminium phosphate. |
| popPK | Mei_2019 | irrelevant | 0 | 0 | The paper is a physicochemical characterization study of aluminum phosphate as a vaccine adjuvant (particle size, spectroscopy) and does not report any pharmacokinetic parameters. |
| popPK | Morera-Díaz_2023 | irrelevant | 0 | 0 | The paper is an immunology study regarding PD-L1 antigens and tumor models, with no mention of aluminium_phosphate or pharmacokinetic parameters. |
| PD | Morera-Díaz_2023 | not_relevant | 0 | 0 | The paper describes an immunological study on PD-L1 antigen immunization and does not report any pharmacodynamic or exposure-response analysis for aluminium phosphate. |
| popPK | Pennick_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lanthanum carbonate, not aluminium phosphate. |
| popPK | Rupp_2019 | irrelevant | 0 | 0 | The paper is a clinical immunogenicity study of a pneumococcal vaccine where aluminium phosphate is an adjuvant, not a subject drug for pharmacokinetic analysis. |
| PD | Rupp_2019 | not_relevant | 1 | 0 | The study is a descriptive dose-ranging trial that explicitly reports no dose-response effect and provides no numeric PD parameters or concentration-effect curves. |
| popPK | Schipper_2017 | irrelevant | 0 | 0 | The paper concerns immune responses to diphtheria toxoid and chitosan microneedles, not the pharmacokinetics of aluminium phosphate. |
| PD | Schipper_2017 | not_relevant | 0 | 0 | The paper focuses on the immunogenicity of microneedles in mice and does not report any pharmacodynamic or exposure-response analysis for aluminium phosphate. |
| popPK | Shuhsadhe_2023 | irrelevant | 0 | 0 | The study focuses on the immunogenicity and stability of Td vaccines using aluminum phosphate as an adjuvant, not on the pharmacokinetic parameters of aluminum phosphate itself. |
| popPK | Smith_2023 | irrelevant | 0 | 0 | The paper is a vaccine stability and immunogenicity study where aluminum phosphate is an adjuvant, not a subject drug for pharmacokinetic analysis. |
| popPK | Sánchez_2022 | irrelevant | 0 | 0 | The paper discusses aluminum phosphate only as an adjuvant in a vaccine context and focuses on immunological mechanisms, not the pharmacokinetics of aluminum phosphate. |
| PD | Sánchez_2022 | not_relevant | 0 | 0 | The paper discusses mechanisms of action for an immunotherapy vaccine (CIGB-247) and mentions aluminum phosphate only as an adjuvant, without reporting any pharmacodynamic or exposure-response data for aluminum phosphate itself. |
| PGx | Sánchez_2022 | not_relevant | 0 | 0 | The paper discusses the mechanism of action of a VEGF vaccine (CIGB-247) and its adjuvant (aluminum phosphate) on immune responses, but does not report any pharmacogenomic effects on the PK or PD of aluminum phosphate. |
| popPK | Yayehrad_2021 | irrelevant | 0 | 0 | The paper is a review on nanotechnology for COVID-19 and does not contain any pharmacokinetic data or mention of aluminium phosphate. |
| PD | Yayehrad_2021 | not_relevant | 0 | 0 | The paper is a review of nanotechnology applications for COVID-19 and does not report any pharmacodynamic or exposure-response data for aluminium phosphate. |
| popPK | Zhao_2022 | irrelevant | 0 | 0 | The paper is an immunogenicity and safety study of a pneumococcal vaccine where aluminium phosphate is only an adjuvant, not the subject drug for PK analysis. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The evidence consists only of a conference title and contains no pharmacokinetic data or parameters for aluminium phosphate. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific data, models, or parameters for aluminium phosphate. |
| popPK | unknown_2018_2 | irrelevant | 0 | 0 | The evidence consists only of a conference title and contains no pharmacokinetic data or specific study content for aluminium_phosphate. |
| PD | unknown_2018_2 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific study data, drug information, or pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_aluminium_phosphate`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
