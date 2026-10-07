<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;obinutuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_obinutuzumab/&quot;},{&quot;label&quot;:&quot;Gibiansky_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# obinutuzumab — `Obinutuzumab_Gibiansky2019_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.462). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of bone marrow involvement at baseline, yes vs no: this record has none, the second reading 0.8759; it also differs on 6 more fields. That field does not shape the model.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Gibiansky E et al., Pharmacokinetics, exposure, efficacy an…, British journal of clinical… (2019)
  ·  DOI: [10.1111/bcp.13974](https://doi.org/10.1111/bcp.13974)

## Model component
<dbs-pgx drug="obinutuzumab" model-id="Obinutuzumab_Gibiansky2019_reference" status="rejected" stale="false" population="patients with CD20+ B-cell malignancies (CLL, NHL, FL, DLBCL, MCL)" measured-compound="obinutuzumab" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmean (as a continuous covariate) | `Q71` · Cavg | -0.0027 | mg/L | not captured | mg/L | 17.42 | llm (0.6) | bcp13974-tbl-0002:row2:col2, bcp13974-tbl-0002:row2:col3, bcp13974-tbl-0002:row2:col4 | — | not captured |
| age_as_a_continuous_covariate_increase_of_1_y | `Q900` · age_as_a_continuous_covariate_increase_of_1_y | 0.05785 | not captured | not captured | not captured | 21.73 | not captured (not captured) | bcp13974-tbl-0002:row11:col2, bcp13974-tbl-0002:row11:col3, bcp13974-tbl-0002:row11:col4 | — | not captured |
| decay coefficient of time dependent clearance (kdes) | `Q22` · CL | 0.11 | day−1 | not captured | day−1 | not captured | boundary (0.8) | Gibiansky_2019:results_prose | — | not captured |
| peripheral volume of distribution (V2) | `Q64` · V2 | 1.23 | L | 0.00123 | L | not captured | boundary_compartment (0.9) | Gibiansky_2019:results_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'covariate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'reference value for covariate *' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped value-less row: 'Covariate/tertile'
- unit_dimension_unknown: 'as a continuous covariate' (Cavg)
- dropped unlinked row (NIL): 'Bone marrow involvement at baseline, yes vs no' — extend the ontology if this is a real PK parameter (source ['bcp13974-tbl-0002:row3:col2', 'bcp13974-tbl-0002:row3:col3', 'bcp13974-tbl-0002:row3:col4', 'bcp13974-tbl-0002:row8:col2', 'bcp13974-tbl-0002:row8:col3', 'bcp13974-tbl-0002:row8:col4', 'bcp13974-tbl-0002:row12:col2', 'bcp13974-tbl-0002:row12:col3', 'bcp13974-tbl-0002:row12:col4'])
- unit_dimension_unknown: 'C mean tertiles' (Cavg)
- dropped duplicate Q71 ('Low tertile of Cmean', value '-0.9956') — already have one for this compound
- dropped unlinked row (NIL): 'Middle tertile of Cmean' — extend the ontology if this is a real PK parameter (source ['bcp13974-tbl-0002:row6:col2', 'bcp13974-tbl-0002:row6:col3', 'bcp13974-tbl-0002:row6:col4'])
- dropped duplicate Q71 ('High tertile of Cmean', value '-1.194') — already have one for this compound
- dropped unlinked row (NIL): 'Log Cmean (as a continuous covariate)' — extend the ontology if this is a real PK parameter (source ['bcp13974-tbl-0002:row10:col2', 'bcp13974-tbl-0002:row10:col3', 'bcp13974-tbl-0002:row10:col4'])
- covariate level 'Age (as a continuous covariate), increase of 1 y' → Q900:age_as_a_continuous_covariate_increase_of_1_y = 0.05785 (linear_fractional on the model)
- dropped unlinked row (NIL): 'Serum albumin' — extend the ontology if this is a real PK parameter (source ['Gibiansky_2019_table_1:row2:col1', 'Gibiansky_2019_table_1:row2:col2'])
- salvaged Q22 ('decay coefficient of time dependent clearance (kdes)'=0.11) from results prose — parameter table was unreadable
- salvaged Q64 ('peripheral volume of distribution (V2)'=1.23) from results prose — parameter table was unreadable
- implicit units: 'Cmean (as a continuous covariate)' → mg/L (from the popPK convention: 'The paper does not explicitly state the unit for Cmean in the provided text or table captions. However, Cmean is defined')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=obinutuzumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'obinutuzumab' — its concentrations stay mass-only
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell bcp13974-tbl-0002:row2:col1 = '0.9974 (0.9965 to 0.9983)'
- unparsed cell bcp13974-tbl-0002:row3:col1 = '1.689 (1.217 to 2.346)'
- unparsed cell bcp13974-tbl-0002:row5:col1 = '0.3695 (0.2219 to 0.6154)'
- unparsed cell bcp13974-tbl-0002:row6:col1 = '0.4466 (0.2701 to 0.7383)'
- unparsed cell bcp13974-tbl-0002:row7:col1 = '0.3031 (0.1782 to 0.5156)'
- unparsed cell bcp13974-tbl-0002:row8:col1 = '1.758 (1.259 to −2.454)'
- unparsed cell bcp13974-tbl-0002:row10:col1 = '0.8484 (0.7731 to 0.9309)'
- unparsed cell bcp13974-tbl-0002:row11:col1 = '1.06 (1.034 to 1.086)'
- unparsed cell bcp13974-tbl-0002:row12:col1 = '2.401 (1.473 to 3.914)'
- unparsed cell Gibiansky_2019_table_1:row2:col3 = '25.4 (35.1, 16.4)'
- companion parameter table 1 transcribed (2 record(s), model stage 'final')
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.462 (6/13 fields) | 7 |

<details><summary>7 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[bone marrow involvement at baseline, yes vs no]` | not captured | 0.8759 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clt]` | not captured | 0.154 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmean]` | -0.0027 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[decay coefficient of time dependent clearance]` | 0.11 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[low tertile of cmean]` | not captured | -0.9956 | only_one_extracted |
| `gpt-oss:120b` | `parameters[peripheral volume of distribution]` | 1.23 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2]` | not captured | 1.23 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q71 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['bcp13974-tbl-0002:row2:col2', 'bcp13974-tbl-0002:row2:col3', 'bcp13974-tbl-0002:row2:col4'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | day−1 | not captured | not captured | ['Gibiansky_2019:results_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.11 | not captured | not captured | ['Gibiansky_2019:results_prose'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.23 L | not captured | not captured | ['Gibiansky_2019:results_prose'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_obinutuzumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gibiansky_2019` / `Gibiansky_2019::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 18:08 UTC</sub>
