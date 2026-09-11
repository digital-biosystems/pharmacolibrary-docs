# cisapride

- **generic name:** cisapride
- **ATC codes:** `A03FA02`
- **DrugBank:** [DB00604](https://go.drugbank.com/drugs/DB00604)
- **groups:** approved, withdrawn

## About

**Description.** In many countries (including Canada) cisapride has been either withdrawn or has had its indications limited due to reports about long QT syndrome due to cisapride, which predisposes to arrhythmias. The FDA issued a warning letter regarding this risk to health care professionals and patients.

**Indication.** For the symptomatic treatment of adult patients with nocturnal heartburn due to gastroesophageal reflux disease.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 01:47 | 11:19 | 0/3/0 | 0/0/0 | 0/0/0 | 89,570/5,549 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 2/2 | 4/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Michiels_1987](drugs/drug_cisapride/Cisapride_Michiels1987_reference.md) | Michiels M et al., Pharmacokinetics and tissue distributio…, Arzneimittel-Forschung (1987) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Odoul_2002](drugs/drug_cisapride/Cisapride_Odoul2002_reference.md) | Odoul F et al., Population pharmacokinetics of cisaprid…, European journal of clinica… (2002) | [10.1007/s00228-002-0504-z](https://doi.org/10.1007/s00228-002-0504-z) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Preechagoon_1999](drugs/drug_cisapride/Cisapride_Preechagoon1999_reference.md) | Preechagoon Y et al., Population pharmacokinetics of enterall…, British journal of clinical… (1999) | [10.1046/j.1365-2125.1999.00068.x](https://doi.org/10.1046/j.1365-2125.1999.00068.x) |

## Coverage

- **PubMed hits:** 128 matched, 57 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_16 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Odoul_2002.pdf` | Odoul F et al., Population pharmacokinetics of cisaprid…, European journal of clinica… (2002) | popPK | 10 | [10.1007/s00228-002-0504-z](https://doi.org/10.1007/s00228-002-0504-z) | [12451427](https://pubmed.ncbi.nlm.nih.gov/12451427) | The paper is a population PK study of cisapride in neonates and explicitly reports numeric values for V/F, CL/F, and absorption rate constant in the text. |
| `Preechagoon_1999.pdf` | Preechagoon Y et al., Population pharmacokinetics of enterall…, British journal of clinical… (1999) | popPK | 10 | [10.1046/j.1365-2125.1999.00068.x](https://doi.org/10.1046/j.1365-2125.1999.00068.x) | [10594470](https://pubmed.ncbi.nlm.nih.gov/10594470) | The paper reports a population PK model for cisapride with explicit numeric values for CL/F, V/F, and Ka in the text. |
| `Michiels_1987.pdf` | Michiels M et al., Pharmacokinetics and tissue distributio…, Arzneimittel-Forschung (1987) | popPK | 9 | not captured | [3435588](https://pubmed.ncbi.nlm.nih.gov/3435588) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for cisapride in animal models, with specific numeric values provided in the text. |
| `Corsi_1991.pdf` | Corsi M et al., Pharmacological analysis of 5-hydroxytr…, British journal of pharmaco… (1991) | pd | 4 | [10.1111/j.1476-5381.1991.tb12494.x](https://doi.org/10.1111/j.1476-5381.1991.tb12494.x) | [1797331](https://www.ncbi.nlm.nih.gov/pubmed/1797331) | metadata signals extractable PD data (EC50) |
| `Desta_2002.pdf` | Desta Z et al., The gastroprokinetic and antiemetic dru…, Drug metabolism and disposi… (2002) | pgx | 8 | [10.1124/dmd.30.3.336](https://doi.org/10.1124/dmd.30.3.336) | [11854155](https://www.ncbi.nlm.nih.gov/pubmed/11854155) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Ereshefsky_2000.pdf` | Ereshefsky L et al., Review of the pharmacokinetics, pharmac…, Depression and anxiety (2000) | pgx | 8 | [10.1002/1520-6394(2000)12:1+&lt;30::aid-da4&gt;3.0.co;2-g](https://doi.org/10.1002/1520-6394(2000)12:1+<30::aid-da4>3.0.co;2-g) | [11098412](https://www.ncbi.nlm.nih.gov/pubmed/11098412) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Alderman_2005.pdf` | Alderman J, Coadministration of sertraline with cis…, Clinical therapeutics (2005) | pgx | 7 | [10.1016/j.clinthera.2005.07.013](https://doi.org/10.1016/j.clinthera.2005.07.013) | [16154484](https://www.ncbi.nlm.nih.gov/pubmed/16154484) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Andersson_2001.pdf` | Andersson T et al., Drug interaction studies with esomepraz…, Clinical pharmacokinetics (2001) | pgx | 7 | [10.2165/00003088-200140070-00004](https://doi.org/10.2165/00003088-200140070-00004) | [11510629](https://www.ncbi.nlm.nih.gov/pubmed/11510629) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Desta_2000.pdf` | Desta Z et al., Interaction of cisapride with the human…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [10859153](https://www.ncbi.nlm.nih.gov/pubmed/10859153) | metadata signals extractable PGX data (CYP450s, PK/PD-context) |
| `Furuta_2001.pdf` | Furuta S et al., Inhibition of drug metabolism in human…, Xenobiotica; the fate of fo… (2001) | pgx | 7 | [10.1080/00498250110035615](https://doi.org/10.1080/00498250110035615) | [11334262](https://www.ncbi.nlm.nih.gov/pubmed/11334262) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Furuta_2004.pdf` | Furuta S et al., Drug-drug interactions of Z-338, a nove…, European journal of pharmac… (2004) | pgx | 7 | [10.1016/j.ejphar.2004.06.040](https://doi.org/10.1016/j.ejphar.2004.06.040) | [15306208](https://www.ncbi.nlm.nih.gov/pubmed/15306208) | metadata signals extractable PGX data (UGT1A9, PK/PD-context) |
| `Gross_1999.pdf` | Gross AS et al., Influence of grapefruit juice on cisapr…, Clinical pharmacology and t… (1999) | pgx | 7 | [10.1016/S0009-9236(99)70133-5](https://doi.org/10.1016/S0009-9236(99)70133-5) | [10223776](https://www.ncbi.nlm.nih.gov/pubmed/10223776) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kearns_2003.pdf` | Kearns GL et al., Cisapride disposition in neonates and i…, Clinical pharmacology and t… (2003) | pgx | 7 | [10.1016/S0009-9236(03)00225-X](https://doi.org/10.1016/S0009-9236(03)00225-X) | [14534518](https://www.ncbi.nlm.nih.gov/pubmed/14534518) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Michalets_2000.pdf` | Michalets EL et al., Drug interactions with cisapride: clini…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039010-00004](https://doi.org/10.2165/00003088-200039010-00004) | [10926350](https://www.ncbi.nlm.nih.gov/pubmed/10926350) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Mushiroda_2000.pdf` | Mushiroda T et al., The involvement of flavin-containing mo…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [10997945](https://www.ncbi.nlm.nih.gov/pubmed/10997945) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Simard_2001.pdf` | Simard C et al., Study of the drug-drug interaction betw…, European journal of clinica… (2001) | pgx | 7 | [10.1007/s002280100298](https://doi.org/10.1007/s002280100298) | [11497338](https://www.ncbi.nlm.nih.gov/pubmed/11497338) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-11T01:43:55.462603+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alderman_2005 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (sertraline and cisapride) in a general population, not a pharmacogenomic effect based on gene variants or genotypes. |
| PGx | Andersson_2001 | not_relevant | 0 | 0 | The paper discusses a drug-drug interaction (esomeprazole inhibiting CYP2C19) affecting cisapride PK, not a pharmacogenomic effect based on a specific gene variant or genotype. |
| PGx | Arayne_2005 | not_relevant | 0 | 0 | The paper discusses grapefruit juice-drug interactions and mentions cisapride only as a potential victim drug, without reporting any pharmacogenomic effects or specific PK/PD data for cisapride. |
| PGx | Bailey_1998 | not_relevant | 0 | 0 | The paper discusses grapefruit juice-drug interactions and mentions cisapride only as a potential candidate for interaction, without reporting any pharmacogenomic effects or specific PK/PD data for cisapride. |
| popPK | Corsi_1991 | irrelevant | 0 | 0 | The paper is a pharmacological study on urinary bladder and does not report pharmacokinetic parameters for cisapride. |
| PD | Corsi_1991 | not_relevant | 0 | 0 | The paper analyzes the effects of 5-hydroxytryptamine (serotonin) on the urinary bladder, not cisapride. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | The paper is a review of lopinavir/ritonavir and only mentions cisapride as a contraindicated interacting drug, providing no pharmacokinetic parameters for cisapride. |
| PD | Cvetkovic_2003 | not_relevant | 1 | 0 | The paper is a review of lopinavir/ritonavir and mentions cisapride only as a contraindicated drug interaction, providing no pharmacodynamic or exposure-response data for cisapride. |
| popPK | Deneer_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of flecainide, with cisapride serving only as a co-administered prokinetic agent. |
| PGx | Desta_2000 | not_relevant | 0 | 0 | The paper characterizes CYP450 isoforms involved in cisapride metabolism using in vitro systems but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| PGx | Desta_2001 | not_relevant | 0 | 0 | The paper investigates stereoselective metabolism and enantiomer interactions in vitro but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Desta_2002 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of metoclopramide, not cisapride. |
| popPK | Dresser_2000 | irrelevant | 0 | 0 | The paper is a review of CYP3A4 drug interactions and mentions cisapride only as a drug associated with torsades de pointes, without reporting any quantitative pharmacokinetic parameters. |
| PD | Dresser_2000 | not_relevant | 1 | 0 | The text is a general review of CYP3A4 drug interactions and mentions cisapride only in the context of QT prolongation risks, without providing any specific pharmacokinetic data, concentration-effect curves, or numeric PD parameters. |
| popPK | Dubois_2016 | irrelevant | 2 | 0 | The study focuses on in vitro-in vivo correlations for QT prolongation and hERG binding, using cisapride as a paradigm compound rather than reporting quantitative population PK disposition parameters (CL, V, etc.) for cisapride. |
| PGx | Ereshefsky_2000 | not_relevant | 0 | 0 | The paper focuses on venlafaxine pharmacokinetics and only mentions cisapride as an example of a drug with high CYP3A4 interaction potential, without reporting any pharmacogenomic effects on cisapride's PK or PD parameters. |
| PGx | Flockhart_2000 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (CYP3A inhibitors) for cisapride, not pharmacogenomic effects of gene variants on its PK/PD. |
| PGx | Furuta_2001 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (inhibition by omeprazole/cimetidine) rather than pharmacogenomic effects of gene variants on cisapride PK/PD. |
| PGx | Furuta_2004 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions and metabolic pathways (CYP/UGT inhibition) but does not report any pharmacogenomic effects (gene variants) on cisapride's PK or PD parameters. |
| PGx | Gross_1999 | not_relevant | 0 | 0 | The study investigates the effect of grapefruit juice (a food interaction) on cisapride pharmacokinetics, not the effect of a gene variant or genotype. |
| PGx | Hennessy_2008 | not_relevant | 0 | 0 | The study is an epidemiological case-control analysis of cisapride and arrhythmia risk, examining drug-drug interactions with CYP3A4 inhibitors, but it does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Katoh_2003 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (mosapride and erythromycin) and does not report any pharmacogenomic effects (gene variants) on cisapride or mosapride PK/PD parameters. |
| PGx | Kearns_2003 | not_relevant | 0 | 0 | The study investigates developmental ontogeny of CYP3A4 in neonates and infants, not the effect of specific genetic variants or genotypes on pharmacokinetics. |
| popPK | Kempf_2014 | irrelevant | 0 | 0 | The study evaluates pharmacodynamic effects (LES pressure) rather than pharmacokinetic parameters, and no PK values are reported. |
| popPK | Kim_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion channel effects, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Koutsoviti-Papadopoulou_1997 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of gall bladder motility, not a pharmacokinetic study, and reports no disposition parameters. |
| PGx | Lee-Montiel_2021 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (cisapride and ketoconazole) using isogenic hiPSCs, not a pharmacogenomic effect of a specific gene variant on cisapride PK/PD. |
| popPK | Lennox_2025 | irrelevant | 0 | 0 | The paper is a cardiac safety study for imetelstat where cisapride is used only as a positive control for hERG inhibition, not as the subject drug for PK parameter extraction. |
| popPK | Linnik_1991 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study examining serotonergic mechanisms and receptor binding, not a pharmacokinetic study reporting disposition parameters for cisapride. |
| PGx | Lowry_2003 | not_relevant | 0 | 0 | The study evaluates cisapride as a CYP3A4 probe in healthy adults but does not report pharmacogenomic effects (gene variants) on its PK/PD parameters. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (CYP3A4 inhibition and QT prolongation) but does not report any pharmacogenomic effects (gene variants) on cisapride PK or PD. |
| PGx | Mushiroda_2000 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (enzyme inhibition) and metabolic pathways, not the effect of genetic variants or genotypes on pharmacokinetics. |
| popPK | Nolan_2006 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic modeling of repolarization prolongation (QT/RT interval) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for cisapride. |
| PGx | Paakkari_2002 | not_relevant | 0 | 0 | The paper discusses general cardiotoxicity and CYP3A4 interactions but does not report specific pharmacogenomic effects of gene variants on cisapride PK or PD parameters. |
| popPK | Qiu_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of meranzin hydrate and ferulic acid, with cisapride serving only as a comparator for pharmacodynamic effects (gastric emptying) rather than the subject of PK analysis. |
| PGx | Simard_2001 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction between simvastatin and cisapride, not a pharmacogenomic effect (gene variant/genotype) on cisapride PK/PD. |
| popPK | Taniyama_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor interactions and does not report pharmacokinetic parameters. |
| PGx | Thomas_1998 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (cisapride-diltiazem) causing QT prolongation, not a pharmacogenomic effect based on a gene variant or genotype. |
| PGx | Walker_1999 | not_relevant | 0 | 0 | The paper reports on the risk of cardiac arrhythmias associated with cisapride use and drug interactions, but does not investigate the impact of specific gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Webster_2001 | irrelevant | 1 | 0 | The study is a pharmacodynamic assessment of QT prolongation in dogs, reporting ED50 values rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for cisapride. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_cisapride`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
