<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;albiglutide&quot;}]"></div>

# albiglutide

- **generic name:** albiglutide
- **ATC codes:** `A10BJ04`
- **DrugBank:** [DB09043](https://go.drugbank.com/drugs/DB09043)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Albiglutide is a glucagon-like peptide-1 agonist (GLP-1) biologic drug indicated in the treatment of type 2 diabetes. It is marketed under the brands Eperzan and Tanzeum by GSK (GlaxoSmithKline). It is a dipeptidyl peptidase-4-resistant glucagon-like peptide-1 dimer fused to human albumin. Albiglutide was approved on April 15, 2014 by the FDA.

**Indication.** Indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 15:54 | 16:05 | 0/0/0 | 0/0/0 | 0/0/0 | 116,210/5,288 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 1/9 | 15/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=albiglutide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GLP1R (target).</sub>

## Coverage

- **PubMed hits:** 1317 matched, 82 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Seino_2009.pdf` | Seino Y et al., Safety, tolerability, pharmacokinetics…, Current medical research an… (2009) | popPK | 10 | [10.1185/03007990903372999](https://doi.org/10.1185/03007990903372999) | [19863477](https://pubmed.ncbi.nlm.nih.gov/19863477) | The study reports quantitative PK parameters (half-life, clearance, volume of distribution) for albiglutide directly in the text. |
| `Young_2014.pdf` | Young MA et al., Clinical pharmacology of albiglutide, a…, Postgraduate medicine (2014) | popPK | 8 | [10.3810/pgm.2014.11.2836](https://doi.org/10.3810/pgm.2014.11.2836) | [25387217](https://pubmed.ncbi.nlm.nih.gov/25387217) | The text explicitly reports quantitative PK parameters for albiglutide, including clearance (67 mL/h), half-life (~5 days), and absorption timing. |
| `Young_2014_2.pdf` | Young MA et al., Effect of renal impairment on the pharm…, Postgraduate medicine (2014) | popPK | 8 | [10.3810/pgm.2014.05.2754](https://doi.org/10.3810/pgm.2014.05.2754) | [24918790](https://pubmed.ncbi.nlm.nih.gov/24918790) | The paper is a PK study of albiglutide, but the evidence only provides AUC ratios and lacks specific quantitative disposition parameters like clearance, volume, or half-life. |

<sub>queue written 2026-09-15T15:53:02.846853+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blair_2015 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and safety in type 2 diabetes, containing no quantitative pharmacokinetic parameters or compartmental models for albiglutide. |
| PD | Brønden_2015 | not_relevant | 2 | 1 | The text is a high-level review summarizing clinical efficacy (HbA1c changes) and general PK/PD profiles without providing specific numeric PD parameters (e.g., EC50, Emax) or detailed concentration-effect curves. |
| popPK | Brønden_2017 | irrelevant | 2 | 0 | The paper is a review summarizing clinical properties and only mentions a half-life without providing quantitative compartmental PK parameters (CL, V, Q, ka) or a population PK model. |
| PD | Brønden_2017 | not_relevant | 2 | 1 | The text is a qualitative review summarizing clinical efficacy (HbA1c/glucose reductions) and PK properties (half-life) but does not provide a concentration-effect model, dose-response curve, or numeric PD parameters like Emax or EC50. |
| PD | Bush_2009 | not_relevant | 3 | 2 | The paper reports a qualitative dose-dependent trend in glucose and fructosamine but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect model. |
| PD | Bush_2012 | not_relevant | 1 | 0 | The paper reports a lack of pharmacodynamic interactions (qualitative/standard bioequivalence assessment) but does not provide numeric PD parameters or concentration-effect curves for albiglutide. |
| popPK | Cada_2014 | irrelevant | 0 | 0 | The text is a subscription advertisement for a monograph service and does not contain any pharmacokinetic data or numeric parameters for albiglutide. |
| popPK | Cassatt_2023 | irrelevant | 0 | 0 | The paper is a commentary on a workshop regarding radiation-induced immune dysfunction and does not contain any pharmacokinetic data for albiglutide. |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The paper studies the preparation and in vitro release of Helicobacter pylori recombinant protein microspheres, not the pharmacokinetics of albiglutide. |
| popPK | Corbey_1992 | irrelevant | 0 | 0 | The paper describes a statistical classification system for population subgroups and contains no pharmacokinetic data for albiglutide. |
| popPK | Davis_2015 | irrelevant | 1 | 0 | The paper is a clinical review that mentions a half-life but does not report quantitative disposition parameters (CL, V, Q, ka) or a compartmental/population-PK model. |
| popPK | Dike_2024 | irrelevant | 0 | 0 | The paper is about soil remediation using biochar and bacteria, and does not involve the drug albiglutide or pharmacokinetics. |
| PD | Gentilella_2019 | not_relevant | 1 | 0 | The text is a qualitative review discussing general pharmacodynamic mechanisms and clinical differences between GLP-1 RAs, without reporting any specific numeric PD parameters or exposure-response data for albiglutide. |
| popPK | Gupta_2013 | irrelevant | 0 | 0 | The paper is a general review of GLP-1 analogues and does not report any quantitative pharmacokinetic parameters for albiglutide. |
| popPK | Gögler_1985 | irrelevant | 0 | 0 | The paper discusses surgical techniques for intestinal sutures and anastomoses and contains no pharmacokinetic data for albiglutide. |
| popPK | Hanfland_1984 | irrelevant | 0 | 0 | The paper describes the purification and structural elucidation of glycosphingolipids from human erythrocytes and is unrelated to albiglutide pharmacokinetics. |
| popPK | He_1994 | irrelevant | 0 | 0 | The paper describes the isolation and structural elucidation of plant compounds from Ligustrum pedunculare and does not involve albiglutide or pharmacokinetics. |
| popPK | Hinkelmann_1968 | irrelevant | 0 | 0 | The paper is about statistical design for genetic crosses and has no relation to albiglutide pharmacokinetics. |
| popPK | Hollingsworth_2023 | irrelevant | 0 | 0 | The paper discusses radiation-induced immune dysfunction and contains no pharmacokinetic data or mention of albiglutide. |
| popPK | Huber_1984 | irrelevant | 0 | 0 | The paper is a review of immunopathology in non-Hodgkin lymphomas and contains no pharmacokinetic data for albiglutide. |
| PD | Hurren_2012 | not_relevant | 1 | 0 | The paper is a review of drug-drug interactions focusing on the pharmacokinetics of co-administered drugs, not a pharmacodynamic exposure-response analysis of albiglutide itself. |
| popPK | Jain_2016 | irrelevant | 0 | 0 | The provided evidence consists only of a title regarding a safety event (pancreatitis) and contains no pharmacokinetic data or quantitative disposition parameters. |
| PD | Kalra_2016 | not_relevant | 1 | 0 | The paper is a narrative review of GLP-1 receptor agonists that discusses general pharmacological profiles and clinical trial outcomes but does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response models for albiglutide. |
| popPK | Kotzampassi_2012 | irrelevant | 0 | 0 | The paper is a clinical study on intragastric balloons for weight loss and does not involve albiglutide or pharmacokinetic parameters. |
| popPK | Li_2018 | irrelevant | 0 | 0 | The paper is a review of cardiovascular outcomes for GLP-1 receptor agonists and does not report any quantitative pharmacokinetic parameters for albiglutide. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy and safety outcomes (HbA1c, BP, etc.) in diabetes and CKD, not a pharmacokinetic study, and it does not report any PK parameters for albiglutide. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and reports aggregate efficacy outcomes (e.g., HbA1c reduction) rather than pharmacokinetic/pharmacodynamic modeling or exposure-response relationships for albiglutide. |
| popPK | Maselli_2021 | irrelevant | 0 | 0 | The paper is a review of gastric physiology effects of GLP-1 analogs and does not report quantitative pharmacokinetic parameters for albiglutide. |
| popPK | Matthews_2016 | irrelevant | 1 | 0 | The paper is a review of glycemic efficacy (PPG/FPG) rather than a pharmacokinetic study, and it does not report quantitative disposition parameters like clearance or volume. |
| PD | Meier_2012 | not_relevant | 2 | 1 | The paper is a narrative review describing the mechanisms and general PK/PD differences of GLP-1 agonists without reporting specific numeric PD parameters (e.g., Emax, EC50) or extractable concentration-effect curves for albiglutide. |
| popPK | Min_2025 | irrelevant | 0 | 0 | The paper is a review that explicitly excludes albiglutide from its pharmacokinetic analysis (focusing on exenatide, liraglutide, dulaglutide, semaglutide, and tirzepatide), and the provided text contains no quantitative PK parameters for albiglutide. |
| PD | Min_2025 | not_relevant | 1 | 0 | The paper is a review of pharmacokinetics and drug-drug interactions for GLP-1 RAs (excluding albiglutide) and does not report specific numeric pharmacodynamic parameters or exposure-response relationships for albiglutide. |
| popPK | Miner-Romanoff_2023 | irrelevant | 0 | 0 | The paper describes a police mentoring program for middle-school students and contains no pharmacokinetic data or information regarding albiglutide. |
| PD | Miñambres_2017 | not_relevant | 2 | 1 | The paper is a qualitative review comparing clinical trial outcomes (HbA1c, glucose levels) and PK profiles of GLP-1 agonists; it does not report a concentration-effect model, dose-response curve, or numeric PD parameters (e.g., Emax, EC50) for albiglutide. |
| popPK | Muscogiuri_2014 | irrelevant | 0 | 0 | The text is a clinical review of albiglutide's efficacy and safety in type 2 diabetes and contains no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Nauck_2019 | irrelevant | 1 | 0 | The paper is a clinical review comparing GLP-1 agonists and does not report original quantitative pharmacokinetic parameters (CL, V, etc.) for albiglutide. |
| popPK | Nauck_2021 | irrelevant | 2 | 1 | This is a narrative review of GLP-1 receptor agonists that lists general pharmacokinetic properties (half-life) in a table but does not report specific quantitative disposition parameters (CL, V, Q, ka) or population PK model estimates for albiglutide. |
| PGx | Nauck_2021 | not_relevant | 0 | 0 | The paper is a general review of GLP-1 receptor agonists and does not report specific pharmacogenomic effects on albiglutide PK/PD parameters. |
| PD | Niu_2019 | not_relevant | 1 | 0 | The paper describes qualitative pharmacodynamic effects (glucose reduction) of Abextide and mentions Albiglutide only as a comparator with no observed effect, but provides no numeric PD parameters, concentration-effect curves, or dose-response data for Albiglutide. |
| popPK | Norioka_1982 | irrelevant | 0 | 0 | The paper describes the purification of protease inhibitors from peanuts and is unrelated to albiglutide pharmacokinetics. |
| popPK | Poole_2014 | irrelevant | 0 | 0 | The paper is a drug approval summary/review that does not report original quantitative pharmacokinetic parameters for albiglutide. |
| PD | Prasad-Reddy_2015 | not_relevant | 1 | 0 | The text is a general clinical review of GLP-1 receptor agonists that discusses mechanisms and clinical outcomes but does not provide specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response data for albiglutide. |
| popPK | Puglisi_2007 | irrelevant | 0 | 0 | The paper is a clinical study on intragastric balloons and binge eating, containing no pharmacokinetic data for albiglutide. |
| popPK | Rahman_2022 | irrelevant | 0 | 0 | The paper is about public participation in research (PPIE) and community engagement, containing no pharmacokinetic data or mention of albiglutide. |
| popPK | Rashnoo_2015 | irrelevant | 0 | 0 | The paper is a clinical study on drooling assessment in children and contains no pharmacokinetic data for albiglutide. |
| popPK | Rendell_2016 | irrelevant | 1 | 0 | The paper is a narrative review discussing clinical effects and general properties without reporting specific quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2) for albiglutide. |
| PD | Rendell_2016 | not_relevant | 2 | 1 | The text is a qualitative review summary that mentions clinical effects (HbA1c lowering) but does not provide specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling results. |
| popPK | Rendell_2017 | irrelevant | 0 | 0 | The paper is a safety review of albiglutide and does not report any quantitative pharmacokinetic parameters. |
| popPK | Rendell_2018 | irrelevant | 0 | 0 | The paper is a clinical review of albiglutide's efficacy and safety in type 2 diabetes and does not report any quantitative pharmacokinetic parameters. |
| popPK | Rogers_2015 | irrelevant | 0 | 0 | The paper is a review of albumin fusion proteins that mentions albiglutide only as an example of an approved drug, without reporting any quantitative pharmacokinetic parameters. |
| popPK | Rosenstock_2009 | irrelevant | 2 | 1 | The paper is a clinical efficacy study that mentions a population PK analysis was performed, but it does not report quantitative PK parameters (CL, V, Q, ka) in the text, only qualitative half-life and Tmax values. |
| popPK | Sadile_2018 | irrelevant | 0 | 0 | The paper describes a new anatomical structure in the knee (patellar plica) and is unrelated to albiglutide pharmacokinetics. |
| popPK | Salvatore_2026 | irrelevant | 0 | 0 | The paper is a phenome-wide association study of clinical outcomes (diagnoses) for GLP-1 RAs (specifically semaglutide) and does not report any pharmacokinetic parameters for albiglutide. |
| PD | Salvatore_2026 | not_relevant | 0 | 0 | The paper is a phenome-wide association study (PheWAS) using electronic health records to compare clinical outcomes (diagnoses) between drug classes; it does not report pharmacokinetic data, exposure-response relationships, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for albiglutide or any other drug. |
| popPK | Schwarz_1993 | irrelevant | 0 | 0 | The paper is about sociology (divorces) and contains no pharmacokinetic data for albiglutide. |
| popPK | Seino_2014 | irrelevant | 2 | 0 | The study is a clinical efficacy trial that mentions population pharmacokinetics were assessed, but no quantitative PK parameter values (CL, V, etc.) are present in the provided evidence. |
| popPK | Sfairopoulos_2018 | irrelevant | 0 | 0 | The paper is a clinical review of GLP-1 receptor agonists that discusses general properties and efficacy but does not report quantitative pharmacokinetic parameters for albiglutide. |
| popPK | Shang_2009 | irrelevant | 0 | 0 | The paper is a crystallographic structure report for an organic compound and contains no pharmacokinetic data for albiglutide. |
| popPK | Sharma_2016 | irrelevant | 0 | 0 | The paper is a narrative review discussing the pharmacological profile and mechanism of action of albiglutide, but it does not report any quantitative pharmacokinetic parameters or original data. |
| popPK | Sharma_2018 | irrelevant | 2 | 0 | The paper is a review article that discusses pharmacokinetic properties generally but does not provide specific quantitative numeric values for albiglutide in the provided evidence. |
| popPK | Shire_2024 | irrelevant | 0 | 0 | The paper is a study protocol for an adolescent cohort (Born in Bradford) focusing on mental health and wellbeing, and contains no pharmacokinetic data or mention of albiglutide. |
| popPK | Shott_1989 | irrelevant | 0 | 0 | The paper is a surgical review of sialorrhea management and contains no pharmacokinetic data or mention of albiglutide. |
| popPK | Song_2011 | irrelevant | 0 | 0 | The paper describes the crystal structure of an organic compound and contains no information regarding albiglutide or pharmacokinetics. |
| popPK | Takahashi_1988 | irrelevant | 0 | 0 | The paper is about immunotyping of Chlamydia psittaci and does not involve albiglutide or pharmacokinetics. |
| popPK | Tilz_2026 | irrelevant | 0 | 0 | The paper describes a clinical procedure for pulmonary vein isolation using pulsed field ablation and does not involve the drug albiglutide or report any pharmacokinetic parameters. |
| popPK | Tomkin_2009 | irrelevant | 0 | 0 | The paper is a review/overview of albiglutide's development and mechanism without reporting any quantitative pharmacokinetic parameters. |
| popPK | Trietsch_2014 | irrelevant | 0 | 0 | The paper is a methodological review on study design in health services research and contains no pharmacokinetic data for albiglutide. |
| popPK | Trujillo_2014 | irrelevant | 1 | 0 | The paper is a narrative review that summarizes pharmacokinetics qualitatively (e.g., long half-life) but does not report specific quantitative disposition parameters (CL, V, ka) for albiglutide. |
| PD | Trujillo_2014 | not_relevant | 2 | 1 | The paper is a narrative review summarizing clinical efficacy (A1C/weight changes) and general pharmacology, but it does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or an exposure-response model for albiglutide. |
| popPK | Winiarski_2017 | irrelevant | 0 | 0 | The paper describes a materials science technique (ion beam tomography) for hardmetal characterization and contains no pharmacokinetic data for albiglutide. |
| popPK | Wong_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study on albumin-binding macrocyclic peptides and only mentions albiglutide as a comparator example of a conjugated drug without reporting any PK parameters for it. |
| PD | Wong_2023 | not_relevant | 0 | 0 | The paper focuses on the discovery of albumin-binding macrocyclic peptides and their pharmacokinetics (circulation half-life), not on the pharmacodynamics or exposure-response relationship of albiglutide. |
| PD | Woodward_2014 | not_relevant | 3 | 2 | The paper is a narrative review that summarizes qualitative dose-dependent trends and efficacy outcomes from clinical trials but does not provide specific numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Yan_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and electrochromic properties of polyimides and does not involve the drug albiglutide or any pharmacokinetic parameters. |
| popPK | Yasawy_2014 | irrelevant | 0 | 0 | The paper is a clinical study on gastric balloons for obesity and does not involve albiglutide or pharmacokinetic parameters. |
| popPK | Young_2014_2 | relevant | 8 | 2 | The paper is a PK study of albiglutide, but the evidence only provides AUC ratios and lacks specific quantitative disposition parameters like clearance, volume, or half-life. |
| PD | Zayed_2026 | not_relevant | 1 | 0 | The paper is a qualitative literature review of pharmaceutical design and PK characteristics without reporting specific numeric PD parameters or exposure-response models for albiglutide. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The study investigates Beinaglutide (a different GLP-1 analog) in mice, and albiglutide is only mentioned as a comparator in the introduction without any PK data. |
| PD | Zhang_2021 | not_relevant | 0 | 0 | The study is a mechanistic pharmacology paper in mice comparing treated vs. vehicle groups; it does not report PK data, exposure-response relationships, or numeric PD parameters (e.g., Emax, EC50) for albiglutide. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_albiglutide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
