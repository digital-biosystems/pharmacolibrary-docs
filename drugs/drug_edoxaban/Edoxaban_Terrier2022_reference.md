# edoxaban — `Edoxaban_Terrier2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Terrier J; Gaspar F; Guidi M; Fontana P; Daali Y; Csajka C; et al. et al. (2022). Clinical pharmacology and therapeutics 112
  ·  DOI: [10.1002/cpt.2649](https://doi.org/10.1002/cpt.2649)

## Model component
<dbs-pgx drug="edoxaban" model-id="Edoxaban_Terrier2022_reference" status="rejected" stale="false" population="mixed (AF, VTE, healthy volunteers)" measured-compound="dabigatran, apixaban, rivaroxaban, edoxaban" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Leil TA et al (2014)' — extend the ontology if this is a real PK parameter (source ['Terrier_2022_table_S34:row1:col3'])
- dropped unlinked row (NIL): 'Byon W et al (2017) Total subjects' — extend the ontology if this is a real PK parameter (source ['Terrier_2022_table_S34:row2:col2', 'Terrier_2022_table_S34:row2:col3'])
- dropped unlinked row (NIL): 'Ueshima S et al (2018)' — extend the ontology if this is a real PK parameter (source ['Terrier_2022_table_S34:row3:col2', 'Terrier_2022_table_S34:row3:col3'])
- dropped value-less row: 'Cirincione B et al (2018)' (captured trailing unit '2018' for child rows)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dabigatran, apixaban, rivaroxaban, edoxaban
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) S32, S33, S34, S35
- transposed table Terrier_2022_table_S32: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- transposed table Terrier_2022_table_S33: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Terrier_2022_table_S34:row1:col1 = '2 compartments, first-order absorption with a linear elimination'
- unparsed cell Terrier_2022_table_S34:row1:col6 = '34.1 (0.328-0.356 95%CI) (proportional) 3.38 (2.02-5.64 95%CI) (additive)'
- unparsed cell Terrier_2022_table_S34:row2:col1 = '2 compartments, first-order absorption with a linear elimination'
- unparsed cell Terrier_2022_table_S34:row3:col1 = '1 compartment first-order absorption with a linear elimination'
- unparsed cell Terrier_2022_table_S34:row3:col6 = '34 (12.0) (proportional)'
- unparsed cell Terrier_2022_table_S34:row4:col1 = '2 compartments, first-order absorption with a linear elimination'
- unparsed cell Terrier_2022_table_S34:row4:col6 = '31.00 ± 0.284 (± SE) (HV and Studies Japan NVAF phase II28, Japan ACS phase II); 66.7 ± 1.87 (± SE) (Study APPRAISE 1); 45.7 ± 1.65 (± SE) (Study ARISTOTLE) (proportional)'
- transposed table Terrier_2022_table_S35: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_edoxaban/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Terrier_2022` / `Terrier_2022::reference`)


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
