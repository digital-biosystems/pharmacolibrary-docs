<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;luspatercept&quot;,&quot;href&quot;:&quot;drugs/drug_luspatercept/&quot;},{&quot;label&quot;:&quot;Chen_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Luspatercept_Chen2020_reference&quot;,&quot;label&quot;:&quot;Chen_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_luspatercept/Luspatercept_Chen2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Luspatercept_Chen2021_reference&quot;,&quot;label&quot;:&quot;Chen_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_luspatercept/Luspatercept_Chen2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# luspatercept — `Luspatercept_Chen2020_reference`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

## Citation
Chen N; Kassir N; Laadem A; Maxwell SE; Sriraman P; Giuseppi AC; et al. et al. (2020). CPT: pharmacometrics & systems pharmacology 9
  ·  DOI: [10.1002/psp4.12521](https://doi.org/10.1002/psp4.12521)

## Model component
<dbs-pgx drug="luspatercept" model-id="Luspatercept_Chen2020_reference" status="curated_candidate" stale="false" population="anemic patients with myelodysplastic syndromes" measured-compound="luspatercept" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/day | `Q27` · CL/F | 0.469 | L/day | 5.42824074074074e-09 | [l] / [d] | not captured | exact (1.0) | psp412521-tbl-0002:row3:col1, psp412521-tbl-0002:row3:col2 | — | not captured |
| V1/F, L | `Q76` · V/F | 9.20 | L | 0.0092 | [l] | not captured | exact (1.0) | psp412521-tbl-0002:row4:col1, psp412521-tbl-0002:row4:col2 | — | not captured |
| K a, 1/day | `Q49` · kabs | 0.456 | 1/day | 5.277777777777778e-06 | [1] / [d] | not captured | space_fold (0.95) | psp412521-tbl-0002:row5:col1, psp412521-tbl-0002:row5:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Weight, kg, on CL/F' — extend the ontology if this is a real PK parameter (source ['psp412521-tbl-0002:row6:col1', 'psp412521-tbl-0002:row6:col2'])
- dropped unlinked row (NIL): 'Age, years, on CL/F' — extend the ontology if this is a real PK parameter (source ['psp412521-tbl-0002:row7:col1', 'psp412521-tbl-0002:row7:col2'])
- dropped unlinked row (NIL): 'Albumin, g/L, on CL/F' — extend the ontology if this is a real PK parameter (source ['psp412521-tbl-0002:row8:col1', 'psp412521-tbl-0002:row8:col2'])
- dropped unlinked row (NIL): 'Weight, kg, on V1/F' — extend the ontology if this is a real PK parameter (source ['psp412521-tbl-0002:row9:col1', 'psp412521-tbl-0002:row9:col2'])
- dropped unlinked row (NIL): 'Albumin, g/L, on V1/F' — extend the ontology if this is a real PK parameter (source ['psp412521-tbl-0002:row10:col1', 'psp412521-tbl-0002:row10:col2'])
- routed 'Interindividual variability of CL/F' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Interindividual variability of V1/F' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=luspatercept
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V1/F, L' is the general volume)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp412521-tbl-0002:row3:col3 = '0.449, 0.489'
- unparsed cell psp412521-tbl-0002:row4:col3 = '8.88, 9.52'
- unparsed cell psp412521-tbl-0002:row5:col3 = '0.383, 0.652'
- unparsed cell psp412521-tbl-0002:row6:col3 = '0.561, 0.986'
- unparsed cell psp412521-tbl-0002:row7:col3 = '−0.764, −0.315'
- unparsed cell psp412521-tbl-0002:row8:col3 = '−1.61, −0.726'
- unparsed cell psp412521-tbl-0002:row9:col3 = '0.709, 1.05'
- unparsed cell psp412521-tbl-0002:row10:col3 = '−1.01, −0.216'
- unparsed cell psp412521-tbl-0002:row12:col3 = '31.1, 40.9'
- unparsed cell psp412521-tbl-0002:row13:col3 = '17.0, 27.6'
- unparsed cell psp412521-tbl-0002:row14:col3 = '17.8, 27.5'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412521-tbl-0002:row3:col1', 'psp412521-tbl-0002:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412521-tbl-0002:row5:col1', 'psp412521-tbl-0002:row5:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412521-tbl-0002:row4:col1', 'psp412521-tbl-0002:row4:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0195 L/h | not captured | not captured | ['psp412521-tbl-0002:row3:col1', 'psp412521-tbl-0002:row3:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 9.2 L | not captured | not captured | ['psp412521-tbl-0002:row4:col1', 'psp412521-tbl-0002:row4:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=luspatercept) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_luspatercept/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chen_2020` / `Chen_2020::reference`)
- model: `../../../knowledgebase/drugs/drug_luspatercept/models/modelica/Luspatercept_Chen2020_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_luspatercept/models/modelica/Luspatercept_Chen2020_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_luspatercept/models/modelica/Luspatercept_Chen2020_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_luspatercept/Luspatercept_Chen2020_reference/Luspatercept_Chen2020_reference_modelica.zip" download>Luspatercept_Chen2020_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_luspatercept/Luspatercept_Chen2020_reference/Luspatercept_Chen2020_reference_matlab.zip" download>Luspatercept_Chen2020_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_luspatercept/Luspatercept_Chen2020_reference/Luspatercept_Chen2020_reference_matlab_simbio.zip" download>Luspatercept_Chen2020_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_luspatercept/Luspatercept_Chen2020_reference/Luspatercept_Chen2020_reference_sbml.zip" download>Luspatercept_Chen2020_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_luspatercept/Luspatercept_Chen2020_reference/Luspatercept_Chen2020_reference_cellml.zip" download>Luspatercept_Chen2020_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_luspatercept/Luspatercept_Chen2020_reference/Luspatercept_Chen2020_reference.svg" alt="Luspatercept_Chen2020_reference diagram"><figcaption>The structure OpenModelica draws for this model, with this record's parameter values in the component labels.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_luspatercept/Luspatercept_Chen2020_reference/Luspatercept_Chen2020_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_luspatercept/Luspatercept_Chen2020_reference/Luspatercept_Chen2020_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Luspatercept_Chen2020_reference_params.json` · controls `Luspatercept_Chen2020_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
