<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;fosinopril&quot;,&quot;href&quot;:&quot;drugs/drug_fosinopril/&quot;},{&quot;label&quot;:&quot;Hu_1997 \u00b7 caucasian&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fosinopril — `Fosinopril_Hu1997_caucasian`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The fosinoprilat record was rejected because the disposition rate constants λ1 (3.85) and kel (0.55) are reported in L/hr instead of reciprocal hours, a dimension mismatch on structural parameters, and the fraction excreted (fe, 45.90) carries 'n = 9' in place of a unit, which could not be converted to SI.**

For fosinoprilat, λ1 (fast disposition phase, 3.85) and kel (terminal elimination, 0.55) are macro-rate constants, so their unit should be per hour; the record gives L/hr, a flow dimension, which fails the dimensional check on structural parameters. The excretion fraction fe is reported as 45.90 with 'n = 9' — a subject count, not a unit — so this parameter reached the model without an SI value. The remaining fosinoprilat parameters (e.g. t1/2α 0.33 hr, t1/2β 1.58 hr, t1/2γ 8.24 hr, V 58.14 mL/kg, Vss 11638 mL, AUC∞ 3423 ng·hr/mL, MRT 4.71 hr, CL 1222 mL/hr) carry consistent units and show no dimensional problem. Extracted — fosinoprilat: λ1 3.85 L/hr, kel 0.55 L/hr, t1/2α 0.33 hr, t1/2β 1.58 hr, t1/2γ 8.24 hr, V 58.1 mL/kg, Vss 1.16e+04 mL, AUC∞ 3.42e+03 ng · hr/mL, … (+3).

Independently confirmed by `gpt-oss:120b`.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:26:53.708409+00:00) predates the upstream re-run (2026-10-07 06:29:47.178444+00:00). Current validate status: `rejected`.

## Citation
Hu OY et al., Pharmacokinetics of fosinoprilat in Chi…, Journal of clinical pharmac… (1997)
  ·  DOI: [10.1002/j.1552-4604.1997.tb05632.x](https://doi.org/10.1002/j.1552-4604.1997.tb05632.x)

## Model component
<dbs-pgx drug="fosinopril" model-id="Fosinopril_Hu1997_caucasian" status="rejected" stale="true" population="healthy Chinese and white men" measured-compound="fosinoprilat" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 11 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| α (L/hr) | `Q67` · λ1 | 3.85 | L/hr | not captured | [l] / [h] | not captured | exact (1.0) | Hu_1997_table_2:row0:col2 | — | not captured |
| β (L/hr) | `Q47` · kel | 0.55 | L/hr | not captured | [l] / [h] | not captured | exact (1.0) | Hu_1997_table_2:row1:col2 | — | not captured |
| t1/2α (hr) | `Q59` · t1/2α | 0.33 | hr | 1188.0 | [h] | not captured | exact (1.0) | Hu_1997_table_2:row3:col2 | — | not captured |
| t1/2β (hr) | `Q60` · t1/2β | 1.58 | hr | 5688.0 | [h] | not captured | exact (1.0) | Hu_1997_table_2:row4:col2 | — | not captured |
| t1/2γ, (hr) | `Q89` · t1/2γ | 8.24 | hr | 29664.0 | [h] | not captured | llm_confirmed (0.6) | Hu_1997_table_2:row5:col2 | — | not captured |
| Vc (mL/kg) | `Q61` · V | 58.14 | mL/kg | 0.004069799999999999 | [ml] / [kg] | not captured | exact (1.0) | Hu_1997_table_2:row8:col2 | — | not captured |
| Vdss (mL) | `Q65` · Vss | 11638 | mL | 0.011637999999999999 | [ml] | not captured | llm (0.6) | Hu_1997_table_2:row9:col2 | — | not captured |
| AUC∞ (ng · hr/mL) | `Q17` · AUC∞ | 3423 | ng · hr/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Hu_1997_table_2:row11:col2 | — | not captured |
| MRT (hr) | `Q53` · MRT | 4.71 | hr | 16956.0 | [h] | not captured | exact (1.0) | Hu_1997_table_2:row12:col2 | — | not captured |
| ClNR (mL/hr) | `Q22` · CL | 1222 | mL/hr | 3.3944444444444444e-07 | [ml] / [h] | not captured | exact (1.0) | Hu_1997_table_2:row17:col2 | — | not captured |
| CUE (%) | `Q44` · fe | 45.90 | n = 9 | not captured | [n=9] | not captured | llm (0.6) | Hu_1997_table_2:row19:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'α (L/hr)' → Q67 (unit '[length] ** 3 / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'β (L/hr)' → Q47 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'k10 (L/hr)' → Q47 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q47 ('k10 (L/hr)', value '0.53') — already have one for this compound
- dropped duplicate Q65 ('Vdss (mL/kg)', value '152.49') — already have one for this compound
- dropped duplicate Q22 ('ClNR (mL/hr/kg)', value '15.87') — already have one for this compound
- unit_dimension_unknown: 'n = 9' (fe)
- metabolite volume: 'Vc (mL/kg)' Q63→Q61 for fosinoprilat — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fosinoprilat
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 0, metabolites [1]
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- population split: 'caucasian (n = 9)' subgroup of Hu_1997 (paper reports 2 populations: caucasian (n = 9), chinese (n = 12))
- row roles: 2 per-group rows of fosinoprilat distribution_rate_constant but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of fosinoprilat elimination_rate_constant but 0 reference group(s) — kept as printed
- row roles: 6 per-group rows of fosinoprilat summary_statistic but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of fosinoprilat central_volume but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of fosinoprilat other but 0 reference group(s) — kept as printed
- row roles: 6 per-group rows of fosinoprilat clearance but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 15 linked by role

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Hu_1997_table_2:row7:col2 = '4,389 ± 299*'
- unparsed cell Hu_1997_table_2:row13:col2 = '2,280 ± 163*'
- unparsed cell Hu_1997_table_2:row14:col2 = '29.88 ± 2.12*'
- unparsed cell Hu_1997_table_2:row15:col2 = '1,057 ± 67*'
- unparsed cell Hu_1997_table_2:row16:col2 = '14.01 ± 1.17*'
- LLM region Hu_1997:results_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (9/9 fields) | none |

_Every reader agrees on every compared field of this record._

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Hu_1997_table_2:row11:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hu_1997_table_2:row17:col2'] |
| C5_dimension_Q47 | fail | [length] ** 3 / [time] | L/hr | not captured | not captured | ['Hu_1997_table_2:row1:col2'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Hu_1997_table_2:row12:col2'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Hu_1997_table_2:row3:col2'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Hu_1997_table_2:row4:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hu_1997_table_2:row8:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hu_1997_table_2:row9:col2'] |
| C5_dimension_Q67 | fail | [length] ** 3 / [time] | L/hr | not captured | not captured | ['Hu_1997_table_2:row0:col2'] |
| C5_dimension_Q89 | pass | [time] | not captured | not captured | not captured | ['Hu_1997_table_2:row5:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 1222.0 | not captured | not captured | ['Hu_1997_table_2:row17:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.22 L/h | not captured | not captured | ['Hu_1997_table_2:row17:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.07 L | not captured | not captured | ['Hu_1997_table_2:row8:col2'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 11.6 L | not captured | not captured | ['Hu_1997_table_2:row9:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fosinopril/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hu_1997` / `Hu_1997::caucasian`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:29 UTC</sub>
