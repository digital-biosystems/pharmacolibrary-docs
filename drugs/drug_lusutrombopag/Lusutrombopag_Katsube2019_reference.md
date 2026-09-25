<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;lusutrombopag&quot;,&quot;href&quot;:&quot;drugs/drug_lusutrombopag/&quot;},{&quot;label&quot;:&quot;Katsube_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lusutrombopag_Katsube2019_reference&quot;,&quot;label&quot;:&quot;Katsube_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_lusutrombopag/Lusutrombopag_Katsube2019_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lusutrombopag — `Lusutrombopag_Katsube2019_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.643). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** C5 dimension mismatch on a structural parameter.
**Second reading:** `gpt-oss:120b` read this paper differently on `parameters[effect of subject population]` (not captured vs 1.46) and 9 more field(s) — a structural parameter, so the record is disputed.
**How to address:** not a curation fix — the pipeline is the limit here (scholar: a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value).
<sub>owner: **scholar**</sub>

## Citation
Katsube T; Shimizu R; Fukuhara T; Kano T; Wajima T et al. (2019). Clinical pharmacokinetics 58
  ·  DOI: [10.1007/s40262-019-00770-4](https://doi.org/10.1007/s40262-019-00770-4)

## Model component
<dbs-pgx drug="lusutrombopag" model-id="Lusutrombopag_Katsube2019_reference" status="rejected" stale="false" population="healthy subjects and patients with chronic liver disease" measured-compound="lusutrombopag" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, Q3/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Typical CL/F | `Q27` · CL/F | 0.874 | L/h | 2.427777777777778e-07 | [l] / [h] | 3.9 | llm_confirmed (0.6) | Tab2:row3:col1 | — | not captured |
| Q3/F [L/h] | `Q309` · Q3/F | 0.872 | L/h | 2.4222222222222224e-07 | [l] / [h] | 8.0 | llm_confirmed (0.6) | Tab2:row12:col1 | — | not captured |
| Typical V3/F | `Q78` · V3/F | 9.04 | L | 0.00904 | [l] | 6.6 | llm_confirmed (0.6) | Tab2:row14:col1 | — | not captured |
| Q4/F [L/h] | `Q69` · Q/F | 0.0265 | L/h | 7.361111111111111e-09 | [l] / [h] | 9.7 | llm (0.6) | Tab2:row16:col1 | — | not captured |
| F1 of solution in the fasted state | `Q40` · Fab | 1.00 | h | not captured | [h] | not captured | llm_confirmed (0.6) | Tab2:row24:col1 | — | not captured |
| KM [/h] | `Q1` · Km | 0.0320 | /h | not captured | [1] / [h] | 5.3 | llm_confirmed (0.6) | Tab2:row40:col1 | — | not captured |
| KL [/h] | `Q47` · kel | 0.00863 | /h | 2.3972222222222225e-06 | [1] / [h] | 10.2 | llm (0.6) | Tab2:row41:col1 | — | not captured |
| KA Solution in the fed state | `Q49` · kabs | 0.166 | /h | 4.6111111111111115e-05 | 1/h | not captured | review_gapfill (0.7) | Katsube_2019:review | — | not captured |
| Lag time Solution in the fed state | `Q83` · tlag | 0.568 | h | 2044.7999999999997 | h | not captured | review_gapfill (0.7) | Katsube_2019:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| V2/F [L] | Q82 | not captured | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Effect of WT' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col1', 'Tab2:row10:col1', 'Tab2:row15:col1'])
- dropped unlinked row (NIL): 'Effect of sex' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col1'])
- dropped unlinked row (NIL): 'Effect of ethnicity' — extend the ontology if this is a real PK parameter (source ['Tab2:row6:col1'])
- dropped unlinked row (NIL): 'Effect of subject population' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col1', 'Tab2:row11:col1'])
- unit_dimension_mismatch: 'Typical V2/F' → Q82 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q82 ('Typical V2/F', value '12.2') — already have one for this compound
- dropped unlinked row (NIL): 'V4/F [L]' — extend the ontology if this is a real PK parameter (source ['Tab2:row17:col1'])
- dropped unlinked row (NIL): 'Solution in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row19:col1', 'Tab2:row22:col1', 'Tab2:row26:col1'])
- dropped unlinked row (NIL): 'Others (solution in the fasted state, 2 mg tablet in the fed state, 0.25 mg tablet in the fed state, 2.5 mg [2 × 0.25 mg tablets and 1 × 2 mg tablet] in the fed state, 3.0 mg [4 × 0.25 mg tablets and 1 × 2 mg tablet] in the fed state, 1 mg tablet in the fed state, 3 mg tablet in the fed state)' — extend the ontology if this is a real PK parameter (source ['Tab2:row20:col1', 'Tab2:row23:col1'])
- dropped unlinked row (NIL): '2 mg tablet in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row27:col1'])
- dropped unlinked row (NIL): '0.25 mg tablet in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row28:col1'])
- dropped unlinked row (NIL): '2.5 mg (2 × 0.25 mg tablets and 1 × 2 mg tablet) in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row29:col1'])
- dropped unlinked row (NIL): '3.0 mg (4 × 0.25 mg tablets and 1 × 2 mg tablet) in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row30:col1'])
- dropped unlinked row (NIL): '1 mg tablet in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row31:col1'])
- dropped unlinked row (NIL): '3 mg tablet in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row32:col1'])
- unit_dimension_mismatch: 'KM [/h]' → Q1 (unit '1 / [time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Typical SLOP' — extend the ontology if this is a real PK parameter (source ['Tab2:row43:col1'])
- dropped unlinked row (NIL): 'Effect of CPS ≥ 9' — extend the ontology if this is a real PK parameter (source ['Tab2:row44:col1'])
- dropped unlinked row (NIL): 'PLT0 [×104/µL]' — extend the ontology if this is a real PK parameter (source ['Tab2:row45:col1'])
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2/F' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V3/F' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'slope' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lusutrombopag
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- gap-filled Q49 (kabs) from Katsube_2019's review values (primary lacked it)
- gap-filled Q83 (tlag) from Katsube_2019's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab2:row3:col2 = '0.876 (0.810–0.935)'
- unparsed cell Tab2:row5:col2 = '0.874 (0.816–0.941)'
- unparsed cell Tab2:row6:col2 = '0.866 (0.809–0.940)'
- unparsed cell Tab2:row7:col2 = '0.865 (0.788–0.952)'
- unparsed cell Tab2:row9:col2 = '12.3 (5.75–13.9)'
- unparsed cell Tab2:row11:col2 = '1.45 (1.25–2.17)'
- unparsed cell Tab2:row12:col2 = '0.851 (0.672–0.993)'
- unparsed cell Tab2:row14:col2 = '8.95 (7.71–12.1)'
- unparsed cell Tab2:row16:col2 = '0.0267 (0.0216–0.0341)'
- unparsed cell Tab2:row17:col2 = '3.43 (2.79–5.38)'
- unparsed cell Tab2:row19:col2 = '0.165 (0.0925–0.197)'
- unparsed cell Tab2:row20:col2 = '0.218 (0.117–0.249)'
- unparsed cell Tab2:row22:col2 = '0.568 (0.504–0.677)'
- unparsed cell Tab2:row23:col2 = '0.193 (0.183–0.208)'
- unparsed cell Tab2:row31:col2 = '0.971 (0.860–1.08)'
- unparsed cell Tab2:row32:col2 = '0.837 (0.766–0.915)'
- unparsed cell Tab2:row40:col2 = '0.0318 (0.0288–0.0353)'
- unparsed cell Tab2:row41:col2 = '0.00871 (0.00720–0.0108)'
- unparsed cell Tab2:row43:col2 = '9.09 (8.28–10.0)'
- unparsed cell Tab2:row44:col2 = '1.69 (1.26–2.13)'
- unparsed cell Tab2:row45:col2 = '3.92 (3.80–4.05)'
- unparsed cell Tab2:row53:col2 = '0.246 (0.130–0.332)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.643 (18/28 fields) | 10 |

<details><summary>10 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[effect of subject population]` | not captured | 1.46 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka solution in the fed state]` | 0.166 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[km [/h]].parameter_id` | Q1 | Q51 | mismatch |
| `gpt-oss:120b` | `parameters[lag time solution in the fed state]` | 0.568 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[solution in the fed state]` | not captured | 0.884 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_ethnicity]` | not captured | 0.868 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_sex]` | not captured | 0.874 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q61_wt]` | not captured | 1.00 | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical cl/f].covariate_forms` | [] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss:120b` | `parameters[v4/f [l]]` | not captured | 3.48 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | fail | 1 / [time] | /h | not captured | not captured | ['Tab2:row40:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row3:col1'] |
| C5_dimension_Q309 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row12:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row41:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Katsube_2019:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row16:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row14:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row8:col1', 'Tab2:row8:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Katsube_2019:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.874 L/h | not captured | not captured | ['Tab2:row3:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lusutrombopag/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Katsube_2019` / `Katsube_2019::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-18 22:33 UTC</sub>
