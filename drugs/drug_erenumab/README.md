# erenumab

- **generic name:** erenumab
- **ATC codes:** `N02CD01`
- **DrugBank:** [DB14039](https://go.drugbank.com/drugs/DB14039)
- **groups:** approved, investigational

## About

**Description.** Erenumab (AMG-334) (INN; trade name Aimovig) is a human monoclonal antibody designed specifically to bind and antagonize the calcitonin gene-related peptide receptor (CGRPR) as a means to prevent migraines. Aimovig, as released and marketed by Novartis and Amgen, is in fact a novel therapeutic approach as the first and only FDA approved treatment specifically developed to prevent migraine by blocking the CGRP receptor, which is believed to play a critical role in migraine [L2823].

In particular, erenumab-aooe is a human immunoglobulin G2 monoclonal antibody that has high affinity binding to the CGRP receptor [FDA Label]. The antibody is produced utlilizing recombinant DNA technology in Chinese hamster ovary cells [FDA Label]. It is composed of 2 heavy chains, each containing 456 amino acids, and 2 light chains of the lambda subclass, each containing 216 amino acids, with an approximate molecular weight of 150 kDa [FDA Label].

**Indication.** Erenumab is indicated for the preventative treatment of migraine in adults [FDA Label].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-29 21:53 | 19:00 | 0/0/0 | 1/2/0 | 0/0/0 | 235,403/11,939 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 2/15 | 17/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> | [Vu_2017](drugs/drug_erenumab/Erenumab_Vu2017_mean_estimate.md) | Vu T et al., Pharmacokinetic-Pharmacodynamic Relatio…, Pharmaceutical research (2017) | [10.1007/s11095-017-2183-6](https://doi.org/10.1007/s11095-017-2183-6) |
| <span class="pk-badge pk-badge--neutral">not_reviewed</span> | [Vu_2017](drugs/drug_erenumab/Erenumab_Vu2017_mean_estimate_healthy_and_migraine_subjects.md) | Vu T et al., Pharmacokinetic-Pharmacodynamic Relatio…, Pharmaceutical research (2017) | [10.1007/s11095-017-2183-6](https://doi.org/10.1007/s11095-017-2183-6) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Vu_2017](drugs/drug_erenumab/Erenumab_Vu2017_shrinkage.md) | Vu T et al., Pharmacokinetic-Pharmacodynamic Relatio…, Pharmaceutical research (2017) | [10.1007/s11095-017-2183-6](https://doi.org/10.1007/s11095-017-2183-6) |
| <span class="pk-badge pk-badge--neutral">not_reviewed</span> | [Vu_2017](drugs/drug_erenumab/Erenumab_Vu2017_shrinkage_healthy_and_migraine_subjects.md) | Vu T et al., Pharmacokinetic-Pharmacodynamic Relatio…, Pharmaceutical research (2017) | [10.1007/s11095-017-2183-6](https://doi.org/10.1007/s11095-017-2183-6) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Vu_2017](drugs/drug_erenumab/Erenumab_Vu2017_units.md) | Vu T et al., Pharmacokinetic-Pharmacodynamic Relatio…, Pharmaceutical research (2017) | [10.1007/s11095-017-2183-6](https://doi.org/10.1007/s11095-017-2183-6) |
| <span class="pk-badge pk-badge--neutral">not_reviewed</span> | [Vu_2017](drugs/drug_erenumab/Erenumab_Vu2017_units_healthy_and_migraine_subjects.md) | Vu T et al., Pharmacokinetic-Pharmacodynamic Relatio…, Pharmaceutical research (2017) | [10.1007/s11095-017-2183-6](https://doi.org/10.1007/s11095-017-2183-6) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Vu_2017](drugs/drug_erenumab/pd_Vu_2017_DBF.md) | Vu T et al., Pharmacokinetic-Pharmacodynamic Relatio…, Pharmaceutical research (2017) | [10.1007/s11095-017-2183-6](https://doi.org/10.1007/s11095-017-2183-6) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Chan_2021](drugs/drug_erenumab/pd_Chan_2021_Dermal_blood_flow_DBF.md) | Chan P et al., Translational and pharmacokinetic-pharm…, Clinical and translational… (2021) | [10.1111/cts.13049](https://doi.org/10.1111/cts.13049) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kielbasa_2019](drugs/drug_erenumab/pd_Kielbasa_2019_free_CGRP.md) | Kielbasa W et al., A new era for migraine: Pharmacokinetic…, Cephalalgia : an internatio… (2019) | [10.1177/0333102419840780](https://doi.org/10.1177/0333102419840780) |

## Coverage

- **PubMed hits:** 40 matched, 38 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 6  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `de_2018.pdf` | de Hoon J et al., Phase I, Randomized, Double-blind, Plac…, Clinical pharmacology and t… (2018) | popPK | 10 | [10.1002/cpt.799](https://doi.org/10.1002/cpt.799) | [28736918](https://pubmed.ncbi.nlm.nih.gov/28736918) | The paper is a Phase I PK study of erenumab, but the provided evidence contains only qualitative descriptions of the PK profile without specific numeric parameter values. |
| `Gupta_2025.pdf` | Gupta P et al., A Semi-Mechanistic Mathematical Model o…, Pharmaceutics (2025) | popPK | 8 | [10.3390/pharmaceutics17070845](https://doi.org/10.3390/pharmaceutics17070845) | [40733054](https://pubmed.ncbi.nlm.nih.gov/40733054) | The paper describes a population PK model for erenumab in rats, but the specific numeric parameter values are not present in the provided evidence. |
| `Shen_2022.pdf` | Shen Q et al., Pharmacokinetics and Safety of Erenumab…, Clinical drug investigation (2022) | popPK | 8 | [10.1007/s40261-022-01171-5](https://doi.org/10.1007/s40261-022-01171-5) | [35727536](https://pubmed.ncbi.nlm.nih.gov/35727536) | The study reports non-compartmental PK parameters (Cmax, AUC) for erenumab, but lacks specific compartmental parameters like clearance (CL) or volume (V) in the provided text. |
| `Garelja_2024.pdf` | Garelja ML et al., Pharmacological characterisation of ere…, British journal of pharmaco… (2024) | pd | 4 | [10.1111/bph.16218](https://doi.org/10.1111/bph.16218) | [37580864](https://www.ncbi.nlm.nih.gov/pubmed/37580864) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-08-29T21:50:15.055406+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Hassany_2023 | irrelevant | 0 | 0 | The paper is a clinical case report and review discussing dose-finding strategies and pharmacodynamic models, containing no quantitative pharmacokinetic parameters (CL, V, t1/2) for erenumab. |
| PD | Al-Hassany_2023 | not_relevant | 3 | 2 | The paper is a review/commentary that references existing dose-response data (capsaicin model) but does not present new numeric PD parameters or a formal PK/PD model in the provided text. |
| popPK | Bashour_2023 | irrelevant | 0 | 0 | The paper is a computational study on antibody developability landscapes and does not report pharmacokinetic parameters for erenumab. |
| PD | Bashour_2023 | not_relevant | 0 | 0 | The paper focuses on computational analysis of antibody developability parameters (physicochemical properties) and does not contain any pharmacodynamic, exposure-response, or dose-response data for erenumab. |
| popPK | Bashour_2024 | irrelevant | 0 | 0 | The paper is a computational study on antibody developability landscapes and does not report pharmacokinetic parameters for erenumab. |
| PD | Bashour_2024 | not_relevant | 0 | 0 | The paper focuses on the biophysical and computational analysis of antibody developability parameters (physicochemical properties) and does not contain any pharmacokinetic, pharmacodynamic, or exposure-response data for erenumab or any other drug. |
| popPK | Chan_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for GDC-0334 (a TRPA1 inhibitor), not erenumab. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The paper focuses on psychometric modeling of the Migraine-Specific Quality-of-Life Questionnaire (MSQ) and does not report any pharmacokinetic parameters for erenumab. |
| PD | Chen_2023 | not_relevant | 3 | 1 | The paper focuses on psychometric modeling (IRT) of a questionnaire and qualitative simulation of improvement, without reporting specific numeric exposure-response parameters (e.g., EC50, Emax) or a concentration-effect curve for erenumab. |
| popPK | Di_2019 | irrelevant | 0 | 0 | The paper is a health economic analysis of utility values (EQ-5D) and does not report any pharmacokinetic parameters for erenumab. |
| PD | Di_2019 | not_relevant | 2 | 1 | The paper models utility values as a function of clinical response (MMDs), not drug exposure or dose, and does not report pharmacodynamic parameters like Emax or EC50. |
| popPK | Fiedler-Kelly_2019 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for fremanezumab, not erenumab. |
| PD | Fiedler-Kelly_2019 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for fremanezumab, not erenumab, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Fiedler-Kelly_2020 | irrelevant | 0 | 0 | The study focuses on fremanezumab, not erenumab, and does not report quantitative PK parameters for the target drug. |
| PD | Fiedler-Kelly_2020 | not_relevant | 0 | 0 | The paper reports exposure-response models for fremanezumab, not erenumab. |
| popPK | Gallardo_2026 | irrelevant | 0 | 0 | The study focuses on neuroimaging and serum biomarkers for migraine diagnosis and does not report any pharmacokinetic parameters for erenumab. |
| popPK | Garelja_2024 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study characterizing receptor binding and antagonism (IC50, pKB), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Giner-Soriano_2025 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for migraine preventive drugs (propranolol, amitriptyline, flunarizine, topiramate) and does not report pharmacokinetic parameters for erenumab. |
| PD | Giner-Soriano_2025 | not_relevant | 0 | 0 | The paper is a study protocol for a clinical trial comparing standard migraine preventives (propranolol, amitriptyline, flunarizine, topiramate) and does not involve erenumab or report any pharmacodynamic or exposure-response modeling. |
| popPK | González-Hernández_2025 | irrelevant | 1 | 0 | The paper is a narrative review without original quantitative PK parameter values for erenumab. |
| PD | González-Hernández_2025 | not_relevant | 2 | 1 | The paper is a narrative review that qualitatively discusses PK/PD characteristics of anti-CGRP therapies but does not report specific numeric PD parameters or extractable exposure-response curves for erenumab. |
| popPK | Gupta_2025 | relevant | 8 | 0 | The paper describes a population PK model for erenumab in rats, but the specific numeric parameter values are not present in the provided evidence. |
| PD | Gupta_2025 | not_relevant | 4 | 2 | The paper describes a semi-mechanistic PK/immunogenicity model for ADA formation and immune tolerance, not a pharmacodynamic exposure-response relationship for the drug's therapeutic effect (e.g., CGRP receptor inhibition), and specific numeric PD parameters for the drug effect are not reported. |
| popPK | Iannone_2022 | irrelevant | 0 | 0 | The paper is a clinical study on the effectiveness of anti-CGRP antibodies on migraine symptoms and does not report any pharmacokinetic parameters for erenumab. |
| PD | Iannone_2022 | not_relevant | 1 | 0 | The study reports qualitative clinical outcomes and symptom reduction percentages in a cohort but does not provide drug concentrations, dose levels, or numeric PD parameters (e.g., Emax, EC50) to establish an exposure-response relationship. |
| popPK | Janković_2024 | irrelevant | 0 | 0 | The paper is a narrative review focusing on drug interactions and does not report original quantitative pharmacokinetic parameters for erenumab. |
| PD | Janković_2024 | not_relevant | 1 | 0 | The paper is a narrative review focusing on drug interactions and provides no numeric PD parameters or concentration-effect curves for erenumab. |
| popPK | Jordan_2023 | irrelevant | 0 | 0 | The paper is a systematic scoping review on breastfeeding and infant outcomes, not a pharmacokinetic study, and does not report quantitative PK parameters for erenumab. |
| PD | Jordan_2023 | not_relevant | 0 | 0 | The paper is a systematic scoping review regarding breastfeeding and infant outcomes, containing no pharmacodynamic modeling or specific data for erenumab. |
| popPK | Kamogawa_2026 | irrelevant | 0 | 0 | The paper is a clinical outcome study evaluating functional improvement in adolescents and does not report any pharmacokinetic parameters for erenumab. |
| popPK | Karlsson_2026 | irrelevant | 0 | 0 | The study is a biomarker analysis (hs-CRP and TNF-α) and does not report any pharmacokinetic parameters for erenumab. |
| popPK | Kielbasa_2019 | irrelevant | 1 | 0 | The paper is a review focused on galcanezumab, and while it mentions erenumab's half-life and bioavailability in a table, it does not report quantitative disposition parameters (CL, V, Q) or a compartmental model for erenumab as the subject drug. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The paper focuses on the discovery of GLP-1 receptor antibodies and only mentions erenumab as an example of an approved GPCR antibody without providing any pharmacokinetic parameters for it. |
| PD | Liu_2021 | not_relevant | 0 | 0 | The paper focuses on the discovery of novel GLP-1R antibodies (TB01-3, TB59-2) and does not report any pharmacodynamic or exposure-response data for erenumab. |
| popPK | Martín-Yeves_2026 | irrelevant | 0 | 0 | The paper is a clinical effectiveness study comparing migraine outcomes and does not report any pharmacokinetic parameters for erenumab. |
| popPK | Mattioli_2026 | irrelevant | 0 | 0 | The study is a retrospective real-world clinical outcome analysis of migraine efficacy and does not report any pharmacokinetic parameters for erenumab. |
| popPK | Szkutnik-Fiedler_2020 | irrelevant | 2 | 3 | The paper is a review of multiple anti-migraine drugs, and while it mentions erenumab's half-life and bioavailability, it lacks the specific quantitative disposition parameters (CL, V, Q) or compartmental models required for population-PK extraction. |
| PD | Szkutnik-Fiedler_2020 | not_relevant | 1 | 0 | The paper is a review of drug-drug interactions and general PK/PD concepts for migraine drugs, providing no specific numeric PD parameters or exposure-response data for erenumab. |
| PGx | Szkutnik-Fiedler_2020 | not_relevant | 0 | 0 | The paper is a review of drug-drug and drug-food interactions, not pharmacogenomic effects of gene variants on PK/PD. |
| popPK | Xu_2019 | irrelevant | 1 | 0 | The study evaluates the pharmacokinetics of oral contraceptives (ethinyl estradiol, norgestrel, norelgestromin) in the presence of erenumab, reporting no quantitative disposition parameters (CL, V, etc.) for erenumab itself. |
| PD | Xu_2019 | not_relevant | 0 | 0 | The study evaluates pharmacokinetic drug-drug interactions and qualitative hormonal markers, but does not report a concentration-effect or dose-response model for erenumab with numeric PD parameters. |
| popPK | Yang_2022 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy and safety outcomes, not a pharmacokinetic study, and it does not report quantitative PK parameters like clearance or volume for erenumab. |
| PD | Yang_2022 | not_relevant | 2 | 1 | The paper is a meta-analysis comparing fixed doses (70mg vs 140mg) and does not report concentration-effect relationships or numeric PD parameters like Emax or EC50. |
| PGx | Zecca_2022 | not_relevant | 4 | 8 | The study reports a nominal association between a genetic variant and a clinical response endpoint (50/75% reduction in migraine days), but the association did not survive adjustment for confounders, and no specific pharmacokinetic or pharmacodynamic parameter (e.g., AUC, Cmax, receptor occupancy) was measured or reported as a fitted effect size. |
| popPK | de_2018 | relevant | 10 | 0 | The paper is a Phase I PK study of erenumab, but the provided evidence contains only qualitative descriptions of the PK profile without specific numeric parameter values. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | The evidence consists only of a conference title with no pharmacokinetic data or specific study content for erenumab. |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a title of a conference abstract collection and contains no data, analysis, or parameters regarding erenumab pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_erenumab`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
