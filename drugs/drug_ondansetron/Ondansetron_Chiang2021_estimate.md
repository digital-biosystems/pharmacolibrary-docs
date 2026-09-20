<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;ondansetron&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/&quot;},{&quot;label&quot;:&quot;Chiang_2021 \u00b7 estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ondansetron_Chiang2021v2_reference&quot;,&quot;label&quot;:&quot;Chiang_2021_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Chiang2021v2_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ondansetron_Landau2026_reference&quot;,&quot;label&quot;:&quot;Landau_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Landau2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ondansetron_Chiang2021_estimate&quot;,&quot;label&quot;:&quot;Chiang_2021_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Chiang2021_estimate.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ondansetron_Chiang2021_estimate&quot;,&quot;label&quot;:&quot;Chiang_2021_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Chiang2021_estimate.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ondansetron_Baek2015_reference&quot;,&quot;label&quot;:&quot;Baek_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Baek2015_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ondansetron_Chiang2021_shrinkage&quot;,&quot;label&quot;:&quot;Chiang_2021_shrinkage&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Chiang2021_shrinkage.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ondansetron_Chiang2021_shrinkage&quot;,&quot;label&quot;:&quot;Chiang_2021_shrinkage&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Chiang2021_shrinkage.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ondansetron_Chiang2024_reference&quot;,&quot;label&quot;:&quot;Chiang_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Chiang2024_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ondansetron_Lam2025_reference&quot;,&quot;label&quot;:&quot;Lam_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Lam2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ondansetron_de1998_reference&quot;,&quot;label&quot;:&quot;de_1998_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_de1998_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ondansetron — `Ondansetron_Chiang2021_estimate`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

**What is wrong:** the simulated model does not reproduce a value the paper reports. Evidence: T1_t_half_terminal — expected 4.9 — got 3052.784707594828 — ratio 623.0173

**Steps:**
1. Open the paper's reported table and confirm the target value and its units.
2. Compare with the transcribed value in _transcribev2.yaml for this stem.
3. If the transcription is right, the extracted parameters are suspect — check CL and volume in _interpretv2.yaml against the paper.
4. If the transcription is wrong, fix the extraction; the model rebuild follows.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Chiang MD; Frey K; Lee C; Kharasch ED; Tallchief D; Sawyer C; et al. et al. (2021). British journal of clinical pharmacology 87
  ·  DOI: [10.1111/bcp.14412](https://doi.org/10.1111/bcp.14412)

## Model component
<dbs-pgx drug="ondansetron" model-id="Ondansetron_Chiang2021_estimate" status="needs_review" stale="false" population="adults undergoing elective hip or knee arthroplasty" measured-compound="ondansetron" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 24.6 | L/h | 6.833333333333334e-06 | [l] / [h] | not captured | exact (1.0) | Chiang_2021_table_4:row1:col2 | — | not captured |
| VC (L) | `Q63` · V1 | 63.3 | L | 0.0633 | [l] | not captured | exact (1.0) | Chiang_2021_table_4:row2:col2 | — | not captured |
| Q (L/h) | `Q30` · Q | 211 | L/h | 5.861111111111111e-05 | [l] / [h] | not captured | exact (1.0) | Chiang_2021_table_4:row3:col2 | — | not captured |
| Vr (L) | `Q61` · V | 107 | L | 0.107 | [l] | not captured | llm (0.6) | Chiang_2021_table_4:row4:col2 | — | not captured |
| KP | `Q410` · Kp | 0.145 | not captured | not captured | not captured | not captured | exact (1.0) | Chiang_2021_table_4:row5:col2 | — | not captured |
| V 2 (l) | `Q64` · V2 | 108.0 | l | 0.108 | L | not captured | review_gapfill (0.7) | Lee_2016:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'B for (VC, AGE)' — extend the ontology if this is a real PK parameter (source ['Chiang_2021_table_4:row6:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ondansetron
- population split: 'estimate' subgroup of Chiang_2021 (paper reports 2 populations: estimate, shrinkage (%))
- gap-filled Q64 (V2) from Lee_2016's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 3, 4
- unparsed cell Chiang_2021_table_4:row8:col2 = '49.7%'
- unparsed cell Chiang_2021_table_4:row9:col2 = '41.9%'
- unparsed cell Chiang_2021_table_4:row10:col2 = '23.7%'
- unparsed cell Chiang_2021_table_4:row12:col2 = '19.1%'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 4.9 | 5.056 | 1.0318 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Chiang_2021_table_4:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Chiang_2021_table_4:row3:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Chiang_2021_table_4:row4:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Chiang_2021_table_4:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Lee_2016:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 24.6 | not captured | not captured | ['Chiang_2021_table_4:row1:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 24.6 L/h | not captured | not captured | ['Chiang_2021_table_4:row1:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 107 L | not captured | not captured | ['Chiang_2021_table_4:row4:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 63.3 L | not captured | not captured | ['Chiang_2021_table_4:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 108 L | not captured | not captured | ['Lee_2016:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=ondansetron) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_t_half_terminal | reference | fail | 4.9 | 3052.784707594828 | 623.0173 | h→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ondansetron/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chiang_2021` / `Chiang_2021::estimate`)
- model: `../../../knowledgebase/drugs/drug_ondansetron/models/modelica/Ondansetron_Chiang2021_estimate.mo`
- deviation: `../../../knowledgebase/drugs/drug_ondansetron/models/modelica/Ondansetron_Chiang2021_estimate.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_ondansetron/models/modelica/Ondansetron_Chiang2021_estimate.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ondansetron/Ondansetron_Chiang2021_estimate/Ondansetron_Chiang2021_estimate_modelica.zip" download>Ondansetron_Chiang2021_estimate_modelica.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ondansetron/Ondansetron_Chiang2021_estimate/Ondansetron_Chiang2021_estimate_fmi.zip" download>Ondansetron_Chiang2021_estimate_fmi.zip</a> <span class="pk-size">(4.0 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ondansetron/Ondansetron_Chiang2021_estimate/Ondansetron_Chiang2021_estimate_matlab.zip" download>Ondansetron_Chiang2021_estimate_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ondansetron/Ondansetron_Chiang2021_estimate/Ondansetron_Chiang2021_estimate_matlab_simbio.zip" download>Ondansetron_Chiang2021_estimate_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ondansetron/Ondansetron_Chiang2021_estimate/Ondansetron_Chiang2021_estimate_sbml.zip" download>Ondansetron_Chiang2021_estimate_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ondansetron/Ondansetron_Chiang2021_estimate/Ondansetron_Chiang2021_estimate_cellml.zip" download>Ondansetron_Chiang2021_estimate_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_ondansetron/Ondansetron_Chiang2021_estimate/Ondansetron_Chiang2021_estimate.svg" alt="Ondansetron_Chiang2021_estimate diagram"><figcaption>The structure OpenModelica draws for this model, with this record's parameter values in the component labels.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_ondansetron/Ondansetron_Chiang2021_estimate/Ondansetron_Chiang2021_estimate_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_ondansetron/Ondansetron_Chiang2021_estimate/Ondansetron_Chiang2021_estimate_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C` · parameters `Ondansetron_Chiang2021_estimate_params.json` · controls `Ondansetron_Chiang2021_estimate_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
