<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;oxymorphone&quot;,&quot;href&quot;:&quot;drugs/drug_oxymorphone/&quot;},{&quot;label&quot;:&quot;Sadiq_2013 \u00b7 original_data_set&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxymorphone_Sadiq2013_original_data_set&quot;,&quot;label&quot;:&quot;Sadiq_2013_original_data_set&quot;,&quot;href&quot;:&quot;drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_original_data_set.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Oxymorphone_Sadiq2013_bootstrap_resampling&quot;,&quot;label&quot;:&quot;Sadiq_2013_bootstrap_resampling&quot;,&quot;href&quot;:&quot;drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_bootstrap_resampling.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# oxymorphone — `Oxymorphone_Sadiq2013_original_data_set`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** T1_t_half_terminal
**How to address:** Open the paper's reported table and confirm the target value and its units.
<sub>owner: **scholar**</sub>

## Citation
Sadiq MW; Boström E; Keizer R; Björkman S; Hammarlund-Udenaes M et al. (2013). Journal of pharmaceutical sciences 102
  ·  DOI: [10.1002/jps.23492](https://doi.org/10.1002/jps.23492)

## Model component
<dbs-pgx drug="oxymorphone" model-id="Oxymorphone_Sadiq2013_original_data_set" status="needs_review" stale="false" population="male Sprague-Dawley rats" measured-compound="oxymorphone" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (mL/min) | `Q22` · CL | 54.5 | mL/min | 9.083333333333332e-07 | [ml] / [min] | not captured | exact (1.0) | tab_1:row2:col1, tab_1:row2:col4 | — | not captured |
| V c (mL) | `Q61` · V | 1170 | mL | 0.00117 | [ml] | not captured | llm (0.6) | tab_1:row3:col1, tab_1:row3:col2, tab_1:row3:col4 | — | not captured |
| Q (mL/min) | `Q30` · Q | 5.74 | mL/min | 9.566666666666666e-08 | [ml] / [min] | not captured | exact (1.0) | tab_1:row4:col1, tab_1:row4:col2, tab_1:row4:col4 | — | not captured |
| Fu (%) | `Q46` · fu | 0.49 | not captured | not captured | not captured | not captured | exact (1.0) | tab_1:row6:col1, tab_1:row6:col2, tab_1:row6:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q30 ('Q av (mL/min)', value '56.6') — already have one for this compound
- dropped unlinked row (NIL): 'REC blood (%)' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col1', 'tab_1:row7:col2', 'tab_1:row7:col4'])
- dropped unlinked row (NIL): 'REC brain (%)' — extend the ontology if this is a real PK parameter (source ['tab_1:row8:col1', 'tab_1:row8:col2', 'tab_1:row8:col4'])
- dropped duplicate Q22 ('CL in (mL/min)', value '0.123') — already have one for this compound
- dropped unlinked row (NIL): 'K p,uu' — extend the ontology if this is a real PK parameter (source ['tab_1:row10:col1', 'tab_1:row10:col2', 'tab_1:row10:col4'])
- dropped PD-category row 'Baseline effect (s)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row11:col1', 'tab_1:row11:col2', 'tab_1:row11:col4'])
- dropped PD-category row 'E max (s)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row12:col1', 'tab_1:row12:col4'])
- dropped PD-category row 'EC 50 (ng/mL)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row13:col1', 'tab_1:row13:col4'])
- dropped duplicate Q22 ('ω CL', value '0.030') — already have one for this compound
- dropped duplicate Q63 ('ω Vc', value '0.036') — already have one for this compound
- routed 'ω fu' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω Base' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped PD-category row 'ω EC50' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row19:col1', 'tab_1:row19:col2', 'tab_1:row19:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oxymorphone
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V c (mL)' is the general volume)
- population split: 'original data set' subgroup of Sadiq_2013 (paper reports 2 populations: bootstrap resampling, original data set)

**Extraction notes:**
- unparsed cell tab_1:row2:col2 = '8 .3'
- unparsed cell tab_1:row2:col3 = '5 4 .1'
- unparsed cell tab_1:row4:col3 = '5 .2'
- unparsed cell tab_1:row5:col2 = '2 4 .6'
- unparsed cell tab_1:row5:col3 = '5 2 .3'
- unparsed cell tab_1:row6:col3 = '0 .49'
- unparsed cell tab_1:row9:col3 = '0 .13'
- unparsed cell tab_1:row10:col3 = '1 .9'
- unparsed cell tab_1:row11:col3 = '5 .27'
- unparsed cell tab_1:row12:col2 = '7 4'
- unparsed cell tab_1:row12:col3 = '4 8 .6'
- unparsed cell tab_1:row13:col2 = '5 1 .2'
- unparsed cell tab_1:row16:col3 = '0 .027'
- unparsed cell tab_1:row17:col3 = '0 .32'
- unparsed cell tab_1:row18:col3 = '0 .02'
- unparsed cell tab_1:row19:col3 = '0 .042'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 14.0 | 14.88 | 1.0629 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row2:col1', 'tab_1:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 54.5 | not captured | not captured | ['tab_1:row2:col1', 'tab_1:row2:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.27 L/h | not captured | not captured | ['tab_1:row2:col1', 'tab_1:row2:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.17 L | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=oxymorphone) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_t_half_terminal | reference | fail | 0.23333333333333334 | 1.0275562803018619 | 4.4038 | min→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_oxymorphone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sadiq_2013` / `Sadiq_2013::original_data_set`)
- model: `../../../knowledgebase/drugs/drug_oxymorphone/models/modelica/Oxymorphone_Sadiq2013_original_data_set.mo`
- deviation: `../../../knowledgebase/drugs/drug_oxymorphone/models/modelica/Oxymorphone_Sadiq2013_original_data_set.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_oxymorphone/models/modelica/Oxymorphone_Sadiq2013_original_data_set.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_original_data_set/Oxymorphone_Sadiq2013_original_data_set_modelica.zip" download>Oxymorphone_Sadiq2013_original_data_set_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_original_data_set/Oxymorphone_Sadiq2013_original_data_set_fmi.zip" download>Oxymorphone_Sadiq2013_original_data_set_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_original_data_set/Oxymorphone_Sadiq2013_original_data_set_matlab.zip" download>Oxymorphone_Sadiq2013_original_data_set_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_original_data_set/Oxymorphone_Sadiq2013_original_data_set_matlab_simbio.zip" download>Oxymorphone_Sadiq2013_original_data_set_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_original_data_set/Oxymorphone_Sadiq2013_original_data_set_sbml.zip" download>Oxymorphone_Sadiq2013_original_data_set_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_original_data_set/Oxymorphone_Sadiq2013_original_data_set_cellml.zip" download>Oxymorphone_Sadiq2013_original_data_set_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_original_data_set/Oxymorphone_Sadiq2013_original_data_set.svg" alt="Oxymorphone_Sadiq2013_original_data_set diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v25.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_original_data_set/Oxymorphone_Sadiq2013_original_data_set_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_original_data_set/Oxymorphone_Sadiq2013_original_data_set_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C` · parameters `Oxymorphone_Sadiq2013_original_data_set_params.json` · controls `Oxymorphone_Sadiq2013_original_data_set_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-08-28 06:48 UTC</sub>
