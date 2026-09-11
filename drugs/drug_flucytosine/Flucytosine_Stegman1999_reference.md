# flucytosine — `Flucytosine_Stegman1999_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `5-fluorocytosine`, measured `5-fluorouracil`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Stegman LD; Rehemtulla A; Beattie B; Kievit E; Lawrence TS; Blasberg RG; et al. et al. (1999). Proceedings of the National Academy of Sciences of the United States of America 96
  ·  DOI: [10.1073/pnas.96.17.9821](https://doi.org/10.1073/pnas.96.17.9821)

## Model component
<dbs-pgx drug="flucytosine" model-id="Flucytosine_Stegman1999_reference" status="rejected" stale="false" population="human tumor xenografts in nude mice" measured-compound="5-fluorouracil" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['Stegman_1999_table_1:row1:col1', 'Stegman_1999_table_1:row1:col2', 'Stegman_1999_table_1:row1:col3', 'Stegman_1999_table_1:row1:col4'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['Stegman_1999_table_1:row2:col1', 'Stegman_1999_table_1:row2:col2', 'Stegman_1999_table_1:row2:col3', 'Stegman_1999_table_1:row2:col4'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['Stegman_1999_table_1:row3:col1', 'Stegman_1999_table_1:row3:col2', 'Stegman_1999_table_1:row3:col3', 'Stegman_1999_table_1:row3:col4'])
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['Stegman_1999_table_1:row4:col1', 'Stegman_1999_table_1:row4:col2', 'Stegman_1999_table_1:row4:col3', 'Stegman_1999_table_1:row4:col4'])
- dropped unlinked row (NIL): '5' — extend the ontology if this is a real PK parameter (source ['Stegman_1999_table_1:row5:col1', 'Stegman_1999_table_1:row5:col2', 'Stegman_1999_table_1:row5:col3', 'Stegman_1999_table_1:row5:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=5-fluorouracil
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Stegman_1999_table_1:row0:col1 = 'k1 app'
- unparsed cell Stegman_1999_table_1:row0:col2 = 'k3 app'
- unparsed cell Stegman_1999_table_1:row0:col3 = '(k2 app ϩ k3 app )'
- unparsed cell Stegman_1999_table_1:row6:col1 = '0.4860 Ϯ 0.27'
- unparsed cell Stegman_1999_table_1:row6:col2 = '0.0023 Ϯ 0.0007'
- unparsed cell Stegman_1999_table_1:row6:col3 = '0.0013 Ϯ 0.0007'
- unparsed cell Stegman_1999_table_1:row6:col4 = '0.0028 Ϯ 0.0035'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_flucytosine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Stegman_1999` / `Stegman_1999::human tumor xenografts in nude mice`)


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
