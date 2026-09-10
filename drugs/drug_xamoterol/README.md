# xamoterol

- **generic name:** xamoterol
- **ATC codes:** `C01CX07`
- **DrugBank:** [DB13781](https://go.drugbank.com/drugs/DB13781)
- **groups:** approved

## About

**Description.** Xamoterol is a β1-adrenoceptor partial agonist that has shown to improve systolic and diastolic function in studies with heart failure patients. It modulates the sympathetic control of the heart but has no agonist action on β2-adrenoceptors.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 21:52 | 13:02 | 0/0/0 | 0/0/0 | 0/0/0 | 54,290/6,008 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 71 matched, 75 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bastain_1988.pdf` | Bastain W et al., Pharmacokinetics of xamoterol after int…, European journal of clinica… (1988) | popPK | 10 | [10.1007/BF01046704](https://doi.org/10.1007/BF01046704) | [2904884](https://pubmed.ncbi.nlm.nih.gov/2904884) | The text explicitly reports quantitative PK parameters for xamoterol including clearance (224 ml/min), volume of distribution (48 l), and half-life (7.7 h IV, 16 h oral). |
| `Sorensen_1988.pdf` | Sorensen EV et al., Pharmacokinetics of xamoterol after int…, European journal of clinica… (1988) | popPK | 10 | [10.1007/BF00609250](https://doi.org/10.1007/BF00609250) | [2903827](https://pubmed.ncbi.nlm.nih.gov/2903827) | The paper reports quantitative pharmacokinetic parameters (CL, Vss, t1/2, bioavailability) for xamoterol in heart failure patients, with all numeric values explicitly present in the text. |
| `Nicholls_1989.pdf` | Nicholls DP et al., The pharmacokinetics of xamoterol in li…, British journal of clinical… (1989) | popPK | 9 | [10.1111/j.1365-2125.1989.tb03566.x](https://doi.org/10.1111/j.1365-2125.1989.tb03566.x) | [2532923](https://pubmed.ncbi.nlm.nih.gov/2532923) | The study reports quantitative PK parameters for xamoterol, including bioavailability, half-life, and renal clearance percentages, directly in the text. |
| `Scott_1988.pdf` | Scott AK et al., The effect of age and cardiac failure o…, British journal of clinical… (1988) | popPK | 9 | [10.1111/j.1365-2125.1988.tb03287.x](https://doi.org/10.1111/j.1365-2125.1988.tb03287.x) | [2896012](https://pubmed.ncbi.nlm.nih.gov/2896012) | The study reports quantitative pharmacokinetic parameters (half-life, renal clearance, Tmax) for xamoterol in human subjects, with specific numeric values provided in the text. |
| `Bellantuono_2008.pdf` | Bellantuono V et al., The adrenergic receptor subtypes presen…, Comparative biochemistry an… (2008) | pd | 5 | [10.1016/j.cbpc.2008.05.001](https://doi.org/10.1016/j.cbpc.2008.05.001) | [18544474](https://www.ncbi.nlm.nih.gov/pubmed/18544474) | metadata signals extractable PD data (EC50) |
| `Molajo_1987.pdf` | Molajo AO et al., The effects and dose-response relations…, British journal of clinical… (1987) | pd | 5 | [10.1111/j.1365-2125.1987.tb03183.x](https://doi.org/10.1111/j.1365-2125.1987.tb03183.x) | [2889460](https://www.ncbi.nlm.nih.gov/pubmed/2889460) | metadata signals extractable PD data (EC50) |
| `Abrahamsson_1989.pdf` | Abrahamsson T, Characterization of the beta 1-adrenoce…, European journal of pharmac… (1989) | pd | 4 | [10.1016/0014-2999(89)90238-0](https://doi.org/10.1016/0014-2999(89)90238-0) | [2568935](https://www.ncbi.nlm.nih.gov/pubmed/2568935) | metadata signals extractable PD data (EC50) |
| `Deighton_1992.pdf` | Deighton NM et al., Characterization of the beta adrenocept…, The Journal of pharmacology… (1992) | pd | 4 | not captured | [1354251](https://www.ncbi.nlm.nih.gov/pubmed/1354251) | metadata signals extractable PD data (Emax) |
| `Skeberdis_1997.pdf` | Skeberdis VA et al., Pharmacological characterization of the…, British journal of pharmaco… (1997) | pd | 4 | [10.1038/sj.bjp.0701268](https://doi.org/10.1038/sj.bjp.0701268) | [9257904](https://www.ncbi.nlm.nih.gov/pubmed/9257904) | metadata signals extractable PD data (EC50) |
| `Vigholt-Sørensen_1991.pdf` | Vigholt-Sørensen E et al., Comparative effects of beta-adrenocepto…, Pharmacology & toxicology (1991) | pd | 4 | [10.1111/j.1600-0773.1991.tb01309.x](https://doi.org/10.1111/j.1600-0773.1991.tb01309.x) | [1687080](https://www.ncbi.nlm.nih.gov/pubmed/1687080) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-09T21:51:10.474523+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abrahamsson_1989 | irrelevant | 0 | 0 | The paper focuses on receptor pharmacology (beta 1-adrenoceptor effects) rather than pharmacokinetic disposition parameters. |
| popPK | Baker_2011 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of cardiovascular effects in rats and does not report any pharmacokinetic parameters for xamoterol. |
| popPK | Bellantuono_2008 | irrelevant | 0 | 0 | The paper focuses on adrenergic receptor subtypes in frog skin and does not report pharmacokinetic parameters for xamoterol. |
| PD | Bellantuono_2008 | not_relevant | 0 | 0 | The paper focuses on the identification of adrenergic receptor subtypes in frog skin and does not report any pharmacodynamic or exposure-response data for xamoterol. |
| popPK | Bøtker_1993 | irrelevant | 2 | 0 | The study focuses on renal physiology (sodium excretion, GFR) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for xamoterol. |
| popPK | Deighton_1992 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on beta adrenoceptor subtypes in isolated human atrium, not a pharmacokinetic study reporting disposition parameters for xamoterol. |
| popPK | Fischer_1990 | irrelevant | 0 | 0 | The study focuses on haemodynamic and metabolic effects in dogs and does not report pharmacokinetic disposition parameters such as clearance or volume of distribution. |
| PD | Furlong_1988 | not_relevant | 2 | 0 | The text is a qualitative review summarizing general pharmacodynamic properties and clinical outcomes without providing specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling data. |
| popPK | Hashimoto_1986 | irrelevant | 2 | 0 | The study focuses on cardiovascular pharmacodynamics and only mentions AUC without providing specific numeric values or compartmental PK parameters (CL, V, t1/2). |
| popPK | Hashimoto_1988 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no pharmacokinetic data or text regarding xamoterol. |
| popPK | Hicks_1987 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study comparing receptor potency and selectivity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | James_1990 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic effects (systolic time intervals) and only mentions qualitative plasma concentration trends (peak time, linearity) without reporting quantitative PK parameters like clearance, volume, or half-life. |
| popPK | Kullmer_1988 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (physical performance, cardiocirculatory, metabolic) and does not report any pharmacokinetic parameters for xamoterol. |
| popPK | Marlow_1990 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (inotropic response vs. plasma concentration) and does not report quantitative pharmacokinetic disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Marten_1984 | irrelevant | 2 | 0 | The paper describes qualitative absorption and metabolism (percent absorption, metabolite types) but does not report quantitative compartmental PK parameters (CL, V, ka, t1/2) for xamoterol. |
| popPK | McCormick_1988 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of metabolism in isolated rat hepatocytes and does not report quantitative population pharmacokinetic parameters (CL, V, etc.) for xamoterol. |
| PD | McMurray_1990 | not_relevant | 1 | 0 | The text is a general review of heart failure treatment in the elderly that mentions xamoterol as a therapeutic option but provides no pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Molajo_1987 | irrelevant | 0 | 0 | The paper title indicates a clinical efficacy/dose-response study in ischaemic heart disease, not a pharmacokinetic study, and no PK parameters are present in the evidence. |
| popPK | Mulder_1987 | irrelevant | 2 | 1 | The study focuses on metabolic pathways (glucuronidation) and reports only qualitative half-life comparisons and a liver extraction ratio, lacking quantitative compartmental PK parameters (CL, V, Q) for xamoterol. |
| PD | Ng_1994 | not_relevant | 2 | 1 | The study reports qualitative changes in hemodynamic variables (HR, CO, MBP) for fixed doses but does not provide plasma concentration data or fit a concentration-effect model, making numeric PD parameters like Emax or EC50 unextractable. |
| popPK | Okabayashi_2021 | irrelevant | 0 | 0 | The study is a mechanistic investigation of sIgA secretion in rat submandibular gland cells where xamoterol is used only as a pharmacological tool/comparator, with no pharmacokinetic parameters reported. |
| popPK | Persson_2002 | irrelevant | 0 | 0 | The study is a clinical trial measuring neurohormonal markers (e.g., N-ANF, NPY) and does not report any pharmacokinetic parameters for xamoterol. |
| popPK | Pouleur_1987 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of inotropic response and dose-response curves, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Pouleur_1990 | irrelevant | 0 | 0 | The study evaluates hemodynamic effects (diastolic function) rather than pharmacokinetic parameters, and no PK values are reported. |
| popPK | Rousseau_1984 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting hemodynamic and functional outcomes, not a pharmacokinetic study with disposition parameters. |
| popPK | Rousseau_1985 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting hemodynamic and functional outcomes, not a pharmacokinetic study with disposition parameters. |
| PD | Rousseau_1985 | not_relevant | 2 | 1 | The paper reports clinical efficacy (changes in LV function) at a fixed dose but does not provide plasma concentration data or a concentration-effect relationship, making it impossible to derive PD parameters like Emax or EC50. |
| popPK | Shaffer_1993 | irrelevant | 0 | 0 | The study is a pharmacodynamic/hemodynamic investigation in dogs where xamoterol is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Shaffer_1993 | not_relevant | 3 | 1 | The paper describes qualitative dose-dependent effects and a dextral shift for xamoterol but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve in the provided text. |
| popPK | Simonsen_1990 | irrelevant | 0 | 0 | The paper title indicates a study on myocardial blood flow and metabolism, not pharmacokinetic disposition parameters, and no PK data is present in the evidence. |
| popPK | Skeberdis_1997 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study on frog myocytes focusing on receptor mechanisms, not a pharmacokinetic study of xamoterol. |
| PD | Skeberdis_1997 | not_relevant | 0 | 0 | The paper focuses on the pharmacological characterization of beta-adrenoceptors in frog ventricular myocytes and does not mention xamoterol or report any exposure-response or dose-response data for it. |
| popPK | Stark_2004 | irrelevant | 0 | 0 | The study is a mechanistic investigation of adenylyl cyclase VI in rat myocytes where xamoterol is used only as a pharmacological probe, with no pharmacokinetic parameters reported. |
| PD | Sørensen_1990 | not_relevant | 3 | 1 | The paper investigates dose-activity relationships in isolated atria but only provides qualitative comparisons of maximal responses and time-to-effect; it does not report specific numeric PD parameters (e.g., EC50, Emax values) or extractable concentration-effect curves for xamoterol. |
| popPK | Takashio_1990 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of pulmonary vascular resistance and 5-HT pressor responses in an isolated lung model, reporting no pharmacokinetic parameters for xamoterol. |
| popPK | Takeda_2002 | irrelevant | 0 | 0 | The study is a pharmacological investigation of beta-adrenoceptor subtypes in bladder smooth muscle and does not report any pharmacokinetic parameters for xamoterol. |
| popPK | Tangø_1985 | irrelevant | 0 | 0 | The study reports hemodynamic effects (heart rate, blood pressure, cardiac output) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| PD | Torrente_2023 | not_relevant | 1 | 0 | The paper reports qualitative effects of xamoterol (increased neuroinflammation/degeneration) at a single fixed dose (3 mg/kg) but provides no concentration-effect data, dose-response curve, or numeric PD parameters (Emax, EC50, etc.). |
| popPK | Vigholt-Sørensen_1991 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on isolated rat atrium, not a pharmacokinetic study reporting quantitative disposition parameters for xamoterol. |
| PD | Vigholt-Sørensen_1991 | not_relevant | 0 | 0 | The paper studies beta-adrenoceptor partial agonists on isolated rat atrium and does not mention xamoterol or report any exposure-response or dose-response data for it. |
| popPK | Willette_1998 | irrelevant | 0 | 0 | The study evaluates the intrinsic sympathomimetic activity of bucindolol and carvedilol in rats, mentioning xamoterol only as a background example of a drug with ISA, without reporting any pharmacokinetic parameters for xamoterol. |
| popPK | Yabana_1992 | irrelevant | 0 | 0 | The study is a pharmacological investigation of receptor activity in guinea-pig tissues and does not report any pharmacokinetic parameters for xamoterol. |
| popPK | Zech_1989 | irrelevant | 0 | 0 | The study focuses on renal physiology and blood pressure effects, not pharmacokinetic disposition parameters. |
| popPK | unknown_1988 | irrelevant | 0 | 0 | The provided evidence consists only of a conference header with no abstract text, data, or pharmacokinetic parameters for xamoterol. |
| PD | unknown_1988 | not_relevant | 0 | 0 | The provided text is only a header for a conference proceedings and does not contain the abstract or data for xamoterol. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | The provided evidence is only a conference header with no study data, parameters, or mention of xamoterol. |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract collection and contains no scientific content, data, or PD parameters for xamoterol. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_xamoterol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
