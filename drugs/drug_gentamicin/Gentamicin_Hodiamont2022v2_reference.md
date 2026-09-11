# gentamicin — `Gentamicin_Hodiamont2022v2_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Hodiamont CJ; van den Broek AK; de Vroom SL; Prins JM; Mathôt RAA; van Hest RM et al. (2022). Clinical pharmacokinetics 61
  ·  DOI: [10.1007/s40262-022-01143-0](https://doi.org/10.1007/s40262-022-01143-0)

## Model component
<dbs-pgx drug="gentamicin" model-id="Gentamicin_Hodiamont2022v2_reference" status="rejected" stale="false" population="various patient populations" measured-compound="gentamicin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gentamicin

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Hodiamont_2022_2_table_p3_1:row0:col1 = '4.3–5.12 [3]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row0:col2 = '13.3–24.5 [11, 47, 49, 50, 52]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row0:col3 = '15.8–36 [3]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row0:col4 = '5.8–11.9 [3]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row1:col1 = '4.3–4.6 [47–49]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row1:col2 = '10.5–20.3 [1, 47, 49, 50, 52]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row1:col3 = '17.4 [46]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row1:col4 = '18.5 [46]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row2:col1 = '1.15–5.7 [57]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row2:col2 = '19–53c [57]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row2:col3 = '29.3–83.7 [57]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row2:col4 = '10.9–64.4 [57, 59]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row3:col1 = '5.6–9.1 [90–92]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row3:col2 = '17.5–24.5 [89, 91, 92]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row3:col3 = '16–39 [3]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row3:col4 = '21.6–49 [3]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row4:col1 = '0.49–6.3 [89, 112, 114–117]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row4:col2 = '26.6–63.7 [89, 111–117]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row4:col3 = '16.1–58.6 [3]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row4:col4 = '10.3–35 [3]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row5:col1 = '3.0b [126]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row5:col2 = '14.6–35.9b [124, 126]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row5:col3 = '20.5 [126]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row5:col4 = '10.5 [126]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row6:col1 = '4.68–6.96ac [63, 129–132]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row6:col2 = '12.4–23.1b [63, 64, 129–132]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row6:col3 = '0.3d [137]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row6:col4 = '50.7 [137]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row7:col1 = '0.25ac [141]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row7:col2 = '21.0 [141]'
- text-pointer recovery: parsed 0 structural record(s) from the flattened table 1 sentence
- LLM region Hodiamont_2022_2:discussion_prose: no JSON records returned

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_gentamicin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hodiamont_2022_2` / `Hodiamont_2022_2::various patient populations`)


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
