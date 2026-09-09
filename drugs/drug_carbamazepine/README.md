# carbamazepine

- **generic name:** carbamazepine
- **ATC codes:** `N03AF01`
- **DrugBank:** [DB00564](https://go.drugbank.com/drugs/DB00564)
- **groups:** approved, investigational

## About

**Description.** Carbamazepine, also known as Tegretol, is an anticonvulsant drug and analgesic drug used to control seizures and to treat pain resulting from trigeminal neuralgia. It was initially approved by the FDA in 1965.[A180301] Aside from the above uses, this drug is also given to control the symptoms of bipolar 1.[L1335] Interestingly, carbamazepine was the first anticonvulsant used to treat individuals with bipolar disorder.[A180319]

**Indication.** Carbamazepine is indicated for the treatment of epilepsy and pain associated with true trigeminal neuralgia.[L1335] In particular, carbamazepine has shown efficacy in treating mixed seizures, partial seizures with complex symptoms, and generalized tonic-clonic seizures.[A180301,L1335] Carbamazepine is also indicated for the treatment of manic episodes and mixed manic-depressive episodes caused by bipolar I disorder.[L1335] Some off-label, unapproved uses of carbamazepine include the treatment of alcohol withdrawal syndrome and restless leg syndrome.[A180415,A180421]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 4/0/0 | 0/0/0 | 2/0/16 | not captured | not captured | 63 | 56/0 | 24/39 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2021](drugs/drug_carbamazepine/Carbamazepine_Li2021_reference.md) | Li ZR et al., Population Pharmacokinetics of Levetira…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00963-2](https://doi.org/10.1007/s40262-020-00963-2) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lukic_2024](drugs/drug_carbamazepine/Carbamazepine_Lukic2024_reference.md) | Lukic V et al., Population toxicokinetics of carbamazep…, Expert opinion on drug meta… (2024) | [10.1080/17425255.2024.2381555](https://doi.org/10.1080/17425255.2024.2381555) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Punyawudho_2012](drugs/drug_carbamazepine/Carbamazepine_Punyawudho2012_reference.md) | Punyawudho B et al., Population pharmacokinetics of carbamaz…, Therapeutic drug monitoring (2012) | [10.1097/FTD.0b013e31824d6a4e](https://doi.org/10.1097/FTD.0b013e31824d6a4e) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yip_2021](drugs/drug_carbamazepine/Carbamazepine_Yip2021_reference.md) | Yip VLM et al., Evaluation of clinical and genetic fact…, British journal of clinical… (2021) | [10.1111/bcp.14667](https://doi.org/10.1111/bcp.14667) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | **HLA-A** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Djordjevic_2017](drugs/drug_carbamazepine/pgx_Djordjevic_2017_HLA_A_safety.md) | Djordjevic N et al., Pharmacokinetics and Pharmacogenetics o…, European journal of drug me… (2017) | [10.1007/s13318-016-0397-3](https://doi.org/10.1007/s13318-016-0397-3) |
| <span class="pk-badge pk-badge--green">extracted</span> | **HLA-B** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Djordjevic_2017](drugs/drug_carbamazepine/pgx_Djordjevic_2017_HLA_B_safety.md) | Djordjevic N et al., Pharmacokinetics and Pharmacogenetics o…, European journal of drug me… (2017) | [10.1007/s13318-016-0397-3](https://doi.org/10.1007/s13318-016-0397-3) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP1A2** | `Q27` · CL/F | metabolism | [Djordjevic_2016](drugs/drug_carbamazepine/pgx_Djordjevic_2016_CYP1A2_Q27.md) | Djordjevic N et al., CYP1A2 genotype affects carbamazepine p…, European journal of clinica… (2016) | [10.1007/s00228-015-2006-9](https://doi.org/10.1007/s00228-015-2006-9) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ABCC2** | `Q88` · AUC | transport | [Djordjevic_2017](drugs/drug_carbamazepine/pgx_Djordjevic_2017_ABCC2_Q88.md) | Djordjevic N et al., Pharmacokinetics and Pharmacogenetics o…, European journal of drug me… (2017) | [10.1007/s13318-016-0397-3](https://doi.org/10.1007/s13318-016-0397-3) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP1A2** | `Q27` · CL/F | metabolism | [Djordjevic_2017](drugs/drug_carbamazepine/pgx_Djordjevic_2017_CYP1A2_Q27.md) | Djordjevic N et al., Pharmacokinetics and Pharmacogenetics o…, European journal of drug me… (2017) | [10.1007/s13318-016-0397-3](https://doi.org/10.1007/s13318-016-0397-3) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **HNF4A** | `Q27` · CL/F | metabolism | [Djordjevic_2017](drugs/drug_carbamazepine/pgx_Djordjevic_2017_HNF4A_Q27.md) | Djordjevic N et al., Pharmacokinetics and Pharmacogenetics o…, European journal of drug me… (2017) | [10.1007/s13318-016-0397-3](https://doi.org/10.1007/s13318-016-0397-3) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **PRRT2** | `Q321` · EC50 | target | [Djordjevic_2017](drugs/drug_carbamazepine/pgx_Djordjevic_2017_PRRT2_Q321.md) | Djordjevic N et al., Pharmacokinetics and Pharmacogenetics o…, European journal of drug me… (2017) | [10.1007/s13318-016-0397-3](https://doi.org/10.1007/s13318-016-0397-3) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **PXR** | `Q27` · CL/F | metabolism | [Djordjevic_2017](drugs/drug_carbamazepine/pgx_Djordjevic_2017_PXR_Q27.md) | Djordjevic N et al., Pharmacokinetics and Pharmacogenetics o…, European journal of drug me… (2017) | [10.1007/s13318-016-0397-3](https://doi.org/10.1007/s13318-016-0397-3) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ABCB1** | `Q27` · CL/F | transport | [Djordjevic_2025](drugs/drug_carbamazepine/pgx_Djordjevic_2025_ABCB1_Q27.md) | Djordjevic N et al., ABCB1 Polymorphism Is Associated with H…, Pediatric reports (2025) | [10.3390/pediatric17010010](https://doi.org/10.3390/pediatric17010010) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C19** | `Q27` · CL/F | metabolism | [Milosavljevic_2024](drugs/drug_carbamazepine/pgx_Milosavljevic_2024_CYP2C19_Q27.md) | Milosavljevic F et al., Pharmacogenetic Variants and Plasma Con…, JAMA network open (2024) | [10.1001/jamanetworkopen.2024.25593](https://doi.org/10.1001/jamanetworkopen.2024.25593) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C9** | `Q27` · CL/F | metabolism | [Milosavljevic_2024](drugs/drug_carbamazepine/pgx_Milosavljevic_2024_CYP2C9_Q27.md) | Milosavljevic F et al., Pharmacogenetic Variants and Plasma Con…, JAMA network open (2024) | [10.1001/jamanetworkopen.2024.25593](https://doi.org/10.1001/jamanetworkopen.2024.25593) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP3A5** | `Q27` · CL/F | metabolism | [Milosavljevic_2024](drugs/drug_carbamazepine/pgx_Milosavljevic_2024_CYP3A5_Q27.md) | Milosavljevic F et al., Pharmacogenetic Variants and Plasma Con…, JAMA network open (2024) | [10.1001/jamanetworkopen.2024.25593](https://doi.org/10.1001/jamanetworkopen.2024.25593) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **EPHX1** | `Q27` · CL/F | metabolism | [Milosavljevic_2024](drugs/drug_carbamazepine/pgx_Milosavljevic_2024_EPHX1_Q27.md) | Milosavljevic F et al., Pharmacogenetic Variants and Plasma Con…, JAMA network open (2024) | [10.1001/jamanetworkopen.2024.25593](https://doi.org/10.1001/jamanetworkopen.2024.25593) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **UGT1A4** | `Q27` · CL/F | metabolism | [Milosavljevic_2024](drugs/drug_carbamazepine/pgx_Milosavljevic_2024_UGT1A4_Q27.md) | Milosavljevic F et al., Pharmacogenetic Variants and Plasma Con…, JAMA network open (2024) | [10.1001/jamanetworkopen.2024.25593](https://doi.org/10.1001/jamanetworkopen.2024.25593) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **UGT1A6** | `Q27` · CL/F | metabolism | [Milosavljevic_2024](drugs/drug_carbamazepine/pgx_Milosavljevic_2024_UGT1A6_Q27.md) | Milosavljevic F et al., Pharmacogenetic Variants and Plasma Con…, JAMA network open (2024) | [10.1001/jamanetworkopen.2024.25593](https://doi.org/10.1001/jamanetworkopen.2024.25593) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **UGT2B7** | `Q27` · CL/F | metabolism | [Milosavljevic_2024](drugs/drug_carbamazepine/pgx_Milosavljevic_2024_UGT2B7_Q27.md) | Milosavljevic F et al., Pharmacogenetic Variants and Plasma Con…, JAMA network open (2024) | [10.1001/jamanetworkopen.2024.25593](https://doi.org/10.1001/jamanetworkopen.2024.25593) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **EPHX1** | `Q22` · CL | metabolism | [Yip_2021](drugs/drug_carbamazepine/pgx_Yip_2021_EPHX1_Q22.md) | Yip VLM et al., Evaluation of clinical and genetic fact…, British journal of clinical… (2021) | [10.1111/bcp.14667](https://doi.org/10.1111/bcp.14667) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **EPHX1** | `Q75` · Ct | metabolism | [Zhao_2019](drugs/drug_carbamazepine/pgx_Zhao_2019_EPHX1_Q75.md) | Zhao GX et al., Association between EPHX1 polymorphisms…, International journal of cl… (2019) | [10.1007/s11096-019-00919-y](https://doi.org/10.1007/s11096-019-00919-y) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 1541 matched, 81 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 4  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lukic_2024.pdf` | Lukic V et al., Population toxicokinetics of carbamazep…, Expert opinion on drug meta… (2024) | popPK | 10 | [10.1080/17425255.2024.2381555](https://doi.org/10.1080/17425255.2024.2381555) | [39021252](https://pubmed.ncbi.nlm.nih.gov/39021252) | The paper explicitly reports a NONMEM-based population toxicokinetic model estimating clearance and volume of distribution for carbamazepine. |

<sub>queue written 2026-07-22T18:47:57.118925+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Anderson_2008 | not_relevant | 1 | 0 | The text is a review article discussing therapeutic drug monitoring and pharmacogenetics, but it does not report a population pharmacodynamic model or estimated PD parameters for carbamazepine. |
| PGx | Anderson_2008 | not_relevant | 1 | 0 | The paper is a general review that explicitly states only phenytoin has significant CYP polymorphisms among AEDs and does not report specific pharmacogenomic effects for carbamazepine. |
| PD | Banach_2015 | not_relevant | 1 | 0 | The paper is a narrative review of eslicarbazepine acetate, not carbamazepine, and does not report any population pharmacodynamic or exposure-response modeling with estimated parameters. |
| PD | Baumann_1996 | not_relevant | 0 | 0 | The paper is a review of analytical methods and pharmacokinetic interactions for SSRIs, explicitly stating that no clear plasma concentration-clinical effectiveness relationship has been demonstrated; it does not report any population PD or exposure-response modeling. |
| PD | Berbis_1991 | not_relevant | 0 | 0 | The paper discusses retinoids, not carbamazepine, and is a general review on drug interactions rather than a population pharmacodynamic modeling study. |
| PD | Bettio_2025 | not_relevant | 2 | 4 | The paper reports static EC50 values from dose-response curves in animal models, not a population pharmacodynamic model with estimated parameters (e.g., Emax, EC50) using nonlinear mixed-effects modeling. |
| PGx | Bloch_2014 | not_relevant | 2 | 10 | The paper reports associations between HLA genotypes and hypersensitivity reactions (adverse drug events), which are clinical phenotypes rather than quantitative pharmacokinetic or pharmacodynamic parameters. |
| PGx | Bousman_2021 | not_relevant | 2 | 5 | The paper reports an association between HLA variants and severe cutaneous adverse reactions (immunologic toxicity) for carbamazepine, but does not report effects on pharmacokinetic or pharmacodynamic parameters. |
| PD | Brodie_1996 | not_relevant | 0 | 0 | The paper is a general review of lamotrigine and does not report any population pharmacodynamic or exposure-response modeling for carbamazepine. |
| popPK | Chan_2023 | irrelevant | not captured | not captured | Carbamazepine is only used as a co-administered drug interaction probe, and the paper exclusively reports population pharmacokinetic parameters for nirmatrelvir. |
| PGx | Chung_2007 | not_relevant | 0 | 10 | The paper reports a genetic association with drug hypersensitivity (an adverse event), not a change in pharmacokinetic or pharmacodynamic parameters. |
| PGx | Chung_2016 | not_relevant | 1 | 0 | The paper discusses the immunological mechanisms and genetic associations (HLA-B*15:02) with severe cutaneous adverse reactions (SCAR), which are safety/toxicity outcomes, not pharmacokinetic or pharmacodynamic parameters. |
| PGx | Chávez-Castillo_2020 | not_relevant | 0 | 0 | The study investigates pharmacogenomics for lamotrigine, not carbamazepine; carbamazepine is only mentioned as a concomitant medication affecting lamotrigine's clearance. |
| PD | Dresser_2000 | not_relevant | 0 | 0 | The text is a general review of CYP3A4 drug interactions and does not report any population pharmacodynamic modeling or estimated PD parameters for carbamazepine. |
| PD | Díaz_2008 | not_relevant | 0 | 0 | The text is a narrative review of pharmacokinetic and pharmacodynamic drug interactions, not a primary research article reporting a population exposure-response model with estimated parameters. |
| PGx | Franco_2015 | not_relevant | 2 | 1 | The text discusses carbamazepine only in the context of HLA-associated adverse reactions (safety) and mentions a single study linking SCN1A to maximum doses, but does not report specific pharmacokinetic or pharmacodynamic parameter changes for carbamazepine. |
| PGx | Fricke-Galindo_2018 | not_relevant | 2 | 1 | The paper is a review focusing on adverse drug reactions (PD outcomes) and mentions pharmacogenetic associations (e.g., HLA-B*15:02), but does not report quantitative effects of gene variants on pharmacokinetic parameters or specific pharmacodynamic metrics like EC50. |
| PGx | Garon_2017 | not_relevant | 2 | 1 | The text is a review discussing HLA associations with carbamazepine-induced severe cutaneous adverse reactions (an immunological phenotype), but it does not report changes in pharmacokinetic or pharmacodynamic parameters. |
| popPK | Gidal_2018 | irrelevant | not captured | not captured | Carbamazepine is only discussed as a concomitant medication interacting with eslicarbazepine, with no population PK model or quantitative parameters reported for it. |
| PGx | Greenberger_2019 | not_relevant | 0 | 0 | The paper discusses HLA-B*1502 association with severe cutaneous adverse reactions (SJS/TEN) to carbamazepine, which is an immunologic toxicity rather than a pharmacokinetic or pharmacodynamic parameter. |
| PGx | Hamilton_2015 | not_relevant | 1 | 0 | The text mentions carbamazepine only as an example of a drug with known genetic associations for adverse effects (HLA), but does not report specific PK/PD parameter changes or quantitative data. |
| PGx | Karlin_2014 | not_relevant | 0 | 0 | The paper discusses pharmacogenomic associations between HLA alleles and adverse drug reactions (SJS/TEN, DRESS) for carbamazepine, but does not report effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Kiang_2005 | not_relevant | 2 | 1 | The text is a general review of UGT enzymes that mentions carbamazepine only as an example of a drug subject to glucuronidation, without reporting specific pharmacogenomic data or PK/PD parameter changes for it. |
| PGx | Kudo_1999 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for haloperidol, not carbamazepine; carbamazepine is only mentioned as a drug interacting with haloperidol. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The paper is a review of levetiracetam pharmacokinetics, where carbamazepine is only mentioned as a co-administered drug affecting clearance, not as the subject drug. |
| PD | Ma_2012 | not_relevant | 0 | 0 | The paper is a narrative review on pharmacogenomics and does not report any population pharmacodynamic modeling or estimated PD parameters for carbamazepine. |
| PGx | Ma_2012 | not_relevant | 2 | 1 | The paper reports an association between HLA-B*1502 and carbamazepine-induced severe cutaneous adverse reactions (SJS/TEN), which is a safety/toxicity outcome, not a pharmacokinetic or pharmacodynamic parameter. |
| PD | Ma_2015 | not_relevant | 2 | 0 | The study uses regression analysis to associate genetic polymorphisms with dose and concentration ratios, but does not develop or estimate parameters for a population pharmacodynamic (exposure-response) model. |
| PGx | Mann_2007 | not_relevant | 2 | 1 | The text mentions carbamazepine only in the context of HLA-B*1502 association with Stevens-Johnson syndrome (an adverse event), not a pharmacokinetic or pharmacodynamic parameter change. |
| PGx | Martin_2025 | not_relevant | 2 | 1 | The paper is a narrative review that mentions HLA-B*15:02 and HLA-A*31:01 as biomarkers for carbamazepine adverse effects (pharmacodynamic/toxicity), but does not report specific quantitative changes in PK/PD parameters or primary data. |
| PGx | Morris_2022 | not_relevant | 0 | 0 | The paper is a systematic review of cost-effectiveness studies and does not report primary pharmacokinetic or pharmacodynamic data for carbamazepine. |
| PGx | Mushiroda_2011 | not_relevant | 0 | 10 | The paper reports on genetic associations with adverse drug reactions (safety/toxicity), not changes in pharmacokinetic or pharmacodynamic parameters. |
| PGx | Müller_2018 | not_relevant | 2 | 1 | The paper recommends HLA-B*1502 testing for carbamazepine to prevent adverse reactions (likely SJS/TEN), which is a safety/toxicity endpoint, not a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Naik_2021 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for vixotrigine, with carbamazepine serving only as a covariate for drug-drug interaction analysis. |
| popPK | Ngo_2020 | irrelevant | not captured | not captured | Carbamazepine is only used as a co-administered inducer to study its effect on rivaroxaban pharmacokinetics, with no PK parameters or modeling reported for carbamazepine itself. |
| PD | Nomani_2019 | not_relevant | 0 | 0 | The paper is a narrative review of drug interactions with cola drinks and does not present any population pharmacodynamic modeling or estimated PD parameters for carbamazepine. |
| PGx | Pereira_2025 | not_relevant | 0 | 0 | The paper is a case report of ibuprofen-induced TEN and only mentions carbamazepine-associated HLA variants as background context without reporting any pharmacokinetic or pharmacodynamic data for carbamazepine. |
| PD | Rambeck_1993 | not_relevant | 0 | 0 | The paper is a pharmacokinetic review of lamotrigine and does not report any population pharmacodynamic or exposure-response modeling for carbamazepine. |
| PD | Roberti_2021 | not_relevant | 0 | 0 | The paper is a narrative review of cenobamate's pharmacology and clinical profile, not a population pharmacodynamic modeling study for carbamazepine. |
| PGx | Saruwatari_2010 | not_relevant | 3 | 2 | The text is a review article that mentions potential associations between EPHX1/GST polymorphisms and carbamazepine PK/toxicity, but does not report specific quantitative pharmacogenomic effect sizes or primary data for these parameters. |
| PGx | Saruwatari_2014 | not_relevant | 0 | 0 | The study investigates pharmacogenomic effects on clobazam, not carbamazepine. |
| PD | Schoemaker_2016 | not_relevant | 2 | 1 | The paper reports a population PK/PD model for brivaracetam, not carbamazepine; carbamazepine is only mentioned as a concomitant medication affecting brivaracetam exposure. |
| popPK | Serrano_1999 | irrelevant | 0 | 0 | The study focuses on valproic acid pharmacokinetics, with carbamazepine serving only as a covariate for drug interaction analysis. |
| PD | Smith_2022 | not_relevant | 0 | 0 | The paper is a Delphi consensus report providing clinical dose adjustment recommendations, not a population pharmacodynamic modeling study with estimated parameters. |
| popPK | Song_2016 | irrelevant | not captured | not captured | Carbamazepine is used only as a co-administered enzyme inducer to evaluate its effect on dolutegravir, with no original quantitative pharmacokinetic parameters reported for carbamazepine itself. |
| PGx | Sousa-Pinto_2016 | not_relevant | 0 | 0 | The paper discusses HLA associations with delayed drug allergy reactions (immunological adverse events) rather than changes in pharmacokinetic or pharmacodynamic parameters of carbamazepine. |
| PD | Takenaka_2018 | not_relevant | 2 | 1 | The paper reports a population PK/PD model for perampanel, not carbamazepine; carbamazepine is only mentioned as a concomitant covariate affecting perampanel's pharmacokinetics. |
| popPK | Teixeira-da-Silva_2022 | irrelevant | not captured | not captured | The study exclusively develops a population pharmacokinetic model for valproic acid, with carbamazepine only mentioned as a comedication covariate affecting VPA clearance. |
| PGx | Timmer_2000 | not_relevant | 0 | 0 | The paper focuses on mirtazapine pharmacokinetics and only mentions carbamazepine as an enzyme inducer affecting mirtazapine levels, without reporting any pharmacogenomic effects on carbamazepine itself. |
| PGx | Vermeulen_2007 | not_relevant | 0 | 0 | The paper investigates pharmacokinetics of risperidone, not carbamazepine; carbamazepine is only mentioned as a comedication affecting risperidone levels. |
| PGx | Xu_2018 | not_relevant | 0 | 0 | The study investigates pharmacogenomic effects on Valproic Acid (VPA) pharmacokinetics, not Carbamazepine; Carbamazepine is only mentioned as a comedication affecting VPA clearance. |
| PGx | Yip_2017 | not_relevant | 2 | 8 | The paper reports associations between HLA genotypes and hypersensitivity reactions (clinical adverse events), which are safety outcomes rather than pharmacokinetic or pharmacodynamic parameters. |
| popPK | Yu_2025 | irrelevant | not captured | not captured | Carbamazepine is only evaluated as a co-administered covariate affecting perampanel clearance, with no quantitative PK parameters reported for carbamazepine itself. |
| PD | Zaccara_2014 | not_relevant | 0 | 0 | The text is a narrative review of pharmacokinetic and pharmacodynamic drug interactions involving antiepileptic drugs, but it does not report any population pharmacodynamic modeling or estimated exposure-response parameters. |
| PGx | Zhu_2022 | not_relevant | 0 | 0 | The study focuses on valproic acid (VPA) pharmacokinetics; carbamazepine is only mentioned as a concomitant medication affecting VPA clearance, not as the drug being studied for pharmacogenomic effects. |
| PD | von_2007 | not_relevant | 0 | 0 | The paper is a review of brivaracetam and does not report a population pharmacodynamic or exposure-response model for carbamazepine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_carbamazepine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
