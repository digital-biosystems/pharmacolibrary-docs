<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Cagrilintide&quot;}]"></div>

# Cagrilintide

- **generic name:** Cagrilintide
- **ATC codes:** not captured
- **DrugBank:** [DB18887](https://go.drugbank.com/drugs/DB18887)
- **groups:** investigational

## About

**Description.** Cagrilintide is under investigation in clinical trial NCT06221969 (A Research Study to See How Much Cagrisema Lowers Blood Sugar and Body Weight Compared to Tirzepatide in People With Type 2 Diabetes Treated With Metformin With or Without an SGLT2 Inhibitor).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-26 21:11 | 11:02 | 0/0/0 | 0/1/0 | 0/0/0 | 165,141/5,385 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 3/3 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Al-Harbi_2025](drugs/drug_cagrilintide/pd_Al_Harbi_2025_weight_loss.md) | Al-Harbi FA et al., Synthetic target trial emulation and pr…, Metabolism open (2025) | [10.1016/j.metop.2025.100414](https://doi.org/10.1016/j.metop.2025.100414) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Harbi_2025 | irrelevant | 1 | 0 | The paper is a synthetic target trial emulation and predictive modeling study focused on efficacy and safety outcomes, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, Q, ka) for cagrilintide. |
| popPK | Lau_2021 | irrelevant | 2 | 1 | The paper is a clinical efficacy/safety trial for weight loss that only mentions a half-life of ~180 hours in passing, without reporting quantitative disposition parameters (CL, V, Q, ka) or a compartmental/population-PK model. |
| PD | Lau_2021 | not_relevant | 2 | 0 | The text is a clinical trial protocol describing the *planned* dose-response and PK/PD modeling analyses, but it does not report the actual results, fitted models, or numeric PD parameters. |
| popPK | Ludwig_2026 | irrelevant | 0 | 0 | The paper is a mechanistic neuroanatomy study using cagrilintide to identify neural mediators in the brainstem, and it does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for the drug. |
| PD | Ludwig_2026 | not_relevant | 1 | 0 | The paper is a mechanistic study using transcriptomics and neuroanatomy to identify neural mediators of cagrilintide; it does not report pharmacokinetic data, exposure-response modeling, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Min_2025 | irrelevant | 0 | 0 | The paper is a review of GLP-1 RAs (exenatide, liraglutide, etc.) and does not mention cagrilintide. |
| PD | Min_2025 | not_relevant | 0 | 0 | The paper is a review of GLP-1 RAs and tirzepatide, focusing on PK and DDIs; it does not mention cagrilintide or report any PD parameters for it. |
| popPK | Nong_2026 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy and safety outcomes (weight loss, adverse events) for obesity drugs, not a pharmacokinetic study, and contains no PK parameters for cagrilintide. |
| PD | Nong_2026 | not_relevant | 1 | 0 | The paper is a systematic review and network meta-analysis of clinical outcomes (benefits/harms) for obesity drugs, not a pharmacokinetic/pharmacodynamic modeling study; it does not report specific exposure-response or dose-response PD parameters (e.g., Emax, EC50) for cagrilintide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
