<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;camrelizumab&quot;,&quot;href&quot;:&quot;drugs/drug_camrelizumab/&quot;},{&quot;label&quot;:&quot;Wang_2021 \u00b7 base&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# camrelizumab — `Camrelizumab_Wang2021_base`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Camrelizumab was rejected for an unspecified structural-parameter dimension mismatch; Vmax is reported as 2.86 mg/day, but the findings do not identify it as the affected parameter.**

The findings report a dimension mismatch for a structural parameter but do not name the parameter, so the affected value cannot be determined from this record. They also state that one reported unit could not be converted to SI, leaving a parameter without an SI value; the unit and parameter are not identified. Extracted — camrelizumab: CL 0.242 L/day, Vmax 2.86 mg/day, Km 1.28 mg/L, V1 3.08 L, Q 0.385 L/day, V2 2.88 L, Cmax 47.3 mg/L, Cmin 26.1 mg/L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of c max,ss: this record has 47.26, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Wang CY et al., Population pharmacokinetics of the anti…, Acta pharmacologica Sinica (2021)
  ·  DOI: [10.1038/s41401-020-00550-y](https://doi.org/10.1038/s41401-020-00550-y)

## Model component
<dbs-pgx drug="camrelizumab" model-id="Camrelizumab_Wang2021_base" status="rejected" stale="false" population="patients with melanoma, advanced solid tumors, or relapsed/refractory classical Hodgkin lymphoma" measured-compound="camrelizumab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL linear (L/day) | `Q22` · CL | 0.242 | L/day | 2.800925925925926e-09 | [l] / [d] | not captured | llm_confirmed (0.6) | tab_2:row3:col1 | — | 57.0 (17.3% RSE) |
| V m (mg/day) | `Q66` · Vmax | 2.86 | mg/day | not captured | [mg] / [d] | not captured | special_case (0.95) | tab_2:row5:col1 | — | 48.3 (17.5% RSE) |
| K m (mg/L) | `Q1` · Km | 1.28 | mg/L | not captured | [mg] / [l] | not captured | space_fold (0.95) | tab_2:row6:col1 | — | not captured |
| V 1 (L) | `Q63` · V1 | 3.08 | L | 0.0030800000000000003 | [l] | not captured | space_fold (0.95) | tab_2:row7:col1 | — | 40.2 (13.3% RSE) |
| Q (L/day) | `Q30` · Q | 0.385 | L/day | 4.456018518518519e-09 | [l] / [d] | not captured | exact (1.0) | tab_2:row8:col1 | — | not captured |
| V 2 (L) | `Q64` · V2 | 2.88 | L | 0.0028799999999999997 | [l] | not captured | space_fold (0.95) | tab_2:row10:col1 | — | not captured |
| C max,ss (mg/L) | `Q32` · Cmax | 47.26 | mg/L | not captured | [mg] / [l] | not captured | llm (0.6) | Wang_2021_table_4:row0:col3 | — | not captured |
| C min,ss (mg/L) | `Q36` · Cmin | 26.13 | mg/L | not captured | [mg] / [l] | not captured | llm (0.6) | Wang_2021_table_4:row1:col3, Wang_2021_table_4:row1:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL linear (%)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'V m (%)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'V 1 (%)' routed out of structural estimates ('Between-subject variability')
- table section residual_error: 'Proportional error (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error (mg/L)' routed out of structural estimates ('Residual variability')
- unit_dimension_mismatch: 'V m (mg/day)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=camrelizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- model-stage split: 'base model' is the base model of Wang_2021 (paper reports 3 stages: base model, final model, median 2.5%-97.5%); same population, different model-building step
- molar mass: none found for 'camrelizumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell tab_2:row3:col5 = '0.23 (0.20-0.26)'
- unparsed cell tab_2:row4:col5 = '-1.93 (-2.94 to -0.89)'
- unparsed cell tab_2:row5:col5 = '3.00 (2.26-3.71)'
- unparsed cell tab_2:row6:col5 = '1.40 (0.91-2.76)'
- unparsed cell tab_2:row7:col5 = '3.08 (2.77-3.33)'
- unparsed cell tab_2:row8:col5 = '0.41 (0.34-0.51)'
- unparsed cell tab_2:row9:col5 = '1.18 (0.31-2.28)'
- unparsed cell tab_2:row10:col5 = '2.91 (2.35-3.35)'
- unparsed cell tab_2:row12:col5 = '50.2 (32.7-68.9)'
- unparsed cell tab_2:row13:col5 = '47.8 (29.4-70.9)'
- unparsed cell tab_2:row14:col5 = '39.0 (17.0-70.68)'
- unparsed cell tab_2:row16:col5 = '28.9 (23.8-33.9)'
- unparsed cell tab_2:row17:col5 = '0.0823 (0.0293-0.112)'
- unparsed cell Wang_2021_table_4:row0:col2 = '39.27-195.41 96.40'
- unparsed cell Wang_2021_table_4:row2:col1 = '12.81-113.87 45.48'
- companion parameter table 4 transcribed (7 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `gpt-6-luna` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.833 (10/12 fields) | 2 |

<details><summary>2 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[c max,ss]` | 47.26 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[c min,ss]` | 26.13 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_2:row6:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row3:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row8:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Wang_2021_table_4:row0:col3'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Wang_2021_table_4:row1:col3', 'Wang_2021_table_4:row1:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row7:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row10:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/day | not captured | not captured | ['tab_2:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.242 | not captured | not captured | ['tab_2:row3:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0101 L/h | not captured | not captured | ['tab_2:row3:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.08 L | not captured | not captured | ['tab_2:row7:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.88 L | not captured | not captured | ['tab_2:row10:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_camrelizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2021` / `Wang_2021::base`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:48 UTC</sub>
