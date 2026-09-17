<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;clarithromycin&quot;,&quot;href&quot;:&quot;drugs/drug_clarithromycin/&quot;},{&quot;label&quot;:&quot;Shah_2025 \u00b7 relative_standard_error&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clarithromycin_Shah2025_mean_parameter_estimates&quot;,&quot;label&quot;:&quot;Shah_2025_mean_parameter_estimates&quot;,&quot;href&quot;:&quot;drugs/drug_clarithromycin/Clarithromycin_Shah2025_mean_parameter_estimates.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clarithromycin_Shah2025_mean_parameter_estimates&quot;,&quot;label&quot;:&quot;Shah_2025_mean_parameter_estimates&quot;,&quot;href&quot;:&quot;drugs/drug_clarithromycin/Clarithromycin_Shah2025_mean_parameter_estimates.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clarithromycin_Shah2025_relative_standard_error&quot;,&quot;label&quot;:&quot;Shah_2025_relative_standard_error&quot;,&quot;href&quot;:&quot;drugs/drug_clarithromycin/Clarithromycin_Shah2025_relative_standard_error.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Clarithromycin_Shah2025_relative_standard_error&quot;,&quot;label&quot;:&quot;Shah_2025_relative_standard_error&quot;,&quot;href&quot;:&quot;drugs/drug_clarithromycin/Clarithromycin_Shah2025_relative_standard_error.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clarithromycin — `Clarithromycin_Shah2025_relative_standard_error`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

## Citation
Shah RV; Kipper K; Baker EH; Barker CIS; Oldfield I; Davidson HC; et al. et al. (2025). Antibiotics (Basel, Switzerland) 14
  ·  DOI: [10.3390/antibiotics14060559](https://doi.org/10.3390/antibiotics14060559)

## Model component
<dbs-pgx drug="clarithromycin" model-id="Clarithromycin_Shah2025_relative_standard_error" status="rejected" stale="false" population="critically ill adults" measured-compound="clarithromycin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'θCL (L/h/70 kg)' (captured trailing unit 'L/h/70 kg' for child rows)
- dropped value-less row: 'θV1 (L/70 kg)' (captured trailing unit 'L/70 kg' for child rows)
- dropped value-less row: 'θQ (L/h/70 kg)' (captured trailing unit 'L/h/70 kg' for child rows)
- dropped value-less row: 'θV2 (L/h/70 kg)' (captured trailing unit 'L/h/70 kg' for child rows)
- dropped value-less row: 'η2 CL'
- dropped value-less row: 'η2 V1'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clarithromycin
- population split: 'relative standard error (%)' subgroup of Shah_2025 (paper reports 2 populations: mean parameter estimates, relative standard error (%))

**Extraction notes:**
- unparsed cell antibiotics-14-00559-t002:row2:col4 = '7.8 (5.6–10.7)'
- unparsed cell antibiotics-14-00559-t002:row3:col4 = '25.3 (5.4–45.0)'
- unparsed cell antibiotics-14-00559-t002:row4:col4 = '62.4 (43.4–112.5)'
- unparsed cell antibiotics-14-00559-t002:row5:col4 = '62.0 (44.7–108.0)'
- unparsed cell antibiotics-14-00559-t002:row7:col4 = '0.51 (0.21–0.87)'
- unparsed cell antibiotics-14-00559-t002:row8:col4 = '1.58 (0.15–7.95)'
- unparsed cell antibiotics-14-00559-t002:row10:col4 = '0.0317 (0.0161–0.0553)'
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

- scholar stages: `../../../knowledgebase/drugs/drug_clarithromycin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Shah_2025` / `Shah_2025::relative_standard_error`)


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
