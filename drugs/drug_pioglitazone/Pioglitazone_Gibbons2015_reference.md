<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;pioglitazone&quot;,&quot;href&quot;:&quot;drugs/drug_pioglitazone/&quot;},{&quot;label&quot;:&quot;Gibbons_2015 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pioglitazone — `Pioglitazone_Gibbons2015_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has enzalutamide, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Gibbons JA et al., Pharmacokinetic Drug Interaction Studie…, Clinical pharmacokinetics (2015)
  ·  DOI: [10.1007/s40262-015-0283-1](https://doi.org/10.1007/s40262-015-0283-1)

## Model component
<dbs-pgx drug="pioglitazone" model-id="Pioglitazone_Gibbons2015_reference" status="rejected" stale="false" population="healthy male subjects" measured-compound="enzalutamide" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC∞ (ng·h/mL) | `Q17` · AUC∞ | 30.0 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Tab6:row3:col1, Tab6:row3:col2, Tab6:row6:col1, Tab6:row6:col2, Tab6:row9:col1, Tab6:row9:col2, Tab6:row12:col1, Tab6:row12:col2, Tab6:row15:col1, Tab6:row15:col2, Gibbons_2015_table_5:row2:col1, Gibbons_2015_table_5:row2:col2, Gibbons_2015_table_5:row5:col1, Gibbons_2015_table_5:row5:col2, Gibbons_2015_table_5:row8:col1, Gibbons_2015_table_5:row8:col2, Gibbons_2015_table_5:row11:col1, Gibbons_2015_table_5:row11:col2 | — | not captured |
| C max (ng/mL) | `Q32` · Cmax | 9.45 | ng/mL | not captured | [ng] / [ml] | not captured | space_fold (0.95) | Tab6:row4:col1, Tab6:row4:col2, Tab6:row7:col1, Tab6:row7:col2, Tab6:row10:col1, Tab6:row10:col2, Tab6:row13:col1, Tab6:row13:col2, Tab6:row16:col1, Tab6:row16:col2, Gibbons_2015_table_5:row3:col1, Gibbons_2015_table_5:row3:col2, Gibbons_2015_table_5:row6:col1, Gibbons_2015_table_5:row6:col2, Gibbons_2015_table_5:row9:col1, Gibbons_2015_table_5:row9:col2, Gibbons_2015_table_5:row12:col1, Gibbons_2015_table_5:row12:col2 | — | not captured |
| C trough (μg/mL)a | `Q37` · Ctrough | 12.0 | μg/mL | not captured | μg/mL | not captured | llm_confirmed (0.6) | Gibbons_2015_table_4:row0:col1, Gibbons_2015_table_4:row0:col2, Gibbons_2015_table_4:row0:col3, Gibbons_2015_table_4:row0:col4 | — | not captured |
| AUCτ (μg·h/mL)a | `Q19` · AUCt | 322 | μg·h/mL | not captured | μg·h/mL | not captured | llm_confirmed (0.6) | Gibbons_2015_table_4:row3:col1, Gibbons_2015_table_4:row3:col2, Gibbons_2015_table_4:row3:col3, Gibbons_2015_table_4:row3:col4 | — | not captured |
| CL/F (L/h)a | `Q27` · CL/F | 0.52 | L/h | 1.4444444444444445e-07 | L/h | not captured | llm_confirmed (0.6) | Gibbons_2015_table_4:row4:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'CYP substrate metabolite and exposure parameter'
- dropped duplicate Q32 ('C max (μg/mL)a', value '16.6') — already have one for this compound
- implicit units: 'C trough (μg/mL)a' → μg/mL (from the paper text: "The parameter label in the input list explicitly includes the unit: 'C trough (μg/mL)a'.")
- implicit units: 'AUCτ (μg·h/mL)a' → μg·h/mL (from the paper text: "The parameter label in the input list explicitly includes the unit: 'AUCτ (μg·h/mL)a'.")
- implicit units: 'CL/F (L/h)a' → L/h (from the paper text: "The parameter label in the input list explicitly includes the unit: 'CL/F (L/h)a'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=enzalutamide
- topology: 3 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 7/7 row label(s) assigned, 1 linked by role; re-tagged N-desmethyl enzalutamide→parent ×6, carboxylic acid metabolite→parent ×3
- molar mass: no plausible PubChem entry for 'carboxylic acid metabolite' ('carboxylic acid metabolite') — left in mass units
- molar mass: none found for 'carboxylic acid metabolite' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'enzalutamide', not pioglitazone — the review values are the parent's

**Extraction notes:**
- unparsed cell Tab6:row3:col3 = '0.63 (0.52–0.77)'
- unparsed cell Tab6:row4:col3 = '0.60 (0.52–0.70)'
- unparsed cell Tab6:row6:col3 = '0.47 (0.35–0.63)'
- unparsed cell Tab6:row7:col3 = '0.83 (0.71–0.99)'
- unparsed cell Tab6:row9:col3 = '0.55 (0.51–0.58)'
- unparsed cell Tab6:row10:col3 = '0.99 (0.93–1.05)'
- unparsed cell Tab6:row12:col3 = '0.46 (0.39–0.53)'
- unparsed cell Tab6:row13:col3 = '0.64 (0.50–0.83)'
- unparsed cell Tab6:row15:col3 = '0.24 (0.20–0.28)'
- unparsed cell Tab6:row16:col3 = '0.29 (0.24–0.35)'
- transposed table Gibbons_2015_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 4 transcribed (13 record(s))
- unparsed cell Gibbons_2015_table_5:row2:col3 = '1.20 (0.98–1.47)'
- unparsed cell Gibbons_2015_table_5:row3:col3 = '0.82 (0.67–1.01)'
- unparsed cell Gibbons_2015_table_5:row5:col3 = '0.44 (0.41–0.48)'
- unparsed cell Gibbons_2015_table_5:row6:col3 = '0.93 (0.86–0.99)'
- unparsed cell Gibbons_2015_table_5:row8:col3 = '0.30 (0.24–0.36)'
- unparsed cell Gibbons_2015_table_5:row9:col3 = '0.38 (0.26–0.54)'
- unparsed cell Gibbons_2015_table_5:row11:col3 = '0.14 (0.12–0.17)'
- unparsed cell Gibbons_2015_table_5:row12:col3 = '0.23 (0.20–0.27)'
- companion parameter table 5 transcribed (16 record(s))
- LLM selected parameter table(s) 4, 5, 6

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.6 (6/10 fields) | 4 |

<details><summary>4 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['enzalutamide', 'n-desmethyl enzalutamide', 'metabolism'], ['enzalutamide', 'carboxylic acid metabolite', 'metabolism'], ['n-desmethyl enzalutamide', 'carboxylic acid metabolite', 'metabolism']] | [['enalutamide', 'n-desmethyl enzalutamide', 'metabolism'], ['enalutamide', 'carboxylic acid metabolite', 'metabolism'], ['pioglitazone', 'hydroxy-pioglitazone', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[aucτ (ug h/ml)a].parameter_id` | Q19 | Q88 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | enzalutamide | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | enzalutamide | unknown | mismatch |

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
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tab6:row3:col1', 'Tab6:row3:col2', 'Tab6:row6:col1', 'Tab6:row6:col2', 'Tab6:row9:col1', 'Tab6:row9:col2', 'Tab6:row12:col1', 'Tab6:row12:col2', 'Tab6:row15:col1', 'Tab6:row15:col2', 'Gibbons_2015_table_5:row2:col1', 'Gibbons_2015_table_5:row2:col2', 'Gibbons_2015_table_5:row5:col1', 'Gibbons_2015_table_5:row5:col2', 'Gibbons_2015_table_5:row8:col1', 'Gibbons_2015_table_5:row8:col2', 'Gibbons_2015_table_5:row11:col1', 'Gibbons_2015_table_5:row11:col2'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Gibbons_2015_table_4:row3:col1', 'Gibbons_2015_table_4:row3:col2', 'Gibbons_2015_table_4:row3:col3', 'Gibbons_2015_table_4:row3:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Gibbons_2015_table_4:row4:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab6:row4:col1', 'Tab6:row4:col2', 'Tab6:row7:col1', 'Tab6:row7:col2', 'Tab6:row10:col1', 'Tab6:row10:col2', 'Tab6:row13:col1', 'Tab6:row13:col2', 'Tab6:row16:col1', 'Tab6:row16:col2', 'Gibbons_2015_table_5:row3:col1', 'Gibbons_2015_table_5:row3:col2', 'Gibbons_2015_table_5:row6:col1', 'Gibbons_2015_table_5:row6:col2', 'Gibbons_2015_table_5:row9:col1', 'Gibbons_2015_table_5:row9:col2', 'Gibbons_2015_table_5:row12:col1', 'Gibbons_2015_table_5:row12:col2'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Gibbons_2015_table_4:row0:col1', 'Gibbons_2015_table_4:row0:col2', 'Gibbons_2015_table_4:row0:col3', 'Gibbons_2015_table_4:row0:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.52 L/h | not captured | not captured | ['Gibbons_2015_table_4:row4:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_pioglitazone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gibbons_2015` / `Gibbons_2015::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-30 11:52 UTC</sub>
