<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;levofloxacin&quot;,&quot;href&quot;:&quot;drugs/drug_levofloxacin/&quot;},{&quot;label&quot;:&quot;Setiawan_2022 \u00b7 median&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levofloxacin_Setiawan2022_mean&quot;,&quot;label&quot;:&quot;Setiawan_2022_mean&quot;,&quot;href&quot;:&quot;drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_mean.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levofloxacin_Setiawan2022_median&quot;,&quot;label&quot;:&quot;Setiawan_2022_median&quot;,&quot;href&quot;:&quot;drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_median.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Levofloxacin_He2024_reference&quot;,&quot;label&quot;:&quot;He_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_levofloxacin/Levofloxacin_He2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levofloxacin_Setiawan2022_mean&quot;,&quot;label&quot;:&quot;Setiawan_2022_mean&quot;,&quot;href&quot;:&quot;drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_mean.md&quot;,&quot;status&quot;:&quot;None \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levofloxacin_Setiawan2022_median&quot;,&quot;label&quot;:&quot;Setiawan_2022_median&quot;,&quot;href&quot;:&quot;drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_median.md&quot;,&quot;status&quot;:&quot;None \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Levofloxacin_Setiawan2022_shrink&quot;,&quot;label&quot;:&quot;Setiawan_2022_shrink&quot;,&quot;href&quot;:&quot;drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_shrink.md&quot;,&quot;status&quot;:&quot;None \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# levofloxacin — `Levofloxacin_Setiawan2022_median`

> ## <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

> ⚠️ **STALE** — review status `curated_candidate` (reviewed 2026-09-17 15:08:42.472047+00:00) predates the upstream re-run (2026-09-18 06:01:42.675294+00:00). Current validate status: `not captured`.

## Citation
Setiawan E; Abdul-Aziz MH; Cotta MO; Susaniwati S; Cahjono H; Sari IY; et al. et al. (2022). Scientific reports 12
  ·  DOI: [10.1038/s41598-022-12627-1](https://doi.org/10.1038/s41598-022-12627-1)

## Model component
<dbs-pgx drug="levofloxacin" model-id="Levofloxacin_Setiawan2022_median" status="" stale="true" population="hospitalized adult patients" measured-compound="" parameterization="" topology=""></dbs-pgx>

**Parameterization:** not captured.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=levofloxacin
- population split: 'median' subgroup of Setiawan_2022 (paper reports 3 populations: mean, median, shrink (%))

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=levofloxacin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_levofloxacin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Setiawan_2022` / `Setiawan_2022::median`)
- model: `../../../knowledgebase/drugs/drug_levofloxacin/models/modelica/Levofloxacin_Setiawan2022_median.mo`
- deviation: `../../../knowledgebase/drugs/drug_levofloxacin/models/modelica/Levofloxacin_Setiawan2022_median.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_levofloxacin/models/modelica/Levofloxacin_Setiawan2022_median.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_median/Levofloxacin_Setiawan2022_median_modelica.zip" download>Levofloxacin_Setiawan2022_median_modelica.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_median/Levofloxacin_Setiawan2022_median_matlab.zip" download>Levofloxacin_Setiawan2022_median_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_median/Levofloxacin_Setiawan2022_median_matlab_simbio.zip" download>Levofloxacin_Setiawan2022_median_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_median/Levofloxacin_Setiawan2022_median_sbml.zip" download>Levofloxacin_Setiawan2022_median_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_median/Levofloxacin_Setiawan2022_median_cellml.zip" download>Levofloxacin_Setiawan2022_median_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_median/Levofloxacin_Setiawan2022_median.svg" alt="Levofloxacin_Setiawan2022_median diagram"><figcaption>The structure OpenModelica draws for this model, with this record's parameter values in the component labels.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_median/Levofloxacin_Setiawan2022_median_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_median/Levofloxacin_Setiawan2022_median_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C` · parameters `Levofloxacin_Setiawan2022_median_params.json` · controls `Levofloxacin_Setiawan2022_median_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
