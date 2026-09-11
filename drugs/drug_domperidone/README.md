# domperidone

- **generic name:** domperidone
- **ATC codes:** `A03FA03`
- **DrugBank:** [DB01184](https://go.drugbank.com/drugs/DB01184)
- **groups:** approved, investigational, vet_approved

## About

**Description.** A specific blocker of dopamine receptors. It speeds gastrointestinal peristalsis, causes prolactin release, and is used as antiemetic and tool in the study of dopaminergic mechanisms.

**Indication.** For management of dyspepsia, heartburn, epigastric pain, nausea, and vomiting.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 02:03 | 11:42 | 0/1/0 | 0/0/0 | 0/0/0 | 74,795/5,559 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 3/5 | 8/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Dailly_2008](drugs/drug_domperidone/Domperidone_Dailly2008_reference.md) | Dailly E et al., Population pharmacokinetics of domperid…, European journal of clinica… (2008) | [10.1007/s00228-008-0535-1](https://doi.org/10.1007/s00228-008-0535-1) |

## Coverage

- **PubMed hits:** 82 matched, 60 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_23 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dailly_2008.pdf` | Dailly E et al., Population pharmacokinetics of domperid…, European journal of clinica… (2008) | popPK | 10 | [10.1007/s00228-008-0535-1](https://doi.org/10.1007/s00228-008-0535-1) | [18685840](https://pubmed.ncbi.nlm.nih.gov/18685840) | The paper is a population PK study of domperidone and explicitly reports numeric values for Cl/F, Vd/F, and Ka in the abstract. |
| `Heykants_1981.pdf` | Heykants J et al., On the pharmacokinetics of domperidone…, European journal of drug me… (1981) | popPK | 9 | [10.1007/BF03189516](https://doi.org/10.1007/BF03189516) | [7250152](https://pubmed.ncbi.nlm.nih.gov/7250152) | The paper is a primary PK study for domperidone, but the evidence only provides qualitative model descriptions and a single half-life value, lacking the specific numeric CL, V, and Q parameters required for extraction. |
| `Bose_2013.pdf` | Bose A et al., Convolution and validation of in vitro-…, European journal of drug me… (2013) | popPK | 8 | [10.1007/s13318-012-0116-7](https://doi.org/10.1007/s13318-012-0116-7) | [23264125](https://pubmed.ncbi.nlm.nih.gov/23264125) | The study reports PK parameters (ka, absorption) for domperidone, but the specific numeric values are not present in the provided evidence text. |
| `Devandla_2015.pdf` | Devandla A et al., Effect of rifampicin pretreatment on th…, Drug metabolism and persona… (2015) | popPK | 8 | [10.1515/dmpt-2015-0004](https://doi.org/10.1515/dmpt-2015-0004) | [26353177](https://pubmed.ncbi.nlm.nih.gov/26353177) | The study reports quantitative PK parameters (Cmax, AUC, MRT, t1/2) for domperidone, but the evidence only provides percentage changes relative to baseline rather than absolute numeric values for clearance or volume. |
| `Heykants_1981_2.pdf` | Heykants J et al., On the pharmacokinetics of domperidone…, European journal of drug me… (1981) | popPK | 8 | [10.1007/BF03189513](https://doi.org/10.1007/BF03189513) | [7250149](https://pubmed.ncbi.nlm.nih.gov/7250149) | The study reports quantitative PK parameters (half-lives) for domperidone in dogs, but lacks specific values for clearance, volume, or human data. |
| `Wu_2002.pdf` | Wu MS et al., Determination of domperidone in human p…, Acta pharmacologica Sinica (2002) | popPK | 8 | not captured | [11918857](https://pubmed.ncbi.nlm.nih.gov/11918857) | The study reports quantitative PK parameters (Tmax, Cmax, T1/2) for domperidone in humans, but lacks specific clearance (CL) or volume (V) values. |
| `Corsi_1991.pdf` | Corsi M et al., Pharmacological analysis of 5-hydroxytr…, British journal of pharmaco… (1991) | pd | 4 | [10.1111/j.1476-5381.1991.tb12494.x](https://doi.org/10.1111/j.1476-5381.1991.tb12494.x) | [1797331](https://www.ncbi.nlm.nih.gov/pubmed/1797331) | metadata signals extractable PD data (EC50) |
| `Etchegoyen_1986.pdf` | Etchegoyen GS et al., Binding and effects of catecholestrogen…, European journal of pharmac… (1986) | pd | 4 | [10.1016/0014-2999(86)90329-8](https://doi.org/10.1016/0014-2999(86)90329-8) | [3021471](https://www.ncbi.nlm.nih.gov/pubmed/3021471) | metadata signals extractable PD data (EC50) |
| `Kan_2025.pdf` | Kan JY et al., Darunavir inhibits dengue virus replica…, Biochemical pharmacology (2025) | pd | 4 | [10.1016/j.bcp.2025.116839](https://doi.org/10.1016/j.bcp.2025.116839) | [40024350](https://www.ncbi.nlm.nih.gov/pubmed/40024350) | metadata signals extractable PD data (EC50) |
| `Schuurkes_1985.pdf` | Schuurkes JA et al., A comparative study on the effects of d…, Japanese journal of pharmac… (1985) | pd | 4 | [10.1254/jjp.39.123](https://doi.org/10.1254/jjp.39.123) | [4087563](https://www.ncbi.nlm.nih.gov/pubmed/4087563) | metadata signals extractable PD data (IC50) |
| `Vayssette_1986.pdf` | Vayssette J et al., Dopamine receptors in pancreatic acinar…, European journal of pharmac… (1986) | pd | 4 | [10.1016/0014-2999(86)90412-7](https://doi.org/10.1016/0014-2999(86)90412-7) | [2872068](https://www.ncbi.nlm.nih.gov/pubmed/2872068) | metadata signals extractable PD data (EC50) |
| `Athukuri_2017.pdf` | Athukuri BL et al., Enhanced Oral Bioavailability of Domper…, Journal of pharmacy & pharm… (2017) | pgx | 7 | [10.18433/J3MK72](https://doi.org/10.18433/J3MK72) | [28459658](https://www.ncbi.nlm.nih.gov/pubmed/28459658) | metadata signals extractable PGX data (CYP3A1, PK/PD-context) |
| `Michaud_2010.pdf` | Michaud V et al., Characterization of CYP3A isozymes invo…, Drug metabolism letters (2010) | pgx | 7 | [10.2174/187231210791292735](https://doi.org/10.2174/187231210791292735) | [21281268](https://www.ncbi.nlm.nih.gov/pubmed/21281268) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Naidoo_2019.pdf` | Naidoo P et al., Progress in the Consideration of Possib…, Current drug metabolism (2019) | pgx | 7 | [10.2174/1389200220666181128160813](https://doi.org/10.2174/1389200220666181128160813) | [30488793](https://www.ncbi.nlm.nih.gov/pubmed/30488793) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Nomoto_2005.pdf` | Nomoto M et al., [Inter- and intraindividual pharmacokin…, Rinsho shinkeigaku = Clinic… (2005) | pgx | 7 | not captured | [16447756](https://www.ncbi.nlm.nih.gov/pubmed/16447756) | metadata signals extractable PGX data (COMT, PK/PD-context) |
| `Rossi_2010.pdf` | Rossi M et al., Domperidone and long QT syndrome, Current drug safety (2010) | pgx | 7 | [10.2174/157488610791698334](https://doi.org/10.2174/157488610791698334) | [20394569](https://www.ncbi.nlm.nih.gov/pubmed/20394569) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Templeton_2016.pdf` | Templeton I et al., A physiologically based pharmacokinetic…, Biopharmaceutics & drug dis… (2016) | pgx | 7 | [10.1002/bdd.1992](https://doi.org/10.1002/bdd.1992) | [26356245](https://www.ncbi.nlm.nih.gov/pubmed/26356245) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ung_2009.pdf` | Ung D et al., Metabolic interactions between prokinet…, Xenobiotica; the fate of fo… (2009) | pgx | 7 | [10.1080/00498250903096121](https://doi.org/10.1080/00498250903096121) | [19575604](https://www.ncbi.nlm.nih.gov/pubmed/19575604) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yamsani_2014.pdf` | Yamsani SK et al., Effect of silymarin pretreatment on the…, Drug metabolism and drug in… (2014) | pgx | 7 | [10.1515/dmdi-2014-0013](https://doi.org/10.1515/dmdi-2014-0013) | [25029082](https://www.ncbi.nlm.nih.gov/pubmed/25029082) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Zhou_2021.pdf` | Zhou H et al., A simple LC-MS/MS method for simultaneo…, Journal of chromatography.… (2021) | pgx | 7 | [10.1016/j.jchromb.2021.122766](https://doi.org/10.1016/j.jchromb.2021.122766) | [34247102](https://www.ncbi.nlm.nih.gov/pubmed/34247102) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `unknown_2016.pdf` | unknown, Metoclopramide, domperidone: sudden car…, Prescrire international (2016) | pgx | 7 | not captured | [30645828](https://www.ncbi.nlm.nih.gov/pubmed/30645828) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Essa_2012.pdf` | Essa EA et al., Preparation and characterization of dom…, Pakistan journal of pharmac… (2012) | pgx | 5 | not captured | [23009995](https://www.ncbi.nlm.nih.gov/pubmed/23009995) | metadata signals extractable PGX data (CYP3A4) |
| `Parkman_2011.pdf` | Parkman HP et al., Domperidone treatment for gastroparesis…, Digestive diseases and scie… (2011) | pgx | 5 | [10.1007/s10620-010-1472-2](https://doi.org/10.1007/s10620-010-1472-2) | [21063774](https://www.ncbi.nlm.nih.gov/pubmed/21063774) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-09-11T01:59:54.941919+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Athukuri_2017 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (piperine) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Barthelmebs_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of renal vascular receptors where domperidone is used solely as a D2-receptor antagonist, with no pharmacokinetic parameters reported. |
| PD | Barthelmebs_1991 | not_relevant | 0 | 0 | The study reports PD parameters (EC50, Emax) for bromocriptine, not domperidone; domperidone is used only as a qualitative antagonist to confirm receptor subtype. |
| popPK | Biewenga_2015 | irrelevant | 2 | 2 | The study is a thorough QT/QTc safety trial that reports only exposure metrics (AUC, Cmax) and lacks quantitative disposition parameters like clearance, volume, or half-life. |
| PGx | Borst_2013 | not_relevant | 0 | 0 | The paper is a historical review of P-glycoprotein knockout mice and does not report specific pharmacogenomic data or quantitative PK/PD parameters for domperidone in humans. |
| popPK | Bose_2013 | relevant | 8 | 0 | The study reports PK parameters (ka, absorption) for domperidone, but the specific numeric values are not present in the provided evidence text. |
| popPK | Claassen_2005 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of HERG channel blockade and does not report pharmacokinetic parameters. |
| popPK | Corsi_1991 | irrelevant | 0 | 0 | The paper concerns the pharmacological effects of 5-hydroxytryptamine on the urinary bladder and does not involve domperidone pharmacokinetics. |
| PD | Corsi_1991 | not_relevant | 0 | 0 | The paper analyzes the effects of 5-hydroxytryptamine on the human urinary bladder and does not mention domperidone or report any pharmacodynamic parameters for it. |
| popPK | Devandla_2015 | relevant | 8 | 2 | The study reports quantitative PK parameters (Cmax, AUC, MRT, t1/2) for domperidone, but the evidence only provides percentage changes relative to baseline rather than absolute numeric values for clearance or volume. |
| PGx | Doggrell_2014 | not_relevant | 0 | 0 | The paper reviews the cardiac safety and general pharmacokinetics of domperidone but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Duvignaud_2020 | not_relevant | 0 | 0 | The paper is a clinical trial protocol for treating SARS-CoV-2 and does not report pharmacogenomic effects on domperidone PK/PD. |
| PGx | Essa_2012 | not_relevant | 0 | 0 | The paper focuses on formulation development (solid dispersions) to improve dissolution and bioavailability, not on pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Etchegoyen_1986 | irrelevant | 0 | 0 | The paper focuses on receptor binding and adenylate cyclase activity in guinea-pig membranes, not on the pharmacokinetics of domperidone. |
| PD | Etchegoyen_1986 | not_relevant | 0 | 0 | The paper focuses on catecholestrogens and receptor binding in guinea-pig membranes, with no mention of domperidone or its pharmacodynamics. |
| popPK | Heykants_1981 | relevant | 9 | 2 | The paper is a primary PK study for domperidone, but the evidence only provides qualitative model descriptions and a single half-life value, lacking the specific numeric CL, V, and Q parameters required for extraction. |
| popPK | Heykants_1981_2 | relevant | 8 | 3 | The study reports quantitative PK parameters (half-lives) for domperidone in dogs, but lacks specific values for clearance, volume, or human data. |
| PGx | Ioannou_2016 | not_relevant | 0 | 0 | The study is a survey of prescribing practices and drug interactions, not a pharmacogenomic study investigating the effect of genetic variants on domperidone PK/PD. |
| popPK | Kan_2025 | irrelevant | 0 | 0 | The paper concerns darunavir and dengue virus, not domperidone pharmacokinetics. |
| PD | Kan_2025 | not_relevant | 0 | 0 | The paper discusses darunavir and dengue virus, not domperidone, and does not report any pharmacodynamic or exposure-response data for the target drug. |
| popPK | Kurosawa_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of dopamine receptors in guinea pig stomach smooth muscle, where domperidone is used only as a selective antagonist probe, and no pharmacokinetic parameters are reported. |
| PD | Kurosawa_1991 | not_relevant | 0 | 0 | The paper reports pharmacological characterization of dopamine receptors in guinea pig stomach smooth muscle; domperidone is mentioned only as a DA2 antagonist that had no effect, with no exposure-response or dose-response PD parameters reported for domperidone. |
| PGx | Maher_2017 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of neratinib and pelitinib, using domperidone only as an internal standard, and does not report any pharmacogenomic effects on domperidone. |
| PGx | Marechal_2006 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (CYP3A4 inhibition) involving domperidone, not pharmacogenomic effects (gene variants) on its PK/PD. |
| popPK | McGonigle_1988 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study in human retina, not a pharmacokinetic study, and domperidone is only used as a ligand for binding characterization. |
| PD | McGonigle_1988 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinity (Kd, Bmax) and Hill coefficients for domperidone, which are pharmacological binding parameters, not pharmacodynamic (exposure-response or dose-response) parameters in a biological system. |
| PGx | Michaud_2010 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (clarithromycin inhibiting domperidone metabolism) and does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Michaud_2010_2 | not_relevant | 0 | 0 | The study characterizes CYP3A isoforms and cytochrome b5 modulation in vitro but does not report the effect of a specific gene variant or genotype on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Naidoo_2019 | not_relevant | 0 | 0 | The paper discusses sex differences in drug interactions, not pharmacogenomic effects (gene variants) on domperidone PK/PD. |
| popPK | Nomoto_2005 | irrelevant | 0 | 0 | The provided evidence contains only the title and no quantitative pharmacokinetic parameters or data for domperidone. |
| PGx | Nomoto_2005 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic variations in Parkinson's disease treatment but does not report pharmacogenomic effects on domperidone. |
| PGx | Patoine_2014 | not_relevant | 0 | 0 | The study investigates the effect of diabetes (a disease state) on CYP3A activity, not the effect of a specific gene variant or genotype on pharmacokinetics. |
| PGx | Rossi_2010 | not_relevant | 0 | 0 | The paper reviews the safety risk of long QT syndrome associated with domperidone but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Rump_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor modulation in human atria, not a pharmacokinetic study, and domperidone is used only as a tool compound. |
| PD | Rump_1995 | not_relevant | 3 | 2 | The study reports a pKB value for domperidone as a D2 antagonist in an ex vivo electrophysiology/neurotransmission assay, which is a pharmacological potency parameter rather than a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| PGx | Satoh_2003 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of various drugs on estradiol metabolism (CYP3A4 and 17b-HSD) to predict gynecomastia, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of domperidone. |
| popPK | Schuurkes_1985 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation in guinea pigs focusing on gastrointestinal effects, not a pharmacokinetic study reporting quantitative disposition parameters for domperidone. |
| PD | Schuurkes_1985 | not_relevant | 0 | 0 | The study is an in-vitro/in-vivo pharmacological comparison of motility effects in guinea pigs, not a clinical PK/PD or exposure-response analysis for domperidone in humans. |
| PGx | Simard_2004 | not_relevant | 0 | 0 | The paper identifies CYP3A4 as the metabolic enzyme for domperidone using in vitro systems but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters in humans. |
| PGx | Swain_2013 | not_relevant | 0 | 0 | The paper reports a lack of neurotoxicity (clinical observation) for domperidone in a mouse model, but does not report changes in specific pharmacokinetic or pharmacodynamic parameters. |
| PGx | Tanda_1994 | not_relevant | 0 | 0 | The paper investigates the hemodynamic effects of dopamine on tumor blood flow in rats and uses domperidone only as a receptor antagonist to characterize the mechanism, without reporting any pharmacogenomic effects on domperidone's PK or PD parameters. |
| PGx | Templeton_2016 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions with CYP3A4 inhibitors using PBPK modeling, not on pharmacogenomic variants affecting domperidone PK/PD. |
| PGx | Ung_2009 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (erythromycin inhibiting CYP3A4) rather than a pharmacogenomic effect (gene variant/genotype) on domperidone PK/PD. |
| popPK | Vayssette_1986 | irrelevant | 0 | 0 | The paper title indicates a study on dopamine receptors in pancreatic cells, which is mechanistic/in-vitro and not a pharmacokinetic study of domperidone. |
| PD | Vayssette_1986 | not_relevant | 0 | 0 | The paper focuses on dopamine receptors in pancreatic acinar cells from dogs and does not mention domperidone or report any pharmacodynamic or exposure-response data for it. |
| PGx | Wang_2012 | not_relevant | 2 | 5 | The study reports associations between SNPs and clinical outcomes (efficacy/side effects) rather than specific pharmacokinetic or pharmacodynamic parameters. |
| PGx | Ward_2004 | not_relevant | 0 | 0 | The paper characterizes CYP enzymes involved in domperidone metabolism in vitro but does not report pharmacogenomic effects of specific gene variants on PK or PD parameters. |
| popPK | Wu_2023 | irrelevant | 2 | 0 | The study reports only non-compartmental bioequivalence metrics (Cmax, AUC, T1/2) and geometric mean ratios, lacking the specific compartmental or population PK parameters (CL, V, Q, ka) required for extraction. |
| PGx | Yamsani_2014 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (silymarin) rather than a pharmacogenomic effect (gene variant/genotype). |
| PGx | Youssef_2014 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (pioglitazone/ondansetron) on domperidone metabolism, not a pharmacogenomic effect (gene variant/genotype). |
| PGx | Zhou_2021 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction study for cilostazol and ambroxol, using domperidone only as an internal standard, and contains no pharmacogenomic data. |
| PGx | Zidan_2020 | not_relevant | 0 | 0 | The paper describes a bioinformatics pipeline (PHARMIP) and uses domperidone only as a case study to predict potential genetic targets for adverse drug reactions, without reporting specific pharmacogenomic effects on PK or PD parameters. |
| PGx | unknown_2016 | not_relevant | 0 | 0 | The text discusses drug-drug interactions (CYP3A4 inhibitors) and safety risks, but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_domperidone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
