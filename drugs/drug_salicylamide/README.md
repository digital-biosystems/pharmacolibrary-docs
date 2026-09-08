# salicylamide

- **generic name:** salicylamide
- **ATC codes:** `N02BA05`
- **DrugBank:** [DB08797](https://go.drugbank.com/drugs/DB08797)
- **groups:** approved

## About

**Description.** Salicylamide is the common name for the substance o-hydroxybenzamide, or amide of salicyl. Salicylamide is a non-prescription drug with analgesic and antipyretic properties. It has similar medicinal uses to aspirin. Salicylamide is used in combination with both aspirin and caffeine in the over-the-counter pain remedies

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-28 13:41 | 17:40 | 0/0/0 | 0/2/0 | 0/0/0 | 38,367/3,656 | ollama / qwen3.8:27b-q4_K_M | 8 | 2/6 | 8/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Tang_2011](drugs/drug_salicylamide/pd_Tang_2011_HA_trypsin_sensitivity.md) | Tang G et al., Design and synthesis of benzenesulfonam…, ACS medicinal chemistry let… (2011) | [10.1021/ml2000627](https://doi.org/10.1021/ml2000627) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tang_2011](drugs/drug_salicylamide/pd_Tang_2011_cytopathic_effect_CPE.md) | Tang G et al., Design and synthesis of benzenesulfonam…, ACS medicinal chemistry let… (2011) | [10.1021/ml2000627](https://doi.org/10.1021/ml2000627) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tang_2011](drugs/drug_salicylamide/pd_Tang_2011_hemolysis_of_chicken_red_blood_cells.md) | Tang G et al., Design and synthesis of benzenesulfonam…, ACS medicinal chemistry let… (2011) | [10.1021/ml2000627](https://doi.org/10.1021/ml2000627) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Xu_2021](drugs/drug_salicylamide/pd_Xu_2021_unknown.md) | Xu J et al., Discovery of a Small Molecule Inhibitor…, International journal of mo… (2021) | [10.3390/ijms22041617](https://doi.org/10.3390/ijms22041617) |

## Coverage

- **PubMed hits:** 48 matched, 43 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liedtke_1980.pdf` | Liedtke R et al., [Multiple-dose pharmacokinetics of para…, Arzneimittel-Forschung (1980) | popPK | 9 | not captured | [7192145](https://pubmed.ncbi.nlm.nih.gov/7192145) | The study reports quantitative pharmacokinetic parameters for salicylamide using a two-compartment model, but the specific numeric values are not present in the provided evidence. |
| `Cenajek_1975.pdf` | Cenajek D et al., Influence of adrenal dysfunction on act…, Archivum immunologiae et th… (1975) | popPK | 8 | not captured | [1220634](https://pubmed.ncbi.nlm.nih.gov/1220634) | The study investigates the pharmacokinetics of salicylamide, but the provided evidence contains only the abstract and lacks any specific numeric parameter values. |
| `Jones_2005.pdf` | Jones HM et al., Impact of end-product inhibition on the…, Xenobiotica; the fate of fo… (2005) | pd | 5 | [10.1080/00498250500136619](https://doi.org/10.1080/00498250500136619) | [16012076](https://www.ncbi.nlm.nih.gov/pubmed/16012076) | metadata signals extractable PD data (IC50) |
| `Combrink_2000.pdf` | Combrink KD et al., Salicylamide inhibitors of influenza vi…, Bioorganic & medicinal chem… (2000) | pd | 4 | [10.1016/s0960-894x(00)00335-8](https://doi.org/10.1016/s0960-894x(00)00335-8) | [10937716](https://www.ncbi.nlm.nih.gov/pubmed/10937716) | metadata signals extractable PD data (EC50) |
| `Gerin_2013.pdf` | Gerin B et al., Assessment of cytochrome P450 (1A2, 2B6…, Xenobiotica; the fate of fo… (2013) | pd | 4 | [10.3109/00498254.2012.719088](https://doi.org/10.3109/00498254.2012.719088) | [23153057](https://www.ncbi.nlm.nih.gov/pubmed/23153057) | metadata signals extractable PD data (EC50) |
| `Hurd_1993.pdf` | Hurd RE et al., A study of the 3,5,3'-triiodothyronine…, Endocrinology (1993) | pd | 4 | [10.1210/endo.133.5.8404641](https://doi.org/10.1210/endo.133.5.8404641) | [8404641](https://www.ncbi.nlm.nih.gov/pubmed/8404641) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-08-28T13:33:51.684496+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahlqvist_2025 | irrelevant | 0 | 0 | The paper is a metabolite identification study for 120 compounds where salicylamide is used only as a CYP inhibitor in an in-vitro assay, not as the subject drug for PK parameter estimation. |
| PD | Ahlqvist_2025 | not_relevant | 0 | 0 | The paper focuses on metabolite identification and chemical space analysis of 120 compounds; it does not report pharmacodynamic or exposure-response data for salicylamide. |
| popPK | Biber_1976 | irrelevant | 2 | 8 | The study reports in-vitro membrane diffusion clearance values for salicylamide, which are not population pharmacokinetic parameters for a subject drug in a physiological context. |
| popPK | Cenajek_1975 | relevant | 8 | 0 | The study investigates the pharmacokinetics of salicylamide, but the provided evidence contains only the abstract and lacks any specific numeric parameter values. |
| PD | Cenajek_1975 | not_relevant | 0 | 0 | The provided text is an abstract that mentions the study of pharmacodynamic activity and pharmacokinetics but does not contain any numeric PD parameters, concentration-effect curves, or specific quantitative results. |
| popPK | Combrink_2000 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study on influenza virus fusion inhibitors and does not report any pharmacokinetic parameters for salicylamide. |
| popPK | Cory_2005 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on tumor cell growth and apoptosis, not a pharmacokinetic study, and contains no disposition parameters for salicylamide. |
| popPK | Gerin_2013 | irrelevant | 0 | 0 | The paper is an in-vitro CYP induction assay validation study where salicylamide is used only as a phase II inhibitor, not as a subject drug for PK parameter estimation. |
| PD | Gerin_2013 | not_relevant | 0 | 0 | The paper is a method validation study for CYP induction assays; salicylamide is used only as a phase II inhibitor to test assay conditions, and no pharmacodynamic or exposure-response data for salicylamide itself are reported. |
| PGx | Gerin_2013 | not_relevant | 0 | 0 | The paper is a methodological validation of a CYP induction assay and discusses salicylamide only as a phase II inhibitor, not as a drug subject to pharmacogenomic analysis. |
| popPK | Grishchenko_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on tacrine-salicylamide conjugates for Alzheimer's disease, reporting in-vitro enzyme inhibition and antioxidant data, with no pharmacokinetic parameters for salicylamide. |
| PD | Grishchenko_2022 | not_relevant | 3 | 2 | The paper reports in vitro enzyme inhibition constants (IC50, Ki) and kinetic profiles, which are pharmacological potency metrics, but does not report a pharmacodynamic (exposure-response) model or dose-response relationship for the drug in a biological system with PD parameters like Emax or EC50. |
| popPK | Huo_2025 | irrelevant | 0 | 0 | The paper focuses on the synthesis and anti-HBV activity of salicylamide derivatives, reporting no pharmacokinetic parameters for salicylamide itself. |
| popPK | Hurd_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay of T3 sulfation where salicylamide is used only as an inhibitor, not as the subject drug for pharmacokinetic parameter estimation. |
| popPK | Högberg_1991 | irrelevant | 0 | 0 | The paper focuses on the synthesis and receptor binding affinity (IC50) of salicylamide derivatives, not on pharmacokinetic disposition parameters. |
| popPK | Jones_2005 | irrelevant | 0 | 0 | The study focuses on in vitro metabolic clearance of other drugs (triazolam, diazepam, phenytoin) where salicylamide is used only as a glucuronidation inhibitor, not as the subject drug for PK parameter extraction. |
| PD | Jones_2005 | not_relevant | 0 | 0 | The paper discusses in vitro metabolic clearance and end-product inhibition for triazolam, diazepam, and phenytoin, and does not report any pharmacodynamic or exposure-response relationship for salicylamide. |
| popPK | Jorda_2017 | irrelevant | 0 | 0 | The paper reports on the synthesis and antiproteasomal activity of salicylamide-based inhibitors, not the pharmacokinetics of salicylamide itself. |
| popPK | Jorda_2021 | irrelevant | 0 | 0 | The paper describes the synthesis and antiproteasomal activity of salicylic acid-modified pseudopeptides, not the pharmacokinetics of salicylamide. |
| popPK | Kadry_2025 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of salicylamide derivatives as PARP-1 inhibitors and contains no pharmacokinetic data. |
| popPK | Krátký_2021 | irrelevant | 0 | 0 | The paper is an in-vitro study on cholinesterase/MAO inhibitors where salicylamide derivatives are the subject, not a pharmacokinetic study of salicylamide. |
| popPK | Li_2012 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel anti-melanoma agents containing a salicylamide moiety, not a pharmacokinetic study of salicylamide itself. |
| popPK | Liedtke_1980 | relevant | 9 | 0 | The study reports quantitative pharmacokinetic parameters for salicylamide using a two-compartment model, but the specific numeric values are not present in the provided evidence. |
| popPK | Lin_1978 | irrelevant | 1 | 0 | The study focuses on ethoxybenzamide as the subject drug, with salicylamide serving only as a metabolite for in vitro measurement, and no PK parameters for salicylamide itself are reported. |
| popPK | Liu_2026 | irrelevant | 1 | 0 | The study focuses on celecoxib cocrystals where salicylamide is only a co-former, and no pharmacokinetic parameters for salicylamide itself are reported. |
| PD | Liu_2026 | not_relevant | 0 | 0 | The paper focuses on the formulation and bioavailability of celecoxib cocrystals (including one with salicylamide) and does not report any pharmacodynamic or exposure-response analysis for salicylamide itself. |
| popPK | Makhaeva_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on tacrine-salicylamide conjugates for Alzheimer's disease, reporting in-vitro enzyme inhibition and binding data, but contains no pharmacokinetic parameters for salicylamide. |
| PD | Makhaeva_2023 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition constants (IC50/Ki) and molecular docking data, but does not contain any pharmacokinetic (PK) data, exposure-response analysis, or pharmacodynamic (PD) modeling in vivo or in vitro. |
| popPK | Makhaeva_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on amiridine-salicylamide conjugates for Alzheimer's disease, reporting in-vitro enzyme inhibition and docking data, but contains no pharmacokinetic parameters for salicylamide. |
| PD | Makhaeva_2025 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) and molecular docking for novel conjugates, but does not contain any pharmacokinetic data, exposure-response analysis, or pharmacodynamic modeling for salicylamide. |
| popPK | Mehanna_2005 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro biological testing of thiosalicylamides as calcium channel blockers, containing no pharmacokinetic data for salicylamide. |
| popPK | Mesquita_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nitazoxanide (a salicylamide derivative) against Leishmania, reporting IC50 values and cellular effects rather than pharmacokinetic parameters for salicylamide. |
| popPK | Morris_1985 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (hypnotic effect) and concentration ratios rather than reporting quantitative pharmacokinetic parameters like clearance, volume, or half-life. |
| popPK | Mu_2003 | irrelevant | 0 | 0 | The paper focuses on the synthesis and anticancer activity of lavendustin A analogues, not the pharmacokinetics of salicylamide. |
| popPK | Patel_2024 | irrelevant | 0 | 0 | The paper is a mini-review of HDAC inhibitors and does not report any pharmacokinetic parameters for salicylamide. |
| PD | Patel_2024 | not_relevant | 1 | 1 | The text is a mini-review that only qualitatively mentions salicylamide derivatives and general IC50 ranges without providing specific numeric PD parameters or exposure-response data for salicylamide. |
| popPK | Pindjakova_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on salicylanilide-based peptidomimetics reporting in vitro antimicrobial and cytotoxic activities, not a pharmacokinetic study of salicylamide. |
| PD | Pindjakova_2022 | not_relevant | 2 | 2 | The paper reports single-point MIC and IC50 values for a series of compounds but does not provide concentration-effect curves, dose-response modeling, or PK/PD analysis for salicylamide. |
| popPK | Podowski_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of hexachlorocyclopentadiene, and salicylamide is only mentioned as an enzyme inhibitor, not as the subject drug. |
| PGx | Prescott_1983 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (ethanol, cimetidine) and toxicity mechanisms, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of salicylamide. |
| popPK | Shibasaki_1985 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding salicylamide pharmacokinetics. |
| popPK | Song_2019 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in vitro biological evaluation of salicylamide derivatives, with no pharmacokinetic data or disposition parameters reported. |
| popPK | Tang_2011 | irrelevant | 0 | 0 | The paper studies salicylamide-based influenza inhibitors (compounds 1, 28, 40) rather than the drug salicylamide itself, and the PK parameters reported are for these novel analogues, not the subject drug. |
| PGx | To_2012 | not_relevant | 0 | 0 | The paper investigates salicylamide as a pharmacological inhibitor of AhR to reverse multidrug resistance, not as a drug whose PK/PD is altered by a specific gene variant. |
| popPK | Xu_2020 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study on salicylamide derivatives as antiviral inhibitors and does not report any pharmacokinetic parameters. |
| popPK | Xu_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on salicylamide derivatives as antiviral agents against adenovirus, reporting in-vitro IC50 values but no pharmacokinetic parameters. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The paper is a structure-activity relationship (SAR) study focusing on anticancer activity and mechanism, not pharmacokinetics, and contains no PK parameters for salicylamide. |
| popPK | Yoon_2011 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro biological activity of salicylamide analogues, containing no pharmacokinetic data. |
| popPK | Yu_1999 | irrelevant | 0 | 0 | The paper describes the synthesis and antiviral activity (EC50) of salicylamide derivatives, not their pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_salicylamide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
