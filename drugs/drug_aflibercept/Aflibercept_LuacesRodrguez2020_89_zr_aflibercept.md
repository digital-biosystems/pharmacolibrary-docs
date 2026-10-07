<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;aflibercept&quot;,&quot;href&quot;:&quot;drugs/drug_aflibercept/&quot;},{&quot;label&quot;:&quot;Luaces-Rodr\u00edguez_2020 \u00b7 89_zr_aflibercept&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aflibercept_Thai2013_reference&quot;,&quot;label&quot;:&quot;Thai_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aflibercept/Aflibercept_Thai2013_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aflibercept — `Aflibercept_LuacesRodrguez2020_89_zr_aflibercept`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Luaces-Rodríguez A et al., PET study of ocular and blood pharmacok…, European journal of pharmac… (2020)
  ·  DOI: [10.1016/j.ejpb.2020.06.024](https://doi.org/10.1016/j.ejpb.2020.06.024)

## Model component
<dbs-pgx drug="aflibercept" model-id="Aflibercept_LuacesRodrguez2020_89_zr_aflibercept" status="rejected" stale="false" population="rats" measured-compound="aflibercept" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 12 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| K a (day -1 ) | `Q49` · kabs | 5.40 | day -1 | 6.25e-05 | [1] / [d] | not captured | space_fold (0.95) | tab_1:row1:col2 | — | not captured |
| k (day -1 ) | `Q47` · kel | 0.22 | day -1 | 2.546296296296296e-06 | [1] / [d] | not captured | exact (1.0) | tab_1:row2:col2 | — | not captured |
| t 1/2 (day) | `Q57` · t1/2z | 3.18 | day | 274752.0 | [d] | not captured | space_fold (0.95) | tab_1:row3:col2 | — | not captured |
| T max (day) | `Q56` · tmax | 0.76 | day | 65664.0 | [d] | not captured | space_fold (0.95) | tab_1:row4:col2 | — | not captured |
| C max (Bq•µL -1 ) | `Q32` · Cmax | 25.40 | Bq•µL -1 | not captured | [bq] / [µl] | not captured | space_fold (0.95) | tab_1:row5:col2 | — | not captured |
| AUC 0 ∞ (Bq•µL -1 •day) | `Q17` · AUC∞ | 135.51 | Bq•µL -1 •day | not captured | [[d] · [bq]] / [µl] | not captured | llm_corrected (0.6) | tab_1:row6:col2 | — | not captured |
| V d (mL) | `Q61` · V | 83.31 | mL | 8.331e-05 | [ml] | not captured | space_fold (0.95) | tab_1:row7:col2 | — | not captured |
| CL (mL•day -1 ) | `Q22` · CL | 16.04 | mL/day | 1.8564814814814814e-10 | L/h | not captured | exact (1.0) | tab_1:row8:col2 | — | not captured |
| α (day -1 ) | `Q67` · λ1 | 8.22 | day -1 | not captured | [1] / [d] | not captured | exact (1.0) | Luaces-Rodríguez_2020_table_1:row0:col3 | — | not captured |
| β (day -1 ) | `Q47` · kel | 0.56 | day -1 | 6.481481481481482e-06 | [1] / [d] | not captured | exact (1.0) | Luaces-Rodríguez_2020_table_1:row1:col3 | — | not captured |
| t 1/2α (day) | `Q59` · t1/2α | 0.08 | day | 6912.0 | [d] | not captured | space_fold (0.95) | Luaces-Rodríguez_2020_table_1:row2:col3 | — | not captured |
| t 1/2β (day) | `Q60` · t1/2β | 1.29 | day | 111456.0 | [d] | not captured | space_fold (0.95) | Luaces-Rodríguez_2020_table_1:row3:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'Bq•µL -1' (Cmax)
- unit_dimension_unknown: 'Bq•µL -1 •day' (AUC∞)
- unit_dimension_unknown: 'mL•day -1' (CL)
- unit_dimension_mismatch: 'α (day -1 )' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- NIL: refused to back-fill base 't1/2z' from footnote/prose loose number 3.18 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 7.08 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Cmax' from footnote/prose loose number 25.4 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 18.24 (source ['tab_1:footnote', 'tab_1:footnote', 'tab_1:footnote', 'tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 23.82 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 39.92 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 19.42 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- covariate category for AUC from footnote/prose kept as documentation only (['tab_1:footnote'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 135.51 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- implicit units: 'C max (Bq•µL -1 )' — the LLM proposed 'Bq/µL', whose dimension does not fit Q32; left unset
- implicit units: 'AUC 0 ∞ (Bq•µL -1 •day)' — the LLM proposed 'Bq/µL/day', whose dimension does not fit Q17; left unset
- implicit units: 'CL (mL•day -1 )' → mL/day (from the paper text: "The parameter list provided in the prompt explicitly includes the unit in the label: 'CL (mL•day -1 ) = 16.04'. Addition")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (V d (mL)); Q22 (CL (mL•day -1 ))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=aflibercept
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: '89 zr-aflibercept' subgroup of Luaces-Rodríguez_2020 (paper reports 3 populations: 89 zr-aflibercept, 89 zr-bevacizumab 89 zr-aflibercept, 89 zr-dfo *)
- molar mass: none found for 'aflibercept' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Luaces-Rodríguez_2020_table_1:row1:col1 = '0.22 ± 0.13 *'
- unparsed cell Luaces-Rodríguez_2020_table_1:row3:col1 = '3.23 ± 0.28 *'
- companion parameter table 1 transcribed (12 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 3.3 | 3.6 | 1.0909 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row8:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row2:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Luaces-Rodríguez_2020_table_1:row1:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row1:col2'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['tab_1:row4:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tab_1:row3:col2'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Luaces-Rodríguez_2020_table_1:row2:col3'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Luaces-Rodríguez_2020_table_1:row3:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row7:col2'] |
| C5_dimension_Q67 | fail | 1 / [time] | day -1 | not captured | not captured | ['Luaces-Rodríguez_2020_table_1:row0:col3'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | Bq•µL -1 •day | not captured | not captured | ['tab_1:row6:col2'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 | Bq•µL -1 | not captured | not captured | ['tab_1:row5:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 16.04 | not captured | not captured | ['tab_1:row8:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | fail | clearance within physiological range | 0.000668 L/h | not captured | not captured | ['tab_1:row8:col2'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0833 L | not captured | not captured | ['tab_1:row7:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_aflibercept/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Luaces-Rodríguez_2020` / `Luaces-Rodríguez_2020::89_zr_aflibercept`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:50 UTC</sub>
