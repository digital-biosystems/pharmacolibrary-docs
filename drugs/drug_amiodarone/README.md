# amiodarone

- **generic name:** amiodarone
- **ATC codes:** `C01BD01`
- **DrugBank:** [DB01118](https://go.drugbank.com/drugs/DB01118)
- **groups:** approved, investigational

## About

**Description.** Amiodarone is a benzofuran derivative, anti-arrhythmic drug used commonly in a variety of settings.[A36817] Most known for its approved indication in life-threatening ventricular arrhythmias, it is also used off-label in the outpatient and inpatient setting for atrial fibrillation. Because of its ability to cause serious toxicity and possibly death, amiodarone use should be reserved for its approved indications, according to prescribing information.[L3561,L11265,L11286]

**Indication.** The FDA approved indications for amiodarone are recurrent ventricular fibrillation (VF) and recurrent hemodynamically unstable ventricular tachycardia (VT). The FDA emphasizes that this drug should only be given in these conditions when they are clinically documented and have not responded to normal therapeutic doses of other antiarrhythmic agents, or when other drugs are not tolerated by the patient.[L3561]

Off-label indications include atrial fibrillation and supraventricular tachycardia.[A189666,A189720,A189723,L11286]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 08:05 | 35:04 | 2/0/0 | 0/0/0 | 0/0/2 | 287,849/90,603 | ollama / qwen3.8:27b-mtp-q8_0 | 43 | 32/8 | 15/28 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Hirai_2022](drugs/drug_amiodarone/Amiodarone_Hirai2022_reference.md) | Hirai T et al., Population Pharmacokinetic Model of Ami…, Biological & pharmaceutical… (2022) | [10.1248/bpb.b21-00940](https://doi.org/10.1248/bpb.b21-00940) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pollak_2000](drugs/drug_amiodarone/Amiodarone_Pollak2000_reference.md) | Pollak PT et al., Population pharmacokinetics of long-ter…, Clinical pharmacology and t… (2000) | [10.1067/mcp.2000.107047](https://doi.org/10.1067/mcp.2000.107047) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Li_2025](drugs/drug_amiodarone/Amiodarone_Li2025_base.md) | Li TY et al., Dose Optimization of Rivaroxaban in Eld…, Drug design, development an… (2025) | [10.2147/DDDT.S563521](https://doi.org/10.2147/DDDT.S563521) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Li_2025](drugs/drug_amiodarone/Amiodarone_Li2025_final.md) | Li TY et al., Dose Optimization of Rivaroxaban in Eld…, Drug design, development an… (2025) | [10.2147/DDDT.S563521](https://doi.org/10.2147/DDDT.S563521) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Sermsappasuk_2006](drugs/drug_amiodarone/Amiodarone_Sermsappasuk2006_cva_mean_s_d.md) | Sermsappasuk P et al., Kinetic analysis of myocardial uptake a…, European journal of pharmac… (2006) | [10.1016/j.ejps.2006.02.007](https://doi.org/10.1016/j.ejps.2006.02.007) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Sermsappasuk_2006](drugs/drug_amiodarone/Amiodarone_Sermsappasuk2006_estimate_mean_s_d.md) | Sermsappasuk P et al., Kinetic analysis of myocardial uptake a…, European journal of pharmac… (2006) | [10.1016/j.ejps.2006.02.007](https://doi.org/10.1016/j.ejps.2006.02.007) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Yonezawa_2002](drugs/drug_amiodarone/Amiodarone_Yonezawa2002_mex_amd_group_1.md) | Yonezawa E et al., Lack of interaction between amiodarone…, Journal of clinical pharmac… (2002) | [10.1177/00912700222011265](https://doi.org/10.1177/00912700222011265) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Yonezawa_2002](drugs/drug_amiodarone/Amiodarone_Yonezawa2002_mex_amd_group_3.md) | Yonezawa E et al., Lack of interaction between amiodarone…, Journal of clinical pharmac… (2002) | [10.1177/00912700222011265](https://doi.org/10.1177/00912700222011265) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Yonezawa_2002](drugs/drug_amiodarone/Amiodarone_Yonezawa2002_mex_amd_group_5.md) | Yonezawa E et al., Lack of interaction between amiodarone…, Journal of clinical pharmac… (2002) | [10.1177/00912700222011265](https://doi.org/10.1177/00912700222011265) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Yonezawa_2002](drugs/drug_amiodarone/Amiodarone_Yonezawa2002_mex_group.md) | Yonezawa E et al., Lack of interaction between amiodarone…, Journal of clinical pharmac… (2002) | [10.1177/00912700222011265](https://doi.org/10.1177/00912700222011265) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C8** | `Q3` · CLint | metabolism | [Hrudikova_2017](drugs/drug_amiodarone/pgx_Hrudikova_2017_CYP2C8_Q3.md) | Hrudikova Vyskocilova E et al., Therapeutic monitoring of amiodarone: p…, Biomedical papers of the Me… (2017) | [10.5507/bp.2017.016](https://doi.org/10.5507/bp.2017.016) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP3A4** | `Q3` · CLint | metabolism | [Yang_2019](drugs/drug_amiodarone/pgx_Yang_2019_CYP3A4_Q3.md) | Yang CC et al., Functional characterization of 21 CYP3A…, Xenobiotica; the fate of fo… (2019) | [10.1080/00498254.2017.1414971](https://doi.org/10.1080/00498254.2017.1414971) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 510 matched, 72 returned
- **screened:** 39  ·  **relevant:** 2
- **records:** 10  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alkafaas_2024 | not_relevant | 0 | 0 | The paper is a review on ASMase inhibitors for SARS-CoV-2 and mentions amiodarone only as a reference in in silico docking scores, with no data on pharmacogenomics or PK/PD parameters. |
| PGx | Alzubiedi_2016 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on warfarin dosing, not amiodarone; amiodarone is only mentioned as a concomitant medication predictor. |
| PD | Beddows_1989 | not_relevant | 1 | 2 | The paper reports in vitro cytotoxicity data (EC50) on cell lines, not a population pharmacodynamic or exposure-response model derived from clinical patient data. |
| PGx | Biakina_2023 | not_relevant | 2 | 8 | The study reports an association between a genetic variant and a clinical adverse event (thyrotoxicosis), but does not measure or report changes in pharmacokinetic or pharmacodynamic parameters. |
| PGx | Black-Maier_2015 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for bucindolol, not amiodarone; amiodarone is only mentioned as a comparator drug in clinical trials. |
| PD | Colunga_2019 | not_relevant | 0 | 0 | The text is a narrative review of amiodarone's pharmacology and adverse reactions, containing no population pharmacodynamic modeling or exposure-response analysis. |
| PD | Culley_2001 | not_relevant | 0 | 0 | The paper is a general review of moxifloxacin, not amiodarone, and does not report any population pharmacodynamic or exposure-response modeling. |
| PGx | Dec_2003 | not_relevant | 0 | 0 | The paper discusses digoxin, not amiodarone, and does not report any pharmacogenomic effects. |
| PGx | Del_2017 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving amiodarone as a CYP2C8 substrate but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| PGx | Funck-Brentano_1991 | not_relevant | 0 | 10 | The study investigates how amiodarone affects the metabolism of other drugs (dextromethorphan, mephenytoin, isoniazid) based on their genetic polymorphisms, but it does not report how genetic variants affect the pharmacokinetics or pharmacodynamics of amiodarone itself. |
| PD | Germack_1996 | not_relevant | 1 | 1 | The paper describes an in vitro/in vivo mechanistic study using radioligand binding and lipolysis assays, not a population pharmacodynamic or exposure-response modeling study. |
| PD | Hinkovska-Galcheva_2021 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition assays (IC50) and cell-based screening for phospholipidosis, but does not present a population pharmacodynamic or exposure-response model with estimated PD parameters. |
| PD | Holmes_2000 | not_relevant | 0 | 0 | The paper reports on in vitro single-channel and whole-cell electrophysiology experiments, not a population pharmacodynamic or exposure-response model. |
| PGx | Klotz_2007 | not_relevant | 1 | 2 | The paper discusses pharmacokinetics in liver disease (phenotypic impairment) rather than genetic variants, and only lists metabolic enzymes for amiodarone without reporting genotype-specific PK/PD data. |
| popPK | Kolowrat_2025 | irrelevant | not captured | not captured | The paper models apixaban pharmacokinetics and uses amiodarone only as a covariate to assess its effect on apixaban clearance, without reporting any PK parameters for amiodarone itself. |
| PD | Kowey_1997 | not_relevant | 0 | 0 | The text is a clinical review summarizing pharmacology and efficacy trials, but it does not report a population pharmacodynamic model or estimated PD parameters. |
| PGx | Kumar_2006 | not_relevant | 0 | 0 | The study investigates the effect of CYP2C9 genotypes on the metabolism of naproxen in the presence of amiodarone, but does not report how genotype affects the pharmacokinetics or pharmacodynamics of amiodarone itself. |
| PGx | Lai_2009 | not_relevant | 0 | 0 | The paper discusses CYP2C8 structure and mutagenesis effects on substrates like paclitaxel and fluvastatin, but does not report pharmacogenomic data or PK/PD parameters for amiodarone. |
| PGx | Laurberg_2005 | not_relevant | 0 | 0 | The text discusses amiodarone-induced hypothyroidism as a drug side effect but does not report any pharmacogenomic studies linking gene variants to changes in amiodarone's PK or PD parameters. |
| PD | Lesko_1989 | not_relevant | 0 | 0 | The text is a narrative review of drug-drug interactions involving amiodarone, focusing on pharmacokinetic mechanisms and clinical management, without reporting any population pharmacodynamic or exposure-response modeling. |
| PD | Li_2025 | not_relevant | 2 | 1 | The paper focuses on rivaroxaban, not amiodarone, and uses statistical exposure-response analysis (ROC/cut-offs) rather than a mechanistic population PD model with estimated parameters. |
| PD | Maideen_2021 | not_relevant | 0 | 0 | The paper is a narrative review of drug interactions for beta-blockers and does not report any population pharmacodynamic modeling or estimated PD parameters for amiodarone. |
| PGx | Maideen_2021 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving amiodarone and beta-blockers, but does not report any pharmacogenomic effects (gene variants) on amiodarone's PK or PD parameters. |
| PGx | Mak_2019 | not_relevant | 0 | 0 | The study investigates pharmacogenomics of warfarin, not amiodarone; amiodarone is only mentioned as a concomitant medication affecting warfarin dose. |
| PD | Makam_2022 | not_relevant | 2 | 8 | The study is an ex vivo organ bath experiment fitting standard dose-response curves (EC50), not a population pharmacodynamic model estimating inter-individual variability or exposure-response relationships in patients. |
| PD | Mar_2022 | not_relevant | 0 | 0 | The paper is a narrative review of drug-drug interactions involving antiarrhythmic drugs and does not report any population pharmacodynamic modeling or estimated PD parameters for amiodarone. |
| PGx | McDonald_2015 | not_relevant | 1 | 0 | The study investigates in vitro enzyme inhibition by amiodarone metabolites to predict drug-drug interactions, but does not report clinical pharmacogenomic effects on PK/PD parameters. |
| PGx | Miners_1998 | not_relevant | 0 | 0 | The paper discusses amiodarone only as an inhibitor of CYP2C9, but does not report any pharmacogenomic effects (gene variant impacts) on the PK or PD parameters of amiodarone itself. |
| popPK | Morath_2025 | irrelevant | not captured | not captured | The paper models apixaban pharmacokinetics and uses amiodarone only as a co-administered covariate without reporting original quantitative PK parameters for amiodarone. |
| PD | Redpath_2019 | not_relevant | 0 | 0 | The text is a clinical review article discussing therapeutic guidelines and pharmacology of cardiac drugs in horses, but it does not report any population pharmacodynamic modeling or exposure-response analysis for amiodarone. |
| popPK | Riva_1982 | irrelevant | 0 | 0 | no extractable full text |
| PGx | Robert_2023 | not_relevant | 2 | 8 | The study investigates a drug-drug interaction (amiodarone inhibiting CYP2D6 metabolism of metoprolol), not a pharmacogenomic effect on amiodarone's own PK/PD parameters; while CYP2D6 genotype is adjusted for, it is not the primary exposure affecting amiodarone. |
| PGx | Sennesael_2018 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on rivaroxaban, not amiodarone; amiodarone is only mentioned as a concomitant medication causing drug-drug interactions. |
| PD | Sermsappasuk_2006 | not_relevant | 2 | 8 | The study uses an isolated perfused rat heart model with individual parameter estimation (n=6), lacking the inter-individual variability and covariate analysis required for a population pharmacodynamic model. |
| PD | Sermsappasuk_2007 | not_relevant | 2 | 8 | The study uses an isolated perfused rat heart model (in vitro) rather than a population of subjects, and focuses on verapamil's PK/PD with amiodarone as a modulator, not a population PD model for amiodarone itself. |
| PD | Stäubli_1988 | not_relevant | 0 | 0 | The paper is a general review discussing pharmacokinetics and clinical efficacy without presenting any population pharmacodynamic modeling or estimated exposure-response parameters. |
| PD | Vazzana_2007 | not_relevant | 0 | 0 | The paper is a medicinal chemistry study reporting in vitro pharmacological screening of new compounds, not a population pharmacodynamic or exposure-response modeling study for amiodarone. |
| PGx | Vrkić_2018 | not_relevant | 0 | 0 | The paper focuses on rosuvastatin and ticagrelor; amiodarone is only mentioned as a concomitant medication in the case report without any pharmacogenomic analysis or PK/PD data specific to it. |
| popPK | Xia_2024 | irrelevant | not captured | not captured | The paper focuses on warfarin population PK/PD modeling, with amiodarone only evaluated as a concomitant covariate affecting warfarin's pharmacodynamics rather than reporting any amiodarone pharmacokinetic parameters. |
| PGx | Xia_2024 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on warfarin, not amiodarone; amiodarone is only mentioned as a concomitant medication affecting warfarin's PD. |
| PD | Xue_2019 | not_relevant | 2 | 1 | The paper reports a population dose-response model for warfarin, not amiodarone; amiodarone is only included as a covariate affecting warfarin's pharmacodynamics. |
| PGx | Xue_2019 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on warfarin, not amiodarone; amiodarone is only mentioned as a concomitant medication affecting warfarin response. |
| PGx | Yamreudeewong_2003 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving amiodarone but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Yang_2021 | not_relevant | 0 | 0 | The paper describes a computational method for drug repositioning based on chemical substructures and protein domains, mentioning amiodarone only as an example of anti-arrhythmic effect without reporting any pharmacogenomic effects on PK or PD parameters. |
| PGx | Yonezawa_2002 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (amiodarone affecting mexiletine pharmacokinetics) and does not report any gene variants, genotypes, or phenotypes influencing amiodarone's PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_amiodarone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
