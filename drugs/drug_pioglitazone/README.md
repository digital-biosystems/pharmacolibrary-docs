<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;pioglitazone&quot;}]"></div>

# pioglitazone

- **generic name:** pioglitazone
- **ATC codes:** `A10BD05`, `A10BD06`, `A10BD09`, `A10BD12`, `A10BG03`
- **DrugBank:** [DB01132](https://go.drugbank.com/drugs/DB01132)
- **groups:** approved, investigational

## About

**Description.** Pioglitazone is an antihyperglycemic used as an adjunct to diet, exercise, and other antidiabetic medications to manage type 2 diabetes mellitus.[L11416,L11419,L11422,L11425] It is administered as a racemic mixture, though there is no pharmacologic difference between the enantiomers and they appear to interconvert _in vivo_ with little consequence.[L11416] The thiazolidinedione class of medications, which also includes [rosiglitazone] and [troglitazone], exerts its pharmacological effect primarily by promoting insulin sensitivity and the improved uptake of blood glucose[L11416] via agonism at the peroxisome proliferator-activated receptor-gamma (PPARγ).[A19757] PPARs are ligand-activated transcription factors that are involved in the expression of more than 100 genes and affect numerous metabolic processes, most notably lipid and glucose homeostasis.[A19759]

Thiazolidinediones, including pioglitazone, have fallen out of favor in recent years due to the presence of multiple adverse effects and warnings regarding their use (e.g. congestive heart failure, bladder cancer) and the availability of safer and more effective alternatives for patients with type 2 diabetes mellitus.[L11461]

**Indication.** Pioglitazone is indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus.[L11416] It is also available in combination with [metformin],[L11419] [glimepiride],[L11422] or [alogliptin][L11425] for the same indication.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 23:31 | 16:38 | 1/0/0 | 0/0/0 | 0/0/4 | 95,969/8,283 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl, Vd, k12, k21 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Kadam_2013](drugs/drug_pioglitazone/Pioglitazone_Kadam2013_reference.md) | Kadam R et al., Effect of Cytochrome P450 2C8*3 on the…, Biological & pharmaceutical… (2013) | [10.1248/bpb.b12-00657](https://doi.org/10.1248/bpb.b12-00657) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C8** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Kadam_2013](drugs/drug_pioglitazone/pgx_Kadam_2013_CYP2C8_Q100.md) | Kadam R et al., Effect of Cytochrome P450 2C8*3 on the…, Biological & pharmaceutical… (2013) | [10.1248/bpb.b12-00657](https://doi.org/10.1248/bpb.b12-00657) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ADORA1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kawaguchi-Suzuki_2018](drugs/drug_pioglitazone/pgx_Kawaguchi_Suzuki_2018_ADORA1_Q100.md) | Kawaguchi-Suzuki M et al., A Genetic Score Associates With Pioglit…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00752](https://doi.org/10.3389/fphar.2018.00752) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C8** | `Q27` · CL/F | metabolism | [Kawaguchi-Suzuki_2018](drugs/drug_pioglitazone/pgx_Kawaguchi_Suzuki_2018_CYP2C8_Q27.md) | Kawaguchi-Suzuki M et al., A Genetic Score Associates With Pioglit…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00752](https://doi.org/10.3389/fphar.2018.00752) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **LPL** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kawaguchi-Suzuki_2018](drugs/drug_pioglitazone/pgx_Kawaguchi_Suzuki_2018_LPL_Q100.md) | Kawaguchi-Suzuki M et al., A Genetic Score Associates With Pioglit…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00752](https://doi.org/10.3389/fphar.2018.00752) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 231 matched, 62 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_20 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Clark_2012.pdf` | Clark MH et al., Pharmacokinetics of pioglitazone in lea…, Journal of veterinary pharm… (2012) | popPK | 9 | [10.1111/j.1365-2885.2011.01341.x](https://doi.org/10.1111/j.1365-2885.2011.01341.x) | [22612529](https://pubmed.ncbi.nlm.nih.gov/22612529) | The study reports quantitative pharmacokinetic parameters (bioavailability, half-life, Tmax, Cmax, AUC) for pioglitazone in cats, with values explicitly listed in the abstract text. |
| `Sherwin_2011.pdf` | Sherwin CM et al., Optimal study design for pioglitazone i…, Journal of pharmacokinetics… (2011) | popPK | 8 | [10.1007/s10928-011-9202-8](https://doi.org/10.1007/s10928-011-9202-8) | [21667139](https://pubmed.ncbi.nlm.nih.gov/21667139) | The paper describes a population PK modeling study for pioglitazone, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, which only mentions that estimates were comparable to literature values. |
| `El-Shoukrofy_2025.pdf` | El-Shoukrofy MS et al., Novel thiazolones for the simultaneous…, European journal of medicin… (2025) | pd | 5 | [10.1016/j.ejmech.2025.117415](https://doi.org/10.1016/j.ejmech.2025.117415) | [40022874](https://www.ncbi.nlm.nih.gov/pubmed/40022874) | metadata signals extractable PD data (IC50) |
| `Goto_2017.pdf` | Goto A et al., Influence of the pharmacokinetic profil…, Biopharmaceutics & drug dis… (2017) | pd | 5 | [10.1002/bdd.2076](https://doi.org/10.1002/bdd.2076) | [28294376](https://www.ncbi.nlm.nih.gov/pubmed/28294376) | metadata signals extractable PD data (PK/PD) |
| `Matthews_2009.pdf` | Matthews L et al., Thiazolidinediones are partial agonists…, Endocrinology (2009) | pd | 4 | [10.1210/en.2008-0196](https://doi.org/10.1210/en.2008-0196) | [18801908](https://www.ncbi.nlm.nih.gov/pubmed/18801908) | metadata signals extractable PD data (EC50) |
| `Sears_2007.pdf` | Sears DD et al., Selective modulation of promoter recrui…, Biochemical and biophysical… (2007) | pd | 4 | [10.1016/j.bbrc.2007.10.057](https://doi.org/10.1016/j.bbrc.2007.10.057) | [17963725](https://www.ncbi.nlm.nih.gov/pubmed/17963725) | metadata signals extractable PD data (EC50) |
| `Aquilante_2013.pdf` | Aquilante CL et al., Impact of the CYP2C8 *3 polymorphism on…, British journal of clinical… (2013) | pgx | 8 | [10.1111/j.1365-2125.2012.04343.x](https://doi.org/10.1111/j.1365-2125.2012.04343.x) | [22625877](https://www.ncbi.nlm.nih.gov/pubmed/22625877) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Dawed_2016.pdf` | Dawed AY et al., CYP2C8 and SLCO1B1 Variants and Therape…, Diabetes care (2016) | pgx | 8 | [10.2337/dc15-2464](https://doi.org/10.2337/dc15-2464) | [27271184](https://www.ncbi.nlm.nih.gov/pubmed/27271184) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Kalliokoski_2010.pdf` | Kalliokoski A et al., SLCO1B1 polymorphism and oral antidiabe…, Basic & clinical pharmacolo… (2010) | pgx | 8 | [10.1111/j.1742-7843.2010.00581.x](https://doi.org/10.1111/j.1742-7843.2010.00581.x) | [20406215](https://www.ncbi.nlm.nih.gov/pubmed/20406215) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Tornio_2008.pdf` | Tornio A et al., Trimethoprim and the CYP2C8*3 allele ha…, Drug metabolism and disposi… (2008) | pgx | 8 | [10.1124/dmd.107.018010](https://doi.org/10.1124/dmd.107.018010) | [17913794](https://www.ncbi.nlm.nih.gov/pubmed/17913794) | metadata signals extractable PGX data (CYP2C8*3, PK/PD-context) |
| `Albassam_2019.pdf` | Albassam AA et al., Effect of pterostilbene on in vitro dru…, Saudi pharmaceutical journa… (2019) | pgx | 7 | [10.1016/j.jsps.2019.01.001](https://doi.org/10.1016/j.jsps.2019.01.001) | [30976185](https://www.ncbi.nlm.nih.gov/pubmed/30976185) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Choi_2016.pdf` | Choi JS et al., Effects of pioglitazone on the pharmaco…, European journal of drug me… (2016) | pgx | 7 | [10.1007/s13318-014-0249-y](https://doi.org/10.1007/s13318-014-0249-y) | [25549928](https://www.ncbi.nlm.nih.gov/pubmed/25549928) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Cui_2008.pdf` | Cui X et al., Application and interpretation of hPXR…, Biochemical pharmacology (2008) | pgx | 7 | [10.1016/j.bcp.2008.06.016](https://doi.org/10.1016/j.bcp.2008.06.016) | [18647599](https://www.ncbi.nlm.nih.gov/pubmed/18647599) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Dey_2020.pdf` | Dey S et al., Simultaneous Pharmacokinetics Estimatio…, Journal of chromatographic… (2020) | pgx | 7 | [10.1093/chromsci/bmz116](https://doi.org/10.1093/chromsci/bmz116) | [31836899](https://www.ncbi.nlm.nih.gov/pubmed/31836899) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Jaakkola_2005.pdf` | Jaakkola T et al., Effects of gemfibrozil, itraconazole, a…, Clinical pharmacology and t… (2005) | pgx | 7 | [10.1016/j.clpt.2004.12.266](https://doi.org/10.1016/j.clpt.2004.12.266) | [15900286](https://www.ncbi.nlm.nih.gov/pubmed/15900286) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Jaakkola_2006.pdf` | Jaakkola T et al., Pioglitazone is metabolised by CYP2C8 a…, Basic & clinical pharmacolo… (2006) | pgx | 7 | [10.1111/j.1742-7843.2006.pto_437.x](https://doi.org/10.1111/j.1742-7843.2006.pto_437.x) | [16867170](https://www.ncbi.nlm.nih.gov/pubmed/16867170) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Mamindla_2017.pdf` | Mamindla S et al., Effect of Cinnamomum cassia on the Phar…, Current clinical pharmacolo… (2017) | pgx | 7 | [10.2174/1574884712666170207152020](https://doi.org/10.2174/1574884712666170207152020) | [28176623](https://www.ncbi.nlm.nih.gov/pubmed/28176623) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Pradeepkumar_2022.pdf` | Pradeepkumar B et al., Influence of trazodone on the pharmacod…, Indian journal of pharmacol… (2022) | pgx | 7 | [10.4103/ijp.ijp_311_20](https://doi.org/10.4103/ijp.ijp_311_20) | [35848690](https://www.ncbi.nlm.nih.gov/pubmed/35848690) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Takanohashi_2007.pdf` | Takanohashi T et al., Prediction of the metabolic interaction…, Drug metabolism and pharmac… (2007) | pgx | 7 | [10.2133/dmpk.22.409](https://doi.org/10.2133/dmpk.22.409) | [18159128](https://www.ncbi.nlm.nih.gov/pubmed/18159128) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Yates_2012.pdf` | Yates P et al., Statistical methods for analysis of tim…, Drug metabolism and disposi… (2012) | pgx | 7 | [10.1124/dmd.112.047233](https://doi.org/10.1124/dmd.112.047233) | [22942318](https://www.ncbi.nlm.nih.gov/pubmed/22942318) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-15T23:26:24.403507+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abushammala_2015 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for carbamazepine (the subject drug), while pioglitazone is only a co-administered agent used to test for drug-drug interactions. |
| PGx | Abushammala_2015 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction in rabbits and does not report any pharmacogenomic effects or genetic variants. |
| popPK | Aftab_2019 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for bipolar depression and does not report any pharmacokinetic parameters for pioglitazone. |
| PGx | Albassam_2019 | not_relevant | 0 | 0 | The paper studies the effect of pterostilbene on enzyme activity and does not involve pioglitazone or any genetic variants. |
| popPK | Almeida_2011 | irrelevant | 2 | 0 | The study is a bioequivalence assessment using non-compartmental analysis (AUC, Cmax) and does not report compartmental PK parameters (CL, V, ka) or population PK model values for pioglitazone. |
| PGx | Choi_2016 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (pioglitazone affecting nifedipine PK) in rats, not the effect of a gene variant on pioglitazone's PK/PD. |
| PGx | Cui_2008 | not_relevant | 0 | 0 | The paper discusses pioglitazone only as a positive control in a PXR reporter assay to validate CYP3A4 induction prediction, and does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| PGx | Dawed_2016 | not_relevant | 0 | 0 | The study explicitly states that neither CYP2C8 nor SLCO1B1 variants had a significant impact on pioglitazone response. |
| PGx | Dey_2020 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (pioglitazone inhibiting nateglinide metabolism) and a method development study, but does not report any pharmacogenomic effects (gene variants) on pioglitazone PK/PD. |
| popPK | El-Shoukrofy_2025 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| PD | El-Shoukrofy_2025 | not_relevant | 0 | 0 | The paper focuses on novel thiazolones and does not report pharmacodynamic or exposure-response data for pioglitazone. |
| PGx | Gibbons_2015 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (enzalutamide with inhibitors/substrates) and excludes poor metabolizers, but does not report pharmacogenomic effects of gene variants on pioglitazone PK/PD parameters. |
| popPK | Goto_2017 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| PD | Goto_2017 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Gupta_2023 | irrelevant | 0 | 0 | The study focuses on the design and in vivo/in vitro efficacy of novel thiazolidine derivatives, using pioglitazone only as a reference comparator without reporting any pharmacokinetic parameters. |
| popPK | Hamrén_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tesaglitazar, with pioglitazone serving only as a comparator arm without reported PK parameters. |
| PD | Hamrén_2012 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetic-pharmacodynamic modeling of tesaglitazar, not pioglitazone; pioglitazone is only mentioned as a comparator arm without specific PD parameter analysis. |
| PGx | He_2012 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and pharmacodynamics of vildagliptin, not pioglitazone, and does not report any pharmacogenomic effects on pioglitazone. |
| popPK | Hwang_2020 | irrelevant | 2 | 0 | The study is a drug-drug interaction trial reporting only relative geometric mean ratios (GMRs) for pioglitazone, not absolute quantitative disposition parameters (CL, V, ka, etc.). |
| PD | Hwang_2020 | not_relevant | 2 | 1 | The study reports qualitative changes in glucose levels and PK parameters (Cmax, AUC) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model for pioglitazone. |
| PGx | Jaakkola_2005 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (gemfibrozil/itraconazole) rather than the effect of a specific gene variant or genotype on pioglitazone pharmacokinetics. |
| PGx | Jaakkola_2006 | not_relevant | 0 | 0 | The study investigates in vitro metabolism and drug-drug interactions with CYP inhibitors, not the effect of genetic variants (pharmacogenomics) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Kalliokoski_2010 | not_relevant | 0 | 0 | The paper explicitly states that SLCO1B1 genotype has no effect on the pharmacokinetics of pioglitazone. |
| popPK | Kasahara_2016 | irrelevant | 1 | 0 | Pioglitazone is a co-administered comparator drug in a study focused on tofogliflozin, and no quantitative PK parameters for pioglitazone are reported in the evidence. |
| PD | Kasahara_2016 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions on tofogliflozin's PK/PD and co-administered drugs' PK, but does not report a concentration- or dose-response relationship for pioglitazone itself. |
| popPK | Kumar_2006 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of centchroman, with pioglitazone serving only as a co-administered drug for interaction testing. |
| PD | Kumar_2006 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions on the pharmacokinetics of centchroman, not the pharmacodynamics of pioglitazone; pioglitazone is only a co-administered agent in a PK interaction study. |
| PGx | Loer_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of clopidogrel and its interactions; pioglitazone is only mentioned as a co-administered drug in a DDI prediction, not as the subject of a pharmacogenomic study. |
| PGx | Ly_2021 | not_relevant | 0 | 0 | The paper investigates CYP3A induction by pioglitazone in a transgenic mouse model, not the effect of a human gene variant on pioglitazone's PK/PD. |
| PGx | Mamindla_2017 | not_relevant | 0 | 0 | The study investigates a drug-herb interaction (cinnamon) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Matthews_2009 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | Matthews_2009 | not_relevant | 0 | 0 | The provided text is a title/abstract snippet regarding the mechanism of action (glucocorticoid receptor partial agonism) and does not contain any PK/PD data, exposure-response analysis, or numeric PD parameters for pioglitazone. |
| PGx | Nowak_2002 | not_relevant | 0 | 0 | The study evaluates the effect of pioglitazone on CYP3A4 activity in a general population without stratifying by genotype or reporting pharmacogenomic effects. |
| PGx | Ogilvie_2006 | not_relevant | 0 | 0 | The paper investigates the mechanism of a drug-drug interaction (gemfibrozil inhibiting CYP2C8) and mentions pioglitazone only as a substrate, without reporting any pharmacogenomic effects (gene variants) on its PK/PD parameters. |
| popPK | Ormseth_2013 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating the efficacy of pioglitazone on rheumatoid arthritis disease activity and inflammation, not a pharmacokinetic study, and reports no PK parameters. |
| popPK | Ormseth_2014 | irrelevant | 0 | 0 | The study is a clinical trial assessing vascular function and does not report any pharmacokinetic parameters for pioglitazone. |
| PGx | Pradeepkumar_2022 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (trazodone) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Sears_2007 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PD | Sears_2007 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of PPARgamma promoter recruitment and transcriptional activity, not on pharmacokinetic or pharmacodynamic exposure-response modeling for pioglitazone. |
| popPK | Sherwin_2011 | relevant | 8 | 0 | The paper describes a population PK modeling study for pioglitazone, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, which only mentions that estimates were comparable to literature values. |
| PGx | Singh_2019 | not_relevant | 0 | 0 | The paper evaluates the PXR activation potential of pioglitazone to predict drug-drug interactions, but does not report pharmacogenomic effects of gene variants on PK or PD parameters. |
| PGx | Spence_2020 | not_relevant | 0 | 0 | The paper discusses pioglitazone's efficacy in stroke prevention but does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Sun_2017 | not_relevant | 0 | 0 | The paper discusses CYP3A4 induction and drug-drug interaction prediction models using pioglitazone as a perpetrator, but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| PGx | Takanohashi_2007 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving nateglinide and does not report pharmacogenomic effects on pioglitazone. |
| popPK | Tran_2026 | irrelevant | 0 | 0 | The study is a model-based meta-analysis of efficacy (histological outcomes and liver enzymes) rather than a pharmacokinetic study, and no PK parameters are reported. |
| PGx | Türk_2020 | not_relevant | 2 | 0 | The paper focuses on a PBPK model for trimethoprim; pioglitazone is only mentioned as a co-administered drug for DDI validation, and no specific pharmacogenomic effect on pioglitazone PK/PD is reported. |
| PGx | Wu_2025 | not_relevant | 0 | 0 | The paper investigates the effect of pioglitazone on kidney stone risk and lipid metabolism, not how genetic variants alter the pharmacokinetic or pharmacodynamic parameters of the drug itself. |
| PGx | Yang_2020 | not_relevant | 0 | 0 | The paper uses pioglitazone as an example of a drug identified by a network-based discovery strategy for aging, but does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Yates_2012 | not_relevant | 0 | 0 | The paper describes statistical methods for analyzing time-dependent inhibition of CYP3A4 and does not report any pharmacogenomic effects (gene variants) on pioglitazone PK/PD. |
| PGx | van_2013 | not_relevant | 0 | 0 | The study investigates the effect of OATP1B1 genotype on the pharmacokinetics of rosuvastatin, not pioglitazone. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_pioglitazone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
