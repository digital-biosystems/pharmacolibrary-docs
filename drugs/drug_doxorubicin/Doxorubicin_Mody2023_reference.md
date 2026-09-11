# doxorubicin — `Doxorubicin_Mody2023_reference`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `CL`, `V`, `Q`, `V2`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** no model exists yet, so there is nothing to judge.

**Steps:**
1. Not a curation fix — scholar limitation.
2. No curator action. Run the engineer for this drug.

<sub>owner: **engineer** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Mody H; Vaidya TR; Ait-Oudhia S et al. (2023). Scientific reports 13
  ·  DOI: [10.1038/s41598-023-29964-4](https://doi.org/10.1038/s41598-023-29964-4)

## Model component
<dbs-pgx drug="doxorubicin" model-id="Doxorubicin_Mody2023_reference" status="not_modelled" stale="false" population="adults with cancer" measured-compound="doxorubicin" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h/1.8m2) | `Q22` · CL | —(suppressed) | L/h/1.8m2 | — | [l] / [[h] · [1.8m2]] | not captured | exact (1.0) | Tab2:row2:col2 | — | not captured |
| V (L/1.8m2) | `Q61` · V | —(suppressed) | L/1.8m2 | — | [l] / [1.8m2] | not captured | exact (1.0) | Tab2:row3:col2 | — | not captured |
| Q2 (L/h/1.8m2) | `Q30` · Q | —(suppressed) | L/h/1.8m2 | — | [l] / [[h] · [1.8m2]] | not captured | special_case (0.95) | Tab2:row4:col2 | — | not captured |
| V2 (L/1.8m2) | `Q64` · V2 | —(suppressed) | L/1.8m2 | — | [l] / [1.8m2] | not captured | exact (1.0) | Tab2:row5:col2 | — | not captured |
| Q3 (L/h/1.8m2) | `Q308` · Q3 | —(suppressed) | L/h/1.8m2 | — | [l] / [[h] · [1.8m2]] | not captured | exact (1.0) | Tab2:row6:col2 | — | not captured |
| V3 (L/1.8m2) | `Q77` · V3 | —(suppressed) | L/1.8m2 | — | [l] / [1.8m2] | not captured | exact (1.0) | Tab2:row7:col2 | — | not captured |
| kel (h−1) | `Q47` · kel | —(suppressed) | h−1 | — | [1] / [h] | not captured | exact (1.0) | Tab2:row9:col2 | — | not captured |
| k12 (h−1) | `Q301` · k12 | —(suppressed) | h−1 | — | [1] / [h] | not captured | exact (1.0) | Tab2:row10:col2 | — | not captured |
| k21 (h−1) | `Q302` · k21 | —(suppressed) | h−1 | — | [1] / [h] | not captured | exact (1.0) | Tab2:row11:col2 | — | not captured |
| tlI2, min | `Q83` · tlag | —(suppressed) | min | — | h | not captured | review_gapfill (0.7) | Bérczi_1993:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'L/h/1.8m2' (CL)
- unit_dimension_unknown: 'L/1.8m2' (V)
- unit_dimension_unknown: 'L/h/1.8m2' (Q)
- unit_dimension_unknown: 'L/1.8m2' (V2)
- unit_dimension_unknown: 'L/h/1.8m2' (Q3)
- unit_dimension_unknown: 'L/1.8m2' (V3)
- dropped duplicate Q61 ('V (L)', value '14.6') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=doxorubicin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- gap-filled Q83 (tlag) from Bérczi_1993's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab2:row4:col1 = 'Typical value of inter-compartmental clearance between central and peripheral compartment 1'
- unparsed cell Tab2:row5:col1 = 'Typical value of volume of peripheral compartment 1'
- unparsed cell Tab2:row6:col1 = 'Typical value of inter-compartmental clearance between central and peripheral compartment 2'
- unparsed cell Tab2:row7:col1 = 'Typical value of volume of peripheral compartment 2'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row10:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row11:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row9:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Bérczi_1993:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 53.3 | not captured | not captured | ['Tab2:row2:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

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

- scholar stages: `../../../knowledgebase/drugs/drug_doxorubicin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Mody_2023` / `Mody_2023::adults with cancer`)


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
