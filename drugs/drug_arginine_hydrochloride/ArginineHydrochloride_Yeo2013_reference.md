<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05X&quot;,&quot;href&quot;:&quot;atc/B05X.md&quot;},{&quot;label&quot;:&quot;arginine hydrochloride&quot;,&quot;href&quot;:&quot;drugs/drug_arginine_hydrochloride/&quot;},{&quot;label&quot;:&quot;Yeo_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ArginineHydrochloride_Wang2018_reference&quot;,&quot;label&quot;:&quot;Wang_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Wang2018_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ArginineHydrochloride_Yeo2013_reference&quot;,&quot;label&quot;:&quot;Yeo_2013_reference&quot;,&quot;href&quot;:&quot;drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Yeo2013_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;ArginineHydrochloride_Awan2024_reference&quot;,&quot;label&quot;:&quot;Awan_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Awan2024_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# arginine hydrochloride — `ArginineHydrochloride_Yeo2013_reference`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

## Citation
Yeo TW; Lampah DA; Rooslamiati I; Gitawati R; Tjitra E; Kenangalem E; et al. et al. (2013). PloS one 8
  ·  DOI: [10.1371/journal.pone.0069587](https://doi.org/10.1371/journal.pone.0069587)

## Model component
<dbs-pgx drug="arginine hydrochloride" model-id="ArginineHydrochloride_Yeo2013_reference" status="curated_candidate" stale="false" population="" measured-compound="arginine_hydrochloride" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 31.0 | L/h | 8.611111111111112e-06 | L/h | not captured | review (0.7) | Yeo_2013:review | — | not captured |
| V1 (L) | `Q63` · V1 | 27.0 | L | 0.027 | L | not captured | review (0.7) | Yeo_2013:review | — | not captured |
| V2 (L) | `Q64` · V2 | 21.0 | L | 0.021 | L | not captured | review (0.7) | Yeo_2013:review | — | not captured |
| Q (L/h) | `Q30` · Q | 74.0 | L/h | 2.0555555555555555e-05 | L/h | not captured | review (0.7) | Yeo_2013:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- built from REVIEW reference values (Yeo_2013) — secondary source
- volume reported by review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Yeo_2013:review'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Yeo_2013:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Yeo_2013:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Yeo_2013:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 31.0 | not captured | not captured | ['Yeo_2013:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 31 L/h | not captured | not captured | ['Yeo_2013:review'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 27 L | not captured | not captured | ['Yeo_2013:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 21 L | not captured | not captured | ['Yeo_2013:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=arginine_hydrochloride) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_arginine_hydrochloride/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yeo_2013` / `Yeo_2013::reference`)
- model: `../../../knowledgebase/drugs/drug_arginine_hydrochloride/models/modelica/ArginineHydrochloride_Yeo2013_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_arginine_hydrochloride/models/modelica/ArginineHydrochloride_Yeo2013_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_arginine_hydrochloride/models/modelica/ArginineHydrochloride_Yeo2013_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Yeo2013_reference/ArginineHydrochloride_Yeo2013_reference_modelica.zip" download>ArginineHydrochloride_Yeo2013_reference_modelica.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Yeo2013_reference/ArginineHydrochloride_Yeo2013_reference_fmi.zip" download>ArginineHydrochloride_Yeo2013_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Yeo2013_reference/ArginineHydrochloride_Yeo2013_reference_matlab.zip" download>ArginineHydrochloride_Yeo2013_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Yeo2013_reference/ArginineHydrochloride_Yeo2013_reference_matlab_simbio.zip" download>ArginineHydrochloride_Yeo2013_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Yeo2013_reference/ArginineHydrochloride_Yeo2013_reference_sbml.zip" download>ArginineHydrochloride_Yeo2013_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Yeo2013_reference/ArginineHydrochloride_Yeo2013_reference_cellml.zip" download>ArginineHydrochloride_Yeo2013_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Yeo2013_reference/ArginineHydrochloride_Yeo2013_reference.svg" alt="ArginineHydrochloride_Yeo2013_reference diagram"><figcaption>The structure OpenModelica draws for this model, with this record's parameter values in the component labels.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Yeo2013_reference/ArginineHydrochloride_Yeo2013_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Yeo2013_reference/ArginineHydrochloride_Yeo2013_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C` · parameters `ArginineHydrochloride_Yeo2013_reference_params.json` · controls `ArginineHydrochloride_Yeo2013_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
