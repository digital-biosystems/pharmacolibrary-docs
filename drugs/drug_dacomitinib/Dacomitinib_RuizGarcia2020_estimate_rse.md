<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;dacomitinib&quot;,&quot;href&quot;:&quot;drugs/drug_dacomitinib/&quot;},{&quot;label&quot;:&quot;Ruiz-Garcia_2020 \u00b7 estimate_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dacomitinib_RuizGarcia2020_estimate_rse&quot;,&quot;label&quot;:&quot;Ruiz-Garcia_2020_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Dacomitinib_RuizGarcia2020_parameter_estimate&quot;,&quot;label&quot;:&quot;Ruiz-Garcia_2020_parameter_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_parameter_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dacomitinib — `Dacomitinib_RuizGarcia2020_estimate_rse`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="dacomitinib" model-id="Dacomitinib_RuizGarcia2020_estimate_rse" status="curated_candidate" stale="false" population="healthy volunteers" measured-compound="dacomitinib" parameterization="mechanistic" topology="1C"></div>

## Citation
Ruiz-Garcia A, Tan W, Li J, Haughey M, Masters J, Hibma J et al. Pharmacokinetic Models to Characterize the Absorption Phase and the Influence of a Proton Pump Inhibitor on the Overall Exposure of Dacomitinib. Pharmaceutics 12(4) (2020).
  ·  DOI: [10.3390/pharmaceutics12040330](https://doi.org/10.3390/pharmaceutics12040330)

## Population and dosing

**Population:** healthy volunteers · condition healthy.

**Dosing:** 45 mg, oral, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse/Dacomitinib_RuizGarcia2020_estimate_rse.svg" alt="Dacomitinib_RuizGarcia2020_estimate_rse diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL (L/h) | CL | 29.2 | L/h | 4.212 |
| V (L) | V | 131 | L | 10.840 |
| Q (L/h) | Q | 19.9 | L/h | 16.583 |
| Vss (L) | Vss | 2300 | L | 16.783 |
| MTT (h) | MTT | 6.91 | h | 5.731 |
| ka (h−1) | kabs | 0.0246 | h−1 | 12.48 |
| F | Fab | 1 |  |  |
| tlag (h) | tlag | 0.749 | h | 8.278 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (MTT), so that value has no SI equivalent.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[cl].value`: this record has 29.2, the second reading 28.4; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 29.2 | L/h | 8.111e-06 | m3/s | l/h | 4.212 | exact (1) | Ruiz-Garcia_2020_table_3:row2:col1, Ruiz-Garcia_2020_table_3:row2:col2, Ruiz-Garcia_2020_table_3:row2:col3, Ruiz-Garcia_2020_table_3:row2:col4, Ruiz-Garcia_2020_table_3:row2:col5 |
| V (L) | `Q61` · V | 131 | L | 0.131 | m3 | l | 10.840 | exact (1) | Ruiz-Garcia_2020_table_3:row3:col1, Ruiz-Garcia_2020_table_3:row3:col2, Ruiz-Garcia_2020_table_3:row3:col3, Ruiz-Garcia_2020_table_3:row3:col4, Ruiz-Garcia_2020_table_3:row3:col5 |
| Q (L/h) | `Q30` · Q | 19.9 | L/h | 5.528e-06 | m3/s | l/h | 16.583 | exact (1) | Ruiz-Garcia_2020_table_3:row4:col1, Ruiz-Garcia_2020_table_3:row4:col2, Ruiz-Garcia_2020_table_3:row4:col3, Ruiz-Garcia_2020_table_3:row4:col4, Ruiz-Garcia_2020_table_3:row4:col5 |
| Vss (L) | `Q65` · Vss | 2300 | L | 2.3 | m3 | l | 16.783 | exact (1) | Ruiz-Garcia_2020_table_3:row5:col1, Ruiz-Garcia_2020_table_3:row5:col2, Ruiz-Garcia_2020_table_3:row5:col3, Ruiz-Garcia_2020_table_3:row5:col4, Ruiz-Garcia_2020_table_3:row5:col5 |
| MTT (h) | `Q81` · MTT | 6.91 | h |  |  | h | 5.731 | exact (1) | Ruiz-Garcia_2020_table_3:row6:col1 |
| ka (h−1) | `Q49` · kabs | 0.0246 | h−1 | 6.833e-06 | 1/s | 1/h | 12.48 | exact (1) | Ruiz-Garcia_2020_table_3:row7:col1, Ruiz-Garcia_2020_table_3:row7:col2, Ruiz-Garcia_2020_table_3:row7:col3, Ruiz-Garcia_2020_table_3:row7:col5 |
| F | `Q40` · Fab | 1 |  |  |  |  |  | exact (1) | Ruiz-Garcia_2020_table_3:row8:col1, Ruiz-Garcia_2020_table_3:row8:col2, Ruiz-Garcia_2020_table_3:row8:col3, Ruiz-Garcia_2020_table_3:row8:col4, Ruiz-Garcia_2020_table_3:row8:col5 |
| tlag (h) | `Q83` · tlag | 0.749 | h | 2696 | s | h | 8.278 | exact (1) | Ruiz-Garcia_2020_table_3:row9:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'estimate (rse%)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- dropped unlinked row (NIL): 'D2 (h)' — extend the ontology if this is a real PK parameter (source ['Ruiz-Garcia_2020_table_3:row10:col4', 'Ruiz-Garcia_2020_table_3:row10:col5'])
- dropped duplicate Q40 ('* F1', value '0.455') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dacomitinib
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'estimate (rse%)' subgroup of Ruiz-Garcia_2020 (paper reports 2 populations: estimate (rse%), parameter estimate)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 3 transcribed (40 record(s), model stage 'base')
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.714 (15/21 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl].value` | 29.2 | 28.4 | mismatch |
| `qwen3.8-27b` | `parameters[d2]` |  | 10.4 | only_one_extracted |
| `qwen3.8-27b` | `parameters[ka].value` | 0.0246 | 0.00966 | mismatch |
| `qwen3.8-27b` | `parameters[q].value` | 19.9 | 4.7 | mismatch |
| `qwen3.8-27b` | `parameters[v].value` | 131 | 1160 | mismatch |
| `qwen3.8-27b` | `parameters[vss].value` | 2300 | 6590 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Ruiz-Garcia_2020_table_3:row2:col1', 'Ruiz-Garcia_2020_table_3:row2:col2', 'Ruiz-Garcia_2020_table_3:row2:col3', 'Ruiz-Garcia_2020_table_3:row2:col4', 'Ruiz-Garcia_2020_table_3:row2:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Ruiz-Garcia_2020_table_3:row4:col1', 'Ruiz-Garcia_2020_table_3:row4:col2', 'Ruiz-Garcia_2020_table_3:row4:col3', 'Ruiz-Garcia_2020_table_3:row4:col4', 'Ruiz-Garcia_2020_table_3:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ruiz-Garcia_2020_table_3:row7:col1', 'Ruiz-Garcia_2020_table_3:row7:col2', 'Ruiz-Garcia_2020_table_3:row7:col3', 'Ruiz-Garcia_2020_table_3:row7:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Ruiz-Garcia_2020_table_3:row3:col1', 'Ruiz-Garcia_2020_table_3:row3:col2', 'Ruiz-Garcia_2020_table_3:row3:col3', 'Ruiz-Garcia_2020_table_3:row3:col4', 'Ruiz-Garcia_2020_table_3:row3:col5'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Ruiz-Garcia_2020_table_3:row5:col1', 'Ruiz-Garcia_2020_table_3:row5:col2', 'Ruiz-Garcia_2020_table_3:row5:col3', 'Ruiz-Garcia_2020_table_3:row5:col4', 'Ruiz-Garcia_2020_table_3:row5:col5'] |
| C5_dimension_Q83 | pass | [time] |  | ['Ruiz-Garcia_2020_table_3:row9:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 29.2 | ['Ruiz-Garcia_2020_table_3:row2:col1', 'Ruiz-Garcia_2020_table_3:row2:col2', 'Ruiz-Garcia_2020_table_3:row2:col3', 'Ruiz-Garcia_2020_table_3:row2:col4', 'Ruiz-Garcia_2020_table_3:row2:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 29.2 L/h | ['Ruiz-Garcia_2020_table_3:row2:col1', 'Ruiz-Garcia_2020_table_3:row2:col2', 'Ruiz-Garcia_2020_table_3:row2:col3', 'Ruiz-Garcia_2020_table_3:row2:col4', 'Ruiz-Garcia_2020_table_3:row2:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 131 L | ['Ruiz-Garcia_2020_table_3:row3:col1', 'Ruiz-Garcia_2020_table_3:row3:col2', 'Ruiz-Garcia_2020_table_3:row3:col3', 'Ruiz-Garcia_2020_table_3:row3:col4', 'Ruiz-Garcia_2020_table_3:row3:col5'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 2.3e+03 L | ['Ruiz-Garcia_2020_table_3:row5:col1', 'Ruiz-Garcia_2020_table_3:row5:col2', 'Ruiz-Garcia_2020_table_3:row5:col3', 'Ruiz-Garcia_2020_table_3:row5:col4', 'Ruiz-Garcia_2020_table_3:row5:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=dacomitinib) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 873.5 | 2.884e-05 | unresolved concentration unit (exp '%', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse/Dacomitinib_RuizGarcia2020_estimate_rse_modelica.zip" download>Dacomitinib_RuizGarcia2020_estimate_rse_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse/Dacomitinib_RuizGarcia2020_estimate_rse_fmi.zip" download>Dacomitinib_RuizGarcia2020_estimate_rse_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse/Dacomitinib_RuizGarcia2020_estimate_rse_matlab.zip" download>Dacomitinib_RuizGarcia2020_estimate_rse_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse/Dacomitinib_RuizGarcia2020_estimate_rse_matlab_simbio.zip" download>Dacomitinib_RuizGarcia2020_estimate_rse_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse/Dacomitinib_RuizGarcia2020_estimate_rse_sbml.zip" download>Dacomitinib_RuizGarcia2020_estimate_rse_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse/Dacomitinib_RuizGarcia2020_estimate_rse_cellml.zip" download>Dacomitinib_RuizGarcia2020_estimate_rse_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4699 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 2696 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 4.5e-05 | kg |
| input | model | `Cl` | 8.111e-06 | m3/s |
| input | model | `VdPerKg` | 0.001871 | m3/kg |
| input | model | `ka` | 6.833e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Ruiz-Garcia A, Tan W, Li J, Haughey M, Masters J, Hibma J et al. Pharmacokinetic Models to Characterize the Absorption Phase and the Influence of a Proton Pump Inhibitor on the Overall Exposure of Dacomitinib. Pharmaceutics 12(4) (2020). [doi:10.3390/pharmaceutics12040330](https://doi.org/10.3390/pharmaceutics12040330)

**This record:** Pharmacolibrary v26.09, model `Dacomitinib_RuizGarcia2020_estimate_rse`. <https://pharmacolibrary.github.io/#/drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse>

```bibtex
@misc{pharmacolibrary_DacomitinibRuizGarcia2020estimaterse,
  title  = {{Pharmacolibrary model Dacomitinib_RuizGarcia2020_estimate_rse}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse},
  note   = {Parameters from doi:10.3390/pharmaceutics12040330},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 45 mg, single dose, first-order absorption (ka 0.0246 /h, lag 44.9 min, F 1). Dose in the paper: 45 mg.

<dbs-fmusim paramsurl="drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse/Dacomitinib_RuizGarcia2020_estimate_rse_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse/Dacomitinib_RuizGarcia2020_estimate_rse_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Dacomitinib_RuizGarcia2020_estimate_rse_params.json` · controls `Dacomitinib_RuizGarcia2020_estimate_rse_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdacomitinib%5D%20Dacomitinib_RuizGarcia2020_estimate_rse&body=Drug%3A%20dacomitinib%0ARecord%3A%20Dacomitinib_RuizGarcia2020_estimate_rse%0APaper%3A%20Ruiz-Garcia_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 23:18 UTC</sub>
