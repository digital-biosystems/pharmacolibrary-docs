<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;tolcapone&quot;,&quot;href&quot;:&quot;drugs/drug_tolcapone/&quot;},{&quot;label&quot;:&quot;Jorga_2000 \u00b7 non_fluctuator_model&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tolcapone — `Tolcapone_Jorga2000_non_fluctuator_model`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Jorga K et al., Population pharmacokinetics of tolcapon…, British journal of clinical… (2000)
  ·  DOI: [10.1046/j.1365-2125.2000.00113.x](https://doi.org/10.1046/j.1365-2125.2000.00113.x)

## Model component
<dbs-pgx drug="tolcapone" model-id="Tolcapone_Jorga2000_non_fluctuator_model" status="rejected" stale="false" population="parkinsonian patients" measured-compound="tolcapone" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 10 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL ( l h -1 ) | `Q22` · CL | 4.8 | l h -1 | 1.3333333333333332e-06 | [l] / [h] | not captured | exact (1.0) | tab_1:row4:col1, tab_1:row4:col3, tab_1:row4:col4 | — | not captured |
| V c ( l) | `Q63` · V1 | 16 | l | 0.016 | [l] | not captured | space_fold (0.95) | tab_1:row5:col1, tab_1:row5:col3, tab_1:row5:col4 | — | not captured |
| ka (h | `Q49` · kabs | 0.6 | h | not captured | [h] | not captured | llm_confirmed (0.6) | tab_1:row7:col3, tab_1:row7:col4, tab_1:row7:col5 | — | not captured |
| t lag (h) | `Q83` · tlag | 0.4 | h | 1440.0 | [h] | not captured | space_fold (0.95) | tab_1:row8:col3, tab_1:row8:col4 | — | not captured |
| h Food(F) | `Q87` · Frel | 0.88 | F | not captured | [f] | not captured | llm (0.6) | tab_1:row14:col1, tab_1:row14:col3, tab_1:row14:col4 | — | not captured |
| h Protein(CL) | `Q25` · CLH | -0.81 | CL | not captured | [cl] | not captured | llm (0.6) | tab_1:row16:col1 | — | not captured |
| h CLCr(CL) | `Q26` · CLR | 1.19 | CL | not captured | [cl] | not captured | llm (0.6) | tab_1:row19:col3, tab_1:row19:col4 | — | not captured |
| h Dose50mg (V) | `Q61` · V | 0.55 | V | not captured | [v] | not captured | llm (0.6) | tab_1:row20:col1 | — | not captured |
| h Albumin (Vp) | `Q57` · t1/2z | 2.82 | Vp | not captured | [vp] | not captured | llm (0.6) | tab_1:row22:col1 | — | not captured |
| e (mult) | `Q38` · E | 0.22 | mult | not captured | [µl] · [m] · [t] | not captured | exact (1.0) | tab_1:row27:col1, tab_1:row27:col3, tab_1:row27:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iov: 'IOV (V p )' routed out of structural estimates ('Inter-occasion variability s 2')
- table section iov: 'IOV (CL)' routed out of structural estimates ('Inter-occasion variability s 2')
- unit_dimension_mismatch: 'ka (h' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'g(CL)' → Q22 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('g(CL)', value '0.02') — already have one for this compound
- unit_dimension_unknown: 'V c' (V1)
- dropped duplicate Q63 ('g(V c )', value '0.64') — already have one for this compound
- unit_dimension_unknown: 'F' (Frel)
- unit_dimension_mismatch: 'h LBW(CL)' → Q22 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('h LBW(CL)', value '0.73') — already have one for this compound
- unit_dimension_mismatch: 'h Protein(CL)' → Q25 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_unknown: 'Vc' (V1)
- dropped duplicate Q63 ('h Protein(Vc)', value '-7.34') — already have one for this compound
- dropped duplicate Q63 ('h LBW(Vc)', value '0.65') — already have one for this compound
- unit_dimension_mismatch: 'h CLCr(CL)' → Q26 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_unknown: 'V' (V)
- dropped duplicate Q61 ('h Dose400mg (V)', value '1.40') — already have one for this compound
- unit_dimension_unknown: 'Vp' (t1/2z)
- unit_dimension_unknown: 'mult' (E)
- unit_dimension_unknown: 'add' (E)
- dropped duplicate Q38 ('e (add)', value '0.52') — already have one for this compound
- dropped unlinked row (NIL): '200 mg' — extend the ontology if this is a real PK parameter (source ['Jorga_2000_table_3:row1:col4'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL ( l h -1 )); Q63 (V c ( l)); Q61 (h Dose50mg (V))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tolcapone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'non-fluctuator model' subgroup of Jorga_2000 (paper reports 2 populations: fluctuator model, non-fluctuator model)

**Extraction notes:**
- unparsed cell tab_1:row7:col1 = '-1 )'
- unparsed cell tab_1:row10:col1 = '0.08 (29%)'
- unparsed cell tab_1:row10:col3 = '0.06 (25%)'
- unparsed cell tab_1:row11:col1 = '0.42 (72%)'
- unparsed cell tab_1:row11:col3 = '1.34 (168%)'
- unparsed cell tab_1:row12:col1 = '0.28 (57%)'
- unparsed cell Jorga_2000_table_3:row0:col2 = '-1 h)'
- unparsed cell Jorga_2000_table_3:row1:col2 = '-1 h)'
- unparsed cell Jorga_2000_table_3:row1:col3 = '2.9±2.2 26.5±7.8'
- unparsed cell Jorga_2000_table_3:row2:col2 = '5.5±4.1 55.8±16.7'
- unparsed cell Jorga_2000_table_3:row2:col3 = '8.0±4.2 54.3±19.8'
- companion parameter table 3 transcribed (4 record(s))
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q25 | fail | not captured | -0.81 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col3', 'tab_1:row4:col4'] |
| C5_dimension_Q25 | fail | [length] ** 3 | CL | not captured | not captured | ['tab_1:row16:col1'] |
| C5_dimension_Q26 | fail | [length] ** 3 | CL | not captured | not captured | ['tab_1:row19:col3', 'tab_1:row19:col4'] |
| C5_dimension_Q49 | fail | [time] | h | not captured | not captured | ['tab_1:row7:col3', 'tab_1:row7:col4', 'tab_1:row7:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row5:col1', 'tab_1:row5:col3', 'tab_1:row5:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['tab_1:row8:col3', 'tab_1:row8:col4'] |
| C5_unit_missing_Q57 | fail | [time] | Vp | not captured | not captured | ['tab_1:row22:col1'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | V | not captured | not captured | ['tab_1:row20:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.8 | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col3', 'tab_1:row4:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.8 L/h | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col3', 'tab_1:row4:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 16 L | not captured | not captured | ['tab_1:row5:col1', 'tab_1:row5:col3', 'tab_1:row5:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tolcapone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jorga_2000` / `Jorga_2000::non_fluctuator_model`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 14:31 UTC</sub>
