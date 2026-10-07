<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;perindopril&quot;,&quot;href&quot;:&quot;drugs/drug_perindopril/&quot;},{&quot;label&quot;:&quot;Parker_2005 \u00b7 model_1&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# perindopril — `Perindopril_Parker2005_model_1`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The perindoprilat record was rejected because the metabolite perindoprilat is unlinked from the perindopril dose, and its parameters carry wrong units (V1 in hours, CLu in years).**

The model lists perindoprilat as a metabolite formed from perindopril at the central compartment with 2 compartments, but the check found no path from the dose, so the metabolite is unlinked. The central volume V1 is reported as 45 h and the unbound clearance CLu as 380 years, units incompatible with a volume and a clearance; a reported unit also could not be converted to SI. The two readers disagreed on the apparent unbound clearance (59 versus none) and apparent volume of distribution (920 versus none), and the second reader additionally read a dose of 3.1 where this record has none. Extracted — perindoprilat: Bmax 1.5 g L -1, V 26 L, V1 45 h, V2 22 L, CLu 380 years.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of c u50: this record has none, the second reading 0.28; it also differs on 9 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:30:10.327299+00:00) predates the upstream re-run (2026-10-07 06:55:47.358088+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `perindopril`, measured `perindoprilat`.

## Citation
Parker E et al., The pharmacokinetics of perindoprilat i…, European journal of pharmac… (2005)
  ·  DOI: [10.1016/j.ejps.2005.05.006](https://doi.org/10.1016/j.ejps.2005.05.006)

## Model component
<dbs-pgx drug="perindopril" model-id="Perindopril_Parker2005_model_1" status="rejected" stale="true" population="normal volunteers and patients" measured-compound="perindoprilat" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| B max (g L -1 ) | `Q332` · Bmax | 1.5 | g L -1 | not captured | [g] / [l] | not captured | space_fold (0.95) | tab_0:row0:col2, Parker_2005_table_2:row4:col2 | — | not captured |
| V 1 (L) | `Q61` · V | 6.4 | L | 0.0064 | [l] | not captured | exact (1.0) | Parker_2005_table_2:row1:col2 | — | not captured |
| CL u (L h -1 ) | `Q351` · CLm/F | 7.0 | L h -1 | 1.9444444444444444e-06 | [l] / [h] | not captured | exact (1.0) | Parker_2005_table_2:row2:col2 | — | not captured |
| k 12 (h -1 ) | `Q30` · Q | 1.3 | h -1 | not captured | [1] / [h] | not captured | exact (1.0) | Parker_2005_table_2:row5:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'C u50 (g L -1 )' — extend the ontology if this is a real PK parameter (source ['tab_0:row1:col2', 'Parker_2005_table_2:row3:col2'])
- dropped unlinked row (NIL): 'SS' — extend the ontology if this is a real PK parameter (source ['tab_0:row3:col2'])
- dropped unlinked row (NIL): 'd.f.' — extend the ontology if this is a real PK parameter (source ['tab_0:row4:col2'])
- unit_dimension_mismatch: 'k 12 (h -1 )' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'k 21 (h -1 )' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('k 21 (h -1 )', value '1.9') — already have one for this compound
- dropped unlinked row (NIL): 'CV ε' — extend the ontology if this is a real PK parameter (source ['Parker_2005_table_2:row7:col2', 'Parker_2005_table_2:row7:col4'])
- routed 'CV η' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- metabolite perindoprilat: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'V 1 (L)' Q63→Q61 for perindoprilat — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=perindoprilat
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'model 1' subgroup of Parker_2005 (paper reports 4 populations: model 1, model 2, multiple dose, single dose)
- row roles: 2 per-group rows of perindoprilat central_volume but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of perindoprilat clearance but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 27/27 row label(s) assigned, 23 linked by role
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table tab_0: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell tab_0:row0:col1 = 'B max (g L -1 )'
- unparsed cell tab_0:row1:col1 = 'C u50 (g L -1 )'
- unparsed cell Parker_2005_table_2:row2:col1 = '5 .9 (0.46)'
- unparsed cell Parker_2005_table_2:row5:col1 = '1 .3 (0.24)'
- unparsed cell Parker_2005_table_2:row6:col1 = '1 .6 (0.24)'
- companion parameter table 2 transcribed (21 record(s))
- companion parameter table 3 transcribed (24 record(s))
- companion parameter table 4 transcribed (12 record(s))
- LLM selected parameter table(s) 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.333 (5/15 fields) | 10 |

<details><summary>10 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[c u50]` | not captured | 0.28 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl u /f]` | not captured | 80 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl u]` | 7.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k 12]` | 1.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v 1]` | 6.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v/f]` | not captured | 920 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution]` | not captured | 26 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θ clu b]` | not captured | 10 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θ v1 a]` | not captured | 54 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θ v2]` | not captured | 87 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q30 | fail | 1 / [time] | h -1 | not captured | not captured | ['Parker_2005_table_2:row5:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Parker_2005_table_2:row2:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Parker_2005_table_2:row1:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.4 L | not captured | not captured | ['Parker_2005_table_2:row1:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_perindopril/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Parker_2005` / `Parker_2005::model_1`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:55 UTC</sub>
