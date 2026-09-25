<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;linagliptin&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/&quot;},{&quot;label&quot;:&quot;Tadayasu_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Linagliptin_Retlich2015_reference&quot;,&quot;label&quot;:&quot;Retlich_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/Linagliptin_Retlich2015_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Linagliptin_GraefeMody2012_reference&quot;,&quot;label&quot;:&quot;Graefe-Mody_2012_reference&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/Linagliptin_GraefeMody2012_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Linagliptin_Tadayasu2013_reference&quot;,&quot;label&quot;:&quot;Tadayasu_2013_reference&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/Linagliptin_Tadayasu2013_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# linagliptin — `Linagliptin_Tadayasu2013_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** C5 dimension mismatch on a structural parameter; C8 unreachable/orphan compartment or unlinked metabolite.
**How to address:** not a curation fix — the pipeline is the limit here (scholar: a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value).
<sub>owner: **scholar**</sub>

## Citation
Tadayasu Y; Sarashina A; Tsuda Y; Tatami S; Friedrich C; Retlich S; et al. et al. (2013). Journal of pharmacy & pharmaceutical sciences : a publication of the Canadian Society for Pharmaceutical Sciences, Societe canadienne des sciences pharmaceutiques 16
  ·  DOI: [10.18433/j3s304](https://doi.org/10.18433/j3s304)

## Model component
<dbs-pgx drug="linagliptin" model-id="Linagliptin_Tadayasu2013_reference" status="rejected" stale="false" population="Japanese patients with type 2 diabetes mellitus" measured-compound="linagliptin" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, Q3/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F1 | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | tab_2:row2:col1 | — | 46.7 (None% RSE) |
| KA [h -1 ] | `Q49` · kabs | 1.63 | not captured | not captured | not captured | 22.2 | llm_confirmed (0.6) | tab_2:row3:col1, tab_2:row3:col2 | — | 73.6 (None% RSE) |
| CL/F1 [L/h] | `Q27` · CL/F | 121 | L/h | 3.361111111111111e-05 | [l] / [h] | 15.5 | llm (0.6) | tab_2:row4:col1, tab_2:row4:col2 | — | not captured |
| V2/F1 [L] | `Q82` · V2/F | 633 | L | 0.633 | [l] | 12.7 | llm (0.6) | tab_2:row5:col1, tab_2:row5:col2 | — | not captured |
| Q3/F1 [L/h] | `Q309` · Q3/F | 73.0 | L/h | 2.0277777777777776e-05 | [l] / [h] | 68.8 | llm (0.6) | tab_2:row7:col1, tab_2:row7:col2 | — | not captured |
| V3/F1 [L] | `Q78` · V3/F | 683 | L | 0.683 | [l] | 14.0 | llm (0.6) | tab_2:row9:col1, tab_2:row9:col2 | — | not captured |
| BMAX [nmol/L] | `Q332` · Bmax | 6.07 | nmol/L | not captured | [nM] / [l] | 5.17 | llm_confirmed (0.6) | tab_2:row11:col1, tab_2:row11:col2 | — | 14.2 (None% RSE) |
| KD [nmol/L] | `Q331` · KD | 0.108 | nmol/L | not captured | [nM] / [l] | 28.5 | llm_confirmed (0.6) | tab_2:row13:col1, tab_2:row13:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'KD [nmol/L]' → Q331 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'AMAX2/F1[nmol]' — extend the ontology if this is a real PK parameter (source ['tab_2:row14:col1', 'tab_2:row14:col2'])
- dropped PD-category row 'EMAX [%]' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row16:col1', 'tab_2:row16:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=linagliptin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_2:row19:col2 = '30.8 a)'
- unparsed cell tab_2:row21:col2 = '32.5 a)'
- unparsed cell tab_2:row23:col2 = '25.7 a)'
- unparsed cell tab_2:row24:col2 = '30.5 a)'
- unparsed cell tab_2:row27:col2 = '9.96 b)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row4:col1', 'tab_2:row4:col2'] |
| C5_dimension_Q309 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row7:col1', 'tab_2:row7:col2'] |
| C5_dimension_Q331 | fail | [substance] / [length] ** 3 | nmol/L | not captured | not captured | ['tab_2:row13:col1', 'tab_2:row13:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row9:col1', 'tab_2:row9:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row5:col1', 'tab_2:row5:col2'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | not captured | not captured | not captured | ['tab_2:row3:col1', 'tab_2:row3:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 121 L/h | not captured | not captured | ['tab_2:row4:col1', 'tab_2:row4:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 633 L | not captured | not captured | ['tab_2:row5:col1', 'tab_2:row5:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_linagliptin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tadayasu_2013` / `Tadayasu_2013::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-22 08:16 UTC</sub>
