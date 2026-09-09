# tranexamic acid — `TranexamicAcid_Gilliot2022_01_1_134`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Gilliot S; Ducloy-Bouthors AS; Loingeville F; Hennart B; Allorge D; Lebuffe G; et al. et al. (2022). Pharmaceutics 14
  ·  DOI: [10.3390/pharmaceutics14030578](https://doi.org/10.3390/pharmaceutics14030578)

## Model component
<dbs-pgx drug="tranexamic acid" model-id="TranexamicAcid_Gilliot2022_01_1_134" status="extracted" stale="false" population="parturients undergoing hemorrhagic cesarean delivery" measured-compound="tranexamic acid" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 0.11 | not captured | not captured | not captured | not captured | exact (1.0) | Gilliot_2022_table_8:row0:col8 | — | not captured |
| V1 | `Q63` · V1 | 8.21 | not captured | not captured | not captured | not captured | exact (1.0) | Gilliot_2022_table_8:row1:col8 | — | not captured |
| V2 | `Q64` · V2 | 0.38 | not captured | not captured | not captured | not captured | exact (1.0) | Gilliot_2022_table_8:row2:col8 | — | not captured |
| Q | `Q30` · Q | 9.64 | not captured | not captured | not captured | not captured | exact (1.0) | Gilliot_2022_table_8:row3:col8 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '01-1-134' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '01-1-134' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '01-1-134' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '01-1-134' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '01-1-134' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Purine' — extend the ontology if this is a real PK parameter (source ['Gilliot_2022_table_8:row4:col8'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tranexamic acid
- population split: '01-1-134' subgroup of Gilliot_2022 (paper reports 9 populations: 01-1-049, 01-1-065, 01-1-070, 01-1-099, 01-1-108, 01-1-119, 01-1-134, 01-1-151, original dataset)

**Extraction notes:**
- unparsed cell pharmaceutics-14-00578-t004:row2:col5 = '(0.0746; 0.0825)'
- unparsed cell pharmaceutics-14-00578-t004:row3:col3 = 'NA 4'
- unparsed cell pharmaceutics-14-00578-t004:row3:col5 = '(0.0035; 0.0042)'
- unparsed cell pharmaceutics-14-00578-t004:row4:col1 = 'βV1×BW 370'
- unparsed cell pharmaceutics-14-00578-t004:row4:col5 = '(7.78; 12.61)'
- unparsed cell pharmaceutics-14-00578-t004:row5:col5 = '(0.93; 1.68)'
- unparsed cell pharmaceutics-14-00578-t004:row6:col5 = '(0.24; 0.37)'
- unparsed cell pharmaceutics-14-00578-t004:row7:col3 = '2.64 × 10−4'
- unparsed cell pharmaceutics-14-00578-t004:row7:col5 = '(8.41; 10.36)'
- unparsed cell pharmaceutics-14-00578-t004:row8:col5 = '(0.53; 0.57)'
- unparsed cell pharmaceutics-14-00578-t004:row9:col5 = '(0.18; 0.21)'
- unparsed cell pharmaceutics-14-00578-t004:row10:col5 = '(0.32; 0.61)'
- unparsed cell pharmaceutics-14-00578-t004:row11:col5 = '(0.54; 0.74)'
- unparsed cell pharmaceutics-14-00578-t004:row12:col5 = '(0.14; 0.30)'
- unparsed cell pharmaceutics-14-00578-t004:row13:col5 = '(0.36; 0.52)'
- unparsed cell pharmaceutics-14-00578-t004:row14:col5 = '(0.10; 0.52)'
- unparsed cell pharmaceutics-14-00578-t004:row15:col5 = '(0.14; 0.16)'
- unparsed cell pharmaceutics-14-00578-t004:row16:col5 = '(0.49; 0.54)'
- transposed table Gilliot_2022_table_8: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Gilliot_2022_table_8:row0:col1 = 'L·min−1'
- unparsed cell Gilliot_2022_table_8:row3:col1 = 'L·min−1'
- companion parameter table 8 transcribed (40 record(s))
- LLM selected parameter table(s) 4, 8

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.11 | not captured | not captured | ['Gilliot_2022_table_8:row0:col8'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tranexamic_acid/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gilliot_2022` / `Gilliot_2022::01_1_134`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
