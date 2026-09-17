<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;bisoprolol&quot;,&quot;href&quot;:&quot;drugs/drug_bisoprolol/&quot;},{&quot;label&quot;:&quot;Cvan_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bisoprolol_Cvan2016_reference&quot;,&quot;label&quot;:&quot;Cvan_2016_reference&quot;,&quot;href&quot;:&quot;drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Bisoprolol_Fontana2022_reference&quot;,&quot;label&quot;:&quot;Fontana_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_bisoprolol/Bisoprolol_Fontana2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bisoprolol_Grevel1989_reference&quot;,&quot;label&quot;:&quot;Grevel_1989_reference&quot;,&quot;href&quot;:&quot;drugs/drug_bisoprolol/Bisoprolol_Grevel1989_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bisoprolol_Momilovi2019_reference&quot;,&quot;label&quot;:&quot;Mom\u010dilovi\u0107_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_bisoprolol/Bisoprolol_Momilovi2019_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bisoprolol_Momilovi2020_reference&quot;,&quot;label&quot;:&quot;Mom\u010dilovi\u0107_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_bisoprolol/Bisoprolol_Momilovi2020_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bisoprolol_Nikolic2013_reference&quot;,&quot;label&quot;:&quot;Nikolic_2013_reference&quot;,&quot;href&quot;:&quot;drugs/drug_bisoprolol/Bisoprolol_Nikolic2013_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bisoprolol_Nikolic2016_reference&quot;,&quot;label&quot;:&quot;Nikolic_2016_reference&quot;,&quot;href&quot;:&quot;drugs/drug_bisoprolol/Bisoprolol_Nikolic2016_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bisoprolol_Nikolic2018_reference&quot;,&quot;label&quot;:&quot;Nikolic_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_bisoprolol/Bisoprolol_Nikolic2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# bisoprolol — `Bisoprolol_Cvan2016_reference`

> ## <span class="pk-badge pk-badge--green">accepted (caveats)</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `add_error`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** the engineer did not exercise the covariate scenarios this record defines. Evidence: T2_covariates_not_exercised.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Advisory only — the base model still replicates.
3. Check the record's covariate_definitions in _interpretv2.yaml.
4. Re-run the engineer for this drug if the covariate curves are wanted.

<sub>owner: **scholar** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
not matched (stem Cvan_2016)

## Model component
<dbs-pgx drug="bisoprolol" model-id="Bisoprolol_Cvan2016_reference" status="accepted_with_caveats" stale="false" population="patients with chronic heart failure" measured-compound="bisoprolol" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (h -1 ) | `Q49` · kabs | 12.2 | h -1 | 0.0033888888888888888 | [1] / [h] | not captured | exact (1.0) | tab_0:row3:col1, tab_0:row3:col2 | — | not captured |
| CL (L/h) | `Q22` · CL | 3.5 | L/h | 9.722222222222222e-07 | [l] / [h] | not captured | exact (1.0) | tab_0:row4:col1, tab_0:row4:col2 | — | not captured |
| V (L) | `Q61` · V | 3.6 | L | 0.0036000000000000003 | [l] | not captured | exact (1.0) | tab_0:row6:col1, tab_0:row6:col2 | linear_fractional on wt=31.8 | not captured |
| Additive (ng/mL) | `Q317` · add_error | 49.9 | ng/mL | not captured | [ng] / [ml] | not captured | llm (0.5) | tab_0:row20:col1, tab_0:row20:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped duplicate Q22 ('Effect of MDRD4 on CL a', value '12.8') — already have one for this compound
- dropped duplicate Q61 ('Effect of SMI on V b', value '27.1') — already have one for this compound
- dropped duplicate Q22 ('CL-V correlation', value '63.8') — already have one for this compound
- dropped unlinked row (NIL): 'Proportional (%)' — extend the ontology if this is a real PK parameter (source ['tab_0:row21:col1'])
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['tab_0:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V' from footnote/prose loose number None (source ['tab_0:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=bisoprolol

**Extraction notes:**
- unparsed cell tab_0:row2:col3 = 'Mean (95 % CI)'
- unparsed cell tab_0:row3:col3 = '2.50 (1.61-3.81)'
- unparsed cell tab_0:row4:col3 = '10.4 (9.8-11.1)'
- unparsed cell tab_0:row5:col3 = '0.614 (0.416-0.778)'
- unparsed cell tab_0:row6:col3 = '218 (203-238)'
- unparsed cell tab_0:row7:col3 = '0.00563 (0.00146-0.00983)'
- unparsed cell tab_0:row8:col3 = '0.718 (0.319-1.216)'
- unparsed cell tab_0:row10:col1 = '94.4 % (46.7 %)'
- unparsed cell tab_0:row10:col3 = '101.0 % (18.6 %-248.0 %)'
- unparsed cell tab_0:row11:col1 = '13.2 % (37.8 %)'
- unparsed cell tab_0:row11:col3 = '13.9 % (2.0 %-21.3 %)'
- unparsed cell tab_0:row12:col1 = '13.5 % (23.9 %)'
- unparsed cell tab_0:row12:col3 = '13.4 % (5.6 %-21.5 %)'
- unparsed cell tab_0:row15:col1 = '70.0 % (62.7 %)'
- unparsed cell tab_0:row15:col3 = '74.9 % (20.4 %-156.1 %)'
- unparsed cell tab_0:row16:col1 = '26.1 % (15.3 %)'
- unparsed cell tab_0:row16:col3 = '25.3 % (18.4 %-33.1 %)'
- unparsed cell tab_0:row17:col1 = '10.2 % (48.5 %)'
- unparsed cell tab_0:row17:col3 = '10.4 % (5.2 %-16.2 %)'
- unparsed cell tab_0:row19:col1 = '(27.7 %)'
- unparsed cell tab_0:row20:col3 = '0.510 (0.207-0.949)'
- unparsed cell tab_0:row21:col2 = '14.2 %'
- unparsed cell tab_0:row21:col3 = '4.64 (3.33-5.96)'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col2'] |
| C5_dimension_Q317 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_0:row20:col1', 'tab_0:row20:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_0:row3:col1', 'tab_0:row3:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row6:col1', 'tab_0:row6:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.5 | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_output_variable | not captured | pass | C_central (measured=bisoprolol) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_bisoprolol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Cvan_2016` / `Cvan_2016::reference`)
- model: `../../../knowledgebase/drugs/drug_bisoprolol/models/modelica/Bisoprolol_Cvan2016_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_bisoprolol/models/modelica/Bisoprolol_Cvan2016_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_bisoprolol/models/modelica/Bisoprolol_Cvan2016_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model diagram

The structure OpenModelica draws for this model, with **this record's parameter values** in the component labels.

<img src="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference.svg" alt="Bisoprolol_Cvan2016_reference diagram" style="max-width:100%;height:auto;background:#fff;border-radius:6px;padding:8px">

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_1C_enteral.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_modelica.zip" download>Bisoprolol_Cvan2016_reference_modelica.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_fmi.zip" download>Bisoprolol_Cvan2016_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_matlab.zip" download>Bisoprolol_Cvan2016_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_matlab_simbio.zip" download>Bisoprolol_Cvan2016_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_sbml.zip" download>Bisoprolol_Cvan2016_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_cellml.zip" download>Bisoprolol_Cvan2016_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

Runs **this record's model** in your browser as WebAssembly — nothing to install. The sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited.

<dbs-fmusim paramsurl="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_sim_controls.json"></dbs-fmusim>

<sub>Template `PK_1C_enteral` · parameters `Bisoprolol_Cvan2016_reference_params.json` · controls `Bisoprolol_Cvan2016_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
