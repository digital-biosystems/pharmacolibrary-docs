<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;troxipide&quot;}]"></div>

# troxipide

- **generic name:** troxipide
- **ATC codes:** `A02BX11`
- **DrugBank:** [DB13419](https://go.drugbank.com/drugs/DB13419)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 08:57 | 15:48 | 0/0/0 | 0/0/0 | 0/0/0 | 498,695/9,457 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 3/15 | 18/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 11 matched, 66 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Appel-Dingemanse_1999.pdf` | Appel-Dingemanse S et al., Integrated modelling of the clinical ph…, British journal of clinical… (1999) | popPK | 10 | [10.1046/j.1365-2125.1999.00936.x](https://doi.org/10.1046/j.1365-2125.1999.00936.x) | [10336571](https://pubmed.ncbi.nlm.nih.gov/10336571) | The paper reports quantitative pharmacokinetic parameters (CL, Vss, t1/2, F) for troxipide (SDZ HTF 919) in the abstract. |
| `Gao_2015.pdf` | Gao Y et al., Preparation and pharmacokinetics study…, Drug development and indust… (2015) | popPK | 8 | [10.3109/03639045.2014.956113](https://doi.org/10.3109/03639045.2014.956113) | [25190152](https://pubmed.ncbi.nlm.nih.gov/25190152) | The paper describes an in vivo pharmacokinetic study of troxipide in beagles, but the provided evidence contains only qualitative descriptions of parameters (e.g., "lower Cmax") without any specific numeric values. |
| `Harada_1994.pdf` | Harada Y et al., Receptor binding profiles of KB-5492, a…, European journal of pharmac… (1994) | pd | 4 | [10.1016/0014-2999(94)90558-4](https://doi.org/10.1016/0014-2999(94)90558-4) | [8045277](https://www.ncbi.nlm.nih.gov/pubmed/8045277) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-18T08:56:57.006553+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2023 | irrelevant | 0 | 0 | The paper describes an electrochemical biosensor for serotonin detection and does not involve troxipide or pharmacokinetic parameters. |
| popPK | Arbona_2023 | irrelevant | 0 | 0 | The paper concerns 5-hydroxytryptophan (5-HTP) toxicity in a dog, not troxipide. |
| popPK | Bauer_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metoclopramide, not troxipide. |
| popPK | Blackwell_1989 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for ondansetron, not troxipide. |
| popPK | Carroll_2021 | irrelevant | 0 | 0 | The paper is a review of interventions for cystic fibrosis complications and does not involve troxipide or report any pharmacokinetic parameters. |
| popPK | Cooper_2021 | irrelevant | 0 | 0 | The paper describes in-vitro cytotoxicity and synthesis of a troxipide conjugate, containing no pharmacokinetic parameters. |
| popPK | Delco_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tegaserod in horses, not troxipide. |
| popPK | Desta_2002 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of metoclopramide, not the pharmacokinetics of troxipide. |
| popPK | Dewan_2010 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for gastritis treatment and does not report any pharmacokinetic parameters for troxipide. |
| popPK | Finizia_2002 | irrelevant | 0 | 0 | The study focuses on cisapride's effect on oesophageal motility and does not report pharmacokinetic parameters for troxipide. |
| popPK | Fujimoto_2026 | irrelevant | 2 | 0 | The study reports tissue concentrations (ng/g protein) in the GI tract rather than systemic pharmacokinetic parameters (CL, V, ka, t1/2) or a compartmental model. |
| popPK | Gao_2015 | relevant | 8 | 0 | The paper describes an in vivo pharmacokinetic study of troxipide in beagles, but the provided evidence contains only qualitative descriptions of parameters (e.g., "lower Cmax") without any specific numeric values. |
| popPK | Gijsman_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 5-hydroxytryptophan (5-HTP), not troxipide. |
| popPK | Green_2018 | irrelevant | 0 | 0 | The paper is a review of interventions for cystic fibrosis complications and does not mention troxipide or report any pharmacokinetic parameters. |
| popPK | Guan_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 5-hydroxytryptophan (5-HTP), not troxipide. |
| popPK | Harada_1994 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Harada_1994 | not_relevant | 0 | 0 | The paper describes receptor binding profiles of KB-5492, not troxipide, and does not report pharmacodynamic exposure-response or dose-response relationships for troxipide. |
| popPK | Hasler_2004 | irrelevant | 0 | 0 | The paper is a review of the safety profile of tegaserod, not a pharmacokinetic study of troxipide. |
| popPK | He_2013 | irrelevant | 0 | 0 | The paper describes the radiosynthesis and biological evaluation of a PET tracer ([(18)F]-L-FPTP) and does not involve the drug troxipide or report its pharmacokinetic parameters. |
| popPK | Helmy_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of domperidone, not troxipide. |
| popPK | Inoue_2026 | irrelevant | 0 | 0 | The paper is a clinical case report regarding gastric emptying and endoscopy preparation, and does not contain any pharmacokinetic data for troxipide. |
| popPK | Itskovitz_1988 | irrelevant | 0 | 0 | The study investigates renal physiology and the effects of dopamine/serotonin precursors in rats, and does not involve troxipide or report its pharmacokinetic parameters. |
| popPK | Jagdale_2014 | irrelevant | 1 | 1 | The paper is a formulation study focusing on in vitro drug release and gastric retention, not a pharmacokinetic study, and only cites a half-life value without reporting original quantitative disposition parameters like clearance or volume. |
| popPK | Jung_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of chlorogenic acid and corydaline in rats, not troxipide. |
| popPK | Kadowaki_2023 | irrelevant | 2 | 0 | The study focuses on formulation development and local tissue concentration in a hamster model, reporting no systemic pharmacokinetic parameters (CL, V, ka) or compartmental models for troxipide. |
| popPK | Kessing_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of prucalopride on gastric emptying and esophageal motility, and does not report pharmacokinetic parameters for troxipide. |
| popPK | Kim_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mosapride, not troxipide. |
| popPK | Kim_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for YH12852, not troxipide. |
| popPK | Kuo_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ML-1035 (a gastroprokinetic agent), not troxipide. |
| popPK | Kusugami_2000 | irrelevant | 1 | 0 | The study focuses on in-vitro pharmacological effects on neutrophils and does not report quantitative population pharmacokinetic parameters (CL, V, etc.) for troxipide. |
| popPK | Lee_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for DA-6886, not troxipide. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study reporting the synthesis of nonnatural amino esters, with troxipide mentioned only as a substrate for late-stage elaboration, and contains no pharmacokinetic data. |
| PD | Li_2019 | not_relevant | 0 | 0 | The paper is a synthetic chemistry study reporting the synthesis of nonnatural amino esters and mentions troxipide only as a substrate for late-stage elaboration, without providing any pharmacodynamic or exposure-response data for troxipide. |
| popPK | Lu_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on troxipide analogs for antitumor activity and does not report any pharmacokinetic parameters. |
| popPK | Magnussen_1979 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 5-hydroxytryptophan, not troxipide. |
| popPK | Margolis_2016 | irrelevant | 0 | 0 | The paper is a mechanistic study on serotonin transporter variants and gastrointestinal function in mice, with no mention of troxipide or pharmacokinetic parameters. |
| popPK | Matsui_2001 | irrelevant | 0 | 0 | Troxipide is used only as a radical scavenger in a mechanistic study of gastric injury, with no pharmacokinetic parameters reported. |
| popPK | Momo_1994 | irrelevant | 0 | 0 | The paper is a pharmacological study on gastric mucosal protection and does not report any pharmacokinetic parameters for troxipide. |
| popPK | Nakamura_1997 | irrelevant | 0 | 0 | The study investigates the effect of troxipide on mucin secretion in corneal epithelium (in vitro/in vivo) and does not report any pharmacokinetic parameters. |
| popPK | Nzakizwanayo_2015 | irrelevant | 0 | 0 | The paper investigates the effect of E. coli Nissle on serotonin (5-HT) bioavailability in gut tissues and does not involve the drug troxipide or report any pharmacokinetic parameters for it. |
| popPK | Onuma_2016 | irrelevant | 0 | 0 | The study is a mechanistic investigation of gastric mucosal protectants on intestinal tumorigenesis in mice, with troxipide serving only as a comparator agent in in-vitro assays and no pharmacokinetic parameters reported. |
| popPK | Otake_2026 | irrelevant | 2 | 0 | The study focuses on formulation development and therapeutic efficacy in a dry eye model, reporting qualitative retention improvements rather than quantitative pharmacokinetic parameters like clearance or volume. |
| popPK | Otake_2026_2 | irrelevant | 2 | 1 | The study focuses on formulation development and therapeutic efficacy in a dry eye model, reporting only AUC and qualitative transfer data without standard compartmental PK parameters (CL, V, ka) for troxipide. |
| popPK | Pierce_2015 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of revexepride (SSP-002358), not troxipide. |
| popPK | Raka_2024 | irrelevant | 0 | 0 | The study investigates the role of serotonin in fat absorption in hamsters and does not involve troxipide or report any pharmacokinetic parameters for it. |
| popPK | Ramakrishna_2005 | irrelevant | 0 | 0 | The study focuses on the development of an assay for mosapride, not troxipide, and does not report any pharmacokinetic parameters for the target drug. |
| popPK | Ruth_2003 | irrelevant | 0 | 0 | The study evaluates the pharmacodynamic effects of mosapride and cisapride on oesophageal motor function and acid reflux, and does not report pharmacokinetic parameters for troxipide. |
| popPK | Sekiguchi_1987 | irrelevant | 0 | 0 | The paper is a pharmacological study on gastric mucosal protection (cytoprotection) and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for troxipide. |
| popPK | Shi_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of jatrorrhizine, not troxipide. |
| popPK | Smarius_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 5-hydroxytryptophan (5-HTP), not troxipide. |
| popPK | Tack_2015 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of revexepride on reflux parameters and does not report pharmacokinetic parameters for troxipide. |
| popPK | Terry_1998 | irrelevant | 0 | 0 | The study focuses on the 5-HT4 receptor agonist RS 17017, not troxipide. |
| popPK | Wang_1993 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of troxipide on gastric ulcers in rats and does not report any pharmacokinetic parameters. |
| popPK | Westenberg_1982 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 5-hydroxytryptophan (5-HTP), not troxipide. |
| popPK | Winter_2013 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for prucalopride, not troxipide. |
| popPK | Xu_2021 | irrelevant | 0 | 0 | The paper is a plant metabolomics study of soapberry pericarp where troxipide is identified as a natural metabolite, not a pharmacokinetic study of the drug. |
| popPK | Zhao_2018 | irrelevant | 0 | 0 | The study investigates MP3950, not troxipide. |
| popPK | Zhou_2007 | irrelevant | 0 | 0 | The paper is a review of drug metabolism in gastrointestinal disease classes and does not report quantitative pharmacokinetic parameters for troxipide. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_troxipide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
