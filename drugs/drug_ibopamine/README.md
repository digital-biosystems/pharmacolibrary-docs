# ibopamine

- **generic name:** ibopamine
- **ATC codes:** `C01CA16`, `S01FB03`
- **DrugBank:** [DB13316](https://go.drugbank.com/drugs/DB13316)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 19:59 | 8:16 | 0/0/0 | 0/0/0 | 0/0/0 | 38,942/3,357 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 45 matched, 47 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `de_1988.pdf` | de Mey C et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (1988) | popPK | 10 | [10.1007/BF00542446](https://doi.org/10.1007/BF00542446) | [3402527](https://pubmed.ncbi.nlm.nih.gov/3402527) | The paper is a primary PK study of ibopamine in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Azzollini_1988.pdf` | Azzollini F et al., Ibopamine kinetics after single and mul…, International journal of cl… (1988) | popPK | 9 | not captured | [3243658](https://pubmed.ncbi.nlm.nih.gov/3243658) | The paper is a relevant PK study of ibopamine in humans, but the provided evidence contains only qualitative descriptions of parameters (e.g., t1/2, AUC) without any specific numeric values. |
| `Salvadeo_1988.pdf` | Salvadeo A et al., Pharmacokinetics of ibopamine in patien…, International journal of cl… (1988) | popPK | 9 | not captured | [3410592](https://pubmed.ncbi.nlm.nih.gov/3410592) | The paper is a relevant PK study for ibopamine, but the evidence text only describes trends and statistical significance without providing the specific numeric parameter values (CL, V, t1/2, etc.). |
| `Itoh_1992.pdf` | Itoh H et al., Hemodynamic effects and pharmacokinetic…, Cardiology (1992) | popPK | 8 | [10.1159/000175026](https://doi.org/10.1159/000175026) | [1451123](https://pubmed.ncbi.nlm.nih.gov/1451123) | The study is a pharmacokinetic investigation of ibopamine in humans, but the provided evidence contains only qualitative descriptions of the results without any specific numeric parameter values. |
| `Lodola_1986.pdf` | Lodola E et al., Ibopamine kinetics after a single oral…, Arzneimittel-Forschung (1986) | popPK | 8 | not captured | [3707647](https://pubmed.ncbi.nlm.nih.gov/3707647) | The study reports PK parameters for ibopamine (absorption half-life, Cmax, Tmax) but lacks explicit clearance (CL) or volume (V) values, which are typically required for population PK extraction. |
| `Siepmann_1995.pdf` | Siepmann M et al., Ibopamine in Patients with Congestive H…, American journal of therape… (1995) | popPK | 8 | [10.1097/00045391-199506000-00005](https://doi.org/10.1097/00045391-199506000-00005) | [11850693](https://pubmed.ncbi.nlm.nih.gov/11850693) | The study investigates the pharmacokinetics of ibopamine in humans, but the specific numeric parameter values are not present in the provided text, which only states that parameters were unaltered. |
| `de_1989.pdf` | de Mey C et al., Pharmacokinetic and pharmacodynamic int…, Arzneimittel-Forschung (1989) | popPK | 8 | not captured | [2590265](https://pubmed.ncbi.nlm.nih.gov/2590265) | The study is a relevant PK/PD interaction study for ibopamine, but the evidence text only describes qualitative changes (reduction in Cmax/AUC) without providing specific numeric parameter values. |
| `Bellotti_1996.pdf` | Bellotti G et al., [Acute effects of ibopamine on left ven…, Arquivos brasileiros de car… (1996) | pd | 4 | not captured | [9110439](https://www.ncbi.nlm.nih.gov/pubmed/9110439) | metadata signals extractable PD data (Emax) |
| `Buikema_1993.pdf` | Buikema H et al., Endothelium dependent relaxation in two…, Cardiovascular research (1993) | pd | 4 | [10.1093/cvr/27.12.2118](https://doi.org/10.1093/cvr/27.12.2118) | [8313417](https://www.ncbi.nlm.nih.gov/pubmed/8313417) | metadata signals extractable PD data (Emax) |
| `Buikema_1997.pdf` | Buikema H et al., Early pharmacologic intervention may pr…, Journal of cardiac failure (1997) | pd | 4 | [10.1016/s1071-9164(97)90046-4](https://doi.org/10.1016/s1071-9164(97)90046-4) | [9220312](https://www.ncbi.nlm.nih.gov/pubmed/9220312) | metadata signals extractable PD data (Emax) |
| `Huang_1996.pdf` | Huang J et al., [Comparison between kinetics of positiv…, Zhongguo yao li xue bao = A… (1996) | pd | 4 | not captured | [8737459](https://www.ncbi.nlm.nih.gov/pubmed/8737459) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-09-09T19:58:33.574014+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Azzollini_1988 | relevant | 9 | 0 | The paper is a relevant PK study of ibopamine in humans, but the provided evidence contains only qualitative descriptions of parameters (e.g., t1/2, AUC) without any specific numeric values. |
| popPK | Bellotti_1996 | irrelevant | 0 | 0 | The paper title indicates a study on hemodynamic effects (left ventricular mechanics) rather than pharmacokinetic disposition parameters. |
| PD | Bellotti_1996 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess an exposure-response relationship. |
| popPK | Borchard_1991 | irrelevant | 2 | 1 | The paper is a pharmacologic review describing mechanism of action and receptor affinity, lacking a compartmental PK model or quantitative disposition parameters (CL, V, Q) for ibopamine. |
| popPK | Buikema_1993 | irrelevant | 0 | 0 | The paper title indicates a study on endothelium-dependent relaxation (pharmacodynamics/mechanism) rather than pharmacokinetics, and no PK parameters are present in the evidence. |
| popPK | Buikema_1997 | irrelevant | 0 | 0 | The paper title indicates a pharmacologic study on endothelial function in rats, not a pharmacokinetic study reporting quantitative disposition parameters for ibopamine. |
| PD | Buikema_1997 | not_relevant | 0 | 0 | The paper reports qualitative changes in endothelial function (e.g., vasodilation) following treatment, but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50) for ibopamine. |
| popPK | Douchamps_1988 | irrelevant | 2 | 0 | The study is a bioequivalence trial reporting relative bioavailability metrics (AUC, Cmax) rather than absolute pharmacokinetic disposition parameters (CL, V, ka) for ibopamine, and no numeric values are provided in the evidence. |
| popPK | Ferrini_1987 | irrelevant | 1 | 0 | The paper focuses on the pharmacological activity of ibopamine metabolites rather than reporting quantitative pharmacokinetic parameters for ibopamine itself. |
| PD | Ferrini_1987 | not_relevant | 1 | 0 | The paper discusses the lack of pharmacodynamic activity for ibopamine metabolites but does not provide numeric PD parameters or exposure-response curves for ibopamine itself. |
| popPK | Francis_1995 | irrelevant | 0 | 0 | The paper is a review of receptor systems and clinical potential in heart failure, containing no quantitative pharmacokinetic parameters for ibopamine. |
| popPK | Henwood_1988 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties but the provided evidence contains no quantitative PK parameter values (CL, V, etc.) for ibopamine. |
| PD | Henwood_1988 | not_relevant | 2 | 0 | The text is a qualitative review summary describing general pharmacodynamic properties and clinical efficacy without providing specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling results. |
| popPK | Huang_1996 | irrelevant | 0 | 0 | The evidence provided is only a title comparing inotropic kinetics, with no quantitative pharmacokinetic parameters or data for ibopamine. |
| PD | Huang_1996 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Itoh_1992 | relevant | 8 | 0 | The study is a pharmacokinetic investigation of ibopamine in humans, but the provided evidence contains only qualitative descriptions of the results without any specific numeric parameter values. |
| popPK | Kasmer_1990 | irrelevant | 0 | 0 | The study focuses on renal function and diuretic effects of ibopamine, not pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Kawahara_1985 | irrelevant | 0 | 0 | The study is a mechanistic pharmacodynamic analysis of inotropic effects in isolated tissue, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Kopia_1988 | irrelevant | 0 | 0 | The study is a hemodynamic/pharmacodynamic assessment in dogs and does not report pharmacokinetic parameters such as clearance, volume, or half-life for ibopamine. |
| popPK | Lodola_1986 | relevant | 8 | 4 | The study reports PK parameters for ibopamine (absorption half-life, Cmax, Tmax) but lacks explicit clearance (CL) or volume (V) values, which are typically required for population PK extraction. |
| popPK | Marchini_2003 | irrelevant | 0 | 0 | The study is a clinical ophthalmology trial assessing ocular effects (IOP, pupil size) of topical ibopamine, not a pharmacokinetic study reporting disposition parameters. |
| PD | Marchini_2003 | not_relevant | 3 | 2 | The study reports single-dose effects and a qualitative mention of a dose-response evaluation, but the provided text does not contain the specific numeric data points, curve fits, or PD parameters (Emax, EC50) required to derive an exposure-response relationship. |
| popPK | McLaren_2003 | irrelevant | 0 | 0 | The study measures aqueous humor flow and intraocular pressure (pharmacodynamics) rather than systemic pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Melloni_1981 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for ascitic liver cirrhosis and does not report pharmacokinetic parameters for ibopamine. |
| popPK | Munger_1993 | irrelevant | 0 | 0 | The study is a pharmacodynamic/hemodynamic assessment of ibopamine co-administration, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Munger_1993 | not_relevant | 2 | 1 | The study reports qualitative hemodynamic changes (percent changes in cardiac index and SVR) at a single time point (30 minutes) for a fixed dose, but does not provide plasma concentration data or fit a concentration-effect model to derive numeric PD parameters like Emax or EC50. |
| popPK | Nichols_1987 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of renal vascular effects in dogs, not a pharmacokinetic study reporting disposition parameters for ibopamine. |
| popPK | Salvadeo_1988 | relevant | 9 | 2 | The paper is a relevant PK study for ibopamine, but the evidence text only describes trends and statistical significance without providing the specific numeric parameter values (CL, V, t1/2, etc.). |
| popPK | Schwinger_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of epinine (a metabolite) on isolated arteries, not a pharmacokinetic study of ibopamine. |
| popPK | Siepmann_1995 | relevant | 8 | 0 | The study investigates the pharmacokinetics of ibopamine in humans, but the specific numeric parameter values are not present in the provided text, which only states that parameters were unaltered. |
| popPK | Soldati_1993 | irrelevant | 2 | 0 | The study focuses on ocular pharmacodynamics and local metabolism (hydrolysis to epinine) in rabbits, without reporting systemic quantitative disposition parameters (CL, V, Q) for ibopamine. |
| popPK | Spencer_1993 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties but the provided evidence contains no quantitative PK parameter values (CL, V, t1/2, etc.) for ibopamine. |
| PD | Spencer_1993 | not_relevant | 2 | 0 | The text is a qualitative review summary that describes general pharmacodynamic properties and clinical efficacy but does not provide specific numeric PD parameters (e.g., Emax, EC50) or concentration-effect data. |
| popPK | Stefoni_1981 | irrelevant | 0 | 0 | The paper reports pharmacodynamic effects (diuresis, renal blood flow) rather than quantitative pharmacokinetic parameters (CL, V, t1/2) for ibopamine. |
| popPK | Stefoni_1982 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting changes in creatinine clearance, not a pharmacokinetic study reporting disposition parameters (CL, V, ka, etc.) for ibopamine. |
| popPK | Stefoni_1996 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for renal failure progression and does not report any pharmacokinetic parameters for ibopamine. |
| popPK | Taylor_1990 | irrelevant | 0 | 0 | The paper is a review of the efficacy and pharmacodynamics of ibopamine in heart failure and does not report quantitative pharmacokinetic parameters such as clearance or volume of distribution. |
| PD | Taylor_1990 | not_relevant | 1 | 0 | The text is a qualitative review/abstract describing the mechanism and clinical benefits of ibopamine without providing any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Teisman_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor properties on human artery rings, not a pharmacokinetic study, and ibopamine is only mentioned as a comparator. |
| popPK | Wehling_1990 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (blood pressure, diuresis, renal function) rather than pharmacokinetic disposition parameters (CL, V, ka, etc.) for ibopamine. |
| popPK | Wehling_1990_2 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (blood pressure, diuresis, renal function) rather than quantitative pharmacokinetic parameters (CL, V, ka) for ibopamine. |
| popPK | de_1988 | relevant | 10 | 0 | The paper is a primary PK study of ibopamine in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | de_1989 | relevant | 8 | 2 | The study is a relevant PK/PD interaction study for ibopamine, but the evidence text only describes qualitative changes (reduction in Cmax/AUC) without providing specific numeric parameter values. |
| PD | de_1989 | not_relevant | 3 | 1 | The paper describes qualitative PD effects (cardiac performance) and PK changes but does not report numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model. |
| popPK | unknown_1994 | irrelevant | 0 | 0 | The provided evidence contains no mention of ibopamine or its pharmacokinetic parameters. |
| PD | unknown_1994 | not_relevant | 0 | 0 | The provided text is only a title and file description for a conference abstract collection, containing no specific data, models, or numeric parameters for ibopamine. |
| popPK | van_1992 | irrelevant | 0 | 0 | The paper is a review of dopaminergic agents' hemodynamic effects and does not report any pharmacokinetic parameters for ibopamine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_ibopamine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
