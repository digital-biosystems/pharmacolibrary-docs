<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;oxcarbazepine&quot;,&quot;href&quot;:&quot;drugs/drug_oxcarbazepine/&quot;},{&quot;label&quot;:&quot;Wu_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxcarbazepine_Yu2025_reference&quot;,&quot;label&quot;:&quot;Yu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxcarbazepine/Oxcarbazepine_Yu2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# oxcarbazepine — `Oxcarbazepine_Wu2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.3). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (t1/2ka ), so that value has no SI equivalent. None of the extracted parameters is oxcarbazepine's own; they describe MHD.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:29:09.095619+00:00) predates the upstream re-run (2026-10-07 07:13:03.552087+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `oxcarbazepine`, measured `MHD`.

## Citation
Wu W et al., Population pharmacokinetics of oxcarbaz…, Basic & clinical pharmacolo… (2024)
  ·  DOI: [10.1111/bcpt.14000](https://doi.org/10.1111/bcpt.14000)

## Model component
<dbs-pgx drug="oxcarbazepine" model-id="Oxcarbazepine_Wu2024_reference" status="rejected" stale="true" population="Chinese paediatric patients with epilepsy" measured-compound="MHD" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL≤2y (L/h) | `Q351` · CLm/F | -5.6 | L/h | -1.5555555555555556e-06 | [l] / [h] | 45.6 | exact (1.0) | Wu_2024_table_4:row0:col2, Wu_2024_table_4:row0:col3, Wu_2024_table_4:row0:col4, Wu_2024_table_4:row0:col5 | — | 0.278 (None% RSE) |
| Vp (L) | `Q61` · V | 0.7 | L | 0.0007 | [l] | 47.6 | exact (1.0) | Wu_2024_table_4:row2:col2, Wu_2024_table_4:row2:col3, Wu_2024_table_4:row2:col4, Wu_2024_table_4:row2:col5 | — | not captured |
| Ka (h⁻¹) | `Q49` · kabs | 0.83 | h⁻¹ | 0.00023055555555555554 | [1] / [h] | not captured | exact (1.0) | Wu_2024_table_4:row3:col1 | — | not captured |
| k1ᵇ | `Q47` · kel | -4.8 | 1/h | -0.0013333333333333333 | 1/h | 25 | exact (1.0) | Wu_2024_table_4:row4:col1, Wu_2024_table_4:row4:col2, Wu_2024_table_4:row4:col3, Wu_2024_table_4:row4:col4, Wu_2024_table_4:row4:col5 | — | not captured |
| k2ᶜ | `Q302` · k21 | -4.1 | 1/h | -0.0011388888888888887 | 1/h | 9.2 | llm (0.6) | Wu_2024_table_4:row5:col1, Wu_2024_table_4:row5:col2, Wu_2024_table_4:row5:col3, Wu_2024_table_4:row5:col4, Wu_2024_table_4:row5:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω [CL≤2y]' routed out of structural estimates ('Inter-individual variation')
- table section iiv: 'ω [CL&gt;2y]' routed out of structural estimates ('Inter-individual variation')
- table section iiv: 'ηCL1/F-shrinkage (%)' routed out of structural estimates ('Inter-individual variation')
- table section iiv: 'ηCL2/F-shrinkage (%)' routed out of structural estimates ('Inter-individual variation')
- dropped duplicate Q22 ('CL&gt;2y (L/h)', value '-1.5') — already have one for this compound
- dropped unlinked row (NIL): 'k3' — extend the ontology if this is a real PK parameter (source ['Wu_2024_table_4:row6:col1', 'Wu_2024_table_4:row6:col2', 'Wu_2024_table_4:row6:col3', 'Wu_2024_table_4:row6:col4', 'Wu_2024_table_4:row6:col5'])
- dropped diagnostic row 'ε-shrinkage (%)' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped unlinked row (NIL): 'Model description' — extend the ontology if this is a real PK parameter (source ['Wu_2024_table_4:row18:col3'])
- implicit units: 'k1ᵇ' → 1/h (from the popPK convention: 'The parameter is a first-order elimination rate constant. In population pharmacokinetics, first-order rate constants are')
- implicit units: 'k2ᶜ' → 1/h (from the popPK convention: 'The parameter is a first-order transfer rate constant (k21). First-order rate constants are conventionally expressed as ')
- metabolite mhd: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'Vp (L)' Q63→Q61 for MHD — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=MHD
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- row roles: 2 per-group rows of MHD clearance but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of MHD variability but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of none summary_statistic but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 18 linked by role
- review gap-fill skipped: this record measures 'MHD', not oxcarbazepine — the review values are the parent's

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 4
- unparsed cell Wu_2024_table_4:row0:col1 = '8.151ᵉ'
- unparsed cell Wu_2024_table_4:row1:col1 = '4.828ᶠ'
- unparsed cell Wu_2024_table_4:row2:col1 = '678.688ᵍ'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.3 (3/10 fields) | 7 |

<details><summary>7 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[cl=f &gt; 2y l=h]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k a h -1]` | 0.83 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v=f l]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v]` | not captured | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q351 | fail | not captured | -5.6 | not captured | not captured | not captured |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Wu_2024_table_4:row5:col1', 'Wu_2024_table_4:row5:col2', 'Wu_2024_table_4:row5:col3', 'Wu_2024_table_4:row5:col4', 'Wu_2024_table_4:row5:col5'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wu_2024_table_4:row0:col2', 'Wu_2024_table_4:row0:col3', 'Wu_2024_table_4:row0:col4', 'Wu_2024_table_4:row0:col5'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Wu_2024_table_4:row4:col1', 'Wu_2024_table_4:row4:col2', 'Wu_2024_table_4:row4:col3', 'Wu_2024_table_4:row4:col4', 'Wu_2024_table_4:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Wu_2024_table_4:row3:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wu_2024_table_4:row2:col2', 'Wu_2024_table_4:row2:col3', 'Wu_2024_table_4:row2:col4', 'Wu_2024_table_4:row2:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 0.7 L | not captured | not captured | ['Wu_2024_table_4:row2:col2', 'Wu_2024_table_4:row2:col3', 'Wu_2024_table_4:row2:col4', 'Wu_2024_table_4:row2:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_oxcarbazepine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wu_2024` / `Wu_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:13 UTC</sub>
