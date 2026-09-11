# fluorouracil — `Fluorouracil_Schmulenson2023_shrinkage_patients_with_cancer`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span>

### Reviewer guidance

**What is wrong:** no model exists yet, so there is nothing to judge

**Steps:**
1. No curator action. Run the engineer for this drug.

<sub>owner: **engineer** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Schmulenson E; Zimmermann N; Müller L; Kapsa S; Sihinevich I; Jaehde U et al. (2023). Cancer medicine 12
  ·  DOI: [10.1002/cam4.5118](https://doi.org/10.1002/cam4.5118)

## Model component
<dbs-pgx drug="fluorouracil" model-id="Fluorouracil_Schmulenson2023_shrinkage_patients_with_cancer" status="not_modelled" stale="false" population="patients with cancer" measured-compound="" parameterization="" topology=""></dbs-pgx>

**Parameterization:** not captured.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Extraction notes:**
- unparsed cell cam45118-tbl-0005:row1:col3 = '223 (212–234)'
- unparsed cell cam45118-tbl-0005:row3:col3 = '0.796 (0.543–1.02)'
- unparsed cell cam45118-tbl-0005:row4:col3 = '0.0575 (0.0283–0.0885)'
- unparsed cell cam45118-tbl-0005:row6:col3 = '20.4 (15.8–24.5)'
- unparsed cell cam45118-tbl-0005:row7:col1 = '51.1 (fixed estimate)'
- unparsed cell cam45118-tbl-0005:row7:col3 = '51.1 (fixed estimate)'
- unparsed cell cam45118-tbl-0005:row9:col3 = '21.4 (19.0–23.8)'
- unparsed cell Schmulenson_2023_table_3:row0:col2 = '209 (198–220)'
- unparsed cell Schmulenson_2023_table_3:row2:col2 = '0.688 (0.455–0.933)'
- unparsed cell Schmulenson_2023_table_3:row4:col2 = '15.5 (10.3–19.2)'
- unparsed cell Schmulenson_2023_table_3:row6:col2 = '36.1 (18.7–52.2)'
- unparsed cell Schmulenson_2023_table_3:row8:col2 = '87.2 (54.7–139)'
- unparsed cell Schmulenson_2023_table_3:row9:col2 = '18.8 (14.7–23.6)'
- companion parameter table 3 transcribed (10 record(s))
- LLM selected parameter table(s) 3
- dropped sensitivity-analysis table(s) 5 from the LLM selection — perturbations of a model, not a model

## Validation

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fluorouracil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Schmulenson_2023` / `Schmulenson_2023::shrinkage::patients with cancer`)


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
