# liraglutide — `Liraglutide_Overgaard2016_total`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Overgaard RV; Petri KC; Jacobsen LV; Jensen CB et al. (2016). Clinical pharmacokinetics 55
  ·  DOI: [10.1007/s40262-016-0410-7](https://doi.org/10.1007/s40262-016-0410-7)

## Model component
<dbs-pgx drug="liraglutide" model-id="Liraglutide_Overgaard2016_total" status="rejected" stale="false" population="overweight and obese adults" measured-compound="liraglutide" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '1.8' — extend the ontology if this is a real PK parameter (source ['Tab1:row3:col3'])
- dropped unlinked row (NIL): '3.0' — extend the ontology if this is a real PK parameter (source ['Tab1:row4:col3'])
- dropped unlinked row (NIL): 'Female' — extend the ontology if this is a real PK parameter (source ['Tab1:row6:col3'])
- dropped unlinked row (NIL): 'Male' — extend the ontology if this is a real PK parameter (source ['Tab1:row7:col3'])
- dropped unlinked row (NIL): 'Mean (SD)' — extend the ontology if this is a real PK parameter (source ['Tab1:row9:col3', 'Tab1:row24:col3', 'Tab1:row27:col3', 'Tab1:row30:col3', 'Tab1:row34:col3', 'Tab1:row37:col3', 'Tab1:row40:col3'])
- dropped unlinked row (NIL): '≥75' — extend the ontology if this is a real PK parameter (source ['Tab1:row10:col3'])
- dropped unlinked row (NIL): '70–74' — extend the ontology if this is a real PK parameter (source ['Tab1:row11:col3'])
- dropped unlinked row (NIL): '65–69' — extend the ontology if this is a real PK parameter (source ['Tab1:row12:col3'])
- dropped unlinked row (NIL): '18–64' — extend the ontology if this is a real PK parameter (source ['Tab1:row13:col3'])
- dropped unlinked row (NIL): 'White' — extend the ontology if this is a real PK parameter (source ['Tab1:row15:col3'])
- dropped unlinked row (NIL): 'Black/African American' — extend the ontology if this is a real PK parameter (source ['Tab1:row16:col3'])
- dropped unlinked row (NIL): 'Asian' — extend the ontology if this is a real PK parameter (source ['Tab1:row17:col3'])
- dropped unlinked row (NIL): 'Other' — extend the ontology if this is a real PK parameter (source ['Tab1:row18:col3'])
- dropped unlinked row (NIL): 'Hispanic or Latino' — extend the ontology if this is a real PK parameter (source ['Tab1:row20:col3'])
- dropped unlinked row (NIL): 'Non-Hispanic or -Latino' — extend the ontology if this is a real PK parameter (source ['Tab1:row21:col3'])
- dropped unlinked row (NIL): 'Range' — extend the ontology if this is a real PK parameter (source ['Tab1:row25:col3', 'Tab1:row28:col3', 'Tab1:row31:col3', 'Tab1:row35:col3', 'Tab1:row38:col3', 'Tab1:row41:col3'])
- dropped unlinked row (NIL): '&lt;29.9' — extend the ontology if this is a real PK parameter (source ['Tab1:row43:col3'])
- dropped unlinked row (NIL): '30–34.9' — extend the ontology if this is a real PK parameter (source ['Tab1:row44:col3'])
- dropped unlinked row (NIL): '35–39.9' — extend the ontology if this is a real PK parameter (source ['Tab1:row45:col3'])
- dropped unlinked row (NIL): '≥40' — extend the ontology if this is a real PK parameter (source ['Tab1:row46:col3'])
- dropped unlinked row (NIL): 'Normoglycaemic' — extend the ontology if this is a real PK parameter (source ['Tab1:row48:col3'])
- dropped unlinked row (NIL): 'Prediabetic' — extend the ontology if this is a real PK parameter (source ['Tab1:row49:col3'])
- dropped unlinked row (NIL): 'Type 2 diabetes' — extend the ontology if this is a real PK parameter (source ['Tab1:row50:col3'])
- dropped unlinked row (NIL): '≥90 (normal)' — extend the ontology if this is a real PK parameter (source ['Tab1:row52:col3'])
- dropped unlinked row (NIL): '≥60 and &lt;90 (mild)' — extend the ontology if this is a real PK parameter (source ['Tab1:row53:col3'])
- dropped unlinked row (NIL): '≥30 and &lt;60 (moderate)' — extend the ontology if this is a real PK parameter (source ['Tab1:row54:col3'])
- dropped unlinked row (NIL): '&lt;30 (severe)' — extend the ontology if this is a real PK parameter (source ['Tab1:row55:col3'])
- table mostly unlinked (27/27 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=liraglutide
- status held at route_to_review — not promoted
- population split: 'total' subgroup of Overgaard_2016 (paper reports 3 populations: total, trial 1, trial 2)

**Extraction notes:**
- LLM selected parameter table(s) S1

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

- scholar stages: `../../../knowledgebase/drugs/drug_liraglutide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Overgaard_2016` / `Overgaard_2016::total`)


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
