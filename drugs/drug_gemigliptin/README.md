<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;gemigliptin&quot;}]"></div>

# gemigliptin

- **generic name:** gemigliptin
- **ATC codes:** `A10BD18`, `A10BD30`, `A10BH06`, `A10BH52`
- **DrugBank:** [DB12412](https://go.drugbank.com/drugs/DB12412) · **PubChem:** [CID 11953153](https://pubchem.ncbi.nlm.nih.gov/compound/11953153)
- **molar mass:** 489.37 g/mol (C18H19F8N5O2) — DrugBank
- **groups:** investigational

## About

Gemigliptin is a DPP-4 inhibitor developed as an oral blood glucose lowering drug for diabetes. It is classed as investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5530612](https://www.wikidata.org/wiki/Q5530612) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=gemigliptin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: DPP4 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 00:51 | 2:28 | 0/0/0 | 0/0/0 | 0/0/0 | 85,065/2,140 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 2/8 | 7/2 | 0 |

## Coverage

- **PubMed hits:** 31 matched, 45 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shon_2014.pdf` | Shon JH et al., Effect of renal impairment and haemodia…, Diabetes, obesity & metabol… (2014) | pd | 5 | [10.1111/dom.12292](https://doi.org/10.1111/dom.12292) | [24641348](https://www.ncbi.nlm.nih.gov/pubmed/24641348) | metadata signals extractable PD data (exposure-response) |
| `Kim_2014.pdf` | Kim N et al., Absorption, metabolism and excretion of…, Xenobiotica; the fate of fo… (2014) | pgx | 7 | [10.3109/00498254.2013.865856](https://doi.org/10.3109/00498254.2013.865856) | [24304170](https://www.ncbi.nlm.nih.gov/pubmed/24304170) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Noh_2012.pdf` | Noh YH et al., Effects of ketoconazole and rifampicin…, Clinical therapeutics (2012) | pgx | 7 | [10.1016/j.clinthera.2012.04.001](https://doi.org/10.1016/j.clinthera.2012.04.001) | [22534255](https://www.ncbi.nlm.nih.gov/pubmed/22534255) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-05 00:51 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cahn_2016 | irrelevant | 0 | 0 | The paper is a clinical review of DPP-4 inhibitors and does not report quantitative pharmacokinetic parameters for gemigliptin. |
| popPK | Chen_2015 | irrelevant | 1 | 0 | This is a review article discussing the class of DPP-4 inhibitors generally and does not provide specific quantitative pharmacokinetic parameter values (CL, V, etc.) for gemigliptin. |
| PD | Chen_2015 | not_relevant | 2 | 0 | The text is a general review of the DPP-4 inhibitor class and does not provide specific numeric PD parameters or exposure-response data for gemigliptin. |
| popPK | Chen_2018 | irrelevant | 0 | 0 | This is a meta-analysis of clinical efficacy and safety outcomes (HbA1c, FPG, adverse events) and does not report pharmacokinetic parameters for gemigliptin. |
| popPK | Choi_2015 | irrelevant | 0 | 0 | The study is a mechanistic investigation of vascular remodeling and cell proliferation, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Dutta_2021 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy and safety (HbA1c, adverse events) and explicitly excludes pharmacokinetic studies; no PK parameters are reported. |
| popPK | Elias_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of glimepiride, not gemigliptin. |
| PD | Elias_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PBPK) of glimepiride and does not report any pharmacodynamic or exposure-response relationships for gemigliptin. |
| PD | Gomes_2026 | not_relevant | 1 | 0 | The paper is a scoping review that qualitatively summarizes PK changes (exposure reduction) but does not report or provide access to numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves for gemigliptin. |
| popPK | Gutch_2017 | irrelevant | 2 | 1 | This is a review article that cites general PK parameters (half-life, Cmax) but does not report original quantitative disposition parameters (CL, V, Q, ka) or a compartmental/population-PK model. |
| popPK | Ha_2018 | irrelevant | 0 | 0 | The paper is a real-world observational study analyzing cardiovascular disease risk and does not report any pharmacokinetic parameters for gemigliptin. |
| PD | Jeong_2023 | not_relevant | 1 | 0 | The study reports PK interaction ratios and qualitative PD outcomes (UGE, glucose) but does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve for gemigliptin. |
| popPK | Kang_2021 | irrelevant | 0 | 0 | The study investigates the protective effects of gemigliptin on salivary dysfunction in diabetic rats and does not report any pharmacokinetic parameters. |
| PD | Kim_2013 | not_relevant | 1 | 0 | The text is a brief overview/abstract that mentions the existence of pharmacodynamic data but does not provide any numeric PD parameters, curves, or specific exposure-response relationships. |
| PGx | Kim_2014 | not_relevant | 0 | 0 | The paper describes the general ADME profile of gemigliptin in healthy subjects but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Kim_2016 | relevant | 4 | 5 | The paper is a clinical review that summarizes key pharmacokinetic parameters (half-life, AUC, Cmax) for gemigliptin in humans, but it lacks a compartmental model or specific clearance/volume values. |
| popPK | Kim_2019 | irrelevant | 2 | 0 | The study is a bioequivalence comparison of formulations that reports only geometric mean ratios and qualitative similarity, without providing absolute quantitative PK parameter values (e.g., CL, V, t1/2) for gemigliptin. |
| PD | Kim_2019 | not_relevant | 3 | 2 | The study reports PD parameters (Imax, AUEClast) for DPP-4 inhibition to demonstrate bioequivalence between formulations, but does not provide an exposure-response or dose-response model with numeric parameters like Emax or EC50. |
| popPK | Kim_2024 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing glycemic control (HbA1c) and does not report pharmacokinetic parameters. |
| popPK | Lee_2019 | irrelevant | 2 | 0 | The study reports bioequivalence ratios (GMR) for Cmax and AUC rather than absolute quantitative disposition parameters (CL, V, t1/2) for gemigliptin. |
| popPK | Lim_2017 | irrelevant | 0 | 0 | The study is a clinical efficacy trial reporting HbA1c changes, not a pharmacokinetic study with disposition parameters. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy and safety outcomes (HbA1c, BP, etc.) for diabetes drugs in CKD, not a pharmacokinetic study, and it does not report PK parameters for gemigliptin. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for gemigliptin. |
| popPK | Noh_2012 | irrelevant | 0 | 0 | no_text gate: only 189 chars of text extracted (&lt; 400) |
| PGx | Noh_2012 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (ketoconazole/rifampicin) rather than pharmacogenomic effects of gene variants on gemigliptin PK/PD. |
| popPK | Oh_2021 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy (HbA1c, FPG) and explicitly excludes pharmacokinetic studies; no PK parameters are reported. |
| PD | Park_2015 | not_relevant | 3 | 2 | The study reports bioequivalence metrics (GMRs) for DPP-4 activity and PK parameters but does not provide a concentration-effect model, Emax/EC50, or individual subject PD curves to derive numeric PD parameters. |
| popPK | Park_2017 | irrelevant | 0 | 0 | The study evaluates glycaemic variability and DPP-4 inhibition, not pharmacokinetic disposition parameters (CL, V, ka, etc.) for gemigliptin. |
| popPK | Rao_2021 | irrelevant | 0 | 0 | The paper is a computational study on drug repurposing for SARS-CoV-2 and contains no pharmacokinetic data for gemigliptin. |
| PD | Shin_2014 | not_relevant | 2 | 1 | The text describes box plots of pharmacodynamic markers (AUC) for different treatment groups but does not report a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| PD | Shon_2014 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics of gemigliptin in renal impairment and does not report any pharmacodynamic or exposure-response data. |
| popPK | Silverii_2020 | irrelevant | 0 | 0 | The paper is a meta-analysis of adverse events (bullous pemphigoid) associated with DPP-4 inhibitors and does not report any pharmacokinetic parameters for gemigliptin. |
| popPK | Subrahmanyan_2021 | irrelevant | 0 | 0 | The paper is a review of efficacy and cardiovascular safety of DPP-4 inhibitors and does not report pharmacokinetic parameters for gemigliptin. |
| popPK | Trakarnvanich_2021 | irrelevant | 0 | 0 | The study is a clinical trial evaluating biomarkers of kidney injury and vascular calcification, not a pharmacokinetic study, and reports no PK parameters. |
| PD | Yang_2021 | not_relevant | 3 | 2 | The study reports PD endpoints (DPP-4 inhibition) for bioequivalence comparison but does not provide an exposure-response model or numeric PD parameters (e.g., Emax, IC50) linking concentration to effect. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgemigliptin%5D&body=Drug%3A%20gemigliptin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_gemigliptin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
