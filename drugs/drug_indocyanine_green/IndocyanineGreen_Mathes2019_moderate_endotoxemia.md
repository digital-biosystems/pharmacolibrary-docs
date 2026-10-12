<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;indocyanine green&quot;,&quot;href&quot;:&quot;drugs/drug_indocyanine_green/&quot;},{&quot;label&quot;:&quot;Mathes_2019 \u00b7 moderate_endotoxemia&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;IndocyanineGreen_Han2025_reference&quot;,&quot;label&quot;:&quot;Han_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_indocyanine_green/IndocyanineGreen_Han2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# indocyanine green — `IndocyanineGreen_Mathes2019_moderate_endotoxemia`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.917). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The indocyanine green record was rejected because the reported clearance of 387.0 mL/min/m2, normalized to body surface area, could not be expressed in standard units and was judged physiologically implausible, and the 3-compartment structure contains an unreachable compartment.**

The ICG clearance of 387.0 mL/min/m2 is normalized to a standard body size rather than reported as absolute clearance for the animal, so no SI value could be derived and the magnitude was flagged as outside the physiological window with a suspected unit or scale extraction error. The structural check also failed, indicating a compartment in the 3-compartment topology with no path from the dose. The remaining parameters (V 32.6 mL, V1 13.3 mL, V2 93.3 mL, kel 0.22 1/h, k12 0.06 1/h, k21 0.009 1/h) were extracted, but the record was rejected on the clearance and structure grounds. Extracted — indocyanine green: V 32.6 mL, CLnorm 387 mL/min/m2, V1 13.3 mL, V2 93.3 mL, kel 0.22 1/h, k12 0.06 1/h, k21 0.009 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[calculated icg clearance].parameter_id`: this record has Q354, the second reading Q22. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Mathes A et al., Plasma Disappearance Rate of Indocyanin…, Diagnostics (Basel, Switzer… (2019)
  ·  DOI: [10.3390/diagnostics9030108](https://doi.org/10.3390/diagnostics9030108)

<div class="pk-model-meta" hidden drug="indocyanine green" model-id="IndocyanineGreen_Mathes2019_moderate_endotoxemia" status="rejected" stale="false" population="anesthetized Sprague-Dawley rats with hemorrhagic shock or endotoxemia" measured-compound="indocyanine green" parameterization="mechanistic" topology="3C"></div>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ICG Distribution Volume (mL) | `Q61` · V | 32.6 | mL | 3.26e-05 | [ml] | not captured | llm_confirmed (0.6) | diagnostics-09-00108-t002:row2:col3 | — | not captured |
| Calculated ICG Clearance (mL/min/m2) | `Q354` · CLnorm | 387.0 | mL/min/m2 | not captured | [ml] / [[min] · [m2]] | not captured | llm_corrected (0.6) | diagnostics-09-00108-t002:row3:col3 | — | not captured |
| ICG Distribution Volume 1 (mL) | `Q63` · V1 | 13.3 | mL | 1.33e-05 | [ml] | not captured | llm_corrected (0.6) | diagnostics-09-00108-t002:row5:col3 | — | not captured |
| ICG Distribution Volume 2 (mL) | `Q64` · V2 | 93.3 | mL | 9.329999999999999e-05 | [ml] | not captured | llm_corrected (0.6) | diagnostics-09-00108-t002:row7:col3 | — | not captured |
| Micro-rate constant k10 | `Q47` · kel | 0.22 | 1/h | 6.111111111111111e-05 | 1/h | not captured | llm_confirmed (0.6) | diagnostics-09-00108-t002:row9:col3 | — | not captured |
| Micro-rate constant k12 | `Q301` · k12 | 0.06 | 1/h | 1.6666666666666667e-05 | 1/h | not captured | llm_confirmed (0.6) | diagnostics-09-00108-t002:row10:col3 | — | not captured |
| Micro-rate constant k21 | `Q302` · k21 | 0.009 | 1/h | 2.4999999999999998e-06 | 1/h | not captured | llm_confirmed (0.6) | diagnostics-09-00108-t002:row11:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'mL/min/m2' (CLnorm)
- dropped duplicate Q354 ('Calculated ICG Clearance 1 (mL/min/m2)', value '305.0') — already have one for this compound
- dropped duplicate Q354 ('Calculated ICG Clearance 2 (mL/min/m2)', value '90.0') — already have one for this compound
- dropped duplicate Q63 ('ICG Distribution Volume 1 [mL]', value '12.8') — already have one for this compound
- dropped duplicate Q354 ('Calculated ICG Clearance 1 [mL/min/m2]', value '300.0') — already have one for this compound
- dropped duplicate Q64 ('ICG Distribution Volume 2 [mL]', value '7.89') — already have one for this compound
- dropped duplicate Q354 ('Calculated ICG Clearance 2 [mL/min/m2]', value '421.0') — already have one for this compound
- dropped value-less row: 'ICG'
- dropped value-less row: 'LPS'
- implicit units: 'Calculated ICG Clearance (mL/min/m2)' — the LLM proposed 'mL/min/m2', whose dimension does not fit Q354; left unset
- implicit units: 'Micro-rate constant k10' → 1/h (from the popPK convention: 'k10 = CL1/V1 is a first-order rate constant; paper gives no unit, so standard unit 1/h used')
- implicit units: 'Micro-rate constant k12' → 1/h (from the popPK convention: 'k12 is a first-order transfer rate constant; no unit stated in paper, convention 1/h')
- implicit units: 'Micro-rate constant k21' → 1/h (from the popPK convention: 'k21 is a first-order transfer rate constant; no unit stated in paper, convention 1/h')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=indocyanine green
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'moderate endotoxemia' subgroup of Mathes_2019 (paper reports 4 populations: hemorrhage, moderate endotoxemia, severe endotoxemia, sham)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `glm-5.3-flash` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.917 (11/12 fields) | 1 |

<details><summary>1 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[calculated icg clearance].parameter_id` | Q354 | Q22 | mismatch |

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
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['diagnostics-09-00108-t002:row10:col3'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['diagnostics-09-00108-t002:row11:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['diagnostics-09-00108-t002:row9:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['diagnostics-09-00108-t002:row2:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['diagnostics-09-00108-t002:row5:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['diagnostics-09-00108-t002:row7:col3'] |
| C5_unit_missing_Q354 | fail | [length] ** 3 / [time] | mL/min/m2 | not captured | not captured | ['diagnostics-09-00108-t002:row3:col3'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0326 L | not captured | not captured | ['diagnostics-09-00108-t002:row2:col3'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.0133 L | not captured | not captured | ['diagnostics-09-00108-t002:row5:col3'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.0933 L | not captured | not captured | ['diagnostics-09-00108-t002:row7:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_indocyanine_green/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Mathes_2019` / `Mathes_2019::moderate_endotoxemia`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:11 UTC</sub>
