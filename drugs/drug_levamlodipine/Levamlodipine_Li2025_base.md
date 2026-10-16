<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;levamlodipine&quot;,&quot;href&quot;:&quot;drugs/drug_levamlodipine/&quot;},{&quot;label&quot;:&quot;Li_2025 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levamlodipine_Li2025_base&quot;,&quot;label&quot;:&quot;Li_2025_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levamlodipine/Levamlodipine_Li2025_base.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Levamlodipine_Li2025_final&quot;,&quot;label&quot;:&quot;Li_2025_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levamlodipine/Levamlodipine_Li2025_final.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# levamlodipine — `Levamlodipine_Li2025_base`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.714), gpt-oss:120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Bioavailability and lag time were left at library defaults rather than extracted from the levamlodipine besylate model.**

The record lists absorption, volume, and clearance parameters but omits explicit values for bioavailability and lag time. Consequently, the model relies on placeholder values for these parameters instead of estimates from the paper. A second reader also disagreed on whether the primary analyte was levamlodipine besylate or levamlodipine. Extracted — levamlodipine: kabs 0.79 1/h, V 3.57e+03 L, CL 59.6 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has levamlodipine besylate, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-29 18:27:06.051499+00:00) predates the upstream re-run (2026-10-07 03:26:10.784690+00:00). Current validate status: `extracted`.

## Citation
Li G et al., Model-Informed Precision Dosing of Leva…, Drug design, development an… (2025)
  ·  DOI: [10.2147/DDDT.S501762](https://doi.org/10.2147/DDDT.S501762)

<div class="pk-model-meta" hidden drug="levamlodipine" model-id="Levamlodipine_Li2025_base" status="extracted" stale="true" population="smoking patients" measured-compound="levamlodipine besylate" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tvKa | `Q49` · kabs | 0.79 | 1/h | 0.00021944444444444444 | 1/h | not captured | tv_prefix (0.95) | t0006:row2:col1, t0006:row2:col3 | — | not captured |
| tvV | `Q61` · V | 3572 | L | 3.572 | L | not captured | tv_prefix (0.95) | t0006:row3:col1, t0006:row3:col2, t0006:row3:col3, Li_2025_table_4:row1:col1 | — | not captured |
| tvCl | `Q22` · CL | 59.61 | L/h | 1.6558333333333334e-05 | L/h | not captured | tv_prefix (0.95) | t0006:row4:col1, t0006:row4:col2, t0006:row4:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- column 'parameters' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped PD-category row 'tvIC50' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0006:row5:col1', 't0006:row5:col2', 't0006:row5:col3', 'Li_2025_table_4:row4:col1'])
- dropped PD-category row 'tvE0' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0006:row6:col1', 't0006:row6:col2', 't0006:row6:col3', 'Li_2025_table_4:row3:col1'])
- dropped PD-category row 'tvImax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0006:row7:col1', 't0006:row7:col2', 't0006:row7:col3', 'Li_2025_table_4:row5:col1'])
- dropped unlinked row (NIL): 'dCldUA' — extend the ontology if this is a real PK parameter (source ['t0006:row8:col1', 't0006:row8:col2', 't0006:row8:col3'])
- dropped unlinked row (NIL): 'dCldeGFR' — extend the ontology if this is a real PK parameter (source ['t0006:row9:col1', 't0006:row9:col2', 't0006:row9:col3'])
- routed 'stdev0' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Base model' — extend the ontology if this is a real PK parameter (source ['Li_2025_table_4:row0:col2'])
- dropped duplicate Q22 ('tvCL', value '58.76') — already have one for this compound
- implicit units: 'tvKa' → 1/h (from the popPK convention: 'The parameter tvKa is the absorption rate constant. In population pharmacokinetic modeling, first-order rate constants a')
- implicit units: 'tvV' → L (from the paper text: "The paper text states: 'Typical values of the model with the inclusion of covariates were altered compared to the base m")
- implicit units: 'tvCl' → L/h (from the paper text: "The paper text states: 'Typical values of the model with the inclusion of covariates were altered compared to the base m")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (tvV); Q22 (tvCl)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=levamlodipine besylate
- model-stage split: 'base' is the base model of Li_2025 (paper reports 2 stages: base, final); same population, different model-building step

**Extraction notes:**
- unparsed cell t0006:row3:col4 = '1723 ~ 4821'
- unparsed cell t0006:row4:col4 = '51.82 ~ 69.27'
- unparsed cell t0006:row5:col4 = '1.35 ~ 2.31'
- unparsed cell t0006:row6:col4 = '162 ~ 172'
- unparsed cell t0006:row7:col4 = '19 ~ 43'
- unparsed cell t0006:row8:col4 = '−0.82 ~ −0.54'
- unparsed cell t0006:row9:col4 = '0.64 ~ 1.21'
- unparsed cell t0006:row10:col4 = '0.04 ~ 0.07'
- unparsed cell Li_2025_table_4:row0:col3 = 'h−1'
- unparsed cell Li_2025_table_4:row2:col2 = 'L·h−1'
- companion parameter table 4 transcribed (6 record(s), model stage 'base')
- unparsed cell Li_2025_table_5:row0:col3 = '·h−1'
- companion parameter table 5 transcribed (1 record(s), model stage 'final')
- LLM selected parameter table(s) 4, 5
- dropped sensitivity-analysis table(s) 6 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.714 (5/7 fields) | 2 |
| `gpt-oss:120b` | not confirmed | 0.714 (5/7 fields) | 2 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | levamlodipine besylate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | levamlodipine besylate | unknown | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | levamlodipine besylate | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | levamlodipine besylate | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t0006:row4:col1', 't0006:row4:col2', 't0006:row4:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['t0006:row2:col1', 't0006:row2:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['t0006:row3:col1', 't0006:row3:col2', 't0006:row3:col3', 'Li_2025_table_4:row1:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 59.61 | not captured | not captured | ['t0006:row4:col1', 't0006:row4:col2', 't0006:row4:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 59.6 L/h | not captured | not captured | ['t0006:row4:col1', 't0006:row4:col2', 't0006:row4:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.57e+03 L | not captured | not captured | ['t0006:row3:col1', 't0006:row3:col2', 't0006:row3:col3', 'Li_2025_table_4:row1:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_levamlodipine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Li_2025` / `Li_2025::base`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_levamlodipine/models/modelica/Levamlodipine_Li2025_base.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_levamlodipine/models/modelica/Levamlodipine_Li2025_base.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_levamlodipine/Levamlodipine_Li2025_base/Levamlodipine_Li2025_base_modelica.zip" download>Levamlodipine_Li2025_base_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_levamlodipine/Levamlodipine_Li2025_base/Levamlodipine_Li2025_base_fmi.zip" download>Levamlodipine_Li2025_base_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_levamlodipine/Levamlodipine_Li2025_base/Levamlodipine_Li2025_base_matlab.zip" download>Levamlodipine_Li2025_base_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_levamlodipine/Levamlodipine_Li2025_base/Levamlodipine_Li2025_base_matlab_simbio.zip" download>Levamlodipine_Li2025_base_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_levamlodipine/Levamlodipine_Li2025_base/Levamlodipine_Li2025_base_sbml.zip" download>Levamlodipine_Li2025_base_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_levamlodipine/Levamlodipine_Li2025_base/Levamlodipine_Li2025_base_cellml.zip" download>Levamlodipine_Li2025_base_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_levamlodipine/Levamlodipine_Li2025_base/Levamlodipine_Li2025_base.svg" alt="Levamlodipine_Li2025_base diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2.5 mg, single dose, first-order absorption (ka 0.79 /h, F 0.9).

<dbs-fmusim paramsurl="drugs/drug_levamlodipine/Levamlodipine_Li2025_base/Levamlodipine_Li2025_base_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_levamlodipine/Levamlodipine_Li2025_base/Levamlodipine_Li2025_base_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Levamlodipine_Li2025_base_params.json` · controls `Levamlodipine_Li2025_base_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 03:26 UTC</sub>
