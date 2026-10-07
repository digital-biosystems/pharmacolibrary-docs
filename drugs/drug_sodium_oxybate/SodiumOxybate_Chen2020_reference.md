<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;sodium oxybate&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_oxybate/&quot;},{&quot;label&quot;:&quot;Chen_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sodium oxybate — `SodiumOxybate_Chen2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Chen C et al., Population and Noncompartmental Pharmac…, Clinical and translational… (2020)
  ·  DOI: [10.1111/cts.12780](https://doi.org/10.1111/cts.12780)

## Model component
<dbs-pgx drug="sodium oxybate" model-id="SodiumOxybate_Chen2020_reference" status="rejected" stale="false" population="children and adults with narcolepsy and healthy adults" measured-compound="sodium oxybate" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vmax (mg/h) | `Q66` · Vmax | 1508 | mg/h | not captured | [mg] / [h] | not captured | special_case (0.95) | Chen_2020_table_S4:row1:col1, Chen_2020_table_S4:row1:col4 | — | not captured |
| Km (mg/L) | `Q1` · Km | 22.0 | mg/L | not captured | [mg] / [l] | not captured | exact (1.0) | Chen_2020_table_S4:row2:col1, Chen_2020_table_S4:row2:col4 | — | not captured |
| Central compartment volume of distribution (VC) (L) | `Q63` · V1 | 29.5 | L | 0.029500000000000002 | [l] | not captured | llm_confirmed (0.6) | Chen_2020_table_S4:row3:col1, Chen_2020_table_S4:row3:col4 | — | not captured |
| Peripheral volume of distribution (VP) (L)a | `Q64` · V2 | 5.33 | units | not captured | [units] | not captured | boundary_compartment (0.9) | Chen_2020_table_S4:row4:col1, Chen_2020_table_S4:row4:col4 | — | not captured |
| Ka (h−1) | `Q49` · kabs | 4.12 | h−1 | 0.0011444444444444445 | [1] / [h] | not captured | exact (1.0) | Chen_2020_table_S4:row5:col1, Chen_2020_table_S4:row5:col4 | — | not captured |
| F (NA) | `Q40` · Fab | 1.00 | NA | not captured | not captured | not captured | exact (1.0) | Chen_2020_table_S4:row6:col1, Chen_2020_table_S4:row6:col4 | — | not captured |
| K23 (h−1) | `Q48` · kcomp | 0.0968 | h−1 | 2.6888888888888887e-05 | [1] / [h] | not captured | exact (1.0) | Chen_2020_table_S4:row7:col1, Chen_2020_table_S4:row7:col4 | — | not captured |
| theta_q319_na_power | `Q900` · theta_q319_na_power | 0.650 | not captured | not captured | not captured | not captured | not captured (not captured) | Chen_2020_table_S4:row10:col1, Chen_2020_table_S4:row10:col4 | — | not captured |
| theta_q319_na_power | `Q900` · theta_q319_na_power | 0.633 | not captured | not captured | not captured | not captured | not captured (not captured) | Chen_2020_table_S4:row11:col1, Chen_2020_table_S4:row11:col4 | — | not captured |
| theta_vmax_na | `Q900` · theta_vmax_na | -0.177 | not captured | not captured | not captured | not captured | not captured (not captured) | Chen_2020_table_S4:row12:col1, Chen_2020_table_S4:row12:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameter a' — extend the ontology if this is a real PK parameter (source ['cts12780-tbl-0002:row0:col1', 'cts12780-tbl-0002:row0:col2', 'cts12780-tbl-0002:row0:col3'])
- unit_dimension_mismatch: 'Vmax (mg/h)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Peripheral volume of distribution (VP) (L)a' → Q64 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q48 ('K32 (h−1)', value '0.536') — already have one for this compound
- dropped unlinked row (NIL): 'Food effect on Ka (NA)' — extend the ontology if this is a real PK parameter (source ['Chen_2020_table_S4:row9:col1', 'Chen_2020_table_S4:row9:col4'])
- dropped unlinked row (NIL): 'Pediatric age category (7–17 y) on VC' — extend the ontology if this is a real PK parameter (source ['Chen_2020_table_S4:row13:col1', 'Chen_2020_table_S4:row13:col4'])
- dropped unlinked row (NIL): 'Child age category (7–11 y) on VC' — extend the ontology if this is a real PK parameter (source ['Chen_2020_table_S4:row14:col1', 'Chen_2020_table_S4:row14:col4'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sodium oxybate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Chen_2020_table_S4:row1:col2 = '37.7%'
- unparsed cell Chen_2020_table_S4:row1:col3 = '10.2%'
- unparsed cell Chen_2020_table_S4:row1:col5 = '(1357, 1699)'
- unparsed cell Chen_2020_table_S4:row2:col2 = '41.4%'
- unparsed cell Chen_2020_table_S4:row2:col3 = '24.5%'
- unparsed cell Chen_2020_table_S4:row2:col5 = '(17.74, 26.78)'
- unparsed cell Chen_2020_table_S4:row3:col2 = '11.8%'
- unparsed cell Chen_2020_table_S4:row3:col5 = '(28.35, 30.51)'
- unparsed cell Chen_2020_table_S4:row5:col2 = '47.2%'
- unparsed cell Chen_2020_table_S4:row5:col5 = '(3.57, 4.76)'
- unparsed cell Chen_2020_table_S4:row7:col5 = '(0.0655, 0.1407)'
- unparsed cell Chen_2020_table_S4:row8:col5 = '(0.449, 0.633)'
- unparsed cell Chen_2020_table_S4:row9:col5 = '(−0.741, −0.61)'
- unparsed cell Chen_2020_table_S4:row10:col5 = '(0.506, 0.812)'
- unparsed cell Chen_2020_table_S4:row11:col5 = '(0.434, 0.801)'
- unparsed cell Chen_2020_table_S4:row12:col5 = '(−0.2438, −0.1106)'
- unparsed cell Chen_2020_table_S4:row13:col5 = '(0.0897, 0.3213)'
- unparsed cell Chen_2020_table_S4:row14:col5 = '(−0.518, −0.124)'
- companion parameter table S4 transcribed (28 record(s))
- LLM selected parameter table(s) 2, S4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Chen_2020_table_S4:row2:col1', 'Chen_2020_table_S4:row2:col4'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['Chen_2020_table_S4:row7:col1', 'Chen_2020_table_S4:row7:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Chen_2020_table_S4:row5:col1', 'Chen_2020_table_S4:row5:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Chen_2020_table_S4:row3:col1', 'Chen_2020_table_S4:row3:col4'] |
| C5_dimension_Q64 | fail | [luminosity] / [length] ** 2 | units | not captured | not captured | ['Chen_2020_table_S4:row4:col1', 'Chen_2020_table_S4:row4:col4'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/h | not captured | not captured | ['Chen_2020_table_S4:row1:col1', 'Chen_2020_table_S4:row1:col4'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 29.5 L | not captured | not captured | ['Chen_2020_table_S4:row3:col1', 'Chen_2020_table_S4:row3:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sodium_oxybate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chen_2020` / `Chen_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 04:32 UTC</sub>
