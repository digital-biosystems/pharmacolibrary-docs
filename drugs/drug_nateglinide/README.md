<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;nateglinide&quot;}]"></div>

# nateglinide

- **generic name:** nateglinide
- **ATC codes:** `A10BX03`
- **DrugBank:** [DB00731](https://go.drugbank.com/drugs/DB00731)
- **groups:** approved

## About

**Description.** Nateglinide is an oral antihyperglycemic agent used for the treatment of non-insulin-dependent diabetes mellitus (NIDDM). It belongs to the meglitinide class of short-acting insulin secretagogues, which act by binding to β cells of the pancreas to stimulate insulin release. Nateglinide is an amino acid derivative that induces an early insulin response to meals decreasing postprandial blood glucose levels. It should only be taken with meals and meal-time doses should be skipped with any skipped meal. Approximately one month of therapy is required before a decrease in fasting blood glucose is seen. Meglitnides may have a neutral effect on weight or cause a slight increase in weight. The average weight gain caused by meglitinides appears to be lower than that caused by sulfonylureas and insulin and appears to occur only in those naïve to oral antidiabetic agents. Due to their mechanism of action, meglitinides may cause hypoglycemia although the risk is thought to be lower than that of sulfonylureas since their action is dependent on the presence of glucose. In addition to reducing postprandial and fasting blood glucose, meglitnides have been shown to decrease glycosylated hemoglobin (HbA1c) levels, which are reflective of the last 8-10 weeks of glucose control. Meglitinides appear to be more effective at lowering postprandial blood glucose than metformin, sulfonylureas and thiazolidinediones. Nateglinide is extensively metabolized in the liver and excreted in urine (83%) and feces (10%). The major metabolites possess less activity than the parent compound. One minor metabolite, the isoprene, has the same potency as its parent compound.

**Indication.** For the treatment of non-insulin dependent-diabetes mellitus in conjunction with diet and exercise.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 18:34 | 9:31 | 0/0/0 | 0/0/0 | 1/0/2 | 162,803/7,519 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 2/5 | 5/2 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | **MTNR1B** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Song_2021](drugs/drug_nateglinide/pgx_Song_2021_MTNR1B_safety.md) | Song JF et al., Evaluation of the effect of MTNR1B rs10…, BMC medical genomics (2021) | [10.1186/s12920-021-01004-y](https://doi.org/10.1186/s12920-021-01004-y) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **NOS1AP** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Wang_2021](drugs/drug_nateglinide/pgx_Wang_2021_NOS1AP_Q100.md) | Wang T et al., PPARD rs2016520 (T/C) and NOS1AP rs1274…, BMC medical genomics (2021) | [10.1186/s12920-021-01108-5](https://doi.org/10.1186/s12920-021-01108-5) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **PPARD** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Wang_2021](drugs/drug_nateglinide/pgx_Wang_2021_PPARD_Q100.md) | Wang T et al., PPARD rs2016520 (T/C) and NOS1AP rs1274…, BMC medical genomics (2021) | [10.1186/s12920-021-01108-5](https://doi.org/10.1186/s12920-021-01108-5) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 113 matched, 93 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_21 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Niemi_2003.pdf` | Niemi M et al., Effect of fluconazole on the pharmacoki…, Clinical pharmacology and t… (2003) | popPK | 8 | [10.1016/S0009-9236(03)00089-4](https://doi.org/10.1016/S0009-9236(03)00089-4) | [12844132](https://pubmed.ncbi.nlm.nih.gov/12844132) | The study reports quantitative PK parameters (half-life, AUC) for nateglinide, but lacks specific values for clearance (CL) or volume of distribution (V). |
| `Niemi_2003_2.pdf` | Niemi M et al., Effect of rifampicin on the pharmacokin…, British journal of clinical… (2003) | popPK | 8 | [10.1046/j.1365-2125.2003.01884.x](https://doi.org/10.1046/j.1365-2125.2003.01884.x) | [12968988](https://pubmed.ncbi.nlm.nih.gov/12968988) | The study reports quantitative PK parameters (AUC, t1/2) for nateglinide, but lacks explicit clearance (CL) or volume (V) values. |
| `Niemi_2005.pdf` | Niemi M et al., Coadministration of gemfibrozil and itr…, British journal of clinical… (2005) | popPK | 8 | [10.1111/j.1365-2125.2005.02385.x](https://doi.org/10.1111/j.1365-2125.2005.02385.x) | [16042675](https://pubmed.ncbi.nlm.nih.gov/16042675) | The study reports PK parameters for nateglinide, but only provides relative changes (percentages) and qualitative statements (unchanged t1/2) rather than absolute numeric values for clearance, volume, or half-life. |
| `Jones_2017.pdf` | Jones RS et al., Quercetin, Morin, Luteolin, and Phloret…, Molecular pharmaceutics (2017) | pd | 5 | [10.1021/acs.molpharmaceut.7b00264](https://doi.org/10.1021/acs.molpharmaceut.7b00264) | [28513167](https://www.ncbi.nlm.nih.gov/pubmed/28513167) | metadata signals extractable PD data (IC50) |
| `Takanohashi_2012.pdf` | Takanohashi T et al., Comparison of the rapidity of onset of…, European journal of drug me… (2012) | pd | 5 | [10.1007/s13318-011-0068-3](https://doi.org/10.1007/s13318-011-0068-3) | [22012638](https://www.ncbi.nlm.nih.gov/pubmed/22012638) | metadata signals extractable PD data (PK/PD) |
| `Sayama_2025.pdf` | Sayama M et al., Structural similarity-based search for…, Molecular pharmacology (2025) | pd | 4 | [10.1016/j.molpha.2025.100028](https://doi.org/10.1016/j.molpha.2025.100028) | [40186990](https://www.ncbi.nlm.nih.gov/pubmed/40186990) | metadata signals extractable PD data (IC50) |
| `Sunaga_2001.pdf` | Sunaga Y et al., The effects of mitiglinide (KAD-1229),…, European journal of pharmac… (2001) | pd | 4 | [10.1016/s0014-2999(01)01412-1](https://doi.org/10.1016/s0014-2999(01)01412-1) | [11716850](https://www.ncbi.nlm.nih.gov/pubmed/11716850) | metadata signals extractable PD data (IC50) |
| `Takanohashi_2010.pdf` | Takanohashi T et al., Inhibition of human liver microsomal CY…, The Journal of pharmacy and… (2010) | pd | 4 | [10.1211/jpp.62.05.0005](https://doi.org/10.1211/jpp.62.05.0005) | [20609060](https://www.ncbi.nlm.nih.gov/pubmed/20609060) | metadata signals extractable PD data (IC50) |
| `Cheng_2013.pdf` | Cheng Y et al., Effect of CYP2C9 and SLCO1B1 polymorphi…, European journal of clinica… (2013) | pgx | 8 | [10.1007/s00228-012-1364-9](https://doi.org/10.1007/s00228-012-1364-9) | [22842957](https://www.ncbi.nlm.nih.gov/pubmed/22842957) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Fujino_2018.pdf` | Fujino R et al., Strategies to improve the prediction ac…, European journal of pharmac… (2018) | pgx | 8 | [10.1016/j.ejps.2018.09.021](https://doi.org/10.1016/j.ejps.2018.09.021) | [30287410](https://www.ncbi.nlm.nih.gov/pubmed/30287410) | metadata signals extractable PGX data (CYP2C, PK/PD-context) |
| `Kalliokoski_2008.pdf` | Kalliokoski A et al., Effects of the SLCO1B1*1B haplotype on…, Pharmacogenetics and genomi… (2008) | pgx | 8 | [10.1097/FPC.0b013e32830d733e](https://doi.org/10.1097/FPC.0b013e32830d733e) | [18854776](https://www.ncbi.nlm.nih.gov/pubmed/18854776) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Kalliokoski_2010.pdf` | Kalliokoski A et al., SLCO1B1 polymorphism and oral antidiabe…, Basic & clinical pharmacolo… (2010) | pgx | 8 | [10.1111/j.1742-7843.2010.00581.x](https://doi.org/10.1111/j.1742-7843.2010.00581.x) | [20406215](https://www.ncbi.nlm.nih.gov/pubmed/20406215) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Kirchheiner_2004.pdf` | Kirchheiner J et al., Influence of CYP2C9 and CYP2D6 polymorp…, Clinical pharmacokinetics (2004) | pgx | 8 | [10.2165/00003088-200443040-00005](https://doi.org/10.2165/00003088-200443040-00005) | [15005635](https://www.ncbi.nlm.nih.gov/pubmed/15005635) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Kirchheiner_2005.pdf` | Kirchheiner J et al., Effect of genetic polymorphisms in cyto…, Clinical pharmacokinetics (2005) | pgx | 8 | [10.2165/00003088-200544120-00002](https://doi.org/10.2165/00003088-200544120-00002) | [16372821](https://www.ncbi.nlm.nih.gov/pubmed/16372821) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Dey_2020.pdf` | Dey S et al., Simultaneous Pharmacokinetics Estimatio…, Journal of chromatographic… (2020) | pgx | 7 | [10.1093/chromsci/bmz116](https://doi.org/10.1093/chromsci/bmz116) | [31836899](https://www.ncbi.nlm.nih.gov/pubmed/31836899) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Kim_2010.pdf` | Kim Y et al., Effect of fluvastatin, lovastatin, nife…, Biopharmaceutics & drug dis… (2010) | pgx | 7 | [10.1002/bdd.724](https://doi.org/10.1002/bdd.724) | [20809476](https://www.ncbi.nlm.nih.gov/pubmed/20809476) | metadata signals extractable PGX data (CYP2C5, PK/PD-context) |
| `Klatt_2013.pdf` | Klatt S et al., The influence of oral antidiabetic drug…, Basic & clinical pharmacolo… (2013) | pgx | 7 | [10.1111/bcpt.12031](https://doi.org/10.1111/bcpt.12031) | [23121773](https://www.ncbi.nlm.nih.gov/pubmed/23121773) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Sabia_2004.pdf` | Sabia H et al., Effect of a selective CYP2C9 inhibitor…, European journal of clinica… (2004) | pgx | 7 | [10.1007/s00228-004-0778-4](https://doi.org/10.1007/s00228-004-0778-4) | [15197517](https://www.ncbi.nlm.nih.gov/pubmed/15197517) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Sunkara_2004.pdf` | Sunkara G et al., The effect of nateglinide on the pharma…, Current medical research an… (2004) | pgx | 7 | [10.1185/030079903125002685](https://doi.org/10.1185/030079903125002685) | [14741071](https://www.ncbi.nlm.nih.gov/pubmed/14741071) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Takanohashi_2007.pdf` | Takanohashi T et al., Prediction of the metabolic interaction…, Drug metabolism and pharmac… (2007) | pgx | 7 | [10.2133/dmpk.22.409](https://doi.org/10.2133/dmpk.22.409) | [18159128](https://www.ncbi.nlm.nih.gov/pubmed/18159128) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Wang_2019.pdf` | Wang S et al., Predicted contributions of cytochrome P…, Xenobiotica; the fate of fo… (2019) | pgx | 7 | [10.1080/00498254.2018.1433902](https://doi.org/10.1080/00498254.2018.1433902) | [29375004](https://www.ncbi.nlm.nih.gov/pubmed/29375004) | metadata signals extractable PGX data (CYP450, PK/PD-context) |

<sub>queue written 2026-09-18T18:30:43.942789+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alanazi_2025 | irrelevant | 2 | 0 | The paper is a comprehensive review/profile of nateglinide without original quantitative PK parameter values in the provided evidence. |
| PD | Alanazi_2025 | not_relevant | 2 | 0 | The text is a review chapter describing synthesis, analysis methods, and general pharmacology without reporting specific numeric PD parameters or exposure-response data. |
| popPK | Amaliah_2025 | irrelevant | 0 | 0 | The paper is a review of ternary solid dispersions and does not report pharmacokinetic parameters for nateglinide. |
| PD | Amaliah_2025 | not_relevant | 0 | 0 | The paper is a review of ternary solid dispersions and does not report any specific pharmacodynamic or exposure-response data for nateglinide. |
| popPK | Anderson_2002 | irrelevant | 2 | 0 | The study focuses on warfarin as the subject drug with nateglinide as a co-administered agent, and no quantitative PK parameter values for nateglinide are provided in the evidence. |
| PD | Anderson_2002 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (nateglinide on warfarin PK/PD) and reports no significant effects, but it does not model or report a concentration-effect or dose-response relationship for nateglinide itself. |
| popPK | Anderson_2003 | relevant | 4 | 2 | The study reports nateglinide PK parameters (AUC, Cmax, Tmax, half-life) but lacks specific numeric values for clearance, volume, or rate constants, and the provided text only gives a range for half-life without a corresponding volume or compartmental model. |
| PD | Anderson_2003 | not_relevant | 2 | 1 | The study reports PK parameters and qualitative changes in glucose/insulin metrics based on dosing timing, but does not provide a concentration-effect model or numeric PD parameters (e.g., Emax, EC50) for nateglinide. |
| PGx | Bauer_2003 | not_relevant | 0 | 0 | The paper describes a method for analyzing nateglinide in plasma but does not report any pharmacogenomic effects or genotype-specific PK/PD data. |
| popPK | Buslov_2025 | irrelevant | 0 | 0 | The paper describes the engineering of an enzyme for amino acid synthesis and contains no pharmacokinetic data for nateglinide. |
| PD | Buslov_2025 | not_relevant | 0 | 0 | The paper describes the engineering of a biocatalyst (phenylalanine ammonia lyase) for the synthesis of amino acids and contains no pharmacodynamic or exposure-response data for nateglinide. |
| popPK | Chen_2015 | irrelevant | 0 | 0 | The paper is a review of pharmacogenomics and does not report original quantitative pharmacokinetic parameters for nateglinide. |
| PD | Chen_2015 | not_relevant | 1 | 0 | The text is a review of pharmacogenomics and does not report specific numeric PD parameters or exposure-response curves for nateglinide. |
| PGx | Chen_2015 | not_relevant | 5 | 2 | The text is a review abstract that lists genes associated with glinide response but does not report specific quantitative pharmacokinetic or pharmacodynamic effect sizes for nateglinide. |
| popPK | Cheng_2013 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| popPK | Courtois_2003 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics and tissue distribution at specific time points rather than reporting quantitative compartmental PK parameters like clearance or volume. |
| PD | Courtois_2003 | not_relevant | 2 | 1 | The study compares two drugs at single fixed doses and reports qualitative differences in pharmacodynamics and tissue distribution, but does not provide concentration-effect curves or numeric PD parameters (e.g., Emax, EC50) for nateglinide. |
| PGx | Dey_2020 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (pioglitazone inhibiting CYP2C9) affecting nateglinide PK, but does not report any pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| popPK | Dinu_2025 | irrelevant | 0 | 0 | The paper is a review of sulfonamides and antioxidants for diabetes management and does not report pharmacokinetic parameters for nateglinide. |
| PD | Dinu_2025 | not_relevant | 0 | 0 | The paper is a review of sulfonamides and antioxidants and does not report any specific pharmacodynamic or exposure-response data for nateglinide. |
| popPK | Dunning_2003 | irrelevant | 2 | 0 | The study reports only descriptive pharmacokinetic observations (peak concentration and time) and pharmacodynamic data, lacking quantitative disposition parameters like clearance, volume, or half-life. |
| PGx | Fujino_2018 | not_relevant | 0 | 0 | The paper focuses on improving in vitro-in vivo extrapolation (IVIVE) prediction methods for hepatic clearance and does not report specific pharmacogenomic effects of gene variants on nateglinide PK parameters. |
| popPK | Hefnawy_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of encorafenib and binimetinib, not nateglinide. |
| PD | Hefnawy_2022 | not_relevant | 0 | 0 | The paper describes a bioanalytical method and PK parameters for encorafenib and binimetinib, not nateglinide, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Hu_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of K(ATP) channel selectivity and does not report any pharmacokinetic parameters for nateglinide. |
| popPK | Hu_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of insulinotropic effects and does not report pharmacokinetic disposition parameters for nateglinide. |
| popPK | Jones_2017 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | Jones_2017 | not_relevant | 0 | 0 | The paper focuses on flavonoid inhibition of MCT6 and does not contain any pharmacodynamic or exposure-response data for nateglinide. |
| popPK | Kalbag_2001 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic effects (insulin secretion and glucose control) and does not report quantitative pharmacokinetic disposition parameters (CL, V, ka) for nateglinide. |
| PD | Kalbag_2001 | not_relevant | 3 | 2 | The study reports qualitative comparisons of pharmacodynamic effects (insulin secretion rates, glucose levels) between drugs but does not provide a concentration-effect model, dose-response curve, or numeric PD parameters (e.g., Emax, EC50) for nateglinide. |
| popPK | Kaleemuddin_2013 | irrelevant | 2 | 0 | The study focuses on formulation and in vitro release, with in vivo data limited to pharmacodynamic (antidiabetic) effects rather than quantitative pharmacokinetic parameters. |
| PD | Kaleemuddin_2013 | not_relevant | 2 | 1 | The paper reports qualitative in vivo pharmacodynamic effects (prolonged antidiabetic activity) and in vitro release data, but does not provide numeric concentration-effect parameters, dose-response curves, or a formal PK/PD model fit. |
| popPK | Kalliokoski_2008 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| PD | Kalliokoski_2008 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or data required to verify the presence of numeric PD parameters or exposure-response relationships. |
| popPK | Kalliokoski_2008_2 | irrelevant | 2 | 0 | The study focuses on the effect of SLCO1B1 polymorphism, finding no significant effect on nateglinide PK, and does not report specific quantitative disposition parameters (CL, V, ka) for nateglinide in the provided evidence. |
| PD | Kalliokoski_2008_2 | not_relevant | 2 | 1 | The paper reports a correlation coefficient (r=0.412) between repaglinide AUC and glucose decrease, but explicitly states that SLCO1B1 polymorphism had no significant effect on the pharmacodynamics of nateglinide, providing no numeric PD parameters or concentration-effect curve for nateglinide. |
| PGx | Kalliokoski_2008_2 | not_relevant | 0 | 0 | The study explicitly states that SLCO1B1 polymorphism had no significant effect on the pharmacokinetics or pharmacodynamics of nateglinide. |
| PGx | Kalliokoski_2010 | not_relevant | 5 | 2 | The paper mentions an association between SLCO1B1 and nateglinide plasma concentrations in Chinese individuals, but notes it was not replicated in Caucasians and provides no specific quantitative effect size or fitted parameter for nateglinide. |
| popPK | Kasahara_2016 | irrelevant | 1 | 0 | Nateglinide is a co-administered comparator drug in a study focused on tofogliflozin, and no quantitative PK parameters for nateglinide are reported in the evidence. |
| PD | Kasahara_2016 | not_relevant | 0 | 0 | The study is a drug-drug interaction trial focusing on tofogliflozin; nateglinide is only a co-administered agent, and no PD parameters or exposure-response relationships for nateglinide are reported. |
| PGx | Kim_2010 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (fluvastatin, nifedipine, etc.) in rabbits, not the effect of a gene variant or genotype on nateglinide pharmacokinetics. |
| popPK | Kirchheiner_2004 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Kirchheiner_2004 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of nateglinide in relation to CYP polymorphisms and does not report any pharmacodynamic or exposure-response analysis. |
| PGx | Kirchheiner_2005 | not_relevant | 5 | 2 | The paper mentions nateglinide is metabolized by CYP2C9 and suggests dose adjustments, but it does not report specific quantitative pharmacokinetic or pharmacodynamic data for nateglinide derived from a study in this text. |
| PGx | Klatt_2013 | not_relevant | 0 | 0 | The paper investigates in vitro transporter inhibition by nateglinide, not the effect of a gene variant on nateglinide's PK or PD. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper is a computational study on drug efficacy prediction for Traditional Chinese Medicine and does not report any pharmacokinetic parameters for nateglinide. |
| PD | Li_2025 | not_relevant | 0 | 0 | The paper describes a computational network-based drug efficacy prediction model (Meta-DEP) and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for nateglinide. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy and safety outcomes (HbA1c, BP, etc.) in diabetes and CKD, not a pharmacokinetic study, and it does not report any PK parameters for nateglinide. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for nateglinide. |
| popPK | Luzio_2001 | irrelevant | 2 | 0 | The study describes pharmacokinetic characteristics (peak concentrations) but does not report quantitative disposition parameters (CL, V, ka, t1/2) or a compartmental model in the provided text. |
| PD | Luzio_2001 | not_relevant | 3 | 1 | The paper reports qualitative comparisons of glucose and insulin profiles based on dosing timing and meal composition, but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model. |
| popPK | McKillop_2009 | irrelevant | 0 | 0 | The study focuses on the insulinotropic and DPP-IV inhibitory effects of nateglinide, reporting no pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| popPK | Mele_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of muscle atrophy and does not report pharmacokinetic parameters for nateglinide. |
| popPK | Muddather_2026 | irrelevant | 0 | 0 | The paper is a review of DPP-4 inhibitors in cancer and does not contain pharmacokinetic data for nateglinide. |
| PD | Muddather_2026 | not_relevant | 0 | 0 | The paper is a review of DPP-4 inhibitors in cancer and does not contain any pharmacodynamic or exposure-response data for nateglinide. |
| popPK | Nagar_2024 | irrelevant | 0 | 0 | The paper is a methodological study on PBPK modeling frameworks and does not report specific pharmacokinetic parameters for nateglinide. |
| PD | Nagar_2024 | not_relevant | 0 | 0 | The paper focuses on physiologically based pharmacokinetic (PBPK) models for predicting hepatic clearance and does not report any pharmacodynamic (PD) or exposure-response relationships for nateglinide. |
| PGx | Naushad_2022 | not_relevant | 0 | 0 | The text describes general statistical model diagnostics (R-squared, power) and contains no information regarding nateglinide, gene variants, or pharmacokinetic/pharmacodynamic parameters. |
| PD | Niemi_2003 | not_relevant | 2 | 1 | The study reports PK changes and a qualitative statement that blood glucose response was unchanged, but it does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve for nateglinide. |
| PD | Niemi_2003_2 | not_relevant | 2 | 1 | The study reports PK changes and a qualitative conclusion that the glucose-lowering effect was not significantly altered, but it does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve. |
| popPK | Niemi_2005 | relevant | 8 | 2 | The study reports PK parameters for nateglinide, but only provides relative changes (percentages) and qualitative statements (unchanged t1/2) rather than absolute numeric values for clearance, volume, or half-life. |
| PD | Niemi_2005 | not_relevant | 2 | 1 | The study reports PK changes and a qualitative statement that blood glucose response was not significantly changed, but it does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve for nateglinide. |
| PGx | Niemi_2005 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (gemfibrozil/itraconazole) rather than the effect of a gene variant or genotype on nateglinide pharmacokinetics. |
| PGx | Pakkir_2018 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving CYP enzymes and OATP1B1, not pharmacogenomic effects of genetic variants on nateglinide PK/PD. |
| PGx | Plosker_2004 | not_relevant | 0 | 0 | The paper is a pharmacoeconomic review of repaglinide and does not report pharmacogenomic effects on nateglinide PK/PD parameters. |
| PGx | Sabia_2004 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (CYP2C9 inhibition by sulfinpyrazone) rather than a pharmacogenomic effect based on genetic variants. |
| popPK | Sahoo_2014 | irrelevant | 2 | 0 | The study focuses on formulation development and pharmacodynamic effects (blood glucose reduction) without reporting quantitative pharmacokinetic parameters (CL, V, ka) for nateglinide. |
| PD | Sahoo_2014 | not_relevant | 2 | 1 | The paper reports a qualitative pharmacodynamic effect (reduction in blood glucose) in rats but does not provide numeric PD parameters, concentration-effect curves, or a formal PK/PD model. |
| popPK | Sayama_2025 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Sayama_2025 | not_relevant | 0 | 0 | The paper focuses on the structural similarity and in vitro inhibitory activity of glinides toward uric acid transporter 1, not on the pharmacokinetic or pharmacodynamic exposure-response relationship of nateglinide in vivo. |
| PGx | Scheen_2007 | not_relevant | 0 | 0 | The paper reviews drug-drug and food-drug interactions, not pharmacogenomic effects of gene variants on nateglinide PK/PD. |
| popPK | Shore_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of darolutamide, not nateglinide. |
| PD | Shore_2019 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of darolutamide and drug-drug interactions, containing no pharmacodynamic or exposure-response analysis for nateglinide. |
| popPK | Sugiyama_2024 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of the MCT6 transporter using nateglinide only as a substrate in an expression system, and it does not report any pharmacokinetic disposition parameters for nateglinide. |
| PD | Sugiyama_2024 | not_relevant | 0 | 0 | The paper characterizes the transport kinetics (Km, IC50) of the MCT6 transporter using a fluorescent probe, not the pharmacodynamic exposure-response relationship of nateglinide. |
| popPK | Sunaga_2001 | irrelevant | 0 | 0 | no_text gate: only 166 chars of text extracted (&lt; 400) |
| PD | Sunaga_2001 | not_relevant | 3 | 2 | The paper focuses on the mechanism of action (ATP-sensitive K+ channels) and qualitative comparison of insulin secretion, lacking a formal PK/PD model or numeric exposure-response parameters for nateglinide. |
| popPK | Sunkara_2004 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PD | Sunkara_2004 | not_relevant | 0 | 0 | The paper investigates the effect of nateglinide on the PK/PD of acenocoumarol, not the PD of nateglinide itself. |
| PGx | Sunkara_2004 | not_relevant | 0 | 0 | The paper investigates the drug-drug interaction between nateglinide and acenocoumarol, not the effect of a gene variant on nateglinide's PK/PD. |
| PGx | Takanohashi_2007 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (inhibition by other drugs) rather than pharmacogenomic effects (gene variants) on nateglinide PK/PD. |
| popPK | Takanohashi_2010 | irrelevant | 0 | 0 | no_text gate: only 55 chars of text extracted (&lt; 400) |
| PD | Takanohashi_2010 | not_relevant | 0 | 0 | The paper reports in vitro CYP inhibition (IC50/Ki) for nateglinide, which is a pharmacokinetic/metabolic property, not a pharmacodynamic exposure-response or dose-response relationship for a therapeutic effect. |
| PGx | Takanohashi_2010 | not_relevant | 0 | 0 | The paper investigates the inhibition of CYP enzymes by nateglinide, which is a drug-drug interaction mechanism, not a pharmacogenomic effect of a gene variant on nateglinide's PK/PD. |
| popPK | Takanohashi_2012 | irrelevant | 0 | 0 | no_text gate: only 123 chars of text extracted (&lt; 400) |
| PGx | Wang_2019 | not_relevant | 0 | 0 | The paper discusses in vitro CYP450 metabolism predictions using the RAF method and does not report any pharmacogenomic effects (gene variants) on nateglinide PK or PD parameters. |
| popPK | Yoshida_2011 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of AS1535907, with nateglinide serving only as a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Yoshida_2011 | not_relevant | 0 | 0 | The paper focuses on the GPR119 agonist AS1535907; nateglinide is only mentioned as a comparator in a qualitative in vitro assay without any reported PD parameters or exposure-response analysis. |
| popPK | de_2001 | irrelevant | 1 | 0 | The study reports pharmacodynamic parameters (insulin secretion, glucose excursions) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for nateglinide. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_nateglinide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
