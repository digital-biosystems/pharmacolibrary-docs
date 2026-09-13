<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;linseed&quot;}]"></div>

# linseed

- **generic name:** linseed
- **ATC codes:** `A06AC05`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 10:51 | 11:44 | 0/0/0 | 1/1/0 | 0/0/0 | 272,884/4,324 | ollama / qwen3.8:27b-mtp-q8_0 | 20 | 0/0 | 20/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Alawlaqi_2023](drugs/drug_linseed/pd_Alawlaqi_2023_unknown.md) | Alawlaqi MM et al., Evaluation of Biomedical Applications f…, Journal of functional bioma… (2023) | [10.3390/jfb14060300](https://doi.org/10.3390/jfb14060300) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ariza_2019](drugs/drug_linseed/pd_Ariza_2019_MFC.md) | Ariza JM et al., Effects on milk quantity and compositio…, Scientific reports (2019) | [10.1038/s41598-019-54193-z](https://doi.org/10.1038/s41598-019-54193-z) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ariza_2019](drugs/drug_linseed/pd_Ariza_2019_MPC.md) | Ariza JM et al., Effects on milk quantity and compositio…, Scientific reports (2019) | [10.1038/s41598-019-54193-z](https://doi.org/10.1038/s41598-019-54193-z) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ariza_2019](drugs/drug_linseed/pd_Ariza_2019_MY.md) | Ariza JM et al., Effects on milk quantity and compositio…, Scientific reports (2019) | [10.1038/s41598-019-54193-z](https://doi.org/10.1038/s41598-019-54193-z) |

## Coverage

- **PubMed hits:** 39 matched, 38 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Heidari_2020.pdf` | Heidari SM et al., Identifying alternative solvents for C6…, Journal of hazardous materi… (2020) | pd | 4 | [10.1016/j.jhazmat.2020.122337](https://doi.org/10.1016/j.jhazmat.2020.122337) | [32172058](https://www.ncbi.nlm.nih.gov/pubmed/32172058) | metadata signals extractable PD data (EC50) |
| `OKeefe_1990.pdf` | O'Keefe SF et al., Trans n-3 eicosapentaenoic and docosahe…, Journal of lipid research (1990) | pd | 4 | not captured | [2144870](https://www.ncbi.nlm.nih.gov/pubmed/2144870) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-11T10:48:10.668230+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alawlaqi_2023 | irrelevant | 0 | 0 | The paper is an in-vitro study evaluating antimicrobial, antioxidant, and anti-diabetic activities of linseed extract, containing no pharmacokinetic data. |
| popPK | Ariza_2019 | irrelevant | 0 | 0 | The study investigates the effects of extruded linseed supplementation on milk yield and composition in dairy cows, not the pharmacokinetics of linseed as a drug. |
| popPK | Barson_1994 | irrelevant | 0 | 0 | The paper is an entomological study on fungal control of house flies where linseed oil is used as a carrier, not a pharmacokinetic study of linseed as a drug. |
| PD | Barson_1994 | not_relevant | 2 | 1 | The paper reports a dose-response bioassay for entomopathogenic fungi using linseed oil as a carrier, but it does not report a pharmacodynamic relationship for linseed itself (e.g., concentration-effect of linseed on a biological target) nor does it provide numeric PD parameters like Emax or EC50 for the oil. |
| popPK | Bayındır_2025 | irrelevant | 0 | 0 | The paper is an in-vitro food science study on the antioxidant properties of linseed extracts in meat, containing no pharmacokinetic data. |
| PD | Bayındır_2025 | not_relevant | 2 | 1 | The paper reports in vitro antioxidant assays (IC50, FRAP) and qualitative/percentage changes in meat quality parameters, but lacks a formal pharmacodynamic model or exposure-response analysis for linseed. |
| popPK | Cantele_2020 | irrelevant | 0 | 0 | The paper is a food chemistry study on the antioxidant effects of hemp extract in linseed oil, not a pharmacokinetic study, and contains no PK parameters for linseed. |
| PD | Cantele_2020 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (EC50) and lipid oxidation kinetics in a bulk oil model, which is food chemistry, not pharmacodynamic exposure-response modeling for a drug. |
| PGx | Claassen_1995 | not_relevant | 0 | 0 | The paper investigates the effect of dietary fatty acid supplementation on bone status in rats, not the pharmacogenomics of linseed as a drug. |
| popPK | Danbara_2005 | irrelevant | 0 | 0 | The study investigates the anti-cancer mechanisms of enterolactone (a metabolite of linseed) in vitro and in vivo, but does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Dantas_2021 | irrelevant | 0 | 0 | The paper is a review of okra (Abelmoschus esculentus) as a functional food and does not study linseed or report any pharmacokinetic parameters. |
| PD | Dantas_2021 | not_relevant | 0 | 0 | The paper is a review of okra (Abelmoschus esculentus) as a functional food and does not contain any pharmacodynamic or exposure-response data for linseed. |
| popPK | Derbali_2015 | irrelevant | 0 | 0 | The study is a mechanistic/toxicology investigation of cardioprotective effects and does not report any pharmacokinetic parameters for linseed. |
| PD | Derbali_2015 | not_relevant | 3 | 2 | The study reports an in vitro IC50 for ACE inhibition but lacks a pharmacokinetic profile or dose-response curve for the cardioprotective effect in vivo, preventing the derivation of a PD exposure-response relationship. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper is a risk assessment of nitrate and nitrite in feed and does not involve linseed or report any pharmacokinetic parameters. |
| PD | EFSA_2020 | not_relevant | 3 | 2 | The paper is a risk assessment for nitrate/nitrite in feed, not a pharmacodynamic study of linseed, and only provides benchmark dose (BMDL) and NOAEL values for toxicity rather than a drug-specific exposure-response model with parameters like Emax or EC50. |
| popPK | EFSA_2024 | irrelevant | 0 | 0 | The paper is a risk assessment of ergot alkaloids in feed and does not study linseed or report pharmacokinetic parameters for it. |
| PD | EFSA_2024 | not_relevant | 0 | 0 | The paper is a risk assessment for ergot alkaloids in feed and does not contain any pharmacodynamic or exposure-response analysis for linseed. |
| PGx | Galinousky_2020 | not_relevant | 0 | 0 | The paper investigates the genetic basis of fiber quality in flax plants, not the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Garcia-Aloy_2019 | irrelevant | 0 | 0 | The paper is a review of biomarkers of food intake for nuts and vegetable oils (including linseed/flaxseed) and does not report pharmacokinetic parameters for linseed as a drug. |
| PD | Garcia-Aloy_2019 | not_relevant | 1 | 0 | The paper is a review of biomarkers of food intake and does not report any pharmacodynamic or exposure-response models with numeric parameters for linseed. |
| PGx | Gondret_2025 | not_relevant | 0 | 0 | The paper studies the effect of diet and genotype on pig adipose tissue metabolism, not the pharmacokinetics or pharmacodynamics of linseed as a drug. |
| popPK | Hadi_2020 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of lipid profile outcomes, not a pharmacokinetic study, and contains no PK parameters for linseed. |
| PD | Hadi_2020 | not_relevant | 3 | 2 | The paper is a systematic review and meta-analysis reporting weighted mean differences for lipid profiles, not a pharmacodynamic model or dose-response analysis with numeric PD parameters like Emax or EC50. |
| popPK | Hassanein_2022 | irrelevant | 0 | 0 | The paper is a food chemistry study characterizing the physicochemical properties and lipid composition of linseed oil, containing no pharmacokinetic data. |
| PD | Hassanein_2022 | not_relevant | 0 | 0 | The paper is a food chemistry study characterizing the physicochemical properties and oxidative stability of linseed oil after roasting; it does not report any pharmacodynamic or exposure-response relationships for a drug. |
| popPK | Heidari_2020 | irrelevant | 0 | 0 | The provided evidence contains only a fragment of a title regarding solvents and lacks any pharmacokinetic data or context for linseed. |
| PD | Heidari_2020 | not_relevant | 0 | 0 | The paper focuses on solvent toxicity for C60 manufacturing and does not report any pharmacodynamic or exposure-response data for linseed. |
| popPK | Majed_2024 | irrelevant | 0 | 0 | The paper is a pharmacognosy study on antioxidant and anti-inflammatory properties of oilseed cakes, not a pharmacokinetic study, and contains no PK parameters for linseed. |
| PD | Majed_2024 | not_relevant | 0 | 0 | The paper focuses on the isolation and characterization of compounds from lettuce seed cake; linseed is only mentioned as a comparative source in the introduction and screening, with no pharmacodynamic or exposure-response analysis performed on it. |
| PGx | Manzke_2018 | not_relevant | 0 | 0 | The paper studies the effect of dietary oil supplementation on pig growth and does not report pharmacogenomic effects on the PK/PD of linseed. |
| PGx | Martin_2007 | not_relevant | 0 | 0 | The paper studies the effect of dietary fatty acids (including linseed oil) on lipid metabolism in PPAR-alpha knockout mice, not the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Martin_2016 | irrelevant | 0 | 0 | The paper is a study on enteric methane emission and rumen fermentation in dairy cows fed linseed, not a pharmacokinetic study of linseed as a drug. |
| popPK | Mukhopadhyay_2007 | irrelevant | 0 | 0 | The paper is a food processing study on reducing tannins in linseed meal via extrusion cooking and contains no pharmacokinetic data. |
| PD | Mukhopadhyay_2007 | not_relevant | 0 | 0 | The paper investigates the effect of extrusion cooking process variables on tannin reduction in linseed meal, which is a food processing study, not a pharmacodynamic or exposure-response analysis of a drug. |
| popPK | Mukta_2023 | irrelevant | 0 | 0 | The study investigates the cardioprotective effects of linseed as a functional food in a rat model, reporting biochemical markers (LDH, CK-MB, MDA, SOD) and histopathology, but contains no pharmacokinetic parameters (CL, V, ka, etc.) for linseed. |
| PD | Mukta_2023 | not_relevant | 1 | 0 | The study is a single-dose animal efficacy trial comparing group means (ANOVA) without measuring drug concentrations or fitting a dose-response curve, so no PD parameters (Emax, EC50, etc.) are reported or derivable. |
| popPK | OKeefe_1990 | irrelevant | 0 | 0 | The paper focuses on the metabolic effects of fatty acid isomers on platelets, not the pharmacokinetics of linseed. |
| PD | OKeefe_1990 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of fatty acid isomers on arachidonic acid metabolism in platelets, which is a mechanistic biochemical study, not a pharmacokinetic/pharmacodynamic (PK/PD) or exposure-response analysis of a drug like linseed. |
| popPK | Pignitter_2018 | irrelevant | 2 | 0 | The study investigates the metabolic conversion of alpha-linolenic acid (ALA) from linseed oil into long-chain fatty acids (EPA/DHA) using compartmental modeling, rather than reporting standard pharmacokinetic disposition parameters (CL, V, ka) for linseed as a drug. |
| popPK | Pressman_2025 | irrelevant | 0 | 0 | The paper is a study on enteric methane and hydrogen gas emissions sampling strategies in cattle, not a pharmacokinetic study, and reports no disposition parameters (CL, V, etc.) for linseed. |
| popPK | Ruiz-González_2017 | irrelevant | 0 | 0 | The study is an in-vitro rumen fermentation experiment assessing methane production, not a pharmacokinetic study of linseed. |
| popPK | Sajjadi_2024 | irrelevant | 0 | 0 | The paper is a review on the stability and formulation of tacrolimus, not a pharmacokinetic study of linseed. |
| PD | Sajjadi_2024 | not_relevant | 0 | 0 | The paper is a review on the physicochemical stability and formulation of tacrolimus, containing no pharmacodynamic or exposure-response data. |
| popPK | Saunders_1988 | irrelevant | 0 | 0 | The study uses linseed oil as a lipid source/probe to measure intestinal absorption efficiency and transit time, not to characterize the pharmacokinetic parameters (CL, V, ka) of linseed as a drug. |
| PGx | Soto-Cerda_2025 | not_relevant | 0 | 0 | The paper studies plant physiology and genetics in linseed (a crop), not human pharmacogenomics or drug pharmacokinetics/pharmacodynamics. |
| popPK | Szydłowska-Czerniak_2018 | irrelevant | 0 | 0 | The paper is a chemical synthesis and antioxidant capacity study of linseed oil, not a pharmacokinetic study. |
| PD | Szydłowska-Czerniak_2018 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (IC50) of synthesized compounds in oil, which is a chemical/physicochemical property, not a pharmacodynamic exposure-response relationship in a biological system. |
| popPK | Trattner_2011 | irrelevant | 0 | 0 | The study investigates the effects of dietary sesamin on fatty acid composition and gene expression in salmon, not the pharmacokinetics of linseed. |
| popPK | Wallace_2003 | irrelevant | 0 | 0 | The study investigates the immunological effects of linseed oil (ALNA) supplementation on mononuclear cell function and cytokine production, not pharmacokinetic parameters. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The evidence consists only of a conference title and contains no pharmacokinetic data or study details for linseed. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific study data, drug information, or pharmacodynamic parameters. |
| PGx | van_2017 | not_relevant | 0 | 0 | The paper investigates the interaction between a dietary supplement (linseed oil) and a genetic polymorphism (DGAT1) on metabolic traits in dairy cows, not the pharmacokinetics or pharmacodynamics of a drug. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_linseed`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
