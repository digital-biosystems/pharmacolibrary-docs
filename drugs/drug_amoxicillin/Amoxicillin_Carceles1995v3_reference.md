<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;amoxicillin&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/&quot;},{&quot;label&quot;:&quot;Carceles_1995_3 \u00b7 reference&quot;}]"></div>

# amoxicillin — `Amoxicillin_Carceles1995v3_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the model was built differently from what the record describes; the engineer's deviations are not documented and quantified. Evidence: T3_param_coverage — expected 6 scholar param(s) emitted or defaulted — got 3 covered; T6_deviations — got defaulted_parameters: structural deviation not quantified

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.
3. Open the emitted .mo and compare its base class and parameters with the record.
4. Check the .deviation.json beside it for what the engineer defaulted or assumed.
5. A wrong base class or a defaulted core parameter means rebuilding, not curating.
6. Read the .deviation.json and confirm each deviation names what changed and why.

<sub>owner: **scholar** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
not matched (stem Carceles_1995_3)

## Model component
<dbs-pgx drug="amoxicillin" model-id="Amoxicillin_Carceles1995v3_reference" status="model_quarantined" stale="false" population="goats" measured-compound="amoxicillin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka | `Q49` · kabs | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row3:col4 | — | not captured |
| t1,2a | `Q59` · t1/2α | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | tab_1:row6:col4 | — | not captured |
| tlag | `Q83` · tlag | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row8:col4 | — | not captured |
| tn.+ tIag | `Q83` · tlag | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | tab_1:row9:col2 | — | not captured |
| Cmax | `Q32` · Cmax | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row10:col4 | — | not captured |
| AUC | `Q88` · AUC | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row15:col2, Carceles_1995_3_table_1:row13:col2 | — | not captured |
| AUC | `Q88` · AUC | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row15:col4 | — | not captured |
| MRT | `Q53` · MRT | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row16:col4 | — | not captured |
| MAT | `Q73` · MAT | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row17:col4 | — | not captured |
| k21 | `Q302` · k21 | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Carceles_1995_3_table_1:row7:col2 | — | not captured |
| CL | `Q22` · CL | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Carceles_1995_3_table_1:row9:col2 | — | not captured |
| t1/2a | `Q59` · t1/2α | —(suppressed) | not captured | — | not captured | not captured | llm_corrected (0.6) | Carceles_1995_3_table_1:row10:col2 | — | not captured |
| MRT | `Q53` · MRT | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Carceles_1995_3_table_1:row14:col2 | — | not captured |
| Vd | `Q61` · V | —(suppressed) | L/kg | — | L | not captured | review_gapfill (0.7) | Bardhi_2026:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Ca' — extend the ontology if this is a real PK parameter (source ['tab_1:row2:col4'])
- dropped unlinked row (NIL): 'B' — extend the ontology if this is a real PK parameter (source ['tab_1:row4:col2'])
- dropped unlinked row (NIL): 'B' — extend the ontology if this is a real PK parameter (source ['tab_1:row4:col4'])
- dropped unlinked row (NIL): '13' — extend the ontology if this is a real PK parameter (source ['tab_1:row5:col4'])
- dropped unlinked row (NIL): 't, 2/5' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col4'])
- dropped unlinked row (NIL): 'ka`(b)' — extend the ontology if this is a real PK parameter (source ['tab_1:row12:col2'])
- dropped unlinked row (NIL): 't I ,2a,' — extend the ontology if this is a real PK parameter (source ['tab_1:row13:col4'])
- dropped unlinked row (NIL): 'A' — extend the ontology if this is a real PK parameter (source ['Carceles_1995_3_table_1:row1:col2'])
- dropped unlinked row (NIL): '1(12' — extend the ontology if this is a real PK parameter (source ['Carceles_1995_3_table_1:row6:col2'])
- dropped unlinked row (NIL): 'tina' — extend the ontology if this is a real PK parameter (source ['Carceles_1995_3_table_1:row11:col2'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amoxicillin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- gap-filled Q61 (V) from Bardhi_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row3:col2 = 'h-1'
- unparsed cell tab_1:row5:col2 = 'h-1'
- unparsed cell Carceles_1995_3_table_1:row4:col2 = '0.5751 ± 0.0136 0.0847 ± 0.0091'
- unparsed cell Carceles_1995_3_table_1:row4:col3 = '0.8033 ± 0.0247 0.0528 ± 0.0071'
- unparsed cell Carceles_1995_3_table_1:row5:col2 = '0.1907 ± 0.0188 0.1706 ± 0.0174'
- unparsed cell Carceles_1995_3_table_1:row5:col3 = '0.1508 ± 0.0143 0.1270 ± 0.0108'
- unparsed cell Carceles_1995_3_table_1:row6:col1 = 'h-1'
- unparsed cell Carceles_1995_3_table_1:row7:col1 = 'h-1'
- companion parameter table 1 transcribed (20 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 14 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Bardhi_2026:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.1097 | not captured | not captured | ['Carceles_1995_3_table_1:row9:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 30.8 L | not captured | not captured | ['Bardhi_2026:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | fail | 6 scholar param(s) emitted or defaulted | 3 covered | not captured | neither emitted nor in defaulted[]: ['tlag', 'tlag', 'k21'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: structural deviation not quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 10.71 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 5.75 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 2.73 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.2 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.42 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.41 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1.93 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1.6 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amoxicillin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Carceles_1995_3` / `Carceles_1995_3::reference`)
- model: `../../../knowledgebase/drugs/drug_amoxicillin/models/modelica/_needs_review/Amoxicillin_Carceles1995v3_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_amoxicillin/models/modelica/_needs_review/Amoxicillin_Carceles1995v3_reference.deviation.json`


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
