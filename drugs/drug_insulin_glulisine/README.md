<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin glulisine&quot;}]"></div>

# insulin glulisine

- **generic name:** insulin glulisine
- **ATC codes:** `A10AB06`
- **DrugBank:** [DB01309](https://go.drugbank.com/drugs/DB01309)
- **groups:** approved

## About

**Description.** Insulin glulisine is a short-acting form of insulin used for the treatment of hyperglycemia caused by Type 1 and Type 2 Diabetes. Insulin is typically prescribed for the management of diabetes mellitus to mimic the activity of endogenously produced human insulin, a peptide hormone produced by beta cells of the pancreas that promotes glucose metabolism. Insulin is released from the pancreas following a meal to promote the uptake of glucose from the blood into internal organs and tissues such as the liver, fat cells, and skeletal muscle. Absorption of glucose into cells allows for its transformation into glycogen or fat for storage. Insulin also inhibits hepatic glucose production, enhances protein synthesis, and inhibits lipolysis and proteolysis among many other functions.

Insulin is an important treatment in the management of Type 1 Diabetes (T1D) which is caused by an autoimmune reaction that destroys the beta cells of the pancreas, resulting in the body not being able to produce or synthesize the insulin needed to manage circulating blood sugar levels. As a result, people with T1D rely primarily on exogenous forms of insulin, such as insulin glulisine, to lower glucose levels in the blood. Insulin is also used in the treatment of Type 2 Diabetes (T2D), another form of diabetes mellitus that is a slowly progressing metabolic disorder caused by a combination of genetic and lifestyle factors that promote chronically elevated blood sugar levels. Without treatment or improvement in non-pharmacological measures such as diet and exercise to lower blood glucose, high blood sugar eventually causes cellular resistance to endogenous insulin, and in the long term, damage to pancreatic islet cells. Insulin is typically prescribed later in the course of T2D, after trying several oral medications such as [DB00331], [DB01120], or [DB01261] have been tried, when sufficient damage has been caused to pancreatic cells that the body is no longer able to produce insulin on its own.

**Indication.** Insulin glulisine is indicated to improve glycemic control in adults and pediatric patients with diabetes mellitus.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-14 14:50 | 10:22 | 0/0/0 | 0/0/0 | 0/0/0 | 138,142/4,242 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 0/0 | 8/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 31 matched, 40 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Danne_2005.pdf` | Danne T et al., Pharmacokinetics, prandial glucose cont…, Diabetes care (2005) | popPK | 8 | [10.2337/diacare.28.9.2100](https://doi.org/10.2337/diacare.28.9.2100) | [16123473](https://pubmed.ncbi.nlm.nih.gov/16123473) | The study reports non-compartmental PK parameters (Cmax, AUC, MRT) for insulin glulisine, but lacks compartmental parameters (CL, V, ka) and specific numeric values for MRT are provided in the text. |
| `Ciaraldi_2005.pdf` | Ciaraldi TP et al., Effects of the rapid-acting insulin ana…, The Journal of clinical end… (2005) | pd | 5 | [10.1210/jc.2005-1007](https://doi.org/10.1210/jc.2005-1007) | [16030168](https://www.ncbi.nlm.nih.gov/pubmed/16030168) | metadata signals extractable PD data (EC50) |
| `Heise_2009.pdf` | Heise T et al., Biphasic insulin aspart 30/70: pharmaco…, Diabetes care (2009) | pd | 5 | [10.2337/dc09-0097](https://doi.org/10.2337/dc09-0097) | [19487640](https://www.ncbi.nlm.nih.gov/pubmed/19487640) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-09-14T14:49:11.457767+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arnolds_2010 | irrelevant | 2 | 0 | The study reports pharmacodynamic and absorption timing metrics (GIR, time to peak) rather than quantitative compartmental PK parameters (CL, V, ka) for insulin glulisine. |
| popPK | Atkin_2015 | irrelevant | 1 | 0 | The paper is a review focused on insulin degludec and aspart, mentioning insulin glulisine only as a comparator with no quantitative PK parameters (CL, V, ka) reported for it. |
| PD | Atkin_2015 | not_relevant | 1 | 0 | The paper is a narrative review comparing insulin degludec and aspart; it provides qualitative PK/PD descriptions and clinical trial efficacy data but does not report numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves for insulin glulisine. |
| popPK | Barnett_2006 | irrelevant | 1 | 0 | The paper is a review discussing the impact of obesity on rapid-acting insulins and does not report original quantitative pharmacokinetic parameter values for insulin glulisine. |
| PD | Barnett_2006 | not_relevant | 1 | 0 | The text is a review introduction that qualitatively discusses the impact of obesity on rapid-acting insulins but does not present any specific numeric PD parameters, concentration-effect curves, or model fits for insulin glulisine. |
| popPK | Becker_2005 | irrelevant | 2 | 0 | The study reports steady-state pharmacokinetics and pharmacodynamics (glucose utilization) but does not provide quantitative disposition parameters such as clearance, volume of distribution, or half-life for insulin glulisine. |
| popPK | Becker_2005_2 | irrelevant | 2 | 0 | The study reports pharmacokinetic descriptors (tmax, MRT) but lacks quantitative compartmental parameters (CL, V, ka) and specific numeric values are not present in the evidence. |
| popPK | Becker_2007 | irrelevant | 1 | 0 | The paper is a review of structure and activity without original quantitative pharmacokinetic parameter values for insulin glulisine. |
| PD | Becker_2007 | not_relevant | 1 | 0 | The text is a qualitative review summary describing the general pharmacokinetic and pharmacodynamic properties of insulin glulisine without providing specific numeric PD parameters or extractable concentration-effect data. |
| popPK | Becker_2007_2 | irrelevant | 0 | 0 | The provided evidence contains only the title of a dose-response study and lacks any quantitative pharmacokinetic parameters or model data for insulin glulisine. |
| popPK | Becker_2008 | irrelevant | 2 | 0 | The text is a qualitative review describing the pharmacokinetic profile (e.g., "peak concentration approximately twice") without reporting specific quantitative disposition parameters (CL, V, ka) or compartmental model values. |
| PD | Becker_2008 | not_relevant | 3 | 1 | The text is a qualitative review summarizing PK/PD characteristics (dose proportionality, onset, duration) but does not provide specific numeric PD parameters (e.g., Emax, EC50) or data points to derive a concentration-effect curve. |
| popPK | Bolli_2011 | relevant | 4 | 5 | The study reports non-compartmental PK parameters (AUC, Cmax, Tmax) for insulin glulisine, but lacks compartmental model parameters (CL, V, Q, ka) required for population PK extraction. |
| popPK | Ciaraldi_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic study on cultured cells, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Galli-Tsinopoulou_2012 | irrelevant | 0 | 0 | The paper is a review of insulin analogues in pediatric type 1 diabetes and does not report original quantitative pharmacokinetic parameters for insulin glulisine. |
| PD | Galli-Tsinopoulou_2012 | not_relevant | 1 | 0 | The text is a general review of insulin analogues in pediatric type 1 diabetes and does not report specific numeric pharmacodynamic parameters or exposure-response data for insulin glulisine. |
| popPK | Garg_2005 | irrelevant | 1 | 0 | The text is a qualitative review summarizing clinical efficacy and general pharmacokinetic profiles (onset, peak, duration) without reporting specific quantitative disposition parameters (CL, V, ka) or compartmental model values. |
| PD | Garg_2005 | not_relevant | 2 | 0 | The text is a qualitative review summarizing clinical outcomes and general PK/PD profiles without providing specific numeric PD parameters or concentration-effect data. |
| popPK | Gillis_2021 | irrelevant | 0 | 0 | The paper is a structural and biophysical study (X-ray crystallography and analytical ultracentrifugation) that does not report in-vivo pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PD | Gillis_2021 | not_relevant | 0 | 0 | The paper is a structural biology study (X-ray crystallography and biophysics) describing the molecular structure and self-association of insulin glulisine; it does not contain any pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Heise_2007 | irrelevant | 2 | 0 | The study reports pharmacodynamic (GIR) and basic PK (AUC, time to 10% AUC) data but does not provide compartmental PK parameters (CL, V, ka) or population PK model estimates. |
| popPK | Heise_2009 | irrelevant | 0 | 0 | The paper focuses on insulin aspart, not insulin glulisine, and no PK parameters for the subject drug are present. |
| PD | Heise_2009 | not_relevant | 0 | 0 | The paper focuses on biphasic insulin aspart 30/70, not insulin glulisine, and does not report PD parameters for the target drug. |
| popPK | Helms_2009 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic properties and clinical efficacy, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Helms_2009 | not_relevant | 2 | 1 | The paper is a narrative review summarizing clinical efficacy and safety, lacking specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or detailed exposure-response modeling data. |
| popPK | Home_2012 | irrelevant | 1 | 0 | The paper is a review of rapid-acting insulin analogues without original quantitative PK parameter values for insulin glulisine. |
| PD | Home_2012 | not_relevant | 2 | 0 | The text is a qualitative review summarizing clinical outcomes and general PK/PD profiles without providing specific numeric PD parameters or extractable concentration-effect curves for insulin glulisine. |
| popPK | Kiss_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of insulin degludec, not insulin glulisine. |
| PD | Kiss_2014 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (AUC, Cmax, CL/F) for insulin degludec in renal impairment but does not report any pharmacodynamic (exposure-response or dose-response) analysis or numeric PD parameters. |
| popPK | Koksharova_2024 | irrelevant | 2 | 0 | The study is a bioequivalence comparison of a biosimilar and reports only geometric mean ratios and confidence intervals, not absolute quantitative disposition parameters (CL, V, ka) for insulin glulisine. |
| popPK | Lamos_2016 | irrelevant | 2 | 1 | The study reports non-compartmental PK parameters (AUC, Cmax, Tmax) for a glargine/glulisine combination regimen rather than specific disposition parameters (CL, V, ka) for insulin glulisine alone. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy and safety outcomes (HbA1c, BP, etc.) in diabetes and CKD, not a pharmacokinetic study, and it does not report any PK parameters for insulin glulisine. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and does not report any pharmacokinetic or pharmacodynamic modeling, nor any numeric exposure-response or dose-response parameters for insulin glulisine. |
| popPK | McCarty_2017 | irrelevant | 0 | 0 | The paper is a review of lixisenatide, and insulin glulisine is only mentioned as a comparator agent without any PK parameter reporting. |
| popPK | Presas_2018 | irrelevant | 2 | 0 | The study focuses on nanoparticle formulation and reports only relative bioavailability and pharmacodynamic effects, lacking quantitative compartmental PK parameters (CL, V, ka) for insulin glulisine. |
| PD | Presas_2018 | not_relevant | 3 | 1 | The paper reports qualitative pharmacodynamic effects (blood glucose decrease) and relative bioavailability, but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response/dose-response model. |
| popPK | Roach_2008 | irrelevant | 0 | 0 | The paper is a review discussing clinical considerations and general profiles without reporting specific quantitative pharmacokinetic parameters for insulin glulisine. |
| PD | Roach_2008 | not_relevant | 1 | 0 | The text is a qualitative review summarizing clinical characteristics and comparisons of insulin analogues without providing specific numeric PD parameters or exposure-response data for insulin glulisine. |
| popPK | Sokolov_2023 | relevant | 8 | 2 | The paper develops a PK model for insulin glulisine, but the specific numeric parameter values are located in Table S1 (supplementary material) which is not included in the provided evidence. |
| PD | Sokolov_2023 | not_relevant | 0 | 0 | The paper focuses on a mechanistic model for dapagliflozin in T1DM; insulin glulisine is only included as a PK component for simulation, with no reported PD or exposure-response analysis for glulisine. |
| popPK | Tibaldi_2012 | irrelevant | 0 | 0 | The paper is a narrative review of insulin development history and does not report original quantitative pharmacokinetic parameters for insulin glulisine. |
| PD | Tibaldi_2012 | not_relevant | 1 | 0 | The paper is a narrative review of the history of insulin development and does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves for insulin glulisine. |
| popPK | Tibaldi_2014 | irrelevant | 1 | 0 | The paper is a general review of insulin analogs that mentions insulin glulisine only qualitatively without providing specific quantitative pharmacokinetic parameters. |
| PD | Tibaldi_2014 | not_relevant | 1 | 0 | The text is a general review of insulin evolution and clinical outcomes, lacking specific numeric pharmacodynamic parameters or exposure-response models for insulin glulisine. |
| popPK | Tonneijck_2017 | irrelevant | 0 | 0 | The study is a clinical trial comparing renal hemodynamic effects of lixisenatide and insulin-glulisine, and does not report pharmacokinetic parameters (CL, V, ka, etc.) for insulin-glulisine. |
| popPK | Tonneijck_2018 | irrelevant | 0 | 0 | The study focuses on uric acid and kidney clearance in the context of GLP-1 receptor agonists, with insulin glulisine serving only as a comparator agent in one arm, and no pharmacokinetic parameters for insulin glulisine are reported. |
| popPK | Zarini-Gakiye_2020 | irrelevant | 0 | 0 | The paper is a narrative review of Alzheimer's disease clinical trials and does not report pharmacokinetic parameters for insulin_glulisine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_insulin_glulisine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
