<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;flucloxacillin&quot;,&quot;href&quot;:&quot;drugs/drug_flucloxacillin/&quot;},{&quot;label&quot;:&quot;Jager_2020 \u00b7 base&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# flucloxacillin — `Flucloxacillin_Jager2020_base`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The maximum binding capacity unit of 0.46 mmol/L was unconvertible, causing a dimension mismatch on this structural parameter.

<div class="pk-model-meta" hidden drug="flucloxacillin" model-id="Flucloxacillin_Jager2020_base" status="rejected" stale="false" population="critically ill patients" measured-compound="flucloxacillin" parameterization="mechanistic" topology="2C"></div>

## Citation
Jager NGL, van Hest RM, Xie J, Wong G, Ulldemolins M, Brüggemann RJM et al. Optimization of flucloxacillin dosing regimens in critically ill patients using population pharmacokinetic modelling of total and unbound concentrations. The Journal of antimicrobial chemotherapy 75(9):2641–2649 (2020).
  ·  DOI: [10.1093/jac/dkaa187](https://doi.org/10.1093/jac/dkaa187)

## Population and dosing

**Population:** critically ill patients · condition severe infections · age group adult.

**Dosing:** 1000, 2000 mg, iv, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| B max (mmol/L) | Bmax | 0.46 | mmol/L |
| Kd (mmol/L) | KD | 0.0397 | mmol/L |
| CL (L/h) | CL | 54.6 | L/h |
| V 1 (L) | V1 | 51.5 | L |
| V 2 (L) | V2 | 55.9 | L |
| Q (L/h) | Q | 66.4 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The maximum binding capacity unit of 0.46 mmol/L was unconvertible, causing a dimension mismatch on this structural parameter.**

The record lists a maximum binding capacity of 0.46 mmol/L for flucloxacillin, but this unit could not be resolved to standard SI units. Consequently, the parameter lacked a compatible dimension, triggering a failure on the structural parameter. This dimensional inconsistency resulted in the rejection of the model record. Extracted — flucloxacillin: Bmax 0.46 mmol/L, KD 0.0397 mmol/L, CL 54.6 L/h, V1 51.5 L, V2 55.9 L, Q 66.4 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has flucloxacillin, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| B max (mmol/L) | `Q332` · Bmax | 0.46 | mmol/L |  |  | mM/l | space_fold (0.95) | dkaa187-T2:row2:col1, dkaa187-T2:row2:col2 |
| Kd (mmol/L) | `Q331` · KD | 0.0397 | mmol/L |  |  | mM/l | exact (1) | dkaa187-T2:row3:col1, dkaa187-T2:row3:col2 |
| CL (L/h) | `Q22` · CL | 54.6 | L/h | 1.517e-05 | m3/s | l/h | exact (1) | dkaa187-T2:row4:col1, dkaa187-T2:row4:col2 |
| V 1 (L) | `Q63` · V1 | 51.5 | L | 0.0515 | m3 | l | space_fold (0.95) | dkaa187-T2:row5:col1, dkaa187-T2:row5:col2 |
| V 2 (L) | `Q64` · V2 | 55.9 | L | 0.0559 | m3 | l | space_fold (0.95) | dkaa187-T2:row6:col1, dkaa187-T2:row6:col2 |
| Q (L/h) | `Q30` · Q | 66.4 | L/h | 1.844e-05 | m3/s | l/h | exact (1) | dkaa187-T2:row7:col1, dkaa187-T2:row7:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'proportional error, unbound flucloxacillin' routed out of structural estimates ('Residual variability')
- table section residual_error: 'proportional error, total flucloxacillin' routed out of structural estimates ('Residual variability')
- unit_dimension_mismatch: 'Kd (mmol/L)' → Q331 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Bmax (%CV)' — extend the ontology if this is a real PK parameter (source ['dkaa187-T2:row9:col1', 'dkaa187-T2:row9:col2'])
- dropped unlinked row (NIL): 'CL (%CV)' — extend the ontology if this is a real PK parameter (source ['dkaa187-T2:row10:col1', 'dkaa187-T2:row10:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=flucloxacillin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- model-stage split: 'structural model' is the base model of Jager_2020 (paper reports 2 stages: final model, structural model); same population, different model-building step

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | flucloxacillin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | flucloxacillin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['dkaa187-T2:row4:col1', 'dkaa187-T2:row4:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['dkaa187-T2:row7:col1', 'dkaa187-T2:row7:col2'] |
| C5_dimension_Q331 | fail | [substance] / [length] ** 3 | mmol/L | ['dkaa187-T2:row3:col1', 'dkaa187-T2:row3:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['dkaa187-T2:row5:col1', 'dkaa187-T2:row5:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['dkaa187-T2:row6:col1', 'dkaa187-T2:row6:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 54.6 | ['dkaa187-T2:row4:col1', 'dkaa187-T2:row4:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 54.6 L/h | ['dkaa187-T2:row4:col1', 'dkaa187-T2:row4:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 51.5 L | ['dkaa187-T2:row5:col1', 'dkaa187-T2:row5:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 55.9 L | ['dkaa187-T2:row6:col1', 'dkaa187-T2:row6:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bflucloxacillin%5D%20Flucloxacillin_Jager2020_base&body=Drug%3A%20flucloxacillin%0ARecord%3A%20Flucloxacillin_Jager2020_base%0APaper%3A%20Jager_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_flucloxacillin/Flucloxacillin_Jager2020_base%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 10:02 UTC</sub>
