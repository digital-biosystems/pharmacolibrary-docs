<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;propacetamol&quot;,&quot;href&quot;:&quot;drugs/drug_propacetamol/&quot;},{&quot;label&quot;:&quot;Anderson_2005 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propacetamol_Prins2008_reference&quot;,&quot;label&quot;:&quot;Prins_2008_reference&quot;,&quot;href&quot;:&quot;drugs/drug_propacetamol/Propacetamol_Prins2008_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Propacetamol_Allegaert2004_reference&quot;,&quot;label&quot;:&quot;Allegaert_2004_reference&quot;,&quot;href&quot;:&quot;drugs/drug_propacetamol/Propacetamol_Allegaert2004_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Propacetamol_Anderson2005_reference&quot;,&quot;label&quot;:&quot;Anderson_2005_reference&quot;,&quot;href&quot;:&quot;drugs/drug_propacetamol/Propacetamol_Anderson2005_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Propacetamol_Krekels2015_reference&quot;,&quot;label&quot;:&quot;Krekels_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_propacetamol/Propacetamol_Krekels2015_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# propacetamol — `Propacetamol_Anderson2005_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** C7 apparent-parameter coherence violated (double correction); C5 dimension mismatch on a structural parameter.
**Second reading:** `gpt-oss:120b` read this paper differently on `model.links` ([] vs [['propacetamol', 'paracetamol', 'hydrolysis']]) and 9 more field(s) — a structural parameter, so the record is disputed.
**How to address:** not a curation fix — the pipeline is the limit here (fulltext: the record was built from the abstract alone, so reported summary statistics stood in for a fitted model).
<sub>owner: **curator**</sub>

> **Dose compound ≠ measured compound:** dosed `propacetamol`, measured `paracetamol`.

## Citation
Anderson BJ; Pons G; Autret-Leca E; Allegaert K; Boccard E et al. (2005). Paediatric anaesthesia 15
  ·  DOI: [10.1111/j.1460-9592.2005.01455.x](https://doi.org/10.1111/j.1460-9592.2005.01455.x)

## Model component
<dbs-pgx drug="propacetamol" model-id="Propacetamol_Anderson2005_reference" status="rejected" stale="false" population="children" measured-compound="paracetamol" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, Q2/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| central volume (V2/F(oral)) | `Q82` · V2/F | 24 | l x 70 kg(-1) | not captured | [l] / [kg] | not captured | llm_corrected (0.6) | Anderson_2005:abstract | — | not captured |
| peripheral volume of distribution (V3/F(oral)) | `Q78` · V3/F | 30 | l x 70 kg(-1) | not captured | [l] / [kg] | not captured | llm_corrected (0.6) | Anderson_2005:abstract | — | not captured |
| clearance (CL/F(oral)) | `Q27` · CL/F | 16 | l x h(-1) x 70 kg(-1) | not captured | [l] / [[h] · [kg]] | not captured | llm_corrected (0.6) | Anderson_2005:abstract | — | not captured |
| intercompartment clearance (Q/F(oral)) | `Q80` · Q2/F | 55 | l x h(-1) x 70 kg(-1) | not captured | [l] / [[h] · [kg]] | not captured | llm_corrected (0.6) | Anderson_2005:abstract | — | not captured |
| Clearance | `Q22` · CL | 1.87 | l x h(-1) 70 kg(-1) | not captured | [l] / [[h] · [kg]] | not captured | exact (1.0) | Anderson_2005:abstract, Anderson_2005:abstract | — | not captured |
| Peripheral volume of distribution | `Q64` · V2 | 45.0 | l x 70 kg(-1) | not captured | [l] / [kg] | not captured | llm_corrected (0.6) | Anderson_2005:abstract, Anderson_2005:abstract | — | not captured |
| relative bioavailability of intravenous propacetamol compared with an oral elixir | `Q87` · Frel | 0.5 | F | not captured | not captured | not captured | llm_confirmed (0.6) | Anderson_2005:abstract | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'central volume (V2/F(oral))' → Q82 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'peripheral volume of distribution (V3/F(oral))' → Q78 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- unit_dimension_unknown: 'l x h(-1) x 70 kg(-1)' (CL/F)
- unit_dimension_unknown: 'l x h(-1) x 70 kg(-1)' (Q2/F)
- unit_dimension_mismatch: 'Clearance' → Q22 (unit '[luminosity] / [length] ** 2 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'Peripheral volume of distribution' → Q64 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'target concentration' — extend the ontology if this is a real PK parameter (source ['Anderson_2005:abstract'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=paracetamol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'paracetamol', not propacetamol — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Anderson_2005_metadata.yaml (12 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.167 (2/12 fields) | 10 |

<details><summary>10 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.bioavailability.theta` | 0.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `model.links` | [] | [['propacetamol', 'paracetamol', 'hydrolysis']] | mismatch |
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[central volume (v2/f(oral))]` | 24 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance (cl/f(oral))]` | 16 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance]` | 1.87 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[intercompartment clearance (q/f(oral))]` | 55 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[peripheral volume of distribution (v3/f(oral))]` | 30 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[peripheral volume of distribution]` | 45.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[relative bioavailability of intravenous propacetamol compared with an oral elixir]` | 0.5 | not captured | only_one_extracted |

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
| C5_dimension_Q22 | fail | [luminosity] / [length] ** 2 / [time] | l x h(-1) 70 kg(-1) | not captured | not captured | ['Anderson_2005:abstract', 'Anderson_2005:abstract'] |
| C5_dimension_Q64 | fail | [luminosity] / [length] ** 2 | l x 70 kg(-1) | not captured | not captured | ['Anderson_2005:abstract', 'Anderson_2005:abstract'] |
| C5_dimension_Q78 | fail | [luminosity] / [length] ** 2 | l x 70 kg(-1) | not captured | not captured | ['Anderson_2005:abstract'] |
| C5_dimension_Q82 | fail | [luminosity] / [length] ** 2 | l x 70 kg(-1) | not captured | not captured | ['Anderson_2005:abstract'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | l x h(-1) x 70 kg(-1) | not captured | not captured | ['Anderson_2005:abstract'] |
| C5_unit_missing_Q80 | fail | [length] ** 3 / [time] | l x h(-1) x 70 kg(-1) | not captured | not captured | ['Anderson_2005:abstract'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.5 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_propacetamol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Anderson_2005` / `Anderson_2005::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-21 16:55 UTC</sub>
