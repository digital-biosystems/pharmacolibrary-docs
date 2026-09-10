# phenobarbital

- **generic name:** phenobarbital
- **ATC codes:** `N03AA02`
- **DrugBank:** [DB01174](https://go.drugbank.com/drugs/DB01174)
- **groups:** approved, investigational

## About

**Description.** A barbituric acid derivative that acts as a nonselective central nervous system depressant. It promotes binding to inhibitory gamma-aminobutyric acid subtype receptors, and modulates chloride currents through receptor channels. It also inhibits glutamate induced depolarizations.

**Indication.** For the treatment of all types of seizures except absence seizures.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 02:01 | 23:49 | 4/0/0 | 0/1/0 | 2/0/3 | 217,501/13,479 | ollama / qwen3.8:27b-mtp-q8_0 | 23 | 4/18 | 21/2 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Stoschus_2025](drugs/drug_phenobarbital/Phenobarbital_Stoschus2025_reference.md) | Stoschus M et al., Optimizing phenobarbital dosing in crit…, Epilepsia (2025) | [10.1111/epi.18517](https://doi.org/10.1111/epi.18517) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Teixeira-da-Silva_2020](drugs/drug_phenobarbital/Phenobarbital_TeixeiradaSilva2020_reference.md) | Teixeira-da-Silva P et al., Population pharmacokinetics of phenobar…, European journal of pharmac… (2020) | [10.1016/j.ejps.2020.105484](https://doi.org/10.1016/j.ejps.2020.105484) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Teixeira-da-Silva_2022](drugs/drug_phenobarbital/Phenobarbital_TeixeiradaSilva2022_reference.md) | Teixeira-da-Silva P et al., Population Pharmacokinetics of Valproic…, Pharmaceutics (2022) | [10.3390/pharmaceutics14040811](https://doi.org/10.3390/pharmaceutics14040811) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yalcin_2022](drugs/drug_phenobarbital/Phenobarbital_Yalcin2022_reference.md) | Yalcin N et al., Population pharmacokinetics in critical…, BMJ paediatrics open (2022) | [10.1136/bmjpo-2022-001512](https://doi.org/10.1136/bmjpo-2022-001512) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Lee_2019](drugs/drug_phenobarbital/pd_Lee_2019_ETCO2.md) | Lee JH et al., A pharmacodynamic model of respiratory…, Acta pharmacologica Sinica (2019) | [10.1038/s41401-018-0156-x](https://doi.org/10.1038/s41401-018-0156-x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Saruwatari_2010](drugs/drug_phenobarbital/pgx_Saruwatari_2010_CYP2C9_safety.md) | Saruwatari J et al., Update on the Genetic Polymorphisms of…, Pharmaceuticals (Basel, Swi… (2010) | [10.3390/ph3082709](https://doi.org/10.3390/ph3082709) |
| <span class="pk-badge pk-badge--green">extracted</span> | **GST** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Saruwatari_2010](drugs/drug_phenobarbital/pgx_Saruwatari_2010_GST_safety.md) | Saruwatari J et al., Update on the Genetic Polymorphisms of…, Pharmaceuticals (Basel, Swi… (2010) | [10.3390/ph3082709](https://doi.org/10.3390/ph3082709) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C19** | `Q27` · CL/F | metabolism | [Saruwatari_2010](drugs/drug_phenobarbital/pgx_Saruwatari_2010_CYP2C19_Q27.md) | Saruwatari J et al., Update on the Genetic Polymorphisms of…, Pharmaceuticals (Basel, Swi… (2010) | [10.3390/ph3082709](https://doi.org/10.3390/ph3082709) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **EPHX1** | `Q27` · CL/F | metabolism | [Saruwatari_2010](drugs/drug_phenobarbital/pgx_Saruwatari_2010_EPHX1_Q27.md) | Saruwatari J et al., Update on the Genetic Polymorphisms of…, Pharmaceuticals (Basel, Swi… (2010) | [10.3390/ph3082709](https://doi.org/10.3390/ph3082709) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **UGT2B7** | `Q27` · CL/F | metabolism | [Saruwatari_2010](drugs/drug_phenobarbital/pgx_Saruwatari_2010_UGT2B7_Q27.md) | Saruwatari J et al., Update on the Genetic Polymorphisms of…, Pharmaceuticals (Basel, Swi… (2010) | [10.3390/ph3082709](https://doi.org/10.3390/ph3082709) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 1038 matched, 88 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 4  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_19 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dingemanse_1989.pdf` | Dingemanse J et al., Pharmacokinetic modeling of the anticon…, The Journal of pharmacology… (1989) | popPK | 10 | not captured | [2724142](https://pubmed.ncbi.nlm.nih.gov/2724142) | The title confirms a pharmacokinetic modeling study of phenobarbital in rats, but the provided evidence contains no numeric parameter values. |
| `Moffett_2018.pdf` | Moffett BS et al., Phenobarbital population pharmacokineti…, Epilepsia (2018) | popPK | 10 | [10.1111/epi.14447](https://doi.org/10.1111/epi.14447) | [29897629](https://pubmed.ncbi.nlm.nih.gov/29897629) | The paper is a population PK study for phenobarbital, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided text, which only describes the model structure and covariates. |
| `Teixeira-da-Silva_2020.pdf` | Teixeira-da-Silva P et al., Population pharmacokinetics of phenobar…, European journal of pharmac… (2020) | popPK | 10 | [10.1016/j.ejps.2020.105484](https://doi.org/10.1016/j.ejps.2020.105484) | [32707172](https://pubmed.ncbi.nlm.nih.gov/32707172) | The evidence explicitly provides the quantitative population pharmacokinetic model equation for phenobarbital clearance (CL/F) including specific numeric coefficients for BSA and drug interactions. |
| `Falcão_2012.pdf` | Falcão A et al., Pharmacokinetics, drug interactions and…, CNS drugs (2012) | pd | 5 | [10.2165/11596290-000000000-00000](https://doi.org/10.2165/11596290-000000000-00000) | [22171585](https://www.ncbi.nlm.nih.gov/pubmed/22171585) | metadata signals extractable PD data (exposure-response) |
| `Schoemaker_2016.pdf` | Schoemaker R et al., Brivaracetam Population Pharmacokinetic…, Journal of clinical pharmac… (2016) | pd | 5 | [10.1002/jcph.761](https://doi.org/10.1002/jcph.761) | [27146213](https://www.ncbi.nlm.nih.gov/pubmed/27146213) | metadata signals extractable PD data (Exposure-Response) |
| `Yang_2024.pdf` | Yang J et al., A pharmacokinetic-pharmacodynamic model…, Biotechnology & genetic eng… (2024) | pd | 5 | [10.1080/02648725.2023.2199232](https://doi.org/10.1080/02648725.2023.2199232) | [37018446](https://www.ncbi.nlm.nih.gov/pubmed/37018446) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Leppik_1979.pdf` | Leppik IE et al., Intravenous phenytoin and phenobarbital…, Epilepsia (1979) | pd | 4 | [10.1111/j.1528-1157.1979.tb04796.x](https://doi.org/10.1111/j.1528-1157.1979.tb04796.x) | [446431](https://www.ncbi.nlm.nih.gov/pubmed/446431) | metadata signals extractable PD data (EC50) |
| `Hagos_2019.pdf` | Hagos FT et al., Factors Contributing to Fentanyl Pharma…, Clinical pharmacokinetics (2019) | pgx | 8 | [10.1007/s40262-019-00773-1](https://doi.org/10.1007/s40262-019-00773-1) | [31168770](https://www.ncbi.nlm.nih.gov/pubmed/31168770) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Lee_2012.pdf` | Lee SM et al., Effects of cytochrome P450 (CYP)2C19 po…, Archives of disease in chil… (2012) | pgx | 8 | [10.1136/archdischild-2011-300538](https://doi.org/10.1136/archdischild-2011-300538) | [22331680](https://www.ncbi.nlm.nih.gov/pubmed/22331680) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Saruwatari_2014.pdf` | Saruwatari J et al., Effects of CYP2C19 and P450 oxidoreduct…, Therapeutic drug monitoring (2014) | pgx | 8 | [10.1097/FTD.0000000000000015](https://doi.org/10.1097/FTD.0000000000000015) | [24345815](https://www.ncbi.nlm.nih.gov/pubmed/24345815) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Van_2021.pdf` | Van Daele R et al., Concomitant use of isavuconazole and CY…, Mycoses (2021) | pgx | 8 | [10.1111/myc.13300](https://doi.org/10.1111/myc.13300) | [33963620](https://www.ncbi.nlm.nih.gov/pubmed/33963620) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yukawa_2006.pdf` | Yukawa E et al., Effect of CYP2C19 genetic polymorphism…, Journal of clinical pharmac… (2006) | pgx | 8 | [10.1111/j.1365-2710.2006.00712.x](https://doi.org/10.1111/j.1365-2710.2006.00712.x) | [16789993](https://www.ncbi.nlm.nih.gov/pubmed/16789993) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Magnusson_2006.pdf` | Magnusson MO et al., A mechanism-based integrated pharmacoki…, Pharmaceutical research (2006) | pgx | 7 | [10.1007/s11095-005-9571-z](https://doi.org/10.1007/s11095-005-9571-z) | [16525862](https://www.ncbi.nlm.nih.gov/pubmed/16525862) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Manis_2023.pdf` | Manis MM et al., Managing the Drug-Drug Interaction With…, Hospital pharmacy (2023) | pgx | 7 | [10.1177/00185787221150928](https://doi.org/10.1177/00185787221150928) | [37360203](https://www.ncbi.nlm.nih.gov/pubmed/37360203) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Reidenberg_1995.pdf` | Reidenberg P et al., Effects of felbamate on the pharmacokin…, Clinical pharmacology and t… (1995) | pgx | 7 | [10.1016/0009-9236(95)90244-9](https://doi.org/10.1016/0009-9236(95)90244-9) | [7554701](https://www.ncbi.nlm.nih.gov/pubmed/7554701) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Tolbert_2016.pdf` | Tolbert D et al., Drug-metabolism mechanism: Knowledge-ba…, Journal of clinical pharmac… (2016) | pgx | 7 | [10.1002/jcph.603](https://doi.org/10.1002/jcph.603) | [26224203](https://www.ncbi.nlm.nih.gov/pubmed/26224203) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Walzer_2012.pdf` | Walzer M et al., Pharmacokinetic drug interactions betwe…, Pharmacotherapy (2012) | pgx | 7 | [10.1002/j.1875-9114.2012.01028.x](https://doi.org/10.1002/j.1875-9114.2012.01028.x) | [22422635](https://www.ncbi.nlm.nih.gov/pubmed/22422635) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Wiemann_2023.pdf` | Wiemann C et al., Boscalid shows increased thyroxin-glucu…, Journal of applied toxicolo… (2023) | pgx | 7 | [10.1002/jat.4427](https://doi.org/10.1002/jat.4427) | [36549901](https://www.ncbi.nlm.nih.gov/pubmed/36549901) | metadata signals extractable PGX data (CYP1A, PK/PD-context) |
| `Chiddarwar_2017.pdf` | Chiddarwar AS et al., Genetic Variations in Bilirubin Metabol…, Annals of human genetics (2017) | pgx | 5 | [10.1111/ahg.12179](https://doi.org/10.1111/ahg.12179) | [27943244](https://www.ncbi.nlm.nih.gov/pubmed/27943244) | metadata signals extractable PGX data (UGT1A1) |

<sub>queue written 2026-09-10T01:51:34.057440+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abdul_2021 | not_relevant | 2 | 5 | The paper reports a clinical case of Crigler-Najjar syndrome where phenobarbital was used to lower bilirubin levels, but it does not report a pharmacogenomic study linking a specific genotype to a change in phenobarbital's PK or PD parameters. |
| PGx | Acikgöz_2009 | not_relevant | 0 | 0 | The paper studies the effect of phenobarbital as an enzyme inducer on diazepam metabolism in hepatocytes, not the effect of a gene variant on phenobarbital's PK/PD. |
| PGx | Almond_2016 | not_relevant | 0 | 0 | The paper focuses on predicting drug-drug interactions via CYP3A induction using PBPK models and does not report pharmacogenomic effects (gene variants) on phenobarbital PK/PD. |
| popPK | Asai_2017 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of beta-estradiol by UGT enzymes, using phenobarbital only as an enzyme inducer rather than as the subject drug for pharmacokinetic analysis. |
| PD | Asai_2017 | not_relevant | 0 | 0 | The paper characterizes the metabolism of beta-estradiol in rat brain; phenobarbital is only mentioned as an inducer that did not significantly affect the reaction, with no exposure-response or dose-response PD analysis for phenobarbital itself. |
| PGx | Bai_2021 | not_relevant | 0 | 0 | The paper reports a clinical case of UGT1A1 mutations causing kernicterus and notes that phenobarbital treatment was beneficial, but it does not report a pharmacogenomic study quantifying how specific genotypes alter the pharmacokinetic or pharmacodynamic parameters of phenobarbital. |
| PGx | Breznock_1975 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (phenobarbital inducing digoxin metabolism) in dogs, not a pharmacogenomic effect based on genetic variants. |
| PGx | Burns_2016 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of clobazam, not phenobarbital, and phenobarbital is only mentioned as a comedication affecting clobazam levels. |
| PGx | Chiddarwar_2017 | not_relevant | 0 | 0 | The study investigates genetic variants associated with hyperbilirubinemia and mentions a phenobarbital-responsive enhancer module, but it does not report pharmacokinetic or pharmacodynamic parameters of phenobarbital itself. |
| PGx | Cokley_2022 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between Paxlovid and phenobarbital, not pharmacogenomic effects of gene variants on phenobarbital PK/PD. |
| PGx | Cozzi_2022 | not_relevant | 0 | 0 | The paper describes a UGT1A1 variant causing hyperbilirubinemia and its response to phenobarbital, but does not report pharmacokinetic or pharmacodynamic parameters of phenobarbital itself. |
| PGx | Cribb_1995 | not_relevant | 0 | 0 | The paper investigates the metabolism of sulfamethoxazole and the effect of phenobarbital as an enzyme inducer, rather than the pharmacokinetics or pharmacodynamics of phenobarbital itself. |
| PGx | Dashti_2024 | not_relevant | 0 | 0 | The paper reports HLA-B allele frequencies and their associations with adverse drug reactions (hypersensitivity), not pharmacokinetic or pharmacodynamic parameters. |
| popPK | Deshpande_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of endocannabinoids in neuronal cultures where phenobarbital is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Deshpande_2007 | not_relevant | 0 | 0 | The paper reports dose-response parameters (EC50) for endocannabinoids (methanandamide and 2-AG), not for phenobarbital, which is only mentioned as a refractory control agent. |
| popPK | Dingemanse_1989 | relevant | 10 | 0 | The title confirms a pharmacokinetic modeling study of phenobarbital in rats, but the provided evidence contains no numeric parameter values. |
| PD | Dingemanse_1989 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or results necessary to determine if numeric PD parameters or exposure-response relationships are reported. |
| PGx | Dubey_2003 | not_relevant | 0 | 0 | The paper uses phenobarbital as a CYP450 inducer to study estradiol metabolism in smooth muscle cells, rather than reporting a pharmacogenomic effect on phenobarbital's own PK or PD parameters. |
| popPK | Falcão_2012 | irrelevant | 0 | 0 | The study focuses on eslicarbazepine acetate, not phenobarbital. |
| PD | Falcão_2012 | not_relevant | 0 | 0 | The paper focuses on eslicarbazepine acetate, not phenobarbital. |
| PGx | Foti_2008 | not_relevant | 0 | 0 | The paper focuses on the metabolism and drug-drug interactions of usnic acid, mentioning phenobarbital only as a positive control for enzyme induction, and does not report pharmacogenomic effects on phenobarbital PK/PD. |
| PGx | Hagos_2019 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics of fentanyl, not phenobarbital, and phenobarbital is only mentioned as a concomitant inducer. |
| PGx | Hall_1987 | not_relevant | 0 | 0 | The paper focuses on the metabolism of mephenytoin and does not report pharmacogenomic effects on the PK or PD parameters of phenobarbital. |
| PGx | Hedrich_2016 | not_relevant | 0 | 0 | The paper is a review of CYP2B6-mediated drug-drug interactions and does not report pharmacogenomic effects on the PK/PD of phenobarbital. |
| PGx | Iba_1995 | not_relevant | 0 | 0 | The paper studies the effects of 3,3-dichlorobenzidine on gene expression and enzyme activity, using phenobarbital only as a negative control, and does not report pharmacogenomic effects on phenobarbital PK/PD. |
| PGx | Kanno_2019 | not_relevant | 0 | 0 | The paper investigates the molecular mechanism of CAR transactivation by CCAR1 using reporter assays and does not report pharmacogenomic effects on phenobarbital PK or PD parameters. |
| PGx | Kapelyukh_2025 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving a peptide (NN1177) and does not report pharmacogenomic effects of gene variants on phenobarbital PK/PD. |
| PGx | Lee_2012 | not_relevant | 0 | 0 | The study explicitly reports no significant difference in pharmacokinetic parameters among CYP2C19 genotype groups. |
| popPK | Lee_2019 | irrelevant | 0 | 0 | The study is a pharmacodynamic analysis of respiratory rate and ETCO2, not a pharmacokinetic study of phenobarbital, which is only mentioned as a covariate for antiepileptic drug use. |
| popPK | Leppik_1979 | irrelevant | 2 | 0 | The study focuses on anticonvulsant action and brain content/plasma binding rather than reporting quantitative population pharmacokinetic parameters (CL, V, ka) for phenobarbital. |
| PD | Leppik_1979 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetics (brain content, plasma binding) and qualitative anticonvulsant action, without reporting quantitative exposure-response or dose-response PD parameters for phenobarbital. |
| PGx | Li_2020 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions involving phenobarbital but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Magnusson_2006 | not_relevant | 0 | 0 | The study investigates phenobarbital-mediated enzyme induction in rats using a mechanistic PK model, but it does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Majid_2016 | not_relevant | 0 | 0 | The paper reports the impact of perampanel (a drug) on the pharmacokinetics of phenobarbital, not the impact of a gene variant/genotype on phenobarbital pharmacokinetics. |
| PGx | Manis_2023 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction between primidone and apixaban, not a pharmacogenomic effect on phenobarbital. |
| PGx | Marx-Stoelting_2017 | not_relevant | 0 | 0 | The paper uses phenobarbital as a reference compound to study the hepatotoxicity of fungicides, not to report pharmacogenomic effects on phenobarbital's PK/PD parameters. |
| PGx | McIntyre_1986 | not_relevant | 2 | 5 | The study reports a genetic difference in pharmacodynamic response (sedation/hypnotic effect) but does not provide quantitative fitted effect sizes or specific PK/PD parameter values. |
| PGx | McNary_2025 | not_relevant | 0 | 0 | The study investigates clinical outcomes (thromboembolism, mortality) of drug-drug interactions, not pharmacogenomic effects on PK/PD parameters. |
| PGx | Meirinho_2022 | not_relevant | 0 | 0 | The study investigates drug-drug interactions involving phenobarbital as an inducer, not the effect of a gene variant on phenobarbital's PK/PD. |
| PGx | Menard_2000 | not_relevant | 0 | 0 | The paper studies the metabolism of cicletanine, not phenobarbital, and phenobarbital is only used as an inducing agent in the experimental setup. |
| popPK | Methaneethorn_2021 | irrelevant | 2 | 2 | The paper is a systematic review summarizing ranges from other studies rather than reporting original quantitative disposition parameters from a primary pharmacokinetic study. |
| popPK | Moffett_2018 | relevant | 10 | 2 | The paper is a population PK study for phenobarbital, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided text, which only describes the model structure and covariates. |
| PGx | Mori_1995 | not_relevant | 0 | 0 | The paper investigates the effect of cigarette smoke on the metabolic activation of carcinogens in hamsters, using phenobarbital only as a standard enzyme inducer for comparison, and does not report pharmacogenomic effects on phenobarbital's PK or PD. |
| PGx | Murphy_2003 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between phenytoin and diazepam, not a pharmacogenomic effect on phenobarbital. |
| PGx | Nerurkar_1993 | not_relevant | 0 | 0 | The paper investigates the metabolic specificity of probe substrates (MTR, BZR) for CYP isozymes in rodents and does not report pharmacogenomic effects on phenobarbital PK/PD parameters. |
| PGx | Nessler_2020 | not_relevant | 0 | 0 | The paper describes a genetic variant (PCK2) causing a neurological disorder in dogs and notes that phenobarbital treatment was ineffective, but it does not report a pharmacogenomic effect on phenobarbital's PK or PD parameters. |
| PGx | Okada_2008 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of zonisamide, not phenobarbital. |
| PGx | Perucca_2008 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving phenobarbital but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| PGx | Reidenberg_1995 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (felbamate) rather than a pharmacogenomic effect (gene variant/genotype). |
| PGx | Reik_1985 | not_relevant | 0 | 0 | The paper focuses on the immunological characterization of cytochrome P-450 isozymes and does not report pharmacogenomic effects of gene variants on phenobarbital PK or PD parameters. |
| PGx | Rost_1994 | not_relevant | 0 | 0 | The paper investigates omeprazole-induced CYP1A2 activity using caffeine as a probe, not the pharmacokinetics or pharmacodynamics of phenobarbital. |
| popPK | Ryu_2021 | irrelevant | 2 | 0 | The paper is an external evaluation of existing models and does not report original quantitative PK parameter estimates (CL, V, etc.) for phenobarbital in the provided evidence. |
| PGx | Saruwatari_2010 | not_relevant | 5 | 0 | The paper is a review that mentions CYP2C9/2C19 effects on phenobarbital PK but does not provide specific quantitative effect sizes or fitted parameters for phenobarbital in the provided text. |
| PGx | Saruwatari_2014 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on the pharmacokinetics of clobazam, not phenobarbital. |
| popPK | Schoemaker_2016 | irrelevant | 0 | 0 | The paper focuses on brivaracetam, not phenobarbital, and contains no phenobarbital PK parameters. |
| PD | Schoemaker_2016 | not_relevant | 0 | 0 | The paper focuses on brivaracetam, not phenobarbital, and does not report PD parameters for the specified drug. |
| PGx | Schutzman_2017 | not_relevant | 0 | 0 | The study investigates genetic variants of bilirubin metabolism enzymes (UGT1A1, SLCO1B1) and their effect on hyperbilirubinemia, not the pharmacokinetics or pharmacodynamics of phenobarbital. |
| popPK | Shareef_2018 | relevant | 10 | 2 | The paper describes a population PK study for phenobarbital, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided text, which only offers dosing recommendations and qualitative findings. |
| popPK | Sharpe_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levetiracetam, with phenobarbital serving only as a comparator or second-line treatment without reported PK parameters. |
| PGx | Shimura_2019 | not_relevant | 2 | 5 | The paper reports a pharmacodynamic adverse effect (psychosis) associated with a gene variant, but does not quantify a change in a standard PK/PD parameter (e.g., AUC, Cmax, ED50) of phenobarbital itself. |
| PGx | Sidhu_1995 | not_relevant | 0 | 0 | The paper investigates the modulation of CYP450 gene expression by dexamethasone in rat hepatocytes, not the effect of a human gene variant on the pharmacokinetics or pharmacodynamics of phenobarbital. |
| PGx | Sonnichsen_1995 | not_relevant | 0 | 0 | The paper focuses on paclitaxel metabolism and only mentions phenobarbital as a confounding exposure factor in liver donors, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Stijnen_1992 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic changes (anesthetic threshold/brain sensitivity) with aging rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for phenobarbital. |
| PGx | Sueyoshi_2025 | not_relevant | 0 | 0 | The paper is a review of the molecular mechanisms of phenobarbital induction via the CAR receptor and does not report pharmacogenomic effects of gene variants on PK/PD parameters. |
| PGx | Suvichapanich_2015 | not_relevant | 0 | 0 | The study investigates the association between CYP2C9*3 and severe cutaneous adverse reactions (SCARs), not the effect on pharmacokinetic or pharmacodynamic parameters of phenobarbital. |
| popPK | Teixeira-da-Silva_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of valproic acid (VPA), with phenobarbital serving only as a comedication covariate affecting VPA clearance. |
| popPK | Todorovic_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology paper measuring channel block (EC50) and does not report pharmacokinetic parameters for phenobarbital. |
| PGx | Tolbert_2016 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (DDIs) involving clobazam and phenobarbital, not the pharmacogenomic effects of gene variants on phenobarbital's PK/PD. |
| PGx | Unterberger_2014 | not_relevant | 0 | 0 | The paper investigates the molecular mechanisms of liver tumor formation in a mouse model where phenobarbital is used as a promoter, but it does not report pharmacogenomic effects on phenobarbital's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Van_2021 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on the PK of isavuconazole, not phenobarbital. |
| PGx | Voznesensky_1994 | not_relevant | 0 | 0 | The paper investigates electrostatic interactions between P450 reductase and P450 enzymes, mentioning phenobarbital only as an inducer of microsomes, but does not report any pharmacogenomic effects on phenobarbital PK/PD. |
| PGx | Walzer_2012 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving clobazam and phenobarbital, not the effect of a gene variant on phenobarbital pharmacokinetics. |
| PGx | Wiemann_2023 | not_relevant | 0 | 0 | The paper studies the effect of boscalid on thyroid hormone metabolism and uses phenobarbital only as a reference inducer, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Wolff_1992 | not_relevant | 0 | 0 | The paper studies the effect of phenobarbital as an enzyme inducer on CYP450 activity, not the pharmacokinetics or pharmacodynamics of phenobarbital itself. |
| popPK | Yalcin_2022 | irrelevant | 2 | 0 | The paper is a literature review that discusses phenobarbital PK in neonates on ECMO but does not report original quantitative parameter values (CL, V, etc.) for phenobarbital in the provided text. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | The provided evidence contains only a title and no quantitative pharmacokinetic parameters or data for phenobarbital. |
| PD | Yang_2024 | not_relevant | 0 | 0 | The paper describes a methodological framework (SSA-1DCNN-Attention) for PK/PD modeling but does not report specific numeric PD parameters or exposure-response relationships for phenobarbital. |
| PGx | Yuan_2017 | not_relevant | 0 | 0 | The paper describes a case of Gilbert syndrome (UGT1A1 mutation) where phenobarbital was used as a treatment, but it does not report how the genotype affects the pharmacokinetics or pharmacodynamics of phenobarbital itself. |
| PGx | Yueh_2007 | not_relevant | 0 | 0 | The paper investigates the regulation of UGT1A1 expression by the Nrf2-Keap1 pathway and mentions the phenobarbital-response enhancer region, but it does not report a pharmacogenomic effect of a gene variant on the PK or PD of phenobarbital. |
| PGx | Zhang_2003 | not_relevant | 0 | 0 | The paper characterizes CYP450 expression and induction by phenobarbital in mice, but does not report how a gene variant affects the PK or PD of phenobarbital. |
| PGx | Zhu_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of valproic acid, not phenobarbital. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_phenobarbital`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
