<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;teneligliptin&quot;}]"></div>

# teneligliptin

- **generic name:** teneligliptin
- **ATC codes:** `A10BD28`, `A10BH08`
- **DrugBank:** [DB11950](https://go.drugbank.com/drugs/DB11950)
- **groups:** investigational

## About

**Description.** Teneligliptin has been investigated for the treatment of Type 2 Diabetes Mellitus.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 01:54 | 22:33 | 0/0/0 | 0/1/0 | 0/2/0 | 174,228/13,464 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 3/14 | 16/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Hayakawa_2025](drugs/drug_teneligliptin/pd_Hayakawa_2025_HbA1c.md) | Hayakawa T et al., Association between daily dose of dipep…, BMC pharmacology & toxicolo… (2025) | [10.1186/s40360-025-01055-2](https://doi.org/10.1186/s40360-025-01055-2) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | **CYP3A4** | `Q22` · CL | metabolism | [Park_2021](drugs/drug_teneligliptin/pgx_Park_2021_CYP3A4_Q22.md) | Park JW et al., Influence of, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.736317](https://doi.org/10.3389/fphar.2021.736317) |
| <span class="pk-badge pk-badge--red">rejected</span> | **FMO3** | `Q22` · CL | metabolism | [Park_2021](drugs/drug_teneligliptin/pgx_Park_2021_FMO3_Q22.md) | Park JW et al., Influence of, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.736317](https://doi.org/10.3389/fphar.2021.736317) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 306 matched, 77 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nakamaru_2015.pdf` | Nakamaru Y et al., Human pharmacokinetic profiling of the…, Biopharmaceutics & drug dis… (2015) | popPK | 8 | [10.1002/bdd.1928](https://doi.org/10.1002/bdd.1928) | [25450725](https://pubmed.ncbi.nlm.nih.gov/25450725) | The paper describes a PBPK model for teneligliptin, but the evidence only provides derived ratios and availability fractions, lacking the core quantitative disposition parameters (CL, V, Q, ka) required for extraction. |
| `Nakamaru_2014.pdf` | Nakamaru Y et al., Effect of ketoconazole on the pharmacok…, Clinical therapeutics (2014) | pgx | 7 | [10.1016/j.clinthera.2014.03.002](https://doi.org/10.1016/j.clinthera.2014.03.002) | [24726088](https://www.ncbi.nlm.nih.gov/pubmed/24726088) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Park_2019.pdf` | Park JW et al., Effect of glimepiride on the pharmacoki…, Journal of clinical pharmac… (2019) | pgx | 7 | [10.1111/jcpt.12848](https://doi.org/10.1111/jcpt.12848) | [31094010](https://www.ncbi.nlm.nih.gov/pubmed/31094010) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-16T01:51:40.430217+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Abubaker_2017 | not_relevant | 1 | 0 | The paper is a narrative review discussing clinical efficacy and safety in diabetic kidney disease, but it does not report any specific pharmacodynamic models, exposure-response analyses, or numeric PD parameters (e.g., Emax, EC50) for teneligliptin. |
| popPK | Agrawal_2020 | irrelevant | 0 | 0 | The paper is a case report on an adverse effect (hair loss) and contains no pharmacokinetic parameters or quantitative disposition data for teneligliptin. |
| popPK | Al_2024 | irrelevant | 0 | 0 | The paper is an editorial discussing molecular mechanisms of cardioprotection and contains no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Alotaiq_2024 | irrelevant | 0 | 0 | The paper is a systematic review of virtual bioequivalence methods and does not report original quantitative pharmacokinetic parameters for teneligliptin. |
| PD | Alotaiq_2024 | not_relevant | 0 | 0 | The paper is a systematic review of virtual bioequivalence and PBPK modeling methods, containing no specific pharmacodynamic or exposure-response data for teneligliptin. |
| PD | Arulmozhiraja_2016 | not_relevant | 0 | 0 | The paper is a computational study (FMO-QM) analyzing molecular binding interactions and energies; it does not report in vivo pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters like Emax or EC50 for teneligliptin. |
| PD | Carnovale_2019 | not_relevant | 2 | 1 | The paper performs a pharmacovigilance signal analysis (ROR) and a linear regression correlating adverse event signals with static PK/PD properties (affinity, Vd), but it does not report an exposure-response or dose-response curve with numeric PD parameters (e.g., Emax, EC50) for teneligliptin. |
| popPK | Carpio_2025 | irrelevant | 0 | 0 | The paper describes a QSAR web server for predicting DPP4 inhibitory activity (IC50) and does not report any pharmacokinetic parameters for teneligliptin. |
| PD | Carpio_2025 | not_relevant | 0 | 0 | The paper describes a QSAR web server for predicting DPP4 inhibitors and does not report any pharmacodynamic or exposure-response data for teneligliptin. |
| PD | Chen_2015 | not_relevant | 2 | 0 | The text is a general review of the DPP-4 inhibitor class and does not provide specific numeric PD parameters or exposure-response data for teneligliptin. |
| popPK | Cheng_2024 | irrelevant | 0 | 0 | The paper is a mechanistic commentary on teneligliptin's anti-inflammatory effects in diabetic cardiomyopathy and does not report any pharmacokinetic parameters. |
| PD | Chowdhury_2021 | not_relevant | 1 | 0 | The paper is a qualitative expert review summarizing clinical efficacy and safety without reporting specific numeric pharmacodynamic parameters or exposure-response models. |
| popPK | De_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cellular effects in endothelial cells and does not report any pharmacokinetic parameters for teneligliptin. |
| popPK | Ema_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on ferroptosis and acute kidney injury, containing no pharmacokinetic parameters for teneligliptin. |
| popPK | Fernandez_2024 | irrelevant | 0 | 0 | The paper is an editorial discussing the pathobiology of diabetic cardiomyopathy and a separate animal study on teneligliptin's therapeutic effects, containing no pharmacokinetic data or disposition parameters. |
| PD | Ghosh_2020 | not_relevant | 0 | 0 | The paper is a retrospective real-world effectiveness study reporting mean changes in glycemic parameters (HbA1c, FPG, PPG) over time; it does not report any pharmacokinetic data, exposure-response relationships, or formal pharmacodynamic modeling parameters (e.g., Emax, EC50). |
| PD | Goak_2022 | not_relevant | 0 | 0 | The study is a bioequivalence trial reporting only pharmacokinetic parameters (AUC, Cmax) and safety, with no pharmacodynamic or exposure-response analysis. |
| PD | Goda_2013 | not_relevant | 2 | 0 | The text is a qualitative review summarizing PK properties and clinical efficacy without providing specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect data. |
| popPK | Gosho_2018 | irrelevant | 0 | 0 | The paper is a pharmacovigilance database study analyzing adverse drug events (hypoglycemia) and does not report any pharmacokinetic parameters for teneligliptin. |
| popPK | Guo_2024 | irrelevant | 0 | 0 | The paper is a mechanistic review of teneligliptin's effect on the NLRP3 inflammasome in diabetic cardiomyopathy and does not report any pharmacokinetic parameters. |
| popPK | Hashikata_2016 | irrelevant | 0 | 0 | The study evaluates cardiovascular and metabolic effects (LV function, HbA1c) rather than pharmacokinetic disposition parameters. |
| popPK | Hayakawa_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic analysis of HbA1c dose-response relationships using machine learning, not a pharmacokinetic study, and reports no PK parameters for teneligliptin. |
| popPK | Hiromura_2018 | irrelevant | 0 | 0 | The study is a mechanistic investigation of anti-inflammatory effects in macrophages and does not report any pharmacokinetic parameters for teneligliptin. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The study is a mechanistic investigation of neuroprotective effects in cell and animal models, containing no pharmacokinetic parameters or disposition data for teneligliptin. |
| PD | Huang_2025 | not_relevant | 1 | 0 | The paper describes qualitative mechanistic effects and behavioral improvements in cell and animal models but does not report quantitative exposure-response or dose-response curves with numeric PD parameters. |
| popPK | Inoue_2019 | irrelevant | 0 | 0 | The study is a model-based meta-analysis of efficacy (FPG/HbA1c) and does not report pharmacokinetic parameters for teneligliptin. |
| PD | Inoue_2019 | not_relevant | 0 | 0 | The paper is a model-based meta-analysis comparing drug classes and does not report specific exposure-response or dose-response PD parameters for teneligliptin. |
| popPK | Isogawa_2024 | irrelevant | 0 | 0 | The paper is a clinical subanalysis comparing metabolic effects (energy intake, body weight) of canagliflozin and teneligliptin, and does not report any pharmacokinetic parameters for teneligliptin. |
| popPK | Ji_2021 | irrelevant | 0 | 0 | The paper is a Phase III efficacy and safety study reporting HbA1c and blood glucose changes, with no pharmacokinetic parameters or disposition data for teneligliptin. |
| popPK | Kadowaki_2018 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety analysis of teneligliptin dose titration, reporting HbA1c changes and adverse events, but contains no pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Kadowaki_2020 | irrelevant | 0 | 0 | The paper is a post-marketing safety and efficacy surveillance study reporting adverse events and HbA1c changes, containing no pharmacokinetic parameters or disposition data for teneligliptin. |
| PD | Kinoshita_2015 | not_relevant | 2 | 1 | The study reports PK interaction data and qualitative changes in GLP-1 levels (mean AUCs) but does not provide a concentration-effect model, dose-response curve, or numeric PD parameters (e.g., Emax, EC50) for teneligliptin. |
| PD | Kishimoto_2013 | not_relevant | 1 | 0 | The text is a general review describing the drug's mechanism, dosage, and qualitative clinical effects without providing any numeric PD parameters, concentration-effect curves, or formal PK/PD modeling data. |
| popPK | Kuthati_2021 | irrelevant | 0 | 0 | The study investigates the antinociceptive effects of teneligliptin in a rat neuropathic pain model and does not report any pharmacokinetic parameters. |
| popPK | Kutoh_2016 | irrelevant | 0 | 0 | The study reports clinical efficacy and insulin sensitivity indices (HOMA-R, HbA1c) but contains no pharmacokinetic parameters (CL, V, ka, etc.) for teneligliptin. |
| PD | Lee_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of semaglutide in diabetic neuropathic pain and does not report any pharmacodynamic or exposure-response analysis for teneligliptin. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The study is a mechanistic investigation of vasodilation in aortic rings and does not report any pharmacokinetic parameters for teneligliptin. |
| popPK | Liu_2019 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on cellular protection and does not report any pharmacokinetic parameters for teneligliptin. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy and safety outcomes (HbA1c, BP, etc.) in diabetes and CKD, not a pharmacokinetic study, and it does not report any PK parameters for teneligliptin. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for teneligliptin. |
| popPK | Mohammadi_2024 | irrelevant | 0 | 0 | The paper is an editorial discussing the mechanistic effects of teneligliptin on macrophages and diabetic cardiomyopathy, containing no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Muddather_2026 | irrelevant | 0 | 0 | The paper is a review of DPP-4 inhibitors in cancer and does not report any quantitative pharmacokinetic parameters for teneligliptin. |
| PD | Muddather_2026 | not_relevant | 1 | 0 | The text is a narrative review summarizing epidemiological and preclinical evidence without reporting specific PK/PD models or numeric exposure-response parameters for teneligliptin. |
| PGx | Nakamaru_2014 | not_relevant | 0 | 0 | The paper describes general metabolism and disposition in healthy subjects without reporting any pharmacogenomic effects or genotype-specific PK/PD parameters. |
| PGx | Nakamaru_2014_2 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (ketoconazole) and in vitro P-gp transport, not the effect of a specific gene variant or genotype on pharmacokinetics. |
| popPK | Nakamaru_2015 | relevant | 8 | 2 | The paper describes a PBPK model for teneligliptin, but the evidence only provides derived ratios and availability fractions, lacking the core quantitative disposition parameters (CL, V, Q, ka) required for extraction. |
| PD | Ortiz-Seller_2026 | not_relevant | 0 | 0 | The paper is a network meta-analysis of clinical outcomes (diabetic retinopathy) and explicitly reports no dose-response relationship; it does not contain pharmacokinetic or pharmacodynamic modeling or numeric PD parameters for teneligliptin. |
| PD | Pandya_2025 | not_relevant | 0 | 0 | The paper is a review of analytical methods for quantifying drugs and does not report any pharmacodynamic or exposure-response data. |
| popPK | Panikar_2022 | irrelevant | 0 | 0 | The study is a clinical efficacy trial reporting glycemic outcomes (HbA1c, FBS, PPBS) and contains no pharmacokinetic parameters or disposition data for teneligliptin. |
| popPK | Park_2019 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PGx | Park_2019 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (glimepiride) rather than a pharmacogenomic effect (gene variant/genotype). |
| PD | Park_2021 | not_relevant | 0 | 0 | The study reports pharmacokinetic parameters (Cmax, AUC) influenced by genetic polymorphisms but does not report any pharmacodynamic (exposure-response or dose-response) data or parameters. |
| popPK | Pelluri_2024 | irrelevant | 0 | 0 | The study is a clinical trial assessing metabolic outcomes (GLP-1, weight, insulin resistance) and does not report any pharmacokinetic parameters for teneligliptin. |
| PD | Prajapati_2025 | not_relevant | 1 | 0 | The paper focuses on the development of an analytical method and mentions pharmacodynamic evaluation but does not provide specific numeric PD parameters or exposure-response data in the abstract. |
| popPK | Pujadas_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antioxidant effects on endothelial cells, not a pharmacokinetic study, and the only PK value mentioned (half-life) is a general background fact without associated volume or clearance parameters. |
| popPK | Saghir_2020 | irrelevant | 0 | 0 | The paper is a review of chloroquine and hydroxychloroquine for COVID-19 and does not contain any pharmacokinetic data for teneligliptin. |
| PD | Saghir_2020 | not_relevant | 0 | 0 | The paper is a review of chloroquine and hydroxychloroquine for COVID-19 and does not contain any pharmacodynamic or exposure-response data for teneligliptin. |
| popPK | Saghir_2021 | irrelevant | 0 | 0 | The paper is a review of chloroquine and hydroxychloroquine for COVID-19, and teneligliptin is only mentioned as a drug causing QT prolongation, with no PK parameters reported for it. |
| PD | Saghir_2021 | not_relevant | 0 | 0 | The paper is a review of chloroquine and hydroxychloroquine for COVID-19 and does not contain any pharmacodynamic or exposure-response data for teneligliptin. |
| popPK | Salim_2017 | irrelevant | 0 | 0 | The paper is a mechanistic study on atherosclerosis and inflammation in mice, reporting no pharmacokinetic parameters for teneligliptin. |
| PD | Sharma_2020 | not_relevant | 1 | 0 | The paper is a review focusing on chemistry, analysis, and general pharmacology, lacking specific numeric PD parameters or exposure-response data for teneligliptin. |
| PD | Sura_2026 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel compounds and mentions teneligliptin only as a reference standard, without providing any exposure-response or dose-response data for teneligliptin itself. |
| popPK | Takami_2026 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse event reports (pemphigoid) and does not contain any pharmacokinetic parameters for teneligliptin. |
| popPK | Takenaka_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of PPARγ activation and does not report any pharmacokinetic parameters for teneligliptin. |
| popPK | Tanaka_2019 | irrelevant | 0 | 0 | The paper is a pharmacovigilance database analysis of adverse drug events (pemphigoid) and contains no pharmacokinetic parameters for teneligliptin. |
| popPK | Terasaki_2020 | irrelevant | 0 | 0 | The study is a mechanistic investigation of teneligliptin's effect on foam cell formation and gene expression, containing no pharmacokinetic parameters. |
| popPK | Tsuchimochi_2015 | irrelevant | 1 | 0 | The study is a pharmacodynamic assessment of glycemic control and gut hormones, not a pharmacokinetic study, and does not report quantitative disposition parameters (CL, V, Q, ka) for teneligliptin. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study focuses on the mechanistic effects of teneligliptin on bile acid synthesis and lipid accumulation, not on pharmacokinetic disposition parameters. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The study is a mechanistic investigation of therapeutic effects on cognitive impairment in mice and does not report any pharmacokinetic parameters for teneligliptin. |
| popPK | Yamamoto_2018 | irrelevant | 0 | 0 | The study is a mechanistic/efficacy trial in rats focusing on cardiac outcomes, not a pharmacokinetic study reporting quantitative disposition parameters for teneligliptin. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cellular protection and does not report any pharmacokinetic parameters for teneligliptin. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper is a mechanistic study on neuroprotection and does not report any pharmacokinetic parameters for teneligliptin. |
| PD | Zhu_2023 | not_relevant | 2 | 1 | The paper is a network meta-analysis comparing clinical outcomes (HbA1c, FPG) across different drugs and doses, but it does not report a pharmacokinetic-pharmacodynamic (PK/PD) model, exposure-response relationship, or numeric PD parameters like Emax or EC50. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_teneligliptin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
