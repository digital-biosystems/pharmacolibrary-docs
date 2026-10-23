<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;dexamfetamine&quot;,&quot;href&quot;:&quot;drugs/drug_dexamfetamine/&quot;},{&quot;label&quot;:&quot;Roberts_2015 \u00b7 final_final_plasma_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dexamfetamine_Roberts2015_final_final_plasma_model&quot;,&quot;label&quot;:&quot;Roberts_2015_final_final_plasma_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dexamfetamine — `Dexamfetamine_Roberts2015_final_final_plasma_model`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The dexamfetamine model was held back because the first-order absorption rate constant ka (and Tlag) was never reported in Roberts_2015, so library defaults would stand in for an unestimated absorption parameter.

<div class="pk-model-meta" hidden drug="dexamfetamine" model-id="Dexamfetamine_Roberts2015_final_final_plasma_model" status="needs_review" stale="false" population="healthy adults" measured-compound="dextroamphetamine" parameterization="apparent" topology="1C"></div>

## Citation
Roberts JK, Cook SF, Stockmann C, Rollins DE, Wilkins DG, Sherwin CM. A Population Pharmacokinetic Analysis of Dextroamphetamine in the Plasma and Hair of Healthy Adults. Clinical drug investigation 35(10):633–643 (2015).
  ·  DOI: [10.1007/s40261-015-0323-5](https://doi.org/10.1007/s40261-015-0323-5)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = 40.

**Dosing:** 10 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model.svg" alt="Dexamfetamine_Roberts2015_final_final_plasma_model diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| K12 (h−1) | k12 | 0.533 | h−1 | 0.0394 (None% RSE) |
| V1/F (L) | V/F | 377 | L | 0.0407 (None% RSE) |
| θ1 | allometric_exponent | 0.800 |  |  |
| CL/F (L/h) | CL/F | 28.3 | L/h | 0.0394 (None% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The dexamfetamine model was held back because the first-order absorption rate constant ka (and Tlag) was never reported in Roberts_2015, so library defaults would stand in for an unestimated absorption parameter.**

The record reports k12 = 0.533 h−1, V/F = 377 L and CL/F = 28.3 L/h for dextroamphetamine in healthy adults, but ka is absent from the source paper. The model builder substituted defaults for ka and Tlag and assumed F = 1 and Fm = 1 with no molar correction (apparent parameterization) under first-order depot input. The deviations check failed on both the defaulted parameters and the invented absorption, and the established finding is that the default ka values affect the simulated profile without support from this paper. Extracted — dexamfetamine: k12 0.533 h−1, V/F 377 L, allometric_exponent 0.8, CL/F 28.3 L/h.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| K12 (h−1) | `Q301` · k12 | 0.533 | h−1 | 0.0001481 | 1/s | 1/h | exact (1) | Roberts_2015_table_2:row1:col1, Roberts_2015_table_2:row1:col2, Roberts_2015_table_2:row1:col3, Roberts_2015_table_2:row1:col4 | 0.0394 (None% RSE) |
| V1/F (L) | `Q76` · V/F | 377 | L | 0.377 | m3 | l | exact (1) | Roberts_2015_table_2:row2:col1, Roberts_2015_table_2:row2:col2, Roberts_2015_table_2:row2:col3, Roberts_2015_table_2:row2:col4 | 0.0407 (None% RSE) |
| θ1 | `Q319` · allometric_exponent | 0.800 |  |  |  |  | llm (0.6) | Roberts_2015_table_2:row3:col1, Roberts_2015_table_2:row3:col2, Roberts_2015_table_2:row3:col3, Roberts_2015_table_2:row3:col4, T3:footnote |  |
| CL/F (L/h) | `Q27` · CL/F | 28.3 | L/h | 7.861e-06 | m3/s | l/h | exact (1) | Roberts_2015_table_2:row4:col1, Roberts_2015_table_2:row4:col2, Roberts_2015_table_2:row4:col3, Roberts_2015_table_2:row4:col4 | 0.0394 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Roberts_2015_table_2:row4:col1', 'Roberts_2015_table_2:row4:col2', 'Roberts_2015_table_2:row4:col3', 'Roberts_2015_table_2:row4:col4'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Roberts_2015_table_2:row1:col1', 'Roberts_2015_table_2:row1:col2', 'Roberts_2015_table_2:row1:col3', 'Roberts_2015_table_2:row1:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Roberts_2015_table_2:row2:col1', 'Roberts_2015_table_2:row2:col2', 'Roberts_2015_table_2:row2:col3', 'Roberts_2015_table_2:row2:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 28.3 L/h | ['Roberts_2015_table_2:row4:col1', 'Roberts_2015_table_2:row4:col2', 'Roberts_2015_table_2:row4:col3', 'Roberts_2015_table_2:row4:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 377 L | ['Roberts_2015_table_2:row2:col1', 'Roberts_2015_table_2:row2:col2', 'Roberts_2015_table_2:row2:col3', 'Roberts_2015_table_2:row2:col4'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=dextroamphetamine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1352 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 7.861e-06 | m3/s |
| input | model | `VdPerKg` | 0.005386 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Roberts JK, Cook SF, Stockmann C, Rollins DE, Wilkins DG, Sherwin CM. A Population Pharmacokinetic Analysis of Dextroamphetamine in the Plasma and Hair of Healthy Adults. Clinical drug investigation 35(10):633–643 (2015). [doi:10.1007/s40261-015-0323-5](https://doi.org/10.1007/s40261-015-0323-5)

**This record:** Pharmacolibrary v26.09, model `Dexamfetamine_Roberts2015_final_final_plasma_model`. <https://pharmacolibrary.github.io/#/drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model>

```bibtex
@misc{pharmacolibrary_DexamfetamineRoberts2015finalfinalplasmamodel,
  title  = {{Pharmacolibrary model Dexamfetamine_Roberts2015_final_final_plasma_model}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model},
  note   = {Parameters from doi:10.1007/s40261-015-0323-5},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 10 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Dose in the paper: 10 mg.

<dbs-fmusim paramsurl="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Dexamfetamine_Roberts2015_final_final_plasma_model_params.json` · controls `Dexamfetamine_Roberts2015_final_final_plasma_model_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdexamfetamine%5D%20Dexamfetamine_Roberts2015_final_final_plasma_model&body=Drug%3A%20dexamfetamine%0ARecord%3A%20Dexamfetamine_Roberts2015_final_final_plasma_model%0APaper%3A%20Roberts_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 00:25 UTC</sub>
