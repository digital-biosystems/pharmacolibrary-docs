<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;alemtuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_alemtuzumab/&quot;},{&quot;label&quot;:&quot;Mould_2007 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alemtuzumab_Dong2022_reference&quot;,&quot;label&quot;:&quot;Dong_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alemtuzumab/Alemtuzumab_Dong2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alemtuzumab — `Alemtuzumab_Mould2007_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The elimination rate constant for alemtuzumab is assigned units of micrograms per liter, which is dimensionally invalid for a rate constant.

<div class="pk-model-meta" hidden drug="alemtuzumab" model-id="Alemtuzumab_Mould2007_reference" status="rejected" stale="false" population="patients with B-cell chronic lymphocytic leukaemia" measured-compound="alemtuzumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Mould DR, Baumann A, Kuhlmann J, Keating MJ, Weitman S, Hillmen P et al. Population pharmacokinetics-pharmacodynamics of alemtuzumab (Campath) in patients with chronic lymphocytic leukaemia and its link to treatment response. British journal of clinical pharmacology 64(3):278–291 (2007).
  ·  DOI: [10.1111/j.1365-2125.2007.02914.x](https://doi.org/10.1111/j.1365-2125.2007.02914.x)

## Population and dosing

**Population:** patients with B-cell chronic lymphocytic leukaemia · condition chronic lymphocytic leukaemia · age group adult · n = &gt;=67.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| K(m) | kel | 338 | microg l(-1) |
| Q | Q | 1.05 | l h(-1) |
| maximal trough concentration | Ctrough | 13.2 | microg ml(-1) |
| AUC(0-tau) | AUC | 484 | microg h(-1) ml(-1) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The elimination rate constant for alemtuzumab is assigned units of micrograms per liter, which is dimensionally invalid for a rate constant.**

The record lists the elimination rate constant with a value of 338 and units of micrograms per liter, a concentration unit rather than a reciprocal time unit. This dimensional mismatch on a structural parameter caused the rejection. Additionally, the record was built from the abstract alone, so reported summary statistics stood in for a fitted model. Extracted — alemtuzumab: kel 338 microg l(-1), Q 1.05 l h(-1), Ctrough 13.2 microg ml(-1), AUC 484 microg h(-1) ml(-1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has alemtuzumab, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| K(m) | `Q47` · kel | 338 | microg l(-1) |  |  | µg/l | exact (1) | Mould_2007:abstract |
| Q | `Q30` · Q | 1.05 | l h(-1) | 2.917e-07 | m3/s | l/h | exact (1) | Mould_2007:abstract |
| maximal trough concentration | `Q37` · Ctrough | 13.2 | microg ml(-1) |  |  | µg/ml | llm_confirmed (0.6) | Mould_2007:abstract |
| AUC(0-tau) | `Q88` · AUC | 484 | microg h(-1) ml(-1) |  |  | µg/(h·ml) | exact (1) | Mould_2007:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| V(max) | Q61 | exact |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'V(max)' → Q61 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'K(m)' → Q47 (unit '[mass] / [length] ** 3' vs ontology '1 / [time]') — route to review
- dropped duplicate Q61 ('V(1)', value 11.3) — already have one for this compound
- dropped duplicate Q61 ('V(2)', value 41.5) — already have one for this compound
- unit_dimension_mismatch: 'AUC(0-tau)' → Q88 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alemtuzumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'alemtuzumab' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Mould_2007_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (2/16 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc]` | 484 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc]` |  | 484 | only_one_extracted |
| `gpt-oss-120b` | `parameters[isv k]` |  | 145 | only_one_extracted |
| `gpt-oss-120b` | `parameters[isv v]` |  | 32 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k]` | 338 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k]` |  | 338 | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximal trough concentration]` | 13.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximal trough concentration]` |  | 13.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 1.05 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` |  | 1.05 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | alemtuzumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | alemtuzumab | unknown | mismatch |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Mould_2007:abstract'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  | ['Mould_2007:abstract'] |
| C5_dimension_Q47 | fail | [mass] / [length] ** 3 | microg l(-1) | ['Mould_2007:abstract'] |
| C5_dimension_Q61 | fail | [mass] / [time] | microg h(-1) | ['Mould_2007:abstract'] |
| C5_dimension_Q88 | fail | [mass] / [time] / [length] ** 3 | microg h(-1) ml(-1) | ['Mould_2007:abstract'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balemtuzumab%5D%20Alemtuzumab_Mould2007_reference&body=Drug%3A%20alemtuzumab%0ARecord%3A%20Alemtuzumab_Mould2007_reference%0APaper%3A%20Mould_2007%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_alemtuzumab/Alemtuzumab_Mould2007_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 22:00 UTC</sub>
