<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;empagliflozin&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/&quot;},{&quot;label&quot;:&quot;Baron_2016 \u00b7 10_mg_observed&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;pd_Rascher_2025_HbA1c&quot;,&quot;label&quot;:&quot;Rascher_2025 \u00b7 HbA1c&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/pd_Rascher_2025_HbA1c.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# empagliflozin — `Empagliflozin_Baron2016_10_mg_observed`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> V has no unit.

<div class="pk-model-meta" hidden drug="empagliflozin" model-id="Empagliflozin_Baron2016_10_mg_observed" status="needs_review" stale="false" population="patients with type 2 diabetes" measured-compound="empagliflozin" parameterization="apparent" topology="2C"></div>

## Citation
Baron KT, Macha S, Broedl UC, Nock V, Retlich S, Riggs M. Population Pharmacokinetics and Exposure-Response (Efficacy and Safety/Tolerability) of Empagliflozin in Patients with Type 2 Diabetes. Diabetes therapy : research, treatment and education of diabetes and related disorders 7(3):455–471 (2016).
  ·  DOI: [10.1007/s13300-016-0174-y](https://doi.org/10.1007/s13300-016-0174-y)

## Population and dosing

**Population:** patients with type 2 diabetes · condition type 2 diabetes · age group adult · n = ,.

**Dosing:** 1, 100 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| egfr_60_90_ml_min_1.73_m2 | egfr_60_90_ml_min_1.73_m2 | -0.40 |  |
| CL/F | CL/F | 10.6 | L/h |
| V 2/F | V2/F | 3.14 | L |
| apparent intercompartmental clearance (Q/F) | Q | 6.34 | L/h |
| events consistent with volume depletion [0.770 (0.454, 1.30)] | V | 0.77 | OR |
| KA (1/h) exp(Ɵ 3) First‐order absorption rate constant | kabs | 0.239 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**V has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (V), so that value has no SI equivalent. Extracted — empagliflozin: CL/F 10.6 L/h, V2/F 3.14 L, Q 6.34 L/h, V 0.77 OR, kabs 0.239 1/h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has empagliflozin, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| egfr_60_90_ml_min_1.73_m2 | `Q900` · egfr_60_90_ml_min_1.73_m2 | -0.40 |  |  |  |  |  | Tab3:row3:col1 |
| CL/F | `Q27` · CL/F | 10.6 | L/h | 2.944e-06 | m3/s | L/h | exact (1) | Baron_2016:results_prose |
| V 2/F | `Q82` · V2/F | 3.14 | L | 0.00314 | m3 | L | space_fold (0.95) | Baron_2016:results_prose |
| apparent intercompartmental clearance (Q/F) | `Q30` · Q | 6.34 | L/h | 1.761e-06 | m3/s | L/h | boundary (0.8) | Baron_2016:results_prose |
| events consistent with volume depletion [0.770 (0.454, 1.30)] | `Q61` · V | 0.77 | OR |  |  | OR | boundary (0.8) | Baron_2016:other_prose |
| KA (1/h) exp(Ɵ 3) First‐order absorption rate constant | `Q49` · kabs | 0.239 | 1/h | 6.639e-05 | 1/s | 1/h | review_gapfill (0.7) | Rascher_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Elderly (75–85 years)' — extend the ontology if this is a real PK parameter (source ['Tab3:row2:col1'])
- covariate level 'eGFR 60–90 mL/min/1.73 m2' → Q900:egfr_60_90_ml_min_1.73_m2 = -0.40 (linear_fractional on the model)
- salvaged Q27 ('CL/F'=10.6) from results prose — parameter table was unreadable
- salvaged Q82 ('V 2/F'=3.14) from results prose — parameter table was unreadable
- salvaged Q30 ('apparent intercompartmental clearance (Q/F)'=6.34) from results prose — parameter table was unreadable
- salvaged Q61 ('events consistent with volume depletion [0.770 (0.454, 1.30)]'=0.77) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=empagliflozin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: '10 mg / observed' subgroup of Baron_2016 (paper reports 5 populations: 10 mg / observed, 10 mg / predicted, 25 mg / observed, 25 mg / predicted, estimate)
- gap-filled Q49 (kabs) from Rascher_2025's review values (primary lacked it)

**Extraction notes:**
- table Tab3: units_need_context
- table Tab3: unparsed_numeric_cell
- table Baron_2016_table_S1: missing_label
- table Baron_2016_table_S1: ambiguous_uncertainty_binding
- table Baron_2016_table_S1: unbound_uncertainty
- table Baron_2016_table_S1: unparsed_numeric_cell
- companion parameter table S1 transcribed (81 record(s), model stage 'final')
- LLM selected parameter table(s) S1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.8 (12/15 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[alag1]` |  | 0.500 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | empagliflozin | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | empagliflozin | unknown | mismatch |

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
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Rascher_2025:review'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | OR | ['Baron_2016:other_prose'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 10.6 L/h | ['Baron_2016:results_prose'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 3.14 L | ['Baron_2016:results_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bempagliflozin%5D%20Empagliflozin_Baron2016_10_mg_observed&body=Drug%3A%20empagliflozin%0ARecord%3A%20Empagliflozin_Baron2016_10_mg_observed%0APaper%3A%20Baron_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_empagliflozin/Empagliflozin_Baron2016_10_mg_observed%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 09:58 UTC</sub>
