<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;factor VIII inhibitor bypassing activity&quot;}]"></div>

# factor VIII inhibitor bypassing activity

- **generic name:** factor VIII inhibitor bypassing activity
- **ATC codes:** `B02BD03`
- **DrugBank:** [DB13151](https://go.drugbank.com/drugs/DB13151) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Anti-inhibitor coagulant complex is a blood coagulation factor preparation used to control bleeding in people with inhibitors to factor VIII. It is an approved hemostatic medicine, used mainly in specialist care for hemophilia patients with inhibitors.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=factor_viii_inhibitor_bypassing_activity).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: F10 (target), F13A1 (target), F2 (target), F5 (target), F7 (target), F8 (target), FGA (cleavage), FGB (cleavage).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 19:01 | 4:00 | 0/0/0 | 0/0/0 | 0/0/0 | 154,038/3,577 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 2/17 | 15/1 | 0 |

## Coverage

- **PubMed hits:** 43 matched, 61 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hansson_2016.pdf` | Hansson KM et al., Recombinant human prothrombin (MEDI8111…, Haemophilia : the official… (2016) | pd | 5 | [10.1111/hae.12861](https://doi.org/10.1111/hae.12861) | [26635073](https://www.ncbi.nlm.nih.gov/pubmed/26635073) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-05T19:00:34.970200+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agersø_2012 | irrelevant | 0 | 0 | The paper is a review discussing animal models for bypassing agents like rFVIIa and vatreptacog alfa, but it does not report quantitative PK parameters for factor_viii_inhibitor_bypassing_activity. |
| PD | Agersø_2012 | not_relevant | 2 | 0 | The text is a qualitative review of animal models and general PK/PD insights without reporting specific numeric PD parameters or extractable concentration-effect curves. |
| popPK | Alamillo_2025 | irrelevant | 0 | 0 | The paper describes a proteomics method for measuring protein turnover in cell culture and does not study the pharmacokinetics of factor_viii_inhibitor_bypassing_activity. |
| popPK | Alikhan_2014 | irrelevant | 0 | 0 | The paper is a clinical review of dabigatran management and only mentions bypassing agents (FEIBA, rFVIIa) as hemostatic treatments without providing any pharmacokinetic parameters for them. |
| popPK | Amiral_2018 | irrelevant | 0 | 0 | The paper discusses chromogenic assays for FVIII/FIX potency and mentions bypassing agents (FEIBA, FVIIa) only as context for inhibitor management, without providing any quantitative pharmacokinetic parameters for factor_viii_inhibitor_bypassing_activity. |
| PGx | Amiral_2018 | not_relevant | 0 | 0 | The paper discusses chromogenic assays for FVIII/FIX potency and mentions bypassing agents (FEIBA/FVIIa) for inhibitor patients, but does not report pharmacogenomic effects on the PK/PD of factor_viii_inhibitor_bypassing_activity. |
| popPK | Baron_2014 | irrelevant | 0 | 0 | The paper is a review of anticoagulant and antiplatelet agents, not a pharmacokinetic study of factor_viii_inhibitor_bypassing_activity. |
| popPK | Brunetti_2014 | irrelevant | 0 | 0 | The paper is a review of dabigatran (an anticoagulant) in the elderly, which is a different drug class and does not report pharmacokinetic parameters for factor VIII inhibitor bypassing activity. |
| popPK | Carpenter_2018 | irrelevant | 0 | 0 | The paper is a review discussing the clinical use of bypassing agents for bleeding prophylaxis and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for the drug. |
| popPK | Dager_2013 | irrelevant | 0 | 0 | The paper is a review on oral anticoagulant reversal and does not report pharmacokinetic parameters for factor_viii_inhibitor_bypassing_activity. |
| PD | Dager_2013 | not_relevant | 0 | 0 | The paper is a clinical management review for oral anticoagulant reversal and does not report any pharmacodynamic or exposure-response data for factor VIII inhibitor bypassing activity. |
| popPK | Dager_2017 | irrelevant | 0 | 0 | The paper is a review of anticoagulation reversal strategies and does not report quantitative pharmacokinetic parameters for Factor VIII Inhibitor Bypassing Activity (FEIBA). |
| PD | Dager_2017 | not_relevant | 0 | 0 | The text is a general review of anticoagulation reversal strategies and does not report any specific pharmacodynamic or exposure-response data for Factor VIII Inhibitor Bypassing Activity (FEIBA). |
| popPK | Dong_2024 | irrelevant | 0 | 0 | The paper investigates the molecular mechanism of ABL1-mediated phosphorylation and stability of the transcription factor FOXM1, which is unrelated to the pharmacokinetics of factor_viii_inhibitor_bypassing_activity. |
| popPK | Du_2025 | irrelevant | 0 | 0 | The paper describes the cellular clearance of protein aggregates during mitosis in cell lines and is unrelated to the pharmacokinetics of factor_viii_inhibitor_bypassing_activity. |
| popPK | Ehrlich_2013 | irrelevant | 0 | 0 | The paper is a review of Baxter's pipeline and does not report quantitative pharmacokinetic parameters for factor VIII inhibitor bypassing activity. |
| popPK | Faraoni_2015 | irrelevant | 0 | 0 | The paper is a review of perioperative management for non-vitamin K antagonist oral anticoagulants (NOACs) and does not study factor_viii_inhibitor_bypassing_activity. |
| popPK | Halim_2014 | irrelevant | 0 | 0 | The study is an ex vivo mechanistic investigation of FEIBA's ability to reverse edoxaban's anticoagulant effects, not a pharmacokinetic study reporting disposition parameters for FEIBA. |
| PD | Halim_2014 | not_relevant | 2 | 1 | The study is a qualitative ex vivo assessment that explicitly states no dose-response was observed and does not provide numeric PD parameters or concentration-effect curves. |
| popPK | Hansson_2016 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PD | Hansson_2016 | not_relevant | 0 | 0 | The paper studies recombinant human prothrombin (MEDI8111), not factor VIII inhibitor bypassing activity (rFVIIa or aPCC), and does not report PD parameters for the specified drug class. |
| popPK | He_2018 | irrelevant | 0 | 0 | The paper is a mechanistic study on ROTEM assay methodology for haemophilia A and does not report pharmacokinetic parameters for factor_viii_inhibitor_bypassing_activity. |
| popPK | Ho_2007 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for Factor VIII (the substrate), not for the bypassing agents (FEIBA/FVIIa) or the inhibitor itself. |
| popPK | Horwith_1999 | irrelevant | 0 | 0 | The paper describes viral clearance methods for activated prothrombin complex concentrates (aPCCs) and does not report pharmacokinetic parameters for factor VIII inhibitor bypassing activity. |
| popPK | Iarossi_2024 | irrelevant | 0 | 0 | The paper is a review discussing the clinical use of emicizumab and bypassing agents for acquired hemophilia A, but it does not report quantitative pharmacokinetic parameters (CL, V, etc.) for factor_viii_inhibitor_bypassing_activity. |
| popPK | Jonsson_2021 | irrelevant | 0 | 0 | The study models the exposure-response of emicizumab (a bispecific antibody) for bleeding prophylaxis, not the pharmacokinetics of factor VIII inhibitor bypassing activity itself. |
| popPK | Kinai_2022 | irrelevant | 0 | 0 | The paper is a claims database analysis of hemophilia A treatment patterns and does not report pharmacokinetic parameters for factor VIII inhibitor bypassing activity. |
| popPK | Koch_2019 | irrelevant | 0 | 0 | The paper is a review of inner nuclear membrane-associated degradation (INMAD) mechanisms in yeast and mammals, unrelated to the pharmacokinetics of factor VIII inhibitor bypassing activity. |
| popPK | Liu_2011 | irrelevant | 0 | 0 | The paper studies the cell cycle regulation and degradation of the von Hippel-Lindau tumor suppressor protein (pVHL), not the pharmacokinetics of factor VIII inhibitor bypassing activity. |
| popPK | Malkan_2018 | irrelevant | 0 | 0 | The paper is a clinical retrospective study on treatment protocols and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for FEIBA. |
| popPK | Mancuso_2022 | irrelevant | 0 | 0 | The paper is a narrative review discussing management strategies for haemophilia patients and does not report quantitative pharmacokinetic parameters for factor VIII inhibitor bypassing activity. |
| popPK | Nakajima_2021 | irrelevant | 0 | 0 | The study is an in vitro coagulation assay assessing hemostatic potential, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for the drug. |
| popPK | Nguyen_2005 | irrelevant | 0 | 0 | The paper investigates the molecular mechanism of Aurora-B protein degradation and is unrelated to the pharmacokinetics of factor_viii_inhibitor_bypassing_activity. |
| popPK | Park_2018 | irrelevant | 0 | 0 | The paper investigates cell cycle mechanisms and protein half-lives in HeLa cells, not the pharmacokinetics of factor_viii_inhibitor_bypassing_activity. |
| popPK | Peraza_2025 | irrelevant | 0 | 0 | The study investigates marstacimab and bypassing agents (rFVIIa, aPCC, pdFVIIa/FX), not factor_viii_inhibitor_bypassing_activity as the subject drug, and focuses on thrombin generation and safety rather than PK parameters for the target entity. |
| popPK | Pernod_2013 | irrelevant | 0 | 0 | The paper is a clinical management guideline for direct oral anticoagulants (dabigatran, rivaroxaban) and does not report pharmacokinetic parameters for factor VIII inhibitor bypassing activity. |
| popPK | Perzborn_2013 | irrelevant | 0 | 0 | The study investigates the reversal of rivaroxaban (a factor Xa inhibitor) using hemostatic agents, not the pharmacokinetics of factor VIII inhibitor bypassing activity. |
| popPK | Perzborn_2014 | irrelevant | 0 | 0 | The study is an in-vitro investigation of reversal agents for rivaroxaban and does not report pharmacokinetic parameters for factor_viii_inhibitor_bypassing_activity. |
| popPK | Quintana-Molina_2004 | irrelevant | 0 | 0 | The paper is a clinical review of surgical outcomes and efficacy in hemophilia patients, reporting no quantitative pharmacokinetic parameters (CL, V, t1/2) for factor VIII inhibitor bypassing activity. |
| popPK | Rafiq_2024 | irrelevant | 0 | 0 | The paper describes the molecular mechanism of GSK3β-mediated phosphorylation and degradation of the Six1 transcription factor, which is unrelated to the pharmacokinetics of factor_viii_inhibitor_bypassing_activity. |
| popPK | Retout_2020 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of emicizumab, not factor_viii_inhibitor_bypassing_activity. |
| PD | Retout_2020 | not_relevant | 3 | 1 | The paper reports a population PK model and a descriptive/exploratory comparison of exposure vs. bleeding rates, but it does not fit a formal PD model or provide numeric PD parameters (e.g., Emax, EC50) for the exposure-response relationship. |
| popPK | Sari_2007 | irrelevant | 0 | 0 | The paper studies the protein degradation kinetics of the yeast cyclin Clb5, not the pharmacokinetics of factor_viii_inhibitor_bypassing_activity. |
| popPK | Seki_2007 | irrelevant | 0 | 0 | The paper describes the cell cycle regulation of the protein CKAP2 and is unrelated to the pharmacokinetics of factor_viii_inhibitor_bypassing_activity. |
| popPK | Shim_2013 | irrelevant | 0 | 0 | no_text gate: only 166 chars of text extracted (&lt; 400) |
| popPK | Shirahata_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of MC710 (a FVIIa/FX mixture), not factor_viii_inhibitor_bypassing_activity as a specific drug entity, and no quantitative PK parameters for the target subject are provided. |
| popPK | Shirahata_2013 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamic endpoints (clot waveform and thrombin generation) for MC710, a bypassing agent, and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for the subject drug. |
| popPK | Tangelder_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of TB-402 (an anti-FVIII antibody) and the reversal of its effects by various agents, including FEIBA (FVIII inhibitor bypassing activity), but does not report PK parameters for FEIBA itself. |
| popPK | Turecek_2003 | irrelevant | 0 | 0 | The paper describes an in vitro assay for monitoring thrombin generation and does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for the drug. |
| popPK | Váradi_2003 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic monitoring of thrombin generation rather than reporting quantitative population-pharmacokinetic parameters (CL, V, Q) for the bypassing agent. |
| popPK | Yoneyama_2022 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of emicizumab, not factor_viii_inhibitor_bypassing_activity. |
| PD | Yoneyama_2022 | not_relevant | 2 | 0 | The paper focuses on pediatric pharmacokinetic (PK) prediction and dose selection based on exposure targets, but it does not report a quantitative pharmacodynamic (PD) model or extractable numeric PD parameters (e.g., Emax, EC50) for emicizumab. |
| popPK | Yoneyama_2023 | irrelevant | 0 | 0 | The paper is a review of emicizumab, which is a different drug from the target subject factor_viii_inhibitor_bypassing_activity, and does not report quantitative PK parameters for the target. |
| PD | Yoneyama_2023 | not_relevant | 2 | 1 | The text is a qualitative review summary that mentions PK/PD concepts and clinical efficacy but does not provide specific numeric PD parameters (e.g., Emax, EC50) or detailed concentration-effect data. |
| popPK | Zeng_2022 | irrelevant | 0 | 0 | The paper is a mechanistic cell biology study on the STYK1/NOK protein and its interaction with CDH1, not a pharmacokinetic study of factor_viii_inhibitor_bypassing_activity. |
| popPK | Zhao_2005 | irrelevant | 0 | 0 | The paper describes the cell biology of anillin and cytokinesis, not the pharmacokinetics of factor_viii_inhibitor_bypassing_activity. |
| popPK | Zhao_2013 | irrelevant | 0 | 0 | The paper describes the ubiquitination and degradation of the MIWI protein in mouse spermatogenesis, which is unrelated to the pharmacokinetics of factor VIII inhibitor bypassing activity. |
| popPK | Zollner_2013 | irrelevant | 0 | 0 | The study reports efficacy and safety (hemostasis, thrombosis) in animal models, not quantitative pharmacokinetic parameters (CL, V, t1/2) for factor VIII. |
| popPK | unknown_1994 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
