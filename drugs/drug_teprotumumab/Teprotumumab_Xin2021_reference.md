<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;teprotumumab&quot;,&quot;href&quot;:&quot;drugs/drug_teprotumumab/&quot;},{&quot;label&quot;:&quot;Xin_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Teprotumumab_Xin2021_reference&quot;,&quot;label&quot;:&quot;Xin_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_teprotumumab/Teprotumumab_Xin2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# teprotumumab — `Teprotumumab_Xin2021_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 478, model 3.55e+03); the model does not reproduce the paper's peak concentration (Cmax) (paper 14.5, model 0.148).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Extracted — teprotumumab: CL 0.334 L/day, V1 3.94 L, Q 0.859 L/day, V2 4.21 L.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Xin Y et al., Pharmacokinetics and Exposure-Response…, Clinical pharmacokinetics (2021)
  ·  DOI: [10.1007/s40262-021-01003-3](https://doi.org/10.1007/s40262-021-01003-3)

<div class="pk-model-meta" hidden drug="teprotumumab" model-id="Teprotumumab_Xin2021_reference" status="needs_review" stale="false" population="patients with thyroid eye disease and oncology" measured-compound="teprotumumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Central clearance, CL(L/day) | `Q22` · CL | 0.334 | L/day | 3.865740740740741e-09 | [l] / [d] | not captured | llm_confirmed (0.6) | Tab2:row1:col1 | — | 43.0 (None% RSE) |
| Central volume, Vc (L) | `Q63` · V1 | 3.94 | L | 0.00394 | [l] | not captured | llm_confirmed (0.6) | Tab2:row2:col1 | — | 27.7 (None% RSE) |
| Inter-compartmental clearance, Q (L/day) | `Q30` · Q | 0.859 | L/day | 9.942129629629628e-09 | [l] / [d] | not captured | llm_confirmed (0.6) | Tab2:row3:col1 | — | not captured |
| Peripheral volume, Vp (L) | `Q64` · V2 | 4.21 | L | 0.00421 | [l] | not captured | llm_confirmed (0.6) | Tab2:row4:col1 | — | 25.4 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=teprotumumab
- molar mass: none found for 'teprotumumab' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 19.9 | 18.836 | 0.9465 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row3:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row4:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.334 | not captured | not captured | ['Tab2:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0139 L/h | not captured | not captured | ['Tab2:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.94 L | not captured | not captured | ['Tab2:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.21 L | not captured | not captured | ['Tab2:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=teprotumumab) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 14.5 | 0.14768206180055007 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | fail | 0.643 | 0.14768206180055007 | 0.2297 | µg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 76.2 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q1 (n = 21)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 80 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q2 (n = 20)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 66.7 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q3 (n = 21)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 90.5 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q4 (n = 21)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 47.6 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q1 (n = 21)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 60 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q2 (n = 20)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 57.1 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q3 (n = 21)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 57.1 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q4 (n = 21)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 52.4 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q1 (n = 21)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 70 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q2 (n = 20)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 66.7 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q3 (n = 21)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 61.9 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q4 (n = 21)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 9.5 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q1 (n = 21)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q2 (n = 20)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 19.0 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q3 (n = 21)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 9.5 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q4 (n = 21)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 28.6 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q1 (n = 21)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 30 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q2 (n = 20)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 23.8 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q3 (n = 21)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 19.0 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q4 (n = 21)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 14.3 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q1 (n = 21)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 15 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q2 (n = 20)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q3 (n = 21)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 9.5 | 0.14768206180055007 | not captured | unresolved concentration unit (exp 'Q4 (n = 21)', sim 'kg/m3') |
| T1_cmin_ss | reference | skipped | 4.91 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 157 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 66.7 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 80 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 81.0 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 85.7 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 57.1 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 55 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 57.1 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 52.4 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 61.9 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 55 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 76.2 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 57.1 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 4.8 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 10 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 9.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 14.3 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 14.3 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 35 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 23.8 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 28.6 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 9.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 10 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 14.3 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 4.8 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | fail | 477.59999999999997 | 3553.9615935901584 | 7.4413 | days→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_teprotumumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Xin_2021` / `Xin_2021::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_teprotumumab/models/modelica/Teprotumumab_Xin2021_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_teprotumumab/models/modelica/Teprotumumab_Xin2021_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_teprotumumab/models/modelica/Teprotumumab_Xin2021_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_teprotumumab/Teprotumumab_Xin2021_reference/Teprotumumab_Xin2021_reference_modelica.zip" download>Teprotumumab_Xin2021_reference_modelica.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_teprotumumab/Teprotumumab_Xin2021_reference/Teprotumumab_Xin2021_reference_fmi.zip" download>Teprotumumab_Xin2021_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_teprotumumab/Teprotumumab_Xin2021_reference/Teprotumumab_Xin2021_reference_matlab.zip" download>Teprotumumab_Xin2021_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_teprotumumab/Teprotumumab_Xin2021_reference/Teprotumumab_Xin2021_reference_matlab_simbio.zip" download>Teprotumumab_Xin2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_teprotumumab/Teprotumumab_Xin2021_reference/Teprotumumab_Xin2021_reference_sbml.zip" download>Teprotumumab_Xin2021_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_teprotumumab/Teprotumumab_Xin2021_reference/Teprotumumab_Xin2021_reference_cellml.zip" download>Teprotumumab_Xin2021_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_teprotumumab/Teprotumumab_Xin2021_reference/Teprotumumab_Xin2021_reference.svg" alt="Teprotumumab_Xin2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 700 mg infusion over 10 min, single dose. Doses in the paper: 700, 1400 mg.

<dbs-fmusim paramsurl="drugs/drug_teprotumumab/Teprotumumab_Xin2021_reference/Teprotumumab_Xin2021_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_teprotumumab/Teprotumumab_Xin2021_reference/Teprotumumab_Xin2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Teprotumumab_Xin2021_reference_params.json` · controls `Teprotumumab_Xin2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 22:59 UTC</sub>
