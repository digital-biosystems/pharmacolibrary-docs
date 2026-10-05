<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11C&quot;,&quot;href&quot;:&quot;atc/A11C.md&quot;},{&quot;label&quot;:&quot;retinol&quot;,&quot;href&quot;:&quot;drugs/drug_retinol/&quot;},{&quot;label&quot;:&quot;Green_2024_2 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# retinol — `Retinol_Green2024v2_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.158). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The retinol model was rejected because its structural parameters carry amounts (μmol) and rates (μmol/d) instead of volumes and clearance units, and a compartment is unreachable from the dose.**

The central, peripheral and second peripheral volumes of retinol are reported as 3.362, 920.458 and 52.6608 μmol — amounts, not volumes — and the apparent metabolite clearance as 0.651488 μmol/d, a dimension mismatch on structural parameters. The unit μmol could not be converted to SI, so the parameters arrived without SI values. The model structure also contains an unreachable compartment or unlinked metabolite. A second reader additionally recorded dose-related parameters (dr 1.303, dt(3) 0.129438, l(0,1) 9.99, l(0,6) 0.00070779, and 3875) that the record left null, and read the parameterization as mechanistic rather than apparent. Extracted — retinol: V1 3.36 μmol, V2 920 μmol, V3 52.7 μmol, CLm/F 0.651 μmol/d.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has retinyl acetate, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `retinyl acetate`, measured `retinol`.

## Citation
Green MH et al., Use of Population-Based Compartmental M…, Current developments in nut… (2024)
  ·  DOI: [10.1016/j.cdnut.2024.104484](https://doi.org/10.1016/j.cdnut.2024.104484)

## Model component
<dbs-pgx drug="retinol" model-id="Retinol_Green2024v2_reference" status="rejected" stale="false" population="Ghanaian women of reproductive age" measured-compound="retinol" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| M(5) (μmol) | `Q63` · V1 | 3.362 | μmol | not captured | [µM] · [ol] | not captured | exact (1.0) | Green_2024_2_table_2:row16:col1 | — | not captured |
| M(6) (μmol) | `Q64` · V2 | 920.458 | μmol | not captured | [µM] · [ol] | not captured | exact (1.0) | Green_2024_2_table_2:row17:col1 | — | not captured |
| M(7) (μmol) | `Q77` · V3 | 52.6608 | μmol | not captured | [µM] · [ol] | not captured | exact (1.0) | Green_2024_2_table_2:row18:col1 | — | not captured |
| R(8,5) (μmol/d) | `Q351` · CLm/F | 0.651488 | μmol/d | not captured | [[µM] · [ol]] / [d] | not captured | exact (1.0) | Green_2024_2_table_2:row20:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Time (d)' — extend the ontology if this is a real PK parameter (source ['tbl4:row0:col1', 'tbl4:row0:col2', 'tbl4:row0:col3', 'tbl4:row0:col4', 'tbl4:row0:col5', 'tbl4:row0:col6', 'tbl4:row0:col7', 'tbl4:row0:col8'])
- dropped unlinked row (NIL): 'N' — extend the ontology if this is a real PK parameter (source ['tbl4:row1:col1', 'tbl4:row1:col2', 'tbl4:row1:col3', 'tbl4:row1:col4', 'tbl4:row1:col5', 'tbl4:row1:col6', 'tbl4:row1:col7', 'tbl4:row1:col8'])
- dropped unlinked row (NIL): 'GM' — extend the ontology if this is a real PK parameter (source ['tbl4:row2:col1', 'tbl4:row2:col2', 'tbl4:row2:col3', 'tbl4:row2:col4', 'tbl4:row2:col5', 'tbl4:row2:col6', 'tbl4:row2:col7', 'tbl4:row2:col8'])
- dropped unlinked row (NIL): 'Min' — extend the ontology if this is a real PK parameter (source ['tbl4:row3:col1', 'tbl4:row3:col2', 'tbl4:row3:col3', 'tbl4:row3:col4', 'tbl4:row3:col5', 'tbl4:row3:col6', 'tbl4:row3:col7', 'tbl4:row3:col8'])
- dropped unlinked row (NIL): 'Max' — extend the ontology if this is a real PK parameter (source ['tbl4:row4:col1', 'tbl4:row4:col2', 'tbl4:row4:col3', 'tbl4:row4:col4', 'tbl4:row4:col5', 'tbl4:row4:col6', 'tbl4:row4:col7', 'tbl4:row4:col8'])
- dropped unlinked row (NIL): 'L(2,1) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row0:col1'])
- dropped unlinked row (NIL): 'L(0,1) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row1:col1'])
- dropped unlinked row (NIL): 'L(3,2) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row2:col1'])
- dropped unlinked row (NIL): 'L(5,2) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row3:col1'])
- dropped unlinked row (NIL): 'L(4,3) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row4:col1'])
- dropped unlinked row (NIL): 'L(5,4) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row5:col1', 'Green_2024_2_table_2:row5:col2'])
- dropped unlinked row (NIL): 'L(6,5) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row6:col1', 'Green_2024_2_table_2:row6:col2'])
- dropped unlinked row (NIL): 'L(5,6) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row7:col1', 'Green_2024_2_table_2:row7:col2'])
- dropped unlinked row (NIL): 'L(7,5) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row8:col1', 'Green_2024_2_table_2:row8:col2'])
- dropped unlinked row (NIL): 'L(5,7) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row9:col1', 'Green_2024_2_table_2:row9:col2'])
- dropped unlinked row (NIL): 'L(0,6) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row10:col1', 'Green_2024_2_table_2:row10:col2'])
- dropped unlinked row (NIL): 'L(8,5) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row11:col1'])
- dropped unlinked row (NIL): 'L(0,8) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row12:col1'])
- dropped unlinked row (NIL): 'DT(3) (d)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row13:col1', 'Green_2024_2_table_2:row13:col2'])
- dropped unlinked row (NIL): 'DT(8) (d)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row14:col1'])
- unit_dimension_mismatch: 'M(5) (μmol)' → Q63 (unit '[substance]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'M(6) (μmol)' → Q64 (unit '[substance]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'M(7) (μmol)' → Q77 (unit '[substance]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'TBS (μmol)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row19:col1'])
- unit_dimension_mismatch: 'R(8,5) (μmol/d)' → Q22 (unit '[substance] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'R(0,6) (μmol/d)' → Q22 (unit '[substance] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('R(0,6) (μmol/d)', value '0.651488') — already have one for this compound
- unit_dimension_mismatch: 'DR (μmol/d)' → Q22 (unit '[substance] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('DR (μmol/d)', value '1.303') — already have one for this compound
- dropped unlinked row (NIL): 'U(1) (μmol/d)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row23:col1'])
- metabolite retinol: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=retinol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 28/28 row label(s) assigned, 6 linked by role; re-tagged retinol→parent ×8
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 2 transcribed (30 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.158 (3/19 fields) | 16 |

<details><summary>16 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[91]` | not captured | 3875 | only_one_extracted |
| `gpt-oss:120b` | `parameters[dr]` | not captured | 1.303 | only_one_extracted |
| `gpt-oss:120b` | `parameters[dt(3)]` | not captured | 0.129438 | only_one_extracted |
| `gpt-oss:120b` | `parameters[l(0,1)]` | not captured | 9.99 | only_one_extracted |
| `gpt-oss:120b` | `parameters[l(0,6)]` | not captured | 0.00070779 | only_one_extracted |
| `gpt-oss:120b` | `parameters[l(2,1)]` | not captured | 30 | only_one_extracted |
| `gpt-oss:120b` | `parameters[l(4,3)]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[l(8,5)]` | not captured | 0.19378 | only_one_extracted |
| `gpt-oss:120b` | `parameters[m(5)].parameter_id` | Q63 | Q30 | mismatch |
| `gpt-oss:120b` | `parameters[m(6)]` | 920.458 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[m(7)].parameter_id` | Q77 | Q54 | mismatch |
| `gpt-oss:120b` | `parameters[max]` | not captured | 2.73 | only_one_extracted |
| `gpt-oss:120b` | `parameters[r(8,5)]` | 0.651488 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | retinyl acetate | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | retinol | unknown | mismatch |

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
| C5_dimension_Q351 | fail | [substance] / [time] | μmol/d | not captured | not captured | ['Green_2024_2_table_2:row20:col1'] |
| C5_dimension_Q63 | fail | [substance] | μmol | not captured | not captured | ['Green_2024_2_table_2:row16:col1'] |
| C5_dimension_Q64 | fail | [substance] | μmol | not captured | not captured | ['Green_2024_2_table_2:row17:col1'] |
| C5_dimension_Q77 | fail | [substance] | μmol | not captured | not captured | ['Green_2024_2_table_2:row18:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_retinol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Green_2024_2` / `Green_2024_2::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 08:12 UTC</sub>
