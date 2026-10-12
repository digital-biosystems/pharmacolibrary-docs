<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;daclatasvir&quot;,&quot;href&quot;:&quot;drugs/drug_daclatasvir/&quot;},{&quot;label&quot;:&quot;Wang_2018 \u00b7 dcv_estimate_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Daclatasvir_Osawa2018_reference&quot;,&quot;label&quot;:&quot;Osawa_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daclatasvir/Daclatasvir_Osawa2018_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Daclatasvir_Wang2018_dcv_estimate_rse&quot;,&quot;label&quot;:&quot;Wang_2018_dcv_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daclatasvir/Daclatasvir_Wang2018_dcv_estimate_rse.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# daclatasvir — `Daclatasvir_Wang2018_dcv_estimate_rse`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.929). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The daclatasvir two-compartment model was held back because bioavailability F and the k12 rate constant were left at library defaults instead of being estimated or reported from Wang_2018.**

The record reports CL 5.24 L/h, V1 42.9 L, Q 2.62 L/h, V2 25.0 L and kabs 1.17 h⁻¹, but F and k12 were defaulted (Tlag was also substituted by the model builder). The failed deviations check flagged these defaulted parameters as not acceptable. F and k12 affect the simulated profile but are not supported by the paper, so they must be extracted or explicitly justified as conventions. Extracted — daclatasvir: CL 5.24 L/h, V1 42.9 L, Q 2.62 L/h, V2 25 L, kabs 1.17 h⁻¹.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has daclatasvir, the second reading daclatasvir, asunaprevir. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Wang HC et al., Integrated pharmacokinetic/viral dynami…, Acta pharmacologica Sinica (2018)
  ·  DOI: [10.1038/aps.2017.84](https://doi.org/10.1038/aps.2017.84)

<div class="pk-model-meta" hidden drug="daclatasvir" model-id="Daclatasvir_Wang2018_dcv_estimate_rse" status="needs_review" stale="false" population="healthy subjects and adults with genotype 1 chronic hepatitis C" measured-compound="daclatasvir" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 5.24 | L/h | 1.4555555555555557e-06 | [l] / [h] | 23.2 | exact (1.0) | Wang_2018_table_p6_2:row0:col2, Wang_2018_table_p6_2:row0:col3 | — | not captured |
| Vc (L) | `Q63` · V1 | 42.9 | L | 0.0429 | [l] | 22.6 | exact (1.0) | Wang_2018_table_p6_2:row1:col2, Wang_2018_table_p6_2:row1:col3 | — | not captured |
| Q (L/h) | `Q30` · Q | 2.62 | L/h | 7.277777777777778e-07 | [l] / [h] | 17.7 | exact (1.0) | Wang_2018_table_p6_2:row2:col2 | — | not captured |
| Vp (L) | `Q64` · V2 | 25.0 | L | 0.025 | [l] | 32.4 | exact (1.0) | Wang_2018_table_p6_2:row3:col2, Wang_2018_table_p6_2:row3:col3 | — | not captured |
| Ka (h⁻¹) | `Q49` · kabs | 1.17 | h⁻¹ | 0.000325 | [1] / [h] | 28.3 | exact (1.0) | Wang_2018_table_p6_2:row4:col2, Wang_2018_table_p6_2:row4:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag', 'k12']

**Interpretation flags:**
- dropped duplicate Q22 ('c', value '22.1') — already have one for this compound
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (L/h)); Q63 (Vc (L)); Q30 (Q (L/h)); Q64 (Vp (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=daclatasvir
- population split: 'dcv estimate (%rse)' subgroup of Wang_2018 (paper reports 3 populations: asv estimate (%rse), dcv estimate (%rse), estimate (%rse))
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- final table tab_2: grid unusable → re-running vision table extraction for Wang_2018
- unparsed cell Wang_2018_table_3:row8:col1 = 'IC 50 of DCV blocking production of GT1A virions'
- unparsed cell Wang_2018_table_3:row9:col1 = 'Scaling factor for IC 50 of DCV between GT1B and GT1A virions'
- unparsed cell Wang_2018_table_3:row11:col1 = 'Coefficient of exponential function describing IC 50,DCV,GT1A changing over time'
- unparsed cell Wang_2018_table_3:row12:col1 = 'Coefficient of exponential function describing IC 50,DCV,GT1B changing over time'
- unparsed cell Wang_2018_table_3:row13:col1 = 'IC 50 of ASV blocking production of GT1A virions'
- unparsed cell Wang_2018_table_3:row14:col1 = 'Scaling factor for IC 50 of ASV between GT1A and GT1B virions'
- unparsed cell Wang_2018_table_3:row16:col1 = 'Coefficient of exponential function describing IC 50,ASV changing over time'
- companion parameter table 3 transcribed (26 record(s))
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.929 (13/14 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | daclatasvir | daclatasvir, asunaprevir | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wang_2018_table_p6_2:row0:col2', 'Wang_2018_table_p6_2:row0:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wang_2018_table_p6_2:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Wang_2018_table_p6_2:row4:col2', 'Wang_2018_table_p6_2:row4:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wang_2018_table_p6_2:row1:col2', 'Wang_2018_table_p6_2:row1:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wang_2018_table_p6_2:row3:col2', 'Wang_2018_table_p6_2:row3:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 5.24 | not captured | not captured | ['Wang_2018_table_p6_2:row0:col2', 'Wang_2018_table_p6_2:row0:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.24 L/h | not captured | not captured | ['Wang_2018_table_p6_2:row0:col2', 'Wang_2018_table_p6_2:row0:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 42.9 L | not captured | not captured | ['Wang_2018_table_p6_2:row1:col2', 'Wang_2018_table_p6_2:row1:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 25 L | not captured | not captured | ['Wang_2018_table_p6_2:row3:col2', 'Wang_2018_table_p6_2:row3:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=daclatasvir) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_daclatasvir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2018` / `Wang_2018::dcv_estimate_rse`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_daclatasvir/models/modelica/Daclatasvir_Wang2018_dcv_estimate_rse.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_daclatasvir/models/modelica/Daclatasvir_Wang2018_dcv_estimate_rse.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_daclatasvir/models/modelica/Daclatasvir_Wang2018_dcv_estimate_rse.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_daclatasvir/Daclatasvir_Wang2018_dcv_estimate_rse/Daclatasvir_Wang2018_dcv_estimate_rse_modelica.zip" download>Daclatasvir_Wang2018_dcv_estimate_rse_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_daclatasvir/Daclatasvir_Wang2018_dcv_estimate_rse/Daclatasvir_Wang2018_dcv_estimate_rse_fmi.zip" download>Daclatasvir_Wang2018_dcv_estimate_rse_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_daclatasvir/Daclatasvir_Wang2018_dcv_estimate_rse/Daclatasvir_Wang2018_dcv_estimate_rse_matlab.zip" download>Daclatasvir_Wang2018_dcv_estimate_rse_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_daclatasvir/Daclatasvir_Wang2018_dcv_estimate_rse/Daclatasvir_Wang2018_dcv_estimate_rse_matlab_simbio.zip" download>Daclatasvir_Wang2018_dcv_estimate_rse_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_daclatasvir/Daclatasvir_Wang2018_dcv_estimate_rse/Daclatasvir_Wang2018_dcv_estimate_rse_sbml.zip" download>Daclatasvir_Wang2018_dcv_estimate_rse_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_daclatasvir/Daclatasvir_Wang2018_dcv_estimate_rse/Daclatasvir_Wang2018_dcv_estimate_rse_cellml.zip" download>Daclatasvir_Wang2018_dcv_estimate_rse_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_daclatasvir/Daclatasvir_Wang2018_dcv_estimate_rse/Daclatasvir_Wang2018_dcv_estimate_rse.svg" alt="Daclatasvir_Wang2018_dcv_estimate_rse diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 60 mg, single dose, first-order absorption (ka 1.17 /h, F 0.9). Dose in the paper: 60 mg.

<dbs-fmusim paramsurl="drugs/drug_daclatasvir/Daclatasvir_Wang2018_dcv_estimate_rse/Daclatasvir_Wang2018_dcv_estimate_rse_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_daclatasvir/Daclatasvir_Wang2018_dcv_estimate_rse/Daclatasvir_Wang2018_dcv_estimate_rse_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Daclatasvir_Wang2018_dcv_estimate_rse_params.json` · controls `Daclatasvir_Wang2018_dcv_estimate_rse_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:33 UTC</sub>
