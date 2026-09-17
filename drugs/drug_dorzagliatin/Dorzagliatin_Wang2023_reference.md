<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;dorzagliatin&quot;,&quot;href&quot;:&quot;drugs/drug_dorzagliatin/&quot;},{&quot;label&quot;:&quot;Wang_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dorzagliatin_Wang2023_reference&quot;,&quot;label&quot;:&quot;Wang_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dorzagliatin — `Dorzagliatin_Wang2023_reference`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

## Citation
Wang K; Feng L; Zhang J; Zou Q; Xu F; Sun Z; et al. et al. (2023). Clinical pharmacokinetics 62
  ·  DOI: [10.1007/s40262-023-01286-8](https://doi.org/10.1007/s40262-023-01286-8)

## Model component
<dbs-pgx drug="dorzagliatin" model-id="Dorzagliatin_Wang2023_reference" status="curated_candidate" stale="false" population="healthy subjects and patients with type 2 diabetes mellitus" measured-compound="dorzagliatin" parameterization="apparent" topology="3C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 10.4 | L/h | 2.8888888888888894e-06 | [l] / [h] | not captured | exact (1.0) | Tab3:row2:col2, Tab3:row2:col3, Tab3:footnote | — | not captured |
| Vc/F (L) | `Q290` · V1/F | 80.6 | L | 0.08059999999999999 | [l] | not captured | exact (1.0) | Tab3:row3:col2, Tab3:row3:col3, Tab3:footnote | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 3.02 | L/h | 8.388888888888889e-07 | [l] / [h] | not captured | exact (1.0) | Tab3:row4:col2, Tab3:row4:col3 | — | not captured |
| Vp/F (L) | `Q82` · V2/F | 26.5 | L | 0.0265 | [l] | not captured | exact (1.0) | Tab3:row5:col2, Tab3:row5:col3 | — | not captured |
| Ka (h−1) | `Q49` · kabs | 3.29 | h−1 | 0.0009138888888888889 | [1] / [h] | not captured | exact (1.0) | Tab3:row6:col2, Tab3:row6:col3 | — | not captured |
| D1 (h) | `Q310` · D1 | 0.418 | h | 1504.8 | [h] | not captured | exact (1.0) | Tab3:row7:col2, Tab3:row7:col3, Tab3:footnote | — | 82.8 (None% RSE) |
| CLBW | `Q22` · CL | 0.255 | not captured | not captured | not captured | not captured | llm (0.6) | Tab3:row10:col2, Tab3:row10:col3 | — | 22.5 (None% RSE) |
| Vc,BW | `Q63` · V1 | 0.553 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Tab3:row11:col2, Tab3:row11:col3 | — | 14.9 (None% RSE) |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag', 'k13', 'k31']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'CLSTUDY' — extend the ontology if this is a real PK parameter (source ['Tab3:row8:col2', 'Tab3:row8:col3'])
- dropped duplicate Q310 ('D1,FOOD', value '2.26') — already have one for this compound
- dropped duplicate Q63 ('Vc,GEND', value '0.843') — already have one for this compound
- dropped duplicate Q22 ('Cor_CL,Vc', value '0.0181') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dorzagliatin
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count

**Extraction notes:**
- unparsed cell Tab3:row2:col4 = '10.4 (10.2−10.6)'
- unparsed cell Tab3:row3:col4 = '80.6 (77.7−83.1)'
- unparsed cell Tab3:row4:col4 = '3.01 (2.29−4.14)'
- unparsed cell Tab3:row5:col4 = '26.7 (22.8−31.0)'
- unparsed cell Tab3:row6:col4 = '3.29 (2.94−3.64)'
- unparsed cell Tab3:row7:col4 = '0.415 (0.322−0.485)'
- unparsed cell Tab3:row8:col4 = '1.22 (1.17−1.28)'
- unparsed cell Tab3:row9:col4 = '2.28 (1.85−3.10)'
- unparsed cell Tab3:row10:col4 = '0.254 (0.161−0.351)'
- unparsed cell Tab3:row11:col4 = '0.553 (0.446−0.667)'
- unparsed cell Tab3:row14:col3 = '0.815−0.873'
- unparsed cell Tab3:row14:col4 = '0.843 (0.813−0.870)'
- unparsed cell Tab3:row15:col3 = '21.3−23.6'
- unparsed cell Tab3:row15:col4 = '22.4 (21.0−24.0)'
- unparsed cell Tab3:row16:col3 = '13.1−16.4'
- unparsed cell Tab3:row16:col4 = '14.8 (13.0−16.5)'
- unparsed cell Tab3:row17:col3 = '38.9−57.0'
- unparsed cell Tab3:row17:col4 = '48.5 (40.6−57.1)'
- unparsed cell Tab3:row18:col1 = 'IIV on D1'
- unparsed cell Tab3:row18:col3 = '68.3−95.2'
- unparsed cell Tab3:row18:col4 = '81.8 (65.8−98.4)'
- unparsed cell Tab3:row19:col3 = '0.0142−0.022'
- unparsed cell Tab3:row19:col4 = '0.0181 (0.0136−0.023)'
- unparsed cell Tab3:row20:col3 = '32.0−33.7'
- unparsed cell Tab3:row20:col4 = '32.8 (31.2−34.5)'
- unparsed cell Tab3:row21:col3 = '106−112'
- unparsed cell Tab3:row21:col4 = '109 (103−115)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row2:col2', 'Tab3:row2:col3', 'Tab3:footnote'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row3:col2', 'Tab3:row3:col3', 'Tab3:footnote'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['Tab3:row7:col2', 'Tab3:row7:col3', 'Tab3:footnote'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row6:col2', 'Tab3:row6:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row4:col2', 'Tab3:row4:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row5:col2', 'Tab3:row5:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 10.4 L/h | not captured | not captured | ['Tab3:row2:col2', 'Tab3:row2:col3', 'Tab3:footnote'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 80.6 L | not captured | not captured | ['Tab3:row3:col2', 'Tab3:row3:col3', 'Tab3:footnote'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 26.5 L | not captured | not captured | ['Tab3:row5:col2', 'Tab3:row5:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=dorzagliatin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 7 scholar param(s) emitted or defaulted | 7 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 3C → PK_3C* | PK_3C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_dorzagliatin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2023` / `Wang_2023::reference`)
- model: `../../../knowledgebase/drugs/drug_dorzagliatin/models/modelica/Dorzagliatin_Wang2023_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_dorzagliatin/models/modelica/Dorzagliatin_Wang2023_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_dorzagliatin/models/modelica/Dorzagliatin_Wang2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference/Dorzagliatin_Wang2023_reference_modelica.zip" download>Dorzagliatin_Wang2023_reference_modelica.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference/Dorzagliatin_Wang2023_reference_matlab.zip" download>Dorzagliatin_Wang2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference/Dorzagliatin_Wang2023_reference_matlab_simbio.zip" download>Dorzagliatin_Wang2023_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference/Dorzagliatin_Wang2023_reference_sbml.zip" download>Dorzagliatin_Wang2023_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference/Dorzagliatin_Wang2023_reference_cellml.zip" download>Dorzagliatin_Wang2023_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_3C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference/Dorzagliatin_Wang2023_reference.svg" alt="Dorzagliatin_Wang2023_reference diagram"><figcaption>The structure OpenModelica draws for this model, with this record's parameter values in the component labels.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference/Dorzagliatin_Wang2023_reference_params.json" metaurl="assets/fmu/PK_3C_enteral.vr.json" wasmurl="assets/fmu/PK_3C_enteral.js" controlsurl="drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference/Dorzagliatin_Wang2023_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_3C_enteral` · parameters `Dorzagliatin_Wang2023_reference_params.json` · controls `Dorzagliatin_Wang2023_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
