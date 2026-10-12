<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;fremanezumab&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/&quot;},{&quot;label&quot;:&quot;Jones_2021 \u00b7 previously_developed_adult_model_applied_to_pediatric_data&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fremanezumab_FiedlerKelly2019_reference&quot;,&quot;label&quot;:&quot;Fiedler-Kelly_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fremanezumab_Jones2021_previously_developed_adult_model_appl&quot;,&quot;label&quot;:&quot;Jones_2021_previously_developed_adult_model_applied_to_pediatric_data&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Fremanezumab_Jones2021_pediatric_model_to_support_phase_3_de&quot;,&quot;label&quot;:&quot;Jones_2021_pediatric_model_to_support_phase_3_development_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/Fremanezumab_Jones2021_pediatric_model_to_support_phase_3_de.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fremanezumab — `Fremanezumab_Jones2021_previously_developed_adult_model_appl`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">accepted (caveats)</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.923), gpt-oss:120b (partly confirmed, agreement 0.923). The first reading is what the record holds.">cross-check: partial 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of f1: bioavailability: this record has none, the second reading 0.658. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Jones A et al., Scaling Approaches for Pediatric Dose S…, Pharmaceutics (2021)
  ·  DOI: [10.3390/pharmaceutics13060785](https://doi.org/10.3390/pharmaceutics13060785)

<div class="pk-model-meta" hidden drug="fremanezumab" model-id="Fremanezumab_Jones2021_previously_developed_adult_model_appl" status="accepted_with_caveats" stale="false" population="pediatric patients with migraine" measured-compound="fremanezumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL: central clearance (L/day) | `Q22` · CL | 0.0902 | L/day | 1.0439814814814816e-09 | [l] / [d] | not captured | llm_confirmed (0.6) | pharmaceutics-13-00785-t001:row1:col1 | — | not captured |
| Vc: central volume of distribution (L) | `Q63` · V1 | 1.88 | L | 0.00188 | [l] | not captured | boundary_compartment (0.9) | pharmaceutics-13-00785-t001:row3:col1 | — | not captured |
| ka: absorption rate constant (1/day) | `Q49` · kabs | 0.180 | 1/day | 2.083333333333333e-06 | 1/h | not captured | llm_confirmed (0.6) | pharmaceutics-13-00785-t001:row5:col1 | — | not captured |
| Q: intercompartmental clearance (L/day) | `Q30` · Q | 0.262 | L/day | 3.0324074074074076e-09 | [l] / [d] | not captured | llm_confirmed (0.6) | pharmaceutics-13-00785-t001:row6:col1 | — | not captured |
| Vp: peripheral volume of distribution (L) | `Q64` · V2 | 1.72 | L | 0.00172 | [l] | not captured | boundary_compartment (0.9) | pharmaceutics-13-00785-t001:row7:col1 | — | not captured |
| ALAG1: lag time (day) | `Q83` · tlag | 0.0803 | day | 6937.92 | [d] | not captured | llm_confirmed (0.6) | pharmaceutics-13-00785-t001:row9:col1 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 1.05 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-13-00785-t001:row2:col1 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 1.53 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-13-00785-t001:row4:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Residual variability proportional component' routed out of structural estimates ('Interindividual variability in ka')
- table section iiv: 'Residual variability additive component' routed out of structural estimates ('Interindividual variability in ka')
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'ka: absorption rate constant (1/day)' → 1/day (from the paper text: "Text excerpt: 'a fixed lag time of 0.0803 days was applied' and the parameter list in the prompt specifies '(1/day)'. Wh")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fremanezumab
- population split: 'previously developed adult model applied to pediatric data' subgroup of Jones_2021 (paper reports 2 populations: pediatric model to support phase 3 development 1, previously developed adult model applied to pediatric data)
- molar mass: none found for 'fremanezumab' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 1
- skipped illustrative/example figure caption(s) pharmaceutics-13-00785-f001 — per-individual fit, not model parameters

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.923 (12/13 fields) | 1 |
| `gpt-oss:120b` | partly confirmed | 0.923 (12/13 fields) | 1 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f1: bioavailability]` | not captured | 0.658 | only_one_extracted |
| `gpt-oss:120b` | `parameters[f1: bioavailability]` | not captured | 0.658 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00785-t001:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00785-t001:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00785-t001:row5:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-13-00785-t001:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-13-00785-t001:row7:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['pharmaceutics-13-00785-t001:row9:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0902 | not captured | not captured | ['pharmaceutics-13-00785-t001:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00376 L/h | not captured | not captured | ['pharmaceutics-13-00785-t001:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.88 L | not captured | not captured | ['pharmaceutics-13-00785-t001:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.72 L | not captured | not captured | ['pharmaceutics-13-00785-t001:row7:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=fremanezumab) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fremanezumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jones_2021` / `Jones_2021::previously_developed_adult_model_applied_to_pediatric_data`)
- model: `../../../knowledgebase/drugs/drug_fremanezumab/models/modelica/Fremanezumab_Jones2021_previously_developed_adult_model_appl.mo`
- deviation: `../../../knowledgebase/drugs/drug_fremanezumab/models/modelica/Fremanezumab_Jones2021_previously_developed_adult_model_appl.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_fremanezumab/models/modelica/Fremanezumab_Jones2021_previously_developed_adult_model_appl.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl/Fremanezumab_Jones2021_previously_developed_adult_model_appl_modelica.zip" download>Fremanezumab_Jones2021_previously_developed_adult_model_appl_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl/Fremanezumab_Jones2021_previously_developed_adult_model_appl_fmi.zip" download>Fremanezumab_Jones2021_previously_developed_adult_model_appl_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl/Fremanezumab_Jones2021_previously_developed_adult_model_appl_matlab.zip" download>Fremanezumab_Jones2021_previously_developed_adult_model_appl_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl/Fremanezumab_Jones2021_previously_developed_adult_model_appl_matlab_simbio.zip" download>Fremanezumab_Jones2021_previously_developed_adult_model_appl_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl/Fremanezumab_Jones2021_previously_developed_adult_model_appl_sbml.zip" download>Fremanezumab_Jones2021_previously_developed_adult_model_appl_sbml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl/Fremanezumab_Jones2021_previously_developed_adult_model_appl_cellml.zip" download>Fremanezumab_Jones2021_previously_developed_adult_model_appl_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl/Fremanezumab_Jones2021_previously_developed_adult_model_appl.svg" alt="Fremanezumab_Jones2021_previously_developed_adult_model_appl diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 120 mg, single dose, first-order absorption (ka 0.0075 /h, lag 116 min, F 0.658). Dose in the paper: 120 mg.

<dbs-fmusim paramsurl="drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl/Fremanezumab_Jones2021_previously_developed_adult_model_appl_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl/Fremanezumab_Jones2021_previously_developed_adult_model_appl_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Fremanezumab_Jones2021_previously_developed_adult_model_appl_params.json` · controls `Fremanezumab_Jones2021_previously_developed_adult_model_appl_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:35 UTC</sub>
