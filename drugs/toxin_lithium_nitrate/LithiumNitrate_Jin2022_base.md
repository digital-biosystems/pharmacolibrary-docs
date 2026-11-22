<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;Lithium nitrate&quot;,&quot;href&quot;:&quot;drugs/toxin_lithium_nitrate/&quot;},{&quot;label&quot;:&quot;Jin_2022 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;LithiumNitrate_Jermain1991_reference&quot;,&quot;label&quot;:&quot;Jermain_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lithium_nitrate/LithiumNitrate_Jermain1991_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;LithiumNitrate_Jin2022_base&quot;,&quot;label&quot;:&quot;Jin_2022_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_base.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;LithiumNitrate_Jin2022_base_base_model_parameter_estimates_r&quot;,&quot;label&quot;:&quot;Jin_2022_base_base_model_parameter_estimates_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_base_base_model_parameter_estimates_r.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;LithiumNitrate_Jin2022_final&quot;,&quot;label&quot;:&quot;Jin_2022_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_final.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;LithiumNitrate_Jin2022_final_final_model_parameter_estimates&quot;,&quot;label&quot;:&quot;Jin_2022_final_final_model_parameter_estimates_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_final_final_model_parameter_estimates.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;LithiumNitrate_Yuan2021_reference&quot;,&quot;label&quot;:&quot;Yuan_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lithium_nitrate/LithiumNitrate_Yuan2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Lithium nitrate — `LithiumNitrate_Jin2022_base`

> ## <span class="pk-badge pk-badge--blue">Simulated</span>

<div class="pk-model-meta" hidden drug="Lithium nitrate" model-id="LithiumNitrate_Jin2022_base" status="simulated" stale="false" population="Chinese patients with bipolar disorder" measured-compound="Lithium" parameterization="mechanistic" topology="1C"></div>

## Citation
Jin ZB, Wu Z, Cui YF, Liu XP, Liang HB, You JY et al. Population Pharmacokinetics and Dosing Regimen of Lithium in Chinese Patients With Bipolar Disorder. Frontiers in pharmacology 13:913935 (2022).
  ·  DOI: [10.3389/fphar.2022.913935](https://doi.org/10.3389/fphar.2022.913935)

## Population and dosing

**Population:** Chinese patients with bipolar disorder · condition chronic therapeutic maintenance · age group mixed · n = 268.

**Dosing:** 250, 500, 750, 1000 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed Lithium carbonate, measured Lithium.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_base/LithiumNitrate_Jin2022_base.svg" alt="LithiumNitrate_Jin2022_base diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL (L/h) | CL | 0.969 | L/h | 4 | 20.8 (9% RSE) |
| V(L) | V | 9.27 | L | 16 | 40.4 (21% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--blue">Simulated</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

None of the extracted parameters is lithium nitrate's own; they describe Lithium.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 0.969 | L/h | 2.692e-07 | m3/s | l/h | 4 | exact (1) | T2:row2:col1 | 20.8 (9% RSE) |
| V(L) | `Q61` · V | 9.27 | L | 0.00927 | m3 | l | 16 | exact (1) | T2:row3:col1 | 40.4 (21% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL (%)' routed out of structural estimates ('Between subject variability')
- table section iiv: 'V(%)' routed out of structural estimates ('Between subject variability')
- table section residual_error: 'Additive error (mmol/L)' routed out of structural estimates ('Residual variability')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Lithium
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- model-stage split: 'base model / parameter estimates (rse%)' is the base model of Jin_2022 (paper reports 4 stages: base model / parameter estimates (rse%), base model / parameter estimates(rse%), final model / parameter estimates (rse%), final model / parameter estimates(rse%)); same population, different model-building step
- molar mass: no plausible PubChem entry for 'Lithium' ('lithium') — left in mass units
- molar mass: none found for 'Lithium' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'Lithium', not lithium_nitrate — the review values are the parent's

**Extraction notes:**
- table T2: unparsed_numeric_cell
- table Jin_2022_table_S2: ragged_grid
- table Jin_2022_table_S2: unparsed_numeric_cell
- companion parameter table S2 transcribed (27 record(s))
- LLM selected parameter table(s) S2
- dropped sensitivity-analysis table(s) 2 from the LLM selection — perturbations of a model, not a model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T2:row2:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T2:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.969 | ['T2:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.969 L/h | ['T2:row2:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 9.27 L | ['T2:row3:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=Lithium) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations | pass |  |  | no engineer deviations to adjudicate |
| X1_cross_check | skipped |  |  | no second reading of this record |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_base/LithiumNitrate_Jin2022_base_modelica.zip" download>LithiumNitrate_Jin2022_base_modelica.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_base/LithiumNitrate_Jin2022_base_fmi.zip" download>LithiumNitrate_Jin2022_base_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_base/LithiumNitrate_Jin2022_base_matlab.zip" download>LithiumNitrate_Jin2022_base_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_base/LithiumNitrate_Jin2022_base_matlab_simbio.zip" download>LithiumNitrate_Jin2022_base_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_base/LithiumNitrate_Jin2022_base_sbml.zip" download>LithiumNitrate_Jin2022_base_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_base/LithiumNitrate_Jin2022_base_cellml.zip" download>LithiumNitrate_Jin2022_base_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00025 | kg |
| input | model | `Cl` | 2.692e-07 | m3/s |
| input | model | `VdPerKg` | 0.0001324 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Jin ZB, Wu Z, Cui YF, Liu XP, Liang HB, You JY et al. Population Pharmacokinetics and Dosing Regimen of Lithium in Chinese Patients With Bipolar Disorder. Frontiers in pharmacology 13:913935 (2022). [doi:10.3389/fphar.2022.913935](https://doi.org/10.3389/fphar.2022.913935)

**This record:** Pharmacolibrary, model `LithiumNitrate_Jin2022_base`. <https://pharmacolibrary.github.io/#/drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_base>

```bibtex
@misc{pharmacolibrary_LithiumNitrateJin2022base,
  title  = {{Pharmacolibrary model LithiumNitrate_Jin2022_base}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_base},
  note   = {Parameters from doi:10.3389/fphar.2022.913935},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 250 mg infusion over 10 min, single dose. Doses in the paper: 250, 500, 750, 1000 mg.

<dbs-fmusim paramsurl="drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_base/LithiumNitrate_Jin2022_base_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_base/LithiumNitrate_Jin2022_base_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `LithiumNitrate_Jin2022_base_params.json` · controls `LithiumNitrate_Jin2022_base_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blithium_nitrate%5D%20LithiumNitrate_Jin2022_base&body=Drug%3A%20lithium_nitrate%0ARecord%3A%20LithiumNitrate_Jin2022_base%0APaper%3A%20Jin_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_base%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 12:12 UTC</sub>
