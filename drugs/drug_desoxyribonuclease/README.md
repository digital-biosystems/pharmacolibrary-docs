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
| 2026-10-14 21:48 | 5:18 | 0/0/0 | 0/0/0 | 0/0/0 | 653,353/6,777 | einfracz / qwen3.8-27b | 46 | 5/52 | 45/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 342 matched, 85 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mohler_1993.pdf` | Mohler M et al., Altered pharmacokinetics of recombinant…, Drug metabolism and disposi… (1993) | popPK | 5 | not captured | [8095230](https://pubmed.ncbi.nlm.nih.gov/8095230) | The paper describes a preclinical PK study of rhDNase in rats and reports qualitative trends in clearance and volume of distribution, but specific numeric values are not present in the provided text. |
| `Liao_1988.pdf` | Liao TH et al., Hydrolysis of p-nitrophenyl phenylphosp…, The Biochemical journal (1988) | pd | 4 | [10.1042/bj2550781](https://doi.org/10.1042/bj2550781) | [3214425](https://www.ncbi.nlm.nih.gov/pubmed/3214425) | metadata signals extractable PD data (sigmoid) |

<sub>queue written 2026-10-14T21:47:14.249503+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarwal_1991 | irrelevant | 0 | 0 | The study focuses on the toxicity of polyvinylchloride dust in rats, and DNAse is mentioned only as a hydrolytic enzyme marker of macrophage activity, not as a subject drug for pharmacokinetic analysis. |
| popPK | Ager_2026 | irrelevant | 0 | 0 | The paper is a clinical trial for prostate cancer immunotherapy (anti-CTLA-4) and contains no data on desoxyribonuclease pharmacokinetics. |
| PD | Ager_2026 | not_relevant | 0 | 0 | The paper is a clinical trial for an anti-CTLA-4 antibody and does not report any pharmacodynamic or exposure-response data for desoxyribonuclease. |
| popPK | Agergaard_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of tacrolimus, not desoxyribonuclease. |
| PD | Agergaard_2025 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of tacrolimus and its distribution into PBMCs, containing no pharmacodynamic or exposure-response analysis for desoxyribonuclease or any other drug. |
| popPK | Al-Abdulraheem_2026 | irrelevant | 0 | 0 | The study focuses on drug repositioning for pulmonary fibrosis targeting ouabain and helenalin, with no mention of desoxyribonuclease. |
| PD | Al-Abdulraheem_2026 | not_relevant | 0 | 0 | The paper focuses on drug repositioning of ouabain and helenalin for pulmonary fibrosis and does not mention desoxyribonuclease or report any pharmacodynamic parameters. |
| popPK | Bi_2022 | irrelevant | 0 | 0 | The paper investigates Sda1, a bacterial DNase virulence factor in Group A Streptococcus, not the pharmacokinetics of the therapeutic drug desoxyribonuclease. |
| popPK | Brandel-Ankrapp_2026 | irrelevant | 0 | 0 | The paper investigates ethanol withdrawal and glutamate receptor expression in C. elegans, with no mention of desoxyribonuclease or pharmacokinetics. |
| PD | Brandel-Ankrapp_2026 | not_relevant | 0 | 0 | The paper studies ethanol withdrawal effects on C. elegans behavior and gene expression, not the pharmacodynamics of desoxyribonuclease. |
| popPK | Börnsen_2026 | irrelevant | 0 | 0 | The paper describes the molecular mechanism of bacterial antibiotic efflux pump inhibitors (BDM91531) and is unrelated to the pharmacokinetics of desoxyribonuclease. |
| popPK | Chen_2026 | irrelevant | 2 | 0 | The paper discusses a nanomedicine delivery platform (multilayer lipid vesicles) for DNase 1 and reports qualitative therapeutic outcomes in a mouse model, but it does not provide specific quantitative pharmacokinetic parameters (e.g., CL, V, ka) for the drug. |
| popPK | Chevalier_2025 | irrelevant | 0 | 0 | The paper focuses on Boolean network modeling of gene regulation for cellular differentiation and contains no pharmacokinetic data for desoxyribonuclease. |
| PD | Chevalier_2025 | not_relevant | 0 | 0 | The paper focuses on Boolean network modeling of gene regulatory networks for cellular differentiation and does not contain any pharmacodynamic or exposure-response analysis for desoxyribonuclease. |
| popPK | Cortés_2025 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of BI-1607 (an anti-FcγRIIB antibody), not desoxyribonuclease. |
| popPK | Daniels_1992 | irrelevant | 0 | 0 | The study focuses on the permeability properties of glomerular basement membranes, using desoxyribonuclease only as a reagent for cell removal, rather than reporting pharmacokinetic parameters for the drug itself. |
| popPK | Demkow_2023 | irrelevant | 0 | 0 | The paper is a review of the molecular mechanisms of NET degradation and does not report pharmacokinetic parameters for desoxyribonuclease. |
| popPK | Dhawan_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on atherosclerosis and NET clearance, not a pharmacokinetic study reporting disposition parameters for desoxyribonuclease. |
| popPK | Dhawan_2022 | irrelevant | 0 | 0 | The paper investigates the immunological role of DNase1 in clearing extracellular DNA in hypercholesterolemia, reporting enzyme activity and antibody levels, but contains no pharmacokinetic parameters (CL, V, t1/2) for desoxyribonuclease. |
| popPK | Dhawan_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study of DNase-mediated NET clearance in atherosclerosis, not a pharmacokinetic study reporting disposition parameters for desoxyribonuclease. |
| popPK | Diamond_2026 | irrelevant | 0 | 0 | The paper describes context-dependent translation inhibitors (interdictors) of the human ribosome, not the pharmacokinetics of desoxyribonuclease (DNase). |
| popPK | Didenko_2017 | irrelevant | 0 | 0 | The paper describes a method for detecting phagocytic clearance using DNA ends, not the pharmacokinetic parameters of the drug desoxyribonuclease. |
| popPK | Emlen_1988 | irrelevant | 0 | 0 | The paper describes the clearance of immune complexes using DNase as a reagent, but does not report pharmacokinetic parameters (CL, V, etc.) for DNase itself as the subject drug. |
| popPK | Englert_2023 | irrelevant | 2 | 0 | The study is a protein engineering paper focusing on enzyme activity and distribution in transgenic mice, but it does not provide quantitative pharmacokinetic parameters (CL, V, ka) for the drug. |
| popPK | Fraguas_2025 | irrelevant | 0 | 0 | The paper describes the mechanism of action of an AMPK inhibitor (BAY-3827) and does not report pharmacokinetic parameters for desoxyribonuclease. |
| popPK | Furlan_2025 | irrelevant | 0 | 0 | The paper studies the antimicrobial efficacy of TB47 and clofazimine in leprosy models and does not report pharmacokinetic parameters for desoxyribonuclease. |
| popPK | Furusho_2024 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of AAV vectors for gene therapy, not the drug desoxyribonuclease. |
| PD | Furusho_2024 | not_relevant | 0 | 0 | The paper studies AAV gene therapy vectors, not the drug desoxyribonuclease, and does not report any pharmacodynamic parameters for desoxyribonuclease. |
| popPK | Gama-Franceschi_2026 | irrelevant | 0 | 0 | The paper describes a bioluminescence imaging reporter system (PrismaLuc) and does not involve the drug desoxyribonuclease or its pharmacokinetics. |
| PD | Gama-Franceschi_2026 | not_relevant | 0 | 0 | The paper describes a bioluminescence imaging tool (PrismaLuc) and does not report any pharmacodynamic or exposure-response relationship for desoxyribonuclease. |
| popPK | Gentile_2026 | irrelevant | 0 | 0 | The paper studies siRNA oligonucleotide therapeutics for prion disease in mice, not the pharmacokinetics of the enzyme desoxyribonuclease. |
| popPK | Gregoire_2025 | irrelevant | 0 | 0 | The paper is a clinical trial assessing the efficacy of aerosolized dornase alfa (DNase-1) in ARDS and does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for the drug. |
| popPK | Gu_2026 | irrelevant | 0 | 0 | The paper investigates LOXL4 and acetyldigoxin in lung cancer immunology and contains no data on desoxyribonuclease pharmacokinetics. |
| PD | Gu_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of acetyldigoxin (a LOXL4 inhibitor) in lung cancer and does not report any pharmacodynamic or exposure-response analysis for desoxyribonuclease. |
| popPK | Hahn_2025 | irrelevant | 0 | 0 | The study focuses on the immunological effects of estrogen in rhesus macaques and does not involve desoxyribonuclease or any pharmacokinetic parameters. |
| PD | Hahn_2025 | not_relevant | 0 | 0 | The paper studies the immunological effects of estrogen (17β-estradiol) in primates and does not mention desoxyribonuclease or report any pharmacodynamic parameters for it. |
| popPK | Hintermann_2024 | irrelevant | 0 | 0 | The study investigates the therapeutic efficacy of DNase I (desoxyribonuclease) in a mouse model of liver disease but does not report pharmacokinetic parameters (CL, V, etc.) for the drug. |
| popPK | Hirakata_1990 | irrelevant | 0 | 0 | The paper investigates bacterial clearance and phagocytosis by Kupffer cells; DNase is used only as a reagent for tissue digestion, not as the subject drug for PK analysis. |
| popPK | Huang_2024 | irrelevant | 0 | 0 | The study investigates the mechanistic role of DNase I in clearing macrophage extracellular traps to improve sorafenib response in cancer, reporting tumor growth and efficacy data rather than pharmacokinetic parameters for DNase I itself. |
| popPK | Jang_2026 | irrelevant | 0 | 0 | The paper studies the transcriptomic effects of IL-7 (a cytokine) on T cells in cancer patients and does not involve desoxyribonuclease. |
| popPK | Janko_2023 | irrelevant | 0 | 0 | The paper investigates the immunology of neutrophil extracellular trap (NET) formation and clearance (including the enzyme activity of DNase) in relation to temperature, but it does not report pharmacokinetic parameters (CL, V, etc.) for desoxyribonuclease as a subject drug. |
| popPK | Jaster_2025 | irrelevant | 0 | 0 | The paper investigates the behavioral and epigenetic effects of psilocybin on opioid reward in mice and does not involve the drug desoxyribonuclease. |
| PD | Jaster_2025 | not_relevant | 0 | 0 | The paper studies psilocybin and opioid reward in mice; it does not contain any data, analysis, or mention of desoxyribonuclease. |
| popPK | Johnson_2025 | irrelevant | 0 | 0 | The paper is a computational framework for cell behavior modeling and contains no pharmacokinetic data or mention of desoxyribonuclease. |
| PD | Johnson_2025 | not_relevant | 0 | 0 | The paper describes a computational framework for agent-based modeling of cell behavior and does not report pharmacodynamic parameters for desoxyribonuclease. |
| popPK | Khwarg_2024 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of proguanil, not desoxyribonuclease. |
| PD | Khwarg_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of proguanil and cycloguanil and the effect of SLC22A1 polymorphisms on drug exposure; it does not report any pharmacodynamic (PD) or exposure-response relationship for desoxyribonuclease or any other drug. |
| popPK | Krist_1995 | irrelevant | 0 | 0 | The paper describes the isolation of macrophages from rat omenta for immunology studies and uses DNase only as a reagent for tissue digestion, not as a subject of pharmacokinetic analysis. |
| popPK | Kuchař_2024 | irrelevant | 0 | 0 | The paper studies a protein antagonist for the IL-22 receptor and reports binding kinetics (KD, ka, kd) for the antagonist, not the pharmacokinetics of desoxyribonuclease. |
| popPK | Lan_2026 | irrelevant | 0 | 0 | The paper focuses on the pathophysiology of necrotizing enterocolitis and thromboinflammation in mice and humans, with no mention of desoxyribonuclease pharmacokinetics. |
| PD | Lan_2026 | not_relevant | 0 | 0 | The paper investigates the pathophysiology of necrotizing enterocolitis and the role of CD177+ neutrophils, but does not report a pharmacodynamic or exposure-response relationship for desoxyribonuclease (DNase). |
| popPK | Law_2024 | irrelevant | 0 | 0 | The study focuses on NETs and inflammation in Cystic Fibrosis, using DNase as a therapeutic intervention without reporting pharmacokinetic parameters for DNase. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The paper is a study on nanoparticle delivery for pulmonary fibrosis treatment and does not report pharmacokinetic parameters (CL, V, t1/2) for desoxyribonuclease. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The study is a mechanistic investigation of neuroinflammation in mice involving DNase II deficiency, reporting no pharmacokinetic parameters. |
| popPK | Liao_1988 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | Liao_1988 | not_relevant | 0 | 0 | The paper describes the enzymatic hydrolysis of a specific substrate (p-nitrophenyl phenylphosphonate) by bovine pancreatic deoxyribonuclease, which is a biochemical kinetic study (likely Michaelis-Menten) rather than a pharmacodynamic exposure-response or dose-response analysis of the drug's therapeutic effect in a biological system. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The paper is a review of neutrophil extracellular traps and does not contain pharmacokinetic data for desoxyribonuclease. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper is a mechanistic microbiology study on Lactobacillus johnsonii in murine colitis, not a pharmacokinetic study of desoxyribonuclease. |
| popPK | Look_2025 | irrelevant | 0 | 0 | The paper focuses on CAR cell therapy mechanisms in glioma models and does not study the pharmacokinetics of desoxyribonuclease. |
| PD | Look_2025 | not_relevant | 0 | 0 | The paper investigates the efficacy of CAR-engineered immune cells (T, NK, macrophages) in glioma models and does not report any pharmacodynamic or exposure-response relationship for desoxyribonuclease. |
| popPK | Lu_2026 | irrelevant | 0 | 0 | The paper investigates T-cell apoptosis and immune mechanisms involving neutrophil elastase and MPO, and mentions DNase I only as a reagent for NETs degradation, rather than studying its pharmacokinetic parameters. |
| popPK | M_2025 | irrelevant | 0 | 0 | The paper is a study on the role of caspase-8 in SARS-CoV-2 pathogenesis and inflammation in mice, and contains no pharmacokinetic data for desoxyribonuclease. |
| PD | M_2025 | not_relevant | 0 | 0 | The paper investigates the role of caspase-8 in SARS-CoV-2 pathogenesis using gene-targeted mice and inhibitors, but does not report any pharmacodynamic (exposure-response or dose-response) relationship or numeric PD parameters for desoxyribonuclease (or any other drug). |
| popPK | Macáková_2024 | irrelevant | 1 | 0 | The study measures enzymatic activity and clinical outcomes (arthritis score) rather than quantifying the pharmacokinetic disposition parameters (CL, V, t1/2) of the drug itself. |
| popPK | Martin-Alonso_2024 | irrelevant | 0 | 0 | The study focuses on the clearance of cell-free DNA (cfDNA) and the pharmacokinetics of liposomes and antibodies designed to protect it, not the pharmacokinetic parameters (CL, V, etc.) of desoxyribonuclease (DNase) itself. |
| popPK | Martin_2025 | irrelevant | 0 | 0 | The study investigates the pharmacology of Synaptojanin1 inhibitors and does not involve the drug desoxyribonuclease or its pharmacokinetics. |
| PD | Martin_2025 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Ki) for a Synaptojanin1 inhibitor, not a pharmacodynamic exposure-response or dose-response relationship for desoxyribonuclease. |
| popPK | Martinelli_2026 | irrelevant | 0 | 0 | The paper describes a clinical trial protocol for erenumab (a CGRP receptor antagonist for migraine) and contains no data regarding the pharmacokinetics of desoxyribonuclease. |
| PD | Martinelli_2026 | not_relevant | 0 | 0 | The paper is a protocol for a biomarker study on erenumab (a CGRP antagonist) and does not involve desoxyribonuclease or report any pharmacodynamic parameters. |
| popPK | Meng_2018 | relevant | 9 | 2 | The paper describes a Phase I clinical study of polysialylated DNase (PSA-DNase) and discusses PK half-life extension, but the specific quantitative PK parameters (clearance, volume) for PSA-DNase are not present in the provided text (likely in tables or figures not included or in supplementary material). |
| popPK | Mohler_1993 | relevant | 5 | 3 | The paper describes a preclinical PK study of rhDNase in rats and reports qualitative trends in clearance and volume of distribution, but specific numeric values are not present in the provided text. |
| popPK | Omarjee_2019 | irrelevant | 0 | 0 | The paper is a review of Mendelian lupus genetics, where DNASE is discussed as an endogenous enzyme involved in immune tolerance, not as a dosed drug subject to pharmacokinetic analysis. |
| popPK | Ortega-Zapero_2025 | irrelevant | 0 | 0 | The paper is a review on the role of neutrophils and NETs in inflammatory bowel disease, discussing DNase I as a therapeutic concept without providing any pharmacokinetic data for desoxyribonuclease. |
| popPK | Oved_2021 | irrelevant | 0 | 0 | The study focuses on the physiological role of neutrophils in degrading nuclear debris and the therapeutic effect of DNase I in mice, but does not report quantitative pharmacokinetic parameters (CL, V, etc.) for desoxyribonuclease. |
| popPK | Pratt_2025 | irrelevant | 0 | 0 | The paper studies the immunological role of DNase I in pancreatic cancer but does not report pharmacokinetic parameters for desoxyribonuclease. |
| popPK | Rasool_2026 | irrelevant | 0 | 0 | The paper investigates IL-11/STAT3 signaling in esophageal cancer and does not involve the drug desoxyribonuclease or any pharmacokinetic parameters. |
| popPK | Reske_1983 | irrelevant | 4 | 2 | The study uses DNase as a radiopharmaceutical probe for tumor imaging and reports only qualitative clearance description ("two-component") and tissue accumulation percentages, lacking quantitative PK parameters (CL, V) required for population modeling. |
| popPK | Romane_2025 | irrelevant | 0 | 0 | The paper describes the structural basis of drug recognition by the human MATE1 transporter and focuses on drugs like metformin and cimetidine, with no mention of desoxyribonuclease. |
| popPK | Sastry_1991 | irrelevant | 0 | 0 | The study focuses on T7 RNA polymerase interaction with DNA in vitro and does not report pharmacokinetic parameters for desoxyribonuclease. |
| popPK | Schnappauf_2025 | irrelevant | 0 | 0 | This is a clinical genetics and mechanistic study of DNase II deficiency in patients, not a pharmacokinetic study of desoxyribonuclease as a drug, reporting no disposition parameters. |
| popPK | Shahzad_2025 | irrelevant | 0 | 0 | The paper is a review of Neutrophil Extracellular Traps (NETs) and mentions DNase only in the context of physiological clearance of extracellular DNA, not as a pharmacokinetic subject drug. |
| popPK | Shan_2025 | irrelevant | 0 | 0 | The paper describes a nanomaterial (nanozyme) designed to mimic DNase activity for periodontitis treatment, not a pharmacokinetic study of desoxyribonuclease as a drug subject. |
| popPK | Shao_2021 | irrelevant | 0 | 0 | The study investigates the surface coating properties of DNase I on titanium implants for antimicrobial effects, not the pharmacokinetics of DNase I as a drug. |
| popPK | Smith_1988 | irrelevant | 0 | 0 | The paper studies gelsolin levels in malaria patients and rabbits, and DNase I is used only as a reagent for affinity adsorption, not as the subject drug for pharmacokinetic analysis. |
| popPK | Song_2026 | irrelevant | 0 | 0 | The paper investigates DREADD-mediated neural manipulation in songbirds and contains no pharmacokinetic data for desoxyribonuclease. |
| popPK | Swaih_2025 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of the EGFR inhibitor AZ14289671, not desoxyribonuclease. |
| popPK | Tokita_1995 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of DNase I on tumor cell arrest in the microvasculature, not its pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Wang_2024 | irrelevant | 1 | 0 | The paper is a mechanistic/nanomedicine study focused on the therapeutic efficacy of DNase-I nanozymes in colitis, lacking quantitative population pharmacokinetic modeling or specific PK parameters (CL, Vd) for the drug. |
| popPK | Wasserman_2025 | irrelevant | 0 | 0 | The paper describes a method for activating AAV gene expression in human cell lines and does not study the pharmacokinetics of desoxyribonuclease. |
| popPK | Wesołowski_2026 | irrelevant | 0 | 0 | The paper is a review of oxidative stress mechanisms in Acanthamoeba keratitis and contains no pharmacokinetic data or mention of desoxyribonuclease. |
| PD | Wesołowski_2026 | not_relevant | 0 | 0 | The paper is a review on oxidative stress in Acanthamoeba keratitis and does not report any pharmacodynamic or exposure-response data for desoxyribonuclease. |
| popPK | Wiedemar_2025 | irrelevant | 0 | 0 | The paper describes the mechanism of action of gamhépathiopine against Plasmodium falciparum, not the pharmacokinetics of desoxyribonuclease. |
| popPK | Wilkinson_2014 | irrelevant | 0 | 0 | The paper is a clinical review of mucolytics for bronchiectasis and does not report any pharmacokinetic parameters for desoxyribonuclease. |
| popPK | Winkler_2026 | irrelevant | 0 | 0 | The paper is a cancer biology study focusing on lncRNA SNHG29 and IGF2BP1 in leukemia, with no mention of desoxyribonuclease or pharmacokinetic parameters. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The paper investigates metabolic pathways of purine synthesis in tumors and T cells using isotope tracing, with no mention of desoxyribonuclease or its pharmacokinetics. |
| PD | Xu_2024 | not_relevant | 0 | 0 | The paper investigates the metabolic mechanism of one-carbon supplementation and its effect on tumor regression, but does not report a pharmacodynamic model or numeric exposure-response parameters for desoxyribonuclease. |
| popPK | Yi_2025 | irrelevant | 0 | 0 | The study investigates the role of DNase I in clearing NETs to enhance lenvatinib efficacy in an HCC mouse model, but does not report pharmacokinetic parameters (CL, V, etc.) for desoxyribonuclease. |
| popPK | Yu_2023 | irrelevant | 0 | 0 | The paper investigates CRISPR-Cas10 DNA degradation mechanisms in bacteria, not the pharmacokinetics of the enzyme desoxyribonuclease as a drug. |
| popPK | Yuan_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of cancer-associated anemia involving DNA binding to red blood cells and the therapeutic effect of DNase I, but does not report pharmacokinetic parameters (CL, V, ka, etc.) for DNase I. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The study investigates the therapeutic effects and mechanisms of DNase I on corneal wound healing in mice, but does not report any pharmacokinetic parameters (clearance, volume, half-life) for the drug. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of GPR30-mediated clearance of neutrophil extracellular traps (NETs) using DNase I as a therapeutic tool, not the pharmacokinetics of desoxyribonuclease as a subject drug. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of SGLT2 inhibitors (empagliflozin, ertugliflozin, henagliflozin) and telmisartan, not desoxyribonuclease. |
| PD | Zhou_2026 | not_relevant | 0 | 0 | The paper investigates pharmacokinetic interactions between SGLT2 inhibitors and telmisartan, not desoxyribonuclease, and reports no pharmacodynamic or exposure-response parameters. |
| popPK | de_2022 | irrelevant | 0 | 0 | The study investigates DNase activity and NET markers in COVID-19 patients as biological markers, not the pharmacokinetics (disposition parameters like CL, V, t1/2) of desoxyribonuclease as a drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
