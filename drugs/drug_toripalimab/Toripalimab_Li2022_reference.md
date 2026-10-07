<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;toripalimab&quot;,&quot;href&quot;:&quot;drugs/drug_toripalimab/&quot;},{&quot;label&quot;:&quot;Li_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# toripalimab — `Toripalimab_Li2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022)
  ·  DOI: [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818)

## Model component
<dbs-pgx drug="toripalimab" model-id="Toripalimab_Li2022_reference" status="rejected" stale="false" population="patients with cancer" measured-compound="toripalimab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLTV (mL/h) | `Q22` · CL | 14.8 | mL/h | 4.111111111111111e-09 | [ml] / [h] | 2 | llm (0.6) | T1:row4:col1, T1:row4:col2, T1:row4:col5 | — | 31 (5% RSE) |
| CLADA | `Q900` · equation variable | 0.192 | not captured | not captured | not captured | 24 | llm (0.6) | T1:row5:col1, T1:row5:col2, T1:row5:col5 | — | not captured |
| CLCRCL | `Q26` · CLR | 0.229 | not captured | not captured | not captured | 17 | llm (0.6) | T1:row10:col1, T1:row10:col2, T1:row10:col5 | — | not captured |
| V1 (mL) | `Q63` · V1 | 3707 | mL | 0.003707 | [ml] | 3 | exact (1.0) | T1:row11:col1, T1:row11:col2, T1:row11:col5 | — | 27 (15% RSE) |
| V2TV (mL) | `Q64` · V2 | 866 | mL | 0.0008659999999999999 | [ml] | 16 | llm (0.6) | T1:row16:col1, T1:row16:col2, T1:row16:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional error' routed out of structural estimates ('Residual Error')
- dropped PD-category row 'EmaxTV' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T1:row1:col1', 'T1:row1:col2', 'T1:row1:col5'])
- dropped unlinked row (NIL): 'T50 (h)' — extend the ontology if this is a real PK parameter (source ['T1:row2:col1', 'T1:row2:col2', 'T1:row2:col5'])
- dropped PD-category row 'Gamma' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T1:row3:col1', 'T1:row3:col2', 'T1:row3:col5'])
- dropped unlinked row (NIL): 'CLLDH' — extend the ontology if this is a real PK parameter (source ['T1:row6:col1', 'T1:row6:col2', 'T1:row6:col5'])
- dropped unlinked row (NIL): 'CLFemale' — extend the ontology if this is a real PK parameter (source ['T1:row7:col1', 'T1:row7:col2', 'T1:row7:col5'])
- dropped unlinked row (NIL): 'CLAlbumin' — extend the ontology if this is a real PK parameter (source ['T1:row8:col1', 'T1:row8:col2', 'T1:row8:col5'])
- dropped unlinked row (NIL): 'CLWeight' — extend the ontology if this is a real PK parameter (source ['T1:row9:col1', 'T1:row9:col2', 'T1:row9:col5'])
- dropped duplicate Q63 ('V1White Race', value '-0.23') — already have one for this compound
- dropped duplicate Q900 ('V1Other Race', value '-0.33') — already have one for this compound
- dropped duplicate Q63 ('V1Weight', value '0.5') — already have one for this compound
- dropped duplicate Q22 ('QTV (mL/h)', value '30') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=toripalimab
- molar mass: none found for 'toripalimab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell T1:row1:col3 = '(−0.54, −0.35)'
- unparsed cell T1:row1:col6 = '(−0.54, −0.35)'
- unparsed cell T1:row2:col3 = '(1,051, 2,104)'
- unparsed cell T1:row2:col6 = '(1,237, 3,000)'
- unparsed cell T1:row3:col3 = '(0.97, 1.68)'
- unparsed cell T1:row3:col6 = '(0.98, 1.72)'
- unparsed cell T1:row4:col3 = '(14.2, 15.6)'
- unparsed cell T1:row4:col6 = '(14, 15.6)'
- unparsed cell T1:row5:col3 = '(0.102, 0.280)'
- unparsed cell T1:row5:col6 = '(0.109, 0.29)'
- unparsed cell T1:row6:col3 = '(0.12, 0.20)'
- unparsed cell T1:row6:col6 = '(0.12, 0.20)'
- unparsed cell T1:row7:col3 = '(−0.23, −0.15)'
- unparsed cell T1:row7:col6 = '(−0.2, −0.15)'
- unparsed cell T1:row8:col3 = '(−0.87, −0.49)'
- unparsed cell T1:row8:col6 = '(−0.89, −0.50)'
- unparsed cell T1:row9:col3 = '(−.026, −0.22)'
- unparsed cell T1:row9:col6 = '(−0.27, 0.23)'
- unparsed cell T1:row10:col3 = '(0.15, 0.30)'
- unparsed cell T1:row10:col6 = '(0.14,0.30)'
- unparsed cell T1:row11:col3 = '(3,511, 3,899)'
- unparsed cell T1:row11:col6 = '(3541,3868)'
- unparsed cell T1:row12:col3 = '(−0.29, −0.17)'
- unparsed cell T1:row12:col6 = '(−0.29, −0.17)'
- unparsed cell T1:row13:col3 = '(−0.39, −0.26)'
- unparsed cell T1:row13:col6 = '(−0.38, −0.25)'
- unparsed cell T1:row14:col3 = '(0.31, 0.66)'
- unparsed cell T1:row14:col6 = '(−0.32, −0.66)'
- unparsed cell T1:row15:col3 = '(−16.05, 89.01)'
- unparsed cell T1:row15:col6 = '(11.2, 85.4)'
- unparsed cell T1:row16:col3 = '(549, 1,042)'
- unparsed cell T1:row16:col6 = '(586, 1,158)'
- unparsed cell T1:row18:col3 = '(0.080, 0.22)'
- unparsed cell T1:row18:col5 = '15.50%'
- unparsed cell T1:row18:col6 = '(0.10, 0.28)'
- unparsed cell T1:row19:col3 = '(0.075, 0.111)'
- unparsed cell T1:row19:col5 = '9.50%'
- unparsed cell T1:row19:col6 = '(0.79, 0.115)'
- unparsed cell T1:row20:col3 = '(0.031, 0.118)'
- unparsed cell T1:row20:col5 = '6.70%'
- unparsed cell T1:row20:col6 = '(0.44, 0.116)'
- unparsed cell T1:row21:col3 = '(0.018, 0.047)'
- unparsed cell T1:row21:col5 = '3.20%'
- unparsed cell T1:row21:col6 = '(0.20, 0.047)'
- unparsed cell T1:row23:col3 = '(0.0308, 0.0423)'
- unparsed cell T1:row23:col6 = '(-0.54, -0.35)'
- companion parameter table 2 transcribed (0 record(s))
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row4:col1', 'T1:row4:col2', 'T1:row4:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T1:row11:col1', 'T1:row11:col2', 'T1:row11:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T1:row16:col1', 'T1:row16:col2', 'T1:row16:col5'] |
| C5_unit_missing_Q26 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row10:col1', 'T1:row10:col2', 'T1:row10:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 14.8 | not captured | not captured | ['T1:row4:col1', 'T1:row4:col2', 'T1:row4:col5'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0148 L/h | not captured | not captured | ['T1:row4:col1', 'T1:row4:col2', 'T1:row4:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.71 L | not captured | not captured | ['T1:row11:col1', 'T1:row11:col2', 'T1:row11:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.866 L | not captured | not captured | ['T1:row16:col1', 'T1:row16:col2', 'T1:row16:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_toripalimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Li_2022` / `Li_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:18 UTC</sub>
