# bemiparin

- **generic name:** bemiparin
- **ATC codes:** `B01AB12`
- **DrugBank:** [DB09258](https://go.drugbank.com/drugs/DB09258)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Bemiparin is an antithrombotic and belongs to the group of drugs known as the low molecular weight heparins (LMWH). Like semuloparin, bemiparin is classified as an ultra-LMH because of its low mean molecular mass of 3600 daltons, which is a unique property of this class [A7866].  These heparins have lower anti-thrombin activity than the traditional low molecular weight heparins and act mainly on factor-Xa, reducing the risk of bleeding due to selectivity for this specific clotting factor.  Interestingly, current research is underway for the potential benefit of bemiparin in the treatment of tumors and diabetic foot ulcers [L1468, A7866].

**Indication.** Bemiparin is indicated in the following cases: To prevent blood clots in the veins after general abdominal surgery in patients with a moderate risk of venous thromboembolism; in the prevention of the thromboembolic disease in non-surgical patients; prevention of clotting in the extracorporeal circuit during hemodialysis; to prevent blood clots in the veins after a major orthopedic surgery in patients with high risk of venous thromboembolism; secondary prevention of venous thromboembolism; recurrence in patients with deep vein thrombosis; transient prevention and treatment of deep vein thrombosis (DVT) [L1463].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 16:33 | 0:54 | 0/0/0 | 0/0/0 | 0/0/0 | 1,232/1,340 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 1/4 | 11/6 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 165 matched, 41 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Antonijoan_2009.pdf` | Antonijoan RM et al., Comparative pharmacodynamic time-course…, International journal of cl… (2009) | pd | 5 | [10.5414/cpp47726](https://doi.org/10.5414/cpp47726) | [19954711](https://www.ncbi.nlm.nih.gov/pubmed/19954711) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-09-06T16:33:44.772360+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abad_2010 | irrelevant | 0 | 0 | The paper is a clinical review of bemiparin's efficacy and safety in VTE prevention and treatment, containing no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Alur_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anti-tumor effects and does not report any pharmacokinetic parameters for bemiparin. |
| popPK | Antonijoan_2009 | irrelevant | 2 | 1 | The study reports pharmacodynamic parameters (anti-Xa activity, half-life of effect) rather than pharmacokinetic disposition parameters (clearance, volume of distribution) for bemiparin. |
| popPK | Bajpai_2025 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy (VTE/bleeding risk) and does not report any pharmacokinetic parameters for bemiparin. |
| popPK | Branson_2011 | irrelevant | 0 | 0 | The provided evidence contains only a file reference to a PDF supplement with no actual text, data, or pharmacokinetic parameters for bemiparin. |
| PD | Branson_2011 | not_relevant | 0 | 0 | The provided text is a placeholder for a PDF file and contains no scientific content, data, or PD parameters. |
| popPK | Chapman_2003 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and safety in thrombosis prevention/treatment, containing no quantitative pharmacokinetic parameters (CL, V, etc.) for bemiparin. |
| popPK | Chase_2012 | irrelevant | 0 | 0 | The provided evidence is only a conference session header with no pharmacokinetic data or text for bemiparin. |
| PD | Chase_2012 | not_relevant | 0 | 0 | The provided text is a conference session header and file link, containing no scientific content, data, or pharmacodynamic analysis for bemiparin. |
| popPK | Ciccone_2014 | irrelevant | 0 | 0 | The paper is a narrative review without original quantitative pharmacokinetic parameter values for bemiparin. |
| popPK | Del_2021 | irrelevant | 0 | 0 | The paper is a clinical case report regarding gastrointestinal bleeding and does not contain any pharmacokinetic data or quantitative disposition parameters for bemiparin. |
| popPK | Edo_2016 | irrelevant | 0 | 0 | This is a clinical case report describing the treatment of Paget-Schröetter syndrome with bemiparin, but it does not report any pharmacokinetic parameters or quantitative disposition data. |
| popPK | Ena_2020 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy and safety outcomes, not a pharmacokinetic study, and contains no quantitative PK parameters for bemiparin. |
| popPK | Falkon_1998 | irrelevant | 2 | 0 | The study describes qualitative kinetic profiles and duration of action (time ranges) rather than reporting quantitative pharmacokinetic parameters like clearance, volume, or half-life. |
| popPK | Ferriols-Lisart_2002 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical effectiveness and safety outcomes (DVT, PE rates) and does not report any pharmacokinetic parameters for bemiparin. |
| popPK | Fontcuberta_2010 | irrelevant | 2 | 0 | The paper is a review of clinical use in special populations that discusses pharmacokinetic profiles qualitatively but does not report any quantitative disposition parameters (CL, V, etc.) for bemiparin. |
| popPK | Gao_2017 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy (VTE prevention) and does not report any pharmacokinetic parameters for bemiparin. |
| popPK | Gerotziafas_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of thrombin generation and does not report pharmacokinetic disposition parameters (CL, V, ka) for bemiparin. |
| popPK | González_2025 | irrelevant | 0 | 0 | The paper is a clinical trial assessing the efficacy of bemiparin in fetal growth restriction and does not report any pharmacokinetic parameters. |
| popPK | González_2026 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating neonatal morbidity outcomes, not a pharmacokinetic study, and contains no PK parameters for bemiparin. |
| popPK | Hao_2019 | irrelevant | 0 | 0 | The paper is a general review of low molecular weight heparins and does not report specific quantitative pharmacokinetic parameters for bemiparin. |
| popPK | Kakkar_2003 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for deep vein thrombosis treatment and does not report any pharmacokinetic parameters for bemiparin. |
| popPK | Lozano_2020 | irrelevant | 0 | 0 | The paper is a clinical observation regarding heparin-induced thrombocytopenia in COVID-19 patients and does not report any pharmacokinetic parameters for bemiparin. |
| popPK | Lázaro-García_2022 | irrelevant | 0 | 0 | The paper is a clinical case report describing the management of heparin-induced thrombocytopenia and does not contain any pharmacokinetic data or quantitative disposition parameters for bemiparin. |
| popPK | Martínez-González_2008 | irrelevant | 2 | 0 | The text is a review/overview that mentions a half-life value but lacks quantitative compartmental PK parameters (CL, V, Q) or a population PK model. |
| PD | Martínez-González_2008 | not_relevant | 1 | 0 | The text is a general review summarizing pharmacological properties (MW, half-life, activity ratio) and clinical utility, but it does not report specific exposure-response or dose-response data, curves, or numeric PD parameters (e.g., EC50, Emax) for bemiparin. |
| popPK | Martínez-González_2010 | irrelevant | 0 | 0 | The paper is a narrative review discussing clinical applications and pharmacoeconomics of bemiparin without reporting any original quantitative pharmacokinetic parameter values. |
| popPK | Monreal_2010 | irrelevant | 0 | 0 | The paper is a narrative review discussing the clinical efficacy and anti-tumor properties of bemiparin in oncology, containing no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Muñoa_2014 | irrelevant | 0 | 0 | The study is a clinical trial comparing efficacy and safety, not a pharmacokinetic study, and bemiparin is a comparator without any PK parameters reported. |
| popPK | Ozaslan_2018 | irrelevant | 1 | 0 | The paper is a clinical efficacy and safety study comparing LMWHs, not a pharmacokinetic study, and it only cites literature values for half-life and bioavailability without reporting original quantitative PK parameters. |
| popPK | Peña-Salazar_2020 | irrelevant | 0 | 0 | The paper is a clinical case report on neurological symptoms of COVID-19 where bemiparin is only mentioned as part of the treatment regimen, with no pharmacokinetic data reported. |
| popPK | Planès_2003 | irrelevant | 1 | 0 | The paper is a review of clinical efficacy and safety, not a pharmacokinetic study, and it lacks quantitative disposition parameters (CL, V, Q, ka) for bemiparin. |
| popPK | Psifis_2025 | irrelevant | 0 | 0 | The study investigates immunogenicity (anti-PF4/H antibodies) and clinical outcomes, not pharmacokinetic parameters like clearance or volume. |
| popPK | Pérez-Balaguer_2021 | irrelevant | 0 | 0 | The paper is a clinical case report regarding the safety of electroconvulsive therapy in a patient with DVT treated with bemiparin, and it does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for bemiparin. |
| popPK | Reyes-Ortega_2015 | irrelevant | 0 | 0 | The full text is unavailable due to copyright restrictions, so no evidence regarding bemiparin pharmacokinetics is present. |
| popPK | Rico_2014 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (anti-FXa activity) and simulation results rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for bemiparin. |
| PD | Rico_2014 | not_relevant | 2 | 1 | The paper reports PK parameters (Amax) and dose adjustment recommendations based on renal function, but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., EC50, Emax) for bemiparin. |
| popPK | San_2016 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of rosuvastatin as an adjuvant to bemiparin for DVT, and it does not report any pharmacokinetic parameters for bemiparin. |
| popPK | Scala-Bertola_2009 | irrelevant | 2 | 1 | The study is a formulation/pharmaceutical development paper in rabbits that reports bioavailability and AUC for enoxaparin, but for bemiparin it only states that in vivo anti-Xa activity was below the therapeutic minimum without providing quantitative PK parameters (CL, V, ka, etc.). |
| popPK | Seebauer_2025 | irrelevant | 0 | 0 | The study is a clinical trial analyzing wound healing outcomes, not a pharmacokinetic study, and bemiparin is only mentioned as a comparator that delays healing without any PK parameters reported. |
| popPK | Shao_2019 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy (DVT prevention) and does not report any pharmacokinetic parameters for bemiparin. |
| popPK | Tramontana_2019 | irrelevant | 0 | 0 | The paper is a case series on hypersensitivity skin tests and does not report pharmacokinetic parameters for bemiparin. |
| popPK | Urbanos_2019 | irrelevant | 0 | 0 | The paper is a clinical case report regarding stroke management in a patient with a ventricular assist device, where bemiparin is only mentioned as a concurrent anticoagulant, and no pharmacokinetic parameters are reported. |
| popPK | Yazici_2016 | irrelevant | 0 | 0 | The study is a mechanistic investigation of renoprotective effects (oxidative stress markers) in rats, not a pharmacokinetic study, and reports no PK parameters for bemiparin. |
| popPK | Zhou_2019 | irrelevant | 0 | 0 | The provided text describes histological findings (neutrophil accumulation, edema) and contains no pharmacokinetic data or mention of bemiparin. |
| popPK | unknown_2010 | irrelevant | 0 | 0 | The evidence contains only a date and session title with no pharmacokinetic data or drug information. |
| PD | unknown_2010 | not_relevant | 0 | 0 | The provided text is only a header for a poster session and contains no scientific content, data, or PD parameters for bemiparin. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | The provided evidence contains only a conference title and no pharmacokinetic data or parameters for bemiparin. |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or mention of bemiparin pharmacodynamics. |
| popPK | Şenkal_2020 | irrelevant | 0 | 0 | The paper is a clinical study on ACE inhibitors and COVID-19 outcomes where bemiparin is only mentioned as a co-administered anticoagulant, with no pharmacokinetic parameters reported. |
| PD | Şenkal_2020 | not_relevant | 0 | 0 | The paper is a retrospective clinical cohort study on ACE inhibitors in COVID-19 patients and does not involve bemiparin or report any pharmacokinetic/pharmacodynamic modeling or concentration-effect relationships. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_bemiparin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
