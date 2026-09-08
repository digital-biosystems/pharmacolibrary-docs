# carvedilol

- **generic name:** carvedilol
- **ATC codes:** `C07AG02`, `C07FX06`
- **DrugBank:** [DB01136](https://go.drugbank.com/drugs/DB01136)
- **groups:** approved, investigational

## About

**Description.** Carvedilol is a racemic mixture where the S(-) enantiomer is both a beta and alpha-1 adrenoceptor blocker, and the R(+) enantiomer is an alpha-1 adrenoceptor blocker.[L7889,L7892] It is currently used to treat heart failure, left ventricular dysfunction, and hypertension.[L7889,L7892] The dual action of carvedilol is advantageous in combination therapies as moderate doses of 2 drugs have a decreased incidence of adverse effects compared to high dose monotherapy in the treatment of moderate hypertension.[A182306]

Carvedilol was granted FDA approval on 14 September 1995.[L7889]

**Indication.** Carvedilol is indicated to treat mild to severe heart failure, left ventricular dysfunction after myocardial infarction with ventricular ejection fraction ≤40%, or hypertension.[L7889,L7892]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 2/5/0 | 1/1/0 | 0/0/18 | not captured | not captured | 47 | 44/0 | 18/29 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Albers_2008](drugs/drug_carvedilol/Carvedilol_Albers2008_reference.md) | Albers S et al., Population pharmacokinetics and dose si…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2007.03046.x](https://doi.org/10.1111/j.1365-2125.2007.03046.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hwang_2023](drugs/drug_carvedilol/Carvedilol_Hwang2023_reference.md) | Hwang S et al., Population Pharmacokinetic-Pharmacodyna…, Journal of Korean medical s… (2023) | [10.3346/jkms.2023.38.e173](https://doi.org/10.3346/jkms.2023.38.e173) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Nardotto_2017](drugs/drug_carvedilol/Carvedilol_Nardotto2017_reference.md) | Nardotto GHB et al., Population pharmacokinetics of carvedil…, European journal of pharmac… (2017) | [10.1016/j.ejps.2017.05.033](https://doi.org/10.1016/j.ejps.2017.05.033) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Nikolic_2013](drugs/drug_carvedilol/Carvedilol_Nikolic2013_reference.md) | Nikolic VN et al., Population pharmacokinetics of carvedil…, Journal of pharmaceutical s… (2013) | [10.1002/jps.23626](https://doi.org/10.1002/jps.23626) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Saito_2010](drugs/drug_carvedilol/Carvedilol_Saito2010_reference.md) | Saito M et al., Population pharmacokinetics of R- and S…, Biological & pharmaceutical… (2010) | [10.1248/bpb.33.1378](https://doi.org/10.1248/bpb.33.1378) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Sehrt_2011](drugs/drug_carvedilol/Carvedilol_Sehrt2011_reference.md) | Sehrt D et al., Carvedilol pharmacokinetics and pharmac…, Pharmacogenomics (2011) | [10.2217/pgs.11.20](https://doi.org/10.2217/pgs.11.20) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Yamamoto_2024](drugs/drug_carvedilol/Carvedilol_Yamamoto2024_reference.md) | Yamamoto PA et al., Rerouting cardiovascular management fol…, British journal of clinical… (2024) | [10.1111/bcp.16129](https://doi.org/10.1111/bcp.16129) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Hwang_2023](drugs/drug_carvedilol/pd_Hwang_2023_HR.md) | Hwang S et al., Population Pharmacokinetic-Pharmacodyna…, Journal of Korean medical s… (2023) | [10.3346/jkms.2023.38.e173](https://doi.org/10.3346/jkms.2023.38.e173) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yamamoto_2024](drugs/drug_carvedilol/pd_Yamamoto_2024_E.md) | Yamamoto PA et al., Rerouting cardiovascular management fol…, British journal of clinical… (2024) | [10.1111/bcp.16129](https://doi.org/10.1111/bcp.16129) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Honda_2005](drugs/drug_carvedilol/pgx_Honda_2005_CYP2D6_Q27.md) | Honda M et al., Effect of CYP2D6*10 on the pharmacokine…, Biological & pharmaceutical… (2005) | [10.1248/bpb.28.1476](https://doi.org/10.1248/bpb.28.1476) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Honda_2006](drugs/drug_carvedilol/pgx_Honda_2006_CYP2D6_Q27.md) | Honda M et al., Multiple regression analysis of pharmac…, Biological & pharmaceutical… (2006) | [10.1248/bpb.29.772](https://doi.org/10.1248/bpb.29.772) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Hwang_2023](drugs/drug_carvedilol/pgx_Hwang_2023_CYP2D6_Q27.md) | Hwang S et al., Population Pharmacokinetic-Pharmacodyna…, Journal of Korean medical s… (2023) | [10.3346/jkms.2023.38.e173](https://doi.org/10.3346/jkms.2023.38.e173) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Jung_2018](drugs/drug_carvedilol/pgx_Jung_2018_CYP2D6_Q27.md) | Jung E et al., Influence of CYP2D6 Polymorphism on the…, Journal of Korean medical s… (2018) | [10.3346/jkms.2018.33.e182](https://doi.org/10.3346/jkms.2018.33.e182) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Luzum_2017](drugs/drug_carvedilol/pgx_Luzum_2017_CYP2D6_Q27.md) | Luzum JA et al., CYP2D6 Genetic Variation and Beta-Block…, Pharmaceutical research (2017) | [10.1007/s11095-017-2104-8](https://doi.org/10.1007/s11095-017-2104-8) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q305` · kfm | formation | [Luzum_2017](drugs/drug_carvedilol/pgx_Luzum_2017_CYP2D6_Q305.md) | Luzum JA et al., CYP2D6 Genetic Variation and Beta-Block…, Pharmaceutical research (2017) | [10.1007/s11095-017-2104-8](https://doi.org/10.1007/s11095-017-2104-8) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Lymperopoulos_2015](drugs/drug_carvedilol/pgx_Lymperopoulos_2015_CYP2D6_Q27.md) | Lymperopoulos A et al., Impact of CYP2D6 Genetic Variation on t…, Current drug metabolism (2015) | [10.2174/1389200217666151105125425](https://doi.org/10.2174/1389200217666151105125425) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ADRB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Parker_2018](drugs/drug_carvedilol/pgx_Parker_2018_ADRB1_Q100.md) | Parker BM et al., Clinical pharmacogenomics of carvedilol…, Pharmacogenomics (2018) | [10.2217/pgs-2018-0115](https://doi.org/10.2217/pgs-2018-0115) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ADRB2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Parker_2018](drugs/drug_carvedilol/pgx_Parker_2018_ADRB2_Q100.md) | Parker BM et al., Clinical pharmacogenomics of carvedilol…, Pharmacogenomics (2018) | [10.2217/pgs-2018-0115](https://doi.org/10.2217/pgs-2018-0115) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Parker_2018](drugs/drug_carvedilol/pgx_Parker_2018_CYP2D6_Q27.md) | Parker BM et al., Clinical pharmacogenomics of carvedilol…, Pharmacogenomics (2018) | [10.2217/pgs-2018-0115](https://doi.org/10.2217/pgs-2018-0115) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **UGT1A1** | `Q27` · CL/F | metabolism | [Parker_2018](drugs/drug_carvedilol/pgx_Parker_2018_UGT1A1_Q27.md) | Parker BM et al., Clinical pharmacogenomics of carvedilol…, Pharmacogenomics (2018) | [10.2217/pgs-2018-0115](https://doi.org/10.2217/pgs-2018-0115) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **UGT2B7** | `Q27` · CL/F | metabolism | [Parker_2018](drugs/drug_carvedilol/pgx_Parker_2018_UGT2B7_Q27.md) | Parker BM et al., Clinical pharmacogenomics of carvedilol…, Pharmacogenomics (2018) | [10.2217/pgs-2018-0115](https://doi.org/10.2217/pgs-2018-0115) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Saito_2010](drugs/drug_carvedilol/pgx_Saito_2010_CYP2D6_Q27.md) | Saito M et al., Population pharmacokinetics of R- and S…, Biological & pharmaceutical… (2010) | [10.1248/bpb.33.1378](https://doi.org/10.1248/bpb.33.1378) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ADRB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Sehrt_2011](drugs/drug_carvedilol/pgx_Sehrt_2011_ADRB1_Q100.md) | Sehrt D et al., Carvedilol pharmacokinetics and pharmac…, Pharmacogenomics (2011) | [10.2217/pgs.11.20](https://doi.org/10.2217/pgs.11.20) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ADRB2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Sehrt_2011](drugs/drug_carvedilol/pgx_Sehrt_2011_ADRB2_Q100.md) | Sehrt D et al., Carvedilol pharmacokinetics and pharmac…, Pharmacogenomics (2011) | [10.2217/pgs.11.20](https://doi.org/10.2217/pgs.11.20) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Sehrt_2011](drugs/drug_carvedilol/pgx_Sehrt_2011_CYP2D6_Q27.md) | Sehrt D et al., Carvedilol pharmacokinetics and pharmac…, Pharmacogenomics (2011) | [10.2217/pgs.11.20](https://doi.org/10.2217/pgs.11.20) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Takekuma_2007](drugs/drug_carvedilol/pgx_Takekuma_2007_CYP2D6_Q27.md) | Takekuma Y et al., Evaluation of effects of polymorphism f…, Biological & pharmaceutical… (2007) | [10.1248/bpb.30.537](https://doi.org/10.1248/bpb.30.537) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **UGT2B7** | `Q27` · CL/F | metabolism | [Takekuma_2007](drugs/drug_carvedilol/pgx_Takekuma_2007_UGT2B7_Q27.md) | Takekuma Y et al., Evaluation of effects of polymorphism f…, Biological & pharmaceutical… (2007) | [10.1248/bpb.30.537](https://doi.org/10.1248/bpb.30.537) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 376 matched, 80 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 7  ·  extracted 2  ·  needs_review 0  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alkafaas_2024 | not_relevant | 0 | 0 | The paper is an in silico review discussing carvedilol as a potential inhibitor of acid sphingomyelinase for SARS-CoV-2 entry, but it does not report any pharmacogenomic effects on PK or PD parameters. |
| PD | Bertera_2009 | not_relevant | 2 | 1 | The study uses non-linear regression on individual animal data (n=12 per group) rather than population pharmacokinetic/pharmacodynamic modeling techniques (e.g., NONMEM, SAEM) to estimate inter-individual variability and covariate effects. |
| PD | Brodde_2003 | not_relevant | 0 | 0 | The text is a general review article discussing pharmacokinetic and pharmacodynamic interactions of beta-blockers, but it does not report any population pharmacodynamic modeling or estimated exposure-response parameters for carvedilol. |
| PGx | Brodde_2003 | not_relevant | 2 | 1 | The text mentions that carvedilol is metabolized by CYP2D6 and implies potential for pharmacogenomic interaction, but it does not report specific data or results on how gene variants affect PK/PD parameters for carvedilol. |
| PD | Cao_2018 | not_relevant | 0 | 0 | The paper reports in vitro electrophysiological data (patch-clamp) on HCN channels, not a population pharmacodynamic or exposure-response model in humans or animals. |
| PGx | Davis_2021 | not_relevant | 1 | 0 | The paper reports population-level prevalence of actionable genotypes for carvedilol (via ADRB1) but does not measure or report specific pharmacokinetic or pharmacodynamic parameter changes. |
| PD | Di_2010 | not_relevant | 2 | 1 | The study uses compartmental PK-PD modeling on individual animal data rather than population pharmacodynamic modeling, and the text is truncated before reporting specific PD parameter estimates. |
| PD | Dupont_1992 | not_relevant | 0 | 0 | The text is a narrative review summarizing experimental and clinical findings on renal hemodynamics, but it does not report any population pharmacodynamic modeling or estimated exposure-response parameters. |
| PGx | Flordellis_2004 | not_relevant | 0 | 0 | The text mentions carvedilol as an example of a drug with antioxidant effects and briefly notes that genetic polymorphisms in general can influence drug response, but it does not report any specific pharmacogenomic study or data linking gene variants to PK/PD parameters of carvedilol. |
| popPK | Ghazi_2022 | irrelevant | not captured | not captured | The paper assesses clinical blood pressure responses to antihypertensives and reports no pharmacokinetic parameters or population-PK modeling for carvedilol. |
| PD | Hanauer_2020 | not_relevant | 2 | 1 | The study uses non-compartmental analysis and descriptive statistics to compare PK/PD parameters between groups, rather than fitting a population pharmacodynamic model with estimated structural PD parameters. |
| PD | Hocht_2017 | not_relevant | 0 | 0 | The text is a narrative review discussing general pharmacokinetic and pharmacodynamic properties of beta-blockers, but it does not report any population pharmacodynamic modeling or estimated exposure-response parameters for carvedilol. |
| PD | Jung_2018 | not_relevant | 2 | 1 | The study uses non-compartmental analysis for PK and descriptive statistics for PD, without fitting a population pharmacodynamic or exposure-response model. |
| PGx | Kim_2018 | not_relevant | 0 | 10 | The study investigates a drug-drug interaction (dronedarone inhibiting CYP2D6) rather than a pharmacogenomic effect caused by genetic variants. |
| PGx | Klotz_2007 | not_relevant | 1 | 0 | The paper discusses pharmacokinetics in liver disease and lists metabolic enzymes for carvedilol, but does not report data on how specific gene variants or genotypes affect PK/PD parameters. |
| PD | Liu_2004 | not_relevant | 0 | 0 | The paper is an in vitro mechanistic study on osteosarcoma cells, not a population pharmacodynamic or exposure-response modeling study in humans. |
| PGx | MacKenzie_2017 | not_relevant | 2 | 1 | The paper is a review that mentions carvedilol as an example of a drug affected by CYP-450 genetic variation, but it does not report specific data, effect sizes, or detailed PK/PD parameters for carvedilol. |
| PD | Maideen_2021 | not_relevant | 0 | 0 | The paper is a narrative review of drug interactions and does not report original population pharmacodynamic modeling or estimated PD parameters for carvedilol. |
| PGx | Maideen_2021 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions involving CYP enzymes but does not report specific pharmacogenomic effects of gene variants on carvedilol PK/PD parameters. |
| PD | McTavish_1993 | not_relevant | 0 | 0 | The text is a clinical review summarizing efficacy and pharmacokinetics, but it does not report a population pharmacodynamic model or estimated exposure-response parameters. |
| PD | Morgan_1994 | not_relevant | 1 | 0 | The text is a narrative review summarizing pharmacokinetic and pharmacodynamic properties of carvedilol, but it does not report a population pharmacodynamic model or estimated exposure-response parameters. |
| PGx | Nardotto_2017 | not_relevant | 0 | 0 | The provided text describes population pharmacokinetic modeling methods and diagnostics but does not report any specific results regarding gene variants or genotypes affecting carvedilol PK/PD parameters. |
| PGx | Nikolic_2013 | not_relevant | 0 | 0 | The study investigates demographic and clinical covariates (TBW, digoxin, tobacco) but does not report any pharmacogenomic effects or gene variants. |
| PGx | Panfili_2012 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on ranolazine metabolism and adverse events, but carvedilol is only mentioned as part of the patient's concomitant medication list without any analysis of its PK/PD parameters. |
| PGx | Rietjens_2012 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics of MDMA (CYP2D6), but only mentions carvedilol as a potential treatment for MDMA toxicity without reporting any PK/PD data or genetic effects on carvedilol itself. |
| PD | Ruffolo_1990 | not_relevant | 1 | 1 | The paper describes in vitro and in vivo pharmacological mechanisms (receptor binding, dose-response) but does not report a population pharmacodynamic or exposure-response model with estimated parameters. |
| PGx | Samer_2013 | not_relevant | 2 | 1 | The paper is a review that mentions carvedilol only as an example of a drug where CYP2D6 poor metabolizers have increased toxicity risk, without reporting specific PK/PD data or quantitative effects for carvedilol itself. |
| PD | Tarek_2026 | not_relevant | 2 | 0 | The paper focuses on PBPK modeling and clinical efficacy outcomes, explicitly assuming a similar exposure-response relationship rather than estimating population PD parameters or fitting an exposure-response model. |
| PGx | Wehling_2010 | not_relevant | 2 | 1 | The paper mentions carvedilol as a substrate of CYP2D6 and notes stereoselective metabolism, but does not report specific quantitative pharmacokinetic or pharmacodynamic changes in carvedilol resulting from gene variants. |
| PGx | Witczyńska_2025 | not_relevant | 0 | 0 | The paper is a review of propranolol and only mentions carvedilol briefly for structural comparison; it does not report any pharmacogenomic effects on carvedilol. |
| PGx | Ye_2024 | not_relevant | 0 | 0 | The study investigates pharmacogenomic effects on aumolertinib metabolism and drug-drug interactions involving carvedilol, but does not report how genetic variants affect the PK/PD parameters of carvedilol itself. |
| PGx | Zhou_2009 | not_relevant | 2 | 1 | The text mentions carvedilol only to state that CYP2D6 has a lesser impact on it compared to metoprolol, without reporting specific PK/PD data or quantitative effects for carvedilol. |
| PD | van_1993 | not_relevant | 0 | 0 | The text is software metadata from GROBID and does not contain any scientific content or pharmacodynamic modeling data. |
| PGx | Ågesen_2019 | not_relevant | 2 | 1 | The paper is a review of general pharmacokinetic variability (CV) for beta-blockers including carvedilol, but it does not report specific quantitative effects of gene variants/genotypes on PK/PD parameters for carvedilol. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_carvedilol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
