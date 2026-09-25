<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;daunorubicin&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/&quot;},{&quot;label&quot;:&quot;Drevin_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Daunorubicin_Drevin2022_reference&quot;,&quot;label&quot;:&quot;Drevin_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_Drevin2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Daunorubicin_Hempel2003_reference&quot;,&quot;label&quot;:&quot;Hempel_2003_reference&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_Hempel2003_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Daunorubicin_Wang2019_reference&quot;,&quot;label&quot;:&quot;Wang_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_Wang2019_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# daunorubicin — `Daunorubicin_Drevin2022_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">built, not shipped</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**Why:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer did not exercise the covariate scenarios this record defines; the model was built differently from what the record describes. Evidence: T2_covariates_not_exercised; T3_param_coverage — expected 5 scholar param(s) emitted or defaulted — got 4 covered
**Second reading:** Independently confirmed by `gpt-oss:120b`.
**How to address:** Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
<sub>owner: **scholar**</sub>

## Citation
Drevin G; Briet M; Bazzoli C; Gyan E; Schmidt A; Dombret H; et al. et al. (2022). Pharmaceutics 14
  ·  DOI: [10.3390/pharmaceutics14040792](https://doi.org/10.3390/pharmaceutics14040792)

## Model component
<dbs-pgx drug="daunorubicin" model-id="Daunorubicin_Drevin2022_reference" status="model_quarantined" stale="false" population="acute myeloid leukaemia patients" measured-compound="daunorubicin" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 (L) | `Q63` · V1 | 21.1 | L | 0.0211 | [l] | not captured | exact (1.0) | tab_1:row4:col1, tab_1:row4:col2 | — | not captured |
| V2 (L) | `Q64` · V2 | 1449 | L | 1.449 | [l] | not captured | exact (1.0) | tab_1:row5:col1, tab_1:row5:col2 | — | not captured |
| V3 (L) | `Q77` · V3 | 323 | L | 0.323 | [l] | not captured | exact (1.0) | tab_1:row6:col1, tab_1:row6:col2 | — | not captured |
| Q1 (L/h) | `Q30` · Q | 69.4 | L/h | 1.927777777777778e-05 | [l] / [h] | not captured | exact (1.0) | tab_1:row7:col1, tab_1:row7:col2 | — | not captured |
| Q3 (L/h) | `Q308` · Q3 | 591 | L/h | 0.00016416666666666665 | [l] / [h] | not captured | exact (1.0) | tab_1:row9:col1, tab_1:row9:col2 | — | not captured |
| Cl m (L/h) | `Q22` · CL | 41.3 | L/h | 1.1472222222222221e-05 | [l] / [h] | not captured | boundary (0.8) | tab_1:row13:col1, tab_1:row13:col2 | linear_fractional on creatinine=-0.027 | not captured |
| Corr. Q2 Q1 | `Q99` · Q2 | 1 | not captured | not captured | not captured | not captured | boundary (0.8) | tab_1:row27:col1, tab_1:row27:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (12/12 fields) | none |

_Every reader agrees on every compared field of this record._

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


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
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_daunorubicin/Daunorubicin_Drevin2022_reference/Daunorubicin_Drevin2022_reference_matlab.zip" download>Daunorubicin_Drevin2022_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-07-15 11:23 UTC</sub>
