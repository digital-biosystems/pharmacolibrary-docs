# procainamide

- **generic name:** procainamide
- **ATC codes:** `C01BA02`
- **DrugBank:** [DB01035](https://go.drugbank.com/drugs/DB01035)
- **groups:** approved

## About

**Description.** A derivative of procaine with less CNS action.

**Indication.** For the treatment of life-threatening ventricular arrhythmias.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 08:53 | 14:57 | 0/3/0 | 0/1/0 | 0/0/1 | 61,593/5,988 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/3 | 3/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Grasela_1984](drugs/drug_procainamide/Procainamide_Grasela1984_reference.md) | Grasela TH et al., Population pharmacokinetics of procaina…, Clinical pharmacokinetics (1984) | [10.2165/00003088-198409060-00004](https://doi.org/10.2165/00003088-198409060-00004) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Papich_1986](drugs/drug_procainamide/Procainamide_Papich1986_reference.md) | Papich MG et al., Pharmacokinetics of procainamide hydroc…, American journal of veterin… (1986) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Singh_1982](drugs/drug_procainamide/Procainamide_Singh1982_reference.md) | Singh S et al., Procainamide elimination kinetics in pe…, Clinical pharmacology and t… (1982) | [10.1038/clpt.1982.210](https://doi.org/10.1038/clpt.1982.210) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Hong_1984](drugs/drug_procainamide/pd_Hong_1984_unknown.md) | Hong CY et al., Local anaesthetic effect of antiarrhyth…, British journal of clinical… (1984) | [10.1111/j.1365-2125.1984.tb02404.x](https://doi.org/10.1111/j.1365-2125.1984.tb02404.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **NAT2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Hein_2021](drugs/drug_procainamide/pgx_Hein_2021_NAT2_Q100.md) | Hein DW et al., Arylamine N-acetyltransferase acetylati…, Expert opinion on drug meta… (2021) | [10.1080/17425255.2021.1840551](https://doi.org/10.1080/17425255.2021.1840551) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 80 matched, 60 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_15 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ellis_1994.pdf` | Ellis EJ et al., The pharmacokinetics and pharmacodynami…, Journal of veterinary pharm… (1994) | popPK | 10 | [10.1111/j.1365-2885.1994.tb00243.x](https://doi.org/10.1111/j.1365-2885.1994.tb00243.x) | [7525982](https://pubmed.ncbi.nlm.nih.gov/7525982) | The study reports quantitative pharmacokinetic parameters (clearance, volume, half-life) for procainamide in horses with all numeric values explicitly present in the text. |
| `Grasela_1984.pdf` | Grasela TH et al., Population pharmacokinetics of procaina…, Clinical pharmacokinetics (1984) | popPK | 10 | [10.2165/00003088-198409060-00004](https://doi.org/10.2165/00003088-198409060-00004) | [6509861](https://pubmed.ncbi.nlm.nih.gov/6509861) | The paper is a population PK study of procainamide and explicitly reports numeric values for clearance components (CLR, CLA, CLO) and volume of distribution (Vd) in the text. |
| `Kharidia_1996.pdf` | Kharidia J et al., Application of computer-assisted radiot…, Journal of pharmaceutical s… (1996) | popPK | 10 | [10.1021/js950473h](https://doi.org/10.1021/js950473h) | [8773955](https://pubmed.ncbi.nlm.nih.gov/8773955) | The title confirms a PK/PD modeling study of procainamide, but the provided evidence contains only the title with no numeric parameter values. |
| `Liu_1991.pdf` | Liu XQ et al., [Combined pharmacokinetic and pharmacod…, Zhongguo yao li xue bao = A… (1991) | popPK | 10 | not captured | [1719744](https://pubmed.ncbi.nlm.nih.gov/1719744) | The title indicates a PK/PD model analysis for procainamide, but no numeric parameter values are present in the provided evidence. |
| `Papich_1986.pdf` | Papich MG et al., Pharmacokinetics of procainamide hydroc…, American journal of veterin… (1986) | popPK | 10 | not captured | [2431636](https://pubmed.ncbi.nlm.nih.gov/2431636) | The paper reports quantitative pharmacokinetic parameters (CL, V, t1/2, ka) for procainamide in dogs with all numeric values explicitly present in the text. |
| `Singh_1982.pdf` | Singh S et al., Procainamide elimination kinetics in pe…, Clinical pharmacology and t… (1982) | popPK | 10 | [10.1038/clpt.1982.210](https://doi.org/10.1038/clpt.1982.210) | [7128001](https://pubmed.ncbi.nlm.nih.gov/7128001) | The paper reports quantitative two-compartment pharmacokinetic parameters (clearance, volume, half-lives) for procainamide in pediatric patients with all numeric values explicitly provided in the text. |
| `Gole_1991.pdf` | Gole DJ et al., Effects of chronic ethanol ingestion on…, Journal of pharmaceutical s… (1991) | popPK | 9 | [10.1002/jps.2600800309](https://doi.org/10.1002/jps.2600800309) | [2051339](https://pubmed.ncbi.nlm.nih.gov/2051339) | The study reports quantitative PK parameters for procainamide in rats, but the specific numeric values are not present in the provided abstract text. |
| `Kamath_1981.pdf` | Kamath BL et al., Pharmacokinetics of procainamide and N-…, Journal of pharmaceutical s… (1981) | popPK | 9 | [10.1002/jps.2600700319](https://doi.org/10.1002/jps.2600700319) | [6167709](https://pubmed.ncbi.nlm.nih.gov/6167709) | The study reports quantitative PK parameters (half-lives) for procainamide in rats, but specific values for clearance, volume, or rate constants are not present in the provided evidence. |
| `Lu_1991.pdf` | Lu H et al., [Combined pharmacokinetic-pharmacodynam…, Yao xue xue bao = Acta phar… (1991) | popPK | 8 | not captured | [1725230](https://pubmed.ncbi.nlm.nih.gov/1725230) | The paper describes a PK/PD study of procainamide in rabbits, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| `Huang_1990.pdf` | Huang SK et al., [Combined pharmacokinetic--pharmacodyna…, Yao xue xue bao = Acta phar… (1990) | pd | 5 | not captured | [1707209](https://www.ncbi.nlm.nih.gov/pubmed/1707209) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Klotz_2007.pdf` | Klotz U, Antiarrhythmics: elimination and dosage…, Clinical pharmacokinetics (2007) | pgx | 7 | [10.2165/00003088-200746120-00002](https://doi.org/10.2165/00003088-200746120-00002) | [18027986](https://www.ncbi.nlm.nih.gov/pubmed/18027986) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kobayashi_1998.pdf` | Kobayashi K et al., Inhibitory effects of antiarrhythmic dr…, British journal of clinical… (1998) | pgx | 7 | [10.1046/j.1365-2125.1998.t01-1-00692.x](https://doi.org/10.1046/j.1365-2125.1998.t01-1-00692.x) | [9578183](https://www.ncbi.nlm.nih.gov/pubmed/9578183) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Al-Ahmad_2017.pdf` | Al-Ahmad MM et al., Studies on N-Acetyltransferase (NAT2) G…, Annals of human genetics (2017) | pgx | 5 | [10.1111/ahg.12198](https://doi.org/10.1111/ahg.12198) | [28653770](https://www.ncbi.nlm.nih.gov/pubmed/28653770) | metadata signals extractable PGX data (NAT2) |
| `Okumura_1997.pdf` | Okumura K et al., Genotyping of N-acetylation polymorphis…, Clinical pharmacology and t… (1997) | pgx | 5 | [10.1016/S0009-9236(97)90131-4](https://doi.org/10.1016/S0009-9236(97)90131-4) | [9164413](https://www.ncbi.nlm.nih.gov/pubmed/9164413) | metadata signals extractable PGX data (NAT2) |
| `Tsirka_2014.pdf` | Tsirka T et al., Polymorphism p.Val231Ile alters substra…, Gene (2014) | pgx | 5 | [10.1016/j.gene.2013.11.085](https://doi.org/10.1016/j.gene.2013.11.085) | [24333853](https://www.ncbi.nlm.nih.gov/pubmed/24333853) | metadata signals extractable PGX data (NAT2) |

<sub>queue written 2026-09-09T11:07:55.896348+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Adams_1993 | not_relevant | 2 | 5 | The paper reports associations between genetic factors (acetylator phenotype, HLA) and pharmacodynamic outcomes (autoimmunity/antibodies) or qualitative PK markers (presence of metabolite), but does not report quantitative changes in standard PK/PD parameters (e.g., AUC, clearance, half-life) driven by genotype. |
| PGx | Al-Ahmad_2017 | not_relevant | 0 | 0 | The study characterizes NAT2 genotype frequencies and caffeine metabolism in a population but does not measure pharmacokinetic or pharmacodynamic parameters of procainamide. |
| PGx | Arcavi_1993 | not_relevant | 2 | 0 | The text is a review introduction that lists procainamide as a drug with genetic polymorphism but does not report specific quantitative PK/PD effects or fitted effect sizes. |
| PGx | Chang_2011 | not_relevant | 0 | 0 | The paper is a review of drug-induced lupus and does not report specific pharmacogenomic effects on procainamide PK or PD parameters. |
| PGx | Clark_1985 | not_relevant | 2 | 0 | The paper states that phenotyping is not necessary for procainamide if routine monitoring is practiced, but it does not report a specific pharmacogenomic effect size or quantitative change in PK/PD parameters for procainamide. |
| PGx | Corona_2008 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving PDE5 inhibitors and mentions procainamide only as a contraindication example, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Deneer_2011 | not_relevant | 0 | 0 | The paper explicitly states there are no pharmacokinetic data available for procainamide in the elderly and does not report specific pharmacogenomic effects on its PK/PD parameters. |
| PGx | Dotson_2008 | not_relevant | 0 | 0 | The paper reports a genetic association between a taste receptor variant and glucose homeostasis, using procainamide only as a ligand to characterize receptor function, not as a drug for which PK/PD parameters are being measured. |
| PGx | Dubbels_1980 | not_relevant | 0 | 0 | The paper focuses on sulfadimidine and isoniazid pharmacokinetics and acetylation polymorphisms; procainamide is only mentioned in the introduction as a drug affected by acetylation, but no data or effects for procainamide are reported. |
| PGx | Fishbain_2004 | not_relevant | 0 | 0 | The paper is a structured review that lists procainamide as a drug with potential clinical consequences from genetic polymorphisms, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes or effect sizes. |
| popPK | Fukao_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of metoprolol, and procainamide is only used as a co-administered inhibitor in in-vitro experiments without any PK parameter reporting. |
| PGx | Fukao_2014 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics of metoprolol, and procainamide is only mentioned as a competitor in an in vitro uptake assay, not as the subject of a pharmacogenomic analysis. |
| popPK | Gole_1991 | relevant | 9 | 2 | The study reports quantitative PK parameters for procainamide in rats, but the specific numeric values are not present in the provided abstract text. |
| popPK | Hong_1984 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay measuring sperm immobilization (local anesthetic effect) and does not report any pharmacokinetic parameters for procainamide. |
| popPK | Huang_1990 | irrelevant | 1 | 0 | The study focuses on N-acetyl procainamide metabolites in rabbits, not the parent drug procainamide, and no quantitative PK parameters are provided in the evidence. |
| popPK | Kamath_1981 | relevant | 9 | 2 | The study reports quantitative PK parameters (half-lives) for procainamide in rats, but specific values for clearance, volume, or rate constants are not present in the provided evidence. |
| popPK | Kharidia_1996 | relevant | 10 | 0 | The title confirms a PK/PD modeling study of procainamide, but the provided evidence contains only the title with no numeric parameter values. |
| PGx | Klotz_2007 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic changes due to hepatic impairment (disease state), not genetic variants or genotypes. |
| PGx | Kobayashi_1998 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP1A2 inhibition) and does not report any pharmacogenomic effects (gene variants) on the PK or PD of procainamide. |
| PGx | Lappat_1968 | not_relevant | 2 | 5 | The paper investigates the genetic basis of an adverse drug reaction (procainamide-induced SLE) rather than a pharmacokinetic or pharmacodynamic parameter. |
| PGx | Lessard_1997 | not_relevant | 2 | 0 | The study characterizes the enzyme (CYP2D6) responsible for procainamide metabolism in vitro but does not report pharmacogenomic effects (genotype-based differences) on PK/PD parameters in humans. |
| popPK | Li_1994 | irrelevant | 2 | 0 | The paper is a methodological study on parameter estimation algorithms using procainamide only as a demonstration case, and no specific numeric PK parameter values are provided in the evidence. |
| PGx | Li_2012 | not_relevant | 2 | 0 | The paper describes general metabolic pathways and interspecies differences (human vs. mouse) but does not report specific pharmacogenomic effects of human gene variants on PK/PD parameters. |
| popPK | Liu_1991 | relevant | 10 | 0 | The title indicates a PK/PD model analysis for procainamide, but no numeric parameter values are present in the provided evidence. |
| popPK | Lu_1991 | relevant | 8 | 0 | The paper describes a PK/PD study of procainamide in rabbits, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| PGx | Meyer_1982 | not_relevant | 3 | 0 | The text mentions procainamide as an example of a drug affected by N-acetyltransferase polymorphisms but provides no specific data, effect sizes, or quantitative PK/PD parameters for procainamide. |
| PGx | Michaud_2021 | not_relevant | 2 | 0 | The paper is a mini-review discussing the concept of phenoconversion and lists procainamide as a historical case, but it does not report specific pharmacogenomic effects on PK/PD parameters or provide quantitative data. |
| popPK | Oppenheimer_1989 | irrelevant | 0 | 0 | The study is an in-vitro binding assay for a different drug (EO-122) where procainamide is only used as a competitive ligand, reporting no pharmacokinetic parameters. |
| PD | Oppenheimer_1989 | not_relevant | 3 | 2 | The paper reports in vitro receptor binding affinity (Kd, Bmax) for a different drug (EO-122) and only qualitatively mentions procainamide's interaction with the site, without providing numeric PD parameters or an exposure-response curve for procainamide. |
| PGx | Papanikolaou_2026 | not_relevant | 0 | 0 | The paper is a nomenclature update for the NAT2 gene and does not report specific pharmacokinetic or pharmacodynamic data for procainamide. |
| popPK | Prata_2018 | irrelevant | 0 | 0 | The study is an ecotoxicology investigation of procainamide's effects on microalgae, not a pharmacokinetic study, and reports no disposition parameters. |
| PGx | Relling_1989 | not_relevant | 2 | 0 | The paper mentions procainamide only in the context of an association with SLE risk in slow acetylators, without reporting specific PK or PD parameter changes for procainamide. |
| popPK | Shan_1993 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (pA2, EC50) for platelet aggregation, not pharmacokinetic disposition parameters (CL, V, t1/2) for procainamide. |
| PGx | Talesa_2001 | not_relevant | 0 | 0 | The paper studies acetylcholinesterase in mussels and uses procainamide only as an affinity chromatography ligand, not as a drug for pharmacogenomic analysis. |
| popPK | Tasso_2010 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of novel compounds where procainamide is used only as a reference drug, with no pharmacokinetic parameters reported. |
| PD | Tasso_2010 | not_relevant | 1 | 0 | The paper mentions procainamide only as a reference drug for comparison of potency and does not report any specific numeric PD parameters or exposure-response data for it. |
| PGx | Thomas_2004 | not_relevant | 0 | 0 | The paper focuses on imatinib transport and resistance; procainamide is only mentioned as a non-specific inhibitor of hOCT1, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Tsirka_2014 | not_relevant | 0 | 0 | The paper investigates NAT2 substrate selectivity in rhesus macaques and humans but does not report pharmacokinetic or pharmacodynamic parameters for procainamide. |
| PGx | Urakami_2002 | not_relevant | 0 | 0 | The paper characterizes a transporter variant (hOCT2-A) and its in vitro substrate affinity for procainamide, but does not report in vivo pharmacokinetic or pharmacodynamic changes in humans based on genotype. |
| popPK | Vazzana_2007 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of novel analogues on isolated heart tissues and does not report any pharmacokinetic parameters for procainamide. |
| PD | Vazzana_2007 | not_relevant | 4 | 2 | The paper reports qualitative dose-dependent effects and mentions EC50 values for analogues, but does not provide numeric PD parameters or extractable concentration-effect curves for procainamide itself. |
| PGx | Vollmer_2023 | not_relevant | 5 | 5 | The paper reports a case where a slow acetylator phenotype (NAT2) was present, but the observed PK changes (low NAPA) were attributed to ECMO sequestration rather than the genetic variant, and no quantitative pharmacogenomic effect size is provided. |
| PGx | Weber_1981 | not_relevant | 2 | 5 | The paper reports pharmacodynamic effects (DNA damage, antibody development) related to acetylator phenotype, but does not report changes in pharmacokinetic parameters (e.g., AUC, clearance) of procainamide itself. |
| popPK | Whiting_1986 | irrelevant | 1 | 0 | The paper is a general review of population pharmacokinetics theory and mentions procainamide only as an example of a drug where NONMEM has been applied, without reporting any specific quantitative PK parameters for it. |
| popPK | Winkle_1975 | irrelevant | 1 | 0 | The text is a general review of pharmacologic therapy for arrhythmias that mentions procainamide but provides no quantitative pharmacokinetic parameter values. |
| PGx | de_1999 | not_relevant | 0 | 0 | The paper describes a computational model for predicting CYP2D6 metabolism and mentions procainamide only as an example of unusual metabolism, without reporting any pharmacogenomic effects on PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_procainamide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
