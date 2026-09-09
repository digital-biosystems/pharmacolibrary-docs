# acetyldigoxin

- **generic name:** acetyldigoxin
- **ATC codes:** `C01AA02`
- **DrugBank:** [DB13691](https://go.drugbank.com/drugs/DB13691)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 03:56 | 13:16 | 0/0/0 | 0/0/0 | 0/0/0 | 117,076/3,722 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 0/12 | 12/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 311658 matched, 66 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Belz_1975.pdf` | Belz GG et al., Half-life plasma following repetitive a…, Klinische Wochenschrift (1975) | popPK | 8 | [10.1007/BF01468761](https://doi.org/10.1007/BF01468761) | [1152346](https://pubmed.ncbi.nlm.nih.gov/1152346) | The study reports quantitative pharmacokinetic parameters (mean half-life of 55.8 hours and elimination rate) for acetyldigoxin in humans, with values explicitly present in the text. |
| `Potter_2009.pdf` | Potter T et al., Inhibition of the alpha1beta1 isoform o…, Journal of cardiovascular p… (2009) | pd | 4 | [10.1097/FJC.0b013e3181a95ab2](https://doi.org/10.1097/FJC.0b013e3181a95ab2) | [19487957](https://www.ncbi.nlm.nih.gov/pubmed/19487957) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-09T03:56:34.539956+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aarons_1989 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tobramycin, not acetyldigoxin. |
| popPK | Balant_1990 | irrelevant | 0 | 0 | The paper is a general review of physiological pharmacokinetic modeling methods and does not report specific quantitative parameters for acetyldigoxin. |
| popPK | Bischoff_1977 | irrelevant | 2 | 0 | The study reports hemoperfusion clearance values for a group of digitalis derivatives including beta-acetyl-digoxin, but does not provide specific quantitative disposition parameters (CL, V, ka, etc.) for acetyldigoxin alone. |
| popPK | Bodem_1978 | irrelevant | 0 | 0 | The study investigates fluoro-alpha-acetyldigoxin, a different compound, rather than acetyldigoxin. |
| popPK | Calderin_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for pyrazinamide and isoniazid, not acetyldigoxin. |
| popPK | Cerasa_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of theophylline, not acetyldigoxin. |
| popPK | Cheng_2021 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for CC-122, not acetyldigoxin. |
| popPK | Chu_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vancomycin, not acetyldigoxin. |
| popPK | Dreyer_1992 | irrelevant | 2 | 0 | The study reports bioavailability of acetyldigoxin formulations but does not provide quantitative disposition parameters (CL, V, ka, t1/2) for acetyldigoxin itself, focusing instead on digoxin steady-state levels. |
| popPK | Dufour_2018 | irrelevant | 0 | 0 | The paper focuses on bacteriophage pharmacokinetics and does not involve acetyldigoxin. |
| popPK | Ette_1997 | irrelevant | 0 | 0 | The study analyzes an "antiinfective agent" in infants, not acetyldigoxin. |
| popPK | Flasch_1975 | irrelevant | 2 | 0 | The study reports bioavailability (F) and absorption comparisons but does not provide quantitative disposition parameters such as clearance, volume of distribution, or half-life for acetyldigoxin. |
| popPK | Flasch_1977 | irrelevant | 2 | 0 | The study focuses on the metabolic fate and gastric emptying half-life of acetyldigoxin rather than reporting systemic population pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Francke_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tacrolimus, not acetyldigoxin. |
| popPK | Genissel_1989 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for rilmenidine, not acetyldigoxin. |
| popPK | Glassman_2024 | irrelevant | 0 | 0 | The paper focuses on peptide and protein therapeutics and does not study acetyldigoxin. |
| popPK | Greeff_1977 | irrelevant | 2 | 0 | The paper compares bioavailability and renal excretion of digoxin and analogs, but the provided evidence contains no quantitative PK parameters (CL, V, ka) for acetyldigoxin. |
| popPK | Grevel_1989 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for bisoprolol, not acetyldigoxin. |
| PD | Haasis_1980 | not_relevant | 2 | 1 | The text provides qualitative dosing recommendations and a single threshold for toxicity (2.3 ng/ml) but does not report a quantitative exposure-response model or derivable PD parameters (e.g., Emax, EC50) for acetyldigoxin. |
| popPK | Hodiamont_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of gentamicin, not acetyldigoxin. |
| popPK | Isla_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for fosfomycin, not acetyldigoxin. |
| popPK | Jermain_1991 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for lithium, not acetyldigoxin. |
| popPK | Jiang_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for voriconazole, not acetyldigoxin. |
| popPK | Keller_1977 | irrelevant | 2 | 2 | The paper is a review discussing general bioavailability pitfalls and provides only a generic absorption rate constant for digoxin derivatives without specific population PK parameters (CL, V, Q) for acetyldigoxin. |
| popPK | Klotz_1976 | irrelevant | 2 | 0 | The study reports bioavailability percentages but does not provide quantitative disposition parameters such as clearance, volume of distribution, or half-life for acetyldigoxin. |
| popPK | Klotz_1978 | irrelevant | 2 | 0 | The study reports bioavailability percentages but does not provide quantitative disposition parameters such as clearance, volume of distribution, or half-life for acetyldigoxin. |
| popPK | Koubek_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for Z-endoxifen, not acetyldigoxin. |
| PD | Kuhlmann_1982 | not_relevant | 1 | 0 | The paper investigates the effect of cytostatic drugs on the absorption (PK) of acetyldigoxin, not the pharmacodynamic effect of acetyldigoxin itself, and provides no numeric PD parameters. |
| PD | Kuhlmann_1984 | not_relevant | 2 | 1 | The study reports mean plasma concentrations and qualitative changes in cardiac parameters (QT, T-wave, systolic time intervals) but does not provide a concentration-effect model, dose-response curve, or numeric PD parameters (e.g., Emax, EC50) for acetyldigoxin. |
| popPK | Kuhlmann_1984_2 | irrelevant | 2 | 1 | The paper reports only elimination half-lives for acetyldigoxin in a small case series without providing clearance, volume of distribution, or a compartmental model. |
| PD | Kuhlmann_1985 | not_relevant | 3 | 1 | The study reports qualitative changes in cardiac parameters (PQ, T-waves) associated with increased plasma concentrations, but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect model. |
| popPK | Kuhlmann_1985_2 | irrelevant | 2 | 1 | The study focuses on digoxin (not acetyldigoxin) and reports only relative changes in clearance and plasma concentrations rather than absolute quantitative PK parameters for the subject drug. |
| popPK | Mashayekhi-Sardoo_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ranolazine, not acetyldigoxin. |
| popPK | Morath_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for apixaban, not acetyldigoxin. |
| popPK | Morse_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for oxycodone, not acetyldigoxin. |
| popPK | Nikolic_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tamsulosin, not acetyldigoxin. |
| popPK | Ochs_1981 | irrelevant | 0 | 0 | The study focuses on the clinical correlation of serum digoxin concentrations with toxicity and ECG changes, not on the pharmacokinetic disposition parameters (CL, V, etc.) of acetyldigoxin. |
| popPK | Okamoto_2021 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for vedolizumab, not acetyldigoxin. |
| popPK | Parker_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of meropenem, not acetyldigoxin. |
| PD | Potter_2009 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of 8-methoxycoumestrol on Na,K-ATPase and does not report pharmacodynamic or exposure-response data for acetyldigoxin. |
| popPK | Rameis_1981 | irrelevant | 2 | 0 | The study discusses pharmacokinetic changes qualitatively (half-life, volume, clearance) but provides no quantitative parameter values for acetyldigoxin in the evidence. |
| PD | Rameis_1981 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (half-life, clearance, distribution volume) and serum concentration levels, with no analysis of pharmacodynamic effects or exposure-response relationships. |
| popPK | Rameis_1984 | irrelevant | 2 | 0 | The study focuses on metildigoxin pharmacokinetics, with beta-acetyldigoxin serving only as a comparator for which no quantitative PK parameters are reported. |
| PD | Rameis_1984 | not_relevant | 0 | 0 | The paper reports pharmacokinetic changes (clearance, volume, serum concentrations) in cirrhosis but does not provide any pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Rameis_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin (and phenytoin), not acetyldigoxin, which is only mentioned as an assumption regarding absorption. |
| popPK | Rančić_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for meropenem, not acetyldigoxin. |
| popPK | Rasetti_1977 | irrelevant | 0 | 0 | The evidence contains only the title of the paper with no quantitative pharmacokinetic parameters or data provided. |
| popPK | Rietbrock_1977 | irrelevant | 2 | 0 | The paper discusses bioavailability and isomerization qualitatively but does not report quantitative PK parameters (CL, V, ka) for acetyldigoxin. |
| popPK | Schaumlöffel_1976 | irrelevant | 2 | 0 | The study focuses on the bioavailability of dilazep with acetyldigoxin as a co-administered component, and no quantitative PK parameters (CL, V, ka) for acetyldigoxin are reported in the evidence. |
| PD | Schneider_1977 | not_relevant | 2 | 1 | The paper reports optimal therapeutic serum concentration ranges and weight-based dosing recommendations, but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) or an effect-vs-concentration curve. |
| popPK | Shaik_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for gliclazide, not acetyldigoxin. |
| popPK | Sharma_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for 17α-hydroxyprogesterone caproate, not acetyldigoxin. |
| popPK | Shi_2020 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for methotrexate, not acetyldigoxin. |
| popPK | Suzuki_2020 | irrelevant | 0 | 0 | The paper focuses on a hemodialysis clearance prediction model for nine unspecified compounds and does not report pharmacokinetic parameters for acetyldigoxin. |
| popPK | Türck_1996 | irrelevant | 0 | 0 | The paper is a review of meloxicam pharmacokinetics, and acetyldigoxin is only mentioned as a co-administered drug in an interaction study without any PK parameters reported for it. |
| PD | Türck_1996 | not_relevant | 0 | 0 | The paper is a review of meloxicam pharmacokinetics and only mentions acetyldigoxin in the context of drug interactions, providing no pharmacodynamic or exposure-response data for acetyldigoxin. |
| popPK | Varela-González-Aller_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for fludarabine, not acetyldigoxin. |
| popPK | Weiss_2024 | irrelevant | 2 | 0 | The paper is a review calculating distribution clearance (CLD) for 15 drugs, and while it lists a CLD value for digoxin (not acetyldigoxin), it does not report standard PK parameters (CL, V, ka) for acetyldigoxin. |
| popPK | Wertz_1990 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for etomidate in cats, not acetyldigoxin. |
| popPK | Wilson_1988 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for doxycycline, not acetyldigoxin. |
| popPK | Winkler_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lacosamide, not acetyldigoxin. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for lacosamide, not acetyldigoxin. |
| popPK | Yonwises_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for meropenem, not acetyldigoxin. |
| popPK | Zuo_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for apatinib, not acetyldigoxin. |
| popPK | de_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of hydroxocobalamin in dogs, not acetyldigoxin. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_acetyldigoxin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
