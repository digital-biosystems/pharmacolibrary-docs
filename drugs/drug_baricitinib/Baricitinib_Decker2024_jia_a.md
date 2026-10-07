<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;baricitinib&quot;,&quot;href&quot;:&quot;drugs/drug_baricitinib/&quot;},{&quot;label&quot;:&quot;Decker_2024 \u00b7 jia_a&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# baricitinib — `Baricitinib_Decker2024_jia_a`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Decker RL et al., A population pharmacokinetic model usin…, CPT: pharmacometrics & syst… (2024)
  ·  DOI: [10.1002/psp4.13131](https://doi.org/10.1002/psp4.13131)

## Model component
<dbs-pgx drug="baricitinib" model-id="Baricitinib_Decker2024_jia_a" status="rejected" stale="false" population="pediatric patients with juvenile idiopathic arthritis" measured-compound="baricitinib" parameterization="apparent" topology="3C"></dbs-pgx>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** CL/F, V/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) c | `Q27` · CL/F | 4.87 | years | not captured | [years] | not captured | llm_confirmed (0.6) | Decker_2024_table_3:row4:col1, Decker_2024_table_3:row4:col2, Decker_2024_table_3:row4:col3, Decker_2024_table_3:row4:col4, Decker_2024_table_3:row4:col5, Decker_2024_table_3:row4:col6 | — | not captured |
| CLr (L/h) | `Q26` · CLR | 3.12 | L/h | 8.666666666666668e-07 | [l] / [h] | not captured | exact (1.0) | Decker_2024_table_3:row5:col1, Decker_2024_table_3:row5:col2, Decker_2024_table_3:row5:col3, Decker_2024_table_3:row5:col4, Decker_2024_table_3:row5:col5, Decker_2024_table_3:row5:col6 | — | not captured |
| CLnr (L/h) | `Q79` · CLNR | 1.68 | L/h | 4.6666666666666666e-07 | [l] / [h] | not captured | exact (1.0) | Decker_2024_table_3:row6:col1, Decker_2024_table_3:row6:col2, Decker_2024_table_3:row6:col3, Decker_2024_table_3:row6:col4, Decker_2024_table_3:row6:col5, Decker_2024_table_3:row6:col6 | — | not captured |
| V/F (L) c | `Q76` · V/F | 27.5 | years | not captured | [years] | not captured | llm_confirmed (0.6) | Decker_2024_table_3:row7:col1, Decker_2024_table_3:row7:col2, Decker_2024_table_3:row7:col3, Decker_2024_table_3:row7:col4, Decker_2024_table_3:row7:col5, Decker_2024_table_3:row7:col6 | — | not captured |
| V1/F (L) | `Q290` · V1/F | 21.7 | L | 0.0217 | [l] | not captured | exact (1.0) | Decker_2024_table_3:row8:col1, Decker_2024_table_3:row8:col2, Decker_2024_table_3:row8:col3, Decker_2024_table_3:row8:col4, Decker_2024_table_3:row8:col5, Decker_2024_table_3:row8:col6 | — | not captured |
| V2/F (L) | `Q82` · V2/F | 4.85 | L | 0.00485 | [l] | not captured | exact (1.0) | Decker_2024_table_3:row9:col1, Decker_2024_table_3:row9:col2, Decker_2024_table_3:row9:col3, Decker_2024_table_3:row9:col4, Decker_2024_table_3:row9:col5, Decker_2024_table_3:row9:col6 | — | not captured |
| t1/2 (h) | `Q57` · t1/2z | 6.39 | h | 23004.0 | [h] | not captured | exact (1.0) | Decker_2024_table_3:row10:col1, Decker_2024_table_3:row10:col2, Decker_2024_table_3:row10:col3, Decker_2024_table_3:row10:col4, Decker_2024_table_3:row10:col5, Decker_2024_table_3:row10:col6 | — | not captured |
| AUCτ,ss (ng*h/mL) | `Q18` · AUCSS | 410 | ng*h/mL | not captured | [[h] · [ng]] / [ml] | not captured | llm_corrected (0.6) | Decker_2024_table_3:row11:col1, Decker_2024_table_3:row11:col4, Decker_2024_table_3:row11:col5, Decker_2024_table_3:row11:col6 | — | not captured |
| C max,ss (ng/mL) | `Q32` · Cmax | 87.4 | ng/mL | not captured | [ng] / [ml] | not captured | llm (0.6) | Decker_2024_table_3:row12:col1, Decker_2024_table_3:row12:col4, Decker_2024_table_3:row12:col5, Decker_2024_table_3:row12:col6 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |
| Q | Q30 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'N' — extend the ontology if this is a real PK parameter (source ['Decker_2024_table_3:row2:col1', 'Decker_2024_table_3:row2:col2', 'Decker_2024_table_3:row2:col3', 'Decker_2024_table_3:row2:col4', 'Decker_2024_table_3:row2:col5', 'Decker_2024_table_3:row2:col6'])
- dropped unlinked row (NIL): 'Dose (mg)' — extend the ontology if this is a real PK parameter (source ['Decker_2024_table_3:row3:col1', 'Decker_2024_table_3:row3:col2', 'Decker_2024_table_3:row3:col3', 'Decker_2024_table_3:row3:col4', 'Decker_2024_table_3:row3:col5', 'Decker_2024_table_3:row3:col6'])
- unit_dimension_mismatch: 'CL/F (L/h) c' → Q27 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'V/F (L) c' → Q76 (unit '[time]' vs ontology '[length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=baricitinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- bound model equation to Q40 (Fab): F = (CLnr/F + CLr/F)*((WTE/74)^0.75)
- bound model equation to Q30 (Q): Q = 2.67*((WTE/74)^0.75)
- Q40 (Fab) is equation-defined: value moved to equation-variable 'F'; equation kept verbatim
- Q30 (Q) is equation-defined: value moved to equation-variable 'Q'; equation kept verbatim
- status held at route_to_review — not promoted
- population split: 'jia a' subgroup of Decker_2024 (paper reports 3 populations: jia a, population mean (%see), ra b)

**Extraction notes:**
- unparsed cell psp413131-tbl-0002:row1:col3 = '0.452 (0.373–0.512)'
- unparsed cell psp413131-tbl-0002:row2:col3 = '0.538 (0.323–0.847)'
- unparsed cell psp413131-tbl-0002:row3:col3 = '3.32 (3.20–3.46)'
- unparsed cell psp413131-tbl-0002:row4:col3 = '6.41 (6.23–6.52)'
- unparsed cell psp413131-tbl-0002:row5:col3 = '92.6 (90.1–94.5)'
- unparsed cell psp413131-tbl-0002:row6:col3 = '2.76 (2.62–2.88)'
- unparsed cell psp413131-tbl-0002:row7:col3 = '25.1 (21.2–30.1)'
- unparsed cell psp413131-tbl-0002:row8:col3 = '0.147 (0.144–0.150)'
- unparsed cell psp413131-tbl-0002:row11:col3 = '0.00589 (0.00349–0.00852)'
- unparsed cell psp413131-tbl-0002:row14:col3 = '0.360 (0.346–0.377)'
- unparsed cell Decker_2024_table_3:row11:col2 = '254 (27) d'
- unparsed cell Decker_2024_table_3:row11:col3 = '500 (57) e'
- unparsed cell Decker_2024_table_3:row11:col7 = '483 (40) f'
- unparsed cell Decker_2024_table_3:row12:col2 = '56.8 (22) d'
- unparsed cell Decker_2024_table_3:row12:col3 = '79.0 (33) e'
- unparsed cell Decker_2024_table_3:row12:col7 = '53.3 (22) f'
- companion parameter table 3 transcribed (71 record(s))
- LLM selected parameter table(s) 2, 3
- captured model equation F = (CLnr/F + CLr/F)*((WTE/74)^0.75)
- captured model equation Q = 2.67*((WTE/74)^0.75)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q18 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Decker_2024_table_3:row11:col1', 'Decker_2024_table_3:row11:col4', 'Decker_2024_table_3:row11:col5', 'Decker_2024_table_3:row11:col6'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Decker_2024_table_3:row5:col1', 'Decker_2024_table_3:row5:col2', 'Decker_2024_table_3:row5:col3', 'Decker_2024_table_3:row5:col4', 'Decker_2024_table_3:row5:col5', 'Decker_2024_table_3:row5:col6'] |
| C5_dimension_Q27 | fail | [time] | years | not captured | not captured | ['Decker_2024_table_3:row4:col1', 'Decker_2024_table_3:row4:col2', 'Decker_2024_table_3:row4:col3', 'Decker_2024_table_3:row4:col4', 'Decker_2024_table_3:row4:col5', 'Decker_2024_table_3:row4:col6'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Decker_2024_table_3:row8:col1', 'Decker_2024_table_3:row8:col2', 'Decker_2024_table_3:row8:col3', 'Decker_2024_table_3:row8:col4', 'Decker_2024_table_3:row8:col5', 'Decker_2024_table_3:row8:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Decker_2024_table_3:row12:col1', 'Decker_2024_table_3:row12:col4', 'Decker_2024_table_3:row12:col5', 'Decker_2024_table_3:row12:col6'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Decker_2024_table_3:row10:col1', 'Decker_2024_table_3:row10:col2', 'Decker_2024_table_3:row10:col3', 'Decker_2024_table_3:row10:col4', 'Decker_2024_table_3:row10:col5', 'Decker_2024_table_3:row10:col6'] |
| C5_dimension_Q76 | fail | [time] | years | not captured | not captured | ['Decker_2024_table_3:row7:col1', 'Decker_2024_table_3:row7:col2', 'Decker_2024_table_3:row7:col3', 'Decker_2024_table_3:row7:col4', 'Decker_2024_table_3:row7:col5', 'Decker_2024_table_3:row7:col6'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Decker_2024_table_3:row6:col1', 'Decker_2024_table_3:row6:col2', 'Decker_2024_table_3:row6:col3', 'Decker_2024_table_3:row6:col4', 'Decker_2024_table_3:row6:col5', 'Decker_2024_table_3:row6:col6'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Decker_2024_table_3:row9:col1', 'Decker_2024_table_3:row9:col2', 'Decker_2024_table_3:row9:col3', 'Decker_2024_table_3:row9:col4', 'Decker_2024_table_3:row9:col5', 'Decker_2024_table_3:row9:col6'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 21.7 L | not captured | not captured | ['Decker_2024_table_3:row8:col1', 'Decker_2024_table_3:row8:col2', 'Decker_2024_table_3:row8:col3', 'Decker_2024_table_3:row8:col4', 'Decker_2024_table_3:row8:col5', 'Decker_2024_table_3:row8:col6'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 4.85 L | not captured | not captured | ['Decker_2024_table_3:row9:col1', 'Decker_2024_table_3:row9:col2', 'Decker_2024_table_3:row9:col3', 'Decker_2024_table_3:row9:col4', 'Decker_2024_table_3:row9:col5', 'Decker_2024_table_3:row9:col6'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_baricitinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Decker_2024` / `Decker_2024::jia_a`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:46 UTC</sub>
