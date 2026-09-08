# simvastatin — `Simvastatin_Ogungbenro2019_structural_model`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Ogungbenro K; Wagner JB; Abdel-Rahman S; Leeder JS; Galetin A et al. (2019). European journal of clinical pharmacology 75
  ·  DOI: [10.1007/s00228-019-02697-y](https://doi.org/10.1007/s00228-019-02697-y)

## Model component
<dbs-pgx drug="simvastatin" model-id="Simvastatin_Ogungbenro2019_structural_model" status="extracted" stale="false" population="children and adolescents" measured-compound="" parameterization="" topology=""></dbs-pgx>

**Parameterization:** not captured.

## Parameters
_No resolved parameters._

## Departures & gaps

**Extraction notes:**
- unparsed cell Tab1:row2:col1 = 'D1 (h−1)'
- unparsed cell Tab1:row3:col3 = '2.07 [17]'
- unparsed cell Tab1:row5:col3 = '0.41 [0.5]'
- unparsed cell Tab1:row7:col3 = '1.70 [13]'
- unparsed cell Tab1:row8:col3 = '0.63 [3]'
- unparsed cell Tab1:row9:col3 = '2.17 [27]'
- unparsed cell Tab1:row10:col4 = '0.96 [9]'
- unparsed cell Tab1:row11:col3 = '0.79 [25]'
- unparsed cell Tab1:row14:col4 = '0.26 [32]'
- unparsed cell Tab1:row16:col3 = '0.67 [6]'
- unparsed cell Tab1:row18:col4 = '0.33 [60]'
- unparsed cell Tab1:row19:col3 = '0.18 [47]'
- unparsed cell Tab1:row20:col3 = '0.51 [4]'
- unparsed cell Tab1:row23:col4 = '0.29 [34]'
- unparsed cell Tab1:row24:col3 = '0.28 [42]'
- unparsed cell Tab1:row28:col1 = 'eps1SV'
- unparsed cell Tab1:row32:col1 = 'eps1SVA'
- unparsed cell Tab1:row35:col1 = 'eps1HMSV'
- unparsed cell Tab1:row39:col1 = 'eps1HMSVA'
- unparsed cell Tab1:row42:col1 = 'eps1DHSV'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['simvastatin:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['simvastatin:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab1:row7:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 228 L | not captured | not captured | ['simvastatin:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_simvastatin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ogungbenro_2019` / `Ogungbenro_2019::structural_model`)


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
