<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Retatrutide&quot;}]"></div>

# Retatrutide

- **generic name:** Retatrutide
- **ATC codes:** not captured
- **DrugBank:** [DB18993](https://go.drugbank.com/drugs/DB18993) · **PubChem:** not captured
- **groups:** investigational

## About

**Description.** Retatrutide is under investigation in clinical trial NCT06354660 (Effect of Retatrutide Compared With Placebo in Adult Participants With Type 2 Diabetes and Inadequate Glycemic Control With Diet and Exercise Alone (TRANSCEND-T2D-1)).

<p><small>Source: <a href="https://go.drugbank.com/drugs/DB18993">DrugBank DB18993</a> · <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a></small></p>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-03 18:40 | 5:30 | 0/0/0 | 1/0/0 | 0/0/0 | 187,423/3,800 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 3/9 | 12/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Guo_2025_Weight](drugs/drug_retatrutide/pd_Guo_2025_Weight.md) | weight reduction ← Retatrutide · direct Emax (saturable) effect | — | Guo H et al., Comparative efficacy and safety of GLP-…, Obesity pillars (2025) | [10.1016/j.obpill.2025.100162](https://doi.org/10.1016/j.obpill.2025.100162) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 19 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Concepción-Zavaleta_2025 | irrelevant | 0 | 0 | The paper is a narrative review of anti-obesity drugs in MASLD and does not report original quantitative pharmacokinetic parameters for retatrutide. |
| popPK | Doggrell_2023 | irrelevant | 2 | 0 | The paper is a review/expert opinion that mentions PK supports dosing but does not report quantitative disposition parameters or model values. |
| popPK | Drucker_2024 | irrelevant | 0 | 0 | The paper is a narrative review of GLP-1 medicines that mentions retatrutide only as an investigational molecule without reporting any quantitative pharmacokinetic parameters. |
| PD | Drucker_2024 | not_relevant | 1 | 0 | The text is a narrative review discussing the development and safety of GLP-1 medicines, including retatrutide, but it does not report specific pharmacokinetic or pharmacodynamic data, models, or numeric parameters. |
| popPK | Groothof_2025 | irrelevant | 0 | 0 | The paper is a perspective article discussing tolvaptan and ADPKD, with no mention of retatrutide or its pharmacokinetic parameters. |
| PD | Groothof_2025 | not_relevant | 0 | 0 | The paper is a perspective article discussing methodological biases in clinical trials for tolvaptan and other drugs, and does not report any pharmacodynamic or exposure-response data for Retatrutide. |
| popPK | Guo_2025 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of pharmacodynamic efficacy (weight reduction) and safety, not a pharmacokinetic study reporting disposition parameters like clearance or volume for retatrutide. |
| popPK | Heerspink_2026 | irrelevant | 0 | 0 | The paper is a clinical trial design and baseline characteristics report for a kidney function study (measuring GFR via iohexol clearance), not a pharmacokinetic study of retatrutide itself, and contains no PK parameters for the drug. |
| popPK | Jastreboff_2023 | irrelevant | 0 | 0 | The paper is a Phase 2 clinical trial focused on efficacy (weight loss) and safety, with no report of quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study is a mechanistic multi-omic analysis of adipose tissue remodeling in mice and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for retatrutide. |
| popPK | Mateus-Gomes_2026 | irrelevant | 0 | 0 | The paper is a review of metabolic inflammation and neuroinflammation in obesity, mentioning retatrutide only as a therapeutic agent without providing any pharmacokinetic data. |
| popPK | Min_2025 | irrelevant | 0 | 0 | The paper is a review of GLP-1 RAs (exenatide, liraglutide, dulaglutide, semaglutide) and tirzepatide, and does not contain any data or parameters for retatrutide. |
| PD | Min_2025 | not_relevant | 0 | 0 | The paper is a review of pharmacokinetics and drug-drug interactions for GLP-1 RAs and tirzepatide; it does not mention retatrutide or report any pharmacodynamic (exposure-response) parameters for it. |
| popPK | Naeem_2024 | irrelevant | 2 | 0 | This is a review/correspondence that discusses retatrutide's clinical efficacy and mentions a half-life of ~6 days, but it does not report quantitative disposition parameters (CL, V, Q, ka) or a compartmental/population-PK model. |
| popPK | Nong_2026 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy and safety outcomes (weight loss, adverse events) for obesity drugs, not a pharmacokinetic study, and contains no PK parameters for retatrutide. |
| PD | Nong_2026 | not_relevant | 1 | 0 | The paper is a systematic review and network meta-analysis of clinical outcomes (benefits/harms) for obesity drugs, not a pharmacokinetic/pharmacodynamic modeling study; it does not report specific exposure-response or dose-response PD parameters (e.g., Emax, EC50) for retatrutide. |
| popPK | Paceana_2026 | irrelevant | 0 | 0 | This is a narrative review of pathophysiology and clinical outcomes for GLP-1 agonists in stroke, containing no original pharmacokinetic data or quantitative disposition parameters for retatrutide. |
| popPK | Pallavi_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy (HbA1c, weight) and safety, containing no pharmacokinetic parameters (CL, V, ka, etc.) for retatrutide. |
| PD | Pallavi_2025 | not_relevant | 2 | 1 | The paper is a systematic review and meta-analysis that reports aggregate clinical outcomes (HbA1c, weight) and a qualitative dose-dependent trend, but it does not provide individual-level exposure data, concentration-effect curves, or specific pharmacodynamic parameters (e.g., Emax, EC50) for retatrutide. |
| popPK | Roskoski_2026 | irrelevant | 0 | 0 | The paper is a general review of incretin receptor agonists and does not report any quantitative pharmacokinetic parameters for retatrutide. |
| popPK | Schifano_2026 | irrelevant | 0 | 0 | The paper is a review of neuropsychiatric outcomes associated with GLP-1 RAs and does not report any pharmacokinetic parameters for retatrutide. |
| popPK | Tetelbaun_2024 | irrelevant | 2 | 0 | This is a narrative review that summarizes clinical trial findings without providing original quantitative PK parameter values (CL, V, Q, ka) or compartmental models. |
| popPK | Urva_2022 | irrelevant | 2 | 0 | The study investigates LY3437943, not retatrutide, and only reports a half-life without compartmental parameters. |
| popPK | Vishnoi_2026 | irrelevant | 0 | 0 | The paper is an in-silico molecular dynamics study focusing on binding enthalpies and receptor interactions, not pharmacokinetic disposition parameters. |
| PD | Vishnoi_2026 | not_relevant | 0 | 0 | The paper is a computational molecular dynamics study reporting binding enthalpies and structural interactions, not a pharmacodynamic or exposure-response analysis with numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
