<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;dupilumab&quot;,&quot;href&quot;:&quot;drugs/drug_dupilumab/&quot;},{&quot;label&quot;:&quot;Kovalenko_2020 \u00b7 population_estimates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dupilumab_Takechi2025_reference&quot;,&quot;label&quot;:&quot;Takechi_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dupilumab/Dupilumab_Takechi2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dupilumab_Kovalenko2020_population_estimates&quot;,&quot;label&quot;:&quot;Kovalenko_2020_population_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dupilumab — `Dupilumab_Kovalenko2020_population_estimates`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**Dupilumab bioavailability was not extracted from Kovalenko_2020 and defaulted to library placeholders, so the record was held for review.**

The record lists no value for the bioavailability parameter (F), meaning it fell back to a generic library placeholder rather than a study-derived estimate. Consequently, the simulated concentration profile relies on an unsupported bioavailability assumption. Additionally, the defined covariate effects, such as the influence of BMI and albumin on clearance, were not tested in the simulations because only the reference individual was modeled. Extracted — dupilumab: V 2.74 L, kel 0.0477 1/d, CL 0.13 L/d, kabs 0.548 1/day.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Kovalenko P et al., Base and Covariate Population Pharmacok…, Clinical pharmacology in dr… (2020)
  ·  DOI: [10.1002/cpdd.780](https://doi.org/10.1002/cpdd.780)

<div class="pk-model-meta" hidden drug="dupilumab" model-id="Dupilumab_Kovalenko2020_population_estimates" status="needs_review" stale="false" population="healthy volunteers and patients with moderate‐to‐severe atopic dermatitis" measured-compound="dupilumab" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 4 extracted, plus 8 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vc (L) | `Q61` · V | 2.74 | L | 0.0027400000000000002 | [l] | not captured | exact (1.0) | Kovalenko_2020_table_2:row3:col1, Kovalenko_2020_table_2:row3:col3 | — | not captured |
| ke (1/d) | `Q47` · kel | 0.0477 | 1/d | 5.520833333333333e-07 | 1/h | not captured | exact (1.0) | Kovalenko_2020_table_2:row4:col3 | — | not captured |
| CL (L/d) | `Q22` · CL | 0.130 | L/d | 1.5046296296296299e-09 | [l] / [d] | not captured | exact (1.0) | Kovalenko_2020_table_2:row5:col1 | — | not captured |
| cl_bmi | `Q900` · cl_bmi | 0.372 | not captured | not captured | not captured | not captured | not captured (not captured) | Kovalenko_2020_table_2:row11:col1 | — | not captured |
| theta_v1_weight_power | `Q900` · theta_v1_weight_power | 0.817 | not captured | not captured | not captured | not captured | not captured (not captured) | Kovalenko_2020_table_2:row7:col1, Kovalenko_2020_table_2:row7:col3 | — | not captured |
| theta_v1_albumin_power | `Q900` · theta_v1_albumin_power | -0.653 | not captured | not captured | not captured | not captured | not captured (not captured) | Kovalenko_2020_table_2:row8:col1, Kovalenko_2020_table_2:row8:col3 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.806 | not captured | not captured | not captured | not captured | not captured (not captured) | Kovalenko_2020_table_2:row9:col1 | — | not captured |
| theta_cl_albumin_power | `Q900` · theta_cl_albumin_power | -0.800 | not captured | not captured | not captured | not captured | not captured (not captured) | Kovalenko_2020_table_2:row10:col1 | — | not captured |
| theta_cl_race_cl_white | `Q900` · theta_cl_race_cl_white | -0.118 | not captured | not captured | not captured | not captured | not captured (not captured) | Kovalenko_2020_table_2:row13:col1 | — | not captured |
| theta_kel_bmi_power | `Q900` · theta_kel_bmi_power | 0.368 | not captured | not captured | not captured | not captured | not captured (not captured) | Kovalenko_2020_table_2:row14:col3 | — | not captured |
| theta_kel_race_ke_white | `Q900` · theta_kel_race_ke_white | -0.123 | not captured | not captured | not captured | not captured | not captured (not captured) | Kovalenko_2020_table_2:row16:col3 | — | not captured |
| ka (1/day) | `Q49` · kabs | 0.548 | 1/day | 6.342592592592593e-06 | 1/h | not captured | review_gapfill (0.7) | Takechi_2025:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kovalenko_2020_table_2:row5:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Kovalenko_2020_table_2:row4:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Takechi_2025:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kovalenko_2020_table_2:row3:col1', 'Kovalenko_2020_table_2:row3:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.13 | not captured | not captured | ['Kovalenko_2020_table_2:row5:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00542 L/h | not captured | not captured | ['Kovalenko_2020_table_2:row5:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.74 L | not captured | not captured | ['Kovalenko_2020_table_2:row3:col1', 'Kovalenko_2020_table_2:row3:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=dupilumab) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_dupilumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kovalenko_2020` / `Kovalenko_2020::population_estimates`)
- model: `../../../knowledgebase/drugs/drug_dupilumab/models/modelica/Dupilumab_Kovalenko2020_population_estimates.mo`
- deviation: `../../../knowledgebase/drugs/drug_dupilumab/models/modelica/Dupilumab_Kovalenko2020_population_estimates.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_dupilumab/models/modelica/Dupilumab_Kovalenko2020_population_estimates.json`


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
</div><figure class="pk-models-diagram"><img src="drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates/Dupilumab_Kovalenko2020_population_estimates.svg" alt="Dupilumab_Kovalenko2020_population_estimates diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 300 mg, single dose, first-order absorption (ka 0.0228 /h, F 0.9). Dose in the paper: 300 mg.

<dbs-fmusim paramsurl="drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates/Dupilumab_Kovalenko2020_population_estimates_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates/Dupilumab_Kovalenko2020_population_estimates_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Dupilumab_Kovalenko2020_population_estimates_params.json` · controls `Dupilumab_Kovalenko2020_population_estimates_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:14 UTC</sub>
