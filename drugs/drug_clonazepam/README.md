# clonazepam

- **generic name:** clonazepam
- **ATC codes:** `N03AE01`
- **DrugBank:** [DB01068](https://go.drugbank.com/drugs/DB01068)
- **groups:** approved, illicit, investigational

## About

**Description.** A benzodiazepine used to treat various seizures, including myotonic or atonic seizures, photosensitive epilepsy, and absence seizures, although tolerance may develop.[FDA Label][L5572,F3763,F3787,F3796] The agent has also been indicated for treating panic disorder.[FDA Label][A175438,L5572,F3763,F3787,F3796] The mechanism of action appears to involve the enhancement of gamma-aminobutyric acid receptor responses.[FDA Label][A175438,A175441,L5572,F3763,F3787,F3796]

Since being first patented in 1960 and then released for sale from Roche in the US in 1975,[T469,T472] clonazepam has experienced a storied history in the treatment of the aforementioned medical conditions. Now available as a generic medication, the agent continues to see exceptionally high use as millions of prescriptions are written for the medication internationally every year. Unfortunately, however, like most benzodiazepines, clonazepam use has also been associated with recreational use and drug abuse.[FDA Label][L5572,F3763,F3787,F3796]

**Indication.** Clonazepam is indicated as monotherapy or as an adjunct in the treatment of Lennox-Gastaut syndrome (petit mal variant), akinetic, and myoclonic seizures.[FDA Label][F3787] Furthermore, clonazepam may also be of some value in patients with absence spells (petit mal) who have failed to respond to succinimides.[FDA Label][F3787] Additionally, clonazepam is also indicated for the treatment of panic disorder, with or without agoraphobia, as defined in the DSM-V.[FDA Label]

Alternatively, some regional prescribing information note that clonazepam is indicated for all clinical forms of epileptic disease and seizures in adults, especially absence seizures (petit mal) including atypical absence; primary or secondarily generalised tonic-clonic (grand mal), tonic or clonic seizures; partial (focal) seizures with elementary or complex symptomatology; various forms of myoclonic seizures, myoclonus and associated abnormal movements.[L5572,F3796] Such regional label data also has clonazepam indicated for most types of epilepsy in infants and children, especially absences (petit mal), myoclonic seizures and tonic-clonic fits, whether due to primary generalized epilepsy or to secondary generalization of partial epilepsy.[F3796]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 00:30 | 18:55 | 2/3/0 | 0/0/0 | 0/0/2 | 175,224/21,599 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 3/7 | 10/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kruizinga_2022](drugs/drug_clonazepam/Clonazepam_Kruizinga2022_estimate_shrinkage.md) | Kruizinga MD et al., Population pharmacokinetics of clonazep…, British journal of clinical… (2022) | [10.1111/bcp.15152](https://doi.org/10.1111/bcp.15152) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kruizinga_2022](drugs/drug_clonazepam/Clonazepam_Kruizinga2022_parameter.md) | Kruizinga MD et al., Population pharmacokinetics of clonazep…, British journal of clinical… (2022) | [10.1111/bcp.15152](https://doi.org/10.1111/bcp.15152) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Kruizinga_2022](drugs/drug_clonazepam/Clonazepam_Kruizinga2022_estimate_shrinkage_healthy_adults.md) | Kruizinga MD et al., Population pharmacokinetics of clonazep…, British journal of clinical… (2022) | [10.1111/bcp.15152](https://doi.org/10.1111/bcp.15152) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Kruizinga_2022](drugs/drug_clonazepam/Clonazepam_Kruizinga2022_parameter_healthy_adults.md) | Kruizinga MD et al., Population pharmacokinetics of clonazep…, British journal of clinical… (2022) | [10.1111/bcp.15152](https://doi.org/10.1111/bcp.15152) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Hampton_2024](drugs/drug_clonazepam/Clonazepam_Hampton2024_reference.md) | Hampton CE et al., Pharmacokinetics of oral clonazepam in…, Journal of veterinary pharm… (2024) | [10.1111/jvp.13451](https://doi.org/10.1111/jvp.13451) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Yukawa_2001](drugs/drug_clonazepam/Clonazepam_Yukawa2001_reference.md) | Yukawa E et al., Pharmacoepidemiologic investigation of…, Journal of clinical psychop… (2001) | [10.1097/00004714-200112000-00008](https://doi.org/10.1097/00004714-200112000-00008) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Yukawa_2002](drugs/drug_clonazepam/Clonazepam_Yukawa2002_reference.md) | Yukawa E et al., Pharmacoepidemiologic investigation of…, Journal of clinical pharmac… (2002) | [10.1177/0091270002042001009](https://doi.org/10.1177/0091270002042001009) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP3A4** | `Q22` · CL | metabolism | [Tóth_2016](drugs/drug_clonazepam/pgx_T_th_2016_CYP3A4_Q22.md) | Tóth K et al., Optimization of Clonazepam Therapy Adju…, The international journal o… (2016) | [10.1093/ijnp/pyw083](https://doi.org/10.1093/ijnp/pyw083) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **NAT2** | `Q22` · CL | metabolism | [Tóth_2016](drugs/drug_clonazepam/pgx_T_th_2016_NAT2_Q22.md) | Tóth K et al., Optimization of Clonazepam Therapy Adju…, The international journal o… (2016) | [10.1093/ijnp/pyw083](https://doi.org/10.1093/ijnp/pyw083) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 93 matched, 60 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 7  ·  extracted 2  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_15 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hampton_2024.pdf` | Hampton CE et al., Pharmacokinetics of oral clonazepam in…, Journal of veterinary pharm… (2024) | popPK | 10 | [10.1111/jvp.13451](https://doi.org/10.1111/jvp.13451) | [38706125](https://pubmed.ncbi.nlm.nih.gov/38706125) | The study reports quantitative pharmacokinetic parameters (half-life, volume of distribution, Cmax, Tmax) for clonazepam in pigs, and all numeric values are explicitly present in the provided text. |
| `Yukawa_2001.pdf` | Yukawa E et al., Pharmacoepidemiologic investigation of…, Journal of clinical psychop… (2001) | popPK | 10 | [10.1097/00004714-200112000-00008](https://doi.org/10.1097/00004714-200112000-00008) | [11763006](https://pubmed.ncbi.nlm.nih.gov/11763006) | The paper reports a population PK model for clonazepam with explicit numeric values for clearance (CL) and covariate effects in the text. |
| `Yukawa_2002.pdf` | Yukawa E et al., Pharmacoepidemiologic investigation of…, Journal of clinical pharmac… (2002) | popPK | 10 | [10.1177/0091270002042001009](https://doi.org/10.1177/0091270002042001009) | [11808828](https://pubmed.ncbi.nlm.nih.gov/11808828) | The paper reports a population PK model for clonazepam with explicit numeric values for the clearance equation and drug interaction factors. |
| `dos_2009.pdf` | dos Santos FM et al., Pharmacokinetic/pharmacodynamic modelin…, Therapeutic drug monitoring (2009) | popPK | 10 | [10.1097/FTD.0b013e3181b1dd76](https://doi.org/10.1097/FTD.0b013e3181b1dd76) | [19730280](https://pubmed.ncbi.nlm.nih.gov/19730280) | The title indicates a PK/PD modeling study for clonazepam, but the provided evidence contains only the title and no numeric parameter values. |
| `Klein_1994.pdf` | Klein RL et al., Benzodiazepine treatment causes uncoupl…, Journal of neurochemistry (1994) | pd | 5 | [10.1046/j.1471-4159.1994.63062349.x](https://doi.org/10.1046/j.1471-4159.1994.63062349.x) | [7964756](https://www.ncbi.nlm.nih.gov/pubmed/7964756) | metadata signals extractable PD data (EC50) |
| `Louiset_2000.pdf` | Louiset E et al., Subunit composition and pharmacological…, Endocrinology (2000) | pd | 5 | [10.1210/endo.141.3.7397](https://doi.org/10.1210/endo.141.3.7397) | [10698184](https://www.ncbi.nlm.nih.gov/pubmed/10698184) | metadata signals extractable PD data (EC50) |
| `McEachern_1988.pdf` | McEachern AE et al., Benzodiazepine interactions with GABAA…, Molecular pharmacology (1988) | pd | 4 | not captured | [2842652](https://www.ncbi.nlm.nih.gov/pubmed/2842652) | metadata signals extractable PD data (EC50) |
| `Forget_2008.pdf` | Forget P et al., Life-threatening dextromethorphan intox…, Journal of pain and symptom… (2008) | pgx | 8 | [10.1016/j.jpainsymman.2007.09.006](https://doi.org/10.1016/j.jpainsymman.2007.09.006) | [18359183](https://www.ncbi.nlm.nih.gov/pubmed/18359183) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kadono_2010.pdf` | Kadono K et al., Quantitative prediction of intestinal m…, Drug metabolism and disposi… (2010) | pgx | 7 | [10.1124/dmd.109.029322](https://doi.org/10.1124/dmd.109.029322) | [20354105](https://www.ncbi.nlm.nih.gov/pubmed/20354105) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ogawa_2013.pdf` | Ogawa K et al., A new approach to predicting human hepa…, Xenobiotica; the fate of fo… (2013) | pgx | 7 | [10.3109/00498254.2012.733831](https://doi.org/10.3109/00498254.2012.733831) | [23153054](https://www.ncbi.nlm.nih.gov/pubmed/23153054) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Spina_1996.pdf` | Spina E et al., Clinically significant pharmacokinetic…, Clinical pharmacokinetics (1996) | pgx | 7 | [10.2165/00003088-199631030-00004](https://doi.org/10.2165/00003088-199631030-00004) | [8877250](https://www.ncbi.nlm.nih.gov/pubmed/8877250) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Klieber_2015.pdf` | Klieber M et al., CYP2C19 Phenoconversion by Routinely Pr…, The Journal of pharmacology… (2015) | pgx | 5 | [10.1124/jpet.115.225680](https://doi.org/10.1124/jpet.115.225680) | [26159874](https://www.ncbi.nlm.nih.gov/pubmed/26159874) | metadata signals extractable PGX data (CYP2C19) |
| `Modak_2016.pdf` | Modak AS et al., The effect of proton pump inhibitors on…, Journal of breath research (2016) | pgx | 5 | [10.1088/1752-7163/10/4/046017](https://doi.org/10.1088/1752-7163/10/4/046017) | [27991432](https://www.ncbi.nlm.nih.gov/pubmed/27991432) | metadata signals extractable PGX data (CYP2C19) |
| `Olivera_2007.pdf` | Olivera M et al., Effect of common NAT2 variant alleles i…, Drug metabolism letters (2007) | pgx | 5 | [10.2174/187231207779814283](https://doi.org/10.2174/187231207779814283) | [19356010](https://www.ncbi.nlm.nih.gov/pubmed/19356010) | metadata signals extractable PGX data (NAT2) |
| `Pesce_2025.pdf` | Pesce AJ et al., CYP450-based reclassification of urinar…, Journal of opioid management (2025) | pgx | 5 | [10.5055/jom.1001](https://doi.org/10.5055/jom.1001) | [42429026](https://www.ncbi.nlm.nih.gov/pubmed/42429026) | metadata signals extractable PGX data (CYP450) |

<sub>queue written 2026-09-10T00:20:15.624561+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahmed_2022 | not_relevant | 0 | 0 | The paper reports prescribing rates and the potential benefit of pharmacogenomic testing for a population, but does not report specific pharmacokinetic or pharmacodynamic effects of gene variants on clonazepam. |
| popPK | Bae_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of topiramate, with clonazepam listed only as a concomitant medication and not as the subject drug. |
| popPK | Besson_2015 | irrelevant | 2 | 0 | The study is a pharmacodynamic trial comparing clobazam and clonazepam, and the provided evidence contains no quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for clonazepam. |
| popPK | Bond_1985 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay for diazepam, not a pharmacokinetic study of clonazepam. |
| PD | Bond_1985 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinity (Ki, KD, Bmax) for clonazepam, which is a pharmacological binding parameter, not a pharmacodynamic exposure-response or dose-response relationship for a physiological effect. |
| PGx | Cerveny_2006 | not_relevant | 0 | 0 | The study investigates transporter interactions (BCRP) in vitro and finds no interaction, but does not report any pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| PGx | Charasson_2002 | not_relevant | 0 | 0 | The paper studies drug-drug interactions involving clonazepam as an inhibitor/inducer of irinotecan metabolism, not the pharmacogenomics of clonazepam itself. |
| PGx | Cokley_2022 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between Paxlovid and antiseizure medications, not pharmacogenomic effects of gene variants on clonazepam PK/PD. |
| PGx | Cua_2025 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDIs) affecting metabolic ratios, not pharmacogenomic effects of gene variants on clonazepam PK/PD. |
| PGx | Forget_2008 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on dextromethorphan, not clonazepam. |
| PGx | Glue_1997 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving felbamate and mentions clonazepam only to state that no clinically relevant pharmacokinetic interaction was noted, without reporting any pharmacogenomic effects. |
| PGx | Ho_2019 | not_relevant | 5 | 2 | The paper is a case report describing a clinical phenotype (prolonged withdrawal) and genotype, but it does not report quantitative pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, t1/2, receptor binding data) resulting from the variant. |
| popPK | Hoogerkamp_1996 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic concentration-effect relationships (EC50) in rats rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for clonazepam. |
| PGx | Kadono_2010 | not_relevant | 0 | 0 | The paper focuses on a general model for predicting intestinal metabolism using CYP3A4 substrates and does not report any pharmacogenomic effects (gene variants) on clonazepam PK/PD. |
| popPK | Kecskeméti_2005 | irrelevant | 0 | 0 | The study is a pharmacological investigation of anticonvulsant effects and calcium channel blocking, not a pharmacokinetic study, and clonazepam is used only as a comparator agent. |
| PD | Kecskeméti_2005 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, Hill coefficient) for fluoxetine and norfluoxetine, but only provides qualitative/relative efficacy data for clonazepam without numeric concentration-effect parameters. |
| PGx | Kelly_2002 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction involving risperidone and antiretrovirals, with no mention of clonazepam pharmacogenomics or specific PK/PD parameters for clonazepam. |
| popPK | Klein_1994 | irrelevant | 0 | 0 | The paper describes an in-vitro mechanistic study of GABAA receptors, not a pharmacokinetic study of clonazepam. |
| PD | Klein_1994 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of benzodiazepine action on recombinant GABAA receptors in vitro and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for clonazepam in a biological system. |
| PGx | Klieber_2015 | not_relevant | 0 | 0 | The paper discusses CYP2C19 phenoconversion by PPIs and lists clonazepam as a substrate, but it does not report any pharmacokinetic or pharmacodynamic data for clonazepam. |
| popPK | Louiset_2000 | irrelevant | 0 | 0 | The paper focuses on the subunit composition and pharmacological characterization of GABA-A receptors in frog pituitary cells, not on the pharmacokinetics of clonazepam. |
| PD | Louiset_2000 | not_relevant | 0 | 0 | The paper focuses on the subunit composition and pharmacological characterization of GABA-A receptors in frog pituitary melanotrophs and does not mention clonazepam or report any exposure-response or dose-response relationships for it. |
| PGx | Lubet_1992 | not_relevant | 0 | 0 | The paper studies enzyme induction in rat strains and does not report pharmacokinetic or pharmacodynamic parameters of clonazepam. |
| PGx | Luszczki_2005 | not_relevant | 0 | 0 | The study investigates drug-drug interactions in mice and does not report any pharmacogenomic effects (gene variants) on clonazepam PK or PD parameters. |
| PGx | Majid_2016 | not_relevant | 0 | 0 | The paper reports the impact of perampanel on clonazepam clearance, not the effect of a gene variant/genotype on clonazepam PK/PD. |
| PGx | Marvanova_2019 | not_relevant | 0 | 0 | The paper reports a case of perampanel-induced food aversion and discusses potential CYP3A4 interactions, but it does not report a specific pharmacogenomic effect (gene variant/genotype) on the PK or PD parameters of clonazepam. |
| popPK | McEachern_1988 | irrelevant | 0 | 0 | The paper describes in-vitro receptor binding interactions in chick neurons, not pharmacokinetic disposition parameters for clonazepam. |
| PD | McEachern_1988 | not_relevant | 0 | 0 | The paper studies benzodiazepine interactions with GABAA receptors in chick neurons and does not report pharmacodynamic or exposure-response data for clonazepam. |
| popPK | Mehta_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of GABA-benzodiazepine receptor binding and ionophore complex down-regulation, not a pharmacokinetic study, and clonazepam is used only as a displacement ligand. |
| PD | Mehta_1992 | not_relevant | 3 | 2 | The paper reports receptor binding parameters (Kd, Bmax) and GABA EC50, but does not provide a concentration-effect curve or numeric PD parameters (Emax, EC50) for clonazepam itself. |
| PGx | Modak_2016 | not_relevant | 0 | 0 | The paper evaluates CYP2C19 activity using a pantoprazole breath test and discusses clonazepam only as a theoretical example of a drug metabolized by CYP2C19, without reporting any pharmacokinetic or pharmacodynamic data for clonazepam. |
| popPK | Nakashima_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of valproic acid (VPA), with clonazepam mentioned only as a co-administered covariate affecting VPA efficacy, not as the subject drug for PK parameter estimation. |
| PGx | Nakashima_2015 | not_relevant | 0 | 0 | The study focuses on the pharmacogenomics of valproic acid (VPA), not clonazepam. |
| PGx | Ogawa_2013 | not_relevant | 0 | 0 | The paper focuses on species extrapolation (monkey to human) for CYP3A4 substrates and does not report any pharmacogenomic effects (gene variants) on clonazepam PK/PD. |
| PGx | Park_2023 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (rifampin) affecting PK/PD, but explicitly states that the patient's CYP450 genotypes are unknown and no pharmacogenomic effect is reported. |
| PGx | Pesce_2025 | not_relevant | 2 | 0 | The paper reports reference intervals for urinary metabolic ratios to detect deviations (potentially due to genetics) but does not report specific pharmacogenomic effects or fitted effect sizes for clonazepam. |
| PGx | Pesce_2025_2 | not_relevant | 2 | 5 | The paper reports population-level metabolic ratio cutoffs adjusted for CYP genotype frequencies, but does not report specific pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax, Emax) for clonazepam based on individual genotypes. |
| popPK | Rui_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of phenytoin, with clonazepam mentioned only as a co-administered drug affecting phenytoin's Vm. |
| popPK | Schönrock_1993 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study of GABAA receptors where clonazepam is used only as a pharmacological probe, not a PK study. |
| PD | Schönrock_1993 | not_relevant | 1 | 0 | The paper reports qualitative differences in benzodiazepine sensitivity (clonazepam) between receptor subtypes but does not provide numeric dose-response parameters (EC50, Emax) or concentration-effect curves for clonazepam. |
| PGx | Spina_1996 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving carbamazepine and mentions clonazepam only as a victim drug whose metabolism is induced, without reporting any pharmacogenomic effects (gene variants) on clonazepam PK/PD. |
| PGx | Tanwir_2022 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (CBD inhibiting CYP3A4 affecting Tiagabine/Perampanel levels) causing NCSE, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of clonazepam. |
| popPK | Uges_2009 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levetiracetam, with clonazepam serving only as a co-administered standard therapy without reported PK parameters. |
| PGx | Vrzal_2010 | not_relevant | 0 | 0 | The paper investigates the potential of benzodiazepines to induce CYP enzymes but does not report any pharmacogenomic effects (gene variants) on the PK or PD of clonazepam. |
| popPK | Wang_2003 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of phenytoin, with clonazepam serving only as a co-administered drug affecting phenytoin's parameters. |
| PGx | Xiao_2026 | not_relevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse event reports (SCARs) and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Yang_2025 | not_relevant | 0 | 0 | The paper reports a case study of Lesch-Nyhan syndrome and mentions clonazepam as a treatment, but it does not report any pharmacogenomic analysis or effect of the HPRT1 variant on clonazepam's pharmacokinetics or pharmacodynamics. |
| popPK | dos_2009 | relevant | 10 | 0 | The title indicates a PK/PD modeling study for clonazepam, but the provided evidence contains only the title and no numeric parameter values. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_clonazepam`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
