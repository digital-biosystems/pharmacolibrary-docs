<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;cetuximab&quot;,&quot;href&quot;:&quot;drugs/drug_cetuximab/&quot;},{&quot;label&quot;:&quot;Pointreau_2016 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cetuximab — `Cetuximab_Pointreau2016_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

<div class="pk-model-meta" hidden drug="cetuximab" model-id="Cetuximab_Pointreau2016_reference" status="not_modelled" stale="false" population="patients with head and neck squamous cell carcinoma" measured-compound="cetuximab" parameterization="mechanistic" topology="2C"></div>

## Citation
Pointreau Y, Azzopardi N, Ternant D, Calais G, Paintaud G. Cetuximab Pharmacokinetics Influences Overall Survival in Patients With Head and Neck Cancer. Therapeutic drug monitoring 38(5):567–572 (2016).
  ·  DOI: [10.1097/FTD.0000000000000321](https://doi.org/10.1097/FTD.0000000000000321)

## Population and dosing

**Population:** patients with head and neck squamous cell carcinoma · condition head and neck squamous cell carcinoma · age group adult · n = 34.

**Dosing:** 250, 400 mg/m2, iv, multiple, every 168 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| V₁, L | V1 | 3 | L | 0.09 |
| CL, L/d | CL | 12 | L/d | 0.07 |
| V₂, L | V2 | 15 | L | 0.82 |
| Q, L/d | Q | 15 | L/d | 0.09 |
| k₀, mg/d | R1 | 56 | mg/d | 3.70 |
| βV₁(BSA) | allometric_exponent | 21 | BSA | 0.26 |
| βk₀(TTT) | equation variable | 49 | TTT | 0.59 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.267). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No model has been built from this record yet.**

A reported unit could not be converted (R1, allometric_exponent and equation variable), so that value has no SI equivalent.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on how the model is parameterised: this record has mechanistic, the second reading apparent; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| V₁, L | `Q63` · V1 | 3 | L | 0.003 | m3 | l | 0.09 | exact (1) | Pointreau_2016_table_p4_3:row0:col1, Pointreau_2016_table_p4_3:row0:col2, Pointreau_2016_table_p4_3:row0:col3 |
| CL, L/d | `Q22` · CL | 12 | L/d | 1.389e-07 | m3/s | l/d | 0.07 | exact (1) | Pointreau_2016_table_p4_3:row1:col1, Pointreau_2016_table_p4_3:row1:col2, Pointreau_2016_table_p4_3:row1:col3 |
| V₂, L | `Q64` · V2 | 15 | L | 0.015 | m3 | l | 0.82 | exact (1) | Pointreau_2016_table_p4_3:row2:col1, Pointreau_2016_table_p4_3:row2:col2, Pointreau_2016_table_p4_3:row2:col3 |
| Q, L/d | `Q30` · Q | 15 | L/d | 1.736e-07 | m3/s | l/d | 0.09 | exact (1) | Pointreau_2016_table_p4_3:row3:col1, Pointreau_2016_table_p4_3:row3:col2, Pointreau_2016_table_p4_3:row3:col3 |
| k₀, mg/d | `Q307` · R1 | 56 | mg/d |  |  | mg/d | 3.70 | exact (1) | Pointreau_2016_table_p4_3:row4:col1, Pointreau_2016_table_p4_3:row4:col2, Pointreau_2016_table_p4_3:row4:col3 |
| βV₁(BSA) | `Q319` · allometric_exponent | 21 | BSA |  |  | bsa | 0.26 | llm_corrected (0.6) | Pointreau_2016_table_p4_3:row5:col1, Pointreau_2016_table_p4_3:row5:col2, Pointreau_2016_table_p4_3:row5:col3, Pointreau_2016_table_p4_3:row5:col4 |
| βk₀(TTT) | `Q900` · equation variable | 49 | TTT |  |  | ttt | 0.59 | llm_corrected (0.6) | Pointreau_2016_table_p4_3:row7:col1, Pointreau_2016_table_p4_3:row7:col2, Pointreau_2016_table_p4_3:row7:col3, Pointreau_2016_table_p4_3:row7:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'p' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'BSA' (allometric_exponent)
- dropped unlinked row (NIL): 'βV₂(BSA)' — extend the ontology if this is a real PK parameter (source ['Pointreau_2016_table_p4_3:row6:col1', 'Pointreau_2016_table_p4_3:row6:col2', 'Pointreau_2016_table_p4_3:row6:col3', 'Pointreau_2016_table_p4_3:row6:col4'])
- unit_dimension_unknown: 'TTT' (equation variable)
- dropped unlinked row (NIL): 'βCL(TTT)' — extend the ontology if this is a real PK parameter (source ['Pointreau_2016_table_p4_3:row8:col1', 'Pointreau_2016_table_p4_3:row8:col2', 'Pointreau_2016_table_p4_3:row8:col3', 'Pointreau_2016_table_p4_3:row8:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cetuximab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- molar mass: none found for 'cetuximab' — its concentrations stay mass-only

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.267 (4/15 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `qwen3.8-27b` | `parameters[cl]` | 12 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[k0]` | 56 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[q]` | 15 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v1]` | 3 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v2]` | 15 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[βcl]` |  | 0.037 | only_one_extracted |
| `qwen3.8-27b` | `parameters[βk0]` | 49 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[βv1].parameter_id` | Q319 | Q290 | mismatch |
| `qwen3.8-27b` | `parameters[βv1].value` | 21 | 0.000012 | mismatch |
| `qwen3.8-27b` | `parameters[βv2]` |  | 0.00063 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Pointreau_2016_table_p4_3:row1:col1', 'Pointreau_2016_table_p4_3:row1:col2', 'Pointreau_2016_table_p4_3:row1:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Pointreau_2016_table_p4_3:row3:col1', 'Pointreau_2016_table_p4_3:row3:col2', 'Pointreau_2016_table_p4_3:row3:col3'] |
| C5_dimension_Q307 | pass | [mass] / [time] |  | ['Pointreau_2016_table_p4_3:row4:col1', 'Pointreau_2016_table_p4_3:row4:col2', 'Pointreau_2016_table_p4_3:row4:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Pointreau_2016_table_p4_3:row0:col1', 'Pointreau_2016_table_p4_3:row0:col2', 'Pointreau_2016_table_p4_3:row0:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Pointreau_2016_table_p4_3:row2:col1', 'Pointreau_2016_table_p4_3:row2:col2', 'Pointreau_2016_table_p4_3:row2:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 12 | ['Pointreau_2016_table_p4_3:row1:col1', 'Pointreau_2016_table_p4_3:row1:col2', 'Pointreau_2016_table_p4_3:row1:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.5 L/h | ['Pointreau_2016_table_p4_3:row1:col1', 'Pointreau_2016_table_p4_3:row1:col2', 'Pointreau_2016_table_p4_3:row1:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3 L | ['Pointreau_2016_table_p4_3:row0:col1', 'Pointreau_2016_table_p4_3:row0:col2', 'Pointreau_2016_table_p4_3:row0:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 15 L | ['Pointreau_2016_table_p4_3:row2:col1', 'Pointreau_2016_table_p4_3:row2:col2', 'Pointreau_2016_table_p4_3:row2:col3'] |

**Reviewer per-scenario checks:**

| check | status | note |
|---|---|---|
| T0_analyte_identity | pass | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped | no covariate effects in record |
| T3_param_coverage | skipped | no emitted model to inspect (engineer build absent) |
| T6_deviations | pass | no engineer deviations to adjudicate |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcetuximab%5D%20Cetuximab_Pointreau2016_reference&body=Drug%3A%20cetuximab%0ARecord%3A%20Cetuximab_Pointreau2016_reference%0APaper%3A%20Pointreau_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cetuximab/Cetuximab_Pointreau2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 11:25 UTC</sub>
