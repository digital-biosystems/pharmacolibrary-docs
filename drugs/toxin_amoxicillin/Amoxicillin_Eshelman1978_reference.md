<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;amoxicillin&quot;,&quot;href&quot;:&quot;drugs/toxin_amoxicillin/&quot;},{&quot;label&quot;:&quot;Eshelman_1978 \u00b7 healthy adults&quot;}]"></div>

# amoxicillin — `Amoxicillin_Eshelman1978_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span>

### Reviewer guidance

**What is wrong:** no model exists yet, so there is nothing to judge

**Steps:**
1. No curator action. Run the engineer for this drug.

<sub>owner: **engineer** · guidance written by playbook</sub>

> ⚠️ **STALE** — review status `not_modelled` (reviewed 2026-09-11 08:46:40.328763+00:00) predates the upstream re-run (2026-09-16 16:36:48.081454+00:00). Current validate status: `extracted`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Eshelman FN; Spyker DA et al. (1978). Antimicrobial agents and chemotherapy 14
  ·  DOI: [10.1128/AAC.14.4.539](https://doi.org/10.1128/AAC.14.4.539)

## Model component
<dbs-pgx drug="amoxicillin" model-id="Amoxicillin_Eshelman1978_reference" status="extracted" stale="true" population="healthy adults" measured-compound="amoxicillin and ampicillin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Lode (7) | `Q32` · Cmax | 58.0 | not captured | not captured | not captured | not captured | llm (0.6) | tab_1:row8:col2, tab_1:row8:col3, tab_1:row8:col4, tab_1:row8:col5, tab_1:row8:col6, tab_1:row8:col7, tab_1:row8:col8, tab_1:row8:col9 | — | not captured |
| Cl | `Q22` · CL | 0.33 | L/h/kg | 6.4166666666666665e-06 | L/h | not captured | review_gapfill (0.7) | Bardhi_2026:review | — | not captured |
| Vd | `Q61` · V | 0.44 | L/kg | 0.0308 | L | not captured | review_gapfill (0.7) | Bardhi_2026:review | — | not captured |
| ka (h−1) | `Q49` · kabs | 0.17 | h−1 | 4.722222222222223e-05 | 1/h | not captured | review_gapfill (0.7) | Baklouti_2026:review | — | not captured |
| T lagpo | `Q83` · tlag | 0.25 | h | 900.0 | h | not captured | review_gapfill (0.7) | Dubbelboer_2025:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- dropped unlinked row (NIL): 'Philipson et al.' — extend the ontology if this is a real PK parameter (source ['tab_1:row5:col2', 'tab_1:row5:col3', 'tab_1:row5:col4', 'tab_1:row5:col5', 'tab_1:row5:col6', 'tab_1:row5:col7', 'tab_1:row5:col8', 'tab_1:row5:col9'])
- dropped unlinked row (NIL): 'Gordon et al. (3)' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col2', 'tab_1:row7:col3', 'tab_1:row7:col5', 'tab_1:row7:col6', 'tab_1:row7:col7'])
- dropped unlinked row (NIL): 'Neu (8)' — extend the ontology if this is a real PK parameter (source ['tab_1:row9:col2', 'tab_1:row9:col3', 'tab_1:row9:col5', 'tab_1:row9:col6', 'tab_1:row9:col7', 'tab_1:row9:col9'])
- dropped unlinked row (NIL): 'Neu and Winshel 21 F' — extend the ontology if this is a real PK parameter (source ['tab_1:row11:col1', 'tab_1:row11:col2', 'tab_1:row11:col4', 'tab_1:row11:col7'])
- dropped unlinked row (NIL): '(9)' — extend the ontology if this is a real PK parameter (source ['tab_1:row12:col2', 'tab_1:row12:col3', 'tab_1:row12:col5', 'tab_1:row12:col8'])
- dropped unlinked row (NIL): 'Croydon and' — extend the ontology if this is a real PK parameter (source ['tab_1:row13:col2', 'tab_1:row13:col3', 'tab_1:row13:col5', 'tab_1:row13:col8'])
- dropped unlinked row (NIL): 'Kirby et al. (4)' — extend the ontology if this is a real PK parameter (source ['tab_1:row15:col2', 'tab_1:row15:col3', 'tab_1:row15:col5', 'tab_1:row15:col6', 'tab_1:row15:col7'])
- dropped unlinked row (NIL): 'Vitti et al. (12)' — extend the ontology if this is a real PK parameter (source ['tab_1:row16:col2', 'tab_1:row16:col3', 'tab_1:row16:col4', 'tab_1:row16:col7'])
- dropped unlinked row (NIL): 'Welling et al. (13) 6 Fc' — extend the ontology if this is a real PK parameter (source ['tab_1:row17:col1', 'tab_1:row17:col2', 'tab_1:row17:col3', 'tab_1:row17:col4', 'tab_1:row17:col5', 'tab_1:row17:col6', 'tab_1:row17:col7', 'tab_1:row17:col8'])
- dropped unlinked row (NIL): 'This study' — extend the ontology if this is a real PK parameter (source ['tab_1:row20:col2', 'tab_1:row20:col3', 'tab_1:row20:col4', 'tab_1:row20:col5', 'tab_1:row20:col7', 'tab_1:row20:col8'])
- table mostly unlinked (10/11 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amoxicillin and ampicillin
- status held at route_to_review — not promoted
- gap-filled Q22 (CL) from Bardhi_2026's review values (primary lacked it)
- gap-filled Q61 (V) from Bardhi_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Baklouti_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Dubbelboer_2025's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_1:row5:col1 = '11 F'
- unparsed cell tab_1:row7:col1 = '8 F'
- unparsed cell tab_1:row7:col4 = '50% amox'
- unparsed cell tab_1:row7:col8 = '2x amp 60.2'
- unparsed cell tab_1:row8:col1 = '13 F'
- unparsed cell tab_1:row9:col1 = '8 F'
- unparsed cell tab_1:row11:col5 = '7.6 2'
- unparsed cell tab_1:row12:col1 = '8 F'
- unparsed cell tab_1:row12:col6 = '8.3 2'
- unparsed cell tab_1:row13:col1 = '12 F'
- unparsed cell tab_1:row13:col6 = '10.8 2'
- unparsed cell tab_1:row15:col1 = '8 F'
- unparsed cell tab_1:row15:col4 = '50% amox'
- unparsed cell tab_1:row15:col8 = '2x amp 60'
- unparsed cell tab_1:row16:col1 = '8 NF'
- unparsed cell tab_1:row16:col6 = '7.3 2.4'
- unparsed cell tab_1:row20:col1 = '16 F'
- unparsed cell tab_1:row20:col6 = '8.9 2.1'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Bardhi_2026:review'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Baklouti_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Bardhi_2026:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Dubbelboer_2025:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.33 | not captured | not captured | ['Bardhi_2026:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 23.1 L/h | not captured | not captured | ['Bardhi_2026:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 30.8 L | not captured | not captured | ['Bardhi_2026:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=amoxicillin and ampicillin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amoxicillin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Eshelman_1978` / `Eshelman_1978::healthy adults`)
- sim: `../../../knowledgebase/drugs/drug_amoxicillin/models/modelica/Amoxicillin_Eshelman1978_healthy_adults.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model diagram

The structure OpenModelica draws for this model, with **this record's parameter values** in the component labels.

<img src="drugs/toxin_amoxicillin/Amoxicillin_Eshelman1978_reference/Amoxicillin_Eshelman1978_reference.svg" alt="Amoxicillin_Eshelman1978_reference diagram" style="max-width:100%;height:auto;background:#fff;border-radius:6px;padding:8px">

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

<dbs-fmusim paramsurl="drugs/toxin_amoxicillin/Amoxicillin_Eshelman1978_reference/Amoxicillin_Eshelman1978_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_amoxicillin/Amoxicillin_Eshelman1978_reference/Amoxicillin_Eshelman1978_reference_sim_controls.json"></dbs-fmusim>

<sub>Template `PK_1C_enteral` · parameters `Amoxicillin_Eshelman1978_reference_params.json` · controls `Amoxicillin_Eshelman1978_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
