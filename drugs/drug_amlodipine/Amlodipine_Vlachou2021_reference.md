# amlodipine — `Amlodipine_Vlachou2021_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `amlodipine/irbesartan/hydrochlorothiazide`, measured `amlodipine`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Vlachou M; Karalis V et al. (2021). Materials (Basel, Switzerland) 14
  ·  DOI: [10.3390/ma14030555](https://doi.org/10.3390/ma14030555)

## Model component
<dbs-pgx drug="amlodipine" model-id="Amlodipine_Vlachou2021_reference" status="extracted" stale="false" population="healthy adults" measured-compound="amlodipine" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cl/F (ml/min) | `Q27` · CL/F | 370.0 | ml/min | 6.166666666666666e-06 | L/h | not captured | review (0.7) | Vlachou_2021:review | — | not captured |
| V1/F (ml) | `Q290` · V1/F | 1300.0 | ml | 0.0013 | L | not captured | review (0.7) | Vlachou_2021:review | — | not captured |
| Q/F (ml/min) | `Q69` · Q/F | 295.0 | ml/min | 4.916666666666666e-06 | L/h | not captured | review (0.7) | Vlachou_2021:review | — | not captured |
| Ka (min−1) | `Q49` · kabs | 0.01417 | min−1 | 0.00023616666666666667 | 1/h | not captured | review (0.7) | Vlachou_2021:review | — | not captured |
| Tlag (min) | `Q83` · tlag | 100.8 | min | 6048.0 | h | not captured | review (0.7) | Vlachou_2021:review | — | not captured |
| CYP2D6 | `Q900` · CYP2D6 | {'G/A': -0.2, 'G/G': 0.0, 'IM': -0.0542, 'NM': -0.0082, 'PM': -0.0853, 'UM': 0.0709} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC22A1 | `Q900` · SLC22A1 | {'G/A': -0.2, 'G/G': 0.0, 'IM': -0.0542, 'NM': -0.0082, 'PM': -0.0853, 'UM': 0.0709} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k21']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- built from REVIEW reference values (Vlachou_2021) — secondary source
- volume reported by review

**Extraction notes:**
- unparsed cell materials-14-00555-t004:row1:col2 = 'm0'
- unparsed cell materials-14-00555-t004:row3:col1 = 'm0'
- unparsed cell materials-14-00555-t004:row5:col1 = 'm0'
- unparsed cell materials-14-00555-t004:row7:col2 = 'm0'
- unparsed cell materials-14-00555-t004:row9:col1 = 'm0'
- unparsed cell materials-14-00555-t004:row11:col1 = 'm0'
- unparsed cell materials-14-00555-t004:row13:col2 = 'm0'
- unparsed cell materials-14-00555-t004:row15:col1 = 'm0'
- unparsed cell materials-14-00555-t004:row17:col1 = 'm0'
- unparsed cell Vlachou_2021_table_5:row1:col1 = 'Ka (min−1)'
- unparsed cell Vlachou_2021_table_5:row4:col1 = 'Kd_T (min−1)'
- unparsed cell Vlachou_2021_table_5:row6:col1 = 'Kat_T (min−1)'
- unparsed cell Vlachou_2021_table_5:row16:col1 = 'Kd_T (min−1)'
- unparsed cell Vlachou_2021_table_5:row18:col1 = 'Kat_T (min−1)'
- unparsed cell Vlachou_2021_table_5:row28:col1 = 'Kd_T (min−1)'
- unparsed cell Vlachou_2021_table_5:row30:col1 = 'Kat_T (min−1)'
- companion parameter table 5 transcribed (30 record(s))
- LLM selected parameter table(s) 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Vlachou_2021:review'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Vlachou_2021:review'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Vlachou_2021:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Vlachou_2021:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Vlachou_2021:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 22.2 L/h | not captured | not captured | ['Vlachou_2021:review'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.3 L | not captured | not captured | ['Vlachou_2021:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amlodipine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Vlachou_2021` / `Vlachou_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_amlodipine/Amlodipine_Vlachou2021_reference/Amlodipine_Vlachou2021_reference_modelica.zip" download>Amlodipine_Vlachou2021_reference_modelica.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_amlodipine/Amlodipine_Vlachou2021_reference/Amlodipine_Vlachou2021_reference_matlab.zip" download>Amlodipine_Vlachou2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_amlodipine/Amlodipine_Vlachou2021_reference/Amlodipine_Vlachou2021_reference_matlab_simbio.zip" download>Amlodipine_Vlachou2021_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_amlodipine/Amlodipine_Vlachou2021_reference/Amlodipine_Vlachou2021_reference_sbml.zip" download>Amlodipine_Vlachou2021_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_amlodipine/Amlodipine_Vlachou2021_reference/Amlodipine_Vlachou2021_reference_cellml.zip" download>Amlodipine_Vlachou2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
