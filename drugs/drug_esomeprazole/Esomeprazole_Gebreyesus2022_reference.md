# esomeprazole — `Esomeprazole_Gebreyesus2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Gebreyesus MS; Decloedt EH; Cluver CA; Hunfeld NGM; Helgadóttir H; Björnsson ES; et al. et al. (2022). British journal of clinical pharmacology 88
  ·  DOI: [10.1111/bcp.15416](https://doi.org/10.1111/bcp.15416)

## Model component
<dbs-pgx drug="esomeprazole" model-id="Esomeprazole_Gebreyesus2022_reference" status="rejected" stale="false" population="pregnant participants with preterm preeclampsia and non-pregnant participants" measured-compound="esomeprazole" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=esomeprazole

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Gebreyesus_2022_table_p4_1:row0:col1 = '24.3 (20.5, 29.3)'
- unparsed cell Gebreyesus_2022_table_p4_1:row0:col2 = 'BSV: 23.1 (15.2, 32.9)'
- unparsed cell Gebreyesus_2022_table_p4_1:row1:col1 = '7.87 (6.04, 9.75)'
- unparsed cell Gebreyesus_2022_table_p4_1:row1:col2 = 'BSV: 23.1 (15.2, 32.9)'
- unparsed cell Gebreyesus_2022_table_p4_1:row2:col1 = '14.4 (8.70, 20.3)'
- unparsed cell Gebreyesus_2022_table_p4_1:row3:col1 = '6.47 (2.80, 11.3)'
- unparsed cell Gebreyesus_2022_table_p4_1:row4:col1 = '7.71 (5.78, 10.5)'
- unparsed cell Gebreyesus_2022_table_p4_1:row5:col1 = '1 fixed'
- unparsed cell Gebreyesus_2022_table_p4_1:row5:col2 = 'BOV: 23.1 (15.2, 29.9)'
- unparsed cell Gebreyesus_2022_table_p4_1:row6:col1 = '4.80 (2.89, 6.39)'
- unparsed cell Gebreyesus_2022_table_p4_1:row6:col2 = 'BOV: 485 (211, 916)'
- unparsed cell Gebreyesus_2022_table_p4_1:row7:col1 = '1.75 (1.54, 1.94)'
- unparsed cell Gebreyesus_2022_table_p4_1:row7:col2 = 'BOV: 38.8 (29.1, 48.5)'
- unparsed cell Gebreyesus_2022_table_p4_1:row8:col1 = '10 Fixedᵈ'
- unparsed cell Gebreyesus_2022_table_p4_1:row10:col1 = '−54.9 (−63.5, −48.2)'
- unparsed cell Gebreyesus_2022_table_p4_1:row11:col1 = '+33.0 (10.0, 52.0)'
- unparsed cell Gebreyesus_2022_table_p4_1:row12:col1 = '−42.2 (−61.6, −14.9)'
- unparsed cell Gebreyesus_2022_table_p4_1:row13:col1 = '−71.9 (−79.3, −58.2)'
- unparsed cell Gebreyesus_2022_table_p4_1:row14:col1 = '−43.1 (−68.7, −30.0)'
- unparsed cell Gebreyesus_2022_table_p4_1:row16:col1 = '36.7 (32.7, 40.5)'
- unparsed cell Gebreyesus_2022_table_p4_1:row17:col1 = '20% of LLOQg'
- text-pointer recovery: parsed 0 structural record(s) from the flattened table 2 sentence

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

- scholar stages: `../../../knowledgebase/drugs/drug_esomeprazole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gebreyesus_2022` / `Gebreyesus_2022::reference`)


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
