# zolimidine

- **generic name:** zolimidine
- **ATC codes:** `A02BX10`
- **DrugBank:** [DB13593](https://go.drugbank.com/drugs/DB13593)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 21:58 | 4:06 | 0/0/0 | 0/0/0 | 0/0/0 | 24,296/2,044 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 3/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 3 matched, 21 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schraven_1976.pdf` | Schraven E et al., [The pharmacokinetics of 14C-zolimidine…, Arzneimittel-Forschung (1976) | popPK | 9 | not captured | [947201](https://pubmed.ncbi.nlm.nih.gov/947201) | The paper describes a 3-compartment PK model for zolimidine in rats, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided text, only qualitative descriptions and absorption percentages. |

<sub>queue written 2026-09-10T21:58:41.926965+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abate_1982 | irrelevant | 0 | 0 | The study investigates the mechanism of action (mucopoietic activity and blood flow) rather than pharmacokinetic disposition parameters. |
| popPK | Almirante_1974 | irrelevant | 2 | 0 | The paper focuses on the chemical structure of metabolites rather than reporting quantitative pharmacokinetic parameters like clearance or volume. |
| popPK | Almirante_1974_2 | irrelevant | 2 | 0 | The evidence consists only of the title indicating a metabolic fate study in rats, with no quantitative pharmacokinetic parameter values (CL, V, etc.) present in the provided text. |
| popPK | Belohlavek_1979 | irrelevant | 0 | 0 | The paper describes a clinical study on duodenal ulcer healing and does not report any pharmacokinetic parameters for zolimidine. |
| popPK | Bhutia_2020 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study describing the chemical synthesis of zolimidine, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Bombardelli_1983 | irrelevant | 0 | 0 | The study focuses on the analysis of gastric proteoglycans using gas chromatography and does not report any pharmacokinetic parameters for zolimidine. |
| popPK | Ghosh_2021 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study on C-H alkylation of zolimidine, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Guo_2023 | irrelevant | 0 | 0 | The paper is an organic chemistry study on the synthesis of imidazo[1,2-a]pyridines from lignin, mentioning zolimidine only as a structural example of a commercial drug, and contains no pharmacokinetic data. |
| popPK | Kamboj_2024 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study on the enzymatic synthesis of imidazopyridine derivatives and does not report any pharmacokinetic parameters for zolimidine. |
| popPK | Katsura_1991 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no pharmacokinetic data or text regarding zolimidine. |
| popPK | La_1980 | irrelevant | 0 | 0 | The paper describes an analytical method (HPLC) for quantifying zolimidine in dosage forms and contains no pharmacokinetic data or disposition parameters. |
| PD | La_1980 | not_relevant | 0 | 0 | The paper describes a high-performance liquid chromatography method for analyzing zolimidine in dosage forms and contains no pharmacodynamic or exposure-response data. |
| popPK | Ostrowski_1976 | irrelevant | 2 | 0 | The study is a qualitative autoradiographic distribution study in rats that reports only relative tissue concentrations and an estimated absorption percentage, without providing quantitative compartmental PK parameters (CL, V, ka, t1/2) for zolimidine. |
| popPK | Parodi_1984 | irrelevant | 0 | 0 | The study investigates the effect of zolimidine on gastric mucus secretion and does not report any pharmacokinetic parameters. |
| popPK | Prasher_2022 | irrelevant | 0 | 0 | The paper focuses on the chemical synthesis and regioselectivity of imidazo[1,2-a]pyridines, not on the pharmacokinetics of zolimidine. |
| popPK | Rizzi_1975 | irrelevant | 0 | 0 | The paper title indicates a clinical evaluation of symptomatic effects, not a pharmacokinetic study, and no quantitative PK parameters are present in the evidence. |
| popPK | Schraven_1976 | relevant | 9 | 2 | The paper describes a 3-compartment PK model for zolimidine in rats, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided text, only qualitative descriptions and absorption percentages. |
| popPK | Song_2026 | irrelevant | 0 | 0 | The paper describes a chemical synthesis method (C-H arylation) for zolimidine derivatives, not a pharmacokinetic study. |
| popPK | Tali_2023 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study describing the synthesis of imidazo[1,2-a]pyridines and late-stage functionalization of zolimidine, containing no pharmacokinetic data. |
| popPK | Tyagi_2024 | irrelevant | 0 | 0 | The paper is a review of copper-based pyridine derivatives and synthetic methods, mentioning zolimidine only as a market example without providing any pharmacokinetic data. |
| popPK | Zhou_2018 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study describing the fluorination of zolimidine, not a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_zolimidine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
