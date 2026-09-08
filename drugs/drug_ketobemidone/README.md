# ketobemidone

- **generic name:** ketobemidone
- **ATC codes:** `N02AB01`, `N02AG02`
- **DrugBank:** [DB06738](https://go.drugbank.com/drugs/DB06738)
- **groups:** investigational

## About

**Description.** Ketobemidone is a powerful opioid analgesic. It also has some NMDA-antagonist properties. This makes it useful for some types of pain that don't respond well to other opioids. The most commonly cited equalisation ratio for analgesic doses is 25 mg of ketobemidone hydrobromide to 60 mg of morphine hydrochloride or sulfate and circa 8 mg of ketobemidone by injection.

**Indication.** For the treatment of all types of severe pain, such as postoperative, cancer, kidney stones and fractures.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 21:19 | 3:58 | 0/0/0 | 0/1/0 | 0/0/0 | 24,397/852 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 2/5 | 6/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Vandeputte_2023](drugs/drug_ketobemidone/pd_Vandeputte_2023_unknown.md) | Vandeputte MM et al., Detection, chemical analysis, and pharm…, Analytical and bioanalytica… (2023) | [10.1007/s00216-023-04722-7](https://doi.org/10.1007/s00216-023-04722-7) |

## Coverage

- **PubMed hits:** 21 matched, 21 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ebert_1998.pdf` | Ebert B et al., Ketobemidone plus (RS)-3-dimethylamino-…, Pharmacology & toxicology (1998) | pd | 4 | [10.1111/j.1600-0773.1998.tb01417.x](https://doi.org/10.1111/j.1600-0773.1998.tb01417.x) | [9553996](https://www.ncbi.nlm.nih.gov/pubmed/9553996) | metadata signals extractable PD data (IC50) |
| `Vandeputte_2022.pdf` | Vandeputte MM et al., Characterization of recent non-fentanyl…, Archives of toxicology (2022) | pd | 4 | [10.1007/s00204-021-03207-9](https://doi.org/10.1007/s00204-021-03207-9) | [35072756](https://www.ncbi.nlm.nih.gov/pubmed/35072756) | metadata signals extractable PD data (EC50) |
| `Al-Shurbaji_2002.pdf` | Al-Shurbaji A et al., The pharmacokinetics of ketobemidone ar…, European journal of clinica… (2002) | pgx | 8 | [10.1007/s00228-001-0413-6](https://doi.org/10.1007/s00228-001-0413-6) | [11936707](https://www.ncbi.nlm.nih.gov/pubmed/11936707) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Yasar_2005.pdf` | Yasar U et al., Ketobemidone is a substrate for cytochr…, Xenobiotica; the fate of fo… (2005) | pgx | 5 | [10.1080/00498250500183181](https://doi.org/10.1080/00498250500183181) | [16278191](https://www.ncbi.nlm.nih.gov/pubmed/16278191) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-08-27T21:18:20.726901+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Cottrill_2021 | not_relevant | 0 | 0 | The paper reports genotype-phenotype classifications (e.g., poor/intermediate metabolizer) and metabolic pathways for ketobemidone, but it does not report measured pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, pain scores) or quantitative effect sizes. |
| popPK | Karlsen_2025 | irrelevant | 0 | 0 | The paper is a protocol for a machine learning study on opioid dosing and does not report pharmacokinetic parameters for ketobemidone. |
| PD | Karlsen_2025 | not_relevant | 0 | 0 | The paper is a protocol for validating a machine learning algorithm for opioid dosing and does not report any pharmacodynamic parameters, concentration-effect relationships, or dose-response curves for ketobemidone. |
| popPK | Pai_2026 | irrelevant | 0 | 0 | The paper is a review on extemporaneous compounding for pediatric patients and does not contain any pharmacokinetic data or parameters for ketobemidone. |
| PD | Pai_2026 | not_relevant | 0 | 0 | The paper is a review on extemporaneous formulations for pediatric patients and does not contain any pharmacodynamic or exposure-response data for ketobemidone. |
| popPK | Pereira_2015 | irrelevant | 0 | 0 | The study is a protocol for a naloxone infusion trial where ketobemidone is only mentioned as a substance in a urine drug screen exclusion criterion, with no pharmacokinetic data reported. |
| PD | Pereira_2015 | not_relevant | 0 | 0 | The paper is a study protocol for a trial involving naloxone, not ketobemidone, and contains no reported results or PD parameters. |
| popPK | Persson_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of codeine, and ketobemidone is only mentioned as a rescue medication for one patient, with no PK parameters reported for it. |
| PD | Persson_1995 | not_relevant | 0 | 0 | The paper studies codeine, not ketobemidone, and does not report a concentration-effect relationship or numeric PD parameters for the target drug. |
| popPK | Vandeputte_2023 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization (MOR activation) and forensic toxicology analysis, not a pharmacokinetic study, and reports no disposition parameters for ketobemidone. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | The provided evidence contains no text, only a note about a PDF file, so no pharmacokinetic data for ketobemidone is present. |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a placeholder for a PDF file and contains no scientific content, data, or parameters regarding ketobemidone or any pharmacodynamic relationship. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_ketobemidone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
