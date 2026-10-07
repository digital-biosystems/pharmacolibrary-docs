<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;mosunetuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_mosunetuzumab/&quot;},{&quot;label&quot;:&quot;Bender_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mosunetuzumab — `Mosunetuzumab_Bender2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.609). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has mosunetuzumab, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Bender B et al., Population pharmacokinetics and CD20 bi…, Clinical and translational… (2024)
  ·  DOI: [10.1111/cts.13825](https://doi.org/10.1111/cts.13825)

## Model component
<dbs-pgx drug="mosunetuzumab" model-id="Mosunetuzumab_Bender2024_reference" status="rejected" stale="false" population="adults with relapsed/refractory B-cell non-Hodgkin lymphoma" measured-compound="mosunetuzumab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLbase (L/day) | `Q23` · CLb | 1.08 | L/day | 1.25e-08 | [l] / [d] | 5.6 | llm (0.6) | cts13825-tbl-0002:row1:col1, cts13825-tbl-0002:row1:col2 | — | not captured |
| V1 (L) | `Q63` · V1 | 5.49 | L | 0.00549 | [l] | 2.5 | exact (1.0) | cts13825-tbl-0002:row2:col1, cts13825-tbl-0002:row2:col2 | — | 0.0981 (5.8% RSE) |
| CLss (L/day) | `Q22` · CL | 0.584 | L/day | 6.759259259259259e-09 | [l] / [d] | 2.0 | llm (0.6) | cts13825-tbl-0002:row3:col1, cts13825-tbl-0002:row3:col2 | — | not captured |
| HLtrans (day) | `Q306` · ktr | 16.3 | day | not captured | [d] | 7.1 | llm (0.6) | cts13825-tbl-0002:row4:col1, cts13825-tbl-0002:row4:col2 | — | not captured |
| V2 (L) | `Q64` · V2 | 6.17 | L | 0.00617 | [l] | 3.6 | exact (1.0) | cts13825-tbl-0002:row5:col1, cts13825-tbl-0002:row5:col2 | — | 0.0621 (16.7% RSE) |
| Q (L/day) | `Q30` · Q | 1.46 | L/day | 1.6898148148148148e-08 | [l] / [d] | 3.7 | exact (1.0) | cts13825-tbl-0002:row6:col1, cts13825-tbl-0002:row6:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'HLtrans (day)' → Q306 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'HLss (day) b' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row7:col1'])
- dropped unlinked row (NIL): 'Body weight on CLss (WT_CLss)' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row8:col1', 'cts13825-tbl-0002:row8:col2'])
- dropped unlinked row (NIL): 'Body weight on V1 (WT_V1)' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row9:col1', 'cts13825-tbl-0002:row9:col2'])
- dropped unlinked row (NIL): 'Body weight on V2 (WT_V2)' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row10:col1', 'cts13825-tbl-0002:row10:col2'])
- dropped unlinked row (NIL): 'Albumin on CLbase (ALB_CLbase)' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row11:col1', 'cts13825-tbl-0002:row11:col2'])
- dropped unlinked row (NIL): 'anti‐CD20 drug on CLbase (aCD20_CLbase)' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row12:col1', 'cts13825-tbl-0002:row12:col2'])
- dropped unlinked row (NIL): 'Sex (female) on CLss (Sex_CLss)' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row13:col1', 'cts13825-tbl-0002:row13:col2'])
- dropped unlinked row (NIL): 'Albumin on V1 (ALB_V1)' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row14:col1', 'cts13825-tbl-0002:row14:col2'])
- dropped unlinked row (NIL): 'Sex (female) on V1 (Sex_V1)' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row15:col1', 'cts13825-tbl-0002:row15:col2'])
- dropped unlinked row (NIL): 'Tumor SPD on CLss (SPD_CLss)' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row16:col1', 'cts13825-tbl-0002:row16:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mosunetuzumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'mosunetuzumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell cts13825-tbl-0002:row1:col3 = '[0.962; 1.20]'
- unparsed cell cts13825-tbl-0002:row2:col3 = '[5.221; 5.76]'
- unparsed cell cts13825-tbl-0002:row3:col3 = '[0.561; 0.607]'
- unparsed cell cts13825-tbl-0002:row4:col3 = '[14.026; 18.6]'
- unparsed cell cts13825-tbl-0002:row5:col3 = '[5.729; 6.61]'
- unparsed cell cts13825-tbl-0002:row6:col3 = '[1.354; 1.57]'
- unparsed cell cts13825-tbl-0002:row8:col3 = '[0.436; 0.662]'
- unparsed cell cts13825-tbl-0002:row9:col3 = '[0.319; 0.547]'
- unparsed cell cts13825-tbl-0002:row10:col3 = '[0.508; 0.966]'
- unparsed cell cts13825-tbl-0002:row11:col3 = '[−2.074; −0.946]'
- unparsed cell cts13825-tbl-0002:row12:col3 = '[−0.800; −0.346]'
- unparsed cell cts13825-tbl-0002:row13:col3 = '[−0.175; −0.081]'
- unparsed cell cts13825-tbl-0002:row14:col3 = '[−0.701; −0.261]'
- unparsed cell cts13825-tbl-0002:row15:col3 = '[−0.173; −0.079]'
- unparsed cell cts13825-tbl-0002:row16:col3 = '[0.045; 0.142]'
- unparsed cell cts13825-tbl-0002:row17:col3 = '[0.356; 0.496]'
- unparsed cell cts13825-tbl-0002:row18:col3 = '[0.169; 0.191]'
- unparsed cell cts13825-tbl-0002:row19:col3 = '[0.0722; 0.124]'
- unparsed cell cts13825-tbl-0002:row20:col3 = '[0.0266; 0.0420]'
- unparsed cell cts13825-tbl-0002:row21:col3 = '[−0.133; −0.0459]'
- unparsed cell cts13825-tbl-0002:row22:col3 = '[0.510; 0.968]'
- unparsed cell cts13825-tbl-0002:row23:col3 = '[0.0417; 0.0825]'
- unparsed cell cts13825-tbl-0002:row24:col3 = '[0.258; 0.260]'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.609 (14/23 fields) | 9 |

<details><summary>9 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[clss].covariate_forms` | [] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss:120b` | `parameters[hltrans].parameter_id` | Q306 | Q57 | mismatch |
| `gpt-oss:120b` | `parameters[theta_cl_albumin]` | not captured | -1.51 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_body_weight]` | not captured | 0.549 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q319_body_weight]` | not captured | 0.433 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v1_albumin]` | not captured | -0.481 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | mosunetuzumab | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | mosunetuzumab | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts13825-tbl-0002:row3:col1', 'cts13825-tbl-0002:row3:col2'] |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts13825-tbl-0002:row1:col1', 'cts13825-tbl-0002:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts13825-tbl-0002:row6:col1', 'cts13825-tbl-0002:row6:col2'] |
| C5_dimension_Q306 | fail | [time] | day | not captured | not captured | ['cts13825-tbl-0002:row4:col1', 'cts13825-tbl-0002:row4:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts13825-tbl-0002:row2:col1', 'cts13825-tbl-0002:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts13825-tbl-0002:row5:col1', 'cts13825-tbl-0002:row5:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.584 | not captured | not captured | ['cts13825-tbl-0002:row3:col1', 'cts13825-tbl-0002:row3:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0243 L/h | not captured | not captured | ['cts13825-tbl-0002:row3:col1', 'cts13825-tbl-0002:row3:col2'] |
| C9_phys_window_Q23 | pass | clearance within physiological range | 0.045 L/h | not captured | not captured | ['cts13825-tbl-0002:row1:col1', 'cts13825-tbl-0002:row1:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.49 L | not captured | not captured | ['cts13825-tbl-0002:row2:col1', 'cts13825-tbl-0002:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.17 L | not captured | not captured | ['cts13825-tbl-0002:row5:col1', 'cts13825-tbl-0002:row5:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_mosunetuzumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bender_2024` / `Bender_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 17:11 UTC</sub>
