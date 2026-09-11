# tinidazole

- **generic name:** tinidazole
- **ATC codes:** `A02BD09`, `G01AF21`, `J01RA11`, `J01RA13`, `J01RA18`, `J01XD02`, `P01AB02`, `P01AB53`
- **DrugBank:** [DB00911](https://go.drugbank.com/drugs/DB00911)
- **groups:** approved, investigational

## About

**Description.** A nitroimidazole antitrichomonal agent effective against _Trichomonas vaginalis_, _Entamoeba histolytica_, and _Giardia lamblia_ infections.

**Indication.** For the treatment of trichomoniasis caused by <i>T. vaginalis</i> in both female and male patients. Also for the treatment of giardiasis caused by <i>G. duodenalis</i> in both adults and pediatric patients older than three years of age and for the treatment of intestinal amebiasis and amebic liver abscess caused by <i>E. histolytica</i> in both adults and pediatric patients older than three years of age.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 21:21 | 10:27 | 0/0/0 | 2/0/0 | 0/0/0 | 123,061/4,050 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 2/6 | 9/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bansal_2004](drugs/drug_tinidazole/pd_Bansal_2004_percentage_inhibition.md) | Bansal D et al., In vitro activity of antiamoebic drugs…, Annals of clinical microbio… (2004) | [10.1186/1476-0711-3-27](https://doi.org/10.1186/1476-0711-3-27) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Singh_2023](drugs/drug_tinidazole/pd_Singh_2023_percentage_inhibition_of_E_histolytica.md) | Singh A et al., Creep in nitroimidazole inhibitory conc…, Scientific reports (2023) | [10.1038/s41598-023-39382-1](https://doi.org/10.1038/s41598-023-39382-1) |

## Coverage

- **PubMed hits:** 39 matched, 39 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Goodhew_2013.pdf` | Goodhew EB et al., Drug library screening against metronid…, Sexually transmitted infect… (2013) | pd | 4 | [10.1136/sextrans-2013-051032](https://doi.org/10.1136/sextrans-2013-051032) | [23794105](https://www.ncbi.nlm.nih.gov/pubmed/23794105) | metadata signals extractable PD data (IC50) |
| `Masoori_2024.pdf` | Masoori L et al., Promising effects of 1,8 Cineole to con…, Acta tropica (2024) | pd | 4 | [10.1016/j.actatropica.2024.107201](https://doi.org/10.1016/j.actatropica.2024.107201) | [38604329](https://www.ncbi.nlm.nih.gov/pubmed/38604329) | metadata signals extractable PD data (IC50) |
| `Sariego_2014.pdf` | Sariego I et al., Setting a colorimetric assay with MTT f…, Current clinical pharmacolo… (2014) | pd | 4 | [10.2174/157488470903140806120218](https://doi.org/10.2174/157488470903140806120218) | [23173972](https://www.ncbi.nlm.nih.gov/pubmed/23173972) | metadata signals extractable PD data (sigmoid) |
| `Chaudhry_2009.pdf` | Chaudhry AS et al., Importance of CYP2C19 genetic polymorph…, The Indian journal of medic… (2009) | pgx | 5 | not captured | [19942749](https://www.ncbi.nlm.nih.gov/pubmed/19942749) | metadata signals extractable PGX data (CYP2C19) |
| `Nizhevich_2013.pdf` | Nizhevich AA et al., [The influence of genetic factors on th…, Eksperimental'naia i klinic… (2013) | pgx | 5 | not captured | [24501942](https://www.ncbi.nlm.nih.gov/pubmed/24501942) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-09-10T21:19:13.859954+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Attia_2019 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (inhibition of omeprazole metabolism by tinidazole) using wild-type CYP2C19, but does not report any pharmacogenomic effects (gene variants/genotypes) on tinidazole's PK or PD parameters. |
| popPK | Auriostigue-Bautista_2021 | irrelevant | 0 | 0 | The paper is an in-vitro antigiardiasic drug discovery study where tinidazole is used only as a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Auriostigue-Bautista_2021 | not_relevant | 0 | 0 | The paper reports IC50 values for a new compound and compares them to tinidazole, but does not provide a concentration-effect curve, dose-response model, or numeric PD parameters (Emax, EC50, slope) for tinidazole. |
| popPK | Bansal_2004 | irrelevant | 0 | 0 | The study reports in vitro IC50 values for drug susceptibility against Entamoeba isolates, not pharmacokinetic disposition parameters (CL, V, t1/2) for tinidazole. |
| popPK | Bell_1991 | irrelevant | 0 | 0 | The paper is an in-vitro structure-activity relationship study reporting IC50 values, not a pharmacokinetic study with disposition parameters for tinidazole. |
| PD | Bell_1991 | not_relevant | 1 | 1 | The paper reports a single IC50 value for tinidazole as a reference standard in a structure-activity relationship study, but does not provide a concentration-effect curve, dose-response model, or PK/PD analysis for tinidazole. |
| popPK | Bénéré_2007 | irrelevant | 0 | 0 | The paper describes an in vitro method for determining drug sensitivity (IC50) of Giardia trophozoites, not a pharmacokinetic study reporting disposition parameters for tinidazole. |
| popPK | Cedillo-Rivera_1992 | irrelevant | 0 | 0 | The study is an in-vitro susceptibility assay for Giardia lamblia, not a pharmacokinetic study, and reports no disposition parameters for tinidazole. |
| PGx | Chaudhry_2009 | not_relevant | 0 | 0 | The study reports pharmacogenomic effects on omeprazole (CYP2C19 substrate) and H. pylori eradication rates, but does not report any PK or PD parameters for tinidazole. |
| popPK | Fitton_1996 | irrelevant | 0 | 0 | The paper is a review of pantoprazole, and tinidazole is only mentioned as a co-administered agent in H. pylori therapy without any pharmacokinetic data. |
| PD | Fitton_1996 | not_relevant | 0 | 0 | The paper is a review of pantoprazole and only mentions tinidazole qualitatively as part of a triple therapy regimen for H. pylori, without providing any pharmacodynamic or exposure-response data for tinidazole. |
| popPK | Goodhew_2013 | irrelevant | 0 | 0 | The paper is an in-vitro drug screening study against Trichomonas vaginalis, not a pharmacokinetic study, and contains no PK parameters for tinidazole. |
| PD | Goodhew_2013 | not_relevant | 0 | 0 | The paper focuses on drug library screening against Trichomonas vaginalis and does not report pharmacokinetic or pharmacodynamic modeling for tinidazole. |
| popPK | Guo_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levornidazole, not tinidazole, which is only mentioned as a related compound in the background. |
| PD | Guo_2017 | not_relevant | 0 | 0 | The paper focuses on levornidazole, not tinidazole, and uses Monte Carlo simulation for PK/PD evaluation rather than reporting a specific concentration-effect model with numeric PD parameters for tinidazole. |
| popPK | Henien_2019 | irrelevant | 0 | 0 | The paper is a clinical case report on therapeutic efficacy and does not report any quantitative pharmacokinetic parameters for tinidazole. |
| PD | Henien_2019 | not_relevant | 0 | 0 | The text is a case report describing clinical success of combination therapy without providing any pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters. |
| popPK | Huang_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of bufadienolides from a traditional Chinese medicine formula in mice, not tinidazole. |
| popPK | Kang_1998 | irrelevant | 0 | 0 | The paper describes an in-vitro assay for anti-giardial activity and reports IC50 values, not pharmacokinetic disposition parameters. |
| popPK | Lamp_1999 | irrelevant | 1 | 0 | The paper is a review that mentions tinidazole only as a class member with a prolonged half-life, providing no quantitative PK parameters for tinidazole. |
| PD | Lamp_1999 | not_relevant | 1 | 0 | The text is a general review of nitroimidazole pharmacokinetics and qualitative pharmacodynamics (e.g., post-antibiotic effect duration) without providing specific numeric PD parameters (Emax, EC50) or concentration-effect curves for tinidazole. |
| popPK | Li_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of aesculin, using tinidazole only as an internal standard for quantification. |
| popPK | Ma_2022 | irrelevant | 0 | 0 | Tinidazole is used only as an internal standard for the pharmacokinetic study of quercitrin, not as the subject drug. |
| popPK | Manes_2004 | irrelevant | 0 | 0 | The paper is a narrative review discussing the history and characteristics of tinidazole without reporting original quantitative pharmacokinetic parameter values. |
| PD | Manes_2004 | not_relevant | 1 | 0 | The text is a qualitative review discussing the general pharmacodynamic profile and history of tinidazole without providing specific numeric PD parameters or exposure-response data. |
| popPK | Manso_2008 | irrelevant | 2 | 0 | The paper is a review discussing the potential use of tinidazole for odontogenic infections and does not report original quantitative pharmacokinetic parameter values. |
| PD | Manso_2008 | not_relevant | 2 | 1 | The paper is a narrative review discussing the theoretical potential of tinidazole and general PK/PD properties without presenting original data, specific numeric PD parameters, or extractable exposure-response curves. |
| popPK | Masoori_2024 | irrelevant | 0 | 0 | The paper focuses on 1,8-Cineole and Giardia lamblia, with no evidence of tinidazole pharmacokinetic parameters. |
| PD | Masoori_2024 | not_relevant | 0 | 0 | The paper focuses on 1,8-Cineole and Giardia lamblia, not tinidazole, and does not report any PD or exposure-response data for tinidazole. |
| popPK | Melo_1990 | irrelevant | 0 | 0 | The paper is a mutagenicity study (Ames test) and does not report any pharmacokinetic parameters for tinidazole. |
| PD | Melo_1990 | not_relevant | 0 | 0 | The paper reports qualitative mutagenicity screening results and mentions dose-response curves for other drugs, but provides no numeric PD parameters or extractable concentration-effect data for tinidazole. |
| popPK | Mergenhagen_2020 | irrelevant | 0 | 0 | The paper is a systematic review of alcohol-antibiotic interactions and does not report original quantitative pharmacokinetic parameters for tinidazole. |
| PD | Mergenhagen_2020 | not_relevant | 1 | 0 | The paper is a systematic review of qualitative evidence regarding alcohol-antibiotic interactions and does not report any numeric pharmacodynamic parameters or concentration-effect relationships for tinidazole. |
| popPK | Nissen_1983 | irrelevant | 0 | 0 | The evidence provided contains only the title of the paper and no quantitative pharmacokinetic data or text. |
| PD | Nissen_1983 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric data, curves, or parameters required to extract a pharmacodynamic relationship. |
| PGx | Nizhevich_2013 | not_relevant | 0 | 0 | The study investigates the effect of CYP2C19 genotype on the efficacy of PPIs (omeprazole/rabeprazole), not on the pharmacokinetics or pharmacodynamics of tinidazole. |
| PGx | Saadatmand_2026 | not_relevant | 0 | 0 | The paper investigates the anti-Giardia activity of silver nanoparticles and does not report any pharmacogenomic effects on the PK or PD of tinidazole. |
| popPK | Sariego_2014 | irrelevant | 0 | 0 | The paper describes an in-vitro colorimetric assay for trichomonicidal activity and does not report pharmacokinetic parameters for tinidazole. |
| popPK | Singh_2023 | irrelevant | 0 | 0 | The study reports in-vitro inhibitory concentrations (IC50) of tinidazole against Entamoeba histolytica, not pharmacokinetic disposition parameters. |
| PGx | Song_2016 | not_relevant | 0 | 0 | The study investigates CYP2C19 polymorphism but reports no pharmacokinetic or pharmacodynamic parameters for tinidazole, focusing instead on H. pylori eradication rates and antibiotic resistance. |
| popPK | Spencer_1994 | irrelevant | 0 | 0 | The paper is a review of lansoprazole, and tinidazole is only mentioned as a co-administered agent for H. pylori eradication without any pharmacokinetic parameters. |
| PD | Spencer_1994 | not_relevant | 0 | 0 | The paper is a review of lansoprazole and only mentions tinidazole qualitatively as part of combination therapy for H. pylori eradication, without providing any pharmacodynamic or exposure-response data for tinidazole. |
| popPK | Suyagh_2010 | irrelevant | 0 | 0 | The study focuses on the development of an assay for metronidazole, using tinidazole only as an internal standard, and does not report pharmacokinetic parameters for tinidazole. |
| PD | Suyagh_2010 | not_relevant | 0 | 0 | The paper describes the development and validation of an analytical method (HPLC-DBS) for metronidazole, with tinidazole used only as an internal standard, and does not report any pharmacodynamic or exposure-response data. |
| popPK | Svensson_2002 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assay measuring bacterial regrowth time (CERT) and does not report any pharmacokinetic parameters for tinidazole. |
| popPK | Veríssimo_2026 | irrelevant | 0 | 0 | The paper is a QSAR and in-vitro study on nitroimidazole derivatives for Trichomonas vaginalis, containing no pharmacokinetic data for tinidazole. |
| PD | Veríssimo_2026 | not_relevant | 0 | 0 | The paper focuses on machine learning QSAR modeling for drug discovery and reports IC50 values for novel compounds, but does not contain any pharmacodynamic (exposure-response) analysis or PK/PD modeling for tinidazole. |
| popPK | Wang_2011 | irrelevant | 0 | 0 | The paper describes an analytical method (ELISA) for detecting drug residues in food, not a pharmacokinetic study, and reports no disposition parameters. |
| PD | Wang_2011 | not_relevant | 0 | 0 | The paper describes an analytical method (ELISA) for detecting drug residues in food, not a pharmacodynamic or exposure-response study in a biological system. |
| popPK | Yan_2024 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of amisulpride, not tinidazole. |
| PD | Yan_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on the external validation of population pharmacokinetic (PopPK) models for amisulpride and does not contain any pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Zhang_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cinnamic acid, with tinidazole used only as an internal standard. |
| popPK | Özel_2026 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of essential oil activity against Trichomonas vaginalis and does not report any pharmacokinetic parameters for tinidazole. |
| PD | Özel_2026 | not_relevant | 0 | 0 | The paper investigates the in vitro activity of Origanum majorana essential oil and its synergy with metronidazole; tinidazole is only mentioned in the introduction as a standard treatment and no PD or exposure-response data for tinidazole are reported. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_tinidazole`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
