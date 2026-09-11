# bisoprolol — `Bisoprolol_Cvan2016_reference`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `add_error`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** no model exists yet, so there is nothing to judge; the engineer did not exercise the covariate scenarios this record defines. Evidence: T2_covariates_not_exercised.

**Steps:**
1. Not a curation fix — scholar limitation.
2. No curator action. Run the engineer for this drug.
3. Advisory only — the base model still replicates.
4. Check the record's covariate_definitions in _interpretv2.yaml.
5. Re-run the engineer for this drug if the covariate curves are wanted.

<sub>owner: **engineer** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
not matched (stem Cvan_2016)

## Model component
<dbs-pgx drug="bisoprolol" model-id="Bisoprolol_Cvan2016_reference" status="not_modelled" stale="false" population="patients with chronic heart failure" measured-compound="bisoprolol" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (h -1 ) | `Q49` · kabs | —(suppressed) | h -1 | — | [1] / [h] | not captured | exact (1.0) | tab_0:row3:col1, tab_0:row3:col2 | — | not captured |
| CL (L/h) | `Q22` · CL | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | tab_0:row4:col1, tab_0:row4:col2 | — | not captured |
| V (L) | `Q61` · V | —(suppressed) | L | — | [l] | not captured | exact (1.0) | tab_0:row6:col1, tab_0:row6:col2 | linear_fractional on wt=31.8 | not captured |
| Additive (ng/mL) | `Q317` · add_error | —(suppressed) | ng/mL | — | [ng] / [ml] | not captured | llm (0.5) | tab_0:row20:col1, tab_0:row20:col2 | — | not captured |

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
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_bisoprolol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Cvan_2016` / `Cvan_2016::patients with chronic heart failure`)
- sim: `../../../knowledgebase/drugs/drug_bisoprolol/models/modelica/Bisoprolol_Cvan2016_patients_with_chronic_heart_failure.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_1C_enteral.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_modelica.zip" download>Bisoprolol_Cvan2016_reference_modelica.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_fmi.zip" download>Bisoprolol_Cvan2016_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_matlab.zip" download>Bisoprolol_Cvan2016_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_matlab_simbio.zip" download>Bisoprolol_Cvan2016_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_sbml.zip" download>Bisoprolol_Cvan2016_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_cellml.zip" download>Bisoprolol_Cvan2016_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
