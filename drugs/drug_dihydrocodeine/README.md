# dihydrocodeine

- **generic name:** dihydrocodeine
- **ATC codes:** `N02AA08`, `N02AJ01`, `N02AJ02`
- **DrugBank:** [DB01551](https://go.drugbank.com/drugs/DB01551)
- **groups:** approved, illicit

## About

**Description.** Dihydrocodeine is an opioid analgesic used as an alternative or adjunct to codeine to treat moderate to severe pain, severe dyspnea, and cough. 

It is semi-synthetic, and was developed in Germany in 1908 during an international search to find a more effective antitussive agent to help reduce the spread of airborne infectious diseases such as tuburculosis. It was marketed in 1911.

**Indication.** Dihydrocodeine is used for the treatment of moderate to severe pain, including post-operative and dental pain [2]. It  can also be used to treat chronic pain [1], breathlessness and coughing. 

In heroin addicts, dihydrocodeine has been used as a substitute drug, in doses up to 2500mg/day to treat addiction. [http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2014322/]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 18:57 | 21:44 | 0/1/0 | 1/1/0 | 0/0/0 | 204,122/4,624 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 0/0 | 16/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Webb_2001](drugs/drug_dihydrocodeine/Dihydrocodeine_Webb2001_reference.md) | Webb JA et al., Contribution of dihydrocodeine and dihy…, British journal of clinical… (2001) | [10.1046/j.0306-5251.2001.01414.x](https://doi.org/10.1046/j.0306-5251.2001.01414.x) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Webb_2001](drugs/drug_dihydrocodeine/pd_Webb_2001_CPT.md) | Webb JA et al., Contribution of dihydrocodeine and dihy…, British journal of clinical… (2001) | [10.1046/j.0306-5251.2001.01414.x](https://doi.org/10.1046/j.0306-5251.2001.01414.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rezaee_2025](drugs/drug_dihydrocodeine/pd_Rezaee_2025_cough.md) | Rezaee S et al., Dextromethorphan Versus Dextrorphan: A…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70049](https://doi.org/10.1002/jcph.70049) |

## Coverage

- **PubMed hits:** 124 matched, 78 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gu_2025.pdf` | Gu X et al., PK-PD relationship of poorly absorbable…, Journal of pharmaceutical a… (2025) | pd | 5 | [10.1016/j.jpba.2024.116478](https://doi.org/10.1016/j.jpba.2024.116478) | [39306946](https://www.ncbi.nlm.nih.gov/pubmed/39306946) | metadata signals extractable PD data (PK-PD) |
| `Schmidt_2007.pdf` | Schmidt H et al., Pharmacokinetic-pharmacodynamic modelin…, European journal of clinica… (2007) | pd | 5 | [10.1007/s00228-007-0363-8](https://doi.org/10.1007/s00228-007-0363-8) | [17786418](https://www.ncbi.nlm.nih.gov/pubmed/17786418) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Mei_2022.pdf` | Mei J et al., Identification of bioactive natural pro…, Biomedicine & pharmacothera… (2022) | pd | 4 | [10.1016/j.biopha.2022.112798](https://doi.org/10.1016/j.biopha.2022.112798) | [35286964](https://www.ncbi.nlm.nih.gov/pubmed/35286964) | metadata signals extractable PD data (IC50) |
| `Fromm_1995.pdf` | Fromm MF et al., Dihydrocodeine: a new opioid substrate…, Clinical pharmacology and t… (1995) | pgx | 8 | [10.1016/0009-9236(95)90049-7](https://doi.org/10.1016/0009-9236(95)90049-7) | [7586928](https://www.ncbi.nlm.nih.gov/pubmed/7586928) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Leppert_2011.pdf` | Leppert W, CYP2D6 in the metabolism of opioids for…, Pharmacology (2011) | pgx | 8 | [10.1159/000326085](https://doi.org/10.1159/000326085) | [21494059](https://www.ncbi.nlm.nih.gov/pubmed/21494059) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `unknown_2016.pdf` | unknown, "Weak" opioid analgesics. Codeine, dihy…, Prescrire international (2016) | pgx | 8 | not captured | [27042732](https://www.ncbi.nlm.nih.gov/pubmed/27042732) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Zhao_2026.pdf` | Zhao J et al., Inhibition of human liver cytochrome P4…, Xenobiotica; the fate of fo… (2026) | pgx | 7 | [10.1080/00498254.2026.2650150](https://doi.org/10.1080/00498254.2026.2650150) | [41876357](https://www.ncbi.nlm.nih.gov/pubmed/41876357) | metadata signals extractable PGX data (CYP6D2, PK/PD-context) |
| `Hosseinnejad_2019.pdf` | Hosseinnejad K et al., Lack of Influence by CYP3A4 and CYP3A5…, The journal of applied labo… (2019) | pgx | 5 | [10.1373/jalm.2018.026070](https://doi.org/10.1373/jalm.2018.026070) | [31639687](https://www.ncbi.nlm.nih.gov/pubmed/31639687) | metadata signals extractable PGX data (CYP3A4) |
| `Schmidt_2002.pdf` | Schmidt H et al., Affinities of dihydrocodeine and its me…, Pharmacology & toxicology (2002) | pgx | 5 | [10.1034/j.1600-0773.2002.910203.x](https://doi.org/10.1034/j.1600-0773.2002.910203.x) | [12420793](https://www.ncbi.nlm.nih.gov/pubmed/12420793) | metadata signals extractable PGX data (CYP2D6) |
| `Susce_2006.pdf` | Susce MT et al., Response to hydrocodone, codeine and ox…, Progress in neuro-psychopha… (2006) | pgx | 5 | [10.1016/j.pnpbp.2006.03.018](https://doi.org/10.1016/j.pnpbp.2006.03.018) | [16631290](https://www.ncbi.nlm.nih.gov/pubmed/16631290) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-08-27T20:19:27.012199+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ammon_1999 | not_relevant | 0 | 0 | The study exclusively includes CYP2D6 extensive metabolizers and assesses dose-linearity, failing to compare different genotypes or report a pharmacogenomic effect. |
| popPK | Chevalier_2025 | irrelevant | 0 | 0 | The paper is a systems biology study on Boolean network inference for cellular differentiation and contains no pharmacokinetic data for dihydrocodeine. |
| PD | Chevalier_2025 | not_relevant | 0 | 0 | The paper focuses on inferring Boolean networks for gene regulatory dynamics in hematopoiesis and cell differentiation; it does not contain any pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters for dihydrocodeine or any other drug. |
| PGx | Cottrill_2021 | not_relevant | 0 | 0 | The paper reports genotype/phenotype classifications and general metabolic pathways for dihydrocodeine but does not report specific changes in PK or PD parameters (e.g., AUC, Cmax, pain scores) linked to these variants. |
| popPK | Du_2021 | irrelevant | 0 | 0 | The paper is a neuroscience study on Golgi outposts in Drosophila and does not involve dihydrocodeine or pharmacokinetics. |
| PGx | Genaro-Mattos_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomic effects of cariprazine on cholesterol biosynthesis (7-DHC levels), not dihydrocodeine. |
| PGx | Genaro-Mattos_2021 | not_relevant | 0 | 0 | The paper investigates the effect of DHCR7 genotype on the pharmacokinetics of aripiprazole and cariprazine, not dihydrocodeine. |
| PGx | Hackl_2025 | not_relevant | 0 | 0 | The paper reports a genetic variant associated with Smith-Lemli-Opitz syndrome and intellectual disability, not a pharmacogenomic effect on dihydrocodeine. |
| PGx | Leppert_2016 | not_relevant | 2 | 0 | The paper discusses CYP2D6 phenotypes qualitatively but does not report quantitative pharmacokinetic or pharmacodynamic parameter changes for dihydrocodeine. |
| popPK | Minsat_2021 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study on phloretin analogues for cosmetic applications and does not involve dihydrocodeine or pharmacokinetics. |
| PD | Minsat_2021 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant and anti-tyrosinase activities (IC50/EC50) for synthetic phloretin analogues, not pharmacodynamic or exposure-response data for dihydrocodeine. |
| popPK | Papadopoulou_2025 | irrelevant | 0 | 0 | The paper is a review on marine bioactives for cosmetics and does not mention dihydrocodeine or report any pharmacokinetic parameters. |
| PD | Papadopoulou_2025 | not_relevant | 0 | 0 | The paper is a review on marine bioactives for cosmetics and does not contain any pharmacodynamic or exposure-response data for dihydrocodeine. |
| PGx | Parween_2021 | not_relevant | 0 | 0 | The paper investigates the effect of PON2 variants on the hydrolysis of acetylcholinesterase inhibitors (donepezil and pyridostigmine), not dihydrocodeine. |
| popPK | Pascoa_2023 | irrelevant | 0 | 0 | The paper is a structural biology study on ceramide synthase 6 and does not involve dihydrocodeine or pharmacokinetic parameters. |
| PD | Pascoa_2023 | not_relevant | 0 | 0 | The paper describes the structural basis and mechanism of human ceramide synthase 6 (CerS6) and its inhibition by fumonisin B1, containing no data on dihydrocodeine or any pharmacodynamic exposure-response relationship. |
| popPK | Pascoa_2025 | irrelevant | 0 | 0 | The paper is a structural biology study on human ceramide synthase 6 (CerS6) and does not involve dihydrocodeine or pharmacokinetic parameters. |
| PD | Pascoa_2025 | not_relevant | 0 | 0 | The paper describes the structural basis and enzymatic mechanism of ceramide synthase 6 (CerS6) and its inhibition by fumonisin B1, but does not report any pharmacodynamic or exposure-response data for dihydrocodeine. |
| popPK | Rezaee_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of dextromethorphan and dextrorphan, not dihydrocodeine. |
| PGx | Sobczak_2020 | not_relevant | 2 | 0 | The paper discusses CYP2D6 polymorphisms affecting codeine metabolism but does not report specific pharmacogenomic effects on dihydrocodeine PK/PD parameters. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | The paper is a collection of intensive care meeting abstracts unrelated to dihydrocodeine pharmacokinetics. |
| PD | unknown_2019 | not_relevant | 0 | 0 | The text consists of meeting abstracts regarding mechanical ventilation, physiotherapy, and ICU care, with no mention of dihydrocodeine or any pharmacodynamic modeling. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dihydrocodeine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
