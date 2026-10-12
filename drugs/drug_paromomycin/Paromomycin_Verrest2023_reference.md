<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;paromomycin&quot;,&quot;href&quot;:&quot;drugs/drug_paromomycin/&quot;},{&quot;label&quot;:&quot;Verrest_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paromomycin_Verrest2023_reference&quot;,&quot;label&quot;:&quot;Verrest_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paromomycin/Paromomycin_Verrest2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# paromomycin — `Paromomycin_Verrest2023_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667), gpt-oss:120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Q has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — paromomycin: CL 2.62 L/h, V1 13.6 L, Q 0.26, V2 2.22 L, kabs 2.05 h−1, Fab 1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of paromomycin exposure: this record has none, the second reading none; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:39:23.978100+00:00) predates the upstream re-run (2026-10-04 18:26:28.356766+00:00). Current validate status: `extracted`.

## Citation
Verrest L et al., Population pharmacokinetics of a combin…, The Journal of antimicrobia… (2023)
  ·  DOI: [10.1093/jac/dkad286](https://doi.org/10.1093/jac/dkad286)

<div class="pk-model-meta" hidden drug="paromomycin" model-id="Paromomycin_Verrest2023_reference" status="extracted" stale="true" population="children and adults with visceral leishmaniasis" measured-compound="paromomycin" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 2.62 | L/h | 7.277777777777778e-07 | [l] / [h] | not captured | exact (1.0) | dkad286-T3:row2:col1, dkad286-T3:row2:col2 | — | not captured |
| V c (L) | `Q63` · V1 | 13.6 | L | 0.0136 | [l] | not captured | space_fold (0.95) | dkad286-T3:row3:col1, dkad286-T3:row3:col2, Verrest_2023_table_4:row2:col1, Verrest_2023_table_4:row2:col2 | — | not captured |
| Q | `Q30` · Q | 0.26 | L/h | 7.222222222222222e-08 | L/h | not captured | exact (1.0) | dkad286-T3:row4:col1, dkad286-T3:row4:col2 | — | not captured |
| V p (L) | `Q64` · V2 | 2.22 | L | 0.00222 | [l] | not captured | space_fold (0.95) | dkad286-T3:row5:col1, dkad286-T3:row5:col2, Verrest_2023_table_4:row4:col1, Verrest_2023_table_4:row4:col2 | — | not captured |
| ka (h−1) | `Q49` · kabs | 2.05 | h−1 | 0.0005694444444444444 | [1] / [h] | not captured | exact (1.0) | dkad286-T3:row6:col1, dkad286-T3:row6:col2 | — | not captured |
| F1 | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | dkad286-T3:row7:col1, Verrest_2023_table_4:row6:col1 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | -2.40 | not captured | not captured | not captured | not captured | not captured (not captured) | Verrest_2023_table_4:row8:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- table section iiv: 'CL (CV%)' routed out of structural estimates ('Between-subject variability')
- table section residual_error: 'Proportional error (CV%)' routed out of structural estimates ('Residual variability')
- table section iiv: 'COVF,W1 (CV%)' routed out of structural estimates ('Between-subject variability')
- dropped unlinked row (NIL): 'COVCL,neutrc (fractional change/103 cells/µL)' — extend the ontology if this is a real PK parameter (source ['dkad286-T3:row8:col1'])
- dropped duplicate Q22 ('CL (L/day)', value '1.85') — already have one for this compound
- dropped duplicate Q30 ('Q (L/day)', value '0.17') — already have one for this compound
- dropped duplicate Q49 ('ka (day−1)', value '0.037') — already have one for this compound
- dropped unlinked row (NIL): 'COVF,W1b (fractional change)' — extend the ontology if this is a real PK parameter (source ['Verrest_2023_table_4:row7:col1'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Q' → L/h (from the popPK convention: 'The paper does not explicitly state the unit for Q in the table or text. However, Q is an intercompartmental clearance. ')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=paromomycin
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell dkad286-T3:row8:col2 = '−0.16 to −0.10'
- unparsed cell Verrest_2023_table_4:row7:col2 = '−0.57 to −0.73'
- unparsed cell Verrest_2023_table_4:row8:col2 = '−3.79 to −1.21'
- companion parameter table 4 transcribed (22 record(s), model stage 'final')
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (8/12 fields) | 4 |
| `gpt-oss:120b` | not confirmed | 0.667 (8/12 fields) | 4 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[paromomycin exposure]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight_power]` | -2.40 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c].value` | 13.6 | 9.17 | mismatch |
| `gpt-oss-120b` | `parameters[v p].value` | 2.22 | 6.55 | mismatch |
| `gpt-oss:120b` | `model.links` | [] | [['none', '', '']] | mismatch |
| `gpt-oss:120b` | `parameters[covf,w1b]` | not captured | -0.65 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | paromomycin | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | paromomycin | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['dkad286-T3:row2:col1', 'dkad286-T3:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['dkad286-T3:row4:col1', 'dkad286-T3:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['dkad286-T3:row6:col1', 'dkad286-T3:row6:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['dkad286-T3:row3:col1', 'dkad286-T3:row3:col2', 'Verrest_2023_table_4:row2:col1', 'Verrest_2023_table_4:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['dkad286-T3:row5:col1', 'dkad286-T3:row5:col2', 'Verrest_2023_table_4:row4:col1', 'Verrest_2023_table_4:row4:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.62 | not captured | not captured | ['dkad286-T3:row2:col1', 'dkad286-T3:row2:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.62 L/h | not captured | not captured | ['dkad286-T3:row2:col1', 'dkad286-T3:row2:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 13.6 L | not captured | not captured | ['dkad286-T3:row3:col1', 'dkad286-T3:row3:col2', 'Verrest_2023_table_4:row2:col1', 'Verrest_2023_table_4:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.22 L | not captured | not captured | ['dkad286-T3:row5:col1', 'dkad286-T3:row5:col2', 'Verrest_2023_table_4:row4:col1', 'Verrest_2023_table_4:row4:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_paromomycin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Verrest_2023` / `Verrest_2023::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_paromomycin/Paromomycin_Verrest2023_reference/Paromomycin_Verrest2023_reference_modelica.zip" download>Paromomycin_Verrest2023_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_paromomycin/Paromomycin_Verrest2023_reference/Paromomycin_Verrest2023_reference_fmi.zip" download>Paromomycin_Verrest2023_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_paromomycin/Paromomycin_Verrest2023_reference/Paromomycin_Verrest2023_reference_matlab.zip" download>Paromomycin_Verrest2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_paromomycin/Paromomycin_Verrest2023_reference/Paromomycin_Verrest2023_reference_matlab_simbio.zip" download>Paromomycin_Verrest2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_paromomycin/Paromomycin_Verrest2023_reference/Paromomycin_Verrest2023_reference_sbml.zip" download>Paromomycin_Verrest2023_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_paromomycin/Paromomycin_Verrest2023_reference/Paromomycin_Verrest2023_reference_cellml.zip" download>Paromomycin_Verrest2023_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_paromomycin/Paromomycin_Verrest2023_reference/Paromomycin_Verrest2023_reference.svg" alt="Paromomycin_Verrest2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1400 mg, single dose, first-order absorption (ka 2.05 /h, F 0.9). Doses in the paper: 1400, 7000, 10500 mg.

<dbs-fmusim paramsurl="drugs/drug_paromomycin/Paromomycin_Verrest2023_reference/Paromomycin_Verrest2023_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_paromomycin/Paromomycin_Verrest2023_reference/Paromomycin_Verrest2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Paromomycin_Verrest2023_reference_params.json` · controls `Paromomycin_Verrest2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 18:26 UTC</sub>
