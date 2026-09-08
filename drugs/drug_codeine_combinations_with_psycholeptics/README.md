# codeine, combinations with psycholeptics

- **generic name:** codeine, combinations with psycholeptics
- **ATC codes:** `N02AA79`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 15:32 | 28:47 | 0/0/0 | 0/0/0 | 0/0/9 | 189,331/3,684 | ollama / qwen3.8:27b-mtp-q8_0 | 20 | 0/0 | 15/5 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q3` · CLint | formation | [Anderson_2026](drugs/drug_codeine_combinations_with_psycholeptics/pgx_Anderson_2026_CYP2D6_Q3.md) | Anderson BJ et al., Codeine and Metabolite Concentrations i…, Paediatric anaesthesia (2026) | [10.1002/pan.70227](https://doi.org/10.1002/pan.70227) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Ashraf_2024](drugs/drug_codeine_combinations_with_psycholeptics/pgx_Ashraf_2024_CYP2D6_Q100.md) | Ashraf MW et al., Population Pharmacokinetic Quantificati…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01433-9](https://doi.org/10.1007/s40262-024-01433-9) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q22` · CL | metabolism | [Chen_1991](drugs/drug_codeine_combinations_with_psycholeptics/pgx_Chen_1991_CYP2D6_Q22.md) | Chen ZR et al., Disposition and metabolism of codeine a…, British journal of clinical… (1991) | [10.1111/j.1365-2125.1991.tb05550.x](https://doi.org/10.1111/j.1365-2125.1991.tb05550.x) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q305` · kfm | metabolism | [Ciszkowski_2009](drugs/drug_codeine_combinations_with_psycholeptics/pgx_Ciszkowski_2009_CYP2D6_Q305.md) | Ciszkowski C et al., Codeine, ultrarapid-metabolism genotype…, The New England journal of… (2009) | [10.1056/NEJMc0904266](https://doi.org/10.1056/NEJMc0904266) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **COMT** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Crews_2021](drugs/drug_codeine_combinations_with_psycholeptics/pgx_Crews_2021_COMT_Q100.md) | Crews KR et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2149](https://doi.org/10.1002/cpt.2149) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Crews_2021](drugs/drug_codeine_combinations_with_psycholeptics/pgx_Crews_2021_CYP2D6_Q100.md) | Crews KR et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2149](https://doi.org/10.1002/cpt.2149) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **OPRM1** | `Q320` · Emax | target | [Crews_2021](drugs/drug_codeine_combinations_with_psycholeptics/pgx_Crews_2021_OPRM1_Q320.md) | Crews KR et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2149](https://doi.org/10.1002/cpt.2149) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Persson_1995](drugs/drug_codeine_combinations_with_psycholeptics/pgx_Persson_1995_CYP2D6_Q100.md) | Persson K et al., Patient-controlled analgesia (PCA) with…, British journal of clinical… (1995) | [10.1111/j.1365-2125.1995.tb04428.x](https://doi.org/10.1111/j.1365-2125.1995.tb04428.x) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Wilcox_2000](drugs/drug_codeine_combinations_with_psycholeptics/pgx_Wilcox_2000_CYP2D6_Q100.md) | Wilcox RA et al., Variable cytochrome P450 2D6 expression…, Anaesthesia and intensive c… (2000) | [10.1177/0310057X0002800602](https://doi.org/10.1177/0310057X0002800602) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 594 matched, 110 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_17 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ballester_2022.pdf` | Ballester P et al., CYP2D6 phenotypes and opioid metabolism…, Expert opinion on drug meta… (2022) | pgx | 8 | [10.1080/17425255.2022.2085552](https://doi.org/10.1080/17425255.2022.2085552) | [35649041](https://www.ncbi.nlm.nih.gov/pubmed/35649041) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Grond_2004.pdf` | Grond S et al., Clinical pharmacology of tramadol, Clinical pharmacokinetics (2004) | pgx | 8 | [10.2165/00003088-200443130-00004](https://doi.org/10.2165/00003088-200443130-00004) | [15509185](https://www.ncbi.nlm.nih.gov/pubmed/15509185) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Hertz_2021.pdf` | Hertz DL et al., Analysis Approaches to Identify Pharmac…, Clinical pharmacology and t… (2021) | pgx | 8 | [10.1002/cpt.2312](https://doi.org/10.1002/cpt.2312) | [34043820](https://www.ncbi.nlm.nih.gov/pubmed/34043820) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Leppert_2011.pdf` | Leppert W, CYP2D6 in the metabolism of opioids for…, Pharmacology (2011) | pgx | 8 | [10.1159/000326085](https://doi.org/10.1159/000326085) | [21494059](https://www.ncbi.nlm.nih.gov/pubmed/21494059) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Linares_2015.pdf` | Linares OA et al., CYP2D6 phenotype-specific codeine popul…, Journal of pain & palliativ… (2015) | pgx | 8 | [10.3109/15360288.2014.997854](https://doi.org/10.3109/15360288.2014.997854) | [25562725](https://www.ncbi.nlm.nih.gov/pubmed/25562725) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Magarbeh_2021.pdf` | Magarbeh L et al., Reviewing pharmacogenetics to advance p…, Biomedicine & pharmacothera… (2021) | pgx | 8 | [10.1016/j.biopha.2021.112060](https://doi.org/10.1016/j.biopha.2021.112060) | [34523422](https://www.ncbi.nlm.nih.gov/pubmed/34523422) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Nahid_2025.pdf` | Nahid NA et al., CYP2D6 Phenotypes and Emergency Departm…, JAMA network open (2025) | pgx | 8 | [10.1001/jamanetworkopen.2025.23543](https://doi.org/10.1001/jamanetworkopen.2025.23543) | [40720122](https://www.ncbi.nlm.nih.gov/pubmed/40720122) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Peiró_2018.pdf` | Peiró AM, Pharmacogenetics in Pain Treatment, Advances in pharmacology (S… (2018) | pgx | 8 | [10.1016/bs.apha.2018.04.004](https://doi.org/10.1016/bs.apha.2018.04.004) | [29801577](https://www.ncbi.nlm.nih.gov/pubmed/29801577) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Somogyi_2007.pdf` | Somogyi AA et al., Pharmacogenetics of opioids, Clinical pharmacology and t… (2007) | pgx | 8 | [10.1038/sj.clpt.6100095](https://doi.org/10.1038/sj.clpt.6100095) | [17339873](https://www.ncbi.nlm.nih.gov/pubmed/17339873) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Ereshefsky_1995.pdf` | Ereshefsky L et al., Antidepressant drug interactions and th…, Clinical pharmacokinetics (1995) | pgx | 7 | [10.2165/00003088-199500291-00004](https://doi.org/10.2165/00003088-199500291-00004) | [8846618](https://www.ncbi.nlm.nih.gov/pubmed/8846618) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Cavallari_2026.pdf` | Cavallari LH et al., CYP2D6-Guided Opioid Management and Pos…, JAMA network open (2026) | pgx | 5 | [10.1001/jamanetworkopen.2025.58299](https://doi.org/10.1001/jamanetworkopen.2025.58299) | [41719044](https://www.ncbi.nlm.nih.gov/pubmed/41719044) | metadata signals extractable PGX data (CYP2D6) |
| `Johansson_1991.pdf` | Johansson I et al., Genetic analysis of the interethnic dif…, European journal of clinica… (1991) | pgx | 5 | [10.1007/BF00279968](https://doi.org/10.1007/BF00279968) | [1679392](https://www.ncbi.nlm.nih.gov/pubmed/1679392) | metadata signals extractable PGX data (CYP2D6) |
| `Kiang_2005.pdf` | Kiang TK et al., UDP-glucuronosyltransferases and clinic…, Pharmacology & therapeutics (2005) | pgx | 5 | [10.1016/j.pharmthera.2004.10.013](https://doi.org/10.1016/j.pharmthera.2004.10.013) | [15781124](https://www.ncbi.nlm.nih.gov/pubmed/15781124) | metadata signals extractable PGX data (UGT1A7) |
| `Mikus_1994.pdf` | Mikus G et al., Endogenous codeine and morphine in poor…, The Journal of pharmacology… (1994) | pgx | 5 | not captured | [8113966](https://www.ncbi.nlm.nih.gov/pubmed/8113966) | metadata signals extractable PGX data (CYP2D6) |
| `Piccininni_2024.pdf` | Piccininni M et al., Using Negative Control Populations to A…, Epidemiology (Cambridge, Ma… (2024) | pgx | 5 | [10.1097/EDE.0000000000001724](https://doi.org/10.1097/EDE.0000000000001724) | [38465949](https://www.ncbi.nlm.nih.gov/pubmed/38465949) | metadata signals extractable PGX data (CYP2D6) |
| `Sindrup_1995.pdf` | Sindrup SH et al., The pharmacogenetics of codeine hypoalg…, Pharmacogenetics (1995) | pgx | 5 | [10.1097/00008571-199512000-00001](https://doi.org/10.1097/00008571-199512000-00001) | [8845855](https://www.ncbi.nlm.nih.gov/pubmed/8845855) | metadata signals extractable PGX data (CYP2D6) |
| `de_2008.pdf` | de Leon J, CYP2D6 genotyping and codeine, Paediatric anaesthesia (2008) | pgx | 5 | [10.1111/j.1460-9592.2008.02420.x](https://doi.org/10.1111/j.1460-9592.2008.02420.x) | [18230077](https://www.ncbi.nlm.nih.gov/pubmed/18230077) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-08-27T15:24:48.236633+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Armstrong_2025 | not_relevant | 2 | 1 | The paper is a review discussing CYP2D6 pharmacogenomics for opioids (codeine) but does not report data on codeine combinations with psycholeptics. |
| PGx | Baldo_2023 | not_relevant | 2 | 1 | The paper is a review of adverse drug reactions and mentions codeine pharmacogenomics (CYP2D6) only in the context of ADRs and general metabolic pathways, without reporting specific quantitative PK/PD parameter changes for codeine combinations with psycholeptics. |
| PGx | Hendrickson_2012 | not_relevant | 0 | 0 | The paper is a review of opioid transfer into breast milk and does not report specific pharmacogenomic effect sizes on PK/PD parameters for codeine combinations with psycholeptics. |
| PGx | Kalow_1989 | not_relevant | 0 | 0 | The paper discusses codeine metabolism in the context of debrisoquine polymorphism but does not report pharmacogenomic effects on PK/PD parameters for codeine combinations with psycholeptics. |
| PGx | Leppert_2016 | not_relevant | 2 | 0 | The paper discusses dihydrocodeine (not codeine combinations) and mentions CYP2D6 phenotypes qualitatively, but provides no quantitative pharmacogenomic effect sizes or specific PK/PD parameter changes. |
| popPK | Lyngstad_2023 | irrelevant | 0 | 0 | The study is a pharmacodynamic/clinical trial assessing analgesic efficacy and does not report pharmacokinetic parameters (CL, V, ka, etc.) for codeine or its combinations. |
| PD | Lyngstad_2023 | not_relevant | 2 | 1 | The study is a fixed-dose clinical trial comparing efficacy outcomes (SPI, SPID) between groups but does not report pharmacokinetic data or fit a concentration-effect/dose-response model to derive PD parameters like Emax or EC50. |
| popPK | Medina_2026 | irrelevant | 0 | 0 | The paper is a retrospective cohort study on delirium risk associated with opioid use, not a pharmacokinetic study, and reports no PK parameters for codeine combinations. |
| PD | Medina_2026 | not_relevant | 3 | 2 | The study reports hazard ratios for delirium risk based on categorical dose bands (MME/day) and opioid type, but explicitly states no clear dose-response association was observed and does not provide a continuous exposure-response curve or specific PD parameters like Emax or EC50. |
| PGx | Rollinson_2020 | not_relevant | 0 | 0 | The paper is a general review of pharmacogenomics in primary care and does not report specific pharmacokinetic or pharmacodynamic data for codeine combinations with psycholeptics. |
| popPK | Smith_2001 | irrelevant | 0 | 0 | The paper is a clinical efficacy meta-analysis of paracetamol/codeine combinations reporting NNT and pain relief rates, not a pharmacokinetic study with disposition parameters. |
| PGx | Sobczak_2020 | not_relevant | 4 | 5 | The paper discusses CYP2D6 polymorphisms affecting codeine metabolism (PK) but is a general review on misuse and does not report specific quantitative pharmacogenomic effect sizes or focus on the specific combination with psycholeptics. |
| popPK | Sohns_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on GABA and chloride transport in DRG neurons, using codeine only as a tool to induce itch, and contains no pharmacokinetic parameters for codeine or its combinations. |
| PD | Sohns_2024 | not_relevant | 0 | 0 | The paper investigates GABA and NKCC1 inhibition on pain/itch; codeine is used only as a tool to induce itch, and no exposure-response or dose-response relationship for codeine combinations with psycholeptics is reported. |
| PGx | Wong_2022 | not_relevant | 0 | 0 | The paper is a narrative review of opioid pharmacogenomics and does not report specific pharmacokinetic or pharmacodynamic parameters for codeine combinations with psycholeptics. |
| popPK | Zhang_1996 | irrelevant | 0 | 0 | The paper is a meta-analysis of analgesic efficacy (pain relief scores) and does not report any pharmacokinetic parameters for codeine or its combinations. |
| PD | Zhang_1996 | not_relevant | 3 | 2 | The paper is a meta-analysis of clinical trials that explicitly states there was no significant dose-response relationship and does not report pharmacokinetic data or numeric PD parameters (Emax, EC50) for codeine combinations. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_codeine_combinations_with_psycholeptics`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
