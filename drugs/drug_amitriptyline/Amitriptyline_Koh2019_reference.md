<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;amitriptyline&quot;,&quot;href&quot;:&quot;drugs/drug_amitriptyline/&quot;},{&quot;label&quot;:&quot;Koh_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amitriptyline_Koh2019_reference&quot;,&quot;label&quot;:&quot;Koh_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amitriptyline/Amitriptyline_Koh2019_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Amitriptyline_RatajczakEnselme2015_reference&quot;,&quot;label&quot;:&quot;Ratajczak-Enselme_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amitriptyline/Amitriptyline_RatajczakEnselme2015_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amitriptyline_Yukawa2002_reference&quot;,&quot;label&quot;:&quot;Yukawa_2002_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amitriptyline/Amitriptyline_Yukawa2002_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amitriptyline — `Amitriptyline_Koh2019_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.222). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the model was built differently from what the record describes. Evidence: T3_param_coverage — expected 5 scholar param(s) emitted or defaulted — got 3 covered; T3_topology_template — expected parent_metabolite → PK_Parent_Metabolite* — got PK_1C
**Second reading:** `gpt-oss:120b` read this paper differently on `parameters[d1].value` (0.95 vs 1.13) and 13 more field(s) — a structural parameter, so the record is disputed.
**How to address:** Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
<sub>owner: **scholar**</sub>

## Citation
Koh A; Pak KC; Choi HY; Ryu S; Choi SE; Kim KS; et al. et al. (2019). Journal of clinical pharmacology 59
  ·  DOI: [10.1002/jcph.1344](https://doi.org/10.1002/jcph.1344)

## Model component
<dbs-pgx drug="amitriptyline" model-id="Amitriptyline_Koh2019_reference" status="model_quarantined" stale="false" population="healthy adults" measured-compound="amitriptyline" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| TVCL TRM, AMIT , L/h | `Q22` · CL | 76.23 | not captured | not captured | not captured | not captured | llm (0.5) | tab_1:row3:col1, tab_1:row3:col2, tab_1:row3:col3 | — | 0.05 (None% RSE) |
| TVV c, AMIT , L | `Q61` · V | 117.91 | not captured | not captured | not captured | not captured | llm (0.5) | tab_1:row11:col1, tab_1:row11:col2, tab_1:row11:col3 | — | not captured |
| TVKa, 1/h | `Q95` · t1/2ka | 0.09 | not captured | not captured | not captured | not captured | llm (0.5) | tab_1:row16:col1, tab_1:row16:col2, tab_1:row16:col3 | — | not captured |
| TVALAG, h | `Q83` · tlag | 0.31 | not captured | not captured | not captured | not captured | llm (0.5) | tab_1:row18:col1, tab_1:row18:col2, tab_1:row18:col3 | — | not captured |
| D1, h | `Q310` · D1 | 0.95 | not captured | not captured | not captured | not captured | boundary (0.8) | tab_1:row20:col1, tab_1:row20:col2, tab_1:row20:col3 | — | not captured |
| K24, 1/h | `Q48` · kcomp | 0.00 | not captured | not captured | not captured | not captured | boundary (0.8) | tab_1:row21:col1, tab_1:row21:col2, tab_1:row21:col3 | — | not captured |
| K56, 1/h | `Q47` · kel | 0.77 | not captured | not captured | not captured | not captured | llm (0.5) | tab_1:row29:col1, tab_1:row29:col2, tab_1:row29:col3 | — | not captured |
| K65, 1/h | `Q65` · Vss | 0.13 | not captured | not captured | not captured | not captured | llm (0.5) | tab_1:row30:col1, tab_1:row30:col2, tab_1:row30:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('TVCL TPM, AMIT , L/h', value '17.77') — already have one for this compound
- dropped duplicate Q22 ('TVCL MRM, AMIT , L/h', value '45.89') — already have one for this compound
- dropped duplicate Q22 ('TVCL MPM, AMIT , L/h', value '11.57') — already have one for this compound
- dropped duplicate Q22 ('TVCL ORM, AMIT , L/h', value '15.06') — already have one for this compound
- dropped duplicate Q22 ('TVCL OPM, AMIT , L/h', value '0.72') — already have one for this compound
- dropped duplicate Q22 ('TVQ, L/h', value '68.59') — already have one for this compound
- dropped duplicate Q61 ('TVV p, AMIT , L', value '1475.45') — already have one for this compound
- dropped unlinked row (NIL): 'K41, 1/h' — extend the ontology if this is a real PK parameter (source ['tab_1:row22:col1', 'tab_1:row22:col2', 'tab_1:row22:col3'])
- dropped unlinked row (NIL): 'MTIME1 a , h' — extend the ontology if this is a real PK parameter (source ['tab_1:row24:col1', 'tab_1:row24:col2', 'tab_1:row24:col3'])
- dropped unlinked row (NIL): 'MTIME2, h' — extend the ontology if this is a real PK parameter (source ['tab_1:row25:col1', 'tab_1:row25:col2', 'tab_1:row25:col3'])
- dropped duplicate Q22 ('CL T, NOR , L/h', value '42.08') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amitriptyline
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row2:col3 = '95%CI'
- unparsed cell tab_1:row53:col1 = '1 and 2 are represented as coefficients of variation.'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.222 (4/18 fields) | 14 |

<details><summary>14 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[d1].value` | 0.95 | 1.13 | mismatch |
| `gpt-oss:120b` | `parameters[k24].value` | 0.00 | 0.00581 | mismatch |
| `gpt-oss:120b` | `parameters[k41]` | not captured | 80.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k56].value` | 0.77 | 1.09 | mismatch |
| `gpt-oss:120b` | `parameters[k65]` | 0.13 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[mtime1 a]` | not captured | 4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tvalag].value` | 0.31 | 0.414 | mismatch |
| `gpt-oss:120b` | `parameters[tvcl trm, amit].value` | 76.23 | 92.1 | mismatch |
| `gpt-oss:120b` | `parameters[tvka].parameter_id` | Q95 | Q49 | mismatch |
| `gpt-oss:120b` | `parameters[tvka].value` | 0.09 | 0.125 | mismatch |
| `gpt-oss:120b` | `parameters[tvq]` | not captured | 109 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tvv c, amit].parameter_id` | Q61 | Q63 | mismatch |
| `gpt-oss:120b` | `parameters[tvv c, amit].value` | 117.91 | 155 | mismatch |
| `gpt-oss:120b` | `parameters[tvv p, amit]` | not captured | 1670 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3'] |
| C5_unit_missing_Q310 | fail | [time] | not captured | not captured | not captured | ['tab_1:row20:col1', 'tab_1:row20:col2', 'tab_1:row20:col3'] |
| C5_unit_missing_Q47 | fail | 1 / [time] | not captured | not captured | not captured | ['tab_1:row29:col1', 'tab_1:row29:col2', 'tab_1:row29:col3'] |
| C5_unit_missing_Q48 | fail | 1 / [time] | not captured | not captured | not captured | ['tab_1:row21:col1', 'tab_1:row21:col2', 'tab_1:row21:col3'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row11:col1', 'tab_1:row11:col2', 'tab_1:row11:col3'] |
| C5_unit_missing_Q65 | fail | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row30:col1', 'tab_1:row30:col2', 'tab_1:row30:col3'] |
| C5_unit_missing_Q83 | fail | [time] | not captured | not captured | not captured | ['tab_1:row18:col1', 'tab_1:row18:col2', 'tab_1:row18:col3'] |
| C5_unit_missing_Q95 | fail | [time] | not captured | not captured | not captured | ['tab_1:row16:col1', 'tab_1:row16:col2', 'tab_1:row16:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 76.23 | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 3 covered | not captured | neither emitted nor in defaulted[]: ['tlag', 'kcomp'] |
| T3_topology_template | not captured | fail | parent_metabolite → PK_Parent_Metabolite* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amitriptyline/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Koh_2019` / `Koh_2019::reference`)
- model: `../../../knowledgebase/drugs/drug_amitriptyline/models/modelica/_needs_review/Amitriptyline_Koh2019_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_amitriptyline/models/modelica/_needs_review/Amitriptyline_Koh2019_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-07-22 09:29 UTC</sub>
