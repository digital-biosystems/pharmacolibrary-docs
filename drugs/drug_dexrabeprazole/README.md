<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;dexrabeprazole&quot;}]"></div>

# dexrabeprazole

- **generic name:** dexrabeprazole
- **ATC codes:** `A02BC07`
- **DrugBank:** [DB13762](https://go.drugbank.com/drugs/DB13762)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 06:00 | 13:15 | 0/0/0 | 0/0/0 | 0/0/0 | 320,432/7,754 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 4/12 | 16/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dexrabeprazole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` substrate | DrugBank actor |

## Coverage

- **PubMed hits:** 157 matched, 61 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Guo_2024.pdf` | Guo J et al., Improved quantitative determination of…, Journal of chromatography.… (2024) | popPK | 8 | [10.1016/j.jchromb.2023.123969](https://doi.org/10.1016/j.jchromb.2023.123969) | [38141290](https://pubmed.ncbi.nlm.nih.gov/38141290) | The paper describes a toxicokinetic study of (R)-rabeprazole (dexrabeprazole) in rats, but the specific numeric PK parameter values are not present in the provided evidence text. |

<sub>queue written 2026-09-18T06:00:02.227091+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arai_2008 | irrelevant | 0 | 0 | The study investigates rabeprazole, not dexrabeprazole, and does not report compartmental PK parameters (CL, V, Q, ka) for the target drug. |
| popPK | Bakheit_2021 | irrelevant | 0 | 0 | The paper is a review of rabeprazole (not dexrabeprazole) and does not report original quantitative PK parameters for the subject drug. |
| popPK | Bao_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levofloxacin in rat stomachs, with rabeprazole serving only as a co-administered agent, and does not report PK parameters for dexrabeprazole. |
| popPK | Cheung_2021 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of GDC-3280, with rabeprazole (not dexrabeprazole) serving only as a co-administered proton pump inhibitor. |
| popPK | Chiba_2014 | irrelevant | 0 | 0 | The study focuses on CYP2C19 substrates (omeprazole, lansoprazole, rabeprazole) and does not report pharmacokinetic parameters for dexrabeprazole. |
| PD | Chitlange_2010 | not_relevant | 0 | 0 | The paper describes a stability-indicating TLC method for quantifying drug concentrations in formulations and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Chiu_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lopinavir/ritonavir, with rabeprazole (not dexrabeprazole) listed only as a co-administered agent. |
| popPK | Desai_2002 | irrelevant | 0 | 0 | no_text gate: only 11 chars of text extracted (&lt; 400) |
| popPK | Gao_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of osimertinib, with rabeprazole serving only as a co-administered inhibitor/comparator, and no PK parameters for dexrabeprazole are reported. |
| popPK | Guo_2024 | relevant | 8 | 0 | The paper describes a toxicokinetic study of (R)-rabeprazole (dexrabeprazole) in rats, but the specific numeric PK parameter values are not present in the provided evidence text. |
| popPK | Hoch_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of asciminib, with rabeprazole serving only as a co-administered acid-reducing agent (comparator) rather than the subject drug. |
| popPK | Hossain_2021 | irrelevant | 0 | 0 | The study is an in-vitro fluorescence spectroscopy and molecular docking analysis of rabeprazole sodium (not dexrabeprazole) binding to BSA, reporting no in-vivo pharmacokinetic parameters. |
| popPK | Itagaki_2004 | irrelevant | 0 | 0 | The study focuses on tacrolimus pharmacokinetics with rabeprazole (not dexrabeprazole) as a co-administered agent, and does not report PK parameters for dexrabeprazole. |
| popPK | Jeong_2023 | irrelevant | 0 | 0 | The study focuses on rabeprazole, not dexrabeprazole, and does not report quantitative PK parameters for the target drug. |
| popPK | Keane_1999 | irrelevant | 0 | 0 | The study investigates rabeprazole, not dexrabeprazole, and does not report quantitative PK parameters for the target drug. |
| popPK | Kekilli_2014 | irrelevant | 0 | 0 | no_text gate: only 28 chars of text extracted (&lt; 400) |
| popPK | Khan_2024 | irrelevant | 0 | 0 | The study focuses on rabeprazole (not dexrabeprazole) and only reports summary plasma concentration metrics (Cmax) rather than quantitative disposition parameters like clearance or volume. |
| popPK | Kim_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metformin, with rabeprazole acting only as a co-administered agent, and does not report PK parameters for dexrabeprazole. |
| popPK | Kimura_2010 | irrelevant | 0 | 0 | The study focuses on the diagnostic utility of barium swallow for laryngopharyngeal reflux disease and the clinical efficacy of rabeprazole, containing no pharmacokinetic parameters for dexrabeprazole. |
| popPK | Kirchheiner_2009 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis of gastric pH effects for PPIs (including rabeprazole, not dexrabeprazole) and does not report pharmacokinetic parameters like clearance or volume. |
| popPK | Kochar_2010 | irrelevant | 0 | 0 | The study is a clinical trial for malaria treatment using rabeprazole (not dexrabeprazole) as an adjunct, and it reports clinical outcomes rather than pharmacokinetic parameters. |
| popPK | Kosugi_2015 | irrelevant | 0 | 0 | The study focuses on acid tolerance models using rabeprazole as a gastric acid inhibitor, not on the pharmacokinetic parameters of dexrabeprazole. |
| popPK | Lee_2021 | irrelevant | 0 | 0 | The study investigates rabeprazole sodium, not dexrabeprazole, and does not report PK parameters for the target drug. |
| popPK | Li_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP450 inhibition and does not report pharmacokinetic disposition parameters for dexrabeprazole. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rifasutenizol, with rabeprazole (not dexrabeprazole) serving only as a co-administered comparator agent without specific PK parameter reporting for the target drug. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper is a bioanalytical method development study for multiple PPIs and P-CABs, and does not report pharmacokinetic parameters for dexrabeprazole. |
| popPK | Liu_2016 | irrelevant | 0 | 0 | The study investigates the effect of rabeprazole on metformin pharmacokinetics, not the pharmacokinetics of dexrabeprazole. |
| PD | Mario_2003 | not_relevant | 2 | 1 | The paper reports a clinical dose-comparison (10mg vs 20mg) with binary efficacy outcomes (eradication rates) but provides no PK data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | McLeay_2014 | irrelevant | 0 | 0 | The study focuses on rabeprazole, not dexrabeprazole, which is the required subject drug. |
| popPK | Miura_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of rabeprazole metabolism, not a pharmacokinetic study of dexrabeprazole disposition parameters. |
| popPK | Musib_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cobimetinib, with rabeprazole serving only as a co-administered proton pump inhibitor to test for drug interactions, and no PK parameters for dexrabeprazole are reported. |
| popPK | Nakada_2019 | irrelevant | 0 | 0 | The study focuses on renal transporter inhibition and creatinine clearance estimation, with rabeprazole (not dexrabeprazole) serving only as a test compound for the method, and no PK parameters for dexrabeprazole are reported. |
| popPK | Ochoa_2020 | irrelevant | 2 | 1 | The study focuses on rabeprazole (not dexrabeprazole) and reports only non-compartmental parameters (Tmax, AUC, Cmax) without specific clearance or volume values for the target drug. |
| popPK | Pace_2007 | irrelevant | 0 | 0 | The paper is a review of rabeprazole (the S-enantiomer of the target drug dexrabeprazole) and does not report specific pharmacokinetic parameters for dexrabeprazole. |
| PD | Pai_2007 | not_relevant | 1 | 0 | The text is a general review of chirally pure PPIs and mentions dexrabeprazole qualitatively but provides no numeric PD parameters, exposure-response data, or dose-effect curves. |
| popPK | Park_1996 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding dexrabeprazole pharmacokinetics. |
| popPK | Patel_2019 | irrelevant | 0 | 0 | The study evaluates rabeprazole (not dexrabeprazole) in dogs, and the subject drug is not the focus of the pharmacokinetic analysis. |
| popPK | Patil_2022 | irrelevant | 0 | 0 | The study is an in-silico and in-vitro mechanistic investigation of drug-drug interactions involving rabeprazole (not dexrabeprazole) and does not report pharmacokinetic disposition parameters. |
| popPK | Pisanu_2021 | irrelevant | 0 | 0 | The study is an epidemiological analysis of migraine prevalence and PPI use, not a pharmacokinetic study, and does not report any PK parameters for dexrabeprazole. |
| popPK | Piscitelli_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of encorafenib, with rabeprazole serving only as a co-administered proton-pump inhibitor, and no PK parameters for dexrabeprazole are reported. |
| popPK | Prakash_1998 | irrelevant | 0 | 0 | The paper discusses rabeprazole (not dexrabeprazole) and contains no quantitative pharmacokinetic parameters. |
| popPK | Qi_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of voriconazole and its interaction with PPIs, with rabeprazole (not dexrabeprazole) serving as a comparator agent. |
| popPK | Román_2014 | irrelevant | 0 | 0 | The study investigates omeprazole, pantoprazole, and rabeprazole, but does not report pharmacokinetic parameters for dexrabeprazole. |
| popPK | Sablin_2018 | irrelevant | 0 | 0 | The paper is a clinical review of GERD pathophysiology and treatment with rabeprazole, containing no pharmacokinetic data or parameters for dexrabeprazole. |
| popPK | Setoyama_2005 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for rabeprazole, not dexrabeprazole. |
| popPK | Shimizu_2006 | irrelevant | 0 | 0 | The study investigates rabeprazole, not dexrabeprazole, and does not report PK parameters for the target drug. |
| popPK | Shin_2013 | irrelevant | 0 | 0 | The paper is a review of PPI pharmacokinetics and pharmacodynamics that does not report quantitative disposition parameters (CL, V, etc.) for dexrabeprazole. |
| PD | Takeuchi_2020 | not_relevant | 2 | 1 | The study reports comparative mean pharmacodynamic endpoints (pH holding time ratios) for different doses but does not provide a concentration-effect model, dose-response curve, or specific PD parameters like Emax or EC50. |
| popPK | Toda_2018 | irrelevant | 0 | 0 | The study focuses on azeloprazole sodium with rabeprazole (not dexrabeprazole) as a comparator, and no quantitative PK parameters for dexrabeprazole are reported. |
| popPK | Tsuchiya_1995 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no pharmacokinetic data or text regarding dexrabeprazole. |
| popPK | Ueda_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methotrexate in rats, with dexrabeprazole (or rabeprazole) serving only as a comparator agent for OAT3 inhibition, and no PK parameters for dexrabeprazole are reported. |
| popPK | Uno_2006 | irrelevant | 0 | 0 | The study investigates rabeprazole, not dexrabeprazole, and does not report PK parameters for the target drug. |
| popPK | Wedemeyer_2014 | irrelevant | 0 | 0 | The paper is a review of drug interactions for proton pump inhibitors and does not report original quantitative pharmacokinetic parameters (CL, V, etc.) for dexrabeprazole. |
| popPK | Wölke_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of zongertinib, with rabeprazole (not dexrabeprazole) used only as a gastric pH modifier. |
| popPK | Xie_2024 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on rabeprazole (not dexrabeprazole) focusing on ferroptosis and gene expression, with no pharmacokinetic parameters reported. |
| popPK | Zannikos_2011 | irrelevant | 0 | 0 | The study investigates rabeprazole, not dexrabeprazole, and does not report quantitative PK parameters for the target drug. |
| PD | Zhou_2008 | not_relevant | 1 | 0 | The text is a qualitative discussion and literature review regarding racemic switches in PPIs, containing no numeric PD parameters, concentration-effect curves, or specific PK/PD modeling results for dexrabeprazole. |
| popPK | Zubiaur_2023 | irrelevant | 2 | 1 | The study analyzes rabeprazole (not dexrabeprazole) and reports only normalized AUC (nAUC) values without deriving compartmental PK parameters like clearance, volume, or half-life. |
| popPK | unknown_1999 | irrelevant | 0 | 0 | no_text gate: only 18 chars of text extracted (&lt; 400) |
| popPK | unknown_1999_2 | irrelevant | 0 | 0 | no_text gate: only 11 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dexrabeprazole`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
