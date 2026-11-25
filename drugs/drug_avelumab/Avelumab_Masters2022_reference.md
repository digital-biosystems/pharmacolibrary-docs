<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;avelumab&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/&quot;},{&quot;label&quot;:&quot;Masters_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Avelumab_Masters2022_reference&quot;,&quot;label&quot;:&quot;Masters_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/Avelumab_Masters2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Avelumab_Vugmeyster2022_reference&quot;,&quot;label&quot;:&quot;Vugmeyster_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/Avelumab_Vugmeyster2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Avelumab_Wilkins2019_reference&quot;,&quot;label&quot;:&quot;Wilkins_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/Avelumab_Wilkins2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# avelumab — `Avelumab_Masters2022_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The covariate scenarios were not simulated; cross_check_disputed (+1 more).

<div class="pk-model-meta" hidden drug="avelumab" model-id="Avelumab_Masters2022_reference" status="needs_review" stale="false" population="patients with advanced renal cell carcinoma" measured-compound="avelumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Masters JC, Khandelwal A, di Pietro A, Dai H, Brar S. Model-informed drug development supporting the approval of the avelumab flat-dose regimen in patients with advanced renal cell carcinoma. CPT: pharmacometrics & systems pharmacology 11(4):458–468 (2022).
  ·  DOI: [10.1002/psp4.12771](https://doi.org/10.1002/psp4.12771)

## Population and dosing

**Population:** patients with advanced renal cell carcinoma · age group adult.

**Dosing:** 700 mg, iv, multiple, every 144 h.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 3 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_avelumab/Avelumab_Masters2022_reference/Avelumab_Masters2022_reference.svg" alt="Avelumab_Masters2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| θ CL, L/h | CL | 0.0269 | L/h | 1.026 |  |
| θ V1, L | V1 | 3.196 | L | 0.7824 |  |
| θ V2, L | V2 | 0.7278 | L | 6.505 |  |
| θ Q, L/h | Q | 0.3352 | L/h | 12.24 | 0.09339 (30.56% RSE) |
| theta_cl_weight | theta_cl_weight | 0.4714 |  | 6.402 |  |
| theta_v1_weight | theta_v1_weight | 0.4694 |  | 6.79 |  |
| theta_v2_weight | theta_v2_weight | 0.5826 |  | 5.183 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.81), qwen3.8-27b (not confirmed, agreement 0.545). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The covariate scenarios were not simulated; cross_check_disputed (+1 more).**

The base model was simulated, not the covariate effects the record defines. Extracted — avelumab: CL 0.0269 L/h, V1 3.2 L, V2 0.728 L, Q 0.335 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of theta_v2_weight: this record has 0.5826, the second reading none; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ CL, L/h | `Q22` · CL | 0.0269 | L/h | 7.472e-09 | m3/s | l/h | 1.026 | llm_confirmed (0.6) | psp412771-tbl-0001:row1:col1 |  |
| θ V1, L | `Q63` · V1 | 3.196 | L | 0.003196 | m3 | l | 0.7824 | llm_confirmed (0.6) | psp412771-tbl-0001:row2:col1 |  |
| θ V2, L | `Q64` · V2 | 0.7278 | L | 0.0007278 | m3 | l | 6.505 | llm_confirmed (0.6) | psp412771-tbl-0001:row3:col1 |  |
| θ Q, L/h | `Q30` · Q | 0.3352 | L/h | 9.311e-08 | m3/s | l/h | 12.24 | llm (0.6) | psp412771-tbl-0001:row4:col1 | 0.09339 (30.56% RSE) |
| theta_cl_weight | `Q900` · theta_cl_weight | 0.4714 |  |  |  |  | 6.402 |  | psp412771-tbl-0001:row8:col1 |  |
| theta_v1_weight | `Q900` · theta_v1_weight | 0.4694 |  |  |  |  | 6.79 |  | psp412771-tbl-0001:row9:col1 |  |
| theta_v2_weight | `Q900` · theta_v2_weight | 0.5826 |  |  |  |  | 5.183 |  | psp412771-tbl-0001:row10:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'θImax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412771-tbl-0001:row5:col1'])
- dropped unlinked row (NIL): 'θT50, days' — extend the ontology if this is a real PK parameter (source ['psp412771-tbl-0001:row6:col1'])
- dropped unlinked row (NIL): 'θγ' — extend the ontology if this is a real PK parameter (source ['psp412771-tbl-0001:row7:col1'])
- dropped duplicate Q63 ('covCL‐V1', value '0.03048') — already have one for this compound
- routed 'covCL‐V2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'covV1‐V2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=avelumab
- molar mass: none found for 'avelumab' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.81 (17/21 fields) | 4 |
| `qwen3.8-27b` | not confirmed | 0.545 (12/22 fields) | 10 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[theta_v2_weight]` | 0.5826 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[weight_on_v2]` |  | 0.5826 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ cl].covariate_forms` | ['linear_fractional'] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[θ v2].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_weight]` |  | 0.4714 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_weight]` | 0.4714 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v1_weight]` |  | 0.4694 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v2_weight]` |  | 0.5826 | only_one_extracted |
| `qwen3.8-27b` | `parameters[weight_on_v2]` | 0.5826 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ v1].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[θ v2].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[θt50]` | 99.24 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θγ]` |  | 2.086 | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | avelumab (with axitinib) | avelumab | mismatch |

</details>

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp412771-tbl-0001:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp412771-tbl-0001:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp412771-tbl-0001:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp412771-tbl-0001:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0269 | ['psp412771-tbl-0001:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0269 L/h | ['psp412771-tbl-0001:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.2 L | ['psp412771-tbl-0001:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.728 L | ['psp412771-tbl-0001:row3:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=avelumab) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| X1_cross_check |  | fail | no second reader contradicts | verdict disputed; agreement 0.81 (17 of 21 compared fields agree, 2 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.81 | cross-check contradicted by a second reader: verdict disputed; agreement 0.81 (17 of 21 compared fields agree, 2 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |
| T1_cmax | reference | skipped | 54 | 0.06663 |  | unresolved concentration unit (exp '', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_avelumab/Avelumab_Masters2022_reference/Avelumab_Masters2022_reference_modelica.zip" download>Avelumab_Masters2022_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_avelumab/Avelumab_Masters2022_reference/Avelumab_Masters2022_reference_fmi.zip" download>Avelumab_Masters2022_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_avelumab/Avelumab_Masters2022_reference/Avelumab_Masters2022_reference_matlab.zip" download>Avelumab_Masters2022_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_avelumab/Avelumab_Masters2022_reference/Avelumab_Masters2022_reference_matlab_simbio.zip" download>Avelumab_Masters2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_avelumab/Avelumab_Masters2022_reference/Avelumab_Masters2022_reference_sbml.zip" download>Avelumab_Masters2022_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_avelumab/Avelumab_Masters2022_reference/Avelumab_Masters2022_reference_cellml.zip" download>Avelumab_Masters2022_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
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
| input | dosing | `adminMass` | 0.0007 | kg |
| input | model | `Cl` | 7.472e-09 | m3/s |
| input | model | `VdPerKg` | 4.566e-05 | m3/kg |
| input | model | `k12` | 2.913e-05 | 1/s |
| input | model | `k21` | 0.0001279 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Masters JC, Khandelwal A, di Pietro A, Dai H, Brar S. Model-informed drug development supporting the approval of the avelumab flat-dose regimen in patients with advanced renal cell carcinoma. CPT: pharmacometrics & systems pharmacology 11(4):458–468 (2022). [doi:10.1002/psp4.12771](https://doi.org/10.1002/psp4.12771)

**This record:** Pharmacolibrary, model `Avelumab_Masters2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_avelumab/Avelumab_Masters2022_reference>

```bibtex
@misc{pharmacolibrary_AvelumabMasters2022reference,
  title  = {{Pharmacolibrary model Avelumab_Masters2022_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_avelumab/Avelumab_Masters2022_reference},
  note   = {Parameters from doi:10.1002/psp4.12771},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 700 mg infusion over 10 min, single dose. Dose in the paper: 700 mg.

<dbs-fmusim paramsurl="drugs/drug_avelumab/Avelumab_Masters2022_reference/Avelumab_Masters2022_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_avelumab/Avelumab_Masters2022_reference/Avelumab_Masters2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Avelumab_Masters2022_reference_params.json` · controls `Avelumab_Masters2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bavelumab%5D%20Avelumab_Masters2022_reference&body=Drug%3A%20avelumab%0ARecord%3A%20Avelumab_Masters2022_reference%0APaper%3A%20Masters_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_avelumab/Avelumab_Masters2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 11:23 UTC</sub>
