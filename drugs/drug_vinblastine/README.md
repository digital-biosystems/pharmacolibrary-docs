# vinblastine

- **generic name:** vinblastine
- **ATC codes:** `L01CA01`
- **DrugBank:** [DB00570](https://go.drugbank.com/drugs/DB00570)
- **groups:** approved, investigational

## About

**Description.** Antitumor alkaloid isolated from Vinca rosea. (Merck, 11th ed.)

**Indication.** For treatment of breast cancer, testicular cancer, lymphomas, neuroblastoma, Hodgkin's and non-Hodgkin's lymphomas, mycosis fungoides, histiocytosis, and Kaposi's sarcoma.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 12:30 | 29:54 | 4/2/0 | 2/7/0 | 0/0/4 | 828,803/58,410 | ollama / qwen3.8:27b-mtp-q8_0 | 48 | 41/8 | 17/31 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Levêque_1996](drugs/drug_vinblastine/Vinblastine_Levque1996_reference.md) | Levêque D et al., Clinical pharmacokinetics of vinorelbine, Clinical pharmacokinetics (1996) | [10.2165/00003088-199631030-00003](https://doi.org/10.2165/00003088-199631030-00003) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Petric_2023](drugs/drug_vinblastine/Vinblastine_Petric2023_reference.md) | Petric Z et al., Clinical Pharmacology of Vinpocetine: P…, Pharmaceutics (2023) | [10.3390/pharmaceutics15102502](https://doi.org/10.3390/pharmaceutics15102502) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Sethi_1984](drugs/drug_vinblastine/Vinblastine_Sethi1984_reference.md) | Sethi VS et al., Pharmacokinetics of vincristine, vinbla…, Cancer chemotherapy and pha… (1984) | [10.1007/BF00255905](https://doi.org/10.1007/BF00255905) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhou_1990](drugs/drug_vinblastine/Vinblastine_Zhou1990_estimated_parameters_cls_l_kg.md) | Zhou XJ et al., In vivo and in vitro pharmacokinetics a…, European journal of drug me… (1990) | [10.1007/BF03190222](https://doi.org/10.1007/BF03190222) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhou_1990](drugs/drug_vinblastine/Vinblastine_Zhou1990_estimated_parameters_vt_l_kg.md) | Zhou XJ et al., In vivo and in vitro pharmacokinetics a…, European journal of drug me… (1990) | [10.1007/BF03190222](https://doi.org/10.1007/BF03190222) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhou_1990](drugs/drug_vinblastine/Vinblastine_Zhou1990_first_exponential_at1_2_g_ml_h.md) | Zhou XJ et al., In vivo and in vitro pharmacokinetics a…, European journal of drug me… (1990) | [10.1007/BF03190222](https://doi.org/10.1007/BF03190222) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Alothman_2018](drugs/drug_vinblastine/pd_Alothman_2018_IC50.md) | Alothman EA et al., Anticancer effect of Cenchrus ciliaris L, Saudi pharmaceutical journa… (2018) | [10.1016/j.jsps.2018.05.003](https://doi.org/10.1016/j.jsps.2018.05.003) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Cisternino_2003](drugs/drug_vinblastine/pd_Cisternino_2003_J_net.md) | Cisternino S et al., In vivo saturation of the transport of…, Pharmaceutical research (2003) | [10.1023/a:1026187301648](https://doi.org/10.1023/a:1026187301648) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Cisternino_2003](drugs/drug_vinblastine/pd_Cisternino_2003_brain_flux.md) | Cisternino S et al., In vivo saturation of the transport of…, Pharmaceutical research (2003) | [10.1023/a:1026187301648](https://doi.org/10.1023/a:1026187301648) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Heuser_2005](drugs/drug_vinblastine/pd_Heuser_2005_Growth_inhibition.md) | Heuser M et al., Cytotoxicity determination without phot…, Cancer letters (2005) | [10.1016/j.canlet.2004.10.031](https://doi.org/10.1016/j.canlet.2004.10.031) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Heuser_2005](drugs/drug_vinblastine/pd_Heuser_2005_growth_inhibition.md) | Heuser M et al., Cytotoxicity determination without phot…, Cancer letters (2005) | [10.1016/j.canlet.2004.10.031](https://doi.org/10.1016/j.canlet.2004.10.031) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lee_2004](drugs/drug_vinblastine/pd_Lee_2004_A_max.md) | Lee Y et al., Increased anti-P-glycoprotein activity…, Journal of medicinal chemis… (2004) | [10.1021/jm049949c](https://doi.org/10.1021/jm049949c) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lee_2004](drugs/drug_vinblastine/pd_Lee_2004_Amax.md) | Lee Y et al., Increased anti-P-glycoprotein activity…, Journal of medicinal chemis… (2004) | [10.1021/jm049949c](https://doi.org/10.1021/jm049949c) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lee_2004](drugs/drug_vinblastine/pd_Lee_2004_IC50.md) | Lee Y et al., Increased anti-P-glycoprotein activity…, Journal of medicinal chemis… (2004) | [10.1021/jm049949c](https://doi.org/10.1021/jm049949c) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lee_2004](drugs/drug_vinblastine/pd_Lee_2004_IC_50.md) | Lee Y et al., Increased anti-P-glycoprotein activity…, Journal of medicinal chemis… (2004) | [10.1021/jm049949c](https://doi.org/10.1021/jm049949c) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Martin_1999](drugs/drug_vinblastine/pd_Martin_1999_NA.md) | Martin C et al., The molecular interaction of the high a…, British journal of pharmaco… (1999) | [10.1038/sj.bjp.0702807](https://doi.org/10.1038/sj.bjp.0702807) |
| <span class="pk-badge pk-badge--green">extracted</span> | [McKay_1993](drugs/drug_vinblastine/pd_McKay_1993_nAChR_activity.md) | McKay DB et al., Nicotinic and nonnicotinic receptor-med…, Proceedings of the Society… (1993) | [10.3181/00379727-203-43614](https://doi.org/10.3181/00379727-203-43614) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Parry_1996](drugs/drug_vinblastine/pd_Parry_1996_SA.md) | Parry JM et al., The detection and evaluation of aneugen…, Mutation research (1996) | [10.1016/0027-5107(95)00242-1](https://doi.org/10.1016/0027-5107(95)00242-1) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Piwnica-Worms_1995](drugs/drug_vinblastine/pd_Piwnica_Worms_1995_N_A.md) | Piwnica-Worms D et al., Characterization of multidrug resistanc…, Biochemistry (1995) | [10.1021/bi00038a015](https://doi.org/10.1021/bi00038a015) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Piwnica-Worms_1995](drugs/drug_vinblastine/pd_Piwnica_Worms_1995_Tc_SESTAMIBI.md) | Piwnica-Worms D et al., Characterization of multidrug resistanc…, Biochemistry (1995) | [10.1021/bi00038a015](https://doi.org/10.1021/bi00038a015) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Zhao_2003](drugs/drug_vinblastine/pd_Zhao_2003_CD11a.md) | Zhao C et al., Exposure to paclitaxel or vinblastine d…, Cancer immunology, immunoth… (2003) | [10.1007/s00262-002-0357-4](https://doi.org/10.1007/s00262-002-0357-4) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Zhao_2003](drugs/drug_vinblastine/pd_Zhao_2003_CD11a_expression.md) | Zhao C et al., Exposure to paclitaxel or vinblastine d…, Cancer immunology, immunoth… (2003) | [10.1007/s00262-002-0357-4](https://doi.org/10.1007/s00262-002-0357-4) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Zhao_2003](drugs/drug_vinblastine/pd_Zhao_2003_CD54.md) | Zhao C et al., Exposure to paclitaxel or vinblastine d…, Cancer immunology, immunoth… (2003) | [10.1007/s00262-002-0357-4](https://doi.org/10.1007/s00262-002-0357-4) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Zhao_2003](drugs/drug_vinblastine/pd_Zhao_2003_CD54_expression.md) | Zhao C et al., Exposure to paclitaxel or vinblastine d…, Cancer immunology, immunoth… (2003) | [10.1007/s00262-002-0357-4](https://doi.org/10.1007/s00262-002-0357-4) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Zhao_2003](drugs/drug_vinblastine/pd_Zhao_2003_Conjugate_formation.md) | Zhao C et al., Exposure to paclitaxel or vinblastine d…, Cancer immunology, immunoth… (2003) | [10.1007/s00262-002-0357-4](https://doi.org/10.1007/s00262-002-0357-4) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Zhao_2003](drugs/drug_vinblastine/pd_Zhao_2003_Cytolysis_by_AK_T_cells.md) | Zhao C et al., Exposure to paclitaxel or vinblastine d…, Cancer immunology, immunoth… (2003) | [10.1007/s00262-002-0357-4](https://doi.org/10.1007/s00262-002-0357-4) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Zhao_2003](drugs/drug_vinblastine/pd_Zhao_2003_lysis.md) | Zhao C et al., Exposure to paclitaxel or vinblastine d…, Cancer immunology, immunoth… (2003) | [10.1007/s00262-002-0357-4](https://doi.org/10.1007/s00262-002-0357-4) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Dessilly_2014](drugs/drug_vinblastine/pgx_Dessilly_2014_ABCB1_Q100.md) | Dessilly G et al., ABCB1 1199G&gt;A genetic polymorphism (Rs2…, PloS one (2014) | [10.1371/journal.pone.0091555](https://doi.org/10.1371/journal.pone.0091555) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Tjeerdema_2024](drugs/drug_vinblastine/pgx_Tjeerdema_2024_ABCB1_Q100.md) | Tjeerdema E et al., Semi-automated, high-content imaging of…, Journal of experimental zoo… (2024) | [10.1002/jez.b.23231](https://doi.org/10.1002/jez.b.23231) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP3A5** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Tsuchiya_2008](drugs/drug_vinblastine/pgx_Tsuchiya_2008_CYP3A5_Q100.md) | Tsuchiya N et al., Drug related genetic polymorphisms affe…, The Journal of urology (2008) | [10.1016/j.juro.2008.08.035](https://doi.org/10.1016/j.juro.2008.08.035) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 740 matched, 94 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 6  ·  extracted 4  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Achanta_2016 | not_relevant | 0 | 0 | The study identifies the CYP3A12 enzyme responsible for vinblastine metabolism in dogs using in vitro assays but does not report any genetic variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| PD | Alothman_2018 | not_relevant | 2 | 1 | The paper reports IC50 values for plant extracts and vinblastine in cell lines, but this is a static cytotoxicity assay, not a pharmacodynamic (exposure-response) or dose-response relationship analysis with derivable PD parameters like Emax or EC50 in a PK/PD context. |
| PGx | Altés_2013 | not_relevant | 2 | 5 | The paper reports associations between gene polymorphisms and clinical outcomes (response rate, survival) rather than specific pharmacokinetic or pharmacodynamic parameters of vinblastine. |
| popPK | Amodeo_2025 | irrelevant | 0 | 0 | The study focuses on vinorelbine (with vinblastine used only as an internal standard) and reports in-vitro uptake/efflux data rather than quantitative population pharmacokinetic parameters for vinblastine. |
| PD | Amodeo_2025 | not_relevant | 0 | 0 | The paper focuses on vinorelbine and doxorubicin, not vinblastine, and reports PK/uptake changes rather than a PD exposure-response model with numeric parameters. |
| popPK | Banu_2026 | irrelevant | 0 | 0 | The paper is a computational study on HMG-CoA reductase inhibitors from Mikania cordata and does not report pharmacokinetic parameters for vinblastine. |
| PD | Banu_2026 | not_relevant | 0 | 0 | The paper is a computational study on HMG-CoA reductase inhibitors from Mikania cordata and does not involve vinblastine or report any pharmacodynamic or exposure-response data. |
| PGx | Bellmunt_2006 | not_relevant | 0 | 0 | The paper discusses gemcitabine and general chemotherapy optimization for urothelial carcinoma, with no specific data on pharmacogenomic effects on vinblastine PK/PD. |
| PGx | Chagas_2019 | not_relevant | 0 | 0 | The paper investigates the binding properties of vinblastine metabolites to receptors and tubulin, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Cheng_2026 | irrelevant | 0 | 0 | The paper is a review of pharmacometrics for antibody-drug conjugates (ADCs) and does not report quantitative PK parameters for vinblastine. |
| PD | Cheng_2026 | not_relevant | 1 | 0 | The paper is a review of pharmacometric methods for antibody-drug conjugates and does not report specific numeric PD parameters or exposure-response relationships for vinblastine. |
| popPK | Cisternino_2003 | irrelevant | 2 | 3 | The study reports mechanistic P-gp transport kinetics (IC50, Jmax) for vinblastine at the blood-brain barrier in rats, not standard population pharmacokinetic parameters like clearance (CL) or volume of distribution (V). |
| PGx | Clouser_2022 | not_relevant | 0 | 0 | The paper investigates the structural dynamics of the P-glycoprotein transporter using vinblastine as a substrate, but it does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Culine_2023 | not_relevant | 0 | 0 | The paper focuses on clinical outcomes and pathological response in bladder cancer patients and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of vinblastine. |
| PGx | Cuprych-Belter_2025 | not_relevant | 0 | 0 | The study investigates acquired chemoresistance in cell lines via gene expression changes, not the effect of specific human genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Dessilly_2014 | not_relevant | 2 | 5 | The paper focuses on tacrolimus pharmacogenomics; vinblastine is only mentioned as a secondary substrate showing a qualitative difference in transport efficiency, without specific PK/PD parameter reporting for vinblastine. |
| PGx | Guancial_2015 | not_relevant | 0 | 0 | The paper is a review of genomics in bladder cancer management and does not report pharmacogenomic effects on the PK or PD of vinblastine. |
| PGx | Herédi-Szabó_2013 | not_relevant | 0 | 0 | The paper describes an in vitro assay for P-gp inhibition and drug-drug interactions, not a pharmacogenomic study linking gene variants to PK/PD parameters. |
| popPK | Holtz_2026 | irrelevant | 0 | 0 | The paper focuses on the development of biosensors for monoterpene indole alkaloid production in yeast and does not report any pharmacokinetic parameters for vinblastine. |
| PD | Holtz_2026 | not_relevant | 0 | 0 | The paper focuses on metabolic engineering and biosensor development for MIA production, not on the pharmacodynamics or exposure-response of vinblastine as a drug. |
| PGx | Huisman_2005 | not_relevant | 0 | 0 | The paper focuses on MRP2 transport of taxanes (paclitaxel/docetaxel) and probenecid interactions; vinblastine is only mentioned as a secondary substrate for transport stimulation, with no pharmacogenomic analysis of its PK/PD parameters. |
| PGx | Kantrowitz-Gordon_2018 | not_relevant | 0 | 0 | The paper reports the pharmacokinetics of dacarbazine in pregnancy, not the effect of a gene variant on vinblastine. |
| popPK | Keyl_2025 | irrelevant | 0 | 0 | The paper is a machine learning study on drug response prediction and does not report pharmacokinetic parameters for vinblastine. |
| PD | Keyl_2025 | not_relevant | 0 | 0 | The paper describes a machine learning framework (NeurixAI) for predicting drug response based on gene expression and does not report pharmacokinetic or pharmacodynamic parameters (e.g., Emax, EC50) for vinblastine or any other drug. |
| PGx | Kolwankar_2005 | not_relevant | 0 | 0 | The study investigates the expression and function of transporters in placental tissue and the effect of smoking, but does not report pharmacogenomic effects of gene variants on vinblastine PK/PD parameters. |
| popPK | Lee_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P-gp inhibitors where vinblastine is used only as a surrogate marker for efflux pump activity, not as the subject of pharmacokinetic analysis. |
| PD | Lee_2004 | not_relevant | 0 | 0 | The paper reports pharmacological activity (EC50/IC50) of baicalein derivatives on P-gp and cell growth, but does not report a pharmacodynamic (exposure-response) relationship for vinblastine itself. |
| popPK | Levêque_1996 | irrelevant | 1 | 0 | The paper is a review focused on the pharmacokinetics of vinorelbine, and while it mentions vinblastine as a comparator, it does not report quantitative PK parameters for vinblastine. |
| PD | Levêque_1996 | not_relevant | 0 | 0 | The paper is a review of the pharmacokinetics of vinorelbine, not vinblastine, and does not report any pharmacodynamic or exposure-response data. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic/behavioral analysis of anesthetic sensitivity in mice and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for vinblastine. |
| popPK | Martin_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P-gp binding kinetics, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for vinblastine. |
| PD | Martin_1999 | not_relevant | 3 | 2 | The paper reports binding kinetics (Kd, Bmax) and an EC50 for the P-gp modulator XR9576, but does not provide a pharmacodynamic exposure-response or dose-response model for vinblastine itself. |
| popPK | McKay_1993 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study investigating vinblastine's effects on nicotinic acetylcholine receptors and muscle tension, reporting no pharmacokinetic parameters. |
| popPK | Mitchell_2025 | irrelevant | 0 | 0 | The paper is a genomic study on the long-term mutational effects of chemotherapy on blood cells and does not report any pharmacokinetic parameters for vinblastine. |
| PD | Mitchell_2025 | not_relevant | 0 | 0 | The paper investigates long-term genomic mutation burdens and cell population structures in normal blood cells following chemotherapy exposure, but it does not report any pharmacokinetic data, concentration-effect relationships, or numeric pharmacodynamic parameters (such as Emax or EC50) for vinblastine or any other drug. |
| popPK | Mokaleng_2009 | irrelevant | 0 | 0 | The study is an in-vitro radiobiology experiment measuring cytotoxicity (EC50) and radiosensitivity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Mokaleng_2009 | not_relevant | 1 | 2 | The study is an in vitro radiobiology experiment using cell lines, not a population pharmacodynamic or exposure-response modeling study in humans. |
| PGx | Nawrocki_2002 | not_relevant | 0 | 0 | The paper is a review of bladder cancer treatment and does not report pharmacogenomic effects on the PK or PD of vinblastine. |
| popPK | Nelson_1979 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of vindesine, not vinblastine, which is only mentioned as a comparator. |
| PD | Padhi_2009 | not_relevant | 0 | 0 | The paper discusses cinacalcet, not vinblastine. |
| PGx | Padhi_2009 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of cinacalcet, not vinblastine, and does not report pharmacogenomic effects. |
| PD | Parry_1996 | not_relevant | 2 | 1 | The paper describes qualitative morphological changes (spindle aberrations) at a single dose of vinblastine without providing numeric concentration-effect data, PK parameters, or a fitted PD model. |
| popPK | Petric_2023 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of vinpocetine and its metabolite AVA, not vinblastine. |
| PD | Petric_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for the metabolite AVA and performs PK simulations, but it explicitly states that there is no established exposure-response relationship and does not report any pharmacodynamic (PD) parameters or concentration-effect data. |
| popPK | Piwnica-Worms_1995 | irrelevant | 0 | 0 | The study focuses on the transport kinetics of Tc-SESTAMIBI as a P-glycoprotein probe, using vinblastine only as a comparator agent to characterize MDR modulation, and does not report pharmacokinetic parameters for vinblastine. |
| PD | Scher_1993 | not_relevant | 0 | 0 | The text is a review of chemotherapy for bladder cancer focusing on cisplatin and methotrexate, with no mention of vinblastine or any pharmacodynamic modeling. |
| popPK | Sharp_1995 | irrelevant | 0 | 0 | The paper is a cell biology study on microtubule transport in neurons using vinblastine as a mechanistic tool, not a pharmacokinetic study. |
| PGx | Smith_2010 | not_relevant | 0 | 0 | The paper investigates the mechanism of CYP3A4 induction by vinblastine via the NR1I2 receptor, but does not report how specific gene variants or genotypes alter the PK or PD parameters of vinblastine. |
| popPK | Suri_2020 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for brentuximab vedotin, not vinblastine. |
| PGx | Tjeerdema_2024 | not_relevant | 2 | 10 | The study reports pharmacogenomic effects in a sea urchin model organism, not in humans, and thus does not report human pharmacogenomic effects on PK/PD parameters. |
| popPK | Toso_1995 | irrelevant | 0 | 0 | The paper is a review of vinorelbine pharmacokinetics, and vinblastine is only mentioned as a comparator or structural precursor, not as the subject drug for PK parameter extraction. |
| PGx | Tsuchiya_2008 | not_relevant | 2 | 5 | The study reports an association between CYP3A5 genotype and clinical toxicity (leukocytopenia/WBC count) rather than a direct pharmacokinetic or pharmacodynamic parameter of vinblastine itself. |
| PGx | Witta_2023 | not_relevant | 0 | 0 | The paper develops a PBPK model for vinblastine in mouse, dog, and human but does not report pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The paper is a plant biosynthesis study on cardenolides and does not involve the drug vinblastine or report any pharmacokinetic parameters. |
| PD | Xu_2026 | not_relevant | 0 | 0 | The paper focuses on the biosynthesis and enzymatic mechanism of cardenolides in plants and does not contain any pharmacodynamic or exposure-response data for vinblastine. |
| PGx | Yang_2014 | not_relevant | 0 | 0 | The study investigates the effect of a drug (tivozanib) on transporter-mediated resistance in cell lines, not the effect of a human gene variant/genotype on the PK or PD of vinblastine. |
| popPK | Zhao_2003 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on immunology and cell adhesion, not a pharmacokinetic study, and contains no PK parameters for vinblastine. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of brentuximab vedotin (and its payload MMAE), with vinblastine serving only as a co-administered chemotherapy agent in the AVD regimen. |
| PD | Zhou_2025 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and exposure-response relationship for brentuximab vedotin (and its payload MMAE), not vinblastine; vinblastine is only mentioned as a concurrent chemotherapy agent. |
| PGx | Zhu_2022 | not_relevant | 2 | 0 | The paper uses a gene expression signature (including CYP2D6) to predict overall survival and general drug sensitivity via in-silico tools (pRRophetic), but does not report specific pharmacokinetic or pharmacodynamic parameter changes for vinblastine linked to genotypes. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_vinblastine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
