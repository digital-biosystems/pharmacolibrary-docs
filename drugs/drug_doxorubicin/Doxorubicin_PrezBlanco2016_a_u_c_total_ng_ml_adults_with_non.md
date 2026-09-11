# doxorubicin — `Doxorubicin_PrezBlanco2016_a_u_c_total_ng_ml_adults_with_non`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — engineer.** parent/metabolite records are not currently produced as models — the composite builds but does not survive simulation<br><sub>evidence: `topology_template=parent_metabolite`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** no model exists yet, so there is nothing to judge.

**Steps:**
1. Not a curation fix — engineer limitation.
2. No curator action. Run the engineer for this drug.

<sub>owner: **engineer** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Pérez-Blanco JS; Santos-Buelga D; Fernández de Gatta MD; Hernández-Rivas JM; Martín A; García MJ et al. (2016). British journal of clinical pharmacology 82
  ·  DOI: [10.1111/bcp.13070](https://doi.org/10.1111/bcp.13070)

## Model component
<dbs-pgx drug="doxorubicin" model-id="Doxorubicin_PrezBlanco2016_a_u_c_total_ng_ml_adults_with_non" status="not_modelled" stale="false" population="adults with non-Hodgkin&#39;s lymphoma" measured-compound="" parameterization="" topology=""></dbs-pgx>

**Parameterization:** not captured.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Extraction notes:**
- unparsed cell tab_2:row2:col1 = 'À1 )'
- unparsed cell tab_2:row2:col2 = '6 2 . 4'
- unparsed cell tab_2:row2:col3 = '1 1 . 5'
- unparsed cell tab_2:row4:col1 = 'À1 )'
- unparsed cell tab_2:row4:col2 = '5 0 . 7'
- unparsed cell tab_2:row4:col3 = '1 8 . 4'
- unparsed cell tab_2:row6:col1 = 'À1 )'
- unparsed cell tab_2:row6:col2 = '2 8 . 4'
- unparsed cell tab_2:row6:col3 = '1 3 . 5'
- unparsed cell tab_2:row9:col1 = 'À1 )'
- unparsed cell tab_2:row9:col2 = '2 6 . 8'
- unparsed cell tab_2:row9:col3 = '4 2 . 9'
- unparsed cell tab_2:row12:col1 = 'À1 )'
- unparsed cell Pérez-Blanco_2016_table_2:row6:col2 = 'À1 )'
- unparsed cell Pérez-Blanco_2016_table_2:row7:col2 = 'À1 )'
- unparsed cell Pérez-Blanco_2016_table_2:row8:col2 = 'À1 )'
- unparsed cell Pérez-Blanco_2016_table_2:row9:col2 = 'À1 )'
- companion parameter table 2 transcribed (46 record(s))
- LLM selected parameter table(s) 2

## Validation

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_doxorubicin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Pérez-Blanco_2016` / `Pérez-Blanco_2016::a_u_c_total_ng_ml::adults with non-Hodgkin's lymphoma`)


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
