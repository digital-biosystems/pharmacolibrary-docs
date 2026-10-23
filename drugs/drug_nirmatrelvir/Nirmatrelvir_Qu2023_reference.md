<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Nirmatrelvir&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/&quot;},{&quot;label&quot;:&quot;Qu_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nirmatrelvir_Lv2025_reference&quot;,&quot;label&quot;:&quot;Lv_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Lv2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Yang2024_reference&quot;,&quot;label&quot;:&quot;Yang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Yang2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Zaryab2026_reference&quot;,&quot;label&quot;:&quot;Zaryab_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Zaryab2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Zhu2023_reference&quot;,&quot;label&quot;:&quot;Zhu_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Zhu2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Chen2024_reference&quot;,&quot;label&quot;:&quot;Chen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Chen2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Li2026_reference&quot;,&quot;label&quot;:&quot;Li_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Li2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Nirmatrelvir — `Nirmatrelvir_Qu2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The nirmatrelvir record was rejected because the absorption rate constant (ka = 0.776) was reported without a usable time-based unit, giving a dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="Nirmatrelvir" model-id="Nirmatrelvir_Qu2023_reference" status="rejected" stale="false" population="older adult Chinese patients with COVID-19 infection" measured-compound="nirmatrelvir" parameterization="apparent" topology="1C"></div>

## Citation
Qu Y, Su C, Xiang Z, Wang Y, Han J, Pan J et al. Population pharmacokinetic modeling and simulation for nirmatrelvir exposure assessment in Chinese older patients with COVID-19 infection. European journal of pharmaceutical sciences : official journal of the European Federation for Pharmaceutical Sciences 189:106535 (2023).
  ·  DOI: [10.1016/j.ejps.2023.106535](https://doi.org/10.1016/j.ejps.2023.106535)

## Population and dosing

**Population:** older adult Chinese patients with COVID-19 infection · condition COVID-19 · age group elderly.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| apparent clearance (CL/F) | CL/F | 4.16 | L/h |
| apparent volumes of distribution (V/F) | V/F | 39.1 | L |
| absorption rate constant (ka) | kabs | 0.776 | ka |
| simulated AUCs increased (creatinine clearance 60 mL/min) | AUC | 26 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The nirmatrelvir record was rejected because the absorption rate constant (ka = 0.776) was reported without a usable time-based unit, giving a dimension mismatch on a structural parameter.**

The paper (Qu_2023, abstract-only) reports for nirmatrelvir an apparent clearance CL/F of 4.16 L/h, an apparent volume V/F of 39.1 L, and an absorption rate constant ka of 0.776 whose unit is given only as 'ka', not as a reciprocal time unit. That unitless entry fails the dimensional check on a structural parameter, so the record was refused. Because only the abstract was read, the reported summary statistics stood in for a fitted model, and the simulated AUC increase of 26% at creatinine clearance 60 mL/min is likewise an abstract-level figure rather than a fitted result. Extracted — nirmatrelvir: CL/F 4.16 L/h, V/F 39.1 L, kabs 0.776 ka, AUC 26 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has nirmatrelvir, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| apparent clearance (CL/F) | `Q27` · CL/F | 4.16 | L/h | 1.156e-06 | m3/s | l/h | exact (1) | Qu_2023:abstract |
| apparent volumes of distribution (V/F) | `Q76` · V/F | 39.1 | L | 0.0391 | m3 | l | llm_confirmed (0.6) | Qu_2023:abstract |
| absorption rate constant (ka) | `Q49` · kabs | 0.776 | ka |  |  | ka | exact (1) | Qu_2023:abstract |
| simulated AUCs increased (creatinine clearance 60 mL/min) | `Q88` · AUC | 26 | % |  |  | % | llm (0.6) | Qu_2023:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'absorption rate constant (ka)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'simulated AUCs increased (creatinine clearance 60 mL/min)' → Q88 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'simulated AUCs increased (creatinine clearance 45 mL/min)' → Q88 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q88 ('simulated AUCs increased (creatinine clearance 45 mL/min)', value 43) — already have one for this compound
- unit_dimension_mismatch: 'simulated AUCs increased (creatinine clearance 30 mL/min)' → Q88 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q88 ('simulated AUCs increased (creatinine clearance 30 mL/min)', value 72) — already have one for this compound
- unit_dimension_mismatch: 'simulated AUCs increased (creatinine clearance 15 mL/min)' → Q88 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q88 ('simulated AUCs increased (creatinine clearance 15 mL/min)', value 135) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=nirmatrelvir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Qu_2023_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.182 (2/11 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 0.776 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption rate constant]` |  | 0.776 | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent clearance]` | 4.16 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent clearance]` |  | 4.16 | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volumes of distribution]` | 39.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volumes of distribution]` |  | 39.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[simulated aucs increased]` | 26 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | nirmatrelvir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | nirmatrelvir | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Qu_2023:abstract'] |
| C5_dimension_Q49 | fail | [time] | ka | ['Qu_2023:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Qu_2023:abstract'] |
| C5_dimension_Q88 | fail | dimensionless | % | ['Qu_2023:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 4.16 L/h | ['Qu_2023:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 39.1 L | ['Qu_2023:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnirmatrelvir%5D%20Nirmatrelvir_Qu2023_reference&body=Drug%3A%20nirmatrelvir%0ARecord%3A%20Nirmatrelvir_Qu2023_reference%0APaper%3A%20Qu_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nirmatrelvir/Nirmatrelvir_Qu2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:40 UTC</sub>
