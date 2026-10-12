<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H03B&quot;,&quot;href&quot;:&quot;atc/H03B.md&quot;},{&quot;label&quot;:&quot;propylthiouracil&quot;,&quot;href&quot;:&quot;drugs/drug_propylthiouracil/&quot;},{&quot;label&quot;:&quot;G\u0142\u00f3wka_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propylthiouracil_Gwka2018_reference&quot;,&quot;label&quot;:&quot;G\u0142\u00f3wka_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propylthiouracil/Propylthiouracil_Gwka2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# propylthiouracil — `Propylthiouracil_Gwka2018_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.727). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The first-order absorption rate constant for propylthiouracil was left at library placeholders because it was not reported in the source data.**

The record for healthy subjects lists terminal half-life, mean residence time, and apparent clearance, but omits any estimate for the absorption rate constant. Consequently, the model relied on generic library defaults for this parameter rather than values supported by the paper. This substitution renders the absorption phase of the simulated profile unsupported by the source data. Extracted — propylthiouracil: t1/2z 1.22 h, MRT 2.32 h, tlag 0.16 h, V/F 23.5 l, CL/F 225 ml/min, AUC%ext 96.8.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has propylthiouracil, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Główka FK et al., Bioavailability of propylthiouracil fro…, Die Pharmazie (2018)
  ·  DOI: [10.1691/ph.2018.8552](https://doi.org/10.1691/ph.2018.8552)

<div class="pk-model-meta" hidden drug="propylthiouracil" model-id="Propylthiouracil_Gwka2018_reference" status="needs_review" stale="false" population="healthy subjects" measured-compound="propylthiouracil" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t_{1/2} [h] | `Q57` · t1/2z | 1.22 | h | 4392.0 | [h] | not captured | llm (0.6) | Główka_2018_table_4:row0:col1, Główka_2018_table_4:row0:col2 | — | not captured |
| MRT_{0∞} [h] | `Q53` · MRT | 2.32 | h | 8352.0 | [h] | not captured | llm (0.6) | Główka_2018_table_4:row1:col1, Główka_2018_table_4:row1:col2 | — | not captured |
| T_{lag} [h] | `Q83` · tlag | 0.16 | h | 576.0 | [h] | not captured | llm (0.6) | Główka_2018_table_4:row2:col1, Główka_2018_table_4:row2:col2 | — | not captured |
| V_C/f [l] | `Q76` · V/F | 23.5 | l | 0.0235 | [l] | not captured | llm (0.6) | Główka_2018_table_4:row3:col1, Główka_2018_table_4:row3:col2 | — | not captured |
| Clearance/f [ml/min] | `Q27` · CL/F | 225 | ml/min | 3.75e-06 | [ml] / [min] | not captured | llm (0.6) | Główka_2018_table_4:row4:col1, Główka_2018_table_4:row4:col2 | — | not captured |
| EBA [%] | `Q84` · AUC%ext | 96.8 | not captured | not captured | not captured | not captured | llm (0.6) | Główka_2018_table_4:row5:col1, Główka_2018_table_4:row5:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=propylthiouracil
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V_C/f [l]' is the general volume)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.727 (8/11 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[eba [%]].parameter_id` | Q84 | Q40 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | propylthiouracil | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | propylthiouracil | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Główka_2018_table_4:row4:col1', 'Główka_2018_table_4:row4:col2'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Główka_2018_table_4:row1:col1', 'Główka_2018_table_4:row1:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Główka_2018_table_4:row0:col1', 'Główka_2018_table_4:row0:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Główka_2018_table_4:row3:col1', 'Główka_2018_table_4:row3:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Główka_2018_table_4:row2:col1', 'Główka_2018_table_4:row2:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 13.5 L/h | not captured | not captured | ['Główka_2018_table_4:row4:col1', 'Główka_2018_table_4:row4:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 23.5 L | not captured | not captured | ['Główka_2018_table_4:row3:col1', 'Główka_2018_table_4:row3:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=propylthiouracil) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 1.62 | 0.0007288167790806432 | not captured | unresolved concentration unit (exp 'mg/l]', sim 'kg/m3') |
| T1_cmax | reference | skipped | 1.77 | 0.0007288167790806432 | not captured | unresolved concentration unit (exp 'mg/l]', sim 'kg/m3') |
| T1_t_half_terminal | reference | skipped | 1.22 | 1.4492716607802578 | not captured | unresolved time unit 'h]' |
| T1_t_half_terminal | reference | skipped | 1.27 | 1.4492716607802578 | not captured | unresolved time unit 'h]' |
| T1_tmax | reference | skipped | 0.69 | 2.1273365898770615 | not captured | unresolved time unit 'h]' |
| T1_tmax | reference | skipped | 0.54 | 2.1273365898770615 | not captured | unresolved time unit 'h]' |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_propylthiouracil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Główka_2018` / `Główka_2018::reference`)
- model: `../../../knowledgebase/drugs/drug_propylthiouracil/models/modelica/Propylthiouracil_Gwka2018_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_propylthiouracil/models/modelica/Propylthiouracil_Gwka2018_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_propylthiouracil/models/modelica/Propylthiouracil_Gwka2018_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_propylthiouracil/Propylthiouracil_Gwka2018_reference/Propylthiouracil_Gwka2018_reference_modelica.zip" download>Propylthiouracil_Gwka2018_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_propylthiouracil/Propylthiouracil_Gwka2018_reference/Propylthiouracil_Gwka2018_reference_fmi.zip" download>Propylthiouracil_Gwka2018_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_propylthiouracil/Propylthiouracil_Gwka2018_reference/Propylthiouracil_Gwka2018_reference_matlab.zip" download>Propylthiouracil_Gwka2018_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_propylthiouracil/Propylthiouracil_Gwka2018_reference/Propylthiouracil_Gwka2018_reference_matlab_simbio.zip" download>Propylthiouracil_Gwka2018_reference_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_propylthiouracil/Propylthiouracil_Gwka2018_reference/Propylthiouracil_Gwka2018_reference_sbml.zip" download>Propylthiouracil_Gwka2018_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_propylthiouracil/Propylthiouracil_Gwka2018_reference/Propylthiouracil_Gwka2018_reference_cellml.zip" download>Propylthiouracil_Gwka2018_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_propylthiouracil/Propylthiouracil_Gwka2018_reference/Propylthiouracil_Gwka2018_reference.svg" alt="Propylthiouracil_Gwka2018_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 50 mg, single dose, first-order absorption (ka 0.5 /h, lag 9.6 min, F 1). Dose in the paper: 50 mg.

<dbs-fmusim paramsurl="drugs/drug_propylthiouracil/Propylthiouracil_Gwka2018_reference/Propylthiouracil_Gwka2018_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_propylthiouracil/Propylthiouracil_Gwka2018_reference/Propylthiouracil_Gwka2018_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Propylthiouracil_Gwka2018_reference_params.json` · controls `Propylthiouracil_Gwka2018_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:47 UTC</sub>
