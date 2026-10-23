<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin lispro&quot;,&quot;href&quot;:&quot;drugs/drug_insulin_lispro/&quot;},{&quot;label&quot;:&quot;Tham_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;InsulinLispro_Tham2017_reference&quot;,&quot;label&quot;:&quot;Tham_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_insulin_lispro/InsulinLispro_Tham2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# insulin lispro — `InsulinLispro_Tham2017_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="insulin lispro" model-id="InsulinLispro_Tham2017_reference" status="accepted_with_caveats" stale="false" population="healthy adults" measured-compound="insulin_lispro" parameterization="apparent" topology="1C"></div>

## Citation
Tham LS, Schneck K, Ertekin A, Reviriego J. Modeling Pharmacokinetic Profiles of Insulin Regimens to Enhance Understanding of Subcutaneous Insulin Regimens. Journal of clinical pharmacology 57(9):1126–1137 (2017).
  ·  DOI: [10.1002/jcph.899](https://doi.org/10.1002/jcph.899)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult.

**Dosing:** 0.3, 0.5 U/kg, sc, multiple, every 12 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_insulin_lispro/InsulinLispro_Tham2017_reference/InsulinLispro_Tham2017_reference.svg" alt="InsulinLispro_Tham2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Bioavailability, FGlar | Fab | 1 |  |
| Absorption rate constant, Ka (1/h) | kabs | 0.0365 | 1/h |
| Absorption lag, ALag (h) | tlag | 0.265 | h |
| Apparent volume of distribution (L) | V/F | 43.0 | L |
| Apparent clearance (L/h) | CL/F | 30.5 | L/h |
| covariate_of_body_weight_on_baseline_endogenous_insulin | covariate_of_body_weight_on_baseline_endogenous_insulin | 0.739 |  |
| theta_q61_body_weight | theta_q61_body_weight | 2.48 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.529). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has insulin_lispro, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Bioavailability, FGlar | `Q40` · Fab | 1 |  |  |  |  | llm_confirmed (0.6) | jcph899-tbl-0002:row3:col1 |
| Absorption rate constant, Ka (1/h) | `Q49` · kabs | 0.0365 | 1/h | 1.014e-05 | 1/s | 1/h | llm_confirmed (0.6) | jcph899-tbl-0002:row6:col1, jcph899-tbl-0002:row6:col2, jcph899-tbl-0002:row6:col3, jcph899-tbl-0002:row6:col4, jcph899-tbl-0002:row6:col5, jcph899-tbl-0002:row6:col6 |
| Absorption lag, ALag (h) | `Q83` · tlag | 0.265 | h | 954 | s | h | llm_confirmed (0.6) | jcph899-tbl-0002:row7:col4, jcph899-tbl-0002:row7:col5 |
| Apparent volume of distribution (L) | `Q76` · V/F | 43.0 | L | 0.043 | m3 | l | exact (1) | jcph899-tbl-0002:row12:col1, jcph899-tbl-0002:row12:col2, jcph899-tbl-0002:row12:col3, jcph899-tbl-0002:row12:col4, jcph899-tbl-0002:row12:col5, jcph899-tbl-0002:row12:col6 |
| Apparent clearance (L/h) | `Q27` · CL/F | 30.5 | L/h | 8.472e-06 | m3/s | l/h | exact (1) | jcph899-tbl-0002:row15:col1, jcph899-tbl-0002:row15:col2, jcph899-tbl-0002:row15:col3, jcph899-tbl-0002:row15:col4, jcph899-tbl-0002:row15:col5, jcph899-tbl-0002:row15:col6 |
| covariate_of_body_weight_on_baseline_endogenous_insulin | `Q900` · covariate_of_body_weight_on_baseline_endogenous_insulin | 0.739 |  |  |  |  |  | jcph899-tbl-0002:row22:col1, jcph899-tbl-0002:row22:col2, jcph899-tbl-0002:row22:col3, jcph899-tbl-0002:row22:col4, jcph899-tbl-0002:row22:col5, jcph899-tbl-0002:row22:col6 |
| theta_q61_body_weight | `Q900` · theta_q61_body_weight | 2.48 |  |  |  |  |  | jcph899-tbl-0002:row13:col1, jcph899-tbl-0002:row13:col2, jcph899-tbl-0002:row13:col5, jcph899-tbl-0002:row13:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section covariance: 'Clearance and volume of distribution' routed out of structural estimates ('Covariances')
- table section covariance: 'Clearance and absorption rate constant' routed out of structural estimates ('Covariances')
- table section residual_error: 'Proportional (%)' routed out of structural estimates ('Residual error')
- dropped unlinked row (NIL): 'Fraction of dose undergoing first‐order absorption' — extend the ontology if this is a real PK parameter (source ['jcph899-tbl-0002:row8:col1', 'jcph899-tbl-0002:row8:col5'])
- dropped unlinked row (NIL): 'Duration of 0‐order absorption (h)' — extend the ontology if this is a real PK parameter (source ['jcph899-tbl-0002:row9:col1', 'jcph899-tbl-0002:row9:col5'])
- dropped duplicate Q49 ('Covariate effect of dose on absorption rate constant', value '-0.275') — already have one for this compound
- routed 'Covariate effect of dose on clearance' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped PD-category row 'Baseline endogenous insulin concentration (pmol/L)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jcph899-tbl-0002:row21:col1'])
- covariate level 'Covariate of body weight on baseline endogenous insulin' → Q900:covariate_of_body_weight_on_baseline_endogenous_insulin = 0.739 (linear_fractional on Q27)
- covariate effect for Q61 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Absorption rate constant, Ka (1/h)' → 1/h (from the popPK convention: "The paper text defines the parameter as an 'absorption rate constant (Ka)' and mentions its estimation via first-order a")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=insulin_lispro
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.529 (9/17 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent clearance].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[baseline endogenous insulin concentration]` |  | 79.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[covariate effect of dose on clearance]` |  | -0.282 | only_one_extracted |
| `gpt-oss-120b` | `parameters[covariate_of_body_weight_on_baseline_endogenous_insulin]` | 0.739 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[duration of 0‐order absorption]` |  | 1.06 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q324_body_weight]` |  | 0.739 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | insulin_lispro | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | insulin_lispro | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jcph899-tbl-0002:row15:col1', 'jcph899-tbl-0002:row15:col2', 'jcph899-tbl-0002:row15:col3', 'jcph899-tbl-0002:row15:col4', 'jcph899-tbl-0002:row15:col5', 'jcph899-tbl-0002:row15:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['jcph899-tbl-0002:row6:col1', 'jcph899-tbl-0002:row6:col2', 'jcph899-tbl-0002:row6:col3', 'jcph899-tbl-0002:row6:col4', 'jcph899-tbl-0002:row6:col5', 'jcph899-tbl-0002:row6:col6'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['jcph899-tbl-0002:row12:col1', 'jcph899-tbl-0002:row12:col2', 'jcph899-tbl-0002:row12:col3', 'jcph899-tbl-0002:row12:col4', 'jcph899-tbl-0002:row12:col5', 'jcph899-tbl-0002:row12:col6'] |
| C5_dimension_Q83 | pass | [time] |  | ['jcph899-tbl-0002:row7:col4', 'jcph899-tbl-0002:row7:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 30.5 L/h | ['jcph899-tbl-0002:row15:col1', 'jcph899-tbl-0002:row15:col2', 'jcph899-tbl-0002:row15:col3', 'jcph899-tbl-0002:row15:col4', 'jcph899-tbl-0002:row15:col5', 'jcph899-tbl-0002:row15:col6'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 43 L | ['jcph899-tbl-0002:row12:col1', 'jcph899-tbl-0002:row12:col2', 'jcph899-tbl-0002:row12:col3', 'jcph899-tbl-0002:row12:col4', 'jcph899-tbl-0002:row12:col5', 'jcph899-tbl-0002:row12:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=insulin_lispro) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_insulin_lispro/InsulinLispro_Tham2017_reference/InsulinLispro_Tham2017_reference_modelica.zip" download>InsulinLispro_Tham2017_reference_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_insulin_lispro/InsulinLispro_Tham2017_reference/InsulinLispro_Tham2017_reference_fmi.zip" download>InsulinLispro_Tham2017_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_insulin_lispro/InsulinLispro_Tham2017_reference/InsulinLispro_Tham2017_reference_matlab.zip" download>InsulinLispro_Tham2017_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_insulin_lispro/InsulinLispro_Tham2017_reference/InsulinLispro_Tham2017_reference_matlab_simbio.zip" download>InsulinLispro_Tham2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_insulin_lispro/InsulinLispro_Tham2017_reference/InsulinLispro_Tham2017_reference_sbml.zip" download>InsulinLispro_Tham2017_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_insulin_lispro/InsulinLispro_Tham2017_reference/InsulinLispro_Tham2017_reference_cellml.zip" download>InsulinLispro_Tham2017_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 5.814 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 8.472e-06 | m3/s |
| input | model | `VdPerKg` | 0.0006143 | m3/kg |
| input | model | `ka` | 1.014e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Tham LS, Schneck K, Ertekin A, Reviriego J. Modeling Pharmacokinetic Profiles of Insulin Regimens to Enhance Understanding of Subcutaneous Insulin Regimens. Journal of clinical pharmacology 57(9):1126–1137 (2017). [doi:10.1002/jcph.899](https://doi.org/10.1002/jcph.899)

**This record:** Pharmacolibrary v26.09, model `InsulinLispro_Tham2017_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_insulin_lispro/InsulinLispro_Tham2017_reference>

```bibtex
@misc{pharmacolibrary_InsulinLisproTham2017reference,
  title  = {{Pharmacolibrary model InsulinLispro_Tham2017_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_insulin_lispro/InsulinLispro_Tham2017_reference},
  note   = {Parameters from doi:10.1002/jcph.899},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.0365 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_insulin_lispro/InsulinLispro_Tham2017_reference/InsulinLispro_Tham2017_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_insulin_lispro/InsulinLispro_Tham2017_reference/InsulinLispro_Tham2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `InsulinLispro_Tham2017_reference_params.json` · controls `InsulinLispro_Tham2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Binsulin_lispro%5D%20InsulinLispro_Tham2017_reference&body=Drug%3A%20insulin_lispro%0ARecord%3A%20InsulinLispro_Tham2017_reference%0APaper%3A%20Tham_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_insulin_lispro/InsulinLispro_Tham2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 21:13 UTC</sub>
