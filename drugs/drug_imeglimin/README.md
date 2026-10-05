<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;imeglimin&quot;}]"></div>

# imeglimin

- **generic name:** imeglimin
- **ATC codes:** `A10BX15`
- **DrugBank:** [DB12509](https://go.drugbank.com/drugs/DB12509) · **PubChem:** [CID 24812808](https://pubchem.ncbi.nlm.nih.gov/compound/24812808)
- **molar mass:** 155.205 g/mol (C6H13N5) — DrugBank
- **groups:** investigational

## About

Imeglimin is a blood glucose lowering drug investigated for diabetes. It is classed as investigational and is not an approved medicine in major databases.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6003719](https://www.wikidata.org/wiki/Q6003719) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 00:09 | 4:15 | 0/0/0 | 0/0/0 | 0/0/0 | 164,337/3,305 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 2/12 | 11/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=imeglimin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PRKAA1 (modulator), PRKAB1 (modulator), PRKAG1 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 56 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tomita_2022.pdf` | Tomita Y et al., Imeglimin population pharmacokinetics a…, Clinical and translational… (2022) | popPK | 10 | [10.1111/cts.13221](https://doi.org/10.1111/cts.13221) | [34962074](https://pubmed.ncbi.nlm.nih.gov/34962074) | The paper describes a population PK study for imeglimin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Chevalier_2021.pdf` | Chevalier C et al., Pharmacokinetics of Imeglimin in Subjec…, Clinical pharmacokinetics (2021) | popPK | 8 | [10.1007/s40262-020-00948-1](https://doi.org/10.1007/s40262-020-00948-1) | [33169345](https://pubmed.ncbi.nlm.nih.gov/33169345) | The study reports PK parameters for imeglimin in humans, but the evidence only provides relative fold-changes (Cmax/AUC ratios) and not the absolute quantitative values (CL, V, t1/2) required for extraction. |
| `Kitamura_2023.pdf` | Kitamura A et al., Pharmacokinetics and Safety of Imeglimi…, Journal of clinical pharmac… (2023) | popPK | 8 | [10.1002/jcph.2218](https://doi.org/10.1002/jcph.2218) | [36847203](https://pubmed.ncbi.nlm.nih.gov/36847203) | The study reports PK parameters for imeglimin in humans, but the specific numeric values are not present in the provided text, only qualitative descriptions and trends. |
| `Wadie_2026.pdf` | Wadie M et al., A Novel Ultra-Performance Liquid Chroma…, Analytical science advances (2026) | popPK | 8 | [10.1002/ansa.70079](https://doi.org/10.1002/ansa.70079) | [41947975](https://pubmed.ncbi.nlm.nih.gov/41947975) | The paper describes a bioequivalence study for imeglimin in humans and mentions the calculation of pharmacokinetic parameters, but the specific numeric values are not present in the provided evidence. |

<sub>queue written 2026-10-05T00:08:25.666309+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alamer_2023 | irrelevant | 0 | 0 | The study focuses on the formulation and in-vitro characterization of imeglimin nanofibers, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Alamer_2023 | not_relevant | 0 | 0 | The paper focuses on the formulation and in vitro characterization of imeglimin nanofibers, reporting no pharmacodynamic or exposure-response data. |
| popPK | Aoyagi_2024 | irrelevant | 0 | 0 | The study is a mechanistic investigation of mitochondrial quality control and insulin secretion in db/db mice, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for imeglimin. |
| popPK | Barseem_2025 | irrelevant | 0 | 0 | The paper describes an analytical method for quantifying imeglimin in pharmaceutical formulations, not a pharmacokinetic study. |
| PD | Barseem_2025 | not_relevant | 0 | 0 | The paper describes a smartphone-based colorimetric analytical method for quantifying imeglimin concentration, not a pharmacodynamic or exposure-response study. |
| popPK | Chevalier_2020 | irrelevant | 2 | 0 | The study reports only relative changes (fold-increase) in Cmax and AUC for a drug-drug interaction assessment, without providing absolute quantitative disposition parameters (CL, V, ka, t1/2) for imeglimin. |
| popPK | Chevalier_2021 | relevant | 8 | 2 | The study reports PK parameters for imeglimin in humans, but the evidence only provides relative fold-changes (Cmax/AUC ratios) and not the absolute quantitative values (CL, V, t1/2) required for extraction. |
| popPK | Chevalier_2023 | irrelevant | 2 | 0 | This is a clinical pharmacology review that summarizes properties but does not provide original quantitative disposition parameters (CL, V, Q, ka) or a compartmental model, only mentioning a half-life range. |
| PD | Chevalier_2023 | not_relevant | 1 | 0 | The text is a clinical pharmacology review focusing exclusively on pharmacokinetics, absorption mechanisms, and drug-drug interactions, with no mention of pharmacodynamic models, exposure-response relationships, or numeric PD parameters. |
| popPK | Clémence_2020 | irrelevant | 2 | 0 | The abstract describes qualitative PK characteristics (absorption %, distribution, excretion) but does not provide specific quantitative disposition parameters (CL, V, ka, t1/2) or compartmental model values in the provided text. |
| popPK | Dubourg_2022 | irrelevant | 0 | 0 | The paper is a Phase 3 clinical trial reporting safety and efficacy (HbA1c) outcomes, not a pharmacokinetic study with disposition parameters. |
| popPK | Fouqueray_2020 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of metformin and sitagliptin, and while it mentions imeglimin exposure, it does not report specific quantitative disposition parameters (CL, V, ka) for imeglimin itself. |
| popPK | Fujisawa_2025 | irrelevant | 0 | 0 | The study is a retrospective clinical trial evaluating efficacy and safety (HbA1c, adverse events) and does not report pharmacokinetic parameters. |
| popPK | Giruzzi_2021 | irrelevant | 0 | 0 | no_text gate: only 9 chars of text extracted (&lt; 400) |
| popPK | Gupta_2023 | irrelevant | 0 | 0 | The paper focuses on the discovery of novel DPP-4 inhibitors inspired by imeglimin, not on the pharmacokinetics of imeglimin itself. |
| PD | Gupta_2023 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and qualitative in vivo dose-dependent effects, but lacks a formal PK/PD model or quantitative exposure-response analysis for imeglimin. |
| popPK | Hagi_2026 | irrelevant | 0 | 0 | The study focuses on machine learning predictors of glycemic control (HbA1c) and does not report pharmacokinetic parameters. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper describes a general methodological framework for drug-drug interaction modeling and does not report specific pharmacokinetic parameters for imeglimin. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper focuses on a coupled pharmacokinetic (PK) model for drug-drug interactions (metoprolol and captopril) and does not report any pharmacodynamic (PD) or exposure-response relationships for imeglimin. |
| popPK | Inoue_2025 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of imeglimin on beta-cell proliferation and apoptosis, not its pharmacokinetic disposition parameters. |
| popPK | Ishiguro_2025 | irrelevant | 0 | 0 | The study focuses on mechanistic effects on mitochondrial function and gene expression, not pharmacokinetic parameters. |
| popPK | Kaji_2024 | irrelevant | 0 | 0 | The study is a mechanistic investigation of imeglimin's effects on mitochondrial function and liver pathology in a mouse model, reporting no pharmacokinetic parameters. |
| popPK | Kitamura_2023 | relevant | 8 | 2 | The study reports PK parameters for imeglimin in humans, but the specific numeric values are not present in the provided text, only qualitative descriptions and trends. |
| popPK | Kogame_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fasiglifam (TAK-875), not imeglimin. |
| popPK | Kuznetsov_2022 | irrelevant | 2 | 1 | The paper is a review of the mechanism of action and clinical efficacy, mentioning only basic PK parameters (Tmax, half-life) without reporting quantitative disposition parameters like clearance, volume, or compartmental models. |
| popPK | Lachaux_2020 | irrelevant | 0 | 0 | The study is a mechanistic investigation of cardiorenal effects in rats and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The study focuses on the hepatotoxicity mechanisms of fasiglifam (TAK-875) in rats and does not involve imeglimin. |
| popPK | Li_2018 | irrelevant | 0 | 0 | The paper describes the discovery of FFA1 agonists (compound 11) and compares them to TAK-875, not imeglimin. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study is a mechanistic investigation of imeglimin's therapeutic effects on MASLD in mice and does not report pharmacokinetic parameters. |
| popPK | Liu_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of HWL-066 (an FFA1 agonist), not imeglimin. |
| popPK | Lu_2026 | irrelevant | 0 | 0 | The study investigates the neuroprotective mechanism of imeglimin in traumatic brain injury models and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for the drug. |
| popPK | Mansour_2026 | irrelevant | 0 | 0 | The paper describes an analytical HPLC method for quantifying imeglimin and its degradation products, not a pharmacokinetic study reporting disposition parameters. |
| PD | Mansour_2026 | not_relevant | 0 | 0 | The paper describes a stability-indicating HPLC method for quantifying imeglimin in tablets and does not contain any pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Mima_2023 | irrelevant | 0 | 0 | The study reports safety and efficacy (glucose, lipids, liver enzymes) but contains no pharmacokinetic parameters (CL, V, ka, etc.) for imeglimin. |
| popPK | Molloy_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fasiglifam (TAK-875) in rats, not imeglimin. |
| popPK | Nihei_2026 | irrelevant | 0 | 0 | The study is a pharmacodynamic/toxicology assessment of imeglimin's effect on diabetic neuropathy in rats and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Nowak_2022 | irrelevant | 2 | 1 | This is a review article that summarizes general pharmacokinetic properties (half-life, bioavailability) without reporting original quantitative compartmental parameters (CL, V, Q, ka) or population PK model estimates. |
| popPK | Pacini_2015 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (insulin secretion and beta-cell function) rather than pharmacokinetic disposition parameters (CL, V, ka) for imeglimin. |
| popPK | Paskeviciene_2025 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of imeglimin on mitochondrial function and ischemic brain injury in rats, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Permana_2024 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy (HbA1c reduction) and safety, containing no pharmacokinetic parameters or disposition data for imeglimin. |
| PD | Permana_2024 | not_relevant | 3 | 2 | The paper is a meta-analysis of clinical trials reporting dose-response trends (HbA1c reduction vs. dose) but does not provide a pharmacodynamic model, concentration-effect relationship, or specific numeric PD parameters like Emax or EC50. |
| popPK | Qiang_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of TAK-875, not imeglimin. |
| popPK | Rezk_2026 | relevant | 4 | 5 | The study reports non-compartmental PK parameters (AUC, Cmax, t1/2) for imeglimin in humans, but lacks compartmental model parameters (CL, V, Q) and specific numeric values for t1/2 are not explicitly listed in the provided text (only mentioned as estimated from the 72h window). |
| popPK | Saboo_2026 | irrelevant | 0 | 0 | The study is a clinical efficacy and safety cohort reporting HbA1c changes, not a pharmacokinetic study with disposition parameters. |
| popPK | Sanada_2024 | irrelevant | 0 | 0 | The study investigates the anti-atherosclerotic effects of imeglimin in mice and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Shi_2026 | irrelevant | 0 | 0 | The study investigates the effects of imeglimin on circadian clock gene expression in mice and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| popPK | Siam_2024 | irrelevant | 0 | 0 | The paper is a review of diabetes and cardiovascular disease epidemiology and pathophysiology, mentioning imeglimin only as a therapeutic agent without reporting any pharmacokinetic parameters. |
| popPK | Sugawara_2025 | irrelevant | 0 | 0 | The study focuses on intestinal mechanisms, gene expression, and microbiota, not pharmacokinetic disposition parameters. |
| PD | Sugawara_2025 | not_relevant | 0 | 0 | The paper investigates intestinal mechanisms (RNA-seq, microbiome, glucose dynamics) using fixed doses or concentrations without modeling a concentration-effect relationship or reporting PD parameters. |
| popPK | Tajima_2026 | irrelevant | 0 | 0 | The study focuses on glucose metabolism, insulin secretion, and tissue-specific insulin sensitivity (pharmacodynamics), not on the pharmacokinetic disposition parameters (CL, V, ka) of imeglimin itself. |
| popPK | Tomita_2022 | relevant | 10 | 0 | The paper describes a population PK study for imeglimin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PD | Tomita_2022 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetics (PK) and dose adjustment based on renal function, with no pharmacodynamic (PD) or exposure-response analysis reported. |
| popPK | Tsuno_2025 | irrelevant | 0 | 0 | The study focuses on the mechanistic effects of imeglimin on alpha cell identity and glucagon secretion, not on pharmacokinetic parameters. |
| popPK | Usui_2025 | irrelevant | 0 | 0 | The study is a clinical trial focusing on insulin and incretin secretion mechanisms, not pharmacokinetic disposition parameters. |
| popPK | Wadie_2026 | relevant | 8 | 0 | The paper describes a bioequivalence study for imeglimin in humans and mentions the calculation of pharmacokinetic parameters, but the specific numeric values are not present in the provided evidence. |
| popPK | Ye_2026 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of imeglimin on skeletal muscle atrophy and transcriptomics, not its pharmacokinetic disposition parameters. |
| popPK | Yendapally_2020 | irrelevant | 2 | 0 | The paper is a review of synthesis and properties, and the provided evidence contains no quantitative pharmacokinetic parameter values for imeglimin. |
| popPK | unknown_2026 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | unknown_2026 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no pharmacodynamic data, models, or parameters for imeglimin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
