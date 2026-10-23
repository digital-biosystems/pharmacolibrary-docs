<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;eculizumab&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/&quot;},{&quot;label&quot;:&quot;Singh_2021 \u00b7 mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eculizumab_Cosson2025_reference&quot;,&quot;label&quot;:&quot;Cosson_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Cosson2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Badri2021_reference&quot;,&quot;label&quot;:&quot;Badri_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Badri2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Gatault2015_reference&quot;,&quot;label&quot;:&quot;Gatault_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Gatault2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Monteleone2021_mean&quot;,&quot;label&quot;:&quot;Monteleone_2021_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Monteleone2021_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Monteleone2021_median&quot;,&quot;label&quot;:&quot;Monteleone_2021_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Monteleone2021_median.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Singh2021_mean&quot;,&quot;label&quot;:&quot;Singh_2021_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Singh2021_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Eculizumab_Singh2021_median&quot;,&quot;label&quot;:&quot;Singh_2021_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Singh2021_median.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# eculizumab — `Eculizumab_Singh2021_mean`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 414, model 5.42e+03).

<div class="pk-model-meta" hidden drug="eculizumab" model-id="Eculizumab_Singh2021_mean" status="needs_review" stale="false" population="adults with neuromyelitis optica spectrum disorder" measured-compound="eculizumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Singh P, Gao X, Kleijn HJ, Bellanti F, Pelto R. Eculizumab Pharmacokinetics and Pharmacodynamics in Patients With Neuromyelitis Optica Spectrum Disorder. Frontiers in neurology 12:696387 (2021).
  ·  DOI: [10.3389/fneur.2021.696387](https://doi.org/10.3389/fneur.2021.696387)

## Population and dosing

**Population:** adults with neuromyelitis optica spectrum disorder · condition neuromyelitis optica spectrum disorder · age group adult · n = 95.

**Dosing:** 900, 1200 mg, iv, multiple, every 14 h.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_eculizumab/Eculizumab_Singh2021_mean/Eculizumab_Singh2021_mean.svg" alt="Eculizumab_Singh2021_mean diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h) | CL | 0.00759 | L/h |
| V1 (L) | V1 | 2.33 | L |
| V2 (L) | V2 | 2.11 | L |
| Q (L/h) | Q | 0.238 | L/h |
| Cmax, ss (μg/ml) | Cmax | 928 | μg/ml |
| Ctrough, ss (μg/ml) | Ctrough | 405 | μg/ml |
| AUCss (μg·h/ml) | AUCSS | 180000 | μg·h/ml |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.105). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 414, model 5.42e+03).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (Cmax, Ctrough and AUCSS), so that value has no SI equivalent. Extracted — eculizumab: CL 0.00759 L/h, V1 2.33 L, V2 2.11 L, Q 0.238 L/h, Cmax 928 μg/ml, Ctrough 405 μg/ml, AUCSS 1.8e+05 μg·h/ml.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has eculizumab, the second reading unknown; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 0.00759 | L/h | 2.108e-09 | m3/s | l/h | exact (1) | T2:row1:col1 |
| V1 (L) | `Q63` · V1 | 2.33 | L | 0.00233 | m3 | l | exact (1) | T2:row2:col1 |
| V2 (L) | `Q64` · V2 | 2.11 | L | 0.00211 | m3 | l | exact (1) | T2:row3:col1 |
| Q (L/h) | `Q30` · Q | 0.238 | L/h | 6.611e-08 | m3/s | l/h | exact (1) | T2:row4:col1 |
| Cmax, ss (μg/ml) | `Q32` · Cmax | 928 | μg/ml |  |  | µg/ml | llm_confirmed (0.6) | T2:row5:col1 |
| Ctrough, ss (μg/ml) | `Q37` · Ctrough | 405 | μg/ml |  |  | µg/ml | llm_confirmed (0.6) | T2:row6:col1 |
| AUCss (μg·h/ml) | `Q18` · AUCSS | 180000 | μg·h/ml |  |  | (h·µg)/ml | exact (1) | T2:row8:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Accumulation ratio' — extend the ontology if this is a real PK parameter (source ['T2:row9:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=eculizumab
- population split: 'mean' subgroup of Singh_2021 (paper reports 2 populations: mean, median)
- molar mass: none found for 'eculizumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell T2:row7:col1 = '414b'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.105 (2/19 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[accumulation ratio]` |  | 2.06 | only_one_extracted |
| `gpt-oss-120b` | `parameters[aucss]` | 180000 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[aucss]` |  | 180000 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 0.00759 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 0.00759 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax, ss]` | 928 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax, ss]` |  | 928 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ctrough, ss]` | 405 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ctrough, ss]` |  | 405 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 0.238 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` |  | 0.238 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | 2.33 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` |  | 2.33 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | 2.11 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` |  | 2.11 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | eculizumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | eculizumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 414 | 408.4 | 0.9865 | 0.25 | reported t½β |
| C5_dimension_Q18 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['T2:row8:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['T2:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['T2:row4:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['T2:row5:col1'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  |  |  | ['T2:row6:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['T2:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['T2:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.00759 |  |  | ['T2:row1:col1'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00759 L/h |  |  | ['T2:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.33 L |  |  | ['T2:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.11 L |  |  | ['T2:row3:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=eculizumab) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | fail | 414 | 5423 | 13.1 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_eculizumab/Eculizumab_Singh2021_mean/Eculizumab_Singh2021_mean_modelica.zip" download>Eculizumab_Singh2021_mean_modelica.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_eculizumab/Eculizumab_Singh2021_mean/Eculizumab_Singh2021_mean_fmi.zip" download>Eculizumab_Singh2021_mean_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_eculizumab/Eculizumab_Singh2021_mean/Eculizumab_Singh2021_mean_matlab.zip" download>Eculizumab_Singh2021_mean_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_eculizumab/Eculizumab_Singh2021_mean/Eculizumab_Singh2021_mean_matlab_simbio.zip" download>Eculizumab_Singh2021_mean_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_eculizumab/Eculizumab_Singh2021_mean/Eculizumab_Singh2021_mean_sbml.zip" download>Eculizumab_Singh2021_mean_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_eculizumab/Eculizumab_Singh2021_mean/Eculizumab_Singh2021_mean_cellml.zip" download>Eculizumab_Singh2021_mean_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
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
| input | dosing | `adminMass` | 0.0009 | kg |
| input | model | `Cl` | 2.108e-09 | m3/s |
| input | model | `VdPerKg` | 3.329e-05 | m3/kg |
| input | model | `k12` | 2.837e-05 | 1/s |
| input | model | `k21` | 3.133e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Singh P, Gao X, Kleijn HJ, Bellanti F, Pelto R. Eculizumab Pharmacokinetics and Pharmacodynamics in Patients With Neuromyelitis Optica Spectrum Disorder. Frontiers in neurology 12:696387 (2021). [doi:10.3389/fneur.2021.696387](https://doi.org/10.3389/fneur.2021.696387)

**This record:** Pharmacolibrary v26.09, model `Eculizumab_Singh2021_mean`. <https://pharmacolibrary.github.io/#/drugs/drug_eculizumab/Eculizumab_Singh2021_mean>

```bibtex
@misc{pharmacolibrary_EculizumabSingh2021mean,
  title  = {{Pharmacolibrary model Eculizumab_Singh2021_mean}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_eculizumab/Eculizumab_Singh2021_mean},
  note   = {Parameters from doi:10.3389/fneur.2021.696387},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 900 mg infusion over 10 min, single dose. Doses in the paper: 900, 1200 mg.

<dbs-fmusim paramsurl="drugs/drug_eculizumab/Eculizumab_Singh2021_mean/Eculizumab_Singh2021_mean_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_eculizumab/Eculizumab_Singh2021_mean/Eculizumab_Singh2021_mean_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Eculizumab_Singh2021_mean_params.json` · controls `Eculizumab_Singh2021_mean_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Beculizumab%5D%20Eculizumab_Singh2021_mean&body=Drug%3A%20eculizumab%0ARecord%3A%20Eculizumab_Singh2021_mean%0APaper%3A%20Singh_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_eculizumab/Eculizumab_Singh2021_mean%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 23:51 UTC</sub>
