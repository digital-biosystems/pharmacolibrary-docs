# mosapride

- **generic name:** mosapride
- **ATC codes:** `A03FA09`
- **DrugBank:** [DB11675](https://go.drugbank.com/drugs/DB11675)
- **groups:** investigational

## About

**Description.** Mosapride is under investigation for the treatment and prevention of Postoperative Ileus and Gastric Peroral Endoscopic Pyloromyotomy (G-POEM). Mosapride has been investigated for the treatment and diagnostic of Constipation, Type 2 Diabetes, Functional Dyspepsia, Functional Constipation, and Epigastric Pain Syndrome, among others.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 02:50 | 9:53 | 0/0/0 | 2/0/0 | 0/0/0 | 100,191/4,554 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 2/7 | 9/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kojima_2006](drugs/drug_mosapride/pd_Kojima_2006_intrinsic_R_IAS_reflex_index.md) | Kojima Y et al., Enhancement of the intrinsic defecation…, Journal of smooth muscle re… (2006) | [10.1540/jsmr.42.139](https://doi.org/10.1540/jsmr.42.139) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kojima_2006](drugs/drug_mosapride/pd_Kojima_2006_intrinsic_R_R_reflex_index.md) | Kojima Y et al., Enhancement of the intrinsic defecation…, Journal of smooth muscle re… (2006) | [10.1540/jsmr.42.139](https://doi.org/10.1540/jsmr.42.139) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Park_2019](drugs/drug_mosapride/pd_Park_2019_unknown.md) | Park YS et al., Gastroprokinetic agent, mosapride inhib…, The Korean journal of physi… (2019) | [10.4196/kjpp.2019.23.5.419](https://doi.org/10.4196/kjpp.2019.23.5.419) |

## Coverage

- **PubMed hits:** 38 matched, 35 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chae_2015.pdf` | Chae JW et al., Determination of influence of food inta…, Journal of veterinary pharm… (2015) | popPK | 10 | [10.1111/jvp.12228](https://doi.org/10.1111/jvp.12228) | [25955782](https://pubmed.ncbi.nlm.nih.gov/25955782) | The study is a population PK analysis of mosapride in beagle dogs, but the specific numeric parameter values are not present in the provided evidence text. |
| `Kim_2020.pdf` | Kim MS et al., Pharmacokinetic analysis of mosapride f…, Journal of veterinary pharm… (2020) | popPK | 9 | [10.1111/jvp.12867](https://doi.org/10.1111/jvp.12867) | [32304239](https://pubmed.ncbi.nlm.nih.gov/32304239) | The study reports quantitative PK parameters (ka, bioavailability) and a compartmental model for mosapride in dogs, but specific values for clearance, volume, and half-life are not explicitly listed in the provided text. |
| `Hammad_2018.pdf` | Hammad RW et al., Intranasal Surface-Modified Mosapride C…, AAPS PharmSciTech (2018) | popPK | 8 | [10.1208/s12249-018-1142-9](https://doi.org/10.1208/s12249-018-1142-9) | [30280358](https://pubmed.ncbi.nlm.nih.gov/30280358) | The study reports pharmacokinetic data for mosapride, but the evidence only provides relative bioavailability fold-increases (2.44-fold, 4.54-fold) and lacks specific quantitative disposition parameters like clearance, volume, or half-life. |
| `Huang_2011.pdf` | Huang J et al., Pharmacokinetics and bioequivalence stu…, Arzneimittel-Forschung (2011) | popPK | 6 | [10.1055/s-0031-1296184](https://doi.org/10.1055/s-0031-1296184) | [21528641](https://pubmed.ncbi.nlm.nih.gov/21528641) | The study reports quantitative non-compartmental PK parameters (Cmax, AUC, t1/2) for mosapride, but lacks compartmental model parameters like clearance (CL) or volume (V). |
| `Mine_1997.pdf` | Mine Y et al., Comparison of effect of mosapride citra…, The Journal of pharmacology… (1997) | pd | 4 | not captured | [9399969](https://www.ncbi.nlm.nih.gov/pubmed/9399969) | metadata signals extractable PD data (IC50) |
| `Sung_2013.pdf` | Sung KW et al., Effect of mosapride on Kv4.3 potassium…, Naunyn-Schmiedeberg's archi… (2013) | pd | 4 | [10.1007/s00210-013-0896-6](https://doi.org/10.1007/s00210-013-0896-6) | [23793103](https://www.ncbi.nlm.nih.gov/pubmed/23793103) | metadata signals extractable PD data (IC50) |
| `Tsubouchi_2018.pdf` | Tsubouchi T et al., The in vitro pharmacology and non-clini…, European journal of pharmac… (2018) | pd | 4 | [10.1016/j.ejphar.2018.02.037](https://doi.org/10.1016/j.ejphar.2018.02.037) | [29501863](https://www.ncbi.nlm.nih.gov/pubmed/29501863) | metadata signals extractable PD data (EC50) |
| `Mushiroda_2000.pdf` | Mushiroda T et al., The involvement of flavin-containing mo…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [10997945](https://www.ncbi.nlm.nih.gov/pubmed/10997945) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-11T02:48:50.229197+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beattie_2008 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of gastrointestinal activity and does not report pharmacokinetic parameters for mosapride. |
| PD | Beattie_2008 | not_relevant | 3 | 2 | The paper reports qualitative potency rankings and relative fold-differences for mosapride in preclinical models but does not provide specific numeric PD parameters (e.g., ED50, Emax) or concentration-effect curves for mosapride. |
| popPK | Carlsson_1997 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of proarrhythmic potential, not a pharmacokinetic study, and reports no disposition parameters for mosapride. |
| popPK | Chae_2015 | relevant | 10 | 0 | The study is a population PK analysis of mosapride in beagle dogs, but the specific numeric parameter values are not present in the provided evidence text. |
| PD | Chae_2015 | not_relevant | 0 | 0 | The paper focuses on the influence of food on the pharmacokinetics (PK) of mosapride using NLME, with no mention of pharmacodynamic (PD) endpoints or exposure-response modeling. |
| popPK | Gordji-Nejad_2026 | irrelevant | 0 | 0 | The paper investigates the cognitive effects of creatine supplementation during sleep deprivation and does not involve mosapride or report any pharmacokinetic parameters. |
| PD | Gordji-Nejad_2026 | not_relevant | 0 | 0 | The paper studies the cognitive effects of creatine, not mosapride, and does not report any pharmacodynamic or exposure-response relationship for mosapride. |
| popPK | Hammad_2018 | relevant | 8 | 2 | The study reports pharmacokinetic data for mosapride, but the evidence only provides relative bioavailability fold-increases (2.44-fold, 4.54-fold) and lacks specific quantitative disposition parameters like clearance, volume, or half-life. |
| PD | Hammad_2018 | not_relevant | 2 | 1 | The paper reports pharmacodynamic effects (gastric emptying rate) and PK parameters (bioavailability) for different formulations, but it does not provide a concentration-effect or dose-response relationship with numeric PD parameters (e.g., Emax, EC50) or a PK/PD model fit. |
| popPK | Hammad_2020 | irrelevant | 0 | 0 | The study focuses on in-vitro formulation optimization and in-vivo efficacy (motility) of mosapride micelles, without reporting quantitative pharmacokinetic parameters (CL, V, ka) for the drug. |
| popPK | Jing_2025 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study on azoles and myopathy, and does not report pharmacokinetic parameters for mosapride. |
| PD | Jing_2025 | not_relevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse event reports (myopathy) for azoles in the FAERS database and does not contain any pharmacokinetic or pharmacodynamic data, nor does it mention mosapride. |
| PGx | Katoh_2003 | not_relevant | 0 | 0 | The study reports a drug-drug interaction (erythromycin inhibiting mosapride metabolism) but does not investigate gene variants or genotypes. |
| popPK | Kawachi_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of acotiamide, with mosapride serving only as a comparator agent without any reported pharmacokinetic parameters. |
| PD | Kawachi_2011 | not_relevant | 1 | 0 | The paper focuses on acotiamide; mosapride is only mentioned as a negative control with no numeric PD parameters or dose-response analysis provided for it. |
| PGx | Kim_2015 | not_relevant | 0 | 0 | The paper investigates CYP enzyme induction by mosapride in human hepatocytes but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Kojima_2006 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of mosapride's effect on defecation reflexes in guinea pigs and does not report any pharmacokinetic parameters. |
| PGx | Mackowiak_2019 | not_relevant | 0 | 0 | The paper identifies mosapride as a CAR agonist affecting glucose metabolism but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Mine_1997 | irrelevant | 0 | 0 | The paper focuses on gastrointestinal motility effects (pharmacodynamics) rather than pharmacokinetic parameters, and no quantitative PK data for mosapride is present in the evidence. |
| PGx | Mushiroda_2000 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (ketoconazole) and enzyme identification, not the effect of genetic variants on pharmacokinetics. |
| popPK | Park_2019 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology (patch clamp) investigation of mosapride's mechanism of action on 5-HT3 receptors, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Potet_2001 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of HERG channel block, not a pharmacokinetic study, and reports no disposition parameters for mosapride. |
| popPK | Shingaki_2016 | irrelevant | 1 | 0 | Mosapride is used as a comparator antiemetic to assess its effect on the absorption of a probe drug (FDG), not as the subject of a pharmacokinetic parameter study. |
| popPK | Sung_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion channels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Tack_2012 | irrelevant | 0 | 0 | The paper is a systematic review of cardiovascular safety and pharmacology of 5-HT4 agonists, not a primary pharmacokinetic study reporting quantitative disposition parameters for mosapride. |
| PD | Tack_2012 | not_relevant | 2 | 1 | The paper is a systematic review focusing on cardiovascular safety and provides only qualitative summaries or general PK/PD tables without specific numeric PD parameters (e.g., Emax, EC50) for mosapride. |
| popPK | Takada_2022 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for roxadustat, not mosapride. |
| PD | Takada_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for roxadustat, not mosapride, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Tsubouchi_2018 | irrelevant | 0 | 0 | The evidence indicates an in vitro pharmacology and cardiovascular safety study, which does not report quantitative population pharmacokinetic parameters for mosapride. |
| PD | Tsubouchi_2018 | not_relevant | 0 | 0 | The paper focuses on a novel 5-HT4 agonist (DSP-6952) and does not report pharmacodynamic or exposure-response data for mosapride. |
| popPK | Yao_2019 | irrelevant | 2 | 0 | The study focuses on the synthesis and evaluation of new mosapride metabolites (R- and S-isomers) rather than mosapride itself, and no quantitative PK parameter values for mosapride are provided in the evidence. |
| popPK | Yoshida_1993 | irrelevant | 0 | 0 | The paper reports pharmacological potency (EC50, ED50) and functional effects in animals, not quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) for mosapride. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_mosapride`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
