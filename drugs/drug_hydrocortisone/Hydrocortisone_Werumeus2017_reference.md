<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;hydrocortisone&quot;,&quot;href&quot;:&quot;drugs/drug_hydrocortisone/&quot;},{&quot;label&quot;:&quot;Werumeus_2017 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# hydrocortisone — `Hydrocortisone_Werumeus2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The hydrocortisone/cortisol model's terminal half-life (1.33 h) does not reproduce the paper's reported values (0.89–2.0 h), and the absorption rate ka was left at library defaults instead of being estimated, so the record is held for review.**

Simulated as the paper dosed it, the model's terminal half-life is 1.3321202731100217 h, while the paper's values (0.89, 0.91, 1.82, 2.0 h) give ratios of 0.6661–1.4968, outside tolerance. The absorption rate constant ka (and Tlag) were not reported in the source and were defaulted, affecting the simulated profile without support from this paper. The model builder also assumed F=1, Fm=1 and no molar correction, giving an apparent (/F) parameterization with first-order depot input. A second reader disagrees on the primary analyte (cortisol vs hydrocortisone), the parameterization (apparent vs mechanistic), and the clearance parameter identity. Extracted — hydrocortisone: CLm/F 338 L/h, V 486 L, t1/2z 1 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has cortisol, the second reading hydrocortisone; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:27:01.473788+00:00) predates the upstream re-run (2026-10-07 19:13:23.501320+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `hydrocortisone`, measured `cortisol`.

## Citation
Werumeus Buning J et al., Pharmacokinetics of oral hydrocortisone…, Metabolism: clinical and ex… (2017)
  ·  DOI: [10.1016/j.metabol.2017.02.005](https://doi.org/10.1016/j.metabol.2017.02.005)

## Model component
<dbs-pgx drug="hydrocortisone" model-id="Hydrocortisone_Werumeus2017_reference" status="rejected" stale="true" population="adults with secondary adrenal insufficiency" measured-compound="cortisol" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 337.58 | L/h | 9.377222222222221e-05 | [l] / [h] | not captured | exact (1.0) | tab_1:row3:col1, tab_1:row3:col2, tab_1:row3:col3, tab_1:row3:col4, tab_1:row3:col5, tab_1:row3:col6, tab_1:row7:col1, tab_1:row7:col2, tab_1:row7:col3, tab_1:row7:col4, tab_1:row7:col5, tab_1:row7:col6, tab_1:row11:col1, tab_1:row11:col2, tab_1:row11:col3, tab_1:row11:col4, tab_1:row11:col5, tab_1:row11:col6 | — | not captured |
| V d (L) | `Q61` · V | 486.25 | L | 0.48625 | [l] | not captured | exact (1.0) | tab_1:row4:col1, tab_1:row4:col2, tab_1:row4:col3, tab_1:row4:col4, tab_1:row4:col5, tab_1:row4:col6, tab_1:row8:col1, tab_1:row8:col2, tab_1:row8:col3, tab_1:row8:col4, tab_1:row8:col5, tab_1:row8:col6, tab_1:row12:col1, tab_1:row12:col2, tab_1:row12:col3, tab_1:row12:col4, tab_1:row12:col5, tab_1:row12:col6 | — | not captured |
| t 1/2 (h) | `Q47` · kel | 1.00 | h | not captured | [h] | not captured | exact (1.0) | tab_1:row5:col1, tab_1:row5:col2, tab_1:row5:col3, tab_1:row5:col4, tab_1:row5:col5, tab_1:row9:col1, tab_1:row9:col2, tab_1:row9:col3, tab_1:row9:col4, tab_1:row9:col5, tab_1:row13:col1, tab_1:row13:col2, tab_1:row13:col3, tab_1:row13:col4, tab_1:row13:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'monte carlo simulation' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 't 1/2 (h)' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- metabolite volume: 'V d (L)' Q63→Q61 for plasma free cortisol — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cortisol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 3/3 row label(s) assigned, 51 linked by role; re-tagged parent→plasma free cortisol ×51
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.625 (5/8 fields) | 3 |

<details><summary>3 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[cl].parameter_id` | Q351 | Q22 | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | cortisol | hydrocortisone | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 1.17 | 0.998 | 0.853 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3', 'tab_1:row3:col4', 'tab_1:row3:col5', 'tab_1:row3:col6', 'tab_1:row7:col1', 'tab_1:row7:col2', 'tab_1:row7:col3', 'tab_1:row7:col4', 'tab_1:row7:col5', 'tab_1:row7:col6', 'tab_1:row11:col1', 'tab_1:row11:col2', 'tab_1:row11:col3', 'tab_1:row11:col4', 'tab_1:row11:col5', 'tab_1:row11:col6'] |
| C5_dimension_Q47 | fail | [time] | h | not captured | not captured | ['tab_1:row5:col1', 'tab_1:row5:col2', 'tab_1:row5:col3', 'tab_1:row5:col4', 'tab_1:row5:col5', 'tab_1:row9:col1', 'tab_1:row9:col2', 'tab_1:row9:col3', 'tab_1:row9:col4', 'tab_1:row9:col5', 'tab_1:row13:col1', 'tab_1:row13:col2', 'tab_1:row13:col3', 'tab_1:row13:col4', 'tab_1:row13:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col3', 'tab_1:row4:col4', 'tab_1:row4:col5', 'tab_1:row4:col6', 'tab_1:row8:col1', 'tab_1:row8:col2', 'tab_1:row8:col3', 'tab_1:row8:col4', 'tab_1:row8:col5', 'tab_1:row8:col6', 'tab_1:row12:col1', 'tab_1:row12:col2', 'tab_1:row12:col3', 'tab_1:row12:col4', 'tab_1:row12:col5', 'tab_1:row12:col6'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 337.58 | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3', 'tab_1:row3:col4', 'tab_1:row3:col5', 'tab_1:row3:col6', 'tab_1:row7:col1', 'tab_1:row7:col2', 'tab_1:row7:col3', 'tab_1:row7:col4', 'tab_1:row7:col5', 'tab_1:row7:col6', 'tab_1:row11:col1', 'tab_1:row11:col2', 'tab_1:row11:col3', 'tab_1:row11:col4', 'tab_1:row11:col5', 'tab_1:row11:col6'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 338 L/h | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3', 'tab_1:row3:col4', 'tab_1:row3:col5', 'tab_1:row3:col6', 'tab_1:row7:col1', 'tab_1:row7:col2', 'tab_1:row7:col3', 'tab_1:row7:col4', 'tab_1:row7:col5', 'tab_1:row7:col6', 'tab_1:row11:col1', 'tab_1:row11:col2', 'tab_1:row11:col3', 'tab_1:row11:col4', 'tab_1:row11:col5', 'tab_1:row11:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 486 L | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col3', 'tab_1:row4:col4', 'tab_1:row4:col5', 'tab_1:row4:col6', 'tab_1:row8:col1', 'tab_1:row8:col2', 'tab_1:row8:col3', 'tab_1:row8:col4', 'tab_1:row8:col5', 'tab_1:row8:col6', 'tab_1:row12:col1', 'tab_1:row12:col2', 'tab_1:row12:col3', 'tab_1:row12:col4', 'tab_1:row12:col5', 'tab_1:row12:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=cortisol) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 1 scholar param(s) emitted or defaulted | 1 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | deviation_id: not acceptable; defaulted_parameters: not acceptable; apparent_assumption: not acceptable; invented_absorption: not acceptable; input_model: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 2.1 | 8.90513602488329e-06 | not captured | unresolved concentration unit (exp 'the C max1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 32.69 | 8.90513602488329e-06 | not captured | unresolved concentration unit (exp 'nmol/L', sim 'kg/m3') |
| T1_cmax | reference | skipped | 70.81 | 8.90513602488329e-06 | not captured | unresolved concentration unit (exp 'nmol/L', sim 'kg/m3') |
| T1_cmax | reference | skipped | 514.47 | 8.90513602488329e-06 | not captured | unresolved concentration unit (exp 'nmol/L', sim 'kg/m3') |
| T1_cmax | reference | skipped | 754.94 | 8.90513602488329e-06 | not captured | unresolved concentration unit (exp 'nmol/L', sim 'kg/m3') |
| T1_cmax | reference | skipped | 28.53 | 8.90513602488329e-06 | not captured | unresolved concentration unit (exp 'nmol/L', sim 'kg/m3') |
| T1_cmax | reference | skipped | 96.71 | 8.90513602488329e-06 | not captured | unresolved concentration unit (exp 'nmol/L', sim 'kg/m3') |
| T1_t_half_terminal | reference | pass | 1.17 | 1.3321202731100217 | 1.1386 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.15 | 1.3321202731100217 | 1.1584 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.82 | 1.3321202731100217 | 0.7319 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.0 | 1.3321202731100217 | 0.6661 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.91 | 1.3321202731100217 | 1.4639 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.89 | 1.3321202731100217 | 1.4968 | h→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_hydrocortisone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Werumeus_2017` / `Werumeus_2017::reference`)
- model: `../../../knowledgebase/drugs/drug_hydrocortisone/models/modelica/Hydrocortisone_Werumeus2017_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_hydrocortisone/models/modelica/Hydrocortisone_Werumeus2017_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_hydrocortisone/models/modelica/Hydrocortisone_Werumeus2017_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 19:13 UTC</sub>
