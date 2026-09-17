<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;evogliptin&quot;}]"></div>

# evogliptin

- **generic name:** evogliptin
- **ATC codes:** `A10BD22`, `A10BH07`
- **DrugBank:** [DB12625](https://go.drugbank.com/drugs/DB12625)
- **groups:** investigational

## About

**Description.** Evogliptin has been used in trials studying the treatment and screening of Osteoporosis, Renal Impairment, Type 2 Diabetes Mellitus, Diabetes Mellitis Type 2, and Diabetes Mellitus, Type 2.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 20:42 | 1:55 | 0/0/0 | 0/0/0 | 0/0/0 | 1,400/426 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/0 | 3/1 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 37 matched, 30 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kim_2023.pdf` | Kim B et al., Effect of haemodialysis on the pharmaco…, Diabetes, obesity & metabol… (2023) | popPK | 8 | [10.1111/dom.15034](https://doi.org/10.1111/dom.15034) | [36852751](https://pubmed.ncbi.nlm.nih.gov/36852751) | The study reports PK parameters for evogliptin, but the evidence only provides geometric mean ratios and fold-changes rather than absolute quantitative values like clearance or volume. |
| `Oh_2017.pdf` | Oh J et al., Effects of renal impairment on the phar…, Diabetes, obesity & metabol… (2017) | popPK | 8 | [10.1111/dom.12813](https://doi.org/10.1111/dom.12813) | [27761990](https://pubmed.ncbi.nlm.nih.gov/27761990) | The study reports PK changes (AUC ratios) for evogliptin in renal impairment, but specific quantitative disposition parameters (CL, V, t1/2) are not explicitly listed in the provided text. |

<sub>queue written 2026-09-16T08:39:43.796738+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gomes_2026 | irrelevant | 1 | 0 | The paper is a scoping review that discusses evogliptin only as a comparator in the context of drug-drug interactions with rifampicin, without reporting original quantitative PK parameter values. |
| PD | Gomes_2026 | not_relevant | 1 | 0 | The paper is a scoping review that qualitatively summarizes PK changes (exposure reduction) but does not report or provide numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves for evogliptin. |
| popPK | Gu_2014 | relevant | 8 | 2 | The study reports PK parameters for evogliptin, but only half-life and accumulation ratio are provided in the text, lacking specific values for clearance, volume, or ka. |
| popPK | Hwang_2020 | irrelevant | 2 | 0 | The study reports only relative geometric mean ratios (GMRs) for PK parameters in a drug interaction study, without providing absolute quantitative disposition parameters (e.g., CL, V, t1/2) for evogliptin. |
| PD | Hwang_2020 | not_relevant | 2 | 1 | The study reports qualitative comparisons of glucose-lowering effects and PK parameters (Cmax, AUC) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model. |
| PGx | Jeong_2015 | not_relevant | 0 | 0 | The paper identifies metabolic pathways and enzymes (CYP3A4/5, UGT2B4/7) in vitro but does not report specific pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Khotimchenko_2022 | irrelevant | 0 | 0 | The paper is an in silico modeling study that mentions evogliptin as a candidate drug but does not report any quantitative pharmacokinetic parameters or disposition data. |
| PD | Khotimchenko_2022 | not_relevant | 1 | 0 | The paper describes an in silico modeling approach and mentions evogliptin as a candidate, but the provided text does not contain any numeric PD parameters, concentration-effect curves, or specific exposure-response data. |
| popPK | Kim_2018 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic interactions and glucose control in diabetic mice, reporting no quantitative pharmacokinetic parameters for evogliptin. |
| PD | Kim_2018 | not_relevant | 2 | 1 | The paper reports qualitative pharmacodynamic interactions and statistical comparisons of glucose levels in mice but does not provide numeric PD parameters (e.g., Emax, EC50) or an exposure-response curve for evogliptin. |
| popPK | Kim_2023 | relevant | 8 | 2 | The study reports PK parameters for evogliptin, but the evidence only provides geometric mean ratios and fold-changes rather than absolute quantitative values like clearance or volume. |
| popPK | Kim_2023_2 | irrelevant | 2 | 0 | The study is a drug-drug interaction trial that reports only relative changes (geometric mean ratios) in PK parameters rather than absolute quantitative disposition values (CL, V, etc.) for evogliptin. |
| PD | Kim_2023_2 | not_relevant | 2 | 1 | The study reports qualitative PD outcomes (glucose-lowering effect) and PK parameters but does not provide numeric PD parameters (e.g., Emax, EC50) or an exposure-response model. |
| popPK | Kim_2025 | relevant | 10 | 2 | The paper describes a population PK model for evogliptin, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided evidence, only PD parameters (Emax, EC50) and model structure details. |
| PGx | Kim_2025 | not_relevant | 0 | 0 | The study investigates the effect of renal function (uremia) and biochemical covariates on evogliptin PK/PD, not the effect of a specific gene variant or genotype. |
| popPK | Oh_2017 | relevant | 8 | 2 | The study reports PK changes (AUC ratios) for evogliptin in renal impairment, but specific quantitative disposition parameters (CL, V, t1/2) are not explicitly listed in the provided text. |
| PD | Oh_2017 | not_relevant | 3 | 2 | The paper reports qualitative changes in DPP-4 inhibition and PK parameters (AUC) across renal function groups but does not provide numeric PD parameters (e.g., Emax, IC50) or a quantitative concentration-effect model. |
| popPK | Ojo_2025 | irrelevant | 0 | 0 | The paper is an in-vitro and computational study of herbal formulations where evogliptin is used only as a reference inhibitor for DPP-IV activity, with no pharmacokinetic parameters reported. |
| PD | Ojo_2025 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition IC50 values for herbal formulations and evogliptin, but does not provide a pharmacokinetic or pharmacodynamic exposure-response relationship or dose-effect curve for evogliptin. |
| popPK | Rhee_2016_2 | irrelevant | 2 | 0 | The study reports only relative geometric mean ratios for PK parameters (Cmax, AUC) in a drug interaction study, without providing absolute quantitative disposition parameters (CL, V, ka, t1/2) for evogliptin. |
| PD | Rhee_2016_2 | not_relevant | 3 | 2 | The study reports qualitative pharmacodynamic changes (DPP-4 inhibition, GLP-1, glucose) and PK interaction ratios, but does not provide numeric PD parameters (e.g., Emax, IC50) or a concentration-effect model. |
| popPK | Yoo_2020 | irrelevant | 2 | 0 | The study reports only relative geometric mean ratios (GMRs) for PK parameters to assess drug interactions, not absolute quantitative disposition parameters (e.g., CL, V, t1/2) for evogliptin. |
| PD | Yoo_2020 | not_relevant | 2 | 1 | The study reports qualitative additive glucose-lowering effects and PK interaction ratios, but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model. |
| popPK | Zou_2022 | irrelevant | 1 | 0 | The paper is a literature review summarizing evogliptin studies and does not report original quantitative pharmacokinetic parameter values in the provided evidence. |
| PD | Zou_2022 | not_relevant | 2 | 0 | The text is a literature review summary that qualitatively describes the mechanism of action but does not provide specific numeric PD parameters or exposure-response data for evogliptin. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_evogliptin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
