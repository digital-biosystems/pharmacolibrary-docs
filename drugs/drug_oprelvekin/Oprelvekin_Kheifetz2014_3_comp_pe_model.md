<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;oprelvekin&quot;,&quot;href&quot;:&quot;drugs/drug_oprelvekin/&quot;},{&quot;label&quot;:&quot;Kheifetz_2014 \u00b7 3_comp_pe_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oprelvekin_Kheifetz2014_1_comp_pe_model&quot;,&quot;label&quot;:&quot;Kheifetz_2014_1_comp_pe_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_1_comp_pe_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oprelvekin_Kheifetz2014_2_comp_ce_model&quot;,&quot;label&quot;:&quot;Kheifetz_2014_2_comp_ce_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_2_comp_ce_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oprelvekin_Kheifetz2014_3_comp_pe_model&quot;,&quot;label&quot;:&quot;Kheifetz_2014_3_comp_pe_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_3_comp_pe_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# oprelvekin — `Oprelvekin_Kheifetz2014_3_comp_pe_model`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.818). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**Bioavailability F and absorption lag time Tlag lacked reported values for oprelvekin, so library placeholders were used instead of paper-specific estimates.**

The record provides estimates for clearance, volumes, and absorption rate, but omits bioavailability and lag time. Because these parameters were not extracted, generic library values were applied to the model. The resulting simulated profile relies on these assumptions rather than data from this specific study. Extracted — oprelvekin: CL 14.6 l·h⁻¹, V1 4.91 l, Q 0.465 l·h⁻¹, V2 11.5 l, V3 4e+80 l, kabs 0.152 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of b: this record has 0.025, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Kheifetz Y et al., Complex pattern of interleukin-11-induc…, Journal of pharmacokinetics… (2014)
  ·  DOI: [10.1007/s10928-014-9383-z](https://doi.org/10.1007/s10928-014-9383-z)

<div class="pk-model-meta" hidden drug="oprelvekin" model-id="Oprelvekin_Kheifetz2014_3_comp_pe_model" status="needs_review" stale="false" population="healthy males" measured-compound="oprelvekin" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, l·h⁻¹ | `Q22` · CL | 14.6 | l·h⁻¹ | 4.055555555555556e-06 | [l] / [h] | not captured | exact (1.0) | Kheifetz_2014_table_p3_1:row2:col13, Kheifetz_2014_table_p3_1:row2:col14 | — | not captured |
| V₁, l | `Q63` · V1 | 4.91 | l | 0.00491 | [l] | not captured | exact (1.0) | Kheifetz_2014_table_p3_1:row3:col13, Kheifetz_2014_table_p3_1:row3:col14 | — | not captured |
| Q, l·h⁻¹ | `Q30` · Q | 0.465 | l·h⁻¹ | 1.2916666666666667e-07 | [l] / [h] | not captured | exact (1.0) | Kheifetz_2014_table_p3_1:row4:col13, Kheifetz_2014_table_p3_1:row4:col14 | — | not captured |
| V₂, l | `Q64` · V2 | 11.5 | l | 0.0115 | [l] | not captured | exact (1.0) | Kheifetz_2014_table_p3_1:row5:col13, Kheifetz_2014_table_p3_1:row5:col14 | — | not captured |
| V₃, l | `Q77` · V3 | 4e080 | l | 4e+77 | [l] | not captured | exact (1.0) | Kheifetz_2014_table_p3_1:row7:col13 | — | not captured |
| b | `Q900` · equation variable | 0.025 | not captured | not captured | not captured | not captured | llm (0.6) | Kheifetz_2014_table_p3_1:row9:col13, Kheifetz_2014_table_p3_1:row9:col14 | — | not captured |
| ka (1/h) | `Q49` · kabs | 0.152 | 1/h | 4.222222222222222e-05 | 1/h | not captured | review_gapfill (0.7) | Myzithras_2022:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped duplicate Q30 ('Q₁, l·h⁻¹', value '0.035') — already have one for this compound
- dropped unlinked row (NIL): 'nLL' — extend the ontology if this is a real PK parameter (source ['Kheifetz_2014_table_p3_1:row12:col13', 'Kheifetz_2014_table_p3_1:row12:col14'])
- dropped unlinked row (NIL): 'AIC' — extend the ontology if this is a real PK parameter (source ['Kheifetz_2014_table_p3_1:row13:col13', 'Kheifetz_2014_table_p3_1:row13:col14'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oprelvekin
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- population split: '3 comp. pe model' subgroup of Kheifetz_2014 (paper reports 4 populations: 1 comp. pe model, 2 comp. ce model, 2 comp. pe model, 3 comp. pe model)
- molar mass: none found for 'oprelvekin' — its concentrations stay mass-only
- gap-filled Q49 (kabs) from Myzithras_2022's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- transposed table Kheifetz_2014_table_p3_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.818 (9/11 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[b]` | 0.025 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.152 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kheifetz_2014_table_p3_1:row2:col13', 'Kheifetz_2014_table_p3_1:row2:col14'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kheifetz_2014_table_p3_1:row4:col13', 'Kheifetz_2014_table_p3_1:row4:col14'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Myzithras_2022:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kheifetz_2014_table_p3_1:row3:col13', 'Kheifetz_2014_table_p3_1:row3:col14'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kheifetz_2014_table_p3_1:row5:col13', 'Kheifetz_2014_table_p3_1:row5:col14'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kheifetz_2014_table_p3_1:row7:col13'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 14.6 | not captured | not captured | ['Kheifetz_2014_table_p3_1:row2:col13', 'Kheifetz_2014_table_p3_1:row2:col14'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 14.6 L/h | not captured | not captured | ['Kheifetz_2014_table_p3_1:row2:col13', 'Kheifetz_2014_table_p3_1:row2:col14'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.91 L | not captured | not captured | ['Kheifetz_2014_table_p3_1:row3:col13', 'Kheifetz_2014_table_p3_1:row3:col14'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 11.5 L | not captured | not captured | ['Kheifetz_2014_table_p3_1:row5:col13', 'Kheifetz_2014_table_p3_1:row5:col14'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=oprelvekin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped | not captured | 10.9671457202533 | not captured | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_oprelvekin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kheifetz_2014` / `Kheifetz_2014::3_comp_pe_model`)
- model: `../../../knowledgebase/drugs/drug_oprelvekin/models/modelica/Oprelvekin_Kheifetz2014_3_comp_pe_model.mo`
- deviation: `../../../knowledgebase/drugs/drug_oprelvekin/models/modelica/Oprelvekin_Kheifetz2014_3_comp_pe_model.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_oprelvekin/models/modelica/Oprelvekin_Kheifetz2014_3_comp_pe_model.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_3_comp_pe_model/Oprelvekin_Kheifetz2014_3_comp_pe_model_modelica.zip" download>Oprelvekin_Kheifetz2014_3_comp_pe_model_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_3_comp_pe_model/Oprelvekin_Kheifetz2014_3_comp_pe_model_fmi.zip" download>Oprelvekin_Kheifetz2014_3_comp_pe_model_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_3_comp_pe_model/Oprelvekin_Kheifetz2014_3_comp_pe_model_matlab.zip" download>Oprelvekin_Kheifetz2014_3_comp_pe_model_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_3_comp_pe_model/Oprelvekin_Kheifetz2014_3_comp_pe_model_matlab_simbio.zip" download>Oprelvekin_Kheifetz2014_3_comp_pe_model_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_3_comp_pe_model/Oprelvekin_Kheifetz2014_3_comp_pe_model_sbml.zip" download>Oprelvekin_Kheifetz2014_3_comp_pe_model_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_3_comp_pe_model/Oprelvekin_Kheifetz2014_3_comp_pe_model_cellml.zip" download>Oprelvekin_Kheifetz2014_3_comp_pe_model_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_3_comp_pe_model/Oprelvekin_Kheifetz2014_3_comp_pe_model.svg" alt="Oprelvekin_Kheifetz2014_3_comp_pe_model diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 3.5 mg, single dose, first-order absorption (ka 0.152 /h, F 0.9). Dose in the paper: 3.5 mg.

<dbs-fmusim paramsurl="drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_3_comp_pe_model/Oprelvekin_Kheifetz2014_3_comp_pe_model_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_3_comp_pe_model/Oprelvekin_Kheifetz2014_3_comp_pe_model_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Oprelvekin_Kheifetz2014_3_comp_pe_model_params.json` · controls `Oprelvekin_Kheifetz2014_3_comp_pe_model_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:05 UTC</sub>
