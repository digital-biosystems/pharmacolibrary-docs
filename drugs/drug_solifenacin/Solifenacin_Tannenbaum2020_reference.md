<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;solifenacin&quot;,&quot;href&quot;:&quot;drugs/drug_solifenacin/&quot;},{&quot;label&quot;:&quot;Tannenbaum_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# solifenacin — `Solifenacin_Tannenbaum2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Tannenbaum S et al., Pharmacokinetics of solifenacin in pedi…, Pharmacology research & per… (2020)
  ·  DOI: [10.1002/prp2.684](https://doi.org/10.1002/prp2.684)

## Model component
<dbs-pgx drug="solifenacin" model-id="Solifenacin_Tannenbaum2020_reference" status="rejected" stale="false" population="pediatric patients with overactive bladder or neurogenic detrusor overactivity" measured-compound="solifenacin" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 12 extracted.

**Parameterization:** CL/F, Q/F, V/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L h–1) | `Q27` · CL/F | 8.81 | L h–1 | 2.4472222222222225e-06 | [l] / [h] | not captured | exact (1.0) | prp2684-tbl-0003:row2:col1, prp2684-tbl-0003:row2:col2, Tannenbaum_2020_table_4:row5:col1, Tannenbaum_2020_table_4:row5:col2, Tannenbaum_2020_table_4:row5:col3 | — | not captured |
| V2/F (L) | `Q82` · V2/F | 162 | L | 0.162 | [l] | not captured | exact (1.0) | prp2684-tbl-0003:row5:col1, prp2684-tbl-0003:row5:col2 | — | not captured |
| ka (h–1) | `Q49` · kabs | 0.742 | h–1 | 0.00020611111111111112 | [1] / [h] | not captured | exact (1.0) | prp2684-tbl-0003:row8:col1, prp2684-tbl-0003:row8:col2 | — | not captured |
| ALAG (h) | `Q83` · tlag | 0.834 | h | 3002.4 | [h] | not captured | exact (1.0) | prp2684-tbl-0003:row9:col1, prp2684-tbl-0003:row9:col2 | — | not captured |
| Q/F (L h–1) | `Q69` · Q/F | 98.1 | L h–1 | 2.7249999999999998e-05 | [l] / [h] | not captured | exact (1.0) | prp2684-tbl-0003:row10:col1, prp2684-tbl-0003:row10:col2 | — | not captured |
| V3/F (L) | `Q78` · V3/F | 174 | L | 0.17400000000000002 | [l] | not captured | exact (1.0) | prp2684-tbl-0003:row11:col1, prp2684-tbl-0003:row11:col2 | — | not captured |
| F1 | `Q40` · Fab | 1.12 | A | not captured | [a] | not captured | exact (1.0) | prp2684-tbl-0003:row13:col1, prp2684-tbl-0003:row13:col2 | — | not captured |
| AUC/D (ng h mL–1 mg–1) | `Q189` · AUC/dose | 96.70 | ng h mL–1 mg–1 | not captured | [[h] · [ng]] / [[mg] · [ml]] | not captured | exact (1.0) | Tannenbaum_2020_table_4:row1:col1, Tannenbaum_2020_table_4:row1:col2, Tannenbaum_2020_table_4:row1:col3 | — | not captured |
| Cmax/D (ng mL–1 mg–1) | `Q174` · Cmax/dose | 5.744 | ng mL–1 mg–1 | not captured | [ng] / [[mg] · [ml]] | not captured | llm (0.6) | Tannenbaum_2020_table_4:row2:col1, Tannenbaum_2020_table_4:row2:col2, Tannenbaum_2020_table_4:row2:col3 | — | not captured |
| t1/2 (h) | `Q57` · t1/2z | 26.75 | h | 96300.0 | [h] | not captured | exact (1.0) | Tannenbaum_2020_table_4:row4:col1, Tannenbaum_2020_table_4:row4:col2, Tannenbaum_2020_table_4:row4:col3 | — | not captured |
| Vz/F (L) | `Q76` · V/F | 300.9 | L | 0.3009 | [l] | not captured | exact (1.0) | Tannenbaum_2020_table_4:row6:col1, Tannenbaum_2020_table_4:row6:col2, Tannenbaum_2020_table_4:row6:col3 | — | not captured |
| Ctrough/D (ng mL–1 mg–1) | `Q37` · Ctrough | 3.184 | ng mL–1 mg–1 | not captured | [ng] / [[mg] · [ml]] | not captured | llm (0.6) | Tannenbaum_2020_table_4:row7:col1, Tannenbaum_2020_table_4:row7:col2, Tannenbaum_2020_table_4:row7:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'AGP on CL/F b' — extend the ontology if this is a real PK parameter (source ['prp2684-tbl-0003:row3:col1', 'prp2684-tbl-0003:row3:col2'])
- dropped unlinked row (NIL): 'FFM on CL/F b' — extend the ontology if this is a real PK parameter (source ['prp2684-tbl-0003:row4:col1', 'prp2684-tbl-0003:row4:col2'])
- dropped unlinked row (NIL): 'AGP on V2/F b' — extend the ontology if this is a real PK parameter (source ['prp2684-tbl-0003:row6:col1', 'prp2684-tbl-0003:row6:col2'])
- dropped unlinked row (NIL): 'FFM on V2/F b' — extend the ontology if this is a real PK parameter (source ['prp2684-tbl-0003:row7:col1', 'prp2684-tbl-0003:row7:col2'])
- unit_dimension_mismatch: 'FFM on V3/F b' → Q78 (unit '[time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q78 ('FFM on V3/F b', value '1.07') — already have one for this compound
- routed 'Parameter, geometric mean (CV% a )' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- unit_dimension_unknown: 'ng h mL–1 mg–1' (AUC/dose)
- unit_dimension_mismatch: 'Cmax/D (ng mL–1 mg–1)' → Q174 (unit '1 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Ctrough/D (ng mL–1 mg–1)' → Q37 (unit '1 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- implicit units: 'AUC/D (ng h mL–1 mg–1)' — the LLM proposed 'ng h mL-1 mg-1', whose dimension does not fit Q189; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=solifenacin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- companion parameter table 4 transcribed (21 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 38.0 | 36.829 | 0.9692 | 0.25 | reported t½β |
| C5_dimension_Q174 | fail | 1 / [length] ** 3 | ng mL–1 mg–1 | not captured | not captured | ['Tannenbaum_2020_table_4:row2:col1', 'Tannenbaum_2020_table_4:row2:col2', 'Tannenbaum_2020_table_4:row2:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['prp2684-tbl-0003:row2:col1', 'prp2684-tbl-0003:row2:col2', 'Tannenbaum_2020_table_4:row5:col1', 'Tannenbaum_2020_table_4:row5:col2', 'Tannenbaum_2020_table_4:row5:col3'] |
| C5_dimension_Q37 | fail | 1 / [length] ** 3 | ng mL–1 mg–1 | not captured | not captured | ['Tannenbaum_2020_table_4:row7:col1', 'Tannenbaum_2020_table_4:row7:col2', 'Tannenbaum_2020_table_4:row7:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['prp2684-tbl-0003:row8:col1', 'prp2684-tbl-0003:row8:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Tannenbaum_2020_table_4:row4:col1', 'Tannenbaum_2020_table_4:row4:col2', 'Tannenbaum_2020_table_4:row4:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['prp2684-tbl-0003:row10:col1', 'prp2684-tbl-0003:row10:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tannenbaum_2020_table_4:row6:col1', 'Tannenbaum_2020_table_4:row6:col2', 'Tannenbaum_2020_table_4:row6:col3'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp2684-tbl-0003:row11:col1', 'prp2684-tbl-0003:row11:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp2684-tbl-0003:row5:col1', 'prp2684-tbl-0003:row5:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['prp2684-tbl-0003:row9:col1', 'prp2684-tbl-0003:row9:col2'] |
| C5_unit_missing_Q189 | fail | [mass] * [time] / [length] ** 3 | ng h mL–1 mg–1 | not captured | not captured | ['Tannenbaum_2020_table_4:row1:col1', 'Tannenbaum_2020_table_4:row1:col2', 'Tannenbaum_2020_table_4:row1:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 8.81 L/h | not captured | not captured | ['prp2684-tbl-0003:row2:col1', 'prp2684-tbl-0003:row2:col2', 'Tannenbaum_2020_table_4:row5:col1', 'Tannenbaum_2020_table_4:row5:col2', 'Tannenbaum_2020_table_4:row5:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 301 L | not captured | not captured | ['Tannenbaum_2020_table_4:row6:col1', 'Tannenbaum_2020_table_4:row6:col2', 'Tannenbaum_2020_table_4:row6:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 162 L | not captured | not captured | ['prp2684-tbl-0003:row5:col1', 'prp2684-tbl-0003:row5:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_solifenacin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tannenbaum_2020` / `Tannenbaum_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:09 UTC</sub>
