# nizatidine

- **generic name:** nizatidine
- **ATC codes:** `A02BA04`
- **DrugBank:** [DB00585](https://go.drugbank.com/drugs/DB00585)
- **groups:** approved

## About

**Description.** A histamine H2 receptor antagonist with low toxicity that inhibits gastric acid secretion. The drug is used for the treatment of duodenal ulcers.

**Indication.** For the treatment of acid-reflux disorders (GERD), peptic ulcer disease, active benign gastric ulcer, and active duodenal ulcer.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 19:40 | 10:16 | 0/1/0 | 0/0/0 | 0/0/0 | 57,070/4,692 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Abdel-Rahman_2004](drugs/drug_nizatidine/Nizatidine_AbdelRahman2004_reference.md) | Abdel-Rahman SM et al., Developmental pharmacokinetics and phar…, Journal of pediatric gastro… (2004) | [10.1097/00005176-200404000-00015](https://doi.org/10.1097/00005176-200404000-00015) |

## Coverage

- **PubMed hits:** 46 matched, 40 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abdel-Rahman_2002.pdf` | Abdel-Rahman SM et al., Single-dose pharmacokinetics of nizatid…, Journal of clinical pharmac… (2002) | popPK | 10 | [10.1177/009127002401382687](https://doi.org/10.1177/009127002401382687) | [12362922](https://pubmed.ncbi.nlm.nih.gov/12362922) | The title confirms a single-dose PK study of nizatidine in children, but the provided evidence contains no numeric parameter values. |
| `Callaghan_1985.pdf` | Callaghan JT et al., Intravenous nizatidine kinetics and aci…, Clinical pharmacology and t… (1985) | popPK | 10 | [10.1038/clpt.1985.29](https://doi.org/10.1038/clpt.1985.29) | [2857117](https://pubmed.ncbi.nlm.nih.gov/2857117) | The text explicitly reports quantitative pharmacokinetic parameters for nizatidine, including half-life (1.3 hr), volume of distribution (1.2 l/kg), and clearance (0.6 l/kg/hr). |
| `Abdel-Rahman_2004.pdf` | Abdel-Rahman SM et al., Developmental pharmacokinetics and phar…, Journal of pediatric gastro… (2004) | popPK | 9 | [10.1097/00005176-200404000-00015](https://doi.org/10.1097/00005176-200404000-00015) | [15085026](https://pubmed.ncbi.nlm.nih.gov/15085026) | The study reports quantitative PK parameters (Cmax, AUC, Cl/F, Vss/F) for nizatidine in humans, with specific numeric values provided in the text. |
| `Sano_1991.pdf` | Sano H et al., Pharmacokinetics of nizatidine in dogs…, Xenobiotica; the fate of fo… (1991) | popPK | 9 | [10.3109/00498259109043200](https://doi.org/10.3109/00498259109043200) | [1796603](https://pubmed.ncbi.nlm.nih.gov/1796603) | The paper is a relevant animal PK study for nizatidine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, which only describes trends and correlations. |
| `Danziger_1989.pdf` | Danziger L et al., Nizatidine suppression of basal gastric…, Journal of clinical pharmac… (1989) | popPK | 8 | [10.1002/j.1552-4604.1989.tb03259.x](https://doi.org/10.1002/j.1552-4604.1989.tb03259.x) | [2574190](https://pubmed.ncbi.nlm.nih.gov/2574190) | The study is a PK/PD trial for nizatidine, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Lin_1991.pdf` | Lin JH, Pharmacokinetic and pharmacodynamic pro…, Clinical pharmacokinetics (1991) | pd | 5 | [10.2165/00003088-199120030-00004](https://doi.org/10.2165/00003088-199120030-00004) | [1673880](https://www.ncbi.nlm.nih.gov/pubmed/1673880) | metadata signals extractable PD data (IC50) |
| `Morrissey_2016.pdf` | Morrissey KM et al., The Effect of Nizatidine, a MATE2K Sele…, Clinical pharmacokinetics (2016) | pd | 5 | [10.1007/s40262-015-0332-9](https://doi.org/10.1007/s40262-015-0332-9) | [26507723](https://www.ncbi.nlm.nih.gov/pubmed/26507723) | metadata signals extractable PD data (IC50) |
| `van_1993.pdf` | van Zyl JM et al., Anti-oxidant properties of H2-receptor…, Biochemical pharmacology (1993) | pd | 5 | [10.1016/0006-2952(93)90218-l](https://doi.org/10.1016/0006-2952(93)90218-l) | [8101078](https://www.ncbi.nlm.nih.gov/pubmed/8101078) | metadata signals extractable PD data (IC50) |
| `Boom_1992.pdf` | Boom SP et al., Organic cation transport and cationic d…, The Journal of pharmacology… (1992) | pd | 4 | not captured | [1359105](https://www.ncbi.nlm.nih.gov/pubmed/1359105) | metadata signals extractable PD data (IC50) |
| `Boom_1993.pdf` | Boom SP et al., Cimetidine uptake and interactions with…, The Journal of pharmacology… (1993) | pd | 4 | not captured | [8263763](https://www.ncbi.nlm.nih.gov/pubmed/8263763) | metadata signals extractable PD data (IC50) |
| `Shimokawa_1996.pdf` | Shimokawa M et al., Neurotoxic convulsions induced by hista…, Toxicology and applied phar… (1996) | pd | 4 | [10.1006/taap.1996.0038](https://doi.org/10.1006/taap.1996.0038) | [8619239](https://www.ncbi.nlm.nih.gov/pubmed/8619239) | metadata signals extractable PD data (EC50) |
| `Ueki_1993.pdf` | Ueki S et al., Gastroprokinetic activity of nizatidine…, The Journal of pharmacology… (1993) | pd | 4 | not captured | [8093722](https://www.ncbi.nlm.nih.gov/pubmed/8093722) | metadata signals extractable PD data (IC50) |
| `Furuta_2001.pdf` | Furuta S et al., Inhibition of drug metabolism in human…, Xenobiotica; the fate of fo… (2001) | pgx | 7 | [10.1080/00498250110035615](https://doi.org/10.1080/00498250110035615) | [11334262](https://www.ncbi.nlm.nih.gov/pubmed/11334262) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Michalets_2000.pdf` | Michalets EL et al., Drug interactions with cisapride: clini…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039010-00004](https://doi.org/10.2165/00003088-200039010-00004) | [10926350](https://www.ncbi.nlm.nih.gov/pubmed/10926350) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-10T19:38:53.413562+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel-Rahman_2002 | relevant | 10 | 0 | The title confirms a single-dose PK study of nizatidine in children, but the provided evidence contains no numeric parameter values. |
| PD | Abdel-Rahman_2002 | not_relevant | 0 | 0 | The paper reports only single-dose pharmacokinetics (PK) parameters and does not include any pharmacodynamic (PD) or exposure-response analysis. |
| PD | Abdel-Rahman_2004 | not_relevant | 3 | 1 | The paper reports PK parameters and qualitative changes in intragastric pH (mean/median/fraction of time) but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect model. |
| popPK | Boom_1992 | irrelevant | 0 | 0 | The paper focuses on organic cation transport in rat proximal tubular cells and does not report population pharmacokinetic parameters for nizatidine. |
| PD | Boom_1992 | not_relevant | 0 | 0 | The paper focuses on organic cation transport mechanisms in rat proximal tubular cells and does not report pharmacodynamic or exposure-response relationships for nizatidine. |
| popPK | Boom_1993 | irrelevant | 0 | 0 | The paper focuses on cimetidine uptake in rat proximal tubular cells and does not report pharmacokinetic parameters for nizatidine. |
| PD | Boom_1993 | not_relevant | 0 | 0 | The paper focuses on cimetidine uptake and interactions in rat proximal tubular cells, not nizatidine pharmacodynamics or exposure-response relationships. |
| popPK | Dahan_2009 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of intestinal efflux transport (Caco-2 cells) and does not report in-vivo pharmacokinetic disposition parameters (CL, V, t1/2) for nizatidine. |
| PD | Dahan_2009 | not_relevant | 0 | 0 | The paper characterizes intestinal transport kinetics (P-gp efflux) in Caco-2 cells, not pharmacodynamic exposure-response or dose-response relationships for the drug's therapeutic effect. |
| popPK | Dammann_1986 | irrelevant | 0 | 0 | The study reports pharmacodynamic outcomes (acid suppression) rather than quantitative pharmacokinetic parameters (CL, V, ka, etc.) for nizatidine. |
| PD | Dammann_1986 | not_relevant | 3 | 2 | The study reports percentage reductions in acid secretion for fixed doses but does not provide plasma concentration data or fit a dose-response model to derive numeric PD parameters like Emax or EC50. |
| popPK | Dammann_1987 | irrelevant | 0 | 0 | The study reports pharmacodynamic acid suppression data, not pharmacokinetic disposition parameters for nizatidine. |
| popPK | Danziger_1989 | relevant | 8 | 0 | The study is a PK/PD trial for nizatidine, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Dyck_1987 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for duodenal ulcer healing and does not report any pharmacokinetic parameters for nizatidine. |
| PD | Dyck_1987 | not_relevant | 4 | 2 | The paper describes a dose-response clinical trial but the provided text only contains qualitative comparisons of healing rates without specific numeric PD parameters (e.g., Emax, EC50) or detailed effect-vs-dose data points. |
| PGx | Furuta_2001 | not_relevant | 0 | 0 | The paper investigates in vitro CYP inhibition by nizatidine and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Gladziwa_1993 | irrelevant | 2 | 0 | The text is a qualitative review summarizing general trends in renal insufficiency without providing specific quantitative PK parameter values (CL, V, ka, etc.) for nizatidine. |
| PD | Gladziwa_1993 | not_relevant | 1 | 0 | The text is a qualitative review summarizing PK changes and stating that acid inhibition is prolonged, but it provides no numeric PD parameters, dose-response curves, or quantitative exposure-response data. |
| popPK | Kawakami_1997 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content or pharmacokinetic data for nizatidine. |
| PD | Kawakami_1997 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any pharmacological data, study results, or PD parameters for nizatidine. |
| popPK | Lauritsen_1990 | irrelevant | 2 | 0 | The paper is a review article that discusses nizatidine only as a class representative without providing original quantitative pharmacokinetic parameter values. |
| PD | Lauritsen_1990 | not_relevant | 2 | 0 | The text is a review abstract that mentions pharmacokinetic-pharmacodynamic relationships generally but does not provide specific numeric PD parameters or exposure-response data for nizatidine. |
| popPK | Lazzaroni_1989 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of acid secretion inhibition and does not report any pharmacokinetic parameters for nizatidine. |
| PD | Lazzaroni_1989 | not_relevant | 3 | 2 | The study reports qualitative comparisons of acid inhibition percentages between nizatidine and ranitidine but does not provide a concentration-effect relationship, dose-response curve, or numeric PD parameters (e.g., Emax, EC50) for nizatidine. |
| popPK | Lin_1986 | irrelevant | 0 | 0 | The paper describes pharmacodynamic effects (receptor affinity, acid output, cytoprotection) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life for nizatidine. |
| popPK | Lin_1991 | irrelevant | 0 | 0 | The provided evidence contains only the title of a review article and no quantitative pharmacokinetic parameter values for nizatidine. |
| popPK | Michalets_2000 | irrelevant | 0 | 0 | The provided evidence contains only the title of a review on cisapride interactions, with no quantitative pharmacokinetic parameters for nizatidine. |
| PD | Michalets_2000 | not_relevant | 0 | 0 | The paper discusses drug interactions with cisapride and does not report any pharmacodynamic or exposure-response analysis for nizatidine. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions with cisapride, not pharmacogenomic effects on nizatidine. |
| popPK | Mimaki_2001 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic mechanism of nizatidine (bicarbonate secretion and AChE inhibition) in rats and does not report any pharmacokinetic parameters. |
| PGx | Moody_2013 | not_relevant | 0 | 0 | The paper reports in vitro drug-drug interactions (inhibition of CYP enzymes by nizatidine) but does not report any pharmacogenomic effects (gene variants) on nizatidine's PK or PD parameters. |
| popPK | Morrissey_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of metformin, with nizatidine serving only as a co-administered inhibitor rather than the subject drug for PK parameter extraction. |
| PD | Morrissey_2016 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, results, or any numeric PD parameters or exposure-response data. |
| popPK | Price_1988 | irrelevant | 1 | 0 | The paper is a preliminary review of pharmacodynamic and therapeutic properties without reporting specific quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2) for nizatidine. |
| PD | Price_1988 | not_relevant | 1 | 0 | The text is a qualitative review summarizing therapeutic efficacy and general pharmacodynamic properties without providing specific numeric PD parameters or concentration-effect data. |
| popPK | Rahman_2020 | irrelevant | 0 | 0 | The study is an in-vitro spectroscopic and computational analysis of protein binding, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PD | Rahman_2020 | not_relevant | 0 | 0 | The paper investigates the molecular binding interaction between nizatidine and bovine serum albumin (BSA) using spectroscopic and computational methods, not pharmacodynamic exposure-response or dose-response relationships in a biological system. |
| popPK | Sano_1991 | relevant | 9 | 2 | The paper is a relevant animal PK study for nizatidine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, which only describes trends and correlations. |
| popPK | Savarino_1990 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of gastric pH suppression and does not report any pharmacokinetic parameters for nizatidine. |
| PD | Savarino_1990 | not_relevant | 3 | 2 | The paper reports comparative pharmacodynamic effects (gastric pH) of nizatidine versus other drugs but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for nizatidine. |
| popPK | Sharma_1998 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic indirect response models and uses nizatidine only as a pharmacodynamic example, reporting no quantitative pharmacokinetic parameters for the drug. |
| PD | Sharma_1998 | not_relevant | 3 | 0 | The paper is a review of indirect response models; while it mentions nizatidine as an application example, the provided text does not contain specific numeric PD parameters (Emax, IC50, etc.) for nizatidine. |
| popPK | Shimokawa_1996 | irrelevant | 0 | 0 | The paper title indicates a study on neurotoxicity in mice, not a pharmacokinetic study reporting quantitative disposition parameters for nizatidine. |
| PD | Shimokawa_1996 | not_relevant | 0 | 0 | The paper describes neurotoxic convulsions in mice but does not report a pharmacodynamic exposure-response or dose-response relationship for nizatidine with numeric PD parameters. |
| popPK | Staines_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on bone mineralization where nizatidine is used only as a negative control/comparator, and no pharmacokinetic parameters are reported. |
| PD | Staines_2021 | not_relevant | 0 | 0 | The paper explicitly states that nizatidine had no inhibitory effects on PHOSPHO1 activity and does not report any numeric PD parameters or dose-response curve for nizatidine. |
| popPK | Takeuchi_2000 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic mechanism of nizatidine (stimulation of duodenal bicarbonate secretion via anti-cholinesterase activity) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Ueki_1993 | irrelevant | 0 | 0 | The paper focuses on the gastroprokinetic activity and mechanism of action of nizatidine, not on pharmacokinetic disposition parameters. |
| PD | Ueki_1993 | not_relevant | 0 | 0 | The paper focuses on the gastroprokinetic activity and mechanism of action of nizatidine, not on pharmacodynamic exposure-response or dose-response modeling with numeric PD parameters. |
| popPK | Vargas_1988 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (acid secretion) and mentions a similar PK profile but does not report quantitative PK parameters (CL, V, t1/2) for nizatidine in the provided text. |
| popPK | Walt_1989 | irrelevant | 0 | 0 | The paper is a clinical review discussing therapeutic efficacy and pharmacodynamics, containing no quantitative pharmacokinetic parameters for nizatidine. |
| PD | Walt_1989 | not_relevant | 1 | 0 | The text is a qualitative review discussing the clinical importance and relative potency of H2-antagonists without providing any numeric PD parameters, concentration-effect curves, or specific exposure-response data for nizatidine. |
| popPK | van_1993 | irrelevant | 0 | 0 | The paper focuses on the anti-oxidant properties and mechanistic effects of H2-receptor antagonists, not on pharmacokinetic parameters for nizatidine. |
| PD | van_1993 | not_relevant | 0 | 0 | The paper investigates the antioxidant properties of H2-receptor antagonists in an in vitro chemical system, not the pharmacodynamic exposure-response relationship of nizatidine in a biological or clinical context. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_nizatidine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
