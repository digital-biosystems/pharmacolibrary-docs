<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;clonidine&quot;,&quot;href&quot;:&quot;drugs/drug_clonidine/&quot;},{&quot;label&quot;:&quot;Potts_2007 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clonidine_Tang2021_reference&quot;,&quot;label&quot;:&quot;Tang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clonidine/Clonidine_Tang2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clonidine — `Clonidine_Potts2007_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.562), gpt-oss:120b (not confirmed, agreement 0.158). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The clonidine record was rejected because a structural parameter failed a dimension check: the central volume of distribution V1 is reported as 62.5 l 70 kg(-1), a unit inconsistent with a volume of distribution.**

The record for clonidine in children was built from the paper's abstract alone, so reported summary statistics stood in for a fitted model. The dimension mismatch concerns the central volume of distribution, given as 62.5 l 70 kg(-1), which is not a valid volume dimension. Other parameters (clearance 14.6 L/h, intercompartmental clearance 157 l x h(-1) 70 kg(-1), peripheral volume 119 l 70 kg(-1), terminal half-life 25.7 weeks, absorption half-life 0.98 h, bioavailability 1) were extracted, but a second reader returned null for all of them and marked the dose compound and primary analyte as unknown. Extracted — clonidine: CL 14.6 L/h, V1 62.5 l 70 kg(-1), Q 157 l x h(-1) 70 kg(-1), V2 119 l 70 kg(-1), t1/2z 25.7 weeks, t1/2ka 0.98 h, Fab 1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:25:37.254006+00:00) predates the upstream re-run (2026-10-08 11:20:38.934452+00:00). Current validate status: `rejected`.

## Citation
Potts AL et al., Clonidine disposition in children; a po…, Paediatric anaesthesia (2007)
  ·  DOI: [10.1111/j.1460-9592.2007.02251.x](https://doi.org/10.1111/j.1460-9592.2007.02251.x)

## Model component
<dbs-pgx drug="clonidine" model-id="Clonidine_Potts2007_reference" status="rejected" stale="true" population="children (0-15 years) after cardiac surgery and other indications" measured-compound="clonidine" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** CLm,norm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| clearance (CL) | `Q22` · CL | 14.6 | L/h | 4.055555555555556e-06 | L/h | not captured | exact (1.0) | Potts_2007:abstract | — | not captured |
| central volume of distribution (V1) | `Q63` · V1 | 62.5 | l 70 kg(-1) | 4.375 | [l] / [kg] | not captured | boundary_compartment (0.9) | Potts_2007:abstract | — | not captured |
| intercompartment clearance (Q) | `Q30` · Q | 157 | l x h(-1) 70 kg(-1) | not captured | [l] / [[h] · [kg]] | not captured | llm_corrected (0.6) | Potts_2007:abstract | — | not captured |
| peripheral volume of distribution (V2) | `Q64` · V2 | 119 | l 70 kg(-1) | 8.33 | [l] / [kg] | not captured | boundary_compartment (0.9) | Potts_2007:abstract | — | not captured |
| Clearance at birth | `Q23` · CLb | 3.8 | l x h(-1) 70 kg(-1) | not captured | [l] / [[h] · [kg]] | not captured | llm_corrected (0.6) | Potts_2007:abstract | — | not captured |
| half-time | `Q57` · t1/2z | 25.7 | weeks | not captured | [weeks] | not captured | llm (0.6) | Potts_2007:abstract | — | not captured |
| adult rate | `Q375` · CLm,norm/F | 82 | % | not captured | [%] | not captured | llm (0.6) | Potts_2007:abstract | — | not captured |
| absorption half-life from the epidural space | `Q95` · t1/2ka | 0.98 | h | 3528.0 | [h] | not captured | llm_corrected (0.6) | Potts_2007:abstract | — | not captured |
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | Potts_2007:abstract | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'l x h(-1 )70 kg(-1)' (CL)
- unit_dimension_mismatch: 'intercompartment clearance (Q)' → Q30 (unit '[luminosity] / [length] ** 2 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'Clearance at birth' → Q23 (unit '[luminosity] / [length] ** 2 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'adult rate' → Q375 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'V1' → Q63 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q63 ('V1', value 123) — already have one for this compound
- unit_dimension_mismatch: 'V2' → Q64 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q64 ('V2', value 126) — already have one for this compound
- dropped duplicate Q95 ('absorption half-life from the rectum', value 0.26) — already have one for this compound
- implicit units: 'clearance (CL)' → L/h (from the popPK convention: 'No unit is stated in the provided text or captions. In population pharmacokinetics, total clearance (CL) is most commonl')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=clonidine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Potts_2007_metadata.yaml (12 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.562 (9/16 fields) | 7 |
| `gpt-oss:120b` | not confirmed | 0.158 (3/19 fields) | 16 |

<details><summary>23 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[absorption half-life from the epidural space]` | 0.98 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption half-life]` | not captured | 0.98 | only_one_extracted |
| `gpt-oss-120b` | `parameters[adult rate]` | 82 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance at birth]` | 3.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[relative bioavailability]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[absorption half-life from the epidural space]` | 0.98 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[absorption half-life]` | not captured | 0.98 | only_one_extracted |
| `gpt-oss:120b` | `parameters[central volume of distribution]` | 62.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[central volume of distribution]` | not captured | 62.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance]` | 14.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance]` | not captured | 14.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[f]` | 1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[half-time]` | 25.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[half-time]` | not captured | 25.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[intercompartment clearance]` | 157 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[intercompartment clearance]` | not captured | 157 | only_one_extracted |
| `gpt-oss:120b` | `parameters[peripheral volume of distribution]` | 119 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[peripheral volume of distribution]` | not captured | 119 | only_one_extracted |
| `gpt-oss:120b` | `parameters[relative bioavailability]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | clonidine | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | clonidine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Potts_2007:abstract'] |
| C5_dimension_Q23 | fail | [luminosity] / [length] ** 2 / [time] | l x h(-1) 70 kg(-1) | not captured | not captured | ['Potts_2007:abstract'] |
| C5_dimension_Q30 | fail | [luminosity] / [length] ** 2 / [time] | l x h(-1) 70 kg(-1) | not captured | not captured | ['Potts_2007:abstract'] |
| C5_dimension_Q375 | fail | dimensionless | % | not captured | not captured | ['Potts_2007:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Potts_2007:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Potts_2007:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Potts_2007:abstract'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['Potts_2007:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 14.6 L/h | not captured | not captured | ['Potts_2007:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.38e+03 L | not captured | not captured | ['Potts_2007:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 8.33e+03 L | not captured | not captured | ['Potts_2007:abstract'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_clonidine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Potts_2007` / `Potts_2007::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-08 11:20 UTC</sub>
