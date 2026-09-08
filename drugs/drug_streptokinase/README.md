# streptokinase

- **generic name:** streptokinase
- **ATC codes:** `B01AD01`
- **DrugBank:** [DB00086](https://go.drugbank.com/drugs/DB00086)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Streptokinase, is a sterile, purified preparation of a bacterial protein elaborated by group C (beta) -hemolytic streptococci.

**Indication.** For the treatment of acute evolving transmural myocardial infarction, pulmonary embolism, deep vein thrombosis, arterial thrombosis or emolism and occlusion of arteriovenous cannulae

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 05:17 | 5:50 | 0/0/0 | 0/1/0 | 0/0/0 | 1,736/294 | ollama / qwen3.8:27b-q4_K_M | 5 | 1/4 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Rox_2017](drugs/drug_streptokinase/pd_Rox_2017_unknown.md) | Rox K et al., Linoleic and palmitoleic acid block str…, Scientific reports (2017) | [10.1038/s41598-017-11276-z](https://doi.org/10.1038/s41598-017-11276-z) |

## Coverage

- **PubMed hits:** 91 matched, 55 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dinesh_2016.pdf` | Dinesh M et al., Photocatalytic degradation of nitrophen…, Journal of photochemistry a… (2016) | pd | 4 | [10.1016/j.jphotobiol.2016.05.033](https://doi.org/10.1016/j.jphotobiol.2016.05.033) | [27288657](https://www.ncbi.nlm.nih.gov/pubmed/27288657) | metadata signals extractable PD data (IC50) |
| `Forster_1980.pdf` | Forster C et al., Vascular smooth muscle response to fibr…, British journal of clinical… (1980) | pd | 4 | [10.1111/j.1365-2125.1980.tb01749.x](https://doi.org/10.1111/j.1365-2125.1980.tb01749.x) | [7437239](https://www.ncbi.nlm.nih.gov/pubmed/7437239) | metadata signals extractable PD data (EC50) |
| `Hantgan_1998.pdf` | Hantgan RR et al., No effect of clot age or thrombolysis o…, Blood (1998) | pd | 4 | not captured | [9731064](https://www.ncbi.nlm.nih.gov/pubmed/9731064) | metadata signals extractable PD data (IC50) |
| `Hernandez-Pinzon_1994.pdf` | Hernandez-Pinzon I et al., Microfiltration of streptococcal fermen…, Biotechnology and bioengine… (1994) | pd | 4 | [10.1002/bit.260440303](https://doi.org/10.1002/bit.260440303) | [18618742](https://www.ncbi.nlm.nih.gov/pubmed/18618742) | metadata signals extractable PD data (concentrationeffect) |
| `Karim_2025.pdf` | Karim MF et al., Comprehensive Evaluation of Colocasia a…, Scientifica (2025) | pd | 4 | [10.1155/sci5/5115015](https://doi.org/10.1155/sci5/5115015) | [41262168](https://www.ncbi.nlm.nih.gov/pubmed/41262168) | metadata signals extractable PD data (IC50) |
| `Kuri_2014.pdf` | Kuri S et al., Phytochemical and in vitro biological i…, Asian Pacific journal of tr… (2014) | pd | 4 | [10.12980/APJTB.4.2014C677](https://doi.org/10.12980/APJTB.4.2014C677) | [25182555](https://www.ncbi.nlm.nih.gov/pubmed/25182555) | metadata signals extractable PD data (IC50) |
| `Liu_2024.pdf` | Liu T et al., Small Molecule Compound DHPA Screened b…, ACS omega (2024) | pd | 4 | [10.1021/acsomega.4c04528](https://doi.org/10.1021/acsomega.4c04528) | [39431081](https://www.ncbi.nlm.nih.gov/pubmed/39431081) | metadata signals extractable PD data (IC50) |
| `Niemetz_1988.pdf` | Niemetz J et al., A streptokinase dependent plasma factor…, British journal of haematol… (1988) | pd | 4 | [10.1111/j.1365-2141.1988.tb02512.x](https://doi.org/10.1111/j.1365-2141.1988.tb02512.x) | [2975501](https://www.ncbi.nlm.nih.gov/pubmed/2975501) | metadata signals extractable PD data (sigmoid) |
| `Wang_2022.pdf` | Wang A et al., Bleeding Risk of Dual Antiplatelet Ther…, Annals of neurology (2022) | pgx | 5 | [10.1002/ana.26287](https://doi.org/10.1002/ana.26287) | [34951042](https://www.ncbi.nlm.nih.gov/pubmed/34951042) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-09-06T05:16:53.064574+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agnelli_1985 | irrelevant | 2 | 0 | The study is a pharmacodynamic comparison of thrombolysis duration in rabbits, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, t1/2) for streptokinase. |
| PGx | Alinodehi_2019 | not_relevant | 0 | 0 | The paper describes engineered protein variants (cysteine substitutions) for PEGylation, not human genetic variants affecting pharmacokinetics or pharmacodynamics. |
| popPK | Arifuzzaman_2025 | irrelevant | 0 | 0 | The study investigates the pharmacological properties of a plant extract (Litsea monopetala) and uses streptokinase only as a positive control in an in-vitro clot lysis assay, reporting no pharmacokinetic parameters for streptokinase. |
| PD | Arifuzzaman_2025 | not_relevant | 0 | 0 | The paper investigates a plant extract and only uses streptokinase as a positive control in a single-timepoint clot lysis assay, providing no exposure-response or dose-response data for streptokinase. |
| popPK | Arnljots_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic/efficacy trial in rabbits focusing on thrombosis and haemostasis, and does not report quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for streptokinase. |
| PD | Arnljots_1994 | not_relevant | 2 | 1 | The study reports qualitative dose-response observations (bleeding at higher doses) and binary outcomes (patency) without providing numeric PD parameters, concentration-effect curves, or quantitative modeling. |
| popPK | Azad_2020 | irrelevant | 0 | 0 | The study is an in-vitro evaluation of a plant extract where streptokinase is used only as a reference standard for clot lysis activity, with no pharmacokinetic parameters reported. |
| PD | Azad_2020 | not_relevant | 0 | 0 | The paper evaluates in vitro activities of plant extracts using streptokinase only as a single-point positive control (64.35% clot lysis) and does not report any dose-response curve, concentration-effect relationship, or numeric PD parameters (e.g., EC50, Emax) for streptokinase. |
| PGx | Braunwald_2012 | not_relevant | 0 | 0 | The text is a general overview of the TIMI study group's history and scope, containing no specific data on gene variants or their effects on streptokinase PK/PD parameters. |
| popPK | Bui_2023 | irrelevant | 0 | 0 | The paper studies the biological activities of plant essential oil, using streptokinase only as a positive control for thrombolytic activity, and contains no pharmacokinetic parameters. |
| PD | Bui_2023 | not_relevant | 0 | 0 | The paper studies the biological activities of Serevenia buxifolia essential oil; streptokinase is only mentioned as a positive control for thrombolytic activity, and no PD or exposure-response relationship for streptokinase is reported. |
| popPK | Collen_1993 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study of fibrinolytic activation kinetics (catalytic efficiencies, clot lysis) and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for streptokinase. |
| popPK | Costanzo_2005 | irrelevant | 0 | 0 | The paper focuses on the synthesis and inhibition of thrombin by tripeptide-based alpha-ketoheterocycles, with streptokinase mentioned only as a comparator enzyme for selectivity, and contains no pharmacokinetic data for streptokinase. |
| PD | Costanzo_2005 | not_relevant | 0 | 0 | The paper focuses on thrombin inhibitors and does not report any pharmacodynamic or exposure-response data for streptokinase. |
| popPK | Dinesh_2016 | irrelevant | 0 | 0 | The paper is a study on photocatalytic degradation and phytochemical analysis where streptokinase is used only as a standard comparator for clot lysis, with no pharmacokinetic parameters reported. |
| PD | Dinesh_2016 | not_relevant | 0 | 0 | The paper studies photocatalytic degradation of nitrophenol using plant extract and only qualitatively compares clot lysis to streptokinase without providing any exposure-response or dose-response data for the drug. |
| popPK | Estêvão-Costa_2000 | irrelevant | 0 | 0 | The paper studies snake venom metalloproteinases (mutalysins) and mentions streptokinase only as a comparator for mechanism of action, providing no pharmacokinetic parameters for streptokinase. |
| PD | Estêvão-Costa_2000 | not_relevant | 0 | 0 | The paper studies snake venom metalloproteinases (mutalysins) and only mentions streptokinase as a comparison for mechanism of action, providing no PD or exposure-response data for streptokinase. |
| popPK | Fakruddin_2012 | irrelevant | 0 | 0 | The paper is an in-vitro study on a plant extract where streptokinase is used only as a positive control for thrombolytic activity, with no pharmacokinetic parameters reported. |
| PD | Fakruddin_2012 | not_relevant | 0 | 0 | The paper evaluates a plant extract (Clausena heptaphylla) and uses streptokinase only as a positive control in a single-point clot lysis assay, without reporting any dose-response curve or PD parameters for streptokinase. |
| PGx | Falkowski_2005 | not_relevant | 2 | 5 | The study reports no significant association between the tested gene variants and the efficacy (recanalization) of streptokinase, and the sample size was insufficient to determine any pharmacogenomic effect. |
| popPK | Forster_1980 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular smooth muscle response to fibrinogen degradation products, not a pharmacokinetic study of streptokinase. |
| PD | Forster_1980 | not_relevant | 2 | 1 | The study investigates the pharmacological interaction between streptokinase-derived fibrinogen degradation products and 5-hydroxytryptamine on vascular smooth muscle, but does not report a pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for streptokinase itself. |
| popPK | Gugliucci_2008 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of protein inactivation by hypochlorous acid, not a pharmacokinetic study, and streptokinase is used only as a tool to generate plasmin. |
| PGx | Gusev_2018 | not_relevant | 0 | 0 | The text is a general historical overview of thrombolytic therapy and does not report any specific pharmacogenomic effects on streptokinase PK/PD parameters. |
| popPK | Hantgan_1998 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of argatroban, using streptokinase only as a thrombolytic agent in an in-vitro system, and reports no pharmacokinetic parameters for streptokinase. |
| PD | Hantgan_1998 | not_relevant | 3 | 2 | The paper reports IC50 values for argatroban (the drug of interest) in the presence of streptokinase, but does not provide a PD model or numeric PD parameters for streptokinase itself. |
| popPK | Hernandez-Pinzon_1994 | irrelevant | 0 | 0 | The paper describes a microfiltration process for recovering streptokinase from fermentation broth and does not report any pharmacokinetic parameters. |
| PD | Hernandez-Pinzon_1994 | not_relevant | 0 | 0 | The paper describes a membrane filtration process for recovering streptokinase, focusing on physical concentration factors and membrane rejection, not pharmacodynamic exposure-response or dose-effect relationships. |
| popPK | Huang_2022 | irrelevant | 0 | 0 | The study focuses on tissue plasminogen activator (tPA) and does not report pharmacokinetic parameters for streptokinase. |
| PD | Huang_2022 | not_relevant | 0 | 0 | The paper focuses on a novel nanocarrier for tissue plasminogen activator (tPA) and does not report any pharmacodynamic or exposure-response analysis for streptokinase. |
| popPK | Islam_2013 | irrelevant | 0 | 0 | The study investigates the pharmacological properties of Spondias dulcis extracts, using streptokinase only as a comparator for thrombolytic activity, and contains no pharmacokinetic data. |
| PD | Islam_2013 | not_relevant | 0 | 0 | The paper uses streptokinase only as a positive control for a qualitative thrombolytic assay and does not report any exposure-response or dose-response relationship or numeric PD parameters for streptokinase. |
| popPK | Islam_2023 | irrelevant | 0 | 0 | The paper is a phytochemical study where streptokinase is used only as a positive control in a thrombolytic assay, not as the subject of a pharmacokinetic study. |
| PD | Islam_2023 | not_relevant | 0 | 0 | The paper reports phytochemical isolation and biological assays (antioxidant, cytotoxic, thrombolytic) for plant metabolites, using streptokinase only as a positive control without analyzing its pharmacodynamic or exposure-response relationship. |
| popPK | Jobaer_2023 | irrelevant | 0 | 0 | The paper is a phytochemical study of Gynura procumbens where streptokinase is used only as a standard comparator in a thrombolytic assay, with no pharmacokinetic parameters reported. |
| PD | Jobaer_2023 | not_relevant | 0 | 0 | The paper investigates phytochemicals from Gynura procumbens and uses streptokinase only as a positive control in a thrombolytic assay; it does not report any pharmacodynamic or exposure-response relationship for streptokinase itself. |
| popPK | Karim_2025 | irrelevant | 0 | 0 | The study focuses on the in vitro properties of a herbal extract, using streptokinase only as a comparator for thrombolytic activity, and contains no pharmacokinetic data. |
| PD | Karim_2025 | not_relevant | 0 | 0 | The paper evaluates a herbal extract (Colocasia affinis) and uses streptokinase only as a positive control without reporting any pharmacodynamic parameters or exposure-response relationship for streptokinase itself. |
| popPK | Kopia_1988 | irrelevant | 1 | 0 | The study is a pharmacodynamic dose-response assessment of thrombolysis in dogs and does not report quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for streptokinase. |
| popPK | Kuri_2014 | irrelevant | 0 | 0 | The study is an in-vitro phytochemical investigation where streptokinase is used only as a standard comparator for thrombolytic activity, with no pharmacokinetic parameters reported. |
| PD | Kuri_2014 | not_relevant | 0 | 0 | The paper studies a plant extract and only uses streptokinase as a positive control for a single-point clot lysis assay, providing no exposure-response or dose-response data for streptokinase itself. |
| popPK | Le_2011 | irrelevant | 0 | 0 | The paper discusses sugar metabolism and virulence in enterobacteria and does not involve streptokinase or pharmacokinetics. |
| PD | Le_2011 | not_relevant | 0 | 0 | The paper discusses sugar metabolism and virulence in enterobacteria and does not mention streptokinase or any pharmacodynamic parameters. |
| popPK | Leizorovicz_1987 | irrelevant | 0 | 0 | The study is a clinical dose-response trial for APSAC (a streptokinase complex) focusing on reperfusion rates, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Lin_2000 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study focusing on binding affinities and inhibition kinetics, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper focuses on the molecular docking and in vitro effects of DHPA on neuroblastoma cells, with streptokinase (referred to as streptase) only mentioned as a protease for stability testing, not as a subject of pharmacokinetic analysis. |
| PD | Liu_2024 | not_relevant | 0 | 0 | The paper focuses on the in vitro inhibition of neuroblastoma cells by DHPA and does not report any pharmacodynamic or exposure-response data for streptokinase. |
| PGx | Longstaff_2008 | not_relevant | 0 | 0 | The text is a review discussing the mechanism of fibrin binding in thrombolytics and does not report any pharmacogenomic effects of gene variants on streptokinase PK or PD parameters. |
| popPK | Mousa_1994 | irrelevant | 0 | 0 | The study focuses on the antiplatelet efficacy of DMP 728, with streptokinase serving only as a comparator thrombolytic agent without any reported pharmacokinetic parameters. |
| PD | Mousa_1994 | not_relevant | 0 | 0 | The paper reports PD parameters for DMP 728, not streptokinase; streptokinase is only mentioned as a comparator thrombolytic agent. |
| popPK | Niemetz_1988 | irrelevant | 0 | 0 | The paper describes a mechanistic study of a plasma factor (SKDF) inducing procoagulant activity, not a pharmacokinetic study of streptokinase disposition. |
| popPK | Nowak_1974 | irrelevant | 0 | 0 | The paper focuses on thrombolytic efficacy and dose-response in rabbits, not on quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for streptokinase. |
| popPK | Paul-Brent_2004 | irrelevant | 0 | 0 | The paper describes an in-vitro assay method for fibrinolysis and does not report pharmacokinetic parameters for streptokinase. |
| PD | Paul-Brent_2004 | not_relevant | 3 | 1 | The paper describes a method validation study and mentions comparing dose-response curves for streptokinase, but it does not provide the numeric PD parameters (Emax, EC50, etc.) or the specific data points required to derive them. |
| popPK | Ripa_2024 | irrelevant | 0 | 0 | The study evaluates plant extracts with streptokinase used only as a comparator for thrombolytic activity, and no pharmacokinetic parameters for streptokinase are reported. |
| PD | Ripa_2024 | not_relevant | 0 | 0 | The paper evaluates plant extracts and mentions streptokinase only as a positive control for thrombolytic activity, providing no exposure-response or dose-response data for streptokinase itself. |
| popPK | Rox_2017 | irrelevant | 0 | 0 | The paper is a mechanistic study on fatty acids inhibiting streptokinase-mediated plasminogen activation, not a pharmacokinetic study reporting disposition parameters for streptokinase. |
| popPK | Sathyamurthy_2021 | irrelevant | 0 | 0 | The paper is a review of P2Y12 inhibitors (ticagrelor) in ACS management and mentions streptokinase only as a fibrinolytic agent for timing recommendations, providing no pharmacokinetic parameters for streptokinase. |
| PD | Sathyamurthy_2021 | not_relevant | 0 | 0 | The paper is a clinical expert opinion on ticagrelor use in ACS and contains no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for streptokinase. |
| PGx | Sawhney_2016 | not_relevant | 0 | 0 | The paper reports on protein engineering (PEGylation) to improve pharmacokinetics, not on the effect of human genetic variants on streptokinase parameters. |
| popPK | Schwerdt_1990 | irrelevant | 0 | 0 | The study focuses on modeling creatine kinase kinetics as a reperfusion indicator, not the pharmacokinetics of streptokinase itself. |
| PGx | Shahbazmohammadi_2026 | not_relevant | 0 | 0 | The paper reports on chemical modification (polysialylation) of streptokinase to improve pharmacokinetics, not on the effect of human gene variants or genotypes on drug response. |
| popPK | Sharmin_2018 | irrelevant | 0 | 0 | The study investigates the biological activities of a plant extract, using streptokinase only as a positive control for thrombolytic assays, and does not report any pharmacokinetic parameters for streptokinase. |
| PD | Sharmin_2018 | not_relevant | 0 | 0 | The paper investigates the biological activities of a plant extract (Lagerstroemia speciosa) and uses streptokinase only as a standard reference in a thrombolytic assay; it does not report a pharmacodynamic or exposure-response relationship for streptokinase itself. |
| popPK | Uddin_2019 | irrelevant | 0 | 0 | The study investigates a plant extract with streptokinase used only as a standard comparator for clot lysis, and no pharmacokinetic parameters are reported. |
| PD | Uddin_2019 | not_relevant | 0 | 0 | The paper investigates a plant extract and uses streptokinase only as a positive control in a clot lysis assay; it does not report any pharmacodynamic or exposure-response relationship for streptokinase itself. |
| popPK | Vassanelli_1987 | irrelevant | 0 | 0 | The study focuses on enzymatic infarct size (CK-MB) parameters, not the pharmacokinetic disposition parameters (CL, V, t1/2) of streptokinase itself. |
| popPK | Vermeer_1993 | irrelevant | 0 | 0 | The paper focuses on using cumulative enzyme release (LDH) to assess infarct size, not on the pharmacokinetic parameters (CL, V, etc.) of streptokinase. |
| popPK | Verstraete_1986 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of recombinant tissue-type plasminogen activator (rt-PA), with streptokinase mentioned only as a qualitative comparator for fibrinogenolysis effects. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The paper investigates bleeding risk in antiplatelet therapy (clopidogrel/ticagrelor) and does not report pharmacokinetic or pharmacodynamic parameters for streptokinase. |
| popPK | Zwaan_1998 | irrelevant | 0 | 0 | The paper is a clinical study on vena caval filters and mentions streptokinase only as a co-administered thrombolytic agent, with no pharmacokinetic parameters reported. |
| popPK | unknown_1994 | irrelevant | 0 | 0 | The evidence consists only of a conference citation with no abstract text, data, or pharmacokinetic parameters for streptokinase. |
| PD | unknown_1994 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract and contains no data, results, or PD parameters. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | The evidence consists only of a conference title with no study data, parameters, or text regarding streptokinase pharmacokinetics. |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, models, or parameters for streptokinase. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The provided evidence is only a title for a book of abstracts with no content, data, or specific study details regarding streptokinase pharmacokinetics. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a title/header for a book of abstracts and contains no data, analysis, or parameters regarding streptokinase pharmacodynamics. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | The provided evidence contains only a conference title and no pharmacokinetic data or study details for streptokinase. |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is a conference title and contains no scientific content, data, or pharmacodynamic analysis for streptokinase. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | The provided evidence contains only a conference title and no pharmacokinetic data or study details for streptokinase. |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or parameters regarding streptokinase pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_streptokinase`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
