<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;gemigliptin&quot;}]"></div>

# gemigliptin

- **generic name:** gemigliptin
- **ATC codes:** `A10BD18`, `A10BD30`, `A10BH06`, `A10BH52`
- **DrugBank:** [DB12412](https://go.drugbank.com/drugs/DB12412)
- **groups:** investigational

## About

**Description.** Gemigliptin is under investigation in Type 2 Diabetes Mellitus. Gemigliptin has been investigated for the treatment of Cancer and Cisplatin Adverse Reaction.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 21:16 | 12:48 | 0/0/0 | 0/0/0 | 0/0/0 | 87,210/6,409 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 2/8 | 8/2 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=gemigliptin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: DPP4 (inhibitor).</sub>

## Coverage

- **PubMed hits:** 31 matched, 45 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shon_2014.pdf` | Shon JH et al., Effect of renal impairment and haemodia…, Diabetes, obesity & metabol… (2014) | pd | 5 | [10.1111/dom.12292](https://doi.org/10.1111/dom.12292) | [24641348](https://www.ncbi.nlm.nih.gov/pubmed/24641348) | metadata signals extractable PD data (exposure-response) |
| `Kim_2014.pdf` | Kim N et al., Absorption, metabolism and excretion of…, Xenobiotica; the fate of fo… (2014) | pgx | 7 | [10.3109/00498254.2013.865856](https://doi.org/10.3109/00498254.2013.865856) | [24304170](https://www.ncbi.nlm.nih.gov/pubmed/24304170) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Noh_2012.pdf` | Noh YH et al., Effects of ketoconazole and rifampicin…, Clinical therapeutics (2012) | pgx | 7 | [10.1016/j.clinthera.2012.04.001](https://doi.org/10.1016/j.clinthera.2012.04.001) | [22534255](https://www.ncbi.nlm.nih.gov/pubmed/22534255) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-15T21:15:06.157054+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cahn_2016 | irrelevant | 0 | 0 | The paper is a general review of DPP-4 inhibitors and does not report specific quantitative pharmacokinetic parameters for gemigliptin. |
| popPK | Chen_2015 | irrelevant | 1 | 0 | The paper is a general review of the DPP-4 inhibitor class and does not report specific quantitative pharmacokinetic parameter values for gemigliptin. |
| PD | Chen_2015 | not_relevant | 2 | 0 | The text is a general review of the DPP-4 inhibitor class and does not provide specific numeric PD parameters or exposure-response data for gemigliptin. |
| popPK | Chen_2018 | irrelevant | 0 | 0 | The paper is a meta-analysis of efficacy and safety outcomes (HbA1c, FPG) and does not report any pharmacokinetic parameters for gemigliptin. |
| popPK | Choi_2014 | relevant | 5 | 4 | The study reports non-compartmental PK parameters (Cmax, AUC, t1/2) for gemigliptin, but lacks compartmental model parameters (CL, V, Q) and specific numeric values for clearance or volume are not explicitly listed in the provided text. |
| popPK | Choi_2015 | irrelevant | 0 | 0 | The paper is a mechanistic study on vascular remodeling and cell proliferation, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Dutta_2021 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy and safety outcomes (HbA1c, adverse events) and explicitly excludes pharmacokinetic studies, reporting no PK parameters. |
| popPK | Elias_2025 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of glimepiride, not gemigliptin. |
| PD | Elias_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PBPK) of glimepiride and does not report any pharmacodynamic or exposure-response relationships for gemigliptin. |
| PD | Gomes_2026 | not_relevant | 1 | 0 | The paper is a scoping review that qualitatively summarizes PK changes (exposure reduction) but does not report or provide access to numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves for gemigliptin. |
| popPK | Gutch_2017 | irrelevant | 2 | 1 | This is a review article that summarizes efficacy and safety data, providing only basic PK descriptors (tmax, Cmax, half-life) without reporting quantitative compartmental or population PK parameters (CL, V, Q, ka). |
| popPK | Ha_2018 | irrelevant | 0 | 0 | The paper is a real-world observational study analyzing cardiovascular risk outcomes, not a pharmacokinetic study, and contains no PK parameters for gemigliptin. |
| PD | Jeong_2023 | not_relevant | 1 | 0 | The study reports PK interaction ratios and qualitative PD outcomes (UGE, glucose) but does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve for gemigliptin. |
| popPK | Kang_2021 | irrelevant | 0 | 0 | The study investigates the protective effects of gemigliptin on salivary dysfunction in diabetic rats and does not report any pharmacokinetic parameters. |
| PD | Kim_2013 | not_relevant | 1 | 0 | The text is a brief overview/abstract that mentions the existence of pharmacodynamic data but does not provide any numeric PD parameters, curves, or specific exposure-response relationships. |
| PGx | Kim_2014 | not_relevant | 0 | 0 | The paper describes the general ADME profile of gemigliptin in healthy subjects but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Kim_2016 | relevant | 4 | 5 | The paper is a clinical review that reports some quantitative PK parameters (t1/2, AUC, Cmax) for gemigliptin, but it lacks a compartmental model or specific clearance/volume values. |
| popPK | Kim_2019 | irrelevant | 2 | 0 | The study is a bioequivalence comparison of formulations using non-compartmental analysis, and the specific numeric PK parameter values (CL, V, etc.) are not present in the provided evidence. |
| PD | Kim_2019 | not_relevant | 3 | 2 | The study reports PD parameters (Imax, AUEClast) for DPP-4 inhibition to demonstrate bioequivalence between formulations, but does not provide an exposure-response or dose-response model with numeric parameters like Emax or EC50. |
| popPK | Kim_2024 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing glycemic control and safety, reporting no pharmacokinetic parameters for gemigliptin. |
| popPK | Lee_2019 | irrelevant | 2 | 0 | The study reports bioequivalence ratios (GMR) for Cmax and AUC rather than absolute quantitative disposition parameters (CL, V, ka) for gemigliptin. |
| popPK | Lim_2017 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial reporting HbA1c changes, not a pharmacokinetic study with disposition parameters. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy and safety outcomes (HbA1c, BP, etc.) in diabetes and CKD, not a pharmacokinetic study, and it does not report any PK parameters for gemigliptin. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for gemigliptin. |
| popPK | Noh_2012 | irrelevant | 0 | 0 | no_text gate: only 189 chars of text extracted (&lt; 400) |
| PGx | Noh_2012 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (ketoconazole/rifampicin) rather than pharmacogenomic effects of gene variants on gemigliptin PK/PD. |
| popPK | Oh_2021 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy outcomes (HbA1c, FPG) and explicitly excludes pharmacokinetic studies, reporting no quantitative PK parameters for gemigliptin. |
| PD | Park_2015 | not_relevant | 3 | 2 | The study reports bioequivalence metrics (GMRs) for DPP-4 activity and PK parameters but does not provide a concentration-effect model, Emax/EC50, or individual subject PD curves to derive numeric PD parameters. |
| popPK | Park_2017 | irrelevant | 0 | 0 | The study evaluates glycaemic variability and DPP-4 inhibition, not pharmacokinetic disposition parameters. |
| popPK | Rao_2021 | irrelevant | 0 | 0 | The paper is a computational study on drug repurposing for SARS-CoV-2 and contains no pharmacokinetic data for gemigliptin. |
| PD | Shin_2014 | not_relevant | 2 | 1 | The text describes box plots of pharmacodynamic markers (AUC) for different treatment groups but does not report a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| PD | Shon_2014 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics of gemigliptin in renal impairment and does not report any pharmacodynamic or exposure-response data. |
| popPK | Silverii_2020 | irrelevant | 0 | 0 | The paper is a meta-analysis of adverse events (bullous pemphigoid) in DPP-4 inhibitors and does not report any pharmacokinetic parameters for gemigliptin. |
| popPK | Subrahmanyan_2021 | irrelevant | 0 | 0 | The paper is a review of efficacy and cardiovascular safety of DPP-4 inhibitors and does not report any pharmacokinetic parameters for gemigliptin. |
| popPK | Trakarnvanich_2021 | irrelevant | 0 | 0 | The study is a clinical trial evaluating biomarkers of kidney injury and vascular calcification, not a pharmacokinetic study, and reports no PK parameters for gemigliptin. |
| PD | Yang_2021 | not_relevant | 3 | 2 | The study reports PD endpoints (DPP-4 inhibition) for bioequivalence comparison but does not provide an exposure-response model or numeric PD parameters (e.g., Emax, IC50) linking concentration to effect. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_gemigliptin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
