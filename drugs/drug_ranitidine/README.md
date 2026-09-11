# ranitidine

- **generic name:** ranitidine
- **ATC codes:** `A02BA02`, `A02BA07`
- **DrugBank:** [DB00863](https://go.drugbank.com/drugs/DB00863)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Ranitidine is a commonly used drug, classified as a histamine H2-receptor antagonist, and belongs to the same drug class as [cimetidine] and [famotidine]. This drug helps to prevent and treat gastric-acid associated conditions, including ulcers, because of its ability to decrease gastric acid secretion.[A176759,L10818] Ranitidine is often referred to as Zantac, and is available in various forms, including tablet, injection, and effervescent tablet preparations.[L10818,F4253]

The prevalence of GERD is thought to be 10-20% in western countries.[A176843] Ranitidine has proven to be an effective treatment for relieving uncomfortable symptoms of gastric acid associated conditions and is therefore widely used in GERD and other gastric-acid related conditions.[A176849,L10818]

**Indication.** This drug is used alone or with concomitant antacids for the following conditions: short-term treatment of active duodenal ulcer, treating gastric acid hypersecretion due to Zollinger-Ellison syndrome, systemic mastocytosis, and other conditions that may pathologically raise gastric acid levels. It also used in the short term treatment of active benign gastric ulcers and maintenance therapy of gastric ulcers at a reduced dose. In addition to the above, ranitidine can be used for the treatment of GERD symptoms, treatment of erosive esophagitis (endoscopically diagnosed) and the maintenance of gastric or duodenal ulcer healing.[L10818,L10821]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 20:55 | 12:52 | 0/1/0 | 0/0/0 | 0/0/0 | 80,741/4,527 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 2/5 | 7/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Hawwa_2013](drugs/drug_ranitidine/Ranitidine_Hawwa2013_reference.md) | Hawwa AF et al., Prophylactic ranitidine treatment in cr…, British journal of clinical… (2013) | [10.1111/j.1365-2125.2012.04473.x](https://doi.org/10.1111/j.1365-2125.2012.04473.x) |

## Coverage

- **PubMed hits:** 140 matched, 60 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_19 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hawwa_2013.pdf` | Hawwa AF et al., Prophylactic ranitidine treatment in cr…, British journal of clinical… (2013) | popPK | 10 | [10.1111/j.1365-2125.2012.04473.x](https://doi.org/10.1111/j.1365-2125.2012.04473.x) | [23016949](https://pubmed.ncbi.nlm.nih.gov/23016949) | The paper is a population pharmacokinetic study of ranitidine that explicitly reports numeric values for clearance, volume of distribution, absorption rate, and bioavailability in the text. |
| `Koch_1997.pdf` | Koch KM et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (1997) | popPK | 9 | [10.1007/s002280050279](https://doi.org/10.1007/s002280050279) | [9218931](https://pubmed.ncbi.nlm.nih.gov/9218931) | The study is a PK/PD investigation of ranitidine in renal impairment using a two-compartment model, but specific numeric parameter values (CL, V, ka) are not explicitly listed in the provided abstract text. |
| `Schaiquevich_2002.pdf` | Schaiquevich P et al., Comparison of two compartmental models…, Pharmacological research (2002) | popPK | 9 | [10.1006/phrs.2002.0954](https://doi.org/10.1006/phrs.2002.0954) | [12123628](https://pubmed.ncbi.nlm.nih.gov/12123628) | The paper describes a compartmental PK study for ranitidine, but the specific numeric parameter values are not present in the provided evidence. |
| `Castañeda-Hernández_1996.pdf` | Castañeda-Hernández G et al., Pharmacokinetics of oral ranitidine in…, Archives of medical research (1996) | popPK | 8 | not captured | [8854394](https://pubmed.ncbi.nlm.nih.gov/8854394) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, Tmax, t1/2, AUC) for ranitidine in humans, with all numeric values explicitly present in the text. |
| `Dolton_2012.pdf` | Dolton MJ et al., Multicenter study of posaconazole thera…, Antimicrobial agents and ch… (2012) | pd | 5 | [10.1128/AAC.00802-12](https://doi.org/10.1128/AAC.00802-12) | [22890761](https://www.ncbi.nlm.nih.gov/pubmed/22890761) | metadata signals extractable PD data (exposure-response) |
| `Mathôt_1999.pdf` | Mathôt RA et al., Pharmacodynamic modeling of the acid in…, Clinical pharmacology and t… (1999) | pd | 5 | [10.1053/cp.1999.v66.99988](https://doi.org/10.1053/cp.1999.v66.99988) | [10460068](https://www.ncbi.nlm.nih.gov/pubmed/10460068) | metadata signals extractable PD data (Pharmacodynamicmodel) |
| `Mishra_1994.pdf` | Mishra Y et al., In-vitro interaction between H2 antagon…, The Journal of pharmacy and… (1994) | pd | 4 | [10.1111/j.2042-7158.1994.tb03779.x](https://doi.org/10.1111/j.2042-7158.1994.tb03779.x) | [7913133](https://www.ncbi.nlm.nih.gov/pubmed/7913133) | metadata signals extractable PD data (EC50) |
| `Schepp_1996.pdf` | Schepp W et al., Oxyntomodulin: a cAMP-dependent stimulu…, Digestion (1996) | pd | 4 | [10.1159/000201367](https://doi.org/10.1159/000201367) | [8913701](https://www.ncbi.nlm.nih.gov/pubmed/8913701) | metadata signals extractable PD data (EC50) |
| `Shimokawa_1996.pdf` | Shimokawa M et al., Neurotoxic convulsions induced by hista…, Toxicology and applied phar… (1996) | pd | 4 | [10.1006/taap.1996.0038](https://doi.org/10.1006/taap.1996.0038) | [8619239](https://www.ncbi.nlm.nih.gov/pubmed/8619239) | metadata signals extractable PD data (EC50) |
| `Soto_2018.pdf` | Soto J et al., Rats can predict aversiveness of Active…, European journal of pharmac… (2018) | pd | 4 | [10.1016/j.ejpb.2018.09.027](https://doi.org/10.1016/j.ejpb.2018.09.027) | [30267837](https://www.ncbi.nlm.nih.gov/pubmed/30267837) | metadata signals extractable PD data (IC50) |
| `Akazawa_2018.pdf` | Akazawa T et al., Application of Intestinal Epithelial Ce…, Drug metabolism and disposi… (2018) | pgx | 7 | [10.1124/dmd.118.083246](https://doi.org/10.1124/dmd.118.083246) | [30135242](https://www.ncbi.nlm.nih.gov/pubmed/30135242) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Johansson_2014.pdf` | Johansson S et al., Pharmacokinetic evaluations of the co-a…, Clinical pharmacokinetics (2014) | pgx | 7 | [10.1007/s40262-014-0161-2](https://doi.org/10.1007/s40262-014-0161-2) | [25117183](https://www.ncbi.nlm.nih.gov/pubmed/25117183) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kakuda_2011.pdf` | Kakuda TN et al., Pharmacokinetic interactions between et…, Clinical pharmacokinetics (2011) | pgx | 7 | [10.2165/11534740-000000000-00000](https://doi.org/10.2165/11534740-000000000-00000) | [21142266](https://www.ncbi.nlm.nih.gov/pubmed/21142266) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Labbé_1999.pdf` | Labbé L et al., Clinical pharmacokinetics of mexiletine, Clinical pharmacokinetics (1999) | pgx | 7 | [10.2165/00003088-199937050-00002](https://doi.org/10.2165/00003088-199937050-00002) | [10589372](https://www.ncbi.nlm.nih.gov/pubmed/10589372) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Lemahieu_2005.pdf` | Lemahieu WP et al., Impact of gastric acid suppressants on…, Kidney international (2005) | pgx | 7 | [10.1111/j.1523-1755.2005.00182.x](https://doi.org/10.1111/j.1523-1755.2005.00182.x) | [15698457](https://www.ncbi.nlm.nih.gov/pubmed/15698457) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Martínez_1999.pdf` | Martínez C et al., Comparative in vitro and in vivo inhibi…, Clinical pharmacology and t… (1999) | pgx | 7 | [10.1016/S0009-9236(99)70129-3](https://doi.org/10.1016/S0009-9236(99)70129-3) | [10223772](https://www.ncbi.nlm.nih.gov/pubmed/10223772) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Michalets_2000.pdf` | Michalets EL et al., Drug interactions with cisapride: clini…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039010-00004](https://doi.org/10.2165/00003088-200039010-00004) | [10926350](https://www.ncbi.nlm.nih.gov/pubmed/10926350) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ohno_2007.pdf` | Ohno Y et al., General framework for the quantitative…, Clinical pharmacokinetics (2007) | pgx | 7 | [10.2165/00003088-200746080-00005](https://doi.org/10.2165/00003088-200746080-00005) | [17655375](https://www.ncbi.nlm.nih.gov/pubmed/17655375) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Parri_2013.pdf` | Parri MS et al., Pantoprazole significantly interferes w…, International journal of ca… (2013) | pgx | 5 | [10.1016/j.ijcard.2012.05.080](https://doi.org/10.1016/j.ijcard.2012.05.080) | [22727972](https://www.ncbi.nlm.nih.gov/pubmed/22727972) | metadata signals extractable PGX data (CYP2C19*2) |

<sub>queue written 2026-09-10T20:52:28.388662+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abebe_2020 | irrelevant | 2 | 0 | Ranitidine is used as a probe inhibitor/comparator to study trospium chloride, and no quantitative PK parameters (CL, V, ka) for ranitidine itself are reported in the evidence. |
| popPK | Advenier_1987 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo pharmacological investigation of airway relaxation, not a pharmacokinetic study, and ranitidine is only a comparator agent. |
| PD | Advenier_1987 | not_relevant | 0 | 0 | The paper reports that ranitidine was completely inactive in the tested preparations, providing no numeric PD parameters or concentration-effect relationship for the drug. |
| PGx | Akazawa_2018 | not_relevant | 0 | 0 | The paper uses ranitidine only as a non-substrate probe to validate a cell model for intestinal absorption and does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Arnold_2019 | not_relevant | 0 | 0 | The study investigates drug transport in porcine intestine using an Ussing chamber model and does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Blouin_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefetamet pivoxil, with ranitidine serving only as a co-administered agent to assess drug-drug interactions, rather than being the subject drug. |
| PGx | Bouatou_2014 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on voriconazole PK, not ranitidine. |
| popPK | Buck_2003 | irrelevant | 1 | 0 | The paper is a review that mentions ranitidine only as an example of a drug with altered disposition during ECMO, without providing any original quantitative pharmacokinetic parameter values. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of posaconazole, with ranitidine mentioned only as a co-administered drug for interaction assessment. |
| PGx | Chung_2000 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics and isozyme contributions to ranitidine metabolism but does not report pharmacogenomic effects (genotype-phenotype associations) on PK or PD parameters in humans. |
| popPK | Dolton_2012 | irrelevant | 0 | 0 | The paper focuses on posaconazole therapeutic drug monitoring and does not report pharmacokinetic parameters for ranitidine. |
| PD | Dolton_2012 | not_relevant | 0 | 0 | The paper focuses on posaconazole, not ranitidine, and does not report any pharmacodynamic or exposure-response data for ranitidine. |
| PGx | Furtado_2016 | not_relevant | 2 | 5 | The study reports a drug-drug interaction (clopidogrel with ranitidine/omeprazole) and a subgroup analysis based on CYP2C19 genotype, but it does not report a pharmacogenomic effect on the PK or PD parameters of ranitidine itself. |
| PGx | Geus_2000 | not_relevant | 0 | 0 | The paper discusses clinical efficacy and drug interactions of acid-inhibiting drugs but does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Gupta_1996 | irrelevant | 1 | 0 | The study focuses on ethanol pharmacodynamics and BAC, using ranitidine only as a context for BAC elevation rather than reporting ranitidine's own pharmacokinetic parameters. |
| PGx | Harvey_2016 | not_relevant | 0 | 0 | The study investigates the effect of PPIs on CYP2C19 activity and clopidogrel efficacy, not the effect of a gene variant on ranitidine PK/PD. |
| popPK | Ji_2021 | irrelevant | 0 | 0 | Ranitidine is used only as a co-administered agent to assess drug-drug interactions with pemigatinib, and no pharmacokinetic parameters for ranitidine itself are reported. |
| PGx | Johansson_2014 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions between vandetanib and ranitidine, not the effect of a gene variant on ranitidine pharmacokinetics. |
| PGx | Kakuda_2011 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving etravirine and ranitidine, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Koch_1997 | relevant | 9 | 2 | The study is a PK/PD investigation of ranitidine in renal impairment using a two-compartment model, but specific numeric parameter values (CL, V, ka) are not explicitly listed in the provided abstract text. |
| PGx | Labbé_1999 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of mexiletine, not ranitidine, and only mentions ranitidine as a drug that does not modify mexiletine's disposition. |
| PGx | Lemahieu_2005 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (gastric acid suppressants affecting tacrolimus/CYP3A4), not the impact of a gene variant on ranitidine's PK/PD. |
| PGx | Lennard_1986 | not_relevant | 0 | 0 | The paper studies the metabolism of metoprolol and the inhibitory effects of ranitidine on it, but does not report a pharmacogenomic effect on the PK/PD of ranitidine itself. |
| popPK | Leucuţa_2004 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of metoclopramide, with ranitidine serving only as a co-administered agent to test for interaction, and no PK parameters for ranitidine are reported. |
| PGx | Mai_2022 | not_relevant | 0 | 0 | The study investigates sex-specific effects of excipients on ranitidine bioavailability in rats, not the effect of a gene variant or genotype. |
| PGx | Martínez_1999 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP inhibition) and does not report any pharmacogenomic effects (gene variants) on ranitidine's PK or PD parameters. |
| popPK | Mathôt_1999 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamic modeling of acid inhibition and tolerance, not pharmacokinetic disposition parameters. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions with cisapride and does not report pharmacogenomic effects on ranitidine. |
| popPK | Mishra_1994 | irrelevant | 0 | 0 | The paper describes an in-vitro interaction study, which does not report quantitative pharmacokinetic disposition parameters for ranitidine. |
| PD | Mishra_1994 | not_relevant | 0 | 0 | The paper describes an in-vitro interaction study between H2 antagonists and vecuronium, which does not constitute a pharmacodynamic exposure-response or dose-response analysis for ranitidine in a biological system with extractable PD parameters. |
| PGx | Monsarrat_1997 | not_relevant | 0 | 0 | The paper focuses on the metabolism of taxoids (paclitaxel/docetaxel) and only mentions ranitidine as a non-inhibitor in a drug interaction context, without reporting any pharmacogenomic effects on ranitidine's PK/PD. |
| PGx | Moody_2013 | not_relevant | 0 | 0 | The paper reports in vitro CYP inhibition by ranitidine (and other drugs) but does not report any pharmacogenomic effect (gene variant/genotype) on ranitidine's PK or PD parameters. |
| PGx | Ohno_2007 | not_relevant | 0 | 0 | The paper describes a general framework for predicting CYP3A4 drug interactions and does not report any pharmacogenomic effects (gene variants) on the PK or PD of ranitidine. |
| PGx | Parri_2013 | not_relevant | 0 | 0 | The paper investigates the interaction between pantoprazole and clopidogrel, not the pharmacokinetics or pharmacodynamics of ranitidine. |
| PGx | Reddy_2018 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling for FMO substrates and does not report specific pharmacogenomic effects (gene variants) on ranitidine PK parameters. |
| PGx | Royer_1996 | not_relevant | 0 | 0 | The paper investigates the metabolism of docetaxel and paclitaxel, and while it mentions ranitidine, it only states that ranitidine had no effect on taxoid metabolism; it does not report a pharmacogenomic effect on ranitidine's PK/PD. |
| PGx | Sajib_2018 | not_relevant | 0 | 0 | The paper is an in silico study focusing on metformin pharmacokinetics and drug-drug interactions via SLC22A2, not a pharmacogenomic effect on ranitidine's PK/PD parameters. |
| popPK | Schaiquevich_2002 | relevant | 9 | 0 | The paper describes a compartmental PK study for ranitidine, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Schepp_1996 | irrelevant | 0 | 0 | The paper concerns oxyntomodulin and parietal cell function in rats, with no mention of ranitidine pharmacokinetics. |
| PD | Schepp_1996 | not_relevant | 0 | 0 | The paper focuses on the mechanism of oxyntomodulin in rat parietal cells and does not report any pharmacodynamic or exposure-response data for ranitidine. |
| PGx | Schöller-Gyüre_2008 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (ranitidine/omeprazole vs. etravirine) and does not report pharmacogenomic effects on ranitidine's PK/PD parameters. |
| popPK | Shimokawa_1996 | irrelevant | 0 | 0 | The paper title indicates a study on neurotoxicity in mice, not a pharmacokinetic study reporting quantitative disposition parameters for ranitidine. |
| PD | Shimokawa_1996 | not_relevant | 0 | 0 | The paper describes neurotoxic convulsions in mice but does not report a pharmacodynamic exposure-response or dose-response relationship for ranitidine with numeric PD parameters. |
| popPK | Soto_2018 | irrelevant | 0 | 0 | The paper title indicates a behavioral study on aversiveness in rats, with no evidence of pharmacokinetic parameter reporting for ranitidine. |
| PD | Soto_2018 | not_relevant | 0 | 0 | The paper focuses on behavioral aversiveness in rats and does not report pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for ranitidine. |
| popPK | Tadić_2008 | irrelevant | 0 | 0 | The study investigates the pharmacological activities of hawthorn extract, using ranitidine only as a reference drug for gastroprotection, and contains no pharmacokinetic parameters for ranitidine. |
| PD | Tadić_2008 | not_relevant | 0 | 0 | The paper studies hawthorn berries extract; ranitidine is only mentioned as a reference drug for gastroprotection, and no PD or exposure-response relationship for ranitidine is reported. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions affecting theophylline clearance and explicitly states that ranitidine was not found to influence theophylline disposition; it does not report pharmacogenomic effects on ranitidine. |
| PGx | Vernaz_2016 | not_relevant | 0 | 0 | The paper analyzes prescribing practices and costs for clopidogrel and esomeprazole, not the pharmacokinetics or pharmacodynamics of ranitidine. |
| PGx | Xiao_2026 | not_relevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse event reports (SCARs) and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Xu_2017 | not_relevant | 0 | 0 | The paper reports genetic associations with FMO3 protein abundance in liver microsomes, but does not report pharmacokinetic or pharmacodynamic parameters for ranitidine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_ranitidine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
