<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin glargine&quot;,&quot;href&quot;:&quot;drugs/drug_insulin_glargine/&quot;},{&quot;label&quot;:&quot;Tham_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;InsulinGlargine_Tham2017_reference&quot;,&quot;label&quot;:&quot;Tham_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_insulin_glargine/InsulinGlargine_Tham2017_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# insulin glargine — `InsulinGlargine_Tham2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.312). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** C5 dimension mismatch on a structural parameter; C2 negative clearance/volume in a covariate scenario or base (implausible — base value or shift is wrong).
**Second reading:** `gpt-oss:120b` read this paper differently on `screen.dose_compound` (insulin vs insulin glargine) and 10 more field(s) — a structural parameter, so the record is disputed.
**How to address:** not a curation fix — the pipeline is the limit here (scholar: a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value).
<sub>owner: **scholar**</sub>

## Citation
Tham LS; Schneck K; Ertekin A; Reviriego J et al. (2017). Journal of clinical pharmacology 57
  ·  DOI: [10.1002/jcph.899](https://doi.org/10.1002/jcph.899)

## Model component
<dbs-pgx drug="insulin glargine" model-id="InsulinGlargine_Tham2017_reference" status="rejected" stale="false" population="healthy adults" measured-compound="insulin" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Bioavailability, FGlar | `Q40` · Fab | 1 | Unit | not captured | not captured | not captured | llm_confirmed (0.6) | jcph899-tbl-0002:row3:col1 | — | not captured |
| Absorption rate constant, Ka (1/h) | `Q49` · kabs | 0.0365 | Unit | not captured | [unit] | not captured | llm_confirmed (0.6) | jcph899-tbl-0002:row6:col1, jcph899-tbl-0002:row6:col2, jcph899-tbl-0002:row6:col3, jcph899-tbl-0002:row6:col4, jcph899-tbl-0002:row6:col5, jcph899-tbl-0002:row6:col6 | — | not captured |
| Absorption lag, ALag (h) | `Q83` · tlag | 0.265 | h | 954.0 | [h] | not captured | llm_confirmed (0.6) | jcph899-tbl-0002:row7:col4, jcph899-tbl-0002:row7:col5 | — | not captured |
| Apparent volume of distribution (L) | `Q76` · V/F | 43.0 | L | 0.043000000000000003 | [l] | not captured | exact (1.0) | jcph899-tbl-0002:row12:col1, jcph899-tbl-0002:row12:col2, jcph899-tbl-0002:row12:col3, jcph899-tbl-0002:row12:col4, jcph899-tbl-0002:row12:col5, jcph899-tbl-0002:row12:col6 | — | not captured |
| Apparent clearance (L/h) | `Q27` · CL/F | 30.5 | L/h | 8.472222222222223e-06 | [l] / [h] | not captured | exact (1.0) | jcph899-tbl-0002:row15:col1, jcph899-tbl-0002:row15:col2, jcph899-tbl-0002:row15:col3, jcph899-tbl-0002:row15:col4, jcph899-tbl-0002:row15:col5, jcph899-tbl-0002:row15:col6 | — | not captured |
| Covariate effect of dose on clearance | `Q22` · CL | -0.282 | Unit | not captured | [unit] | not captured | llm_confirmed (0.6) | jcph899-tbl-0002:row16:col2, jcph899-tbl-0002:row16:col3, jcph899-tbl-0002:row16:col4 | — | not captured |
| theta_q61_body_weight | `Q900` · theta_q61_body_weight | 2.48 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph899-tbl-0002:row13:col1, jcph899-tbl-0002:row13:col2, jcph899-tbl-0002:row13:col5, jcph899-tbl-0002:row13:col6 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Absorption rate constant, Ka (1/h)' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped duplicate Q40 ('Fraction of dose undergoing first‐order absorption', value '0.729') — already have one for this compound
- dropped unlinked row (NIL): 'Duration of 0‐order absorption (h)' — extend the ontology if this is a real PK parameter (source ['jcph899-tbl-0002:row9:col1', 'jcph899-tbl-0002:row9:col5'])
- unit_dimension_mismatch: 'Covariate effect of dose on absorption rate constant' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('Covariate effect of dose on absorption rate constant', value '-0.275') — already have one for this compound
- unit_dimension_mismatch: 'Covariate effect of dose on clearance' → Q22 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Clearance and volume of distribution' — extend the ontology if this is a real PK parameter (source ['jcph899-tbl-0002:row18:col1'])
- unit_dimension_mismatch: 'Clearance and absorption rate constant' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('Clearance and absorption rate constant', value '-0.0232') — already have one for this compound
- dropped PD-category row 'Baseline endogenous insulin concentration (pmol/L)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jcph899-tbl-0002:row21:col1'])
- dropped unlinked row (NIL): 'Covariate of body weight on baseline endogenous insulin' — extend the ontology if this is a real PK parameter (source ['jcph899-tbl-0002:row22:col1', 'jcph899-tbl-0002:row22:col2', 'jcph899-tbl-0002:row22:col3', 'jcph899-tbl-0002:row22:col4', 'jcph899-tbl-0002:row22:col5', 'jcph899-tbl-0002:row22:col6'])
- dropped unlinked row (NIL): 'Proportional (%)' — extend the ontology if this is a real PK parameter (source ['jcph899-tbl-0002:row24:col1', 'jcph899-tbl-0002:row24:col2', 'jcph899-tbl-0002:row24:col3', 'jcph899-tbl-0002:row24:col4', 'jcph899-tbl-0002:row24:col5', 'jcph899-tbl-0002:row24:col6'])
- covariate effect for Q61 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=insulin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.312 (5/16 fields) | 11 |

<details><summary>11 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[absorption lag, alag].value` | 0.265 | 0.378 | mismatch |
| `gpt-oss:120b` | `parameters[absorption rate constant, ka].value` | 0.0365 | 0.0830 | mismatch |
| `gpt-oss:120b` | `parameters[apparent clearance].value` | 30.5 | 74.5 | mismatch |
| `gpt-oss:120b` | `parameters[apparent volume of distribution].value` | 43.0 | 768 | mismatch |
| `gpt-oss:120b` | `parameters[baseline endogenous insulin concentration]` | not captured | 79.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[bioavailability, fglar].parameter_id` | Q40 | Q41 | mismatch |
| `gpt-oss:120b` | `parameters[covariate effect of dose on bioavailability, θ1]` | not captured | -0.300 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q324_body_weight]` | not captured | 0.739 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q61_body_weight].value` | 2.48 | 0.00728 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | insulin | insulin glargine | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | insulin | insulin glargine | mismatch |

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
| C2_base_sign_Q22 | fail | not captured | -0.282 | not captured | not captured | not captured |
| C5_dimension_Q22 | fail | [luminosity] / [length] ** 2 | Unit | not captured | not captured | ['jcph899-tbl-0002:row16:col2', 'jcph899-tbl-0002:row16:col3', 'jcph899-tbl-0002:row16:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph899-tbl-0002:row15:col1', 'jcph899-tbl-0002:row15:col2', 'jcph899-tbl-0002:row15:col3', 'jcph899-tbl-0002:row15:col4', 'jcph899-tbl-0002:row15:col5', 'jcph899-tbl-0002:row15:col6'] |
| C5_dimension_Q49 | fail | [luminosity] / [length] ** 2 | Unit | not captured | not captured | ['jcph899-tbl-0002:row6:col1', 'jcph899-tbl-0002:row6:col2', 'jcph899-tbl-0002:row6:col3', 'jcph899-tbl-0002:row6:col4', 'jcph899-tbl-0002:row6:col5', 'jcph899-tbl-0002:row6:col6'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph899-tbl-0002:row12:col1', 'jcph899-tbl-0002:row12:col2', 'jcph899-tbl-0002:row12:col3', 'jcph899-tbl-0002:row12:col4', 'jcph899-tbl-0002:row12:col5', 'jcph899-tbl-0002:row12:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['jcph899-tbl-0002:row7:col4', 'jcph899-tbl-0002:row7:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 30.5 L/h | not captured | not captured | ['jcph899-tbl-0002:row15:col1', 'jcph899-tbl-0002:row15:col2', 'jcph899-tbl-0002:row15:col3', 'jcph899-tbl-0002:row15:col4', 'jcph899-tbl-0002:row15:col5', 'jcph899-tbl-0002:row15:col6'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 43 L | not captured | not captured | ['jcph899-tbl-0002:row12:col1', 'jcph899-tbl-0002:row12:col2', 'jcph899-tbl-0002:row12:col3', 'jcph899-tbl-0002:row12:col4', 'jcph899-tbl-0002:row12:col5', 'jcph899-tbl-0002:row12:col6'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_insulin_glargine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tham_2017` / `Tham_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-12 04:41 UTC</sub>
