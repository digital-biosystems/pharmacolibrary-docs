# clopidogrel — `Clopidogrel_Jung2024_population_mean_healthy_male_participan`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — reviewer_tooling.** the check reported a failure without computing a comparison, so this is an inconclusive check rather than a demonstrated fault<br><sub>evidence: `C2_reference failed (ratio None)`, `C6_cl_magnitude failed (ratio None)`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** the reference covariate scenario does not reconstruct; clearance is outside the plausible magnitude window.

**Steps:**
1. Not a curation fix — reviewer_tooling limitation.
2. Check covariate_definitions and the reference category in _interpretv2.yaml.
3. Check the parameter's unit_verbatim — an unconverted per-kg or per-hour unit is the usual cause, not a genuinely extreme value.
4. Confirm value_si against the paper's reported number.
5. A 'ratio None' means the check could not compute a ratio, so treat the window as unverified rather than as a failure of the value.

<sub>owner: **curator** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Jung YS; Jin BH; Park MS; Kim CO; Chae D et al. (2024). CPT: pharmacometrics & systems pharmacology 13
  ·  DOI: [10.1002/psp4.13053](https://doi.org/10.1002/psp4.13053)

## Model component
<dbs-pgx drug="clopidogrel" model-id="Clopidogrel_Jung2024_population_mean_healthy_male_participan" status="needs_review" stale="false" population="healthy male participants" measured-compound="" parameterization="" topology=""></dbs-pgx>

**Parameterization:** not captured.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Ground-truth comparison:** <span class="pk-badge pk-badge--orange">unconfirmed</span>  (0/10 matched, agreement 0.0, tol 0.25)

| o_id | agreement | extracted | truth | fold |
|---|---|---|---|---|
| `Q22` · CL | missing_in_extraction | None | 9257.28 | not captured |
| `Q30` · Q | missing_in_extraction | None | 587.93 | not captured |
| `Q351` · CLm/F | missing_in_extraction | None | 74.25 | not captured |
| `Q367` · Vm/F | missing_in_extraction | None | 51.45 | not captured |
| `Q45` · fm | missing_in_extraction | None | 0.125 | not captured |
| `Q49` · kabs | missing_in_extraction | None | 19.64 | not captured |
| `Q63` · V1 | missing_in_extraction | None | 1463.92 | not captured |
| `Q64` · V2 | missing_in_extraction | None | 2823.98 | not captured |
| `Q83` · tlag | missing_in_extraction | None | 0.196 | not captured |
| `Q900` · equation variable | missing_in_extraction | None | 4.476 | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_clopidogrel/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jung_2024` / `Jung_2024::population_mean::healthy male participants`)


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
