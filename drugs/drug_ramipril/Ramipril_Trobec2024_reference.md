<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;ramipril&quot;,&quot;href&quot;:&quot;drugs/drug_ramipril/&quot;},{&quot;label&quot;:&quot;Trobec_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ramipril — `Ramipril_Trobec2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.391). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The ramiprilat metabolite is unlinked from the dose, so the model was rejected; the ramiprilat clearance parameter also carries a unit (1 %) that could not be converted to SI.**

The record describes a general linear model for ramipril in chronic heart failure patients with the metabolite ramiprilat formed from ramipril by hydrolysis, but ramiprilat has 0 compartments and no path from the dose, making it an unlinked metabolite. The reported unit '1 %' for the ramiprilat clearance decrease could not be expressed in SI units, so that parameter was recorded without a usable value. A second reader also disagreed on the link relation (metabolism rather than hydrolysis), the parameterization (mechanistic rather than apparent), and read null instead of 209 L h-1 for CL/F and null instead of 1 % for the ramiprilat clearance decrease. Extracted — ramipril: CL/F 209 L h -1, CL 1 %.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has ramipril, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:31:18.168829+00:00) predates the upstream re-run (2026-10-07 07:17:49.456381+00:00). Current validate status: `rejected`.

## Citation
Trobec KČ et al., Population pharmacokinetics of ramipril…, Acta pharmaceutica (Zagreb,… (2024)
  ·  DOI: [10.2478/acph-2024-0018](https://doi.org/10.2478/acph-2024-0018)

## Model component
<dbs-pgx drug="ramipril" model-id="Ramipril_Trobec2024_reference" status="rejected" stale="true" population="patients with chronic heart failure" measured-compound="ramipril" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 8 extracted, plus 1 covariate effect.

**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (h⁻¹) | `Q49` · kabs | 1.80 | h⁻¹ | 0.0005 | [1] / [h] | 6 | exact (1.0) | Trobec_2024_table_p9_1:row0:col1, Trobec_2024_table_p9_1:row0:col2, Trobec_2024_table_p9_1:row0:col3 | — | not captured |
| CL (L h⁻¹) | `Q22` · CL | 194 | L h⁻¹ | 5.388888888888889e-05 | [l] / [h] | 6 | exact (1.0) | Trobec_2024_table_p9_1:row1:col1, Trobec_2024_table_p9_1:row1:col2, Trobec_2024_table_p9_1:row1:col3 | — | not captured |
| V1 (L) | `Q63` · V1 | 52.3 | L | 0.0523 | [l] | 9 | exact (1.0) | Trobec_2024_table_p9_1:row2:col1, Trobec_2024_table_p9_1:row2:col2, Trobec_2024_table_p9_1:row2:col3 | — | not captured |
| V2 (L) | `Q64` · V2 | 442 | L | 0.442 | [l] | 8 | exact (1.0) | Trobec_2024_table_p9_1:row3:col1, Trobec_2024_table_p9_1:row3:col2, Trobec_2024_table_p9_1:row3:col3 | — | not captured |
| Q (L⁻¹) | `Q30` · Q | 74.6 | L⁻¹ | not captured | [1] / [l] | 7 | exact (1.0) | Trobec_2024_table_p9_1:row4:col1, Trobec_2024_table_p9_1:row4:col2, Trobec_2024_table_p9_1:row4:col3 | — | not captured |
| CLm (L h⁻¹) | `Q22` · CL | 11.4 | L h⁻¹ | 3.1666666666666667e-06 | [l] / [h] | 6 | exact (1.0) | Trobec_2024_table_p9_1:row5:col1, Trobec_2024_table_p9_1:row5:col2, Trobec_2024_table_p9_1:row5:col3 | — | not captured |
| Vm (L) | `Q61` · V | 91.0 | L | 0.091 | [l] | 10 | exact (1.0) | Trobec_2024_table_p9_1:row6:col1, Trobec_2024_table_p9_1:row6:col2, Trobec_2024_table_p9_1:row6:col3 | — | not captured |
| b Effect of MDRD4 on CLm | `Q351` · CLm/F | 0.00988 | not captured | not captured | not captured | 20 | llm_confirmed (0.6) | Trobec_2024_table_p9_1:row9:col1, Trobec_2024_table_p9_1:row9:col2, Trobec_2024_table_p9_1:row9:col3 | — | not captured |
| theta_cl_age | `Q900` · theta_cl_age | -1.46 | not captured | not captured | not captured | 39 | not captured (not captured) | Trobec_2024_table_p9_1:row7:col1, Trobec_2024_table_p9_1:row7:col2, Trobec_2024_table_p9_1:row7:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Q (L⁻¹)' → Q30 (unit '1 / [length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('a Effect of DD on CL', value '0.204') — already have one for this compound
- dropped duplicate Q351 ('b Effect of DD on CLm', value '0.279') — already have one for this compound
- dropped unlinked row (NIL): 'Proportional (%)' — extend the ontology if this is a real PK parameter (source ['Trobec_2024_table_p9_1:row19:col1', 'Trobec_2024_table_p9_1:row19:col2', 'Trobec_2024_table_p9_1:row19:col3'])
- dropped unlinked row (NIL): 'Proportionalm (%)' — extend the ontology if this is a real PK parameter (source ['Trobec_2024_table_p9_1:row20:col1', 'Trobec_2024_table_p9_1:row20:col2', 'Trobec_2024_table_p9_1:row20:col3'])
- metabolite volume: 'Vm (L)' Q63→Q61 for ramiprilat — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ramipril
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 21 linked by role; re-tagged parent→ramiprilat ×20
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Trobec_2024_table_p9_1:row0:col4 = '1.57, 2.30'
- unparsed cell Trobec_2024_table_p9_1:row1:col4 = '156, 235'
- unparsed cell Trobec_2024_table_p9_1:row2:col4 = '6.49, 119'
- unparsed cell Trobec_2024_table_p9_1:row3:col4 = '303, 686'
- unparsed cell Trobec_2024_table_p9_1:row4:col4 = '50.2, 99.5'
- unparsed cell Trobec_2024_table_p9_1:row5:col4 = '9.9, 13.1'
- unparsed cell Trobec_2024_table_p9_1:row6:col4 = '70.2, 122'
- unparsed cell Trobec_2024_table_p9_1:row7:col4 = '–2.65, –0.38'
- unparsed cell Trobec_2024_table_p9_1:row8:col4 = '0.038, 0.397'
- unparsed cell Trobec_2024_table_p9_1:row9:col4 = '0.00556, 0.0130'
- unparsed cell Trobec_2024_table_p9_1:row10:col4 = '0.147, 0.378'
- unparsed cell Trobec_2024_table_p9_1:row11:col1 = '15.6, 42'
- unparsed cell Trobec_2024_table_p9_1:row11:col3 = '14.5 %'
- unparsed cell Trobec_2024_table_p9_1:row11:col4 = '3.15, 24.1'
- unparsed cell Trobec_2024_table_p9_1:row12:col1 = '143, 25'
- unparsed cell Trobec_2024_table_p9_1:row12:col3 = '119 %'
- unparsed cell Trobec_2024_table_p9_1:row12:col4 = '41.3, 1265'
- unparsed cell Trobec_2024_table_p9_1:row13:col1 = '28.5, 3'
- unparsed cell Trobec_2024_table_p9_1:row13:col4 = '174, 35.1'
- unparsed cell Trobec_2024_table_p9_1:row14:col1 = '59.2, 19'
- unparsed cell Trobec_2024_table_p9_1:row14:col3 = '52.0 %'
- unparsed cell Trobec_2024_table_p9_1:row14:col4 = '19.1, 91.7'
- unparsed cell Trobec_2024_table_p9_1:row15:col1 = '28.0, 22'
- unparsed cell Trobec_2024_table_p9_1:row15:col3 = '27.1 %'
- unparsed cell Trobec_2024_table_p9_1:row15:col4 = '20.9, 32.6'
- unparsed cell Trobec_2024_table_p9_1:row16:col1 = '8.4, 49'
- unparsed cell Trobec_2024_table_p9_1:row16:col3 = '8.1 %'
- unparsed cell Trobec_2024_table_p9_1:row16:col4 = '3.7, 11.4'
- unparsed cell Trobec_2024_table_p9_1:row17:col1 = '46.2, 39'
- unparsed cell Trobec_2024_table_p9_1:row17:col3 = '45.6 %'
- unparsed cell Trobec_2024_table_p9_1:row17:col4 = '9.9, 97.2'
- unparsed cell Trobec_2024_table_p9_1:row19:col4 = '30.2, 45.9'
- unparsed cell Trobec_2024_table_p9_1:row20:col4 = '10.2, 18.8'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.391 (9/23 fields) | 14 |

<details><summary>14 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl]` | 194 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | not captured | 194 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 1.80 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | not captured | 1.80 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | 74.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | not captured | 74.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_age]` | -1.46 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_age]` | not captured | -1.46 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1]` | 52.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1]` | not captured | 52.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2]` | 442 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2]` | not captured | 442 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | ramipril | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | ramipril | unknown | mismatch |

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
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Trobec_2024_table_p9_1:row1:col1', 'Trobec_2024_table_p9_1:row1:col2', 'Trobec_2024_table_p9_1:row1:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Trobec_2024_table_p9_1:row5:col1', 'Trobec_2024_table_p9_1:row5:col2', 'Trobec_2024_table_p9_1:row5:col3'] |
| C5_dimension_Q30 | fail | 1 / [length] ** 3 | L⁻¹ | not captured | not captured | ['Trobec_2024_table_p9_1:row4:col1', 'Trobec_2024_table_p9_1:row4:col2', 'Trobec_2024_table_p9_1:row4:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Trobec_2024_table_p9_1:row0:col1', 'Trobec_2024_table_p9_1:row0:col2', 'Trobec_2024_table_p9_1:row0:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Trobec_2024_table_p9_1:row6:col1', 'Trobec_2024_table_p9_1:row6:col2', 'Trobec_2024_table_p9_1:row6:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Trobec_2024_table_p9_1:row2:col1', 'Trobec_2024_table_p9_1:row2:col2', 'Trobec_2024_table_p9_1:row2:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Trobec_2024_table_p9_1:row3:col1', 'Trobec_2024_table_p9_1:row3:col2', 'Trobec_2024_table_p9_1:row3:col3'] |
| C5_unit_missing_Q351 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Trobec_2024_table_p9_1:row9:col1', 'Trobec_2024_table_p9_1:row9:col2', 'Trobec_2024_table_p9_1:row9:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 194 L/h | not captured | not captured | ['Trobec_2024_table_p9_1:row1:col1', 'Trobec_2024_table_p9_1:row1:col2', 'Trobec_2024_table_p9_1:row1:col3'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 11.4 L/h | not captured | not captured | ['Trobec_2024_table_p9_1:row5:col1', 'Trobec_2024_table_p9_1:row5:col2', 'Trobec_2024_table_p9_1:row5:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 91 L | not captured | not captured | ['Trobec_2024_table_p9_1:row6:col1', 'Trobec_2024_table_p9_1:row6:col2', 'Trobec_2024_table_p9_1:row6:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 52.3 L | not captured | not captured | ['Trobec_2024_table_p9_1:row2:col1', 'Trobec_2024_table_p9_1:row2:col2', 'Trobec_2024_table_p9_1:row2:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 442 L | not captured | not captured | ['Trobec_2024_table_p9_1:row3:col1', 'Trobec_2024_table_p9_1:row3:col2', 'Trobec_2024_table_p9_1:row3:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ramipril/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Trobec_2024` / `Trobec_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:17 UTC</sub>
