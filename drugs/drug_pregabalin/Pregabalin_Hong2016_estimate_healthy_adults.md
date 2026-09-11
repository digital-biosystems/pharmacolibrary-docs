# pregabalin — `Pregabalin_Hong2016_estimate_healthy_adults`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span>

### Reviewer guidance

**What is wrong:** no model exists yet, so there is nothing to judge; the engineer did not exercise the covariate scenarios this record defines. Evidence: T2_covariates_not_exercised

**Steps:**
1. No curator action. Run the engineer for this drug.
2. Advisory only — the base model still replicates.
3. Check the record's covariate_definitions in _interpretv2.yaml.
4. Re-run the engineer for this drug if the covariate curves are wanted.

<sub>owner: **engineer** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Hong T; Han S; Lee J; Jeon S; Yim DS et al. (2016). Drug design, development and therapy 10
  ·  DOI: [10.2147/DDDT.S123318](https://doi.org/10.2147/DDDT.S123318)

## Model component
<dbs-pgx drug="pregabalin" model-id="Pregabalin_Hong2016_estimate_healthy_adults" status="not_modelled" stale="false" population="healthy adults" measured-compound="" parameterization="" topology=""></dbs-pgx>

**Parameterization:** not captured.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Extraction notes:**
- unparsed cell t5-dddt-10-3995:row3:col4 = '6.25 (6.08–6.42)'
- unparsed cell t5-dddt-10-3995:row4:col4 = '0.509 (0.405–0.601)'
- unparsed cell t5-dddt-10-3995:row5:col4 = '17.7 (4.65–22.7)'
- unparsed cell t5-dddt-10-3995:row6:col4 = '26.5 (19.9–43.5)'
- unparsed cell t5-dddt-10-3995:row7:col4 = '27.2 (23.3–37.7)'
- unparsed cell t5-dddt-10-3995:row8:col4 = '0.499 (0.411–0.600)'
- unparsed cell t5-dddt-10-3995:row9:col4 = '0.884 (0.751–1.101)'
- unparsed cell t5-dddt-10-3995:row10:col4 = '3.63 (3.19–4.26)'
- unparsed cell t5-dddt-10-3995:row11:col1 = 'Absorption rate constant of fasting state (h−1)'
- unparsed cell t5-dddt-10-3995:row11:col4 = '5.73 (2.94–9.11)'
- unparsed cell t5-dddt-10-3995:row12:col1 = 'Absorption rate constant of fed state (h−1)'
- unparsed cell t5-dddt-10-3995:row12:col4 = '0.709 (0.617–0.814)'
- unparsed cell t5-dddt-10-3995:row14:col4 = '10.9 (8.6–13.3)'
- unparsed cell t5-dddt-10-3995:row15:col4 = '27.5 (13.2–60.7)'
- unparsed cell t5-dddt-10-3995:row18:col4 = '40.4 (28.5–53.3)'
- unparsed cell t5-dddt-10-3995:row19:col4 = '80.9 (70.7–88.9)'
- unparsed cell t5-dddt-10-3995:row21:col4 = '46.2 (36.2–57.1)'
- unparsed cell t5-dddt-10-3995:row24:col4 = '17.7 (15.6–19.9)'
- LLM selected parameter table(s) 5
- captured model equation CL/F = CLt/F * (CLCR/120)^θCLCR

## Validation

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_pregabalin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hong_2016` / `Hong_2016::estimate::healthy adults`)


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
