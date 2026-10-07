<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;pamiparib&quot;,&quot;href&quot;:&quot;drugs/drug_pamiparib/&quot;},{&quot;label&quot;:&quot;Wickramasinghe_2025 \u00b7 total_pamiparib&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pamiparib — `Pamiparib_Wickramasinghe2025_total_pamiparib`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Wickramasinghe C et al., Population Pharmacokinetic Modeling of…, Pharmaceutics (2025)
  ·  DOI: [10.3390/pharmaceutics17040524](https://doi.org/10.3390/pharmaceutics17040524)

## Model component
<dbs-pgx drug="pamiparib" model-id="Pamiparib_Wickramasinghe2025_total_pamiparib" status="rejected" stale="false" population="glioblastoma patients" measured-compound="pamiparib" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, V/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ1 (Ka) (h−1) | `Q49` · kabs | 1.71 | h−1 | 0.000475 | [1] / [h] | not captured | llm_confirmed (0.6) | pharmaceutics-17-00524-t003:row2:col1, pharmaceutics-17-00524-t003:row2:col2 | — | 410 (None% RSE) |
| θ2 (V/F) (L) | `Q82` · V2/F | 17 | L | 0.017 | [l] | not captured | llm_corrected (0.6) | pharmaceutics-17-00524-t003:row3:col1, pharmaceutics-17-00524-t003:row3:col2 | — | not captured |
| θ3 (CL/F) (L/h) | `Q27` · CL/F | 7.76 | L/h | 2.1555555555555553e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | pharmaceutics-17-00524-t003:row4:col1, pharmaceutics-17-00524-t003:row4:col2 | — | 50 (None% RSE) |
| θ4 (Fu) | `Q46` · fu | 0.041 | Fu | not captured | [fu] | not captured | llm (0.6) | pharmaceutics-17-00524-t003:row5:col1, pharmaceutics-17-00524-t003:row5:col2, Wickramasinghe_2025_table_2:row9:col1, Wickramasinghe_2025_table_2:row9:col2 | — | 12 (None% RSE) |
| β1 (PCC) | `Q86` · C0 | 0.0089 | PCC | not captured | [pcc] | not captured | llm (0.6) | pharmaceutics-17-00524-t003:row6:col1, pharmaceutics-17-00524-t003:row6:col2 | — | not captured |
| V/F_SD | `Q66` · Vmax | 0.35 | not captured | not captured | not captured | not captured | llm (0.6) | pharmaceutics-17-00524-t003:row9:col1, pharmaceutics-17-00524-t003:row9:col2 | — | not captured |
| TV_V/F (L) | `Q76` · V/F | 44 | L | 0.044 | [l] | not captured | tv_prefix (0.95) | Wickramasinghe_2025_table_2:row3:col1, Wickramasinghe_2025_table_2:row3:col2 | — | 41 (None% RSE) |
| theta_q319_age | `Q900` · theta_q319_age | -0.016 | not captured | not captured | not captured | not captured | not captured (not captured) | Wickramasinghe_2025_table_2:row11:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'β1 (PCC)' → Q86 (unit '[length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'β2 (Age)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-17-00524-t003:row7:col1', 'pharmaceutics-17-00524-t003:row7:col2'])
- dropped duplicate Q49 ('Ka_SD', value '1.6') — already have one for this compound
- dropped duplicate Q27 ('CL/F_SD', value '0.46') — already have one for this compound
- dropped unlinked row (NIL): 'Fu_SD' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-17-00524-t003:row11:col1', 'pharmaceutics-17-00524-t003:row11:col2'])
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['Wickramasinghe_2025_table_2:row1:col1', 'Wickramasinghe_2025_table_2:row1:col2'])
- dropped duplicate Q49 ('TV_KA (h−1)', value '1.58') — already have one for this compound
- dropped duplicate Q27 ('TV_CL/F (L/h)', value '2.59') — already have one for this compound
- dropped duplicate Q46 ('TV_Fu', value '0.041') — already have one for this compound
- unit_dimension_mismatch: 'θ1 (Ka)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('θ1 (Ka)', value '1.58') — already have one for this compound
- unit_dimension_unknown: 'V/F' (V/F)
- dropped duplicate Q76 ('θ2 (V/F)', value '15') — already have one for this compound
- unit_dimension_unknown: 'CL/F' (CL/F)
- dropped duplicate Q27 ('θ3 (CL/F)', value '6.76') — already have one for this compound
- dropped unlinked row (NIL): 'β1 (PCC on V/F)' — extend the ontology if this is a real PK parameter (source ['Wickramasinghe_2025_table_2:row10:col2'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'V/F_SD' — the LLM proposed '1', whose dimension does not fit Q66; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pamiparib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- status held at route_to_review — not promoted
- population split: 'total pamiparib' subgroup of Wickramasinghe_2025 (paper reports 2 populations: total pamiparib, unbound pamiparib)

**Extraction notes:**
- unparsed cell pharmaceutics-17-00524-t003:row2:col3 = '(0.64, 4.15)'
- unparsed cell pharmaceutics-17-00524-t003:row2:col6 = '(0.67, 4.07)'
- unparsed cell pharmaceutics-17-00524-t003:row3:col3 = '(8, 30)'
- unparsed cell pharmaceutics-17-00524-t003:row3:col6 = '(219, 787)'
- unparsed cell pharmaceutics-17-00524-t003:row4:col3 = '(3.6, 15.9)'
- unparsed cell pharmaceutics-17-00524-t003:row4:col6 = '(83, 454)'
- unparsed cell pharmaceutics-17-00524-t003:row5:col3 = '(0.039, 0.044)'
- unparsed cell pharmaceutics-17-00524-t003:row5:col6 = '(0.039, 0.044)'
- unparsed cell pharmaceutics-17-00524-t003:row6:col3 = '(0.0035, 0.015)'
- unparsed cell pharmaceutics-17-00524-t003:row6:col6 = '(0.0027, 0.014)'
- unparsed cell pharmaceutics-17-00524-t003:row7:col3 = '(−0.03, −0.0054)'
- unparsed cell pharmaceutics-17-00524-t003:row7:col6 = '(−0.032, −0.0053)'
- unparsed cell pharmaceutics-17-00524-t003:row8:col3 = '(1.0, 2.3)'
- unparsed cell pharmaceutics-17-00524-t003:row8:col6 = '(1.1, 2.34)'
- unparsed cell pharmaceutics-17-00524-t003:row9:col3 = '(0.16, 0.5)'
- unparsed cell pharmaceutics-17-00524-t003:row9:col6 = '(0.16, 0.5)'
- unparsed cell pharmaceutics-17-00524-t003:row10:col3 = '(0.35, 0.56)'
- unparsed cell pharmaceutics-17-00524-t003:row10:col6 = '(0.37, 0.37)'
- unparsed cell pharmaceutics-17-00524-t003:row11:col3 = '(0.06, 0.16)'
- unparsed cell pharmaceutics-17-00524-t003:row11:col6 = '(0.059, 0.15)'
- companion parameter table 2 transcribed (56 record(s), model stage 'final')
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 3 from the LLM selection — perturbations of a model, not a model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-17-00524-t003:row4:col1', 'pharmaceutics-17-00524-t003:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-17-00524-t003:row2:col1', 'pharmaceutics-17-00524-t003:row2:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wickramasinghe_2025_table_2:row3:col1', 'Wickramasinghe_2025_table_2:row3:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-17-00524-t003:row3:col1', 'pharmaceutics-17-00524-t003:row3:col2'] |
| C5_dimension_Q86 | fail | [length] ** 3 | PCC | not captured | not captured | ['pharmaceutics-17-00524-t003:row6:col1', 'pharmaceutics-17-00524-t003:row6:col2'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-17-00524-t003:row9:col1', 'pharmaceutics-17-00524-t003:row9:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 7.76 L/h | not captured | not captured | ['pharmaceutics-17-00524-t003:row4:col1', 'pharmaceutics-17-00524-t003:row4:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 44 L | not captured | not captured | ['Wickramasinghe_2025_table_2:row3:col1', 'Wickramasinghe_2025_table_2:row3:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 17 L | not captured | not captured | ['pharmaceutics-17-00524-t003:row3:col1', 'pharmaceutics-17-00524-t003:row3:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_pamiparib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wickramasinghe_2025` / `Wickramasinghe_2025::total_pamiparib`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:35 UTC</sub>
