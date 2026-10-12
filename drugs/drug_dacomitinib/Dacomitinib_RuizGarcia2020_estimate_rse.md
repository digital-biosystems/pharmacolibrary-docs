<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;dacomitinib&quot;,&quot;href&quot;:&quot;drugs/drug_dacomitinib/&quot;},{&quot;label&quot;:&quot;Ruiz-Garcia_2020 \u00b7 estimate_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dacomitinib_RuizGarcia2020_estimate_rse&quot;,&quot;label&quot;:&quot;Ruiz-Garcia_2020_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Dacomitinib_RuizGarcia2020_parameter_estimate&quot;,&quot;label&quot;:&quot;Ruiz-Garcia_2020_parameter_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_parameter_estimate.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dacomitinib — `Dacomitinib_RuizGarcia2020_estimate_rse`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (MTT), so that value has no SI equivalent.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[cl].value`: this record has 29.2, the second reading 28.4; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Ruiz-Garcia A et al., Pharmacokinetic Models to Characterize…, Pharmaceutics (2020)
  ·  DOI: [10.3390/pharmaceutics12040330](https://doi.org/10.3390/pharmaceutics12040330)

<div class="pk-model-meta" hidden drug="dacomitinib" model-id="Dacomitinib_RuizGarcia2020_estimate_rse" status="curated_candidate" stale="false" population="healthy volunteers" measured-compound="dacomitinib" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 29.2 | L/h | 8.111111111111112e-06 | [l] / [h] | 4.212 | exact (1.0) | Ruiz-Garcia_2020_table_3:row2:col1, Ruiz-Garcia_2020_table_3:row2:col2, Ruiz-Garcia_2020_table_3:row2:col3, Ruiz-Garcia_2020_table_3:row2:col4, Ruiz-Garcia_2020_table_3:row2:col5 | — | not captured |
| V (L) | `Q61` · V | 131 | L | 0.131 | [l] | 10.840 | exact (1.0) | Ruiz-Garcia_2020_table_3:row3:col1, Ruiz-Garcia_2020_table_3:row3:col2, Ruiz-Garcia_2020_table_3:row3:col3, Ruiz-Garcia_2020_table_3:row3:col4, Ruiz-Garcia_2020_table_3:row3:col5 | — | not captured |
| Q (L/h) | `Q30` · Q | 19.9 | L/h | 5.527777777777777e-06 | [l] / [h] | 16.583 | exact (1.0) | Ruiz-Garcia_2020_table_3:row4:col1, Ruiz-Garcia_2020_table_3:row4:col2, Ruiz-Garcia_2020_table_3:row4:col3, Ruiz-Garcia_2020_table_3:row4:col4, Ruiz-Garcia_2020_table_3:row4:col5 | — | not captured |
| Vss (L) | `Q65` · Vss | 2300 | L | 2.3000000000000003 | [l] | 16.783 | exact (1.0) | Ruiz-Garcia_2020_table_3:row5:col1, Ruiz-Garcia_2020_table_3:row5:col2, Ruiz-Garcia_2020_table_3:row5:col3, Ruiz-Garcia_2020_table_3:row5:col4, Ruiz-Garcia_2020_table_3:row5:col5 | — | not captured |
| MTT (h) | `Q81` · MTT | 6.91 | h | not captured | [h] | 5.731 | exact (1.0) | Ruiz-Garcia_2020_table_3:row6:col1 | — | not captured |
| ka (h−1) | `Q49` · kabs | 0.0246 | h−1 | 6.833333333333334e-06 | [1] / [h] | 12.48 | exact (1.0) | Ruiz-Garcia_2020_table_3:row7:col1, Ruiz-Garcia_2020_table_3:row7:col2, Ruiz-Garcia_2020_table_3:row7:col3, Ruiz-Garcia_2020_table_3:row7:col5 | — | not captured |
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | Ruiz-Garcia_2020_table_3:row8:col1, Ruiz-Garcia_2020_table_3:row8:col2, Ruiz-Garcia_2020_table_3:row8:col3, Ruiz-Garcia_2020_table_3:row8:col4, Ruiz-Garcia_2020_table_3:row8:col5 | — | not captured |
| tlag (h) | `Q83` · tlag | 0.749 | h | 2696.4 | [h] | 8.278 | exact (1.0) | Ruiz-Garcia_2020_table_3:row9:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'estimate (rse%)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- dropped unlinked row (NIL): 'D2 (h)' — extend the ontology if this is a real PK parameter (source ['Ruiz-Garcia_2020_table_3:row10:col4', 'Ruiz-Garcia_2020_table_3:row10:col5'])
- dropped duplicate Q40 ('* F1', value '0.455') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dacomitinib
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'estimate (rse%)' subgroup of Ruiz-Garcia_2020 (paper reports 2 populations: estimate (rse%), parameter estimate)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 3 transcribed (40 record(s), model stage 'base')
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.714 (15/21 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl].value` | 29.2 | 28.4 | mismatch |
| `qwen3.8-27b` | `parameters[d2]` | not captured | 10.4 | only_one_extracted |
| `qwen3.8-27b` | `parameters[ka].value` | 0.0246 | 0.00966 | mismatch |
| `qwen3.8-27b` | `parameters[q].value` | 19.9 | 4.7 | mismatch |
| `qwen3.8-27b` | `parameters[v].value` | 131 | 1160 | mismatch |
| `qwen3.8-27b` | `parameters[vss].value` | 2300 | 6590 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ruiz-Garcia_2020_table_3:row2:col1', 'Ruiz-Garcia_2020_table_3:row2:col2', 'Ruiz-Garcia_2020_table_3:row2:col3', 'Ruiz-Garcia_2020_table_3:row2:col4', 'Ruiz-Garcia_2020_table_3:row2:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ruiz-Garcia_2020_table_3:row4:col1', 'Ruiz-Garcia_2020_table_3:row4:col2', 'Ruiz-Garcia_2020_table_3:row4:col3', 'Ruiz-Garcia_2020_table_3:row4:col4', 'Ruiz-Garcia_2020_table_3:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Ruiz-Garcia_2020_table_3:row7:col1', 'Ruiz-Garcia_2020_table_3:row7:col2', 'Ruiz-Garcia_2020_table_3:row7:col3', 'Ruiz-Garcia_2020_table_3:row7:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ruiz-Garcia_2020_table_3:row3:col1', 'Ruiz-Garcia_2020_table_3:row3:col2', 'Ruiz-Garcia_2020_table_3:row3:col3', 'Ruiz-Garcia_2020_table_3:row3:col4', 'Ruiz-Garcia_2020_table_3:row3:col5'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ruiz-Garcia_2020_table_3:row5:col1', 'Ruiz-Garcia_2020_table_3:row5:col2', 'Ruiz-Garcia_2020_table_3:row5:col3', 'Ruiz-Garcia_2020_table_3:row5:col4', 'Ruiz-Garcia_2020_table_3:row5:col5'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Ruiz-Garcia_2020_table_3:row9:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 29.2 | not captured | not captured | ['Ruiz-Garcia_2020_table_3:row2:col1', 'Ruiz-Garcia_2020_table_3:row2:col2', 'Ruiz-Garcia_2020_table_3:row2:col3', 'Ruiz-Garcia_2020_table_3:row2:col4', 'Ruiz-Garcia_2020_table_3:row2:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 29.2 L/h | not captured | not captured | ['Ruiz-Garcia_2020_table_3:row2:col1', 'Ruiz-Garcia_2020_table_3:row2:col2', 'Ruiz-Garcia_2020_table_3:row2:col3', 'Ruiz-Garcia_2020_table_3:row2:col4', 'Ruiz-Garcia_2020_table_3:row2:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 131 L | not captured | not captured | ['Ruiz-Garcia_2020_table_3:row3:col1', 'Ruiz-Garcia_2020_table_3:row3:col2', 'Ruiz-Garcia_2020_table_3:row3:col3', 'Ruiz-Garcia_2020_table_3:row3:col4', 'Ruiz-Garcia_2020_table_3:row3:col5'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 2.3e+03 L | not captured | not captured | ['Ruiz-Garcia_2020_table_3:row5:col1', 'Ruiz-Garcia_2020_table_3:row5:col2', 'Ruiz-Garcia_2020_table_3:row5:col3', 'Ruiz-Garcia_2020_table_3:row5:col4', 'Ruiz-Garcia_2020_table_3:row5:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=dacomitinib) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 873.5 | 2.8840019665410625e-05 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dacomitinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ruiz-Garcia_2020` / `Ruiz-Garcia_2020::estimate_rse`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dacomitinib/models/modelica/Dacomitinib_RuizGarcia2020_estimate_rse.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dacomitinib/models/modelica/Dacomitinib_RuizGarcia2020_estimate_rse.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dacomitinib/models/modelica/Dacomitinib_RuizGarcia2020_estimate_rse.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse/Dacomitinib_RuizGarcia2020_estimate_rse_modelica.zip" download>Dacomitinib_RuizGarcia2020_estimate_rse_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse/Dacomitinib_RuizGarcia2020_estimate_rse_fmi.zip" download>Dacomitinib_RuizGarcia2020_estimate_rse_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse/Dacomitinib_RuizGarcia2020_estimate_rse_matlab.zip" download>Dacomitinib_RuizGarcia2020_estimate_rse_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse/Dacomitinib_RuizGarcia2020_estimate_rse_matlab_simbio.zip" download>Dacomitinib_RuizGarcia2020_estimate_rse_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse/Dacomitinib_RuizGarcia2020_estimate_rse_sbml.zip" download>Dacomitinib_RuizGarcia2020_estimate_rse_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse/Dacomitinib_RuizGarcia2020_estimate_rse_cellml.zip" download>Dacomitinib_RuizGarcia2020_estimate_rse_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse/Dacomitinib_RuizGarcia2020_estimate_rse.svg" alt="Dacomitinib_RuizGarcia2020_estimate_rse diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 45 mg, single dose, first-order absorption (ka 0.0246 /h, lag 44.9 min, F 1). Dose in the paper: 45 mg.

<dbs-fmusim paramsurl="drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse/Dacomitinib_RuizGarcia2020_estimate_rse_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse/Dacomitinib_RuizGarcia2020_estimate_rse_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Dacomitinib_RuizGarcia2020_estimate_rse_params.json` · controls `Dacomitinib_RuizGarcia2020_estimate_rse_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:18 UTC</sub>
