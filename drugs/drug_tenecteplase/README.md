# tenecteplase

- **generic name:** tenecteplase
- **ATC codes:** `B01AD11`
- **DrugBank:** [DB00031](https://go.drugbank.com/drugs/DB00031)
- **groups:** approved, investigational

## About

**Description.** Tenecteplase is a tissue plasminogen activator (tPA) developed from modifications of natural human tPA complementary DNA (cDNA). It is a 527 amino acid with a substitution of threonine 103 with asparagine and substitution of asparagine 117 with glutamine within the kringle 1 domain, and a tetra-alanine substitution at amino acids 296-299 in the protease domain.

**Indication.** Tenecteplase is indicated for the treatment of acute ischemic stroke (AIS) in adult patients and to reduce the risk of death in adult patients following acute ST-elevated myocardial infarction (STEMI).[L54918,L54923]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 06:30 | 44:19 | 0/1/0 | 0/1/0 | 0/0/0 | 20,984/956 | ollama / qwen3.8:27b-q4_K_M | 20 | 2/18 | 19/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Yang_2023](drugs/drug_tenecteplase/Tenecteplase_Yang2023_reference.md) | Yang Y et al., In Silico Study of Different Thrombolyt…, Pharmaceutics (2023) | [10.3390/pharmaceutics15030797](https://doi.org/10.3390/pharmaceutics15030797) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Yang_2023](drugs/drug_tenecteplase/pd_Yang_2023_PAI_1_concentration.md) | Yang Y et al., In Silico Study of Different Thrombolyt…, Pharmaceutics (2023) | [10.3390/pharmaceutics15030797](https://doi.org/10.3390/pharmaceutics15030797) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Yang_2023](drugs/drug_tenecteplase/pd_Yang_2023_clot_lysis_time.md) | Yang Y et al., In Silico Study of Different Thrombolyt…, Pharmaceutics (2023) | [10.3390/pharmaceutics15030797](https://doi.org/10.3390/pharmaceutics15030797) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Yang_2023](drugs/drug_tenecteplase/pd_Yang_2023_fibrinogen_concentration.md) | Yang Y et al., In Silico Study of Different Thrombolyt…, Pharmaceutics (2023) | [10.3390/pharmaceutics15030797](https://doi.org/10.3390/pharmaceutics15030797) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Yang_2023](drugs/drug_tenecteplase/pd_Yang_2023_intracranial_hemorrhage_risk.md) | Yang Y et al., In Silico Study of Different Thrombolyt…, Pharmaceutics (2023) | [10.3390/pharmaceutics15030797](https://doi.org/10.3390/pharmaceutics15030797) |

## Coverage

- **PubMed hits:** 77 matched, 64 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Modi_2000.pdf` | Modi NB et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2000) | popPK | 10 | [10.1177/00912700022009125](https://doi.org/10.1177/00912700022009125) | [10806604](https://pubmed.ncbi.nlm.nih.gov/10806604) | The study reports quantitative PK parameters for tenecteplase, including mean initial and terminal half-lives and mean plasma clearance, directly in the text. |
| `Tang_2023.pdf` | Tang F et al., Population Pharmacokinetics of Tenectep…, Journal of clinical pharmac… (2023) | popPK | 10 | [10.1002/jcph.2164](https://doi.org/10.1002/jcph.2164) | [36278839](https://pubmed.ncbi.nlm.nih.gov/36278839) | The paper describes a population PK model for tenecteplase, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Tanswell_2002.pdf` | Tanswell P et al., Pharmacokinetics and pharmacodynamics o…, Clinical pharmacokinetics (2002) | popPK | 10 | [10.2165/00003088-200241150-00001](https://doi.org/10.2165/00003088-200241150-00001) | [12452736](https://pubmed.ncbi.nlm.nih.gov/12452736) | The text explicitly reports quantitative PK parameters for tenecteplase, including clearance (105 ml/min), volumes of distribution (V1 4.2-6.3L, Vss 6.1-9.9L), and half-lives. |

<sub>queue written 2026-09-06T05:51:12.751693+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alemseged_2021 | not_relevant | 0 | 0 | The paper discusses the clinical efficacy of tenecteplase in stroke but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Alemseged_2021_2 | not_relevant | 0 | 0 | The paper compares the clinical efficacy of two different drugs (tenecteplase vs alteplase) and does not report any pharmacogenomic effects based on gene variants or genotypes. |
| popPK | Aslan_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety analysis of tenecteplase in stroke patients and does not report any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Bacha_2025 | not_relevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy and safety outcomes (mRS, ICH) and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Bechmann_2024 | not_relevant | 0 | 0 | The paper compares the biochemical and fibrinolytic properties of two tenecteplase products (originator vs. copy) but does not investigate the impact of human gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Benedict_1995 | not_relevant | 0 | 0 | The paper compares the pharmacokinetic and pharmacodynamic properties of two different drug molecules (TPA vs. TNK-TPA) in an animal model, but does not investigate the effect of human genetic variants on the response to tenecteplase. |
| popPK | Cadot_2024 | irrelevant | 0 | 0 | The paper studies pharmacodynamic modeling of ibrutinib in CLL patients and does not report pharmacokinetic parameters for tenecteplase. |
| PD | Cadot_2024 | not_relevant | 0 | 0 | The paper focuses on ibrutinib in CLL, not tenecteplase, and does not report exposure-response or dose-response PD parameters for the target drug. |
| PGx | Cannon_1997 | not_relevant | 0 | 0 | The paper reports general pharmacokinetics of tenecteplase in a population but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Cannon_1998 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial (TIMI 10B) reporting reperfusion rates and safety outcomes, not a pharmacokinetic study with quantitative disposition parameters. |
| PGx | Chondros_2014 | not_relevant | 1 | 0 | The paper is a case report describing the clinical outcome of tenecteplase treatment in a patient with specific thrombophilic genotypes, but it does not report any pharmacokinetic or pharmacodynamic parameters or quantify how the genotypes altered the drug's effect. |
| PGx | Collen_1994 | not_relevant | 0 | 0 | The paper investigates engineered protein variants of rt-PA, not human genetic variants affecting tenecteplase pharmacokinetics or pharmacodynamics. |
| PGx | Davydov_2001 | not_relevant | 0 | 0 | The paper is a general review of tenecteplase's pharmacokinetics and clinical efficacy, containing no data on gene variants or pharmacogenomic effects. |
| popPK | Dehghani_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of ticagrelor versus clopidogrel on platelet function, with tenecteplase serving only as a background fibrinolytic agent, and no pharmacokinetic parameters for tenecteplase are reported. |
| PD | Dehghani_2017 | not_relevant | 0 | 0 | The paper reports platelet function (PD) for ticagrelor and clopidogrel, but does not report any exposure-response or dose-response relationship for tenecteplase. |
| popPK | Dhar_2022 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study comparing thrombolytic outcomes, not a pharmacokinetic study, and reports no quantitative PK parameters (CL, V, etc.) for tenecteplase. |
| PD | Dhar_2022 | not_relevant | 0 | 0 | The paper is a retrospective clinical trial comparing efficacy and safety outcomes (mRS, NIHSS) between two drugs, with no pharmacokinetic data, concentration measurements, or dose-response modeling. |
| popPK | Diprose_2025 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating reperfusion outcomes (eTICI scores) and does not report any pharmacokinetic parameters for tenecteplase. |
| PGx | Dunn_2001 | not_relevant | 0 | 0 | The paper is a general review of tenecteplase's pharmacology and clinical efficacy in AMI, containing no data on gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Gibson_1999 | irrelevant | 0 | 0 | The paper is a clinical trial analyzing angiographic outcomes based on weight-adjusted dosing, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PGx | Guerra_2003 | not_relevant | 0 | 0 | The paper discusses the clinical safety and efficacy of tenecteplase compared to alteplase but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Gusev_2018 | not_relevant | 0 | 0 | The text is a general historical overview of thrombolytic therapy and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Hailu_2022 | not_relevant | 0 | 0 | The paper is a clinical review comparing tenecteplase and alteplase efficacy and safety, with no mention of pharmacogenomics or genetic variants affecting PK/PD. |
| PGx | Han_2023 | not_relevant | 0 | 0 | The paper focuses on single-cell transcriptomics and prognostic biomarkers for hepatocellular carcinoma and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of tenecteplase. |
| popPK | Huang_2011 | irrelevant | 0 | 0 | The paper studies the anti-HIV activity of a novel compound (BmPCP) and does not involve tenecteplase or pharmacokinetic parameters. |
| PD | Huang_2011 | not_relevant | 0 | 0 | The paper studies HIV-1 NNRTIs (BmPCP), not tenecteplase. |
| PGx | Huang_2024 | not_relevant | 0 | 0 | The paper is a meta-analysis comparing clinical outcomes of tenecteplase versus alteplase and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Keragala_2020 | not_relevant | 0 | 0 | The paper investigates the mechanism of tenecteplase-induced blood-brain barrier permeability via complement activation in an in vitro model, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Keyt_1994 | not_relevant | 0 | 0 | The paper describes the pharmacokinetic and pharmacodynamic properties of a specific tPA variant (TNK-tPA) compared to wild-type tPA, but does not report how human genetic variants affect the PK/PD of tenecteplase. |
| popPK | Kheiri_2018 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy and safety outcomes, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Kheiri_2018 | not_relevant | 1 | 0 | The paper is a meta-analysis of clinical outcomes (efficacy/safety) and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters (e.g., Emax, EC50). |
| PGx | Kheiri_2018 | not_relevant | 0 | 0 | The paper is a meta-analysis comparing clinical outcomes of tenecteplase vs. alteplase and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Lapchak_2004 | irrelevant | 0 | 0 | The study is a pharmacodynamic/behavioral outcome study in rabbits where tenecteplase is a co-administered agent, and no pharmacokinetic parameters (CL, V, etc.) are reported. |
| PD | Lapchak_2004 | not_relevant | 3 | 2 | The paper reports a dose-response for NXY-059 and a qualitative combination effect with tenecteplase, but does not provide numeric PD parameters (e.g., EC50, Emax) or an exposure-response relationship specifically for tenecteplase. |
| popPK | Lapchak_2004_2 | irrelevant | 1 | 0 | The study reports pharmacodynamic efficacy (P50 values) in a rabbit stroke model but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Llevadot_2001 | irrelevant | 2 | 0 | The paper is a narrative review of bolus fibrinolytics and does not report original quantitative pharmacokinetic parameter values for tenecteplase. |
| PD | Llevadot_2001 | not_relevant | 2 | 0 | The paper is a narrative review summarizing efficacy and safety outcomes of bolus fibrinolytics, not a primary study reporting specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves for tenecteplase. |
| popPK | Logallo_2015 | irrelevant | 0 | 0 | The paper is a narrative review discussing the therapeutic potential and clinical trials of tenecteplase, but it does not report any original quantitative pharmacokinetic parameters (CL, V, etc.). |
| PD | Logallo_2015 | not_relevant | 1 | 0 | The text is a qualitative review discussing the therapeutic potential and clinical trial status of tenecteplase without providing any numeric pharmacodynamic parameters or exposure-response data. |
| PGx | Longstaff_2008 | not_relevant | 0 | 0 | The text is a general review of thrombolytic mechanisms and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Ma_2025 | irrelevant | 0 | 0 | The paper describes the development and efficacy of B7-H6-targeted bispecific antibodies and IL-15 fusions for cancer immunotherapy, and does not contain any pharmacokinetic data or parameters for tenecteplase. |
| PD | Ma_2025 | not_relevant | 0 | 0 | The paper investigates B7-H6-targeted bispecific antibodies, not tenecteplase. |
| popPK | Marè_2024 | irrelevant | 2 | 0 | The paper is a review article comparing pharmacokinetic properties without providing original quantitative parameter values in the evidence. |
| PD | Marè_2024 | not_relevant | 2 | 0 | The paper is a review comparing pharmacokinetic properties and clinical efficacy, but it does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or an extractable exposure-response curve for tenecteplase. |
| popPK | Masanneck_2026 | irrelevant | 0 | 0 | The paper is a geospatial analysis of stroke care access and does not report any pharmacokinetic parameters for tenecteplase. |
| PD | Masanneck_2026 | not_relevant | 0 | 0 | The paper is a geospatial analysis of stroke care access and transport times, containing no pharmacokinetic or pharmacodynamic data for tenecteplase. |
| PGx | Melandri_2009 | not_relevant | 0 | 0 | The paper is a clinical review of tenecteplase efficacy and safety in acute myocardial infarction and does not report pharmacogenomic effects of gene variants on PK or PD parameters. |
| PGx | Meng_2024 | not_relevant | 0 | 0 | The paper is a clinical trial comparing efficacy and safety of tenecteplase vs alteplase and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Mesgarpour_2017 | irrelevant | 0 | 0 | The paper is a systematic review of erythropoiesis-stimulating agents in critically ill patients and does not involve tenecteplase or report any pharmacokinetic parameters. |
| PD | Mesgarpour_2017 | not_relevant | 0 | 0 | The paper is a systematic review of erythropoiesis-stimulating agents (ESAs) in critically ill patients and does not mention tenecteplase or report any pharmacodynamic or exposure-response data. |
| PGx | Modi_1998 | not_relevant | 0 | 0 | The paper reports the pharmacokinetics of TNK-tPA in a general population but does not investigate the effect of specific gene variants or genotypes on these parameters. |
| PGx | Modi_2000 | not_relevant | 0 | 0 | The study investigates dose-ranging pharmacokinetics and pharmacodynamics but does not report any pharmacogenomic effects (gene variants/genotypes) on these parameters. |
| PGx | Rowe_2026 | not_relevant | 0 | 0 | The study evaluates the safety of tenecteplase in stroke mimics versus acute ischemic stroke and does not investigate any pharmacogenomic effects on PK or PD parameters. |
| popPK | Sakharov_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of fibrinolysis efficiency and ultrasound effects, not a pharmacokinetic study reporting quantitative disposition parameters for tenecteplase. |
| popPK | Schaedeli_2024 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for balovaptan, not tenecteplase, which is only mentioned as a comparator drug in a different study context. |
| PD | Schaedeli_2024 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PK) of balovaptan, not tenecteplase, and does not report numeric PD parameters for the target drug. |
| PGx | Shi_2024 | not_relevant | 0 | 0 | The paper is a case report of an adverse event (angioedema) and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Silva_2025 | not_relevant | 0 | 0 | The paper is a narrative review of tenecteplase in acute ischemic stroke and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Stewart_2000 | not_relevant | 0 | 0 | The paper describes the biochemical mechanism of a bioengineered drug variant (TNK-t-PA) relative to its parent compound, not the effect of human genetic variants on the drug's PK or PD. |
| popPK | Tang_2023 | relevant | 10 | 0 | The paper describes a population PK model for tenecteplase, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| PD | Tang_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model and covariate analysis for tenecteplase but contains no pharmacodynamic (PD) or exposure-response data, parameters, or effect measurements. |
| PGx | Tang_2025 | not_relevant | 0 | 0 | The paper is a clinical case report describing the efficacy of tenecteplase in treating ischemic stroke and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Tashima_2014 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of darunavir, cobicistat, emtricitabine, and tenofovir, not tenecteplase. |
| PD | Tashima_2014 | not_relevant | 0 | 0 | The paper concerns darunavir/cobicistat, not tenecteplase, and reports no PD parameters. |
| popPK | Thelengana_2019 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy and safety outcomes, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Thelengana_2019 | not_relevant | 1 | 0 | The paper is a meta-analysis of clinical outcomes (efficacy/safety) comparing two drugs and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters. |
| PGx | Van_1999 | not_relevant | 0 | 0 | The paper is a clinical trial comparing the efficacy and safety of tenecteplase versus alteplase, with no analysis of genetic variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Van_2001 | not_relevant | 0 | 0 | The paper compares bleeding outcomes between two drugs based on clinical demographics (age, weight, gender) and does not report any pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Vanangamudi_2023 | irrelevant | 0 | 0 | The paper is a review on the design of HIV NNRTIs and does not study tenecteplase or report its pharmacokinetic parameters. |
| PD | Vanangamudi_2023 | not_relevant | 0 | 0 | The paper is a review on the design and development of NNRTIs for HIV and does not contain any pharmacodynamic or exposure-response data for tenecteplase. |
| PGx | Verstraete_2000 | not_relevant | 0 | 0 | The text describes general properties and clinical outcomes of third-generation thrombolytics but does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Wang_2012 | not_relevant | 0 | 0 | The paper describes the synthesis and biological evaluation of new HIV-1 NNRTIs, not the pharmacogenomics of tenecteplase. |
| popPK | Wang_2024 | irrelevant | 2 | 1 | The paper is a clinical review of tenecteplase for stroke that cites a single animal clearance value (1.9 mL/min/kg) but lacks a compartmental model, volume of distribution, or human PK parameters. |
| PD | Wang_2024 | not_relevant | 2 | 1 | The paper is a comprehensive review that summarizes clinical trial outcomes (efficacy/safety) and mentions PK/PD advantages qualitatively, but it does not report or provide numeric PD parameters (Emax, EC50, etc.) or extractable concentration-effect curves. |
| popPK | Yang_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of antiplatelet agents (Ticagrelor vs. Clopidogrel) and does not report any pharmacokinetic parameters for tenecteplase. |
| PD | Yang_2018 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamic effects of Ticagrelor versus Clopidogrel on platelet reactivity, with no analysis of tenecteplase exposure-response or dose-response relationships. |
| popPK | de_2020 | irrelevant | 0 | 0 | The paper is a study on renal development in premature rabbits and does not involve tenecteplase or pharmacokinetic parameters. |
| PD | de_2020 | not_relevant | 0 | 0 | The paper investigates renal development in preterm rabbits and does not involve tenecteplase or any pharmacodynamic modeling. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | The evidence consists only of a conference title with no study data, parameters, or specific content regarding tenecteplase pharmacokinetics. |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, models, or parameters for tenecteplase. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | The evidence consists only of a conference title with no pharmacokinetic data or tenecteplase-specific content. |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a title of a conference abstract collection and contains no data, analysis, or parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_tenecteplase`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
