<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;imeglimin&quot;}]"></div>

# imeglimin

- **generic name:** imeglimin
- **ATC codes:** `A10BX15`
- **DrugBank:** [DB12509](https://go.drugbank.com/drugs/DB12509)
- **groups:** investigational

## About

**Description.** Imeglimin has been used in trials studying the treatment of Type 2 Diabetes Mellitus.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-14 21:10 | 18:14 | 0/0/0 | 0/0/0 | 0/0/0 | 122,068/10,292 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 1/12 | 13/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=imeglimin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PRKAA1 (modulator), PRKAB1 (modulator), PRKAG1 (modulator).</sub>

## Coverage

- **PubMed hits:** 34 matched, 52 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tomita_2022.pdf` | Tomita Y et al., Imeglimin population pharmacokinetics a…, Clinical and translational… (2022) | popPK | 10 | [10.1111/cts.13221](https://doi.org/10.1111/cts.13221) | [34962074](https://pubmed.ncbi.nlm.nih.gov/34962074) | The paper is a population PK study for imeglimin, but the provided evidence contains only the abstract and qualitative descriptions, with no specific numeric parameter values (CL, V, etc.) present. |
| `Kitamura_2023.pdf` | Kitamura A et al., Pharmacokinetics and Safety of Imeglimi…, Journal of clinical pharmac… (2023) | popPK | 8 | [10.1002/jcph.2218](https://doi.org/10.1002/jcph.2218) | [36847203](https://pubmed.ncbi.nlm.nih.gov/36847203) | The study reports PK parameters for imeglimin, but the specific numeric values are not present in the provided text, which only describes trends and qualitative findings. |

<sub>queue written 2026-09-14T21:10:16.478633+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alamer_2023 | irrelevant | 0 | 0 | The study focuses on the formulation and in-vitro characterization of imeglimin nanofibers, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Alamer_2023 | not_relevant | 0 | 0 | The paper focuses on the formulation and in vitro characterization of imeglimin nanofibers, reporting no pharmacodynamic or exposure-response data. |
| popPK | Aoyagi_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on mitochondrial quality control and beta-cell function in mice, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for imeglimin. |
| PD | Barseem_2025 | not_relevant | 0 | 0 | The paper describes a smartphone-based colorimetric analytical method for quantifying imeglimin concentration in pharmaceutical formulations, not a pharmacodynamic or exposure-response study. |
| popPK | Chevalier_2020 | irrelevant | 2 | 0 | The study reports only relative changes in Cmax and AUC for a drug-drug interaction assessment, lacking absolute quantitative disposition parameters (CL, V, ka) or a compartmental model for imeglimin. |
| popPK | Chevalier_2023 | irrelevant | 2 | 0 | The paper is a clinical pharmacology review that summarizes properties but does not provide original quantitative compartmental PK parameters (CL, V, Q, ka) or population model estimates for imeglimin. |
| PD | Chevalier_2023 | not_relevant | 1 | 0 | The text is a clinical pharmacology review focusing exclusively on pharmacokinetics, absorption mechanisms, and drug-drug interactions, with no mention of pharmacodynamic models, exposure-response relationships, or numeric PD parameters. |
| popPK | Clémence_2020 | irrelevant | 2 | 0 | The provided evidence is an abstract that describes qualitative PK properties (absorption, distribution, excretion) but contains no quantitative numeric parameter values (CL, V, ka, etc.) for imeglimin. |
| popPK | Dubourg_2022 | irrelevant | 0 | 0 | The paper is a Phase 3 clinical trial reporting safety and efficacy (HbA1c) outcomes, not a pharmacokinetic study, and contains no quantitative PK parameters for imeglimin. |
| popPK | Fouqueray_2020 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of metformin and sitagliptin as the subject drugs in a drug-drug interaction trial, and while imeglimin is co-administered, no quantitative disposition parameters (CL, V, ka, etc.) for imeglimin are reported in the evidence. |
| popPK | Fujisawa_2025 | irrelevant | 0 | 0 | The paper is a real-world effectiveness and safety study reporting clinical outcomes (HbA1c, adverse events) rather than pharmacokinetic parameters. |
| popPK | Giruzzi_2021 | irrelevant | 0 | 0 | The evidence contains only the drug name "Imeglimin" with no pharmacokinetic data, study details, or numeric parameters. |
| PD | Gupta_2023 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and qualitative in vivo dose-dependent effects, but lacks a formal PK/PD model or quantitative exposure-response analysis for imeglimin. |
| popPK | Hagi_2026 | irrelevant | 0 | 0 | The paper is a machine learning analysis of clinical trial efficacy data (HbA1c predictors) and does not report any pharmacokinetic parameters for imeglimin. |
| popPK | Huang_2026 | irrelevant | 2 | 0 | The paper is a methodological study on a coupled PK model using generic drugs or simulations, and while it cites an imeglimin study, it does not report original quantitative PK parameters for imeglimin. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper focuses on a coupled pharmacokinetic (PK) model for drug-drug interactions (metoprolol and captopril) and does not report any pharmacodynamic (PD) or exposure-response relationships for imeglimin. |
| popPK | Inoue_2025 | irrelevant | 0 | 0 | The paper investigates the mechanistic effects of imeglimin on beta-cell proliferation and apoptosis, not its pharmacokinetic disposition parameters. |
| popPK | Ishiguro_2025 | irrelevant | 0 | 0 | The paper focuses on mechanistic effects on mitochondrial function and gene expression, not pharmacokinetic parameters. |
| popPK | Kaji_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on mitochondrial function and MASH in mice, reporting no pharmacokinetic parameters for imeglimin. |
| popPK | Kitamura_2023 | relevant | 8 | 2 | The study reports PK parameters for imeglimin, but the specific numeric values are not present in the provided text, which only describes trends and qualitative findings. |
| popPK | Kogame_2019 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of fasiglifam (TAK-875), not imeglimin. |
| popPK | Kuznetsov_2022 | irrelevant | 2 | 1 | The paper is a review of the mechanism of action and clinical efficacy, not a pharmacokinetic study, and only mentions Tmax and half-life without providing quantitative disposition parameters like clearance or volume. |
| popPK | Lachaux_2020 | irrelevant | 0 | 0 | The study is a mechanistic/efficacy investigation in rats focusing on cardiorenal function and oxidative stress, with no pharmacokinetic parameters reported. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The paper studies fasiglifam (TAK-875), not imeglimin, and focuses on transporter inhibition mechanisms rather than PK parameters. |
| popPK | Li_2018 | irrelevant | 0 | 0 | The paper focuses on the discovery of FFA1 agonists (compound 11) and does not study imeglimin as the subject drug. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on MASLD in mice and human cells, reporting no pharmacokinetic parameters for imeglimin. |
| popPK | Liu_2018 | irrelevant | 0 | 0 | The study focuses on the drug HWL-066 (an FFA1 agonist), not imeglimin. |
| popPK | Lu_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on traumatic brain injury and microglia where imeglimin is used as a therapeutic agent, not a pharmacokinetic study reporting disposition parameters. |
| PD | Mansour_2026 | not_relevant | 0 | 0 | The paper describes an analytical HPLC method for quantifying imeglimin and its impurities, containing no pharmacodynamic or exposure-response data. |
| popPK | Molloy_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fasiglifam (TAK-875) in rats, not imeglimin. |
| popPK | Nihei_2026 | irrelevant | 0 | 0 | The study is a mechanistic/efficacy trial in rats focusing on neuropathy outcomes, not a pharmacokinetic study, and reports no PK parameters. |
| popPK | Pacini_2015 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (insulin secretion and beta-cell function) rather than pharmacokinetic disposition parameters for imeglimin. |
| popPK | Paskeviciene_2025 | irrelevant | 0 | 0 | The study is mechanistic/in-vitro and animal-based, focusing on mitochondrial function and ischemic brain injury, with no pharmacokinetic parameters reported. |
| PD | Permana_2024 | not_relevant | 3 | 2 | The paper is a meta-analysis of clinical trials reporting dose-response trends (HbA1c reduction vs. dose) but does not provide a pharmacodynamic model, concentration-effect relationship, or specific numeric PD parameters like Emax or EC50. |
| popPK | Qiang_2019 | irrelevant | 0 | 0 | The study investigates TAK-875, not imeglimin. |
| popPK | Rezk_2026 | relevant | 4 | 5 | The study reports non-compartmental PK parameters (AUC, Cmax, t1/2) for imeglimin, but lacks compartmental model parameters (CL, V, Q) and specific numeric values for t1/2 and kel are not explicitly listed in the provided text. |
| popPK | Saboo_2026 | irrelevant | 0 | 0 | The study is a real-world clinical cohort evaluating glycemic efficacy and safety, reporting no pharmacokinetic parameters. |
| popPK | Sanada_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on atherosclerosis in mice and does not report any pharmacokinetic parameters for imeglimin. |
| popPK | Shi_2026 | irrelevant | 0 | 0 | The study investigates the effects of imeglimin on circadian clock gene expression in mice and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Siam_2024 | irrelevant | 0 | 0 | The paper is a review of diabetes and cardiovascular disease epidemiology and pathophysiology, mentioning imeglimin only as a therapeutic agent without reporting any pharmacokinetic parameters. |
| popPK | Sugawara_2025 | irrelevant | 0 | 0 | The study focuses on intestinal gene expression, microbiota, and glucose dynamics rather than pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PD | Sugawara_2025 | not_relevant | 0 | 0 | The paper investigates intestinal mechanisms (RNA-seq, microbiome, glucose dynamics) using fixed doses or concentrations without modeling a concentration-effect relationship or reporting PD parameters. |
| popPK | Tajima_2026 | irrelevant | 0 | 0 | The study focuses on glucose metabolism and insulin sensitivity (pharmacodynamics) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for imeglimin. |
| popPK | Tomita_2022 | relevant | 10 | 0 | The paper is a population PK study for imeglimin, but the provided evidence contains only the abstract and qualitative descriptions, with no specific numeric parameter values (CL, V, etc.) present. |
| PD | Tomita_2022 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetics (PK) and dose adjustment based on renal function, with no pharmacodynamic (PD) or exposure-response analysis reported. |
| popPK | Tsuno_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on alpha-cell biology and glucagon secretion, containing no pharmacokinetic parameters or disposition data for imeglimin. |
| popPK | Usui_2025 | irrelevant | 0 | 0 | The study is a clinical trial focusing on insulin and incretin secretion mechanisms, not pharmacokinetics, and reports no PK parameters for imeglimin. |
| popPK | Ye_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on skeletal muscle atrophy and does not report any pharmacokinetic parameters for imeglimin. |
| popPK | Yendapally_2020 | irrelevant | 2 | 0 | The paper is a review article that discusses imeglimin's pharmacokinetics generally but does not provide specific quantitative disposition parameters (CL, V, etc.) in the provided evidence. |
| popPK | unknown_2026 | irrelevant | 0 | 0 | The evidence contains only a conference title and no pharmacokinetic data or parameters for imeglimin. |
| PD | unknown_2026 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no pharmacodynamic data, models, or parameters for imeglimin. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_imeglimin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
