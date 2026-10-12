<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01L&quot;,&quot;href&quot;:&quot;atc/S01L.md&quot;},{&quot;label&quot;:&quot;ranibizumab&quot;,&quot;href&quot;:&quot;drugs/drug_ranibizumab/&quot;},{&quot;label&quot;:&quot;Kim_2020 \u00b7 rbz_0_3_mg_0_03_ml&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ranibizumab_Crass2025_reference&quot;,&quot;label&quot;:&quot;Crass_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ranibizumab/Ranibizumab_Crass2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ranibizumab_Diack2024v2_reference&quot;,&quot;label&quot;:&quot;Diack_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ranibizumab/Ranibizumab_Diack2024v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ranibizumab_Fidler2020_estimated_value_rse_interval&quot;,&quot;label&quot;:&quot;Fidler_2020_estimated_value_rse_interval&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ranibizumab/Ranibizumab_Fidler2020_estimated_value_rse_interval.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ranibizumab — `Ranibizumab_Kim2020_rbz_0_3_mg_0_03_ml`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.917). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**Clearance and volume of distribution are physiologically implausible for ranibizumab, and the absorption rate constant unit could not be standardized.**

The apparent clearance is 0.087 mL/h and the apparent volume of distribution is 7.01 mL, both orders of magnitude too small for a large biologic in rabbits. Additionally, the absorption rate constant of 0.0528 days−1 could not be converted to SI units, preventing standard pharmacokinetic validation of the model. Extracted — ranibizumab: t1/2z 55.6 h, MRT 171 h, Cmax 23.1 µg/mL, tmax 1 h, AUC 3.43e+03 h × µg/mL, V/F 7.01 mL, CL/F 0.087 mL/h, kabs 0.0528 days−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of ka: this record has 0.0528, the second reading none. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Kim HM et al., Intraocular Pharmacokinetics of 10-fold…, Translational vision scienc… (2020)
  ·  DOI: [10.1167/tvst.9.4.7](https://doi.org/10.1167/tvst.9.4.7)

<div class="pk-model-meta" hidden drug="ranibizumab" model-id="Ranibizumab_Kim2020_rbz_0_3_mg_0_03_ml" status="rejected" stale="false" population="rabbits" measured-compound="ranibizumab" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t 1/2 (h) | `Q57` · t1/2z | 55.58 | h | 200088.0 | [h] | not captured | space_fold (0.95) | tbl2:row0:col1, tbl2:row0:col3, tbl2:row0:col6, tbl2:row0:col9, tbl2:row0:col12 | — | not captured |
| MRT (h) | `Q53` · MRT | 171.04 | h | 615744.0 | [h] | not captured | exact (1.0) | tbl2:row1:col3, tbl2:row1:col6, tbl2:row1:col9, tbl2:row1:col12 | — | not captured |
| Cmax (µg/mL) | `Q32` · Cmax | 23.08 | µg/mL | not captured | [µg] / [ml] | not captured | exact (1.0) | tbl2:row2:col3, tbl2:row2:col6, tbl2:row2:col9 | — | not captured |
| Tmax (h) | `Q56` · tmax | 1 | h | 3600.0 | [h] | not captured | exact (1.0) | tbl2:row3:col3, tbl2:row3:col6, tbl2:row3:col9, tbl2:row3:col12 | — | not captured |
| AUC (h × µg/mL) | `Q88` · AUC | 3431.81 | h × µg/mL | not captured | [[h] · [µg]] / [ml] | not captured | exact (1.0) | tbl2:row4:col3, tbl2:row4:col6, tbl2:row4:col9 | — | not captured |
| V/F (mL) | `Q76` · V/F | 7.01 | mL | 7.01e-06 | [ml] | not captured | exact (1.0) | tbl2:row5:col3, tbl2:row5:col6, tbl2:row5:col9 | — | not captured |
| CL/F (mL/h) | `Q27` · CL/F | 0.087 | mL/h | 2.4166666666666664e-11 | [ml] / [h] | not captured | exact (1.0) | tbl2:row6:col3, tbl2:row6:col6, tbl2:row6:col9 | — | not captured |
| KA | `Q49` · kabs | 0.0528 | days−1 | 6.111111111111111e-07 | 1/h | not captured | review_gapfill (0.7) | Crass_2025:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'h × µg/mL' (AUC)
- implicit units: 'AUC (h × µg/mL)' — the LLM proposed 'h × µg/mL', whose dimension does not fit Q88; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ranibizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'rbz 0.3 mg/0.03 ml' subgroup of Kim_2020 (paper reports 2 populations: 10×rbz 3.0 mg/0.03 ml, rbz 0.3 mg/0.03 ml)
- molar mass: none found for 'ranibizumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Crass_2025's review values (primary lacked it)

**Extraction notes:**
- transposed table tbl2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell tbl2:row2:col12 = '7.35 × 10−3'
- unparsed cell tbl2:row2:col13 = '22.07 × 10−3'
- unparsed cell tbl2:row4:col12 = '1644.41 × 10−3'
- unparsed cell tbl2:row4:col13 = '6885.24 × 10−3'
- unparsed cell tbl2:row5:col12 = '21.85 × 103'
- unparsed cell tbl2:row5:col13 = '103.73 × 103'
- unparsed cell tbl2:row6:col12 = '0.164 × 103'
- unparsed cell tbl2:row6:col13 = '0.401 × 103'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8-27b` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.917 (11/12 fields) | 1 |

<details><summary>1 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka]` | 0.0528 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl2:row6:col3', 'tbl2:row6:col6', 'tbl2:row6:col9'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tbl2:row2:col3', 'tbl2:row2:col6', 'tbl2:row2:col9'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Crass_2025:review'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['tbl2:row1:col3', 'tbl2:row1:col6', 'tbl2:row1:col9', 'tbl2:row1:col12'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['tbl2:row3:col3', 'tbl2:row3:col6', 'tbl2:row3:col9', 'tbl2:row3:col12'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tbl2:row0:col1', 'tbl2:row0:col3', 'tbl2:row0:col6', 'tbl2:row0:col9', 'tbl2:row0:col12'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl2:row5:col3', 'tbl2:row5:col6', 'tbl2:row5:col9'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | h × µg/mL | not captured | not captured | ['tbl2:row4:col3', 'tbl2:row4:col6', 'tbl2:row4:col9'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | fail | clearance within physiological range | 8.7e-05 L/h | not captured | not captured | ['tbl2:row6:col3', 'tbl2:row6:col6', 'tbl2:row6:col9'] |
| C9_phys_window_Q76 | fail | volume within physiological range | 0.00701 L | not captured | not captured | ['tbl2:row5:col3', 'tbl2:row5:col6', 'tbl2:row5:col9'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ranibizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kim_2020` / `Kim_2020::rbz_0_3_mg_0_03_ml`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:21 UTC</sub>
