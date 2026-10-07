<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;desipramine&quot;,&quot;href&quot;:&quot;drugs/drug_desipramine/&quot;},{&quot;label&quot;:&quot;Gueorguieva_2010 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# desipramine — `Desipramine_Gueorguieva2010_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 20, model 2.59).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — desipramine: CL 16 l h -1, V1 22 l, Q 13 l h -1, V2 13 l, IOV 7.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[cl].value`: this record has 16, the second reading 73; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:37:31.700225+00:00) predates the upstream re-run (2026-10-06 22:18:01.323926+00:00). Current validate status: `needs_review`.

## Citation
Gueorguieva I et al., Desipramine, substrate for CYP2D6 activ…, British journal of clinical… (2010)
  ·  DOI: [10.1111/j.1365-2125.2010.03731.x](https://doi.org/10.1111/j.1365-2125.2010.03731.x)

## Model component
<dbs-pgx drug="desipramine" model-id="Desipramine_Gueorguieva2010_reference" status="needs_review" stale="true" population="healthy adults" measured-compound="desipramine" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (l h -1 ) | `Q22` · CL | 111 | l h -1 | 3.0833333333333335e-05 | [l] / [h] | not captured | exact (1.0) | tab_0:row4:col1, tab_0:row4:col2, tab_0:row4:col4 | — | 73 (None% RSE) |
| V1 (l) | `Q63` · V1 | 1900 | l | 1.9000000000000001 | [l] | not captured | exact (1.0) | tab_0:row5:col1, tab_0:row5:col2, tab_0:row5:col4 | — | 58 (None% RSE) |
| Q (l h -1 ) | `Q30` · Q | 58 | l h -1 | 1.611111111111111e-05 | [l] / [h] | not captured | exact (1.0) | tab_0:row6:col1, tab_0:row6:col2 | — | not captured |
| V2 (l) | `Q64` · V2 | 1050 | l | 1.05 | [l] | not captured | exact (1.0) | tab_0:row7:col1, tab_0:row7:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL (l h -1 )' routed out of structural estimates ('Between-subject')
- table section iiv: 'V1 (l)' routed out of structural estimates ('Between-subject')
- column 'optimal sampling times (h)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- routed 'Plasma within-subject variability' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Intermediate metabolizers' — extend the ontology if this is a real PK parameter (source ['Gueorguieva_2010_table_2:row0:col1', 'Gueorguieva_2010_table_2:row0:col2', 'Gueorguieva_2010_table_2:row0:col3', 'Gueorguieva_2010_table_2:row0:col4', 'Gueorguieva_2010_table_2:row0:col5', 'Gueorguieva_2010_table_2:row0:col6', 'Gueorguieva_2010_table_2:row0:col7', 'Gueorguieva_2010_table_2:row0:col8', 'Gueorguieva_2010_table_2:row5:col1', 'Gueorguieva_2010_table_2:row5:col2', 'Gueorguieva_2010_table_2:row5:col3', 'Gueorguieva_2010_table_2:row5:col4', 'Gueorguieva_2010_table_2:row5:col5', 'Gueorguieva_2010_table_2:row5:col6', 'Gueorguieva_2010_table_2:row5:col7', 'Gueorguieva_2010_table_2:row5:col8'])
- dropped unlinked row (NIL): 'Extensive metabolizers' — extend the ontology if this is a real PK parameter (source ['Gueorguieva_2010_table_2:row1:col1', 'Gueorguieva_2010_table_2:row1:col2', 'Gueorguieva_2010_table_2:row1:col3', 'Gueorguieva_2010_table_2:row1:col4', 'Gueorguieva_2010_table_2:row1:col5', 'Gueorguieva_2010_table_2:row1:col6', 'Gueorguieva_2010_table_2:row1:col7', 'Gueorguieva_2010_table_2:row1:col8', 'Gueorguieva_2010_table_2:row6:col1', 'Gueorguieva_2010_table_2:row6:col2', 'Gueorguieva_2010_table_2:row6:col3', 'Gueorguieva_2010_table_2:row6:col4', 'Gueorguieva_2010_table_2:row6:col5', 'Gueorguieva_2010_table_2:row6:col6', 'Gueorguieva_2010_table_2:row6:col7', 'Gueorguieva_2010_table_2:row6:col8'])
- dropped unlinked row (NIL): 'Ultrarapid metabolizers' — extend the ontology if this is a real PK parameter (source ['Gueorguieva_2010_table_2:row2:col1', 'Gueorguieva_2010_table_2:row2:col2', 'Gueorguieva_2010_table_2:row2:col3', 'Gueorguieva_2010_table_2:row2:col4', 'Gueorguieva_2010_table_2:row2:col5', 'Gueorguieva_2010_table_2:row2:col6', 'Gueorguieva_2010_table_2:row2:col7', 'Gueorguieva_2010_table_2:row2:col8', 'Gueorguieva_2010_table_2:row7:col1', 'Gueorguieva_2010_table_2:row7:col2', 'Gueorguieva_2010_table_2:row7:col3', 'Gueorguieva_2010_table_2:row7:col4', 'Gueorguieva_2010_table_2:row7:col5', 'Gueorguieva_2010_table_2:row7:col6', 'Gueorguieva_2010_table_2:row7:col7', 'Gueorguieva_2010_table_2:row7:col8'])
- dropped value-less row: 'Standard error expressed as percent coefficient of variation.'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=desipramine

**Extraction notes:**
- companion parameter table 2 transcribed (48 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.444 (4/9 fields) | 5 |

<details><summary>5 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl].value` | 16 | 73 | mismatch |
| `gpt-oss:120b` | `parameters[plasma within-subject variability]` | 7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q].value` | 13 | 58 | mismatch |
| `gpt-oss:120b` | `parameters[v1].value` | 22 | 58 | mismatch |
| `gpt-oss:120b` | `parameters[v2].value` | 13 | 1050 | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row6:col1', 'tab_0:row6:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row5:col1', 'tab_0:row5:col2', 'tab_0:row5:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row7:col1', 'tab_0:row7:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 111.0 | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 111 L/h | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.9e+03 L | not captured | not captured | ['tab_0:row5:col1', 'tab_0:row5:col2', 'tab_0:row5:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.05e+03 L | not captured | not captured | ['tab_0:row7:col1', 'tab_0:row7:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=desipramine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 21.6 | 0.0010089146010363863 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 17.9 | 0.0010089146010363863 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 18.3 | 0.0010089146010363863 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 16.3 | 0.0010089146010363863 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 12.9 | 0.0010089146010363863 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 16.8 | 0.0010089146010363863 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 20.5 | 0.0010089146010363863 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_t_half_beta | reference | fail | 20.0 | 2.5926988409712033 | 0.1296 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 20.0 | 2.5926988409712033 | 0.1296 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 25.0 | 2.5926988409712033 | 0.1037 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 23.0 | 2.5926988409712033 | 0.1127 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 18.0 | 2.5926988409712033 | 0.144 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 17.0 | 2.5926988409712033 | 0.1525 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 20.0 | 2.5926988409712033 | 0.1296 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 27.0 | 2.5926988409712033 | 0.096 | h→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_desipramine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gueorguieva_2010` / `Gueorguieva_2010::reference`)
- model: `../../../knowledgebase/drugs/drug_desipramine/models/modelica/Desipramine_Gueorguieva2010_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_desipramine/models/modelica/Desipramine_Gueorguieva2010_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_desipramine/models/modelica/Desipramine_Gueorguieva2010_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_desipramine/Desipramine_Gueorguieva2010_reference/Desipramine_Gueorguieva2010_reference_modelica.zip" download>Desipramine_Gueorguieva2010_reference_modelica.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_desipramine/Desipramine_Gueorguieva2010_reference/Desipramine_Gueorguieva2010_reference_fmi.zip" download>Desipramine_Gueorguieva2010_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_desipramine/Desipramine_Gueorguieva2010_reference/Desipramine_Gueorguieva2010_reference_matlab.zip" download>Desipramine_Gueorguieva2010_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_desipramine/Desipramine_Gueorguieva2010_reference/Desipramine_Gueorguieva2010_reference_matlab_simbio.zip" download>Desipramine_Gueorguieva2010_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_desipramine/Desipramine_Gueorguieva2010_reference/Desipramine_Gueorguieva2010_reference_sbml.zip" download>Desipramine_Gueorguieva2010_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_desipramine/Desipramine_Gueorguieva2010_reference/Desipramine_Gueorguieva2010_reference_cellml.zip" download>Desipramine_Gueorguieva2010_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:18 UTC</sub>
