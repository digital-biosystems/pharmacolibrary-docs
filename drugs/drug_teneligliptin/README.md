<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;teneligliptin&quot;}]"></div>

# teneligliptin

- **generic name:** teneligliptin
- **ATC codes:** `A10BD28`, `A10BH08`
- **DrugBank:** [DB11950](https://go.drugbank.com/drugs/DB11950) · **PubChem:** [CID 11949652](https://pubchem.ncbi.nlm.nih.gov/compound/11949652)
- **molar mass:** 426.578 g/mol (C22H30N6OS) — DrugBank
- **groups:** investigational

## About

Teneligliptin is a DPP-4 inhibitor developed to lower blood glucose in adults with type 2 diabetes. It is not authorised in the European Union and is considered investigational there, though it is used in some Asian countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15269678](https://www.wikidata.org/wiki/Q15269678) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 04:50 | 4:13 | 0/0/0 | 0/0/0 | 0/2/0 | 148,290/4,318 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 3/14 | 15/1 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red" title="not accepted.">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓ 2/2</span> | **CYP3A4** | `Q22` · CL | metabolism | [Park_2021](drugs/drug_teneligliptin/pgx_Park_2021_CYP3A4_Q22.md) | Park JW et al., Influence of, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.736317](https://doi.org/10.3389/fphar.2021.736317) |
| <span class="pk-badge pk-badge--red" title="not accepted.">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓ 2/2</span> | **FMO3** | `Q22` · CL | metabolism | [Park_2021](drugs/drug_teneligliptin/pgx_Park_2021_FMO3_Q22.md) | Park JW et al., Influence of, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.736317](https://doi.org/10.3389/fphar.2021.736317) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=teneligliptin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` metabolism, `FMO3` metabolism | paper PGx gene |
| metabolism | small intestine | `CYP3A4` metabolism | paper PGx gene |

<sub>Actors without a tissue in the table: DPP4 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 306 matched, 77 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nakamaru_2015.pdf` | Nakamaru Y et al., Human pharmacokinetic profiling of the…, Biopharmaceutics & drug dis… (2015) | popPK | 9 | [10.1002/bdd.1928](https://doi.org/10.1002/bdd.1928) | [25450725](https://pubmed.ncbi.nlm.nih.gov/25450725) | The paper describes a PBPK model for teneligliptin and reports specific absorption parameters (fraction absorbed 0.62, intestinal availability 0.99), but lacks standard disposition parameters like clearance, volume, or half-life in the provided text. |
| `Nakamaru_2014.pdf` | Nakamaru Y et al., Effect of ketoconazole on the pharmacok…, Clinical therapeutics (2014) | pgx | 7 | [10.1016/j.clinthera.2014.03.002](https://doi.org/10.1016/j.clinthera.2014.03.002) | [24726088](https://www.ncbi.nlm.nih.gov/pubmed/24726088) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Park_2019.pdf` | Park JW et al., Effect of glimepiride on the pharmacoki…, Journal of clinical pharmac… (2019) | pgx | 7 | [10.1111/jcpt.12848](https://doi.org/10.1111/jcpt.12848) | [31094010](https://www.ncbi.nlm.nih.gov/pubmed/31094010) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-05T04:49:46.365747+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Abubaker_2017 | not_relevant | 1 | 0 | The paper is a narrative review discussing clinical efficacy and safety in diabetic kidney disease, but it does not report any specific pharmacodynamic models, exposure-response analyses, or numeric PD parameters (e.g., Emax, EC50) for teneligliptin. |
| popPK | Agrawal_2020 | irrelevant | 0 | 0 | The paper is a case report on an adverse effect (hair loss) and contains no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Al_2024 | irrelevant | 0 | 0 | The paper is an editorial/commentary discussing molecular mechanisms of cardioprotection, not a pharmacokinetic study, and contains no quantitative PK parameters. |
| popPK | Alotaiq_2024 | irrelevant | 0 | 0 | The paper is a systematic review of virtual bioequivalence methods and does not report specific quantitative pharmacokinetic parameters for teneligliptin. |
| PD | Alotaiq_2024 | not_relevant | 0 | 0 | The paper is a systematic review of virtual bioequivalence and PBPK modeling methods, containing no specific pharmacodynamic or exposure-response data for teneligliptin. |
| PD | Arulmozhiraja_2016 | not_relevant | 0 | 0 | The paper is a computational study (FMO-QM) analyzing molecular binding interactions and energies; it does not report in vivo pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters like Emax or EC50 for teneligliptin. |
| PD | Carnovale_2019 | not_relevant | 2 | 1 | The paper performs a pharmacovigilance signal analysis (ROR) and a linear regression correlating adverse event signals with static PK/PD properties (affinity, Vd), but it does not report an exposure-response or dose-response curve with numeric PD parameters (e.g., Emax, EC50) for teneligliptin. |
| popPK | Carpio_2025 | irrelevant | 0 | 0 | The paper describes a QSAR web server for predicting DPP4 inhibitory activity (IC50) and does not report pharmacokinetic parameters for teneligliptin. |
| PD | Carpio_2025 | not_relevant | 0 | 0 | The paper describes a QSAR web server for predicting DPP4 inhibitors and does not report any pharmacodynamic or exposure-response data for teneligliptin. |
| PD | Chen_2015 | not_relevant | 2 | 0 | The text is a general review of the DPP-4 inhibitor class and does not provide specific numeric PD parameters or exposure-response data for teneligliptin. |
| popPK | Cheng_2024 | irrelevant | 0 | 0 | The paper is a commentary on the mechanism of action (inflammasome inhibition) of teneligliptin in diabetic cardiomyopathy and does not report any pharmacokinetic parameters. |
| PD | Chowdhury_2021 | not_relevant | 1 | 0 | The paper is a qualitative expert review summarizing clinical efficacy and safety without reporting specific numeric pharmacodynamic parameters or exposure-response models. |
| popPK | De_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cellular effects (oxidative stress, apoptosis) and does not report any pharmacokinetic parameters. |
| popPK | Ema_2026 | irrelevant | 0 | 0 | The study is a mechanistic investigation of ferroptosis and acute kidney injury in vitro and in vivo, reporting no pharmacokinetic parameters for teneligliptin. |
| popPK | Fernandez_2024 | irrelevant | 0 | 0 | The paper is an editorial discussing the pathobiology of diabetic cardiomyopathy and a preclinical study on teneligliptin's therapeutic effects, containing no pharmacokinetic parameters. |
| PD | Ghosh_2020 | not_relevant | 0 | 0 | The paper is a retrospective real-world effectiveness study reporting mean changes in glycemic parameters (HbA1c, FPG, PPG) over time; it does not report any pharmacokinetic data, exposure-response relationships, or formal pharmacodynamic modeling parameters (e.g., Emax, EC50). |
| PD | Goak_2022 | not_relevant | 0 | 0 | The study is a bioequivalence trial reporting only pharmacokinetic parameters (AUC, Cmax) and safety, with no pharmacodynamic or exposure-response analysis. |
| PD | Goda_2013 | not_relevant | 2 | 0 | The text is a qualitative review summarizing PK properties and clinical efficacy without providing specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect data. |
| popPK | Gosho_2018 | irrelevant | 0 | 0 | The study is a pharmacovigilance database analysis of hypoglycemia risk and does not report any pharmacokinetic parameters for teneligliptin. |
| popPK | Guo_2024 | irrelevant | 0 | 0 | The paper is a mechanistic review of teneligliptin's effect on the NLRP3 inflammasome in diabetic cardiomyopathy and does not report any pharmacokinetic parameters. |
| popPK | Hashikata_2016 | irrelevant | 0 | 0 | The study evaluates cardiovascular and metabolic effects (LV function, HbA1c) rather than pharmacokinetic parameters. |
| popPK | Hayakawa_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic analysis of HbA1c changes using machine learning on electronic medical records, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Hiromura_2018 | irrelevant | 0 | 0 | The study is a mechanistic investigation of anti-inflammatory effects in macrophages and does not report pharmacokinetic parameters for teneligliptin. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The study is a mechanistic investigation of neuroprotective effects in cell lines and animal models, reporting no pharmacokinetic parameters. |
| PD | Huang_2025 | not_relevant | 1 | 0 | The paper describes qualitative mechanistic effects and behavioral improvements in cell and animal models but does not report quantitative exposure-response or dose-response curves with numeric PD parameters. |
| popPK | Inoue_2019 | irrelevant | 0 | 0 | The study is a model-based meta-analysis of pharmacodynamic effects (FPG and HbA1c) of antidiabetic drugs, not a pharmacokinetic study reporting disposition parameters for teneligliptin. |
| PD | Inoue_2019 | not_relevant | 0 | 0 | The paper is a model-based meta-analysis comparing drug classes and does not report specific exposure-response or dose-response PD parameters for teneligliptin. |
| popPK | Isogawa_2024 | irrelevant | 0 | 0 | The study is a clinical trial comparing metabolic effects (weight, energy intake) of canagliflozin and teneligliptin, not a pharmacokinetic study, and reports no PK parameters. |
| popPK | Ji_2021 | irrelevant | 0 | 0 | The study is a Phase III efficacy and safety trial reporting HbA1c and glucose changes, with no pharmacokinetic parameters or disposition data provided. |
| popPK | Kadowaki_2018 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety analysis of teneligliptin dosing in type 2 diabetes and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Kadowaki_2020 | irrelevant | 0 | 0 | The paper is a post-marketing safety and efficacy surveillance study reporting adverse events and HbA1c changes, containing no pharmacokinetic parameters. |
| PD | Kinoshita_2015 | not_relevant | 2 | 1 | The study reports PK interaction data and qualitative changes in GLP-1 levels (mean AUCs) but does not provide a concentration-effect model, dose-response curve, or numeric PD parameters (e.g., Emax, EC50) for teneligliptin. |
| PD | Kishimoto_2013 | not_relevant | 1 | 0 | The text is a general review describing the drug's mechanism, dosage, and qualitative clinical effects without providing any numeric PD parameters, concentration-effect curves, or formal PK/PD modeling data. |
| popPK | Kuthati_2021 | irrelevant | 0 | 0 | The study investigates the antinociceptive pharmacological effects of teneligliptin in a rat pain model and does not report any pharmacokinetic parameters. |
| popPK | Kutoh_2016 | irrelevant | 0 | 0 | The study reports clinical efficacy and insulin sensitivity indices (HOMA-R, HbA1c) but contains no pharmacokinetic parameters (CL, V, ka, etc.) for teneligliptin. |
| PD | Lee_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of semaglutide in diabetic neuropathic pain and does not report any pharmacodynamic or exposure-response analysis for teneligliptin. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The study is a mechanistic investigation of vasodilation in aortic rings and does not report any pharmacokinetic parameters for teneligliptin. |
| popPK | Liu_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of teneligliptin's protective effects on dental pulp cells and does not report any pharmacokinetic parameters. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy and safety outcomes (HbA1c, BP, etc.) for diabetes treatments in CKD, not a pharmacokinetic study, and it does not report PK parameters for teneligliptin. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for teneligliptin. |
| popPK | Mohammadi_2024 | irrelevant | 0 | 0 | The paper is an editorial discussing the mechanistic effects of teneligliptin on macrophages and diabetic cardiomyopathy, containing no pharmacokinetic data or disposition parameters. |
| popPK | Muddather_2026 | irrelevant | 0 | 0 | The paper is a review of DPP-4 inhibitors in cancer and does not report quantitative pharmacokinetic parameters for teneligliptin. |
| PD | Muddather_2026 | not_relevant | 1 | 0 | The text is a narrative review summarizing epidemiological and preclinical evidence without reporting specific PK/PD models or numeric exposure-response parameters for teneligliptin. |
| PGx | Nakamaru_2014 | not_relevant | 0 | 0 | The paper describes general metabolism and disposition in healthy subjects without reporting any pharmacogenomic effects or genotype-specific PK/PD parameters. |
| PGx | Nakamaru_2014_2 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (ketoconazole) and in vitro P-gp transport, not the effect of a specific gene variant or genotype on pharmacokinetics. |
| popPK | Nakamaru_2015 | relevant | 9 | 2 | The paper describes a PBPK model for teneligliptin and reports specific absorption parameters (fraction absorbed 0.62, intestinal availability 0.99), but lacks standard disposition parameters like clearance, volume, or half-life in the provided text. |
| PD | Ortiz-Seller_2026 | not_relevant | 0 | 0 | The paper is a network meta-analysis of clinical outcomes (diabetic retinopathy) and explicitly reports no dose-response relationship; it does not contain pharmacokinetic or pharmacodynamic modeling or numeric PD parameters for teneligliptin. |
| PD | Pandya_2025 | not_relevant | 0 | 0 | The paper is a review of analytical methods for quantifying drugs and does not report any pharmacodynamic or exposure-response data. |
| popPK | Panikar_2022 | irrelevant | 0 | 0 | The study reports clinical efficacy outcomes (HbA1c, blood glucose) rather than pharmacokinetic parameters. |
| popPK | Park_2019 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PGx | Park_2019 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (glimepiride) rather than a pharmacogenomic effect (gene variant/genotype). |
| PD | Park_2021 | not_relevant | 0 | 0 | The study reports pharmacokinetic parameters (Cmax, AUC) influenced by genetic polymorphisms but does not report any pharmacodynamic (exposure-response or dose-response) data or parameters. |
| popPK | Pelluri_2024 | irrelevant | 0 | 0 | The study reports clinical efficacy outcomes (GLP-1, HOMA-IR, body weight) rather than pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Prajapati_2025 | not_relevant | 1 | 0 | The paper focuses on the development of an analytical method and mentions pharmacodynamic evaluation but does not provide specific numeric PD parameters or exposure-response data in the abstract. |
| popPK | Pujadas_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of teneligliptin's antioxidant effects on endothelial cells and does not report pharmacokinetic disposition parameters. |
| popPK | Saghir_2020 | irrelevant | 0 | 0 | The paper is a review of chloroquine and hydroxychloroquine for COVID-19 and does not contain any pharmacokinetic data for teneligliptin. |
| PD | Saghir_2020 | not_relevant | 0 | 0 | The paper is a review of chloroquine and hydroxychloroquine for COVID-19 and does not contain any pharmacodynamic or exposure-response data for teneligliptin. |
| popPK | Saghir_2021 | irrelevant | 0 | 0 | The paper is a review of chloroquine and hydroxychloroquine for COVID-19 and does not contain any pharmacokinetic data for teneligliptin. |
| PD | Saghir_2021 | not_relevant | 0 | 0 | The paper is a review of chloroquine and hydroxychloroquine for COVID-19 and does not contain any pharmacodynamic or exposure-response data for teneligliptin. |
| popPK | Salim_2017 | irrelevant | 0 | 0 | The study is a mechanistic investigation of atherosclerosis and inflammation in mice, reporting no pharmacokinetic parameters for teneligliptin. |
| PD | Sharma_2020 | not_relevant | 1 | 0 | The paper is a review focusing on chemistry, analysis, and general pharmacology, lacking specific numeric PD parameters or exposure-response data for teneligliptin. |
| PD | Sura_2026 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel compounds and mentions teneligliptin only as a reference standard, without providing any exposure-response or dose-response data for teneligliptin itself. |
| popPK | Takami_2026 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse event reports (pemphigoid) and does not contain any pharmacokinetic parameters for teneligliptin. |
| popPK | Takenaka_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of PPARγ activation and adipogenesis, reporting no pharmacokinetic parameters. |
| popPK | Tanaka_2019 | irrelevant | 0 | 0 | The paper is a pharmacovigilance database analysis of adverse drug events (pemphigoid) and contains no pharmacokinetic parameters for teneligliptin. |
| popPK | Terasaki_2020 | irrelevant | 0 | 0 | The study is a mechanistic investigation of teneligliptin's effect on foam cell formation and gene expression in macrophages, not a pharmacokinetic study. |
| popPK | Tsuchimochi_2015 | irrelevant | 1 | 0 | The study is a pharmacodynamic assessment of teneligliptin's effect on glucose and gut hormones, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, Q, ka) for the drug itself. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study focuses on the mechanistic effects of teneligliptin on bile acid synthesis and lipid accumulation in mice, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The study is a mechanistic investigation of teneligliptin's therapeutic effects on cognitive impairment in mice and does not report any pharmacokinetic parameters. |
| popPK | Yamamoto_2018 | irrelevant | 0 | 0 | The study is a pharmacodynamic/efficacy trial in rats focusing on cardiac function and histology, with no pharmacokinetic parameters reported. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cellular protection and does not report any pharmacokinetic parameters. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The study focuses on the neuroprotective mechanism of teneligliptin in ischemia/reperfusion injury and does not report pharmacokinetic parameters. |
| PD | Zhu_2023 | not_relevant | 2 | 1 | The paper is a network meta-analysis comparing clinical outcomes (HbA1c, FPG) across different drugs and doses, but it does not report a pharmacokinetic-pharmacodynamic (PK/PD) model, exposure-response relationship, or numeric PD parameters like Emax or EC50. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
