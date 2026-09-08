# ciprofloxacin — `Ciprofloxacin_Guo2022_final`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Guo T; Abdulla A; Koch BCP; van Hasselt JGC; Endeman H; Schouten JA; et al. et al. (2022). Clinical pharmacokinetics 61
  ·  DOI: [10.1007/s40262-022-01114-5](https://doi.org/10.1007/s40262-022-01114-5)

## Model component
<dbs-pgx drug="ciprofloxacin" model-id="Ciprofloxacin_Guo2022_final" status="extracted" stale="false" population="ICU patients" measured-compound="ciprofloxacin" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 14.7 | L/h | 4.083333333333333e-06 | L/h | not captured | exact (1.0) | Guo_2022:results_prose | — | not captured |
| V1 | `Q63` · V1 | 61.2 | L | 0.061200000000000004 | L | not captured | exact (1.0) | Guo_2022:results_prose | — | not captured |
| Q | `Q30` · Q | 44.9 | L/h | 1.2472222222222223e-05 | L/h | not captured | exact (1.0) | Guo_2022:results_prose | — | not captured |
| V2 | `Q64` · V2 | 71.6 | L | 0.0716 | L | not captured | exact (1.0) | Guo_2022:results_prose | — | not captured |
| Ka (h−1) | `Q49` · kabs | 1.0 | h−1 | 0.0002777777777777778 | 1/h | not captured | review_gapfill (0.7) | Alonso_2021:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): '∆OFV' — extend the ontology if this is a real PK parameter (source ['Tab2:row1:col2'])
- dropped unlinked row (NIL): 'AddStudy1' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col2'])
- salvaged Q22 ('CL'=14.7) from results prose — parameter table was unreadable
- salvaged Q63 ('V1'=61.2) from results prose — parameter table was unreadable
- salvaged Q30 ('Q'=44.9) from results prose — parameter table was unreadable
- salvaged Q64 ('V2'=71.6) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ciprofloxacin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- model-stage split: 'final model' is the final model of Guo_2022 (paper reports 4 stages: cl, final model, v1, v2); same population, different model-building step
- gap-filled Q49 (kabs) from Alonso_2021's review values (primary lacked it)

**Extraction notes:**
- transposed table Guo_2022_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Guo_2022_table_3:row0:col1 = 'Study 2'
- unparsed cell Guo_2022_table_3:row0:col3 = '65 L'
- unparsed cell Guo_2022_table_3:row0:col4 = '75.8 L'
- unparsed cell Guo_2022_table_3:row1:col1 = 'Study 3'
- unparsed cell Guo_2022_table_3:row1:col3 = '59.1 L'
- unparsed cell Guo_2022_table_3:row1:col4 = '70.1 L'
- unparsed cell Guo_2022_table_3:row2:col3 = '55.7 L'
- unparsed cell Guo_2022_table_3:row2:col4 = '63.7 L'
- unparsed cell Guo_2022_table_3:row3:col1 = 'Study 1 (%)'
- unparsed cell Guo_2022_table_3:row4:col1 = 'Study 2 (%)'
- unparsed cell Guo_2022_table_3:row5:col1 = 'Study 3 (%)'
- companion parameter table 3 transcribed (18 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Alonso_2021:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 14.7 | not captured | not captured | ['Guo_2022:results_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 14.7 L/h | not captured | not captured | ['Guo_2022:results_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 61.2 L | not captured | not captured | ['Guo_2022:results_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 71.6 L | not captured | not captured | ['Guo_2022:results_prose'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ciprofloxacin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Guo_2022` / `Guo_2022::final`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ciprofloxacin/Ciprofloxacin_Guo2022_final/Ciprofloxacin_Guo2022_final_modelica.zip" download>Ciprofloxacin_Guo2022_final_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ciprofloxacin/Ciprofloxacin_Guo2022_final/Ciprofloxacin_Guo2022_final_matlab.zip" download>Ciprofloxacin_Guo2022_final_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ciprofloxacin/Ciprofloxacin_Guo2022_final/Ciprofloxacin_Guo2022_final_matlab_simbio.zip" download>Ciprofloxacin_Guo2022_final_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ciprofloxacin/Ciprofloxacin_Guo2022_final/Ciprofloxacin_Guo2022_final_sbml.zip" download>Ciprofloxacin_Guo2022_final_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ciprofloxacin/Ciprofloxacin_Guo2022_final/Ciprofloxacin_Guo2022_final_cellml.zip" download>Ciprofloxacin_Guo2022_final_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
