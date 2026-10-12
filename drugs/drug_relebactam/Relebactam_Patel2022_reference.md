<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;Relebactam&quot;,&quot;href&quot;:&quot;drugs/drug_relebactam/&quot;},{&quot;label&quot;:&quot;Patel_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Relebactam_Fratoni2022_reference&quot;,&quot;label&quot;:&quot;Fratoni_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_relebactam/Relebactam_Fratoni2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Relebactam — `Relebactam_Patel2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.556). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The peripheral compartment for relebactam is orphaned because the intercompartmental clearance linking it to the central compartment is unassigned.**

The model specifies a peripheral compartment volume (V2) of 6.15 L for relebactam, yet the link parameter connecting this compartment to the central compartment is marked as none. The record lists an intercompartmental clearance value of 10.9 L/h, but this value is not assigned to any structural link. Consequently, the model structure contains an unreachable compartment, which is the reason for the record's rejection. Extracted — relebactam: CL 7.23 L/h, V1 11.2 L, V2 6.15 L, Q 10.9 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has imipenem/cilastatin/relebactam, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `imipenem/cilastatin/relebactam`, measured `relebactam`.

## Citation
Patel M et al., Population pharmacokinetic/pharmacodyna…, Clinical and translational… (2022)
  ·  DOI: [10.1111/cts.13158](https://doi.org/10.1111/cts.13158)

<div class="pk-model-meta" hidden drug="Relebactam" model-id="Relebactam_Patel2022_reference" status="rejected" stale="false" population="adults with hospital-acquired/ventilator-associated bacterial pneumonia" measured-compound="relebactam" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 7.23 | L/h | 2.0083333333333333e-06 | [l] / [h] | not captured | exact (1.0) | cts13158-tbl-0003:row3:col5, cts13158-tbl-0003:row3:col7 | — | not captured |
| V1 (L) | `Q63` · V1 | 11.2 | L | 0.0112 | [l] | not captured | exact (1.0) | cts13158-tbl-0003:row4:col5, cts13158-tbl-0003:row4:col7 | — | not captured |
| V2 (L) | `Q64` · V2 | 6.15 | L | 0.00615 | [l] | not captured | exact (1.0) | cts13158-tbl-0003:row5:col5, cts13158-tbl-0003:row5:col7 | — | not captured |
| Q (L/h) | `Q30` · Q | 10.9 | L/h | 3.0277777777777776e-06 | [l] / [h] | not captured | exact (1.0) | cts13158-tbl-0003:row6:col5, cts13158-tbl-0003:row6:col7 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'CrCl (power)' — extend the ontology if this is a real PK parameter (source ['cts13158-tbl-0003:row8:col5', 'cts13158-tbl-0003:row8:col7'])
- dropped unlinked row (NIL): 'Pneumonia f' — extend the ontology if this is a real PK parameter (source ['cts13158-tbl-0003:row10:col5', 'cts13158-tbl-0003:row10:col7', 'cts13158-tbl-0003:row13:col5', 'cts13158-tbl-0003:row13:col7'])
- dropped unlinked row (NIL): 'WT (power)' — extend the ontology if this is a real PK parameter (source ['cts13158-tbl-0003:row12:col5', 'cts13158-tbl-0003:row12:col7'])
- dropped unlinked row (NIL): 'Ventilation g' — extend the ontology if this is a real PK parameter (source ['cts13158-tbl-0003:row14:col5', 'cts13158-tbl-0003:row14:col7'])
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['cts13158-tbl-0003:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1' from footnote/prose loose number None (source ['cts13158-tbl-0003:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2' from footnote/prose loose number None (source ['cts13158-tbl-0003:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Q' from footnote/prose loose number 10.93 (source ['cts13158-tbl-0003:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=relebactam
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell cts13158-tbl-0003:row3:col2 = '12.3 to 13.1'
- unparsed cell cts13158-tbl-0003:row3:col4 = '12.3 to 13.1'
- unparsed cell cts13158-tbl-0003:row3:col6 = '7.00 to 7.47'
- unparsed cell cts13158-tbl-0003:row3:col8 = '7.03 to 7.45'
- unparsed cell cts13158-tbl-0003:row4:col2 = '10.5 to 12.3'
- unparsed cell cts13158-tbl-0003:row4:col4 = '10.3 to 12.7'
- unparsed cell cts13158-tbl-0003:row4:col6 = '10.6 to 11.8'
- unparsed cell cts13158-tbl-0003:row4:col8 = '10.6 to 11.9'
- unparsed cell cts13158-tbl-0003:row5:col2 = '6.90 to 8.68'
- unparsed cell cts13158-tbl-0003:row5:col4 = '6.58 to 8.74'
- unparsed cell cts13158-tbl-0003:row5:col6 = '5.68 to 6.62'
- unparsed cell cts13158-tbl-0003:row5:col8 = '5.66 to 6.69'
- unparsed cell cts13158-tbl-0003:row6:col2 = '18.0 to 28.1'
- unparsed cell cts13158-tbl-0003:row6:col4 = '16.2 to 29.8'
- unparsed cell cts13158-tbl-0003:row6:col6 = '9.22 to 12.6'
- unparsed cell cts13158-tbl-0003:row6:col8 = '8.82 to 13.1'
- unparsed cell cts13158-tbl-0003:row8:col2 = '0.44 to 0.52'
- unparsed cell cts13158-tbl-0003:row8:col4 = '0.44 to 0.52'
- unparsed cell cts13158-tbl-0003:row8:col6 = '0.68 to 0.81'
- unparsed cell cts13158-tbl-0003:row8:col8 = '0.68 to 0.81'
- unparsed cell cts13158-tbl-0003:row9:col2 = '0.19 to 0.39'
- unparsed cell cts13158-tbl-0003:row9:col4 = '0.13 to 0.43'
- unparsed cell cts13158-tbl-0003:row10:col2 = '–0.44 to –0.32'
- unparsed cell cts13158-tbl-0003:row10:col4 = '–0.44 to–0.32'
- unparsed cell cts13158-tbl-0003:row10:col6 = '–0.48 to–0.39'
- unparsed cell cts13158-tbl-0003:row10:col8 = '–0.47 to–0.39'
- unparsed cell cts13158-tbl-0003:row12:col2 = '0.83 to 1.23'
- unparsed cell cts13158-tbl-0003:row12:col4 = '0.75 to 1.31'
- unparsed cell cts13158-tbl-0003:row12:col6 = '0.51 to 0.79'
- unparsed cell cts13158-tbl-0003:row12:col8 = '0.49 to 0.83'
- unparsed cell cts13158-tbl-0003:row13:col2 = '–0.52 to–0.27'
- unparsed cell cts13158-tbl-0003:row13:col4 = '–0.50 to–0.25'
- unparsed cell cts13158-tbl-0003:row13:col6 = '–0.38 to–0.19'
- unparsed cell cts13158-tbl-0003:row13:col8 = '–0.38 to–0.18'
- unparsed cell cts13158-tbl-0003:row14:col2 = '0.02 to 0.45'
- unparsed cell cts13158-tbl-0003:row14:col4 = '0.02 to 0.48'
- unparsed cell cts13158-tbl-0003:row14:col6 = '0.13 to 0.58'
- unparsed cell cts13158-tbl-0003:row14:col8 = '0.15 to 0.58'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8-27b` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.556 (5/9 fields) | 4 |

<details><summary>4 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['relebactam', 'none', 'none']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[theta_q319_wt_power]` | not captured | 0.65 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | imipenem/cilastatin/relebactam | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | relebactam | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts13158-tbl-0003:row3:col5', 'cts13158-tbl-0003:row3:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts13158-tbl-0003:row6:col5', 'cts13158-tbl-0003:row6:col7'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts13158-tbl-0003:row4:col5', 'cts13158-tbl-0003:row4:col7'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts13158-tbl-0003:row5:col5', 'cts13158-tbl-0003:row5:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.23 | not captured | not captured | ['cts13158-tbl-0003:row3:col5', 'cts13158-tbl-0003:row3:col7'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.23 L/h | not captured | not captured | ['cts13158-tbl-0003:row3:col5', 'cts13158-tbl-0003:row3:col7'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 11.2 L | not captured | not captured | ['cts13158-tbl-0003:row4:col5', 'cts13158-tbl-0003:row4:col7'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.15 L | not captured | not captured | ['cts13158-tbl-0003:row5:col5', 'cts13158-tbl-0003:row5:col7'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_relebactam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Patel_2022` / `Patel_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:44 UTC</sub>
