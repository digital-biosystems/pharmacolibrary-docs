<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;benralizumab&quot;,&quot;href&quot;:&quot;drugs/drug_benralizumab/&quot;},{&quot;label&quot;:&quot;Yan_2019 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Benralizumab_Cheung2023_reference&quot;,&quot;label&quot;:&quot;Cheung_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_benralizumab/Benralizumab_Cheung2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benralizumab_Yan2019_final&quot;,&quot;label&quot;:&quot;Yan_2019_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_benralizumab/Benralizumab_Yan2019_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# benralizumab — `Benralizumab_Yan2019_final`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 84, model 3.08e+03); the covariate scenarios were not simulated.

<div class="pk-model-meta" hidden drug="benralizumab" model-id="Benralizumab_Yan2019_final" status="needs_review" stale="false" population="adult and adolescent patients with asthma" measured-compound="benralizumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Yan L, Wang B, Chia YL, Roskos LK. Population Pharmacokinetic Modeling of Benralizumab in Adult and Adolescent Patients with Asthma. Clinical pharmacokinetics 58(7):943–958 (2019).
  ·  DOI: [10.1007/s40262-019-00738-4](https://doi.org/10.1007/s40262-019-00738-4)

## Population and dosing

**Population:** adult and adolescent patients with asthma · condition asthma · age group mixed · n = 2317.

**Dosing:** 2, 30, 100, 200 mg, sc, multiple.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted, plus 3 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final.svg" alt="Benralizumab_Yan2019_final diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL, L/day | CL | 0.291 | L/day |
| Vc, L | V1 | 3.13 | L |
| Q, L/day | Q | 0.738 | L/day |
| Vp, L | V2 | 2.52 | L |
| ka, half-life; days | t1/2ka | 3.54 | days |
| F | Fab | 0.589 | Model 9 |
| Change in F with study CP220, fraction | Frel | 0.490 | Model 9 |
| theta_q319_body_weight_power | theta_q319_body_weight_power | 0.807 |  |
| theta_q319_body_weight_power | theta_q319_body_weight_power | 0.803 |  |
| theta_v2_body_weight_power | theta_v2_body_weight_power | 0.528 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.722). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 84, model 3.08e+03); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (Fab and Frel), so that value has no SI equivalent. Extracted — benralizumab: CL 0.291 L/day, V1 3.13 L, Q 0.738 L/day, V2 2.52 L, t1/2ka 3.54 days, Fab 0.589 Model 9, Frel 0.49 Model 9.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of adas on cl, fraction: this record has none, the second reading 2.24; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL, L/day | `Q22` · CL | 0.291 | L/day | 3.368e-09 | m3/s | l/d | exact (1) | Tab5:row2:col3, Tab5:row2:col4 |
| Vc, L | `Q63` · V1 | 3.13 | L | 0.00313 | m3 | l | exact (1) | Tab5:row5:col3, Tab5:row5:col4 |
| Q, L/day | `Q30` · Q | 0.738 | L/day | 8.542e-09 | m3/s | l/d | exact (1) | Tab5:row7:col3, Tab5:row7:col4 |
| Vp, L | `Q64` · V2 | 2.52 | L | 0.00252 | m3 | l | exact (1) | Tab5:row9:col3, Tab5:row9:col4 |
| ka, half-life; days | `Q95` · t1/2ka | 3.54 | days | 3.059e+05 | s | h | llm_corrected (0.6) | Tab5:row11:col3, Tab5:row11:col4 |
| F | `Q40` · Fab | 0.589 | Model 9 |  |  |  | exact (1) | Tab5:row12:col3, Tab5:row12:col4 |
| Change in F with study CP220, fraction | `Q87` · Frel | 0.490 | Model 9 |  |  | m·odel9 | llm (0.6) | Tab5:row13:col3, Tab5:row13:col4 |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.807 |  |  |  |  |  | Tab5:row3:col3, Tab5:row3:col4 |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.803 |  |  |  |  |  | Tab5:row6:col3, Tab5:row6:col4 |
| theta_v2_body_weight_power | `Q900` · theta_v2_body_weight_power | 0.528 |  |  |  |  |  | Tab5:row10:col3, Tab5:row10:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ηCL, %CV' routed out of structural estimates ('IIV')
- table section iiv: 'ηVc, %CV' routed out of structural estimates ('IIV')
- table section iiv: 'ηQ, %CV' routed out of structural estimates ('IIV')
- table section iiv: 'ηVp, %CV' routed out of structural estimates ('IIV')
- table section iiv: 'ηka (half-life), %CV' routed out of structural estimates ('IIV')
- table section iiv: 'ηF, %CV' routed out of structural estimates ('IIV')
- table section iiv: 'ηF (study CP220), %CV' routed out of structural estimates ('IIV')
- table section residual_error: 'Proportional error, %CV' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error (study CP220), %CV' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error (studies SIROCCO, CALIMA, ZONDAa, BISE), %CV' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'ADAs on CL, fraction' — extend the ontology if this is a real PK parameter (source ['Tab5:row4:col3', 'Tab5:row4:col4'])
- dropped unlinked row (NIL): 'Body weight on Q, power' — extend the ontology if this is a real PK parameter (source ['Tab5:row8:col3'])
- unit_dimension_unknown: 'Model 9' (t1/2ka )
- unit_dimension_unknown: 'Model 9' (Frel)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'ka, half-life; days' → days (from the paper text: "Text states 'the absorption half-life of benralizumab was 3.54 days' and 'an estimated absorption half-life of 3.5 days ")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=benralizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- model-stage split: 'final updated model (model 9)' is the final model of Yan_2019 (paper reports 2 stages: base model (model 5), final updated model (model 9)); same population, different model-building step
- molar mass: none found for 'benralizumab' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.722 (13/18 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[adas on cl, fraction]` |  | 2.24 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_body_weight_power]` |  | 0.807 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_body_weight_power]` | 0.528 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp].covariate_forms` | ['power'] | [] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab5:row2:col3', 'Tab5:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab5:row7:col3', 'Tab5:row7:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab5:row5:col3', 'Tab5:row5:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab5:row9:col3', 'Tab5:row9:col4'] |
| C5_dimension_Q95 | pass | [time] |  | ['Tab5:row11:col3', 'Tab5:row11:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.291 | ['Tab5:row2:col3', 'Tab5:row2:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0121 L/h | ['Tab5:row2:col3', 'Tab5:row2:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.13 L | ['Tab5:row5:col3', 'Tab5:row5:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.52 L | ['Tab5:row9:col3', 'Tab5:row9:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=benralizumab) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | fail | 372 | 3082 | 8.285 | days→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 84 | 3082 | 36.69 | days→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final_modelica.zip" download>Benralizumab_Yan2019_final_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final_fmi.zip" download>Benralizumab_Yan2019_final_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final_matlab.zip" download>Benralizumab_Yan2019_final_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final_matlab_simbio.zip" download>Benralizumab_Yan2019_final_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final_sbml.zip" download>Benralizumab_Yan2019_final_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final_cellml.zip" download>Benralizumab_Yan2019_final_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
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
| input | dosing | `adminMass` | 2e-06 | kg |
| input | model | `Cl` | 3.368e-09 | m3/s |
| input | model | `VdPerKg` | 4.471e-05 | m3/kg |
| input | model | `k12` | 2.729e-06 | 1/s |
| input | model | `k21` | 3.39e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Yan L, Wang B, Chia YL, Roskos LK. Population Pharmacokinetic Modeling of Benralizumab in Adult and Adolescent Patients with Asthma. Clinical pharmacokinetics 58(7):943–958 (2019). [doi:10.1007/s40262-019-00738-4](https://doi.org/10.1007/s40262-019-00738-4)

**This record:** Pharmacolibrary v26.09, model `Benralizumab_Yan2019_final`. <https://pharmacolibrary.github.io/#/drugs/drug_benralizumab/Benralizumab_Yan2019_final>

```bibtex
@misc{pharmacolibrary_BenralizumabYan2019final,
  title  = {{Pharmacolibrary model Benralizumab_Yan2019_final}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_benralizumab/Benralizumab_Yan2019_final},
  note   = {Parameters from doi:10.1007/s40262-019-00738-4},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 2 mg infusion over 10 min, single dose. Doses in the paper: 2, 30, 100, 200 mg.

<dbs-fmusim paramsurl="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Benralizumab_Yan2019_final_params.json` · controls `Benralizumab_Yan2019_final_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbenralizumab%5D%20Benralizumab_Yan2019_final&body=Drug%3A%20benralizumab%0ARecord%3A%20Benralizumab_Yan2019_final%0APaper%3A%20Yan_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_benralizumab/Benralizumab_Yan2019_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-08 00:22 UTC</sub>
