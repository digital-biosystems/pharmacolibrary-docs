<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;guar gum&quot;}]"></div>

# guar gum

- **generic name:** guar gum
- **ATC codes:** `A10BX01`
- **DrugBank:** [DB13446](https://go.drugbank.com/drugs/DB13446) · **PubChem:** not captured
- **groups:** investigational

## About

Guar gum is a natural thickening and stabilising substance, classified as a blood glucose lowering drug used in diabetes. It is considered investigational as a medicine, while its main use is in food and industrial applications.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422071](https://www.wikidata.org/wiki/Q422071) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:33 | 0:25 | 0/0/0 | 0/0/1 | 0/0/0 | 47,958/1,419 | einfracz / qwen3.8-27b | 6 | 2/5 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Ellis_1988_integrated_insulin](drugs/drug_guar_gum/pd_Ellis_1988_integrated_insulin.md) | integrated insulin ← guar · direct linear effect | — | Ellis PR et al., Evaluation of guar biscuits for use in…, European journal of clinica… (1988) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 52 matched, 48 returned
- **screened:** 4  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bashir_2018.pdf` | Bashir A et al., Co-concentration effect of silane with…, International journal of bi… (2018) | pd | 4 | [10.1016/j.ijbiomac.2017.08.025](https://doi.org/10.1016/j.ijbiomac.2017.08.025) | [28802843](https://www.ncbi.nlm.nih.gov/pubmed/28802843) | metadata signals extractable PD data (concentrationeffect) |
| `Ge_2025.pdf` | Ge W et al., Insight on the functionalization of hes…, Food chemistry (2025) | pd | 4 | [10.1016/j.foodchem.2025.144902](https://doi.org/10.1016/j.foodchem.2025.144902) | [40435654](https://www.ncbi.nlm.nih.gov/pubmed/40435654) | metadata signals extractable PD data (IC50) |
| `Vachon_1988.pdf` | Vachon C et al., Concentration effect of soluble dietary…, Canadian journal of physiol… (1988) | pd | 4 | [10.1139/y88-127](https://doi.org/10.1139/y88-127) | [2844373](https://www.ncbi.nlm.nih.gov/pubmed/2844373) | metadata signals extractable PD data (Concentrationeffect) |

<sub>queue written 2026-10-14T23:33:26.811496+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aravena_2018 | irrelevant | 0 | 0 | The study investigates the adsorption of trypsin onto a guar gum matrix for industrial recovery, not the pharmacokinetics of guar gum as a drug. |
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
| popPK | Fernández_1998 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ethinylestradiol, using guar gum only as a fiber additive/comparator agent to test for interaction, not as the subject drug. |
| popPK | Garg_2026 | irrelevant | 1 | 0 | The study focuses on the formulation and efficacy of acarbose-guar gum solid dispersions, reporting pharmacodynamic outcomes (glucose, body weight) rather than quantitative pharmacokinetic parameters (CL, V, ka) for guar gum. |
| PD | Garg_2026 | not_relevant | 2 | 1 | The paper reports in vitro enzyme inhibition IC50 values and qualitative in vivo glucose reduction, but lacks a pharmacokinetic-pharmacodynamic (PK/PD) model or exposure-response analysis for guar gum or the formulation. |
| popPK | Ge_2025 | irrelevant | 0 | 0 | no_text gate: only 122 chars of text extracted (&lt; 400) |
| PD | Ge_2025 | not_relevant | 0 | 0 | The paper focuses on the functionalization and encapsulation of hesperidin using soybean protein and polysaccharides, with no mention of guar gum or any pharmacodynamic/exposure-response analysis. |
| PGx | Grigoreva_2021 | not_relevant | 0 | 0 | The paper discusses the plant guar (Cyamopsis tetragonoloba) for marker-assisted selection and reports no pharmacokinetic or pharmacodynamic effects of a drug. |
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
| popPK | Kumari_2025 | irrelevant | 0 | 0 | The paper is a review of polysaccharide-based drug delivery systems where guar gum is a delivery vehicle, not the subject drug, and no pharmacokinetic parameters are reported. |
| PD | Kumari_2025 | not_relevant | 0 | 0 | The paper is a review of polysaccharide-based mucoadhesive hydrogels for drug delivery and does not report any pharmacodynamic or exposure-response data for guar gum. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a review on natural polysaccharide hydrogels for colorectal cancer treatment and does not contain pharmacokinetic parameters for guar gum. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper is a review on natural polysaccharide hydrogels for colorectal cancer and does not report any pharmacodynamic or exposure-response data for guar gum. |
| popPK | Lin_2021 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of lipid profile outcomes, not a pharmacokinetic study, and contains no PK parameters for guar gum. |
| PD | Lin_2021 | not_relevant | 3 | 2 | The paper is a meta-analysis reporting weighted mean differences for lipid profiles across various doses, but it does not provide a specific dose-response curve, Emax/EC50 parameters, or a PK/PD model for guar gum. |
| popPK | Madan_2014 | irrelevant | 0 | 0 | The study focuses on the formulation and in-vitro cytotoxicity of a drug (reduced bromonoscapine) using guar gum as a delivery vehicle, rather than reporting pharmacokinetic parameters for guar gum itself. |
| PD | Madan_2014 | not_relevant | 3 | 2 | The paper reports a qualitative improvement in cytotoxicity (IC50 decline) due to formulation changes but does not provide the specific numeric IC50 values or concentration-effect curves required to derive a PD relationship. |
| popPK | Marques_2024 | irrelevant | 0 | 0 | The paper investigates guar gum as a gelling matrix for radiation dosimeters, not as a drug subject to pharmacokinetic analysis. |
| PD | Marques_2024 | not_relevant | 0 | 0 | The paper discusses guar gum as a gelling matrix for radiation dosimeters, not as a drug with pharmacodynamic effects. |
| popPK | Minekus_2005 | irrelevant | 1 | 0 | This is an in-vitro/in-silico study on the bioaccessibility of fat and cholesterol in the GI tract, not a pharmacokinetic study reporting disposition parameters for guar gum. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators for radiation exposure and contains no pharmacokinetic data or mention of guar_gum. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The text is a general review of radiomitigators and does not mention guar gum or provide any specific pharmacodynamic or exposure-response data. |
| popPK | Olechno_2025 | irrelevant | 0 | 0 | The paper is a review on mucoadhesive drug delivery systems for oral candidiasis and does not contain pharmacokinetic data or parameters for guar_gum. |
| PD | Olechno_2025 | not_relevant | 0 | 0 | The paper is a review of mucoadhesive drug delivery systems for oral candidiasis and does not report any pharmacodynamic or exposure-response data for guar gum. |
| popPK | Paswan_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and optimization of guar gum-based hydrogels for agricultural use, not a pharmacokinetic study of guar gum as a drug. |
| PD | Paswan_2022 | not_relevant | 0 | 0 | The paper describes the synthesis and optimization of a guar gum-based hydrogel material using response surface methodology, not a pharmacodynamic or exposure-response analysis of guar gum as a drug. |
| popPK | Prabha_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of glycation inhibition and does not report any pharmacokinetic parameters for guar gum. |
| popPK | Praphakar_2018 | irrelevant | 0 | 0 | The study focuses on the in vitro drug release and cytotoxicity of a guar gum-based carrier for 5-fluorouracil, not on the pharmacokinetic parameters of guar gum itself. |
| PD | Praphakar_2018 | not_relevant | 3 | 2 | The paper reports a single IC50 value for the drug-loaded carrier, which is a standard pharmacological potency metric, but it does not report a pharmacokinetic (PK) profile, exposure data, or a concentration-effect curve for the drug itself to establish a pharmacodynamic (PD) or exposure-response relationship. |
| popPK | Rebouças_2023 | irrelevant | 0 | 0 | The study focuses on the formulation and release kinetics of microcapsules containing antitumor agents, with guar gum serving only as a structural excipient rather than the subject drug for pharmacokinetic analysis. |
| PGx | Rideout_2008 | not_relevant | 0 | 0 | The paper is a review discussing the mechanisms of cholesterol reduction by soluble fibers and mentions genetic polymorphisms only as future research priorities, without reporting specific pharmacogenomic effects on PK/PD parameters. |
| popPK | Romero_2002 | irrelevant | 0 | 0 | The study investigates the hypolipidemic effects of Plantago ovata seeds in guinea pigs and does not report pharmacokinetic parameters for guar gum. |
| PD | Romero_2002 | not_relevant | 2 | 1 | The study reports a lack of dose-response and provides only group-level percentage changes in lipid parameters without concentration-effect modeling or derivable PD parameters. |
| popPK | Różyło_2022 | irrelevant | 0 | 0 | The paper is a food science study on the spectral and antioxidant characteristics of microencapsulated cornflower powders where guar gum is used as a stabilizer, containing no pharmacokinetic data. |
| PD | Różyło_2022 | not_relevant | 0 | 0 | The paper focuses on the spectral and antioxidant characteristics of microencapsulated cornflower extract powders and does not contain any pharmacodynamic or exposure-response data for guar gum. |
| PGx | Sanaei_2022 | not_relevant | 0 | 0 | The study investigates phytoremediation of metals (Cd and Pb) in guar plants, not the pharmacokinetic or pharmacodynamic effects of guar gum in humans. |
| popPK | Sati_2025 | irrelevant | 0 | 0 | The paper is a review of silver nanoparticles and does not contain any pharmacokinetic data for guar_gum. |
| PD | Sati_2025 | not_relevant | 0 | 0 | The paper is a review of silver nanoparticles (AgNPs) synthesis and applications, containing no data or analysis regarding guar gum pharmacodynamics or exposure-response relationships. |
| popPK | Setayesh_2023 | irrelevant | 0 | 0 | The paper is a meta-analysis of lipid profile outcomes (TC, LDL, etc.) and does not report pharmacokinetic parameters such as clearance, volume, or half-life for guar gum. |
| popPK | Shao_2023 | irrelevant | 0 | 0 | The paper is a meta-analysis of blood pressure outcomes and does not report any pharmacokinetic parameters for guar gum. |
| PD | Shao_2023 | not_relevant | 3 | 2 | The paper is a meta-analysis reporting weighted mean differences for blood pressure reduction based on dose thresholds (&gt;15g) and duration, but it does not provide a continuous exposure-response curve, Emax/EC50 parameters, or a formal PK/PD model fit. |
| popPK | Sharma_2019 | irrelevant | 0 | 0 | The study focuses on paclitaxel pharmacokinetics, with guar gum serving only as a formulation carrier rather than the subject drug. |
| PD | Sharma_2019 | not_relevant | 2 | 1 | The paper reports in vitro IC50 and PK parameters (Cmax) for paclitaxel formulations, but does not establish an exposure-response or dose-response relationship for guar gum itself, nor does it provide a PD model linking guar gum concentration to a pharmacodynamic effect. |
| popPK | Soumya_2014 | irrelevant | 0 | 0 | The study focuses on the synthesis and in-vitro antioxidant potential of guar gum nanoparticles, containing no pharmacokinetic data or disposition parameters. |
| popPK | Troches-Mafla_2025 | irrelevant | 0 | 0 | The paper is a review of diltiazem hydrochloride formulation technologies and does not study guar gum or report its pharmacokinetic parameters. |
| PD | Troches-Mafla_2025 | not_relevant | 0 | 0 | The paper is a review of formulation technologies for diltiazem and does not report any pharmacodynamic or exposure-response data for guar gum. |
| popPK | Vachon_1988 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| PD | Vachon_1988 | not_relevant | 0 | 0 | The provided text is only the title of a study on soluble dietary fibers in rats and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| popPK | Wahyuningsih_2026 | irrelevant | 0 | 0 | The paper is a review on nanocarrier-mediated delivery of phytochemicals for wound healing and does not report pharmacokinetic parameters for guar gum. |
| PD | Wahyuningsih_2026 | not_relevant | 0 | 0 | The paper is a review of nanocarrier delivery systems for phytochemicals in diabetic wound healing and does not report any pharmacodynamic or exposure-response data for guar gum. |
| popPK | Wanders_2011 | irrelevant | 0 | 0 | The paper is a systematic review of dietary fiber effects on appetite and weight, not a pharmacokinetic study, and contains no PK parameters for guar gum. |
| PD | Wanders_2011 | not_relevant | 1 | 0 | The paper is a systematic review that reports qualitative effect rates and explicitly states that distinct dose-response relationships were not observed, providing no numeric PD parameters. |
| popPK | Whiteley_1996 | irrelevant | 0 | 0 | The study evaluates colonic mucosal growth and fermentation in rats, not the pharmacokinetic disposition parameters of guar gum. |
| PD | Whiteley_1996 | not_relevant | 4 | 2 | The paper describes a qualitative dose-response relationship for guar gum but does not provide specific numeric data points or fitted PD parameters (like Emax or EC50) in the text. |
| popPK | Zarbab_2023 | irrelevant | 0 | 0 | The study focuses on the synthesis and in-vitro drug release kinetics of a guar gum hydrogel for methotrexate, not on the pharmacokinetic parameters of guar gum itself. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a placeholder for a PDF file and contains no scientific content, data, or mention of guar gum or pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
