# amlodipine — `Amlodipine_Karalis2023_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Karalis VD et al. (2023). Pharmaceuticals (Basel, Switzerland) 16
  ·  DOI: [10.3390/ph16050725](https://doi.org/10.3390/ph16050725)

## Model component
<dbs-pgx drug="amlodipine" model-id="Amlodipine_Karalis2023_reference" status="extracted" stale="false" population="virtual subjects" measured-compound="hydrochlorothiazide, donepezil, and amlodipine" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Tlag (min) | `Q83` · tlag | 24.24 | min | 1454.3999999999999 | [min] | not captured | exact (1.0) | pharmaceuticals-16-00725-t002:row2:col1 | — | not captured |
| Ka (min−1) | `Q49` · kabs | 0.01417 | min−1 | 0.00023616666666666667 | [1] / [min] | not captured | exact (1.0) | pharmaceuticals-16-00725-t002:row3:col1, pharmaceuticals-16-00725-t002:row3:col2, pharmaceuticals-16-00725-t002:row3:col3 | — | not captured |
| Cl/F (mL/min) | `Q27` · CL/F | 370 | mL/min | 6.166666666666666e-06 | [ml] / [min] | not captured | exact (1.0) | pharmaceuticals-16-00725-t002:row4:col1, pharmaceuticals-16-00725-t002:row4:col2, pharmaceuticals-16-00725-t002:row4:col3 | categorical_fractional on CYP2D6={'G/A': -0.2, 'G/G': 0.0, 'IM': -0.0542, 'NM': -0.0082, 'PM': -0.0853, 'UM': 0.0709} (G/G); categorical_fractional on SLC22A1={'G/A': -0.2, 'G/G': 0.0, 'IM': -0.0542, 'NM': -0.0082, 'PM': -0.0853, 'UM': 0.0709} (G/G) | not captured |
| Q/F (mL/min) | `Q69` · Q/F | 423.33 | mL/min | 7.0555e-06 | [ml] / [min] | not captured | exact (1.0) | pharmaceuticals-16-00725-t002:row5:col1 | — | not captured |
| V1/F (mL) | `Q290` · V1/F | 1300 | mL | 0.0013 | [ml] | not captured | exact (1.0) | pharmaceuticals-16-00725-t002:row6:col1, pharmaceuticals-16-00725-t002:row6:col2, pharmaceuticals-16-00725-t002:row6:col3 | — | not captured |
| V2/F (mL) | `Q82` · V2/F | 146000 | mL | 0.146 | [ml] | not captured | exact (1.0) | pharmaceuticals-16-00725-t002:row7:col1 | — | not captured |
| CYP2D6 | `Q900` · CYP2D6 | {'G/A': -0.2, 'G/G': 0.0, 'IM': -0.0542, 'NM': -0.0082, 'PM': -0.0853, 'UM': 0.0709} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC22A1 | `Q900` · SLC22A1 | {'G/A': -0.2, 'G/G': 0.0, 'IM': -0.0542, 'NM': -0.0082, 'PM': -0.0853, 'UM': 0.0709} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=hydrochlorothiazide, donepezil, and amlodipine

**Extraction notes:**
- LLM region Karalis_2023:other_prose: no JSON records returned
- LLM region Karalis_2023:discussion_prose: no JSON records returned

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceuticals-16-00725-t002:row4:col1', 'pharmaceuticals-16-00725-t002:row4:col2', 'pharmaceuticals-16-00725-t002:row4:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceuticals-16-00725-t002:row6:col1', 'pharmaceuticals-16-00725-t002:row6:col2', 'pharmaceuticals-16-00725-t002:row6:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceuticals-16-00725-t002:row3:col1', 'pharmaceuticals-16-00725-t002:row3:col2', 'pharmaceuticals-16-00725-t002:row3:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceuticals-16-00725-t002:row5:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceuticals-16-00725-t002:row7:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['pharmaceuticals-16-00725-t002:row2:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 22.2 L/h | not captured | not captured | ['pharmaceuticals-16-00725-t002:row4:col1', 'pharmaceuticals-16-00725-t002:row4:col2', 'pharmaceuticals-16-00725-t002:row4:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.3 L | not captured | not captured | ['pharmaceuticals-16-00725-t002:row6:col1', 'pharmaceuticals-16-00725-t002:row6:col2', 'pharmaceuticals-16-00725-t002:row6:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 146 L | not captured | not captured | ['pharmaceuticals-16-00725-t002:row7:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amlodipine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Karalis_2023` / `Karalis_2023::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_amlodipine/Amlodipine_Karalis2023_reference/Amlodipine_Karalis2023_reference_matlab.zip" download>Amlodipine_Karalis2023_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_amlodipine/Amlodipine_Karalis2023_reference/Amlodipine_Karalis2023_reference_matlab_simbio.zip" download>Amlodipine_Karalis2023_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_amlodipine/Amlodipine_Karalis2023_reference/Amlodipine_Karalis2023_reference_sbml.zip" download>Amlodipine_Karalis2023_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_amlodipine/Amlodipine_Karalis2023_reference/Amlodipine_Karalis2023_reference_cellml.zip" download>Amlodipine_Karalis2023_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
