<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;cemiplimab&quot;,&quot;href&quot;:&quot;drugs/drug_cemiplimab/&quot;},{&quot;label&quot;:&quot;Paccaly_2021 \u00b7 after_first_dose&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cemiplimab — `Cemiplimab_Paccaly2021_after_first_dose`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> AUCt has no unit; the model does not reproduce the paper's terminal half-life (model/paper ratio 0.569).

<div class="pk-model-meta" hidden drug="cemiplimab" model-id="Cemiplimab_Paccaly2021_after_first_dose" status="needs_review" stale="false" population="patients with advanced malignancies, including advanced CSCC" measured-compound="cemiplimab" parameterization="mechanistic" topology="1C"></div>

## Citation
Paccaly AJ, Migden MR, Papadopoulos KP, Yang F, Davis JD, Rippley RK et al. Fixed Dose of Cemiplimab in Patients with Advanced Malignancies Based on Population Pharmacokinetic Analysis. Advances in therapy 38(5):2365–2378 (2021).
  ·  DOI: [10.1007/s12325-021-01638-5](https://doi.org/10.1007/s12325-021-01638-5)

## Population and dosing

**Population:** patients with advanced malignancies, including advanced CSCC · condition advanced malignancies, including cutaneous squamous cell carcinoma · n = 505.

**Dosing:** 1, 3, 10, 200 mg/kg and mg, iv, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax,2wk, mg/L | Cmax | 69.5 | mg/L |
| Ctrough,2wk, mg/L | Ctrough | 18.9 | mg/L |
| AUC0–6wk, day × mg/L | AUCt | 1880 |  |
| volume of distribution | V | 5.20 | L |
| Cemiplimab clearance after the first dose | CL | 0.33 | L/day |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**AUCt has no unit; the model does not reproduce the paper's terminal half-life (model/paper ratio 0.569).**

Without a unit the value cannot be converted, so the model cannot use it. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (Cmax and Ctrough), so that value has no SI equivalent. Extracted — cemiplimab: Cmax 69.5 mg/L, Ctrough 18.9 mg/L, AUCt 1.88e+03, V 5.2 L, CL 0.33 L/day.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of cemiplimab clearance: this record has none, the second reading 0.33; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax,2wk, mg/L | `Q32` · Cmax | 69.5 | mg/L |  |  | mg/l | llm_confirmed (0.6) | Paccaly_2021_table_2:row1:col1, Paccaly_2021_table_2:row1:col2, Paccaly_2021_table_2:row1:col3 |
| Ctrough,2wk, mg/L | `Q37` · Ctrough | 18.9 | mg/L |  |  | mg/l | llm_confirmed (0.6) | Paccaly_2021_table_2:row2:col1, Paccaly_2021_table_2:row2:col2, Paccaly_2021_table_2:row2:col3 |
| AUC0–6wk, day × mg/L | `Q19` · AUCt | 1880 |  |  |  |  | llm (0.6) | Paccaly_2021_table_2:row3:col1, Paccaly_2021_table_2:row3:col2, Paccaly_2021_table_2:row3:col3 |
| volume of distribution | `Q61` · V | 5.20 | L | 0.0052 | m3 | L | exact (1) | Paccaly_2021:other_prose |
| Cemiplimab clearance after the first dose | `Q22` · CL | 0.33 | L/day | 3.819e-09 | m3/s | L/h | boundary (0.8) | Paccaly_2021:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '3 mg/kg Q2W' — extend the ontology if this is a real PK parameter (source ['Paccaly_2021_table_2:row0:col1'])
- salvaged Q61 ('volume of distribution'=5.20) from results prose — parameter table was unreadable
- salvaged Q22 ('Cemiplimab clearance after the first dose'=0.33) from results prose — parameter table was unreadable
- implicit units: 'AUC0–6wk, day × mg/L' — the LLM proposed 'day × mg/L', whose dimension does not fit Q19; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cemiplimab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'after first dose' subgroup of Paccaly_2021 (paper reports 2 populations: after first dose, at steady state)
- molar mass: none found for 'cemiplimab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Paccaly_2021_table_2:row0:col2 = '350 mg Q3W'
- unparsed cell Paccaly_2021_table_2:row0:col3 = '350 mg Q3W'
- unparsed cell Paccaly_2021_table_2:row0:col6 = '350 mg Q3W'
- unparsed cell Paccaly_2021_table_2:row0:col7 = '350 mg Q3W'
- companion parameter table 2 transcribed (20 record(s))
- transposed table Paccaly_2021_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 3 transcribed (0 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cemiplimab clearance after the first dose]` | 0.33 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cemiplimab clearance]` |  | 0.33 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | fail | 19.2 | 10.92 | 0.5689 | 0.25 | reported t½β |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Paccaly_2021_table_2:row1:col1', 'Paccaly_2021_table_2:row1:col2', 'Paccaly_2021_table_2:row1:col3'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  |  |  | ['Paccaly_2021_table_2:row2:col1', 'Paccaly_2021_table_2:row2:col2', 'Paccaly_2021_table_2:row2:col3'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 |  |  |  | ['Paccaly_2021_table_2:row3:col1', 'Paccaly_2021_table_2:row3:col2', 'Paccaly_2021_table_2:row3:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.33 |  |  | ['Paccaly_2021:other_prose'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0138 L/h |  |  | ['Paccaly_2021:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.2 L |  |  | ['Paccaly_2021:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcemiplimab%5D%20Cemiplimab_Paccaly2021_after_first_dose&body=Drug%3A%20cemiplimab%0ARecord%3A%20Cemiplimab_Paccaly2021_after_first_dose%0APaper%3A%20Paccaly_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cemiplimab/Cemiplimab_Paccaly2021_after_first_dose%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 10:52 UTC</sub>
