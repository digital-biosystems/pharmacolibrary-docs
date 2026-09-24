<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;duloxetine&quot;,&quot;href&quot;:&quot;drugs/drug_duloxetine/&quot;},{&quot;label&quot;:&quot;Ngo_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Duloxetine_Skinner2004_reference&quot;,&quot;label&quot;:&quot;Skinner_2004_reference&quot;,&quot;href&quot;:&quot;drugs/drug_duloxetine/Duloxetine_Skinner2004_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Duloxetine_Ngo2020_reference&quot;,&quot;label&quot;:&quot;Ngo_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_duloxetine/Duloxetine_Ngo2020_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# duloxetine — `Duloxetine_Ngo2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.64). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** every check the reviewer could run passed
**Second reading:** `gpt-oss:120b` read this paper differently on `parameters[k a].parameter_id` (Q95 vs Q49) and 8 more field(s) — a structural parameter, so the record is disputed.
**How to address:** Confirm the model card and promote to 'curated' if it should be an exemplar.
<sub>owner: **curator**</sub>

## Citation
Ngo TL; Lee CH; Han N; Back HM; Rhee SJ; Noh K; et al. et al. (2020). International journal of molecular sciences 21
  ·  DOI: [10.3390/ijms21051862](https://doi.org/10.3390/ijms21051862)

## Model component
<dbs-pgx drug="duloxetine" model-id="Duloxetine_Ngo2020_reference" status="rejected" stale="false" population="rats and extrapolated humans" measured-compound="duloxetine" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| K a | `Q95` · t1/2ka | 1.45 | not captured | not captured | not captured | 1.35 | llm (0.5) | tab_1:row1:col1, tab_1:row1:col2, tab_1:row1:col3, tab_1:row1:col5, tab_1:row1:col6, tab_1:row1:col8 | — | not captured |
| Emax_F pm | `Q320` · Emax | 0.844 | not captured | not captured | not captured | 0.147 | llm (0.5) | tab_1:row2:col2, tab_1:row2:col3, tab_1:row2:col5, tab_1:row2:col6, tab_1:row2:col8 | — | not captured |
| IC50_F pm | `Q322` · IC50 | 5478 | not captured | not captured | not captured | 538 | llm (0.5) | tab_1:row3:col2, tab_1:row3:col3, tab_1:row3:col5, tab_1:row3:col6, tab_1:row3:col8 | — | not captured |
| F pm | `Q45` · fm | 0.746 | not captured | not captured | not captured | 0.589 | llm (0.5) | tab_1:row4:col2, tab_1:row4:col3, tab_1:row4:col5, tab_1:row4:col6, tab_1:row4:col8 | — | not captured |
| CL p | `Q22` · CL | 2.80 | not captured | not captured | not captured | 1.97 | boundary (0.8) | tab_1:row5:col2, tab_1:row5:col3, tab_1:row5:col5, tab_1:row5:col6, tab_1:row5:col8 | — | 10.2 (14.0% RSE) |
| V p | `Q61` · V | 19.6 | not captured | not captured | not captured | 14.6 | llm (0.5) | tab_1:row6:col2, tab_1:row6:col3, tab_1:row6:col5, tab_1:row6:col6, tab_1:row6:col8 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| absorption rate constant | Q49 | not captured | exact |
| elimination rate constant | Q47 | not captured | exact |
| apparent oral clearance | Q27 | not captured | exact |
| volume of distribution | Q61 | not captured | exact |
| apparent volume of distribution | Q76 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Parameters'
- dropped duplicate Q22 ('Emax_CL pm', value '1.00') — already have one for this compound
- dropped duplicate Q322 ('IC50_CL pm', value '596') — already have one for this compound
- dropped duplicate Q22 ('CL pm /F p', value '1.77') — already have one for this compound
- dropped duplicate Q22 ('CL m /F m', value '16.0') — already have one for this compound
- dropped unlinked row (NIL): 'V m /F m' — extend the ontology if this is a real PK parameter (source ['tab_1:row11:col2', 'tab_1:row11:col3', 'tab_1:row11:col5', 'tab_1:row11:col6', 'tab_1:row11:col8'])
- dropped unlinked row (NIL): 'Prop_p' — extend the ontology if this is a real PK parameter (source ['tab_1:row15:col2', 'tab_1:row15:col3', 'tab_1:row15:col5', 'tab_1:row15:col6', 'tab_1:row15:col8'])
- dropped unlinked row (NIL): 'Prop_m' — extend the ontology if this is a real PK parameter (source ['tab_1:row16:col2', 'tab_1:row16:col3', 'tab_1:row16:col5', 'tab_1:row16:col6', 'tab_1:row16:col8'])
- dropped value-less row: 'RSE'
- dropped value-less row: 'CI'
- dropped value-less row: 'Prop_p'
- dropped value-less row: 'Prop_m'
- dropped value-less row: 'F pm'
- dropped value-less row: 'CL pm'
- dropped value-less row: 'CL p'
- dropped value-less row: 'K a'
- dropped value-less row: 'V p'
- dropped value-less row: 'F p'
- dropped value-less row: 'CL m'
- dropped value-less row: 'V m'
- dropped value-less row: 'F m'
- dropped duplicate Q27 ('apparent clearance', value None) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=duloxetine

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.64 (16/25 fields) | 9 |

<details><summary>9 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[absorption rate constant]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent oral clearance]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent volume of distribution]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination rate constant]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k a].parameter_id` | Q95 | Q49 | mismatch |
| `gpt-oss:120b` | `parameters[prop_p]` | not captured | 21.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v m /f m]` | not captured | 110 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v p].parameter_id` | Q61 | Q64 | mismatch |
| `gpt-oss:120b` | `parameters[volume of distribution]` | not captured | not captured | only_one_extracted |

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
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row5:col2', 'tab_1:row5:col3', 'tab_1:row5:col5', 'tab_1:row5:col6', 'tab_1:row5:col8'] |
| C5_unit_missing_Q322 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_1:row3:col2', 'tab_1:row3:col3', 'tab_1:row3:col5', 'tab_1:row3:col6', 'tab_1:row3:col8'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row6:col2', 'tab_1:row6:col3', 'tab_1:row6:col5', 'tab_1:row6:col6', 'tab_1:row6:col8'] |
| C5_unit_missing_Q95 | fail | [time] | not captured | not captured | not captured | ['tab_1:row1:col1', 'tab_1:row1:col2', 'tab_1:row1:col3', 'tab_1:row1:col5', 'tab_1:row1:col6', 'tab_1:row1:col8'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | Fm=0.746 present with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_duloxetine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ngo_2020` / `Ngo_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-07-15 11:50 UTC</sub>
