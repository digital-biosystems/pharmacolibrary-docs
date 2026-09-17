<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;heparin&quot;,&quot;href&quot;:&quot;drugs/drug_heparin/&quot;},{&quot;label&quot;:&quot;Lanoisel\u00e9e_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Heparin_GouinThibault2024_reference&quot;,&quot;label&quot;:&quot;Gouin-Thibault_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_heparin/Heparin_GouinThibault2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Heparin_Lanoisele2026_reference&quot;,&quot;label&quot;:&quot;Lanoisel\u00e9e_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_heparin/Heparin_Lanoisele2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# heparin — `Heparin_Lanoisele2026_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

**What is wrong:** the simulated model does not reproduce a value the paper reports; the model was built differently from what the record describes. Evidence: T1_t_half_terminal — expected 0.05 — got 8.837973973453112 — ratio 176.7595; T3_param_coverage — expected 4 scholar param(s) emitted or defaulted — got 3 covered

**Steps:**
1. Open the paper's reported table and confirm the target value and its units.
2. Compare with the transcribed value in _transcribev2.yaml for this stem.
3. If the transcription is right, the extracted parameters are suspect — check CL and volume in _interpretv2.yaml against the paper.
4. If the transcription is wrong, fix the extraction; the model rebuild follows.
5. Open the emitted .mo and compare its base class and parameters with the record.
6. Check the .deviation.json beside it for what the engineer defaulted or assumed.

<sub>owner: **engineer** · guidance written by playbook</sub>

## Citation
Lanoiselée J; Gibert A; Gouin-Thibault I; Mansour A; Pontis A; Morizot C; et al. et al. (2026). British journal of anaesthesia 136
  ·  DOI: [10.1016/j.bja.2025.11.057](https://doi.org/10.1016/j.bja.2025.11.057)

## Model component
<dbs-pgx drug="heparin" model-id="Heparin_Lanoisele2026_reference" status="needs_review" stale="false" population="adults undergoing cardiopulmonary bypass" measured-compound="unfractionated heparin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| UFH clearance | `Q22` · CL | —(suppressed) | L h -1 | — | L/h | not captured | boundary (0.8) | Lanoiselée_2026:other_prose | — | not captured |
| intercompartmental clearance | `Q30` · Q | —(suppressed) | L h -1 | — | L/h | not captured | exact (1.0) | Lanoiselée_2026:other_prose | — | not captured |
| V (mL)* | `Q61` · V | —(suppressed) | mL | — | L | not captured | review_gapfill (0.7) | Gouin-Thibault_2024:review | — | not captured |
| Ka (h -1 ) | `Q49` · kabs | —(suppressed) | h -1 | — | 1/h | not captured | review_gapfill (0.7) | Gouin-Thibault_2024:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): 'Patients, n' — extend the ontology if this is a real PK parameter (source ['tab_0:row1:col1'])
- dropped unlinked row (NIL): 'Male, n (%)' — extend the ontology if this is a real PK parameter (source ['tab_0:row4:col1'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['tab_0:row6:col1'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['tab_0:row7:col1'])
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['tab_0:row8:col1'])
- dropped unlinked row (NIL): 'Previous cardiac surgery, n (%)' — extend the ontology if this is a real PK parameter (source ['tab_0:row9:col1'])
- dropped unlinked row (NIL): 'Minimally invasive, n (%)' — extend the ontology if this is a real PK parameter (source ['tab_0:row10:col1'])
- dropped unlinked row (NIL): 'CABG' — extend the ontology if this is a real PK parameter (source ['tab_0:row12:col1'])
- dropped unlinked row (NIL): 'Valve' — extend the ontology if this is a real PK parameter (source ['tab_0:row13:col1'])
- dropped unlinked row (NIL): 'CABG + valve' — extend the ontology if this is a real PK parameter (source ['tab_0:row14:col1'])
- dropped unlinked row (NIL): 'Heparin rebound, n (%)' — extend the ontology if this is a real PK parameter (source ['tab_0:row29:col1'])
- dropped unlinked row (NIL): '0 (insignificant)' — extend the ontology if this is a real PK parameter (source ['tab_0:row34:col1'])
- dropped unlinked row (NIL): '1 (mild)' — extend the ontology if this is a real PK parameter (source ['tab_0:row35:col1'])
- dropped unlinked row (NIL): '2 (moderate)' — extend the ontology if this is a real PK parameter (source ['tab_0:row36:col1'])
- dropped unlinked row (NIL): '3 (severe)' — extend the ontology if this is a real PK parameter (source ['tab_0:row37:col1'])
- dropped unlinked row (NIL): '4 (massive)' — extend the ontology if this is a real PK parameter (source ['tab_0:row38:col1'])
- table mostly unlinked (16/16 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q22 ('UFH clearance'=1.5) from results prose — parameter table was unreadable
- salvaged Q30 ('intercompartmental clearance'=0.29) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=unfractionated heparin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- gap-filled Q61 (V) from Gouin-Thibault_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Gouin-Thibault_2024's review values (primary lacked it)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Gouin-Thibault_2024:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Gouin-Thibault_2024:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.5 | not captured | not captured | ['Lanoiselée_2026:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.5 L/h | not captured | not captured | ['Lanoiselée_2026:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.66 L | not captured | not captured | ['Gouin-Thibault_2024:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=unfractionated heparin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 4 scholar param(s) emitted or defaulted | 3 covered | not captured | neither emitted nor in defaulted[]: ['Q'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_alpha | reference | skipped | 3.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | fail | 0.05 | 8.837973973453112 | 176.7595 | min→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_heparin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lanoiselée_2026` / `Lanoiselée_2026::reference`)
- model: `../../../knowledgebase/drugs/drug_heparin/models/modelica/Heparin_Lanoisele2026_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_heparin/models/modelica/Heparin_Lanoisele2026_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_heparin/models/modelica/Heparin_Lanoisele2026_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_heparin/Heparin_Lanoisele2026_reference/Heparin_Lanoisele2026_reference_modelica.zip" download>Heparin_Lanoisele2026_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_heparin/Heparin_Lanoisele2026_reference/Heparin_Lanoisele2026_reference_fmi.zip" download>Heparin_Lanoisele2026_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_heparin/Heparin_Lanoisele2026_reference/Heparin_Lanoisele2026_reference_matlab.zip" download>Heparin_Lanoisele2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_heparin/Heparin_Lanoisele2026_reference/Heparin_Lanoisele2026_reference_matlab_simbio.zip" download>Heparin_Lanoisele2026_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_heparin/Heparin_Lanoisele2026_reference/Heparin_Lanoisele2026_reference_sbml.zip" download>Heparin_Lanoisele2026_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_heparin/Heparin_Lanoisele2026_reference/Heparin_Lanoisele2026_reference_cellml.zip" download>Heparin_Lanoisele2026_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_heparin/Heparin_Lanoisele2026_reference/Heparin_Lanoisele2026_reference.svg" alt="Heparin_Lanoisele2026_reference diagram"><figcaption>The structure OpenModelica draws for this model, with this record's parameter values in the component labels.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_heparin/Heparin_Lanoisele2026_reference/Heparin_Lanoisele2026_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_heparin/Heparin_Lanoisele2026_reference/Heparin_Lanoisele2026_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Heparin_Lanoisele2026_reference_params.json` · controls `Heparin_Lanoisele2026_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
