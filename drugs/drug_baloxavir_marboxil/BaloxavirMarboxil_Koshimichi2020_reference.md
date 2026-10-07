<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;baloxavir marboxil&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/&quot;},{&quot;label&quot;:&quot;Koshimichi_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BaloxavirMarboxil_Kim2022_reference&quot;,&quot;label&quot;:&quot;Kim_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;BaloxavirMarboxil_Retout2026_reference&quot;,&quot;label&quot;:&quot;Retout_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# baloxavir marboxil — `BaloxavirMarboxil_Koshimichi2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `baloxavir_marboxil`, measured `baloxavir_acid`.

## Citation
Koshimichi H et al., Population Pharmacokinetics and Exposur…, Antimicrobial agents and ch… (2020)
  ·  DOI: [10.1128/AAC.00119-20](https://doi.org/10.1128/AAC.00119-20)

## Model component
<dbs-pgx drug="baloxavir marboxil" model-id="BaloxavirMarboxil_Koshimichi2020_reference" status="rejected" stale="false" population="influenza patients at high risk of complications" measured-compound="baloxavir_acid" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted, plus 5 covariate effects.

**Parameterization:** CLm/F, Q/F, Q2/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (liters/h) | `Q351` · CLm/F | 10.4 | liters/h | 2.8888888888888894e-06 | [l] / [h] | not captured | exact (1.0) | T2:row3:col1, T2:row3:col2, T2:row3:col3, T2:row3:col4 | — | 39.3 (None% RSE) |
| Vc/F (liters) | `Q290` · V1/F | 528 | liters | 0.528 | [l] | not captured | exact (1.0) | T2:row4:col1, T2:row4:col2, T2:row4:col3, T2:row4:col4 | — | 59.7 (None% RSE) |
| Q1/F (liters/h) | `Q69` · Q/F | 10.3 | liters/h | 2.861111111111111e-06 | [l] / [h] | not captured | exact (1.0) | T2:row5:col1, T2:row5:col2, T2:row5:col3, T2:row5:col4 | — | not captured |
| Vp1/F (liters) | `Q82` · V2/F | 130 | liters | 0.13 | [l] | not captured | exact (1.0) | T2:row6:col1, T2:row6:col2, T2:row6:col3, T2:row6:col4 | — | not captured |
| Q2/F (liters/h) | `Q80` · Q2/F | 1.25 | liters/h | 3.4722222222222224e-07 | [l] / [h] | not captured | special_case (0.95) | T2:row7:col1, T2:row7:col2, T2:row7:col3, T2:row7:col4 | — | not captured |
| Vp2/F (liters) | `Q78` · V3/F | 131 | liters | 0.131 | [l] | not captured | exact (1.0) | T2:row8:col1, T2:row8:col2, T2:row8:col3, T2:row8:col4 | — | 26.2 (None% RSE) |
| Ka (liters/h) | `Q49` · kabs | 0.905 | liters/h | not captured | [l] / [h] | not captured | exact (1.0) | T2:row9:col1, T2:row9:col2, T2:row9:col3, T2:row9:col4 | — | not captured |
| Lag time (h) | `Q83` · tlag | 0.323 | h | 1162.8 | [h] | not captured | exact (1.0) | T2:row10:col1, T2:row10:col2, T2:row10:col3, T2:row10:col4 | — | not captured |
| effect_of_body_wt_on_cl_f_q1_f_and_q2_f | `Q900` · effect_of_body_wt_on_cl_f_q1_f_and_q2_f | 0.278 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row11:col1, T2:row11:col2, T2:row11:col3, T2:row11:col4 | — | not captured |
| theta_q319_wt | `Q900` · theta_q319_wt | 0.743 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row12:col1, T2:row12:col2, T2:row12:col3, T2:row12:col4 | — | not captured |
| theta_cl_f_race | `Q900` · theta_cl_f_race | 0.495 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row13:col1, T2:row13:col2, T2:row13:col3, T2:row13:col4 | — | not captured |
| theta_v1_f_race | `Q900` · theta_v1_f_race | 0.523 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row14:col1, T2:row14:col2, T2:row14:col3, T2:row14:col4 | — | not captured |
| theta_kabs_gender | `Q900` · theta_kabs_gender | 0.566 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row15:col1, T2:row15:col2, T2:row15:col3, T2:row15:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Ka (liters/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- covariate level 'Effect of body wt on CL/F, Q1/F, and Q2/F' → Q900:effect_of_body_wt_on_cl_f_q1_f_and_q2_f = 0.278 (linear_fractional on Q27)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- metabolite baloxavir_acid: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=baloxavir_acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- row roles: 2 per-group rows of baloxavir_acid covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 32 linked by role
- review gap-fill skipped: this record measures 'baloxavir_acid', not baloxavir_marboxil — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col3', 'T2:row4:col4'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col3', 'T2:row3:col4'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | liters/h | not captured | not captured | ['T2:row9:col1', 'T2:row9:col2', 'T2:row9:col3', 'T2:row9:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row5:col1', 'T2:row5:col2', 'T2:row5:col3', 'T2:row5:col4'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row8:col1', 'T2:row8:col2', 'T2:row8:col3', 'T2:row8:col4'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row7:col1', 'T2:row7:col2', 'T2:row7:col3', 'T2:row7:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col3', 'T2:row6:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['T2:row10:col1', 'T2:row10:col2', 'T2:row10:col3', 'T2:row10:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 528 L | not captured | not captured | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col3', 'T2:row4:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 130 L | not captured | not captured | ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col3', 'T2:row6:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_baloxavir_marboxil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Koshimichi_2020` / `Koshimichi_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 13:29 UTC</sub>
