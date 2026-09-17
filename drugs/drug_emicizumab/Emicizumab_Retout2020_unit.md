<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;emicizumab&quot;,&quot;href&quot;:&quot;drugs/drug_emicizumab/&quot;},{&quot;label&quot;:&quot;Retout_2020 \u00b7 unit&quot;}]"></div>

# emicizumab — `Emicizumab_Retout2020_unit`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Retout S; Schmitt C; Petry C; Mercier F; Frey N et al. (2020). Clinical pharmacokinetics 59
  ·  DOI: [10.1007/s40262-020-00904-z](https://doi.org/10.1007/s40262-020-00904-z)

## Model component
<dbs-pgx drug="emicizumab" model-id="Emicizumab_Retout2020_unit" status="rejected" stale="false" population="adult and pediatric persons with hemophilia A" measured-compound="emicizumab" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| KA | Q49 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Fixed effects (BW 70 kg; ALB 45 g/L; age &lt; 30 years)' — extend the ontology if this is a real PK parameter (source ['Tab4:row1:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=emicizumab
- population split: 'unit' subgroup of Retout_2020 (paper reports 6 populations: 1.5 mg/kg qw, 3 mg/kg q2w, 6 mg/kg q4w, estimate, shrinkage (%), unit)

**Extraction notes:**
- unparsed cell Tab4:row6:col3 = '8.6b'
- unparsed cell Tab4:row7:col3 = '8.9b'
- unparsed cell Tab4:row8:col3 = '14.7b'
- unparsed cell Tab4:row9:col3 = '31.8c'
- unparsed cell Tab4:row13:col2 = '1.57 × 10–2'
- unparsed cell Tab4:row13:col4 = '0.696 × 10–2 to 2.44 × 10–2'
- unparsed cell Tab4:row15:col2 = '− 0.215'
- unparsed cell Tab4:row15:col4 = '− 0.298 to − 0.132'
- unparsed cell Tab4:row16:col2 = '6.51 × 10–3'
- unparsed cell Tab4:row16:col4 = '4.43 × 10–3 to 8.59 × 10–3'
- unparsed cell Retout_2020_table_5:row1:col2 = '25.1 [13.9–41.4]'
- unparsed cell Retout_2020_table_5:row1:col4 = '25.1 [13.9–41.4]'
- unparsed cell Retout_2020_table_5:row1:col6 = '25.1 [13.9–41.4]'
- unparsed cell Retout_2020_table_5:row2:col2 = '1.27 [0.897–3.80]'
- unparsed cell Retout_2020_table_5:row2:col4 = '1.27 [0.897–3.80]'
- unparsed cell Retout_2020_table_5:row2:col6 = '1.27 [0.897–3.80]'
- unparsed cell Retout_2020_table_5:row3:col2 = '53.9 [30.9–82.4]'
- unparsed cell Retout_2020_table_5:row3:col4 = '57.0 [33.6–85.9]'
- unparsed cell Retout_2020_table_5:row3:col6 = '65.9 [40.4–97.7]'
- unparsed cell Retout_2020_table_5:row4:col2 = '2.50 [2.25–3.00]'
- unparsed cell Retout_2020_table_5:row4:col4 = '3.50 [3.00–5.25]'
- unparsed cell Retout_2020_table_5:row4:col6 = '4.50 [2.50–10.0]'
- unparsed cell Retout_2020_table_5:row5:col2 = '49.9 [28.4–78.7]'
- unparsed cell Retout_2020_table_5:row5:col4 = '45.6 [24.9–75.0]'
- unparsed cell Retout_2020_table_5:row5:col6 = '36.5 [17.7–64.7]'
- unparsed cell Retout_2020_table_5:row6:col2 = '1.07 [1.03–1.15]'
- unparsed cell Retout_2020_table_5:row6:col4 = '1.24 [1.12–1.49]'
- unparsed cell Retout_2020_table_5:row6:col6 = '1.74 [1.36–2.85]'
- unparsed cell Retout_2020_table_5:row7:col2 = '366 [211–568]'
- unparsed cell Retout_2020_table_5:row7:col4 = '733 [423–1135]'
- unparsed cell Retout_2020_table_5:row7:col6 = '1465 [845–2271]'
- unparsed cell Retout_2020_table_5:row8:col2 = '52.3 [30.2–81.1]'
- unparsed cell Retout_2020_table_5:row8:col4 = '52.3 [30.2–81.1]'
- unparsed cell Retout_2020_table_5:row8:col6 = '52.3 [30.2–81.1]'
- companion parameter table 5 transcribed (24 record(s), model stage 'final')
- LLM selected parameter table(s) 4, 5
- skipped illustrative/example figure caption(s) Fig2 — per-individual fit, not model parameters

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

- scholar stages: `../../../knowledgebase/drugs/drug_emicizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Retout_2020` / `Retout_2020::unit`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
