<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;levofloxacin&quot;,&quot;href&quot;:&quot;drugs/drug_levofloxacin/&quot;},{&quot;label&quot;:&quot;Setiawan_2022 \u00b7 shrink&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levofloxacin_Setiawan2022_mean&quot;,&quot;label&quot;:&quot;Setiawan_2022_mean&quot;,&quot;href&quot;:&quot;drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_mean.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levofloxacin_Setiawan2022_mean&quot;,&quot;label&quot;:&quot;Setiawan_2022_mean&quot;,&quot;href&quot;:&quot;drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_mean.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levofloxacin_Setiawan2022_median&quot;,&quot;label&quot;:&quot;Setiawan_2022_median&quot;,&quot;href&quot;:&quot;drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_median.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levofloxacin_Setiawan2022_median&quot;,&quot;label&quot;:&quot;Setiawan_2022_median&quot;,&quot;href&quot;:&quot;drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_median.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levofloxacin_Setiawan2022_shrink&quot;,&quot;label&quot;:&quot;Setiawan_2022_shrink&quot;,&quot;href&quot;:&quot;drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_shrink.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Levofloxacin_Setiawan2022_shrink&quot;,&quot;label&quot;:&quot;Setiawan_2022_shrink&quot;,&quot;href&quot;:&quot;drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_shrink.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# levofloxacin — `Levofloxacin_Setiawan2022_shrink`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

## Citation
Setiawan E; Abdul-Aziz MH; Cotta MO; Susaniwati S; Cahjono H; Sari IY; et al. et al. (2022). Scientific reports 12
  ·  DOI: [10.1038/s41598-022-12627-1](https://doi.org/10.1038/s41598-022-12627-1)

## Model component
<dbs-pgx drug="levofloxacin" model-id="Levofloxacin_Setiawan2022_shrink" status="rejected" stale="false" population="hospitalized adult patients" measured-compound="levofloxacin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Vc (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'CL (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'Q (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'Vp (L)' (captured trailing unit 'L' for child rows)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=levofloxacin
- population split: 'shrink (%)' subgroup of Setiawan_2022 (paper reports 3 populations: mean, median, shrink (%))

**Extraction notes:**
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

- scholar stages: `../../../knowledgebase/drugs/drug_levofloxacin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Setiawan_2022` / `Setiawan_2022::shrink`)


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
