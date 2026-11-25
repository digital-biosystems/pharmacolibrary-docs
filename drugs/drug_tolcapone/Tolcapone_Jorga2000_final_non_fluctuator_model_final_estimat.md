<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;tolcapone&quot;,&quot;href&quot;:&quot;drugs/drug_tolcapone/&quot;},{&quot;label&quot;:&quot;Jorga_2000 \u00b7 final_non_fluctuator_model_final_estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat&quot;,&quot;label&quot;:&quot;Jorga_2000_final_non_fluctuator_model_final_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolcapone/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Tolcapone_Jorga2000_non_fluctuator_model_s_e_of_the_estimate&quot;,&quot;label&quot;:&quot;Jorga_2000_non_fluctuator_model_s_e_of_the_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolcapone/Tolcapone_Jorga2000_non_fluctuator_model_s_e_of_the_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tolcapone — `Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> F use library defaults, not estimates from this paper; t6_deviations (+1 more).

<div class="pk-model-meta" hidden drug="tolcapone" model-id="Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat" status="needs_review" stale="false" population="patients with Parkinson&#39;s disease" measured-compound="tolcapone" parameterization="mechanistic" topology="2C"></div>

## Citation
Jorga K, Fotteler B, Banken L, Snell P, Steimer JL. Population pharmacokinetics of tolcapone in parkinsonian patients in dose finding studies. British journal of clinical pharmacology 49(1):39–48 (2000).
  ·  DOI: [10.1046/j.1365-2125.2000.00113.x](https://doi.org/10.1046/j.1365-2125.2000.00113.x)

## Population and dosing

**Population:** patients with Parkinson's disease · condition Parkinson's disease · age group adult.

**Dosing:** 50, 200, 400 mg, oral, multiple, every 8 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_tolcapone/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat.svg" alt="Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (l h⁻¹) | CL | 4.5 | l h⁻¹ |
| Vc (l) | V1 | 3.5 | l |
| Vp (l) | V2 | 24 | l |
| Q (l h⁻¹) | Q | 7.7 | l h⁻¹ |
| ka (h⁻¹) | kabs | 0.7 | h⁻¹ |
| tlag (h) | tlag | 0.4 | h |
| θFood(F) | equation variable | 0.83 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.917). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**F use library defaults, not estimates from this paper; t6_deviations (+1 more).**

These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. Extracted — tolcapone: CL 4.5 l h⁻¹, V1 3.5 l, V2 24 l, Q 7.7 l h⁻¹, kabs 0.7 h⁻¹, tlag 0.4 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[θfood].parameter_id`: this record has Q900, the second reading Q87. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (l h⁻¹) | `Q22` · CL | 4.5 | l h⁻¹ | 1.25e-06 | m3/s | l/h | exact (1) | Jorga_2000_table_3:row1:col3 |
| Vc (l) | `Q63` · V1 | 3.5 | l | 0.0035 | m3 | l | exact (1) | Jorga_2000_table_3:row2:col3 |
| Vp (l) | `Q64` · V2 | 24 | l | 0.024 | m3 | l | exact (1) | Jorga_2000_table_3:row3:col3 |
| Q (l h⁻¹) | `Q30` · Q | 7.7 | l h⁻¹ | 2.139e-06 | m3/s | l/h | exact (1) | Jorga_2000_table_3:row4:col3 |
| ka (h⁻¹) | `Q49` · kabs | 0.7 | h⁻¹ | 0.0001944 | 1/s | 1/h | exact (1) | Jorga_2000_table_3:row5:col3 |
| tlag (h) | `Q83` · tlag | 0.4 | h | 1440 | s | h | exact (1) | Jorga_2000_table_3:row6:col3 |
| θFood(F) | `Q900` · equation variable | 0.83 |  | 0.83 |  |  | llm (0.6) | Jorga_2000_table_3:row12:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- table section iov: 'IOV (CL)' routed out of structural estimates ('Inter-occasion variability σ²')
- 'θFood(F)': unit 'F' is a parameter symbol — dropped
- dropped unlinked row (NIL): 'θProtein(Vc)' — extend the ontology if this is a real PK parameter (source ['Jorga_2000_table_3:row15:col3'])
- unit_dimension_mismatch: 'θCLCr(CL)' → Q22 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('θCLCr(CL)', value '1.19') — already have one for this compound
- dropped unlinked row (NIL): 'ε (mult)' — extend the ontology if this is a real PK parameter (source ['Jorga_2000_table_3:row25:col3'])
- routed 'ε (add)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (l h⁻¹)); Q63 (Vc (l)); Q64 (Vp (l)); Q30 (Q (l h⁻¹))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tolcapone
- model-stage split: 'non-fluctuator model final estimate' is the final model of Jorga_2000 (paper reports 6 stages: fluctuator model final estimate, fluctuator model s.e. of the estimate, fluctuators, non-fluctuator model final estimate, non-fluctuator model s.e. of the estimate, non-fluctuators); same population, different model-building step

**Extraction notes:**
- companion parameter table 4 transcribed (10 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.917 (11/12 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θfood].parameter_id` | Q900 | Q87 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Jorga_2000_table_3:row1:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Jorga_2000_table_3:row4:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Jorga_2000_table_3:row5:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Jorga_2000_table_3:row2:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Jorga_2000_table_3:row3:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Jorga_2000_table_3:row6:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.5 | ['Jorga_2000_table_3:row1:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.5 L/h | ['Jorga_2000_table_3:row1:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.5 L | ['Jorga_2000_table_3:row2:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 24 L | ['Jorga_2000_table_3:row3:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=tolcapone) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 6 scholar param(s) emitted or defaulted | 6 covered |  | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check | fail | no second reader contradicts | verdict disputed; agreement 0.917 (11 of 12 compared fields agree); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.917 | cross-check contradicted by a second reader: verdict disputed; agreement 0.917 (11 of 12 compared fields agree); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tolcapone/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat_modelica.zip" download>Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat_modelica.zip</a> <span class="pk-size">(5.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tolcapone/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat_fmi.zip" download>Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tolcapone/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat_matlab.zip" download>Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tolcapone/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat_matlab_simbio.zip" download>Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tolcapone/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat_sbml.zip" download>Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat_sbml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tolcapone/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat_cellml.zip" download>Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2732 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 1440 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-05 | kg |
| input | model | `Cl` | 1.25e-06 | m3/s |
| input | model | `VdPerKg` | 5e-05 | m3/kg |
| input | model | `k12` | 0.0006111 | 1/s |
| input | model | `k21` | 8.912e-05 | 1/s |
| input | model | `ka` | 0.0001944 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Jorga K, Fotteler B, Banken L, Snell P, Steimer JL. Population pharmacokinetics of tolcapone in parkinsonian patients in dose finding studies. British journal of clinical pharmacology 49(1):39–48 (2000). [doi:10.1046/j.1365-2125.2000.00113.x](https://doi.org/10.1046/j.1365-2125.2000.00113.x)

**This record:** Pharmacolibrary, model `Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat`. <https://pharmacolibrary.github.io/#/drugs/drug_tolcapone/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat>

```bibtex
@misc{pharmacolibrary_TolcaponeJorga2000finalnonfluctuatormodelfinalestimat,
  title  = {{Pharmacolibrary model Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_tolcapone/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat},
  note   = {Parameters from doi:10.1046/j.1365-2125.2000.00113.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 50 mg, single dose, first-order absorption (ka 0.7 /h, lag 24 min, F 0.9). Doses in the paper: 50, 200, 400 mg.

<dbs-fmusim paramsurl="drugs/drug_tolcapone/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_tolcapone/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat_params.json` · controls `Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btolcapone%5D%20Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat&body=Drug%3A%20tolcapone%0ARecord%3A%20Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat%0APaper%3A%20Jorga_2000%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tolcapone/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 15:55 UTC</sub>
