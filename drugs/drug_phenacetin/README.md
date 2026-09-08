# phenacetin

- **generic name:** phenacetin
- **ATC codes:** `N02BE03`
- **DrugBank:** [DB03783](https://go.drugbank.com/drugs/DB03783)
- **groups:** approved, withdrawn

## About

**Description.** Phenacetin was withdrawn from the Canadian market in June 1973 due to concerns regarding nephropathy (damage to or disease of the kidney).

**Indication.** Used principally as an analgesic.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-28 14:37 | 15:28 | 0/1/0 | 0/0/0 | 0/0/0 | 142,012/11,413 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Raaflaub_1975](drugs/drug_phenacetin/Phenacetin_Raaflaub1975_reference.md) | Raaflaub J et al., On the pharmacokinetics of phenacetin i…, European journal of clinica… (1975) | [10.1007/BF00567125](https://doi.org/10.1007/BF00567125) |

## Coverage

- **PubMed hits:** 689 matched, 77 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Raaflaub_1975.pdf` | Raaflaub J et al., On the pharmacokinetics of phenacetin i…, European journal of clinica… (1975) | popPK | 10 | [10.1007/BF00567125](https://doi.org/10.1007/BF00567125) | [1233222](https://pubmed.ncbi.nlm.nih.gov/1233222) | The paper reports quantitative PK parameters (t1/2, Vd, clearance) for phenacetin in humans, with specific numeric ranges provided in the text. |
| `Gerin_2013.pdf` | Gerin B et al., Assessment of cytochrome P450 (1A2, 2B6…, Xenobiotica; the fate of fo… (2013) | pd | 4 | [10.3109/00498254.2012.719088](https://doi.org/10.3109/00498254.2012.719088) | [23153057](https://www.ncbi.nlm.nih.gov/pubmed/23153057) | metadata signals extractable PD data (EC50) |
| `Squires_1993.pdf` | Squires RF et al., Indomethacin/ibuprofen-like anti-inflam…, Molecular pharmacology (1993) | pd | 4 | not captured | [8388990](https://www.ncbi.nlm.nih.gov/pubmed/8388990) | metadata signals extractable PD data (EC50) |
| `Nagaya_2025.pdf` | Nagaya Y et al., In vitro-in vivo scaling of cytochrome…, Drug metabolism and disposi… (2025) | pgx | 8 | [10.1016/j.dmd.2025.100065](https://doi.org/10.1016/j.dmd.2025.100065) | [40199158](https://www.ncbi.nlm.nih.gov/pubmed/40199158) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Whiterock_2012.pdf` | Whiterock VJ et al., Phenacetin pharmacokinetics in CYP1A2-d…, Drug metabolism and disposi… (2012) | pgx | 8 | [10.1124/dmd.111.041848](https://doi.org/10.1124/dmd.111.041848) | [22074769](https://www.ncbi.nlm.nih.gov/pubmed/22074769) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Xiaodong_1994.pdf` | Xiaodong S et al., Omeprazole does not enhance the metabol…, Therapeutic drug monitoring (1994) | pgx | 8 | [10.1097/00007691-199406000-00004](https://doi.org/10.1097/00007691-199406000-00004) | [8085279](https://www.ncbi.nlm.nih.gov/pubmed/8085279) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Belle_2000.pdf` | Belle DJ et al., A population approach to enzyme charact…, Pharmaceutical research (2000) | pgx | 7 | [10.1023/a:1007665310830](https://doi.org/10.1023/a:1007665310830) | [11303964](https://www.ncbi.nlm.nih.gov/pubmed/11303964) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Ge_2024.pdf` | Ge M et al., Investigation of the drug-drug interact…, Journal of ethnopharmacology (2024) | pgx | 7 | [10.1016/j.jep.2024.118212](https://doi.org/10.1016/j.jep.2024.118212) | [38636577](https://www.ncbi.nlm.nih.gov/pubmed/38636577) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `He_2022.pdf` | He Y et al., Circadian oscillator NPAS2 regulates di…, Biochemical pharmacology (2022) | pgx | 7 | [10.1016/j.bcp.2022.115345](https://doi.org/10.1016/j.bcp.2022.115345) | [36379250](https://www.ncbi.nlm.nih.gov/pubmed/36379250) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Iwatsubo_1997.pdf` | Iwatsubo T et al., Prediction of in vivo drug metabolism i…, Pharmacology & therapeutics (1997) | pgx | 7 | [10.1016/s0163-7258(96)00184-2](https://doi.org/10.1016/s0163-7258(96)00184-2) | [9131722](https://www.ncbi.nlm.nih.gov/pubmed/9131722) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Jiang_2020.pdf` | Jiang Z et al., The Effect of Selenium on CYP450 Isofor…, Biological trace element re… (2020) | pgx | 7 | [10.1007/s12011-019-01945-7](https://doi.org/10.1007/s12011-019-01945-7) | [31721080](https://www.ncbi.nlm.nih.gov/pubmed/31721080) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Burnham_2022.pdf` | Burnham EA et al., Interindividual Variability in Cytochro…, Chemical research in toxico… (2022) | pgx | 5 | [10.1021/acs.chemrestox.1c00426](https://doi.org/10.1021/acs.chemrestox.1c00426) | [35484684](https://www.ncbi.nlm.nih.gov/pubmed/35484684) | metadata signals extractable PGX data (CYP3A5) |
| `Ito_2015.pdf` | Ito M et al., Functional characterization of 20 allel…, Drug metabolism and pharmac… (2015) | pgx | 5 | [10.1016/j.dmpk.2015.03.001](https://doi.org/10.1016/j.dmpk.2015.03.001) | [26022657](https://www.ncbi.nlm.nih.gov/pubmed/26022657) | metadata signals extractable PGX data (CYP1A2) |
| `Kim_2012.pdf` | Kim SY et al., Metabolism of R- and S-warfarin by CYP2…, Drug metabolism letters (2012) | pgx | 5 | [10.2174/1872312811206030002](https://doi.org/10.2174/1872312811206030002) | [23331088](https://www.ncbi.nlm.nih.gov/pubmed/23331088) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-08-28T14:31:44.845092+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Albassam_2021 | not_relevant | 0 | 0 | The study investigates the in vitro inhibitory effect of pterostilbene on CYP enzymes using phenacetin as a substrate, but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Behera_2023 | not_relevant | 0 | 0 | The paper investigates the effect of a chemical inhibitor (saccharolactone) on CYP-mediated metabolism, not the effect of a gene variant or genotype on pharmacokinetics. |
| popPK | Belle_2000 | irrelevant | 0 | 0 | The study reports in-vitro enzyme kinetics (Vmax, KM) for phenacetin metabolism, not in-vivo pharmacokinetic disposition parameters (CL, V, ka). |
| PGx | Belle_2000 | not_relevant | 0 | 0 | The paper characterizes enzyme kinetics and identifies CYP1A2 as the responsible enzyme using population modeling, but it does not report a pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter. |
| PGx | Burnham_2022 | not_relevant | 0 | 0 | The study focuses on sunitinib metabolism and uses phenacetin only as a probe substrate to estimate CYP1A2 activity, not to report pharmacogenomic effects on phenacetin's PK/PD parameters. |
| PGx | Ching_2001 | not_relevant | 0 | 0 | The paper investigates the inhibition of CYP enzymes by quinidine and quinine using phenacetin as a probe substrate, but does not report pharmacogenomic effects (gene variants) on phenacetin PK/PD. |
| PGx | Chitrangi_2017 | not_relevant | 0 | 0 | The paper describes an in vitro model for drug metabolism and toxicity but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Cohen_2000 | not_relevant | 0 | 0 | The paper discusses the epidemiology and etiology of bladder cancer, mentioning phenacetin as a carcinogen, but does not report pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Distlerath_1985 | not_relevant | 2 | 0 | The paper characterizes the enzymes (P-450DB and P-450PA) involved in phenacetin metabolism but does not report specific pharmacokinetic or pharmacodynamic parameter changes linked to genotypes in a clinical or population study. |
| PGx | Dong_2021 | not_relevant | 0 | 0 | The paper investigates drug-drug interaction (binimetinib inhibiting CYP1A2) using wild-type human liver microsomes and does not report any pharmacogenomic effects (gene variants) on phenacetin PK/PD. |
| PGx | Edwards_1994 | not_relevant | 0 | 0 | The paper focuses on the metabolism of heterocyclic amines and uses phenacetin only as a probe substrate for enzyme activity, not as the primary drug for pharmacogenomic PK/PD analysis. |
| PGx | Eugster_1993 | not_relevant | 0 | 0 | The paper studies CYP1A1/2 enzyme kinetics and inhibition in yeast, not the effect of genetic variants on phenacetin pharmacokinetics or pharmacodynamics. |
| PGx | Ge_2024 | not_relevant | 0 | 0 | The study investigates drug-drug interactions between herbal extracts and uses phenacetin only as a probe substrate for CYP1A2 activity, without reporting any pharmacogenomic effects (gene variants) on phenacetin PK/PD. |
| popPK | Gerin_2013 | irrelevant | 0 | 0 | Phenacetin is used only as a probe substrate for CYP1A2 induction in an in-vitro hepatocyte assay, not as the subject drug for pharmacokinetic parameter estimation. |
| PD | Gerin_2013 | not_relevant | 0 | 0 | The paper describes a method validation for CYP induction assays using phenacetin as a probe substrate, not a pharmacodynamic or exposure-response analysis of phenacetin itself. |
| PGx | Guo_2021 | not_relevant | 0 | 0 | The paper is a general review of CYP1A2 regulation and metabolism, mentioning phenacetin only as a substrate without reporting specific pharmacogenomic effects on its PK/PD parameters. |
| PGx | He_2022 | not_relevant | 2 | 5 | The paper investigates the role of the circadian clock gene NPAS2 in regulating CYP1A2 activity using phenacetin as a probe substrate, but it does not report pharmacokinetic or pharmacodynamic parameters of phenacetin itself as a therapeutic drug. |
| PGx | Iwatsubo_1997 | not_relevant | 0 | 0 | The paper is a review on scaling in vitro to in vivo metabolism and does not report specific pharmacogenomic effects of gene variants on phenacetin PK/PD. |
| PGx | Jiang_2020 | not_relevant | 0 | 0 | The study investigates the effect of selenium supplementation on CYP450 activity, not the effect of a genetic variant or genotype on pharmacokinetics. |
| popPK | Kanebratt_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic evaluation of CYP450 induction using HepaRG cells, where phenacetin is used only as a probe substrate for enzyme activity, not as the subject drug for PK parameter estimation. |
| PD | Kanebratt_2008 | not_relevant | 0 | 0 | The paper uses phenacetin O-dealkylase activity as a probe for CYP1A2 induction by other drugs, but does not report a pharmacodynamic exposure-response or dose-response relationship for phenacetin itself. |
| PGx | Kim_2012 | not_relevant | 0 | 0 | The paper focuses on warfarin metabolism and only mentions phenacetin as a probe substrate for CYP1A2 activity, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Krenc_2022 | irrelevant | 0 | 0 | The study focuses on the binding of β-eudesmol to CYP isoforms, and phenacetin is only mentioned as a reference substrate for affinity comparison, not as the subject of a pharmacokinetic study. |
| PD | Krenc_2022 | not_relevant | 0 | 0 | The paper reports in vitro ligand-binding affinities (Ks) for beta-eudesmol and phenacetin to CYP enzymes, which is a pharmacokinetic/metabolic interaction study, not a pharmacodynamic (exposure-response or dose-response) analysis of drug effect. |
| popPK | Kwon_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of phenytoin, using phenacetin only as an internal standard for HPLC analysis. |
| PGx | Lee_2013 | not_relevant | 0 | 0 | The paper describes in vitro CYP inhibition assays using phenacetin as a probe substrate and does not report pharmacogenomic effects on phenacetin PK/PD. |
| popPK | Li_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP1A2 induction where phenacetin is used only as a diagnostic substrate for enzyme activity, not as a subject for pharmacokinetic parameter estimation. |
| PD | Li_1998 | not_relevant | 0 | 0 | The paper studies the induction of CYP1A2 by TCDD and MC, using phenacetin-O-deethylase activity only as a diagnostic marker for enzyme expression, not as a pharmacodynamic response to phenacetin exposure. |
| PGx | Masubuchi_1994 | not_relevant | 0 | 0 | The paper focuses on the metabolism of propranolol, not phenacetin. |
| PGx | Nagaya_2025 | not_relevant | 0 | 0 | The paper uses phenacetin as a probe substrate to validate a pharmacokinetic prediction method (RAF) but does not report any pharmacogenomic effects (gene variants) on phenacetin's PK or PD parameters. |
| PGx | Nerurkar_1993 | not_relevant | 0 | 0 | The paper investigates CYP450 isozyme specificity for resorufin substrates in rodents and uses phenacetin only as an inhibitor, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Nielsen-Kudsk_1980 | irrelevant | 1 | 0 | The paper describes an HPLC method for phenacetin but only reports quantitative pharmacokinetic parameters for naproxen, not phenacetin. |
| PGx | Park_2022 | not_relevant | 0 | 0 | The paper reports the inhibition of CYP1A2 by a natural compound (obtusifolin) using phenacetin as a probe substrate, but it does not report a pharmacogenomic effect (gene variant/genotype) on the PK/PD of phenacetin. |
| PGx | Paudel_2023 | not_relevant | 0 | 0 | The study investigates the inhibitory effect of a natural compound (suberosin) on CYP1A2 activity using phenacetin as a probe, but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Qiu_2003 | irrelevant | 0 | 0 | Phenacetin is used only as an internal standard for the analysis of baicalin and oxymatrine, not as the subject drug for PK parameter estimation. |
| popPK | Sharma_2012 | irrelevant | 0 | 0 | The study focuses on adenosine pharmacokinetics, using phenacetin only as an internal standard for the assay, and does not report PK parameters for phenacetin. |
| PD | Sharma_2012 | not_relevant | 0 | 0 | The paper describes a method validation for adenosine and uses phenacetin only as an internal standard; it does not report any pharmacodynamic or exposure-response data for phenacetin. |
| popPK | Shi_2021 | irrelevant | 2 | 8 | Phenacetin is used as a probe substrate to assess CYP1A2 activity in a drug-drug interaction study, not as the subject drug for PK characterization. |
| PGx | Shi_2021 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (avitinib inhibiting CYP450) in rats, not the effect of a gene variant or genotype on phenacetin pharmacokinetics. |
| PGx | Sim_2015 | not_relevant | 0 | 0 | The paper reports in vitro inhibition of CYP enzymes by a compound (CTXA) and does not investigate the effect of human gene variants or genotypes on phenacetin pharmacokinetics or pharmacodynamics. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of GABA receptor binding where phenacetin is only mentioned as a negative control, with no pharmacokinetic parameters reported. |
| PD | Squires_1993 | not_relevant | 0 | 0 | The paper reports that phenacetin failed to potentiate the GABA-antagonistic effect of norfloxacin, providing no numeric PD parameters or exposure-response relationship for phenacetin. |
| popPK | Steinbrecht_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic paper using phenacetin only as a substrate to measure CYP1A2 enzyme activity, not a pharmacokinetic study reporting disposition parameters for phenacetin. |
| PD | Steinbrecht_2020 | not_relevant | 0 | 0 | The paper reports CYP1A2 enzyme activity and aflatoxin B1 toxicity in cell lines, but does not report a pharmacodynamic exposure-response or dose-response relationship for phenacetin itself. |
| PGx | Tassaneeyakul_1992 | not_relevant | 0 | 0 | The paper investigates caffeine as a probe for CYP450 enzymes and mentions phenacetin only as a substrate for inhibition studies, without reporting any pharmacogenomic effects on phenacetin PK/PD. |
| PGx | Tassaneeyakul_1993 | not_relevant | 0 | 0 | The paper characterizes enzyme kinetics of CYP1A1 and CYP1A2 isoforms but does not report pharmacogenomic effects of human gene variants on phenacetin PK/PD parameters. |
| PGx | Tassaneeyakul_1994 | not_relevant | 0 | 0 | The paper focuses on caffeine metabolism and only mentions phenacetin as a probe substrate for CYP1A2 activity without reporting any pharmacogenomic effects on phenacetin PK/PD parameters. |
| popPK | Tsamandouras_2017 | irrelevant | 2 | 1 | The study is an in-vitro microphysiological system (hepatocyte) study reporting intrinsic clearance, not in-vivo population pharmacokinetic parameters (CL, V, Q, ka) for phenacetin. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (vonoprazan inhibiting CYP enzymes) and does not report any pharmacogenomic effects (gene variants) on phenacetin PK/PD. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The study investigates the effect of a disease state (diabetes mellitus) on CYP450 activity, not the effect of a specific gene variant or genotype. |
| PGx | Wu_2020 | not_relevant | 0 | 0 | The study investigates the effect of a drug (calycosin) on phenacetin pharmacokinetics, not the effect of a gene variant or genotype. |
| PGx | Xiaodong_1994 | not_relevant | 0 | 0 | The study investigates the effect of a drug (omeprazole) on phenacetin pharmacokinetics, not the effect of a gene variant or genotype. |
| PGx | Yun_1992 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenetics of alfentanil metabolism, not phenacetin. |
| popPK | Zhang_2007 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay and does not report pharmacokinetic parameters for phenacetin. |
| PGx | Zhao_1994 | not_relevant | 0 | 0 | The paper studies the metabolism of PhIP by CYP1A2 and mentions phenacetin only as a probe substrate to confirm CYP1A2 activity, without reporting any pharmacogenomic effects on phenacetin's PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_phenacetin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
