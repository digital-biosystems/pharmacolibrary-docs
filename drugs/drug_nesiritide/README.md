# nesiritide

- **generic name:** nesiritide
- **ATC codes:** `C01DX19`
- **DrugBank:** [DB04899](https://go.drugbank.com/drugs/DB04899)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Nesiritide is a medication used to treat acutely decompensated congestive heart failure with dyspnea at rest or with minimal exertion (such as talk, eating or bathing). Nesiritide is a 32 amino acid recombinant human B-type natriuretic peptide.

**Indication.** For the intravenous treatment of patients with acutely decompensated congestive heart failure who have dyspnea at rest or with minimal activity.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 23:21 | 45:21 | 0/0/0 | 3/3/0 | 0/0/0 | 656,516/12,785 | ollama / qwen3.8:27b-mtp-q8_0 | 71 | 9/62 | 69/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Dabour_2026](drugs/drug_nesiritide/pd_Dabour_2026_GDF15.md) | Dabour MS et al., Evaluation of Growth Differentiation Fa…, Clinical and translational… (2026) | [10.1111/cts.70595](https://doi.org/10.1111/cts.70595) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Krause_2017](drugs/drug_nesiritide/pd_Krause_2017_unknown.md) | Krause A et al., Population Modeling of Selexipag Pharma…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12202](https://doi.org/10.1002/psp4.12202) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Steichert_2025](drugs/drug_nesiritide/pd_Steichert_2025_unknown.md) | Steichert M et al., Angiotensin II/Angiotensin I Ratio as a…, Pharmaceutics (2025) | [10.3390/pharmaceutics17101345](https://doi.org/10.3390/pharmaceutics17101345) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Addisu_2008](drugs/drug_nesiritide/pd_Addisu_2008_unknown.md) | Addisu A et al., B-type natriuretic peptide decreases ga…, Experimental biology and me… (2008) | [10.3181/0708-RM-216](https://doi.org/10.3181/0708-RM-216) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rothman_2025](drugs/drug_nesiritide/pd_Rothman_2025_TPR.md) | Rothman AMK et al., Positioning Imatinib for Pulmonary Arte…, American journal of respira… (2025) | [10.1164/rccm.202410-1929oc](https://doi.org/10.1164/rccm.202410-1929oc) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Zhang_2017](drugs/drug_nesiritide/pd_Zhang_2017_unknown.md) | Zhang MY et al., DanHong injection targets endothelin re…, Oncotarget (2017) | [10.18632/oncotarget.21900](https://doi.org/10.18632/oncotarget.21900) |

## Coverage

- **PubMed hits:** 291 matched, 156 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hill_1994.pdf` | Hill NS et al., Brain natriuretic peptide: possible rol…, The American journal of phy… (1994) | pd | 4 | [10.1152/ajplung.1994.266.3.L308](https://doi.org/10.1152/ajplung.1994.266.3.L308) | [8166300](https://www.ncbi.nlm.nih.gov/pubmed/8166300) | metadata signals extractable PD data (IC50) |
| `Kambayashi_1990.pdf` | Kambayashi Y et al., Biological characterization of human br…, Biochemical and biophysical… (1990) | pd | 4 | [10.1016/s0006-291x(05)80077-4](https://doi.org/10.1016/s0006-291x(05)80077-4) | [2260971](https://www.ncbi.nlm.nih.gov/pubmed/2260971) | metadata signals extractable PD data (IC50) |
| `Khurana_1993.pdf` | Khurana ML et al., Receptor-mediated stimulatory effect of…, Endocrinology (1993) | pd | 4 | [10.1210/endo.133.5.8404664](https://doi.org/10.1210/endo.133.5.8404664) | [8404664](https://www.ncbi.nlm.nih.gov/pubmed/8404664) | metadata signals extractable PD data (EC50) |
| `Nakagawa_1995.pdf` | Nakagawa M et al., Preparation of a monoclonal antibody ag…, Clinical and experimental p… (1995) | pd | 4 | [10.1111/j.1440-1681.1995.tb02874.x](https://doi.org/10.1111/j.1440-1681.1995.tb02874.x) | [9072348](https://www.ncbi.nlm.nih.gov/pubmed/9072348) | metadata signals extractable PD data (IC50) |
| `Oehlenschlager_1989.pdf` | Oehlenschlager WF et al., Atrial and brain natriuretic peptides s…, European journal of pharmac… (1989) | pd | 4 | [10.1016/0014-2999(89)90838-8](https://doi.org/10.1016/0014-2999(89)90838-8) | [2542042](https://www.ncbi.nlm.nih.gov/pubmed/2542042) | metadata signals extractable PD data (IC50) |
| `Robert_2001.pdf` | Robert P et al., EDG1 receptor stimulation leads to card…, Journal of molecular and ce… (2001) | pd | 4 | [10.1006/jmcc.2001.1433](https://doi.org/10.1006/jmcc.2001.1433) | [11549339](https://www.ncbi.nlm.nih.gov/pubmed/11549339) | metadata signals extractable PD data (EC50) |
| `Soleh_2014.pdf` | Soleh MT et al., A rapid and cost-effective method of pr…, Biotechnology letters (2014) | pd | 4 | [10.1007/s10529-013-1341-0](https://doi.org/10.1007/s10529-013-1341-0) | [24101238](https://www.ncbi.nlm.nih.gov/pubmed/24101238) | metadata signals extractable PD data (EC50) |
| `Takagi_1993.pdf` | Takagi K et al., Relaxant effects of brain natriuretic p…, Clinical and experimental p… (1993) | pd | 4 | [10.1111/j.1440-1681.1993.tb01676.x](https://doi.org/10.1111/j.1440-1681.1993.tb01676.x) | [8387413](https://www.ncbi.nlm.nih.gov/pubmed/8387413) | metadata signals extractable PD data (EC50) |
| `Yandle_1993.pdf` | Yandle TG et al., Assay of brain natriuretic peptide (BNP…, The Journal of clinical end… (1993) | pd | 4 | [10.1210/jcem.76.4.8473392](https://doi.org/10.1210/jcem.76.4.8473392) | [8473392](https://www.ncbi.nlm.nih.gov/pubmed/8473392) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-09T23:10:47.242465+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdallah_2026 | irrelevant | 0 | 0 | The paper is a review on biogenic nanoparticles for antibiotic resistance and does not mention nesiritide or report any pharmacokinetic parameters for it. |
| PD | Abdallah_2026 | not_relevant | 0 | 0 | The paper is a review on biogenic nanoparticles for antibiotic resistance and does not mention nesiritide or report any pharmacodynamic parameters. |
| PGx | Abuzaanona_2017 | not_relevant | 2 | 0 | The text is a review summary that mentions nesiritide and the potential for genetic impacts on PK/PD but does not report specific quantitative pharmacogenomic effects or fitted parameters. |
| PGx | Ain_2025 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects of empagliflozin, not nesiritide. |
| popPK | Alonso-Vega_2021 | irrelevant | 0 | 0 | The paper is a study design for Chagas disease treatment using benznidazole and nifurtimox, and does not involve nesiritide. |
| PD | Alonso-Vega_2021 | not_relevant | 0 | 0 | The paper is a study protocol for a clinical trial involving benznidazole and nifurtimox, not nesiritide, and does not report any pharmacodynamic or exposure-response data. |
| popPK | Andrinopoulou_2015 | irrelevant | 0 | 0 | The paper focuses on dynamic prediction of outcomes in aortic stenosis using BNP data and does not involve nesiritide or report any pharmacokinetic parameters. |
| PD | Bachmann_2019 | not_relevant | 0 | 0 | The paper investigates the effect of testosterone on natriuretic peptide levels, not the pharmacodynamics of nesiritide. |
| popPK | Bianco_2020 | irrelevant | 0 | 0 | The paper is a retrospective study on QT interval prolongation in COVID-19 patients and does not mention nesiritide or report any pharmacokinetic parameters. |
| PD | Bianco_2020 | not_relevant | 0 | 0 | The paper is a retrospective clinical study on QTc prolongation in COVID-19 patients and does not report any pharmacodynamic or exposure-response analysis for nesiritide. |
| PD | Brojakowska_2023 | not_relevant | 0 | 0 | The paper investigates radiation dose-response in mice and does not involve the drug nesiritide or any pharmacodynamic modeling. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy that does not mention nesiritide or report any pharmacokinetic parameters for it. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any specific pharmacodynamic or exposure-response data for nesiritide. |
| PGx | Cao_2024 | not_relevant | 0 | 0 | The paper analyzes serum markers in COVID-19 patients and does not mention nesiritide or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Cermak_1996 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study on rat mesangial cells investigating the mechanism of natriuretic peptides, not a pharmacokinetic study of nesiritide. |
| popPK | Chrysant_2017 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and effects of LCZ-696 (sacubitril/valsartan), not nesiritide, and contains no quantitative PK parameters for nesiritide. |
| PD | Chrysant_2017 | not_relevant | 0 | 0 | The text is a qualitative introduction/review of LCZ-696's mechanism and does not contain any numeric PD parameters, concentration-effect curves, or dose-response data. |
| PGx | Cipriani_2022 | not_relevant | 0 | 0 | The paper investigates the prognostic value of low QRS voltages in cardiac amyloidosis and does not mention nesiritide or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Dabour_2026 | irrelevant | 0 | 0 | The study focuses on the PK/PD of doxorubicin and biomarkers GDF15/NT-proBNP, and does not involve nesiritide. |
| popPK | Dahrouj_2013 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on retinal pigment epithelium barrier function using natriuretic peptides (ANP, BNP, CNP) and does not involve nesiritide or report pharmacokinetic parameters. |
| PD | Dahrouj_2013 | not_relevant | 0 | 0 | The paper investigates the effect of natriuretic peptides (ANP, BNP, CNP) on retinal barrier function, not nesiritide. |
| PGx | Dickey_2008 | not_relevant | 0 | 0 | The paper describes the design and receptor binding properties of novel synthetic natriuretic peptides, not the pharmacogenomics of nesiritide. |
| PGx | Dickey_2010 | not_relevant | 0 | 0 | The paper investigates the structure-activity relationship of synthetic BNP analogs (L-BNP, M-BNP) and their receptor binding affinities, but does not report any pharmacogenomic effects (gene variants in patients) on the PK or PD of nesiritide. |
| popPK | Ding_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for vancomycin, not nesiritide. |
| PD | Ding_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for vancomycin, not nesiritide, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| PD | Dou_2024 | not_relevant | 0 | 0 | The paper investigates black ginseng, not nesiritide, and does not report any pharmacodynamic or exposure-response data for nesiritide. |
| popPK | El-Mowafy_2007 | irrelevant | 0 | 0 | The paper investigates the mechanism of resveratrol and estradiol on guanylyl cyclase in coronary cells and does not involve nesiritide or pharmacokinetic parameters. |
| PD | El-Mowafy_2007 | not_relevant | 0 | 0 | The paper investigates the pharmacology of resveratrol and estradiol, not nesiritide. |
| PD | Fridkin_2011 | not_relevant | 0 | 0 | The paper reports in vitro binding affinities (IC50) for somatostatin and BNP analogs, not nesiritide, and does not contain any pharmacodynamic or exposure-response analysis. |
| PD | Furukawa_2017 | not_relevant | 0 | 0 | The paper is an epidemiological study analyzing the association between BNP levels and renal function in diabetic patients; it does not involve the drug nesiritide or report any pharmacodynamic or exposure-response parameters. |
| popPK | Gardner_2022 | irrelevant | 0 | 0 | The study investigates the correlation between BNP levels and growth factors in infants and does not report any pharmacokinetic parameters for nesiritide. |
| popPK | Gower_2006 | irrelevant | 0 | 0 | The paper investigates natriuretic peptide receptor expression and binding in gastric cells, not the pharmacokinetics of nesiritide. |
| PD | Gower_2006 | not_relevant | 0 | 0 | The paper studies ANP/BNP/CNP receptor binding and signaling in gastric cells, not nesiritide pharmacodynamics. |
| popPK | Guslits_2021 | irrelevant | 0 | 0 | The study evaluates BNP as a biomarker for outcome prediction in infants with congenital diaphragmatic hernia and does not report pharmacokinetic parameters for nesiritide. |
| popPK | Hachamovitch_2015 | irrelevant | 0 | 0 | The paper is a prognostic imaging study using 123I-mIBG and does not involve nesiritide or report any pharmacokinetic parameters. |
| PGx | Hahn_2022 | not_relevant | 0 | 0 | The paper investigates genetic effects on endogenous natriuretic peptide levels, not the pharmacokinetics or pharmacodynamics of the drug nesiritide. |
| PD | Hellmann_2020 | not_relevant | 0 | 0 | The paper analyzes the effect of genetic polymorphisms on cardiac biomarker concentrations in patients treated with doxorubicin, not nesiritide, and does not report any exposure-response or dose-response PD parameters. |
| PGx | Hellmann_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of doxorubicin, not nesiritide. |
| popPK | Hernández_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on natriuretic peptides in guinea-pig cerebellar slices and does not report pharmacokinetic parameters for nesiritide. |
| PD | Hernández_1994 | not_relevant | 0 | 0 | The paper studies natriuretic peptides (ANP, BNP, CNP) in guinea-pig cerebellar slices, not nesiritide, and does not report any PD relationship for the target drug. |
| PD | Hill_1994 | not_relevant | 0 | 0 | The paper discusses brain natriuretic peptide (BNP) and hypoxic pulmonary hypertension, not nesiritide, and does not report any exposure-response or dose-response data for nesiritide. |
| popPK | Hill_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ambrisentan, not nesiritide. |
| PD | Hill_2020 | not_relevant | 0 | 0 | The paper studies ambrisentan, not nesiritide. |
| popPK | Hu_2025 | irrelevant | 0 | 0 | The study focuses on pharmacokinetic modeling of vancomycin, not nesiritide. |
| popPK | Hussain_2019 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on pulmonary artery rings using ANP and BNP, not a pharmacokinetic study of nesiritide. |
| PD | Hussain_2019 | not_relevant | 0 | 0 | The paper studies ANP and BNP in an in vitro myograph assay, not nesiritide. |
| popPK | Israni_2026 | irrelevant | 0 | 0 | The paper is a review on bioactive anti-inflammatory compounds and does not mention nesiritide or report any pharmacokinetic parameters for it. |
| PD | Israni_2026 | not_relevant | 0 | 0 | The paper is a review on natural anti-inflammatory compounds and does not mention nesiritide or report any pharmacodynamic parameters for it. |
| PGx | Jia_2023 | not_relevant | 0 | 0 | The paper studies the effect of Nprc gene deletion on exercise performance in mice and does not involve the drug nesiritide. |
| PGx | Jonas_2017 | not_relevant | 0 | 0 | The paper investigates the signaling mechanisms of C-type natriuretic peptide (CNP) in pituitary cells and does not mention nesiritide or any pharmacogenomic effects on its PK/PD parameters. |
| PD | Kambayashi_1990 | not_relevant | 0 | 0 | The paper characterizes BNP (a different peptide) and does not report pharmacodynamic or exposure-response data for nesiritide. |
| PGx | Karmacharya_2019 | not_relevant | 0 | 0 | The paper studies gut microbiota in Bengal tigers and does not mention nesiritide or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Karpińska_2024 | irrelevant | 0 | 0 | The paper is an ecological study on bird distribution in forests and contains no information regarding nesiritide or pharmacokinetics. |
| popPK | Kassem_2021 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for candesartan, not nesiritide. |
| PD | Kassem_2021 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for candesartan, not nesiritide, and does not include a pharmacodynamic (PD) or exposure-response model. |
| popPK | Katoli_2010 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of natriuretic peptide receptors in corneal epithelium and does not report pharmacokinetic parameters for nesiritide. |
| PD | Katoli_2010 | not_relevant | 0 | 0 | The paper studies natriuretic peptides (CNP, ANP, BNP) in corneal cells, not the drug nesiritide. |
| popPK | Khurana_1993 | irrelevant | 0 | 0 | The paper studies the effect of natriuretic peptides on testosterone production in mouse Leydig cells and does not involve nesiritide or pharmacokinetic parameters. |
| PD | Khurana_1993 | not_relevant | 0 | 0 | The paper investigates the effect of natriuretic peptides on testosterone production in mouse Leydig cells and does not mention nesiritide or report any pharmacodynamic parameters for it. |
| popPK | Kimura_2007 | irrelevant | 0 | 0 | The study investigates ANP and BNP, not nesiritide, which is the required subject drug. |
| popPK | Koomen_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for atrasentan, not nesiritide. |
| PD | Koomen_2021 | not_relevant | 0 | 0 | not captured |
| popPK | Krause_2017 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for selexipag, not nesiritide. |
| popPK | Krischke_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of doxorubicin, not nesiritide. |
| PD | Krischke_2016 | not_relevant | 0 | 0 | The paper studies doxorubicin, not nesiritide, and reports no extractable PD parameters for the target drug. |
| popPK | Kroll_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of NT-proBNP and BNP, not nesiritide. |
| PGx | Lanfear_2010 | not_relevant | 0 | 0 | The paper is a review that mentions pharmacogenetic studies of nesiritide are "currently underway" but does not report any specific results, data, or effect sizes. |
| popPK | Lara_2026 | irrelevant | 0 | 0 | The paper is an epidemiological study on omega-3 fatty acids and atrial fibrillation biomarkers, and does not involve nesiritide or pharmacokinetic parameters. |
| popPK | Lawrence_2018 | irrelevant | 0 | 0 | The study focuses on treprostinil for pulmonary hypertension and does not report pharmacokinetic parameters for nesiritide. |
| PD | Li_2020 | not_relevant | 0 | 0 | The paper studies the quality of Astragali Radix (a herbal medicine) and does not involve nesiritide or report any pharmacodynamic parameters for it. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dexamethasone, not nesiritide. |
| PD | Li_2023 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of dexamethasone, not nesiritide, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Liang_2007 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of BNP on cholesterol biosynthesis in cell culture and does not report pharmacokinetic parameters for nesiritide. |
| PGx | Liu_2022 | not_relevant | 0 | 0 | The paper investigates genetic predictors of cardiac toxicity in breast cancer chemotherapy and does not mention nesiritide. |
| PD | Liu_2025 | not_relevant | 0 | 0 | The paper analyzes the association between the Systemic Immune-Inflammatory Index (SII) and cardiac biomarkers in a general population cohort; it does not involve the drug nesiritide or any pharmacodynamic exposure-response relationship. |
| popPK | Loss_2024 | irrelevant | 0 | 0 | The paper is a clinical study on pediatric heart failure focusing on BNP levels and vasoactive drug weaning, and does not report pharmacokinetic parameters for nesiritide. |
| PD | Lu_2022 | not_relevant | 0 | 0 | The paper investigates the cardioprotective effects of Aidi injection (ADI) on doxorubicin-induced toxicity, not nesiritide. |
| PGx | Maimaitiming_2010 | not_relevant | 0 | 0 | The paper studies the association between NPPA/NPPB variants and blood pressure/kidney outcomes in a general population, and does not involve the drug nesiritide or its pharmacokinetics/pharmacodynamics. |
| popPK | Makhaeva_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and biological activity of ferrocene derivatives for Alzheimer's disease and does not involve nesiritide or pharmacokinetic parameters. |
| PD | Makhaeva_2025 | not_relevant | 0 | 0 | The paper studies ferrocene derivatives for Alzheimer's disease and does not mention nesiritide or report any pharmacodynamic/exposure-response data for it. |
| popPK | Matera_2011 | irrelevant | 0 | 0 | The paper investigates the pharmacological effects of BNP on bronchial tone in vitro and does not report any pharmacokinetic parameters for nesiritide. |
| PD | Matera_2011 | not_relevant | 0 | 0 | The paper investigates the pharmacology of brain natriuretic peptide (BNP), not nesiritide, and does not report any exposure-response or dose-response relationship for nesiritide. |
| popPK | McArdle_1993 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on natriuretic peptides in pituitary cells and does not involve nesiritide or pharmacokinetic parameters. |
| PD | McArdle_1993 | not_relevant | 0 | 0 | The paper studies C-type natriuretic peptide (CNP) and GnRH in pituitary cells, not nesiritide. |
| PD | McGregor_1990 | not_relevant | 2 | 1 | The study reports qualitative effects and PK parameters (MCR, t1/2) for a single fixed dose of BNP, but does not provide a dose-response curve or numeric PD parameters (Emax, EC50) for nesiritide. |
| PGx | Meirhaeghe_2007 | not_relevant | 0 | 0 | The paper investigates the association between a BNP gene polymorphism and type 2 diabetes risk, not the pharmacokinetics or pharmacodynamics of the drug nesiritide. |
| popPK | Mody_2023 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and toxicodynamics of doxorubicin and dexrazoxane, not nesiritide. |
| PD | Mody_2023 | not_relevant | 0 | 0 | The paper reports PD parameters for doxorubicin and dexrazoxane, not nesiritide. |
| popPK | Mohammed_2025 | irrelevant | 0 | 0 | The paper investigates sphingolipids as biomarkers for doxorubicin-induced cardiotoxicity and does not involve nesiritide or report any pharmacokinetic parameters. |
| popPK | Mohammed_2025_2 | irrelevant | 0 | 0 | The paper investigates sphingolipid biomarkers for doxorubicin cardiotoxicity and does not mention nesiritide or report any pharmacokinetic parameters. |
| popPK | Müller_2013 | irrelevant | 0 | 0 | The paper is a statistical review of Bayesian nonparametric inference methods and does not contain any pharmacokinetic data or parameters for nesiritide. |
| PD | Nakagawa_1995 | not_relevant | 0 | 0 | The paper focuses on the preparation of an antibody against BNP and its tissue distribution, containing no pharmacodynamic or exposure-response analysis for nesiritide. |
| popPK | Nakashima_2022 | irrelevant | 0 | 0 | The study investigates the effect of luseogliflozin on estimated plasma volume in heart failure patients and does not involve nesiritide or report any pharmacokinetic parameters for it. |
| popPK | Narayan_2017 | irrelevant | 0 | 0 | The study evaluates cardiotoxicity of sunitinib and does not report pharmacokinetic parameters for nesiritide. |
| PGx | Nishimura_2016 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of PDE-5 inhibitors in pulmonary hypertension, not nesiritide. |
| PD | Oehlenschlager_1989 | not_relevant | 0 | 0 | The paper focuses on the shared binding sites of atrial and brain natriuretic peptides in the kidney and heart, not on the pharmacodynamic or exposure-response relationship of nesiritide. |
| PD | Ohyama_1992 | not_relevant | 0 | 0 | The paper studies the antagonist HS-142-1 and does not report any pharmacodynamic or exposure-response data for nesiritide. |
| PGx | Okamoto_2013 | not_relevant | 0 | 0 | The paper studies carvedilol, not nesiritide. |
| popPK | Okamoto_2025 | irrelevant | 0 | 0 | The paper is a clinical study on SGLT2 inhibitors in Fabry disease and does not report pharmacokinetic parameters for nesiritide. |
| popPK | Petersen_2026 | irrelevant | 0 | 0 | The paper is a plasma proteomics study investigating cardiac function after myocardial infarction and does not involve nesiritide or report any pharmacokinetic parameters. |
| popPK | Pichon_2005 | irrelevant | 0 | 0 | The study focuses on BNP as a biomarker for cardiotoxicity of anthracyclines and does not report pharmacokinetic parameters for nesiritide. |
| popPK | Portella_2021 | irrelevant | 0 | 0 | The paper is an in-vitro study on anti-Trypanosoma cruzi drug discovery using hiPSC-CMs and does not involve nesiritide or report any pharmacokinetic parameters. |
| PD | Portella_2021 | not_relevant | 0 | 0 | The paper focuses on anti-Trypanosoma cruzi drug discovery using hiPSC-CMs and does not mention nesiritide or report any pharmacodynamic parameters for it. |
| popPK | Prathapan_2013 | irrelevant | 0 | 0 | The paper is an in-vitro study on the plant extract Boerhaavia diffusa and does not involve nesiritide or pharmacokinetic parameters. |
| PD | Prathapan_2013 | not_relevant | 0 | 0 | The paper studies a plant extract (Boerhaavia diffusa) and does not report any pharmacodynamic or exposure-response data for the drug nesiritide. |
| PGx | Prickett_2018 | not_relevant | 0 | 0 | The paper studies natriuretic peptides (BNP/CNP) and their genetic variants, not the pharmacokinetics or pharmacodynamics of the drug nesiritide. |
| PGx | Prickett_2019 | not_relevant | 0 | 0 | The paper studies endogenous natriuretic peptides and cardiovascular health, not the pharmacokinetics or pharmacodynamics of the drug nesiritide. |
| PGx | Prickett_2023 | not_relevant | 0 | 0 | The paper is a protocol for a longitudinal observational study on natriuretic peptides and cardiovascular risk, and does not report pharmacokinetic or pharmacodynamic effects of nesiritide. |
| PGx | Prickett_2025 | not_relevant | 0 | 0 | The paper studies endogenous natriuretic peptides and metabolic health, not the pharmacokinetics or pharmacodynamics of the drug nesiritide. |
| popPK | Ranasinghe_2025 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of biomarkers for diabetic cardiomyopathy in rodent models and does not study nesiritide or report any pharmacokinetic parameters. |
| PD | Ranasinghe_2025 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of biomarkers in diabetic cardiomyopathy and does not contain any pharmacodynamic or exposure-response data for nesiritide. |
| popPK | Robert_2001 | irrelevant | 0 | 0 | The paper describes a mechanistic study on EDG1 receptor stimulation in rat myocytes and does not involve nesiritide or pharmacokinetic parameters. |
| PD | Robert_2001 | not_relevant | 0 | 0 | The paper focuses on EDG1 receptor stimulation in rat neonatal myocytes and does not mention nesiritide or report any pharmacodynamic parameters for it. |
| popPK | Robinson_2011 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of Gö6976 on guanylyl cyclases and does not report pharmacokinetic parameters for nesiritide. |
| PD | Robinson_2011 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of Gö6976 on guanylyl cyclases and does not report any pharmacodynamic or exposure-response data for nesiritide. |
| popPK | Roman_2026 | irrelevant | 0 | 0 | The paper studies sodium valproate, not nesiritide, and contains no pharmacokinetic parameters for the target drug. |
| PD | Roman_2026 | not_relevant | 0 | 0 | The paper evaluates sodium valproate, not nesiritide, and focuses on mechanistic omics and dose-finding for toxicity rather than quantitative pharmacodynamic modeling. |
| popPK | Rothman_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and efficacy of imatinib, not nesiritide. |
| popPK | Sabina_2024 | irrelevant | 0 | 0 | The paper is a review of finerenone, a different drug, and does not report pharmacokinetic parameters for nesiritide. |
| PD | Sabina_2024 | not_relevant | 0 | 0 | The paper is a scoping review of finerenone (not nesiritide) and contains no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters. |
| PGx | Safranow_2009 | not_relevant | 0 | 0 | The paper studies TNF-alpha levels in CAD patients and does not mention nesiritide or its pharmacokinetics/pharmacodynamics. |
| popPK | Sandeep_2020 | irrelevant | 0 | 0 | The paper is a cardiovascular magnetic resonance imaging study of right ventricular function in Tetralogy of Fallot patients and does not involve nesiritide or pharmacokinetic parameters. |
| PD | Sandeep_2020 | not_relevant | 0 | 0 | The paper evaluates right ventricular-pulmonary artery coupling in post-operative Tetralogy of Fallot patients and does not involve nesiritide or any drug pharmacodynamics. |
| popPK | Soleh_2014 | irrelevant | 0 | 0 | The paper describes the production of recombinant proBNP variants for immunoassay and does not involve nesiritide or pharmacokinetic parameters. |
| PD | Soleh_2014 | not_relevant | 0 | 0 | The paper describes a method for producing recombinant proBNP/NT-proBNP variants for immunoassay and does not report any pharmacodynamic or exposure-response data for nesiritide. |
| popPK | Steichert_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of enalapril/enalaprilat, not nesiritide. |
| PGx | Sun_2000 | not_relevant | 0 | 0 | The paper studies ANP knockout mice and endogenous natriuretic peptides, not the pharmacokinetics or pharmacodynamics of the drug nesiritide. |
| popPK | Sun_2005 | irrelevant | 0 | 0 | The paper describes the recombinant production of brain natriuretic peptide (BNP), not nesiritide, and contains no pharmacokinetic parameters. |
| popPK | Sunnåker_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for mitiperstat, not nesiritide. |
| PD | Sunnåker_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) model for mitiperstat, not nesiritide, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Superchi_2022 | irrelevant | 0 | 0 | The paper is a scoping review of clinical trial designs for personalized medicine and does not report any pharmacokinetic parameters for nesiritide. |
| PD | Superchi_2022 | not_relevant | 0 | 0 | The paper is a scoping review of clinical trial designs for personalized medicine and does not report any pharmacodynamic or exposure-response data for nesiritide. |
| PGx | Sutter_2013 | not_relevant | 0 | 0 | The paper investigates the association between CYP2D6 polymorphisms and methamphetamine-induced cardiomyopathy, not the pharmacokinetics or pharmacodynamics of nesiritide. |
| popPK | Takagi_1993 | irrelevant | 0 | 0 | The paper studies the pharmacological effect of brain natriuretic peptide on guinea-pig smooth muscle, not the pharmacokinetics of nesiritide. |
| PD | Takagi_1993 | not_relevant | 0 | 0 | The paper studies brain natriuretic peptide (BNP) in guinea-pig tracheal smooth muscle, not nesiritide, and does not report a PD relationship for the specified drug. |
| popPK | Taylor_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for methotrexate, not nesiritide. |
| PD | Taylor_2026 | not_relevant | 0 | 0 | The paper focuses on methotrexate pharmacokinetics and its relationship to acute kidney injury, not nesiritide. |
| popPK | Terasaki_2015 | irrelevant | 0 | 0 | The paper investigates the chronic toxicity of parabens in aquatic organisms and does not involve nesiritide or pharmacokinetic parameters. |
| PD | Terasaki_2015 | not_relevant | 0 | 0 | The paper investigates the chronic toxicity of parabens in aquatic organisms, not the pharmacodynamics of nesiritide. |
| PGx | Tian_2021 | not_relevant | 0 | 0 | The paper studies BNP gene variants in pigs for high-altitude adaptation, not the pharmacogenomics of the drug nesiritide. |
| PD | Torres-Arellano_2020 | not_relevant | 0 | 0 | The paper studies the association between environmental arsenic exposure and natriuretic peptide levels in children; it does not report a pharmacodynamic or exposure-response relationship for the drug nesiritide. |
| popPK | Tsuruda_2026 | irrelevant | 0 | 0 | The paper focuses on transthyretin (TTR) levels in ATTR amyloidosis and does not involve nesiritide or report any pharmacokinetic parameters. |
| popPK | Usman_2023 | irrelevant | 0 | 0 | The paper is a general review of pharmacometrics in low- and middle-income countries and does not contain any specific pharmacokinetic data or parameters for nesiritide. |
| PD | Usman_2023 | not_relevant | 0 | 0 | The paper is a general review of pharmacometrics in LMICs and does not report any specific PD or exposure-response data for nesiritide. |
| PGx | Vassalle_2007 | not_relevant | 0 | 0 | The paper investigates the effect of genetic variants on endogenous natriuretic peptide concentrations in heart failure patients, not on the pharmacokinetics or pharmacodynamics of the drug nesiritide. |
| PGx | Vinnakota_2020 | not_relevant | 0 | 0 | The paper is a review of natriuretic peptides and does not report pharmacogenomic effects on the PK or PD of nesiritide. |
| popPK | Vizza_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sildenafil, not nesiritide. |
| PD | Vizza_2017 | not_relevant | 0 | 0 | The paper studies sildenafil, not nesiritide, and while it mentions EC50/EC90 values for sildenafil in a figure legend, it does not report PD parameters for the requested drug. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper describes the discovery and synthesis of a new antibiotic (cilagicin) and does not involve nesiritide or pharmacokinetic parameters. |
| PD | Wang_2022 | not_relevant | 0 | 0 | The paper describes the discovery and synthesis of a new antibiotic (cilagicin) and its mechanism of action, but does not report any pharmacodynamic or exposure-response data for nesiritide. |
| popPK | Wiley_2001 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on coronary arteries investigating endothelin-1 and natriuretic peptides, and does not involve nesiritide or report any pharmacokinetic parameters. |
| PD | Wiley_2001 | not_relevant | 0 | 0 | The paper investigates the physiological antagonism of endothelin-1 by natriuretic peptides (ANP, BNP, CNP) and NO in human coronary arteries, and does not mention or test nesiritide. |
| popPK | Wiley_2002 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on vasodilators (ghrelin, ET-1, etc.) in human arteries and does not involve nesiritide or report any pharmacokinetic parameters. |
| PD | Wiley_2002 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of ghrelin and other vasodilators, not nesiritide. |
| PGx | Winkler_2010 | not_relevant | 0 | 0 | The paper investigates the association between ApoE genotype and cardiovascular outcomes in dialysis patients, with no mention of nesiritide or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Wodschow_2023 | irrelevant | 0 | 0 | The study investigates the effects of oral ketone esters on myocardial function in post-COVID-19 patients and does not involve nesiritide or report any pharmacokinetic parameters for it. |
| PD | Wu_2023 | not_relevant | 0 | 0 | The paper investigates the dose-response of isoprenaline to induce a disease model in mice and does not contain any data, analysis, or mention of nesiritide. |
| PD | Xiong_2025 | not_relevant | 0 | 0 | The paper focuses on doxorubicin cardiotoxicity and mitochondrial mechanisms, not nesiritide, and does not report any PD or exposure-response parameters for nesiritide. |
| popPK | Xue_2025 | irrelevant | 0 | 0 | The paper is a clinical study on hypotension during continuous renal replacement therapy and does not involve nesiritide or pharmacokinetic parameters. |
| PD | Xue_2025 | not_relevant | 0 | 0 | The paper investigates risk factors for hypotension during CRRT using logistic regression and does not involve nesiritide or any pharmacodynamic modeling. |
| popPK | Yamasaki_2026 | irrelevant | 0 | 0 | The paper is a study on muscle oxygenation dynamics in heart failure patients and does not involve nesiritide or report any pharmacokinetic parameters. |
| PD | Yandle_1993 | not_relevant | 0 | 0 | The paper focuses on the assay of BNP and its molecular weight in heart failure, with no mention of nesiritide or any pharmacodynamic/exposure-response analysis. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | The paper investigates the mechanisms of Guizhi-Gancao Decoction in cardiac hypertrophy and does not mention nesiritide or report any pharmacokinetic parameters for it. |
| PD | Yang_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of Guizhi-Gancao Decoction (GGD), not nesiritide. |
| PD | Yasuda_2000 | not_relevant | 0 | 0 | The paper studies the pharmacology of brain natriuretic peptide (BNP) in guinea pig smooth muscle, not the drug nesiritide. |
| popPK | Yeung_1991 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study on natriuretic peptides (BNP/ANP) in mouse astrocytes and does not involve nesiritide or pharmacokinetic parameters. |
| popPK | Yoshikawa_2026 | irrelevant | 0 | 0 | The study focuses on the temporal profiles of endogenous natriuretic peptides (BNP, hANP) and echocardiographic indices in hemodialysis patients, not the pharmacokinetics of the drug nesiritide. |
| popPK | Youssef_2026 | irrelevant | 0 | 0 | The paper is a review on pharmacovigilance in cell and gene therapy and does not contain any pharmacokinetic data or parameters for nesiritide. |
| PD | Youssef_2026 | not_relevant | 0 | 0 | The paper is a review on pharmacovigilance in cell and gene therapy and does not contain any pharmacodynamic or exposure-response data for nesiritide. |
| PD | Yu_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of Persicae Ramulus (a herbal medicine) using network pharmacology and molecular docking, and does not mention nesiritide or report any exposure-response or dose-response PD parameters. |
| PGx | Zaiou_2009 | not_relevant | 0 | 0 | The paper is a general review of cardiovascular genomics and does not report specific pharmacogenomic effects on the PK or PD of nesiritide. |
| popPK | Zakaria_2022 | irrelevant | 0 | 0 | The paper studies the developmental toxicity of gold nanorods in zebrafish and does not involve the drug nesiritide or report any pharmacokinetic parameters for it. |
| PD | Zakaria_2022 | not_relevant | 0 | 0 | The paper studies the toxicity of gold nanorods in zebrafish, not the pharmacodynamics of the drug nesiritide. |
| PD | Zhang_2016 | not_relevant | 0 | 0 | The paper studies hydrogen (H2) and isoproterenol, not nesiritide, and does not report any exposure-response or dose-response relationship for nesiritide. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | The paper investigates the pathogenic mechanism of a TNNI3 mutation in hypertrophic cardiomyopathy and does not mention nesiritide or any pharmacokinetic/pharmacodynamic parameters. |
| PD | Zhong_2023 | not_relevant | 0 | 0 | The paper studies a traditional Chinese medicine preparation (Qiweiqiangxin I granules) and does not mention nesiritide or report any pharmacodynamic parameters for it. |
| popPK | Zhu_2026 | irrelevant | 0 | 0 | The study focuses on a microneedle biosensor platform and uses irinotecan and antibiotics as model drugs, not nesiritide. |
| PD | Zhu_2026 | not_relevant | 0 | 0 | The paper focuses on a microneedle biosensor platform for monitoring pharmacokinetics (clearance) of irinotecan and antibiotics, not on the pharmacodynamic (exposure-response) relationship of nesiritide. |
| PGx | Zordoky_2008 | not_relevant | 0 | 0 | The paper studies doxorubicin's effect on CYP gene expression in H9c2 cells and does not involve nesiritide or pharmacogenomics. |
| popPK | Zou_2026 | irrelevant | 0 | 0 | The study investigates SGLT2 inhibitors in pulmonary arterial hypertension and does not involve nesiritide or report any pharmacokinetic parameters. |
| popPK | Şenkal_2020 | irrelevant | 0 | 0 | The paper is a retrospective cohort study on ACE inhibitors and ARBs in COVID-19 patients and does not involve nesiritide or report any pharmacokinetic parameters. |
| PD | Şenkal_2020 | not_relevant | 0 | 0 | The paper is a retrospective cohort study on ACE inhibitors in COVID-19 and does not involve nesiritide or report any pharmacodynamic exposure-response relationship. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_nesiritide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
