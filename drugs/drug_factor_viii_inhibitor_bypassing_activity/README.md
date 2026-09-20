<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;factor VIII inhibitor bypassing activity&quot;}]"></div>

# factor VIII inhibitor bypassing activity

- **generic name:** factor VIII inhibitor bypassing activity
- **ATC codes:** `B02BD03`
- **DrugBank:** [DB13151](https://go.drugbank.com/drugs/DB13151)
- **groups:** approved, investigational

## About

**Description.** Anti-inhibitor coagulant complex, also known as FEIBA (factor eight inhibitor bypassing activity), contains several proteins involved in the prothrombinase complex. It is used to control bleeding in hemophilia A and B patients with inhibitors.

**Indication.** For use in the control of bleeding episodes, perioperative management, and routine prophylaxis against bleeding episodes in hemophilia A and B patients with inhibitors.[FDA Label] It is not indicated in the absence of factor VIII or IX inhibitors.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 21:48 | 13:11 | 0/0/0 | 1/0/0 | 0/0/0 | 378,779/9,100 | ollama / qwen3.8:27b-mtp-q8_0 | 19 | 2/17 | 18/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Jonsson_2021](drugs/drug_factor_viii_inhibitor_bypassing_activity/pd_Jonsson_2021_ABR.md) | Jonsson F et al., Exposure-Bleeding Count Modeling of Emi…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01006-0](https://doi.org/10.1007/s40262-021-01006-0) |

## Coverage

- **PubMed hits:** 43 matched, 61 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hansson_2016.pdf` | Hansson KM et al., Recombinant human prothrombin (MEDI8111…, Haemophilia : the official… (2016) | pd | 5 | [10.1111/hae.12861](https://doi.org/10.1111/hae.12861) | [26635073](https://www.ncbi.nlm.nih.gov/pubmed/26635073) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-18T21:47:07.616145+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agersø_2012 | irrelevant | 0 | 0 | The paper is a review discussing animal models for bypassing agents like rFVIIa and vatreptacog alfa, but it does not report quantitative PK parameters for factor_viii_inhibitor_bypassing_activity. |
| PD | Agersø_2012 | not_relevant | 2 | 0 | The text is a qualitative review of animal models and general PK/PD insights without reporting specific numeric PD parameters or extractable concentration-effect curves. |
| popPK | Alamillo_2025 | irrelevant | 0 | 0 | The paper is a proteomics study on protein turnover kinetics in cell culture and does not report pharmacokinetic parameters for factor_viii_inhibitor_bypassing_activity. |
| popPK | Alikhan_2014 | irrelevant | 0 | 0 | The paper is a clinical review on the management of dabigatran bleeding, and while it mentions bypassing agents like FEIBA and rFVIIa, it does not report any pharmacokinetic parameters for factor_viii_inhibitor_bypassing_activity. |
| popPK | Amiral_2018 | irrelevant | 0 | 0 | The paper discusses chromogenic assays for FVIII/FIX potency and mentions bypassing agents (FEIBA/FVIIa) only as context for inhibitor management, without providing any quantitative pharmacokinetic parameters for factor_viii_inhibitor_bypassing_activity. |
| PGx | Amiral_2018 | not_relevant | 0 | 0 | The paper discusses chromogenic assays for FVIII/FIX potency and mentions bypassing agents (FEIBA/FVIIa) for inhibitor patients, but does not report pharmacogenomic effects on the PK/PD of factor_viii_inhibitor_bypassing_activity. |
| popPK | Baron_2014 | irrelevant | 0 | 0 | The paper is a review of anticoagulant and antiplatelet agents, not a pharmacokinetic study of factor_viii_inhibitor_bypassing_activity. |
| popPK | Brunetti_2014 | irrelevant | 0 | 0 | The paper is a review of dabigatran in the elderly and does not study factor_viii_inhibitor_bypassing_activity or report any pharmacokinetic parameters. |
| popPK | Carpenter_2018 | irrelevant | 0 | 0 | The paper is a review discussing the clinical use of bypassing agents for bleeding prophylaxis and does not report quantitative pharmacokinetic parameters for factor_viii_inhibitor_bypassing_activity. |
| popPK | Dager_2013 | irrelevant | 0 | 0 | The paper is a review on oral anticoagulant reversal and does not report pharmacokinetic parameters for factor_viii_inhibitor_bypassing_activity. |
| PD | Dager_2013 | not_relevant | 0 | 0 | The paper is a clinical management review for oral anticoagulant reversal and does not report any pharmacodynamic or exposure-response data for factor VIII inhibitor bypassing activity. |
| popPK | Dager_2017 | irrelevant | 0 | 0 | The paper is a review of anticoagulation reversal strategies where FEIBA is mentioned only as a nonspecific supportive agent, with no pharmacokinetic parameters reported. |
| PD | Dager_2017 | not_relevant | 0 | 0 | The text is a general review of anticoagulation reversal strategies and does not report any specific pharmacodynamic or exposure-response data for Factor VIII Inhibitor Bypassing Activity (FEIBA). |
| popPK | Dong_2024 | irrelevant | 0 | 0 | The paper investigates the molecular mechanism of ABL1-mediated phosphorylation and stability of the transcription factor FOXM1, which is unrelated to the pharmacokinetics of factor_viii_inhibitor_bypassing_activity. |
| popPK | Du_2025 | irrelevant | 0 | 0 | The paper studies the cellular clearance of protein aggregates during mitosis and is unrelated to the pharmacokinetics of factor_viii_inhibitor_bypassing_activity. |
| popPK | Ehrlich_2013 | irrelevant | 0 | 0 | The paper is a general review of Baxter's pipeline for haemophilia treatments and does not report quantitative pharmacokinetic parameters for factor VIII inhibitor bypassing activity. |
| popPK | Faraoni_2015 | irrelevant | 0 | 0 | The paper is a review of perioperative management for non-vitamin K antagonist oral anticoagulants (NOACs) and does not report pharmacokinetic parameters for factor_viii_inhibitor_bypassing_activity. |
| popPK | Halim_2014 | irrelevant | 0 | 0 | The study is an ex vivo mechanistic investigation of FEIBA's ability to reverse edoxaban's anticoagulant effects, not a pharmacokinetic study reporting disposition parameters for FEIBA. |
| PD | Halim_2014 | not_relevant | 2 | 1 | The study is a qualitative ex vivo assessment that explicitly states no dose-response was observed and does not provide numeric PD parameters or concentration-effect curves. |
| popPK | Hansson_2016 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PD | Hansson_2016 | not_relevant | 0 | 0 | The paper studies recombinant human prothrombin (MEDI8111), not factor VIII inhibitor bypassing activity (rFVIIa or aPCC), and does not report PD parameters for the specified drug class. |
| popPK | He_2018 | irrelevant | 0 | 0 | The paper is a mechanistic study on ROTEM assay methodology for haemophilia A and does not report pharmacokinetic parameters for factor_viii_inhibitor_bypassing_activity. |
| popPK | Ho_2007 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for Factor VIII (the substrate), not for factor_viii_inhibitor_bypassing_activity (the bypassing agent), which is only mentioned as a comparator or treatment option. |
| popPK | Horwith_1999 | irrelevant | 0 | 0 | The paper describes viral clearance methods for activated prothrombin complex concentrates (aPCCs) and does not report pharmacokinetic parameters for factor_viii_inhibitor_bypassing_activity. |
| popPK | Iarossi_2024 | irrelevant | 0 | 0 | The paper is a narrative review discussing the clinical use of emicizumab in acquired hemophilia A and does not report original quantitative pharmacokinetic parameters (CL, V, etc.) for the subject drug. |
| popPK | Jonsson_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of emicizumab, not factor_viii_inhibitor_bypassing_activity, which is only mentioned as a comparator or context for hemophilia A treatment. |
| popPK | Kinai_2022 | irrelevant | 0 | 0 | The paper is a claims-based cohort study analyzing treatment patterns and dosing in hemophilia A, not a pharmacokinetic study, and it explicitly excludes patients receiving bypassing agents (anti-inhibitor coagulant complexes). |
| popPK | Koch_2019 | irrelevant | 0 | 0 | The paper is a review of inner nuclear membrane-associated degradation (INMAD) mechanisms in yeast and mammals, and does not contain any pharmacokinetic data for factor_viii_inhibitor_bypassing_activity. |
| popPK | Liu_2011 | irrelevant | 0 | 0 | The paper studies the von Hippel-Lindau tumor suppressor protein (pVHL) and its cell cycle regulation, which is unrelated to the pharmacokinetics of factor VIII inhibitor bypassing activity. |
| popPK | Malkan_2018 | irrelevant | 0 | 0 | The paper is a retrospective clinical analysis of treatment protocols and costs, not a pharmacokinetic study, and it does not report quantitative PK parameters (CL, V, etc.) for FEIBA. |
| popPK | Mancuso_2022 | irrelevant | 0 | 0 | The paper is a narrative review discussing management strategies for haemophilia patients and does not report quantitative pharmacokinetic parameters for factor VIII inhibitor bypassing activity. |
| popPK | Nakajima_2021 | irrelevant | 0 | 0 | The study is an in-vitro coagulation assay assessing functional activity, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for the drug. |
| popPK | Nguyen_2005 | irrelevant | 0 | 0 | The paper studies the degradation mechanism of the Aurora-B kinase protein, which is unrelated to the pharmacokinetics of factor_viii_inhibitor_bypassing_activity. |
| popPK | Park_2018 | irrelevant | 0 | 0 | The paper is a cell biology study on mitotic slippage and ATP depletion, unrelated to the pharmacokinetics of factor_viii_inhibitor_bypassing_activity. |
| popPK | Peraza_2025 | irrelevant | 0 | 0 | The study investigates marstacimab and bypassing agents (rFVIIa, aPCC, pdFVIIa/FX), not factor_viii_inhibitor_bypassing_activity as the subject drug, and focuses on thrombin generation and safety rather than PK parameters for the target entity. |
| popPK | Pernod_2013 | irrelevant | 0 | 0 | The paper is a clinical management guideline for direct oral anticoagulants (dabigatran, rivaroxaban) and does not report pharmacokinetic parameters for factor VIII inhibitor bypassing activity. |
| popPK | Perzborn_2013 | irrelevant | 0 | 0 | The study investigates the reversal of rivaroxaban anticoagulation using hemostatic agents and does not report pharmacokinetic parameters for factor_viii_inhibitor_bypassing_activity. |
| popPK | Perzborn_2014 | irrelevant | 0 | 0 | The paper is an in-vitro study on the reversal of rivaroxaban by PCC/aPCC/rFVIIa and does not report pharmacokinetic parameters for factor_viii_inhibitor_bypassing_activity. |
| popPK | Quintana-Molina_2004 | irrelevant | 0 | 0 | The paper is a clinical review of surgical outcomes in hemophilia patients and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for factor VIII inhibitor bypassing activity. |
| popPK | Rafiq_2024 | irrelevant | 0 | 0 | The paper describes the molecular mechanism of GSK3β-mediated phosphorylation and degradation of the Six1 transcription factor, which is unrelated to the pharmacokinetics of factor_viii_inhibitor_bypassing_activity. |
| popPK | Retout_2020 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for emicizumab, not for factor_viii_inhibitor_bypassing_activity. |
| PD | Retout_2020 | not_relevant | 3 | 1 | The paper reports a population PK model and a descriptive/exploratory comparison of exposure vs. bleeding rates, but it does not fit a formal PD model or provide numeric PD parameters (e.g., Emax, EC50) for the exposure-response relationship. |
| popPK | Sari_2007 | irrelevant | 0 | 0 | The paper studies the protein degradation kinetics of the yeast cyclin Clb5, not the pharmacokinetics of factor_viii_inhibitor_bypassing_activity. |
| popPK | Seki_2007 | irrelevant | 0 | 0 | The paper studies the cell cycle protein CKAP2 and is unrelated to factor_viii_inhibitor_bypassing_activity pharmacokinetics. |
| popPK | Shim_2013 | irrelevant | 0 | 0 | no_text gate: only 166 chars of text extracted (&lt; 400) |
| popPK | Shirahata_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of MC710 (a FVIIa/FX mixture), not factor_viii_inhibitor_bypassing_activity as a specific drug entity, and no quantitative PK parameters for the target subject are provided. |
| popPK | Shirahata_2013 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamic endpoints (clot waveform and thrombin generation) for MC710, a bypassing agent, and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for the subject drug. |
| popPK | Tangelder_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of TB-402 (an FVIII inhibitor), and factor_viii_inhibitor_bypassing_activity (FEIBA) is only used as a comparator agent in in-vitro spiking experiments without any reported PK parameters for FEIBA itself. |
| popPK | Turecek_2003 | irrelevant | 1 | 0 | The paper describes an in-vitro assay for monitoring thrombin generation and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for the drug. |
| popPK | Váradi_2003 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic monitoring of thrombin generation rather than reporting quantitative population-pharmacokinetic parameters (CL, V, Q) for the bypassing agent. |
| popPK | Yoneyama_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for emicizumab, not factor_viii_inhibitor_bypassing_activity. |
| PD | Yoneyama_2022 | not_relevant | 2 | 0 | The paper focuses on pediatric pharmacokinetic (PK) prediction and dose selection based on exposure targets, but it does not report a quantitative pharmacodynamic (PD) model or extractable numeric PD parameters (e.g., Emax, EC50) for emicizumab. |
| popPK | Yoneyama_2023 | irrelevant | 0 | 0 | The paper is a review of emicizumab, not a study on factor_viii_inhibitor_bypassing_activity as the subject drug, and contains no quantitative PK parameters for the target entity. |
| PD | Yoneyama_2023 | not_relevant | 2 | 1 | The text is a qualitative review summary that mentions PK/PD concepts and clinical efficacy but does not provide specific numeric PD parameters (e.g., Emax, EC50) or detailed concentration-effect data. |
| popPK | Zeng_2022 | irrelevant | 0 | 0 | The paper is a mechanistic cell biology study on the STYK1/NOK protein and its interaction with CDH1, not a pharmacokinetic study of factor_viii_inhibitor_bypassing_activity. |
| popPK | Zhao_2005 | irrelevant | 0 | 0 | The paper describes the cell biology of anillin and cytokinesis, which is unrelated to the pharmacokinetics of factor_viii_inhibitor_bypassing_activity. |
| popPK | Zhao_2013 | irrelevant | 0 | 0 | The paper describes the molecular mechanism of MIWI protein degradation in spermatogenesis and is unrelated to the pharmacokinetics of factor_viii_inhibitor_bypassing_activity. |
| popPK | Zollner_2013 | irrelevant | 0 | 0 | The paper focuses on the efficacy and safety of rVIII-SingleChain (a Factor VIII product) in animal models, not on the pharmacokinetics of factor_viii_inhibitor_bypassing_activity. |
| popPK | unknown_1994 | irrelevant | 0 | 0 | The paper is a collection of abstracts on various drugs (e.g., ethinylestradiol, procarbazine, acetylsalicylic acid) and does not contain any data or parameters for factor_viii_inhibitor_bypassing_activity. |
| PD | unknown_1994 | not_relevant | 0 | 0 | The provided text is only a title and file description for a conference abstract collection, containing no specific data, models, or numeric parameters for factor VIII inhibitor bypassing activity. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific study data, results, or PD parameters. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text is only a conference citation and contains no data, analysis, or parameters regarding factor VIII inhibitor bypassing activity or any pharmacodynamic relationship. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of factor VIII inhibitor bypassing activity or pharmacodynamics. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a header for a conference poster session and contains no scientific content, data, or PD parameters. |
| popPK | van_2009 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on thrombin generation assays and does not report pharmacokinetic parameters for factor VIII inhibitor bypassing activity. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_factor_viii_inhibitor_bypassing_activity`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
