# caplacizumab

- **generic name:** caplacizumab
- **ATC codes:** `B01AX07`
- **DrugBank:** [DB06081](https://go.drugbank.com/drugs/DB06081)
- **groups:** approved, investigational

## About

**Description.** Caplacizumab, firstly called ALX-0081, is a humanized single-variable-domain immunoglobulin consisting of two identical humanized building blocks genetically linked by a three-alanine linker. Caplacizumab was developed by Ablynx, a Sanofi company and FDA approved on February 6, 2019,[L5302] and approved previously by the EU in October 2018 as a combination therapy with plasma exchange and immunosuppression.[A174634]In December 2025, the FDA expanded this indication to include pediatric patients aged 12 years and older with aTTP, in the same combination regimen.[L54958,L54963]

**Indication.** Capacizumab is approved for the treatment of adults experiencing an episode of acquired thrombotic thrombocytopenic purpura (aTTP) in conjunction with plasma exchange and immunosuppression in patients 12 years or older.[A174634, L5302,L54958]

aTTP is a rare autoimmune condition presented by a disruption of blood clotting order which is translated into systemic microvascular thrombosis leading to profound thrombocytopenia, hemolytic anemia and organ ischemia. It is caused by the production of autoantibodies against ADAMTS-13 which is the protein in charge of cleaving the von-Wilebrand factor. The lack of this process produces the generation of ultra large von Wilebrand multimers that bind to platelets and form microthrombi and causing thromboembolic complications.[A174649]

Previously, capacizumab was under review for the prevention of thrombosis in high-risk patients with acute coronary syndrome undergoing percutaneous coronary intervention but this indication was withdrawn.[A174634]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 16:08 | 4:18 | 2/1/0 | 1/1/0 | 0/0/0 | 36,075/8,054 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 2/14 | 16/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Fan_2025](drugs/drug_caplacizumab/Caplacizumab_Fan2025_reference.md) | Fan X et al., Pharmacokinetic-pharmacodynamic modelin…, Microbiology spectrum (2025) | [10.1128/spectrum.00805-25](https://doi.org/10.1128/spectrum.00805-25) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Jansen_2026](drugs/drug_caplacizumab/Caplacizumab_Jansen2026_reference.md) | Jansen E et al., Characterization of the VHH-Fc construc…, PLoS medicine (2026) | [10.1371/journal.pmed.1004609](https://doi.org/10.1371/journal.pmed.1004609) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sargentini-Maier_2019](drugs/drug_caplacizumab/Caplacizumab_SargentiniMaier2019_reference.md) | Sargentini-Maier ML et al., Clinical pharmacology of caplacizumab f…, Expert review of clinical p… (2019) | [10.1080/17512433.2019.1607293](https://doi.org/10.1080/17512433.2019.1607293) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bergstrand_2022](drugs/drug_caplacizumab/pd_Bergstrand_2022_von_Willebrand_factor_antigen.md) | Bergstrand M et al., Caplacizumab Model-Based Dosing Recomme…, Journal of clinical pharmac… (2022) | [10.1002/jcph.1991](https://doi.org/10.1002/jcph.1991) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Fan_2025](drugs/drug_caplacizumab/pd_Fan_2025_unknown.md) | Fan X et al., Pharmacokinetic-pharmacodynamic modelin…, Microbiology spectrum (2025) | [10.1128/spectrum.00805-25](https://doi.org/10.1128/spectrum.00805-25) |

## Coverage

- **PubMed hits:** 31 matched, 27 returned
- **screened:** 6  ·  **relevant:** 1
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bartunek_2013 | irrelevant | 1 | 0 | The paper is a review of clinical studies and mechanism of action without reporting quantitative pharmacokinetic parameters or compartmental models for caplacizumab. |
| PD | Bartunek_2013 | not_relevant | 1 | 0 | The text is a review summary that qualitatively mentions effective inhibition of pharmacodynamic markers but provides no numeric PD parameters, dose-response curves, or specific exposure-response data. |
| popPK | Bergstrand_2022 | relevant | 9 | 2 | The paper describes a population PK/PD model for caplacizumab and reports simulated exposure metrics (AUC, Css), but the specific numeric parameter values (CL, V, Q) are not listed in the provided text, likely residing in the referenced prior publication or supplementary material. |
| popPK | Coppo_2026 | irrelevant | 1 | 0 | The paper reports pharmacodynamic data (VWF:RCo suppression) rather than quantitative pharmacokinetic parameters (CL, V, t1/2) for caplacizumab. |
| PD | Coppo_2026 | not_relevant | 3 | 2 | The paper reports qualitative pharmacodynamic effects (VWF:RCo suppression percentages and time to effect) but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., EC50, Emax) or an effect-vs-concentration curve. |
| popPK | Fan_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the anti-CD4 nanobody Nb457-NbHSA-Nb457 and Ibalizumab, not caplacizumab. |
| popPK | Glassman_2020 | irrelevant | 0 | 0 | The paper discusses ALX-0081 and linagliptin, not caplacizumab, and does not report PK parameters for the target drug. |
| PD | Glassman_2020 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic (PK) phenomena (TMDD/TMEE) for ALX-0081 and linagliptin, not caplacizumab, and does not report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Hou_2025 | irrelevant | 0 | 0 | The paper is a bibliometric review of nanobodies in cancer therapy and does not report any quantitative pharmacokinetic parameters for caplacizumab. |
| popPK | Jansen_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of XVR011 (rimteravimab), not caplacizumab, which is only mentioned as a background example of a VHH therapeutic. |
| PD | Jansen_2026 | not_relevant | 0 | 0 | The paper reports PK and safety data for rimteravimab (not caplacizumab) and explicitly states that no obvious dose-response in clinical status or respiratory parameters was observed, providing no numeric PD parameters. |
| popPK | Joseph_2023 | irrelevant | 0 | 0 | The paper is a narrative review of TTP at extreme ages and does not report any quantitative pharmacokinetic parameters for caplacizumab. |
| popPK | Kanaji_2022 | irrelevant | 0 | 0 | The paper describes a mouse model of von Willebrand disease and does not study caplacizumab or report any pharmacokinetic parameters for it. |
| popPK | Kwak_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a novel ADAMTS13 mutein (GC1126A), with caplacizumab serving only as a comparator agent for efficacy, and no PK parameters for caplacizumab are reported. |
| PD | Kwak_2025 | not_relevant | 0 | 0 | The paper focuses on a novel ADAMTS13 mutein (GC1126A) and only provides qualitative comparative efficacy data for caplacizumab in a mouse model, without reporting any numeric PD parameters or exposure-response analysis for caplacizumab. |
| PGx | Kwak_2025 | not_relevant | 0 | 0 | The paper reports on a novel ADAMTS13 mutein (GC1126A) and its efficacy compared to caplacizumab, but does not report pharmacogenomic effects (gene variants) on the PK or PD of caplacizumab. |
| popPK | Kühne_2022 | irrelevant | 0 | 0 | The paper is a retrospective clinical cohort study focusing on dosing regimens and clinical outcomes, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Kühne_2022 | not_relevant | 2 | 1 | The paper is a retrospective clinical cohort study describing dosing feasibility and clinical outcomes (platelet counts, relapse rates) without reporting numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The paper is a narrative review of pathogenesis and therapies for iTTP and does not report original quantitative pharmacokinetic parameters for caplacizumab. |
| popPK | Malgaj_2022 | irrelevant | 0 | 0 | The paper is a literature review of clinical cases involving caplacizumab as a treatment, containing no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Matsumoto_2021 | irrelevant | 0 | 0 | The paper is a review of TTP pathogenesis and treatment that mentions caplacizumab only as a therapeutic agent without reporting any pharmacokinetic parameters. |
| popPK | Michels_2020 | irrelevant | 0 | 0 | The paper is a mechanistic study on VWF in a mouse model of obesity and does not report pharmacokinetic parameters for caplacizumab. |
| PD | Sargentini-Maier_2019 | not_relevant | 2 | 0 | The text is a review that qualitatively describes the mechanism and PK/PD characteristics (target-mediated disposition, vWF suppression) but does not provide specific numeric PD parameters (e.g., Emax, EC50) or extractable concentration-effect curves in the provided excerpt. |
| popPK | Sarode_2023 | irrelevant | 0 | 0 | The paper is a clinical review discussing the management of TTP and does not report any quantitative pharmacokinetic parameters for caplacizumab. |
| popPK | Underwood_2023 | irrelevant | 0 | 0 | The study focuses on ADAMTS-13 clearance kinetics in iTTP patients, with caplacizumab mentioned only as a background adjunct therapy, and no PK parameters for caplacizumab are reported. |
| popPK | Van_2024 | irrelevant | 1 | 0 | The paper is an immunogenicity assessment that qualitatively discusses the impact of antibodies on pharmacokinetics but does not report quantitative PK parameters (CL, V, etc.) for caplacizumab. |
| PD | Van_2024 | not_relevant | 1 | 0 | The paper focuses on immunogenicity (ADA/NAb) and only provides qualitative or descriptive comparisons of PK/PD endpoints (platelet count, VWF) by antibody status, without reporting numeric PD parameters or exposure-response models. |
| popPK | Zhao_2026 | irrelevant | 1 | 0 | The paper is a mechanistic study on platelet activation in xenotransplantation where caplacizumab is used as a therapeutic agent, but it does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for caplacizumab. |
| popPK | de_2022 | irrelevant | 0 | 0 | The paper is a mechanistic study of a new thrombolytic agent (Microlyse) where caplacizumab serves only as a comparator, and no pharmacokinetic parameters for caplacizumab are reported. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | The evidence consists only of a conference title with no specific study data, parameters, or mention of caplacizumab. |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, results, or PD parameters for caplacizumab. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The evidence contains only conference metadata with no pharmacokinetic data or study content. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference citation header and contains no data, analysis, or description of pharmacodynamic or exposure-response relationships for caplacizumab. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | The provided evidence is only a conference title and contains no pharmacokinetic data or parameters for caplacizumab. |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or mention of caplacizumab pharmacodynamics. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | The provided evidence contains no scientific content, only a note about a PDF file, so no pharmacokinetic parameters for caplacizumab are present. |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a placeholder for a PDF file and contains no scientific content, data, or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_caplacizumab`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
