<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Orforglipron&quot;}]"></div>

# Orforglipron

- **generic name:** Orforglipron
- **ATC codes:** not captured
- **DrugBank:** [DB18964](https://go.drugbank.com/drugs/DB18964) · **PubChem:** not captured
- **molar mass:** 882.974 g/mol (C48H48F2N10O5) — DrugBank
- **groups:** investigational

## About

**Description.** Orforglipron is under investigation in clinical trial NCT06010004 (A Long-term Safety Study of Orforglipron (LY3502970) in Participants With Type 2 Diabetes).

<p><small>Source: <a href="https://go.drugbank.com/drugs/DB18964">DrugBank DB18964</a> · <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a></small></p>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-03 18:44 | 4:25 | 0/0/0 | 1/0/0 | 0/0/0 | 172,462/2,375 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 4/10 | 12/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Guo_2025_Weight](drugs/drug_orforglipron/pd_Guo_2025_Weight.md) | weight reduction ← orforglipron · direct Emax (saturable) effect | — | Guo H et al., Comparative efficacy and safety of GLP-…, Obesity pillars (2025) | [10.1016/j.obpill.2025.100162](https://doi.org/10.1016/j.obpill.2025.100162) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 20 returned
- **screened:** 7  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Emara_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis of efficacy and safety outcomes (weight, HbA1c) and does not report pharmacokinetic parameters. |
| PD | Emara_2026 | not_relevant | 3 | 2 | The paper is a meta-analysis reporting pooled mean differences for dose subgroups (dose-response trend) but does not provide individual-level concentration-effect data, PK/PD modeling, or specific PD parameters like Emax or EC50. |
| popPK | Frias_2023 | irrelevant | 0 | 0 | The paper is a Phase 2 efficacy and safety trial reporting HbA1c and body weight changes, with no quantitative pharmacokinetic parameters (CL, V, ka, etc.) provided. |
| popPK | Guo_2025 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of pharmacodynamic efficacy (weight reduction) for GLP-1 receptor agonists, not a pharmacokinetic study reporting disposition parameters (CL, V, ka) for orforglipron. |
| popPK | Hageen_2026 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy outcomes (weight and glycemic control) and does not report pharmacokinetic parameters. |
| PD | Hageen_2026 | not_relevant | 3 | 2 | The paper is a network meta-analysis reporting dose-response trends (mean differences and odds ratios) across discrete doses, but it does not provide a pharmacodynamic model, concentration-effect relationship, or specific PD parameters like Emax or EC50. |
| popPK | Hageen_2026_2 | irrelevant | 0 | 0 | The paper is a network meta-analysis of gastrointestinal and hepatic safety outcomes (adverse events and enzyme levels), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Hageen_2026_2 | not_relevant | 3 | 2 | The paper is a network meta-analysis reporting dose-response trends for adverse events and enzyme changes (ORs/MDs) but does not provide pharmacodynamic parameters (Emax, EC50) or concentration-effect relationships. |
| popPK | Ismaiel_2025 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis of gastrointestinal adverse events, not a pharmacokinetic study, and contains no PK parameters for orforglipron. |
| PD | Ismaiel_2025 | not_relevant | 1 | 0 | The paper is a systematic review and network meta-analysis of adverse event risks (relative risks) and does not report pharmacokinetic or pharmacodynamic modeling, concentration-effect curves, or numeric PD parameters like Emax or EC50. |
| popPK | Jamal_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis of efficacy and safety outcomes (HbA1c, weight, BP) and does not report pharmacokinetic parameters. |
| PD | Jamal_2026 | not_relevant | 2 | 1 | The paper is a meta-analysis reporting pooled mean differences for dose groups, but it does not provide a pharmacodynamic model, concentration-effect relationship, or specific numeric PD parameters (e.g., Emax, EC50) for orforglipron. |
| popPK | Li_2026 | irrelevant | 2 | 0 | The paper focuses on the discovery of new analogs (17-P1 and 24-P1) using orforglipron as a lead/comparator, and does not report quantitative compartmental PK parameters (CL, V, Q, ka) for orforglipron itself. |
| PD | Li_2026 | not_relevant | 3 | 2 | The paper reports in vitro potency (EC50) and qualitative in vivo efficacy (glucose lowering) for analogs, but does not provide an exposure-response or dose-response analysis with numeric PD parameters for Orforglipron itself. |
| PGx | Malluhi_2026 | not_relevant | 0 | 0 | The paper is a narrative review on ocular safety and pharmacokinetic exposure of GLP-1 RAs, and it does not report any pharmacogenomic effects on PK or PD parameters for orforglipron. |
| PGx | Morse_2026 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (DDIs) involving enzyme/transporter precipitants, not pharmacogenomic effects (gene variants/genotypes). |
| popPK | Niazi_2026 | irrelevant | 0 | 0 | The paper is a review of oral peptide delivery that mentions orforglipron only as a small molecule GLP-1 agonist in the context of competitive landscape, without providing any quantitative PK parameters for it. |
| PD | Niazi_2026 | not_relevant | 1 | 0 | The paper is a review on oral peptide delivery strategies and mentions orforglipron only as an emerging small molecule GLP-1 agonist without providing any specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for it. |
| popPK | Nong_2026 | irrelevant | 0 | 0 | This is a network meta-analysis of clinical efficacy and safety outcomes (weight loss, adverse events) for obesity drugs, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Nong_2026 | not_relevant | 1 | 0 | The paper is a systematic review and network meta-analysis of clinical outcomes (weight loss) for obesity drugs, not a pharmacokinetic/pharmacodynamic modeling study; it does not report exposure-response relationships or numeric PD parameters (e.g., Emax, EC50) for orforglipron. |
| PD | Pratt_2023 | not_relevant | 3 | 1 | The abstract reports qualitative dose-dependent effects (weight loss, glucose reduction) but does not provide numeric PD parameters (Emax, EC50) or a formal concentration-effect model. |
| popPK | Pratt_2023_2 | relevant | 8 | 4 | The study reports non-compartmental PK parameters (tmax, half-life) for orforglipron in humans, but detailed numeric values for Cmax and AUC are referenced in Table S1 which is not included in the evidence. |
| popPK | Tantoush_2026 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis of efficacy and safety outcomes (HbA1c, weight, adverse events) and does not report pharmacokinetic parameters. |
| PD | Tantoush_2026 | not_relevant | 3 | 2 | The paper is a network meta-analysis reporting mean differences in clinical outcomes (HbA1c, weight) across fixed doses, but it does not provide a pharmacodynamic model, concentration-effect curve, or specific PD parameters (Emax, EC50) for orforglipron. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
