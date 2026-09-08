# dextropropoxyphene

- **generic name:** dextropropoxyphene
- **ATC codes:** `N02AC04`
- **DrugBank:** [DB00647](https://go.drugbank.com/drugs/DB00647)
- **groups:** approved, illicit, withdrawn

## About

**Description.** Dextropropoxyphene is an opioid analgesic manufactured by Eli Lilly and Company. It is used in the symptomatic treatment of mild pain. It displays antitussive and local anaesthetic actions. Due to the risk of cardiac arrhythmias and overdose, possibly leading to death, dextropropoxyphene has been withdrawn from the market in Europe and the United States. The drug is often referred to as the general form, "propoxyphene", however only the dextro-isomer (dextropropoxyphene) has any analgesic effect. The levo-isomer appears to exhibit a very limited antitussive effect.

**Indication.** For the relief of mild to moderate pain.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 15:56 | 20:40 | 0/0/0 | 0/0/0 | 0/0/0 | 132,343/1,701 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 0/0 | 8/1 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 100 matched, 77 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Choi_1988.pdf` | Choi DW et al., Opioids and non-opioid enantiomers sele…, European journal of pharmac… (1988) | pd | 5 | [10.1016/0014-2999(88)90399-8](https://doi.org/10.1016/0014-2999(88)90399-8) | [3072212](https://www.ncbi.nlm.nih.gov/pubmed/3072212) | metadata signals extractable PD data (EC50) |
| `Wu_1994.pdf` | Wu C et al., Interaction between ethanol and opioids…, Human & experimental toxico… (1994) | pd | 4 | [10.1177/096032719401300301](https://doi.org/10.1177/096032719401300301) | [7909674](https://www.ncbi.nlm.nih.gov/pubmed/7909674) | metadata signals extractable PD data (EC50) |
| `Somogyi_2004.pdf` | Somogyi AA et al., CYP3A4 mediates dextropropoxyphene N-de…, Xenobiotica; the fate of fo… (2004) | pgx | 8 | [10.1080/00498250400008371](https://doi.org/10.1080/00498250400008371) | [15764408](https://www.ncbi.nlm.nih.gov/pubmed/15764408) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yin_2010.pdf` | Yin OQ et al., CYP3A5 but not CYP2D6 polymorphism cont…, Journal of clinical pharmac… (2010) | pgx | 8 | [10.1177/0091270009359006](https://doi.org/10.1177/0091270009359006) | [20133509](https://www.ncbi.nlm.nih.gov/pubmed/20133509) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Armstrong_2009.pdf` | Armstrong SC et al., Pharmacokinetic drug interactions of sy…, Psychosomatics (2009) | pgx | 7 | [10.1176/appi.psy.50.2.169](https://doi.org/10.1176/appi.psy.50.2.169) | [19377028](https://www.ncbi.nlm.nih.gov/pubmed/19377028) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Raungrut_2010.pdf` | Raungrut P et al., In vitro-in vivo extrapolation predicts…, The Journal of pharmacology… (2010) | pgx | 7 | [10.1124/jpet.110.167916](https://doi.org/10.1124/jpet.110.167916) | [20484152](https://www.ncbi.nlm.nih.gov/pubmed/20484152) | metadata signals extractable PGX data (UGT2B4, PK/PD-context) |
| `Spina_1996.pdf` | Spina E et al., Clinically significant pharmacokinetic…, Clinical pharmacokinetics (1996) | pgx | 7 | [10.2165/00003088-199631030-00004](https://doi.org/10.2165/00003088-199631030-00004) | [8877250](https://www.ncbi.nlm.nih.gov/pubmed/8877250) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Spigset_1997.pdf` | Spigset O et al., Seizures and myoclonus associated with…, Acta psychiatrica Scandinav… (1997) | pgx | 5 | [10.1111/j.1600-0447.1997.tb09933.x](https://doi.org/10.1111/j.1600-0447.1997.tb09933.x) | [9395157](https://www.ncbi.nlm.nih.gov/pubmed/9395157) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-08-27T15:51:05.080022+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bonnet_2003 | not_relevant | 0 | 0 | The paper is a review of moclobemide's therapeutic use and does not report pharmacogenomic effects on dextropropoxyphene PK/PD parameters. |
| PGx | Cottrill_2021 | not_relevant | 0 | 0 | The paper reports genotype-phenotype classifications (e.g., poor/intermediate metabolizer) and lists dextropropoxyphene as a drug metabolized by CYP3A4/3A5, but it does not report specific pharmacokinetic or pharmacodynamic parameter values (e.g., AUC, Cmax, ED50) or quantitative effect sizes for dextropropoxyphene. |
| popPK | Jordan_2023 | irrelevant | 0 | 0 | The paper is a systematic scoping review of databases regarding breastfeeding and infant outcomes, not a pharmacokinetic study, and dextropropoxyphene is only mentioned as a drug associated with adverse events in one cited study without any PK parameters. |
| PD | Jordan_2023 | not_relevant | 0 | 0 | The paper is a systematic scoping review of databases regarding breastfeeding and medicine exposure; it does not report any specific pharmacodynamic or exposure-response analysis for dextropropoxyphene. |
| PGx | Kerry_1994 | not_relevant | 0 | 0 | The paper studies the metabolism of dextromethorphan; dextropropoxyphene is only used as an inhibitor in the assays, not as the drug of interest for pharmacogenomic PK/PD analysis. |
| popPK | Koski_2003 | irrelevant | 0 | 0 | The paper is a forensic toxicology study analyzing postmortem blood concentrations in fatal poisonings, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Mannheimer_2010 | not_relevant | 0 | 0 | The paper is a pharmacoepidemiological study analyzing prescribing patterns and adherence to drug interaction labels, not a pharmacogenomic study measuring PK/PD parameters. |
| popPK | McQuay_1998 | irrelevant | 0 | 0 | The paper is a systematic review of analgesic efficacy and safety, not a pharmacokinetic study, and contains no quantitative disposition parameters for dextropropoxyphene. |
| PD | McQuay_1998 | not_relevant | 1 | 0 | The paper is a systematic review of clinical trials for postoperative analgesia and vomiting, focusing on efficacy and safety outcomes rather than pharmacokinetic or pharmacodynamic modeling; it does not report numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves for dextropropoxyphene. |
| popPK | Milligan_2002 | irrelevant | 0 | 0 | The provided text is corrupted with encoding errors (cid characters) and contains no readable information regarding dextropropoxyphene or pharmacokinetic parameters. |
| PD | Milligan_2002 | not_relevant | 0 | 0 | The provided text is garbled and does not contain readable information regarding dextropropoxyphene or any pharmacodynamic parameters. |
| popPK | Schmidli_2005 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for imatinib, not dextropropoxyphene. |
| PD | Schmidli_2005 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of imatinib, not dextropropoxyphene, and contains no pharmacodynamic (PD) or exposure-response modeling for the target drug. |
| popPK | Tyers_1980 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of antinociception (pain relief) in animals, not a pharmacokinetic study, and reports no disposition parameters for dextropropoxyphene. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The paper is a collection of intensive care meeting abstracts and does not contain any pharmacokinetic data or parameters for dextropropoxyphene. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The paper consists of meeting abstracts regarding ICU diagnostics (viral PCR, citrulline, procalcitonin) and does not mention dextropropoxyphene or any pharmacodynamic modeling. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dextropropoxyphene`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
