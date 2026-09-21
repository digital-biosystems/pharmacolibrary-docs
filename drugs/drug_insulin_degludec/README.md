<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin degludec&quot;}]"></div>

# insulin degludec

- **generic name:** insulin degludec
- **ATC codes:** `A10AD06`, `A10AE06`, `A10AE56`
- **DrugBank:** [DB09564](https://go.drugbank.com/drugs/DB09564)
- **groups:** approved, investigational

## About

**Description.** Insulin degludec is an ultra-long-acting form of insulin used for the treatment of hyperglycemia caused by Type 1 and Type 2 Diabetes.[A18561,A18562,A18563,A18564,A174934] Insulin is typically prescribed for the management of diabetes mellitus to mimic the activity of endogenously produced human insulin, a peptide hormone produced by beta cells of the pancreas that promotes glucose metabolism.[A18561,A18562,A18563,A18564,A174934] Insulin is released from the pancreas following a meal to promote the uptake of glucose from the blood into internal organs and tissues such as the liver, fat cells, and skeletal muscle.[A18561,A18562,A18563,A18564,A174934] Absorption of glucose into cells allows for its transformation into glycogen or fat for storage.[A18561,A18562,A18563,A18564,A174934] Insulin also inhibits hepatic glucose production, enhances protein synthesis, and inhibits lipolysis and proteolysis among many other functions.[A18561,A18562,A18563,A18564,A174934]

Insulin is an essential treatment in the management of Type 1 Diabetes (T1D) which is caused by an autoimmune reaction that destroys the beta cells of the pancreas, resulting in the body not being able to produce or synthesize the insulin needed to manage circulating blood sugar levels.[A18561,A18562,A18563,A18564,A174934] As a result, people with T1D rely primarily on exogenous forms of insulin, such as insulin degludec, to lower glucose levels in the blood.[A18561,A18562,A18563,A18564,A174934] Insulin is also used in the treatment of Type 2 Diabetes (T2D), another form of diabetes mellitus that is a slowly progressing metabolic disorder caused by a combination of genetic and lifestyle factors that promote chronically elevated blood sugar levels.[A18561,A18562,A18563,A18564,A174934] Without treatment or improvement in non-pharmacological measures such as diet and exercise to lower blood glucose, high blood sugar eventually causes cellular resistance to endogenous insulin, and in the long term, damage to pan

**Indication.** Insulin degludec is indicated to improve glycemic control in patients 1 year of age and older with diabetes mellitus.[L42400]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-14 14:38 | 1:31 | 0/0/0 | 1/2/0 | 0/0/0 | 1,474/294 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 0/2 | 15/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Nosek_2014](drugs/drug_insulin_degludec/pd_Nosek_2014_GIR.md) | Nosek L et al., Glucose-lowering effect of insulin degl…, Clinical drug investigation (2014) | [10.1007/s40261-014-0218-x](https://doi.org/10.1007/s40261-014-0218-x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Haahr_2016](drugs/drug_insulin_degludec/pd_Haahr_2016_GIR.md) | Haahr H et al., Insulin degludec/insulin aspart in Japa…, Journal of diabetes investi… (2016) | [10.1111/jdi.12461](https://doi.org/10.1111/jdi.12461) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Heise_2014](drugs/drug_insulin_degludec/pd_Heise_2014_glucose_infusion_rate.md) | Heise T et al., Distinct Prandial and Basal Glucose-Low…, Diabetes therapy : research… (2014) | [10.1007/s13300-014-0070-2](https://doi.org/10.1007/s13300-014-0070-2) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=insulin_degludec) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | <sub>“…in degludec metabolites are inactive.[L42400] The liver and kidney play the major role in…”</sub> | prose |
| metabolism | liver | `CYP1A2` inducer | DrugBank actor |
| excretion | kidney | <sub>“…30 to 80% of circulating insulin is removed by the kidney.[A249935]…”</sub> | prose |

<sub>Actors without a tissue in the table: IDE (substrate), IGF1R (activator), INS (modulator), INSR (target).</sub>

## Coverage

- **PubMed hits:** 113 matched, 47 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2023.pdf` | Li T et al., The Effect of BMI on Pharmacokinetic an…, Clinical pharmacokinetics (2023) | popPK | 10 | [10.1007/s40262-022-01207-1](https://doi.org/10.1007/s40262-022-01207-1) | [36738401](https://pubmed.ncbi.nlm.nih.gov/36738401) | The title confirms a PK/PD study of insulin degludec, but the provided evidence contains only the title and no numeric parameter values. |
| `Biester_2016.pdf` | Biester T et al., Pharmacokinetic and prandial pharmacody…, Pediatric diabetes (2016) | popPK | 8 | [10.1111/pedi.12358](https://doi.org/10.1111/pedi.12358) | [26782928](https://pubmed.ncbi.nlm.nih.gov/26782928) | The study reports PK properties for insulin degludec (as part of IDegAsp) but only provides exposure ratios (AUC/Cmax) relative to adults, lacking absolute quantitative disposition parameters like clearance, volume, or half-life. |
| `Heise_2012.pdf` | Heise T et al., Ultra-long-acting insulin degludec has…, Diabetes, obesity & metabol… (2012) | popPK | 8 | [10.1111/j.1463-1326.2012.01638.x](https://doi.org/10.1111/j.1463-1326.2012.01638.x) | [22726241](https://pubmed.ncbi.nlm.nih.gov/22726241) | The paper reports a PK/PD study for insulin degludec with a specific half-life value, but lacks other quantitative disposition parameters like clearance or volume. |
| `Kapitza_2015.pdf` | Kapitza C et al., Preserved pharmacokinetic exposure and…, Journal of clinical pharmac… (2015) | popPK | 8 | [10.1002/jcph.549](https://doi.org/10.1002/jcph.549) | [25998481](https://pubmed.ncbi.nlm.nih.gov/25998481) | The paper is a clinical pharmacology study reporting PK properties for insulin degludec, but the specific numeric parameter values are not present in the provided abstract text. |
| `Tang_2026.pdf` | Tang D et al., Population Pharmacokinetic and Pharmaco…, Clinical pharmacokinetics (2026) | popPK | 8 | [10.1007/s40262-025-01598-x](https://doi.org/10.1007/s40262-025-01598-x) | [41489799](https://pubmed.ncbi.nlm.nih.gov/41489799) | The paper reports a population PK model for insulin degludec (IDeg) as a comparator to INS068, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Liu_2023.pdf` | Liu H et al., A phase-I randomized euglycemic clamp s…, Expert opinion on investiga… (2023) | pd | 5 | [10.1080/13543784.2023.2254690](https://doi.org/10.1080/13543784.2023.2254690) | [37665683](https://www.ncbi.nlm.nih.gov/pubmed/37665683) | metadata signals extractable PD data (PK/PD) |
| `Zhu_2026.pdf` | Zhu D et al., Pharmacokinetics and pharmacodynamics s…, Journal of pharmaceutical s… (2026) | pd | 5 | [10.1016/j.xphs.2026.104424](https://doi.org/10.1016/j.xphs.2026.104424) | [42457027](https://www.ncbi.nlm.nih.gov/pubmed/42457027) | metadata signals extractable PD data (Sigmoid) |

<sub>queue written 2026-09-14T14:38:14.549575+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aradóttir_2021 | irrelevant | 0 | 0 | The study is a clinical feasibility trial focusing on dose titration and glycemic control, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PD | Aradóttir_2021 | not_relevant | 0 | 0 | The paper reports on the feasibility of a dosing algorithm and compares estimated vs. actual end doses, but it does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Becker_2018 | irrelevant | 0 | 0 | The provided evidence is a citation of a response letter and does not contain any original pharmacokinetic data or numeric parameters for insulin degludec. |
| PD | Becker_2018 | not_relevant | 0 | 0 | The provided text is a citation header for a response letter and does not contain the full text, data, or numeric PD parameters of the study. |
| popPK | Biester_2016 | relevant | 8 | 2 | The study reports PK properties for insulin degludec (as part of IDegAsp) but only provides exposure ratios (AUC/Cmax) relative to adults, lacking absolute quantitative disposition parameters like clearance, volume, or half-life. |
| PD | Biester_2016 | not_relevant | 3 | 2 | The study reports PK parameters and qualitative/summary PD metrics (AUC, max excursion) but does not provide a concentration-effect model, Emax/EC50, or a derivable PD curve. |
| popPK | Chen_2025 | irrelevant | 1 | 0 | The study focuses on a novel insulin (GZR101/GZR33) with insulin degludec serving only as a comparator, and no quantitative PK parameters for degludec are reported. |
| popPK | Christiansen_2016 | irrelevant | 0 | 0 | The paper is a review of the clinical efficacy and pharmacodynamic profile of IDegAsp, containing no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for insulin degludec. |
| PD | Christiansen_2016 | not_relevant | 1 | 0 | The text is a qualitative review summarizing the clinical profile and benefits of IDegAsp without providing specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling results. |
| popPK | Del_2020 | irrelevant | 0 | 0 | This is a commentary on a clinical trial (CONCLUDE) focusing on hypoglycemia risk and statistical interpretation, not a pharmacokinetic study reporting quantitative disposition parameters for insulin degludec. |
| PD | Del_2020 | not_relevant | 1 | 0 | The paper is a commentary on the CONCLUDE trial and discusses PK/PD concepts qualitatively but does not report any numeric PD parameters, concentration-effect curves, or dose-response data for insulin degludec. |
| popPK | Gilor_2019 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (time to peak, duration of action) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for insulin degludec. |
| popPK | Haahr_2016 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (GIR, AUC) for the IDegAsp combination product, not quantitative pharmacokinetic disposition parameters (CL, V, ka) for insulin degludec alone. |
| popPK | Heise_2012 | relevant | 8 | 2 | The paper reports a PK/PD study for insulin degludec with a specific half-life value, but lacks other quantitative disposition parameters like clearance or volume. |
| popPK | Heise_2014 | relevant | 8 | 2 | The study reports population PK/PD modeling for insulin degludec (IDeg) as part of the IDegAsp co-formulation, but specific numeric parameter values (CL, V, ka) are not listed in the provided text, only exposure metrics (AUC) and model descriptions. |
| popPK | Heise_2015 | relevant | 4 | 2 | The study reports a half-life value (25.4 h) for insulin degludec, but lacks other quantitative disposition parameters like clearance, volume, or compartmental model parameters. |
| popPK | Heise_2015_2 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic dose-response (glucose lowering) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for insulin degludec. |
| popPK | Heise_2016 | irrelevant | 2 | 0 | The study focuses on time to steady state and does not report quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Hemmingsen_2021 | irrelevant | 0 | 0 | This is a systematic review of clinical outcomes (HbA1c, hypoglycemia) and does not report pharmacokinetic parameters such as clearance or volume for insulin degludec. |
| PD | Hemmingsen_2021 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical outcomes (HbA1c, hypoglycemia) and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters. |
| popPK | Henao-Carrillo_2018 | irrelevant | 0 | 0 | The paper is a clinical study assessing glycemic variability and hypoglycemia, not a pharmacokinetic study, and it does not report quantitative PK parameters (CL, V, ka, etc.) for insulin degludec. |
| PD | Henao-Carrillo_2018 | not_relevant | 0 | 0 | The paper is a clinical trial assessing glycemic variability and hypoglycemia outcomes; it does not report pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50) for insulin degludec. |
| popPK | Hirose_2018 | irrelevant | 1 | 0 | The paper is a clinical review of the co-formulation IDegAsp and does not report original quantitative pharmacokinetic parameters (CL, V, etc.) for insulin degludec. |
| PD | Hirose_2018 | not_relevant | 2 | 0 | The text is a clinical review that qualitatively describes the pharmacodynamic profile (rapid onset, distinct peak, stable basal effect) but does not provide numeric PD parameters, concentration-effect curves, or specific model fits. |
| popPK | Hirsch_2020 | irrelevant | 0 | 0 | The paper is a clinical review discussing patient transition scenarios and provider opinions, containing no original quantitative pharmacokinetic parameter values for insulin degludec. |
| PD | Hirsch_2020 | not_relevant | 1 | 0 | The paper is a qualitative review of clinical switching scenarios and provider opinions, lacking any numeric PD parameters or exposure-response data. |
| popPK | Kapitza_2015 | relevant | 8 | 0 | The paper is a clinical pharmacology study reporting PK properties for insulin degludec, but the specific numeric parameter values are not present in the provided abstract text. |
| PD | Kiss_2014 | not_relevant | 0 | 0 | The study reports only pharmacokinetic parameters (AUC, Cmax, clearance) in relation to renal function and does not include any pharmacodynamic or exposure-response analysis. |
| popPK | Kumar_2016 | irrelevant | 0 | 0 | The paper is a clinical review of the co-formulation IDegAsp focusing on efficacy and safety, and it does not report quantitative pharmacokinetic parameters for insulin degludec. |
| PD | Kumar_2016 | not_relevant | 1 | 0 | The paper is a clinical review summarizing efficacy and safety outcomes (HbA1c, hypoglycemia) without reporting specific pharmacokinetic/pharmacodynamic modeling or numeric PD parameters like Emax or EC50. |
| popPK | Li_2023 | relevant | 10 | 0 | The title confirms a PK/PD study of insulin degludec, but the provided evidence contains only the title and no numeric parameter values. |
| popPK | Liu_2022 | irrelevant | 4 | 2 | The study reports relative exposure ratios (AUC/Cmax) and covariate effects for insulin degludec but does not provide absolute quantitative disposition parameters (CL, V, Q, ka) or a compartmental model structure. |
| popPK | Liu_2023 | irrelevant | 1 | 0 | The evidence provided contains only the study title and lacks any quantitative pharmacokinetic parameter values or model details. |
| popPK | Lucidi_2021 | irrelevant | 2 | 0 | The study reports pharmacodynamic (PD) endpoints (glucose infusion rates, suppression of glucose production) rather than quantitative pharmacokinetic (PK) disposition parameters (CL, V, ka) for insulin degludec. |
| PD | Lucidi_2021 | not_relevant | 3 | 2 | The study compares two drugs at fixed clinical doses using euglycemic clamps and reports relative differences in PD endpoints (e.g., AUC-GIR, suppression rates) but does not provide a concentration-effect model, dose-response curve, or numeric PD parameters (Emax, EC50) for insulin degludec. |
| popPK | Mathiesen_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial (EXPECT) comparing insulin degludec and detemir in pregnancy, reporting HbA1c outcomes rather than quantitative pharmacokinetic parameters like clearance or volume. |
| PD | Mathiesen_2023 | not_relevant | 0 | 0 | The paper is a clinical trial comparing efficacy and safety outcomes (HbA1c) and does not report pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters. |
| popPK | Muddather_2026 | irrelevant | 0 | 0 | The paper is a review on DPP-4 inhibitors in cancer and mentions insulin_degludec only as a representative drug in a classification table, providing no pharmacokinetic parameters. |
| PD | Muddather_2026 | not_relevant | 0 | 0 | The paper is a review on DPP-4 inhibitors in cancer and does not report any pharmacodynamic or exposure-response data for insulin degludec. |
| popPK | Nasrallah_2012 | irrelevant | 1 | 0 | This is a narrative review article that discusses clinical efficacy and safety but does not report original quantitative pharmacokinetic parameters (such as clearance, volume, or rate constants) for insulin degludec. |
| PD | Nasrallah_2012 | not_relevant | 1 | 0 | The paper is a narrative review summarizing clinical trial outcomes (A1c, hypoglycemia rates) and qualitative pharmacokinetic properties, but it does not report any numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Nasu_2025 | irrelevant | 0 | 0 | The study investigates insulin efsitora alfa as the subject drug, with insulin degludec serving only as an active comparator. |
| popPK | Nosek_2014 | relevant | 5 | 2 | The study reports non-compartmental PK parameters (AUC, Cmax) for insulin degludec, but lacks specific compartmental parameters (CL, V, Q, ka) in the provided text, which are likely in the supplementary material or figures. |
| popPK | Plum-Mörschel_2023 | irrelevant | 0 | 0 | The study investigates insulin icodec, not insulin degludec, which is only mentioned as a comparator or prior therapy. |
| popPK | Rendell_2013 | irrelevant | 2 | 0 | The text is a review/summary that mentions tmax and t1/2 but lacks quantitative compartmental PK parameters (CL, V, Q, ka) or a population PK model. |
| PD | Rendell_2013 | not_relevant | 2 | 1 | The text is a qualitative review discussing PK properties (tmax, t1/2) and general PD effects (glucose lowering, hypoglycemia) without providing numeric PD parameters, concentration-effect curves, or model fits. |
| popPK | Rodacki_2017 | irrelevant | 0 | 0 | The paper is a review focusing on pharmacodynamics and glycemic variability, not a pharmacokinetic study reporting quantitative disposition parameters for insulin degludec. |
| PD | Rodacki_2017 | not_relevant | 1 | 0 | The text is a review article summarizing general pharmacological properties and clinical data regarding insulin degludec's effect on glycemic variability, but it does not present specific numeric PD parameters, concentration-effect curves, or a specific PK/PD model fit in the provided text. |
| popPK | Salesov_2018 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (onset, duration, nadir) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for insulin degludec. |
| popPK | Scheen_2019 | irrelevant | 1 | 0 | The text is a clinical review summarizing efficacy and safety outcomes without reporting quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for insulin degludec. |
| PD | Scheen_2019 | not_relevant | 1 | 0 | The text is a qualitative summary of clinical efficacy and safety profiles without reporting any numeric pharmacodynamic parameters, concentration-effect curves, or dose-response data. |
| popPK | Tang_2026 | relevant | 8 | 0 | The paper reports a population PK model for insulin degludec (IDeg) as a comparator to INS068, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Vora_2014 | irrelevant | 1 | 0 | The paper is a meta-analysis of clinical efficacy endpoints (HbA1c, hypoglycemia) and does not report quantitative pharmacokinetic parameters (CL, V, ka) for insulin degludec. |
| PD | Vora_2014 | not_relevant | 1 | 0 | The paper is a clinical meta-analysis comparing treatment outcomes (HbA1c, FPG, hypoglycemia) between two insulin types; it does not report pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Wong_2023 | irrelevant | 0 | 0 | The paper focuses on the discovery of albumin-binding macrocyclic peptides and does not report pharmacokinetic parameters for insulin_degludec. |
| PD | Wong_2023 | not_relevant | 0 | 0 | The paper describes the discovery of albumin-binding macrocyclic peptides and their PK properties (half-life), but does not report any pharmacodynamic (PD) or exposure-response relationship for insulin degludec or any other drug. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is a narrative review on real-world evidence and adherence for insulin therapy, containing no pharmacokinetic parameters or quantitative disposition data for insulin_degludec. |
| PD | Yang_2025 | not_relevant | 0 | 0 | The paper is a narrative review on real-world evidence, adherence, and cost-effectiveness of insulin and biosimilars, containing no pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters. |
| popPK | Zhu_2026 | irrelevant | 0 | 0 | The evidence provided contains only the title of a study on canines and lacks any quantitative pharmacokinetic parameters or specific data for insulin_degludec. |
| PD | Zhu_2026 | not_relevant | 0 | 0 | The paper studies insulin in a canine model and does not report pharmacokinetic or pharmacodynamic data for insulin degludec. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The evidence consists only of a conference citation with no pharmacokinetic data or study details. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, results, or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_insulin_degludec`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
