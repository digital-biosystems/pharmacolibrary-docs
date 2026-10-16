<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;tenecteplase&quot;}]"></div>

# tenecteplase

- **generic name:** tenecteplase
- **ATC codes:** `B01AD11`
- **DrugBank:** [DB00031](https://go.drugbank.com/drugs/DB00031) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tenecteplase is a fibrinolytic (clot-dissolving) drug used to treat acute myocardial infarction, and has also been used for coronary thrombosis and ischemic stroke. It is an approved medicine, authorised in the European Union, and is widely used as a thrombolytic, mainly in hospital settings for heart attacks.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1644947](https://www.wikidata.org/wiki/Q1644947) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 18:12 | 7:16 | 0/1/2 | 0/0/0 | 0/0/0 | 268,715/50,355 | einfracz / qwen3.8-27b | 13 | 2/19 | 12/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Tang_2023_final_model_value](drugs/drug_tenecteplase/Tenecteplase_Tang2023_final_model_value.md) | — | 2-compartment (no model) | 4 (+3 cov.) | Tang F et al., Population Pharmacokinetics of Tenectep…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2164](https://doi.org/10.1002/jcph.2164) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Tang_2023_shr](drugs/drug_tenecteplase/Tenecteplase_Tang2023_shr.md) | — | 1-compartment (no model) | 1 | Tang F et al., Population Pharmacokinetics of Tenectep…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2164](https://doi.org/10.1002/jcph.2164) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.364). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Yang_2023_reference](drugs/drug_tenecteplase/Tenecteplase_Yang2023_reference.md) | — | 1-compartment (no model) | 3 | Yang Y et al., In Silico Study of Different Thrombolyt…, Pharmaceutics (2023) | [10.3390/pharmaceutics15030797](https://doi.org/10.3390/pharmaceutics15030797) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tenecteplase).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PLG (activator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 77 matched, 64 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alemseged_2021 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (reperfusion rates, functional outcomes) of tenecteplase versus alteplase but contains no pharmacogenomic data linking specific gene variants to PK or PD parameters. |
| PGx | Alemseged_2021_2 | not_relevant | 0 | 0 | The study investigates clinical efficacy comparing tenecteplase to alteplase in stroke patients and does not report any pharmacogenomic (gene variant) effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Aslan_2026 | irrelevant | 0 | 0 | The paper is a post-hoc clinical efficacy and safety analysis of the AcT trial reporting functional outcomes (mRS) and safety endpoints, containing no pharmacokinetic parameters or values. |
| PGx | Bacha_2025 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes of tenecteplase in a meta-analysis but contains no data on gene variants, genotypes, or pharmacogenomics. |
| PGx | Bechmann_2024 | not_relevant | 0 | 0 | The paper compares the biochemical and functional characteristics of two different tenecteplase brands but does not study any human genetic variants or their effect on pharmacokinetics or pharmacodynamics. |
| PGx | Benedict_1995 | not_relevant | 0 | 0 | The paper compares the pharmacokinetics and pharmacodynamics of two different molecules (TNK-TPA vs r-TPA) but does not investigate the effect of human genetic variants (pharmacogenomics) on the drug's response. |
| popPK | Cadot_2024 | irrelevant | 0 | 0 | The paper studies pharmacodynamics of ibrutinib in CLL and does not report pharmacokinetic parameters for tenecteplase. |
| PD | Cadot_2024 | not_relevant | 0 | 0 | The paper focuses on ibrutinib in CLL, not tenecteplase, and does not report exposure-response or dose-response PD parameters for the target drug. |
| PGx | Cannon_1997 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of a drug variant (TNK-tPA) compared to the wild-type protein, which is a drug design comparison, not a report of how a patient's genetic variant affects the drug's PK/PD. |
| popPK | Cannon_1998 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial (TIMI 10B) reporting reperfusion rates and safety outcomes, not a pharmacokinetic study with quantitative disposition parameters. |
| PGx | Chondros_2014 | not_relevant | 0 | 0 | The paper is a case report describing the treatment of a patient with specific polymorphisms using tenecteplase, but it does not analyze or report how these variants alter the drug's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Collen_1994 | not_relevant | 0 | 0 | The paper studies engineered protein variants (rt-PA derivatives) in a dog model, not human pharmacogenomic effects of tenecteplase. |
| PGx | Davydov_2001 | not_relevant | 0 | 0 | The paper is a general review of tenecteplase's pharmacokinetics and efficacy, without reporting any pharmacogenomic (genetic variant) effects on PK or PD parameters. |
| popPK | Dehghani_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of ticagrelor versus clopidogrel on platelet function, with tenecteplase serving only as a background fibrinolytic agent, and no pharmacokinetic parameters for tenecteplase are reported. |
| PD | Dehghani_2017 | not_relevant | 0 | 0 | The paper reports platelet function (PD) for ticagrelor and clopidogrel, but does not report any exposure-response or dose-response relationship for tenecteplase. |
| popPK | Dhar_2022 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study comparing thrombolytic outcomes, not a pharmacokinetic study, and reports no quantitative PK parameters (CL, V, etc.) for tenecteplase. |
| PD | Dhar_2022 | not_relevant | 0 | 0 | The paper is a retrospective clinical trial comparing efficacy and safety outcomes (mRS, NIHSS) between two drugs, with no pharmacokinetic data, concentration measurements, or dose-response modeling. |
| popPK | Diprose_2025 | irrelevant | 0 | 0 | This is a clinical trial evaluating reperfusion outcomes in stroke patients, not a pharmacokinetic study, and contains no quantitative PK parameters like clearance or volume of distribution for tenecteplase. |
| PGx | Dunn_2001 | not_relevant | 0 | 0 | The paper is a review of pharmacology and clinical efficacy but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Gibson_1999 | irrelevant | 0 | 0 | The paper is a clinical trial analyzing angiographic outcomes based on weight-adjusted dosing, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PGx | Guerra_2003 | not_relevant | 0 | 0 | The paper discusses the general clinical safety and efficacy of tenecteplase but does not report any pharmacogenomic studies or gene-specific effects on PK/PD parameters. |
| PGx | Gusev_2018 | not_relevant | 0 | 0 | The text is a general historical review of thrombolytic therapy and does not report any pharmacogenomic data or specific PK/PD effects for tenecteplase. |
| PGx | Hailu_2022 | not_relevant | 0 | 0 | The paper is a clinical review comparing tenecteplase to alteplase for stroke treatment and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Han_2023 | not_relevant | 0 | 0 | The paper analyzes single-cell transcriptomics for HCC prognosis and drug sensitivity, but does not study tenecteplase or its pharmacokinetics/pharmacodynamics. |
| popPK | Huang_2011 | irrelevant | 0 | 0 | The paper studies the anti-HIV activity of a novel compound (BmPCP) and does not involve tenecteplase or pharmacokinetic parameters. |
| PD | Huang_2011 | not_relevant | 0 | 0 | The paper studies HIV-1 NNRTIs (BmPCP), not tenecteplase. |
| PGx | Huang_2024 | not_relevant | 0 | 0 | The paper is a meta-analysis comparing clinical outcomes of tenecteplase versus alteplase and does not investigate the impact of gene variants on PK or PD parameters. |
| PGx | Keragala_2020 | not_relevant | 0 | 0 | The paper investigates the mechanism of BBB permeability changes using in vitro cell models and complement inhibitors, reporting no human gene variants or genotypes affecting tenecteplase PK/PD parameters. |
| PGx | Keyt_1994 | not_relevant | 0 | 0 | The paper describes the development and pharmacological properties of a drug variant (TNK-tPA) versus wild-type tPA, not the effect of a human genetic variant on the drug's PK or PD. |
| popPK | Kheiri_2018 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy and safety outcomes, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Kheiri_2018 | not_relevant | 1 | 0 | The paper is a meta-analysis of clinical outcomes (efficacy/safety) and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters (e.g., Emax, EC50). |
| PGx | Kheiri_2018 | not_relevant | 0 | 0 | The paper is a meta-analysis comparing the clinical efficacy and safety of tenecteplase vs. alteplase in stroke patients and does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Lapchak_2004 | irrelevant | 0 | 0 | The study is a pharmacodynamic/behavioral outcome study in rabbits where tenecteplase is a co-administered agent, and no pharmacokinetic parameters (CL, V, etc.) are reported. |
| PD | Lapchak_2004 | not_relevant | 3 | 2 | The paper reports a dose-response for NXY-059 and a qualitative combination effect with tenecteplase, but does not provide numeric PD parameters (e.g., EC50, Emax) or an exposure-response relationship specifically for tenecteplase. |
| popPK | Lapchak_2004_2 | irrelevant | 1 | 0 | The study reports pharmacodynamic efficacy (P50 values) in a rabbit stroke model but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Llevadot_2001 | irrelevant | 2 | 0 | The paper is a narrative review of bolus fibrinolytics and does not report original quantitative pharmacokinetic parameter values for tenecteplase. |
| PD | Llevadot_2001 | not_relevant | 2 | 0 | The paper is a narrative review summarizing efficacy and safety outcomes of bolus fibrinolytics, not a primary study reporting specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves for tenecteplase. |
| popPK | Logallo_2015 | irrelevant | 0 | 0 | The paper is a narrative review discussing the therapeutic potential and clinical trials of tenecteplase, but it does not report any original quantitative pharmacokinetic parameters (CL, V, etc.). |
| PD | Logallo_2015 | not_relevant | 1 | 0 | The text is a qualitative review discussing the therapeutic potential and clinical trial status of tenecteplase without providing any numeric pharmacodynamic parameters or exposure-response data. |
| PGx | Longstaff_2008 | not_relevant | 0 | 0 | The paper discusses the mechanism of action and development of thrombolytics but does not report pharmacogenomic effects on the PK/PD of tenecteplase. |
| popPK | Ma_2025 | irrelevant | 0 | 0 | The paper focuses on B7-H6-targeted bispecific antibodies and immunotherapy, containing no data for the drug tenecteplase. |
| PD | Ma_2025 | not_relevant | 0 | 0 | The paper investigates B7-H6-targeted bispecific antibodies, not tenecteplase. |
| popPK | Marè_2024 | irrelevant | 2 | 0 | The paper is a review article comparing pharmacokinetic properties without providing original quantitative parameter values in the evidence. |
| PD | Marè_2024 | not_relevant | 2 | 0 | The paper is a review comparing pharmacokinetic properties and clinical efficacy, but it does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or an extractable exposure-response curve for tenecteplase. |
| popPK | Masanneck_2026 | irrelevant | 0 | 0 | The study is a geospatial access analysis for stroke care in Germany and contains no pharmacokinetic parameters for tenecteplase. |
| PD | Masanneck_2026 | not_relevant | 0 | 0 | The paper is a geospatial analysis of stroke care access and transport times, containing no pharmacokinetic or pharmacodynamic data for tenecteplase. |
| PGx | Melandri_2009 | not_relevant | 0 | 0 | The paper reviews the clinical efficacy and pharmacology of tenecteplase but does not report any association between specific patient gene variants/genotypes and its PK/PD parameters. |
| PGx | Meng_2024 | not_relevant | 0 | 0 | The paper describes a randomized clinical trial comparing the clinical efficacy of tenecteplase vs alteplase for stroke treatment, and does not report pharmacokinetic or pharmacodynamic data or any gene-specific effects. |
| popPK | Mesgarpour_2017 | irrelevant | 0 | 0 | The paper is a review of erythropoiesis-stimulating agents in critically ill patients and does not study tenecteplase or its pharmacokinetics. |
| PD | Mesgarpour_2017 | not_relevant | 0 | 0 | The paper is a systematic review of erythropoiesis-stimulating agents (ESAs) in critically ill patients and does not mention tenecteplase or report any pharmacodynamic or exposure-response data. |
| PGx | Modi_1998 | not_relevant | 0 | 0 | The study reports pharmacokinetics of tenecteplase but analyzes demographic covariates (sex, weight, age) rather than genetic variants or genotypes. |
| PGx | Modi_2000 | not_relevant | 0 | 0 | The study investigates dose-ranging pharmacokinetics and pharmacodynamics but does not report any pharmacogenomic effects (gene variants/genotypes) on these parameters. |
| PGx | Rowe_2026 | not_relevant | 0 | 0 | The study evaluates the safety of tenecteplase in stroke mimics versus acute ischemic stroke and does not investigate any gene variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Sakharov_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of fibrinolysis efficiency and ultrasound effects, not a pharmacokinetic study reporting quantitative disposition parameters for tenecteplase. |
| popPK | Schaedeli_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for balovaptan, not tenecteplase. |
| PD | Schaedeli_2024 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PK) of balovaptan, not tenecteplase, and does not report numeric PD parameters for the target drug. |
| PGx | Shi_2024 | not_relevant | 0 | 0 | The paper is a case report of an adverse event (angioedema) and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Silva_2025 | not_relevant | 1 | 0 | The text is a narrative review on the clinical use of tenecteplase and contains no information on pharmacogenomic effects on PK or PD parameters. |
| PGx | Stewart_2000 | not_relevant | 0 | 0 | The paper investigates the mechanism of increased fibrin specificity of tenecteplase due to protein engineering, not the effect of human genetic variants on its pharmacokinetics or pharmacodynamics. |
| PD | Tang_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model and covariate analysis for tenecteplase but contains no pharmacodynamic (PD) or exposure-response data, parameters, or effect measurements. |
| PGx | Tang_2025 | not_relevant | 0 | 0 | The paper is a single case report describing clinical outcomes of tenecteplase administration and contains no data on gene variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| popPK | Tashima_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of darunavir and cobicistat in HIV patients, with no data or mention of tenecteplase. |
| PD | Tashima_2014 | not_relevant | 0 | 0 | The paper concerns darunavir/cobicistat, not tenecteplase, and reports no PD parameters. |
| popPK | Thelengana_2019 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy and safety outcomes, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Thelengana_2019 | not_relevant | 1 | 0 | The paper is a meta-analysis of clinical outcomes (efficacy/safety) comparing two drugs and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters. |
| PGx | Van_1999 | not_relevant | 0 | 0 | The paper is a clinical trial comparing tenecteplase and alteplase efficacy/safety without analyzing any genetic variants or pharmacogenomic effects on PK/PD. |
| PGx | Van_2001 | not_relevant | 0 | 0 | The paper compares clinical bleeding outcomes of two drugs based on demographic risk factors, but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Vanangamudi_2023 | irrelevant | 0 | 0 | The paper is a review of NNRTI drug design for HIV and contains no pharmacokinetic data for tenecteplase. |
| PD | Vanangamudi_2023 | not_relevant | 0 | 0 | The paper is a review on the design and development of NNRTIs for HIV and does not contain any pharmacodynamic or exposure-response data for tenecteplase. |
| PGx | Verstraete_2000 | not_relevant | 0 | 0 | The text describes the development and clinical efficacy of third-generation thrombolytics but does not report any pharmacogenomic effects on PK or PD parameters for tenecteplase. |
| PGx | Wang_2012 | not_relevant | 0 | 0 | The paper focuses on the synthesis of HIV-1 inhibitors and their pharmacodynamic profile, containing no data on tenecteplase or its pharmacokinetics. |
| popPK | Wang_2024 | irrelevant | 2 | 1 | The paper is a clinical review of tenecteplase for stroke that cites a single animal clearance value (1.9 mL/min/kg) but lacks a compartmental model, volume of distribution, or human PK parameters. |
| PD | Wang_2024 | not_relevant | 2 | 1 | The paper is a comprehensive review that summarizes clinical trial outcomes (efficacy/safety) and mentions PK/PD advantages qualitatively, but it does not report or provide numeric PD parameters (Emax, EC50, etc.) or extractable concentration-effect curves. |
| popPK | Yang_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of antiplatelet agents (Ticagrelor vs. Clopidogrel) and does not report any pharmacokinetic parameters for tenecteplase. |
| PD | Yang_2018 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamic effects of Ticagrelor versus Clopidogrel on platelet reactivity, with no analysis of tenecteplase exposure-response or dose-response relationships. |
| popPK | de_2020 | irrelevant | 0 | 0 | The study is a renal developmental and morphological study in rabbits and does not involve tenecteplase or pharmacokinetics. |
| PD | de_2020 | not_relevant | 0 | 0 | The paper investigates renal development in preterm rabbits and does not involve tenecteplase or any pharmacodynamic modeling. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, models, or parameters for tenecteplase. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a title of a conference abstract collection and contains no data, analysis, or parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 18:08 UTC</sub>
