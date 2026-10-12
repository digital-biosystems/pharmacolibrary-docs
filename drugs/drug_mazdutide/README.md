<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Mazdutide&quot;}]"></div>

# Mazdutide

- **generic name:** Mazdutide
- **ATC codes:** not captured
- **DrugBank:** [DB19099](https://go.drugbank.com/drugs/DB19099) · **PubChem:** not captured
- **groups:** investigational

## About

**Description.** Mazdutide is under investigation in clinical trial NCT06143956 (A Chronic Weight Management Master Protocol Study (LY900038) of Multiple Intervention-specific-appendices (Isas) in Adult Participants With Obesity or Overweight).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-26 20:47 | 2:20 | 0/0/0 | 0/1/0 | 0/0/0 | 64,839/989 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/2 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Guo_2025_weight_reduction](drugs/drug_mazdutide/pd_Guo_2025_weight_reduction.md) | name ← unknown · direct Emax (saturable) effect | — | Guo H et al., Comparative efficacy and safety of GLP-…, Obesity pillars (2025) | [10.1016/j.obpill.2025.100162](https://doi.org/10.1016/j.obpill.2025.100162) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Guo_2025 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of pharmacodynamic efficacy (weight reduction) and safety, not a pharmacokinetic study, and does not report PK parameters like clearance or volume for mazdutide. |
| popPK | Min_2025 | irrelevant | 0 | 0 | The paper is a review of GLP-1 RAs (exenatide, liraglutide, etc.) and tirzepatide, and does not mention or report pharmacokinetic parameters for mazdutide. |
| PD | Min_2025 | not_relevant | 0 | 0 | The paper is a review of GLP-1 RAs and tirzepatide, focusing on PK and DDIs; it does not contain any data, analysis, or PD parameters for mazdutide. |
| popPK | Nong_2026 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy and safety outcomes (weight loss, adverse events) for obesity drugs, not a pharmacokinetic study, and contains no PK parameters for mazdutide. |
| PD | Nong_2026 | not_relevant | 1 | 0 | The paper is a systematic review and network meta-analysis of clinical outcomes (benefits/harms) for obesity drugs, not a pharmacokinetic/pharmacodynamic study; it does not report exposure-response or dose-response PD parameters (e.g., Emax, EC50) for mazdutide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
