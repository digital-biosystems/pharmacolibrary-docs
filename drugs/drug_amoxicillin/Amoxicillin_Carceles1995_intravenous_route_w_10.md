# amoxicillin — `Amoxicillin_Carceles1995_intravenous_route_w_10`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `amoxicillin-clavulanic acid`, measured `amoxicillin and clavulanic acid`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
not matched (stem Carceles_1995)

## Model component
<dbs-pgx drug="amoxicillin" model-id="Amoxicillin_Carceles1995_intravenous_route_w_10" status="rejected" stale="false" population="turkeys and chickens" measured-compound="amoxicillin and clavulanic acid" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ha (h) | `Q57` · t1/2z | —(suppressed) | h | — | [h] | not captured | llm (0.6) | tab_1:row4:col3 | — | not captured |
| C max (mg/1) | `Q32` · Cmax | —(suppressed) | mg/1 | — | [mg] / [1] | not captured | llm (0.6) | tab_1:row8:col3, tab_1:row8:col4 | — | not captured |
| F K (I/kg) | `Q76` · V/F | —(suppressed) | I/kg | — | [i] / [kg] | not captured | llm (0.6) | tab_1:row10:col3, tab_1:row10:col4 | — | not captured |
| AUC (mg/h/1) | `Q88` · AUC | —(suppressed) | mg/h/1 | — | [mg] / [[h] · [1]] | not captured | exact (1.0) | tab_1:row11:col3, tab_1:row11:col4 | — | not captured |
| 2VlRT(h) | `Q64` · V2 | —(suppressed) | h | — | [h] | not captured | llm (0.6) | tab_1:row12:col3, tab_1:row12:col4 | — | not captured |
| MAT(h) | `Q73` · MAT | —(suppressed) | h | — | [h] | not captured | exact (1.0) | tab_1:row13:col3, tab_1:row13:col4 | — | not captured |
| CUF (1/h/kg) | `Q27` · CL/F | —(suppressed) | h | — | [h] | not captured | llm (0.6) | tab_1:row14:col3, tab_1:row14:col4 | — | not captured |
| F (%) | `Q40` · Fab | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row15:col3, tab_1:row15:col4 | — | not captured |
| ka (h−1) | `Q49` · kabs | —(suppressed) | h−1 | — | 1/h | not captured | review_gapfill (0.7) | Baklouti_2026:review | — | not captured |
| T lagpo | `Q83` · tlag | —(suppressed) | h | — | h | not captured | review_gapfill (0.7) | Dubbelboer_2025:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: '¿.(h" 1 ) A, (h" 1 )' (captured trailing unit 'h" 1' for child rows)
- dropped value-less row: 'tixi (h)' (captured trailing unit 'h' for child rows)
- unit_dimension_mismatch: 'C max (mg/1)' → Q32 (unit '[mass]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_unknown: 'I/kg' (V/F)
- unit_dimension_mismatch: 'AUC (mg/h/1)' → Q88 (unit '[mass] / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: '2VlRT(h)' → Q64 (unit '[time]' vs ontology '[length] ** 3') — route to review
- unit 'h' inherited from a section-header row for CL/F (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- unit_dimension_mismatch: 'CUF (1/h/kg)' → Q27 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped value-less row: 'k a'
- dropped value-less row: 'Ai'
- dropped value-less row: 'X z'
- dropped value-less row: 'fj a'
- dropped value-less row: 't{x\\:'
- dropped value-less row: 'r^:'
- dropped value-less row: 'w:'
- dropped value-less row: 'C m ":'
- dropped value-less row: 'V z :'
- dropped value-less row: 'V a :'
- dropped value-less row: 'AUC:'
- dropped value-less row: 'MRT:'
- dropped value-less row: 'MAT:'
- dropped value-less row: 'CL/F:'
- dropped value-less row: 'F:'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=amoxicillin and clavulanic acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'intravenous route (w= 10)' subgroup of Carceles_1995 (paper reports 2 populations: intramuscular route (n = 5), intravenous route (w= 10))
- gap-filled Q49 (kabs) from Baklouti_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Dubbelboer_2025's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_1:row2:col3 = '7.35 ± 0.93 -'
- unparsed cell tab_1:row2:col4 = '9.09 ±1.11 -'
- unparsed cell tab_1:row4:col4 = '0.08 + 0.01'
- unparsed cell tab_1:row15:col1 = '. 100'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | fail | [time] | h | not captured | not captured | ['tab_1:row14:col3', 'tab_1:row14:col4'] |
| C5_dimension_Q32 | fail | [mass] | mg/1 | not captured | not captured | ['tab_1:row8:col3', 'tab_1:row8:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Baklouti_2026:review'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tab_1:row4:col3'] |
| C5_dimension_Q64 | fail | [time] | h | not captured | not captured | ['tab_1:row12:col3', 'tab_1:row12:col4'] |
| C5_dimension_Q73 | pass | [time] | not captured | not captured | not captured | ['tab_1:row13:col3', 'tab_1:row13:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Dubbelboer_2025:review'] |
| C5_dimension_Q88 | fail | [mass] / [time] | mg/h/1 | not captured | not captured | ['tab_1:row11:col3', 'tab_1:row11:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amoxicillin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Carceles_1995` / `Carceles_1995::intravenous_route_w_10`)


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
