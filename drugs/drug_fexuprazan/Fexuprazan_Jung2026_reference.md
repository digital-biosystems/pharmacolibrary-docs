<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;fexuprazan&quot;,&quot;href&quot;:&quot;drugs/drug_fexuprazan/&quot;},{&quot;label&quot;:&quot;Jung_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fexuprazan_Jung2026_reference&quot;,&quot;label&quot;:&quot;Jung_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_fexuprazan/Fexuprazan_Jung2026_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fexuprazan — `Fexuprazan_Jung2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

## Citation
Jung W; Lee J; Jeon H; Sung T; Yun HY; Lee S; et al. et al. (2026). CPT: pharmacometrics & systems pharmacology 15
  ·  DOI: [10.1002/psp4.70181](https://doi.org/10.1002/psp4.70181)

## Model component
<dbs-pgx drug="fexuprazan" model-id="Fexuprazan_Jung2026_reference" status="rejected" stale="false" population="healthy adults" measured-compound="fexuprazan" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- column 'no.' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'parameter (unit)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- routed 'Error' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row2:col2'])
- dropped unlinked row (NIL): 'Physio' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row3:col1', 'psp470181-tbl-0002:row3:col2', 'psp470181-tbl-0002:row3:col3'])
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row4:col2'])
- dropped unlinked row (NIL): '5' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row5:col2'])
- dropped unlinked row (NIL): '6' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row6:col1', 'psp470181-tbl-0002:row6:col2'])
- dropped unlinked row (NIL): '7' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row7:col2'])
- dropped unlinked row (NIL): 'Feed' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row8:col1', 'psp470181-tbl-0002:row8:col3'])
- dropped unlinked row (NIL): '9' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row9:col2'])
- dropped unlinked row (NIL): 'Drug' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row10:col1', 'psp470181-tbl-0002:row10:col2', 'psp470181-tbl-0002:row10:col3'])
- dropped unlinked row (NIL): '11' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row11:col1', 'psp470181-tbl-0002:row11:col2'])
- dropped unlinked row (NIL): '12' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row12:col2'])
- dropped unlinked row (NIL): 'Effect' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row13:col1', 'psp470181-tbl-0002:row13:col3'])
- dropped unlinked row (NIL): '14' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row14:col2'])
- dropped unlinked row (NIL): '15' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row15:col1', 'psp470181-tbl-0002:row15:col2'])
- dropped unlinked row (NIL): '16' — extend the ontology if this is a real PK parameter (source ['psp470181-tbl-0002:row16:col2'])
- table mostly unlinked (15/16 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fexuprazan
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell psp470181-tbl-0002:row3:col4 = '98.28% (42.9) [15]'
- unparsed cell psp470181-tbl-0002:row4:col3 = '7.75% (150.5) [15]'
- unparsed cell psp470181-tbl-0002:row7:col3 = '60.05% (40.5) [26]'
- unparsed cell psp470181-tbl-0002:row8:col4 = '29.23% (31.8) [17]'
- unparsed cell psp470181-tbl-0002:row8:col5 = '10.98% (58.2) [0]'
- unparsed cell psp470181-tbl-0002:row10:col4 = '20.45% (38.3) [35]'
- unparsed cell psp470181-tbl-0002:row10:col5 = '31.56% (124.3) [1]'
- unparsed cell psp470181-tbl-0002:row11:col3 = '29.60% (30.3) [20]'
- unparsed cell psp470181-tbl-0002:row11:col4 = '161.14% (9.5) [0]'
- unparsed cell psp470181-tbl-0002:row12:col3 = '28.29% (42.3) [56]'
- unparsed cell psp470181-tbl-0002:row12:col4 = '89.36% (50.6) [0]'
- unparsed cell psp470181-tbl-0002:row15:col3 = '54.96% (39.4) [23]'
- unparsed cell psp470181-tbl-0002:row15:col4 = '31.56% (66.7) [0]'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fexuprazan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jung_2026` / `Jung_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
