# warfarin — `Warfarin_Lane2012_s_warfarin_patients_on_long_term_warfarin`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span>

### Reviewer guidance

**What is wrong:** no model exists yet, so there is nothing to judge

**Steps:**
1. No curator action. Run the engineer for this drug.

<sub>owner: **engineer** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Lane S; Al-Zubiedi S; Hatch E; Matthews I; Jorgensen AL; Deloukas P; et al. et al. (2012). British journal of clinical pharmacology 73
  ·  DOI: [10.1111/j.1365-2125.2011.04051.x](https://doi.org/10.1111/j.1365-2125.2011.04051.x)

## Model component
<dbs-pgx drug="warfarin" model-id="Warfarin_Lane2012_s_warfarin_patients_on_long_term_warfarin" status="not_modelled" stale="false" population="patients on long-term warfarin therapy" measured-compound="" parameterization="" topology=""></dbs-pgx>

**Parameterization:** not captured.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Extraction notes:**
- unparsed cell tab_2:row3:col3 = '(0.131, 0.157)'
- unparsed cell tab_2:row3:col6 = '(0.115, 0.135)'
- unparsed cell tab_2:row4:col3 = '(13.5, 19.7)'
- unparsed cell tab_2:row4:col6 = '(8.63, 13.2)'
- unparsed cell tab_2:row6:col3 = '(0.037, 0.605)'
- unparsed cell tab_2:row6:col6 = '(0.391, 0.909)'
- unparsed cell tab_2:row7:col3 = '(-0.0122, -0.00412)'
- unparsed cell tab_2:row7:col6 = '(-0.0109, -0.00220)'
- unparsed cell tab_2:row10:col3 = '(0.982, 1.26)'
- unparsed cell tab_2:row13:col3 = '(0.732, 0.978)'
- unparsed cell tab_2:row14:col3 = '(0.561, 0.783)'
- unparsed cell tab_2:row15:col3 = '(0.355, 0.553)'
- unparsed cell tab_2:row16:col3 = '(0.259, 0.733)'
- unparsed cell tab_2:row17:col3 = '(0.222, 0.350)'
- unparsed cell tab_2:row18:col3 = '(0.606, 0.958)'
- unparsed cell tab_2:row21:col6 = '(0.648, 0.874)'
- unparsed cell tab_2:row22:col6 = '(0.120, 0.868)'
- unparsed cell tab_2:row23:col6 = '(0.701, 0.907)'
- unparsed cell tab_2:row25:col6 = '(1.13, 1.51)'
- unparsed cell tab_2:row26:col6 = '(0.723, 1.40)'
- unparsed cell tab_2:row27:col6 = '().771, 1.10)'
- unparsed cell Lane_2012_table_2:row2:col3 = '(0.140, 0.158)'
- unparsed cell Lane_2012_table_2:row2:col6 = '(0.125, 0.139)'
- unparsed cell Lane_2012_table_2:row3:col3 = '(12.0, 18.4)'
- unparsed cell Lane_2012_table_2:row3:col6 = '(7.28, 10.9)'
- unparsed cell Lane_2012_table_2:row8:col3 = '(-40.8, 76.6)'
- companion parameter table 2 transcribed (14 record(s))
- LLM selected parameter table(s) 2, 3

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

- scholar stages: `../../../knowledgebase/drugs/drug_warfarin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lane_2012` / `Lane_2012::s_warfarin::patients on long-term warfarin therapy`)


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
