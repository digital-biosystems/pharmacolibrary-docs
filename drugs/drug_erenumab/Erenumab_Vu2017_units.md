<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;erenumab&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/&quot;},{&quot;label&quot;:&quot;Vu_2017 \u00b7 units&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Erenumab_Vu2017_mean_estimate&quot;,&quot;label&quot;:&quot;Vu_2017_mean_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/Erenumab_Vu2017_mean_estimate.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Erenumab_Vu2017_mean_estimate&quot;,&quot;label&quot;:&quot;Vu_2017_mean_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/Erenumab_Vu2017_mean_estimate.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Erenumab_Vu2017_shrinkage&quot;,&quot;label&quot;:&quot;Vu_2017_shrinkage&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/Erenumab_Vu2017_shrinkage.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Erenumab_Vu2017_shrinkage&quot;,&quot;label&quot;:&quot;Vu_2017_shrinkage&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/Erenumab_Vu2017_shrinkage.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Erenumab_Vu2017_units&quot;,&quot;label&quot;:&quot;Vu_2017_units&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/Erenumab_Vu2017_units.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Erenumab_Vu2017_units&quot;,&quot;label&quot;:&quot;Vu_2017_units&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/Erenumab_Vu2017_units.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# erenumab — `Erenumab_Vu2017_units`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

## Citation
Vu T; Ma P; Chen JS; de Hoon J; Van Hecken A; Yan L; et al. et al. (2017). Pharmaceutical research 34
  ·  DOI: [10.1007/s11095-017-2183-6](https://doi.org/10.1007/s11095-017-2183-6)

## Model component
<dbs-pgx drug="erenumab" model-id="Erenumab_Vu2017_units" status="rejected" stale="false" population="healthy and migraine subjects" measured-compound="erenumab" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Absorption rate (ka) | Q49 | not captured | exact |
| Internalization rate (kint) | Q334 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'Absorption rate (ka)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'Receptor degradation rate (kdeg)' — extend the ontology if this is a real PK parameter (source ['Tab3:row8:col1'])
- unit_dimension_unknown: 'kint' (kint)
- dropped value-less row: '95% CI'
- dropped value-less row: 'Mean CL and Vc estimates at 70 kg; individual body weight effect on CL and Vc were estimated as Individual CL = 0.214 (weight/70)0.75 L/day and Individual Vc = 4.27 (weight/70) L'
- dropped value-less row: 'CV'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=erenumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'units' subgroup of Vu_2017 (paper reports 3 populations: mean estimate, shrinkage (%), units)

**Extraction notes:**
- unparsed cell Tab3:row1:col3 = '0.213 (0.191, 0.243)'
- unparsed cell Tab3:row2:col3 = '4.2 (3.4, 5.38)'
- unparsed cell Tab3:row3:col3 = '3.25 (1.41, 6.79)'
- unparsed cell Tab3:row4:col3 = '2.75 (2.2, 3.18)'
- unparsed cell Tab3:row5:col3 = '0.428 (0.346, 0.519)'
- unparsed cell Tab3:row6:col3 = '74 (66, 85)'
- unparsed cell Tab3:row7:col3 = '53 (40.6, 65.4)'
- unparsed cell Tab3:row8:col3 = '0.222 (0.144, 0.427)'
- unparsed cell Tab3:row9:col3 = '18.1 (10.6, 30.6)'
- unparsed cell Tab3:row10:col3 = '0.0347 (0.0251, 0.0442)'
- unparsed cell Tab3:row11:col3 = '25 (21, 29.6)'
- unparsed cell Tab3:row12:col3 = '43.8 (35.3, 53)'
- unparsed cell Tab3:row13:col3 = '58.8 (45.6, 73.3)'
- unparsed cell Tab3:row14:col3 = '42.1 (33.5, 51.7)'
- unparsed cell Tab3:row15:col3 = '−0.0719 (−0.127, –0.0371)'
- unparsed cell Tab3:row16:col3 = '0.0664 (0.0396, 0.101)'
- unparsed cell Tab3:row17:col3 = '17.6 (15.9, 19.7)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | fail | [time] | ka | not captured | not captured | ['Tab3:row5:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_erenumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Vu_2017` / `Vu_2017::units`)


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
