# palivizumab

- **generic name:** palivizumab
- **ATC codes:** `J06BD01`
- **DrugBank:** [DB00110](https://go.drugbank.com/drugs/DB00110)
- **groups:** approved, investigational

## About

**Description.** Humanized monoclonal antibody (IgG1k) produced by recombinant DNA technology, directed to an epitope in the A antigenic site of the F protein of respiratory syncytial virus (RSV). Synagis is a composite of human (95%) and murine (5%) antibody sequences. The human heavy chain sequence was derived from the constant domains of human IgG1 and the variable framework regions of the VH genes Cor (1) and Cess (2). The human lightchain sequence was derived from the constant domain of Ck and the variable framework regions of the VL gene K104 withJk-4. Palivizumab is expressed from a stable murine (mouse) myeloma cell line (NS0). Palivizumab is composed of to heavy chains (50.6 kDa each) and two light chains (27.6 kDa each), contains 1-2% carbohydrate by weight and has a molecular weight of 147.7 kDa +/- 1 kDa (MALDI-TOF)

**Indication.** For prophylaxis of respiratory diseases casued by respiratory syncytial virus.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 15:25 | 19:57 | 1/3/1 | 0/2/1 | 0/0/0 | 606,048/43,892 | ollama / qwen3.8:27b-mtp-q8_0 | 20 | 13/7 | 10/10 | 1 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: nonlinear topology</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `manual_model_class`</sub> | [Reuter_2019](drugs/drug_palivizumab/Palivizumab_Reuter2019_reference.md) | Reuter SE et al., Reducing Palivizumab Dose Requirements…, CPT: pharmacometrics & syst… (2019) | [10.1002/psp4.12364](https://doi.org/10.1002/psp4.12364) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Li_2021](drugs/drug_palivizumab/Palivizumab_Li2021_reference.md) | Li J et al., Model Informed Development of VRC01 in…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2026](https://doi.org/10.1002/cpt.2026) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Huang_2017](drugs/drug_palivizumab/Palivizumab_Huang2017_reference.md) | Huang Y et al., Population pharmacokinetics analysis of…, mAbs (2017) | [10.1080/19420862.2017.1311435](https://doi.org/10.1080/19420862.2017.1311435) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Madhi_2025](drugs/drug_palivizumab/Palivizumab_Madhi2025_reference.md) | Madhi SA et al., A Phase 1b/2a Trial of a Half-life Exte…, The Journal of infectious d… (2025) | [10.1093/infdis/jiae581](https://doi.org/10.1093/infdis/jiae581) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Robbie_2012](drugs/drug_palivizumab/Palivizumab_Robbie2012_reference.md) | Robbie GJ et al., Population pharmacokinetics of palivizu…, Antimicrobial agents and ch… (2012) | [10.1128/aac.06446-11](https://doi.org/10.1128/aac.06446-11) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Simões_2023](drugs/drug_palivizumab/pd_Sim_es_2023_RSV_LRTI.md) | Simões EAF et al., Efficacy of nirsevimab against respirat…, The Lancet. Child & adolesc… (2023) | [10.1016/S2352-4642(22)00321-2](https://doi.org/10.1016/S2352-4642(22)00321-2) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Simões_2023](drugs/drug_palivizumab/pd_Sim_es_2023_medically_attended_RSV_LRTI.md) | Simões EAF et al., Efficacy of nirsevimab against respirat…, The Lancet. Child & adolesc… (2023) | [10.1016/S2352-4642(22)00321-2](https://doi.org/10.1016/S2352-4642(22)00321-2) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Broadbent_2020](drugs/drug_palivizumab/pd_Broadbent_2020_GC.md) | Broadbent L et al., Comparative Therapeutic Potential of AL…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.02034-19](https://doi.org/10.1128/AAC.02034-19) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Broadbent_2020](drugs/drug_palivizumab/pd_Broadbent_2020_log10_TCID50_ml.md) | Broadbent L et al., Comparative Therapeutic Potential of AL…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.02034-19](https://doi.org/10.1128/AAC.02034-19) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Broadbent_2020](drugs/drug_palivizumab/pd_Broadbent_2020_log10_copies_ml.md) | Broadbent L et al., Comparative Therapeutic Potential of AL…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.02034-19](https://doi.org/10.1128/AAC.02034-19) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Broadbent_2020](drugs/drug_palivizumab/pd_Broadbent_2020_viral_titers.md) | Broadbent L et al., Comparative Therapeutic Potential of AL…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.02034-19](https://doi.org/10.1128/AAC.02034-19) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Wang_2016](drugs/drug_palivizumab/pd_Wang_2016_CD25.md) | Wang RE et al., Rational design of a Kv1.3 channel-bloc…, Proceedings of the National… (2016) | [10.1073/pnas.1612803113](https://doi.org/10.1073/pnas.1612803113) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Wang_2016](drugs/drug_palivizumab/pd_Wang_2016_CD69.md) | Wang RE et al., Rational design of a Kv1.3 channel-bloc…, Proceedings of the National… (2016) | [10.1073/pnas.1612803113](https://doi.org/10.1073/pnas.1612803113) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Wang_2016](drugs/drug_palivizumab/pd_Wang_2016_TNF_alpha.md) | Wang RE et al., Rational design of a Kv1.3 channel-bloc…, Proceedings of the National… (2016) | [10.1073/pnas.1612803113](https://doi.org/10.1073/pnas.1612803113) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Wang_2016](drugs/drug_palivizumab/pd_Wang_2016_proliferation.md) | Wang RE et al., Rational design of a Kv1.3 channel-bloc…, Proceedings of the National… (2016) | [10.1073/pnas.1612803113](https://doi.org/10.1073/pnas.1612803113) |

## Coverage

- **PubMed hits:** 49 matched, 33 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 5  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Gazumyan_2000 | not_relevant | 0 | 0 | The paper is a review of novel small-molecule RSV inhibitors and does not report pharmacodynamic or exposure-response data for palivizumab. |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for clesrovimab, not palivizumab, which is only mentioned as a comparator or historical context. |
| PD | Hu_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for clesrovimab, not palivizumab, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Huang_2017 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for the drug VRC01, not palivizumab. |
| PD | Huang_2017 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) analysis for VRC01, not palivizumab, and contains no pharmacodynamic or exposure-response modeling. |
| popPK | Johnson_2022 | irrelevant | 0 | 0 | The paper is a review of pediatric PBPK modeling applications and only briefly mentions palivizumab as a case study without reporting original quantitative PK parameters for it. |
| PD | Johnson_2022 | not_relevant | 0 | 0 | The paper is a bibliometric review of pediatric PBPK modeling applications and does not report specific pharmacodynamic or exposure-response data for palivizumab. |
| popPK | Kwon_2016 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of HIV-1 antibody 10E8 variants, not palivizumab. |
| PD | Kwon_2016 | not_relevant | 0 | 0 | The paper focuses on the structural optimization and solubility of HIV-1 neutralizing antibody 10E8, not on the pharmacodynamics of palivizumab. |
| popPK | La_2013 | relevant | 8 | 2 | The paper uses a population PK model for palivizumab and reports observed trough concentrations, but the specific quantitative model parameters (CL, V, Q) are referenced as being in a previous publication [32] rather than listed in this text. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for VRC01, not palivizumab. |
| PD | Li_2021 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for VRC01 (not palivizumab) and uses a fixed target concentration (50 μg/mL) for simulations, but it does not report a pharmacodynamic (PD) model or exposure-response relationship with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Madhi_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of clesrovimab, not palivizumab, which is only mentioned as a comparator or exclusion criterion. |
| PD | Madhi_2025 | not_relevant | 3 | 2 | The paper reports PK and dose-dependent SNA titers/efficacy trends but does not provide a formal PD model or numeric PD parameters (e.g., EC50, Emax) linking exposure to effect. |
| PGx | McSweeney_2024 | not_relevant | 0 | 0 | The paper reports on the efficacy of an inhaled monoclonal antibody (Mota-MT) for RSV treatment and compares it to palivizumab, but it does not investigate the impact of gene variants or genotypes on the pharmacokinetics or pharmacodynamics of palivizumab. |
| popPK | Moreno-Galdó_2020 | irrelevant | 0 | 0 | The paper is a clinical cohort study on respiratory morbidity in preterm infants where palivizumab is only a covariate for prophylaxis, and it contains no pharmacokinetic parameters. |
| popPK | Perron_2015 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral study of GS-5806 where palivizumab is used only as a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Perron_2015 | not_relevant | 0 | 0 | The paper focuses on the antiviral activity of GS-5806; palivizumab is only mentioned as a comparator or reference standard, and no pharmacodynamic or exposure-response data for palivizumab are reported. |
| PD | Reuter_2019 | not_relevant | 2 | 1 | The paper uses a population PK model to simulate concentration-time profiles and evaluate dose regimens against a fixed minimum protective concentration threshold (40 μg/mL), but it does not model or report a pharmacodynamic effect-response relationship (e.g., Emax, EC50) or derive numeric PD parameters. |
| PD | Robbie_2012 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for palivizumab, including covariate effects on clearance and volume, but does not contain any pharmacodynamic (PD) or exposure-response analysis, nor does it report numeric PD parameters such as Emax or EC50. |
| PD | Shambaugh_2017 | not_relevant | 0 | 0 | The paper describes the development and validation of an in vitro neutralization assay (methodology) and does not report pharmacokinetic or pharmacodynamic modeling of palivizumab in vivo. |
| popPK | Simões_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of nirsevimab, with palivizumab serving only as a comparator agent in the MEDLEY trial, and no PK parameters for palivizumab are reported. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The paper focuses on the development of small molecule RSV polymerase inhibitors (nucleosides), and palivizumab is only mentioned in the introduction as background context for RSV prophylaxis, with no PK parameters reported for it. |
| PD | Wang_2015 | not_relevant | 0 | 0 | The paper focuses on the discovery of a new small molecule RSV inhibitor (ALS-8176) and only mentions palivizumab as background context without providing any pharmacodynamic or exposure-response data for it. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | The study focuses on a novel Kv1.3 inhibitor fusion protein (Syn-Vm24-CDR3L) where palivizumab (Synagis) is used only as a scaffold/comparator, and no PK parameters for palivizumab itself are reported. |
| PGx | Wu_2007 | not_relevant | 0 | 0 | The paper describes the development of a new antibody (motavizumab) and its PK/PD properties compared to palivizumab, but does not report any pharmacogenomic effects (gene variants) on these parameters. |
| popPK | Yoneyama_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of emicizumab, and palivizumab is only mentioned as a reference for a clearance maturation function, with no PK parameters reported for palivizumab itself. |
| PD | Yoneyama_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) of emicizumab and dose selection based on exposure targets; it does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for emicizumab, nor does it provide a PD analysis for palivizumab (which is only cited as a reference for a PK maturation function). |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_palivizumab`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
