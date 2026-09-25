<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;peginesatide&quot;,&quot;href&quot;:&quot;drugs/drug_peginesatide/&quot;},{&quot;label&quot;:&quot;Naik_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Peginesatide_Naik2013_reference&quot;,&quot;label&quot;:&quot;Naik_2013_reference&quot;,&quot;href&quot;:&quot;drugs/drug_peginesatide/Peginesatide_Naik2013_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# peginesatide — `Peginesatide_Naik2013_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** disposition incomplete — only volume extracted — the engineer needs both; the missing half would be silently filled from the library default; C2_reference failed (ratio None).
**Second reading:** `gpt-oss:120b` read this paper differently on `parameters[central volume of distribution (v2), in ml/kg].covariate_forms` ([] vs ['power']) and 3 more field(s) — a structural parameter, so the record is disputed.
**How to address:** not a curation fix — the pipeline is the limit here (reviewer_tooling: the check reported a failure without computing a comparison, so this is an inconclusive check rather than a demonstrated fault).
<sub>owner: **curator**</sub>

## Citation
Naik H; Tsai MC; Fiedler-Kelly J; Qiu P; Vakilynejad M et al. (2013). PloS one 8
  ·  DOI: [10.1371/journal.pone.0066422](https://doi.org/10.1371/journal.pone.0066422)

## Model component
<dbs-pgx drug="peginesatide" model-id="Peginesatide_Naik2013_reference" status="needs_review" stale="false" population="patients with chronic kidney disease on dialysis" measured-compound="peginesatide" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Maximum rate of elimination (Vmax), in ng/mL/hr | `Q66` · Vmax | 44.7 | not captured | not captured | not captured | 10.0 | llm_confirmed (0.6) | pone-0066422-t006:row1:col1, pone-0066422-t006:row1:col2, pone-0066422-t006:row1:col3, pone-0066422-t006:row1:col4 | — | not captured |
| Concentration needed to reach 50% of Vmax (KM),in ng/mL | `Q1` · Km | 1860 | not captured | not captured | not captured | 14.6 | llm_corrected (0.6) | pone-0066422-t006:row2:col1, pone-0066422-t006:row2:col2, pone-0066422-t006:row2:col3, pone-0066422-t006:row2:col4 | — | 0.0575 (29.0% RSE) |
| Central volume of distribution (V2), in mL/kg | `Q64` · V2 | 35.6 | not captured | not captured | not captured | 2.7 | llm_corrected (0.6) | pone-0066422-t006:row3:col1, pone-0066422-t006:row3:col2, pone-0066422-t006:row3:col3, pone-0066422-t006:row3:col4 | — | 0.100 (8.1% RSE) |
| Absorption rate constant (Ka), in 1/hr | `Q49` · kabs | 0.00869 | not captured | not captured | not captured | 15.6 | llm_confirmed (0.6) | pone-0066422-t006:row4:col1, pone-0066422-t006:row4:col2, pone-0066422-t006:row4:col3, pone-0066422-t006:row4:col4 | — | 0.190 (32.0% RSE) |
| Subcutaneous bioavailability (F1) | `Q40` · Fab | 0.499 | F1 | not captured | not captured | 4.4 | llm_confirmed (0.6) | pone-0066422-t006:row5:col1, pone-0066422-t006:row5:col2, pone-0066422-t006:row5:col3, pone-0066422-t006:row5:col4 | — | not captured |
| Inter–compartmental clearance (Q), in mL/kg/hr | `Q30` · Q | 5.23 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | pone-0066422-t006:row6:col1, pone-0066422-t006:row6:col2 | — | not captured |
| Peripheral volume of distribution (V3), in mL/kg | `Q77` · V3 | 7.42 | not captured | not captured | not captured | 10.3 | llm_corrected (0.6) | pone-0066422-t006:row7:col1, pone-0066422-t006:row7:col2, pone-0066422-t006:row7:col3, pone-0066422-t006:row7:col4 | — | not captured |
| theta_q319_bmi_power | `Q900` · theta_q319_bmi_power | -0.485 | not captured | not captured | not captured | 8.7 | not captured (not captured) | pone-0066422-t006:row8:col1, pone-0066422-t006:row8:col2 | — | not captured |
| theta_q335_age | `Q900` · theta_q335_age | -0.125 | not captured | not captured | not captured | 19.0 | not captured (not captured) | pone-0066422-t006:row9:col1, pone-0066422-t006:row9:col2 | — | not captured |
| theta_km_weight_power | `Q900` · theta_km_weight_power | -0.190 | not captured | not captured | not captured | 25.5 | not captured (not captured) | pone-0066422-t006:row10:col1, pone-0066422-t006:row10:col2 | — | not captured |
| theta_q335_category | `Q900` · theta_q335_category | 0.482 | not captured | not captured | not captured | 22.4 | not captured (not captured) | pone-0066422-t006:row11:col1, pone-0066422-t006:row11:col2, pone-0066422-t006:row11:col3, pone-0066422-t006:row11:col4 | — | not captured |
| theta_kabs_category | `Q900` · theta_kabs_category | 0.00815 | not captured | not captured | not captured | 20.3 | not captured (not captured) | pone-0066422-t006:row13:col1, pone-0066422-t006:row13:col2, pone-0066422-t006:row13:col3, pone-0066422-t006:row13:col4 | — | not captured |
| mean volume of distribution | `Q61` · V | 34.9 | mL/kg | 0.0024429999999999994 | L | not captured | review_gapfill (0.7) | Naik_2013:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- routed 'Cov between V2 and Ka' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q335 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=peginesatide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- gap-filled Q61 (V) from Naik_2013's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pone-0066422-t006:row8:col3 = '–0.685 to –0.280'
- unparsed cell pone-0066422-t006:row8:col4 = '–0.685 to –0.280'
- unparsed cell pone-0066422-t006:row9:col3 = '–0.238 to –0.0015'
- unparsed cell pone-0066422-t006:row9:col4 = '–0.238 to –0.0015'
- unparsed cell pone-0066422-t006:row10:col3 = '–0.307 to –0.0895'
- unparsed cell pone-0066422-t006:row10:col4 = '–0.307 to –0.0895'
- unparsed cell pone-0066422-t006:row16:col3 = '–0.136 to –0.0342'
- unparsed cell pone-0066422-t006:row16:col4 = '–0.136 to –0.0342'
- LLM selected parameter table(s) 6

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.875 (28/32 fields) | 4 |

<details><summary>4 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[central volume of distribution (v2), in ml/kg].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss:120b` | `parameters[mean volume of distribution]` | 34.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q319_bmi_power]` | -0.485 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v2_bmi_power]` | not captured | -0.485 | only_one_extracted |

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
| C2_reference | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Naik_2013:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.44 L | not captured | not captured | ['Naik_2013:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_peginesatide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Naik_2013` / `Naik_2013::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-19 01:19 UTC</sub>
