# vernakalant

- **generic name:** vernakalant
- **ATC codes:** `C01BG11`
- **DrugBank:** [DB06217](https://go.drugbank.com/drugs/DB06217)
- **groups:** approved

## About

**Description.** Vernakalant was developed by Cardiome Pharma as as an antiarrhythmic drug intended for rapid conversion of atrial fibrillation to sinus rhythm. It acts as an atypical class III antiarrhythmic drug that potentiates its effect in higher heart rates. Intravenous formulation was approved in Europe in September 2010 as Brinavess and in Canada in April 2017. It is an investigational drug under regulatory review by FDA.

**Indication.** Indicated for the rapid conversion of recent onset of atrial fibrillation to sinus rhythm in adults for non-surgery patients that lasts for less than 7 days of duration and post-cardiac surgery patients with atrial fibrillation lasting less than 3 days of duration.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 12:29 | 4:56 | 0/0/0 | 0/0/0 | 0/0/0 | 13,531/1,631 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 23 matched, 23 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mao_2012.pdf` | Mao ZL et al., Population pharmacokinetics of vernakal…, Journal of clinical pharmac… (2012) | popPK | 10 | [10.1177/0091270011408425](https://doi.org/10.1177/0091270011408425) | [21659624](https://pubmed.ncbi.nlm.nih.gov/21659624) | The title confirms a population PK study of vernakalant, but the provided evidence contains only the title and no numeric parameter values. |
| `Simó-Vicens_2017.pdf` | Simó-Vicens R et al., Effect of antiarrhythmic drugs on small…, European journal of pharmac… (2017) | pd | 5 | [10.1016/j.ejphar.2017.03.039](https://doi.org/10.1016/j.ejphar.2017.03.039) | [28322838](https://www.ncbi.nlm.nih.gov/pubmed/28322838) | metadata signals extractable PD data (IC50) |
| `Eldstrom_2009.pdf` | Eldstrom J et al., Modeling of high-affinity binding of th…, Journal of molecular graphi… (2009) | pd | 4 | [10.1016/j.jmgm.2009.07.005](https://doi.org/10.1016/j.jmgm.2009.07.005) | [19713139](https://www.ncbi.nlm.nih.gov/pubmed/19713139) | metadata signals extractable PD data (IC50) |
| `Seyler_2014.pdf` | Seyler C et al., Vernakalant activates human cardiac K(2…, Biochemical and biophysical… (2014) | pd | 4 | [10.1016/j.bbrc.2014.07.133](https://doi.org/10.1016/j.bbrc.2014.07.133) | [25108155](https://www.ncbi.nlm.nih.gov/pubmed/25108155) | metadata signals extractable PD data (EC50) |
| `Sutanto_2019.pdf` | Sutanto H et al., Maastricht antiarrhythmic drug evaluato…, Pharmacological research (2019) | pd | 4 | [10.1016/j.phrs.2019.104444](https://doi.org/10.1016/j.phrs.2019.104444) | [31493513](https://www.ncbi.nlm.nih.gov/pubmed/31493513) | metadata signals extractable PD data (IC50) |
| `Wettwer_2013.pdf` | Wettwer E et al., The new antiarrhythmic drug vernakalant…, Cardiovascular research (2013) | pd | 4 | [10.1093/cvr/cvt006](https://doi.org/10.1093/cvr/cvt006) | [23341576](https://www.ncbi.nlm.nih.gov/pubmed/23341576) | metadata signals extractable PD data (IC50) |
| `Mao_2009.pdf` | Mao ZL et al., Pharmacokinetics of novel atrial-select…, Journal of clinical pharmac… (2009) | pgx | 8 | [10.1177/0091270008325148](https://doi.org/10.1177/0091270008325148) | [18927241](https://www.ncbi.nlm.nih.gov/pubmed/18927241) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Mao_2011.pdf` | Mao ZL et al., Disposition and mass balance of [14C]ve…, Drug metabolism letters (2011) | pgx | 8 | [10.2174/187231211795305249](https://doi.org/10.2174/187231211795305249) | [21457140](https://www.ncbi.nlm.nih.gov/pubmed/21457140) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-09-09T12:29:17.666151+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheng_2010 | irrelevant | 0 | 0 | The paper is a review of antiarrhythmic and anticoagulant agents that discusses vernakalant qualitatively but does not report any quantitative pharmacokinetic parameters. |
| PD | Cheng_2010 | not_relevant | 1 | 0 | The text is a review summary that qualitatively describes vernakalant's mechanism and efficacy but does not provide any numeric PD parameters, dose-response curves, or PK/PD modeling data. |
| popPK | Eldstrom_2007 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of channel binding and does not report pharmacokinetic parameters. |
| popPK | Eldstrom_2009 | irrelevant | 0 | 0 | The paper focuses on in-vitro binding to Kv1.5 channels and does not report pharmacokinetic disposition parameters for vernakalant. |
| popPK | Mao_2011 | irrelevant | 2 | 0 | The paper reports population PK/PD parameters (EC50, Emax) for pharmacodynamic endpoints (QTcF, SBP) but does not provide quantitative disposition parameters (CL, V, ka) for vernakalant. |
| PGx | Mao_2011_2 | not_relevant | 0 | 0 | The paper describes the disposition and mass balance of vernakalant in healthy volunteers but does not report any pharmacogenomic effects or gene variant analyses. |
| popPK | Mao_2012 | relevant | 10 | 0 | The title confirms a population PK study of vernakalant, but the provided evidence contains only the title and no numeric parameter values. |
| popPK | Seoane_2015 | irrelevant | 2 | 0 | The paper is a review article analyzing vernakalant's PK/PD, but the provided evidence contains no original quantitative disposition parameters or numeric values. |
| PD | Seoane_2015 | not_relevant | 2 | 1 | The text is a review summary that mentions the aim to analyze PK/PD but does not provide specific numeric PD parameters or exposure-response data in the provided excerpt. |
| popPK | Seyler_2014 | irrelevant | 0 | 0 | The paper describes a mechanistic electrophysiological effect (channel activation) and contains no pharmacokinetic parameters or quantitative disposition data for vernakalant. |
| PD | Seyler_2014 | not_relevant | 0 | 0 | The paper describes the molecular mechanism of action (activation of K2P17.1 channels) but does not report pharmacokinetic data, exposure-response relationships, or numeric PD parameters (e.g., EC50, Emax) for vernakalant in a physiological or clinical context. |
| popPK | Simó-Vicens_2017 | irrelevant | 0 | 0 | The paper title indicates a mechanistic study on ion channels, not a pharmacokinetic study reporting quantitative disposition parameters for vernakalant. |
| PD | Simó-Vicens_2017 | not_relevant | 0 | 0 | The paper discusses the effect of antiarrhythmic drugs on ion channels but does not report specific pharmacodynamic or exposure-response data for vernakalant. |
| popPK | Sutanto_2019 | irrelevant | 0 | 0 | The paper describes a computational tool for antiarrhythmic drugs and does not report original quantitative pharmacokinetic parameters for vernakalant. |
| PD | Sutanto_2019 | not_relevant | 0 | 0 | The paper describes a computational tool (MANTA) for evaluating antiarrhythmic drugs but does not report specific pharmacodynamic or exposure-response data for vernakalant. |
| popPK | Tikhonov_2014 | irrelevant | 0 | 0 | The paper is a mechanistic homology modeling study of channel binding, not a pharmacokinetic study, and contains no disposition parameters. |
| PD | Tikhonov_2014 | not_relevant | 0 | 0 | The paper focuses on homology modeling and molecular docking of vernakalant in the Kv1.5 channel, providing structural insights rather than pharmacodynamic or exposure-response data. |
| popPK | Wettwer_2013 | irrelevant | 0 | 0 | The paper is an ex vivo electrophysiology study of human atrial tissue, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_vernakalant`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
