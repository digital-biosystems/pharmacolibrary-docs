<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;semaglutide&quot;,&quot;href&quot;:&quot;drugs/toxin_semaglutide/&quot;},{&quot;label&quot;:&quot;Carlsson_2018 \u00b7 base&quot;}]"></div>

# semaglutide — `Semaglutide_Carlsson2018_base`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Carlsson Petri KC; Ingwersen SH; Flint A; Zacho J; Overgaard RV et al. (2018). Diabetes therapy : research, treatment and education of diabetes and related disorders 9
  ·  DOI: [10.1007/s13300-018-0458-5](https://doi.org/10.1007/s13300-018-0458-5)

## Model component
<dbs-pgx drug="semaglutide" model-id="Semaglutide_Carlsson2018_base" status="extracted" stale="false" population="adults with type 2 diabetes" measured-compound="semaglutide" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (h-1) | `Q49` · kabs | 0.0286 | h-1 | 7.944444444444445e-06 | [1] / [h] | not captured | exact (1.0) | Carlsson_2018_table_S2:row0:col1 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 0.0480 | L/h | 1.3333333333333334e-08 | [l] / [h] | 26.6 | exact (1.0) | Carlsson_2018_table_S2:row1:col1, Carlsson_2018_table_S2:row1:col2, Carlsson_2018_table_S2:row1:col3, Carlsson_2018_table_S2:row1:col4, Carlsson_2018_table_S2:row1:col5 | — | not captured |
| V/F (L) | `Q76` · V/F | 12.5 | L | 0.0125 | [l] | 30.4 | exact (1.0) | Carlsson_2018_table_S2:row2:col1, Carlsson_2018_table_S2:row2:col2, Carlsson_2018_table_S2:row2:col3, Carlsson_2018_table_S2:row2:col4, Carlsson_2018_table_S2:row2:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'total' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'total' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'total' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'total' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Body weight, kg' — extend the ontology if this is a real PK parameter (source ['Tab2:row20:col2'])
- dropped unlinked row (NIL): 'BMI, kg/m2' — extend the ontology if this is a real PK parameter (source ['Tab2:row22:col2'])
- dropped unlinked row (NIL): 'Duration of diabetes, years' — extend the ontology if this is a real PK parameter (source ['Tab2:row24:col2'])
- dropped unlinked row (NIL): 'HbA1c, %' — extend the ontology if this is a real PK parameter (source ['Tab2:row26:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=semaglutide
- model-stage split: 'base' is the base model of Carlsson_2018 (paper reports 2 stages: base, full); same population, different model-building step
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table S2 transcribed (15 record(s), model stage 'base')
- companion parameter table S3 transcribed (67 record(s), model stage 'full')
- LLM selected parameter table(s) S2, S3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Carlsson_2018_table_S2:row1:col1', 'Carlsson_2018_table_S2:row1:col2', 'Carlsson_2018_table_S2:row1:col3', 'Carlsson_2018_table_S2:row1:col4', 'Carlsson_2018_table_S2:row1:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Carlsson_2018_table_S2:row0:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Carlsson_2018_table_S2:row2:col1', 'Carlsson_2018_table_S2:row2:col2', 'Carlsson_2018_table_S2:row2:col3', 'Carlsson_2018_table_S2:row2:col4', 'Carlsson_2018_table_S2:row2:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.048 L/h | not captured | not captured | ['Carlsson_2018_table_S2:row1:col1', 'Carlsson_2018_table_S2:row1:col2', 'Carlsson_2018_table_S2:row1:col3', 'Carlsson_2018_table_S2:row1:col4', 'Carlsson_2018_table_S2:row1:col5'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 12.5 L | not captured | not captured | ['Carlsson_2018_table_S2:row2:col1', 'Carlsson_2018_table_S2:row2:col2', 'Carlsson_2018_table_S2:row2:col3', 'Carlsson_2018_table_S2:row2:col4', 'Carlsson_2018_table_S2:row2:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_semaglutide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Carlsson_2018` / `Carlsson_2018::base`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model diagram

The structure OpenModelica draws for this model, with **this record's parameter values** in the component labels.

<img src="drugs/toxin_semaglutide/Semaglutide_Carlsson2018_base/Semaglutide_Carlsson2018_base.svg" alt="Semaglutide_Carlsson2018_base diagram" style="max-width:100%;height:auto;background:#fff;border-radius:6px;padding:8px">

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

Runs **this record's model** in your browser as WebAssembly — nothing to install. The sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited.

<dbs-fmusim paramsurl="drugs/toxin_semaglutide/Semaglutide_Carlsson2018_base/Semaglutide_Carlsson2018_base_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_semaglutide/Semaglutide_Carlsson2018_base/Semaglutide_Carlsson2018_base_sim_controls.json"></dbs-fmusim>

<sub>Template `PK_1C_enteral` · parameters `Semaglutide_Carlsson2018_base_params.json` · controls `Semaglutide_Carlsson2018_base_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
