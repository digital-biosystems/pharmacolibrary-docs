<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;epoprostenol&quot;,&quot;href&quot;:&quot;drugs/drug_epoprostenol/&quot;},{&quot;label&quot;:&quot;Nicolas_2012 \u00b7 reference&quot;}]"></div>

# epoprostenol — `Epoprostenol_Nicolas2012_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

**What is wrong:** the simulated model does not reproduce a value the paper reports; the engineer's deviations are not documented and quantified; the engineer did not exercise the covariate scenarios this record defines. Evidence: T1_t_half_terminal — expected 0.25 — got 1.046872359864208 — ratio 4.1875; T1_t_half_terminal — expected 0.22 — got 1.046872359864208 — ratio 4.7585; T2_covariates_not_exercised; T6_deviations — got defaulted_parameters: structural deviation not quantified

**Steps:**
1. Open the paper's reported table and confirm the target value and its units.
2. Compare with the transcribed value in _transcribev2.yaml for this stem.
3. If the transcription is right, the extracted parameters are suspect — check CL and volume in _interpretv2.yaml against the paper.
4. If the transcription is wrong, fix the extraction; the model rebuild follows.
5. Read the .deviation.json and confirm each deviation names what changed and why.
6. Anything undocumented needs the engineer, not a curator.

<sub>owner: **scholar** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `epoprostenol`, measured `6-keto-prostacyclin F1a`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Nicolas LB; Krause A; Gutierrez MM; Dingemanse J et al. (2012). British journal of clinical pharmacology 74
  ·  DOI: [10.1111/j.1365-2125.2012.04301.x](https://doi.org/10.1111/j.1365-2125.2012.04301.x)

## Model component
<dbs-pgx drug="epoprostenol" model-id="Epoprostenol_Nicolas2012_reference" status="needs_review" stale="false" population="healthy male subjects" measured-compound="6-keto-prostacyclin F1a" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (l h -1 ) | `Q22` · CL | —(suppressed) | l h -1 | — | [l] / [h] | 3.61 | exact (1.0) | Nicolas_2012_table_1:row0:col1, Nicolas_2012_table_1:row0:col2, Nicolas_2012_table_1:row0:col3 | — | not captured |
| V (l) | `Q61` · V | —(suppressed) | l | — | [l] | 12.12 | exact (1.0) | Nicolas_2012_table_1:row1:col1, Nicolas_2012_table_1:row1:col2, Nicolas_2012_table_1:row1:col3 | — | not captured |
| theta_q44_food | `Q900` · theta_q44_food | —(suppressed) | not captured | — | not captured | 3.41 | not captured (not captured) | Nicolas_2012_table_1:row2:col1, Nicolas_2012_table_1:row2:col2, Nicolas_2012_table_1:row2:col3 | — | not captured |
| theta_q44_food | `Q900` · theta_q44_food | —(suppressed) | not captured | — | not captured | 50.98 | not captured (not captured) | Nicolas_2012_table_1:row3:col1, Nicolas_2012_table_1:row3:col2, Nicolas_2012_table_1:row3:col3 | — | not captured |
| theta_q83_food | `Q900` · theta_q83_food | —(suppressed) | not captured | — | not captured | 11.33 | not captured (not captured) | Nicolas_2012_table_1:row4:col1, Nicolas_2012_table_1:row4:col2, Nicolas_2012_table_1:row4:col3 | — | not captured |
| k a | `Q49` · kabs | —(suppressed) | 1/h | — | 1/h | not captured | review_gapfill (0.7) | Axelsen_2024:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): 'PK parameters' — extend the ontology if this is a real PK parameter (source ['tab_1:row2:col1', 'tab_1:row2:col2'])
- covariate effect for Q44 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q83 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=6-keto-prostacyclin F1a
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Axelsen_2024's review values (primary lacked it)

**Extraction notes:**
- companion parameter table 1 transcribed (15 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 0.25 | 0.194 | 0.776 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Nicolas_2012_table_1:row0:col1', 'Nicolas_2012_table_1:row0:col2', 'Nicolas_2012_table_1:row0:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Axelsen_2024:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Nicolas_2012_table_1:row1:col1', 'Nicolas_2012_table_1:row1:col2', 'Nicolas_2012_table_1:row1:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 84.92 | not captured | not captured | ['Nicolas_2012_table_1:row0:col1', 'Nicolas_2012_table_1:row0:col2', 'Nicolas_2012_table_1:row0:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 84.9 L/h | not captured | not captured | ['Nicolas_2012_table_1:row0:col1', 'Nicolas_2012_table_1:row0:col2', 'Nicolas_2012_table_1:row0:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 23.7 L | not captured | not captured | ['Nicolas_2012_table_1:row1:col1', 'Nicolas_2012_table_1:row1:col2', 'Nicolas_2012_table_1:row1:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_output_variable | not captured | pass | C_central (measured=6-keto-prostacyclin F1a) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: structural deviation not quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | fail | 0.25 | 1.046872359864208 | 4.1875 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.22 | 1.046872359864208 | 4.7585 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.08 | 1.046872359864208 | 0.9693 | h→SI vs simulated h |
| T1_tmax | reference | skipped | not captured | 0.6758245048693737 | not captured | non-numeric value |
| T1_tmax | reference | skipped | not captured | 0.6758245048693737 | not captured | non-numeric value |
| T1_tmax | reference | skipped | not captured | 0.6758245048693737 | not captured | non-numeric value |
| T1_tmax | reference | skipped | not captured | 0.6758245048693737 | not captured | non-numeric value |
| T1_tmax | reference | skipped | not captured | 0.6758245048693737 | not captured | non-numeric value |
| T1_tmax | reference | skipped | not captured | 0.6758245048693737 | not captured | non-numeric value |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_epoprostenol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Nicolas_2012` / `Nicolas_2012::reference`)
- model: `../../../knowledgebase/drugs/drug_epoprostenol/models/modelica/Epoprostenol_Nicolas2012_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_epoprostenol/models/modelica/Epoprostenol_Nicolas2012_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_epoprostenol/models/modelica/Epoprostenol_Nicolas2012_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model diagram

The structure OpenModelica draws for this model, with **this record's parameter values** in the component labels.

<img src="drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference/Epoprostenol_Nicolas2012_reference.svg" alt="Epoprostenol_Nicolas2012_reference diagram" style="max-width:100%;height:auto;background:#fff;border-radius:6px;padding:8px">

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_1C_enteral.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference/Epoprostenol_Nicolas2012_reference_modelica.zip" download>Epoprostenol_Nicolas2012_reference_modelica.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference/Epoprostenol_Nicolas2012_reference_fmi.zip" download>Epoprostenol_Nicolas2012_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference/Epoprostenol_Nicolas2012_reference_matlab.zip" download>Epoprostenol_Nicolas2012_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference/Epoprostenol_Nicolas2012_reference_matlab_simbio.zip" download>Epoprostenol_Nicolas2012_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference/Epoprostenol_Nicolas2012_reference_sbml.zip" download>Epoprostenol_Nicolas2012_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference/Epoprostenol_Nicolas2012_reference_cellml.zip" download>Epoprostenol_Nicolas2012_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

Runs **this record's model** in your browser as WebAssembly — nothing to install. The sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited.

<dbs-fmusim paramsurl="drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference/Epoprostenol_Nicolas2012_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference/Epoprostenol_Nicolas2012_reference_sim_controls.json"></dbs-fmusim>

<sub>Template `PK_1C_enteral` · parameters `Epoprostenol_Nicolas2012_reference_params.json` · controls `Epoprostenol_Nicolas2012_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
