<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;semaglutide&quot;,&quot;href&quot;:&quot;drugs/toxin_semaglutide/&quot;},{&quot;label&quot;:&quot;Carlsson_2018 \u00b7 full::adults with type 2 diabetes&quot;}]"></div>

# semaglutide — `Semaglutide_Carlsson2018_full_adults_with_type_2_diabetes`

> ## <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span>

### Reviewer guidance

**What is wrong:** no model exists yet, so there is nothing to judge; the engineer did not exercise the covariate scenarios this record defines. Evidence: T2_covariates_not_exercised

**Steps:**
1. No curator action. Run the engineer for this drug.
2. Advisory only — the base model still replicates.
3. Check the record's covariate_definitions in _interpretv2.yaml.
4. Re-run the engineer for this drug if the covariate curves are wanted.

<sub>owner: **engineer** · guidance written by playbook</sub>

> ⚠️ **STALE** — review status `not_modelled` (reviewed 2026-09-11 08:47:07.390365+00:00) predates the upstream re-run (2026-09-16 17:34:39.300467+00:00). Current validate status: `not captured`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Carlsson Petri KC; Ingwersen SH; Flint A; Zacho J; Overgaard RV et al. (2018). Diabetes therapy : research, treatment and education of diabetes and related disorders 9
  ·  DOI: [10.1007/s13300-018-0458-5](https://doi.org/10.1007/s13300-018-0458-5)

## Model component
<dbs-pgx drug="semaglutide" model-id="Semaglutide_Carlsson2018_full_adults_with_type_2_diabetes" status="" stale="true" population="adults with type 2 diabetes" measured-compound="" parameterization="" topology=""></dbs-pgx>

**Parameterization:** not captured.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Extraction notes:**
- companion parameter table S2 transcribed (15 record(s), model stage 'base')
- companion parameter table S3 transcribed (67 record(s), model stage 'full')
- LLM selected parameter table(s) S2, S3

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
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_semaglutide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Carlsson_2018` / `Carlsson_2018::full::adults with type 2 diabetes`)


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
