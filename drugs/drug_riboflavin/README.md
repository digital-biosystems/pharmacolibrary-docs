<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;riboflavin&quot;}]"></div>

# riboflavin

- **generic name:** riboflavin
- **ATC codes:** `A11HA04`, `S01XA26`
- **DrugBank:** [DB00140](https://go.drugbank.com/drugs/DB00140)
- **groups:** approved, investigational, nutraceutical, vet_approved

## About

**Description.** Nutritional factor found in milk, eggs, malted barley, liver, kidney, heart, and leafy vegetables. The richest natural source is yeast. It occurs in the free form only in the retina of the eye, in whey, and in urine; its principal forms in tissues and cells are as flavin mononucleotide and flavin-adenine dinucleotide.

**Indication.** For the treatment of ariboflavinosis (vitamin B2 deficiency).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 11:05 | 20:57 | 0/0/0 | 0/0/0 | 0/0/0 | 128,482/5,561 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 6/12 | 15/3 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=riboflavin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Vitamin B2 is readily absorbed from the upper gastrointestinal tract.…”</sub> | prose |
| metabolism | brain | `MAOA` cofactor | DrugBank actor |
| metabolism | liver | `MAOA` cofactor | DrugBank actor |
| metabolism | small intestine | `MAOA` cofactor | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: BLVRB (product), MPO (modulator), MTHFR (cofactor), RFK (target).</sub>

## Coverage

- **PubMed hits:** 195 matched, 61 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zempleni_1996.pdf` | Zempleni J et al., Pharmacokinetics of orally and intraven…, The American journal of cli… (1996) | popPK | 10 | [10.1093/ajcn/63.1.54](https://doi.org/10.1093/ajcn/63.1.54) | [8604671](https://pubmed.ncbi.nlm.nih.gov/8604671) | The study reports PK parameters for riboflavin, but only specific values (max absorption 27 mg, half-life of absorption 1.1 h) are present in the text, while standard parameters like CL, V, and Q are described qualitatively or implied to be in the full data/tables not provided. |
| `Zempleni_1996_2.pdf` | Zempleni J et al., The metabolism of riboflavin in female…, International journal for v… (1996) | popPK | 9 | not captured | [8899458](https://pubmed.ncbi.nlm.nih.gov/8899458) | The study reports specific pharmacokinetic parameters for riboflavin, including disposition rate constants (k alpha, k beta) and plasma concentration data, derived from a two-compartment model. |
| `Ravishankara_2002.pdf` | Ravishankara MN et al., Evaluation of antioxidant properties of…, Phytomedicine : internation… (2002) | pd | 4 | [10.1078/0944-7113-00104](https://doi.org/10.1078/0944-7113-00104) | [11995949](https://www.ncbi.nlm.nih.gov/pubmed/11995949) | metadata signals extractable PD data (EC50) |
| `Rodionova_2019.pdf` | Rodionova IA et al., A Riboflavin Transporter in Bdellovibri…, Journal of molecular microb… (2019) | pd | 4 | [10.1159/000501354](https://doi.org/10.1159/000501354) | [31509826](https://www.ncbi.nlm.nih.gov/pubmed/31509826) | metadata signals extractable PD data (EC50) |
| `Van_2024.pdf` | Van Hove JLK et al., ACAD9 treatment with bezafibrate and ni…, Mitochondrion (2024) | pd | 4 | [10.1016/j.mito.2024.101905](https://doi.org/10.1016/j.mito.2024.101905) | [38797357](https://www.ncbi.nlm.nih.gov/pubmed/38797357) | metadata signals extractable PD data (EC50) |
| `Otero_2016.pdf` | Otero JA et al., Effect of bovine ABCG2 polymorphism Y58…, Animal : an international j… (2016) | pgx | 5 | [10.1017/S1751731115002141](https://doi.org/10.1017/S1751731115002141) | [26510964](https://www.ncbi.nlm.nih.gov/pubmed/26510964) | metadata signals extractable PGX data (ABCG2) |

<sub>queue written 2026-09-16T11:00:42.639175+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahn_2026 | irrelevant | 0 | 0 | The paper is a clinical study on intense pulsed light therapy for meibomian gland dysfunction and does not involve riboflavin or pharmacokinetic parameters. |
| PGx | Arpa_2013 | not_relevant | 0 | 0 | The paper reports clinical outcomes of triple therapy in Friedreich's ataxia but does not investigate how genetic variants affect the pharmacokinetics or pharmacodynamics of riboflavin. |
| PGx | Bhinder_2022 | not_relevant | 0 | 0 | The paper investigates the genetic architecture of seed meal quality traits in Brassica napus, not the pharmacogenomics of riboflavin in humans or animals. |
| PGx | Bjørklund_2022 | not_relevant | 0 | 0 | The paper discusses B vitamins (folate, B12, B6) and homocysteine metabolism, not riboflavin. |
| PGx | Chen_2024 | not_relevant | 0 | 0 | The paper investigates biological aging and mentions riboflavin as a biomarker associated with aging, but does not report pharmacogenomic effects on riboflavin pharmacokinetics or pharmacodynamics. |
| PGx | Chuang_2006 | not_relevant | 2 | 5 | The paper reports a pharmacodynamic effect (homocysteine levels) modified by MTHFR genotype, but the primary focus is on folic acid and the interaction, with riboflavin showing no significant independent effect or clear pharmacogenomic PK/PD profile for riboflavin itself. |
| PGx | Cornelius_2012 | not_relevant | 2 | 5 | The paper investigates the molecular mechanism of riboflavin's chaperone effect on ETF-QO protein folding and activity, rather than reporting a pharmacokinetic or pharmacodynamic parameter of riboflavin itself (e.g., plasma concentration, clearance, or receptor binding) modified by genotype. |
| PGx | Desuzinges-Mandon_2010 | not_relevant | 0 | 0 | The paper focuses on the mechanism of heme transport by ABCG2 and explicitly states that riboflavin does not bind to the specific domain studied, without reporting any pharmacogenomic effects on riboflavin PK/PD. |
| PGx | Fryar-Williams_2023 | not_relevant | 2 | 5 | The paper reports an association between MTHFR genotype and endogenous riboflavin excretion levels as a diagnostic biomarker, not the pharmacokinetics or pharmacodynamics of riboflavin administered as a drug. |
| PGx | Gardner_1979 | not_relevant | 0 | 0 | The paper describes yeast genetics and riboflavin biosynthesis pathways, not human pharmacogenomics or drug PK/PD parameters. |
| popPK | Giancaspero_2009 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of riboflavin uptake and metabolism in plant mitochondria, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| PD | Giancaspero_2009 | not_relevant | 0 | 0 | The paper focuses on the enzymatic kinetics (Michaelis-Menten) of riboflavin metabolism enzymes in tobacco mitochondria, not on pharmacodynamic exposure-response or dose-response relationships for riboflavin as a drug. |
| popPK | Gong_2025 | irrelevant | 0 | 0 | The study focuses on the bio-reduction of Technetium-99 by bacteria, where riboflavin is used only as an electron transport mediator, not as the subject drug for pharmacokinetic analysis. |
| PGx | Gordon_2025 | not_relevant | 0 | 0 | The paper investigates the association between riboflavin status and cognitive function, not the pharmacokinetic or pharmacodynamic parameters of riboflavin as a drug. |
| popPK | Klinov_1995 | irrelevant | 0 | 0 | The paper describes in-vitro enzymatic inhibition of glycogen phosphorylase by riboflavin derivatives and contains no pharmacokinetic parameters. |
| PGx | Kong_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of isorhamnetin on hyperuricemia and mentions riboflavin metabolism only as a secondary metabolomic finding, without reporting any pharmacogenomic effects on riboflavin PK/PD. |
| PGx | Kubo_2018 | not_relevant | 0 | 0 | The paper is a review of transport mechanisms at the blood-retinal barrier and does not report pharmacogenomic effects of gene variants on riboflavin PK/PD parameters. |
| PGx | Lazzeri_2016 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics of ranibizumab, not riboflavin. |
| PGx | Lee_2018 | not_relevant | 0 | 0 | The paper investigates the effects of riboflavin application methods on corneal stem cells in rabbits and does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The study is a toxicological/metabolomic assessment of petroleum components in earthworms, not a pharmacokinetic study of riboflavin. |
| PD | Liu_2025 | not_relevant | 0 | 0 | The paper studies the toxicity of petroleum components on earthworms and mentions riboflavin metabolism only as a pathway affected by exposure, not as a drug with a dose-response relationship. |
| PGx | Lu_2022 | not_relevant | 0 | 0 | The study examines the association between riboflavin intake, MTRR genotypes, and gastric cancer risk, not the pharmacokinetic or pharmacodynamic parameters of riboflavin. |
| popPK | Mak_2021 | irrelevant | 0 | 0 | The paper is a review on the chemistry of MAIT cell ligands (specifically 5-OP-RU, a riboflavin biosynthesis intermediate) and does not report pharmacokinetic parameters for riboflavin. |
| PD | Mak_2021 | not_relevant | 3 | 2 | The text is a review of chemical modulators of MAIT cells that mentions EC50 values for the antigen 5-OP-RU, but it does not report a pharmacokinetic or exposure-response relationship for riboflavin itself. |
| PGx | McNulty_2008 | not_relevant | 0 | 0 | The paper discusses the role of riboflavin as a cofactor for MTHFR and its interaction with the MTHFR C677T genotype on homocysteine levels, but it does not report pharmacokinetic or pharmacodynamic parameters of riboflavin itself (e.g., riboflavin clearance, bioavailability, or specific PD response to riboflavin dosing). |
| PGx | Medina_2019 | not_relevant | 0 | 0 | The paper studies the effect of a CFH polymorphism on the response to anti-VEGF therapy for AMD, not the pharmacokinetics or pharmacodynamics of riboflavin. |
| PGx | Millán-García_2024 | not_relevant | 2 | 8 | The study investigates the PK of lumichrome (a riboflavin derivative), not riboflavin itself, and uses knockout mice rather than human genetic variants. |
| PGx | Miranda-Lorenzo_2014 | not_relevant | 0 | 0 | The paper describes riboflavin accumulation as a biomarker for cancer stem cells, not a pharmacogenomic effect on riboflavin pharmacokinetics or pharmacodynamics. |
| popPK | Nguyen_2022 | irrelevant | 0 | 0 | The paper is a dietary assessment validation study that measures nutrient intake, not a pharmacokinetic study reporting disposition parameters for riboflavin. |
| PGx | Otero_2016 | not_relevant | 4 | 5 | The study reports no significant in vivo difference in riboflavin levels between genotypes, despite in vitro transport differences. |
| PGx | Parmeggiani_2019 | not_relevant | 0 | 0 | The paper investigates the effect of MTHFR polymorphism on the efficacy of verteporfin (PDT), not riboflavin. |
| PGx | Quiles_2026 | not_relevant | 0 | 0 | The paper investigates anaerobic microbial catabolism of riboflavin by gut bacteria, not the effect of human gene variants on riboflavin pharmacokinetics or pharmacodynamics. |
| popPK | Ravishankara_2002 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PD | Ravishankara_2002 | not_relevant | 0 | 0 | The paper evaluates the antioxidant properties of a plant extract (Hemidesmus indicus) and does not report any pharmacodynamic or exposure-response data for riboflavin. |
| popPK | Riedl_2022 | irrelevant | 0 | 0 | The paper is an ophthalmology study analyzing fluid volumes in the eye for anti-VEGF treatment, unrelated to riboflavin pharmacokinetics. |
| PGx | Riselli_2025 | not_relevant | 2 | 5 | The paper reports that ABCG2 variants affect the PK of herbicide derivatives (4HC, BCDBA) and notes riboflavin as a substrate, but it does not report a specific pharmacogenomic effect size for riboflavin PK parameters in humans. |
| popPK | Ritz_2001 | irrelevant | 0 | 0 | The paper describes the enzymatic mechanism of riboflavin biosynthesis in E. coli and does not report any pharmacokinetic parameters for riboflavin. |
| PD | Ritz_2001 | not_relevant | 0 | 0 | The paper describes the enzymatic mechanism of GTP cyclohydrolase II in riboflavin biosynthesis, not a pharmacodynamic exposure-response relationship for riboflavin as a drug. |
| popPK | Rodionova_2019 | irrelevant | 0 | 0 | no_text gate: only 54 chars of text extracted (&lt; 400) |
| PD | Rodionova_2019 | not_relevant | 0 | 0 | The paper describes a riboflavin transporter in a bacterium, not a pharmacodynamic or exposure-response relationship for the drug riboflavin. |
| popPK | Rubio-Aurioles_2012 | irrelevant | 0 | 0 | The paper is a clinical trial regarding erectile dysfunction treatments (tadalafil and sildenafil) and contains no data on riboflavin pharmacokinetics. |
| PGx | Sainz_2015 | not_relevant | 0 | 0 | The paper discusses the source of cellular autofluorescence (riboflavin vs lipofuscin) in cancer stem cells and does not report pharmacogenomic effects on riboflavin PK/PD parameters. |
| PGx | Shimura_2019 | not_relevant | 0 | 0 | The paper reports a case of antiepileptic drug-induced psychosis associated with MTHFR C677T and vitamin deficiencies, but does not report a pharmacogenomic effect on the pharmacokinetic or pharmacodynamic parameters of riboflavin itself. |
| PGx | Sunebo_2026 | not_relevant | 0 | 0 | The paper describes a drug-induced metabolic disorder (MADD) and its treatment with riboflavin, but does not report pharmacogenomic effects on the PK or PD parameters of riboflavin itself. |
| PGx | Tazhibaev_1982 | not_relevant | 0 | 0 | The paper discusses nutritional deficiencies and mineral balance, not pharmacogenomic effects on riboflavin PK/PD. |
| PGx | Tu_2025 | not_relevant | 0 | 0 | The paper investigates viral protein effects on riboflavin metabolism pathways via circRNAs, not the effect of human gene variants on the pharmacokinetics or pharmacodynamics of riboflavin as a drug. |
| popPK | Upadhyay_2014 | irrelevant | 0 | 0 | The study is an in-vitro antioxidant assay where riboflavin is used as a reagent in the superoxide radical scavenging assay, not as the subject drug for pharmacokinetic analysis. |
| PD | Upadhyay_2014 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant assays (DPPH, LPO, superoxide) for a plant extract, not a pharmacodynamic or exposure-response relationship for the drug riboflavin. |
| popPK | Van_2024 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PD | Van_2024 | not_relevant | 0 | 0 | The paper focuses on ACAD9 treatment with bezafibrate and nicotinamide riboside, not riboflavin, and does not report PD parameters for riboflavin. |
| PGx | Verenich_2019 | not_relevant | 0 | 0 | The paper investigates the effect of oxidative stress metabolites (peroxynitrite and 4-HNE) on ABCG2 transporter activity, not the effect of a genetic variant on riboflavin pharmacokinetics or pharmacodynamics. |
| PGx | Vieira_2021 | not_relevant | 0 | 0 | The paper describes riboflavin accumulation as a biomarker for cancer stem cells, not a pharmacogenomic effect on riboflavin PK/PD parameters. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | The study is a nutritional epidemiology analysis of dietary intake and does not report any pharmacokinetic parameters for riboflavin. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | The paper investigates probiotics and hyperuricemia, mentioning riboflavin metabolism only as a secondary metabolic pathway modulated by gut microbiota, without reporting any pharmacogenomic effects on riboflavin PK/PD. |
| PGx | Watson-Fargie_2025 | not_relevant | 0 | 0 | The paper reports clinical response to riboflavin therapy in a case series but does not analyze specific gene variants' effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Weintraub_2025 | not_relevant | 0 | 0 | The paper focuses on yeast transcriptomics and metabolic engineering, not human pharmacogenomics or the PK/PD of riboflavin as a drug. |
| PGx | Weyandt_2022 | not_relevant | 0 | 0 | The paper focuses on the genomics of Wolbachia endosymbionts in nematodes and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of riboflavin. |
| PGx | Winter_1967 | not_relevant | 0 | 0 | The paper studies the biochemical lesion of renal riboflavinuria in avian models, which is a physiological/metabolic defect rather than a pharmacogenomic effect on the PK/PD of riboflavin as a therapeutic drug. |
| PGx | Wortmann_2020 | not_relevant | 0 | 0 | The paper describes a genetic disorder (TKFC deficiency) affecting endogenous riboflavin metabolism, not the pharmacokinetics or pharmacodynamics of riboflavin as an administered drug. |
| popPK | Xie_2025 | irrelevant | 0 | 0 | The study focuses on the efficacy of conbercept for diabetic macular edema and does not involve riboflavin or report any pharmacokinetic parameters. |
| PGx | Yee_2021 | not_relevant | 0 | 0 | The paper is a general review of the SLC22 transporter family and mentions riboflavin transport by SLC22A14, but it does not report specific pharmacogenomic effects of gene variants on riboflavin PK or PD parameters. |
| PGx | Yorns_2013 | not_relevant | 0 | 0 | The paper discusses the association between mitochondrial genetics and migraine pathophysiology and mentions riboflavin as a therapeutic agent, but it does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of riboflavin. |
| popPK | Zempleni_1996 | relevant | 10 | 4 | The study reports PK parameters for riboflavin, but only specific values (max absorption 27 mg, half-life of absorption 1.1 h) are present in the text, while standard parameters like CL, V, and Q are described qualitatively or implied to be in the full data/tables not provided. |
| PGx | Zhang_2023 | not_relevant | 0 | 0 | The paper reports a genetic association with a disease phenotype (hyperhomocysteinemia) and a metabolite level (FAD), but does not report a pharmacokinetic or pharmacodynamic parameter of riboflavin as a drug. |
| PGx | Zhou_2023 | not_relevant | 0 | 0 | The paper investigates the ABCG2 gene's role in milk fat synthesis in buffaloes, not the pharmacokinetics or pharmacodynamics of riboflavin in humans. |
| PGx | van_2007 | not_relevant | 2 | 5 | The paper describes the physiological role of the BCRP transporter in riboflavin secretion and excretion in mice, but does not report a pharmacogenomic effect of a specific human gene variant on a PK/PD parameter of riboflavin as a drug. |
| PGx | Ürey_2023 | not_relevant | 0 | 0 | The paper is a clinical case report on succinate dehydrogenase deficiency and does not report pharmacokinetic or pharmacodynamic parameters of riboflavin. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_riboflavin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
