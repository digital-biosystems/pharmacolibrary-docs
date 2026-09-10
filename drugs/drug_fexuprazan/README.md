# fexuprazan

- **generic name:** fexuprazan
- **ATC codes:** `A02BC10`
- **DrugBank:** [DB16078](https://go.drugbank.com/drugs/DB16078)
- **groups:** investigational

## About

**Description.** Abeprazan is under investigation in clinical trial NCT04341454 (Study to Evaluate the Efficacy and Safety of DWP14012 in Patients With Acute or Chronic Gastritis).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 15:18 | 13:23 | 0/0/0 | 1/1/0 | 0/0/0 | 125,057/22,168 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 0/8 | 8/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kim_2022](drugs/drug_fexuprazan/pd_Kim_2022_pH.md) | Kim MS et al., Model-Based Prediction of Acid Suppress…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15060709](https://doi.org/10.3390/ph15060709) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Jung_2026](drugs/drug_fexuprazan/pd_Jung_2026_intragastric_pH.md) | Jung W et al., A Mechanism-Based Multi-Level Populatio…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70181](https://doi.org/10.1002/psp4.70181) |

## Coverage

- **PubMed hits:** 23 matched, 23 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hwang_2020.pdf` | Hwang JG et al., Pharmacodynamics and pharmacokinetics o…, Alimentary pharmacology & t… (2020) | popPK | 10 | [10.1111/apt.16131](https://doi.org/10.1111/apt.16131) | [33111337](https://pubmed.ncbi.nlm.nih.gov/33111337) | The title confirms a PK study of fexuprazan, but the provided evidence contains no numeric parameter values. |
| `Ranbhise_2026.pdf` | Ranbhise JS et al., Potassium-Competitive Acid Blockers as…, Pharmaceuticals (Basel, Swi… (2026) | pgx | 8 | [10.3390/ph19081168](https://doi.org/10.3390/ph19081168) | [42653667](https://www.ncbi.nlm.nih.gov/pubmed/42653667) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |

<sub>queue written 2026-09-10T15:13:48.315269+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahn_2023 | irrelevant | 0 | 0 | The paper is a review of H. pylori eradication therapies and does not report any quantitative pharmacokinetic parameters for fexuprazan. |
| PD | Ahn_2023 | not_relevant | 1 | 0 | The text is a clinical review of PCAB-based H. pylori eradication therapies that reports clinical outcomes (eradication rates) but contains no pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for fexuprazan. |
| PGx | Ahn_2023 | not_relevant | 0 | 0 | The paper is a review of PCAB-based H. pylori eradication therapies and does not report pharmacogenomic effects on the PK or PD parameters of fexuprazan. |
| popPK | Hwang_2020 | relevant | 10 | 0 | The title confirms a PK study of fexuprazan, but the provided evidence contains no numeric parameter values. |
| PD | Hwang_2020 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or results necessary to determine if numeric PD parameters or exposure-response relationships are reported. |
| popPK | Jung_2026 | relevant | 10 | 0 | The paper is a population PK/PD study for fexuprazan, but the specific numeric parameter values are in Table 2, which is not included in the provided evidence. |
| PGx | Kang_2026 | not_relevant | 0 | 0 | The study reports no significant difference in clinical efficacy (H. pylori eradication rate) based on CYP2C19 genotype and does not report pharmacokinetic parameters. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study regarding dosing timing, not a pharmacokinetic study, and reports no quantitative PK parameters (CL, V, ka, etc.) for fexuprazan. |
| PD | Lee_2025 | not_relevant | 0 | 0 | The paper is a clinical efficacy study comparing dosing timing (before vs. after meal) and reports healing rates, but it does not provide pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper is a systematic review of drug-drug and food-drug interactions for P-CABs and does not report pharmacogenomic effects (gene variants) on fexuprazan PK/PD. |
| PD | Oh_2023 | not_relevant | 2 | 1 | The study reports PK parameters and qualitative PD outcomes (platelet aggregation) but does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve for fexuprazan. |
| popPK | Ramani_2023 | irrelevant | 1 | 0 | The paper is a review of clinical development and efficacy without reporting original quantitative pharmacokinetic parameter values. |
| PD | Ramani_2023 | not_relevant | 2 | 0 | The text is a narrative review summarizing clinical development and general pharmacological properties without providing specific numeric PD parameters or exposure-response data. |
| PGx | Ramani_2023 | not_relevant | 0 | 0 | The paper is a general review of fexuprazan's clinical development and pharmacology, noting the lack of CYP2C19 metabolism, but it does not report specific pharmacogenomic effects of gene variants on PK or PD parameters. |
| PGx | Ranbhise_2026 | not_relevant | 0 | 0 | The paper is a review of P-CABs and explicitly states fexuprazan has genotype-independent inhibition, without reporting specific pharmacogenomic effects on PK/PD parameters. |
| PGx | Remes-Troche_2024 | not_relevant | 0 | 0 | The paper is a general review of P-CABs and does not report specific pharmacogenomic effects on fexuprazan PK/PD parameters. |
| PGx | Seong_2025 | not_relevant | 2 | 5 | The paper reports a CYP2C19 poor metabolizer genotype but explicitly states its clinical relevance is limited and does not establish a causal pharmacogenomic effect on fexuprazan PK/PD parameters. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study focuses on CYP1B1 inhibitors (specifically compound C27) for paclitaxel resistance, and fexuprazan is only mentioned as the source of a lead intermediate (W-1) without any PK parameters reported for fexuprazan itself. |
| PD | Wang_2026 | not_relevant | 3 | 2 | The paper reports an IC50 for a CYP1B1 inhibitor (C27, a fexuprazan intermediate) and qualitative PK data, but does not provide a pharmacodynamic exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for fexuprazan itself. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_fexuprazan`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
