<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;methotrexate&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/&quot;},{&quot;label&quot;:&quot;Bischoff_1971 \u00b7 man&quot;}]"></div>

# methotrexate — `Methotrexate_Bischoff1971_man`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.

<sub>owner: **scholar** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
not matched (stem Bischoff_1971)

## Model component
<dbs-pgx drug="methotrexate" model-id="Methotrexate_Bischoff1971_man" status="model_quarantined" stale="false" population="mice, rats, dogs, and man" measured-compound="methotrexate" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V_P | `Q64` · V2 | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Bischoff_1971_table_1:row2:col5 | — | not captured |
| V_M | `Q66` · Vmax | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Bischoff_1971_table_1:row3:col5 | — | not captured |
| V_L | `Q61` · V | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Bischoff_1971_table_1:row5:col5 | — | not captured |
| Q_M | `Q30` · Q | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Bischoff_1971_table_1:row9:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Body weight, g,ᵃ' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row0:col5'])
- dropped unlinked row (NIL): 'V_K' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row4:col5'])
- dropped unlinked row (NIL): 'V_G,ᶜ' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row6:col5', 'Bischoff_1971_table_1:row7:col5'])
- dropped unlinked row (NIL): 'Q_K' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row10:col5'])
- dropped duplicate Q30 ('Q_L', value '800') — already have one for this compound
- dropped unlinked row (NIL): 'Q_G' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row12:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=methotrexate
- population split: 'man' subgroup of Bischoff_1971 (paper reports 5 populations: 17 kg., dog, 5 kg., dog/monkey, man, mouse, rat)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1
- unparsed cell Bischoff_1971_table_1:row14:col3 = '(0.15)'
- unparsed cell Bischoff_1971_table_1:row14:col4 = '(0.15)'
- unparsed cell Bischoff_1971_table_1:row14:col5 = '(0.15)'
- unparsed cell Bischoff_1971_table_1:row15:col3 = '(14)'
- unparsed cell Bischoff_1971_table_1:row15:col5 = '(3.0)'
- unparsed cell Bischoff_1971_table_1:row16:col3 = '(2.0)'
- unparsed cell Bischoff_1971_table_1:row16:col5 = '(3.0)'
- unparsed cell Bischoff_1971_table_1:row17:col2 = '(1.0)'
- unparsed cell Bischoff_1971_table_1:row17:col3 = '(1.0)'
- unparsed cell Bischoff_1971_table_1:row17:col4 = '(1.0)'
- unparsed cell Bischoff_1971_table_1:row17:col5 = '(1.0)'
- unparsed cell Bischoff_1971_table_1:row19:col3 = '(0)'
- unparsed cell Bischoff_1971_table_1:row19:col4 = '(0)'
- unparsed cell Bischoff_1971_table_1:row19:col5 = '(0)'
- unparsed cell Bischoff_1971_table_1:row20:col3 = '(0.3)'
- unparsed cell Bischoff_1971_table_1:row20:col4 = '(0.3)'
- unparsed cell Bischoff_1971_table_1:row20:col5 = '(0.3)'
- unparsed cell Bischoff_1971_table_1:row21:col3 = '(0.4)'
- unparsed cell Bischoff_1971_table_1:row21:col4 = '(0.4)'
- unparsed cell Bischoff_1971_table_1:row21:col5 = '(0.4)'
- unparsed cell Bischoff_1971_table_1:row22:col2 = '(0.1)'
- unparsed cell Bischoff_1971_table_1:row22:col3 = '(0.1)'
- unparsed cell Bischoff_1971_table_1:row22:col4 = '(0.1)'
- unparsed cell Bischoff_1971_table_1:row22:col5 = '(0.1)'
- unparsed cell Bischoff_1971_table_1:row24:col3 = '(20)'
- unparsed cell Bischoff_1971_table_1:row24:col5 = '190ᶠ'
- unparsed cell Bischoff_1971_table_1:row27:col3 = '(2.0)'
- unparsed cell Bischoff_1971_table_1:row27:col5 = '200ᵃ'
- unparsed cell Bischoff_1971_table_1:row28:col3 = '(6)'
- unparsed cell Bischoff_1971_table_1:row28:col5 = '(10)'
- unparsed cell Bischoff_1971_table_1:row30:col2 = '100ᶠ'
- unparsed cell Bischoff_1971_table_1:row30:col3 = '(450)'
- unparsed cell Bischoff_1971_table_1:row30:col4 = '(650)'
- unparsed cell Bischoff_1971_table_1:row30:col5 = '(1,000)'
- unparsed cell Bischoff_1971_table_1:row31:col3 = '(0.0022)'
- unparsed cell Bischoff_1971_table_1:row31:col4 = '(0.0015)'
- unparsed cell Bischoff_1971_table_1:row31:col5 = '(0.001)'
- unparsed cell Bischoff_1971_table_1:row32:col2 = '(20)'
- unparsed cell Bischoff_1971_table_1:row32:col3 = '(340)'
- unparsed cell Bischoff_1971_table_1:row32:col4 = '(1,000)'
- unparsed cell Bischoff_1971_table_1:row32:col5 = '(1,900)'
- unparsed cell Bischoff_1971_table_1:row33:col2 = '(200)'
- unparsed cell Bischoff_1971_table_1:row33:col3 = '(200)'
- unparsed cell Bischoff_1971_table_1:row33:col4 = '(200)'
- unparsed cell Bischoff_1971_table_1:row33:col5 = '(200)'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_methotrexate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bischoff_1971` / `Bischoff_1971::man`)
- model: `../../../knowledgebase/drugs/drug_methotrexate/models/modelica/_needs_review/Methotrexate_Bischoff1971_man.mo`
- deviation: `../../../knowledgebase/drugs/drug_methotrexate/models/modelica/_needs_review/Methotrexate_Bischoff1971_man.deviation.json`


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
