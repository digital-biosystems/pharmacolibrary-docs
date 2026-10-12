<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;dexamfetamine&quot;,&quot;href&quot;:&quot;drugs/drug_dexamfetamine/&quot;},{&quot;label&quot;:&quot;Roberts_2015 \u00b7 final_final_plasma_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dexamfetamine_Roberts2015_final_final_plasma_model&quot;,&quot;label&quot;:&quot;Roberts_2015_final_final_plasma_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dexamfetamine — `Dexamfetamine_Roberts2015_final_final_plasma_model`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The dexamfetamine model was held back because the first-order absorption rate constant ka (and Tlag) was never reported in Roberts_2015, so library defaults would stand in for an unestimated absorption parameter.**

The record reports k12 = 0.533 h−1, V/F = 377 L and CL/F = 28.3 L/h for dextroamphetamine in healthy adults, but ka is absent from the source paper. The model builder substituted defaults for ka and Tlag and assumed F = 1 and Fm = 1 with no molar correction (apparent parameterization) under first-order depot input. The deviations check failed on both the defaulted parameters and the invented absorption, and the established finding is that the default ka values affect the simulated profile without support from this paper. Extracted — dexamfetamine: k12 0.533 h−1, V/F 377 L, allometric_exponent 0.8, CL/F 28.3 L/h.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Roberts JK et al., A Population Pharmacokinetic Analysis o…, Clinical drug investigation (2015)
  ·  DOI: [10.1007/s40261-015-0323-5](https://doi.org/10.1007/s40261-015-0323-5)

<div class="pk-model-meta" hidden drug="dexamfetamine" model-id="Dexamfetamine_Roberts2015_final_final_plasma_model" status="needs_review" stale="false" population="healthy adults" measured-compound="dextroamphetamine" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 4 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| K12 (h−1) | `Q301` · k12 | 0.533 | h−1 | 0.00014805555555555557 | [1] / [h] | not captured | exact (1.0) | Roberts_2015_table_2:row1:col1, Roberts_2015_table_2:row1:col2, Roberts_2015_table_2:row1:col3, Roberts_2015_table_2:row1:col4 | — | 0.0394 (None% RSE) |
| V1/F (L) | `Q76` · V/F | 377 | L | 0.377 | [l] | not captured | exact (1.0) | Roberts_2015_table_2:row2:col1, Roberts_2015_table_2:row2:col2, Roberts_2015_table_2:row2:col3, Roberts_2015_table_2:row2:col4 | — | 0.0407 (None% RSE) |
| θ1 | `Q319` · allometric_exponent | 0.800 | not captured | not captured | not captured | not captured | llm (0.6) | Roberts_2015_table_2:row3:col1, Roberts_2015_table_2:row3:col2, Roberts_2015_table_2:row3:col3, Roberts_2015_table_2:row3:col4, T3:footnote | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 28.3 | L/h | 7.861111111111112e-06 | [l] / [h] | not captured | exact (1.0) | Roberts_2015_table_2:row4:col1, Roberts_2015_table_2:row4:col2, Roberts_2015_table_2:row4:col3, Roberts_2015_table_2:row4:col4 | — | 0.0394 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- table section iiv: 'K12' routed out of structural estimates ('ω2-BSV')
- table section iiv: 'V1/F' routed out of structural estimates ('ω2-BSV')
- table section iiv: 'CL/F' routed out of structural estimates ('ω2-BSV')
- table section residual_error: 'Additive (ng/mL)' routed out of structural estimates ('σ2-RUV')
- table section residual_error: 'Proportional' routed out of structural estimates ('σ2-RUV')
- dropped duplicate Q319 ('θ2', value '0.512') — already have one for this compound
- dropped value-less row: 'SE'
- dropped value-less row: 'CI'
- dropped value-less row: 'NA'
- dropped value-less row: 'K12'
- dropped value-less row: 'V1/F'
- dropped value-less row: 'CL/F'
- dropped value-less row: 'K23'
- dropped value-less row: 'V2/F'
- dropped value-less row: 'θ3'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dextroamphetamine
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V1/F (L)' is the general volume)
- model-stage split: 'final plasma model' is the final model of Roberts_2015 (paper reports 2 stages: final linked model, final plasma model); same population, different model-building step
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T3:row7:col1 = '1.60E−06'
- unparsed cell T3:row7:col2 = '2.76E−07'
- unparsed cell T3:row7:col3 = '1.06E−06'
- unparsed cell T3:row7:col4 = '2.14E−06'
- unparsed cell T3:row7:col6 = '2.70E−07'
- unparsed cell T3:row7:col7 = '1.02E−06'
- unparsed cell T3:row7:col8 = '2.07E−06'
- unparsed cell T3:row11:col7 = '1.00E–06'
- unparsed cell Roberts_2015_table_2:row7:col7 = '2.00E–06'
- companion parameter table 2 transcribed (79 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (8/8 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Roberts_2015_table_2:row4:col1', 'Roberts_2015_table_2:row4:col2', 'Roberts_2015_table_2:row4:col3', 'Roberts_2015_table_2:row4:col4'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Roberts_2015_table_2:row1:col1', 'Roberts_2015_table_2:row1:col2', 'Roberts_2015_table_2:row1:col3', 'Roberts_2015_table_2:row1:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Roberts_2015_table_2:row2:col1', 'Roberts_2015_table_2:row2:col2', 'Roberts_2015_table_2:row2:col3', 'Roberts_2015_table_2:row2:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 28.3 L/h | not captured | not captured | ['Roberts_2015_table_2:row4:col1', 'Roberts_2015_table_2:row4:col2', 'Roberts_2015_table_2:row4:col3', 'Roberts_2015_table_2:row4:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 377 L | not captured | not captured | ['Roberts_2015_table_2:row2:col1', 'Roberts_2015_table_2:row2:col2', 'Roberts_2015_table_2:row2:col3', 'Roberts_2015_table_2:row2:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=dextroamphetamine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_dexamfetamine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Roberts_2015` / `Roberts_2015::final_final_plasma_model`)
- model: `../../../knowledgebase/drugs/drug_dexamfetamine/models/modelica/Dexamfetamine_Roberts2015_final_final_plasma_model.mo`
- deviation: `../../../knowledgebase/drugs/drug_dexamfetamine/models/modelica/Dexamfetamine_Roberts2015_final_final_plasma_model.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_dexamfetamine/models/modelica/Dexamfetamine_Roberts2015_final_final_plasma_model.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model_modelica.zip" download>Dexamfetamine_Roberts2015_final_final_plasma_model_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model_fmi.zip" download>Dexamfetamine_Roberts2015_final_final_plasma_model_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model_matlab.zip" download>Dexamfetamine_Roberts2015_final_final_plasma_model_matlab.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model_matlab_simbio.zip" download>Dexamfetamine_Roberts2015_final_final_plasma_model_matlab_simbio.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model_sbml.zip" download>Dexamfetamine_Roberts2015_final_final_plasma_model_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model_cellml.zip" download>Dexamfetamine_Roberts2015_final_final_plasma_model_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model.svg" alt="Dexamfetamine_Roberts2015_final_final_plasma_model diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 10 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Dose in the paper: 10 mg.

<dbs-fmusim paramsurl="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Dexamfetamine_Roberts2015_final_final_plasma_model_params.json` · controls `Dexamfetamine_Roberts2015_final_final_plasma_model_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:25 UTC</sub>
