<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;desipramine&quot;,&quot;href&quot;:&quot;drugs/drug_desipramine/&quot;},{&quot;label&quot;:&quot;Gueorguieva_2010 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# desipramine — `Desipramine_Gueorguieva2010_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667), gpt-oss:120b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 20, model 2.59).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — desipramine: CL 16 l h -1, V1 22 l, Q 13 l h -1, V2 13 l, IOV 7.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has desipramine, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:37:31.700225+00:00) predates the upstream re-run (2026-10-06 22:18:01.323926+00:00). Current validate status: `needs_review`.

## Citation
Gueorguieva I et al., Desipramine, substrate for CYP2D6 activ…, British journal of clinical… (2010)
  ·  DOI: [10.1111/j.1365-2125.2010.03731.x](https://doi.org/10.1111/j.1365-2125.2010.03731.x)

## Model component
<dbs-pgx drug="desipramine" model-id="Desipramine_Gueorguieva2010_reference" status="needs_review" stale="true" population="healthy adults" measured-compound="desipramine" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (l h -1 ) | `Q22` · CL | 111 | l h -1 | 3.0833333333333335e-05 | [l] / [h] | not captured | exact (1.0) | tab_0:row4:col1, tab_0:row4:col2, tab_0:row4:col4 | — | 73 (None% RSE) |
| V1 (l) | `Q63` · V1 | 1900 | l | 1.9000000000000001 | [l] | not captured | exact (1.0) | tab_0:row5:col1, tab_0:row5:col2, tab_0:row5:col4 | — | 58 (None% RSE) |
| Q (l h -1 ) | `Q30` · Q | 58 | l h -1 | 1.611111111111111e-05 | [l] / [h] | not captured | exact (1.0) | tab_0:row6:col1, tab_0:row6:col2 | — | not captured |
| V2 (l) | `Q64` · V2 | 1050 | l | 1.05 | [l] | not captured | exact (1.0) | tab_0:row7:col1, tab_0:row7:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL (l h -1 )' routed out of structural estimates ('Between-subject')
- table section iiv: 'V1 (l)' routed out of structural estimates ('Between-subject')
- column 'optimal sampling times (h)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- routed 'Plasma within-subject variability' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Intermediate metabolizers' — extend the ontology if this is a real PK parameter (source ['Gueorguieva_2010_table_2:row0:col1', 'Gueorguieva_2010_table_2:row0:col2', 'Gueorguieva_2010_table_2:row0:col3', 'Gueorguieva_2010_table_2:row0:col4', 'Gueorguieva_2010_table_2:row0:col5', 'Gueorguieva_2010_table_2:row0:col6', 'Gueorguieva_2010_table_2:row0:col7', 'Gueorguieva_2010_table_2:row0:col8', 'Gueorguieva_2010_table_2:row5:col1', 'Gueorguieva_2010_table_2:row5:col2', 'Gueorguieva_2010_table_2:row5:col3', 'Gueorguieva_2010_table_2:row5:col4', 'Gueorguieva_2010_table_2:row5:col5', 'Gueorguieva_2010_table_2:row5:col6', 'Gueorguieva_2010_table_2:row5:col7', 'Gueorguieva_2010_table_2:row5:col8'])
- dropped unlinked row (NIL): 'Extensive metabolizers' — extend the ontology if this is a real PK parameter (source ['Gueorguieva_2010_table_2:row1:col1', 'Gueorguieva_2010_table_2:row1:col2', 'Gueorguieva_2010_table_2:row1:col3', 'Gueorguieva_2010_table_2:row1:col4', 'Gueorguieva_2010_table_2:row1:col5', 'Gueorguieva_2010_table_2:row1:col6', 'Gueorguieva_2010_table_2:row1:col7', 'Gueorguieva_2010_table_2:row1:col8', 'Gueorguieva_2010_table_2:row6:col1', 'Gueorguieva_2010_table_2:row6:col2', 'Gueorguieva_2010_table_2:row6:col3', 'Gueorguieva_2010_table_2:row6:col4', 'Gueorguieva_2010_table_2:row6:col5', 'Gueorguieva_2010_table_2:row6:col6', 'Gueorguieva_2010_table_2:row6:col7', 'Gueorguieva_2010_table_2:row6:col8'])
- dropped unlinked row (NIL): 'Ultrarapid metabolizers' — extend the ontology if this is a real PK parameter (source ['Gueorguieva_2010_table_2:row2:col1', 'Gueorguieva_2010_table_2:row2:col2', 'Gueorguieva_2010_table_2:row2:col3', 'Gueorguieva_2010_table_2:row2:col4', 'Gueorguieva_2010_table_2:row2:col5', 'Gueorguieva_2010_table_2:row2:col6', 'Gueorguieva_2010_table_2:row2:col7', 'Gueorguieva_2010_table_2:row2:col8', 'Gueorguieva_2010_table_2:row7:col1', 'Gueorguieva_2010_table_2:row7:col2', 'Gueorguieva_2010_table_2:row7:col3', 'Gueorguieva_2010_table_2:row7:col4', 'Gueorguieva_2010_table_2:row7:col5', 'Gueorguieva_2010_table_2:row7:col6', 'Gueorguieva_2010_table_2:row7:col7', 'Gueorguieva_2010_table_2:row7:col8'])
- dropped value-less row: 'Standard error expressed as percent coefficient of variation.'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=desipramine

**Extraction notes:**
- companion parameter table 2 transcribed (48 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (6/9 fields) | 3 |
| `gpt-oss:120b` | not confirmed | 0.444 (4/9 fields) | 5 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[theta_q57_intermediate_metabolizer]` | not captured | 0.25 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | desipramine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | desipramine | unknown | mismatch |
| `gpt-oss:120b` | `parameters[cl].value` | 16 | 73 | mismatch |
| `gpt-oss:120b` | `parameters[plasma within-subject variability]` | 7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q].value` | 13 | 58 | mismatch |
| `gpt-oss:120b` | `parameters[v1].value` | 22 | 58 | mismatch |
| `gpt-oss:120b` | `parameters[v2].value` | 13 | 1050 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row6:col1', 'tab_0:row6:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row5:col1', 'tab_0:row5:col2', 'tab_0:row5:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row7:col1', 'tab_0:row7:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 111.0 | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 111 L/h | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.9e+03 L | not captured | not captured | ['tab_0:row5:col1', 'tab_0:row5:col2', 'tab_0:row5:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.05e+03 L | not captured | not captured | ['tab_0:row7:col1', 'tab_0:row7:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=desipramine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 21.6 | 0.0010089146010363863 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 17.9 | 0.0010089146010363863 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 18.3 | 0.0010089146010363863 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 16.3 | 0.0010089146010363863 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 12.9 | 0.0010089146010363863 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 16.8 | 0.0010089146010363863 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 20.5 | 0.0010089146010363863 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_t_half_beta | reference | fail | 20.0 | 2.5926988409712033 | 0.1296 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 20.0 | 2.5926988409712033 | 0.1296 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 25.0 | 2.5926988409712033 | 0.1037 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 23.0 | 2.5926988409712033 | 0.1127 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 18.0 | 2.5926988409712033 | 0.144 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 17.0 | 2.5926988409712033 | 0.1525 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 20.0 | 2.5926988409712033 | 0.1296 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 27.0 | 2.5926988409712033 | 0.096 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_desipramine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gueorguieva_2010` / `Gueorguieva_2010::reference`)
- model: `../../../knowledgebase/drugs/drug_desipramine/models/modelica/Desipramine_Gueorguieva2010_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_desipramine/models/modelica/Desipramine_Gueorguieva2010_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_desipramine/models/modelica/Desipramine_Gueorguieva2010_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_desipramine/Desipramine_Gueorguieva2010_reference/Desipramine_Gueorguieva2010_reference_modelica.zip" download>Desipramine_Gueorguieva2010_reference_modelica.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_desipramine/Desipramine_Gueorguieva2010_reference/Desipramine_Gueorguieva2010_reference_fmi.zip" download>Desipramine_Gueorguieva2010_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_desipramine/Desipramine_Gueorguieva2010_reference/Desipramine_Gueorguieva2010_reference_matlab.zip" download>Desipramine_Gueorguieva2010_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_desipramine/Desipramine_Gueorguieva2010_reference/Desipramine_Gueorguieva2010_reference_matlab_simbio.zip" download>Desipramine_Gueorguieva2010_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_desipramine/Desipramine_Gueorguieva2010_reference/Desipramine_Gueorguieva2010_reference_sbml.zip" download>Desipramine_Gueorguieva2010_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_desipramine/Desipramine_Gueorguieva2010_reference/Desipramine_Gueorguieva2010_reference_cellml.zip" download>Desipramine_Gueorguieva2010_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:18 UTC</sub>
