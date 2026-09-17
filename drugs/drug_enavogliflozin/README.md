<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;enavogliflozin&quot;}]"></div>

# enavogliflozin

- **generic name:** enavogliflozin
- **ATC codes:** `A10BK09`
- **DrugBank:** [DB18970](https://go.drugbank.com/drugs/DB18970)
- **groups:** investigational

## About

**Description.** Enavogliflozin is under investigation in clinical trial NCT06399835 (Enavogliflozin vs. Pioglitazone on Glucose and Atherosclerosis).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 20:38 | 1:04 | 0/0/0 | 0/0/0 | 0/0/0 | 1,096/420 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 9 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jang_2024.pdf` | Jang M et al., Ocular and Plasma Pharmacokinetics of E…, Pharmaceuticals (Basel, Swi… (2024) | popPK | 10 | [10.3390/ph17010111](https://doi.org/10.3390/ph17010111) | [38256944](https://pubmed.ncbi.nlm.nih.gov/38256944) | The title confirms a preclinical PK study of enavogliflozin, but the provided evidence contains only the title and no numeric parameter values. |
| `Kang_2025.pdf` | Kang DW et al., Physiologically-based pharmacokinetic m…, Biomedicine & pharmacothera… (2025) | popPK | 10 | [10.1016/j.biopha.2025.118722](https://doi.org/10.1016/j.biopha.2025.118722) | [41172957](https://pubmed.ncbi.nlm.nih.gov/41172957) | The title confirms a PBPK modeling study for enavogliflozin, but the provided evidence contains only the title and no numeric parameter values. |
| `Pang_2022.pdf` | Pang M et al., Pharmacokinetics and Tissue Distributio…, Pharmaceutics (2022) | popPK | 9 | [10.3390/pharmaceutics14061210](https://doi.org/10.3390/pharmaceutics14061210) | [35745783](https://pubmed.ncbi.nlm.nih.gov/35745783) | The study reports quantitative PK parameters (bioavailability, tissue AUC ratios, half-life) for enavogliflozin in animals, but specific central clearance (CL) and volume of distribution (V) values are not explicitly listed in the provided text. |
| `Choi_2025.pdf` | Choi YS et al., Pharmacokinetics and Safety of Fixed-Do…, Clinical and translational… (2025) | popPK | 8 | [10.1111/cts.70376](https://doi.org/10.1111/cts.70376) | [41084226](https://pubmed.ncbi.nlm.nih.gov/41084226) | The study reports quantitative PK parameters (Tmax, t1/2) for enavogliflozin, but lacks clearance, volume, or compartmental model parameters required for population PK extraction. |
| `Jeong_2024.pdf` | Jeong SI et al., The effect of renal function on the pha…, Diabetes, obesity & metabol… (2024) | popPK | 8 | [10.1111/dom.15573](https://doi.org/10.1111/dom.15573) | [38618974](https://pubmed.ncbi.nlm.nih.gov/38618974) | The paper is a clinical PK study of enavogliflozin, but the provided evidence only contains qualitative descriptions and correlation coefficients, lacking specific numeric values for clearance, volume, or half-life. |
| `Kim_2023.pdf` | Kim MS et al., Physiologically Based Pharmacokinetic M…, Pharmaceutics (2023) | popPK | 8 | [10.3390/pharmaceutics15030942](https://doi.org/10.3390/pharmaceutics15030942) | [36986803](https://pubmed.ncbi.nlm.nih.gov/36986803) | The paper describes a PBPK model for enavogliflozin, but the specific quantitative parameter values are not present in the provided abstract text. |

<sub>queue written 2026-09-15T20:38:20.136458+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Choi_2025 | relevant | 8 | 4 | The study reports quantitative PK parameters (Tmax, t1/2) for enavogliflozin, but lacks clearance, volume, or compartmental model parameters required for population PK extraction. |
| popPK | Jang_2024 | relevant | 10 | 0 | The title confirms a preclinical PK study of enavogliflozin, but the provided evidence contains only the title and no numeric parameter values. |
| PD | Jang_2024 | not_relevant | 3 | 2 | The paper reports PK parameters and mentions that retinal concentrations remained above the IC50, but it does not provide the numeric value of the IC50 or any concentration-effect curve/relationship for enavogliflozin. |
| popPK | Jeong_2024 | relevant | 8 | 2 | The paper is a clinical PK study of enavogliflozin, but the provided evidence only contains qualitative descriptions and correlation coefficients, lacking specific numeric values for clearance, volume, or half-life. |
| PD | Jeong_2024 | not_relevant | 3 | 2 | The paper reports correlations between renal function (CrCL) and PD endpoints (UGE) but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for enavogliflozin. |
| popPK | Kang_2025 | relevant | 10 | 0 | The title confirms a PBPK modeling study for enavogliflozin, but the provided evidence contains only the title and no numeric parameter values. |
| popPK | Kim_2023 | relevant | 8 | 2 | The paper describes a PBPK model for enavogliflozin, but the specific quantitative parameter values are not present in the provided abstract text. |
| popPK | Kim_2026 | irrelevant | 2 | 0 | The study reports bioequivalence ratios (GMRs) for Cmax and AUC rather than absolute quantitative disposition parameters (CL, V, ka) or a population PK model for enavogliflozin. |
| popPK | Lee_2026 | irrelevant | 2 | 0 | The study reports only bioequivalence metrics (Cmax, AUClast ratios) and lacks quantitative disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Pang_2022 | relevant | 9 | 4 | The study reports quantitative PK parameters (bioavailability, tissue AUC ratios, half-life) for enavogliflozin in animals, but specific central clearance (CL) and volume of distribution (V) values are not explicitly listed in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_enavogliflozin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
