<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;troglitazone&quot;}]"></div>

# troglitazone

- **generic name:** troglitazone
- **ATC codes:** `A10BG01`
- **DrugBank:** [DB00197](https://go.drugbank.com/drugs/DB00197)
- **groups:** approved, withdrawn

## About

**Description.** Troglitazone was withdrawn in 2000 due to risk of hepatotoxicity. It was superseded by [pioglitazone] and [rosiglitazone].

**Indication.** For the treatment of Type II diabetes mellitus. It is used alone or in combination with a sulfonylurea, metformin, or insulin as an adjunct to diet and exercise.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 02:32 | 32:57 | 0/0/0 | 1/1/0 | 0/0/0 | 221,948/9,939 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 6/11 | 15/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Mansour_2011](drugs/drug_troglitazone/pd_Mansour_2011_unknown.md) | Mansour M et al., Thiazolidinediones/PPARγ agonists and f…, International journal of on… (2011) | [10.3892/ijo.2010.877](https://doi.org/10.3892/ijo.2010.877) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Bouwmeester_2023](drugs/drug_troglitazone/pd_Bouwmeester_2023_unknown.md) | Bouwmeester MC et al., Drug Metabolism of Hepatocyte-like Orga…, Molecules (Basel, Switzerla… (2023) | [10.3390/molecules28020621](https://doi.org/10.3390/molecules28020621) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=troglitazone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `SLC29A1` inhibitor | DrugBank actor |
| distribution | liver | `SLC29A1` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer, `CYP2C19` inhibitor, `CYP2C8` inhibitor/substrate, `CYP2C9` inhibitor/substrate, `CYP3A4` inducer, `CYP3A5` inhibitor, `CYP3A7` inhibitor, `GSTP1` unknown, `SLCO1B1` inhibitor, `UGT1A1` substrate, `UGT1A3` substrate, `UGT1A4` substrate, `UGT1A6` inhibitor/substrate, `UGT1A9` substrate, `UGT2B15` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer, `GSTP1` unknown | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer, `CYP3A4` inducer, `CYP3A5` inhibitor, `UGT1A1` substrate, `UGT1A6` inhibitor/substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor | DrugBank actor |
| target | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| target | ovary | `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ACSL4 (inhibitor), ESRRA (inverse agonist), ESRRG (inverse agonist), PPARA (unknown), PPARD (unknown), PPARG (regulator), PPARG (target), SERPINE1 (target), UGT1A10 (substrate), UGT1A7 (substrate), UGT1A8 (substrate).</sub>

## Coverage

- **PubMed hits:** 233 matched, 139 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_15 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kato_2005.pdf` | Kato M et al., The quantitative prediction of in vivo…, Drug metabolism and pharmac… (2005) | pd | 5 | [10.2133/dmpk.20.236](https://doi.org/10.2133/dmpk.20.236) | [16141603](https://www.ncbi.nlm.nih.gov/pubmed/16141603) | metadata signals extractable PD data (Emax) |
| `Loi_1999.pdf` | Loi CM et al., Clinical pharmacokinetics of troglitazo…, Clinical pharmacokinetics (1999) | pd | 5 | [10.2165/00003088-199937020-00001](https://doi.org/10.2165/00003088-199937020-00001) | [10496299](https://www.ncbi.nlm.nih.gov/pubmed/10496299) | metadata signals extractable PD data (Pharmacodynamicmodel) |
| `Sahi_2000.pdf` | Sahi J et al., Effect of troglitazone on cytochrome P4…, Xenobiotica; the fate of fo… (2000) | pd | 5 | [10.1080/004982500237668](https://doi.org/10.1080/004982500237668) | [10752642](https://www.ncbi.nlm.nih.gov/pubmed/10752642) | metadata signals extractable PD data (EC50) |
| `Billo_2025.pdf` | Billo V et al., Carrier cross-reactivities of the bile…, Journal of lipid research (2025) | pd | 4 | [10.1016/j.jlr.2025.100910](https://doi.org/10.1016/j.jlr.2025.100910) | [40998033](https://www.ncbi.nlm.nih.gov/pubmed/40998033) | metadata signals extractable PD data (IC50) |
| `Chothe_2021.pdf` | Chothe PP et al., Function and Expression of Bile Salt Ex…, Drug metabolism and disposi… (2021) | pd | 4 | [10.1124/dmd.120.000057](https://doi.org/10.1124/dmd.120.000057) | [33472814](https://www.ncbi.nlm.nih.gov/pubmed/33472814) | metadata signals extractable PD data (IC50) |
| `Katoh_2000.pdf` | Katoh Y et al., Inhibitory action of troglitazone, an i…, Japanese journal of pharmac… (2000) | pd | 4 | [10.1254/jjp.82.102](https://doi.org/10.1254/jjp.82.102) | [10877527](https://www.ncbi.nlm.nih.gov/pubmed/10877527) | metadata signals extractable PD data (IC50) |
| `Lee_1996.pdf` | Lee K et al., Inhibition of KATP channel activity by…, European journal of pharmac… (1996) | pd | 4 | [10.1016/0014-2999(96)00619-x](https://doi.org/10.1016/0014-2999(96)00619-x) | [8905344](https://www.ncbi.nlm.nih.gov/pubmed/8905344) | metadata signals extractable PD data (IC50) |
| `Morita_2016.pdf` | Morita M et al., Inhibition of plasma lipid oxidation in…, Bioorganic & medicinal chem… (2016) | pd | 4 | [10.1016/j.bmcl.2016.10.033](https://doi.org/10.1016/j.bmcl.2016.10.033) | [27777006](https://www.ncbi.nlm.nih.gov/pubmed/27777006) | metadata signals extractable PD data (IC50) |
| `Sears_2007.pdf` | Sears DD et al., Selective modulation of promoter recrui…, Biochemical and biophysical… (2007) | pd | 4 | [10.1016/j.bbrc.2007.10.057](https://doi.org/10.1016/j.bbrc.2007.10.057) | [17963725](https://www.ncbi.nlm.nih.gov/pubmed/17963725) | metadata signals extractable PD data (EC50) |
| `Young_1998.pdf` | Young MA et al., Establishing the dose response curve fo…, Annals of medicine (1998) | pd | 4 | [10.3109/07853899808999405](https://doi.org/10.3109/07853899808999405) | [9667800](https://www.ncbi.nlm.nih.gov/pubmed/9667800) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `DiTusa_2000.pdf` | DiTusa L et al., Potential interaction between troglitaz…, Journal of clinical pharmac… (2000) | pgx | 7 | [10.1046/j.1365-2710.2000.00288.x](https://doi.org/10.1046/j.1365-2710.2000.00288.x) | [10971778](https://www.ncbi.nlm.nih.gov/pubmed/10971778) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Enokizono_2007.pdf` | Enokizono J et al., Involvement of breast cancer resistance…, Drug metabolism and disposi… (2007) | pgx | 7 | [10.1124/dmd.106.012567](https://doi.org/10.1124/dmd.106.012567) | [17093005](https://www.ncbi.nlm.nih.gov/pubmed/17093005) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |
| `Lim_2005.pdf` | Lim HK et al., Automated screening with confirmation o…, Drug metabolism and disposi… (2005) | pgx | 7 | [10.1124/dmd.104.003475](https://doi.org/10.1124/dmd.104.003475) | [15860655](https://www.ncbi.nlm.nih.gov/pubmed/15860655) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Scheen_2007.pdf` | Scheen AJ, Pharmacokinetic interactions with thiaz…, Clinical pharmacokinetics (2007) | pgx | 7 | [10.2165/00003088-200746010-00001](https://doi.org/10.2165/00003088-200746010-00001) | [17201456](https://www.ncbi.nlm.nih.gov/pubmed/17201456) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Watanabe_2002.pdf` | Watanabe Y et al., Troglitazone glucuronidation in human l…, Drug metabolism and disposi… (2002) | pgx | 7 | [10.1124/dmd.30.12.1462](https://doi.org/10.1124/dmd.30.12.1462) | [12433820](https://www.ncbi.nlm.nih.gov/pubmed/12433820) | metadata signals extractable PGX data (UGT1A8, PK/PD-context) |

<sub>queue written 2026-09-16T02:25:54.558468+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Auerbach_2016 | irrelevant | 0 | 0 | The paper is a review of high-throughput screening data for environmental chemicals and does not report pharmacokinetic parameters for troglitazone. |
| PD | Auerbach_2016 | not_relevant | 0 | 0 | The paper is a review of high-throughput screening data for environmental chemicals and does not report any pharmacodynamic or exposure-response analysis for troglitazone. |
| popPK | Barthel_2002 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on gene expression and enzyme activity in cell lines, not a pharmacokinetic study. |
| popPK | Benzait_2026 | irrelevant | 0 | 0 | The paper is a review of liver-on-a-chip models and does not report any pharmacokinetic parameters for troglitazone. |
| PD | Benzait_2026 | not_relevant | 0 | 0 | The paper is a review of Liver-on-a-Chip models and does not report any pharmacodynamic or exposure-response data for troglitazone. |
| PD | Billo_2025 | not_relevant | 0 | 0 | The paper focuses on the cross-reactivities of bile acid reabsorption inhibitors (elobixibat, linerixibat, maralixibat, odevixibat) and does not contain any pharmacodynamic or exposure-response data for troglitazone. |
| PGx | Bircsak_2021 | not_relevant | 0 | 0 | The paper describes a microfluidic liver model for toxicity screening and uses troglitazone as a positive control, but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Bouwmeester_2023 | irrelevant | 0 | 0 | The study is an in-vitro toxicity assessment using troglitazone as a hepatotoxicant probe to determine EC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Bouwmeester_2023 | not_relevant | 0 | 0 | The paper evaluates in vitro toxicity and drug metabolism in cell models but does not report pharmacogenomic effects of gene variants on troglitazone PK/PD parameters. |
| popPK | Catto_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of netoglitazone (a different drug) on amyloid-beta in Alzheimer's mouse models and does not report pharmacokinetic parameters for troglitazone. |
| PD | Catto_2025 | not_relevant | 3 | 2 | The paper reports qualitative dose-dependent effects (low vs. high dose) on plaque count and size but does not provide numeric concentration-effect curves, Emax/EC50 parameters, or a formal PK/PD model fit. |
| PGx | Chang_2007 | not_relevant | 1 | 0 | The paper is a general review of drug hepatotoxicity that mentions troglitazone only to compare its toxicity with newer thiazolidinediones, without reporting specific pharmacogenomic effects on PK or PD parameters. |
| PD | Chang_2013 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and Rfree ratios for troglitazone, which are static potency metrics rather than a dynamic pharmacodynamic (exposure-response) model with parameters like Emax or EC50 describing the time-course of effect. |
| PGx | Chang_2013 | not_relevant | 0 | 0 | The paper investigates in vitro inhibition of enzymes/transporters by troglitazone to predict hyperbilirubinemia, but does not report pharmacogenomic effects (gene variants) on troglitazone's PK or PD parameters. |
| popPK | Chen_2004 | irrelevant | 0 | 0 | The paper describes a yeast two-hybrid system for PPARgamma ligand screening and reports EC50/IC50 values, which are pharmacodynamic/functional parameters, not pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PGx | Chen_2026 | not_relevant | 0 | 0 | The paper describes a liver organoid-on-chip platform for toxicity testing and does not report pharmacogenomic effects of gene variants on troglitazone PK/PD parameters. |
| PD | Chothe_2021 | not_relevant | 0 | 0 | The paper focuses on the function and expression of the Bile Salt Export Pump (BSEP) in human hepatocytes and does not report any pharmacodynamic or exposure-response data for troglitazone. |
| PGx | Della-Morte_2014 | not_relevant | 0 | 0 | The text is an introduction/abstract discussing the general role of pharmacogenomics in TZDs but does not report specific gene variants or quantitative PK/PD effects for troglitazone. |
| PGx | Denninger_2007 | not_relevant | 0 | 0 | The paper investigates the biological effect of troglitazone on Trypanosoma brucei differentiation, not the impact of human genetic variants on the drug's pharmacokinetics or pharmacodynamics. |
| PGx | DiTusa_2000 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (CYP3A4 induction) affecting lipid levels, but does not investigate or report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Dimaraki_2003 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (troglitazone inducing CYP3A4) affecting dexamethasone PK, but does not report any pharmacogenomic effect (gene variant/genotype) on troglitazone's PK or PD. |
| popPK | Dirven_2021 | irrelevant | 0 | 0 | The paper is a systematic review of drug-induced liver injury (DILI) and toxicity, not a pharmacokinetic study, and it does not report quantitative PK parameters like clearance or volume for troglitazone. |
| PD | Dirven_2021 | not_relevant | 1 | 0 | The paper is a systematic review of preclinical and clinical safety data (DILI) and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect curves, or numeric PD parameters for troglitazone. |
| PGx | Doshi_2011 | not_relevant | 0 | 0 | The paper describes a screening assay for CYP3A4 inhibition/induction and mentions troglitazone as a positive control inducer, but it does not report any pharmacogenomic effects (gene variants) on troglitazone's PK or PD parameters. |
| popPK | Ekins_2002 | irrelevant | 0 | 0 | The paper is a computational pharmacophore modeling study for PXR ligands and does not report any pharmacokinetic parameters for troglitazone. |
| PD | Ekins_2002 | not_relevant | 1 | 0 | The paper uses literature EC50 values to build a pharmacophore model and qualitatively classifies troglitazone as a potent ligand, but it does not report specific numeric PD parameters or an exposure-response curve for troglitazone in this text. |
| popPK | Felts_2008 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on sulindac derivatives where troglitazone is used only as a radiolabeled ligand for binding assays, with no pharmacokinetic parameters reported. |
| PD | Felts_2008 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro activity of sulindac derivatives; troglitazone is only used as a reference ligand in a binding assay, and no PD or exposure-response relationship for troglitazone is reported. |
| PD | Foot_1997 | not_relevant | 1 | 0 | The study reports clinical safety outcomes (glucose levels) but does not provide a concentration-effect or dose-response analysis with numeric PD parameters. |
| PGx | Gan_2008 | not_relevant | 0 | 0 | The study investigates the enzyme kinetics of troglitazone reactive metabolite formation using recombinant CYPs and human liver microsomes, but it does not report pharmacogenomic effects (genotype-based differences) on PK or PD parameters in humans. |
| popPK | Geci_2026 | irrelevant | 0 | 0 | The paper is a review/methodology study on DILI prediction using a dataset of 241 drugs and does not report specific pharmacokinetic parameters for troglitazone. |
| PD | Geci_2026 | not_relevant | 2 | 1 | The paper uses troglitazone as a case study in a retrospective DILI prediction model, utilizing static Cmax and in vitro IC50 values, but does not report a fitted pharmacodynamic model or extractable PD parameters (e.g., Emax, EC50) for the drug itself. |
| popPK | Goud_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular contractility and calcium influx, not a pharmacokinetic study, and reports no disposition parameters for troglitazone. |
| popPK | Gouni-Berthold_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of apoptosis in vascular smooth muscle cells and does not report pharmacokinetic parameters for troglitazone. |
| PD | Grosser_2021 | not_relevant | 3 | 2 | The paper reports in vitro transporter inhibition (IC50) for troglitazone, which is a pharmacological mechanism study, not a pharmacodynamic exposure-response or dose-response analysis of the drug's therapeutic effect. |
| popPK | Gunness_2013 | irrelevant | 0 | 0 | The study is an in-vitro toxicity assessment using cell cultures and does not report pharmacokinetic parameters for troglitazone. |
| PD | Gunness_2013 | not_relevant | 2 | 1 | The paper reports a qualitative comparison of toxicity sensitivity for troglitazone in 3D vs 2D cultures but does not provide numeric PD parameters (e.g., EC50, Emax) or a concentration-effect curve for troglitazone. |
| popPK | Gustafsson_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic toxicity investigation focusing on metabolic bioactivation and covalent binding, not a pharmacokinetic study reporting quantitative disposition parameters for troglitazone. |
| PD | Gustafsson_2014 | not_relevant | 1 | 0 | The paper reports in vitro cytotoxicity EC50 values for a panel of drugs, including troglitazone, but does not provide specific numeric PD parameters for troglitazone in the text, nor does it describe an in vivo exposure-response or dose-response relationship. |
| PGx | Gustafsson_2014 | not_relevant | 0 | 0 | The paper investigates in vitro cytotoxicity and metabolic bioactivation of troglitazone in transfected cell lines, not the effect of a specific gene variant on pharmacokinetic or pharmacodynamic parameters in humans. |
| popPK | Hadi_2025 | irrelevant | 0 | 0 | The study investigates the neuroprotective effects of rosiglitazone in rats and does not report pharmacokinetic parameters for troglitazone. |
| popPK | Hafez_2024 | irrelevant | 0 | 0 | The paper is a review of the pharmacological attributes of Acacia (Vachellia nilotica) and does not contain any pharmacokinetic data for troglitazone. |
| PD | Hafez_2024 | not_relevant | 0 | 0 | The paper is a review of the pharmacological attributes of Acacia (Vachellia nilotica) and does not contain any data, analysis, or mention of troglitazone or its pharmacodynamics. |
| PGx | Hartley_2006 | not_relevant | 0 | 0 | The paper uses troglitazone as a reference PXR agonist to characterize other compounds (MRL-1/MRL-2) and does not report any pharmacogenomic effects on troglitazone's PK or PD parameters. |
| PGx | Hawley_2010 | not_relevant | 0 | 0 | The paper investigates the mechanism of AMPK activation by troglitazone in cell lines with gamma subunit variants, not the effect of a gene variant on the pharmacokinetic or pharmacodynamic parameters of troglitazone in a pharmacogenomic context. |
| PGx | He_2001 | not_relevant | 0 | 0 | The paper describes the enzymatic mechanism of troglitazone metabolism by CYP3A4 but does not report pharmacogenomic effects of specific gene variants on PK or PD parameters. |
| popPK | Hewitt_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytotoxicity and enzyme activity correlations, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Hewitt_2002 | not_relevant | 2 | 5 | The study correlates inter-donor variability in enzyme activities with cytotoxicity in vitro, but does not report a specific gene variant/genotype effect on a PK or PD parameter. |
| PGx | Hirose_1999 | not_relevant | 0 | 0 | The paper investigates the chemopreventive effects of antioxidants and troglitazone on carcinogenesis in rats, but does not report any pharmacogenomic effects (gene variants) on the PK or PD parameters of troglitazone. |
| popPK | Hodis_2006 | irrelevant | 0 | 0 | The study is a clinical trial assessing subclinical atherosclerosis progression and does not report pharmacokinetic parameters for troglitazone. |
| popPK | Hosokawa_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of intestinal ion transport and does not report pharmacokinetic parameters for troglitazone. |
| PGx | Hosomi_2010 | not_relevant | 0 | 0 | The paper describes an in vitro cell-based assay for hepatotoxicity screening and does not report pharmacogenomic effects on PK or PD parameters in humans. |
| PGx | Huang_2016 | not_relevant | 0 | 0 | The paper describes the development of a cell line assay for hepatotoxicity and does not report pharmacogenomic effects on PK/PD parameters in humans. |
| popPK | Kato_2005 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| PD | Kato_2005 | not_relevant | 0 | 0 | The paper focuses on in vitro-to-in vivo extrapolation (IVIVE) for enzyme induction and does not report specific pharmacodynamic or exposure-response data for troglitazone. |
| popPK | Katoh_2000 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| popPK | Kawasaki_1999 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of calcium entry inhibition and does not report any pharmacokinetic parameters for troglitazone. |
| popPK | Kim_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of CKD-519, not troglitazone. |
| PD | Kim_2016 | not_relevant | 0 | 0 | The paper reports pharmacodynamic data for CKD-519, not troglitazone. |
| PGx | Knotts_2009 | not_relevant | 0 | 0 | The paper investigates TUSC5 as a PPARgamma target gene and its association with obesity, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of troglitazone. |
| popPK | Lee_1996 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| popPK | Li_2002 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channels, not a pharmacokinetic study, and troglitazone is only used as a comparator agent. |
| PD | Li_2002 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of LY-171883; troglitazone is only mentioned as a single-point qualitative comparison (decreased channel activity) without any dose-response curve or numeric PD parameters. |
| PGx | Lim_2005 | not_relevant | 0 | 0 | The paper reports mechanism-based inactivation of CYP3A4 by troglitazone in pooled human liver microsomes, but does not report any pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter. |
| popPK | Lloyd_2002 | irrelevant | 0 | 0 | The study is an in-vitro hepatotoxicity/cytotoxicity assessment, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for troglitazone. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy and safety outcomes (HbA1c, BP, etc.) for glucose-lowering agents in CKD, not a pharmacokinetic study, and it does not report any PK parameters for troglitazone. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for troglitazone. |
| PD | Loi_1999 | not_relevant | 0 | 0 | The paper focuses on clinical pharmacokinetics (ADME) and does not report pharmacodynamic or exposure-response relationships with numeric PD parameters. |
| popPK | Majeed_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of TRP channel modulation, not a pharmacokinetic study, and troglitazone is only a comparator agent. |
| popPK | Mallillin_2026 | irrelevant | 0 | 0 | The paper is a review of allometric scaling methods and does not report quantitative pharmacokinetic parameters for troglitazone. |
| PD | Mallillin_2026 | not_relevant | 0 | 0 | The paper is a review of allometric scaling for PK prediction and does not report any pharmacodynamic or exposure-response data for troglitazone. |
| PD | Mansour_2018 | not_relevant | 0 | 0 | The paper focuses on the combination of stearidonic acid and docetaxel; troglitazone is only used as a positive control for PPARγ expression and no PD parameters or dose-response curves for troglitazone are reported. |
| PGx | Matsumoto_2011 | not_relevant | 0 | 0 | The paper discusses the mechanism of hepatic injury for Benzbromarone and only mentions troglitazone as a comparative example of PPARgamma agonists, without reporting any pharmacogenomic effects on troglitazone's PK or PD parameters. |
| PD | Miyashita_2022 | not_relevant | 0 | 0 | Troglitazone is used only as a negative control in an in vitro lens opacity study; no exposure-response or dose-response PD parameters for troglitazone are reported. |
| PD | Morita_2016 | not_relevant | 0 | 0 | The paper focuses on the in vitro antioxidant properties of various drugs against lipid oxidation and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for troglitazone. |
| popPK | Noor_2009 | irrelevant | 0 | 0 | The study is an in-vitro toxicity assessment using cell lines and does not report pharmacokinetic parameters for troglitazone. |
| PD | Noor_2009 | not_relevant | 3 | 2 | The paper reports an EC50 threshold (100 microM) for toxicity classification in an in-vitro assay, but does not provide specific numeric PD parameters (like Emax, specific EC50 values for troglitazone, or dose-response curves) for troglitazone in the provided text. |
| PGx | Nowak_2002 | not_relevant | 0 | 0 | The study investigates the effect of pioglitazone on CYP3A4 activity in a general population, not the effect of a specific gene variant or genotype on the pharmacokinetics or pharmacodynamics of troglitazone. |
| popPK | Obara_2025 | irrelevant | 0 | 0 | The study is an in-vitro cell model development paper where troglitazone is used only as a cytotoxicity probe, and no pharmacokinetic parameters are reported. |
| PD | Obara_2025 | not_relevant | 0 | 0 | The paper focuses on the development of a CYP2D6-enhanced HepaRG cell model and reports dose-response data for perhexiline (a CYP2D6 substrate) to demonstrate reduced toxicity, but it does not report any pharmacodynamic or exposure-response relationship for troglitazone. |
| PGx | Ogino_2002 | not_relevant | 0 | 0 | The study investigates the effect of troglitazone on CYP3A expression in cell lines, not the effect of a gene variant on troglitazone's PK or PD parameters. |
| PGx | Pozo_2026 | not_relevant | 0 | 0 | The paper evaluates the metabolic capacity of 3D iPSC-derived hepatocytes using troglitazone as a DILI compound, but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Prabhu_2002 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on metabolite identification in hepatocytes and does not report quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for troglitazone. |
| PD | Prabhu_2002 | not_relevant | 3 | 1 | The paper reports qualitative differences in metabolite formation between sensitive and resistant donors based on cytotoxicity EC50s, but does not provide numeric PD parameters or an exposure-response curve for troglitazone itself. |
| PGx | Qosa_2021 | not_relevant | 0 | 0 | The paper compares iPSC and primary hepatocytes for toxicity and metabolism but does not report pharmacogenomic effects of gene variants on troglitazone PK/PD. |
| popPK | Rafehi_2026 | irrelevant | 0 | 0 | The paper focuses on transporter polypharmacology and hit identification, containing no pharmacokinetic parameters or data for troglitazone. |
| PD | Rafehi_2026 | not_relevant | 0 | 0 | The paper focuses on transporter profiling and hit identification for ABC and SLC transporters, with no mention of troglitazone or any pharmacodynamic exposure-response analysis. |
| PGx | Rubiano_2021 | not_relevant | 0 | 0 | The paper focuses on the reproducibility of a liver microphysiological system for drug testing and does not report any pharmacogenomic effects or genetic variants. |
| popPK | Rudich_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nelfinavir's effects on adipocytes, using troglitazone only as a co-treatment agent, and reports no pharmacokinetic parameters. |
| popPK | Saha_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic toxicity assessment using cell lines, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Saha_2010_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of hepatotoxicity and PPAR binding, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Sahi_2000 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Sahi_2000 | not_relevant | 0 | 0 | The paper focuses on the effect of troglitazone on CYP450 enzyme activity in hepatocytes, which is a mechanism of drug-drug interaction or toxicity, not a pharmacodynamic exposure-response relationship for the drug's therapeutic effect. |
| PGx | Savaryn_2022 | not_relevant | 0 | 0 | The paper investigates CYP3A4 induction by troglitazone in hepatocytes but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Scheen_2007 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (rifampicin, gemfibrozil) and CYP metabolism but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Sears_2007 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PD | Sears_2007 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of PPARgamma promoter recruitment and transcriptional activity, not on pharmacokinetic or pharmacodynamic exposure-response modeling for troglitazone. |
| popPK | Shibata_1999 | irrelevant | 0 | 0 | The study focuses on the pharmacological profile of JTT-501, with troglitazone mentioned only as a structural comparator, and no PK parameters are reported. |
| PD | Shibata_1999 | not_relevant | 0 | 0 | The paper focuses on the pharmacological profile of JTT-501 and does not report any pharmacodynamic or exposure-response data for troglitazone. |
| popPK | Shipley_2004 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on transcriptional crosstalk using troglitazone as a ligand, and it does not report any pharmacokinetic parameters. |
| popPK | Sperry_2023 | irrelevant | 0 | 0 | The paper focuses on statins and COVID-19 drug repurposing and does not mention troglitazone or report any pharmacokinetic parameters for it. |
| PD | Sperry_2023 | not_relevant | 0 | 0 | The paper focuses on statins (simvastatin, atorvastatin, etc.) and does not contain any data, analysis, or mention of troglitazone. |
| PGx | Su_1999 | not_relevant | 0 | 0 | The paper characterizes a monoclonal antibody for detecting PPARgamma expression in response to troglitazone in cell lines, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Taskar_2020 | irrelevant | 0 | 0 | The paper is a review of PBPK modeling for transporter-mediated drug-drug interactions and does not report original quantitative pharmacokinetic parameters for troglitazone. |
| PD | Taskar_2020 | not_relevant | 0 | 0 | The paper is a review of PBPK modeling for transporter-mediated drug-drug interactions and does not report any pharmacodynamic or exposure-response data for troglitazone. |
| PGx | Tie_2012 | not_relevant | 0 | 0 | The paper focuses on computational modeling of CYP3A4 inhibition by various chemicals and does not report pharmacogenomic effects (gene variants) on troglitazone PK/PD. |
| PGx | Wang_2019 | not_relevant | 0 | 0 | The paper is a review on the anticancer effects of fucoxanthin and does not mention troglitazone or pharmacogenomic effects on its PK/PD parameters. |
| PGx | Watanabe_2000 | not_relevant | 0 | 0 | The provided text is metadata from the GROBID software and does not contain any scientific content regarding troglitazone or pharmacogenomics. |
| PD | Watanabe_2002 | not_relevant | 0 | 0 | The paper focuses on in vitro metabolic kinetics (glucuronidation by UGTs) and does not report any pharmacodynamic or exposure-response relationships for troglitazone. |
| PGx | Watanabe_2002 | not_relevant | 2 | 5 | The paper characterizes UGT isoform activities and interindividual variability in microsomes but does not report specific gene variants or genotypes affecting PK/PD parameters. |
| PGx | Watanabe_2003 | not_relevant | 2 | 5 | The study reports an association between GST genotypes and hepatotoxicity (ALT/AST elevation), which is an adverse drug reaction rather than a standard pharmacokinetic or pharmacodynamic parameter of the drug's intended effect. |
| PGx | Yamamoto_2002 | not_relevant | 0 | 0 | The paper describes the formation of a toxic metabolite and its cytotoxicity in cell lines but does not report a pharmacogenomic effect (gene variant) on a PK or PD parameter. |
| PGx | Yamazaki_2000 | not_relevant | 0 | 0 | The paper reports in vitro CYP inhibition by troglitazone but does not investigate the effect of gene variants or genotypes on PK/PD parameters. |
| PGx | Yokoyama_2018 | not_relevant | 0 | 0 | The paper evaluates HepaRG cells as a toxicity model and measures general enzyme activities and cytotoxicity, but does not report pharmacogenomic effects (gene variants) on troglitazone PK/PD parameters. |
| PGx | Yoshigae_2000 | not_relevant | 0 | 0 | The text is metadata from a document processing tool (GROBID) and contains no scientific content regarding troglitazone or pharmacogenomics. |
| popPK | Young_1998 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| PD | Young_1998_2 | not_relevant | 3 | 2 | The paper reports binding affinity (IC50) for troglitazone at PPARgamma, which is a pharmacological binding parameter, but does not report a pharmacodynamic exposure-response or dose-response relationship (e.g., effect vs. concentration curve, Emax, or PK/PD fit) for the drug's therapeutic effect. |
| PGx | Yueh_2005 | not_relevant | 0 | 0 | The paper describes a cell-based assay for CYP3A4 induction/inhibition and does not report pharmacogenomic effects of gene variants on troglitazone PK/PD parameters. |
| popPK | Zhang_1997 | irrelevant | 0 | 0 | The study focuses on glucose/insulin minimal model parameters (Si, Ki, etc.) rather than the pharmacokinetic disposition parameters (CL, V, ka) of troglitazone itself. |
| popPK | Zheng_2007 | irrelevant | 0 | 0 | The study focuses on carotid intima-media thickness and antihypertensive therapy, not the pharmacokinetic parameters of troglitazone. |
| PD | Zhou_2016 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetics and hepatic metabolism comparisons between rat strains, with no pharmacodynamic or exposure-response analysis reported. |
| PD | de_2021 | not_relevant | 0 | 0 | The paper focuses on structure-based drug design and crystallography of new PPARγ ligands (tetrazoles), reporting binding affinities (IC50) for these new compounds, but does not report any pharmacodynamic or exposure-response analysis for troglitazone. |
| popPK | de_2024 | irrelevant | 2 | 0 | The paper is a PBK modeling study for cholestasis risk where troglitazone is one of 18 drugs, and specific quantitative PK parameters (CL, V, etc.) for troglitazone are not reported in the provided text, with data referenced in external files or supplementary tables. |
| PGx | van_2013 | not_relevant | 0 | 0 | The study investigates the effect of OATP1B1 genotype on the pharmacokinetics of rosuvastatin, not troglitazone. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_troglitazone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
