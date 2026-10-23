<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;fremanezumab&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/&quot;},{&quot;label&quot;:&quot;Fiedler-Kelly_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fremanezumab_FiedlerKelly2019_reference&quot;,&quot;label&quot;:&quot;Fiedler-Kelly_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Fremanezumab_Jones2021_previously_developed_adult_model_appl&quot;,&quot;label&quot;:&quot;Jones_2021_previously_developed_adult_model_applied_to_pediatric_data&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fremanezumab_Jones2021_pediatric_model_to_support_phase_3_de&quot;,&quot;label&quot;:&quot;Jones_2021_pediatric_model_to_support_phase_3_development_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/Fremanezumab_Jones2021_pediatric_model_to_support_phase_3_de.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fremanezumab — `Fremanezumab_FiedlerKelly2019_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Reproduces paper), but the paper was screened again on 2026-10-07 15:35 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="fremanezumab" model-id="Fremanezumab_FiedlerKelly2019_reference" status="extracted" stale="true" population="healthy subjects and patients with migraine" measured-compound="fremanezumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Fiedler-Kelly JB, Cohen-Barak O, Morris DN, Ludwig E, Rasamoelisolo M, Shen H et al. Population pharmacokinetic modelling and simulation of fremanezumab in healthy subjects and patients with migraine. British journal of clinical pharmacology 85(12):2721–2733 (2019).
  ·  DOI: [10.1111/bcp.14096](https://doi.org/10.1111/bcp.14096)

## Population and dosing

**Population:** healthy subjects and patients with migraine · condition migraine · age group adult.

**Dosing:** 225, 675 mg, sc, multiple, every 730.56 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference/Fremanezumab_FiedlerKelly2019_reference.svg" alt="Fremanezumab_FiedlerKelly2019_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL: Central clearance (L/d) | CL | 4.60 | L/d |
| Vc,iv: Central volume of distribution IV (L)d | V1 | 2.98 | L |
| ka: Absorption rate constant (/d) | kabs | 15.8 | /d |
| Q: Intercompartmental clearance (L/d) | Q | 0.262 | L/d |
| Vp: Peripheral volume of distribution (L) | V2 | 1.72 | L |
| ALAG1: Lag time (d) | tlag | 0.0803 | d |
| theta_q319_weight_power | theta_q319_weight_power | 4.33 |  |
| theta_q319_weight_power | theta_q319_weight_power | 10.3 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.923). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of f1: bioavailability: this record has none, the second reading 0.658. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL: Central clearance (L/d) | `Q22` · CL | 4.60 | L/d | 5.324e-08 | m3/s | l/d | llm_confirmed (0.6) | bcp14096-tbl-0002:row2:col1, bcp14096-tbl-0002:row2:col2, bcp14096-tbl-0002:row2:col4 |
| Vc,iv: Central volume of distribution IV (L)d | `Q63` · V1 | 2.98 | L | 0.00298 | m3 | L | boundary_compartment (0.9) | bcp14096-tbl-0002:row4:col1 |
| ka: Absorption rate constant (/d) | `Q49` · kabs | 15.8 | /d | 0.0001829 | 1/s | 1/d | llm_confirmed (0.6) | bcp14096-tbl-0002:row7:col1, bcp14096-tbl-0002:row7:col2, bcp14096-tbl-0002:row7:col4 |
| Q: Intercompartmental clearance (L/d) | `Q30` · Q | 0.262 | L/d | 3.032e-09 | m3/s | l/d | llm_confirmed (0.6) | bcp14096-tbl-0002:row8:col1 |
| Vp: Peripheral volume of distribution (L) | `Q64` · V2 | 1.72 | L | 0.00172 | m3 | l | boundary_compartment (0.9) | bcp14096-tbl-0002:row9:col1 |
| ALAG1: Lag time (d) | `Q83` · tlag | 0.0803 | d | 6938 | s | d | llm_confirmed (0.6) | bcp14096-tbl-0002:row11:col1 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 4.33 |  |  |  |  |  | bcp14096-tbl-0002:row3:col1, bcp14096-tbl-0002:row3:col2 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 10.3 |  |  |  |  |  | bcp14096-tbl-0002:row6:col1, bcp14096-tbl-0002:row6:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q63 ('Vc,SC: Central volume of distribution SC (L)e', value '19.9') — already have one for this compound
- dropped unlinked row (NIL): 'Minimum value of the objective function = 73303.561' — extend the ontology if this is a real PK parameter (source ['bcp14096-tbl-0002:row15:col1', 'bcp14096-tbl-0002:row15:col2', 'bcp14096-tbl-0002:row15:col3', 'bcp14096-tbl-0002:row15:col4'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Vc,iv: Central volume of distribution IV (L)d' → L (from the paper text: "The abstract states 'central distribution volume (1.88 L)' and the results section states 'central CL and Vc,SC were 0.0")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fremanezumab
- molar mass: none found for 'fremanezumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell bcp14096-tbl-0002:row2:col3 = '23.4%CVa , b'
- unparsed cell bcp14096-tbl-0002:row5:col3 = '35.1%CVa , b , f'
- unparsed cell bcp14096-tbl-0002:row7:col3 = '59.0%CVa , b , f'
- LLM selected parameter table(s) 2

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['bcp14096-tbl-0002:row2:col1', 'bcp14096-tbl-0002:row2:col2', 'bcp14096-tbl-0002:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['bcp14096-tbl-0002:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['bcp14096-tbl-0002:row7:col1', 'bcp14096-tbl-0002:row7:col2', 'bcp14096-tbl-0002:row7:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['bcp14096-tbl-0002:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['bcp14096-tbl-0002:row9:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['bcp14096-tbl-0002:row11:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.6 | ['bcp14096-tbl-0002:row2:col1', 'bcp14096-tbl-0002:row2:col2', 'bcp14096-tbl-0002:row2:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.192 L/h | ['bcp14096-tbl-0002:row2:col1', 'bcp14096-tbl-0002:row2:col2', 'bcp14096-tbl-0002:row2:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.98 L | ['bcp14096-tbl-0002:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.72 L | ['bcp14096-tbl-0002:row9:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=fremanezumab) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference/Fremanezumab_FiedlerKelly2019_reference_modelica.zip" download>Fremanezumab_FiedlerKelly2019_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference/Fremanezumab_FiedlerKelly2019_reference_fmi.zip" download>Fremanezumab_FiedlerKelly2019_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference/Fremanezumab_FiedlerKelly2019_reference_matlab.zip" download>Fremanezumab_FiedlerKelly2019_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference/Fremanezumab_FiedlerKelly2019_reference_matlab_simbio.zip" download>Fremanezumab_FiedlerKelly2019_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference/Fremanezumab_FiedlerKelly2019_reference_sbml.zip" download>Fremanezumab_FiedlerKelly2019_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference/Fremanezumab_FiedlerKelly2019_reference_cellml.zip" download>Fremanezumab_FiedlerKelly2019_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
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
| input | dosing | `adminMass` | 0.000225 | kg |
| input | model | `Cl` | 5.324e-08 | m3/s |
| input | model | `VdPerKg` | 4.257e-05 | m3/kg |
| input | model | `k12` | 1.018e-06 | 1/s |
| input | model | `k21` | 1.763e-06 | 1/s |
| input | model | `ka` | 0.0001829 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Fiedler-Kelly JB, Cohen-Barak O, Morris DN, Ludwig E, Rasamoelisolo M, Shen H et al. Population pharmacokinetic modelling and simulation of fremanezumab in healthy subjects and patients with migraine. British journal of clinical pharmacology 85(12):2721–2733 (2019). [doi:10.1111/bcp.14096](https://doi.org/10.1111/bcp.14096)

**This record:** Pharmacolibrary v26.09, model `Fremanezumab_FiedlerKelly2019_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference>

```bibtex
@misc{pharmacolibrary_FremanezumabFiedlerKelly2019reference,
  title  = {{Pharmacolibrary model Fremanezumab_FiedlerKelly2019_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference},
  note   = {Parameters from doi:10.1111/bcp.14096},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 225 mg, single dose, first-order absorption (ka 0.658 /h, lag 116 min, F 0.658). Doses in the paper: 225, 675 mg.

<dbs-fmusim paramsurl="drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference/Fremanezumab_FiedlerKelly2019_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference/Fremanezumab_FiedlerKelly2019_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Fremanezumab_FiedlerKelly2019_reference_params.json` · controls `Fremanezumab_FiedlerKelly2019_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfremanezumab%5D%20Fremanezumab_FiedlerKelly2019_reference&body=Drug%3A%20fremanezumab%0ARecord%3A%20Fremanezumab_FiedlerKelly2019_reference%0APaper%3A%20Fiedler-Kelly_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 15:35 UTC</sub>
