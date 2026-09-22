<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;guar gum&quot;}]"></div>

# guar gum

- **generic name:** guar gum
- **ATC codes:** `A10BX01`
- **DrugBank:** [DB13446](https://go.drugbank.com/drugs/DB13446)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 07:58 | 4:36 | 0/0/0 | 0/0/0 | 0/0/0 | 83,366/5,348 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/4 | 5/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 42 matched, 44 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bashir_2018.pdf` | Bashir A et al., Co-concentration effect of silane with…, International journal of bi… (2018) | pd | 4 | [10.1016/j.ijbiomac.2017.08.025](https://doi.org/10.1016/j.ijbiomac.2017.08.025) | [28802843](https://www.ncbi.nlm.nih.gov/pubmed/28802843) | metadata signals extractable PD data (concentrationeffect) |
| `Ge_2025.pdf` | Ge W et al., Insight on the functionalization of hes…, Food chemistry (2025) | pd | 4 | [10.1016/j.foodchem.2025.144902](https://doi.org/10.1016/j.foodchem.2025.144902) | [40435654](https://www.ncbi.nlm.nih.gov/pubmed/40435654) | metadata signals extractable PD data (IC50) |
| `Kasabri_2017.pdf` | Kasabri V et al., Antiobesity and antihyperglycaemic effe…, Pharmaceutical biology (2017) | pd | 4 | [10.1080/13880209.2016.1233567](https://doi.org/10.1080/13880209.2016.1233567) | [27663206](https://www.ncbi.nlm.nih.gov/pubmed/27663206) | metadata signals extractable PD data (IC50) |
| `Różyło_2022.pdf` | Różyło R et al., Microencapsulated Red Powders from Corn…, Molecules (Basel, Switzerla… (2022) | pd | 4 | [10.3390/molecules27103094](https://doi.org/10.3390/molecules27103094) | [35630570](https://www.ncbi.nlm.nih.gov/pubmed/35630570) | metadata signals extractable PD data (EC50) |
| `Vachon_1988.pdf` | Vachon C et al., Concentration effect of soluble dietary…, Canadian journal of physiol… (1988) | pd | 4 | [10.1139/y88-127](https://doi.org/10.1139/y88-127) | [2844373](https://www.ncbi.nlm.nih.gov/pubmed/2844373) | metadata signals extractable PD data (Concentrationeffect) |

<sub>queue written 2026-09-22T07:56:53.872321+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aravena_2018 | irrelevant | 0 | 0 | The study focuses on the adsorption of trypsin onto a guar gum matrix, not the pharmacokinetics of guar gum itself. |
| PD | Aravena_2018 | not_relevant | 0 | 0 | The paper describes the adsorption of trypsin onto a guar gum-based matrix, which is a chemical engineering/bioseparation study, not a pharmacodynamic or exposure-response analysis of guar gum as a drug. |
| popPK | Aro_1984 | irrelevant | 0 | 0 | The study reports clinical outcomes (cholesterol levels) rather than pharmacokinetic parameters (CL, V, ka) for guar gum. |
| PD | Aro_1984 | not_relevant | 2 | 1 | The paper reports a single-dose clinical trial (15 g/day) with mean effect changes but does not provide a dose-response curve, concentration-effect relationship, or numeric PD parameters like Emax or EC50. |
| popPK | Awadeen_2020 | irrelevant | 0 | 0 | The study focuses on zolmitriptan formulation and pharmacodynamics, with guar gum serving only as an excipient in the capsule matrix, and no PK parameters for guar gum are reported. |
| PD | Awadeen_2020 | not_relevant | 1 | 0 | The paper reports qualitative pharmacodynamic effects (duration of effect) in mice but does not provide numeric PD parameters, concentration-effect curves, or exposure-response data for guar gum. |
| popPK | Bashir_2018 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | Bashir_2018 | not_relevant | 0 | 0 | The paper focuses on the material science of polymeric films and does not report any pharmacodynamic or exposure-response data for guar gum. |
| popPK | Cheng_2025 | irrelevant | 0 | 0 | The study focuses on the synthesis of a nanocatalyst and its in-vitro cytotoxicity, containing no pharmacokinetic data for guar gum. |
| popPK | Cloutier_1992 | irrelevant | 0 | 0 | The paper is a clinical study on occupational asthma diagnosis using guar gum as an inhaled allergen, not a pharmacokinetic study. |
| PD | Cloutier_1992 | not_relevant | 1 | 0 | The paper describes a validation of an exposure system and reports binary outcomes (significant fall in FEV1) and safety limits, but does not provide numeric dose-response parameters (e.g., EC50, slope) or concentration-effect curves for guar gum. |
| popPK | Corrie_2024 | irrelevant | 1 | 0 | The study focuses on curcumin as the subject drug, with guar gum serving only as a formulation excipient, and no specific PK parameters for guar gum are reported. |
| PD | Corrie_2024 | not_relevant | 2 | 0 | The paper mentions a dose-dependent pharmacodynamic effect qualitatively but does not provide numeric PD parameters, concentration-effect curves, or a formal PK/PD model fit. |
| popPK | Ellis_1988 | irrelevant | 0 | 0 | The study measures physiological effects (blood glucose and insulin levels) of guar gum, not pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Fernandez_1995 | irrelevant | 0 | 0 | The study investigates the metabolic effects of guar gum on cholesterol levels and enzyme activity, not its pharmacokinetic disposition parameters. |
| popPK | Fernández_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ethinylestradiol, with guar gum serving only as a co-administered fiber formulation rather than the subject drug. |
| popPK | Garg_2026 | irrelevant | 1 | 0 | The study focuses on the formulation and efficacy of acarbose-guar gum solid dispersions, reporting pharmacodynamic outcomes (glucose, body weight) rather than quantitative pharmacokinetic parameters (CL, V, ka) for guar gum. |
| PD | Garg_2026 | not_relevant | 2 | 1 | The paper reports in vitro enzyme inhibition IC50 values and qualitative in vivo glucose reduction, but lacks a pharmacokinetic-pharmacodynamic (PK/PD) model or exposure-response analysis for guar gum or the formulation. |
| popPK | Ge_2025 | irrelevant | 0 | 0 | no_text gate: only 122 chars of text extracted (&lt; 400) |
| PD | Ge_2025 | not_relevant | 0 | 0 | The paper focuses on the functionalization and encapsulation of hesperidin using soybean protein and polysaccharides, with no mention of guar gum or any pharmacodynamic/exposure-response analysis. |
| PGx | Grigoreva_2021 | not_relevant | 0 | 0 | The paper focuses on the development of a reference genome and SNP set for marker-assisted selection in guar plants, not on pharmacogenomics or drug pharmacokinetics/pharmacodynamics. |
| popPK | Haupt_2006 | irrelevant | 0 | 0 | The study focuses on celecoxib as the subject drug with guar gum serving only as a delivery vehicle, and no pharmacokinetic parameters for guar gum are reported. |
| popPK | Hernández-Díaz_2026 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and materials characterization study of a guar gum nanocomposite, reporting no pharmacokinetic parameters. |
| popPK | Jana_2026 | irrelevant | 0 | 0 | The paper focuses on the antimicrobial mechanism of a small molecule (TPL(II)-07) and its delivery via a guar gum hydrogel, containing no pharmacokinetic data for guar gum. |
| PD | Jana_2026 | not_relevant | 0 | 0 | The paper reports MIC and IC50 values for a novel antimicrobial (TPL(II)-07) and mentions guar gum only as a delivery vehicle (hydrogel), but does not report a pharmacodynamic or exposure-response relationship for guar gum itself. |
| popPK | Kanwar_2016 | irrelevant | 0 | 0 | The study focuses on the formulation of pregabalin tablets using guar gum as an excipient and reports pharmacodynamic (seizure) outcomes, not pharmacokinetic parameters for guar gum. |
| PD | Kanwar_2016 | not_relevant | 1 | 0 | The paper reports qualitative in vivo behavioral changes (delayed onset, abolished extensor phase) without providing numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50) for guar gum. |
| popPK | Kasabri_2017 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Kasabri_2017 | not_relevant | 0 | 0 | The paper focuses on Adiantum capillus-veneris extracts, not guar gum, and does not report PD parameters for the target compound. |
| popPK | Kumar_2025 | irrelevant | 0 | 0 | The study focuses on the formulation and efficacy of nystatin-loaded nanocapsules where guar gum is a carrier material, not a subject drug for pharmacokinetic analysis. |
| PD | Kumar_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation and characterization of nanocapsules and qualitative in vivo efficacy, without reporting any quantitative exposure-response or dose-response analysis with numeric PD parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a review on polysaccharide hydrogels for colorectal cancer and does not report pharmacokinetic parameters for guar gum. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper is a review on natural polysaccharide hydrogels for colorectal cancer and does not report any pharmacodynamic or exposure-response data for guar gum. |
| popPK | Lin_2021 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of lipid profile outcomes, not a pharmacokinetic study, and contains no PK parameters for guar gum. |
| PD | Lin_2021 | not_relevant | 3 | 2 | The paper is a meta-analysis reporting weighted mean differences for lipid profiles across various doses, but it does not provide a specific dose-response curve, Emax/EC50 parameters, or a PK/PD model for guar gum. |
| popPK | Madan_2014 | irrelevant | 0 | 0 | The study focuses on the formulation and in-vitro cytotoxicity of a drug (reduced bromonoscapine) using guar gum as a delivery vehicle, rather than reporting pharmacokinetic parameters for guar gum itself. |
| PD | Madan_2014 | not_relevant | 3 | 2 | The paper reports a qualitative improvement in cytotoxicity (IC50 decline) due to formulation changes but does not provide the specific numeric IC50 values or concentration-effect curves required to derive a PD relationship. |
| popPK | Marques_2024 | irrelevant | 0 | 0 | The paper investigates guar gum as a gelling matrix for radiation dosimeters, not as a drug subject to pharmacokinetic analysis. |
| PD | Marques_2024 | not_relevant | 0 | 0 | The paper discusses guar gum as a gelling matrix for radiation dosimeters, not as a drug with pharmacodynamic effects. |
| popPK | Minekus_2005 | irrelevant | 0 | 0 | The study investigates the effect of guar gum on lipid bioaccessibility in an in-vitro gastrointestinal model, not pharmacokinetic disposition parameters (CL, V, etc.) for guar gum itself. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not contain any pharmacokinetic data or mention of guar_gum. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The text is a general review of radiomitigators and does not mention guar gum or provide any specific pharmacodynamic or exposure-response data. |
| popPK | Olechno_2025 | irrelevant | 0 | 0 | The paper is a review of mucoadhesive drug delivery systems for oral candidiasis and does not report pharmacokinetic parameters for guar gum. |
| PD | Olechno_2025 | not_relevant | 0 | 0 | The paper is a review of mucoadhesive drug delivery systems for oral candidiasis and does not report any pharmacodynamic or exposure-response data for guar gum. |
| popPK | Paswan_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and optimization of guar gum-based hydrogels for agricultural use, not a pharmacokinetic study of guar gum as a drug. |
| PD | Paswan_2022 | not_relevant | 0 | 0 | The paper describes the synthesis and optimization of a guar gum-based hydrogel material using response surface methodology, not a pharmacodynamic or exposure-response analysis of guar gum as a drug. |
| popPK | Prabha_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of glycation inhibition and does not report any pharmacokinetic parameters for guar gum. |
| popPK | Praphakar_2018 | irrelevant | 0 | 0 | The study focuses on the in vitro drug release and cytotoxicity of a guar gum-based carrier for 5-fluorouracil, not on the pharmacokinetic parameters of guar gum itself. |
| PD | Praphakar_2018 | not_relevant | 3 | 2 | The paper reports a single IC50 value for the drug-loaded carrier, which is a standard pharmacological potency metric, but it does not report a pharmacokinetic (PK) profile, exposure data, or a concentration-effect curve for the drug itself to establish a pharmacodynamic (PD) or exposure-response relationship. |
| popPK | Rebouças_2023 | irrelevant | 0 | 0 | The study focuses on the formulation and release kinetics of microcapsules containing antitumor agents, with guar gum serving only as a structural excipient rather than the subject drug for pharmacokinetic analysis. |
| PGx | Rideout_2008 | not_relevant | 0 | 0 | The paper is a review of the mechanisms of soluble fiber on cholesterol metabolism and does not report specific pharmacogenomic effects on PK/PD parameters. |
| popPK | Romero_2002 | irrelevant | 0 | 0 | The study investigates the hypolipidemic effects of Plantago ovata seeds in guinea pigs and does not report pharmacokinetic parameters for guar gum. |
| PD | Romero_2002 | not_relevant | 2 | 1 | The study reports a lack of dose-response and provides only group-level percentage changes in lipid parameters without concentration-effect modeling or derivable PD parameters. |
| popPK | Różyło_2022 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Różyło_2022 | not_relevant | 0 | 0 | The paper focuses on the spectral and antioxidant characteristics of microencapsulated cornflower extract powders and does not contain any pharmacodynamic or exposure-response data for guar gum. |
| PGx | Sanaei_2022 | not_relevant | 0 | 0 | The paper studies the effect of heavy metals on guar plant growth and metal accumulation, not the pharmacokinetics or pharmacodynamics of guar gum in humans. |
| popPK | Sati_2025 | irrelevant | 0 | 0 | The paper is a review of silver nanoparticles and does not contain any pharmacokinetic data for guar_gum. |
| PD | Sati_2025 | not_relevant | 0 | 0 | The paper is a review of silver nanoparticles (AgNPs) synthesis and applications, containing no data or analysis regarding guar gum pharmacodynamics or exposure-response relationships. |
| popPK | Sharma_2019 | irrelevant | 0 | 0 | The study focuses on paclitaxel pharmacokinetics, with guar gum serving only as a formulation carrier rather than the subject drug. |
| PD | Sharma_2019 | not_relevant | 2 | 1 | The paper reports in vitro IC50 and PK parameters (Cmax) for paclitaxel formulations, but does not establish an exposure-response or dose-response relationship for guar gum itself, nor does it provide a PD model linking guar gum concentration to a pharmacodynamic effect. |
| popPK | Soumya_2014 | irrelevant | 0 | 0 | The study focuses on the synthesis and in-vitro antioxidant potential of guar gum nanoparticles, containing no pharmacokinetic data or disposition parameters. |
| popPK | Troches-Mafla_2025 | irrelevant | 0 | 0 | The paper is a review of diltiazem hydrochloride formulations and does not study guar_gum or report any pharmacokinetic parameters for it. |
| PD | Troches-Mafla_2025 | not_relevant | 0 | 0 | The paper is a review of formulation technologies for diltiazem and does not report any pharmacodynamic or exposure-response data for guar gum. |
| popPK | Vachon_1988 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| PD | Vachon_1988 | not_relevant | 0 | 0 | The provided text is only the title of a study on soluble dietary fibers in rats and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| popPK | Wahyuningsih_2026 | irrelevant | 0 | 0 | The paper is a review on nanocarriers for diabetic wound healing and does not report pharmacokinetic parameters for guar_gum. |
| PD | Wahyuningsih_2026 | not_relevant | 0 | 0 | The paper is a review of nanocarrier delivery systems for phytochemicals in diabetic wound healing and does not report any pharmacodynamic or exposure-response data for guar gum. |
| popPK | Whiteley_1996 | irrelevant | 0 | 0 | The study evaluates colonic mucosal growth and fermentation in rats, not the pharmacokinetic disposition parameters of guar gum. |
| PD | Whiteley_1996 | not_relevant | 4 | 2 | The paper describes a qualitative dose-response relationship for guar gum but does not provide specific numeric data points or fitted PD parameters (like Emax or EC50) in the text. |
| popPK | Zarbab_2023 | irrelevant | 0 | 0 | The study focuses on the synthesis and in-vitro drug release kinetics of a guar gum hydrogel for methotrexate, not on the pharmacokinetic parameters of guar gum itself. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 61 chars of text extracted (&lt; 400) |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a placeholder for a PDF file and contains no scientific content, data, or mention of guar gum or pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_guar_gum`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
