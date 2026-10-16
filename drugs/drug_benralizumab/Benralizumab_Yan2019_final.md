<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;benralizumab&quot;,&quot;href&quot;:&quot;drugs/drug_benralizumab/&quot;},{&quot;label&quot;:&quot;Yan_2019 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Benralizumab_Cheung2023_reference&quot;,&quot;label&quot;:&quot;Cheung_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_benralizumab/Benralizumab_Cheung2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benralizumab_Yan2019_final&quot;,&quot;label&quot;:&quot;Yan_2019_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_benralizumab/Benralizumab_Yan2019_final.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# benralizumab — `Benralizumab_Yan2019_final`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 84, model 3.08e+03); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (Fab and Frel), so that value has no SI equivalent. Extracted — benralizumab: CL 0.291 L/day, V1 3.13 L, Q 0.738 L/day, V2 2.52 L, t1/2ka 3.54 days, Fab 0.589 Model 9, Frel 0.49 Model 9.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has benralizumab, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Yan L et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2019)
  ·  DOI: [10.1007/s40262-019-00738-4](https://doi.org/10.1007/s40262-019-00738-4)

<div class="pk-model-meta" hidden drug="benralizumab" model-id="Benralizumab_Yan2019_final" status="needs_review" stale="false" population="adult and adolescent patients with asthma" measured-compound="benralizumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 7 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, L/day | `Q22` · CL | 0.291 | L/day | 3.3680555555555554e-09 | [l] / [d] | not captured | exact (1.0) | Tab5:row2:col3, Tab5:row2:col4 | — | not captured |
| Vc, L | `Q63` · V1 | 3.13 | L | 0.00313 | [l] | not captured | exact (1.0) | Tab5:row5:col3, Tab5:row5:col4 | — | not captured |
| Q, L/day | `Q30` · Q | 0.738 | L/day | 8.541666666666667e-09 | [l] / [d] | not captured | exact (1.0) | Tab5:row7:col3, Tab5:row7:col4 | — | not captured |
| Vp, L | `Q64` · V2 | 2.52 | L | 0.00252 | [l] | not captured | exact (1.0) | Tab5:row9:col3, Tab5:row9:col4 | — | not captured |
| ka, half-life; days | `Q95` · t1/2ka | 3.54 | days | 305856.0 | h | not captured | llm_corrected (0.6) | Tab5:row11:col3, Tab5:row11:col4 | — | not captured |
| F | `Q40` · Fab | 0.589 | Model 9 | not captured | not captured | not captured | exact (1.0) | Tab5:row12:col3, Tab5:row12:col4 | — | not captured |
| Change in F with study CP220, fraction | `Q87` · Frel | 0.490 | Model 9 | not captured | [m] · [odel9] | not captured | llm (0.6) | Tab5:row13:col3, Tab5:row13:col4 | — | not captured |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.807 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab5:row3:col3, Tab5:row3:col4 | — | not captured |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.803 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab5:row6:col3, Tab5:row6:col4 | — | not captured |
| theta_v2_body_weight_power | `Q900` · theta_v2_body_weight_power | 0.528 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab5:row10:col3, Tab5:row10:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- status held at route_to_review — not promoted
- model-stage split: 'final updated model (model 9)' is the final model of Yan_2019 (paper reports 2 stages: base model (model 5), final updated model (model 9)); same population, different model-building step
- molar mass: none found for 'benralizumab' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.571 (12/21 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[q].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_body_weight_power]` | not captured | 0.807 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_body_weight_power]` | 0.807 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q_body_weight_power]` | not captured | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_body_weight_power]` | not captured | 0.803 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | benralizumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | benralizumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab5:row2:col3', 'Tab5:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab5:row7:col3', 'Tab5:row7:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab5:row5:col3', 'Tab5:row5:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab5:row9:col3', 'Tab5:row9:col4'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['Tab5:row11:col3', 'Tab5:row11:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.291 | not captured | not captured | ['Tab5:row2:col3', 'Tab5:row2:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0121 L/h | not captured | not captured | ['Tab5:row2:col3', 'Tab5:row2:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.13 L | not captured | not captured | ['Tab5:row5:col3', 'Tab5:row5:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.52 L | not captured | not captured | ['Tab5:row9:col3', 'Tab5:row9:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=benralizumab) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | fail | 372.0 | 3081.9183634848664 | 8.2847 | days→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 84.0 | 3081.9183634848664 | 36.6895 | days→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_benralizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yan_2019` / `Yan_2019::final`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_benralizumab/models/modelica/Benralizumab_Yan2019_final.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_benralizumab/models/modelica/Benralizumab_Yan2019_final.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_benralizumab/models/modelica/Benralizumab_Yan2019_final.json`


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
</div><figure class="pk-models-diagram"><img src="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final.svg" alt="Benralizumab_Yan2019_final diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 2 mg infusion over 10 min, single dose. Doses in the paper: 2, 30, 100, 200 mg.

<dbs-fmusim paramsurl="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Benralizumab_Yan2019_final_params.json` · controls `Benralizumab_Yan2019_final_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-08 00:22 UTC</sub>
