# molidustat

- **generic name:** molidustat
- **ATC codes:** `B03XA09`
- **DrugBank:** [DB15642](https://go.drugbank.com/drugs/DB15642)
- **groups:** investigational

## About

**Description.** Molidustat is under investigation in clinical trial NCT03350321 (A Study of Molidustat for Correction of Renal Anemia in Non-dialysis Subjects).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-08 20:08 | 9:06 | 0/0/0 | 0/0/0 | 0/0/0 | 131,737/7,839 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 2/9 | 11/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 14 matched, 23 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Böttcher_2018.pdf` | Böttcher M et al., First-in-man-proof of concept study wit…, British journal of clinical… (2018) | popPK | 8 | [10.1111/bcp.13584](https://doi.org/10.1111/bcp.13584) | [29575006](https://pubmed.ncbi.nlm.nih.gov/29575006) | The study reports PK parameters for molidustat, but only the terminal half-life range (4.64-10.40 h) is explicitly provided in the text, while other quantitative disposition parameters like clearance and volume are not listed. |
| `Janssens_2021.pdf` | Janssens LK et al., Sensing an Oxygen Sensor: Development a…, Analytical chemistry (2021) | pd | 4 | [10.1021/acs.analchem.1c02923](https://doi.org/10.1021/acs.analchem.1c02923) | [34677954](https://www.ncbi.nlm.nih.gov/pubmed/34677954) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-08T20:08:02.297058+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akizawa_2019 | irrelevant | 0 | 0 | The paper is a study design and rationale document for phase III trials that have not yet reported results, containing no quantitative pharmacokinetic parameter values for molidustat. |
| PD | Akizawa_2019 | not_relevant | 0 | 0 | The paper is a protocol describing the design of three Phase III clinical trials and does not report any results, data, or numeric pharmacodynamic parameters. |
| popPK | Bi_2024 | irrelevant | 2 | 0 | Molidustat is used as a negative control/comparator to demonstrate lack of OATP1B transport, and no quantitative PK parameters (CL, V, etc.) for molidustat are reported in the evidence. |
| popPK | Boegel_2024 | irrelevant | 2 | 1 | The study is primarily pharmacodynamic (erythropoiesis) in cats and does not report quantitative PK parameters (CL, V, Q, ka) or a compartmental model, only mentioning a half-life range from prior internal studies. |
| popPK | Böttcher_2018 | relevant | 8 | 4 | The study reports PK parameters for molidustat, but only the terminal half-life range (4.64-10.40 h) is explicitly provided in the text, while other quantitative disposition parameters like clearance and volume are not listed. |
| popPK | Cui_2025 | irrelevant | 0 | 0 | The study evaluates enarodustat (SAL-0951), not molidustat. |
| popPK | Jain_2025 | irrelevant | 1 | 0 | The paper is a review of analytical methods and general pharmacology for HIF-PHIs, and the provided evidence contains no specific quantitative PK parameter values for molidustat. |
| popPK | Janssens_2021 | irrelevant | 0 | 0 | The paper describes activity-based assays for HIF heterodimerization and does not report pharmacokinetic parameters for molidustat. |
| PD | Janssens_2021 | not_relevant | 0 | 0 | The paper describes the development of activity-based assays for HIF heterodimerization and does not report pharmacodynamic or exposure-response data for molidustat. |
| popPK | Li_2020 | irrelevant | 0 | 0 | The study is a mechanistic/efficacy trial in mice focusing on anemia and renal pathology, with no pharmacokinetic parameters reported. |
| popPK | Mendoza-Reinoso_2022 | irrelevant | 0 | 0 | The paper is a mechanistic study on macrophage efferocytosis and HIF-1α signaling, not a pharmacokinetic study of molidustat. |
| popPK | Nakai_2024 | irrelevant | 2 | 0 | The study focuses on mechanistic gene expression and qualitative pharmacokinetic differences in mice, and no quantitative PK parameter values (CL, V, etc.) for molidustat are present in the evidence. |
| PD | Nakai_2024 | not_relevant | 2 | 1 | The paper describes qualitative drug-specific mechanisms and gene expression changes in mice but does not report numeric PD parameters or quantitative exposure-response curves for molidustat. |
| popPK | Sadiku_2017 | irrelevant | 0 | 0 | The paper is a mechanistic immunology study using molidustat as a tool to inhibit PHD2, and it does not report any pharmacokinetic parameters (CL, V, etc.) for the drug. |
| popPK | Shitamori_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of roxadustat (ROX) in cats, with molidustat (MOL) serving only as a background comparator or approved reference drug, not the subject of the PK analysis. |
| popPK | Susi_2025 | irrelevant | 0 | 0 | The paper is a review of feline therapeutics (buprenorphine, gabapentin, frunevetmab, SGLT2 inhibitors) and does not mention molidustat or provide any pharmacokinetic parameters for it. |
| PD | Susi_2025 | not_relevant | 1 | 0 | The paper is a clinical review that discusses the mechanism of action and general pharmacokinetic data for molidustat in cats, but it does not report specific numeric pharmacodynamic parameters (such as Emax, EC50, or dose-response curves) or perform a PK/PD modeling analysis. |
| popPK | Takano_2022 | irrelevant | 2 | 0 | The study focuses on the mechanistic clearance pathways (transporters and excretion routes) rather than reporting quantitative population pharmacokinetic parameters like CL, V, or ka for molidustat. |
| popPK | Yamamoto_2019 | irrelevant | 0 | 0 | The paper is a study design and rationale document for Phase III trials that have not yet reported results, and it contains no quantitative pharmacokinetic parameter values for molidustat. |
| PD | Yamamoto_2019 | not_relevant | 0 | 0 | The paper is a study protocol describing the design and rationale of two Phase III trials; it does not report any results, data, or numeric pharmacodynamic parameters. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of roxadustat (FG-4592) on myeloablation and engraftment in mice, not its pharmacokinetic parameters, and molidustat is not the subject drug. |
| PGx | van_2021 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (atazanavir inhibiting UGT1A1) rather than a pharmacogenomic effect based on a specific gene variant or genotype. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_molidustat`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
