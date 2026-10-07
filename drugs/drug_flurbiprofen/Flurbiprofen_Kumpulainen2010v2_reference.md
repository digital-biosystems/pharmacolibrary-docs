<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;flurbiprofen&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/&quot;},{&quot;label&quot;:&quot;Kumpulainen_2010_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flurbiprofen_Aarons1991_reference&quot;,&quot;label&quot;:&quot;Aarons_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/Flurbiprofen_Aarons1991_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# flurbiprofen — `Flurbiprofen_Kumpulainen2010v2_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.824). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The flurbiprofen record was rejected because structural parameters carry dimensionally wrong units — e.g. the absorption rate constant kabs is reported as 2.5 l h⁻¹ — and units like 'Bootstrap' and 'WT/70' could not be converted to SI.**

The dimension check failed on structural parameters: kabs, an absorption rate constant, is given in l h⁻¹, and several parameters (CL 0.83, fu 0.00023, V2 0.19, sigma 0.11) carry the unit 'Bootstrap', which is not a physical unit and could not be expressed in SI, so no SI values were available. Volumes are reported only as allometric scaling factors (× WT/70) rather than in litres. A second reader also disagreed on the dosed compound (flurbiprofen axetil versus flurbiprofen) and on a deep peripheral volume parameter identifier, and noted a parameter (uptake to CSF, 6.0) absent from this record. Extracted — flurbiprofen: kabs 2.5 l h⁻¹, Fab 0.045 h, CL 0.83 Bootstrap, V1 2.6 WT/70, Q2 0.58 WT/70, Q 1 WT/70, Vss 0.097 WT/70, fu 0.00023 Bootstrap, … (+2).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has flurbiprofen axetil, the second reading flurbiprofen; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:38:06.966146+00:00) predates the upstream re-run (2026-10-07 14:37:29.227013+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `flurbiprofen axetil; flurbiprofen`, measured `flurbiprofen`.

## Citation
Kumpulainen E et al., Plasma and cerebrospinal fluid pharmaco…, British journal of clinical… (2010)
  ·  DOI: [10.1111/j.1365-2125.2010.03720.x](https://doi.org/10.1111/j.1365-2125.2010.03720.x)

## Model component
<dbs-pgx drug="flurbiprofen" model-id="Flurbiprofen_Kumpulainen2010v2_reference" status="rejected" stale="true" population="children aged 3 months to 13 years" measured-compound="flurbiprofen" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 7 extracted, plus 5 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Bioavailability | `Q40` · Fab | 0.81 | not captured | not captured | not captured | 0.055 | exact (1.0) | Kumpulainen_2010_2_table_p6_1:row0:col1, Kumpulainen_2010_2_table_p6_1:row0:col2, Kumpulainen_2010_2_table_p6_1:row0:col3 | — | not captured |
| Oral absorption rate constant (K12) (l h⁻¹) | `Q301` · k12 | 5.5 | l h⁻¹ | not captured | [l] / [h] | 0.24 | llm_corrected (0.6) | Kumpulainen_2010_2_table_p6_1:row1:col1, Kumpulainen_2010_2_table_p6_1:row1:col2, Kumpulainen_2010_2_table_p6_1:row1:col3 | — | not captured |
| Lag time, oral absorption (h) | `Q83` · tlag | 0.11 | h | 396.0 | [h] | 0.16 | llm_corrected (0.6) | Kumpulainen_2010_2_table_p6_1:row2:col1, Kumpulainen_2010_2_table_p6_1:row2:col2, Kumpulainen_2010_2_table_p6_1:row2:col3 | — | not captured |
| i.v. absorption rate constant (K42) (l h⁻¹) | `Q49` · kabs | 29 | l h⁻¹ | not captured | [l] / [h] | 0.32 | llm_confirmed (0.6) | Kumpulainen_2010_2_table_p6_1:row3:col1, Kumpulainen_2010_2_table_p6_1:row3:col2, Kumpulainen_2010_2_table_p6_1:row3:col3 | — | not captured |
| Protein-free fraction | `Q46` · fu | 0.00031 | not captured | not captured | not captured | 0.043 | llm_confirmed (0.6) | Kumpulainen_2010_2_table_p6_1:row10:col1, Kumpulainen_2010_2_table_p6_1:row10:col2, Kumpulainen_2010_2_table_p6_1:row10:col3 | — | not captured |
| QCSF (l h⁻¹) | `Q30` · Q | 0.12 | l h⁻¹ | 3.3333333333333334e-08 | [l] / [h] | 0.27 | llm (0.6) | Kumpulainen_2010_2_table_p6_1:row11:col1, Kumpulainen_2010_2_table_p6_1:row11:col2, Kumpulainen_2010_2_table_p6_1:row11:col3 | — | 0.81 (0.40% RSE) |
| Uptake to CSF (UPTK) | `Q349` · kuptake | 6.8 | UPTK | not captured | [uptk] | 0.070 | exact (1.0) | Kumpulainen_2010_2_table_p6_1:row12:col1, Kumpulainen_2010_2_table_p6_1:row12:col2, Kumpulainen_2010_2_table_p6_1:row12:col3 | — | not captured |
| theta_q22_wt_power | `Q900` · theta_q22_wt_power | 0.96 | not captured | not captured | not captured | 0.057 | not captured (not captured) | Kumpulainen_2010_2_table_p6_1:row4:col1, Kumpulainen_2010_2_table_p6_1:row4:col2, Kumpulainen_2010_2_table_p6_1:row4:col3 | — | not captured |
| theta_q63_wt_power | `Q900` · theta_q63_wt_power | 3.6 | not captured | not captured | not captured | 0.11 | not captured (not captured) | Kumpulainen_2010_2_table_p6_1:row5:col1, Kumpulainen_2010_2_table_p6_1:row5:col2, Kumpulainen_2010_2_table_p6_1:row5:col3 | — | not captured |
| theta_q99_wt_power | `Q900` · theta_q99_wt_power | 1.5 | not captured | not captured | not captured | 0.39 | not captured (not captured) | Kumpulainen_2010_2_table_p6_1:row6:col1, Kumpulainen_2010_2_table_p6_1:row6:col2, Kumpulainen_2010_2_table_p6_1:row6:col3 | — | not captured |
| theta_q_wt_power | `Q900` · theta_q_wt_power | 1.8 | not captured | not captured | not captured | 0.20 | not captured (not captured) | Kumpulainen_2010_2_table_p6_1:row7:col1, Kumpulainen_2010_2_table_p6_1:row7:col2, Kumpulainen_2010_2_table_p6_1:row7:col3 | — | not captured |
| theta_q63_wt_power | `Q900` · theta_q63_wt_power | 0.18 | not captured | not captured | not captured | 0.30 | not captured (not captured) | Kumpulainen_2010_2_table_p6_1:row8:col1, Kumpulainen_2010_2_table_p6_1:row8:col2, Kumpulainen_2010_2_table_p6_1:row8:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Oral absorption rate constant (K12) (l h⁻¹)' → Q301 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'i.v. absorption rate constant (K42) (l h⁻¹)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'Q (deep peripheral) () × (WT/70)' — extend the ontology if this is a real PK parameter (source ['Kumpulainen_2010_2_table_p6_1:row9:col1', 'Kumpulainen_2010_2_table_p6_1:row9:col2', 'Kumpulainen_2010_2_table_p6_1:row9:col3'])
- unit_dimension_unknown: 'UPTK' (kuptake)
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q63 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q99 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=flurbiprofen
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.824 (14/17 fields) | 3 |

<details><summary>3 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[uptake to csf]` | not captured | 6.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v (deep peripheral) () ×].parameter_id` | Q65 | Q77 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | flurbiprofen axetil | flurbiprofen | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kumpulainen_2010_2_table_p6_1:row11:col1', 'Kumpulainen_2010_2_table_p6_1:row11:col2', 'Kumpulainen_2010_2_table_p6_1:row11:col3'] |
| C5_dimension_Q301 | fail | [length] ** 3 / [time] | l h⁻¹ | not captured | not captured | ['Kumpulainen_2010_2_table_p6_1:row1:col1', 'Kumpulainen_2010_2_table_p6_1:row1:col2', 'Kumpulainen_2010_2_table_p6_1:row1:col3'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | l h⁻¹ | not captured | not captured | ['Kumpulainen_2010_2_table_p6_1:row3:col1', 'Kumpulainen_2010_2_table_p6_1:row3:col2', 'Kumpulainen_2010_2_table_p6_1:row3:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Kumpulainen_2010_2_table_p6_1:row2:col1', 'Kumpulainen_2010_2_table_p6_1:row2:col2', 'Kumpulainen_2010_2_table_p6_1:row2:col3'] |
| C5_unit_missing_Q349 | fail | 1 / [time] | UPTK | not captured | not captured | ['Kumpulainen_2010_2_table_p6_1:row12:col1', 'Kumpulainen_2010_2_table_p6_1:row12:col2', 'Kumpulainen_2010_2_table_p6_1:row12:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_flurbiprofen/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kumpulainen_2010_2` / `Kumpulainen_2010_2::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 14:37 UTC</sub>
