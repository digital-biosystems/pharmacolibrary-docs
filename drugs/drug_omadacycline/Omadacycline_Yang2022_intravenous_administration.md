<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01A&quot;,&quot;href&quot;:&quot;atc/J01A.md&quot;},{&quot;label&quot;:&quot;omadacycline&quot;,&quot;href&quot;:&quot;drugs/drug_omadacycline/&quot;},{&quot;label&quot;:&quot;Yang_2022 \u00b7 intravenous_administration&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Omadacycline_Chapagain2022_reference&quot;,&quot;label&quot;:&quot;Chapagain_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_omadacycline/Omadacycline_Chapagain2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Omadacycline_Lakota2020_reference&quot;,&quot;label&quot;:&quot;Lakota_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_omadacycline/Omadacycline_Lakota2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Omadacycline_Singh2026_reference&quot;,&quot;label&quot;:&quot;Singh_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_omadacycline/Omadacycline_Singh2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# omadacycline — `Omadacycline_Yang2022_intravenous_administration`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> AUC has no unit; the model does not reproduce the paper's terminal half-life (model/paper ratio 0.716).

<div class="pk-model-meta" hidden drug="omadacycline" model-id="Omadacycline_Yang2022_intravenous_administration" status="needs_review" stale="false" population="healthy adults" measured-compound="omadacycline" parameterization="mechanistic" topology="3C"></div>

## Citation
Yang H, Huang Z, Chen Y, Zhu Y, Cao G, Wang J et al. Pharmacokinetics, Safety and Pharmacokinetics/Pharmacodynamics Analysis of Omadacycline in Chinese Healthy Subjects. Frontiers in pharmacology 13:869237 (2022).
  ·  DOI: [10.3389/fphar.2022.869237](https://doi.org/10.3389/fphar.2022.869237)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = 60.

**Dosing:** 50, 100, 150, 300, 450 mg, intravenous; oral, multiple.

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 15 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V 1 (L) | V1 | 17.2 | L |
| V 2 (L) | V2 | 58.1 | L |
| V 3 (L) | V3 | 115 | L |
| CL (L/h) | CL | 8.76 | L/h |
| CL 2 (L/h) | Q | 65.6 | L/h |
| Cmax (μg/ml) | Cmax | 1.01 | μg/ml |
| Tmax (h) | tmax | 0.54 | h |
| AUC (μg•h/mL) | AUC | 3.82 | μg•h/mL |
| AUC0-inf | AUC∞ | 5.70 | mg·h/L |
| t1/2 (h) | t1/2z | 17.2 | h |
| Css,min (μg/ml) | Css | 0.276 | μg/ml |
| Vz (L) | V | 220 | L |
| Rac (AUC) | AUC ratio | 1.51 | AUC |
| Fe(%) | fe | 31.6 |  |
| CLR (L/h) | CLR | 3.13 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**AUC has no unit; the model does not reproduce the paper's terminal half-life (model/paper ratio 0.716).**

Without a unit the value cannot be converted, so the model cannot use it. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (Cmax, AUC, AUC∞ and Css), so that value has no SI equivalent. Extracted — omadacycline: V1 17.2 L, V2 58.1 L, V3 115 L, CL 8.76 L/h, Q 65.6 L/h, Cmax 1.01 μg/ml, tmax 0.54 h, AUC 3.82 μg•h/mL, … (+7).

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V 1 (L) | `Q63` · V1 | 17.2 | L | 0.0172 | m3 | l | space_fold (0.95) | T2:row3:col1, T2:row3:col2, T2:row3:col3 |
| V 2 (L) | `Q64` · V2 | 58.1 | L | 0.0581 | m3 | l | space_fold (0.95) | T2:row4:col1, T2:row4:col2, T2:row4:col3 |
| V 3 (L) | `Q77` · V3 | 115 | L | 0.115 | m3 | l | space_fold (0.95) | T2:row5:col1, T2:row5:col2, T2:row5:col3 |
| CL (L/h) | `Q22` · CL | 8.76 | L/h | 2.433e-06 | m3/s | l/h | exact (1) | T2:row6:col1, T2:row6:col2, T2:row6:col3, Yang_2022_table_1:row8:col2, Yang_2022_table_1:row8:col3, Yang_2022_table_1:row8:col4, Yang_2022_table_1:row8:col5 |
| CL 2 (L/h) | `Q30` · Q | 65.6 | L/h | 1.822e-05 | m3/s | l/h | special_case (0.95) | T2:row7:col1, T2:row7:col2, T2:row7:col3 |
| Cmax (μg/ml) | `Q32` · Cmax | 1.01 | μg/ml |  |  | µg/ml | exact (1) | Yang_2022_table_1:row3:col2, Yang_2022_table_1:row3:col3, Yang_2022_table_1:row3:col4, Yang_2022_table_1:row3:col5 |
| Tmax (h) | `Q56` · tmax | 0.54 | h | 1944 | s | h | exact (1) | Yang_2022_table_1:row4:col4 |
| AUC (μg•h/mL) | `Q88` · AUC | 3.82 | μg•h/mL |  |  | (h·µg)/ml | exact (1) | Yang_2022_table_1:row5:col2, Yang_2022_table_1:row5:col3, Yang_2022_table_1:row5:col4, Yang_2022_table_1:row5:col5 |
| AUC0-inf | `Q17` · AUC∞ | 5.70 | mg·h/L |  |  | mg·h/L | exact (1) | Yang_2022_table_1:row6:col1, Yang_2022_table_1:row6:col2, Yang_2022_table_1:row6:col4, Yang_2022_table_1:row6:col5 |
| t1/2 (h) | `Q57` · t1/2z | 17.2 | h | 6.192e+04 | s | h | exact (1) | Yang_2022_table_1:row7:col1, Yang_2022_table_1:row7:col2, Yang_2022_table_1:row7:col3, Yang_2022_table_1:row7:col4, Yang_2022_table_1:row7:col5 |
| Css,min (μg/ml) | `Q34` · Css | 0.276 | μg/ml |  |  | µg/ml | exact (1) | Yang_2022_table_1:row9:col4 |
| Vz (L) | `Q61` · V | 220 | L | 0.22 | m3 | l | exact (1) | Yang_2022_table_1:row10:col2, Yang_2022_table_1:row10:col3, Yang_2022_table_1:row10:col4, Yang_2022_table_1:row10:col5 |
| Rac (AUC) | `Q21` · AUC ratio | 1.51 | AUC |  |  | auc | llm (0.6) | Yang_2022_table_1:row11:col4 |
| Fe(%) | `Q44` · fe | 31.6 |  |  |  |  | exact (1) | Yang_2022_table_1:row13:col3 |
| CLR (L/h) | `Q26` · CLR | 3.13 | L/h | 8.694e-07 | m3/s | l/h | exact (1) | Yang_2022_table_1:row14:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'n' — extend the ontology if this is a real PK parameter (source ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col3', 'Yang_2022_table_1:row2:col2', 'Yang_2022_table_1:row2:col3', 'Yang_2022_table_1:row2:col4', 'Yang_2022_table_1:row2:col5'])
- dropped duplicate Q22 ('CL 3 (L/h)', value '18.7') — already have one for this compound
- unit_dimension_unknown: 'μg•h/mL' (AUC)
- unit_dimension_unknown: 'AUC' (AUC ratio)
- unit_dimension_unknown: 'Cmax' (Cmax)
- dropped duplicate Q32 ('Rac (Cmax)', value '1.07') — already have one for this compound
- implicit units: 'AUC0-inf' → mg·h/L (from the paper text: "The paper text explicitly states: 'The steady-state AUC of 100 mg omadacycline i.v. and 300 mg omadacycline p. o. were 1")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=omadacycline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'intravenous administration' subgroup of Yang_2022 (paper reports 2 populations: intravenous administration, oral administration a)

**Extraction notes:**
- unparsed cell Yang_2022_table_1:row4:col2 = '0.55 (0.25, 0.57'
- unparsed cell Yang_2022_table_1:row4:col3 = '0.61 (0.57, 0.65)'
- unparsed cell Yang_2022_table_1:row4:col5 = '0.55 (0.25, 0.57)'
- unparsed cell Yang_2022_table_1:row4:col6 = '1.75 (1.00, 3.00)'
- unparsed cell Yang_2022_table_1:row4:col7 = '3.00 (3.00, 3.00'
- unparsed cell Yang_2022_table_1:row4:col9 = '3.98 (2.98, 3.98)'
- unparsed cell Yang_2022_table_1:row5:col1 = 'AUC0-24'
- companion parameter table 1 transcribed (67 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (19/19 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 15 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | fail | 1.9 | 1.361 | 0.7163 | 0.25 | reported t½β |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Yang_2022_table_1:row6:col1', 'Yang_2022_table_1:row6:col2', 'Yang_2022_table_1:row6:col4', 'Yang_2022_table_1:row6:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col3', 'Yang_2022_table_1:row8:col2', 'Yang_2022_table_1:row8:col3', 'Yang_2022_table_1:row8:col4', 'Yang_2022_table_1:row8:col5'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  |  |  | ['Yang_2022_table_1:row14:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['T2:row7:col1', 'T2:row7:col2', 'T2:row7:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Yang_2022_table_1:row3:col2', 'Yang_2022_table_1:row3:col3', 'Yang_2022_table_1:row3:col4', 'Yang_2022_table_1:row3:col5'] |
| C5_dimension_Q34 | pass | [mass] / [length] ** 3 |  |  |  | ['Yang_2022_table_1:row9:col4'] |
| C5_dimension_Q56 | pass | [time] |  |  |  | ['Yang_2022_table_1:row4:col4'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Yang_2022_table_1:row7:col1', 'Yang_2022_table_1:row7:col2', 'Yang_2022_table_1:row7:col3', 'Yang_2022_table_1:row7:col4', 'Yang_2022_table_1:row7:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['Yang_2022_table_1:row10:col2', 'Yang_2022_table_1:row10:col3', 'Yang_2022_table_1:row10:col4', 'Yang_2022_table_1:row10:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  |  |  | ['T2:row5:col1', 'T2:row5:col2', 'T2:row5:col3'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | μg•h/mL |  |  | ['Yang_2022_table_1:row5:col2', 'Yang_2022_table_1:row5:col3', 'Yang_2022_table_1:row5:col4', 'Yang_2022_table_1:row5:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.76 |  |  | ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col3', 'Yang_2022_table_1:row8:col2', 'Yang_2022_table_1:row8:col3', 'Yang_2022_table_1:row8:col4', 'Yang_2022_table_1:row8:col5'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.76 L/h |  |  | ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col3', 'Yang_2022_table_1:row8:col2', 'Yang_2022_table_1:row8:col3', 'Yang_2022_table_1:row8:col4', 'Yang_2022_table_1:row8:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 220 L |  |  | ['Yang_2022_table_1:row10:col2', 'Yang_2022_table_1:row10:col3', 'Yang_2022_table_1:row10:col4', 'Yang_2022_table_1:row10:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 17.2 L |  |  | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 58.1 L |  |  | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bomadacycline%5D%20Omadacycline_Yang2022_intravenous_administration&body=Drug%3A%20omadacycline%0ARecord%3A%20Omadacycline_Yang2022_intravenous_administration%0APaper%3A%20Yang_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_omadacycline/Omadacycline_Yang2022_intravenous_administration%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 10:01 UTC</sub>
