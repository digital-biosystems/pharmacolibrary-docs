# atenolol — `Atenolol_Wjcicki2003_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Wójcicki J; Jaroszynska M; Droździk M; Pawlik A; Gawrońska-Szklarz B; Sterna R et al. (2003). Biopharmaceutics & drug disposition 24
  ·  DOI: [10.1002/bdd.357](https://doi.org/10.1002/bdd.357)

## Model component
<dbs-pgx drug="atenolol" model-id="Atenolol_Wjcicki2003_reference" status="rejected" stale="false" population="obese subjects with normolipaemia or hyperlipidaemia and healthy lean volunteers" measured-compound="propranolol and atenolol" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '8' — extend the ontology if this is a real PK parameter (source ['tab_2:row10:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=propranolol and atenolol

**Extraction notes:**
- unparsed cell tab_2:row2:col1 = '125.0 AE 4.2 81.0 AE 2.6 75.6 AE 1.8 132.2 AE 4.7 87.2 AE 2.4 61.4 AE 4.6 130.0 AE 5.6 88.3 AE 2.5 73.7 AE 5.8'
- unparsed cell tab_2:row3:col1 = '122.2 AE 2.9 81.4 AE 2.5 68.9 AE 1.2 a 126.7 AE 5.6 84.4 AE 3.2 56.7 AE 3.2 a 115.8 AE 4.0 a 88.3 AE 1.0 67.8 AE 4.8'
- unparsed cell tab_2:row4:col1 = '116.1 AE 2.2 a 78.9 AE 2.6 66.3 AE 1.2 a 122.8 AE 5.9 83.3 AE 3.1 57.1 AE 2.2 113.3 AE 1.7 a 85.8 AE 1.5 64.5 AE 4.7 a'
- unparsed cell tab_2:row5:col1 = '117.5 AE 2.6 78.6 AE 2.8 65.6 AE 1.6 a 118.9 AE 7.0 83.3 AE 3.7 56.1 AE 2.7 121.7 AE 6.7 90.0 AE 3.4 62.3 AE 5.0 a'
- unparsed cell tab_2:row6:col1 = '112.5 AE 2.7 a 76.8 AE 2.2 a 62.7 AE 1.1 a 117.2 AE 6.7 a 77.8 AE 4.7 a 55.2 AE 2.2 115.8 AE 6.0 86.7 AE 1.7 64.0 AE 5.8 a'
- unparsed cell tab_2:row7:col1 = '112.2 AE 2.9 a 77.5 AE 2.3 61.9 AE 1.4 a 111.1 AE 4.8 a 76.7 AE 3.2 51.8 AE 2.4 a 113.3 AE 5.7 80.8 AE 4.0 a 63.0 AE 5.2 a'
- unparsed cell tab_2:row8:col1 = '114.2 AE 3.1 a 74.2 AE 2.3 64.5 AE 1.3 a 109.4 AE 6.2 70.6 AE 4.3 56.0 AE 3.0 115.0 AE 5.5 79.2 AE 3.7 66.3 AE 6.2'
- unparsed cell tab_2:row9:col1 = '113.9 AE 4.2 a 74.4 AE 2.8 a 65.8 AE 1.4 122.8 AE 4.7 75.6 AE 3.3 56.0 AE 2.1 120.8 AE 4.4 85.0 AE 3.6 a 69.3 AE 6.2 a'

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

- scholar stages: `../../../knowledgebase/drugs/drug_atenolol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wójcicki_2003` / `Wójcicki_2003::reference`)


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
