<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;sitagliptin&quot;}]"></div>

# sitagliptin

- **generic name:** sitagliptin
- **ATC codes:** `A10BD07`, `A10BD12`, `A10BD24`, `A10BD29`, `A10BH01`, `A10BH51`
- **DrugBank:** [DB01261](https://go.drugbank.com/drugs/DB01261)
- **groups:** approved, investigational

## About

**Description.** Sitagliptin is an oral dipeptidyl peptidase-4 (DPP-4) inhibitor used in conjunction with diet and exercise to improve glycemic control in patients with type 2 diabetes mellitus[FDA label,A2260,A2255,A2256]. The effect of this medication leads to glucose dependent increases in insulin and decreases in glucagon to improve control of blood sugar[FDA label,A2255]. Sitagliptin was granted FDA approval on October 16, 2006[L6061].

**Indication.** Sitagliptin is indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus. It is not used to treat type 1 diabetes or patients with a history of pancreatitis.[L41220]

It is also used in combination with [metformin] [L41215] or [ertugliflozin].[L41225]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 01:15 | 34:59 | 0/0/0 | 0/1/0 | 0/0/1 | 323,984/9,262 | ollama / qwen3.8:27b-mtp-q8_0 | 27 | 1/26 | 25/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Zhou_2024](drugs/drug_sitagliptin/pd_Zhou_2024_DPP_4.md) | Zhou C et al., Safety, tolerability, pharmacokinetics…, Frontiers in endocrinology (2024) | [10.3389/fendo.2024.1359407](https://doi.org/10.3389/fendo.2024.1359407) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ABCB1** | `Q17` · AUC∞ | transport | [Hwang_2022](drugs/drug_sitagliptin/pgx_Hwang_2022_ABCB1_Q17.md) | Hwang JG et al., Common ABCB1 SNP, C3435T could affect s…, Translational and clinical… (2022) | [10.12793/tcp.2022.30.e23](https://doi.org/10.12793/tcp.2022.30.e23) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 270 matched, 119 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_17 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kim_2013.pdf` | Kim BH et al., Pharmacokinetic-pharmacodynamic modelli…, Basic & clinical pharmacolo… (2013) | popPK | 9 | [10.1111/bcpt.12068](https://doi.org/10.1111/bcpt.12068) | [23510190](https://pubmed.ncbi.nlm.nih.gov/23510190) | The paper describes a PK/PD study with a compartmental model for sitagliptin, but the specific numeric parameter values are not present in the provided evidence. |
| `Vélez_2014.pdf` | Vélez de Mendizábal N et al., Modelling the sitagliptin effect on dip…, Clinical pharmacokinetics (2014) | popPK | 9 | [10.1007/s40262-013-0109-y](https://doi.org/10.1007/s40262-013-0109-y) | [24142388](https://pubmed.ncbi.nlm.nih.gov/24142388) | The paper describes a population PK/PD model for sitagliptin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Liu_2016.pdf` | Liu D et al., Quantitative prediction of human pharma…, European journal of pharmac… (2016) | pd | 5 | [10.1016/j.ejps.2016.04.020](https://doi.org/10.1016/j.ejps.2016.04.020) | [27108678](https://www.ncbi.nlm.nih.gov/pubmed/27108678) | metadata signals extractable PD data (PK/PD) |
| `Lu_2024.pdf` | Lu J et al., Use of a PK/PD Model to Select Cetaglip…, Clinical pharmacokinetics (2024) | pd | 5 | [10.1007/s40262-024-01427-7](https://doi.org/10.1007/s40262-024-01427-7) | [39367290](https://www.ncbi.nlm.nih.gov/pubmed/39367290) | metadata signals extractable PD data (PK/PD) |
| `Sangle_2018.pdf` | Sangle GV et al., Evaluation of pharmacokinetic and pharm…, European journal of clinica… (2018) | pd | 5 | [10.1007/s00228-018-2433-5](https://doi.org/10.1007/s00228-018-2433-5) | [29511780](https://www.ncbi.nlm.nih.gov/pubmed/29511780) | metadata signals extractable PD data (PK/PD) |
| `Alhakamy_2021.pdf` | Alhakamy NA et al., Evaluation of the Antiviral Activity of…, Pharmaceuticals (Basel, Swi… (2021) | pd | 4 | [10.3390/ph14030178](https://doi.org/10.3390/ph14030178) | [33668390](https://www.ncbi.nlm.nih.gov/pubmed/33668390) | metadata signals extractable PD data (IC50) |
| `Gupta_2018.pdf` | Gupta A et al., Citrus bioflavonoids dipeptidyl peptida…, Biochemical and biophysical… (2018) | pd | 4 | [10.1016/j.bbrc.2018.04.156](https://doi.org/10.1016/j.bbrc.2018.04.156) | [29698678](https://www.ncbi.nlm.nih.gov/pubmed/29698678) | metadata signals extractable PD data (IC50) |
| `Mhadhbi_2025.pdf` | Mhadhbi N et al., Experimental and Computational Insights…, ACS omega (2025) | pd | 4 | [10.1021/acsomega.5c01220](https://doi.org/10.1021/acsomega.5c01220) | [41244482](https://www.ncbi.nlm.nih.gov/pubmed/41244482) | metadata signals extractable PD data (IC50) |
| `Quek_2020.pdf` | Quek A et al., Identification of Dipeptidyl Peptidase-…, Molecules (Basel, Switzerla… (2020) | pd | 4 | [10.3390/molecules26010001](https://doi.org/10.3390/molecules26010001) | [33374962](https://www.ncbi.nlm.nih.gov/pubmed/33374962) | metadata signals extractable PD data (IC50) |
| `Salar_2024.pdf` | Salar U et al., Biochemical evaluation and ligand bindi…, Bioorganic chemistry (2024) | pd | 4 | [10.1016/j.bioorg.2024.107153](https://doi.org/10.1016/j.bioorg.2024.107153) | [38335754](https://www.ncbi.nlm.nih.gov/pubmed/38335754) | metadata signals extractable PD data (IC50) |
| `Wu_2024.pdf` | Wu W et al., Exploring dipeptidyl peptidase-IV inhib…, Journal of food science (2024) | pd | 4 | [10.1111/1750-3841.17525](https://doi.org/10.1111/1750-3841.17525) | [39617869](https://www.ncbi.nlm.nih.gov/pubmed/39617869) | metadata signals extractable PD data (IC50) |
| `Aquilante_2013.pdf` | Aquilante CL et al., Effect of ABCB1 polymorphisms and atorv…, European journal of clinica… (2013) | pgx | 8 | [10.1007/s00228-013-1475-y](https://doi.org/10.1007/s00228-013-1475-y) | [23407853](https://www.ncbi.nlm.nih.gov/pubmed/23407853) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Kalliokoski_2010.pdf` | Kalliokoski A et al., SLCO1B1 polymorphism and oral antidiabe…, Basic & clinical pharmacolo… (2010) | pgx | 8 | [10.1111/j.1742-7843.2010.00581.x](https://doi.org/10.1111/j.1742-7843.2010.00581.x) | [20406215](https://www.ncbi.nlm.nih.gov/pubmed/20406215) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Golightly_2012.pdf` | Golightly LK et al., Comparative clinical pharmacokinetics o…, Clinical pharmacokinetics (2012) | pgx | 7 | [10.1007/BF03261927](https://doi.org/10.1007/BF03261927) | [22686547](https://www.ncbi.nlm.nih.gov/pubmed/22686547) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Krishna_2007.pdf` | Krishna R et al., Effect of a single cyclosporine dose on…, Journal of clinical pharmac… (2007) | pgx | 7 | [10.1177/0091270006296523](https://doi.org/10.1177/0091270006296523) | [17244767](https://www.ncbi.nlm.nih.gov/pubmed/17244767) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Mistry_2008.pdf` | Mistry GC et al., Sitagliptin, an dipeptidyl peptidase-4…, British journal of clinical… (2008) | pgx | 7 | [10.1111/j.1365-2125.2008.03148.x](https://doi.org/10.1111/j.1365-2125.2008.03148.x) | [18503607](https://www.ncbi.nlm.nih.gov/pubmed/18503607) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Siva_2025.pdf` | Siva B et al., Integrative CYP450 and network pharmaco…, Biochemical pharmacology (2025) | pgx | 7 | [10.1016/j.bcp.2025.116960](https://doi.org/10.1016/j.bcp.2025.116960) | [40287102](https://www.ncbi.nlm.nih.gov/pubmed/40287102) | metadata signals extractable PGX data (CYP450, PK/PD-context) |

<sub>queue written 2026-09-16T01:08:03.858725+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Alhakamy_2021 | not_relevant | 0 | 0 | The paper evaluates the antiviral activity of a nano-conjugate against SARS-CoV-2, which is unrelated to the pharmacodynamic (glucose-lowering) profile of sitagliptin in humans. |
| PGx | Aquilante_2013 | not_relevant | 0 | 0 | The study reports that ABCB1 polymorphisms did not significantly influence sitagliptin pharmacokinetics. |
| PGx | Asakura_2015 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of vildagliptin, not sitagliptin. |
| PD | Baziar_2024 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition data (IC50, Ki) for novel compounds using sitagliptin only as a positive control, but does not report any pharmacodynamic or exposure-response relationship for sitagliptin itself. |
| PGx | Beitelshees_2023 | not_relevant | 0 | 0 | The paper reports acute pharmacodynamic responses to sitagliptin in a pilot study but does not report any association with genetic variants or genotypes. |
| PGx | Beitelshees_2024 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic response to sitagliptin in healthy volunteers but does not report any association with specific gene variants or genotypes. |
| popPK | Bossi_2020 | irrelevant | 0 | 0 | The paper is a real-world observational study focusing on clinical outcomes (HbA1c, CV risk) and does not report any pharmacokinetic parameters for sitagliptin. |
| popPK | Carlsson_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of semaglutide, with sitagliptin serving only as a comparator in the trial design and not as the subject drug for PK parameter estimation. |
| PD | Carlsson_2018 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) analysis for semaglutide, not a pharmacodynamic (PD) or exposure-response analysis, and does not provide numeric PD parameters. |
| popPK | Carpio_2025 | irrelevant | 0 | 0 | The paper describes a QSAR web server for predicting DPP4 inhibitory activity (IC50) and does not report any pharmacokinetic parameters for sitagliptin. |
| PD | Carpio_2025 | not_relevant | 0 | 0 | The paper describes a QSAR web server for predicting DPP4 inhibitors and does not report any pharmacodynamic or exposure-response data for sitagliptin. |
| PD | Charoo_2022 | not_relevant | 1 | 0 | The paper is a BCS biowaiver monograph that qualitatively reviews pharmacodynamic characteristics but does not report or derive numeric PD parameters or exposure-response relationships. |
| PGx | Cheng_2022 | not_relevant | 0 | 0 | The paper describes enzyme engineering for the industrial synthesis of sitagliptin, not the pharmacogenomics of its clinical pharmacokinetics or pharmacodynamics. |
| PD | Chung_2024 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for new analogs and sitagliptin, but does not provide an exposure-response, dose-response curve, or PK/PD model for sitagliptin. |
| PGx | Cordiner_2024 | not_relevant | 2 | 5 | The paper reports a subanalysis by KNCJ11 genotype, but the primary focus is on the pharmacodynamic synergy of drug combination, not a specific pharmacogenomic effect on sitagliptin's PK/PD parameters. |
| popPK | Dawra_2019 | irrelevant | 2 | 0 | Sitagliptin is a co-administered comparator in a drug interaction study focused on ertugliflozin, and no quantitative disposition parameters (CL, V, etc.) for sitagliptin are provided in the evidence. |
| popPK | Dinu_2025 | irrelevant | 0 | 0 | The paper is a review of sulfonamides and antioxidants for diabetes management and does not report pharmacokinetic parameters for sitagliptin. |
| PD | Dinu_2025 | not_relevant | 0 | 0 | The paper is a review of sulfonamides (sulfonylureas) and antioxidants, and does not mention sitagliptin or report any pharmacodynamic parameters. |
| popPK | Dong_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of adefovir, with sitagliptin serving only as a co-administered probe drug in a cocktail study. |
| PD | Dong_2024 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of adefovir and does not report any pharmacodynamic or exposure-response relationship for sitagliptin. |
| PD | Dos_2022 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition IC50 values for sitagliptin as a reference standard, but does not report any pharmacokinetic data, exposure-response relationship, or pharmacodynamic model for sitagliptin in vivo or in a PK/PD context. |
| PGx | Eitah_2025 | not_relevant | 0 | 0 | The paper investigates the anti-cancer effects of sitagliptin in a mouse model and cell lines, but does not report any pharmacogenomic effects (gene variants) on its pharmacokinetic or pharmacodynamic parameters. |
| PD | Fayyaz_2022 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for novel compounds and compares them to sitagliptin, but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for sitagliptin. |
| popPK | Fediuk_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ertugliflozin, not sitagliptin. |
| PD | Fediuk_2021 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) model for ertugliflozin, not sitagliptin, and contains no pharmacodynamic or exposure-response analysis. |
| PD | Fuh_2021 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for new chemical analogs, not a pharmacodynamic or exposure-response relationship for sitagliptin itself. |
| popPK | Gibbs_2012 | irrelevant | 0 | 0 | The paper is a meta-analysis of efficacy (HbA1c response) and DPP-4 inhibition, not a pharmacokinetic study reporting disposition parameters like clearance or volume for sitagliptin. |
| PGx | Golightly_2012 | not_relevant | 0 | 0 | The paper is a review comparing the pharmacokinetics of different DPP-4 inhibitors and does not report any pharmacogenomic effects (gene variants) on sitagliptin PK/PD. |
| PD | Gomha_2015 | not_relevant | 1 | 0 | The paper reports in vitro IC50 values for novel compounds compared to sitagliptin, but does not provide a pharmacokinetic/pharmacodynamic model, exposure-response analysis, or numeric PD parameters (like Emax, EC50, or slope) for sitagliptin itself. |
| PD | Gupta_2011 | not_relevant | 1 | 0 | The text is a general review introduction discussing the mechanism of action and clinical context of gliptins, but it does not report specific numeric PD parameters or exposure-response data for sitagliptin. |
| popPK | Hayakawa_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic analysis of HbA1c dose-response using machine learning, not a pharmacokinetic study, and reports no PK parameters for sitagliptin. |
| popPK | He_2025 | irrelevant | 0 | 0 | The paper is a computational and in-vitro study on DPP4 inhibitor screening and binding mechanisms, containing no pharmacokinetic parameters for sitagliptin. |
| PD | He_2025 | not_relevant | 0 | 0 | The paper focuses on in vitro enzyme inhibition (IC50) and molecular dynamics simulations of DPP4 inhibitors, not in vivo pharmacodynamics or exposure-response relationships for sitagliptin. |
| PD | Herman_2006 | not_relevant | 3 | 2 | The paper reports group-level mean effects (e.g., 90% DPP-4 inhibition, 2.7-fold GLP-1 increase) for a fixed dose, but does not provide individual concentration-effect data, a PK/PD model, or numeric parameters like Emax/EC50. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper presents a general methodological framework for coupled PK models using generic drugs (X and Y) or unrelated examples, and does not report specific quantitative PK parameters for sitagliptin. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper focuses on a coupled pharmacokinetic (PK) model for drug-drug interactions (metoprolol and captopril) and does not report any pharmacodynamic (PD) or exposure-response relationships for sitagliptin. |
| PGx | Hwang_2022 | not_relevant | 5 | 8 | The study reports no statistically significant effect of ABCB1 SNPs on sitagliptin PK parameters. |
| popPK | Inoue_2019 | irrelevant | 0 | 0 | The study is a model-based meta-analysis of pharmacodynamic efficacy (FPG/HbA1c) and does not report pharmacokinetic parameters for sitagliptin. |
| PD | Jeong_2026 | not_relevant | 1 | 0 | The paper reports qualitative therapeutic effects of sitagliptin in a PD model but does not provide any numeric concentration-effect data, dose-response curves, or PD parameters. |
| PGx | Jia_2025 | not_relevant | 0 | 0 | The paper describes the directed evolution of a transaminase enzyme for the biosynthesis of sitagliptin analogs, not the effect of human genetic variants on sitagliptin pharmacokinetics or pharmacodynamics. |
| popPK | Kakara_2016 | irrelevant | 0 | 0 | The study is a population pharmacodynamic (PPD) analysis of HbA1c lowering effects, not a pharmacokinetic study, and reports no PK parameters for sitagliptin. |
| PGx | Kalliokoski_2010 | not_relevant | 0 | 0 | The paper explicitly states that the liver is not important for the elimination of sitagliptin and that SLCO1B1 polymorphism is unlikely to affect its response. |
| popPK | Kan_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of semaglutide in MASH and does not report pharmacokinetic parameters for sitagliptin. |
| PD | Kan_2025 | not_relevant | 0 | 0 | The paper is a meta-analysis of semaglutide, not sitagliptin, and does not report pharmacodynamic parameters for the target drug. |
| PD | Kang_2023 | not_relevant | 1 | 0 | The paper focuses on formulation development and bioequivalence, mentioning "pharmacodynamic characteristics" only qualitatively without providing any numeric PD parameters or exposure-response data. |
| popPK | Kasahara_2016 | irrelevant | 1 | 0 | Sitagliptin is a co-administered comparator drug in a study focused on tofogliflozin, and no quantitative PK parameters for sitagliptin are reported in the evidence. |
| PD | Kasahara_2016 | not_relevant | 0 | 0 | The study is a drug-drug interaction trial focusing on tofogliflozin; it reports no concentration-effect or dose-response modeling for sitagliptin, only qualitative statements that sitagliptin did not affect tofogliflozin's pharmacodynamics. |
| popPK | Kashmoola_2026 | irrelevant | 0 | 0 | The paper is a narrative review on polypharmacy and bone health in T2DM, mentioning sitagliptin only in the context of bone effects without reporting any pharmacokinetic parameters. |
| PD | Kashmoola_2026 | not_relevant | 0 | 0 | The paper is a narrative review on polypharmacy and bone health in T2DM and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for sitagliptin. |
| PD | Kaur_2022 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for new peptide esters compared to sitagliptin, but does not provide a pharmacokinetic/pharmacodynamic model, exposure-response relationship, or numeric PD parameters (like Emax, EC50 in vivo, or slope) for sitagliptin. |
| PD | Khamees_2024 | not_relevant | 2 | 2 | The paper reports in vitro IC50 values for sitagliptin as a reference control, but does not present a pharmacokinetic or pharmacodynamic model, exposure-response analysis, or dose-response curve for sitagliptin in vivo or in a PK/PD context. |
| popPK | Kim_2013 | relevant | 9 | 0 | The paper describes a PK/PD study with a compartmental model for sitagliptin, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Kim_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacological mechanism of DA-1241, with sitagliptin serving only as a comparator agent in efficacy studies, and no PK parameters are reported. |
| PD | Kim_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of DA-1241; sitagliptin is only used as a comparator in combination studies without any reported exposure-response or dose-response analysis for sitagliptin itself. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of evogliptin, not sitagliptin. |
| PD | Kim_2025 | not_relevant | 0 | 0 | The paper reports a PD model for evogliptin, not sitagliptin. |
| popPK | Koomen_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of dapagliflozin, not the pharmacokinetics of sitagliptin. |
| PD | Koomen_2020 | not_relevant | 0 | 0 | The paper analyzes the exposure-response relationship for dapagliflozin, not sitagliptin. |
| PGx | Krishna_2007 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (cyclosporine) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | La_2025 | irrelevant | 0 | 0 | The study focuses on GPR119 agonists, with sitagliptin serving only as a comparator agent, and no PK parameters for sitagliptin are reported. |
| PD | La_2025 | not_relevant | 0 | 0 | The paper focuses on the discovery of GPR119 agonists and only uses sitagliptin as a qualitative comparator in efficacy studies, without reporting any exposure-response or dose-response PD parameters for sitagliptin. |
| PD | Lee_2026 | not_relevant | 3 | 2 | The paper reports an IC50 for isobavachalcone and compares its in vivo efficacy to sitagliptin, but it does not provide a concentration-effect or dose-response curve or numeric PD parameters (Emax, EC50, slope) for sitagliptin itself. |
| popPK | Liu_2016 | irrelevant | 0 | 0 | no_text gate: only 169 chars of text extracted (&lt; 400) |
| PD | Liu_2016 | not_relevant | 0 | 0 | The paper focuses on imigliptin, not sitagliptin, and does not report PD parameters for the target drug. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dorzagliatin and empagliflozin, not sitagliptin. |
| PD | Liu_2026 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetic and pharmacodynamic interaction between dorzagliatin and empagliflozin, not sitagliptin. |
| popPK | Lu_2024 | irrelevant | 1 | 0 | The study focuses on cetagliptin as the subject drug, with sitagliptin serving only as a positive control, and no quantitative PK parameters for sitagliptin are provided in the evidence. |
| PD | Lu_2024 | not_relevant | 0 | 0 | The paper focuses on cetagliptin, not sitagliptin, and does not report PD parameters for the specified drug. |
| PGx | Mashayekhi_2025 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on the PD of liraglutide, not sitagliptin. |
| popPK | Melin_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dapagliflozin, not sitagliptin. |
| PD | Melin_2022 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of dapagliflozin and does not report any pharmacodynamic (PD) or exposure-response analysis for sitagliptin or any other drug. |
| PGx | Meng_2025 | not_relevant | 0 | 0 | The study evaluates the therapeutic efficacy of sitagliptin in a diabetic mouse model of COVID-19 but does not report pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| PD | Mhadhbi_2025 | not_relevant | 0 | 0 | The paper discusses a cobalt complex as a photocatalyst and enzyme inhibitor, not sitagliptin, and contains no pharmacodynamic or exposure-response data for the target drug. |
| popPK | Min_2025 | irrelevant | 0 | 0 | The paper is a review of GLP-1 receptor agonists (exenatide, liraglutide, etc.) and does not report pharmacokinetic parameters for sitagliptin. |
| PD | Min_2025 | not_relevant | 0 | 0 | The paper is a review of GLP-1 receptor agonists and does not contain any pharmacodynamic or exposure-response data for sitagliptin. |
| PGx | Mistry_2008 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction between sitagliptin and glyburide, not a pharmacogenomic effect of a gene variant on sitagliptin. |
| popPK | Muddather_2026 | irrelevant | 0 | 0 | The paper is a review of DPP-4 inhibitors in cancer and does not report any quantitative pharmacokinetic parameters for sitagliptin. |
| PD | Muddather_2026 | not_relevant | 1 | 0 | The text is a narrative review summarizing epidemiological and preclinical evidence without presenting specific PK/PD data, models, or numeric parameters for sitagliptin. |
| popPK | Nagao_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial (STREAM study) reporting glycemic and safety outcomes, not a pharmacokinetic study, and contains no PK parameters for sitagliptin. |
| PD | Nidhar_2023 | not_relevant | 1 | 1 | The paper reports in vitro IC50 values for novel compounds compared to sitagliptin, but does not provide an exposure-response or dose-response analysis for sitagliptin itself. |
| popPK | Othman_2026 | irrelevant | 0 | 0 | The study investigates linagliptin and cefixime, not sitagliptin. |
| PD | Othman_2026 | not_relevant | 0 | 0 | The paper focuses on the development and validation of an HPLC method and reports only pharmacokinetic parameters (Cmax, AUC) for linagliptin and cefixime, with no pharmacodynamic or exposure-response analysis. |
| popPK | Park_2015 | irrelevant | 0 | 0 | The paper focuses on the synthesis and pharmacodynamics of novel glucokinase activators, using sitagliptin only as a comparator in OGTT assays without reporting any pharmacokinetic parameters. |
| PD | Park_2015 | not_relevant | 0 | 0 | The paper focuses on the discovery of novel glucokinase activators; sitagliptin is mentioned only as a qualitative comparator in an OGTT study, with no PD model or exposure-response analysis for sitagliptin. |
| popPK | Posada_2025 | irrelevant | 0 | 0 | The study focuses on dulaglutide and its effect on gastric emptying, with sitagliptin not mentioned as the subject drug or as a co-administered agent in the provided evidence. |
| PD | Posada_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of dulaglutide and its effect on gastric emptying and co-administered drugs, not on the pharmacodynamics of sitagliptin. |
| PD | Quek_2020 | not_relevant | 0 | 0 | The paper focuses on the identification of natural product inhibitors of DPP-4 and alpha-amylase from Melicope glabra, not on the pharmacodynamics or exposure-response of the drug sitagliptin. |
| popPK | Rjoob_2025 | irrelevant | 0 | 0 | The paper is a bioinformatics study on knowledge graphs for drug repurposing and does not report any pharmacokinetic parameters for sitagliptin. |
| PD | Rjoob_2025 | not_relevant | 0 | 0 | The paper describes a knowledge graph for cardiovascular disease and drug repurposing, mentioning gliptins only as a candidate therapy without providing any pharmacokinetic or pharmacodynamic data for sitagliptin. |
| popPK | Rjoob_2026 | irrelevant | 0 | 0 | The paper is a machine learning study on cardiovascular disease knowledge graphs and does not report any pharmacokinetic parameters for sitagliptin. |
| PD | Rjoob_2026 | not_relevant | 0 | 0 | The paper describes a knowledge graph for cardiovascular disease and drug repurposing predictions but does not report any pharmacodynamic or exposure-response data for sitagliptin. |
| popPK | Saito_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ipragliflozin, not sitagliptin. |
| PD | Saito_2019 | not_relevant | 0 | 0 | The paper reports a PK/PD model for ipragliflozin, not sitagliptin. |
| PD | Salar_2024 | not_relevant | 0 | 0 | The paper focuses on biochemical and structural studies of a Staphylococcus aureus enzyme using NMR and docking, and does not contain any pharmacodynamic or exposure-response data for sitagliptin. |
| popPK | Salvatore_2026 | irrelevant | 0 | 0 | The paper is a phenome-wide association study of clinical outcomes (diagnoses) for diabetes medications, not a pharmacokinetic study, and contains no PK parameters for sitagliptin. |
| PD | Salvatore_2026 | not_relevant | 0 | 0 | The paper is a phenome-wide association study using electronic health records to compare clinical outcomes (diagnoses) between drug classes; it does not report pharmacokinetic data, exposure-response relationships, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for sitagliptin. |
| popPK | Sanches_2026 | irrelevant | 0 | 0 | The paper focuses on biomarkers for papillary thyroid cancer and does not involve sitagliptin or pharmacokinetic parameters. |
| PD | Sanches_2026 | not_relevant | 0 | 0 | The paper focuses on biomarker discovery for papillary thyroid cancer using machine learning and omics data, and does not contain any pharmacodynamic or exposure-response analysis for sitagliptin. |
| popPK | Saro_2026 | irrelevant | 2 | 0 | The study is a bioequivalence trial reporting only relative metrics (Cmax, AUC) without absolute quantitative disposition parameters (CL, V, ka) or a compartmental model, and no numeric values are provided in the evidence. |
| PGx | Scheen_2010 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions for DPP-4 inhibitors and does not report any pharmacogenomic effects (gene variants) on sitagliptin PK or PD. |
| popPK | Schultz_2026 | irrelevant | 0 | 0 | The paper studies the intracellular distribution of a FLAP antagonist (BRP-685) using Raman spectroscopy and does not report pharmacokinetic parameters for sitagliptin. |
| PD | Schultz_2026 | not_relevant | 0 | 0 | The paper focuses on the intracellular localization of a 5-lipoxygenase-activating protein antagonist (BRP-685) using Raman spectroscopy and does not report any pharmacodynamic or exposure-response data for sitagliptin. |
| PGx | Seo_2020 | not_relevant | 0 | 0 | The paper is a computational study on predicting drug side effects using similarity measures and does not report pharmacogenomic effects on PK/PD parameters. |
| PD | Sever_2020 | not_relevant | 3 | 2 | The paper reports an IC50 for sitagliptin as a reference standard in an in vitro assay, but does not provide a concentration-effect curve, slope, or any other numeric PD parameters for sitagliptin itself, nor does it model its PK/PD. |
| popPK | Shahzadi_2026 | irrelevant | 0 | 0 | The study investigates the antidiabetic effects of a plant extract (Fraxinus xanthoxyloides) and does not report any pharmacokinetic parameters for sitagliptin. |
| PD | Shahzadi_2026 | not_relevant | 0 | 0 | The paper studies a plant extract (Fraxinus xanthoxyloides) and does not report any pharmacodynamic or exposure-response data for sitagliptin. |
| PD | Siva_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetic interaction between Corilagin and Sitagliptin using CYP450 and network pharmacology, with no report of pharmacodynamic or exposure-response relationships. |
| PGx | Siva_2025 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (Corilagin affecting Sitagliptin PK) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Sommer_2024 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse drug reactions using regression models, not a pharmacokinetic study, and sitagliptin is only listed as a predictor variable for bleeding ADRs without any PK parameters. |
| PD | Sommer_2024 | not_relevant | 0 | 0 | The paper analyzes adverse drug reactions in polypharmacy using regression models on real-world data and does not report any pharmacodynamic, exposure-response, or dose-response relationships for sitagliptin. |
| PD | Sura_2026 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel compounds and compares them to sitagliptin, but does not provide a pharmacodynamic model, exposure-response relationship, or numeric PD parameters for sitagliptin itself. |
| PGx | Syam_2019 | not_relevant | 0 | 0 | The paper reports the design and synthesis of new DPP-4 inhibitors and their biological activity, but does not investigate the effect of genetic variants on the pharmacokinetics or pharmacodynamics of sitagliptin. |
| PGx | Tallón_2014 | not_relevant | 0 | 0 | The paper discusses a potential direct antidiabetic effect of telaprevir in a single case report and does not report any pharmacogenomic effects on the PK or PD of sitagliptin. |
| popPK | Tatosian_2013 | irrelevant | 2 | 0 | The study is a pharmacodynamic comparison of DPP-4 inhibition, and while PK parameters are mentioned, the specific numeric values for sitagliptin are in Table 2 which is cut off/not fully provided in the evidence. |
| popPK | Tham_2022 | irrelevant | 0 | 0 | The study focuses on exposure-response modeling for semaglutide and dulaglutide, not sitagliptin pharmacokinetics. |
| PD | Tham_2022 | not_relevant | 0 | 0 | The paper focuses on dulaglutide and semaglutide, not sitagliptin, and does not report PD parameters for the target drug. |
| popPK | Tyurenkov_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the novel compound ZB-16, with sitagliptin serving only as a comparator for hypoglycemic efficacy without reported PK parameters. |
| PD | Tyurenkov_2018 | not_relevant | 0 | 0 | The paper focuses on the novel compound ZB-16; sitagliptin is used only as a single-dose comparator in efficacy studies without any exposure-response modeling or derivation of PD parameters for sitagliptin. |
| popPK | Utzschneider_2025 | irrelevant | 0 | 0 | The study focuses on beta-cell function parameters (ISR, sensitivity) rather than pharmacokinetic disposition parameters (CL, V, ka) for sitagliptin. |
| PD | Vawhal_2023 | not_relevant | 1 | 1 | The paper reports a single IC50 value for sitagliptin as a reference standard in an in vitro enzyme assay, but does not provide an exposure-response or dose-response curve, nor does it report PK/PD modeling parameters. |
| PGx | Vincent_2007 | not_relevant | 0 | 0 | The paper describes general metabolism and excretion of sitagliptin in humans but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Vogel_2024 | irrelevant | 0 | 0 | The paper is a wastewater-based epidemiology study focused on substance use assessment and does not report pharmacokinetic parameters for sitagliptin. |
| PD | Vogel_2024 | not_relevant | 0 | 0 | The paper focuses on wastewater-based epidemiology and analytical methods for substance detection, containing no pharmacokinetic or pharmacodynamic data for sitagliptin. |
| popPK | Vélez_2014 | relevant | 9 | 0 | The paper describes a population PK/PD model for sitagliptin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| PD | Vélez_2014 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or results necessary to verify the presence of numeric PD parameters or an exposure-response relationship. |
| PD | Wu_2024 | not_relevant | 0 | 0 | The paper focuses on the enzymatic inhibition of DPP-IV by peptides from Tartary Buckwheat protein, not the pharmacodynamics of the drug sitagliptin. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel dual-target compounds, not a pharmacokinetic study of sitagliptin, and contains no PK parameters. |
| PD | Yang_2025 | not_relevant | 3 | 2 | The paper reports in vitro potency (IC50/EC50) for a new dual-target compound, not a pharmacodynamic exposure-response or dose-response relationship for sitagliptin itself. |
| popPK | Yang_2025_2 | irrelevant | 0 | 0 | The paper is a review on in silico modeling and AI for drug disposition across the lifespan and does not report specific pharmacokinetic parameters for sitagliptin. |
| PD | Yang_2025_2 | not_relevant | 0 | 0 | The paper is a review of in silico and AI modeling methods and does not report specific PD or exposure-response data for sitagliptin. |
| popPK | Yao_2023 | irrelevant | 0 | 0 | The study focuses on SGLT2 inhibitors (dapagliflozin, canagliflozin, empagliflozin) and does not involve sitagliptin. |
| PD | Yao_2023 | not_relevant | 0 | 0 | The paper focuses on SGLT2 inhibitors (dapagliflozin, canagliflozin, empagliflozin) and does not report any pharmacodynamic or exposure-response data for sitagliptin. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | The paper uses Mendelian randomization to identify DPP9 as a target for CAA and predicts sitagliptin binding via docking, but it does not report any pharmacogenomic effect on sitagliptin's PK or PD parameters. |
| popPK | Zhou_2024 | irrelevant | 2 | 2 | The study's primary subject is cetagliptin, with sitagliptin serving only as a positive control/comparator, and specific quantitative PK parameters for sitagliptin are not reported in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_sitagliptin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
