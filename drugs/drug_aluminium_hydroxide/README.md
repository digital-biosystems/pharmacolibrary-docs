# aluminium hydroxide

- **generic name:** aluminium hydroxide
- **ATC codes:** `A02AB01`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 12:21 | 24:55 | 0/0/0 | 0/0/0 | 1/0/0 | 225,677/5,390 | ollama / qwen3.8:27b-mtp-q8_0 | 32 | 9/22 | 28/4 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | **HLA-DR3-DQ2** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Hannelius_2020](drugs/drug_aluminium_hydroxide/pgx_Hannelius_2020_HLA_DR3_DQ2_safety.md) | Hannelius U et al., Efficacy of GAD-alum immunotherapy asso…, Diabetologia (2020) | [10.1007/s00125-020-05227-z](https://doi.org/10.1007/s00125-020-05227-z) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 2112 matched, 80 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Achira_2002 | irrelevant | 0 | 0 | The study investigates P-glycoprotein activity using doxorubicin as a substrate in rats and does not report pharmacokinetic parameters for aluminium_hydroxide. |
| popPK | Ahlén_2025 | irrelevant | 0 | 0 | The paper is a metabolomics study on SARS-CoV-2 vaccines in ferrets and does not report pharmacokinetic parameters for aluminium_hydroxide. |
| popPK | Bergeron_1989 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of fluoroquinolones, and aluminium hydroxide is only mentioned as a co-administered antacid that reduces absorption, not as the subject drug. |
| popPK | Bloksma_1981 | irrelevant | 0 | 0 | The paper studies the immunological effects of Lactobacillus in mice and does not involve aluminium_hydroxide or pharmacokinetic parameters. |
| popPK | Bourgoin_2005 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for cyclosporin A (CsA), not aluminium hydroxide, which is only mentioned as an excluded concomitant medication. |
| PD | Bourgoin_2005 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of cyclosporin A, not aluminium hydroxide, and does not report any pharmacodynamic or exposure-response relationships. |
| PD | Brady_1976 | not_relevant | 3 | 2 | The paper describes a qualitative dose-response difference (plateau vs. proportional decline) for vaccine potency but does not provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response model for aluminium hydroxide. |
| PD | Bretagne_2017 | not_relevant | 0 | 0 | The paper describes the physical mechanism of pore plugging using microfluidics and SAXS, but does not report any pharmacodynamic exposure-response or dose-response data with numeric parameters. |
| popPK | Bur_2026 | irrelevant | 0 | 0 | The paper is a clinical oncology study regarding margin assessment in oral cancer and contains no pharmacokinetic data for aluminium_hydroxide. |
| popPK | Carnrot_2023 | irrelevant | 0 | 0 | The study investigates the biodistribution of the Matrix-M adjuvant (saponins/cholesterol) in mice, not the pharmacokinetics of aluminium hydroxide. |
| popPK | Cascone_2026 | irrelevant | 0 | 0 | The paper is a clinical oncology study on nivolumab in NSCLC and does not report pharmacokinetic parameters for aluminium_hydroxide. |
| popPK | Chen_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ethambutol, with aluminium hydroxide serving only as a co-administered antacid/comparator, not the subject drug. |
| popPK | Chung_2016 | irrelevant | 0 | 0 | The paper investigates the effect of low-intensity ultrasound on arthritis and neutrophil clearance, and does not involve aluminium_hydroxide or pharmacokinetic parameters. |
| popPK | Cometa_2023 | irrelevant | 0 | 0 | The paper focuses on the development of a drug delivery system for Boswellia serrata extract using layered double hydroxides, not on the pharmacokinetics of aluminium hydroxide. |
| PD | Cometa_2023 | not_relevant | 0 | 0 | The paper focuses on the material characterization and in vitro bioactivity of a drug delivery composite, reporting no pharmacokinetic data, exposure-response relationships, or numeric PD parameters for aluminium hydroxide. |
| popPK | Cookenham_2020 | irrelevant | 0 | 0 | The paper is an immunology study on influenza vaccination in mice and does not report pharmacokinetic parameters for aluminium_hydroxide. |
| PD | Coulson_2022 | not_relevant | 3 | 2 | The paper is a systematic review reporting median concentrations for different toxicity outcomes (neurotoxicity vs bone disease) but does not provide a fitted dose-response curve, Emax/EC50 parameters, or a quantitative PK/PD model. |
| PD | De_2008 | not_relevant | 1 | 0 | The paper is a commentary on the mechanism of action of aluminium hydroxide (Nlrp3 inflammasome activation) and does not report any quantitative pharmacodynamic or exposure-response data. |
| popPK | Dong_2019 | irrelevant | 0 | 0 | The paper describes a cancer immunotherapy nanovaccine using ovalbumin and CpG, and does not involve aluminium_hydroxide or report any pharmacokinetic parameters. |
| popPK | Du_2023 | irrelevant | 0 | 0 | The paper is a clinical oncology study on non-small cell lung cancer treatment outcomes and does not contain any pharmacokinetic data for aluminium_hydroxide. |
| popPK | EFSA_2024 | irrelevant | 0 | 0 | The paper is a risk assessment of polybrominated diphenyl ethers (PBDEs) and does not involve aluminium_hydroxide or report any pharmacokinetic parameters. |
| PD | EFSA_2024 | not_relevant | 0 | 0 | The paper is a risk assessment for polybrominated diphenyl ethers (PBDEs) and does not contain any pharmacodynamic or exposure-response data for aluminium hydroxide. |
| PD | Elhabal_2025 | not_relevant | 0 | 0 | The paper reports qualitative/percentage changes in biomarkers (IgE, cytokines) in an animal model but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50) for aluminium hydroxide or the drug. |
| popPK | Eng_1978 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of myelin basic protein (MBP) in rabbits, not aluminium hydroxide. |
| popPK | Goh_2021 | irrelevant | 0 | 0 | The paper is a clinical study on biliary atresia outcomes and does not involve the drug aluminium_hydroxide or report any pharmacokinetic parameters. |
| popPK | Grunder_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of linezolid, with aluminium hydroxide serving only as a co-administered antacid component, not the subject drug. |
| PD | Guld_1978 | not_relevant | 2 | 0 | The paper mentions dose-response relationships and compares antibody responses to aluminium hydroxide vs BCG, but it is a qualitative summary of experiments without providing specific numeric PD parameters (Emax, EC50) or extractable concentration-effect curves in the text. |
| popPK | Guo_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of docetaxel, not aluminium_hydroxide. |
| popPK | Hege_2023 | irrelevant | 0 | 0 | The paper focuses on the synthesis and immunological screening of methacrylate oligomers as vaccine adjuvants and does not report pharmacokinetic parameters for aluminium hydroxide. |
| popPK | Hockey_1987 | irrelevant | 0 | 0 | The paper is a clinical review of primary gastric lymphoma and contains no pharmacokinetic data for aluminium hydroxide. |
| PD | Holt_1987 | not_relevant | 0 | 0 | The paper discusses aluminium hydroxide only as an adjuvant that abrogates tolerance in an immunological context, without reporting any pharmacokinetic or pharmacodynamic exposure-response data or numeric PD parameters for the compound itself. |
| PD | Höpfner_1997 | not_relevant | 0 | 0 | The study assesses the effect of an antacid on the pharmacodynamics of acarbose (blood glucose/insulin), not the pharmacodynamics of aluminium hydroxide itself, and reports no PD parameters for the antacid. |
| popPK | Itano_2023 | irrelevant | 0 | 0 | The paper studies the immunomodulatory effects of the bacterial strain EDP1815 (Prevotella histicola) and contains no pharmacokinetic data for aluminium_hydroxide. |
| PD | Itano_2023 | not_relevant | 0 | 0 | The paper studies EDP1815 (a bacterial strain), not aluminium hydroxide, and reports no exposure-response or dose-response PD parameters for the target drug. |
| popPK | Jacobse_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of adalimumab, and aluminium hydroxide is only used as an adjuvant in an ex vivo cytokine release assay, not as the subject drug. |
| PD | Jacobse_2021 | not_relevant | 0 | 0 | The paper focuses on PK and local tolerability of adalimumab; aluminium hydroxide is only used as an adjuvant in an ex-vivo cytokine assay, and no PD or exposure-response relationship for aluminium hydroxide is reported. |
| PD | Kellner_1992 | not_relevant | 2 | 1 | The paper provides only a qualitative comparison of adjuvant efficacy (antibody titers) without reporting specific numeric dose-response parameters or curves for aluminium hydroxide. |
| popPK | Kirch_1982 | irrelevant | 0 | 0 | The paper is a review of atenolol pharmacokinetics where aluminium hydroxide is only mentioned as a co-administered agent affecting absorption, with no PK parameters reported for aluminium hydroxide itself. |
| popPK | Kun_1986 | irrelevant | 0 | 0 | The paper is a clinical oncology trial regarding chemotherapy for cancer and does not involve aluminium_hydroxide or pharmacokinetic parameters. |
| popPK | Kwak_2022 | irrelevant | 0 | 0 | The paper is a clinical study on imiquimod for lentigo maligna and contains no pharmacokinetic data for aluminium hydroxide. |
| PD | Laera_2023 | not_relevant | 0 | 0 | The paper focuses on the physical-chemical characterization and formulation stability of antigen adsorption to aluminium hydroxide particles, not on pharmacodynamic exposure-response or dose-response relationships in a biological system. |
| PD | Larsen_2002 | not_relevant | 0 | 0 | The paper studies phthalates as adjuvants and mentions aluminium hydroxide only as a positive control without reporting any specific exposure-response or dose-response data for it. |
| popPK | Lei_2025 | irrelevant | 0 | 0 | The paper is a vaccine immunology study where aluminium hydroxide is used only as a comparator adjuvant, and no pharmacokinetic parameters are reported. |
| PD | Lofthouse_2002 | not_relevant | 2 | 1 | The paper compares vaccine delivery vehicles and mentions a qualitative dose-response trend for the matrix implant, but it does not report numeric PD parameters (Emax, EC50, etc.) or a quantitative exposure-response model for aluminium hydroxide. |
| PD | Lücker_1985 | not_relevant | 0 | 0 | The study reports no change in pharmacokinetics or pharmacodynamics (urinary excretion) and provides no numeric PD parameters or concentration-effect relationship. |
| popPK | Morris_2022 | irrelevant | 0 | 0 | The paper discusses circulating tumor DNA (ctDNA) in colon cancer and does not involve the drug aluminium_hydroxide or any pharmacokinetic parameters. |
| popPK | Nakamura_2024 | irrelevant | 0 | 0 | The paper is a clinical oncology study on ctDNA in colorectal cancer and does not report pharmacokinetic parameters for aluminium_hydroxide. |
| popPK | Nguyen_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of doxycycline, with aluminium hydroxide serving only as a co-administered antacid agent rather than the subject drug. |
| popPK | Origitano_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Photofrin-II (HpD-II) in a canine model, not aluminium_hydroxide. |
| popPK | Parolini_2019 | irrelevant | 0 | 0 | The paper is a clinical study on antiviral therapy for biliary atresia and does not involve aluminium_hydroxide or report any pharmacokinetic parameters. |
| popPK | Pellatt_2025 | irrelevant | 0 | 0 | The paper is a clinical trial of TAS-102 in colorectal cancer and does not involve aluminium_hydroxide or report any pharmacokinetic parameters. |
| PD | Poulsen_1985 | not_relevant | 0 | 0 | The paper describes a laboratory diagnostic method (AlRAST) using aluminium hydroxide as a sorbent, not a pharmacodynamic or exposure-response analysis of the drug itself. |
| popPK | Ramirez_2007 | irrelevant | 0 | 0 | The study evaluates the efficacy of imiquimod for tattoo removal in guinea pigs and does not involve aluminium_hydroxide or report any pharmacokinetic parameters. |
| popPK | Ritter_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of muzolimine, with aluminium hydroxide serving only as a co-administered agent to test for interaction, not as the subject drug. |
| popPK | Rodin_1988 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic interactions with digoxin, where aluminium hydroxide is mentioned only as an interacting agent that reduces digoxin absorption, not as the subject drug for PK parameter estimation. |
| PD | Roeffen_2015 | not_relevant | 0 | 0 | The paper reports immunogenicity and functional antibody activity (SMFA) for a malaria vaccine candidate, not a pharmacodynamic exposure-response relationship for aluminium hydroxide as a drug. |
| popPK | Rudiman_2023 | irrelevant | 0 | 0 | The paper is a systematic review of topical sucralfate for wound healing and pain, not a pharmacokinetic study of aluminium hydroxide. |
| PD | Rudiman_2023 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical trials evaluating the efficacy of topical sucralfate, containing no pharmacokinetic data, exposure-response modeling, or numeric PD parameters for aluminium hydroxide. |
| popPK | Sadana_2025 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for artesunate in cervical precancer treatment and does not involve aluminium_hydroxide or report any pharmacokinetic parameters. |
| popPK | Scoville_2018 | irrelevant | 0 | 0 | The study focuses on acetaminophen pharmacokinetics during renal replacement therapy and does not involve aluminium_hydroxide. |
| popPK | Seale_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of polyvinylpyrrolidone (PVP), not aluminium_hydroxide. |
| popPK | Sojati_2025 | irrelevant | 0 | 0 | The paper is an immunology study on human metapneumovirus (HMPV) and interferon responses, and does not involve aluminium_hydroxide or pharmacokinetic parameters. |
| PD | Stephen_2017 | not_relevant | 0 | 0 | The paper describes the mechanism of action (neutrophil swarming and NET formation) using qualitative imaging and knockout mouse comparisons, but does not report any quantitative exposure-response or dose-response data with numeric PD parameters. |
| PD | Sáinz_2003 | not_relevant | 0 | 0 | The paper is a qualitative review of medication issues in ostomized patients and mentions aluminum hydroxide only as a cause of stool discoloration, without providing any quantitative pharmacodynamic or exposure-response data. |
| PD | Taylor_1978 | not_relevant | 1 | 0 | The paper provides a qualitative comparison of therapeutic agents for post-vagotomy diarrhoea without reporting any numeric concentration-effect or dose-response parameters for aluminium hydroxide. |
| popPK | Thomson_1989 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for lisinopril, not aluminium_hydroxide. |
| PD | Thomson_1989 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of lisinopril, not pharmacodynamics (PD) or exposure-response relationships for aluminium hydroxide. |
| popPK | Tie_2025 | irrelevant | 0 | 0 | The paper is a clinical trial regarding ctDNA-guided chemotherapy for colon cancer and does not involve the drug aluminium_hydroxide or pharmacokinetic parameters. |
| popPK | Tjandra-Maga_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of flecainide, with aluminium hydroxide serving only as a co-administered agent to test for interaction, not as the subject drug. |
| popPK | Tvedskov_2024 | irrelevant | 0 | 0 | The paper is a clinical oncology study regarding axillary clearance in breast cancer and does not contain any pharmacokinetic data for aluminium_hydroxide. |
| PD | Varela-Martínez_2023 | not_relevant | 0 | 0 | The paper reports differential miRNA expression in sheep spleens following vaccination with aluminium hydroxide adjuvants, but it does not provide any pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for the adjuvant itself. |
| popPK | Vergin_1989 | irrelevant | 0 | 0 | The study investigates the effect of aluminium-hydroxide on the pharmacokinetics of pirenzepine, not the pharmacokinetic parameters of aluminium-hydroxide itself. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper investigates the mediation of asthma risk by immune responses to aluminium hydroxide as an innate ligand, not the pharmacokinetics or pharmacodynamics of aluminium hydroxide as a therapeutic drug. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper focuses on ultrasound-mediated delivery of immune adjuvants for tumor immunotherapy and does not report pharmacokinetic parameters for aluminium hydroxide. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper is an immunology study on cryptococcal vaccines and does not report pharmacokinetic parameters for aluminium hydroxide. |
| popPK | Zeng_2026 | irrelevant | 0 | 0 | The paper focuses on LNP-based delivery of CpG for cancer vaccines and does not report pharmacokinetic parameters for aluminium_hydroxide. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The paper is a surgical case report on axillary lymph node clearance and contains no pharmacokinetic data for aluminium_hydroxide. |
| popPK | Zussman_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cilomilast, with aluminium hydroxide serving only as a co-administered antacid agent rather than the subject drug. |
| popPK | unknown_1984 | irrelevant | 0 | 0 | The paper is a clinical trial of breast cancer treatment and does not involve aluminium_hydroxide or pharmacokinetic parameters. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The provided evidence consists only of a conference title and contains no pharmacokinetic data or study details for aluminium_hydroxide. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific data, models, or parameters regarding aluminium hydroxide pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_aluminium_hydroxide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
