# dexrabeprazole

- **generic name:** dexrabeprazole
- **ATC codes:** `A02BC07`
- **DrugBank:** [DB13762](https://go.drugbank.com/drugs/DB13762)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 20:01 | 11:54 | 0/0/0 | 0/0/0 | 0/0/0 | 89,139/3,124 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 4/7 | 11/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 69 matched, 44 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Guo_2024.pdf` | Guo J et al., Improved quantitative determination of…, Journal of chromatography.… (2024) | popPK | 8 | [10.1016/j.jchromb.2023.123969](https://doi.org/10.1016/j.jchromb.2023.123969) | [38141290](https://pubmed.ncbi.nlm.nih.gov/38141290) | The paper describes a toxicokinetic study of (R)-rabeprazole (dexrabeprazole) in rats, but the specific numeric PK parameter values are not present in the provided evidence text. |

<sub>queue written 2026-09-10T20:01:20.221885+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bakheit_2021 | irrelevant | 0 | 0 | The paper is a review of rabeprazole (not dexrabeprazole) and does not report original quantitative PK parameters for the subject drug. |
| popPK | Bao_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levofloxacin in rat stomachs, with rabeprazole serving only as a co-administered agent, and does not report PK parameters for dexrabeprazole. |
| popPK | Cheung_2021 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of GDC-3280, with rabeprazole (not dexrabeprazole) serving only as a co-administered proton pump inhibitor. |
| popPK | Chiba_2014 | irrelevant | 0 | 0 | The study focuses on CYP2C19 substrates (omeprazole, lansoprazole, rabeprazole) and does not report pharmacokinetic parameters for dexrabeprazole. |
| PD | Chitlange_2010 | not_relevant | 0 | 0 | The paper describes a stability-indicating TLC-densitometric method for quantifying drug concentrations in formulations, containing no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Desai_2002 | irrelevant | 0 | 0 | The evidence only lists the drug name "Rabeprazole" (not dexrabeprazole) and contains no pharmacokinetic data or parameters. |
| popPK | Gao_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of osimertinib, with rabeprazole serving only as a co-administered inhibitor/comparator, and no PK parameters for dexrabeprazole are reported. |
| popPK | Guo_2024 | relevant | 8 | 0 | The paper describes a toxicokinetic study of (R)-rabeprazole (dexrabeprazole) in rats, but the specific numeric PK parameter values are not present in the provided evidence text. |
| popPK | Hossain_2021 | irrelevant | 0 | 0 | The study is an in-vitro fluorescence spectroscopy and molecular docking analysis of rabeprazole sodium (not dexrabeprazole) binding to BSA, reporting no in-vivo pharmacokinetic parameters. |
| popPK | Itagaki_2004 | irrelevant | 0 | 0 | The study investigates the effect of rabeprazole (not dexrabeprazole) on tacrolimus pharmacokinetics, and does not report PK parameters for dexrabeprazole. |
| popPK | Keane_1999 | irrelevant | 0 | 0 | The study investigates rabeprazole, not dexrabeprazole, and does not report quantitative PK parameters for the target drug. |
| popPK | Kekilli_2014 | irrelevant | 0 | 0 | The paper title indicates a case report on an adverse effect (tinnitus) rather than a pharmacokinetic study, and no quantitative PK parameters are present in the evidence. |
| popPK | Kimura_2010 | irrelevant | 0 | 0 | The study focuses on the diagnostic utility of barium swallow for LPRD and the clinical efficacy of rabeprazole (not dexrabeprazole), with no pharmacokinetic parameters reported. |
| popPK | Kirchheiner_2009 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis of gastric pH effects for PPIs (including rabeprazole, not dexrabeprazole) and does not report pharmacokinetic parameters like clearance or volume. |
| popPK | Kochar_2010 | irrelevant | 0 | 0 | The study is a clinical trial for malaria treatment using rabeprazole (not dexrabeprazole) as an adjunct, and it reports clinical outcomes rather than pharmacokinetic parameters. |
| popPK | Li_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP450 inhibition and does not report pharmacokinetic disposition parameters for dexrabeprazole. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rifasutenizol, with rabeprazole (not dexrabeprazole) serving only as a co-administered comparator agent without specific PK parameter reporting for the target drug. |
| PD | Mario_2003 | not_relevant | 2 | 1 | The paper reports a clinical dose-comparison (10mg vs 20mg) with binary eradication outcomes but provides no PK data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | McLeay_2014 | irrelevant | 0 | 0 | The study focuses on rabeprazole, not dexrabeprazole, and does not report PK parameters for the target drug. |
| popPK | Miura_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of rabeprazole metabolism, not a pharmacokinetic study of dexrabeprazole disposition parameters. |
| popPK | Musib_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cobimetinib, with rabeprazole serving only as a co-administered proton pump inhibitor to test for drug interactions, and no PK parameters for dexrabeprazole are reported. |
| popPK | Nakada_2019 | irrelevant | 0 | 0 | The study focuses on renal transporter inhibition and creatinine clearance estimation, with rabeprazole (not dexrabeprazole) serving only as a test compound for the method, and no PK parameters for dexrabeprazole are reported. |
| popPK | Ochoa_2020 | irrelevant | 0 | 0 | The study investigates rabeprazole, not dexrabeprazole, and does not report PK parameters for the target drug. |
| PD | Pai_2007 | not_relevant | 1 | 0 | The text is a general review of chirally pure proton pump inhibitors and does not report specific numeric pharmacodynamic parameters or exposure-response data for dexrabeprazole. |
| popPK | Park_1996 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding dexrabeprazole pharmacokinetics. |
| popPK | Patel_2019 | irrelevant | 0 | 0 | The study evaluates rabeprazole (not dexrabeprazole) in dogs, and the subject drug is not the focus of the pharmacokinetic analysis. |
| popPK | Patil_2022 | irrelevant | 0 | 0 | The study is an in-silico and in-vitro mechanistic investigation of drug-drug interactions involving rabeprazole (not dexrabeprazole) and does not report pharmacokinetic disposition parameters. |
| popPK | Pisanu_2021 | irrelevant | 0 | 0 | The study is an epidemiological analysis of migraine prevalence and PPI use, not a pharmacokinetic study, and does not report any PK parameters for dexrabeprazole. |
| popPK | Prakash_1998 | irrelevant | 0 | 0 | The paper discusses rabeprazole (not dexrabeprazole) and contains no quantitative pharmacokinetic parameters. |
| popPK | Román_2014 | irrelevant | 0 | 0 | The study focuses on omeprazole, pantoprazole, and rabeprazole, not dexrabeprazole. |
| popPK | Sablin_2018 | irrelevant | 0 | 0 | The paper is a clinical review of GERD pathophysiology and treatment with rabeprazole, containing no pharmacokinetic data or parameters for dexrabeprazole. |
| popPK | Setoyama_2005 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for rabeprazole, not dexrabeprazole. |
| popPK | Shin_2013 | irrelevant | 0 | 0 | The paper is a review of PPI pharmacokinetics and pharmacodynamics that does not report quantitative disposition parameters (CL, V, etc.) for dexrabeprazole. |
| PD | Takeuchi_2020 | not_relevant | 2 | 1 | The study reports comparative mean pharmacodynamic endpoints (pH holding time ratios) for different doses but does not provide a concentration-effect model, dose-response curve, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Tsuchiya_1995 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no pharmacokinetic data or text regarding dexrabeprazole. |
| popPK | Ueda_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methotrexate in rats, with dexrabeprazole (or rabeprazole) serving only as a comparator agent for OAT3 inhibition, and no PK parameters for dexrabeprazole are reported. |
| popPK | Uno_2006 | irrelevant | 0 | 0 | The study investigates rabeprazole, not dexrabeprazole, and does not report PK parameters for the target drug. |
| popPK | Xie_2024 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on rabeprazole (not dexrabeprazole) focusing on ferroptosis and gene expression, with no pharmacokinetic parameters reported. |
| popPK | Zannikos_2011 | irrelevant | 0 | 0 | The study investigates rabeprazole, not dexrabeprazole, and does not report quantitative PK parameters for the target drug. |
| PD | Zhou_2008 | not_relevant | 1 | 0 | The text is a qualitative discussion and literature review regarding racemic switches in PPIs, containing no numeric PD parameters, concentration-effect curves, or specific PK/PD modeling results for dexrabeprazole. |
| popPK | Zubiaur_2023 | irrelevant | 2 | 1 | The study analyzes rabeprazole (not dexrabeprazole) and reports only normalized AUC (nAUC) values without deriving compartmental PK parameters like clearance, volume, or half-life. |
| popPK | unknown_1999 | irrelevant | 0 | 0 | The evidence only lists "Rabeprazole sodium" (the racemate, not specifically dexrabeprazole) and contains no pharmacokinetic data or numeric parameters. |
| popPK | unknown_1999_2 | irrelevant | 0 | 0 | The evidence only lists the drug name "Rabeprazole" (not dexrabeprazole) and contains no pharmacokinetic data or numeric parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dexrabeprazole`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
