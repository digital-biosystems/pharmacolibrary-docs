# telmisartan — `Telmisartan_Tatami2003_4`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Tatami S; Sarashina A; Yamamura N; Igarashi T; Tanigawara Y et al. (2003). Drug metabolism and pharmacokinetics 18
  ·  DOI: [10.2133/dmpk.18.203](https://doi.org/10.2133/dmpk.18.203)

## Model component
<dbs-pgx drug="telmisartan" model-id="Telmisartan_Tatami2003_4" status="extracted" stale="false" population="healthy volunteers and hypertensive patients" measured-compound="" parameterization="" topology=""></dbs-pgx>

**Parameterization:** not captured.

## Parameters
_No resolved parameters._

## Departures & gaps

**Extraction notes:**
- final table tab_3: grid unusable → re-running vision table extraction for Tatami_2003
- unparsed cell Tatami_2003_table_3:row6:col1 = '5 0No'
- unparsed cell Tatami_2003_table_3:row7:col1 = '5 0Y e s'
- unparsed cell Tatami_2003_table_3:row8:col1 = '5 0Y e s'
- companion parameter table 3 transcribed (87 record(s))
- unparsed cell Tatami_2003_table_4:row0:col3 = '(36.3, 96.9)'
- unparsed cell Tatami_2003_table_4:row1:col3 = '(129.0, 318.8)'
- unparsed cell Tatami_2003_table_4:row2:col3 = '(60.1, 114.2)'
- unparsed cell Tatami_2003_table_4:row3:col3 = '(703, 1597)'
- unparsed cell Tatami_2003_table_4:row4:col3 = '(0.256, 0.444)'
- unparsed cell Tatami_2003_table_4:row5:col3 = '(0.345, 0.484)'
- unparsed cell Tatami_2003_table_4:row7:col3 = '(0.140, 0.742)'
- companion parameter table 4 transcribed (21 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['telmisartan:review'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['telmisartan:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['telmisartan:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['telmisartan:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 22.04 | not captured | not captured | ['telmisartan:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 22 L/h | not captured | not captured | ['telmisartan:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 500 L | not captured | not captured | ['telmisartan:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_telmisartan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tatami_2003` / `Tatami_2003::4`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
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
