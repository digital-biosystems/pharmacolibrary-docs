# alteplase

- **generic name:** alteplase
- **ATC codes:** `B01AD02`, `S01XA13`
- **DrugBank:** [DB00009](https://go.drugbank.com/drugs/DB00009)
- **groups:** approved, investigational

## About

**Description.** Alteplase is a recombinant tissue plasminogen activator (rt-PA) used as a thrombolytic agent.[L43125] It cleaves plasminogen to form plasmin, an enzyme involved in the degradation of fibrin clots. In the absence of fibrin, the alteplase-mediated conversion of plasminogen is limited, thanks to the high affinity between alteplase and fibrin.[A252330,L43125] Alteplase is a purified glycoprotein of 527 amino acids expressed in Chinese hamster ovary (CHO) cells.[A252345,L43125] It was first approved by the FDA in 1987 for the management of thromboembolic disease, including acute myocardial infarction (AMI).[A252270] The use of alteplase to manage AMI has decreased thanks to the availability of safer treatments such as angioplasty and stenting. However, its use for the treatment of acute ischemic stroke (AIS) has increased over the years.[A252340] New thrombolytic agents derived from tissue plasminogen activator, such as [desmoteplase], [tenecteplase] and [reteplase], have also been developed.[A252270,A252345] Alteplase is also available as Cathflo Activase (intracatheter instillation) for the restoration of function to central venous access devices.[L34864]

**Indication.** Alteplase is indicated for the treatment of acute ischemic stroke (AIS) and for use in acute myocardial infarction (AMI) for the reduction of mortality and incidence of heart failure. Alteplase is also indicated for the lysis of acute massive pulmonary embolism, defined as acute pulmonary emboli obstructing blood flow to a lobe or multiple lung segments, and acute pulmonary emboli accompanied by unstable hemodynamics.[L43125]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 16:19 | 2:05 | 0/0/0 | 0/1/0 | 0/0/0 | 1,544/262 | ollama / qwen3.8:27b-mtp-q8_0 | 52 | 0/25 | 25/27 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Martin_1992](drugs/drug_alteplase/pd_Martin_1992_thrombolysis.md) | Martin U et al., Pharmacokinetic and thrombolytic proper…, Naunyn-Schmiedeberg's archi… (1992) | [10.1007/BF00167579](https://doi.org/10.1007/BF00167579) |

## Coverage

- **PubMed hits:** 128 matched, 97 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hantgan_1998.pdf` | Hantgan RR et al., No effect of clot age or thrombolysis o…, Blood (1998) | pd | 4 | not captured | [9731064](https://www.ncbi.nlm.nih.gov/pubmed/9731064) | metadata signals extractable PD data (IC50) |
| `Liu_2022.pdf` | Liu CJ et al., [Effects of fulvic acid on photosynthet…, Ying yong sheng tai xue bao… (2022) | pd | 4 | [10.13287/j.1001-9332.202205.014](https://doi.org/10.13287/j.1001-9332.202205.014) | [35730089](https://www.ncbi.nlm.nih.gov/pubmed/35730089) | metadata signals extractable PD data (concentrationeffect) |
| `Martin_1993.pdf` | Martin U et al., Differential fibrinolytic properties of…, Blood coagulation & fibrino… (1993) | pd | 4 | [10.1097/00001721-199304000-00004](https://doi.org/10.1097/00001721-199304000-00004) | [8388740](https://www.ncbi.nlm.nih.gov/pubmed/8388740) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-09-06T16:19:22.757438+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alemseged_2021 | not_relevant | 0 | 0 | The paper compares two different drugs (tenecteplase vs alteplase) and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Alemseged_2021_2 | not_relevant | 0 | 0 | The paper compares the clinical efficacy of tenecteplase and alteplase in stroke patients but does not report pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Altuntaş_2020 | not_relevant | 0 | 0 | The paper studies proline signaling in maize plants, not the pharmacogenomics of alteplase in humans. |
| popPK | Aslan_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety analysis comparing stroke outcomes, not a pharmacokinetic study, and contains no PK parameters for alteplase. |
| popPK | Battini_2024 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study on drug-drug interaction signal detection in FAERS and does not report any pharmacokinetic parameters for alteplase. |
| PD | Battini_2024 | not_relevant | 0 | 0 | The paper focuses on pharmacovigilance signal detection and temporal plausibility of drug-drug interactions in the FAERS database; it does not report any pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for alteplase. |
| PGx | Bechmann_2024 | not_relevant | 0 | 0 | The paper compares the biochemical and fibrinolytic properties of two tenecteplase products (originator vs. copy) and does not investigate the impact of gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Cannon_1998 | irrelevant | 2 | 2 | The study reports pharmacokinetic parameters (clearance, half-life) for TNK-tPA, with alteplase serving only as a comparator agent for which no quantitative PK values are provided in the text. |
| PGx | Davydov_2001 | not_relevant | 0 | 0 | The paper is a review of tenecteplase and does not report any pharmacogenomic effects on the PK or PD of alteplase. |
| popPK | DeWood_1993 | irrelevant | 0 | 0 | The study investigates the efficacy and safety of duteplase (a different rt-PA variant) in myocardial infarction and does not report pharmacokinetic parameters for alteplase. |
| PD | DeWood_1993 | not_relevant | 2 | 1 | The study explicitly states that no dose-response relationship was observed, and while it reports dose ranges and success rates, it does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response model. |
| popPK | Dhar_2022 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study comparing thrombolytic outcomes, not a pharmacokinetic study, and reports no quantitative PK parameters (CL, V, etc.) for alteplase. |
| PD | Dhar_2022 | not_relevant | 0 | 0 | The paper is a clinical efficacy and safety comparison of two thrombolytic agents using clinical endpoints (mRS, NIHSS) and does not report any pharmacokinetic data, concentration-effect relationships, or numeric pharmacodynamic parameters (e.g., Emax, EC50). |
| popPK | Diprose_2025 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating reperfusion outcomes in stroke patients, not a pharmacokinetic study, and contains no PK parameters for alteplase. |
| PGx | Dunn_2001 | not_relevant | 0 | 0 | The paper is a review of tenecteplase pharmacology and clinical trials comparing it to alteplase, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PD | Eppler_1998 | not_relevant | 0 | 0 | not captured |
| popPK | Erameh_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ribavirin for Lassa fever, not alteplase. |
| PD | Erameh_2020 | not_relevant | 0 | 0 | The paper is a study protocol for ribavirin in Lassa fever, not alteplase, and reports no numeric PD parameters. |
| PGx | Gorchakova_2004 | not_relevant | 2 | 10 | The study reports a null association between the PlA1 polymorphism and clinical outcomes (salvage index, infarct size) rather than a pharmacokinetic or pharmacodynamic parameter of alteplase. |
| popPK | Goyal_2016 | irrelevant | 0 | 0 | The paper is a clinical meta-analysis of endovascular thrombectomy efficacy and does not report any pharmacokinetic parameters for alteplase. |
| PGx | Gołębiowska-Pikania_2017 | not_relevant | 0 | 0 | The paper studies protein abundance and freezing tolerance in winter barley, which is unrelated to the pharmacokinetics or pharmacodynamics of alteplase. |
| PGx | Gusev_2018 | not_relevant | 0 | 0 | The text is a general historical overview of thrombolytic therapy and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Hailu_2022 | not_relevant | 0 | 0 | The paper is a clinical review comparing the efficacy and safety of tenecteplase versus alteplase, with no mention of pharmacogenomics or gene variants affecting PK/PD parameters. |
| popPK | Hantgan_1998 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of argatroban, using alteplase only as a thrombolytic agent in an in-vitro clot system, and reports no pharmacokinetic parameters for alteplase. |
| PD | Hantgan_1998 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50) for argatroban, not alteplase; alteplase is only used as a thrombolytic agent in the experimental setup. |
| popPK | Harder_2000 | irrelevant | 2 | 1 | This is a review article on drug interactions that mentions alteplase's elimination half-life (5-10 minutes) but does not report original quantitative PK parameters like clearance, volume, or compartmental model values. |
| PD | Harder_2000 | not_relevant | 1 | 0 | The text is a qualitative review of drug interactions and clinical management, containing no numeric PD parameters, concentration-effect curves, or dose-response data for alteplase. |
| popPK | Hazra_2015 | irrelevant | 0 | 0 | The paper studies the enzymatic kinetics of Rubisco activase in tobacco plants and does not involve the drug alteplase or pharmacokinetics. |
| PD | Hazra_2015 | not_relevant | 0 | 0 | The paper describes the enzymatic kinetics of Rubisco activase (a plant protein) and does not involve the drug alteplase or any pharmacodynamic modeling. |
| popPK | Hernández-Gago_2026 | irrelevant | 0 | 0 | The paper is a systematic review of dosing strategies for high-alert medications in obese pediatric patients and does not report quantitative pharmacokinetic parameters for alteplase. |
| PD | Hernández-Gago_2026 | not_relevant | 0 | 0 | The paper is a systematic review of dosing strategies and PK alterations in obese pediatric patients and does not report any pharmacodynamic (PD) or exposure-response analysis for alteplase. |
| popPK | Jia_2025 | irrelevant | 0 | 0 | The paper focuses on the formulation and stability of an enrofloxacin-colistin combination injection and does not study alteplase or report any pharmacokinetic parameters for it. |
| PD | Jia_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation, stability, and toxicity of an enrofloxacin-colistin combination, not on alteplase, and does not report any pharmacodynamic or exposure-response modeling. |
| PGx | Kazemali_2014 | not_relevant | 0 | 0 | The paper describes the design and in vitro characterization of a novel chimeric protein (CT-b) and does not report any pharmacogenomic effects of gene variants on the PK or PD of alteplase. |
| PGx | Khairy_2016 | not_relevant | 0 | 0 | The paper studies the effect of nitric oxide on heavy metal toxicity in tobacco plants, not the pharmacogenomics of alteplase. |
| popPK | Kheiri_2018 | irrelevant | 0 | 0 | The paper is a clinical meta-analysis comparing efficacy and safety outcomes, not a pharmacokinetic study reporting quantitative disposition parameters for alteplase. |
| PD | Kheiri_2018 | not_relevant | 0 | 0 | The paper is a meta-analysis of clinical outcomes (efficacy/safety) comparing tenecteplase and alteplase; it does not report pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50) for alteplase. |
| PGx | Kheiri_2018 | not_relevant | 0 | 0 | The paper compares two different drugs (tenecteplase vs. alteplase) and does not report pharmacogenomic effects of genetic variants on the PK or PD of alteplase. |
| PGx | Kostis_2002 | not_relevant | 0 | 0 | The paper compares the pharmacokinetics of two different drugs (lanoteplase vs. alteplase) but does not report any pharmacogenomic effects (gene variants) on these parameters. |
| PGx | Kundu_2013 | not_relevant | 0 | 0 | The paper studies plant-virus interactions in Vigna mungo and does not involve alteplase or human pharmacogenomics. |
| PGx | Lakra_2019 | not_relevant | 0 | 0 | The paper studies salinity stress response in rice genotypes and does not involve alteplase or human pharmacogenomics. |
| popPK | Lapchak_2004 | irrelevant | 0 | 0 | The study is a behavioral pharmacology trial in rabbits comparing efficacy, not a pharmacokinetic study, and reports no quantitative disposition parameters (CL, V, etc.) for alteplase. |
| PD | Lapchak_2004_2 | not_relevant | 3 | 2 | The paper focuses on the dose-response of NXY-059 and its combination with tenecteplase, but does not report a pharmacodynamic model or numeric PD parameters (e.g., EC50, Emax) for alteplase itself. |
| PGx | Larsen_1991 | not_relevant | 0 | 0 | The paper compares engineered protein variants (delta FE1X/FE3X) to wild-type t-PA, which is a drug modification study, not a pharmacogenomic study of human genetic variants affecting drug response. |
| PGx | Li_2010 | not_relevant | 0 | 0 | The paper studies epistasis in potato tuber traits, not pharmacogenomics of alteplase. |
| PGx | Li_2023 | not_relevant | 0 | 0 | The paper studies cold tolerance in apple blossoms and is unrelated to the pharmacokinetics or pharmacodynamics of alteplase. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The paper is a plant physiology study on cucumber and fulvic acid, unrelated to alteplase pharmacokinetics. |
| PD | Liu_2022 | not_relevant | 0 | 0 | The paper studies the effect of fulvic acid on cucumber plants, not the pharmacodynamics of alteplase. |
| popPK | Logallo_2015 | irrelevant | 2 | 5 | The paper is a review of tenecteplase where alteplase serves as a comparator, and while Table 3 lists alteplase PK parameters (CL, t1/2), the study's primary subject is tenecteplase. |
| PD | Logallo_2015 | not_relevant | 1 | 0 | The text is a qualitative review discussing the therapeutic potential of tenecteplase compared to alteplase, with no numeric PD parameters, concentration-effect curves, or dose-response data provided. |
| PGx | Longstaff_2008 | not_relevant | 0 | 0 | The text is a review discussing the mechanism of fibrin binding and the development of thrombolytic agents, but it does not report any specific pharmacogenomic effects (gene variants) on the PK or PD of alteplase. |
| PD | Lutomski_1995 | not_relevant | 1 | 0 | The text is a general review of pharmacokinetic optimization for thromboembolic disorders and mentions alteplase only in the context of standard dosing and clinical outcomes, without providing any numeric PD parameters or concentration-effect data. |
| popPK | Martin_1991 | irrelevant | 2 | 3 | The study focuses on the recombinant plasminogen activator BM 06.022, with alteplase serving only as a comparator for which limited comparative values (clearance range, half-life) are provided rather than a primary PK characterization. |
| popPK | Martin_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic comparison of fibrinolytic activity where alteplase serves only as a comparator, with no pharmacokinetic parameters reported. |
| popPK | Martin_1999 | irrelevant | 1 | 0 | The paper focuses on the pharmacokinetics of reteplase, with alteplase serving only as a reference comparator for half-life without providing specific quantitative disposition parameters for alteplase. |
| PD | Martin_1999 | not_relevant | 2 | 1 | The text is a review of reteplase dosing that qualitatively mentions a linear regression for AUC-patency and compares half-lives to alteplase, but it does not provide specific numeric PD parameters (e.g., slope, intercept, Emax, EC50) or an extractable concentration-effect curve for alteplase. |
| popPK | Marè_2024 | irrelevant | 2 | 0 | The paper is a review comparing alteplase and tenecteplase without reporting original quantitative pharmacokinetic parameter values in the provided evidence. |
| PD | Marè_2024 | not_relevant | 2 | 0 | The paper is a review comparing pharmacokinetic properties and clinical outcomes, but it does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or an extractable exposure-response curve for alteplase. |
| PGx | Melandri_2009 | not_relevant | 0 | 0 | The paper reviews the clinical efficacy and safety of tenecteplase compared to alteplase but does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Meng_2024 | not_relevant | 0 | 0 | The paper is a clinical trial comparing the efficacy and safety of tenecteplase versus alteplase, with no analysis of gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Mohamed_2022 | irrelevant | 0 | 0 | The paper is a review of drug interactions for RAAS blockers where alteplase is mentioned only as a co-administered agent associated with angioedema risk, with no pharmacokinetic parameters reported. |
| PD | Mohamed_2022 | not_relevant | 0 | 0 | The paper is a review of drug interactions for RAAS blockers and mentions alteplase only as a qualitative risk factor for angioedema, providing no numeric PD parameters or exposure-response data. |
| popPK | Murthy_2020 | irrelevant | 0 | 0 | The study is a clinical outcome analysis of intracerebral hemorrhage and does not report any pharmacokinetic parameters for alteplase. |
| popPK | Nägele_2025 | irrelevant | 0 | 0 | The study is an MRI imaging analysis of blood-brain barrier leakage in stroke patients and does not report any pharmacokinetic parameters for alteplase. |
| PGx | Ogden_2020 | not_relevant | 0 | 0 | The paper studies drought tolerance in sorghum plants and does not involve human pharmacogenomics or alteplase. |
| popPK | Pei_2026 | irrelevant | 0 | 0 | The study is a clinical cohort analysis of biomarkers associated with neurological deterioration, not a pharmacokinetic study, and contains no PK parameters for alteplase. |
| PD | Pei_2026 | not_relevant | 0 | 0 | The study analyzes the association between baseline biomarkers (CitH3, MPO-DNA) and clinical outcomes, not the pharmacodynamic relationship between alteplase exposure/dose and its effect. |
| popPK | Piechowski-Jozwiak_2022 | irrelevant | 0 | 0 | The paper is a review of desmoteplase pharmacokinetics, and alteplase is only mentioned as a comparator or background agent without original quantitative PK parameter values for alteplase being reported. |
| PD | Piechowski-Jozwiak_2022 | not_relevant | 1 | 0 | The paper is a review of desmoteplase that only qualitatively mentions alteplase's half-life and neurotoxicity without providing any numeric PD parameters or exposure-response data for alteplase. |
| PGx | Pratap_2026 | not_relevant | 0 | 0 | The paper discusses heat tolerance biomarkers in wheat and is unrelated to pharmacogenomics or alteplase. |
| PD | Raigani_2017 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (AUC, t1/2, CL) and plasma activity levels, but does not report any pharmacodynamic effect (e.g., clot lysis, fibrinogen degradation) or exposure-response relationship. |
| popPK | Renard_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of imatinib, not alteplase. |
| PD | Renard_2015 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of imatinib and drug-drug interactions, not on alteplase, and does not report any pharmacodynamic or exposure-response parameters for alteplase. |
| popPK | Renaud_2020 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for glenzocimab, not alteplase. |
| PGx | Rowe_2026 | not_relevant | 0 | 0 | The study evaluates the safety of tenecteplase in stroke mimics versus acute ischemic stroke and does not investigate any gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Scheer_2026 | irrelevant | 0 | 0 | The study is a pharmacodynamic model for thrombolysis efficacy and does not report any pharmacokinetic parameters (CL, V, etc.) for alteplase. |
| PGx | Shi_2024 | not_relevant | 0 | 0 | The paper is a case report of an adverse event (angioedema) and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Sibbing_2005 | not_relevant | 0 | 0 | The study reports no significant association between the PAI-1 4G/5G polymorphism and the efficacy (myocardial salvage) of alteplase, and does not report changes in PK/PD parameters. |
| PGx | Silva_2025 | not_relevant | 0 | 0 | The paper is a narrative review of tenecteplase (a variant of alteplase) in stroke and does not report pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Solbes_2026 | irrelevant | 0 | 0 | The study is a clinical outcomes analysis of intrapleural enzyme therapy dosing and does not report any pharmacokinetic parameters for alteplase. |
| popPK | Stump_1989 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (coagulation parameters and clinical outcomes) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for alteplase. |
| PD | Stump_1989 | not_relevant | 3 | 2 | The paper reports descriptive statistics (mean/SD) for peak drug levels and nadir biomarker levels, as well as correlations with clinical outcomes, but does not provide a quantitative exposure-response model or specific PD parameters (e.g., EC50, Emax) linking drug concentration to effect. |
| popPK | Tang_2023 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of tenecteplase, with alteplase serving only as an active comparator in the background description without reported quantitative PK parameters. |
| PD | Tang_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for tenecteplase, not alteplase, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| PGx | Tang_2025 | not_relevant | 0 | 0 | The paper is a case report on the clinical efficacy of tenecteplase in stroke and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Tanswell_1991 | irrelevant | 2 | 1 | The text is a review summarizing general pharmacokinetic properties (e.g., half-life, Km) without reporting original quantitative disposition parameters (CL, V, Q) from a specific study. |
| popPK | Thelengana_2019 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy and safety outcomes (stroke recovery, hemorrhage) comparing tenecteplase and alteplase, and does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for alteplase. |
| PD | Thelengana_2019 | not_relevant | 1 | 0 | The paper is a clinical meta-analysis comparing efficacy and safety outcomes of tenecteplase versus alteplase; it does not report pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Thomas_2022 | irrelevant | 0 | 0 | The paper is a review of dimethyl fumarate (DMF) and does not study alteplase or report any pharmacokinetic parameters for it. |
| PD | Thomas_2022 | not_relevant | 0 | 0 | The paper is a review of dimethyl fumarate and does not contain any pharmacodynamic or exposure-response data for alteplase. |
| PGx | Toljan_2019 | not_relevant | 0 | 0 | The paper focuses on clopidogrel pharmacogenetics and a case of thrombosis; alteplase is only mentioned as a rescue therapy without any analysis of its PK/PD parameters or genetic influence. |
| PGx | Van_1999 | not_relevant | 0 | 0 | The paper compares two different drugs (tenecteplase vs alteplase) in a clinical trial and does not report any pharmacogenomic effects or gene variants influencing PK/PD parameters. |
| PGx | Verstraete_2000 | not_relevant | 0 | 0 | The text describes the development and clinical efficacy of third-generation thrombolytic drugs compared to alteplase, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for meropenem, not alteplase. |
| PD | Wang_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) of meropenem and dose optimization based on PK targets (T&gt;MIC), not on the pharmacodynamics (PD) of alteplase. |
| popPK | Wang_2024 | irrelevant | 2 | 1 | The paper is a review of tenecteplase where alteplase serves as a comparator, and the only alteplase PK value (clearance) is a single animal data point cited from a reference rather than original study data. |
| PD | Wang_2024 | not_relevant | 2 | 1 | The paper is a narrative review comparing tenecteplase and alteplase that cites animal PK/PD data (e.g., clearance, fibrin specificity) and clinical trial outcomes, but it does not present or derive numeric PD parameters (Emax, EC50, etc.) or an exposure-response curve for alteplase in the text provided. |
| popPK | Wehrfritz_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dipyrone (metamizole), not alteplase. |
| PD | Wehrfritz_2026 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of dipyrone (metamizole), not alteplase, and does not report any pharmacodynamic or exposure-response parameters. |
| PGx | Weston_2007 | not_relevant | 0 | 0 | The paper studies plant physiology (Rubisco activase in maple trees) and has no relation to human pharmacogenomics or alteplase. |
| popPK | Wooster_1999 | irrelevant | 0 | 0 | The paper is a review of reteplase, and while it mentions alteplase as a comparator, it does not report quantitative pharmacokinetic parameters for alteplase. |
| PD | Wooster_1999 | not_relevant | 1 | 0 | The paper is a qualitative review of reteplase that mentions alteplase only for comparison of mechanism and clinical outcomes, without providing any numeric PD parameters or exposure-response data for alteplase. |
| PGx | Xu_2018 | not_relevant | 0 | 0 | The paper studies heat tolerance in fine fescue plants and is unrelated to human pharmacogenomics or alteplase. |
| PGx | Xu_2024 | not_relevant | 0 | 0 | The paper investigates a pharmacological combination therapy (PAI-1 inhibitor + rtPA) rather than the effect of a specific gene variant or genotype on pharmacokinetics or pharmacodynamics. |
| popPK | Yang_2023 | relevant | 8 | 2 | The paper is an in silico PK-PD study of alteplase that uses a compartmental model, but the specific numeric PK parameter values (clearance, volume, rate constants) are referenced as being in Tables 1 and 2 or previous studies, which are not fully provided in the evidence. |
| popPK | Yang_2024 | irrelevant | 2 | 0 | The paper is an in silico simulation study that does not report original quantitative pharmacokinetic parameter values (such as clearance or volume) for alteplase. |
| popPK | Yong_2024 | irrelevant | 0 | 0 | The paper is a clinical cohort study evaluating treatment outcomes and dosing efficacy, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | den_1998 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing lanoteplase and alteplase, reporting angiographic outcomes rather than pharmacokinetic parameters for alteplase. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | The evidence contains only a conference title with no pharmacokinetic data or study details. |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or parameters regarding alteplase pharmacodynamics. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | The evidence consists only of a conference title and contains no pharmacokinetic data or parameters for alteplase. |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text is only a title for a meeting abstract collection and contains no data, analysis, or parameters regarding alteplase pharmacodynamics. |
| popPK | unknown_2017_2 | irrelevant | 0 | 0 | The provided evidence contains only a conference title and no pharmacokinetic data or parameters for alteplase. |
| PD | unknown_2017_2 | not_relevant | 0 | 0 | The provided text is a header for conference proceedings and contains no scientific content, data, or analysis regarding alteplase pharmacodynamics. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The evidence consists only of a conference citation with no pharmacokinetic data or study content. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of alteplase pharmacodynamics. |
| popPK | unknown_2018_2 | irrelevant | 0 | 0 | The evidence consists only of a conference title and contains no pharmacokinetic data or parameters for alteplase. |
| PD | unknown_2018_2 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific data, models, or parameters for alteplase. |
| popPK | unknown_2018_3 | irrelevant | 0 | 0 | The provided evidence is only a title for a book of abstracts with no content, data, or specific study details regarding alteplase pharmacokinetics. |
| PD | unknown_2018_3 | not_relevant | 0 | 0 | The provided text is only a title/header for a book of abstracts and contains no data, analysis, or parameters regarding alteplase pharmacodynamics. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | The evidence consists only of a conference title and contains no pharmacokinetic data or parameters for alteplase. |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific data, models, or parameters for alteplase. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | The evidence consists only of a conference title with no pharmacokinetic data or specific study content. |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a title of a conference abstract collection and contains no data, analysis, or parameters regarding alteplase pharmacodynamics. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | The provided evidence contains only a conference title and no pharmacokinetic data or text regarding alteplase. |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or parameters regarding alteplase pharmacodynamics. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | The provided evidence contains no scientific content, only a placeholder indicating the full text is in a separate PDF file. |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a placeholder for a PDF file and contains no scientific content, data, or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_alteplase`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
