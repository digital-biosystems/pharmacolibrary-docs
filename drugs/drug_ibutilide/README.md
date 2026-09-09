# ibutilide

- **generic name:** ibutilide
- **ATC codes:** `C01BD05`
- **DrugBank:** [DB00308](https://go.drugbank.com/drugs/DB00308)
- **groups:** approved

## About

**Description.** Ibutilide is a Class III antiarrhythmic agent available in intravenous formulations. It is indicated for the conversion of acute atrial flutter and recent onset atrial fibrillation to normal sinus rhythm (NSR).

**Indication.** Indicated for the rapid conversion of atrial fibrillation or atrial flutter of recent onset to sinus rhythm.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 10:28 | 11:32 | 0/0/0 | 2/0/0 | 0/0/0 | 114,351/3,486 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 1/8 | 7/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [McBride_2009](drugs/drug_ibutilide/pd_McBride_2009_IKr_block.md) | McBride (2009) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tisdale_2012](drugs/drug_ibutilide/pd_Tisdale_2012_QTF.md) | Tisdale JE et al., Enhanced sensitivity to drug-induced QT…, Journal of clinical pharmac… (2012) | [10.1177/0091270011416939](https://doi.org/10.1177/0091270011416939) |

## Coverage

- **PubMed hits:** 31 matched, 31 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2007.pdf` | Li Y et al., Pharmacokinetic and pharmacodynamic pro…, Clinical therapeutics (2007) | popPK | 10 | [10.1016/j.clinthera.2007.09.010](https://doi.org/10.1016/j.clinthera.2007.09.010) | [18035195](https://pubmed.ncbi.nlm.nih.gov/18035195) | The study reports quantitative PK parameters (t1/2, CL, Vd) for ibutilide in the text. |
| `Zeng_2017.pdf` | Zeng Z et al., Population Pharmacokinetic/Pharmacodyna…, Clinical therapeutics (2017) | popPK | 10 | [10.1016/j.clinthera.2017.05.349](https://doi.org/10.1016/j.clinthera.2017.05.349) | [28624123](https://pubmed.ncbi.nlm.nih.gov/28624123) | The title confirms a population PK/PD study of ibutilide, but the provided evidence contains only the title and no numeric parameter values. |
| `Simó-Vicens_2017.pdf` | Simó-Vicens R et al., Effect of antiarrhythmic drugs on small…, European journal of pharmac… (2017) | pd | 5 | [10.1016/j.ejphar.2017.03.039](https://doi.org/10.1016/j.ejphar.2017.03.039) | [28322838](https://www.ncbi.nlm.nih.gov/pubmed/28322838) | metadata signals extractable PD data (IC50) |
| `Yang_1995.pdf` | Yang T et al., Ibutilide, a methanesulfonanilide antia…, Circulation (1995) | pd | 4 | [10.1161/01.cir.91.6.1799](https://doi.org/10.1161/01.cir.91.6.1799) | [7882490](https://www.ncbi.nlm.nih.gov/pubmed/7882490) | metadata signals extractable PD data (EC50) |
| `Yamreudeewong_2003.pdf` | Yamreudeewong W et al., Potentially significant drug interactio…, Drug safety (2003) | pgx | 7 | [10.2165/00002018-200326060-00004](https://doi.org/10.2165/00002018-200326060-00004) | [12688833](https://www.ncbi.nlm.nih.gov/pubmed/12688833) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-09-09T10:26:45.798229+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amos_2001 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of H 345/52 with ibutilide serving only as a comparator for proarrhythmic potential, and no pharmacokinetic parameters are reported. |
| popPK | Bai_2025 | irrelevant | 0 | 0 | The paper is a computational study on sex-specific classification of antiarrhythmic drugs using machine learning and does not report pharmacokinetic parameters for ibutilide. |
| PD | Bai_2025 | not_relevant | 3 | 2 | The paper uses in silico simulations with fixed IC50 values to classify drugs via machine learning, but does not report a fitted exposure-response curve or derived PD parameters (like Emax or slope) for ibutilide. |
| popPK | Brandts_2004 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel inhibition (IC50) in rat myocytes, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy that does not mention ibutilide or report any pharmacokinetic parameters for it. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any specific pharmacodynamic or exposure-response data for ibutilide. |
| popPK | Ellenbogen_1996 | irrelevant | 1 | 0 | The paper is a clinical efficacy study reporting arrhythmia termination rates and safety, with no quantitative pharmacokinetic parameters (CL, V, t1/2) reported for ibutilide. |
| popPK | Gallik_1997 | irrelevant | 0 | 0 | The paper is a review of pharmacologic cardioversion efficacy and mechanisms, containing no quantitative pharmacokinetic parameters for ibutilide. |
| PD | Gallik_1997 | not_relevant | 1 | 0 | The text is a review introduction that qualitatively discusses ibutilide's mechanism and cites general conversion rates from other trials, but it does not report any specific exposure-response or dose-response analysis with numeric PD parameters. |
| popPK | Greenberg_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for moxifloxacin, not ibutilide, which is only mentioned as a concomitant medication of interest. |
| PD | Greenberg_2022 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of moxifloxacin in children and does not report any pharmacodynamic or exposure-response relationship for ibutilide. |
| popPK | Gualdani_2015 | irrelevant | 0 | 0 | The paper investigates the hERG channel blocking properties of mexiletine and its metabolite, not the pharmacokinetics of ibutilide. |
| PD | Gualdani_2015 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of mexiletine and its metabolite on hERG channels, not ibutilide. |
| popPK | Lago_2022 | irrelevant | 0 | 0 | The paper is a review on schizophrenia drug targets that mentions ibutilide only as a potential repurposing candidate for KV channels, without reporting any pharmacokinetic parameters. |
| PD | Lago_2022 | not_relevant | 0 | 0 | The paper is a review on the druggable schizophrenia genome and does not contain any pharmacodynamic or exposure-response data for ibutilide. |
| popPK | Lin_2008 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of HERG channel inhibition, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Marks_1996 | irrelevant | 1 | 0 | The paper is a developmental toxicity study in rats and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for ibutilide. |
| PD | Marks_1996 | not_relevant | 3 | 2 | The paper reports a qualitative dose-response relationship for teratogenicity (malformation rates) at specific doses, but it does not provide concentration-effect data, PK parameters, or numeric PD model parameters (e.g., EC50, Emax) required for extractable pharmacodynamic modeling. |
| popPK | McBride_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of MDR1 polymorphisms on ibutilide-induced HERG block in CHO cells, reporting IC50 values for channel blockade rather than pharmacokinetic disposition parameters like clearance or volume. |
| popPK | McBride_2009_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter-mediated channel block, not a pharmacokinetic study, and ibutilide is only a secondary probe drug without any PK parameters reported. |
| popPK | Perry_2006 | irrelevant | 0 | 0 | The paper is a mechanistic study of hERG channel binding and structure-activity relationships, not a pharmacokinetic study, and contains no disposition parameters for ibutilide. |
| popPK | Reiffel_2000 | irrelevant | 0 | 0 | The study is a mechanistic/clinical trial investigating QTc prolongation and drug interactions, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for ibutilide. |
| popPK | Serrano_2023 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on proarrhythmia risk using deep learning and does not report pharmacokinetic parameters for ibutilide. |
| PD | Serrano_2023 | not_relevant | 0 | 0 | The paper describes a deep learning platform for predicting proarrhythmia risk using iPSC-CMs and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for ibutilide. |
| popPK | Simó-Vicens_2017 | irrelevant | 0 | 0 | The paper title indicates a mechanistic study on ion channels, not a pharmacokinetic study, and no PK parameters for ibutilide are present in the evidence. |
| PD | Simó-Vicens_2017 | not_relevant | 0 | 0 | The paper focuses on the electrophysiological effects of antiarrhythmic drugs on ion channels and does not report pharmacokinetic or pharmacodynamic modeling (exposure-response or dose-response) for ibutilide. |
| popPK | Tisdale_2012 | relevant | 8 | 2 | The study fits the criteria as it uses a 2-compartment PK model for ibutilide, but the specific numeric PK parameter values (CL, V, t1/2) are not present in the text, likely residing in the referenced Table II or Supplementary Figure S1. |
| popPK | Wesley_1993 | irrelevant | 0 | 0 | The study is a mechanistic/efficacy investigation of defibrillation in dogs and does not report pharmacokinetic parameters for ibutilide. |
| popPK | Yamreudeewong_2003 | irrelevant | 0 | 0 | The provided evidence contains only the title of a review on drug interactions, with no original pharmacokinetic data or numeric parameters for ibutilide. |
| PD | Yamreudeewong_2003 | not_relevant | 0 | 0 | The provided text is only a title regarding drug interactions of class III antiarrhythmics and contains no data, analysis, or numeric PD parameters for ibutilide. |
| PGx | Yamreudeewong_2003 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions of class III antiarrhythmics, not pharmacogenomic effects on ibutilide PK/PD. |
| popPK | Yang_1995 | irrelevant | 0 | 0 | The paper describes in-vitro electrophysiological mechanisms (IKr blockade) and does not report pharmacokinetic parameters. |
| PD | Yang_1995 | not_relevant | 0 | 0 | The provided text is only a title and abstract fragment describing the mechanism of action (IKr block) and dependencies, but it does not contain the full text, data, or numeric PD parameters (such as IC50 or Emax) required to extract a quantitative exposure-response relationship. |
| popPK | Yoo_2021 | irrelevant | 0 | 0 | The paper is an in silico study on proarrhythmicity classification using an artificial neural network and does not report pharmacokinetic parameters for ibutilide. |
| PD | Yoo_2021 | not_relevant | 0 | 0 | The paper focuses on an artificial neural network model for classifying proarrhythmic risk using in silico electrophysiological features and does not report a pharmacodynamic (exposure-response) model or numeric PD parameters (e.g., Emax, EC50) for ibutilide. |
| popPK | Zeng_2017 | relevant | 10 | 0 | The title confirms a population PK/PD study of ibutilide, but the provided evidence contains only the title and no numeric parameter values. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_ibutilide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
