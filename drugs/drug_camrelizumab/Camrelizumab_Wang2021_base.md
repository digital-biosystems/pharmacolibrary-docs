<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;camrelizumab&quot;,&quot;href&quot;:&quot;drugs/drug_camrelizumab/&quot;},{&quot;label&quot;:&quot;Wang_2021 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Camrelizumab_Wang2021_base&quot;,&quot;label&quot;:&quot;Wang_2021_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_camrelizumab/Camrelizumab_Wang2021_base.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Camrelizumab_Wang2021_final&quot;,&quot;label&quot;:&quot;Wang_2021_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_camrelizumab/Camrelizumab_Wang2021_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# camrelizumab — `Camrelizumab_Wang2021_base`

> ## <span class="pk-badge pk-badge--blue">Simulated</span>

<div class="pk-model-meta" hidden drug="camrelizumab" model-id="Camrelizumab_Wang2021_base" status="simulated" stale="false" population="patients with advanced melanoma, relapsed or refractory classical Hodgkin lymphoma, and other solid tumor types" measured-compound="camrelizumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Wang CY, Sheng CC, Ma GL, Xu D, Liu XQ, Wang YY et al. Population pharmacokinetics of the anti-PD-1 antibody camrelizumab in patients with multiple tumor types and model-informed dosing strategy. Acta pharmacologica Sinica 42(8):1368–1375 (2021).
  ·  DOI: [10.1038/s41401-020-00550-y](https://doi.org/10.1038/s41401-020-00550-y)

## Population and dosing

**Population:** patients with advanced melanoma, relapsed or refractory classical Hodgkin lymphoma, and other solid tumor types · condition melanoma, classical Hodgkin lymphoma, solid tumors · age group adult · n = 133.

**Dosing:** 70, 700 mg, iv, single.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_camrelizumab/Camrelizumab_Wang2021_base/Camrelizumab_Wang2021_base.svg" alt="Camrelizumab_Wang2021_base diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL linear (L/day) | CL | 0.242 | L/day | 57.0 (None% RSE) |
| V m (mg/day) | Vmax | 2.86 | mg/day | 48.3 (None% RSE) |
| K m (mg/L) | Km | 1.28 | mg/L |  |
| V 1 (L) | V1 | 3.08 | L | 40.2 (None% RSE) |
| Q (L/day) | Q | 0.385 | L/day |  |
| V 2 (L) | V2 | 2.88 | L |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), qwen3.8-27b (partly confirmed, agreement 0.833). Primary extraction retained.">cross-check: partial 1/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Simulated: every check that could be run on this record passed; no value reported in the paper was compared with the simulation.**

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of c max,ss: this record has 47.26, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL linear (L/day) | `Q22` · CL | 0.242 | L/day | 2.801e-09 | m3/s | l/d | llm_confirmed (0.6) | tab_2:row3:col1 | 57.0 (None% RSE) |
| V m (mg/day) | `Q66` · Vmax | 2.86 | mg/day | 3.31e-11 | kg/s | mg/d | special_case (0.95) | tab_2:row5:col1 | 48.3 (None% RSE) |
| K m (mg/L) | `Q1` · Km | 1.28 | mg/L | 0.00128 | kg/m3 | mg/l | space_fold (0.95) | tab_2:row6:col1 |  |
| V 1 (L) | `Q63` · V1 | 3.08 | L | 0.00308 | m3 | l | space_fold (0.95) | tab_2:row7:col1 | 40.2 (None% RSE) |
| Q (L/day) | `Q30` · Q | 0.385 | L/day | 4.456e-09 | m3/s | l/d | exact (1) | tab_2:row8:col1 |  |
| V 2 (L) | `Q64` · V2 | 2.88 | L | 0.00288 | m3 | l | space_fold (0.95) | tab_2:row10:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL linear (%)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'V m (%)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'V 1 (%)' routed out of structural estimates ('Between-subject variability')
- table section residual_error: 'Proportional error (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error (mg/L)' routed out of structural estimates ('Residual variability')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=camrelizumab
- model-stage split: 'base model / parameter estimates' is the base model of Wang_2021 (paper reports 2 stages: base model / parameter estimates, final model / parameter estimates); same population, different model-building step
- molar mass: none found for 'camrelizumab' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  ·  1 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (10/10 fields) | none |
| `qwen3.8-27b` | partly confirmed | 0.833 (10/12 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[c max,ss]` | 47.26 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[c min,ss]` | 26.13 |  | only_one_extracted |

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
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['tab_2:row6:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_2:row3:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_2:row8:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_2:row7:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tab_2:row10:col1'] |
| C5_dimension_Q66 | pass | [mass] / [time] |  | ['tab_2:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.242 | ['tab_2:row3:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0101 L/h | ['tab_2:row3:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.08 L | ['tab_2:row7:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.88 L | ['tab_2:row10:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=camrelizumab) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C |  | engineer template must match the scholar topology |
| T6_deviations | pass |  |  |  | no engineer deviations to adjudicate |
| X1_cross_check | pass |  | verdict confirmed; agreement 1.0 (10 of 10 compared fields agree); 1 of 1 reader(s) without a contradiction (gpt-oss-120b) | 1 | a second reader did not contradict the extraction |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_camrelizumab/Camrelizumab_Wang2021_base/Camrelizumab_Wang2021_base_modelica.zip" download>Camrelizumab_Wang2021_base_modelica.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_camrelizumab/Camrelizumab_Wang2021_base/Camrelizumab_Wang2021_base_fmi.zip" download>Camrelizumab_Wang2021_base_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_camrelizumab/Camrelizumab_Wang2021_base/Camrelizumab_Wang2021_base_matlab.zip" download>Camrelizumab_Wang2021_base_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_camrelizumab/Camrelizumab_Wang2021_base/Camrelizumab_Wang2021_base_matlab_simbio.zip" download>Camrelizumab_Wang2021_base_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_camrelizumab/Camrelizumab_Wang2021_base/Camrelizumab_Wang2021_base_sbml.zip" download>Camrelizumab_Wang2021_base_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_camrelizumab/Camrelizumab_Wang2021_base/Camrelizumab_Wang2021_base_cellml.zip" download>Camrelizumab_Wang2021_base_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 7e-05 | kg |
| input | model | `Cl` | 2.801e-09 | m3/s |
| input | model | `VdPerKg` | 4.4e-05 | m3/kg |
| input | model | `k12` | 1.447e-06 | 1/s |
| input | model | `k21` | 1.547e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Wang CY, Sheng CC, Ma GL, Xu D, Liu XQ, Wang YY et al. Population pharmacokinetics of the anti-PD-1 antibody camrelizumab in patients with multiple tumor types and model-informed dosing strategy. Acta pharmacologica Sinica 42(8):1368–1375 (2021). [doi:10.1038/s41401-020-00550-y](https://doi.org/10.1038/s41401-020-00550-y)

**This record:** Pharmacolibrary, model `Camrelizumab_Wang2021_base`. <https://pharmacolibrary.github.io/#/drugs/drug_camrelizumab/Camrelizumab_Wang2021_base>

```bibtex
@misc{pharmacolibrary_CamrelizumabWang2021base,
  title  = {{Pharmacolibrary model Camrelizumab_Wang2021_base}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_camrelizumab/Camrelizumab_Wang2021_base},
  note   = {Parameters from doi:10.1038/s41401-020-00550-y},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 70 mg infusion over 10 min, single dose. Doses in the paper: 70–700 mg.

<dbs-fmusim paramsurl="drugs/drug_camrelizumab/Camrelizumab_Wang2021_base/Camrelizumab_Wang2021_base_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_camrelizumab/Camrelizumab_Wang2021_base/Camrelizumab_Wang2021_base_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Camrelizumab_Wang2021_base_params.json` · controls `Camrelizumab_Wang2021_base_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcamrelizumab%5D%20Camrelizumab_Wang2021_base&body=Drug%3A%20camrelizumab%0ARecord%3A%20Camrelizumab_Wang2021_base%0APaper%3A%20Wang_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_camrelizumab/Camrelizumab_Wang2021_base%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 11:46 UTC</sub>
