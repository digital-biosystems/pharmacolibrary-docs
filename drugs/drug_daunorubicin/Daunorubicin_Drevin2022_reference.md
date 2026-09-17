<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;daunorubicin&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/&quot;},{&quot;label&quot;:&quot;Drevin_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Daunorubicin_Drevin2022_reference&quot;,&quot;label&quot;:&quot;Drevin_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_Drevin2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Daunorubicin_Hempel2003_reference&quot;,&quot;label&quot;:&quot;Hempel_2003_reference&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_Hempel2003_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Daunorubicin_Wang2019_reference&quot;,&quot;label&quot;:&quot;Wang_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_Wang2019_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# daunorubicin — `Daunorubicin_Drevin2022_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer did not exercise the covariate scenarios this record defines; the model was built differently from what the record describes. Evidence: T2_covariates_not_exercised; T3_param_coverage — expected 5 scholar param(s) emitted or defaulted — got 4 covered

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.
3. Advisory only — the base model still replicates.
4. Check the record's covariate_definitions in _interpretv2.yaml.
5. Re-run the engineer for this drug if the covariate curves are wanted.
6. Open the emitted .mo and compare its base class and parameters with the record.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Drevin G; Briet M; Bazzoli C; Gyan E; Schmidt A; Dombret H; et al. et al. (2022). Pharmaceutics 14
  ·  DOI: [10.3390/pharmaceutics14040792](https://doi.org/10.3390/pharmaceutics14040792)

## Model component
<dbs-pgx drug="daunorubicin" model-id="Daunorubicin_Drevin2022_reference" status="model_quarantined" stale="false" population="acute myeloid leukaemia patients" measured-compound="daunorubicin" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 (L) | `Q63` · V1 | —(suppressed) | L | — | [l] | not captured | exact (1.0) | tab_1:row4:col1, tab_1:row4:col2 | — | not captured |
| V2 (L) | `Q64` · V2 | —(suppressed) | L | — | [l] | not captured | exact (1.0) | tab_1:row5:col1, tab_1:row5:col2 | — | not captured |
| V3 (L) | `Q77` · V3 | —(suppressed) | L | — | [l] | not captured | exact (1.0) | tab_1:row6:col1, tab_1:row6:col2 | — | not captured |
| Q1 (L/h) | `Q30` · Q | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | tab_1:row7:col1, tab_1:row7:col2 | — | not captured |
| Q3 (L/h) | `Q308` · Q3 | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | tab_1:row9:col1, tab_1:row9:col2 | — | not captured |
| Cl m (L/h) | `Q22` · CL | —(suppressed) | L/h | — | [l] / [h] | not captured | boundary (0.8) | tab_1:row13:col1, tab_1:row13:col2 | linear_fractional on creatinine=-0.027 | not captured |
| Corr. Q2 Q1 | `Q99` · Q2 | —(suppressed) | not captured | — | not captured | not captured | boundary (0.8) | tab_1:row27:col1, tab_1:row27:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q30 ('Q2 (L/h)', value '125') — already have one for this compound
- dropped duplicate Q77 ('V5 (L)', value '536') — already have one for this compound
- dropped unlinked row (NIL): 'β BSA (m 2 ) on V5' — extend the ontology if this is a real PK parameter (source ['tab_1:row11:col1'])
- dropped unlinked row (NIL): 'Kp1m (1/h)' — extend the ontology if this is a real PK parameter (source ['tab_1:row12:col1', 'tab_1:row12:col2'])
- dropped duplicate Q22 ('β BSA (m 2 ) on Cl m', value '1.04') — already have one for this compound
- dropped duplicate Q77 ('Kp3m (1/h)', value '0.25') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=daunorubicin

**Extraction notes:**
- unparsed cell tab_1:row18:col1 = '36% (28.6)'
- unparsed cell tab_1:row18:col2 = '40% (30.5)'
- unparsed cell tab_1:row19:col1 = '53% (29.8)'
- unparsed cell tab_1:row19:col2 = '42% (26.7)'
- unparsed cell tab_1:row20:col1 = '33% (25.2)'
- unparsed cell tab_1:row20:col2 = '42% (26.0)'
- unparsed cell tab_1:row21:col1 = '43% (25.2)'
- unparsed cell tab_1:row21:col2 = '53% (24.9)'
- unparsed cell tab_1:row22:col1 = '64% (25.5)'
- unparsed cell tab_1:row22:col2 = '66% (24.5)'
- unparsed cell tab_1:row23:col1 = '42% (21.9)'
- unparsed cell tab_1:row23:col2 = '39% (24.1)'
- unparsed cell tab_1:row24:col1 = '30% (22.7)'
- unparsed cell tab_1:row24:col2 = '58% (20.5)'
- unparsed cell tab_1:row25:col1 = '21% (25.6)'
- unparsed cell tab_1:row25:col2 = '41% (19.4)'
- unparsed cell tab_1:row29:col1 = '16% (8.76)'
- unparsed cell tab_1:row29:col2 = '17% (9.42)'
- unparsed cell tab_1:row30:col1 = '11% (9.22)'
- unparsed cell tab_1:row30:col2 = '11% (8.84)'
- LLM region Drevin_2022:discussion_prose: no JSON records returned

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row13:col1', 'tab_1:row13:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row7:col1', 'tab_1:row7:col2'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row9:col1', 'tab_1:row9:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row5:col1', 'tab_1:row5:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row6:col1', 'tab_1:row6:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 41.3 | not captured | not captured | ['tab_1:row13:col1', 'tab_1:row13:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['V2'] |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | pass | parent_metabolite → PK_Parent_Metabolite* | PK_Parent_Metabolite | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_daunorubicin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Drevin_2022` / `Drevin_2022::reference`)
- model: `../../../knowledgebase/drugs/drug_daunorubicin/models/modelica/_needs_review/Daunorubicin_Drevin2022_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_daunorubicin/models/modelica/_needs_review/Daunorubicin_Drevin2022_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_daunorubicin/Daunorubicin_Drevin2022_reference/Daunorubicin_Drevin2022_reference_matlab.zip" download>Daunorubicin_Drevin2022_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_daunorubicin/Daunorubicin_Drevin2022_reference/Daunorubicin_Drevin2022_reference_matlab_simbio.zip" download>Daunorubicin_Drevin2022_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_daunorubicin/Daunorubicin_Drevin2022_reference/Daunorubicin_Drevin2022_reference_sbml.zip" download>Daunorubicin_Drevin2022_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_daunorubicin/Daunorubicin_Drevin2022_reference/Daunorubicin_Drevin2022_reference_cellml.zip" download>Daunorubicin_Drevin2022_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
