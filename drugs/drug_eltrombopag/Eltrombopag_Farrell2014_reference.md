# eltrombopag — `Eltrombopag_Farrell2014_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Farrell C; Hayes SC; Wire M; Zhang J et al. (2014). British journal of clinical pharmacology 77
  ·  DOI: [10.1111/bcp.12244](https://doi.org/10.1111/bcp.12244)

## Model component
<dbs-pgx drug="eltrombopag" model-id="Eltrombopag_Farrell2014_reference" status="extracted" stale="false" population="healthy volunteers and subjects with chronic liver disease" measured-compound="eltrombopag" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (l h -1 ) | `Q27` · CL/F | 15.1 | l h -1 | 4.194444444444445e-06 | [l] / [h] | not captured | exact (1.0) | tab_1:row2:col1, tab_1:row2:col2, tab_1:row2:col3, tab_1:row2:col5, tab_1:row2:col6 | — | not captured |
| Vc/F (l) | `Q290` · V1/F | 9.14 | l | 0.00914 | [l] | not captured | exact (1.0) | tab_1:row3:col1, tab_1:row3:col2, tab_1:row3:col3, tab_1:row3:col5, tab_1:row3:col6 | — | not captured |
| Vp/F (l) | `Q82` · V2/F | 9.82 | l | 0.00982 | [l] | not captured | exact (1.0) | tab_1:row4:col1, tab_1:row4:col2, tab_1:row4:col3, tab_1:row4:col5, tab_1:row4:col6 | — | not captured |
| Q/F (l h -1 ) | `Q69` · Q/F | 8.94 | l h -1 | 2.4833333333333334e-06 | [l] / [h] | not captured | exact (1.0) | tab_1:row5:col1, tab_1:row5:col2, tab_1:row5:col3, tab_1:row5:col5, tab_1:row5:col6 | — | not captured |
| Ka1 (h -1 ) | `Q49` · kabs | 20.2 | h -1 | 0.005611111111111111 | [1] / [h] | not captured | llm (0.6) | tab_1:row6:col1, tab_1:row6:col2, tab_1:row6:col3, tab_1:row6:col5, tab_1:row6:col6 | — | 1.45 (None% RSE) |
| Ka2 (h -1 ) | `Q302` · k21 | 21.9 | h -1 | 0.006083333333333333 | [1] / [h] | not captured | llm (0.6) | tab_1:row7:col1, tab_1:row7:col2, tab_1:row7:col3, tab_1:row7:col5, tab_1:row7:col6 | — | not captured |
| MTIME (h) | `Q81` · MTT | 1.28 | h | not captured | [h] | not captured | llm (0.6) | tab_1:row9:col1, tab_1:row9:col2, tab_1:row9:col3, tab_1:row9:col5, tab_1:row9:col6 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'ALAG1 (h)' — extend the ontology if this is a real PK parameter (source ['tab_1:row8:col1', 'tab_1:row8:col2', 'tab_1:row8:col3', 'tab_1:row8:col5', 'tab_1:row8:col6'])
- unit_dimension_mismatch: 'CL/F ∼Females' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('CL/F ∼Females', value '10.4') — already have one for this compound
- unit_dimension_mismatch: 'CL/F ∼CP Score 5' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('CL/F ∼CP Score 5', value '16.5') — already have one for this compound
- unit_dimension_mismatch: 'CL/F ∼East Asians' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('CL/F ∼East Asians', value '8.63') — already have one for this compound
- unit_dimension_mismatch: 'CL/F ∼ CP Score &gt; 5 †' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('CL/F ∼ CP Score &gt; 5 †', value '16.2') — already have one for this compound
- unit_dimension_mismatch: 'Vc/F ∼South/Central Asians' → Q290 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q290 ('Vc/F ∼South/Central Asians', value '13.2') — already have one for this compound
- routed 'Covar ωCL, ωVc' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=eltrombopag
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row15:col3 = '-0.149 to -0.0771'
- unparsed cell tab_1:row15:col6 = '-0.151 to -0.074'
- unparsed cell tab_1:row24:col3 = '-409 to 2630'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row2:col1', 'tab_1:row2:col2', 'tab_1:row2:col3', 'tab_1:row2:col5', 'tab_1:row2:col6'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3', 'tab_1:row3:col5', 'tab_1:row3:col6'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row7:col1', 'tab_1:row7:col2', 'tab_1:row7:col3', 'tab_1:row7:col5', 'tab_1:row7:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row6:col1', 'tab_1:row6:col2', 'tab_1:row6:col3', 'tab_1:row6:col5', 'tab_1:row6:col6'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row5:col1', 'tab_1:row5:col2', 'tab_1:row5:col3', 'tab_1:row5:col5', 'tab_1:row5:col6'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col3', 'tab_1:row4:col5', 'tab_1:row4:col6'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 15.1 L/h | not captured | not captured | ['tab_1:row2:col1', 'tab_1:row2:col2', 'tab_1:row2:col3', 'tab_1:row2:col5', 'tab_1:row2:col6'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 9.14 L | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3', 'tab_1:row3:col5', 'tab_1:row3:col6'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 9.82 L | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col3', 'tab_1:row4:col5', 'tab_1:row4:col6'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_eltrombopag/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Farrell_2014` / `Farrell_2014::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference/Eltrombopag_Farrell2014_reference_modelica.zip" download>Eltrombopag_Farrell2014_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference/Eltrombopag_Farrell2014_reference_fmi.zip" download>Eltrombopag_Farrell2014_reference_fmi.zip</a> <span class="pk-size">(1.2 MB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference/Eltrombopag_Farrell2014_reference_matlab.zip" download>Eltrombopag_Farrell2014_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference/Eltrombopag_Farrell2014_reference_matlab_simbio.zip" download>Eltrombopag_Farrell2014_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference/Eltrombopag_Farrell2014_reference_sbml.zip" download>Eltrombopag_Farrell2014_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference/Eltrombopag_Farrell2014_reference_cellml.zip" download>Eltrombopag_Farrell2014_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
