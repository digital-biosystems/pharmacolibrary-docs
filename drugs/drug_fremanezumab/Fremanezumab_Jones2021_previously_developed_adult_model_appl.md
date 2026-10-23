<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;fremanezumab&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/&quot;},{&quot;label&quot;:&quot;Jones_2021 \u00b7 previously_developed_adult_model_applied_to_pediatric_data&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fremanezumab_FiedlerKelly2019_reference&quot;,&quot;label&quot;:&quot;Fiedler-Kelly_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fremanezumab_Jones2021_previously_developed_adult_model_appl&quot;,&quot;label&quot;:&quot;Jones_2021_previously_developed_adult_model_applied_to_pediatric_data&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Fremanezumab_Jones2021_pediatric_model_to_support_phase_3_de&quot;,&quot;label&quot;:&quot;Jones_2021_pediatric_model_to_support_phase_3_development_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/Fremanezumab_Jones2021_pediatric_model_to_support_phase_3_de.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fremanezumab — `Fremanezumab_Jones2021_previously_developed_adult_model_appl`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="fremanezumab" model-id="Fremanezumab_Jones2021_previously_developed_adult_model_appl" status="accepted_with_caveats" stale="false" population="pediatric patients with migraine" measured-compound="fremanezumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Jones A, Cohen-Barak O, Radivojevic A, Fiedler-Kelly J. Scaling Approaches for Pediatric Dose Selection: The Fremanezumab (AJOVY. Pharmaceutics 13(6) (2021).
  ·  DOI: [10.3390/pharmaceutics13060785](https://doi.org/10.3390/pharmaceutics13060785)

## Population and dosing

**Population:** pediatric patients with migraine · condition migraine · age group child · n = 15.

**Dosing:** 120 mg, sc, multiple, every 720 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl/Fremanezumab_Jones2021_previously_developed_adult_model_appl.svg" alt="Fremanezumab_Jones2021_previously_developed_adult_model_appl diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL: central clearance (L/day) | CL | 0.0902 | L/day |
| Vc: central volume of distribution (L) | V1 | 1.88 | L |
| ka: absorption rate constant (1/day) | kabs | 0.180 | 1/day |
| Q: intercompartmental clearance (L/day) | Q | 0.262 | L/day |
| Vp: peripheral volume of distribution (L) | V2 | 1.72 | L |
| ALAG1: lag time (day) | tlag | 0.0803 | day |
| theta_q319_weight_power | theta_q319_weight_power | 1.05 |  |
| theta_q319_weight_power | theta_q319_weight_power | 1.53 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.923). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of f1: bioavailability: this record has none, the second reading 0.658. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL: central clearance (L/day) | `Q22` · CL | 0.0902 | L/day | 1.044e-09 | m3/s | l/d | llm_confirmed (0.6) | pharmaceutics-13-00785-t001:row1:col1 |
| Vc: central volume of distribution (L) | `Q63` · V1 | 1.88 | L | 0.00188 | m3 | l | boundary_compartment (0.9) | pharmaceutics-13-00785-t001:row3:col1 |
| ka: absorption rate constant (1/day) | `Q49` · kabs | 0.180 | 1/day | 2.083e-06 | 1/s | 1/h | llm_confirmed (0.6) | pharmaceutics-13-00785-t001:row5:col1 |
| Q: intercompartmental clearance (L/day) | `Q30` · Q | 0.262 | L/day | 3.032e-09 | m3/s | l/d | llm_confirmed (0.6) | pharmaceutics-13-00785-t001:row6:col1 |
| Vp: peripheral volume of distribution (L) | `Q64` · V2 | 1.72 | L | 0.00172 | m3 | l | boundary_compartment (0.9) | pharmaceutics-13-00785-t001:row7:col1 |
| ALAG1: lag time (day) | `Q83` · tlag | 0.0803 | day | 6938 | s | d | llm_confirmed (0.6) | pharmaceutics-13-00785-t001:row9:col1 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 1.05 |  |  |  |  |  | pharmaceutics-13-00785-t001:row2:col1 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 1.53 |  |  |  |  |  | pharmaceutics-13-00785-t001:row4:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Residual variability proportional component' routed out of structural estimates ('Interindividual variability in ka')
- table section iiv: 'Residual variability additive component' routed out of structural estimates ('Interindividual variability in ka')
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'ka: absorption rate constant (1/day)' → 1/day (from the paper text: "Text excerpt: 'a fixed lag time of 0.0803 days was applied' and the parameter list in the prompt specifies '(1/day)'. Wh")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fremanezumab
- population split: 'previously developed adult model applied to pediatric data' subgroup of Jones_2021 (paper reports 2 populations: pediatric model to support phase 3 development 1, previously developed adult model applied to pediatric data)
- molar mass: none found for 'fremanezumab' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 1
- skipped illustrative/example figure caption(s) pharmaceutics-13-00785-f001 — per-individual fit, not model parameters

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.923 (12/13 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f1: bioavailability]` |  | 0.658 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-13-00785-t001:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-13-00785-t001:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pharmaceutics-13-00785-t001:row5:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['pharmaceutics-13-00785-t001:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['pharmaceutics-13-00785-t001:row7:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['pharmaceutics-13-00785-t001:row9:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0902 | ['pharmaceutics-13-00785-t001:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00376 L/h | ['pharmaceutics-13-00785-t001:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.88 L | ['pharmaceutics-13-00785-t001:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.72 L | ['pharmaceutics-13-00785-t001:row7:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=fremanezumab) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl/Fremanezumab_Jones2021_previously_developed_adult_model_appl_modelica.zip" download>Fremanezumab_Jones2021_previously_developed_adult_model_appl_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl/Fremanezumab_Jones2021_previously_developed_adult_model_appl_fmi.zip" download>Fremanezumab_Jones2021_previously_developed_adult_model_appl_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl/Fremanezumab_Jones2021_previously_developed_adult_model_appl_matlab.zip" download>Fremanezumab_Jones2021_previously_developed_adult_model_appl_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl/Fremanezumab_Jones2021_previously_developed_adult_model_appl_matlab_simbio.zip" download>Fremanezumab_Jones2021_previously_developed_adult_model_appl_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl/Fremanezumab_Jones2021_previously_developed_adult_model_appl_sbml.zip" download>Fremanezumab_Jones2021_previously_developed_adult_model_appl_sbml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl/Fremanezumab_Jones2021_previously_developed_adult_model_appl_cellml.zip" download>Fremanezumab_Jones2021_previously_developed_adult_model_appl_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 0.658 | 1 |
| input | dosing | `Tlag` | 6938 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00012 | kg |
| input | model | `Cl` | 1.044e-09 | m3/s |
| input | model | `VdPerKg` | 2.686e-05 | m3/kg |
| input | model | `k12` | 1.613e-06 | 1/s |
| input | model | `k21` | 1.763e-06 | 1/s |
| input | model | `ka` | 2.083e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Jones A, Cohen-Barak O, Radivojevic A, Fiedler-Kelly J. Scaling Approaches for Pediatric Dose Selection: The Fremanezumab (AJOVY. Pharmaceutics 13(6) (2021). [doi:10.3390/pharmaceutics13060785](https://doi.org/10.3390/pharmaceutics13060785)

**This record:** Pharmacolibrary v26.09, model `Fremanezumab_Jones2021_previously_developed_adult_model_appl`. <https://pharmacolibrary.github.io/#/drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl>

```bibtex
@misc{pharmacolibrary_FremanezumabJones2021previouslydevelopedadultmodelappl,
  title  = {{Pharmacolibrary model Fremanezumab_Jones2021_previously_developed_adult_model_appl}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl},
  note   = {Parameters from doi:10.3390/pharmaceutics13060785},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 120 mg, single dose, first-order absorption (ka 0.0075 /h, lag 116 min, F 0.658). Dose in the paper: 120 mg.

<dbs-fmusim paramsurl="drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl/Fremanezumab_Jones2021_previously_developed_adult_model_appl_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl/Fremanezumab_Jones2021_previously_developed_adult_model_appl_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Fremanezumab_Jones2021_previously_developed_adult_model_appl_params.json` · controls `Fremanezumab_Jones2021_previously_developed_adult_model_appl_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfremanezumab%5D%20Fremanezumab_Jones2021_previously_developed_adult_model_appl&body=Drug%3A%20fremanezumab%0ARecord%3A%20Fremanezumab_Jones2021_previously_developed_adult_model_appl%0APaper%3A%20Jones_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 15:35 UTC</sub>
