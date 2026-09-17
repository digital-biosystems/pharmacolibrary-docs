<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;citalopram&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/&quot;},{&quot;label&quot;:&quot;Weisskopf_2020 \u00b7 reference&quot;}]"></div>

# citalopram — `Citalopram_Weisskopf2020_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the model was built differently from what the record describes; the engineer's deviations are not documented and quantified. Evidence: T3_param_coverage — expected 2 scholar param(s) emitted or defaulted — got 1 covered; T6_deviations — got defaulted_parameters: structural deviation not quantified

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
Weisskopf E; Guidi M; Fischer CJ; Bickle Graz M; Beaufils E; Nguyen KA; et al. et al. (2020). British journal of clinical pharmacology 86
  ·  DOI: [10.1111/bcp.14278](https://doi.org/10.1111/bcp.14278)

## Model component
<dbs-pgx drug="citalopram" model-id="Citalopram_Weisskopf2020_reference" status="model_quarantined" stale="false" population="depressive patients during the perinatal period" measured-compound="escitalopram" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL(SCIT) (L/h) | `Q22` · CL | —(suppressed) | L/h | — | [l] / [h] | 8 | boundary (0.8) | Weisskopf_2020_table_p7_1:row0:col1, Weisskopf_2020_table_p7_1:row0:col2, Weisskopf_2020_table_p7_1:row0:col3, Weisskopf_2020_table_p7_1:row0:col4, Weisskopf_2020_table_p7_1:row0:col5, Weisskopf_2020_table_p7_1:row0:col6 | — | not captured |
| V(SCIT) (L) | `Q65` · Vss | —(suppressed) | L | — | [l] | 24 | llm (0.5) | Weisskopf_2020_table_p7_1:row1:col1, Weisskopf_2020_table_p7_1:row1:col2, Weisskopf_2020_table_p7_1:row1:col3, Weisskopf_2020_table_p7_1:row1:col4, Weisskopf_2020_table_p7_1:row1:col5, Weisskopf_2020_table_p7_1:row1:col6 | — | not captured |
| k12 (h⁻¹) | `Q301` · k12 | —(suppressed) | h⁻¹ | — | [1] / [h] | 60 | exact (1.0) | Weisskopf_2020_table_p7_1:row2:col1, Weisskopf_2020_table_p7_1:row2:col2, Weisskopf_2020_table_p7_1:row2:col3, Weisskopf_2020_table_p7_1:row2:col4, Weisskopf_2020_table_p7_1:row2:col5, Weisskopf_2020_table_p7_1:row2:col6 | — | not captured |
| k30 (h⁻¹) | `Q304` · k31 | —(suppressed) | h⁻¹ | — | [1] / [h] | 162 | llm (0.5) | Weisskopf_2020_table_p7_1:row3:col3, Weisskopf_2020_table_p7_1:row3:col4, Weisskopf_2020_table_p7_1:row3:col5, Weisskopf_2020_table_p7_1:row3:col6 | — | not captured |
| σ SCIT(plasma) (%) | `Q315` · sigma | —(suppressed) | not captured | — | not captured | 10 | llm (0.5) | Weisskopf_2020_table_p7_1:row9:col1, Weisskopf_2020_table_p7_1:row9:col2, Weisskopf_2020_table_p7_1:row9:col3, Weisskopf_2020_table_p7_1:row9:col4, Weisskopf_2020_table_p7_1:row9:col5, Weisskopf_2020_table_p7_1:row9:col6 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'VMR' — extend the ontology if this is a real PK parameter (source ['Weisskopf_2020_table_p7_1:row4:col1', 'Weisskopf_2020_table_p7_1:row4:col2', 'Weisskopf_2020_table_p7_1:row4:col3', 'Weisskopf_2020_table_p7_1:row4:col4'])
- dropped unlinked row (NIL): 'MPRD' — extend the ontology if this is a real PK parameter (source ['Weisskopf_2020_table_p7_1:row5:col3', 'Weisskopf_2020_table_p7_1:row5:col4'])
- dropped unlinked row (NIL): 'MPRM' — extend the ontology if this is a real PK parameter (source ['Weisskopf_2020_table_p7_1:row6:col5', 'Weisskopf_2020_table_p7_1:row6:col6'])
- dropped duplicate Q22 ('α(CL) (%)', value '35.4') — already have one for this compound
- dropped unlinked row (NIL): 'ω(VMR) (%)' — extend the ontology if this is a real PK parameter (source ['Weisskopf_2020_table_p7_1:row8:col3', 'Weisskopf_2020_table_p7_1:row8:col4', 'Weisskopf_2020_table_p7_1:row8:col5', 'Weisskopf_2020_table_p7_1:row8:col6'])
- dropped duplicate Q315 ('σ SDCIT(plasma) (%)', value '21.0') — already have one for this compound
- dropped duplicate Q315 ('σ SCIT(milk) (%)', value '31.5') — already have one for this compound
- dropped duplicate Q315 ('σ SDCIT(milk) (%)', value '22.8') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=escitalopram

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Weisskopf_2020_table_p7_1:row0:col1', 'Weisskopf_2020_table_p7_1:row0:col2', 'Weisskopf_2020_table_p7_1:row0:col3', 'Weisskopf_2020_table_p7_1:row0:col4', 'Weisskopf_2020_table_p7_1:row0:col5', 'Weisskopf_2020_table_p7_1:row0:col6'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Weisskopf_2020_table_p7_1:row2:col1', 'Weisskopf_2020_table_p7_1:row2:col2', 'Weisskopf_2020_table_p7_1:row2:col3', 'Weisskopf_2020_table_p7_1:row2:col4', 'Weisskopf_2020_table_p7_1:row2:col5', 'Weisskopf_2020_table_p7_1:row2:col6'] |
| C5_dimension_Q304 | pass | 1 / [time] | not captured | not captured | not captured | ['Weisskopf_2020_table_p7_1:row3:col3', 'Weisskopf_2020_table_p7_1:row3:col4', 'Weisskopf_2020_table_p7_1:row3:col5', 'Weisskopf_2020_table_p7_1:row3:col6'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Weisskopf_2020_table_p7_1:row1:col1', 'Weisskopf_2020_table_p7_1:row1:col2', 'Weisskopf_2020_table_p7_1:row1:col3', 'Weisskopf_2020_table_p7_1:row1:col4', 'Weisskopf_2020_table_p7_1:row1:col5', 'Weisskopf_2020_table_p7_1:row1:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 28.7 | not captured | not captured | ['Weisskopf_2020_table_p7_1:row0:col1', 'Weisskopf_2020_table_p7_1:row0:col2', 'Weisskopf_2020_table_p7_1:row0:col3', 'Weisskopf_2020_table_p7_1:row0:col4', 'Weisskopf_2020_table_p7_1:row0:col5', 'Weisskopf_2020_table_p7_1:row0:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | fail | 2 scholar param(s) emitted or defaulted | 1 covered | not captured | neither emitted nor in defaulted[]: ['k12'] |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | pass | parent_metabolite → PK_Parent_Metabolite* | PK_Parent_Metabolite | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: structural deviation not quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_citalopram/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Weisskopf_2020` / `Weisskopf_2020::reference`)
- model: `../../../knowledgebase/drugs/drug_citalopram/models/modelica/_needs_review/Citalopram_Weisskopf2020_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_citalopram/models/modelica/_needs_review/Citalopram_Weisskopf2020_reference.deviation.json`


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
