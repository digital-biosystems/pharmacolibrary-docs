<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;diroximel fumarate&quot;,&quot;href&quot;:&quot;drugs/drug_diroximel_fumarate/&quot;},{&quot;label&quot;:&quot;Kuchimanchi_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diroximel fumarate — `DiroximelFumarate_Kuchimanchi2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected because 2-hydroxyethyl succinimide has no path from the dose.**

The model structure lists 2-hydroxyethyl succinimide as a metabolite of diroximel fumarate but assigns it zero compartments. This configuration leaves the metabolite unlinked, making it an orphan that cannot be reached from the administered dose. Extracted — monomethyl fumarate: CLm/F 13.5 L/h, V 30.4 L, kabs 5.04 1/h; 2-hydroxyethyl succinimide: CL 3.24 L/h, kabs 1.49 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has diroximel fumarate, the second reading diroximel_fumarate; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `diroximel fumarate`, measured `monomethyl fumarate`.

## Citation
Kuchimanchi M et al., Development of a Population Pharmacokin…, Neurology and therapy (2022)
  ·  DOI: [10.1007/s40120-021-00316-6](https://doi.org/10.1007/s40120-021-00316-6)

## Model component
<dbs-pgx drug="diroximel fumarate" model-id="DiroximelFumarate_Kuchimanchi2022_reference" status="rejected" stale="false" population="healthy participants and patients with multiple sclerosis" measured-compound="monomethyl fumarate" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `Q351` · CLm/F | 13.5 | L/h | 3.75e-06 | L/h | 3.1 | exact (1.0) | Tab2:row1:col2, Tab2:row1:col3, Tab2:row1:col4, Tab2:row1:col5 | — | not captured |
| 2 | `Q61` · V | 30.4 | L | 0.0304 | L | 1.3 | exact (1.0) | Tab2:row2:col2, Tab2:row2:col3, Tab2:row2:col4, Tab2:row2:col5 | — | not captured |
| 3 | `Q49` · kabs | 5.04 | 1/h | 0.0014 | 1/h | 2.5 | exact (1.0) | Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col4, Tab2:row3:col5 | — | not captured |
| 6 | `Q22` · CL | 3.24 | L/h | 9.000000000000001e-07 | L/h | 2.4 | exact (1.0) | Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col4, Tab2:row4:col5 | — | not captured |
| 7 | `Q49` · kabs | 1.49 | 1/h | 0.0004138888888888889 | 1/h | 1.2 | exact (1.0) | Tab2:row5:col2, Tab2:row5:col3, Tab2:row5:col4, Tab2:row5:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: '4' routed out of structural estimates ('Residual variability')
- table section residual_error: '5' routed out of structural estimates ('Residual variability')
- table section residual_error: '29' routed out of structural estimates ('Residual variability')
- table section residual_error: '30' routed out of structural estimates ('Residual variability')
- table section residual_error: '31' routed out of structural estimates ('Residual variability')
- table section residual_error: '32' routed out of structural estimates ('Residual variability')
- table section residual_error: '33' routed out of structural estimates ('Residual variability')
- table section residual_error: '34' routed out of structural estimates ('Residual variability')
- table section iiv: '1' routed out of structural estimates ('IIV')
- table section iiv: '2' routed out of structural estimates ('IIV')
- table section iiv: '4' routed out of structural estimates ('IIV')
- table section iiv: '5' routed out of structural estimates ('IIV')
- table section iiv: '8' routed out of structural estimates ('IIV')
- dropped unlinked row (NIL): '8' — extend the ontology if this is a real PK parameter (source ['Tab2:row6:col2'])
- dropped unlinked row (NIL): '9' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col2', 'Tab2:row7:col3', 'Tab2:row7:col4', 'Tab2:row7:col5'])
- dropped unlinked row (NIL): '10' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col2', 'Tab2:row8:col3', 'Tab2:row8:col4', 'Tab2:row8:col5'])
- dropped unlinked row (NIL): '15' — extend the ontology if this is a real PK parameter (source ['Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col4', 'Tab2:row13:col5'])
- dropped unlinked row (NIL): '17' — extend the ontology if this is a real PK parameter (source ['Tab2:row15:col2'])
- dropped unlinked row (NIL): '23' — extend the ontology if this is a real PK parameter (source ['Tab2:row21:col2', 'Tab2:row21:col3', 'Tab2:row21:col4', 'Tab2:row21:col5'])
- dropped unlinked row (NIL): '24' — extend the ontology if this is a real PK parameter (source ['Tab2:row22:col2'])
- dropped unlinked row (NIL): '25' — extend the ontology if this is a real PK parameter (source ['Tab2:row23:col2'])
- dropped unlinked row (NIL): '26' — extend the ontology if this is a real PK parameter (source ['Tab2:row24:col2', 'Tab2:row24:col3', 'Tab2:row24:col4', 'Tab2:row24:col5'])
- dropped unlinked row (NIL): '27' — extend the ontology if this is a real PK parameter (source ['Tab2:row25:col2', 'Tab2:row25:col3', 'Tab2:row25:col4', 'Tab2:row25:col5'])
- dropped unlinked row (NIL): '28' — extend the ontology if this is a real PK parameter (source ['Tab2:row26:col2', 'Tab2:row26:col3', 'Tab2:row26:col4', 'Tab2:row26:col5'])
- dropped value-less row: '35'
- dropped value-less row: '36'
- implicit units: '1' → L/h (from the paper text: "The text states: 'Estimated MMF clearance (CLMMF), volume of distribution, and absorption rate constant (Ka) were 13.5 L")
- implicit units: '2' → L (from the paper text: "The text states: 'Estimated MMF clearance (CLMMF), volume of distribution, and absorption rate constant (Ka) were 13.5 L")
- implicit units: '3' → 1/h (from the paper text: "The text states: 'Estimated MMF clearance (CLMMF), volume of distribution, and absorption rate constant (Ka) were 13.5 L")
- implicit units: '6' → L/h (from the paper text: "The text states: 'Estimated MMF clearance (CLMMF)... were 13.5 L/h...'. Parameter 4 (3.24) is a clearance parameter (lab")
- implicit units: '7' → 1/h (from the popPK convention: 'The parameter is an absorption rate constant (kabs). The text provides the unit for the MMF absorption rate constant as ')
- metabolite monomethyl fumarate: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: '2' Q63→Q61 for monomethyl fumarate — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=monomethyl fumarate
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles: 11 per-group rows of monomethyl fumarate covariate_effect but 0 reference group(s) — kept as printed
- row roles: 3 per-group rows of 2-hydroxyethyl succinimide covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 30 linked by role; re-tagged parent→monomethyl fumarate ×79, parent→2-hydroxyethyl succinimide ×24

**Extraction notes:**
- unparsed cell Tab2:row3:col6 = 'h−1'
- unparsed cell Tab2:row4:col6 = 'h−1'
- unparsed cell Tab2:row6:col1 = 'F4'
- unparsed cell Tab2:row7:col1 = 'F1'
- unparsed cell Tab2:row15:col1 = 'LOW on F1'
- unparsed cell Tab2:row22:col1 = 'HES ALAG4 PM dosing'
- unparsed cell Tab2:row23:col1 = 'HES ALAG4 LOW'
- unparsed cell Tab2:row27:col2 = '− 0.284'
- unparsed cell Tab2:row27:col5 = '(− 0.363 to − 0.204)'
- unparsed cell Tab2:row28:col2 = '− 0.122'
- unparsed cell Tab2:row28:col5 = '(− 0.180 to − 0.0642)'
- unparsed cell Tab2:row39:col1 = 'ETA1–CLMMF'
- unparsed cell Tab2:row40:col1 = 'ETA2–Vc'
- unparsed cell Tab2:row41:col1 = 'ETA4–CLHES'
- unparsed cell Tab2:row42:col1 = 'ETA4–CLHES'
- unparsed cell Tab2:row43:col1 = 'ETA8–KaHES'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8-27b` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.0 (0/17 fields) | 17 |

<details><summary>17 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['diroximel fumarate', 'monomethyl fumarate', 'metabolism'], ['diroximel fumarate', '2-hydroxyethyl succinimide', 'metabolism']] | [['diroximel_fumarate', 'monomethyl_fumarate', 'metabolism'], ['diroximel_fumarate', '2-hydroxyethyl_succinimide', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[15]` | not captured | 0.843 | only_one_extracted |
| `gpt-oss-120b` | `parameters[1]` | 13.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[1]` | not captured | 13.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[2]` | not captured | 30.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[2]` | 30.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[3]` | 5.04 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[3]` | not captured | 5.04 | only_one_extracted |
| `gpt-oss-120b` | `parameters[6]` | 3.24 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[6]` | not captured | 3.24 | only_one_extracted |
| `gpt-oss-120b` | `parameters[7]` | 1.49 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[7]` | not captured | 1.49 | only_one_extracted |
| `gpt-oss-120b` | `parameters[8]` | not captured | 0.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[9]` | not captured | 0.162 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | diroximel fumarate | diroximel_fumarate | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | monomethyl fumarate | monomethyl_fumarate, 2-hydroxyethyl succinimide | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:row4:col5'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row1:col2', 'Tab2:row1:col3', 'Tab2:row1:col4', 'Tab2:row1:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4', 'Tab2:row5:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4', 'Tab2:row2:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.24 L/h | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:row4:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 30.4 L | not captured | not captured | ['Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4', 'Tab2:row2:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_diroximel_fumarate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kuchimanchi_2022` / `Kuchimanchi_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:49 UTC</sub>
