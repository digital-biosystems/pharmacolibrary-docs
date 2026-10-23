<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;ethosuximide&quot;,&quot;href&quot;:&quot;drugs/drug_ethosuximide/&quot;},{&quot;label&quot;:&quot;Diezi_2023 \u00b7 final_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ethosuximide_Diezi2023_final_model&quot;,&quot;label&quot;:&quot;Diezi_2023_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ethosuximide_Diezi2023_granules_a&quot;,&quot;label&quot;:&quot;Diezi_2023_granules_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethosuximide/Ethosuximide_Diezi2023_granules_a.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethosuximide_Diezi2023_granules_b&quot;,&quot;label&quot;:&quot;Diezi_2023_granules_b&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethosuximide/Ethosuximide_Diezi2023_granules_b.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethosuximide_Diezi2023_syrup_zarontin_b&quot;,&quot;label&quot;:&quot;Diezi_2023_syrup_zarontin_b&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethosuximide/Ethosuximide_Diezi2023_syrup_zarontin_b.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ethosuximide — `Ethosuximide_Diezi2023_final_model`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Ethosuximide model fails time-to-peak checks and uses placeholder values for bioavailability and lag time instead of paper estimates.

<div class="pk-model-meta" hidden drug="ethosuximide" model-id="Ethosuximide_Diezi2023_final_model" status="needs_review" stale="false" population="healthy adults" measured-compound="ethosuximide" parameterization="mechanistic" topology="2C"></div>

## Citation
Diezi L, Dao K, Jullien V, Roussel-Maupetit C, Burton I, André P et al. An innovative ethosuximide granule formulation designed for pediatric use: Comparative pharmacokinetics, safety, tolerability, and palatability profile versus reference syrup. Pharmacology research & perspectives 11(1):e01032 (2023).
  ·  DOI: [10.1002/prp2.1032](https://doi.org/10.1002/prp2.1032)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult.

**Dosing:** 700 mg, oral, single.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model/Ethosuximide_Diezi2023_final_model.svg" alt="Ethosuximide_Diezi2023_final_model diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h) | CL | 0.569 | L/h |
| V c (L) | V1 | 31.3 | L |
| Q (L/h) | Q | 10.2 | L/h |
| V p (L) | V2 | 13.9 | L |
| kasyrup (h−1) | kabs | 5.59 | h−1 |
| θ weight | allometric_exponent | 1.71 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.909). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Ethosuximide model fails time-to-peak checks and uses placeholder values for bioavailability and lag time instead of paper estimates.**

The simulated time of the peak is 1.18 hours, differing significantly from paper-reported values like 0.63 hours. Bioavailability and absorption lag time were not extracted from the paper, so standard library placeholders were used rather than specific estimates. These unreported parameters affect the simulated profile but lack support from this study's data. Extracted — ethosuximide: CL 0.569 L/h, V1 31.3 L, Q 10.2 L/h, V2 13.9 L, kabs 5.59 h−1, allometric_exponent 1.71.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[θ weight].parameter_id`: this record has Q319, the second reading Q900. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 0.569 | L/h | 1.581e-07 | m3/s | l/h | exact (1) | prp21032-tbl-0002:row2:col1, prp21032-tbl-0002:row2:col2, prp21032-tbl-0002:row2:col3, prp21032-tbl-0002:row2:col4 |
| V c (L) | `Q63` · V1 | 31.3 | L | 0.0313 | m3 | l | space_fold (0.95) | prp21032-tbl-0002:row3:col1, prp21032-tbl-0002:row3:col2, prp21032-tbl-0002:row3:col3, prp21032-tbl-0002:row3:col4 |
| Q (L/h) | `Q30` · Q | 10.2 | L/h | 2.833e-06 | m3/s | l/h | exact (1) | prp21032-tbl-0002:row4:col1, prp21032-tbl-0002:row4:col2 |
| V p (L) | `Q64` · V2 | 13.9 | L | 0.0139 | m3 | l | space_fold (0.95) | prp21032-tbl-0002:row5:col1, prp21032-tbl-0002:row5:col2 |
| kasyrup (h−1) | `Q49` · kabs | 5.59 | h−1 | 0.001553 | 1/s | 1/h | llm (0.6) | prp21032-tbl-0002:row6:col1, prp21032-tbl-0002:row6:col2, prp21032-tbl-0002:row6:col3, prp21032-tbl-0002:row6:col4 |
| θ weight | `Q319` · allometric_exponent | 1.71 |  |  |  |  | llm (0.6) | prp21032-tbl-0002:row8:col1, prp21032-tbl-0002:row8:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- routed 'kagranulesA&B (h−1)' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (L/h)); Q63 (V c (L)); Q30 (Q (L/h)); Q64 (V p (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ethosuximide
- population split: 'final model' subgroup of Diezi_2023 (paper reports 4 populations: final model, granules (a), granules (b), syrup (zarontin®) (b))
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell prp21032-tbl-0002:row2:col6 = '(0.53; 0.61)'
- unparsed cell prp21032-tbl-0002:row2:col8 = '(12.3; 20.9)'
- unparsed cell prp21032-tbl-0002:row3:col8 = '(3.2; 11.5)'
- unparsed cell prp21032-tbl-0002:row6:col6 = '(2.70; 11.8)'
- unparsed cell prp21032-tbl-0002:row6:col8 = '(66.3; 144.4)'
- unparsed cell prp21032-tbl-0002:row7:col6 = '(1.40; 2.95)'
- unparsed cell prp21032-tbl-0002:row7:col8 = '(32.5; 78.3)'
- unparsed cell prp21032-tbl-0002:row8:col6 = '(1.38; 2.26)'
- unparsed cell prp21032-tbl-0002:row9:col6 = '(0.12; 0.18)'
- unparsed cell prp21032-tbl-0002:row10:col6 = '(0.02; 0.04)'
- transposed table Diezi_2023_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 1 transcribed (18 record(s))
- LLM selected parameter table(s) 1
- dropped sensitivity-analysis table(s) 2 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.909 (10/11 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θ weight].parameter_id` | Q319 | Q900 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['prp21032-tbl-0002:row2:col1', 'prp21032-tbl-0002:row2:col2', 'prp21032-tbl-0002:row2:col3', 'prp21032-tbl-0002:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['prp21032-tbl-0002:row4:col1', 'prp21032-tbl-0002:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['prp21032-tbl-0002:row6:col1', 'prp21032-tbl-0002:row6:col2', 'prp21032-tbl-0002:row6:col3', 'prp21032-tbl-0002:row6:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['prp21032-tbl-0002:row3:col1', 'prp21032-tbl-0002:row3:col2', 'prp21032-tbl-0002:row3:col3', 'prp21032-tbl-0002:row3:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['prp21032-tbl-0002:row5:col1', 'prp21032-tbl-0002:row5:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.569 | ['prp21032-tbl-0002:row2:col1', 'prp21032-tbl-0002:row2:col2', 'prp21032-tbl-0002:row2:col3', 'prp21032-tbl-0002:row2:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.569 L/h | ['prp21032-tbl-0002:row2:col1', 'prp21032-tbl-0002:row2:col2', 'prp21032-tbl-0002:row2:col3', 'prp21032-tbl-0002:row2:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 31.3 L | ['prp21032-tbl-0002:row3:col1', 'prp21032-tbl-0002:row3:col2', 'prp21032-tbl-0002:row3:col3', 'prp21032-tbl-0002:row3:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 13.9 L | ['prp21032-tbl-0002:row5:col1', 'prp21032-tbl-0002:row5:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=ethosuximide) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 93.7 | 0.01051 |  | unresolved concentration unit (exp '90% Confidence Interval (CI): 76.3–115.1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 87.6 | 0.01051 |  | unresolved concentration unit (exp '90% CI: 81.6–94.0', sim 'kg/m3') |
| T1_tmax | reference | fail | 0.63 | 1.184 | 1.879 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.75 | 1.184 | 1.578 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.5 | 1.184 | 2.367 | h→SI vs simulated h |
| T1_tmax | reference | fail | 4 | 1.184 | 0.2959 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model/Ethosuximide_Diezi2023_final_model_modelica.zip" download>Ethosuximide_Diezi2023_final_model_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model/Ethosuximide_Diezi2023_final_model_fmi.zip" download>Ethosuximide_Diezi2023_final_model_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model/Ethosuximide_Diezi2023_final_model_matlab.zip" download>Ethosuximide_Diezi2023_final_model_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model/Ethosuximide_Diezi2023_final_model_matlab_simbio.zip" download>Ethosuximide_Diezi2023_final_model_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model/Ethosuximide_Diezi2023_final_model_sbml.zip" download>Ethosuximide_Diezi2023_final_model_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model/Ethosuximide_Diezi2023_final_model_cellml.zip" download>Ethosuximide_Diezi2023_final_model_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1412 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0007 | kg |
| input | model | `Cl` | 1.581e-07 | m3/s |
| input | model | `VdPerKg` | 0.0004471 | m3/kg |
| input | model | `k12` | 9.052e-05 | 1/s |
| input | model | `k21` | 0.0002038 | 1/s |
| input | model | `ka` | 0.001553 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Diezi L, Dao K, Jullien V, Roussel-Maupetit C, Burton I, André P et al. An innovative ethosuximide granule formulation designed for pediatric use: Comparative pharmacokinetics, safety, tolerability, and palatability profile versus reference syrup. Pharmacology research & perspectives 11(1):e01032 (2023). [doi:10.1002/prp2.1032](https://doi.org/10.1002/prp2.1032)

**This record:** Pharmacolibrary v26.09, model `Ethosuximide_Diezi2023_final_model`. <https://pharmacolibrary.github.io/#/drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model>

```bibtex
@misc{pharmacolibrary_EthosuximideDiezi2023finalmodel,
  title  = {{Pharmacolibrary model Ethosuximide_Diezi2023_final_model}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model},
  note   = {Parameters from doi:10.1002/prp2.1032},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 700 mg, single dose, first-order absorption (ka 5.59 /h, F 0.9). Dose in the paper: 700 mg.

<dbs-fmusim paramsurl="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model/Ethosuximide_Diezi2023_final_model_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model/Ethosuximide_Diezi2023_final_model_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Ethosuximide_Diezi2023_final_model_params.json` · controls `Ethosuximide_Diezi2023_final_model_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bethosuximide%5D%20Ethosuximide_Diezi2023_final_model&body=Drug%3A%20ethosuximide%0ARecord%3A%20Ethosuximide_Diezi2023_final_model%0APaper%3A%20Diezi_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:47 UTC</sub>
