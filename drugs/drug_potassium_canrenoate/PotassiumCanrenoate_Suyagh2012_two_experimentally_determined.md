<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;potassium canrenoate&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_canrenoate/&quot;},{&quot;label&quot;:&quot;Suyagh_2012 \u00b7 two_experimentally_determined_s_one_for_each_exponent_estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PotassiumCanrenoate_Suyagh2012_median&quot;,&quot;label&quot;:&quot;Suyagh_2012_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_median.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PotassiumCanrenoate_Suyagh2012_two_experimentally_determined&quot;,&quot;label&quot;:&quot;Suyagh_2012_two_experimentally_determined_s_one_for_each_exponent_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_two_experimentally_determined.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;PotassiumCanrenoate_Suyagh2013_reference&quot;,&quot;label&quot;:&quot;Suyagh_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2013_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# potassium canrenoate — `PotassiumCanrenoate_Suyagh2012_two_experimentally_determined`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333), gpt-oss:120b (not confirmed, agreement 0.562). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (model/paper ratio 2.53).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. None of the extracted parameters is potassium canrenoate's own; they describe canrenone. Extracted — canrenone: CL/F 12.7 L/h, V/F 520 L, kfm 4.48 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl/f (l/hr/70 kg) θcl/f].parameter_id`: this record has Q375, the second reading Q27; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:30:33.230067+00:00) predates the upstream re-run (2026-10-06 18:31:18.058956+00:00). Current validate status: `extracted`.

> **Dose compound ≠ measured compound:** dosed `potassium canrenoate`, measured `canrenone`.

## Citation
Suyagh M et al., Population pharmacokinetic model of can…, British journal of clinical… (2012)
  ·  DOI: [10.1111/j.1365-2125.2012.04257.x](https://doi.org/10.1111/j.1365-2125.2012.04257.x)

<div class="pk-model-meta" hidden drug="potassium canrenoate" model-id="PotassiumCanrenoate_Suyagh2012_two_experimentally_determined" status="extracted" stale="true" population="paediatric patients" measured-compound="canrenone" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 3 extracted, plus 2 covariate effects.

**Parameterization:** CLm,norm/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/hr/70 kg) θCL/F | `Q375` · CLm,norm/F | 12.73 | L/h | 3.536111111111111e-06 | L/h | 38.76 | exact (1.0) | Suyagh_2012_table_2:row1:col3, Suyagh_2012_table_2:row1:col4, Suyagh_2012_table_2:row1:col6 | — | 39.4 (43.83% RSE) |
| V/F (L/70 kg) θV/F | `Q76` · V/F | 519.8 | L | 0.5197999999999999 | L | 47.39 | exact (1.0) | Suyagh_2012_table_2:row2:col3, Suyagh_2012_table_2:row2:col4, Suyagh_2012_table_2:row2:col6 | — | not captured |
| kf (hr⁻¹) θkf | `Q305` · kfm | 4.48 | 1/h | 0.0012444444444444445 | 1/h | 60.01 | exact (1.0) | Suyagh_2012_table_2:row3:col3, Suyagh_2012_table_2:row3:col4, Suyagh_2012_table_2:row3:col6 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.798 | not captured | not captured | not captured | 16.44 | not captured (not captured) | Suyagh_2012_table_2:row6:col3, Suyagh_2012_table_2:row6:col4, Suyagh_2012_table_2:row6:col6 | — | not captured |
| theta_q76_weight_power | `Q900` · theta_q76_weight_power | 1.07 | not captured | not captured | not captured | 26.05 | not captured (not captured) | Suyagh_2012_table_2:row7:col3, Suyagh_2012_table_2:row7:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped unlinked row (NIL): 'MOFV' — extend the ontology if this is a real PK parameter (source ['Suyagh_2012_table_2:row0:col3'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q76 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CL/F (L/hr/70 kg) θCL/F' → L/h (from the paper text: "Table 2 caption and row label state 'CL/F (L/hr/70 kg)' and the text states 'Typical population estimates of CL/F ... we")
- implicit units: 'V/F (L/70 kg) θV/F' → L (from the paper text: "Table 2 caption and row label state 'V/F (L/70 kg)' and the text states 'Typical population estimates of ... V/F ... wer")
- implicit units: 'kf (hr⁻¹) θkf' → 1/h (from the paper text: "Table 2 row label states 'kf (hr -1)'.")
- metabolite canrenone: Q27→Q375 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided), normalised to a standard size
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=canrenone
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V/F (L/70 kg) θV/F' is the general volume)
- population split: 'two experimentally determined θs (one for each exponent) estimate' subgroup of Suyagh_2012 (paper reports 2 populations: median, two experimentally determined θs (one for each exponent) estimate)
- row roles (LLM): model_class=compartmental; 14/14 row label(s) assigned, 38 linked by role

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 4
- dropped sensitivity-analysis table(s) 3 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (6/18 fields) | 12 |
| `gpt-oss:120b` | not confirmed | 0.562 (9/16 fields) | 7 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f (l/hr/70 kg) θcl/f].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f (l/hr/70 kg) θcl/f].parameter_id` | Q375 | Q27 | mismatch |
| `gpt-oss-120b` | `parameters[cl/f (l/hr/70 kg) θcl/f].value` | 12.73 | 14.13 | mismatch |
| `gpt-oss-120b` | `parameters[kf (hr-) θkf].parameter_id` | Q305 | Q301 | mismatch |
| `gpt-oss-120b` | `parameters[kf (hr-) θkf].value` | 4.48 | 5.79 | mismatch |
| `gpt-oss-120b` | `parameters[mofv]` | not captured | -97.85 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | not captured | 12.09 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_weight_power]` | not captured | 0.833 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight_power]` | 0.798 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_weight_power]` | 1.07 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_f_weight_power]` | not captured | 1.07 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f (l/70 kg) θv/f]` | 519.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f (l/hr/70 kg) θcl/f].value` | 12.73 | 14.13 | mismatch |
| `gpt-oss:120b` | `parameters[kf (hr-) θkf].value` | 4.48 | 5.79 | mismatch |
| `gpt-oss:120b` | `parameters[mofv]` | not captured | -97.85 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2]` | not captured | 12.09 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_weight_power]` | not captured | 0.833 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q319_weight_power]` | 0.798 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v/f (l/70 kg) θv/f].value` | 519.8 | 242.3 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Suyagh_2012_table_2:row3:col3', 'Suyagh_2012_table_2:row3:col4', 'Suyagh_2012_table_2:row3:col6'] |
| C5_dimension_Q375 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Suyagh_2012_table_2:row1:col3', 'Suyagh_2012_table_2:row1:col4', 'Suyagh_2012_table_2:row1:col6'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Suyagh_2012_table_2:row2:col3', 'Suyagh_2012_table_2:row2:col4', 'Suyagh_2012_table_2:row2:col6'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q76 | pass | volume within physiological range | 520 L | not captured | not captured | ['Suyagh_2012_table_2:row2:col3', 'Suyagh_2012_table_2:row2:col4', 'Suyagh_2012_table_2:row2:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_potassium_canrenoate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Suyagh_2012` / `Suyagh_2012::two_experimentally_determined_s_one_for_each_exponent_estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_two_experimentally_determined/PotassiumCanrenoate_Suyagh2012_two_experimentally_determined_modelica.zip" download>PotassiumCanrenoate_Suyagh2012_two_experimentally_determined_modelica.zip</a> <span class="pk-size">(5.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_two_experimentally_determined/PotassiumCanrenoate_Suyagh2012_two_experimentally_determined_fmi.zip" download>PotassiumCanrenoate_Suyagh2012_two_experimentally_determined_fmi.zip</a> <span class="pk-size">(4.5 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_two_experimentally_determined/PotassiumCanrenoate_Suyagh2012_two_experimentally_determined.svg" alt="PotassiumCanrenoate_Suyagh2012_two_experimentally_determined diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 4.48 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_two_experimentally_determined/PotassiumCanrenoate_Suyagh2012_two_experimentally_determined_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_two_experimentally_determined/PotassiumCanrenoate_Suyagh2012_two_experimentally_determined_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `PotassiumCanrenoate_Suyagh2012_two_experimentally_determined_params.json` · controls `PotassiumCanrenoate_Suyagh2012_two_experimentally_determined_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 18:31 UTC</sub>
