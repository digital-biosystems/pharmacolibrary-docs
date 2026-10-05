<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10X&quot;,&quot;href&quot;:&quot;atc/A10X.md&quot;},{&quot;label&quot;:&quot;teplizumab&quot;}]"></div>

# teplizumab

- **generic name:** teplizumab
- **ATC codes:** `A10XX01`
- **DrugBank:** [DB06606](https://go.drugbank.com/drugs/DB06606) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Teplizumab is a monoclonal antibody used to treat type 1 diabetes. It is authorised in the European Union and also approved elsewhere, though it remains partly investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7701358](https://www.wikidata.org/wiki/Q7701358) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 04:00 | 2:28 | 0/0/0 | 0/0/0 | 0/0/0 | 124,253/1,035 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 2/6 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=teplizumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD3E (antibody).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alegre_1992 | irrelevant | 0 | 0 | The paper studies the immunological properties of a mutated OKT3 monoclonal antibody, not the pharmacokinetics of teplizumab. |
| popPK | Biswas_2025 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy (C-peptide, HbA1c) and safety, not a pharmacokinetic study, and contains no PK parameters for teplizumab. |
| popPK | Chatenoud_2025 | irrelevant | 0 | 0 | The paper is a narrative review of the clinical development history of teplizumab and does not report any quantitative pharmacokinetic parameters. |
| popPK | Chitnis_2022 | irrelevant | 0 | 0 | The study investigates the immunological effects of nasal Foralumab, with teplizumab mentioned only as background context, and no pharmacokinetic parameters are reported. |
| PD | Chitnis_2022 | not_relevant | 2 | 1 | The paper investigates a different anti-CD3 antibody (Foralumab) and reports qualitative dose-response observations (effects at 50ug) without providing numeric PD parameters, concentration-effect curves, or PK/PD modeling for teplizumab. |
| popPK | Cignarella_2023 | irrelevant | 0 | 0 | The paper is a review on sex differences in immunopharmacology and does not report any pharmacokinetic parameters for teplizumab. |
| PD | Cignarella_2023 | not_relevant | 0 | 0 | The text is a general review of sex differences in immunopharmacology and does not mention teplizumab or report any specific pharmacodynamic or exposure-response data. |
| popPK | Ge_2026 | irrelevant | 0 | 0 | The paper is a review of scFv-based biologics in diabetes and mentions teplizumab only as a clinical example of a full-length mAb, without reporting any quantitative pharmacokinetic parameters for it. |
| popPK | Gitelman_2026 | irrelevant | 2 | 0 | The study mentions pharmacokinetics as an endpoint and notes peak concentration timing, but no quantitative PK parameters (CL, V, ka, etc.) are reported in the provided evidence. |
| PD | Gitelman_2026 | not_relevant | 2 | 0 | The paper reports PK and safety data, and mentions CD3 receptor occupancy as a PD endpoint, but the provided text does not contain numeric PD parameters, concentration-effect curves, or a formal PD model fit. |
| popPK | Jeun_2025 | irrelevant | 0 | 0 | The paper is a review of immunotherapies for type 1 diabetes and does not report original quantitative pharmacokinetic parameters for teplizumab. |
| PD | Jeun_2025 | not_relevant | 1 | 0 | The text is a review article summarizing immunotherapies for Type 1 diabetes and mentions teplizumab's approval, but it does not present any specific pharmacokinetic or pharmacodynamic data, models, or numeric parameters. |
| popPK | Linsley_2019 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic biomarkers (T cell levels) and clinical response to rituximab, with no pharmacokinetic parameters reported for teplizumab. |
| PD | Linsley_2019 | not_relevant | 0 | 0 | The paper focuses on rituximab and biomarkers (T cell levels) predicting response; it does not report a pharmacodynamic or exposure-response model for teplizumab. |
| popPK | Linsley_2019_2 | irrelevant | 0 | 0 | The paper studies abatacept (CTLA4Ig) in type 1 diabetes and does not report pharmacokinetic parameters for teplizumab. |
| PD | Linsley_2019_2 | not_relevant | 0 | 0 | The paper focuses on abatacept, not teplizumab, and reports qualitative immunotype analysis rather than numeric PD parameters. |
| popPK | Mathieu_2024 | irrelevant | 0 | 0 | The study evaluates AG019 as the subject drug with teplizumab as a co-administered agent, and no quantitative pharmacokinetic parameters (CL, V, etc.) for teplizumab are reported. |
| PD | Mathieu_2024 | not_relevant | 0 | 0 | The paper reports clinical outcomes (C-peptide, HbA1c, T-cell frequencies) over time for AG019 and teplizumab but does not provide drug concentration data or fit a pharmacodynamic model to derive numeric PD parameters (e.g., Emax, EC50) for teplizumab. |
| popPK | Novograd_2023 | irrelevant | 0 | 0 | The paper is a narrative review of the discovery and clinical trials of teplizumab and does not report any quantitative pharmacokinetic parameters. |
| PD | Novograd_2023 | not_relevant | 1 | 0 | The text is a general overview/review of teplizumab's history and mechanism of action, containing no specific pharmacokinetic or pharmacodynamic data, models, or numeric parameters. |
| popPK | Richards_1999 | irrelevant | 0 | 0 | The study evaluates the toxicity and immunomodulatory effects of hOKT3gamma4, not the pharmacokinetics of teplizumab. |
| popPK | Salama_2024 | irrelevant | 0 | 0 | The paper is a review of treatment modalities for Type 1 Diabetes and does not report any quantitative pharmacokinetic parameters for teplizumab. |
| PD | Salama_2024 | not_relevant | 1 | 0 | The text is a general review of T1DM treatments that qualitatively mentions teplizumab's clinical outcomes but provides no numeric PD parameters, exposure-response data, or dose-effect curves. |
| PD | Sharma_2024 | not_relevant | 0 | 0 | The text is a prescribing information label focusing on safety, pregnancy risks, and general PK characteristics, containing no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters. |
| popPK | Vlasakakis_2019 | irrelevant | 0 | 0 | The study investigates otelixizumab, not teplizumab. |
| PD | Vlasakakis_2019 | not_relevant | 0 | 0 | The paper reports pharmacodynamic data for otelixizumab, not teplizumab. |
| popPK | Xu_2000 | irrelevant | 0 | 0 | The paper describes in vitro characterization of OKT3 antibody variants, not teplizumab, and contains no pharmacokinetic parameters. |
| PD | Xu_2000 | not_relevant | 0 | 0 | The paper describes in vitro characterization of antibody variants and qualitative comparisons of potency, but does not report a quantitative exposure-response or dose-response model with numeric PD parameters for teplizumab. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper investigates the immunological mechanisms of low-dose IL-2 and does not report pharmacokinetic parameters for teplizumab. |
| PD | Zhang_2022 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of low-dose IL-2 using single-cell multiomics and does not report any pharmacokinetic data, exposure-response relationships, or numeric PD parameters for teplizumab. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
