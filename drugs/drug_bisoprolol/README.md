# bisoprolol

- **generic name:** bisoprolol
- **ATC codes:** `C07AB07`, `C07BB07`, `C07FB07`, `C07FX04`, `C09BX02`, `C09BX04`, `C09BX05`
- **DrugBank:** [DB00612](https://go.drugbank.com/drugs/DB00612)
- **groups:** approved, investigational

## About

**Description.** Bisoprolol is a cardioselective β1-adrenergic blocking agent used to treat high blood pressure.[A180472,L7219] It is considered a potent drug with a long-half life that can be used once daily to reduce the need for multiple doses of antihypertensive drugs.[A180472] Bisoprolol is generally well tolerated, likely due to its β1-adrenergic receptor selectivity and is a useful alternative to non-selective β-blocker drugs in the treatment of hypertension such as [Carvedilol] and [Labetalol]. It may be used alone or in combination with other drugs to manage hypertension[L7219] and can be useful in patients with chronic obstructive pulmonary disease (COPD) due to its receptor selectivity.[A180562]

**Indication.** Bisoprolol is indicated for the treatment of mild to moderate hypertension.[L7219] It may be used off-label to treat heart failure, atrial fibrillation, and angina pectoris.[A180460,A180463]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 7/0/1 | 0/0/0 | 0/0/7 | not captured | not captured | 29 | 40/0 | 15/14 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 2.4141)</sub><br><sub>route_to: `human_review`</sub> | [Nikolic_2018](drugs/drug_bisoprolol/Bisoprolol_Nikolic2018_reference.md) | Nikolic (2018) | — |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Cvan_2016](drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference.md) | Cvan (2016) | — |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Fontana_2022](drugs/drug_bisoprolol/Bisoprolol_Fontana2022_reference.md) | Fontana V et al., Chromosomal Region 11p14.1 is Associate…, Pharmacogenomics and person… (2022) | [10.2147/PGPM.S352719](https://doi.org/10.2147/PGPM.S352719) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Grevel_1989](drugs/drug_bisoprolol/Bisoprolol_Grevel1989_reference.md) | Grevel J et al., Population pharmacokinetic analysis of…, Clinical pharmacokinetics (1989) | [10.2165/00003088-198917010-00005](https://doi.org/10.2165/00003088-198917010-00005) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Momčilović_2019](drugs/drug_bisoprolol/Bisoprolol_Momilovi2019_reference.md) | Momčilović S et al., Population Pharmacokinetic Analysis of…, Journal of cardiovascular p… (2019) | [10.1097/FJC.0000000000000644](https://doi.org/10.1097/FJC.0000000000000644) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Momčilović_2020](drugs/drug_bisoprolol/Bisoprolol_Momilovi2020_reference.md) | Momčilović S et al., Population pharmacokinetic analysis of…, European journal of clinica… (2020) | [10.1007/s00228-020-02937-6](https://doi.org/10.1007/s00228-020-02937-6) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Nikolic_2013](drugs/drug_bisoprolol/Bisoprolol_Nikolic2013_reference.md) | Nikolic (2013) | — |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Nikolic_2016](drugs/drug_bisoprolol/Bisoprolol_Nikolic2016_reference.md) | Nikolic VN et al., Population Pharmacokinetics of Bisoprol…, Pharmacology (2016) | [10.1159/000443179](https://doi.org/10.1159/000443179) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ADRB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Fayed_2023](drugs/drug_bisoprolol/pgx_Fayed_2023_ADRB1_Q100.md) | Fayed MS et al., β1-adrenergic receptor polymorphisms: a…, Future science OA (2023) | [10.2144/fsoa-2023-0113](https://doi.org/10.2144/fsoa-2023-0113) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CCDC34** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Fontana_2022](drugs/drug_bisoprolol/pgx_Fontana_2022_CCDC34_Q100.md) | Fontana V et al., Chromosomal Region 11p14.1 is Associate…, Pharmacogenomics and person… (2022) | [10.2147/PGPM.S352719](https://doi.org/10.2147/PGPM.S352719) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CCDC34** | `Q27` · CL/F | unknown | [Fontana_2022](drugs/drug_bisoprolol/pgx_Fontana_2022_CCDC34_Q27.md) | Fontana V et al., Chromosomal Region 11p14.1 is Associate…, Pharmacogenomics and person… (2022) | [10.2147/PGPM.S352719](https://doi.org/10.2147/PGPM.S352719) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q75` · Ct | metabolism | [Mohammed_2020](drugs/drug_bisoprolol/pgx_Mohammed_2020_CYP2D6_Q75.md) | Mohammed Alkreathy H et al., Bisoprolol responses (PK/PD) in hyperte…, Saudi journal of biological… (2020) | [10.1016/j.sjbs.2020.06.022](https://doi.org/10.1016/j.sjbs.2020.06.022) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q32` · Cmax | metabolism | [Okda_2024](drugs/drug_bisoprolol/pgx_Okda_2024_CYP2D6_Q32.md) | Okda SM et al., Impact of CYP2D6*2A, CYP2D6*4 and CYP3A…, British journal of clinical… (2024) | [10.1111/bcp.16134](https://doi.org/10.1111/bcp.16134) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP3A5** | `Q32` · Cmax | metabolism | [Okda_2024](drugs/drug_bisoprolol/pgx_Okda_2024_CYP3A5_Q32.md) | Okda SM et al., Impact of CYP2D6*2A, CYP2D6*4 and CYP3A…, British journal of clinical… (2024) | [10.1111/bcp.16134](https://doi.org/10.1111/bcp.16134) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q32` · Cmax | metabolism | [Wehling_2010](drugs/drug_bisoprolol/pgx_Wehling_2010_CYP2D6_Q32.md) | Wehling M, Multimorbidity and polypharmacy: which…, Arzneimittel-Forschung (2010) | [10.1055/s-0031-1296249](https://doi.org/10.1055/s-0031-1296249) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 165 matched, 57 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 8  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Abdelmawla_2001 | not_relevant | 2 | 3 | The paper reports on a clinical pharmacology study using ANOVA and curve fitting for individual dose-response parameters, but does not employ population pharmacodynamic modeling techniques (e.g., NONMEM) to estimate inter-individual variability or exposure-response relationships. |
| PD | Almeman_2024 | not_relevant | 0 | 0 | The text is a prescribing information label for metoprolol (Lopressor), not bisoprolol, and contains no population pharmacodynamic modeling or estimated PD parameters. |
| PGx | Almeman_2024 | not_relevant | 0 | 0 | The text describes metoprolol, not bisoprolol, and contains no pharmacogenomic data. |
| PD | Brodde_2003 | not_relevant | 0 | 0 | The text is a general review article discussing pharmacokinetics and pharmacodynamics of beta-blockers, but it does not report any population pharmacodynamic modeling or estimated exposure-response parameters for bisoprolol. |
| PGx | Brodde_2003 | not_relevant | 0 | 0 | The text is a general review of beta-blocker pharmacology and drug interactions; it mentions CYP2D6 polymorphisms for metoprolol but does not report any pharmacogenomic effects or data for bisoprolol. |
| PGx | Chan_2021 | not_relevant | 2 | 8 | The study explicitly reports no significant association between CYP2D6/CYP3A5 genotypes and bisoprolol pharmacokinetic or pharmacodynamic parameters. |
| PD | Chaturvedi_2014 | not_relevant | 0 | 0 | This is a systematic review and meta-analysis of clinical trials, not a population pharmacodynamic modeling study; it reports aggregate treatment effects rather than estimated individual-level PD parameters or exposure-response relationships. |
| PD | Cullum_2023 | not_relevant | 1 | 2 | The paper reports in vitro kinetic pharmacology (concentration-response curves) in cell lines, not a population pharmacodynamic or exposure-response model in humans/animals. |
| PGx | Fukao_2014 | not_relevant | 0 | 0 | The paper investigates metoprolol pharmacokinetics and CYP2D6 polymorphism; bisoprolol is only mentioned as a comparator in the introduction and as an inhibitor in in vitro assays, with no reported PGx effects on its PK/PD parameters. |
| PGx | Gedde-Dahl_2022 | not_relevant | 0 | 0 | The study analyzes prescription trends and drug-drug interactions (CYP2D6 inhibition) but does not report pharmacogenomic effects of gene variants on bisoprolol PK/PD parameters. |
| PGx | Gosselin_2023 | not_relevant | 0 | 0 | The paper reports on drug-drug interactions (bisoprolol and amiodarone via CYP2D6 inhibition) using a bioinformatics tool, but does not report pharmacogenomic effects of gene variants on PK/PD parameters. |
| PD | Habuchi_1996 | not_relevant | 0 | 0 | The paper is an in vitro electrophysiology study on denopamine using rabbit cells, not a population pharmacodynamic modeling study for bisoprolol. |
| PD | Habuchi_1997 | not_relevant | 0 | 0 | The paper is an in vitro mechanistic study on dopamine's effects using guinea-pig hearts and cells, not a population pharmacodynamic modeling study for bisoprolol. |
| PGx | Hiltunen_2012 | not_relevant | 0 | 10 | The paper reports negative results for genetic polymorphisms regarding bisoprolol response and identifies only clinical predictors (PRA), not pharmacogenomic effects. |
| PGx | Horikiri_1998 | not_relevant | 2 | 8 | The study investigates stereoselective pharmacokinetics and identifies CYP2D6 as a metabolizing enzyme in vitro, but does not report clinical data linking specific gene variants or genotypes to PK/PD parameters in humans. |
| PGx | Horikiri_1998_2 | not_relevant | 0 | 0 | The study investigates species differences (dog vs human) and stereoselective metabolism using recombinant enzymes, but does not report effects of human genetic variants (genotypes/phenotypes) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Huang_2020 | irrelevant | 1 | 0 | The study is a pharmacodynamic validation of mHealth devices using bisoprolol as a probe drug, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Ingram_2020 | not_relevant | 1 | 0 | The paper discusses bisoprolol only to state that its metabolism is insensitive to CYP2D6 variations, reporting no pharmacogenomic effect on its PK or PD parameters. |
| popPK | Jankovic_2014 | irrelevant | 2 | 1 | The paper is a review article that summarizes literature rather than reporting original population-pharmacokinetic parameters, and the few numeric values present are general pharmacokinetic constants from cited sources, not specific PK model outputs. |
| PGx | Jankovic_2014 | not_relevant | 2 | 1 | The paper is a review that mentions genetic polymorphisms as a factor influencing PK but does not report specific quantitative effects of gene variants on bisoprolol parameters. |
| PD | Kutumova_2022 | not_relevant | 2 | 1 | The paper describes a mechanistic agent-based physiological model calibrated to clinical trial outcomes, rather than a statistical population pharmacodynamic (exposure-response) model with estimated PD parameters like Emax or EC50. |
| PD | Maideen_2021 | not_relevant | 0 | 0 | The paper is a narrative review of drug interactions and does not report original population pharmacodynamic modeling or estimated PD parameters for bisoprolol. |
| PGx | Maideen_2021 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions for beta-blockers and mentions metabolic enzymes but does not report pharmacogenomic effects of gene variants on bisoprolol PK/PD parameters. |
| PD | Marti_2024 | not_relevant | 0 | 0 | The text is a clinical review discussing tolerability and safety, not a population pharmacodynamic modeling study with estimated parameters. |
| PGx | Martinez_2025 | not_relevant | 0 | 0 | The paper reports genetic variants (MTHFR, prothrombin) affecting thrombosis risk and endothelial function, but does not report any pharmacogenomic effect on the PK or PD parameters of bisoprolol. |
| PD | Mohammed_2020 | not_relevant | 2 | 1 | The study performs a pharmacogenomic association analysis comparing mean clinical outcomes and plasma concentrations across genotype groups using descriptive statistics, rather than fitting a population pharmacodynamic or exposure-response model with estimated parameters. |
| PD | Ray_2025 | not_relevant | 0 | 0 | The text is a narrative review discussing the pharmacology and clinical use of beta-blockers, but it does not report any population pharmacodynamic modeling or estimated exposure-response parameters for bisoprolol. |
| PD | Smolders_2019 | not_relevant | 0 | 0 | The paper is a narrative review of drug-drug interactions between DAAs and cardiovascular drugs, focusing on pharmacokinetics and clinical management, without reporting any population pharmacodynamic modeling or estimated PD parameters for bisoprolol. |
| PGx | Steinberg_2016 | not_relevant | 2 | 5 | The study reports that beta-blocker efficacy was not affected by genotype and does not provide quantitative pharmacokinetic or pharmacodynamic parameter changes linked to specific gene variants. |
| PGx | Taguchi_2005 | not_relevant | 2 | 10 | The study explicitly reports that CYP2D6 and CYP2C19 genotypes had no significant effect on bisoprolol pharmacokinetic parameters. |
| PD | Wallukat_1995 | not_relevant | 0 | 0 | The paper describes an in vitro mechanistic study mapping functional epitopes of autoantibodies using cultured cells, not a population pharmacodynamic or exposure-response modeling study in humans. |
| PD | Yabana_1992 | not_relevant | 0 | 0 | The paper describes in vitro receptor pharmacology experiments on guinea-pig tissues, not a population pharmacodynamic or exposure-response modeling study in humans or animals. |
| PGx | Ågesen_2019 | not_relevant | 2 | 1 | The paper is a review of general pharmacokinetic variability (CV) for bisoprolol and other beta-blockers, concluding that bisoprolol has low/moderate variability; it does not report specific gene variant effects on PK/PD parameters for bisoprolol. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_bisoprolol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
