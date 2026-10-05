<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;albiglutide&quot;}]"></div>

# albiglutide

- **generic name:** albiglutide
- **ATC codes:** `A10BJ04`
- **DrugBank:** [DB09043](https://go.drugbank.com/drugs/DB09043) · **PubChem:** not captured
- **groups:** approved, investigational, withdrawn

## About

Albiglutide is a GLP-1 analogue blood glucose lowering drug that was used to treat type 2 diabetes. It is no longer used: its European marketing authorisation has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4712362](https://www.wikidata.org/wiki/Q4712362) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 22:09 | 3:28 | 0/0/0 | 0/0/0 | 0/0/0 | 111,128/3,973 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 1/14 | 11/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=albiglutide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GLP1R (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1317 matched, 82 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Seino_2009.pdf` | Seino Y et al., Safety, tolerability, pharmacokinetics…, Current medical research an… (2009) | popPK | 10 | [10.1185/03007990903372999](https://doi.org/10.1185/03007990903372999) | [19863477](https://pubmed.ncbi.nlm.nih.gov/19863477) | The abstract explicitly reports quantitative PK parameters (half-life, clearance, volume of distribution) for albiglutide in human subjects. |
| `Seino_2014.pdf` | Seino Y et al., A randomized dose-finding study demonst…, Current medical research an… (2014) | popPK | 8 | [10.1185/03007995.2014.896327](https://doi.org/10.1185/03007995.2014.896327) | [24552155](https://pubmed.ncbi.nlm.nih.gov/24552155) | The study explicitly assesses population pharmacokinetics of albiglutide in humans, but the specific numeric parameter values are not present in the provided evidence text. |
| `Young_2014.pdf` | Young MA et al., Clinical pharmacology of albiglutide, a…, Postgraduate medicine (2014) | popPK | 8 | [10.3810/pgm.2014.11.2836](https://doi.org/10.3810/pgm.2014.11.2836) | [25387217](https://pubmed.ncbi.nlm.nih.gov/25387217) | The abstract reports quantitative PK parameters (clearance 67 mL/h, half-life ~5 days) for albiglutide in humans. |
| `Young_2014_2.pdf` | Young MA et al., Effect of renal impairment on the pharm…, Postgraduate medicine (2014) | popPK | 8 | [10.3810/pgm.2014.05.2754](https://doi.org/10.3810/pgm.2014.05.2754) | [24918790](https://pubmed.ncbi.nlm.nih.gov/24918790) | The study reports population PK analysis and AUC ratios for albiglutide in humans, but specific quantitative disposition parameters (CL, V, Q, ka) are not explicitly listed in the provided text. |

<sub>queue written 2026-10-04T22:08:52.990641+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blair_2015 | irrelevant | 1 | 0 | The paper is a clinical review of efficacy and safety in type 2 diabetes and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for albiglutide. |
| PD | Brønden_2015 | not_relevant | 2 | 1 | The text is a high-level review summarizing clinical efficacy (HbA1c changes) and general PK/PD profiles without providing specific numeric PD parameters (e.g., EC50, Emax) or detailed concentration-effect curves. |
| popPK | Brønden_2017 | irrelevant | 2 | 0 | The paper is a review summarizing clinical properties and only mentions a half-life without providing quantitative compartmental PK parameters (CL, V, Q, ka) or a population PK model. |
| PD | Brønden_2017 | not_relevant | 2 | 1 | The text is a qualitative review summarizing clinical efficacy (HbA1c/glucose reductions) and PK properties (half-life) but does not provide a concentration-effect model, dose-response curve, or numeric PD parameters like Emax or EC50. |
| PD | Bush_2009 | not_relevant | 3 | 2 | The paper reports a qualitative dose-dependent trend in glucose and fructosamine but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect model. |
| PD | Bush_2012 | not_relevant | 1 | 0 | The paper reports a lack of pharmacodynamic interactions (qualitative/standard bioequivalence assessment) but does not provide numeric PD parameters or concentration-effect curves for albiglutide. |
| popPK | Cada_2014 | irrelevant | 0 | 0 | The provided text is a subscription advertisement for a monograph service and does not contain any pharmacokinetic data or numeric parameters for albiglutide. |
| popPK | Cassatt_2023 | irrelevant | 0 | 0 | The paper is a commentary on a workshop regarding radiation-induced immune dysfunction and does not contain any pharmacokinetic data for albiglutide. |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The study focuses on the preparation and in vitro release of Helicobacter pylori recombinant protein microspheres, not the pharmacokinetics of albiglutide. |
| popPK | Corbey_1992 | irrelevant | 0 | 0 | The paper describes a statistical classification system for population subgroups and contains no pharmacokinetic data for albiglutide. |
| popPK | Davis_2015 | irrelevant | 2 | 0 | This is a clinical review that mentions a half-life but does not report quantitative compartmental PK parameters (CL, V, Q, ka) or a population PK model. |
| popPK | Dike_2024 | irrelevant | 0 | 0 | The paper is about soil remediation of diesel contamination using bacteria and biochar, and has no relation to albiglutide pharmacokinetics. |
| PD | Gentilella_2019 | not_relevant | 1 | 0 | The text is a qualitative review discussing general pharmacodynamic mechanisms and clinical differences between GLP-1 RAs, without reporting any specific numeric PD parameters or exposure-response data for albiglutide. |
| popPK | Gupta_2013 | irrelevant | 0 | 0 | The paper is a general review of GLP-1 analogues and does not report specific quantitative pharmacokinetic parameters for albiglutide. |
| popPK | Gögler_1985 | irrelevant | 0 | 0 | The paper discusses surgical techniques for intestinal anastomoses and contains no pharmacokinetic data for albiglutide. |
| popPK | Hanfland_1984 | irrelevant | 0 | 0 | The paper describes the purification and structural elucidation of glycosphingolipids from human erythrocytes and contains no pharmacokinetic data for albiglutide. |
| popPK | He_1994 | irrelevant | 0 | 0 | no_text gate: only 396 chars of text extracted (&lt; 400) |
| popPK | Hinkelmann_1968 | irrelevant | 0 | 0 | The paper discusses statistical design for genetic crosses and contains no pharmacokinetic data for albiglutide. |
| popPK | Hollingsworth_2023 | irrelevant | 0 | 0 | The paper is a summary of a meeting on radiation-induced immune dysfunction and contains no pharmacokinetic data for albiglutide. |
| popPK | Huber_1984 | irrelevant | 0 | 0 | The paper is a review of immunopathology in non-Hodgkin lymphomas and contains no pharmacokinetic data for albiglutide. |
| PD | Hurren_2012 | not_relevant | 1 | 0 | The paper is a review of drug-drug interactions focusing on the pharmacokinetics of co-administered drugs, not a pharmacodynamic exposure-response analysis of albiglutide itself. |
| popPK | Jain_2016 | irrelevant | 0 | 0 | no_text gate: only 32 chars of text extracted (&lt; 400) |
| PD | Kalra_2016 | not_relevant | 1 | 0 | The paper is a narrative review of GLP-1 receptor agonists that discusses general pharmacological profiles and clinical trial outcomes but does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response models for albiglutide. |
| popPK | Kotzampassi_2012 | irrelevant | 0 | 0 | The paper is a clinical study on weight loss using intragastric balloons and contains no pharmacokinetic data for albiglutide. |
| popPK | Li_2018 | irrelevant | 0 | 0 | The paper is a review of cardiovascular outcomes for GLP-1 receptor agonists and does not report any quantitative pharmacokinetic parameters for albiglutide. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy and safety outcomes (HbA1c, BP, etc.) in diabetes/CKD, not a pharmacokinetic study, and albiglutide is only mentioned as a comparator in one head-to-head trial. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and reports aggregate efficacy outcomes (e.g., HbA1c reduction) rather than pharmacokinetic/pharmacodynamic modeling or exposure-response relationships for albiglutide. |
| popPK | Maselli_2021 | irrelevant | 0 | 0 | The paper is a review of gastric physiology and does not report quantitative pharmacokinetic parameters for albiglutide. |
| popPK | Matthews_2016 | irrelevant | 1 | 0 | The paper is a review of glycemic efficacy (postprandial plasma glucose) and does not report quantitative pharmacokinetic disposition parameters (CL, V, Q, ka) for albiglutide. |
| PD | Meier_2012 | not_relevant | 2 | 1 | The paper is a narrative review describing the mechanisms and general PK/PD differences of GLP-1 agonists without reporting specific numeric PD parameters (e.g., Emax, EC50) or extractable concentration-effect curves for albiglutide. |
| popPK | Min_2025 | irrelevant | 0 | 0 | The paper is a review of other GLP-1 RAs (exenatide, liraglutide, dulaglutide, semaglutide, tirzepatide) and does not include albiglutide in its scope or provide any data for it. |
| PD | Min_2025 | not_relevant | 1 | 0 | The paper is a review of pharmacokinetics and drug-drug interactions for GLP-1 RAs (excluding albiglutide) and does not report specific numeric pharmacodynamic parameters or exposure-response relationships for albiglutide. |
| popPK | Miner-Romanoff_2023 | irrelevant | 0 | 0 | The paper describes a police mentoring program for middle-school students and contains no pharmacokinetic data for albiglutide. |
| PD | Miñambres_2017 | not_relevant | 2 | 1 | The paper is a qualitative review comparing clinical trial outcomes (HbA1c, glucose levels) and PK profiles of GLP-1 agonists; it does not report a concentration-effect model, dose-response curve, or numeric PD parameters (e.g., Emax, EC50) for albiglutide. |
| popPK | Muscogiuri_2014 | irrelevant | 0 | 0 | The paper is a clinical review of albiglutide's efficacy and safety in type 2 diabetes and does not report any quantitative pharmacokinetic parameters. |
| popPK | Nauck_2019 | irrelevant | 1 | 0 | This is a clinical review comparing GLP-1 agonists that discusses pharmacokinetic behavior qualitatively but does not report specific quantitative PK parameters (CL, V, ka) for albiglutide. |
| popPK | Nauck_2021 | irrelevant | 2 | 1 | This is a narrative review of GLP-1 receptor agonists that lists general pharmacokinetic properties (half-life) in a table but does not report quantitative population PK parameters (CL, V, Q, ka) or a compartmental model for albiglutide. |
| PGx | Nauck_2021 | not_relevant | 0 | 0 | The paper is a general review of GLP-1 receptor agonists and does not report specific pharmacogenomic effects on the PK or PD of albiglutide. |
| PD | Niu_2019 | not_relevant | 1 | 0 | The paper describes qualitative pharmacodynamic effects (glucose reduction) of Abextide and mentions Albiglutide only as a comparator with no observed effect, but provides no numeric PD parameters, concentration-effect curves, or dose-response data for Albiglutide. |
| popPK | Norioka_1982 | irrelevant | 0 | 0 | The paper describes the purification of protease inhibitors from peanuts and has no relation to albiglutide pharmacokinetics. |
| popPK | Poole_2014 | irrelevant | 0 | 0 | The paper is a drug approval summary/review that does not report original quantitative pharmacokinetic parameters for albiglutide. |
| PD | Prasad-Reddy_2015 | not_relevant | 1 | 0 | The text is a general clinical review of GLP-1 receptor agonists that discusses mechanisms and clinical outcomes but does not provide specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response data for albiglutide. |
| popPK | Puglisi_2007 | irrelevant | 0 | 0 | The paper is a clinical study on intragastric balloons and binge eating in obese patients, with no mention of albiglutide or pharmacokinetic parameters. |
| popPK | Rahman_2022 | irrelevant | 0 | 0 | The paper is about public participation in research (PPIE) and community engagement in a birth cohort study, with no pharmacokinetic data for albiglutide. |
| popPK | Rashnoo_2015 | irrelevant | 0 | 0 | The study evaluates drooling assessment techniques in children and does not involve albiglutide or pharmacokinetics. |
| popPK | Rendell_2016 | irrelevant | 2 | 0 | The paper is a review discussing pharmacokinetic properties qualitatively but does not provide specific quantitative parameter values (CL, V, etc.) in the evidence. |
| PD | Rendell_2016 | not_relevant | 2 | 1 | The text is a qualitative review summary that mentions clinical effects (HbA1c lowering) but does not provide specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling results. |
| popPK | Rendell_2017 | irrelevant | 0 | 0 | The paper is a safety review of albiglutide and does not report any quantitative pharmacokinetic parameters. |
| popPK | Rendell_2018 | irrelevant | 0 | 0 | The paper is a clinical review of albiglutide's efficacy and safety in type 2 diabetes and does not report quantitative pharmacokinetic parameters. |
| popPK | Rogers_2015 | irrelevant | 0 | 0 | The paper is a review of albumin fusion proteins and does not report quantitative pharmacokinetic parameters for albiglutide. |
| popPK | Rosenstock_2009 | irrelevant | 4 | 2 | The study is a clinical efficacy trial that mentions a population PK analysis was performed, but the text only provides qualitative descriptors (half-life ~5 days, Tmax ~3 days) and refers to specific PK data in an online appendix not included in the evidence. |
| popPK | Sadile_2018 | irrelevant | 0 | 0 | The paper describes a new anatomical structure in the knee (patellar plica) and clinical outcomes of its excision, with no pharmacokinetic data for albiglutide. |
| popPK | Salvatore_2026 | irrelevant | 0 | 0 | The study is a phenome-wide analysis of health outcomes (diagnoses) and does not report any pharmacokinetic parameters for albiglutide. |
| PD | Salvatore_2026 | not_relevant | 0 | 0 | The paper is a phenome-wide association study (PheWAS) using electronic health records to compare clinical outcomes (diagnoses) between drug classes; it does not report pharmacokinetic data, exposure-response relationships, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for albiglutide or any other drug. |
| popPK | Schwarz_1993 | irrelevant | 0 | 0 | no_text gate: only 66 chars of text extracted (&lt; 400) |
| popPK | Seino_2014 | relevant | 8 | 0 | The study explicitly assesses population pharmacokinetics of albiglutide in humans, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Sfairopoulos_2018 | irrelevant | 1 | 0 | The paper is a clinical pharmacology review discussing GLP-1 RAs generally and does not report specific quantitative pharmacokinetic parameters (CL, V, etc.) for albiglutide. |
| popPK | Shang_2009 | irrelevant | 0 | 0 | The paper is a crystallographic study of a chemical compound and contains no pharmacokinetic data for albiglutide. |
| popPK | Sharma_2016 | irrelevant | 0 | 0 | The paper is a narrative review of albiglutide's pharmacological profile and does not report original quantitative pharmacokinetic parameters. |
| popPK | Sharma_2018 | irrelevant | 2 | 0 | This is a review article that discusses pharmacokinetic properties generally but does not provide specific quantitative parameter values for albiglutide in the provided text. |
| popPK | Shire_2024 | irrelevant | 0 | 0 | The paper is a protocol for an adolescent cohort study (Born in Bradford) focusing on mental health and wellbeing, and contains no pharmacokinetic data or mention of albiglutide. |
| popPK | Shott_1989 | irrelevant | 0 | 0 | The paper describes surgical management of sialorrhea and contains no pharmacokinetic data for albiglutide. |
| popPK | Song_2011 | irrelevant | 0 | 0 | The paper describes the crystal structure of an organic compound and contains no pharmacokinetic data for albiglutide. |
| popPK | Takahashi_1988 | irrelevant | 0 | 0 | The paper describes immunotyping of Chlamydia psittaci and contains no pharmacokinetic data for albiglutide. |
| popPK | Tilz_2026 | irrelevant | 0 | 0 | The paper describes a clinical procedure for atrial fibrillation ablation and does not involve the drug albiglutide or report any pharmacokinetic parameters. |
| popPK | Tomkin_2009 | irrelevant | 0 | 0 | The paper is a review/overview of albiglutide's development and clinical efficacy (HbA1c reduction) without reporting any quantitative pharmacokinetic parameters (CL, V, t1/2, etc.). |
| popPK | Trietsch_2014 | irrelevant | 0 | 0 | The paper is a methodological review of study designs in health services research and contains no pharmacokinetic data for albiglutide. |
| popPK | Trujillo_2014 | irrelevant | 2 | 0 | This is a narrative review that summarizes pharmacokinetic properties qualitatively (e.g., long half-life) but does not report specific quantitative disposition parameters (CL, V, ka) in the provided text. |
| PD | Trujillo_2014 | not_relevant | 2 | 1 | The paper is a narrative review summarizing clinical efficacy (A1C/weight changes) and general pharmacology, but it does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or an exposure-response model for albiglutide. |
| popPK | Winiarski_2017 | irrelevant | 0 | 0 | The paper describes a materials science technique (ion beam tomography) for characterizing hardmetal and contains no pharmacokinetic data for albiglutide. |
| popPK | Wong_2023 | irrelevant | 0 | 0 | The paper studies albumin-binding macrocyclic peptides and apelin-17 analogues, not the pharmacokinetics of albiglutide. |
| PD | Wong_2023 | not_relevant | 0 | 0 | The paper focuses on the discovery of albumin-binding macrocyclic peptides and their pharmacokinetics (circulation half-life), not on the pharmacodynamics or exposure-response relationship of albiglutide. |
| PD | Woodward_2014 | not_relevant | 3 | 2 | The paper is a narrative review that summarizes qualitative dose-dependent trends and efficacy outcomes from clinical trials but does not provide specific numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Yan_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and electrochromic properties of polyimides and contains no pharmacokinetic data for albiglutide. |
| popPK | Yasawy_2014 | irrelevant | 0 | 0 | The paper describes the clinical use of a gastric balloon for obesity treatment and does not involve albiglutide or any pharmacokinetic analysis. |
| popPK | Young_2014_2 | relevant | 8 | 2 | The study reports population PK analysis and AUC ratios for albiglutide in humans, but specific quantitative disposition parameters (CL, V, Q, ka) are not explicitly listed in the provided text. |
| PD | Zayed_2026 | not_relevant | 1 | 0 | The paper is a qualitative literature review of pharmaceutical design and PK characteristics without reporting specific numeric PD parameters or exposure-response models for albiglutide. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The study investigates the metabolic effects of beinaglutide (a different GLP-1 analog) in mice, not the pharmacokinetics of albiglutide. |
| PD | Zhang_2021 | not_relevant | 0 | 0 | The study is a mechanistic pharmacology paper in mice comparing treated vs. vehicle groups; it does not report PK data, exposure-response relationships, or numeric PD parameters (e.g., Emax, EC50) for albiglutide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
