# midodrine

- **generic name:** midodrine
- **ATC codes:** `C01CA17`
- **DrugBank:** [DB00211](https://go.drugbank.com/drugs/DB00211)
- **groups:** approved, investigational

## About

**Description.** An ethanolamine derivative that is an adrenergic alpha agonist. It is used as a vasoconstrictor agent in the treatment of hypotension.

**Indication.** For the treatment of symptomatic orthostatic hypotension (OH).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 20:05 | 12:52 | 0/0/0 | 0/0/0 | 0/0/0 | 97,212/7,655 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 3/8 | 11/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 46 matched, 55 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ali_2016.pdf` | Ali A et al., Comparative Clinical Pharmacokinetics o…, Clinical drug investigation (2016) | popPK | 10 | [10.1007/s40261-015-0359-6](https://doi.org/10.1007/s40261-015-0359-6) | [26597181](https://pubmed.ncbi.nlm.nih.gov/26597181) | The paper is a clinical PK study of midodrine, but the provided evidence contains only the abstract and lacks the specific numeric parameter values (e.g., CL, V, t1/2) which are likely in the full text or tables not included. |
| `Zachariah_1986.pdf` | Zachariah PK et al., Pharmacodynamics of midodrine, an antih…, Clinical pharmacology and t… (1986) | popPK | 9 | [10.1038/clpt.1986.101](https://doi.org/10.1038/clpt.1986.101) | [2421958](https://pubmed.ncbi.nlm.nih.gov/2421958) | The abstract explicitly reports quantitative pharmacokinetic parameters (distribution volume, plasma clearance, and half-life) for midodrine's active metabolite in human patients. |
| `Blowey_1996.pdf` | Blowey DL et al., Midodrine efficacy and pharmacokinetics…, American journal of kidney… (1996) | popPK | 8 | [10.1016/s0272-6386(96)90142-0](https://doi.org/10.1016/s0272-6386(96)90142-0) | [8712208](https://pubmed.ncbi.nlm.nih.gov/8712208) | The paper reports pharmacokinetic characteristics for midodrine in a specific patient, but the evidence text only provides qualitative descriptions and comparisons to normal renal function without listing specific numeric values for clearance, volume, or half-life. |
| `Demir_2019.pdf` | Demir Y, The behaviour of some antihypertension…, The Journal of pharmacy and… (2019) | pd | 4 | [10.1111/jphp.13144](https://doi.org/10.1111/jphp.13144) | [31347707](https://www.ncbi.nlm.nih.gov/pubmed/31347707) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-09T20:04:10.195037+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akimoto_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP450 metabolism of midodrine's metabolite, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PGx | Akimoto_2004 | not_relevant | 2 | 0 | The paper describes in vitro CYP enzyme activities for midodrine's metabolite but does not report in vivo pharmacokinetic or pharmacodynamic parameters linked to specific genotypes or phenotypes. |
| PD | Al-Shaer_2010 | not_relevant | 0 | 0 | The paper reports an in vitro IC50 value for midodrine as part of a QSAR study, but does not report a pharmacodynamic (exposure-response) relationship, dose-response curve, or PK/PD model. |
| popPK | Alessandria_2009 | irrelevant | 0 | 0 | The paper is a clinical case-control study evaluating the efficacy of midodrine in preventing hepatorenal syndrome recurrence, not a pharmacokinetic study, and reports no PK parameters. |
| popPK | Ali_2014 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on midodrine for ascites and does not report any pharmacokinetic parameters. |
| popPK | Ali_2016 | relevant | 10 | 0 | The paper is a clinical PK study of midodrine, but the provided evidence contains only the abstract and lacks the specific numeric parameter values (e.g., CL, V, t1/2) which are likely in the full text or tables not included. |
| popPK | Altenbach_2002 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamics and receptor binding of a novel compound (ABT-866), using midodrine only as a comparator in an in vivo dog model without reporting quantitative PK parameters for midodrine. |
| PD | Altenbach_2002 | not_relevant | 3 | 2 | The paper reports in vitro pharmacological parameters (EC50, pA2) for a novel compound (ABT-866) and compares its in vivo selectivity to midodrine, but it does not report a pharmacokinetic-pharmacodynamic (PK/PD) model or exposure-response relationship for midodrine itself. |
| popPK | Benge_2020 | irrelevant | 0 | 0 | The paper is a clinical case report regarding licorice-induced hypokalemia where midodrine is only mentioned as a prescribed medication, with no pharmacokinetic data or parameters reported. |
| popPK | Biaggioni_2014 | irrelevant | 0 | 0 | The paper is a clinical review of orthostatic hypotension management and does not report any quantitative pharmacokinetic parameters for midodrine. |
| popPK | Blowey_1996 | relevant | 8 | 2 | The paper reports pharmacokinetic characteristics for midodrine in a specific patient, but the evidence text only provides qualitative descriptions and comparisons to normal renal function without listing specific numeric values for clearance, volume, or half-life. |
| popPK | Brändle_1977 | irrelevant | 0 | 0 | The study investigates the metabolic effects of midodrine (carbohydrate and fat metabolism) rather than its pharmacokinetic disposition parameters. |
| PGx | Cheshire_2019 | not_relevant | 0 | 0 | The paper is a general review of pharmacotherapy for orthostatic hypotension and does not report specific pharmacogenomic effects on midodrine's PK or PD parameters. |
| popPK | Cruz_2000 | irrelevant | 1 | 0 | The paper is a review article that discusses midodrine's mechanism and clinical use but does not report original quantitative pharmacokinetic parameters (CL, V, ka, etc.) for the drug. |
| popPK | Davoudi-Monfared_2021 | irrelevant | 0 | 0 | The study assesses the clinical effect of midodrine on lactate clearance in septic shock, not its pharmacokinetic disposition parameters. |
| PD | Demir_2019 | not_relevant | 0 | 0 | The paper focuses on the effect of antihypertensive drugs on paraoxonase-1 activity and does not report any pharmacodynamic or exposure-response analysis for midodrine. |
| popPK | Doole_2026 | irrelevant | 1 | 0 | The study is an in-vitro dissolution and disintegration analysis of midodrine tablets, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Emms_2018 | irrelevant | 0 | 0 | The paper describes analytical interference in metanephrine assays caused by midodrine and does not report any pharmacokinetic parameters. |
| popPK | Gutman_2017 | irrelevant | 0 | 0 | The paper is a clinical review discussing therapeutic uses and side effects of midodrine, containing no quantitative pharmacokinetic parameters or disposition data. |
| popPK | Hanafy_2016 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the therapeutic efficacy of midodrine in refractory ascites and does not report any pharmacokinetic parameters. |
| popPK | Harada_1998 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of vasoconstrictor responses, not a pharmacokinetic study, and reports no quantitative PK parameters (CL, V, ka, etc.) for midodrine. |
| PD | Harada_1998 | not_relevant | 0 | 0 | The paper studies the effect of Amezinium Metilsulfate on noradrenaline-induced vasoconstriction, not the pharmacodynamics of midodrine. |
| PD | Karwa_2009 | not_relevant | 1 | 0 | The paper is a narrative review that explicitly excludes pharmacokinetic/pharmacodynamic studies and does not report any numeric PD parameters or concentration-effect relationships. |
| PD | Kulkarni_2023 | not_relevant | 0 | 0 | The paper is a review of terlipressin in HRS-AKI and does not report any pharmacodynamic or exposure-response data for midodrine. |
| popPK | Lamarre-Cliche_2008 | irrelevant | 2 | 0 | The study measures plasma concentrations of the active metabolite desglymidodrine (DGM) for pharmacodynamic correlation but does not report quantitative pharmacokinetic disposition parameters (e.g., clearance, volume, half-life) for midodrine. |
| popPK | Leduc_2015 | irrelevant | 1 | 0 | The study is a clinical efficacy trial for anejaculation that reports only a single plasma concentration of the metabolite desglymidodrine, without any pharmacokinetic parameters (CL, V, ka, t1/2) or compartmental modeling. |
| popPK | Lee_2020 | irrelevant | 0 | 0 | The study investigates the metabolic and cellular effects of midodrine as an alpha-1 adrenergic agonist, not its pharmacokinetic disposition parameters. |
| popPK | Lee_2022 | irrelevant | 0 | 0 | The study is a mechanistic investigation of midodrine's effects on cataracts in rats and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a metabolomic study where midodrine is identified as a differentially abundant metabolite in rat serum, not a pharmacokinetic study reporting disposition parameters for the drug. |
| popPK | Malmborg_2013 | irrelevant | 2 | 0 | The paper uses midodrine as a case study for a PBPK modeling approach but does not report original quantitative PK parameter values (CL, V, etc.) in the provided evidence. |
| popPK | McClellan_1998 | irrelevant | 0 | 0 | The paper is a therapeutic review of midodrine's clinical efficacy and safety, containing no quantitative pharmacokinetic parameters or disposition data. |
| PD | Mukhtar_2015 | not_relevant | 1 | 0 | The text is a qualitative review advocating for midodrine use in older adults and does not report any numeric pharmacodynamic parameters, exposure-response data, or dose-effect curves. |
| popPK | Nagi_2023 | irrelevant | 0 | 0 | The study reports chemical degradation kinetics (stability) rather than pharmacokinetic disposition parameters (CL, V, ka) for midodrine in a biological system. |
| popPK | Pack_2026 | irrelevant | 0 | 0 | The paper is a case report on octreotide for intradialytic hypotension where midodrine is only a co-administered comparator, and the PK parameters provided (half-life, clearance) are for octreotide, not midodrine. |
| popPK | Patel_2017 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for hyponatremia treatment and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for midodrine. |
| popPK | Perazella_2003 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety review of midodrine for dialysis-associated hypotension and does not report any pharmacokinetic parameters. |
| PD | Pittner_1976 | not_relevant | 2 | 1 | The paper describes qualitative pharmacodynamic actions and receptor mechanisms but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters like Emax or EC50. |
| popPK | Ruiz_2022 | irrelevant | 0 | 0 | The paper is a clinical case report regarding nonocclusive mesenteric ischemia where midodrine is only mentioned as a co-administered vasopressor, with no pharmacokinetic data provided. |
| popPK | Salerno_2015 | irrelevant | 0 | 0 | The paper is a clinical meta-analysis of albumin dosing in hepatorenal syndrome where midodrine is only a co-administered vasoconstrictor, and no pharmacokinetic parameters are reported. |
| PD | Salerno_2015 | not_relevant | 0 | 0 | The paper analyzes the dose-response relationship for albumin, not midodrine, and reports no PD parameters for midodrine. |
| popPK | Tsuda_2006 | irrelevant | 2 | 0 | The study focuses on the mechanistic transport characteristics of midodrine via PEPT1 in oocytes and Caco-2 cells, reporting qualitative uptake data and AUC changes rather than quantitative population pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Vaidyanathan_2007 | irrelevant | 0 | 0 | The paper is a case report on urologic adverse effects and contains no pharmacokinetic parameters or quantitative disposition data for midodrine. |
| popPK | Wecht_2010 | irrelevant | 0 | 0 | The study reports hemodynamic outcomes (MAP, blood flow) rather than pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Wong_2017 | irrelevant | 2 | 1 | The paper is a case report of overdose toxicity that reports a single elimination half-life (1.6 h) but lacks a compartmental model, clearance, or volume of distribution parameters required for population PK extraction. |
| popPK | Wright_1998 | irrelevant | 2 | 1 | The study is a dose-response/clinical trial that mentions PK and reports only the half-life of the metabolite desglymidodrine, lacking quantitative compartmental PK parameters (CL, V, ka) for midodrine itself. |
| PD | Zachariah_1986 | not_relevant | 2 | 1 | The text reports qualitative observations (statistically significant heart rate increase, non-significant BP change) and PK parameters, but provides no numeric PD parameters (Emax, EC50) or quantitative concentration-effect relationship. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The paper is a review of nitric oxide mechanisms in liver disease and mentions midodrine only as a therapeutic agent affecting NO levels, without reporting any pharmacokinetic parameters for midodrine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_midodrine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
