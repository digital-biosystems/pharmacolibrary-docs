<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;naloxone&quot;,&quot;href&quot;:&quot;drugs/drug_naloxone/&quot;},{&quot;label&quot;:&quot;Gu_2023 \u00b7 reference&quot;}]"></div>

# naloxone — `Naloxone_Gu2023_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `buprenorphine and naloxone`, measured `buprenorphine`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Gu M; Li A; Mak W; Dong F; Xu N; Zhang J; et al. et al. (2023). Frontiers in pharmacology 14
  ·  DOI: [10.3389/fphar.2023.1089862](https://doi.org/10.3389/fphar.2023.1089862)

## Model component
<dbs-pgx drug="naloxone" model-id="Naloxone_Gu2023_reference" status="rejected" stale="false" population="healthy volunteers and patients with opioid use disorder" measured-compound="buprenorphine" parameterization="apparent_wrt_Fm" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** apparent_wrt_Fm.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | -0.3 | not captured |

## Departures & gaps

**Interpretation flags:**
- $THETA(1) has no $PK binding — index may be misassigned
- $THETA(2) has no $PK binding — index may be misassigned
- $THETA(3) has no $PK binding — index may be misassigned
- $THETA(4) has no $PK binding — index may be misassigned
- $THETA(5) has no $PK binding — index may be misassigned
- $THETA(6) has no $PK binding — index may be misassigned
- $THETA(7) has no $PK binding — index may be misassigned
- $THETA(8) has no $PK binding — index may be misassigned
- $THETA(9) has no $PK binding — index may be misassigned
- $THETA(10) has no $PK binding — index may be misassigned
- $THETA(11) has no $PK binding — index may be misassigned
- $THETA(12) has no $PK binding — index may be misassigned
- $THETA(13) has no $PK binding — index may be misassigned
- $THETA(14) has no $PK binding — index may be misassigned
- $THETA(15) has no $PK binding — index may be misassigned
- $THETA(16) has no $PK binding — index may be misassigned
- $THETA(17) has no $PK binding — index may be misassigned
- control_stream: nonlinear kinetics (MM/product $DES or general ODE ADVAN) — manual_model_class, route_to_review
- apparent-ness: parameterization=apparent_wrt_Fm (metabolite model)
- theta_crosscheck: table present but its labels did not align to bound THETAs (skipped)
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_naloxone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gu_2023` / `Gu_2023::reference`)


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
