<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;paroxetine&quot;,&quot;href&quot;:&quot;drugs/drug_paroxetine/&quot;},{&quot;label&quot;:&quot;Feng_2006 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paroxetine_Chen2025_reference&quot;,&quot;label&quot;:&quot;Chen_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_paroxetine/Paroxetine_Chen2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paroxetine_Yan2026_reference&quot;,&quot;label&quot;:&quot;Yan_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_paroxetine/Paroxetine_Yan2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paroxetine_Zhang2025_reference&quot;,&quot;label&quot;:&quot;Zhang_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_paroxetine/Paroxetine_Zhang2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paroxetine_Feng2006_base&quot;,&quot;label&quot;:&quot;Feng_2006_base&quot;,&quot;href&quot;:&quot;drugs/drug_paroxetine/Paroxetine_Feng2006_base.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Paroxetine_Feng2006_final&quot;,&quot;label&quot;:&quot;Feng_2006_final&quot;,&quot;href&quot;:&quot;drugs/drug_paroxetine/Paroxetine_Feng2006_final.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# paroxetine — `Paroxetine_Feng2006_base`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.591). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Second reading:** `gpt-oss:120b` read this paper differently on `parameters[theta_q367_im]` (19.4 vs not captured) and 8 more field(s) — a structural parameter, so the record is disputed.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Feng Y; Pollock BG; Ferrell RE; Kimak MA; Reynolds CF; Bies RR et al. (2006). British journal of clinical pharmacology 61
  ·  DOI: [10.1111/j.1365-2125.2006.02629.x](https://doi.org/10.1111/j.1365-2125.2006.02629.x)

## Model component
<dbs-pgx drug="paroxetine" model-id="Paroxetine_Feng2006_base" status="rejected" stale="false" population="elderly subjects with major depressive disorder" measured-compound="paroxetine" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V m (µg h -1 ) | `Q66` · Vmax | 208 | µg h -1 | not captured | [µg] / [h] | not captured | special_case (0.95) | tab_4:row2:col1, tab_4:row2:col2, tab_4:row2:col5 | — | not captured |
| K m (µg l -1 ) | `Q1` · Km | 157 | µg l -1 | not captured | [µg] / [l] | not captured | space_fold (0.95) | tab_4:row3:col1, tab_4:row3:col2, tab_4:row3:col5 | — | 79 (None% RSE) |
| V 2 (l) | `Q64` · V2 | 254 | l | 0.254 | [l] | not captured | space_fold (0.95) | tab_4:row4:col1, tab_4:row4:col2, tab_4:row4:col5 | — | 134 (None% RSE) |
| V 3 (l) | `Q77` · V3 | 2350 | l | 2.35 | [l] | not captured | space_fold (0.95) | tab_4:row5:col1, tab_4:row5:col2, tab_4:row5:col5 | — | not captured |
| Q (l h -1 ) | `Q30` · Q | 1.33 | l h -1 | 3.6944444444444447e-07 | [l] / [h] | not captured | exact (1.0) | tab_4:row6:col1, tab_4:row6:col2, tab_4:row6:col5 | — | not captured |
| K a (h -1 ) | `Q49` · kabs | 9.24 | h -1 | 0.0025666666666666667 | [1] / [h] | not captured | space_fold (0.95) | tab_4:row7:col1, tab_4:row7:col2, tab_4:row7:col5 | — | not captured |
| theta_vmax_pm | `Q900` · theta_vmax_pm | 48.8 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_4:row8:col5 | — | not captured |
| theta_q367_im | `Q900` · theta_q367_im | 19.4 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_4:row9:col5 | — | not captured |
| theta_vmax_em | `Q900` · theta_vmax_em | 49.5 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_4:row10:col5 | — | not captured |
| theta_q367_um | `Q900` · theta_q367_um | 34.6 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_4:row11:col5 | — | not captured |
| theta_v2_wt_v2 | `Q900` · theta_v2_wt_v2 | 50.1 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_4:row12:col5 | — | not captured |
| theta_v2_sex_v2 | `Q900` · theta_v2_sex_v2 | 42.9 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_4:row13:col5 | — | not captured |
| volume of distribution (Vd/F) | `Q61` · V | 1010.0 | L | 1.01 | L | not captured | review_gapfill (0.7) | Shigetome_2025:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'V m (µg h -1 )' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- covariate effect for Q367 has no base parameter row (kept as unattached equation-variable)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q64 (V 2 (l)); Q30 (Q (l h -1 ))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=paroxetine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- model-stage split: 'base model' is the base model of Feng_2006 (paper reports 2 stages: base model, final model); same population, different model-building step
- gap-filled Q61 (V) from Shigetome_2025's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_4:row2:col3 = 'V m (µg h -1 )'
- unparsed cell tab_4:row3:col3 = 'K m (µg l -1 )'
- unparsed cell tab_4:row4:col3 = 'V 2 (l per 75 kg wt)'
- unparsed cell tab_4:row5:col3 = 'V 3 (l)'
- unparsed cell tab_4:row6:col3 = 'Q (l h -1 )'
- unparsed cell tab_4:row7:col3 = 'K a (h -1 )'
- unparsed cell tab_4:row12:col3 = 'Wt (θ V2 )'
- unparsed cell tab_4:row13:col3 = 'Sex (θ V2 )'
- unparsed cell tab_4:row16:col3 = 'ω v2 %'
- unparsed cell tab_4:row17:col3 = 'σ1%'
- unparsed cell tab_4:row18:col3 = 'σ2 (µg l -1 )'
- LLM selected parameter table(s) 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.591 (13/22 fields) | 9 |

<details><summary>9 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[theta_q367_im]` | 19.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q367_um]` | 34.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q61_em]` | not captured | 49.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q61_im]` | not captured | 19.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q61_pm]` | not captured | 48.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q61_um]` | not captured | 34.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_vmax_em]` | 49.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_vmax_pm]` | 48.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v m].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_4:row3:col1', 'tab_4:row3:col2', 'tab_4:row3:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_4:row6:col1', 'tab_4:row6:col2', 'tab_4:row6:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_4:row7:col1', 'tab_4:row7:col2', 'tab_4:row7:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Shigetome_2025:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_4:row4:col1', 'tab_4:row4:col2', 'tab_4:row4:col5'] |
| C5_dimension_Q66 | fail | [mass] / [time] | µg h -1 | not captured | not captured | ['tab_4:row2:col1', 'tab_4:row2:col2', 'tab_4:row2:col5'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_4:row5:col1', 'tab_4:row5:col2', 'tab_4:row5:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.01e+03 L | not captured | not captured | ['Shigetome_2025:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 254 L | not captured | not captured | ['tab_4:row4:col1', 'tab_4:row4:col2', 'tab_4:row4:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_paroxetine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Feng_2006` / `Feng_2006::base`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-24 03:33 UTC</sub>
