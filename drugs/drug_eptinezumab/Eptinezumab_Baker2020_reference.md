<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;eptinezumab&quot;,&quot;href&quot;:&quot;drugs/drug_eptinezumab/&quot;},{&quot;label&quot;:&quot;Baker_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eptinezumab_Baker2020_reference&quot;,&quot;label&quot;:&quot;Baker_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# eptinezumab — `Eptinezumab_Baker2020_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `AUCt`, `Cmax`, `Cavg`, `Ctrough`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** the simulated model does not reproduce a value the paper reports. Evidence: T1_t_half_beta — expected 648.0 — got 406.94322410996085 — ratio 0.628; T1_tmax — expected 0.5 — got 0.18333333335172397 — ratio 0.3667; T1_tmax — expected 1.0 — got 0.18333333335172397 — ratio 0.1833.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Open the paper's reported table and confirm the target value and its units.
3. Compare with the transcribed value in _transcribev2.yaml for this stem.
4. If the transcription is right, the extracted parameters are suspect — check CL and volume in _interpretv2.yaml against the paper.
5. If the transcription is wrong, fix the extraction; the model rebuild follows.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Baker B; Schaeffler B; Beliveau M; Rubets I; Pederson S; Trinh M; et al. et al. (2020). Pharmacology research & perspectives 8
  ·  DOI: [10.1002/prp2.567](https://doi.org/10.1002/prp2.567)

## Model component
<dbs-pgx drug="eptinezumab" model-id="Eptinezumab_Baker2020_reference" status="needs_review" stale="false" population="patients with episodic and chronic migraine and healthy volunteers" measured-compound="eptinezumab" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC0‐12wk, mean (CV%), h·μg mL−1 | `Q19` · AUCt | 158 | h·μg mL−1 | not captured | [[h] · [µg]] / [ml] | not captured | llm (0.6) | prp2567-tbl-0002:row2:col1, prp2567-tbl-0002:row2:col2, prp2567-tbl-0002:row2:col3, prp2567-tbl-0002:row2:col4 | — | not captured |
| C max, mean (CV%), μg mL−1 | `Q32` · Cmax | 0.279 | μg mL−1 | not captured | [µg] / [ml] | not captured | llm (0.6) | prp2567-tbl-0002:row3:col1, prp2567-tbl-0002:row3:col2, prp2567-tbl-0002:row3:col3, prp2567-tbl-0002:row3:col4, prp2567-tbl-0002:row3:col5, prp2567-tbl-0002:row3:col6, prp2567-tbl-0002:row3:col7 | — | not captured |
| C avg, mean (CV%), μg mL−1 | `Q71` · Cavg | 0.0785 | μg mL−1 | not captured | [µg] / [ml] | not captured | llm (0.6) | prp2567-tbl-0002:row4:col1, prp2567-tbl-0002:row4:col2, prp2567-tbl-0002:row4:col3, prp2567-tbl-0002:row4:col4, prp2567-tbl-0002:row4:col5, prp2567-tbl-0002:row4:col6, prp2567-tbl-0002:row4:col7 | — | not captured |
| C trough, mean (CV%), μg mL−1 | `Q37` · Ctrough | 0.0232 | μg mL−1 | not captured | [µg] / [ml] | not captured | llm_confirmed (0.6) | prp2567-tbl-0002:row5:col1, prp2567-tbl-0002:row5:col2, prp2567-tbl-0002:row5:col3, prp2567-tbl-0002:row5:col4, prp2567-tbl-0002:row5:col5, prp2567-tbl-0002:row5:col6, prp2567-tbl-0002:row5:col7 | — | not captured |
| Css,avg, mean (CV%), μg mL−1 | `Q34` · Css | 0.0910 | μg mL−1 | not captured | [µg] / [ml] | not captured | llm_confirmed (0.6) | Baker_2020_table_3:row2:col1, Baker_2020_table_3:row2:col2, Baker_2020_table_3:row2:col3, Baker_2020_table_3:row2:col4, Baker_2020_table_3:row2:col5, Baker_2020_table_3:row2:col6, Baker_2020_table_3:row2:col7 | — | not captured |
| CL | `Q22` · CL | 0.0062 | L h−1 | 1.7222222222222222e-09 | L/h | not captured | exact (1.0) | Baker_2020:results_prose | — | not captured |
| central volume of distribution (Vc) | `Q61` · V | 3.64 | L | 0.00364 | L | not captured | boundary (0.8) | Baker_2020:results_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '1 (n = 4)' — extend the ontology if this is a real PK parameter (source ['prp2567-tbl-0002:row1:col1', 'prp2567-tbl-0002:row1:col2', 'prp2567-tbl-0002:row1:col3', 'prp2567-tbl-0002:row1:col4', 'prp2567-tbl-0002:row1:col5', 'prp2567-tbl-0002:row1:col6', 'Baker_2020_table_3:row0:col1', 'Baker_2020_table_3:row0:col2', 'Baker_2020_table_3:row0:col3', 'Baker_2020_table_3:row0:col4', 'Baker_2020_table_3:row0:col5', 'Baker_2020_table_3:row0:col6'])
- dropped duplicate Q19 ('AUC0‐τ, mean (CV%), h·μg mL−1', value '183') — already have one for this compound
- dropped unlinked row (NIL): 'Rac(AUCτ), mean (CV%)' — extend the ontology if this is a real PK parameter (source ['Baker_2020_table_3:row3:col1', 'Baker_2020_table_3:row3:col2', 'Baker_2020_table_3:row3:col3', 'Baker_2020_table_3:row3:col4', 'Baker_2020_table_3:row3:col5', 'Baker_2020_table_3:row3:col6', 'Baker_2020_table_3:row3:col7'])
- dropped unlinked row (NIL): 'Rac(C max), mean (CV%)' — extend the ontology if this is a real PK parameter (source ['Baker_2020_table_3:row4:col1', 'Baker_2020_table_3:row4:col2', 'Baker_2020_table_3:row4:col3', 'Baker_2020_table_3:row4:col4', 'Baker_2020_table_3:row4:col5', 'Baker_2020_table_3:row4:col6', 'Baker_2020_table_3:row4:col7'])
- salvaged Q22 ('CL'=0.0062) from results prose — parameter table was unreadable
- salvaged Q61 ('central volume of distribution (Vc)'=3.64) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=eptinezumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell prp2567-tbl-0002:row2:col5 = '17 900 (29.0)'
- unparsed cell prp2567-tbl-0002:row2:col6 = '54 500 (27.7)'
- unparsed cell prp2567-tbl-0002:row2:col7 = '164 000 (24.0)'
- unparsed cell Baker_2020_table_3:row1:col5 = '20 800 (32.1)'
- unparsed cell Baker_2020_table_3:row1:col6 = '63 100 (30.1)'
- unparsed cell Baker_2020_table_3:row1:col7 = '187 000 (25.4)'
- companion parameter table 3 transcribed (31 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 | not captured | not captured | not captured | ['prp2567-tbl-0002:row2:col1', 'prp2567-tbl-0002:row2:col2', 'prp2567-tbl-0002:row2:col3', 'prp2567-tbl-0002:row2:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['prp2567-tbl-0002:row3:col1', 'prp2567-tbl-0002:row3:col2', 'prp2567-tbl-0002:row3:col3', 'prp2567-tbl-0002:row3:col4', 'prp2567-tbl-0002:row3:col5', 'prp2567-tbl-0002:row3:col6', 'prp2567-tbl-0002:row3:col7'] |
| C5_dimension_Q34 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Baker_2020_table_3:row2:col1', 'Baker_2020_table_3:row2:col2', 'Baker_2020_table_3:row2:col3', 'Baker_2020_table_3:row2:col4', 'Baker_2020_table_3:row2:col5', 'Baker_2020_table_3:row2:col6', 'Baker_2020_table_3:row2:col7'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['prp2567-tbl-0002:row5:col1', 'prp2567-tbl-0002:row5:col2', 'prp2567-tbl-0002:row5:col3', 'prp2567-tbl-0002:row5:col4', 'prp2567-tbl-0002:row5:col5', 'prp2567-tbl-0002:row5:col6', 'prp2567-tbl-0002:row5:col7'] |
| C5_dimension_Q71 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['prp2567-tbl-0002:row4:col1', 'prp2567-tbl-0002:row4:col2', 'prp2567-tbl-0002:row4:col3', 'prp2567-tbl-0002:row4:col4', 'prp2567-tbl-0002:row4:col5', 'prp2567-tbl-0002:row4:col6', 'prp2567-tbl-0002:row4:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0062 | not captured | not captured | ['Baker_2020:results_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0062 L/h | not captured | not captured | ['Baker_2020:results_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.64 L | not captured | not captured | ['Baker_2020:results_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=eptinezumab) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 37.3 | 0.027468628355917037 | not captured | unresolved concentration unit (exp 'μg mL−1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 114 | 0.027468628355917037 | not captured | unresolved concentration unit (exp 'μg mL−1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 30 | 0.027468628355917037 | not captured | unresolved concentration unit (exp 'minutes', sim 'kg/m3') |
| T1_cmax | reference | skipped | 60 | 0.027468628355917037 | not captured | unresolved concentration unit (exp 'minutes', sim 'kg/m3') |
| T1_cmax | reference | skipped | 37 | 0.027468628355917037 | not captured | unresolved concentration unit (exp 'μg mL−1', sim 'kg/m3') |
| T1_t_half_beta | reference | fail | 648.0 | 406.94322410996085 | 0.628 | days→SI vs simulated h |
| T1_tmax | reference | fail | 0.5 | 0.18333333335172397 | 0.3667 | minutes→SI vs simulated h |
| T1_tmax | reference | fail | 1.0 | 0.18333333335172397 | 0.1833 | minutes→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_eptinezumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Baker_2020` / `Baker_2020::reference`)
- model: `../../../knowledgebase/drugs/drug_eptinezumab/models/modelica/Eptinezumab_Baker2020_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_eptinezumab/models/modelica/Eptinezumab_Baker2020_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_eptinezumab/models/modelica/Eptinezumab_Baker2020_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_modelica.zip" download>Eptinezumab_Baker2020_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_matlab.zip" download>Eptinezumab_Baker2020_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_matlab_simbio.zip" download>Eptinezumab_Baker2020_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_sbml.zip" download>Eptinezumab_Baker2020_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_cellml.zip" download>Eptinezumab_Baker2020_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference.svg" alt="Eptinezumab_Baker2020_reference diagram"><figcaption>The structure OpenModelica draws for this model, with this record's parameter values in the component labels.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C` · parameters `Eptinezumab_Baker2020_reference_params.json` · controls `Eptinezumab_Baker2020_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
