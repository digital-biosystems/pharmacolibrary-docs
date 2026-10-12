<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;capecitabine&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/&quot;},{&quot;label&quot;:&quot;Schmulenson_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Capecitabine_Panoilia2015_reference&quot;,&quot;label&quot;:&quot;Panoilia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Panoilia2015_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Schmulenson2022_reference&quot;,&quot;label&quot;:&quot;Schmulenson_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Schmulenson2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Capecitabine_Wen2021_reference&quot;,&quot;label&quot;:&quot;Wen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Wen2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Zuo2024_reference&quot;,&quot;label&quot;:&quot;Zuo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Zuo2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# capecitabine — `Capecitabine_Schmulenson2022_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.944), gpt-oss:120b (not confirmed, agreement 0.583). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**No value for capecitabine's elimination clearance and intercompartmental clearance.**

The model was built, but capecitabine's elimination clearance and intercompartmental clearance had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. A reported unit could not be converted (CL/F, V1/F, MAT and V2/F), so that value has no SI equivalent. Extracted — capecitabine: CL/F 1.94 relative standard error, %, V1/F 10.4 relative standard error, %, MAT 3.01 relative standard error, %, V2/F 63.9 relative standard error, %, Q/F 13.5 relative standard error, %, kmet 0.265 relative standard error, %, AUC%ext 4.7.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has regorafenib, capecitabine, the second reading capecitabine. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:36:45.661888+00:00) predates the upstream re-run (2026-10-07 16:28:21.532606+00:00). Current validate status: `extracted`.

> **Dose compound ≠ measured compound:** dosed `regorafenib, capecitabine`, measured `capecitabine`.

## Citation
Schmulenson E et al., Population pharmacokinetic analyses of…, British journal of clinical… (2022)
  ·  DOI: [10.1111/bcp.15461](https://doi.org/10.1111/bcp.15461)

## Model component
<dbs-pgx drug="capecitabine" model-id="Capecitabine_Schmulenson2022_reference" status="extracted" stale="true" population="locally advanced rectal cancer" measured-compound="capecitabine" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, CLm/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLRegorafenib/F [L/h] | `Q27` · CL/F | 1.94 | L/h | 5.388888888888888e-07 | [l] / [h] | 12.1 | llm (0.6) | Schmulenson_2022_table_p7_1:row0:col1 | — | not captured |
| Vc/F [L] | `Q290` · V1/F | 10.4 | L | 0.010400000000000001 | [l] | 33.2 | llm_confirmed (0.6) | Schmulenson_2022_table_p7_1:row1:col1 | — | not captured |
| MATRegorafenib [h] | `Q73` · MAT | 3.01 | h | 10836.0 | [h] | 9.6 | llm (0.6) | Schmulenson_2022_table_p7_1:row2:col1 | — | 21.7 (24.7% RSE) |
| Vp/F [L] | `Q82` · V2/F | 63.9 | L | 0.0639 | [l] | 8.7 | llm_confirmed (0.6) | Schmulenson_2022_table_p7_1:row3:col1 | — | 131.5 (24.2% RSE) |
| Q/F [L/h] | `Q69` · Q/F | 13.5 | L/h | 3.75e-06 | [l] / [h] | 10.8 | llm_confirmed (0.6) | Schmulenson_2022_table_p7_1:row4:col1 | — | not captured |
| CLM-2/F [L/h] | `Q351` · CLm/F | 0.936 | L/h | 2.6000000000000005e-07 | [l] / [h] | 10.8 | llm_confirmed (0.6) | Schmulenson_2022_table_p7_1:row5:col1 | — | 25.2 (33.6% RSE) |
| k8,met [1/h] | `Q51` · kmet | 0.265 | 1/h | 7.361111111111111e-05 | [1] / [h] | 12.8 | llm (0.6) | Schmulenson_2022_table_p7_1:row6:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- table section iiv: 'CLRegorafenib/F [%]' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Vp/F [%]' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'MAT (Regorafenib) [%]' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'CLM-2/F [%]' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'CLM-5/F [%]' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'Regorafenib [%]' routed out of structural estimates ('Residual variability')
- table section residual_error: 'M-2 [%]' routed out of structural estimates ('Residual variability')
- table section residual_error: 'M-5 [%]' routed out of structural estimates ('Residual variability')
- dropped duplicate Q73 ('MATM-2 [h]', value '1.90') — already have one for this compound
- dropped duplicate Q351 ('CLM-5/F [L/h]', value '2.01') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=capecitabine

**Extraction notes:**
- unparsed cell Schmulenson_2022_table_p7_1:row0:col3 = '1.91 (1.47–2.46)'
- unparsed cell Schmulenson_2022_table_p7_1:row1:col3 = '9.83 (2.37–23.2)'
- unparsed cell Schmulenson_2022_table_p7_1:row2:col3 = '3.05 (2.03–4.05)'
- unparsed cell Schmulenson_2022_table_p7_1:row3:col3 = '64.4 (50.3–85.2)'
- unparsed cell Schmulenson_2022_table_p7_1:row4:col3 = '13.7 (9.4–17.7)'
- unparsed cell Schmulenson_2022_table_p7_1:row5:col3 = '0.932 (0.731–1.19)'
- unparsed cell Schmulenson_2022_table_p7_1:row6:col3 = '0.267 (0.168–0.449)'
- unparsed cell Schmulenson_2022_table_p7_1:row7:col3 = '1.91 (1.31–2.96)'
- unparsed cell Schmulenson_2022_table_p7_1:row8:col3 = '2.02 (1.14–3.16)'
- unparsed cell Schmulenson_2022_table_p7_1:row10:col3 = '34.5 (14.8–48.0)'
- unparsed cell Schmulenson_2022_table_p7_1:row11:col3 = '126.9 (82.3–238.7)'
- unparsed cell Schmulenson_2022_table_p7_1:row12:col3 = '19.9 (5.92–30.0)'
- unparsed cell Schmulenson_2022_table_p7_1:row13:col3 = '23.7 (15.3–37.9)'
- unparsed cell Schmulenson_2022_table_p7_1:row14:col3 = '72.6 (50.1–99.3)'
- unparsed cell Schmulenson_2022_table_p7_1:row16:col3 = '51.2 (42.5–59.0)'
- unparsed cell Schmulenson_2022_table_p7_1:row17:col3 = '57.9 (52.2–63.6)'
- unparsed cell Schmulenson_2022_table_p7_1:row18:col3 = '53.6 (48.1–59.4)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.944 (17/18 fields) | 1 |
| `gpt-oss:120b` | not confirmed | 0.583 (7/12 fields) | 5 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | regorafenib, capecitabine | capecitabine | mismatch |
| `gpt-oss:120b` | `model.links` | [['capecitabine', "5'-deoxy-5-fluorocytidine", 'metabolism'], ['capecitabine', "5'-deoxy-5-fluorouridine", 'metabolism'], ['regorafenib', 'm-2', 'metabolism'], ['regorafenib', 'm-5', 'metabolism']] | [['regorafenib', 'm-2', 'metabolism'], ['regorafenib', 'm-5', 'metabolism'], ['capecitabine', "5'-deoxy-5-fluorocytidine", 'metabolism'], ['capecitabine', "5'-deoxy-5-fluorouridine", 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[m-2 [%]]` | not captured | 1.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[m-5 [%]]` | 4.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | regorafenib and capecitabine | regorafenib, capecitabine | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | capecitabine and regorafenib | regorafenib, capecitabine | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Schmulenson_2022_table_p7_1:row0:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Schmulenson_2022_table_p7_1:row1:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Schmulenson_2022_table_p7_1:row5:col1'] |
| C5_dimension_Q51 | pass | 1 / [time] | not captured | not captured | not captured | ['Schmulenson_2022_table_p7_1:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Schmulenson_2022_table_p7_1:row4:col1'] |
| C5_dimension_Q73 | pass | [time] | not captured | not captured | not captured | ['Schmulenson_2022_table_p7_1:row2:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Schmulenson_2022_table_p7_1:row3:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.94 L/h | not captured | not captured | ['Schmulenson_2022_table_p7_1:row0:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 10.4 L | not captured | not captured | ['Schmulenson_2022_table_p7_1:row1:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 63.9 L | not captured | not captured | ['Schmulenson_2022_table_p7_1:row3:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | general_linear → PK_General_Linear* | PK_General_Linear | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_capecitabine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Schmulenson_2022` / `Schmulenson_2022::reference`)
- model: `../../../knowledgebase/drugs/drug_capecitabine/models/modelica/_needs_review/Capecitabine_Schmulenson2022_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_capecitabine/models/modelica/_needs_review/Capecitabine_Schmulenson2022_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_capecitabine/Capecitabine_Schmulenson2022_reference/Capecitabine_Schmulenson2022_reference_modelica.zip" download>Capecitabine_Schmulenson2022_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_capecitabine/Capecitabine_Schmulenson2022_reference/Capecitabine_Schmulenson2022_reference_fmi.zip" download>Capecitabine_Schmulenson2022_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_capecitabine/Capecitabine_Schmulenson2022_reference/Capecitabine_Schmulenson2022_reference_matlab.zip" download>Capecitabine_Schmulenson2022_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_capecitabine/Capecitabine_Schmulenson2022_reference/Capecitabine_Schmulenson2022_reference_matlab_simbio.zip" download>Capecitabine_Schmulenson2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_capecitabine/Capecitabine_Schmulenson2022_reference/Capecitabine_Schmulenson2022_reference_sbml.zip" download>Capecitabine_Schmulenson2022_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_capecitabine/Capecitabine_Schmulenson2022_reference/Capecitabine_Schmulenson2022_reference_cellml.zip" download>Capecitabine_Schmulenson2022_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_capecitabine/Capecitabine_Schmulenson2022_reference/Capecitabine_Schmulenson2022_reference.svg" alt="Capecitabine_Schmulenson2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 40 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 40, 80, 120, 825 mg.

<dbs-fmusim paramsurl="drugs/drug_capecitabine/Capecitabine_Schmulenson2022_reference/Capecitabine_Schmulenson2022_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_capecitabine/Capecitabine_Schmulenson2022_reference/Capecitabine_Schmulenson2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Capecitabine_Schmulenson2022_reference_params.json` · controls `Capecitabine_Schmulenson2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:28 UTC</sub>
