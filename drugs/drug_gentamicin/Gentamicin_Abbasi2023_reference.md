<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;gentamicin&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/&quot;},{&quot;label&quot;:&quot;Abbasi_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gentamicin_Crcek2019_reference&quot;,&quot;label&quot;:&quot;Crcek_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_Crcek2019_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gentamicin_Abbasi2023_reference&quot;,&quot;label&quot;:&quot;Abbasi_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_Abbasi2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gentamicin — `Gentamicin_Abbasi2023_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.75). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 5, model 0.0102).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (AUC), so that value has no SI equivalent. Extracted — gentamicin: AUC ratio 0.4, AUC 3 mg*h/L, V 0.33 L/kg, CL 4.7 L/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of 5: this record has 0.4, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Abbasi MY et al., Recommendations of Gentamicin Dose Base…, Clinical pharmacology : adv… (2023)
  ·  DOI: [10.2147/CPAA.S417298](https://doi.org/10.2147/CPAA.S417298)

<div class="pk-model-meta" hidden drug="gentamicin" model-id="Gentamicin_Abbasi2023_reference" status="needs_review" stale="false" population="critically ill adult patients" measured-compound="gentamicin" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| 5 (368.2±87.9) | `Q21` · AUC ratio | 0.4 | not captured | not captured | not captured | not captured | llm (0.6) | Abbasi_2023_table_1:row1:col1, Abbasi_2023_table_1:row1:col2, Abbasi_2023_table_1:row1:col3, Abbasi_2023_table_1:row1:col4, Abbasi_2023_table_1:row1:col5 | — | not captured |
| 8 (586.0±143.0) | `Q88` · AUC | 3.0 | mg*h/L | not captured | mg*h/L | not captured | llm (0.6) | Abbasi_2023_table_1:row7:col1, Abbasi_2023_table_1:row7:col2, Abbasi_2023_table_1:row7:col3, Abbasi_2023_table_1:row7:col4, Abbasi_2023_table_1:row7:col5 | — | not captured |
| Vd | `Q61` · V | 0.33 | L/kg | 0.0231 | L | not captured | exact (1.0) | Abbasi_2023:results_prose | — | not captured |
| CL | `Q22` · CL | 4.70 | L/h | 1.3055555555555556e-06 | L/h | not captured | exact (1.0) | Abbasi_2023:results_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'MIC 0.5 mg/L' — extend the ontology if this is a real PK parameter (source ['Abbasi_2023_table_1:row0:col1', 'Abbasi_2023_table_1:row0:col2', 'Abbasi_2023_table_1:row0:col3'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['Abbasi_2023_table_1:row2:col1', 'Abbasi_2023_table_1:row2:col2', 'Abbasi_2023_table_1:row2:col3', 'Abbasi_2023_table_1:row2:col4', 'Abbasi_2023_table_1:row4:col1', 'Abbasi_2023_table_1:row4:col2', 'Abbasi_2023_table_1:row4:col3', 'Abbasi_2023_table_1:row4:col4', 'Abbasi_2023_table_1:row6:col1', 'Abbasi_2023_table_1:row6:col2', 'Abbasi_2023_table_1:row6:col3', 'Abbasi_2023_table_1:row6:col4', 'Abbasi_2023_table_1:row8:col1', 'Abbasi_2023_table_1:row8:col2', 'Abbasi_2023_table_1:row8:col3', 'Abbasi_2023_table_1:row8:col4', 'Abbasi_2023_table_1:row10:col1', 'Abbasi_2023_table_1:row10:col2', 'Abbasi_2023_table_1:row10:col3', 'Abbasi_2023_table_1:row10:col4', 'Abbasi_2023_table_1:row12:col1', 'Abbasi_2023_table_1:row12:col2', 'Abbasi_2023_table_1:row12:col3', 'Abbasi_2023_table_1:row12:col4'])
- dropped duplicate Q21 ('6 (440.7±107.2)', value '0.9') — already have one for this compound
- dropped duplicate Q21 ('7 (513.9±123.6)', value '1.8') — already have one for this compound
- dropped unlinked row (NIL): '9 (660.8±158.6)' — extend the ontology if this is a real PK parameter (source ['Abbasi_2023_table_1:row9:col1', 'Abbasi_2023_table_1:row9:col2', 'Abbasi_2023_table_1:row9:col3', 'Abbasi_2023_table_1:row9:col4', 'Abbasi_2023_table_1:row9:col5'])
- dropped unlinked row (NIL): '10 (732.9±176.9)' — extend the ontology if this is a real PK parameter (source ['Abbasi_2023_table_1:row11:col1', 'Abbasi_2023_table_1:row11:col2', 'Abbasi_2023_table_1:row11:col3', 'Abbasi_2023_table_1:row11:col4', 'Abbasi_2023_table_1:row11:col5'])
- salvaged Q61 ('Vd'=0.33) from results prose — parameter table was unreadable
- salvaged Q22 ('CL'=4.70) from results prose — parameter table was unreadable
- implicit units: '8 (586.0±143.0)' → mg*h/L (from the paper text: 'The paper states “AUC24h &gt;700 mg⋅h/L” and defines AUC24h as the area under the concentration-time curve.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gentamicin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.75 (6/8 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[5]` | 0.4 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[8]` | 3.0 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Abbasi_2023_table_1:row7:col1', 'Abbasi_2023_table_1:row7:col2', 'Abbasi_2023_table_1:row7:col3', 'Abbasi_2023_table_1:row7:col4', 'Abbasi_2023_table_1:row7:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.7 | not captured | not captured | ['Abbasi_2023:results_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.7 L/h | not captured | not captured | ['Abbasi_2023:results_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 23.1 L | not captured | not captured | ['Abbasi_2023:results_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=gentamicin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 5 | 0.010215426508061492 | not captured | unresolved concentration unit (exp 'mg/kg/day', sim 'kg/m3') |
| T1_cmax | reference | skipped | 8 | 0.010215426508061492 | not captured | unresolved concentration unit (exp 'mg/kg/day', sim 'kg/m3') |
| T1_cmax | reference | skipped | 10 | 0.010215426508061492 | not captured | unresolved concentration unit (exp 'mg/kg/day', sim 'kg/m3') |
| T1_cmax | reference | skipped | ≥8–10 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 8 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 10 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 76.2 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 66.9 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 8 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | &gt;10 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | &gt;8 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | &gt;10 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | fail | 0.016 | 0.010215426508061492 | 0.6385 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.03 | 0.010215426508061492 | 0.3405 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | &gt;8 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | ~8–10 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_gentamicin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Abbasi_2023` / `Abbasi_2023::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_gentamicin/models/modelica/Gentamicin_Abbasi2023_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_gentamicin/models/modelica/Gentamicin_Abbasi2023_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_gentamicin/models/modelica/Gentamicin_Abbasi2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_gentamicin/Gentamicin_Abbasi2023_reference/Gentamicin_Abbasi2023_reference_modelica.zip" download>Gentamicin_Abbasi2023_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_gentamicin/Gentamicin_Abbasi2023_reference/Gentamicin_Abbasi2023_reference_fmi.zip" download>Gentamicin_Abbasi2023_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_gentamicin/Gentamicin_Abbasi2023_reference/Gentamicin_Abbasi2023_reference_matlab.zip" download>Gentamicin_Abbasi2023_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_gentamicin/Gentamicin_Abbasi2023_reference/Gentamicin_Abbasi2023_reference_matlab_simbio.zip" download>Gentamicin_Abbasi2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_gentamicin/Gentamicin_Abbasi2023_reference/Gentamicin_Abbasi2023_reference_sbml.zip" download>Gentamicin_Abbasi2023_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_gentamicin/Gentamicin_Abbasi2023_reference/Gentamicin_Abbasi2023_reference_cellml.zip" download>Gentamicin_Abbasi2023_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_gentamicin/Gentamicin_Abbasi2023_reference/Gentamicin_Abbasi2023_reference.svg" alt="Gentamicin_Abbasi2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 240 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 240 mg parenteral (J01GB03) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_gentamicin/Gentamicin_Abbasi2023_reference/Gentamicin_Abbasi2023_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_gentamicin/Gentamicin_Abbasi2023_reference/Gentamicin_Abbasi2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Gentamicin_Abbasi2023_reference_params.json` · controls `Gentamicin_Abbasi2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 22:09 UTC</sub>
