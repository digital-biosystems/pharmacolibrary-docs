# midazolam — `Midazolam_McCann2025_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
McCann S; Helfer VE; Balevic SJ; Muller WJ; van den Anker JN; Al-Uzri A; et al. et al. (2025). Clinical and translational science 18
  ·  DOI: [10.1111/cts.70247](https://doi.org/10.1111/cts.70247)

## Model component
<dbs-pgx drug="midazolam" model-id="Midazolam_McCann2025_reference" status="extracted" stale="false" population="children with and without obesity" measured-compound="midazolam" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h/70 kg) | `Q22` · CL | 14.68 | L/h/70 kg | 4.077777777777778e-06 | [l] / [[h] · [70kg]] | not captured | exact (1.0) | cts70247-tbl-0002:row2:col1, cts70247-tbl-0002:row2:col3, cts70247-tbl-0002:row2:col4, cts70247-tbl-0002:row2:col5 | — | not captured |
| V1 (L/70 kg) | `Q63` · V1 | 7.09 | L/70 kg | 0.00709 | [l] / [70kg] | not captured | exact (1.0) | cts70247-tbl-0002:row3:col1, cts70247-tbl-0002:row3:col3, cts70247-tbl-0002:row3:col4, cts70247-tbl-0002:row3:col5 | — | not captured |
| Q (L/h/70 kg) | `Q30` · Q | 44.71 | L/h/70 kg | 1.2419444444444444e-05 | [l] / [[h] · [70kg]] | not captured | exact (1.0) | cts70247-tbl-0002:row4:col1, cts70247-tbl-0002:row4:col3, cts70247-tbl-0002:row4:col4, cts70247-tbl-0002:row4:col5 | — | not captured |
| V2 (L/70 kg) | `Q64` · V2 | 34.07 | L/70 kg | 0.03407 | [l] / [70kg] | not captured | exact (1.0) | cts70247-tbl-0002:row5:col1, cts70247-tbl-0002:row5:col3, cts70247-tbl-0002:row5:col4, cts70247-tbl-0002:row5:col5 | — | not captured |
| Ka (1/h) | `Q49` · kabs | 0.14 | 1/h | 3.888888888888889e-05 | 1/h | not captured | review_gapfill (0.7) | Jia_2026:review | — | not captured |
| absorption lag time (ALAG1) | `Q83` · tlag | 1.23 | h | 4428.0 | h | not captured | review_gapfill (0.7) | Jia_2026:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- dropped duplicate Q22 ('CL', value '187.8') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=midazolam
- gap-filled Q49 (kabs) from Jia_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Jia_2026's review values (primary lacked it)

**Extraction notes:**
- unparsed cell cts70247-tbl-0002:row7:col2 = '9 [6]'
- unparsed cell cts70247-tbl-0002:row9:col2 = '9 [15]'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70247-tbl-0002:row2:col1', 'cts70247-tbl-0002:row2:col3', 'cts70247-tbl-0002:row2:col4', 'cts70247-tbl-0002:row2:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70247-tbl-0002:row4:col1', 'cts70247-tbl-0002:row4:col3', 'cts70247-tbl-0002:row4:col4', 'cts70247-tbl-0002:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Jia_2026:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70247-tbl-0002:row3:col1', 'cts70247-tbl-0002:row3:col3', 'cts70247-tbl-0002:row3:col4', 'cts70247-tbl-0002:row3:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70247-tbl-0002:row5:col1', 'cts70247-tbl-0002:row5:col3', 'cts70247-tbl-0002:row5:col4', 'cts70247-tbl-0002:row5:col5'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Jia_2026:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 14.68 | not captured | not captured | ['cts70247-tbl-0002:row2:col1', 'cts70247-tbl-0002:row2:col3', 'cts70247-tbl-0002:row2:col4', 'cts70247-tbl-0002:row2:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 14.7 L/h | not captured | not captured | ['cts70247-tbl-0002:row2:col1', 'cts70247-tbl-0002:row2:col3', 'cts70247-tbl-0002:row2:col4', 'cts70247-tbl-0002:row2:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 7.09 L | not captured | not captured | ['cts70247-tbl-0002:row3:col1', 'cts70247-tbl-0002:row3:col3', 'cts70247-tbl-0002:row3:col4', 'cts70247-tbl-0002:row3:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 34.1 L | not captured | not captured | ['cts70247-tbl-0002:row5:col1', 'cts70247-tbl-0002:row5:col3', 'cts70247-tbl-0002:row5:col4', 'cts70247-tbl-0002:row5:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_midazolam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `McCann_2025` / `McCann_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_midazolam/Midazolam_McCann2025_reference/Midazolam_McCann2025_reference_modelica.zip" download>Midazolam_McCann2025_reference_modelica.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_midazolam/Midazolam_McCann2025_reference/Midazolam_McCann2025_reference_fmi.zip" download>Midazolam_McCann2025_reference_fmi.zip</a> <span class="pk-size">(1.2 MB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_midazolam/Midazolam_McCann2025_reference/Midazolam_McCann2025_reference_matlab.zip" download>Midazolam_McCann2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_midazolam/Midazolam_McCann2025_reference/Midazolam_McCann2025_reference_matlab_simbio.zip" download>Midazolam_McCann2025_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_midazolam/Midazolam_McCann2025_reference/Midazolam_McCann2025_reference_sbml.zip" download>Midazolam_McCann2025_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_midazolam/Midazolam_McCann2025_reference/Midazolam_McCann2025_reference_cellml.zip" download>Midazolam_McCann2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
