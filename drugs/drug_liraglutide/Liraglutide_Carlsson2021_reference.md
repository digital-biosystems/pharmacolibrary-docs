<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;liraglutide&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/&quot;},{&quot;label&quot;:&quot;Carlsson_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Liraglutide_Overgaard2016_reference&quot;,&quot;label&quot;:&quot;Overgaard_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/Liraglutide_Overgaard2016_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Liraglutide_Woodward2014_reference&quot;,&quot;label&quot;:&quot;Woodward_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/Liraglutide_Woodward2014_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Liraglutide_Carlsson2021_reference&quot;,&quot;label&quot;:&quot;Carlsson_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/Liraglutide_Carlsson2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Guo_2025_Weight&quot;,&quot;label&quot;:&quot;Guo_2025 \u00b7 \u0394\u0394Weight&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/pd_Guo_2025_Weight.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# liraglutide — `Liraglutide_Carlsson2021_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> Liraglutide model held back because covariate effects on clearance were not simulated and body weight power was inconsistent.

<div class="pk-model-meta" hidden drug="liraglutide" model-id="Liraglutide_Carlsson2021_reference" status="needs_review" stale="false" population="children, adolescents and adults with obesity" measured-compound="liraglutide" parameterization="apparent" topology="1C"></div>

## Citation
Carlsson Petri KC, Hale PM, Hesse D, Rathor N, Mastrandrea LD. Liraglutide pharmacokinetics and exposure-response in adolescents with obesity. Pediatric obesity 16(10):e12799 (2021).
  ·  DOI: [10.1111/ijpo.12799](https://doi.org/10.1111/ijpo.12799)

## Population and dosing

**Population:** children, adolescents and adults with obesity · condition obesity · age group mixed.

**Dosing:** 3 mg, sc, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted, plus 5 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_liraglutide/Liraglutide_Carlsson2021_reference/Liraglutide_Carlsson2021_reference.svg" alt="Liraglutide_Carlsson2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Absorption rate constant | kabs | 0.0804 | 1/h |  |  |
| Apparent clearance | CL/F | 1.07 | L/h | 2.7 | 31.2 (None% RSE) |
| Apparent volume of distribution | V/F | 13.1 | L |  | 31.7 (None% RSE) |
| sex_contrast_male_female_on_cl_f | sex_contrast_male_female_on_cl_f | 1.12 |  | 5.64 |  |
| age_contrast_child_adult_on_cl_f | age_contrast_child_adult_on_cl_f | 1.11 |  | 10.2 |  |
| age_contrast_adolescent_adult_on_cl_f | age_contrast_adolescent_adult_on_cl_f | 1.06 |  | 6.24 |  |
| theta_q319_body_weight_power | theta_q319_body_weight_power | 0.762 |  | 13.2 |  |
| theta_q319_body_weight_power | theta_q319_body_weight_power | 0.587 |  | 9.75 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.562). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Liraglutide model held back because covariate effects on clearance were not simulated and body weight power was inconsistent.**

The record includes covariate effects for sex, age, and body weight, but these scenarios were not exercised in the simulation. The body weight exponent on apparent clearance appears as both 0.762 and 0.587, creating an internal inconsistency. Additionally, the lag time was not extracted, so a default value was used instead of an explicit estimate. Extracted — liraglutide: kabs 0.0804 1/h, CL/F 1.07 L/h, V/F 13.1 L.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has liraglutide, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant | `Q49` · kabs | 0.0804 | 1/h | 2.233e-05 | 1/s | 1/h |  | exact (1) | ijpo12799-tbl-0003:row1:col1, ijpo12799-tbl-0003:row1:col2, Carlsson_2021_table_S1:row0:col1, Carlsson_2021_table_S1:row0:col2 |  |
| Apparent clearance | `Q27` · CL/F | 1.07 | L/h | 2.972e-07 | m3/s | L/h | 2.7 | exact (1) | ijpo12799-tbl-0003:row2:col2, Carlsson_2021_table_S1:row1:col2 | 31.2 (None% RSE) |
| Apparent volume of distribution | `Q76` · V/F | 13.1 | L | 0.0131 | m3 | L |  | exact (1) | ijpo12799-tbl-0003:row3:col2, Carlsson_2021_table_S1:row2:col2 | 31.7 (None% RSE) |
| sex_contrast_male_female_on_cl_f | `Q900` · sex_contrast_male_female_on_cl_f | 1.12 |  |  |  |  | 5.64 |  | ijpo12799-tbl-0003:row5:col2 |  |
| age_contrast_child_adult_on_cl_f | `Q900` · age_contrast_child_adult_on_cl_f | 1.11 |  |  |  |  | 10.2 |  | ijpo12799-tbl-0003:row6:col2 |  |
| age_contrast_adolescent_adult_on_cl_f | `Q900` · age_contrast_adolescent_adult_on_cl_f | 1.06 |  |  |  |  | 6.24 |  | ijpo12799-tbl-0003:row7:col2 |  |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.762 |  |  |  |  | 13.2 |  | ijpo12799-tbl-0003:row4:col2 |  |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.587 |  |  |  |  | 9.75 |  | ijpo12799-tbl-0003:row8:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'Apparent clearance' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'Apparent volume of distribution' routed out of structural estimates ('IIV (%CV)')
- column 'parameter symbol (unit)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- covariate level 'Sex contrast (male/female) on CL/F' → Q900:sex_contrast_male_female_on_cl_f = 1.12 (linear_fractional on Q27)
- covariate level 'Age contrast (child/adult) on CL/F' → Q900:age_contrast_child_adult_on_cl_f = 1.11 (linear_fractional on Q27)
- covariate level 'Age contrast (adolescent/adult) on CL/F' → Q900:age_contrast_adolescent_adult_on_cl_f = 1.06 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'NA' — extend the ontology if this is a real PK parameter (source ['ijpo12799-tbl-0003:row9:col2', 'Carlsson_2021_table_S1:row3:col2'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Absorption rate constant' → 1/h (from the popPK convention: 'No unit is stated in the provided text or table captions for the absorption rate constant (Kabs). In population pharmaco')
- implicit units: 'Apparent clearance' → L/h (from the popPK convention: 'No unit is stated in the provided text or table captions for apparent clearance (CL/F). Clearance parameters are convent')
- implicit units: 'Apparent volume of distribution' → L (from the popPK convention: 'No unit is stated in the provided text or table captions for apparent volume of distribution (V/F). Volume parameters ar')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=liraglutide
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table ijpo12799-tbl-0003: unbound_uncertainty
- table ijpo12799-tbl-0003: units_need_context
- table Carlsson_2021_table_S1: unbound_uncertainty
- table Carlsson_2021_table_S1: units_need_context
- companion parameter table S1 transcribed (13 record(s), model stage 'base')
- LLM selected parameter table(s) 3, S1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.562 (9/16 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[age_contrast_adolescent_adult_on_cl_f]` | 1.06 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[age_contrast_child_adult_on_cl_f]` | 1.11 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[sex_contrast_male_female_on_cl_f]` | 1.12 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_age]` |  | 1.11 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_sex]` |  | 1.12 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | liraglutide | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | liraglutide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['ijpo12799-tbl-0003:row2:col2', 'Carlsson_2021_table_S1:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['ijpo12799-tbl-0003:row1:col1', 'ijpo12799-tbl-0003:row1:col2', 'Carlsson_2021_table_S1:row0:col1', 'Carlsson_2021_table_S1:row0:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['ijpo12799-tbl-0003:row3:col2', 'Carlsson_2021_table_S1:row2:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.07 L/h | ['ijpo12799-tbl-0003:row2:col2', 'Carlsson_2021_table_S1:row1:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 13.1 L | ['ijpo12799-tbl-0003:row3:col2', 'Carlsson_2021_table_S1:row2:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=liraglutide) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | dev-001: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_liraglutide/Liraglutide_Carlsson2021_reference/Liraglutide_Carlsson2021_reference_modelica.zip" download>Liraglutide_Carlsson2021_reference_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_liraglutide/Liraglutide_Carlsson2021_reference/Liraglutide_Carlsson2021_reference_fmi.zip" download>Liraglutide_Carlsson2021_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_liraglutide/Liraglutide_Carlsson2021_reference/Liraglutide_Carlsson2021_reference_matlab.zip" download>Liraglutide_Carlsson2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_liraglutide/Liraglutide_Carlsson2021_reference/Liraglutide_Carlsson2021_reference_matlab_simbio.zip" download>Liraglutide_Carlsson2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_liraglutide/Liraglutide_Carlsson2021_reference/Liraglutide_Carlsson2021_reference_sbml.zip" download>Liraglutide_Carlsson2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_liraglutide/Liraglutide_Carlsson2021_reference/Liraglutide_Carlsson2021_reference_cellml.zip" download>Liraglutide_Carlsson2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 3.751 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 3e-06 | kg |
| input | model | `Cl` | 2.972e-07 | m3/s |
| input | model | `VdPerKg` | 0.0001871 | m3/kg |
| input | model | `ka` | 2.233e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Carlsson Petri KC, Hale PM, Hesse D, Rathor N, Mastrandrea LD. Liraglutide pharmacokinetics and exposure-response in adolescents with obesity. Pediatric obesity 16(10):e12799 (2021). [doi:10.1111/ijpo.12799](https://doi.org/10.1111/ijpo.12799)

**This record:** Pharmacolibrary v26.09, model `Liraglutide_Carlsson2021_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_liraglutide/Liraglutide_Carlsson2021_reference>

```bibtex
@misc{pharmacolibrary_LiraglutideCarlsson2021reference,
  title  = {{Pharmacolibrary model Liraglutide_Carlsson2021_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_liraglutide/Liraglutide_Carlsson2021_reference},
  note   = {Parameters from doi:10.1111/ijpo.12799},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 3 mg, single dose, first-order absorption (ka 0.0804 /h, F 1). Dose in the paper: 3 mg.

<dbs-fmusim paramsurl="drugs/drug_liraglutide/Liraglutide_Carlsson2021_reference/Liraglutide_Carlsson2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_liraglutide/Liraglutide_Carlsson2021_reference/Liraglutide_Carlsson2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Liraglutide_Carlsson2021_reference_params.json` · controls `Liraglutide_Carlsson2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bliraglutide%5D%20Liraglutide_Carlsson2021_reference&body=Drug%3A%20liraglutide%0ARecord%3A%20Liraglutide_Carlsson2021_reference%0APaper%3A%20Carlsson_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_liraglutide/Liraglutide_Carlsson2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 09:00 UTC</sub>
