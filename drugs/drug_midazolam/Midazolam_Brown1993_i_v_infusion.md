# midazolam — `Midazolam_Brown1993_i_v_infusion`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Brown SA; Jacobson JD; Hartsfield SM et al. (1993). Journal of veterinary pharmacology and therapeutics 16
  ·  DOI: [10.1111/j.1365-2885.1993.tb00207.x](https://doi.org/10.1111/j.1365-2885.1993.tb00207.x)

## Model component
<dbs-pgx drug="midazolam" model-id="Midazolam_Brown1993_i_v_infusion" status="rejected" stale="false" population="healthy dogs" measured-compound="midazolam" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| A (ng/ml) | `Q900` · equation variable | —(suppressed) | ng/ml | — | [ng] / [ml] | not captured | llm (0.6) | Brown_1993_table_1:row0:col2 | — | not captured |
| α (min⁻¹) | `Q67` · λ1 | —(suppressed) | min⁻¹ | — | [1] / [min] | not captured | exact (1.0) | Brown_1993_table_1:row2:col2 | — | not captured |
| β (min⁻¹) | `Q47` · kel | —(suppressed) | min⁻¹ | — | [1] / [min] | not captured | exact (1.0) | Brown_1993_table_1:row3:col2 | — | not captured |
| AUC (ng/min/ml) | `Q88` · AUC | —(suppressed) | ng/min/ml | — | [ng] / [[min] · [ml]] | not captured | exact (1.0) | Brown_1993_table_1:row4:col2 | — | not captured |
| MRT (min) | `Q53` · MRT | —(suppressed) | min | — | [min] | not captured | exact (1.0) | Brown_1993_table_1:row5:col2 | — | not captured |
| Vd(ss) (l/kg) | `Q65` · Vss | —(suppressed) | l/kg | — | [l] / [kg] | not captured | llm_corrected (0.6) | Brown_1993_table_1:row6:col2 | — | not captured |
| ClB (ml/min/kg) | `Q23` · CLb | —(suppressed) | ml/min/kg | — | [ml] / [[min] · [kg]] | not captured | exact (1.0) | Brown_1993_table_1:row7:col2 | — | not captured |
| V mid (L/70 kg) | `Q61` · V | —(suppressed) | L/70 kg | — | L | not captured | review_gapfill (0.7) | Bardol_2025:review | — | not captured |
| Ka (1/h) | `Q49` · kabs | —(suppressed) | 1/h | — | 1/h | not captured | review_gapfill (0.7) | Jia_2026:review | — | not captured |
| absorption lag time (ALAG1) | `Q83` · tlag | —(suppressed) | h | — | h | not captured | review_gapfill (0.7) | Jia_2026:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q900 ('B (ng/ml)', value '429') — already have one for this compound
- unit_dimension_mismatch: 'α (min⁻¹)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'AUC (ng/min/ml)' → Q88 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=midazolam
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'i.v. infusion' subgroup of Brown_1993 (paper reports 2 populations: i.v. bolus, i.v. infusion)
- gap-filled Q61 (V) from Bardol_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Jia_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Jia_2026's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | fail | 1.8 | 3.418 | 1.8989 | 0.25 | reported t½β |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Brown_1993_table_1:row7:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Brown_1993_table_1:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Jia_2026:review'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Brown_1993_table_1:row5:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Bardol_2025:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Brown_1993_table_1:row6:col2'] |
| C5_dimension_Q67 | fail | 1 / [time] | min⁻¹ | not captured | not captured | ['Brown_1993_table_1:row2:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Jia_2026:review'] |
| C5_dimension_Q88 | fail | [mass] / [time] / [length] ** 3 | ng/min/ml | not captured | not captured | ['Brown_1993_table_1:row4:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 17.4 | not captured | not captured | ['Brown_1993_table_1:row7:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q23 | pass | clearance within physiological range | 73.1 L/h | not captured | not captured | ['Brown_1993_table_1:row7:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 85.8 L | not captured | not captured | ['Bardol_2025:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_midazolam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Brown_1993` / `Brown_1993::i_v_infusion`)


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
