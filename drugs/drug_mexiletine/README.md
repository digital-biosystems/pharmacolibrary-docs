# mexiletine

- **generic name:** mexiletine
- **ATC codes:** `C01BB02`
- **DrugBank:** [DB00379](https://go.drugbank.com/drugs/DB00379)
- **groups:** approved, investigational

## About

**Description.** Antiarrhythmic agent pharmacologically similar to lidocaine. It may have some anticonvulsant properties.

**Indication.** For the treatment of ventricular tachycardia and symptomatic premature ventricular beats, and prevention of ventricular fibrillation.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 11:05 | 23:10 | 1/0/0 | 0/1/0 | 0/0/5 | 77,945/49,538 | ollama / qwen3.8:27b-mtp-q8_0 | 19 | 8/11 | 17/2 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Vozeh_1982](drugs/drug_mexiletine/Mexiletine_Vozeh1982_reference.md) | Vozeh S et al., Population pharmacokinetic parameters i…, European journal of clinica… (1982) | [10.1007/BF00605996](https://doi.org/10.1007/BF00605996) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Hong_1984](drugs/drug_mexiletine/pd_Hong_1984_unknown.md) | Hong CY et al., Local anaesthetic effect of antiarrhyth…, British journal of clinical… (1984) | [10.1111/j.1365-2125.1984.tb02404.x](https://doi.org/10.1111/j.1365-2125.1984.tb02404.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Broly_1991](drugs/drug_mexiletine/pgx_Broly_1991_CYP2D6_Q27.md) | Broly F et al., The metabolism of mexiletine in relatio…, British journal of clinical… (1991) | [10.1111/j.1365-2125.1991.tb03931.x](https://doi.org/10.1111/j.1365-2125.1991.tb03931.x) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **SCN5A** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Clancy_2007](drugs/drug_mexiletine/pgx_Clancy_2007_SCN5A_Q100.md) | Clancy CE et al., Pharmacogenetics and anti-arrhythmic dr…, American journal of physiol… (2007) | [10.1152/ajpheart.00312.2006](https://doi.org/10.1152/ajpheart.00312.2006) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **SCN5A** | `Q321` · EC50 | target | [Marras_2026](drugs/drug_mexiletine/pgx_Marras_2026_SCN5A_Q321.md) | Marras (2026) | — |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **SCN5A** | `Q321` · EC50 | target | [Marras_2026_2](drugs/drug_mexiletine/pgx_Marras_2026_2_SCN5A_Q321.md) | Marras (2026) | — |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q305` · kfm | metabolism | [Senda_2001](drugs/drug_mexiletine/pgx_Senda_2001_CYP2D6_Q305.md) | Senda C et al., Influence of the CYP2D6*10 allele on th…, British journal of clinical… (2001) | [10.1046/j.0306-5251.2001.01411.x](https://doi.org/10.1046/j.0306-5251.2001.01411.x) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 107 matched, 60 returned
- **screened:** 16  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Häselbarth_1981.pdf` | Häselbarth V et al., Kinetics and bioavailability of mexilet…, Clinical pharmacology and t… (1981) | popPK | 10 | [10.1038/clpt.1981.103](https://doi.org/10.1038/clpt.1981.103) | [7226704](https://pubmed.ncbi.nlm.nih.gov/7226704) | The paper reports quantitative PK parameters (CL, V, t1/2) for mexiletine in humans with specific numeric values provided in the text. |
| `Ohashi_1984.pdf` | Ohashi K et al., Pharmacokinetics and the antiarrhythmic…, Arzneimittel-Forschung (1984) | popPK | 10 | not captured | [6540110](https://pubmed.ncbi.nlm.nih.gov/6540110) | The paper reports quantitative pharmacokinetic parameters (half-life, volume of distribution, clearance) for mexiletine in humans, and the numeric values are explicitly present in the provided text. |
| `Vozeh_1982.pdf` | Vozeh S et al., Population pharmacokinetic parameters i…, European journal of clinica… (1982) | popPK | 10 | [10.1007/BF00605996](https://doi.org/10.1007/BF00605996) | [7151850](https://pubmed.ncbi.nlm.nih.gov/7151850) | The paper reports quantitative population pharmacokinetic parameters (CL, Vd, ka) for mexiletine with specific numeric values and variability directly in the text. |
| `Labbé_2000.pdf` | Labbé L et al., Pharmacokinetic and pharmacodynamic int…, Clinical pharmacology and t… (2000) | pgx | 8 | [10.1067/mcp.2000.108023](https://doi.org/10.1067/mcp.2000.108023) | [10945315](https://www.ncbi.nlm.nih.gov/pubmed/10945315) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Otani_2003.pdf` | Otani M et al., Impact of CYP2D6*10 on mexiletine pharm…, European journal of clinica… (2003) | pgx | 8 | [10.1007/s00228-003-0656-5](https://doi.org/10.1007/s00228-003-0656-5) | [12937870](https://www.ncbi.nlm.nih.gov/pubmed/12937870) | metadata signals extractable PGX data (CYP2D6*10, PK/PD-context) |
| `Hara_2005.pdf` | Hara Y et al., Inhibitory effects of psychotropic drug…, Xenobiotica; the fate of fo… (2005) | pgx | 7 | [10.1080/00498250500158134](https://doi.org/10.1080/00498250500158134) | [16192107](https://www.ncbi.nlm.nih.gov/pubmed/16192107) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Konishi_1999.pdf` | Konishi H et al., Preferential inhibition of CYP1A enzyme…, European journal of drug me… (1999) | pgx | 7 | [10.1007/BF03190360](https://doi.org/10.1007/BF03190360) | [10510742](https://www.ncbi.nlm.nih.gov/pubmed/10510742) | metadata signals extractable PGX data (CYP1A, PK/PD-context) |
| `Kusumoto_2001.pdf` | Kusumoto M et al., Effect of fluvoxamine on the pharmacoki…, Clinical pharmacology and t… (2001) | pgx | 7 | [10.1067/mcp.2001.113182](https://doi.org/10.1067/mcp.2001.113182) | [11240973](https://www.ncbi.nlm.nih.gov/pubmed/11240973) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Labbé_1999.pdf` | Labbé L et al., Clinical pharmacokinetics of mexiletine, Clinical pharmacokinetics (1999) | pgx | 7 | [10.2165/00003088-199937050-00002](https://doi.org/10.2165/00003088-199937050-00002) | [10589372](https://www.ncbi.nlm.nih.gov/pubmed/10589372) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Ueno_2002.pdf` | Ueno K et al., Evaluation of mexiletine clearance in a…, The Annals of pharmacothera… (2002) | pgx | 7 | [10.1345/aph.10188](https://doi.org/10.1345/aph.10188) | [11847941](https://www.ncbi.nlm.nih.gov/pubmed/11847941) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Yonezawa_2002.pdf` | Yonezawa E et al., Lack of interaction between amiodarone…, Journal of clinical pharmac… (2002) | pgx | 7 | [10.1177/00912700222011265](https://doi.org/10.1177/00912700222011265) | [11865972](https://www.ncbi.nlm.nih.gov/pubmed/11865972) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Brugnoni_2025.pdf` | Brugnoni R et al., Pharmacogenetic pilot study of CYP2D6 a…, Gene (2025) | pgx | 5 | [10.1016/j.gene.2025.149536](https://doi.org/10.1016/j.gene.2025.149536) | [40324568](https://www.ncbi.nlm.nih.gov/pubmed/40324568) | metadata signals extractable PGX data (CYP2D6) |
| `Buchert_1992.pdf` | Buchert E et al., Clinical implications of variable antia…, Pharmacogenetics (1992) | pgx | 5 | [10.1097/00008571-199202000-00002](https://doi.org/10.1097/00008571-199202000-00002) | [1302039](https://www.ncbi.nlm.nih.gov/pubmed/1302039) | metadata signals extractable PGX data (CYP2D6) |
| `Hanioka_2006.pdf` | Hanioka N et al., Catalytic roles of CYP2D6.10 and CYP2D6…, Biochemical pharmacology (2006) | pgx | 5 | [10.1016/j.bcp.2006.01.019](https://doi.org/10.1016/j.bcp.2006.01.019) | [16527257](https://www.ncbi.nlm.nih.gov/pubmed/16527257) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-09-09T08:28:44.988570+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Buchert_1992 | not_relevant | 2 | 0 | The text is a general introduction discussing the potential for pharmacogenomic prediction in antiarrhythmic drugs, including mexiletine, but does not report specific experimental data, effect sizes, or quantitative PK/PD changes for mexiletine. |
| PGx | Choules_2025 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (DDI) between fezolinetant and mexiletine, not a pharmacogenomic effect on mexiletine's PK/PD. |
| popPK | Cros_2012 | irrelevant | 0 | 0 | The study is a cardiac safety assessment in dogs focusing on QRS prolongation and does not report pharmacokinetic parameters for mexiletine. |
| PD | Cros_2012 | not_relevant | 2 | 1 | The study reports qualitative effects and small mean differences in QRS duration at specific time points, but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., EC50, Emax) for mexiletine. |
| popPK | Gualdani_2017 | irrelevant | 0 | 0 | The paper describes the electrophysiological properties of a mexiletine-derived compound (MC450) on hERG channels and does not report any pharmacokinetic parameters for mexiletine. |
| PGx | Guo_2021 | not_relevant | 0 | 0 | The paper is a general review of CYP1A2 metabolism and regulation, mentioning mexiletine only as a substrate without reporting specific pharmacogenomic effects on its PK/PD parameters. |
| PGx | Hara_2005 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (inhibition by psychotropic drugs) in human liver microsomes, not the effect of genetic variants (pharmacogenomics) on mexiletine PK/PD. |
| popPK | Hong_1984 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay measuring sperm immobilization (local anesthetic effect) and does not report any pharmacokinetic parameters for mexiletine. |
| PGx | Kanacher_2020 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDIs) and PBPK model development; while it mentions CYP2C19 polymorphisms, it does not report a pharmacogenomic effect on the PK/PD parameters of mexiletine. |
| popPK | Kohjitani_2003 | irrelevant | 0 | 0 | The study is a mechanistic investigation of mexiletine's effect on esophageal sphincter relaxation in rabbits, reporting pharmacodynamic parameters (EC50) rather than pharmacokinetic disposition parameters. |
| PGx | Konishi_1999 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition by mexiletine, not a pharmacogenomic effect of a gene variant on mexiletine's PK or PD. |
| PGx | Kusumoto_2001 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (fluvoxamine) rather than a pharmacogenomic effect (gene variant/genotype). |
| PGx | Lonsdale_2016 | not_relevant | 0 | 0 | The paper is a computational study of the reaction mechanism of mexiletine metabolism by CYP1A2 and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Michaud_2021 | not_relevant | 2 | 0 | The paper is a mini-review discussing the concept of phenoconversion with illustrative cases, but it does not report specific quantitative pharmacokinetic or pharmacodynamic data or fitted effect sizes for mexiletine. |
| PGx | Modoni_2020 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of mexiletine in myotonia patients but does not report pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, receptor binding) or specific pharmacogenomic effects on these parameters. |
| PGx | Momo_2010 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (mexiletine inhibiting CYP1A2 affecting tizanidine), not a pharmacogenomic effect (gene variant) on mexiletine's PK/PD. |
| PGx | Nakajima_1998 | not_relevant | 0 | 0 | The study is an in vitro investigation of CYP isoform contributions to mexiletine metabolism and does not report in vivo pharmacokinetic or pharmacodynamic effects of specific gene variants or genotypes. |
| popPK | Okada_2021 | irrelevant | 0 | 0 | The study is a simulation of chloroquine and hydroxychloroquine arrhythmogenicity where mexiletine is used only as a comparator anti-arrhythmic agent, and no pharmacokinetic parameters for mexiletine are reported. |
| PD | Okada_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of chloroquine and hydroxychloroquine; mexiletine is only mentioned qualitatively as an antiarrhythmic agent that prevents TdP in simulations, with no specific PD parameters or concentration-effect data reported for it. |
| PGx | Okuwaki_2019 | not_relevant | 0 | 0 | The paper reports a clinical case of a pharmacodynamic response (QTc shortening) to mexiletine in a patient with a specific genotype, but it does not report a pharmacogenomic study analyzing how the gene variant changes a PK/PD parameter compared to other genotypes or a population. |
| popPK | Risi_2025 | irrelevant | 0 | 0 | The study evaluates lamotrigine as the subject drug for myotonic dystrophy, with mexiletine mentioned only as a comparator or background context, and no pharmacokinetic parameters are reported. |
| popPK | Ruijs_2022 | irrelevant | 1 | 0 | The study is a pharmacodynamic biomarker validation using mexiletine as a probe drug and does not report quantitative pharmacokinetic parameters (CL, V, etc.) in the provided text. |
| popPK | Sauer_2025 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology paper investigating empagliflozin as a pharmacological chaperone, where mexiletine is used only as a comparator agent and no pharmacokinetic parameters are reported. |
| PD | Sauer_2025 | not_relevant | 4 | 4 | The paper reports a concentration-response relationship (EC50 = 94 nM) for empagliflozin, but for mexiletine it only provides qualitative comparisons and single-dose effects without a fitted dose-response curve or numeric PD parameters. |
| PGx | Suzuki_2010 | not_relevant | 0 | 0 | The paper focuses on pediatric dose estimation based on physiological development (age, BSA, CYP activity) and does not report pharmacogenomic effects of specific gene variants on mexiletine PK/PD. |
| popPK | Tsutsumi_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial effects in rat myocytes and does not report pharmacokinetic parameters for mexiletine. |
| popPK | Uenaka_1998 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding mexiletine pharmacokinetics. |
| PGx | Ueno_2002 | not_relevant | 0 | 0 | The paper evaluates mexiletine clearance in a Japanese population and mentions CYP2D6/CYP1A2 roles, but it does not report specific gene variant/genotype data or demonstrate a pharmacogenomic effect on PK parameters. |
| PGx | Vandamme_1993 | not_relevant | 2 | 0 | The study reports in vitro stereoselective metabolism by CYP2D6 but does not report in vivo pharmacokinetic or pharmacodynamic parameters or specific genotype-based effect sizes. |
| popPK | Vazzana_2007 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of novel analogues on isolated heart tissues and does not report pharmacokinetic parameters for mexiletine. |
| PD | Vazzana_2007 | not_relevant | 4 | 2 | The paper reports qualitative dose-dependent effects and mentions EC50 values for analogues, but does not provide numeric PD parameters or extractable concentration-effect curves for mexiletine itself. |
| PGx | Vereb_2021 | not_relevant | 0 | 0 | The paper describes the clinical and genetic spectrum of non-dystrophic myotonias and mentions mexiletine as a treatment, but it does not report any pharmacogenomic effects of gene variants on the pharmacokinetics or pharmacodynamics of mexiletine. |
| popPK | Vivekanandam_2024 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing mexiletine and lamotrigine for myotonia and does not report any pharmacokinetic parameters or quantitative disposition data for mexiletine. |
| popPK | Vozeh_1987 | irrelevant | 2 | 0 | The paper is a methodological sensitivity analysis using mexiletine as a simulation example, and no specific numeric PK parameter values for mexiletine are provided in the evidence. |
| popPK | Whiting_1986 | irrelevant | 0 | 0 | The paper is a general review of population pharmacokinetics theory and mentions mexiletine only as an example of a drug where NONMEM has been applied, without providing any original quantitative PK parameter values. |
| popPK | Yonezawa_2002 | irrelevant | 0 | 0 | The evidence provided contains only the title of a study on drug interactions, with no quantitative pharmacokinetic parameters or data for mexiletine. |
| PGx | Yonezawa_2002 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction between amiodarone and mexiletine, not a pharmacogenomic effect. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_mexiletine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
