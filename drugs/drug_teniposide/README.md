<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;teniposide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Teniposide_Cheng1999_patients_with_ovarian_cancer&quot;,&quot;label&quot;:&quot;Cheng_1999_patients with ovarian cancer&quot;,&quot;href&quot;:&quot;drugs/drug_teniposide/Teniposide_Cheng1999_patients_with_ovarian_cancer.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Teniposide_Holthuis1987_cancer_patients&quot;,&quot;label&quot;:&quot;Holthuis_1987_cancer patients&quot;,&quot;href&quot;:&quot;drugs/drug_teniposide/Teniposide_Holthuis1987_cancer_patients.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# teniposide

- **generic name:** teniposide
- **ATC codes:** `L01CB02`
- **DrugBank:** [DB00444](https://go.drugbank.com/drugs/DB00444)
- **groups:** approved, investigational

## About

**Description.** Teniposide is a semisynthetic derivative of podophyllotoxin that exhibits antitumor activity. Teniposide inhibits DNA synthesis by forming a complex with topoisomerase II and DNA. This complex induces breaks in double stranded DNA and prevents repair by topoisomerase II binding. Accumulated breaks in DNA prevent cells from entering into the mitotic phase of the cell cycle, and lead to cell death. Teniposide acts primarily in the G2 and S phases of the cycle.

**Indication.** Teniposide is used for the treatment of refractory acute lymphoblastic leukaemia

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 09:24 | 7:41 | 0/0/0 | 0/0/0 | 0/0/0 | 33,064/2,733 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Cheng_1999_patients with ovarian cancer](drugs/drug_teniposide/Teniposide_Cheng1999_patients_with_ovarian_cancer.md) | Cheng A et al., [A pharmacokinetic study of teniposide…, Hua xi yi ke da xue xue bao… (1999) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Holthuis_1987_cancer patients](drugs/drug_teniposide/Teniposide_Holthuis1987_cancer_patients.md) | Holthuis JJ et al., Pharmacokinetics of high-dose teniposide, Cancer treatment reports (1987) | — |

## Coverage

- **PubMed hits:** 64 matched, 43 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baker_1992.pdf` | Baker DK et al., Increased teniposide clearance with con…, Journal of clinical oncolog… (1992) | popPK | 10 | [10.1200/JCO.1992.10.2.311](https://doi.org/10.1200/JCO.1992.10.2.311) | [1732431](https://pubmed.ncbi.nlm.nih.gov/1732431) | The paper reports quantitative pharmacokinetic parameters (systemic clearance) for teniposide in pediatric patients, with specific numeric values provided in the text. |
| `Canal_1989.pdf` | Canal P et al., A pharmacokinetic model for intraperito…, Journal of pharmaceutical s… (1989) | popPK | 10 | [10.1002/jps.2600780509](https://doi.org/10.1002/jps.2600780509) | [2746477](https://pubmed.ncbi.nlm.nih.gov/2746477) | The paper describes a pharmacokinetic study of teniposide with a compartmental model, but the specific numeric parameter values are not present in the provided evidence. |
| `Evans_1982.pdf` | Evans WE et al., Pharmacokinetics of Teniposide (VM26) a…, Cancer chemotherapy and pha… (1982) | popPK | 10 | [10.1007/BF00254537](https://doi.org/10.1007/BF00254537) | [7083455](https://pubmed.ncbi.nlm.nih.gov/7083455) | The paper reports quantitative pharmacokinetic parameters (clearance) for teniposide in children, with specific numeric values provided in the abstract text. |
| `Holthuis_1987.pdf` | Holthuis JJ et al., Pharmacokinetics of high-dose teniposide, Cancer treatment reports (1987) | popPK | 10 | not captured | [3581097](https://pubmed.ncbi.nlm.nih.gov/3581097) | The paper reports quantitative pharmacokinetic parameters (Vss, CL) for teniposide in humans with specific numeric ranges provided in the text. |
| `Cheng_1999.pdf` | Cheng A et al., [A pharmacokinetic study of teniposide…, Hua xi yi ke da xue xue bao… (1999) | popPK | 9 | not captured | [12205938](https://pubmed.ncbi.nlm.nih.gov/12205938) | The study reports quantitative PK parameters (half-life, Cmax/AUC ratios) for teniposide in humans, though specific clearance and volume values are described qualitatively rather than numerically. |
| `Blanco_2000.pdf` | Blanco JG et al., Human cytochrome P450 maximal activitie…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [10725303](https://www.ncbi.nlm.nih.gov/pubmed/10725303) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Relling_1990.pdf` | Relling MV et al., Tolbutamide and mephenytoin hydroxylati…, The Journal of pharmacology… (1990) | pgx | 5 | not captured | [2299601](https://www.ncbi.nlm.nih.gov/pubmed/2299601) | metadata signals extractable PGX data (CYP2C) |

<sub>queue written 2026-09-15T21:46:22.808978+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Allen_2003 | not_relevant | 2 | 5 | The paper focuses on etoposide PK/PD and Bcrp1/P-gp mechanisms; teniposide is only mentioned as a substrate for Bcrp1-mediated resistance in cell lines, with no specific PK/PD parameter reported for teniposide. |
| PGx | Bao_2025 | not_relevant | 0 | 0 | The paper identifies teniposide as a potential therapeutic drug based on gene-drug association databases (GDSC/CTRP) but does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Baumhäkel_2001 | not_relevant | 0 | 0 | The paper reports in vitro CYP3A4 inhibition by teniposide, not a pharmacogenomic effect of a gene variant on teniposide PK/PD. |
| PGx | Blanco_2000 | not_relevant | 0 | 0 | The paper investigates age-related differences in CYP450 activity, not the effect of specific gene variants or genotypes on teniposide pharmacokinetics. |
| popPK | Canal_1989 | relevant | 10 | 0 | The paper describes a pharmacokinetic study of teniposide with a compartmental model, but the specific numeric parameter values are not present in the provided evidence. |
| PGx | De_1990 | not_relevant | 0 | 0 | The paper investigates cellular resistance mechanisms in leukemia cells, not human pharmacogenomic variants affecting PK/PD. |
| PD | Estlin_2001 | not_relevant | 1 | 0 | The text is a review or introduction that qualitatively mentions the importance of pharmacokinetics for teniposide but does not report any specific exposure-response data, dose-response curves, or numeric PD parameters. |
| popPK | Freyer_1995 | irrelevant | 1 | 0 | The paper is a review discussing the application of PK models in the elderly and mentions teniposide only as an example of a drug for which models exist, without providing any original quantitative PK parameter values. |
| PD | Hansen_1992 | not_relevant | 1 | 0 | The text is a clinical review summarizing response rates and clinical factors influencing efficacy, but it does not report any pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50). |
| PD | He_2012 | not_relevant | 0 | 0 | The paper focuses on formulation development and pharmacokinetics (PK) of a new delivery system, reporting no pharmacodynamic (PD) or exposure-response data. |
| PGx | Karadeniz_2015 | not_relevant | 0 | 0 | The paper studies the cytotoxicity of medicinal plant extracts in cancer cell lines and does not report pharmacogenomic effects on the PK or PD of teniposide. |
| PGx | Luo_2023 | not_relevant | 0 | 0 | The paper identifies teniposide as a potential therapeutic drug based on metabolic reprogramming and TP53 status but does not report specific pharmacokinetic or pharmacodynamic parameter changes linked to genetic variants. |
| PGx | Masson_1997 | not_relevant | 0 | 0 | The paper is a general review of pharmacokinetic optimization in cancer chemotherapy and mentions teniposide only as a potential candidate for future individualization, without reporting specific pharmacogenomic effects or data. |
| PD | McLeod_1993 | not_relevant | 1 | 0 | The text is a qualitative review discussing the concept of PK/PD relationships for epipodophyllotoxins but does not present any specific numeric PD parameters, curves, or data for teniposide. |
| PGx | Pang_2001 | not_relevant | 0 | 0 | The paper describes a method for analyzing etoposide (not teniposide) and mentions CYP3A4 genotype only as background context for future studies, without reporting any pharmacogenomic effects on PK/PD parameters. |
| PGx | Relling_1990 | not_relevant | 0 | 0 | The paper studies tolbutamide and mephenytoin metabolism; teniposide is only mentioned as an inhibitor, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Relling_1994 | not_relevant | 0 | 0 | The paper identifies CYP3A4 as the enzyme responsible for teniposide metabolism but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Relling_1999 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for mercaptopurine, not teniposide. |
| PD | Rodman_1993 | not_relevant | 2 | 1 | The study focuses on PK variability and dose escalation to maximize exposure without toxicity, but does not report a quantitative concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Rousseau_2000 | irrelevant | 1 | 0 | The paper is a review of adaptive control methods and mentions teniposide only as an example of a drug where MAP estimation was used, without providing original quantitative PK parameter values. |
| popPK | Rousseau_2002 | irrelevant | 1 | 0 | The paper is a review of therapeutic drug monitoring methods that mentions teniposide only as an example of a drug for which Bayesian estimators have been used, without reporting any original quantitative pharmacokinetic parameter values. |
| PGx | Saeed_2014 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of honokiol, not teniposide, and does not report PK/PD parameters for teniposide. |
| PD | Shah_2018 | not_relevant | 0 | 0 | The paper is a review of breast cancer brain metastases treatments and does not mention teniposide or report any pharmacodynamic or exposure-response data. |
| PD | Sinkule_1984 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (clearance, volume of distribution) and covariate analysis, with no pharmacodynamic or exposure-response data. |
| PD | Solal-Celigny_1993 | not_relevant | 0 | 0 | The provided text contains only metadata and software version information, with no scientific content regarding teniposide or pharmacodynamics. |
| PGx | Vasilev_2006 | not_relevant | 0 | 0 | The paper investigates the biotransformation of deoxypodophyllotoxin to epipodophyllotoxin in E. coli and does not report pharmacogenomic effects on the PK/PD of teniposide. |
| PGx | Wang_2005 | not_relevant | 0 | 0 | The paper reports that CYP3A5 expression does not change sensitivity to teniposide (resistance multiple 1.04), indicating no pharmacogenomic effect on the PD parameter for this specific drug. |
| PD | Zhang_2013 | not_relevant | 0 | 0 | The paper reports pharmacokinetic improvements (AUC, tumor concentration) and cellular uptake mechanisms but does not provide any pharmacodynamic data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| PGx | Zhou-Pan_1993 | not_relevant | 0 | 0 | The paper investigates vinblastine metabolism and mentions teniposide only as a drug that inhibits vinblastine biotransformation, not as the subject of a pharmacogenomic study. |
| PGx | van_2008 | not_relevant | 2 | 0 | The text is a review abstract that lists teniposide as a topic but does not report specific pharmacogenomic effects on PK/PD parameters or provide quantitative data. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_teniposide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
