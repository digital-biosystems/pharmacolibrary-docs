# sumatriptan

- **generic name:** sumatriptan
- **ATC codes:** `N02CC01`, `N02CC51`
- **DrugBank:** [DB00669](https://go.drugbank.com/drugs/DB00669)
- **groups:** approved, investigational

## About

**Description.** Sumatriptan is a serotonin receptor agonist commonly used to treat migraines and sometimes cluster headaches.[L6793,L6796,L6799,L6805,L6808,L6811] Sumatriptan is the first of the triptans and was made available in Europe in 1991 to treat migraines.[A179761] Sumatriptan was granted FDA approval on 28 December 1992.[L6805]

**Indication.** A combination sumatriptan and [naproxen] tablet is indicated for the treatment of migraines with or without auras in patients 12 years of age and older.[L6793] Sumatriptan nasal powder, nasal spray, subcutaneous injection, and tablets are indicated to treat migraines with or without auras in adults.[L6796,L6799,L6805,L6808,L6811] One of the subcutaneous formulations of sumatriptan is also indicated to treat cluster headaches in adults[L6805], while the other subcutaneous formulation is not.[L6808]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-29 22:09 | 21:58 | 0/4/0 | 0/2/0 | 0/0/0 | 262,944/25,122 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 2/8 | 10/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Christensen_2003](drugs/drug_sumatriptan/Sumatriptan_Christensen2003_reference.md) | Christensen ML et al., Pharmacokinetics of sumatriptan nasal s…, Journal of clinical pharmac… (2003) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Christensen_2004](drugs/drug_sumatriptan/Sumatriptan_Christensen2004_reference.md) | Christensen ML et al., Pharmacokinetics of sumatriptan nasal s…, Journal of clinical pharmac… (2004) | [10.1177/0091270004263467](https://doi.org/10.1177/0091270004263467) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Cosson_1999](drugs/drug_sumatriptan/Sumatriptan_Cosson1999_reference.md) | Cosson VF et al., Mixed effect modeling of sumatriptan ph…, Journal of pharmacokinetics… (1999) | [10.1023/a:1020601906027](https://doi.org/10.1023/a:1020601906027) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Ohk_2022](drugs/drug_sumatriptan/Sumatriptan_Ohk2022_reference.md) | Ohk B et al., Evaluation of sex differences in the ph…, Biopharmaceutics & drug dis… (2022) | [10.1002/bdd.2307](https://doi.org/10.1002/bdd.2307) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Longmore_1996](drugs/drug_sumatriptan/pd_Longmore_1996_isometric_tension.md) | Longmore J et al., 5-HT1D receptor agonists and human coro…, British journal of clinical… (1996) | [10.1046/j.1365-2125.1996.04217.x](https://doi.org/10.1046/j.1365-2125.1996.04217.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [MaassenVanDenBrink_1998](drugs/drug_sumatriptan/pd_MaassenVanDenBrink_1998_unknown.md) | MaassenVanDenBrink A et al., Coronary side-effect potential of curre…, Circulation (1998) | [10.1161/01.cir.98.1.25](https://doi.org/10.1161/01.cir.98.1.25) |

## Coverage

- **PubMed hits:** 133 matched, 56 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Christensen_2003.pdf` | Christensen ML et al., Pharmacokinetics of sumatriptan nasal s…, Journal of clinical pharmac… (2003) | popPK | 10 | not captured | [12856385](https://pubmed.ncbi.nlm.nih.gov/12856385) | The evidence explicitly reports quantitative population PK parameters (CL/F, Vd/F) and non-compartmental parameters (Cmax, AUC, t1/2) for sumatriptan. |
| `Christensen_2004.pdf` | Christensen ML et al., Pharmacokinetics of sumatriptan nasal s…, Journal of clinical pharmac… (2004) | popPK | 10 | [10.1177/0091270004263467](https://doi.org/10.1177/0091270004263467) | [15051742](https://pubmed.ncbi.nlm.nih.gov/15051742) | The paper reports quantitative population PK parameters (CL/F, V, half-life) for sumatriptan in children with specific numeric values provided in the text. |
| `Cosson_1999.pdf` | Cosson VF et al., Mixed effect modeling of sumatriptan ph…, Journal of pharmacokinetics… (1999) | popPK | 10 | [10.1023/a:1020601906027](https://doi.org/10.1023/a:1020601906027) | [10567953](https://pubmed.ncbi.nlm.nih.gov/10567953) | The paper reports a population PK model for sumatriptan with specific numeric values for clearance and volume of distribution directly in the text. |
| `Ohk_2022.pdf` | Ohk B et al., Evaluation of sex differences in the ph…, Biopharmaceutics & drug dis… (2022) | popPK | 10 | [10.1002/bdd.2307](https://doi.org/10.1002/bdd.2307) | [34923646](https://pubmed.ncbi.nlm.nih.gov/34923646) | The study is a population PK analysis of sumatriptan and explicitly reports quantitative clearance values for males and females in the text. |
| `Fox_2010.pdf` | Fox AW, Subcutaneous sumatriptan pharmacokineti…, Headache (2010) | popPK | 8 | [10.1111/j.1526-4610.2009.01568.x](https://doi.org/10.1111/j.1526-4610.2009.01568.x) | [19925626](https://pubmed.ncbi.nlm.nih.gov/19925626) | The paper describes a compartmental PK model for sumatriptan and reports specific AUC and concentration values, but lacks explicit numeric values for core disposition parameters like clearance (CL), volume (V), or rate constants (ka, ke). |
| `Fullerton_1999.pdf` | Fullerton T et al., The pharmacodynamics of sumatriptan in…, Journal of clinical pharmac… (1999) | popPK | 8 | [10.1177/00912709922007525](https://doi.org/10.1177/00912709922007525) | [9987697](https://pubmed.ncbi.nlm.nih.gov/9987697) | The study describes a two-compartment PK model for sumatriptan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Maas_2006.pdf` | Maas HJ et al., Prediction of headache response in migr…, Cephalalgia : an internatio… (2006) | popPK | 8 | [10.1111/j.1468-2982.2005.01050.x](https://doi.org/10.1111/j.1468-2982.2005.01050.x) | [16556242](https://pubmed.ncbi.nlm.nih.gov/16556242) | The paper describes a population PK/PD model for sumatriptan, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided evidence, only the EC50. |
| `Maas_2008.pdf` | Maas HJ et al., Relevance of absorption rate and lag ti…, Clinical pharmacokinetics (2008) | popPK | 8 | [10.2165/00003088-200847020-00007](https://doi.org/10.2165/00003088-200847020-00007) | [18193920](https://pubmed.ncbi.nlm.nih.gov/18193920) | The paper describes a population PK model for sumatriptan and reports specific absorption parameters (lag time 0.24 h), but lacks other core disposition parameters like clearance or volume. |
| `McConnachie_2023.pdf` | McConnachie L et al., New characterization of dihydroergotami…, Frontiers in neurology (2023) | pd | 4 | [10.3389/fneur.2023.1282846](https://doi.org/10.3389/fneur.2023.1282846) | [38073648](https://www.ncbi.nlm.nih.gov/pubmed/38073648) | metadata signals extractable PD data (IC50) |
| `Gilibili_2026.pdf` | Gilibili RR et al., Investigating organic cation transporte…, Drug metabolism and disposi… (2026) | pgx | 8 | [10.1016/j.dmd.2025.100220](https://doi.org/10.1016/j.dmd.2025.100220) | [41529637](https://www.ncbi.nlm.nih.gov/pubmed/41529637) | metadata signals extractable PGX data (SLC22A1, PK/PD-context) |
| `Kashihara_2017.pdf` | Kashihara Y et al., Small-Dosing Clinical Study: Pharmacoki…, Journal of pharmaceutical s… (2017) | pgx | 8 | [10.1016/j.xphs.2017.03.010](https://doi.org/10.1016/j.xphs.2017.03.010) | [28322941](https://www.ncbi.nlm.nih.gov/pubmed/28322941) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |
| `Morse_2020.pdf` | Morse BL et al., Pharmacokinetics of Organic Cation Tran…, Drug metabolism and disposi… (2020) | pgx | 8 | [10.1124/dmd.119.088781](https://doi.org/10.1124/dmd.119.088781) | [31771949](https://www.ncbi.nlm.nih.gov/pubmed/31771949) | metadata signals extractable PGX data (SLC22A1, PK/PD-context) |
| `Varma_2023.pdf` | Varma MVS, Genetic variation in organic cation tra…, Expert opinion on drug meta… (2023) | pgx | 8 | [10.1080/17425255.2023.2202813](https://doi.org/10.1080/17425255.2023.2202813) | [37070463](https://www.ncbi.nlm.nih.gov/pubmed/37070463) | metadata signals extractable PGX data (SLC47A1, PK/PD-context) |
| `Moore_2002.pdf` | Moore KH et al., The pharmacokinetics of sumatriptan whe…, Clinical therapeutics (2002) | pgx | 7 | [10.1016/s0149-2918(02)85134-7](https://doi.org/10.1016/s0149-2918(02)85134-7) | [12017403](https://www.ncbi.nlm.nih.gov/pubmed/12017403) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-08-29T21:58:25.110751+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bax_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor-mediated contractions in isolated human coronary arteries, not a pharmacokinetic study, and reports no disposition parameters for sumatriptan. |
| PGx | Bokelmann_2018 | not_relevant | 0 | 0 | The study explicitly reports that the analyzed OCT1 promoter SNPs were not associated with the pharmacokinetics of sumatriptan in healthy individuals. |
| PGx | Capi_2016 | not_relevant | 0 | 0 | The paper reviews eletriptan, not sumatriptan, and discusses drug-drug interactions rather than pharmacogenomic effects. |
| popPK | Comisar_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of zavegepant, with sumatriptan mentioned only as a co-administered drug that did not significantly affect zavegepant's PK. |
| PGx | Fiszman_2006 | not_relevant | 0 | 0 | The paper describes a methodology for automatic summarization of drug information in Medline citations and does not report specific pharmacogenomic effects on sumatriptan PK/PD parameters. |
| popPK | Fox_2010 | relevant | 8 | 3 | The paper describes a compartmental PK model for sumatriptan and reports specific AUC and concentration values, but lacks explicit numeric values for core disposition parameters like clearance (CL), volume (V), or rate constants (ka, ke). |
| popPK | Fullerton_1999 | relevant | 8 | 0 | The study describes a two-compartment PK model for sumatriptan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| PGx | Gilibili_2026 | not_relevant | 0 | 0 | The study investigates drug-drug interactions mediated by OCT1 in cynomolgus monkeys, not the effect of human genetic variants (pharmacogenomics) on sumatriptan PK/PD. |
| PGx | Grände_2014 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of sumatriptan on isolated arteries but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Gul_2002 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular contraction, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Heblinski_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor desensitization and reports pharmacodynamic parameters (EC50), not pharmacokinetic disposition parameters. |
| PGx | Jehangir_2024 | not_relevant | 0 | 0 | The paper investigates bacterial biotransformation of sumatriptan, not human pharmacogenomics or genetic variants affecting PK/PD. |
| PGx | Jensen_2021 | not_relevant | 0 | 0 | The paper focuses on isobutyrylcarnitine as a biomarker for OCT1 activity and does not report pharmacogenomic effects on the PK/PD parameters of sumatriptan. |
| PGx | Kashihara_2017 | not_relevant | 5 | 5 | The study reports that SLCO2B1*3 had no effect on sumatriptan PK and does not report a significant pharmacogenomic effect for ABCG2 on sumatriptan (only for sulfasalazine and rosuvastatin). |
| PGx | Kölz_2021 | not_relevant | 2 | 0 | The paper is a general review of OCT genetics and epigenetics; it mentions sumatriptan only as an example of a substrate but does not report specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Longmore_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of coronary artery contraction, not a pharmacokinetic study, and reports no disposition parameters for sumatriptan. |
| popPK | Maas_2006 | relevant | 8 | 2 | The paper describes a population PK/PD model for sumatriptan, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided evidence, only the EC50. |
| popPK | Maas_2006_2 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic modeling (efficacy, EC50, Emax) rather than pharmacokinetic disposition parameters for sumatriptan. |
| popPK | Maas_2008 | relevant | 8 | 2 | The paper describes a population PK model for sumatriptan and reports specific absorption parameters (lag time 0.24 h), but lacks other core disposition parameters like clearance or volume. |
| popPK | MaassenVanDenBrink_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of coronary artery contraction (EC50/Emax) and does not report pharmacokinetic disposition parameters (CL, V, ka) for sumatriptan. |
| popPK | McConnachie_2023 | irrelevant | 0 | 0 | The study is an in-vitro receptor pharmacology assay for dihydroergotamine with sumatriptan as a comparator, reporting no pharmacokinetic parameters. |
| PD | McConnachie_2023 | not_relevant | 0 | 0 | The paper focuses on the receptor pharmacology of dihydroergotamine (DHE) and only provides a single qualitative screening point for sumatriptan (10 μM) without any dose-response curve or numeric PD parameters. |
| PGx | Mehrotra_2007 | not_relevant | 2 | 5 | The study reports a negative association between 5-HT1B receptor variants and clinical response to sumatriptan, finding no evidence that these variants are major determinants of the drug's effect. |
| PGx | Moore_2002 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (clarithromycin) rather than a pharmacogenomic effect (gene variant/genotype). |
| PGx | Morse_2020 | not_relevant | 2 | 0 | The study uses mouse knockout models to assess transporter function and does not report human pharmacogenomic effects (genotype-phenotype associations) on sumatriptan PK parameters. |
| PGx | Morse_2021 | not_relevant | 5 | 2 | The paper reports pharmacokinetic changes in Oct1 knockout rats (animal model), not in humans with specific genetic variants, and lacks quantitative effect sizes for human pharmacogenomics. |
| PGx | Morse_2021_2 | not_relevant | 5 | 5 | The paper reports in vitro kinetic parameters (Km, Vmax) for sumatriptan in OCT1 variants, but the in vivo pharmacokinetic data provided is for proguanil and cycloguanil, not sumatriptan. |
| PGx | Petersen_2023 | not_relevant | 0 | 0 | The study investigates treatment response (clinical outcome) rather than specific pharmacokinetic or pharmacodynamic parameters, and reports no association between CYP3A4 variants and response. |
| PGx | Pöstges_2023 | not_relevant | 0 | 0 | The paper investigates the metabolic pathways of sumatriptan using recombinant enzymes in vitro but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Rahman_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic efficacy of sumatriptan in a mouse model of motion sickness but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Römer_2021 | not_relevant | 0 | 0 | The study explicitly states that the rs35854239 variant was not associated with significant changes in the pharmacokinetics of sumatriptan. |
| popPK | Schlachter_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for atogepant, not sumatriptan. |
| PGx | Sternieri_2006 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and does not report pharmacogenomic effects (gene variants) on sumatriptan PK/PD. |
| popPK | Takahashi_1995 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study on airway smooth muscle tone where sumatriptan is used only as a receptor antagonist probe, with no pharmacokinetic parameters reported. |
| PD | Takahashi_1995 | not_relevant | 0 | 0 | The paper reports pharmacological data for 5-HT and its analogs, but explicitly states that sumatriptan was essentially inactive, providing no numeric PD parameters or exposure-response relationship for sumatriptan. |
| PGx | Tepper_2001 | not_relevant | 0 | 0 | The paper discusses general safety, drug-drug interactions, and clinical usage guidelines for triptans, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Tzvetkov_2017 | not_relevant | 0 | 0 | The paper is a review focusing on opioids and anti-migraine drugs generally, and does not report specific pharmacogenomic effects on sumatriptan PK/PD parameters. |
| PGx | Varma_2023 | not_relevant | 2 | 0 | The paper is a general review of organic cation transporters and mentions sumatriptan only as an example of a drug affected by these mechanisms, without reporting specific pharmacogenomic data or effect sizes for sumatriptan. |
| popPK | van_2002 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of contractile responses in isolated arteries, not a pharmacokinetic study reporting disposition parameters for sumatriptan. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_sumatriptan`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
