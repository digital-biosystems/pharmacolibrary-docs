<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;coagulation factor XIII&quot;,&quot;href&quot;:&quot;drugs/drug_coagulation_factor_xiii/&quot;},{&quot;label&quot;:&quot;Dodds_2005 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CoagulationFactorXiii_Dodds2005_reference&quot;,&quot;label&quot;:&quot;Dodds_2005_reference&quot;,&quot;href&quot;:&quot;drugs/drug_coagulation_factor_xiii/CoagulationFactorXiii_Dodds2005_reference.md&quot;,&quot;status&quot;:&quot;None \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# coagulation factor XIII — `CoagulationFactorXiii_Dodds2005_reference`

> ## <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the model was built differently from what the record describes. Evidence: T3_param_coverage — expected 3 scholar param(s) emitted or defaulted — got 1 covered

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.
3. Open the emitted .mo and compare its base class and parameters with the record.
4. Check the .deviation.json beside it for what the engineer defaulted or assumed.
5. A wrong base class or a defaulted core parameter means rebuilding, not curating.

<sub>owner: **scholar** · guidance written by playbook</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-17 15:08:24.706989+00:00) predates the upstream re-run (2026-09-18 20:18:52.247397+00:00). Current validate status: `not captured`.

## Citation
Dodds MG; Visich JE; Vicini P et al. (2005). The AAPS journal 7
  ·  DOI: [10.1208/aapsj070370](https://doi.org/10.1208/aapsj070370)

## Model component
<dbs-pgx drug="coagulation factor XIII" model-id="CoagulationFactorXiii_Dodds2005_reference" status="" stale="true" population="cynomolgus monkeys" measured-compound="" parameterization="" topology=""></dbs-pgx>

**Parameterization:** not captured.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

_None recorded._

## Validation

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | fail | 3 scholar param(s) emitted or defaulted | 1 covered | not captured | neither emitted nor in defaulted[]: ['V1', 'kabs'] |
| T3_rate_constant_conversion | not captured | pass | Ka (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | pass | general_linear → PK_General_Linear* | PK_General_Linear | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_coagulation_factor_xiii/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Dodds_2005` / `Dodds_2005::reference`)
- model: `../../../knowledgebase/drugs/drug_coagulation_factor_xiii/models/modelica/_needs_review/CoagulationFactorXiii_Dodds2005_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_coagulation_factor_xiii/models/modelica/_needs_review/CoagulationFactorXiii_Dodds2005_reference.deviation.json`


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
