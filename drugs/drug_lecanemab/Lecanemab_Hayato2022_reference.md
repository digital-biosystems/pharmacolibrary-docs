<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;lecanemab&quot;,&quot;href&quot;:&quot;drugs/drug_lecanemab/&quot;},{&quot;label&quot;:&quot;Hayato_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lecanemab — `Lecanemab_Hayato2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.722). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The lecanemab two-compartment model from Hayato_2022 was rejected because one structural parameter's reported unit could not be converted to SI units, producing a dimension mismatch on a structural parameter.**

The record reports lecanemab clearance CL 0.0181 L/h, central volume V1 3.22 L, intercompartmental clearance Q 0.0349 L/h and peripheral volume V2 2.19 L, plus a female clearance ratio of 0.792 and several covariate effects. The rejection reason is a dimension mismatch on a structural parameter, and the stated limitation is that a reported unit could not be converted to SI, so that parameter was carried without an SI value. The bioavailability parameter Fab is listed for lecanemab with no value, and the weight covariate effect on intercompartmental clearance appears twice with conflicting values, 0.403 and 0.606. Extracted — lecanemab: CL 0.0181 L/h, V1 3.22 L, Q 0.0349 L/h, V2 2.19 L, CL_ratio 0.792 ratio.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has lecanemab, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Hayato S et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022)
  ·  DOI: [10.1002/psp4.12862](https://doi.org/10.1002/psp4.12862)

## Model component
<dbs-pgx drug="lecanemab" model-id="Lecanemab_Hayato2022_reference" status="rejected" stale="false" population="adults with early Alzheimer&#39;s disease" measured-compound="lecanemab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 5 extracted, plus 6 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 0.0181 | L/h | 5.027777777777779e-09 | [l] / [h] | not captured | exact (1.0) | psp412862-tbl-0001:row3:col1, psp412862-tbl-0001:row3:col2 | — | 38.9 (None% RSE) |
| V 1 (L) | `Q63` · V1 | 3.22 | L | 0.00322 | [l] | not captured | space_fold (0.95) | psp412862-tbl-0001:row4:col1, psp412862-tbl-0001:row4:col2 | — | 14.0 (None% RSE) |
| Q (L/h) | `Q30` · Q | 0.0349 | L/h | 9.694444444444444e-09 | [l] / [h] | not captured | exact (1.0) | psp412862-tbl-0001:row5:col1, psp412862-tbl-0001:row5:col2 | — | not captured |
| V 2 (L) | `Q64` · V2 | 2.19 | L | 0.00219 | [l] | not captured | space_fold (0.95) | psp412862-tbl-0001:row6:col1, psp412862-tbl-0001:row6:col2 | — | 99.5 (None% RSE) |
| Females ~ CL (ratio) | `Q31` · CL_ratio | 0.792 | ratio | not captured | [ratio] | not captured | llm_corrected (0.6) | psp412862-tbl-0001:row11:col1, psp412862-tbl-0001:row11:col2 | — | not captured |
| theta_q87_category | `Q900` · theta_q87_category | 0.998 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412862-tbl-0001:row7:col1, psp412862-tbl-0001:row7:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.403 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412862-tbl-0001:row9:col1, psp412862-tbl-0001:row9:col2 | — | not captured |
| theta_q319_albumin_power | `Q900` · theta_q319_albumin_power | -0.243 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412862-tbl-0001:row10:col1, psp412862-tbl-0001:row10:col2 | — | not captured |
| theta_cl_ratio_ada_power | `Q900` · theta_cl_ratio_ada_power | 1.09 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412862-tbl-0001:row12:col1, psp412862-tbl-0001:row12:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.606 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412862-tbl-0001:row13:col1, psp412862-tbl-0001:row13:col2 | — | not captured |
| theta_v2_race_power | `Q900` · theta_v2_race_power | 0.455 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412862-tbl-0001:row15:col1, psp412862-tbl-0001:row15:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL' routed out of structural estimates ('Interindividual variability (CV%)')
- table section iiv: 'V 1' routed out of structural estimates ('Interindividual variability (CV%)')
- table section iiv: 'V 2' routed out of structural estimates ('Interindividual variability (CV%)')
- table section iiv: 'F' routed out of structural estimates ('Interindividual variability (CV%)')
- table section residual_error: 'Proportional: study 101' routed out of structural estimates ('Residual variability (CV%)')
- table section residual_error: 'Proportional: study 104' routed out of structural estimates ('Residual variability (CV%)')
- table section residual_error: 'Proportional: study 201' routed out of structural estimates ('Residual variability (CV%)')
- unit_dimension_mismatch: 'Females ~ CL (ratio)' → Q31 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'Females ~ V 1 (ratio)' → Q63 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q63 ('Females ~ V 1 (ratio)', value '0.893') — already have one for this compound
- NIL: refused to back-fill base 'shrinkage' from footnote/prose loose number 9.96 (source ['psp412862-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1' from footnote/prose loose number 30.5 (source ['psp412862-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2' from footnote/prose loose number 31.7 (source ['psp412862-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Frel' from footnote/prose loose number 63.2 (source ['psp412862-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['psp412862-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1' from footnote/prose loose number None (source ['psp412862-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2' from footnote/prose loose number None (source ['psp412862-tbl-0001:footnote']); the table cell was unparseable — needs review
- covariate effect for Q87 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lecanemab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'lecanemab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell psp412862-tbl-0001:row3:col3 = '0.0181 (0.0175–0.0188)'
- unparsed cell psp412862-tbl-0001:row4:col3 = '3.22 (3.15–3.28)'
- unparsed cell psp412862-tbl-0001:row5:col3 = '0.0349 (0.0294–0.0396)'
- unparsed cell psp412862-tbl-0001:row6:col3 = '2.20 (2.00–2.40)'
- unparsed cell psp412862-tbl-0001:row7:col3 = '0.999 (0.950–1.06)'
- unparsed cell psp412862-tbl-0001:row9:col3 = '0.393 (0.217–0.495)'
- unparsed cell psp412862-tbl-0001:row10:col3 = '−0.237 (−0.405 to −0.0771)'
- unparsed cell psp412862-tbl-0001:row11:col3 = '0.790 (0.735–0.825)'
- unparsed cell psp412862-tbl-0001:row12:col3 = '1.09 (1.05–1.12)'
- unparsed cell psp412862-tbl-0001:row13:col3 = '0.603 (0.548–0.663)'
- unparsed cell psp412862-tbl-0001:row14:col3 = '0.893 (0.870–0.919)'
- unparsed cell psp412862-tbl-0001:row15:col3 = '0.450 (0.338–0.583)'
- unparsed cell psp412862-tbl-0001:row17:col3 = '38.9 (36.7–40.4)'
- unparsed cell psp412862-tbl-0001:row18:col3 = '14.0 (12.7–15.1)'
- unparsed cell psp412862-tbl-0001:row19:col3 = '99.8 (84.4–109)'
- unparsed cell psp412862-tbl-0001:row20:col3 = '34.1 (28.7–37.4)'
- unparsed cell psp412862-tbl-0001:row22:col3 = '14.0 (12.6–15.1)'
- unparsed cell psp412862-tbl-0001:row23:col3 = '19.6 (16.9–22.1)'
- unparsed cell psp412862-tbl-0001:row24:col3 = '30.2 (28.7–31.2)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `glm-5.3-flash` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.722 (13/18 fields) | 5 |

<details><summary>5 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['', '', '']] | mismatch |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | lecanemab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | lecanemab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412862-tbl-0001:row3:col1', 'psp412862-tbl-0001:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412862-tbl-0001:row5:col1', 'psp412862-tbl-0001:row5:col2'] |
| C5_dimension_Q31 | fail | dimensionless | ratio | not captured | not captured | ['psp412862-tbl-0001:row11:col1', 'psp412862-tbl-0001:row11:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412862-tbl-0001:row4:col1', 'psp412862-tbl-0001:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412862-tbl-0001:row6:col1', 'psp412862-tbl-0001:row6:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0181 | not captured | not captured | ['psp412862-tbl-0001:row3:col1', 'psp412862-tbl-0001:row3:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0181 L/h | not captured | not captured | ['psp412862-tbl-0001:row3:col1', 'psp412862-tbl-0001:row3:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.22 L | not captured | not captured | ['psp412862-tbl-0001:row4:col1', 'psp412862-tbl-0001:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.19 L | not captured | not captured | ['psp412862-tbl-0001:row6:col1', 'psp412862-tbl-0001:row6:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lecanemab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hayato_2022` / `Hayato_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 02:53 UTC</sub>
