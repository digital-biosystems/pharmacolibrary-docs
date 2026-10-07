<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;apomorphine&quot;,&quot;href&quot;:&quot;drugs/drug_apomorphine/&quot;},{&quot;label&quot;:&quot;Nasser_2024 \u00b7 sublingual&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# apomorphine — `Apomorphine_Nasser2024_sublingual`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Nasser A et al., Model-based comparison of subcutaneous…, Journal of pharmacokinetics… (2024)
  ·  DOI: [10.1007/s10928-024-09914-x](https://doi.org/10.1007/s10928-024-09914-x)

## Model component
<dbs-pgx drug="apomorphine" model-id="Apomorphine_Nasser2024_sublingual" status="rejected" stale="false" population="hypothetical subjects" measured-compound="apomorphine" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| 4 | `Q374` · MW | 30.53 | mg | not captured | [mg] | not captured | llm (0.6) | Tab4:row5:col3, Tab4:row9:col3, Tab4:row13:col3, Tab4:row21:col3 | — | not captured |
| AUEC0-90 | `Q19` · AUCt | 20 | mg | not captured | [mg] | not captured | llm (0.6) | Tab4:row10:col3, Tab4:row10:col4 | — | not captured |
| Time to maximal response, min | `Q56` · tmax | 20 | min | 1200.0 | [min] | not captured | llm_corrected (0.6) | Tab4:row18:col3, Tab4:row18:col4 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 80.7 | L/h | 2.241666666666667e-05 | [l] / [h] | not captured | exact (1.0) | Nasser_2024_table_1:row0:col2 | — | not captured |
| V/F (L) | `Q76` · V/F | 438 | L | 0.438 | [l] | not captured | exact (1.0) | Nasser_2024_table_1:row1:col2 | — | not captured |
| Ka (h−1) | `Q49` · kabs | 6.58 | h−1 | 0.0018277777777777778 | [1] / [h] | not captured | exact (1.0) | Nasser_2024_table_1:row2:col2 | — | not captured |
| K12 (h−1) | `Q301` · k12 | 0.613 | h−1 | 0.00017027777777777777 | [1] / [h] | not captured | exact (1.0) | Nasser_2024_table_1:row3:col2 | — | not captured |
| K21 (h−1) | `Q302` · k21 | 0.0048 | h−1 | 1.3333333333333332e-06 | [1] / [h] | not captured | exact (1.0) | Nasser_2024_table_1:row4:col2 | — | not captured |
| F (%) | `Q40` · Fab | 0.206 | not captured | not captured | not captured | not captured | exact (1.0) | Nasser_2024_table_1:row5:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Time to response, min' — extend the ontology if this is a real PK parameter (source ['Tab4:row2:col3', 'Tab4:row2:col4'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['Tab4:row3:col3', 'Tab4:row7:col3', 'Tab4:row11:col3', 'Tab4:row19:col3'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['Tab4:row4:col3', 'Tab4:row8:col3', 'Tab4:row12:col3', 'Tab4:row20:col3'])
- unit_dimension_mismatch: '4' → Q374 (unit '[mass]' vs ontology '[mass] / [substance]') — route to review
- dropped unlinked row (NIL): 'Duration of response, min' — extend the ontology if this is a real PK parameter (source ['Tab4:row6:col3', 'Tab4:row6:col4'])
- unit_dimension_mismatch: 'AUEC0-90' → Q19 (unit '[mass]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped PD-category row 'Maximal response' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab4:row14:col3'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=apomorphine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'sublingual' subgroup of Nasser_2024 (paper reports 2 populations: subcutaneous, sublingual)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab4:row14:col2 = '− 6.05 ± 3.13'
- unparsed cell Tab4:row14:col4 = '− 7.07 ± 3.47'
- unparsed cell Tab4:row15:col1 = '− 9.12 ± 4.64'
- unparsed cell Tab4:row15:col3 = '− 9.28 ± 4.85'
- unparsed cell Tab4:row16:col1 = '− 14.46 ± 4.97'
- unparsed cell Tab4:row16:col3 = '− 12.50 ± 5.31'
- unparsed cell Tab4:row17:col1 = '− 17.48 ± 4.71'
- unparsed cell Tab4:row17:col3 = '− 14.83 ± 5.46'
- companion parameter table 1 transcribed (10 record(s))
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | fail | [mass] | mg | not captured | not captured | ['Tab4:row10:col3', 'Tab4:row10:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Nasser_2024_table_1:row0:col2'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Nasser_2024_table_1:row3:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Nasser_2024_table_1:row4:col2'] |
| C5_dimension_Q374 | fail | [mass] | mg | not captured | not captured | ['Tab4:row5:col3', 'Tab4:row9:col3', 'Tab4:row13:col3', 'Tab4:row21:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Nasser_2024_table_1:row2:col2'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Tab4:row18:col3', 'Tab4:row18:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Nasser_2024_table_1:row1:col2'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.206 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 80.7 L/h | not captured | not captured | ['Nasser_2024_table_1:row0:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 438 L | not captured | not captured | ['Nasser_2024_table_1:row1:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_apomorphine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Nasser_2024` / `Nasser_2024::sublingual`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:09 UTC</sub>
