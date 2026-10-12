<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;avelumab&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/&quot;},{&quot;label&quot;:&quot;Grisic_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# avelumab — `Avelumab_Grisic2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.688). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Avelumab’s KD of 0.105 month−1 was refused because its reported dimension conflicts with its meaning as an equilibrium dissociation constant.**

The record defines KD as an equilibrium dissociation constant for drug-target binding but reports it in month−1, and a reported unit lacked an SI conversion. The findings also report a negative clearance or volume at baseline or in a covariate scenario, but do not identify the parameter or value, so that result cannot be tied to a listed estimate. Extracted — avelumab: KD 0.105 month−1, kel 0.199 month–1, CL 0.0236 L/h, V1 3.29 L, Q 0.022 L/h, V2 1.1 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of box_cox_for_baseline_ts: this record has -0.391, the second reading none; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Grisic AM et al., Model-Based Characterization of the Bid…, Clinical cancer research :… (2022)
  ·  DOI: [10.1158/1078-0432.CCR-21-2662](https://doi.org/10.1158/1078-0432.CCR-21-2662)

## Model component
<dbs-pgx drug="avelumab" model-id="Avelumab_Grisic2022_reference" status="rejected" stale="false" population="patients with metastatic Merkel cell carcinoma" measured-compound="avelumab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KD, month−1 | `Q331` · KD | 0.105 | month−1 | not captured | [1] / [month] | not captured | exact (1.0) | tbl1:row2:col1 | — | not captured |
| λ, month–1 | `Q47` · kel | 0.199 | month–1 | not captured | [1] / [month] | not captured | exact (1.0) | tbl1:row4:col1 | — | not captured |
| CL, L/h | `Q22` · CL | 0.0236 | L/h | 6.555555555555556e-09 | [l] / [h] | not captured | exact (1.0) | tbl1:row6:col1 | — | not captured |
| Vc, L | `Q63` · V1 | 3.29 | L | 0.00329 | [l] | not captured | exact (1.0) | tbl1:row7:col1 | — | not captured |
| Q, L/h | `Q30` · Q | 0.022 | L/h | 6.111111111111111e-09 | [l] / [h] | not captured | exact (1.0) | tbl1:row8:col1 | — | not captured |
| Vp, L | `Q64` · V2 | 1.1 | L | 0.0011 | [l] | not captured | exact (1.0) | tbl1:row9:col1 | — | not captured |
| box_cox_for_baseline_ts | `Q900` · box_cox_for_baseline_ts | -0.391 | not captured | not captured | not captured | not captured | not captured (not captured) | tbl1:row12:col1 | — | not captured |
| box_cox_for_effect_decay | `Q900` · box_cox_for_effect_decay | -2.97 | not captured | not captured | not captured | not captured | not captured (not captured) | tbl1:row13:col1 | — | not captured |
| theta_q314_albumin | `Q900` · theta_q314_albumin | -0.0193 | not captured | not captured | not captured | not captured | not captured (not captured) | tbl1:row10:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Baseline TS, mm' — extend the ontology if this is a real PK parameter (source ['tbl1:row1:col1'])
- unit_dimension_mismatch: 'KD, month−1' → Q331 (unit '1 / [time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'KG, month−1' — extend the ontology if this is a real PK parameter (source ['tbl1:row3:col1'])
- dropped PD-category row 'Effect of drug concentration on effect decay (Exposureeffect), 1/(μg/mL)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row5:col1'])
- dropped duplicate Q22 ('Effect of TS on CL (TSeffect), L/h per mm TS different from median TS 51 mm', value '0.00476') — already have one for this compound
- covariate level 'Box-Cox for baseline TS' → Q900:box_cox_for_baseline_ts = -0.391 (additive_shift on Q22)
- covariate level 'Box-Cox for effect decay' → Q900:box_cox_for_effect_decay = -2.97 (additive_shift on Q22)
- dropped PD-category row 'Dropout: Intercept logit' → Q344 (logit_intercept, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row26:col1', 'tbl1:row26:col3'])
- dropped PD-category row 'Dropout: Effect of progressive disease' → Q340 (alpha_progression, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row27:col1', 'tbl1:row27:col3'])
- dropped PD-category row 'Dropout: Effect of relative change from baseline TS' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row28:col1', 'tbl1:row28:col3'])
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=avelumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'avelumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell tbl1:row1:col3 = '85.9 (44.8–150)'
- unparsed cell tbl1:row2:col3 = '0.161 (0.102–0.363)'
- unparsed cell tbl1:row3:col3 = '0.0275 (0.00372–0.0641)'
- unparsed cell tbl1:row4:col3 = '0.193 (0.0479–0.465)'
- unparsed cell tbl1:row5:col3 = '0.00052 (0.0000125–0.00061)'
- unparsed cell tbl1:row6:col3 = '0.252 (0.0194–0.0353)'
- unparsed cell tbl1:row7:col3 = '3.28 (2.97–4.15)'
- unparsed cell tbl1:row8:col3 = '0.022 (0.0156–0.0270)'
- unparsed cell tbl1:row9:col3 = '1.1 (0.836–1.52)'
- unparsed cell tbl1:row10:col3 = '−0.0184 (−0.0396 to −0.0131)'
- unparsed cell tbl1:row11:col3 = '0.00486 (0.00243–0.00985)'
- unparsed cell tbl1:row12:col3 = '−0.551 (−2.45–0.443)'
- unparsed cell tbl1:row13:col3 = '−2.97 (−2.99 to −2.97)'
- unparsed cell tbl1:row14:col3 = '0.452 (0.137–51.6)'
- unparsed cell tbl1:row15:col3 = '235 (93.0–479)'
- unparsed cell tbl1:row16:col3 = '109 (21.1–404)'
- unparsed cell tbl1:row17:col3 = '31.3 (26.7–45.9)'
- unparsed cell tbl1:row18:col3 = '26.2 (19.8–34.2)'
- unparsed cell tbl1:row19:col3 = '0.488 (0.128–1.40)'
- unparsed cell tbl1:row20:col3 = '111 (33.0–210)'
- unparsed cell tbl1:row21:col3 = '50.6 (38.7–69.7)'
- unparsed cell tbl1:row22:col3 = '13.7 (10.7–16.2)'
- unparsed cell tbl1:row23:col3 = '2.42 (0.573–5.53)'
- unparsed cell tbl1:row24:col3 = '30.1 (19.1–482)'
- unparsed cell tbl1:row25:col3 = '0.00011 (0.000113–0.0107)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `gpt-6-luna` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.688 (11/16 fields) | 5 |

<details><summary>5 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[box_cox_for_baseline_ts]` | -0.391 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl].covariate_forms` | ['additive_shift', 'additive_shift'] | ['additive_shift', 'linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_albumin]` | not captured | -0.0193 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q314_albumin]` | -0.0193 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q324_category]` | not captured | -0.391 | only_one_extracted |

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
| C2_sign_Q22_category | fail | -0.3674 | not captured | not captured | not captured | base 0.0236 + shift -0.391 (category) |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl1:row6:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl1:row8:col1'] |
| C5_dimension_Q331 | fail | 1 / [time] | month−1 | not captured | not captured | ['tbl1:row2:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['tbl1:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl1:row7:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl1:row9:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0236 | not captured | not captured | ['tbl1:row6:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0236 L/h | not captured | not captured | ['tbl1:row6:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.29 L | not captured | not captured | ['tbl1:row7:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.1 L | not captured | not captured | ['tbl1:row9:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_avelumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Grisic_2022` / `Grisic_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:39 UTC</sub>
