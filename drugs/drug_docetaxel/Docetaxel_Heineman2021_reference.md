<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;docetaxel&quot;,&quot;href&quot;:&quot;drugs/drug_docetaxel/&quot;},{&quot;label&quot;:&quot;Heineman_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Docetaxel_Clarke1999_reference&quot;,&quot;label&quot;:&quot;Clarke_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_docetaxel/Docetaxel_Clarke1999_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Docetaxel_LaunayIliadis1995_reference&quot;,&quot;label&quot;:&quot;Launay-Iliadis_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_docetaxel/Docetaxel_LaunayIliadis1995_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# docetaxel — `Docetaxel_Heineman2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Heineman T et al., Safety and pharmacokinetics of docetaxe…, Clinical and translational… (2021)
  ·  DOI: [10.1111/cts.13041](https://doi.org/10.1111/cts.13041)

## Model component
<dbs-pgx drug="docetaxel" model-id="Docetaxel_Heineman2021_reference" status="rejected" stale="false" population="adults with non-small cell lung cancer" measured-compound="docetaxel" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 12 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| T max (h) | `Q56` · tmax | 1.12 | h | 4032.0000000000005 | [h] | not captured | space_fold (0.95) | cts13041-tbl-0002:row0:col2, cts13041-tbl-0002:row0:col3 | — | not captured |
| C max (μg/L) | `Q32` · Cmax | 2500 | μg/L | not captured | [µg] / [l] | not captured | space_fold (0.95) | cts13041-tbl-0002:row1:col2, cts13041-tbl-0002:row1:col3 | — | not captured |
| AUC0–∞ (μg•h/L) | `Q17` · AUC∞ | 3820 | μg•h/L | not captured | [[h] · [µg]] / [l] | not captured | exact (1.0) | cts13041-tbl-0002:row2:col1, cts13041-tbl-0002:row2:col2, cts13041-tbl-0002:row2:col3 | — | not captured |
| CL (L/h) | `Q22` · CL | 36.7 | L/h | 1.0194444444444446e-05 | [l] / [h] | not captured | exact (1.0) | cts13041-tbl-0002:row3:col2, cts13041-tbl-0002:row3:col3 | — | not captured |
| V c (L) | `Q63` · V1 | 8.12 | L | 0.008119999999999999 | [l] | not captured | space_fold (0.95) | cts13041-tbl-0002:row4:col2, cts13041-tbl-0002:row4:col3 | — | not captured |
| k 12 (h–1) | `Q301` · k12 | 1.07 | h–1 | 0.0002972222222222222 | [1] / [h] | not captured | space_fold (0.95) | cts13041-tbl-0002:row5:col2 | — | not captured |
| k 21 (h–1) | `Q302` · k21 | 1.67 | h–1 | 0.00046388888888888885 | [1] / [h] | not captured | space_fold (0.95) | cts13041-tbl-0002:row6:col2, cts13041-tbl-0002:row6:col3 | — | not captured |
| k 13 (h–1) | `Q303` · k13 | 1.32 | h–1 | 0.00036666666666666667 | [1] / [h] | not captured | space_fold (0.95) | cts13041-tbl-0002:row7:col2, cts13041-tbl-0002:row7:col3 | — | not captured |
| k 31 (h–1) | `Q304` · k31 | 0.08 | h–1 | 2.2222222222222223e-05 | [1] / [h] | not captured | space_fold (0.95) | cts13041-tbl-0002:row8:col2, cts13041-tbl-0002:row8:col3 | — | not captured |
| V p1 (L) | `Q64` · V2 | 5.43 | L | 0.00543 | [l] | not captured | space_fold (0.95) | cts13041-tbl-0002:row9:col2, cts13041-tbl-0002:row9:col3 | — | not captured |
| V p2 (L) | `Q77` · V3 | 132 | L | 0.132 | [l] | not captured | space_fold (0.95) | cts13041-tbl-0002:row10:col2, cts13041-tbl-0002:row10:col3 | — | not captured |
| V ss (L) | `Q65` · Vss | 145 | L | 0.145 | [l] | not captured | space_fold (0.95) | cts13041-tbl-0002:row11:col2, cts13041-tbl-0002:row11:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'μg•h/L' (AUC∞)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=docetaxel
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- transposed table cts13041-tbl-0002: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell cts13041-tbl-0002:row5:col1 = 'k 12 (h–1)'
- unparsed cell cts13041-tbl-0002:row6:col1 = 'k 21 (h–1)'
- unparsed cell cts13041-tbl-0002:row7:col1 = 'k 13 (h–1)'
- unparsed cell cts13041-tbl-0002:row8:col1 = 'k 31 (h–1)'
- unparsed cell cts13041-tbl-0002:row9:col1 = 'V p1 (L)'
- unparsed cell cts13041-tbl-0002:row10:col1 = 'V p2 (L)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts13041-tbl-0002:row3:col2', 'cts13041-tbl-0002:row3:col3'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['cts13041-tbl-0002:row5:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['cts13041-tbl-0002:row6:col2', 'cts13041-tbl-0002:row6:col3'] |
| C5_dimension_Q303 | pass | 1 / [time] | not captured | not captured | not captured | ['cts13041-tbl-0002:row7:col2', 'cts13041-tbl-0002:row7:col3'] |
| C5_dimension_Q304 | pass | 1 / [time] | not captured | not captured | not captured | ['cts13041-tbl-0002:row8:col2', 'cts13041-tbl-0002:row8:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['cts13041-tbl-0002:row1:col2', 'cts13041-tbl-0002:row1:col3'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['cts13041-tbl-0002:row0:col2', 'cts13041-tbl-0002:row0:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts13041-tbl-0002:row4:col2', 'cts13041-tbl-0002:row4:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts13041-tbl-0002:row9:col2', 'cts13041-tbl-0002:row9:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts13041-tbl-0002:row11:col2', 'cts13041-tbl-0002:row11:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts13041-tbl-0002:row10:col2', 'cts13041-tbl-0002:row10:col3'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | μg•h/L | not captured | not captured | ['cts13041-tbl-0002:row2:col1', 'cts13041-tbl-0002:row2:col2', 'cts13041-tbl-0002:row2:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 36.7 | not captured | not captured | ['cts13041-tbl-0002:row3:col2', 'cts13041-tbl-0002:row3:col3'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 36.7 L/h | not captured | not captured | ['cts13041-tbl-0002:row3:col2', 'cts13041-tbl-0002:row3:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 8.12 L | not captured | not captured | ['cts13041-tbl-0002:row4:col2', 'cts13041-tbl-0002:row4:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.43 L | not captured | not captured | ['cts13041-tbl-0002:row9:col2', 'cts13041-tbl-0002:row9:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 145 L | not captured | not captured | ['cts13041-tbl-0002:row11:col2', 'cts13041-tbl-0002:row11:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_docetaxel/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Heineman_2021` / `Heineman_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 17:51 UTC</sub>
