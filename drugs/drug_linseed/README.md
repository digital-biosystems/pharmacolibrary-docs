<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;linseed&quot;}]"></div>

# linseed

- **generic name:** linseed
- **ATC codes:** `A06AC05`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 20:24 | 8:23 | 0/0/0 | 1/1/0 | 0/0/0 | 302,754/4,985 | ollama / qwen3.8:27b-mtp-q8_0 | 20 | 7/13 | 20/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Alawlaqi_2023](drugs/drug_linseed/pd_Alawlaqi_2023_Biofilm.md) | Alawlaqi MM et al., Evaluation of Biomedical Applications f…, Journal of functional bioma… (2023) | [10.3390/jfb14060300](https://doi.org/10.3390/jfb14060300) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Alawlaqi_2023](drugs/drug_linseed/pd_Alawlaqi_2023_DPPH.md) | Alawlaqi MM et al., Evaluation of Biomedical Applications f…, Journal of functional bioma… (2023) | [10.3390/jfb14060300](https://doi.org/10.3390/jfb14060300) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Alawlaqi_2023](drugs/drug_linseed/pd_Alawlaqi_2023_Glucosidase.md) | Alawlaqi MM et al., Evaluation of Biomedical Applications f…, Journal of functional bioma… (2023) | [10.3390/jfb14060300](https://doi.org/10.3390/jfb14060300) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Alawlaqi_2023](drugs/drug_linseed/pd_Alawlaqi_2023_Hemolysis.md) | Alawlaqi MM et al., Evaluation of Biomedical Applications f…, Journal of functional bioma… (2023) | [10.3390/jfb14060300](https://doi.org/10.3390/jfb14060300) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Alawlaqi_2023](drugs/drug_linseed/pd_Alawlaqi_2023_MRSA.md) | Alawlaqi MM et al., Evaluation of Biomedical Applications f…, Journal of functional bioma… (2023) | [10.3390/jfb14060300](https://doi.org/10.3390/jfb14060300) |
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

<sub>queue written 2026-09-21T20:21:58.268648+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alawlaqi_2023 | irrelevant | 0 | 0 | The paper is an in-vitro study evaluating antimicrobial, antioxidant, and anti-inflammatory activities of linseed extract, containing no pharmacokinetic parameters. |
| popPK | Ariza_2019 | irrelevant | 0 | 0 | The paper is an observational study on the effects of linseed supplementation on milk yield and composition in dairy cows, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Barson_1994 | irrelevant | 0 | 0 | The paper is an entomological study on fungal control of house flies where linseed oil is used as a carrier/adjuvant, not a pharmacokinetic study of linseed as a drug. |
| PD | Barson_1994 | not_relevant | 2 | 1 | The paper reports qualitative dose-response data for entomopathogenic fungi and oil carriers on house flies, but does not provide numeric PD parameters (e.g., EC50, Emax) or a formal concentration-effect model for linseed. |
| popPK | Bayındır_2025 | irrelevant | 0 | 0 | The paper is an in-vitro food science study on the antioxidant properties of plant extracts in meat, containing no pharmacokinetic data for linseed. |
| PD | Bayındır_2025 | not_relevant | 2 | 2 | The paper reports in vitro antioxidant assays (IC50, FRAP) and qualitative/percentage effects on meat quality, but lacks a pharmacokinetic (PK) component or a formal dose-response curve fitting for the drug (linseed) in a biological system, making it a food science study rather than a PD study. |
| popPK | Cantele_2020 | irrelevant | 0 | 0 | The paper is a food chemistry study on the antioxidant effects of hemp extract in linseed oil, not a pharmacokinetic study, and contains no PK parameters. |
| PD | Cantele_2020 | not_relevant | 0 | 0 | The study is a food chemistry analysis of antioxidant efficacy in a bulk oil model system, not a pharmacodynamic study of a drug in a biological system; it reports chemical kinetics and composition changes, not exposure-response or dose-response PD parameters. |
| PGx | Claassen_1995 | not_relevant | 0 | 0 | The paper investigates the effect of dietary fatty acid supplementation on bone status in rats, not the pharmacogenomics of linseed as a drug. |
| popPK | Danbara_2005 | irrelevant | 0 | 0 | The study investigates the anti-cancer mechanisms of enterolactone (a metabolite of linseed) in vitro and in vivo, but does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Dantas_2021 | irrelevant | 0 | 0 | The paper is a review of okra (Abelmoschus esculentus) as a functional food and does not report pharmacokinetic parameters for linseed. |
| PD | Dantas_2021 | not_relevant | 0 | 0 | The paper is a review of okra mucilage properties and applications, contains no pharmacodynamic or exposure-response data for linseed, and reports no numeric PD parameters. |
| popPK | Derbali_2015 | irrelevant | 0 | 0 | The study is a mechanistic/toxicology investigation of cardioprotective effects and does not report any pharmacokinetic parameters for linseed. |
| PD | Derbali_2015 | not_relevant | 3 | 2 | The study reports an in vitro IC50 for ACE inhibition but lacks a pharmacokinetic profile or dose-response curve for the cardioprotective effect in vivo, preventing the derivation of a PD exposure-response relationship. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper is a risk assessment of nitrate and nitrite in feed and does not involve linseed or report any pharmacokinetic parameters. |
| PD | EFSA_2020 | not_relevant | 3 | 2 | The paper is a risk assessment for nitrate/nitrite in feed, not a pharmacodynamic study of linseed, and only provides benchmark dose (BMDL) and NOAEL values for toxicity rather than a drug-specific concentration-effect curve or PD parameters. |
| popPK | EFSA_2024 | irrelevant | 0 | 0 | The paper is a risk assessment of ergot alkaloids in feed and does not study linseed or report pharmacokinetic parameters for it. |
| PD | EFSA_2024 | not_relevant | 2 | 1 | The paper is a risk assessment opinion that derives Reference Points (NOAEL/LOAEL) from toxicological studies but does not report or fit a pharmacodynamic model (e.g., Emax, EC50) or provide an extractable concentration-effect curve for linseed or ergot alkaloids. |
| PGx | Galinousky_2020 | not_relevant | 0 | 0 | The paper focuses on plant breeding and fiber quality in flax, not pharmacogenomics or drug PK/PD. |
| popPK | Garcia-Aloy_2019 | irrelevant | 0 | 0 | The paper is a review of biomarkers of food intake for nuts and vegetable oils, not a pharmacokinetic study reporting quantitative disposition parameters for linseed. |
| PD | Garcia-Aloy_2019 | not_relevant | 1 | 0 | The paper is a literature review on biomarkers of food intake and does not report any original pharmacodynamic or exposure-response data for linseed. |
| PGx | Gondret_2025 | not_relevant | 0 | 0 | The paper studies the effect of diet and pig genotype on adipose tissue fatty acid composition and oxidative stress, not the pharmacokinetics or pharmacodynamics of linseed as a drug. |
| popPK | Hadi_2020 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of lipid profile outcomes, not a pharmacokinetic study, and contains no PK parameters for linseed. |
| PD | Hadi_2020 | not_relevant | 3 | 2 | The paper is a systematic review and meta-analysis reporting weighted mean differences for lipid changes, not a pharmacodynamic model or dose-response analysis with numeric PD parameters (e.g., Emax, EC50) for a specific drug. |
| popPK | Hassanein_2022 | irrelevant | 0 | 0 | The paper is a food chemistry study characterizing the physicochemical properties and lipid profile of linseed oil, containing no pharmacokinetic data. |
| PD | Hassanein_2022 | not_relevant | 0 | 0 | The paper analyzes the chemical composition and oxidative stability of linseed oil after roasting, not the pharmacodynamic or exposure-response relationship of a drug in a biological system. |
| popPK | Heidari_2020 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| PD | Heidari_2020 | not_relevant | 0 | 0 | The paper focuses on solvent toxicity for C60 manufacturing and does not report any pharmacodynamic or exposure-response data for linseed. |
| popPK | Majed_2024 | irrelevant | 0 | 0 | The paper is a phytochemical and pharmacological study on oilseed cakes (including linseed) focusing on antioxidant, antimicrobial, and anti-inflammatory properties, not a pharmacokinetic study reporting disposition parameters for linseed. |
| PD | Majed_2024 | not_relevant | 0 | 0 | The paper focuses on Lactuca sativa (lettuce) and does not report any pharmacodynamic or exposure-response data for linseed (Linum usitatissimum). |
| PGx | Manzke_2018 | not_relevant | 0 | 0 | The paper studies the effect of dietary oil supplementation on pig growth and does not report pharmacogenomic effects on the PK/PD of linseed. |
| PGx | Martin_2007 | not_relevant | 0 | 0 | The paper studies the effect of PPARα genotype on hepatic lipid metabolism and gene expression in response to dietary fatty acids (including linseed oil), not the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Martin_2016 | irrelevant | 0 | 0 | The paper is a nutritional study on methane emission and rumen fermentation in dairy cows, not a pharmacokinetic study, and reports no PK parameters for linseed. |
| popPK | Mukhopadhyay_2007 | irrelevant | 0 | 0 | The study focuses on the reduction of anti-nutritional factors (tannins) in linseed meal via extrusion cooking, not on pharmacokinetic parameters. |
| PD | Mukhopadhyay_2007 | not_relevant | 0 | 0 | The paper investigates the effect of extrusion cooking process variables on tannin reduction in linseed meal, which is a food processing study, not a pharmacodynamic or exposure-response analysis of a drug. |
| popPK | Mukta_2023 | irrelevant | 0 | 0 | The study investigates the cardioprotective effects of linseed on doxorubicin-induced toxicity using biochemical markers (LDH, CK-MB, MDA, SOD) and histopathology, but does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Mukta_2023 | not_relevant | 1 | 0 | The study is a single-dose group comparison (14 g/day) without a dose-response curve, PK data, or derived PD parameters like Emax or EC50. |
| popPK | OKeefe_1990 | irrelevant | 0 | 0 | no_text gate: only 189 chars of text extracted (&lt; 400) |
| PD | OKeefe_1990 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of fatty acid isomers on arachidonic acid metabolism in platelets, which is a mechanistic biochemical study, not a pharmacokinetic/pharmacodynamic (PK/PD) or exposure-response analysis of a drug like linseed. |
| popPK | Pignitter_2018 | irrelevant | 2 | 0 | The study investigates the metabolic conversion of alpha-linolenic acid (ALA) from linseed oil using compartmental modeling, but it does not report standard pharmacokinetic disposition parameters (CL, V, ka) for linseed as a drug. |
| popPK | Pressman_2025 | irrelevant | 0 | 0 | The paper is a study on methane emission sampling strategies in cattle, not a pharmacokinetic study, and reports no PK parameters for linseed. |
| popPK | Ruiz-González_2017 | irrelevant | 0 | 0 | The study is an in-vitro rumen fermentation experiment assessing methane production, not a pharmacokinetic study of linseed. |
| popPK | Sajjadi_2024 | irrelevant | 0 | 0 | The paper is a review on the stability and formulation of tacrolimus, not a pharmacokinetic study of linseed. |
| PD | Sajjadi_2024 | not_relevant | 0 | 0 | The paper is a review on the physicochemical stability and formulation of tacrolimus, containing no pharmacodynamic or exposure-response data. |
| popPK | Saunders_1988 | irrelevant | 0 | 0 | The study uses linseed oil as a lipid source/probe to measure intestinal absorption efficiency and transit time, not to characterize the pharmacokinetic parameters (CL, V, ka) of linseed as a drug. |
| PGx | Soto-Cerda_2025 | not_relevant | 0 | 0 | The paper studies plant physiology and genetics in linseed (a crop), not human pharmacogenomics or drug pharmacokinetics/pharmacodynamics. |
| popPK | Szydłowska-Czerniak_2018 | irrelevant | 0 | 0 | The paper is a chemical synthesis and antioxidant capacity study of linseed oil, not a pharmacokinetic study. |
| PD | Szydłowska-Czerniak_2018 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (IC50) of synthesized compounds in oil, which is a chemical/physicochemical property, not a pharmacodynamic exposure-response relationship in a biological system. |
| popPK | Trattner_2011 | irrelevant | 0 | 0 | The paper is a nutritional study on Atlantic salmon examining the effects of dietary sesamin and linseed oil on fatty acid profiles and gene expression, not a pharmacokinetic study of linseed as a drug. |
| PD | Trattner_2011 | not_relevant | 3 | 2 | The study is a qualitative dose-response analysis using GLM to compare group means, lacking a formal PK/PD model or numeric PD parameters (e.g., EC50, Emax) for linseed or sesamin. |
| popPK | Wallace_2003 | irrelevant | 0 | 0 | The study investigates the immunological effects of linseed oil (alpha-linolenic acid) supplementation, not its pharmacokinetic disposition parameters. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific study data, drug information, or pharmacodynamic parameters. |
| PGx | van_2017 | not_relevant | 0 | 0 | The study investigates the effect of a gene variant (DGAT1) on the response to a dietary supplement (linseed oil) in dairy cows, not a pharmacogenomic effect on a drug's PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_linseed`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
