<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;desoxyribonuclease&quot;}]"></div>

# desoxyribonuclease

- **generic name:** desoxyribonuclease
- **ATC codes:** `B06AA02`, `B06AA10`
- **DrugBank:** [DB09551](https://go.drugbank.com/drugs/DB09551) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Desoxyribonuclease is an enzyme that breaks down DNA and is used as a hematological agent, for example to help dissolve thickened secretions. It is an approved drug, though its use appears limited rather than widespread.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420690](https://www.wikidata.org/wiki/Q420690) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 01:43 | 15:45 | 0/0/0 | 0/0/0 | 0/0/0 | 628,051/9,134 | ollama / qwen3.8:27b-mtp-q8_0 | 46 | 5/52 | 45/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 342 matched, 85 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mohler_1993.pdf` | Mohler M et al., Altered pharmacokinetics of recombinant…, Drug metabolism and disposi… (1993) | popPK | 9 | not captured | [8095230](https://pubmed.ncbi.nlm.nih.gov/8095230) | The study reports quantitative PK parameters (clearance, volume of distribution) for recombinant human DNase in rats, but the specific numeric values are not present in the provided abstract text. |
| `Liao_1988.pdf` | Liao TH et al., Hydrolysis of p-nitrophenyl phenylphosp…, The Biochemical journal (1988) | pd | 4 | [10.1042/bj2550781](https://doi.org/10.1042/bj2550781) | [3214425](https://www.ncbi.nlm.nih.gov/pubmed/3214425) | metadata signals extractable PD data (sigmoid) |

<sub>queue written 2026-10-06T01:36:58.955121+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarwal_1991 | irrelevant | 0 | 0 | The study investigates the pathobiochemical response to PVC dust in rats, where DNAse is mentioned only as a hydrolytic enzyme marker, not as the subject drug for pharmacokinetic analysis. |
| popPK | Ager_2026 | irrelevant | 0 | 0 | The paper describes a clinical trial for prostate cancer involving an anti-CTLA-4 antibody and androgen deprivation therapy, with no mention of desoxyribonuclease or its pharmacokinetics. |
| PD | Ager_2026 | not_relevant | 0 | 0 | The paper is a clinical trial for an anti-CTLA-4 antibody and does not report any pharmacodynamic or exposure-response data for desoxyribonuclease. |
| popPK | Agergaard_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tacrolimus, not desoxyribonuclease. |
| PD | Agergaard_2025 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of tacrolimus and its distribution into PBMCs, containing no pharmacodynamic or exposure-response analysis for desoxyribonuclease or any other drug. |
| popPK | Al-Abdulraheem_2026 | irrelevant | 0 | 0 | The study focuses on ouabain and helenalin for pulmonary fibrosis and does not involve desoxyribonuclease. |
| PD | Al-Abdulraheem_2026 | not_relevant | 0 | 0 | The paper focuses on drug repositioning of ouabain and helenalin for pulmonary fibrosis and does not mention desoxyribonuclease or report any pharmacodynamic parameters. |
| popPK | Bi_2022 | irrelevant | 0 | 0 | The paper is an immunology study on a bacterial DNase (Sda1) vaccine candidate in mice and rabbits, not a pharmacokinetic study of the drug desoxyribonuclease. |
| popPK | Brandel-Ankrapp_2026 | irrelevant | 0 | 0 | The paper studies ethanol withdrawal and glutamate receptor expression in C. elegans, not the pharmacokinetics of desoxyribonuclease. |
| PD | Brandel-Ankrapp_2026 | not_relevant | 0 | 0 | The paper studies ethanol withdrawal effects on C. elegans behavior and gene expression, not the pharmacodynamics of desoxyribonuclease. |
| popPK | Börnsen_2026 | irrelevant | 0 | 0 | The paper describes the molecular mechanism of bacterial antibiotic efflux pump inhibitors (BDM91531) and does not involve the drug desoxyribonuclease or its pharmacokinetics. |
| popPK | Chen_2026 | irrelevant | 2 | 0 | The paper describes a drug delivery system (nanoparticles) for DNase 1 and mentions rapid clearance qualitatively, but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for the drug itself. |
| popPK | Chevalier_2025 | irrelevant | 0 | 0 | The paper focuses on Boolean network modeling of gene regulatory networks for cellular differentiation, not the pharmacokinetics of desoxyribonuclease. |
| PD | Chevalier_2025 | not_relevant | 0 | 0 | The paper focuses on Boolean network modeling of gene regulatory networks for cellular differentiation and does not contain any pharmacodynamic or exposure-response analysis for desoxyribonuclease. |
| popPK | Cortés_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the monoclonal antibody BI-1607, not desoxyribonuclease. |
| popPK | Daniels_1992 | irrelevant | 0 | 0 | The study is an in-vitro investigation of glomerular basement membrane permeability where DNase is used only as a reagent for cell removal, not as the subject drug for pharmacokinetic analysis. |
| popPK | Demkow_2023 | irrelevant | 0 | 0 | The paper is a review of the molecular mechanisms of Neutrophil Extracellular Trap (NET) degradation and does not report pharmacokinetic parameters for desoxyribonuclease. |
| popPK | Dhawan_2021 | irrelevant | 0 | 0 | The paper investigates the physiological role of DNase in clearing neutrophil extracellular traps in atherosclerosis, not the pharmacokinetic disposition parameters (CL, V, t1/2) of desoxyribonuclease as a drug. |
| popPK | Dhawan_2022 | irrelevant | 0 | 0 | The paper investigates the immunological effects of DNase activity on autoantibody production and does not report pharmacokinetic parameters (CL, V, t1/2) for desoxyribonuclease. |
| popPK | Dhawan_2025 | irrelevant | 0 | 0 | The paper investigates the role of DNase in NET clearance and atherosclerosis in mice and human tissues, but does not report pharmacokinetic parameters (CL, V, t1/2) for desoxyribonuclease as a drug. |
| popPK | Diamond_2026 | irrelevant | 0 | 0 | The paper studies context-dependent translation inhibitors (interdictors) and does not report pharmacokinetic parameters for desoxyribonuclease. |
| popPK | Didenko_2017 | irrelevant | 0 | 0 | The paper describes a FRET assay for detecting phagocytic clearance of DNA, not the pharmacokinetics of desoxyribonuclease as a drug. |
| popPK | Emlen_1988 | irrelevant | 0 | 0 | The study investigates the clearance of DNA anti-DNA immune complexes in mice, using DNase as a reagent for in vitro digestion, rather than measuring the pharmacokinetic parameters of desoxyribonuclease itself. |
| popPK | Englert_2023 | irrelevant | 0 | 0 | The paper describes the engineering and in vitro/in vivo functional characterization of DNase1 variants for NET degradation, but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for desoxyribonuclease. |
| popPK | Fraguas_2025 | irrelevant | 0 | 0 | The paper describes the mechanism of an AMPK inhibitor (BAY-3827) and does not study the pharmacokinetics of desoxyribonuclease. |
| popPK | Furlan_2025 | irrelevant | 0 | 0 | The paper studies the antimicrobial efficacy of TB47 against Mycobacterium leprae and does not report pharmacokinetic parameters for desoxyribonuclease. |
| popPK | Furusho_2024 | irrelevant | 0 | 0 | The study focuses on AAV vector pharmacokinetics and gene transfer efficiency, not the pharmacokinetics of desoxyribonuclease. |
| PD | Furusho_2024 | not_relevant | 0 | 0 | The paper studies AAV gene therapy vectors, not the drug desoxyribonuclease, and does not report any pharmacodynamic parameters for desoxyribonuclease. |
| popPK | Gama-Franceschi_2026 | irrelevant | 0 | 0 | The paper describes a bioluminescence imaging tool (PrismaLuc) and does not report pharmacokinetic parameters for desoxyribonuclease. |
| PD | Gama-Franceschi_2026 | not_relevant | 0 | 0 | The paper describes a bioluminescence imaging tool (PrismaLuc) and does not report any pharmacodynamic or exposure-response relationship for desoxyribonuclease. |
| popPK | Gentile_2026 | irrelevant | 0 | 0 | The paper describes the development of siRNA drugs for prion disease and does not study the pharmacokinetics of desoxyribonuclease. |
| popPK | Gregoire_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for dornase alfa (DNase I) in ARDS and does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for the drug. |
| popPK | Gu_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of LOXL4 in lung cancer and the pharmacology of acetyldigoxin, with no mention of desoxyribonuclease or its pharmacokinetics. |
| PD | Gu_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of acetyldigoxin (a LOXL4 inhibitor) in lung cancer and does not report any pharmacodynamic or exposure-response analysis for desoxyribonuclease. |
| popPK | Hahn_2025 | irrelevant | 0 | 0 | The paper studies the immunological effects of estrogen in rhesus macaques and does not involve desoxyribonuclease or pharmacokinetic parameters. |
| PD | Hahn_2025 | not_relevant | 0 | 0 | The paper studies the immunological effects of estrogen (17β-estradiol) in primates and does not mention desoxyribonuclease or report any pharmacodynamic parameters for it. |
| popPK | Hintermann_2024 | irrelevant | 0 | 0 | The study investigates the therapeutic effect of DNase I on liver disease in mice and does not report pharmacokinetic parameters (CL, V, etc.) for the drug. |
| popPK | Hirakata_1990 | irrelevant | 0 | 0 | The paper is an in-vitro immunology study on bacterial adherence to Kupffer cells, and DNase is used only as a reagent for cell isolation, not as the subject drug for pharmacokinetic analysis. |
| popPK | Huang_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on sorafenib resistance in hepatocellular carcinoma where DNase I is used as a tool to degrade extracellular traps, not as a subject drug for pharmacokinetic analysis. |
| popPK | Jang_2026 | irrelevant | 0 | 0 | The paper investigates the transcriptomic effects of rhIL-7-hyFc on T cells in cancer patients and does not report pharmacokinetic parameters for desoxyribonuclease. |
| popPK | Janko_2023 | irrelevant | 0 | 0 | The paper investigates the effect of temperature on neutrophil extracellular trap (NET) formation and clearance, not the pharmacokinetics of desoxyribonuclease as a drug. |
| popPK | Jaster_2025 | irrelevant | 0 | 0 | The paper studies the neuropharmacological effects of psilocybin and oxycodone in mice, not the pharmacokinetics of desoxyribonuclease. |
| PD | Jaster_2025 | not_relevant | 0 | 0 | The paper studies psilocybin and opioid reward in mice; it does not contain any data, analysis, or mention of desoxyribonuclease. |
| popPK | Johnson_2025 | irrelevant | 0 | 0 | The paper describes a conceptual framework for systems biology modeling and does not contain any pharmacokinetic data for desoxyribonuclease. |
| PD | Johnson_2025 | not_relevant | 0 | 0 | The paper describes a computational framework for agent-based modeling of cell behavior and does not report pharmacodynamic parameters for desoxyribonuclease. |
| popPK | Khwarg_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of proguanil and its metabolite cycloguanil, not desoxyribonuclease. |
| PD | Khwarg_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of proguanil and cycloguanil and the effect of SLC22A1 polymorphisms on drug exposure; it does not report any pharmacodynamic (PD) or exposure-response relationship for desoxyribonuclease or any other drug. |
| popPK | Krist_1995 | irrelevant | 0 | 0 | The paper describes an immunological study on macrophage isolation and cytotoxicity in rats, where DNase is used only as a reagent in the isolation protocol, not as a subject drug for pharmacokinetic analysis. |
| popPK | Kuchař_2024 | irrelevant | 0 | 0 | The paper describes the development of protein antagonists for the IL-22 receptor and reports binding kinetics (KD, ka, kd) for these proteins, not pharmacokinetic parameters for desoxyribonuclease. |
| popPK | Lan_2026 | irrelevant | 0 | 0 | The paper investigates the pathogenesis of necrotizing enterocolitis and the role of neutrophil-platelet aggregates, with no mention of desoxyribonuclease pharmacokinetics. |
| PD | Lan_2026 | not_relevant | 0 | 0 | The paper investigates the pathophysiology of necrotizing enterocolitis and the role of CD177+ neutrophils, but does not report a pharmacodynamic or exposure-response relationship for desoxyribonuclease (DNase). |
| popPK | Law_2024 | irrelevant | 0 | 0 | The paper investigates the association between neutrophil extracellular traps (NETs) and cystic fibrosis severity, using DNase as a therapeutic agent to reduce NETs, but does not report any pharmacokinetic parameters (CL, V, etc.) for desoxyribonuclease. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The study focuses on the therapeutic efficacy of DNase-I nanoparticles in a pulmonary fibrosis model and does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for the drug. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on neuroinflammation and Alzheimer's disease pathology in mice, not a pharmacokinetic study of desoxyribonuclease. |
| popPK | Liao_1988 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | Liao_1988 | not_relevant | 0 | 0 | The paper describes the enzymatic hydrolysis of a specific substrate (p-nitrophenyl phenylphosphonate) by bovine pancreatic deoxyribonuclease, which is a biochemical kinetic study (likely Michaelis-Menten) rather than a pharmacodynamic exposure-response or dose-response analysis of the drug's therapeutic effect in a biological system. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The paper is a review of neutrophil extracellular traps (NETs) and does not report pharmacokinetic parameters for desoxyribonuclease. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper investigates the therapeutic effects of the probiotic Lactobacillus johnsonii N5 in a mouse colitis model, and while DNase I is mentioned as a mechanistic comparator for NET clearance, no pharmacokinetic parameters for desoxyribonuclease are reported. |
| popPK | Look_2025 | irrelevant | 0 | 0 | The paper investigates CAR T-cell immunotherapy in glioma models and does not report pharmacokinetic parameters for desoxyribonuclease. |
| PD | Look_2025 | not_relevant | 0 | 0 | The paper investigates the efficacy of CAR-engineered immune cells (T, NK, macrophages) in glioma models and does not report any pharmacodynamic or exposure-response relationship for desoxyribonuclease. |
| popPK | Lu_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of T-cell apoptosis via neutrophil extracellular traps (NETs) and does not report pharmacokinetic parameters for desoxyribonuclease. |
| popPK | M_2025 | irrelevant | 0 | 0 | The paper investigates the role of caspase-8 in SARS-CoV-2 pathogenesis in mice and does not report pharmacokinetic parameters for desoxyribonuclease. |
| PD | M_2025 | not_relevant | 0 | 0 | The paper investigates the role of caspase-8 in SARS-CoV-2 pathogenesis using gene-targeted mice and inhibitors, but does not report any pharmacodynamic (exposure-response or dose-response) relationship or numeric PD parameters for desoxyribonuclease (or any other drug). |
| popPK | Macáková_2024 | irrelevant | 0 | 0 | The study investigates the therapeutic efficacy of DNase I in an arthritis model and measures enzyme activity, but does not report pharmacokinetic parameters (CL, V, t1/2) for the drug. |
| popPK | Martin-Alonso_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cell-free DNA (cfDNA) and priming agents (liposomes/antibodies), not the drug desoxyribonuclease. |
| popPK | Martin_2025 | irrelevant | 0 | 0 | The paper describes the discovery of an inhibitor for Synaptojanin1 and does not involve the drug desoxyribonuclease or its pharmacokinetics. |
| PD | Martin_2025 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Ki) for a Synaptojanin1 inhibitor, not a pharmacodynamic exposure-response or dose-response relationship for desoxyribonuclease. |
| popPK | Martinelli_2026 | irrelevant | 0 | 0 | The paper describes a clinical trial protocol for migraine treatment with erenumab and contains no pharmacokinetic data for desoxyribonuclease. |
| PD | Martinelli_2026 | not_relevant | 0 | 0 | The paper is a protocol for a biomarker study on erenumab (a CGRP antagonist) and does not involve desoxyribonuclease or report any pharmacodynamic parameters. |
| popPK | Meng_2018 | irrelevant | 2 | 0 | The paper focuses on the characterization of polysialylated DNase conjugates and reports PK data for PSA-EPO, but does not provide quantitative PK parameters (CL, V, t1/2) for desoxyribonuclease itself. |
| popPK | Mohler_1993 | relevant | 9 | 2 | The study reports quantitative PK parameters (clearance, volume of distribution) for recombinant human DNase in rats, but the specific numeric values are not present in the provided abstract text. |
| popPK | Omarjee_2019 | irrelevant | 0 | 0 | The paper is a review of monogenic lupus pathogenesis and discusses DNASE1/DNASE1L3 deficiencies as genetic causes of the disease, but it does not report any pharmacokinetic parameters (clearance, volume, half-life) for desoxyribonuclease as a drug. |
| popPK | Ortega-Zapero_2025 | irrelevant | 0 | 0 | The paper is a review of neutrophils and NETs in IBD, discussing DNase I only as a therapeutic agent for NET degradation, not as a subject of pharmacokinetic analysis. |
| popPK | Oved_2021 | irrelevant | 0 | 0 | The paper investigates the mechanism of neutrophil-mediated DNA degradation in lung injury and does not report pharmacokinetic parameters (CL, V, t1/2) for desoxyribonuclease. |
| popPK | Pratt_2025 | irrelevant | 0 | 0 | The paper is an immunology study on pancreatic cancer and NETs, not a pharmacokinetic study of desoxyribonuclease. |
| popPK | Rasool_2026 | irrelevant | 0 | 0 | The paper investigates IL-11/STAT3 signaling in esophageal cancer and does not study the pharmacokinetics of desoxyribonuclease. |
| popPK | Reske_1983 | irrelevant | 2 | 0 | The study describes DNase as a radiopharmaceutical tracer for imaging, reporting only qualitative binding and a qualitative description of clearance without quantitative PK parameters (CL, V, t1/2). |
| popPK | Romane_2025 | irrelevant | 0 | 0 | The paper describes the structural basis of drug recognition by the human MATE1 transporter using metformin, MPP, and cimetidine as substrates, and does not study the pharmacokinetics of desoxyribonuclease. |
| popPK | Sastry_1991 | irrelevant | 0 | 0 | The paper studies T7 RNA polymerase transcription mechanics and does not involve the drug desoxyribonuclease or pharmacokinetic parameters. |
| popPK | Schnappauf_2025 | irrelevant | 0 | 0 | The paper is a clinical and genetic case report on DNase II deficiency (autoinflammation) and does not report pharmacokinetic parameters for desoxyribonuclease. |
| popPK | Shahzad_2025 | irrelevant | 0 | 0 | The paper is a review of Neutrophil Extracellular Traps (NETs) and mentions DNase only as a mechanism for clearing extracellular DNA, not as a subject drug for pharmacokinetic analysis. |
| popPK | Shan_2025 | irrelevant | 0 | 0 | The paper describes a nanozyme (DMSN-Ce) that mimics DNase activity for periodontitis treatment, but does not report pharmacokinetic parameters for the drug desoxyribonuclease itself. |
| popPK | Shao_2021 | irrelevant | 0 | 0 | The paper investigates the antibacterial and osteogenic properties of a DNase I-coated titanium surface in vitro, not the pharmacokinetics of desoxyribonuclease as a drug. |
| popPK | Smith_1988 | irrelevant | 0 | 0 | The study investigates plasma gelsolin levels in malaria patients and rabbits, and while DNase I is used as a tool for affinity adsorption, it is not the subject of pharmacokinetic analysis. |
| popPK | Song_2026 | irrelevant | 0 | 0 | The paper studies the pharmacology of deschloroclozapine (DCZ) in songbirds, not the pharmacokinetics of desoxyribonuclease. |
| popPK | Swaih_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the tyrosine kinase inhibitor AZ14289671, not for desoxyribonuclease. |
| popPK | Tokita_1995 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of DNase I on tumor cell arrest in rat lung metastasis, not the pharmacokinetic disposition parameters (CL, V, etc.) of the drug itself. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study focuses on the therapeutic efficacy of DNase-I nanozymes in a colitis model and reports biomarker levels, but does not provide quantitative pharmacokinetic parameters (CL, V, t1/2) for the drug. |
| popPK | Wasserman_2025 | irrelevant | 0 | 0 | The paper describes a gene therapy platform for AAV transgene activation and does not study the pharmacokinetics of desoxyribonuclease. |
| popPK | Wesołowski_2026 | irrelevant | 0 | 0 | The paper is a review on oxidative stress in Acanthamoeba keratitis and does not contain pharmacokinetic data for desoxyribonuclease. |
| PD | Wesołowski_2026 | not_relevant | 0 | 0 | The paper is a review on oxidative stress in Acanthamoeba keratitis and does not report any pharmacodynamic or exposure-response data for desoxyribonuclease. |
| popPK | Wiedemar_2025 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of gamhépathiopine in Plasmodium falciparum and does not study the pharmacokinetics of desoxyribonuclease. |
| popPK | Wilkinson_2014 | irrelevant | 0 | 0 | The paper is a clinical review of mucolytic efficacy in bronchiectasis and does not report any pharmacokinetic parameters (CL, V, etc.) for desoxyribonuclease. |
| popPK | Winkler_2026 | irrelevant | 0 | 0 | The paper investigates the role of the lncRNA SNHG29 and protein IGF2BP1 in acute megakaryoblastic leukemia and does not study the pharmacokinetics of desoxyribonuclease. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The paper investigates one-carbon metabolism and purine synthesis in tumor-infiltrating T cells, not the pharmacokinetics of desoxyribonuclease. |
| PD | Xu_2024 | not_relevant | 0 | 0 | The paper investigates the metabolic mechanism of one-carbon supplementation and its effect on tumor regression, but does not report a pharmacodynamic model or numeric exposure-response parameters for desoxyribonuclease. |
| popPK | Yi_2025 | irrelevant | 0 | 0 | The study investigates the mechanism of lenvatinib resistance in hepatocellular carcinoma involving neutrophil extracellular traps (NETs), using DNase I as a therapeutic agent to degrade NETs, but does not report pharmacokinetic parameters for desoxyribonuclease. |
| popPK | Yu_2023 | irrelevant | 0 | 0 | The paper investigates the mechanism of CRISPR-Cas10 DNase immunity in bacteria, not the pharmacokinetics of the drug desoxyribonuclease. |
| popPK | Yuan_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of cancer-associated anemia using DNase I as a therapeutic agent to degrade DNA, but it does not report pharmacokinetic parameters (CL, V, t1/2) for DNase I itself. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The study investigates the therapeutic mechanism of DNase I on corneal wound healing in diabetic mice, reporting no pharmacokinetic parameters (clearance, volume, half-life) for the drug. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The study investigates the mechanism of GPR30-mediated NETs clearance in heart failure using DNase I as a therapeutic agent, but does not report pharmacokinetic parameters (CL, V, etc.) for desoxyribonuclease. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | The study investigates pharmacokinetic interactions between SGLT2 inhibitors and telmisartan in rats, and does not involve desoxyribonuclease. |
| PD | Zhou_2026 | not_relevant | 0 | 0 | The paper investigates pharmacokinetic interactions between SGLT2 inhibitors and telmisartan, not desoxyribonuclease, and reports no pharmacodynamic or exposure-response parameters. |
| popPK | de_2022 | irrelevant | 0 | 0 | The paper investigates DNase activity as a biomarker for NET degradation in COVID-19 patients, not the pharmacokinetics of desoxyribonuclease as a drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
