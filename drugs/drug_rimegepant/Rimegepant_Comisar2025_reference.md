<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;rimegepant&quot;,&quot;href&quot;:&quot;drugs/drug_rimegepant/&quot;},{&quot;label&quot;:&quot;Comisar_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rimegepant_Comisar2025_reference&quot;,&quot;label&quot;:&quot;Comisar_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_rimegepant/Rimegepant_Comisar2025_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Rimegepant_Comisar2025v2_reference&quot;,&quot;label&quot;:&quot;Comisar_2025_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_rimegepant/Rimegepant_Comisar2025v2_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rimegepant — `Rimegepant_Comisar2025_reference`

> ## <span class="pk-badge pk-badge--green">accepted (caveats)</span>

### Reviewer guidance

**What is wrong:** the engineer did not exercise the covariate scenarios this record defines. Evidence: T2_covariates_not_exercised

**Steps:**
1. Advisory only — the base model still replicates.
2. Check the record's covariate_definitions in _interpretv2.yaml.
3. Re-run the engineer for this drug if the covariate curves are wanted.

<sub>owner: **curator** · guidance written by playbook</sub>

## Citation
not matched (stem Comisar_2025)

## Model component
<dbs-pgx drug="rimegepant" model-id="Rimegepant_Comisar2025_reference" status="accepted_with_caveats" stale="false" population="pediatric and adult patients with migraine" measured-compound="rimegepant" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q27` · CL/F | 25.2 | L/h | 7e-06 | [l] / [h] | 32.3 | exact (1.0) | cts70360-tbl-0002:row1:col1, cts70360-tbl-0002:row1:col2 | — | not captured |
| V1/F, L | `Q290` · V1/F | 113 | L | 0.113 | [l] | 41.0 | exact (1.0) | cts70360-tbl-0002:row2:col1, cts70360-tbl-0002:row2:col2 | — | None (67.8% RSE) |
| V2/F, L | `Q82` · V2/F | 46.8 | L | 0.0468 | [l] | 25.8 | exact (1.0) | cts70360-tbl-0002:row3:col1, cts70360-tbl-0002:row3:col2 | — | not captured |
| Q/F, L/h | `Q69` · Q/F | 4.16 | L/h | 1.1555555555555556e-06 | [l] / [h] | 5.7 | exact (1.0) | cts70360-tbl-0002:row4:col1 | — | not captured |
| k tr, 1/h | `Q306` · ktr | 8.42 | 1/h | 0.002338888888888889 | [1] / [h] | 54.8 | space_fold (0.95) | cts70360-tbl-0002:row5:col1, cts70360-tbl-0002:row5:col2 | — | not captured |
| k a, 1/h | `Q49` · kabs | 3.05 | 1/h | 0.0008472222222222222 | [1] / [h] | 15.5 | space_fold (0.95) | cts70360-tbl-0002:row6:col1 | — | not captured |
| fed_on_f1 | `Q900` · fed_on_f1 | -0.331 | not captured | not captured | not captured | 6.9 | not captured (not captured) | cts70360-tbl-0002:row10:col1 | — | not captured |
| capsule_formulation_on_k_tr | `Q900` · capsule_formulation_on_k_tr | 2.19 | not captured | not captured | not captured | 22.6 | not captured (not captured) | cts70360-tbl-0002:row13:col1 | — | not captured |
| body_weight_effect_on_cl_f_and_q_f | `Q900` · body_weight_effect_on_cl_f_and_q_f | 0.575 | not captured | not captured | not captured | 14.4 | not captured (not captured) | cts70360-tbl-0002:row18:col1 | — | not captured |
| body_weight_effect_on_v1_f_and_v2_f | `Q900` · body_weight_effect_on_v1_f_and_v2_f | 1.18 | not captured | not captured | not captured | 8.3 | not captured (not captured) | cts70360-tbl-0002:row19:col1 | — | not captured |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | -0.410 | not captured | not captured | not captured | 25.9 | not captured (not captured) | cts70360-tbl-0002:row8:col1 | — | not captured |
| theta_q338_fed | `Q900` · theta_q338_fed | -0.698 | not captured | not captured | not captured | 3.9 | not captured (not captured) | cts70360-tbl-0002:row11:col1 | — | not captured |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | -0.203 | not captured | not captured | not captured | 27.6 | not captured (not captured) | cts70360-tbl-0002:row15:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q27 ('Fluconazole use on CL/F', value '-0.429') — already have one for this compound
- dropped duplicate Q27 ('Itraconazole use on CL/F', value '-0.744') — already have one for this compound
- covariate level 'Fed on F1' → Q900:fed_on_f1 = -0.331 (linear_fractional on Q27)
- relinked 'ODT on k tr' Q338 → Q306 — same-named PK parameter preferred over the PD code in a popPK record
- dropped duplicate Q306 ('ODT on k tr', value '0.470') — already have one for this compound
- covariate level 'Capsule formulation on k tr' → Q900:capsule_formulation_on_k_tr = 2.19 (linear_fractional on Q27)
- relinked 'Itraconazole use on k tr' Q338 → Q306 — same-named PK parameter preferred over the PD code in a popPK record
- dropped duplicate Q306 ('Itraconazole use on k tr', value '-0.361') — already have one for this compound
- dropped unlinked row (NIL): 'Dose effect on F1' — extend the ontology if this is a real PK parameter (source ['cts70360-tbl-0002:row16:col1'])
- relinked '10/25 mg dose effect on k tr a' Q338 → Q306 — same-named PK parameter preferred over the PD code in a popPK record
- dropped duplicate Q306 ('10/25 mg dose effect on k tr a', value '0.596') — already have one for this compound
- covariate level 'Body weight effect on CL/F and Q/F' → Q900:body_weight_effect_on_cl_f_and_q_f = 0.575 (linear_fractional on Q27)
- covariate level 'Body weight effect on V1/F and V2/F' → Q900:body_weight_effect_on_v1_f_and_v2_f = 1.18 (linear_fractional on Q27)
- dropped value-less row: 'ω1,2: CL/F:V1/F'
- dropped value-less row: 'ω1,3: CL/F:V2/F'
- covariate effect for Q338 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=rimegepant

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70360-tbl-0002:row1:col1', 'cts70360-tbl-0002:row1:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70360-tbl-0002:row2:col1', 'cts70360-tbl-0002:row2:col2'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['cts70360-tbl-0002:row5:col1', 'cts70360-tbl-0002:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cts70360-tbl-0002:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70360-tbl-0002:row4:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70360-tbl-0002:row3:col1', 'cts70360-tbl-0002:row3:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 25.2 L/h | not captured | not captured | ['cts70360-tbl-0002:row1:col1', 'cts70360-tbl-0002:row1:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 113 L | not captured | not captured | ['cts70360-tbl-0002:row2:col1', 'cts70360-tbl-0002:row2:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 46.8 L | not captured | not captured | ['cts70360-tbl-0002:row3:col1', 'cts70360-tbl-0002:row3:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=rimegepant) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_rimegepant/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Comisar_2025` / `Comisar_2025::reference`)
- model: `../../../knowledgebase/drugs/drug_rimegepant/models/modelica/Rimegepant_Comisar2025_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_rimegepant/models/modelica/Rimegepant_Comisar2025_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_rimegepant/models/modelica/Rimegepant_Comisar2025_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_rimegepant/Rimegepant_Comisar2025_reference/Rimegepant_Comisar2025_reference_modelica.zip" download>Rimegepant_Comisar2025_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_rimegepant/Rimegepant_Comisar2025_reference/Rimegepant_Comisar2025_reference_matlab.zip" download>Rimegepant_Comisar2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_rimegepant/Rimegepant_Comisar2025_reference/Rimegepant_Comisar2025_reference_matlab_simbio.zip" download>Rimegepant_Comisar2025_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_rimegepant/Rimegepant_Comisar2025_reference/Rimegepant_Comisar2025_reference_sbml.zip" download>Rimegepant_Comisar2025_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_rimegepant/Rimegepant_Comisar2025_reference/Rimegepant_Comisar2025_reference_cellml.zip" download>Rimegepant_Comisar2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_rimegepant/Rimegepant_Comisar2025_reference/Rimegepant_Comisar2025_reference.svg" alt="Rimegepant_Comisar2025_reference diagram"><figcaption>The structure OpenModelica draws for this model, with this record's parameter values in the component labels.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_rimegepant/Rimegepant_Comisar2025_reference/Rimegepant_Comisar2025_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_rimegepant/Rimegepant_Comisar2025_reference/Rimegepant_Comisar2025_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Rimegepant_Comisar2025_reference_params.json` · controls `Rimegepant_Comisar2025_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
