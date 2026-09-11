# roxadustat — `Roxadustat_Czock2022_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Czock D; Keller F et al. (2022). Clinical pharmacokinetics 61
  ·  DOI: [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x)

## Model component
<dbs-pgx drug="roxadustat" model-id="Roxadustat_Czock2022_reference" status="extracted" stale="false" population="chronic kidney disease patients" measured-compound="roxadustat" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 2.62 | L/h | 7.277777777777778e-07 | L/h | not captured | review (0.7) | Czock_2022:review | — | not captured |
| Vd/F | `Q76` · V/F | 39.0 | L | 0.039 | L | not captured | review (0.7) | Czock_2022:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- built from REVIEW reference values (Czock_2022) — secondary source
- volume reported by review

**Extraction notes:**
- unparsed cell Tab2:row3:col5 = 'Yu [71]'
- unparsed cell Tab2:row5:col3 = 'Shibata [63]'
- unparsed cell Tab2:row6:col4 = 'Yu [71]'
- unparsed cell Tab2:row9:col5 = 'Yu [71]'
- unparsed cell Tab2:row12:col3 = 'Groenendaal [29]'
- unparsed cell Tab2:row14:col4 = 'Yu [71]'
- unparsed cell Tab2:row17:col4 = 'Yu [71]'
- unparsed cell Tab2:row19:col5 = 'Besarab [8]'
- unparsed cell Tab2:row21:col3 = 'Groenendaal [26]'
- unparsed cell Tab2:row22:col2 = 'Groenendaal [29]'
- unparsed cell Tab2:row23:col3 = 'Provenzano [56]'
- unparsed cell Tab2:row24:col5 = 'Portolés [52]'
- unparsed cell Tab2:row26:col5 = 'Graphical analysis, Fig. 3'
- unparsed cell Tab2:row31:col5 = 'Provenzano [56]'
- unparsed cell Tab2:row32:col3 = 'Groenendaal [26]'
- unparsed cell Tab2:row33:col2 = 'Groenendaal [26]'
- unparsed cell Tab2:row34:col3 = 'Provenzano [56]'
- unparsed cell Tab2:row35:col4 = 'Yu [71]'
- transposed table Czock_2022_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Czock_2022_table_1:row1:col1 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col2 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col3 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col4 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col5 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col11 = '200 mg, SS'
- unparsed cell Czock_2022_table_1:row1:col12 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col13 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col14 = '200 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col15 = '200 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col16 = '200 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col17 = '200 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col18 = '200 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col19 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col20 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col21 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col22 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col23 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col24 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row2:col6 = '729 ± 381b'
- unparsed cell Czock_2022_table_1:row2:col7 = '629 ± 306b'
- unparsed cell Czock_2022_table_1:row3:col6 = '74 ± 27b'
- unparsed cell Czock_2022_table_1:row3:col7 = '59 ± 25b'
- unparsed cell Czock_2022_table_1:row6:col1 = '2.01a'
- unparsed cell Czock_2022_table_1:row6:col2 = '1.57a'
- unparsed cell Czock_2022_table_1:row6:col6 = '1.85 ± 1.01b'
- unparsed cell Czock_2022_table_1:row6:col7 = '2.48 ±2.52b'
- unparsed cell Czock_2022_table_1:row6:col9 = '1.36a'
- unparsed cell Czock_2022_table_1:row6:col11 = '2.26a'
- unparsed cell Czock_2022_table_1:row6:col12 = '2.65a'
- unparsed cell Czock_2022_table_1:row6:col13 = '2.52a'
- unparsed cell Czock_2022_table_1:row7:col1 = '37a'
- unparsed cell Czock_2022_table_1:row7:col2 = '33a'
- unparsed cell Czock_2022_table_1:row7:col6 = '53 ± 39b'
- unparsed cell Czock_2022_table_1:row7:col7 = '52 ± 45b'
- unparsed cell Czock_2022_table_1:row7:col8 = '61a'
- unparsed cell Czock_2022_table_1:row7:col9 = '72a'
- unparsed cell Czock_2022_table_1:row7:col10 = '26a'
- unparsed cell Czock_2022_table_1:row7:col11 = '31a'
- unparsed cell Czock_2022_table_1:row7:col12 = '49a'
- unparsed cell Czock_2022_table_1:row7:col13 = '48a'
- unparsed cell Czock_2022_table_1:row7:col14 = '30a'
- unparsed cell Czock_2022_table_1:row7:col15 = '36a'
- unparsed cell Czock_2022_table_1:row7:col16 = '34a'
- unparsed cell Czock_2022_table_1:row7:col17 = '130a'
- unparsed cell Czock_2022_table_1:row7:col18 = '65a'
- unparsed cell Czock_2022_table_1:row7:col19 = '22a'
- unparsed cell Czock_2022_table_1:row7:col20 = '22a'
- unparsed cell Czock_2022_table_1:row7:col21 = '22a'
- unparsed cell Czock_2022_table_1:row7:col22 = '22a'
- unparsed cell Czock_2022_table_1:row8:col1 = '12.6 (10.2–16.8)'
- unparsed cell Czock_2022_table_1:row8:col2 = '14.7 (10.0–30.1)'
- unparsed cell Czock_2022_table_1:row8:col8 = '7.5 and 38.5a'
- unparsed cell Czock_2022_table_1:row8:col9 = '6.3 and 36.7a'
- unparsed cell Czock_2022_table_1:row8:col10 = '8.3 and 19.8a'
- companion parameter table 1 transcribed (93 record(s))
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 11.8 | 10.318 | 0.8744 | 0.25 | reported t½β |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Czock_2022:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Czock_2022:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.62 L/h | not captured | not captured | ['Czock_2022:review'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 39 L | not captured | not captured | ['Czock_2022:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_roxadustat/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Czock_2022` / `Czock_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_1C.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_reference/Roxadustat_Czock2022_reference_modelica.zip" download>Roxadustat_Czock2022_reference_modelica.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_reference/Roxadustat_Czock2022_reference_fmi.zip" download>Roxadustat_Czock2022_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_reference/Roxadustat_Czock2022_reference_matlab.zip" download>Roxadustat_Czock2022_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_reference/Roxadustat_Czock2022_reference_matlab_simbio.zip" download>Roxadustat_Czock2022_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_reference/Roxadustat_Czock2022_reference_sbml.zip" download>Roxadustat_Czock2022_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_reference/Roxadustat_Czock2022_reference_cellml.zip" download>Roxadustat_Czock2022_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
