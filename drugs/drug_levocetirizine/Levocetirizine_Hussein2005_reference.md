<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;levocetirizine&quot;,&quot;href&quot;:&quot;drugs/drug_levocetirizine/&quot;},{&quot;label&quot;:&quot;Hussein_2005 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# levocetirizine — `Levocetirizine_Hussein2005_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.176). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Levocetirizine apparent clearance and volume parameters caused double correction, rejecting the abstract-derived model record.**

The record was built from the abstract alone, so reported summary statistics stood in for a fitted model. The apparent clearance and volume of distribution parameters caused double correction, violating parameter coherence. Fitted pharmacokinetic estimates were unavailable because only the abstract was read. Extracted — levocetirizine: CL/F 0.044 L/h/kg, Vnorm 0.639 l kg(-1), CL 0.6 l h(-1), Frel 0.28 in, AUCSS 1.95e+03 ng·h/mL, AUC/dose 2.04e+03 microg l(-1) h, kabs 0.095 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has cetirizine, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `cetirizine`, measured `levocetirizine`.

## Citation
Hussein Z et al., Retrospective population pharmacokineti…, British journal of clinical… (2005)
  ·  DOI: [10.1111/j.1365-2125.2005.02242.x](https://doi.org/10.1111/j.1365-2125.2005.02242.x)

## Model component
<dbs-pgx drug="levocetirizine" model-id="Levocetirizine_Hussein2005_reference" status="rejected" stale="false" population="atopic children (12-24 months)" measured-compound="levocetirizine" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F increased linearly with weight by | `Q27` · CL/F | 0.044 | L/h/kg | 8.555555555555555e-07 | L/h | not captured | llm_confirmed (0.6) | Hussein_2005:abstract | — | not captured |
| V/F increased linearly with weight by | `Q352` · Vnorm | 0.639 | l kg(-1) | 0.04473 | [l] / [kg] | not captured | llm_corrected (0.6) | Hussein_2005:abstract | — | not captured |
| Population estimates in children with weights of 8 and 20 kg were | `Q22` · CL | 0.6 | l h(-1) | 1.6666666666666665e-07 | [l] / [h] | not captured | llm (0.6) | Hussein_2005:abstract | — | not captured |
| The estimated relative bioavailability was | `Q87` · Frel | 0.28 | in | not captured | not captured | not captured | llm_confirmed (0.6) | Hussein_2005:abstract | — | not captured |
| AUC(ss), calculated in compliant subjects using posterior estimates of the final model, was | `Q18` · AUCSS | 1952 | ng·h/mL | not captured | ng·h/mL | not captured | llm_corrected (0.6) | Hussein_2005:abstract | — | not captured |
| in adults after intake of 5 mg oral solution | `Q189` · AUC/dose | 2036 | microg l(-1) h | not captured | [µg] / [[h] · [l]] | not captured | llm (0.6) | Hussein_2005:abstract | — | not captured |
| ka (h−1) | `Q49` · kabs | 0.095 | h−1 | 2.638888888888889e-05 | 1/h | not captured | review_gapfill (0.7) | Melander_2025:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'l h(-1) kg(-1)' (CL/F)
- dropped unlinked row (NIL): 'intercept' — extend the ontology if this is a real PK parameter (source ['Hussein_2005:abstract'])
- dropped unlinked row (NIL): 'and' — extend the ontology if this is a real PK parameter (source ['Hussein_2005:abstract', 'Hussein_2005:abstract', 'Hussein_2005:abstract'])
- dropped unlinked row (NIL): 'for' — extend the ontology if this is a real PK parameter (source ['Hussein_2005:abstract'])
- dropped unlinked row (NIL): 'with' — extend the ontology if this is a real PK parameter (source ['Hussein_2005:abstract'])
- unit_dimension_unknown: 'microg l(-1) h' (AUCSS)
- unit_dimension_unknown: 'microg l(-1) h' (AUC/dose)
- dropped unlinked row (NIL): 'CONCLUSIONS: The model suggests that administration of levocetirizine' — extend the ontology if this is a real PK parameter (source ['Hussein_2005:abstract'])
- implicit units: 'CL/F increased linearly with weight by' → L/h/kg (from the popPK convention: "The parameter is CL/F (clearance) and it 'increased linearly with weight by = 0.044'. This implies the parameter is weig")
- implicit units: 'AUC(ss), calculated in compliant subjects using posterior estimates of the final model, was' → ng·h/mL (from the popPK convention: 'AUCSS is the area under the concentration-time curve at steady state. In population PK for drugs dosed in milligrams (as')
- implicit units: 'in adults after intake of 5 mg oral solution' — the LLM proposed 'ng·h/mL/mg', whose dimension does not fit Q189; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=levocetirizine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Melander_2025's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Hussein_2005_metadata.yaml (13 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8-27b` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.176 (3/17 fields) | 14 |

<details><summary>14 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc(ss) in compliant subjects]` | not captured | 1952 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc(ss), calculated in compliant subjects using posterior estimates of the final model, was]` | 1952 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f increased linearly with weight by]` | 0.044 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f increased linearly with weight by]` | not captured | 0.044 | only_one_extracted |
| `gpt-oss-120b` | `parameters[estimated relative bioavailability]` | not captured | 0.28 | only_one_extracted |
| `gpt-oss-120b` | `parameters[in adults after intake of 5 mg oral solution]` | 2036 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercept of]` | not captured | 0.244 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.095 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[population estimates in children with weights of 8 and 20 kg were]` | 0.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[the estimated relative bioavailability was]` | 0.28 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f increased linearly with weight by]` | 0.639 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f increased linearly with weight by]` | not captured | 0.639 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | cetirizine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | levocetirizine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q18 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Hussein_2005:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hussein_2005:abstract'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hussein_2005:abstract'] |
| C5_dimension_Q352 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hussein_2005:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Melander_2025:review'] |
| C5_unit_missing_Q189 | fail | [mass] * [time] / [length] ** 3 | microg l(-1) h | not captured | not captured | ['Hussein_2005:abstract'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.28 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.6 L/h | not captured | not captured | ['Hussein_2005:abstract'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 3.08 L/h | not captured | not captured | ['Hussein_2005:abstract'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_levocetirizine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hussein_2005` / `Hussein_2005::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:17 UTC</sub>
