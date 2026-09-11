# propantheline

- **generic name:** propantheline
- **ATC codes:** `A03AB05`, `A03CA34`
- **DrugBank:** [DB00782](https://go.drugbank.com/drugs/DB00782)
- **groups:** approved

## About

**Description.** A muscarinic antagonist used as an antispasmodic, in rhinitis, in urinary incontinence, and in the treatment of ulcers. At high doses it has nicotinic effects resulting in neuromuscular blocking.

**Indication.** For the treatment of enuresis. It has also been used for hyperhidrosis, and cramps or spasms of the stomach, intestines or bladder.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 23:30 | 5:09 | 0/0/0 | 2/1/0 | 0/0/0 | 53,399/2,315 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/4 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Sadraei_2013](drugs/drug_propantheline/pd_Sadraei_2013_ileum_contraction.md) | Sadraei H et al., Antispasmodic effects of Prangos ferula…, Research in pharmaceutical… (2013) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sadraei_2014](drugs/drug_propantheline/pd_Sadraei_2014_tension_development.md) | Sadraei H et al., Antispasmodic activity of isovanillin a…, Research in pharmaceutical… (2014) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Chiu_2008](drugs/drug_propantheline/pd_Chiu_2008_unknown.md) | Chiu LL et al., Using the zebrafish lateral line to scr…, Journal of the Association… (2008) | [10.1007/s10162-008-0118-y](https://doi.org/10.1007/s10162-008-0118-y) |

## Coverage

- **PubMed hits:** 24 matched, 24 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rigby_1983.pdf` | Rigby GV et al., Propantheline bromide plasma level, uri…, European journal of drug me… (1983) | popPK | 8 | [10.1007/BF03188751](https://doi.org/10.1007/BF03188751) | [6689152](https://pubmed.ncbi.nlm.nih.gov/6689152) | The study is a pharmacokinetic bioavailability comparison for propantheline, but the provided evidence contains only qualitative results and p-values, with no specific numeric PK parameters (e.g., CL, V, t1/2) listed. |
| `Alberts_1995.pdf` | Alberts P, Classification of the presynaptic musca…, The Journal of pharmacology… (1995) | pd | 4 | not captured | [7616431](https://www.ncbi.nlm.nih.gov/pubmed/7616431) | metadata signals extractable PD data (EC50) |
| `Guay_2003.pdf` | Guay DR, Clinical pharmacokinetics of drugs used…, Clinical pharmacokinetics (2003) | pgx | 8 | [10.2165/00003088-200342140-00004](https://doi.org/10.2165/00003088-200342140-00004) | [14606931](https://www.ncbi.nlm.nih.gov/pubmed/14606931) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-09-10T23:29:25.209933+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alberts_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of muscarinic receptors in guinea pig bladder tissue and does not report pharmacokinetic parameters for propantheline. |
| popPK | Chiu_2008 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo ototoxicity screening assay measuring hair cell loss, not a pharmacokinetic study, and reports no disposition parameters for propantheline. |
| popPK | Dajani_1978 | irrelevant | 1 | 0 | The study focuses on pharmacodynamic efficacy (gastric secretion inhibition) and relative potency, reporting no quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Dajani_1979 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of propantheline on stress ulcer formation in rats and does not report any pharmacokinetic parameters. |
| PD | Dajani_1979 | not_relevant | 4 | 2 | The paper reports a dose-response relationship and relative potency ratios (10x, 44x) but does not provide specific numeric PD parameters (like ED50, Emax, or concentration values) or a detailed curve from which they can be derived. |
| popPK | Dajani_1979_2 | irrelevant | 0 | 0 | The study is a pharmacological investigation of diarrhea mechanisms in mice where propantheline is used as an antidiarrheal agent, not a pharmacokinetic study reporting disposition parameters. |
| PD | Dajani_1979_2 | not_relevant | 2 | 1 | The paper describes qualitative dose-dependent effects and attenuation by propantheline but does not provide numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect curves for propantheline. |
| popPK | Forrest_1982 | irrelevant | 0 | 0 | The paper is a review of paracetamol pharmacokinetics, and propantheline is only mentioned as a co-administered agent that delays paracetamol absorption, with no PK parameters reported for propantheline itself. |
| popPK | Freijer_2007 | irrelevant | 1 | 0 | The study focuses on paracetamol as the subject drug, with propantheline used only as a co-administered agent to delay gastric emptying, and no specific PK parameters for propantheline are reported. |
| PD | Freijer_2007 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic absorption modeling of paracetamol using the convection-dispersion equation and does not contain any data or analysis for propantheline or any pharmacodynamic (exposure-response) relationships. |
| popPK | Gibaldi_1975 | irrelevant | 2 | 0 | The study reports pharmacodynamic effects (salivary flow) rather than quantitative pharmacokinetic parameters (CL, V, ka) for propantheline. |
| PD | Gibaldi_1975 | not_relevant | 3 | 1 | The text describes qualitative dose-response observations (15mg vs 30mg) and food effects in 3 subjects but does not provide numeric concentration-effect data, Emax/EC50 parameters, or a quantitative PD model. |
| PGx | Guay_2003 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for tolterodine (CYP2D6/3A4) but only provides a general review of propantheline without reporting any gene-variant specific PK/PD effects. |
| popPK | Hough_1981 | irrelevant | 0 | 0 | The paper investigates the pharmacological mechanism (H2-receptor antagonism) of propantheline in vitro and does not report any pharmacokinetic parameters. |
| PD | Hough_1981 | not_relevant | 2 | 1 | The text describes qualitative inhibition and competitive antagonism but does not provide numeric PD parameters (e.g., Ki, IC50, Emax) or extractable concentration-effect curves for propantheline. |
| popPK | Hu_2018 | irrelevant | 0 | 0 | The study focuses on machine learning models for digoxin dosage prediction and does not involve propantheline or report its pharmacokinetic parameters. |
| PD | Hu_2018 | not_relevant | 0 | 0 | The paper focuses on machine learning for digoxin dosage prediction and does not contain any pharmacodynamic or exposure-response analysis for propantheline. |
| popPK | Rigby_1983 | relevant | 8 | 0 | The study is a pharmacokinetic bioavailability comparison for propantheline, but the provided evidence contains only qualitative results and p-values, with no specific numeric PK parameters (e.g., CL, V, t1/2) listed. |
| PD | Rigby_1983 | not_relevant | 2 | 1 | The study compares bioavailability using pharmacodynamic endpoints (salivary flow, heart rate) but does not report a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Sadraei_2013 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of antispasmodic effects on rat ileum, not a pharmacokinetic study, and propantheline is used only as a comparator agent. |
| popPK | Sadraei_2014 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay on rat ileum where propantheline is used only as a reference comparator, and no pharmacokinetic parameters are reported. |
| popPK | Yarker_1995 | irrelevant | 0 | 0 | The paper is a review of oxybutynin, and propantheline is only mentioned as a comparator agent without any quantitative pharmacokinetic parameters provided. |
| PD | Yarker_1995 | not_relevant | 1 | 0 | The text is a qualitative review of oxybutynin that mentions propantheline only for comparative efficacy without providing any numeric PD parameters or exposure-response data. |
| popPK | Yu_1997 | irrelevant | 0 | 0 | The study focuses on clinical efficacy and pharmacodynamics (heart rate, blood pressure) in neurocardiogenic syncope, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Yu_1997 | not_relevant | 2 | 1 | The study reports clinical efficacy and hemodynamic changes (heart rate, blood pressure) before and after treatment, but it does not provide plasma concentration data or fit a pharmacodynamic model to derive numeric parameters like Emax or EC50. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_propantheline`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
