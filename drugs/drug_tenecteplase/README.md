<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;tenecteplase&quot;}]"></div>

# tenecteplase

- **generic name:** tenecteplase
- **ATC codes:** `B01AD11`
- **DrugBank:** [DB00031](https://go.drugbank.com/drugs/DB00031) · **PubChem:** none
- **groups:** approved, investigational

## About

Tenecteplase is a fibrinolytic (clot-dissolving) drug used to treat acute myocardial infarction, and has also been used for coronary thrombosis and ischemic stroke. It is an approved medicine, authorised in the European Union, and is widely used as a thrombolytic, mainly in hospital settings for heart attacks.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1644947](https://www.wikidata.org/wiki/Q1644947) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 5.478 | L/h | 91.3 mL/min | patients with acute myocardial infarction | &gt;=103 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Tang_2023_final_model_value](drugs/drug_tenecteplase/Tenecteplase_Tang2023_final_model_value.md) |
| CL | CL | 5.94 | L/h | 99 mL/min | patients with acute myocardial infarction | &gt;=103 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Tang_2023_shr](drugs/drug_tenecteplase/Tenecteplase_Tang2023_shr.md) |
| V | V1 | 3.61 | L | 3610 mL | patients with acute myocardial infarction | &gt;=103 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Tang_2023_final_model_value](drugs/drug_tenecteplase/Tenecteplase_Tang2023_final_model_value.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Tang_2023 · CL</text><circle cx="448.5" cy="30.0" r="4" fill="#ef6c00"><title>Tang_2023 · CL: 5.478 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Tang_2023 · CL</text><circle cx="460.8" cy="46.0" r="4" fill="#ef6c00"><title>Tang_2023 · CL: 5.94 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Tang_2023_final_model_value](drugs/drug_tenecteplase/Tenecteplase_Tang2023_final_model_value.md) | — | 2-compartment (no model) | 4 (+3 cov.) | Tang F et al., Population Pharmacokinetics of Tenectep…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2164](https://doi.org/10.1002/jcph.2164) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [↳ shr](drugs/drug_tenecteplase/Tenecteplase_Tang2023_shr.md) | — | 1-compartment (no model) | 1 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Yang_2023_reference](drugs/drug_tenecteplase/Tenecteplase_Yang2023_reference.md) | — | 1-compartment (no model) | 3 | Yang Y et al., In Silico Study of Different Thrombolyt…, Pharmaceutics (2023) | [10.3390/pharmaceutics15030797](https://doi.org/10.3390/pharmaceutics15030797) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tenecteplase).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PLG (activator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:26 | 2:39 | 2/1/0 | 0/0/0 | 0/0/0 | 191,897/13,178 | einfracz / qwen3.8-27b | 13 | 2/19 | 12/1 | 0 |

## Coverage

- **PubMed hits:** 77 matched, 64 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alemseged_2021 | not_relevant | 0 | 0 | The paper discusses the efficacy of tenecteplase in stroke treatment and compares it to alteplase, but it does not report any pharmacogenomic analysis or genetic variants affecting PK/PD parameters. |
| PGx | Alemseged_2021_2 | not_relevant | 0 | 0 | The paper compares clinical outcomes (reperfusion rates) between tenecteplase and alteplase, reporting no data on gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Aslan_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety analysis of stroke outcomes, reporting no pharmacokinetic parameters such as clearance, volume of distribution, or half-life for tenecteplase. |
| PGx | Bacha_2025 | not_relevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy and safety outcomes (mRS, ICH) and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Bechmann_2024 | not_relevant | 0 | 0 | The study compares the biochemical and pharmacodynamic quality of two tenecteplase formulations (originator vs. generic) but does not investigate human gene variants or pharmacogenomic effects. |
| PGx | Benedict_1995 | not_relevant | 0 | 0 | The paper describes a protein engineering variant (TNK-TPA) with improved PK/PD properties, not a human genetic variant affecting the drug's response. |
| popPK | Cadot_2024 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamics of ibrutinib in CLL patients and does not report any pharmacokinetic parameters for tenecteplase. |
| PD | Cadot_2024 | not_relevant | 0 | 0 | The paper focuses on ibrutinib in CLL, not tenecteplase, and does not report exposure-response or dose-response PD parameters for the target drug. |
| PGx | Cannon_1997 | not_relevant | 0 | 0 | The paper reports standard pharmacokinetics for TNK-TPA but does not investigate the impact of patient gene variants, genotypes, or phenotypes on these parameters. |
| popPK | Cannon_1998 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial (TIMI 10B) reporting reperfusion rates and safety outcomes, not a pharmacokinetic study with quantitative disposition parameters. |
| PGx | Chondros_2014 | not_relevant | 0 | 0 | The paper is a single case report of tenecteplase treatment in a patient with renal infarction and thrombophilic genotypes, but it does not report or analyze how these genetic variants altered the drug's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Collen_1994 | not_relevant | 0 | 0 | The paper investigates engineered protein variants of rt-PA in an animal model, not human genetic polymorphisms affecting tenecteplase pharmacokinetics or pharmacodynamics. |
| PGx | Davydov_2001 | not_relevant | 0 | 0 | The paper is a general review of tenecteplase's pharmacology and clinical efficacy, containing no data on gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Dehghani_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of ticagrelor versus clopidogrel on platelet function, with tenecteplase serving only as a background fibrinolytic agent, and no pharmacokinetic parameters for tenecteplase are reported. |
| PD | Dehghani_2017 | not_relevant | 0 | 0 | The paper reports platelet function (PD) for ticagrelor and clopidogrel, but does not report any exposure-response or dose-response relationship for tenecteplase. |
| popPK | Dhar_2022 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study comparing thrombolytic outcomes, not a pharmacokinetic study, and reports no quantitative PK parameters (CL, V, etc.) for tenecteplase. |
| PD | Dhar_2022 | not_relevant | 0 | 0 | The paper is a retrospective clinical trial comparing efficacy and safety outcomes (mRS, NIHSS) between two drugs, with no pharmacokinetic data, concentration measurements, or dose-response modeling. |
| popPK | Diprose_2025 | irrelevant | 0 | 0 | The study is a clinical trial evaluating reperfusion outcomes in stroke patients, not a pharmacokinetic study, and contains no PK parameters like clearance or volume of distribution. |
| PGx | Dunn_2001 | not_relevant | 0 | 0 | The paper is a general pharmacological review of tenecteplase and does not report any pharmacogenomic effects or genotype-based variations in PK/PD. |
| popPK | Gibson_1999 | irrelevant | 0 | 0 | The paper is a clinical trial analyzing angiographic outcomes based on weight-adjusted dosing, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PGx | Guerra_2003 | not_relevant | 0 | 0 | The paper discusses clinical safety and efficacy of tenecteplase in AMI but does not report pharmacogenomic effects of gene variants on PK or PD parameters. |
| PGx | Gusev_2018 | not_relevant | 0 | 0 | The text is a general historical overview of thrombolytic therapies and does not contain specific data on gene variants or their effects on the PK/PD of tenecteplase. |
| PGx | Hailu_2022 | not_relevant | 0 | 0 | The paper is a general clinical review comparing tenecteplase to alteplase for stroke and does not discuss gene variants or pharmacogenomics. |
| PGx | Han_2023 | not_relevant | 0 | 0 | The paper focuses on single-cell transcriptomics in hepatocellular carcinoma, with no mention of tenecteplase or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Huang_2011 | irrelevant | 0 | 0 | The paper studies the anti-HIV activity of a novel compound (BmPCP) and does not involve tenecteplase or pharmacokinetic parameters. |
| PD | Huang_2011 | not_relevant | 0 | 0 | The paper studies HIV-1 NNRTIs (BmPCP), not tenecteplase. |
| PGx | Huang_2024 | not_relevant | 0 | 0 | The paper is a meta-analysis comparing clinical outcomes of tenecteplase versus alteplase and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Keragala_2020 | not_relevant | 0 | 0 | The study is an in vitro mechanistic investigation of blood-brain barrier permeability and does not report human genetic variation affecting the PK or PD of tenecteplase. |
| PGx | Keyt_1994 | not_relevant | 0 | 0 | The paper describes the structural engineering and pharmacological properties of a specific tPA variant (TNK-tPA) compared to wild-type, not the effect of human genetic polymorphisms on drug response. |
| popPK | Kheiri_2018 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy and safety outcomes, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Kheiri_2018 | not_relevant | 1 | 0 | The paper is a meta-analysis of clinical outcomes (efficacy/safety) and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters (e.g., Emax, EC50). |
| PGx | Kheiri_2018 | not_relevant | 0 | 0 | The paper compares two drugs in clinical trials and does not report genetic variants or their effects on pharmacokinetic/pharmacodynamic parameters. |
| popPK | Lapchak_2004 | irrelevant | 0 | 0 | The study is a pharmacodynamic/behavioral outcome study in rabbits where tenecteplase is a co-administered agent, and no pharmacokinetic parameters (CL, V, etc.) are reported. |
| PD | Lapchak_2004 | not_relevant | 3 | 2 | The paper reports a dose-response for NXY-059 and a qualitative combination effect with tenecteplase, but does not provide numeric PD parameters (e.g., EC50, Emax) or an exposure-response relationship specifically for tenecteplase. |
| popPK | Lapchak_2004_2 | irrelevant | 1 | 0 | The study reports pharmacodynamic efficacy (P50 values) in a rabbit stroke model but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Llevadot_2001 | irrelevant | 2 | 0 | The paper is a narrative review of bolus fibrinolytics and does not report original quantitative pharmacokinetic parameter values for tenecteplase. |
| PD | Llevadot_2001 | not_relevant | 2 | 0 | The paper is a narrative review summarizing efficacy and safety outcomes of bolus fibrinolytics, not a primary study reporting specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves for tenecteplase. |
| popPK | Logallo_2015 | irrelevant | 0 | 0 | The paper is a narrative review discussing the therapeutic potential and clinical trials of tenecteplase, but it does not report any original quantitative pharmacokinetic parameters (CL, V, etc.). |
| PD | Logallo_2015 | not_relevant | 1 | 0 | The text is a qualitative review discussing the therapeutic potential and clinical trial status of tenecteplase without providing any numeric pharmacodynamic parameters or exposure-response data. |
| PGx | Longstaff_2008 | not_relevant | 0 | 0 | The text is a review discussing the engineering and mechanism of action of thrombolytics but does not report specific pharmacogenomic effects on PK/PD parameters. |
| popPK | Ma_2025 | irrelevant | 0 | 0 | The paper describes pharmacodynamics and efficacy of bispecific antibodies targeting B7-H6 and IL-15 fusions, with no mention of tenecteplase or its pharmacokinetics. |
| PD | Ma_2025 | not_relevant | 0 | 0 | The paper investigates B7-H6-targeted bispecific antibodies, not tenecteplase. |
| popPK | Marè_2024 | irrelevant | 2 | 0 | The paper is a review article comparing pharmacokinetic properties without providing original quantitative parameter values in the evidence. |
| PD | Marè_2024 | not_relevant | 2 | 0 | The paper is a review comparing pharmacokinetic properties and clinical efficacy, but it does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or an extractable exposure-response curve for tenecteplase. |
| popPK | Masanneck_2026 | irrelevant | 0 | 0 | The paper is a geospatial analysis of stroke care access in Germany and does not report any pharmacokinetic parameters for tenecteplase. |
| PD | Masanneck_2026 | not_relevant | 0 | 0 | The paper is a geospatial analysis of stroke care access and transport times, containing no pharmacokinetic or pharmacodynamic data for tenecteplase. |
| PGx | Melandri_2009 | not_relevant | 0 | 0 | The text is a clinical review of tenecteplase efficacy and dosing in acute myocardial infarction and does not mention any genetic variants or pharmacogenomic effects on its PK/PD. |
| PGx | Meng_2024 | not_relevant | 0 | 0 | The study is a randomized controlled trial comparing clinical outcomes and safety of tenecteplase and alteplase in acute ischemic stroke, and it does not report any pharmacogenomic effects or gene-variant associations with pharmacokinetic or pharmacodynamic parameters. |
| popPK | Mesgarpour_2017 | irrelevant | 0 | 0 | The paper is a systematic review on erythropoiesis-stimulating agents in critically ill patients and does not contain pharmacokinetic data for tenecteplase. |
| PD | Mesgarpour_2017 | not_relevant | 0 | 0 | The paper is a systematic review of erythropoiesis-stimulating agents (ESAs) in critically ill patients and does not mention tenecteplase or report any pharmacodynamic or exposure-response data. |
| PGx | Modi_1998 | not_relevant | 0 | 0 | The study describes the pharmacokinetics of tenecteplase and identifies demographic covariates (gender, weight, age) affecting clearance, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Modi_2000 | not_relevant | 0 | 0 | The study investigates dose-ranging pharmacokinetics and pharmacodynamics but does not report any pharmacogenomic effects (gene variants/genotypes) on these parameters. |
| PGx | Rowe_2026 | not_relevant | 0 | 0 | The study reports safety outcomes of tenecteplase but does not examine genetic variants or pharmacokinetic parameters. |
| popPK | Sakharov_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of fibrinolysis efficiency and ultrasound effects, not a pharmacokinetic study reporting quantitative disposition parameters for tenecteplase. |
| popPK | Schaedeli_2024 | irrelevant | 0 | 0 | The paper is a pharmacokinetic study of balovaptan, not tenecteplase. |
| PD | Schaedeli_2024 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PK) of balovaptan, not tenecteplase, and does not report numeric PD parameters for the target drug. |
| PGx | Shi_2024 | not_relevant | 0 | 0 | The paper is a case report of an adverse event (angioedema) and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Silva_2025 | not_relevant | 0 | 0 | The paper is a general narrative review of tenecteplase in stroke and does not report specific pharmacogenomic effects on PK/PD parameters. |
| PGx | Stewart_2000 | not_relevant | 0 | 0 | The paper analyzes the mechanism of action of a bioengineered drug variant (TNK-t-PA) compared to its parent compound, not the effect of human genetic variants on the drug's PK or PD parameters. |
| PD | Tang_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model and covariate analysis for tenecteplase but contains no pharmacodynamic (PD) or exposure-response data, parameters, or effect measurements. |
| PGx | Tang_2025 | not_relevant | 0 | 0 | The paper is a single case report describing the clinical reversal of cortical blindness with tenecteplase and does not report any pharmacogenomic analysis or gene variant effects on PK/PD parameters. |
| popPK | Tashima_2014 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for darunavir in HIV patients, not tenecteplase. |
| PD | Tashima_2014 | not_relevant | 0 | 0 | The paper concerns darunavir/cobicistat, not tenecteplase, and reports no PD parameters. |
| popPK | Thelengana_2019 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy and safety outcomes, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Thelengana_2019 | not_relevant | 1 | 0 | The paper is a meta-analysis of clinical outcomes (efficacy/safety) comparing two drugs and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters. |
| PGx | Van_1999 | not_relevant | 0 | 0 | The paper is a clinical trial comparing the efficacy and safety of tenecteplase vs. alteplase and does not contain any data on pharmacogenomic variants affecting pharmacokinetic or pharmacodynamic parameters. |
| PGx | Van_2001 | not_relevant | 0 | 0 | The paper reports clinical safety outcomes (bleeding incidence) and demographic predictors, but it does not report pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Vanangamudi_2023 | irrelevant | 0 | 0 | The paper is a review on the design of HIV NNRTIs and does not contain pharmacokinetic data for tenecteplase. |
| PD | Vanangamudi_2023 | not_relevant | 0 | 0 | The paper is a review on the design and development of NNRTIs for HIV and does not contain any pharmacodynamic or exposure-response data for tenecteplase. |
| PGx | Verstraete_2000 | not_relevant | 0 | 0 | The paper discusses third-generation thrombolytics generally but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters for tenecteplase. |
| PGx | Wang_2012 | not_relevant | 0 | 0 | The paper concerns the design and evaluation of new HIV-1 NNRTIs and does not study tenecteplase or pharmacogenomics. |
| popPK | Wang_2024 | irrelevant | 2 | 1 | The paper is a clinical review of tenecteplase for stroke that cites a single animal clearance value (1.9 mL/min/kg) but lacks a compartmental model, volume of distribution, or human PK parameters. |
| PD | Wang_2024 | not_relevant | 2 | 1 | The paper is a comprehensive review that summarizes clinical trial outcomes (efficacy/safety) and mentions PK/PD advantages qualitatively, but it does not report or provide numeric PD parameters (Emax, EC50, etc.) or extractable concentration-effect curves. |
| popPK | Yang_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of antiplatelet agents (Ticagrelor vs. Clopidogrel) and does not report any pharmacokinetic parameters for tenecteplase. |
| PD | Yang_2018 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamic effects of Ticagrelor versus Clopidogrel on platelet reactivity, with no analysis of tenecteplase exposure-response or dose-response relationships. |
| popPK | de_2020 | irrelevant | 0 | 0 | The paper is a veterinary study on renal development in preterm rabbits and does not involve the drug tenecteplase or its pharmacokinetics. |
| PD | de_2020 | not_relevant | 0 | 0 | The paper investigates renal development in preterm rabbits and does not involve tenecteplase or any pharmacodynamic modeling. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, models, or parameters for tenecteplase. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a title of a conference abstract collection and contains no data, analysis, or parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btenecteplase%5D&body=Drug%3A%20tenecteplase%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tenecteplase/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 18:23 UTC</sub>
