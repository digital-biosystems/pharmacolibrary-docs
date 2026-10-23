<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;dupilumab&quot;,&quot;href&quot;:&quot;drugs/drug_dupilumab/&quot;},{&quot;label&quot;:&quot;Kovalenko_2020 \u00b7 population_estimates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dupilumab_Takechi2025_reference&quot;,&quot;label&quot;:&quot;Takechi_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dupilumab/Dupilumab_Takechi2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dupilumab_Kovalenko2020_population_estimates&quot;,&quot;label&quot;:&quot;Kovalenko_2020_population_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dupilumab — `Dupilumab_Kovalenko2020_population_estimates`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> Dupilumab bioavailability was not extracted from Kovalenko_2020 and defaulted to library placeholders, so the record was held for review.

<div class="pk-model-meta" hidden drug="dupilumab" model-id="Dupilumab_Kovalenko2020_population_estimates" status="needs_review" stale="false" population="healthy volunteers and patients with moderate‐to‐severe atopic dermatitis" measured-compound="dupilumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Kovalenko P, Davis JD, Li M, Rippley R, Ardeleanu M, Shumel B et al. Base and Covariate Population Pharmacokinetic Analyses of Dupilumab Using Phase 3 Data. Clinical pharmacology in drug development 9(6):756–767 (2020).
  ·  DOI: [10.1002/cpdd.780](https://doi.org/10.1002/cpdd.780)

## Population and dosing

**Population:** healthy volunteers and patients with moderate‐to‐severe atopic dermatitis · condition atopic dermatitis · age group adult · n = 2115.

**Dosing:** 300 mg, sc, multiple, every 168 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 8 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates/Dupilumab_Kovalenko2020_population_estimates.svg" alt="Dupilumab_Kovalenko2020_population_estimates diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vc (L) | V | 2.74 | L |
| ke (1/d) | kel | 0.0477 | 1/d |
| CL (L/d) | CL | 0.130 | L/d |
| cl_bmi | cl_bmi | 0.372 |  |
| theta_v1_weight_power | theta_v1_weight_power | 0.817 |  |
| theta_v1_albumin_power | theta_v1_albumin_power | -0.653 |  |
| theta_q319_weight_power | theta_q319_weight_power | 0.806 |  |
| theta_cl_albumin_power | theta_cl_albumin_power | -0.800 |  |
| theta_cl_race_cl_white | theta_cl_race_cl_white | -0.118 |  |
| theta_kel_bmi_power | theta_kel_bmi_power | 0.368 |  |
| theta_kel_race_ke_white | theta_kel_race_ke_white | -0.123 |  |
| ka (1/day) | kabs | 0.548 | 1/day |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Dupilumab bioavailability was not extracted from Kovalenko_2020 and defaulted to library placeholders, so the record was held for review.**

The record lists no value for the bioavailability parameter (F), meaning it fell back to a generic library placeholder rather than a study-derived estimate. Consequently, the simulated concentration profile relies on an unsupported bioavailability assumption. Additionally, the defined covariate effects, such as the influence of BMI and albumin on clearance, were not tested in the simulations because only the reference individual was modeled. Extracted — dupilumab: V 2.74 L, kel 0.0477 1/d, CL 0.13 L/d, kabs 0.548 1/day.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vc (L) | `Q61` · V | 2.74 | L | 0.00274 | m3 | l | exact (1) | Kovalenko_2020_table_2:row3:col1, Kovalenko_2020_table_2:row3:col3 |
| ke (1/d) | `Q47` · kel | 0.0477 | 1/d | 5.521e-07 | 1/s | 1/h | exact (1) | Kovalenko_2020_table_2:row4:col3 |
| CL (L/d) | `Q22` · CL | 0.130 | L/d | 1.505e-09 | m3/s | l/d | exact (1) | Kovalenko_2020_table_2:row5:col1 |
| cl_bmi | `Q900` · cl_bmi | 0.372 |  |  |  |  |  | Kovalenko_2020_table_2:row11:col1 |
| theta_v1_weight_power | `Q900` · theta_v1_weight_power | 0.817 |  |  |  |  |  | Kovalenko_2020_table_2:row7:col1, Kovalenko_2020_table_2:row7:col3 |
| theta_v1_albumin_power | `Q900` · theta_v1_albumin_power | -0.653 |  |  |  |  |  | Kovalenko_2020_table_2:row8:col1, Kovalenko_2020_table_2:row8:col3 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.806 |  |  |  |  |  | Kovalenko_2020_table_2:row9:col1 |
| theta_cl_albumin_power | `Q900` · theta_cl_albumin_power | -0.800 |  |  |  |  |  | Kovalenko_2020_table_2:row10:col1 |
| theta_cl_race_cl_white | `Q900` · theta_cl_race_cl_white | -0.118 |  |  |  |  |  | Kovalenko_2020_table_2:row13:col1 |
| theta_kel_bmi_power | `Q900` · theta_kel_bmi_power | 0.368 |  |  |  |  |  | Kovalenko_2020_table_2:row14:col3 |
| theta_kel_race_ke_white | `Q900` · theta_kel_race_ke_white | -0.123 |  |  |  |  |  | Kovalenko_2020_table_2:row16:col3 |
| ka (1/day) | `Q49` · kabs | 0.548 | 1/day | 6.343e-06 | 1/s | 1/h | review_gapfill (0.7) | Takechi_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- covariate level 'CL ∼ BMI' → Q900:cl_bmi = 0.372 (power on Q22)
- dropped duplicate Q22 ('CL ∼ EASI', value '0.140') — already have one for this compound
- dropped duplicate Q47 ('ke ∼ EASI', value '0.143') — already have one for this compound
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'ke (1/d)' → 1/d (from the popPK convention: "The parameter 'ke' is the elimination rate constant. While the paper states the half-life in days (25.4 days) and implie")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dupilumab
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Vc (L)' is the general volume)
- population split: 'population estimates' subgroup of Kovalenko_2020 (paper reports 2 populations: population estimate of covariate coefficient, population estimates)
- molar mass: none found for 'dupilumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Takechi_2025's review values (primary lacked it)

**Extraction notes:**
- unparsed cell cpdd780-tbl-0002:row1:col2 = '0.972 (0.915, 1.02)'
- unparsed cell cpdd780-tbl-0002:row1:col3 = '0.972 (0.896, 1.03)'
- unparsed cell cpdd780-tbl-0002:row1:col4 = '0.972 (0.876, 1.05)'
- unparsed cell cpdd780-tbl-0002:row2:col2 = '0.960 (0.935, 0.990)'
- unparsed cell cpdd780-tbl-0002:row2:col3 = '0.960 (0.931, 0.995)'
- unparsed cell cpdd780-tbl-0002:row2:col4 = '0.960 (0.919, 1.01)'
- unparsed cell Kovalenko_2020_table_2:row4:col1 = '0.0476a'
- unparsed cell Kovalenko_2020_table_2:row5:col3 = '0.131a'
- unparsed cell Kovalenko_2020_table_2:row7:col2 = '&lt;10−10'
- unparsed cell Kovalenko_2020_table_2:row7:col4 = '&lt;10−10'
- unparsed cell Kovalenko_2020_table_2:row8:col2 = '10−8'
- unparsed cell Kovalenko_2020_table_2:row8:col4 = '&lt;10−10'
- unparsed cell Kovalenko_2020_table_2:row9:col2 = '&lt;10−10'
- unparsed cell Kovalenko_2020_table_2:row10:col2 = '&lt;10−10'
- unparsed cell Kovalenko_2020_table_2:row11:col2 = '1.5 × 10−5'
- unparsed cell Kovalenko_2020_table_2:row12:col2 = '&lt;10−10'
- unparsed cell Kovalenko_2020_table_2:row13:col2 = '&lt;10−10'
- unparsed cell Kovalenko_2020_table_2:row14:col4 = '&lt;10−10'
- unparsed cell Kovalenko_2020_table_2:row15:col4 = '&lt;10−10'
- unparsed cell Kovalenko_2020_table_2:row16:col4 = '&lt;10−10'
- companion parameter table 2 transcribed (16 record(s), model stage 'full')
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 1 from the LLM selection — perturbations of a model, not a model
- LLM region cpdd780-fig-0001:caption: Error code: 429 - {'error': {'message': 'Rate limit exceeded for api_key: 8d79104cac3d0b5a8019d9c3dd60ff02e7a84591fb3552ddb3bbcabd52b31d23. Limit type: max_parallel_requests. Current limit: 4, Remaining: 0. Limit resets at: 2026-10-07 08:44:46 UTC', 'type': 'throttling_error', 'param': None, 'code': '429'}}

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kovalenko_2020_table_2:row5:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Kovalenko_2020_table_2:row4:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Takechi_2025:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Kovalenko_2020_table_2:row3:col1', 'Kovalenko_2020_table_2:row3:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.13 | ['Kovalenko_2020_table_2:row5:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00542 L/h | ['Kovalenko_2020_table_2:row5:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.74 L | ['Kovalenko_2020_table_2:row3:col1', 'Kovalenko_2020_table_2:row3:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=dupilumab) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates/Dupilumab_Kovalenko2020_population_estimates_modelica.zip" download>Dupilumab_Kovalenko2020_population_estimates_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates/Dupilumab_Kovalenko2020_population_estimates_fmi.zip" download>Dupilumab_Kovalenko2020_population_estimates_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates/Dupilumab_Kovalenko2020_population_estimates_matlab.zip" download>Dupilumab_Kovalenko2020_population_estimates_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates/Dupilumab_Kovalenko2020_population_estimates_matlab_simbio.zip" download>Dupilumab_Kovalenko2020_population_estimates_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates/Dupilumab_Kovalenko2020_population_estimates_sbml.zip" download>Dupilumab_Kovalenko2020_population_estimates_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates/Dupilumab_Kovalenko2020_population_estimates_cellml.zip" download>Dupilumab_Kovalenko2020_population_estimates_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0003 | kg |
| input | model | `Cl` | 1.505e-09 | m3/s |
| input | model | `VdPerKg` | 3.914e-05 | m3/kg |
| input | model | `ka` | 6.343e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kovalenko P, Davis JD, Li M, Rippley R, Ardeleanu M, Shumel B et al. Base and Covariate Population Pharmacokinetic Analyses of Dupilumab Using Phase 3 Data. Clinical pharmacology in drug development 9(6):756–767 (2020). [doi:10.1002/cpdd.780](https://doi.org/10.1002/cpdd.780)

**This record:** Pharmacolibrary v26.09, model `Dupilumab_Kovalenko2020_population_estimates`. <https://pharmacolibrary.github.io/#/drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates>

```bibtex
@misc{pharmacolibrary_DupilumabKovalenko2020populationestimates,
  title  = {{Pharmacolibrary model Dupilumab_Kovalenko2020_population_estimates}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates},
  note   = {Parameters from doi:10.1002/cpdd.780},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 300 mg, single dose, first-order absorption (ka 0.0228 /h, F 0.9). Dose in the paper: 300 mg.

<dbs-fmusim paramsurl="drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates/Dupilumab_Kovalenko2020_population_estimates_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates/Dupilumab_Kovalenko2020_population_estimates_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Dupilumab_Kovalenko2020_population_estimates_params.json` · controls `Dupilumab_Kovalenko2020_population_estimates_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdupilumab%5D%20Dupilumab_Kovalenko2020_population_estimates&body=Drug%3A%20dupilumab%0ARecord%3A%20Dupilumab_Kovalenko2020_population_estimates%0APaper%3A%20Kovalenko_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 08:14 UTC</sub>
