<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;flucloxacillin&quot;,&quot;href&quot;:&quot;drugs/drug_flucloxacillin/&quot;},{&quot;label&quot;:&quot;Drennan_2021_2 \u00b7 final&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# flucloxacillin — `Flucloxacillin_Drennan2021v2_final`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.7). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of a: this record has none, the second reading 0.004; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `flucloxacillin`, measured `free flucloxacillin`.

## Citation
Drennan PG et al., Population pharmacokinetics of free flu…, British journal of clinical… (2021)
  ·  DOI: [10.1111/bcp.14887](https://doi.org/10.1111/bcp.14887)

## Model component
<dbs-pgx drug="flucloxacillin" model-id="Flucloxacillin_Drennan2021v2_final" status="rejected" stale="false" population="adults with staphylococcal infections and healthy adults" measured-compound="free flucloxacillin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Tlag,abs (h) | `Q83` · tlag | 52.6 | h | 189360.0 | [h] | not captured | llm_confirmed (0.6) | Drennan_2021_2_table_p5_1:row1:col3, Drennan_2021_2_table_p5_1:row1:col4, Drennan_2021_2_table_p5_1:row1:col5 | — | not captured |
| kabs (h−1) | `Q49` · kabs | 11.8 | h−1 | 0.003277777777777778 | [1] / [h] | not captured | exact (1.0) | Drennan_2021_2_table_p5_1:row3:col3, Drennan_2021_2_table_p5_1:row3:col4, Drennan_2021_2_table_p5_1:row3:col5 | — | 996 (None% RSE) |
| Vpop (L) | `Q61` · V | 48.4 | L | 0.0484 | [l] | not captured | llm (0.6) | Drennan_2021_2_table_p5_1:row5:col3, Drennan_2021_2_table_p5_1:row5:col4, Drennan_2021_2_table_p5_1:row5:col5 | — | not captured |
| CLpop (L h−1) | `Q22` · CL | 18.5 | L h−1 | 5.138888888888889e-06 | [l] / [h] | not captured | llm (0.6) | Drennan_2021_2_table_p5_1:row7:col3, Drennan_2021_2_table_p5_1:row7:col4, Drennan_2021_2_table_p5_1:row7:col5 | — | 81.1 (None% RSE) |
| βCL fasting | `Q3` · CLint | -0.653 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Drennan_2021_2_table_p5_1:row10:col4, Drennan_2021_2_table_p5_1:row10:col5 | — | not captured |
| βFferrite | `Q40` · Fab | 51.3 | not captured | not captured | not captured | not captured | llm (0.6) | Drennan_2021_2_table_p5_1:row11:col3, Drennan_2021_2_table_p5_1:row11:col4, Drennan_2021_2_table_p5_1:row11:col5 | — | not captured |
| a (mg/L) | `Q900` · equation variable | 6.66 | mg/L | not captured | [mg] / [l] | not captured | llm (0.6) | Drennan_2021_2_table_p5_1:row25:col3, Drennan_2021_2_table_p5_1:row25:col4, Drennan_2021_2_table_p5_1:row25:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ωabs' routed out of structural estimates ('Between subject variability (standard deviation)')
- table section iiv: 'ωkabs' routed out of structural estimates ('Between subject variability (standard deviation)')
- table section iiv: 'ωV' routed out of structural estimates ('Between subject variability (standard deviation)')
- table section iiv: 'ωCL' routed out of structural estimates ('Between subject variability (standard deviation)')
- table section iov: 'γabs' routed out of structural estimates ('Between occasion variability (standard deviation)')
- table section iov: 'γk' routed out of structural estimates ('Between occasion variability (standard deviation)')
- table section iov: 'γV' routed out of structural estimates ('Between occasion variability (standard deviation)')
- table section iov: 'γCL' routed out of structural estimates ('Between occasion variability (standard deviation)')
- dropped duplicate Q83 ('βTlag,abs', value '-0.987') — already have one for this compound
- dropped duplicate Q49 ('βkabs', value '1.16') — already have one for this compound
- dropped unlinked row (NIL): 'βCLprobenecid' — extend the ontology if this is a real PK parameter (source ['Drennan_2021_2_table_p5_1:row8:col4', 'Drennan_2021_2_table_p5_1:row8:col5'])
- dropped duplicate Q900 ('b', value '7.4') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=free flucloxacillin
- model-stage split: 'final model' is the final model of Drennan_2021_2 (paper reports 2 stages: base model, final model); same population, different model-building step
- molar mass: no plausible PubChem entry for 'free flucloxacillin' ('free flucloxacillin') — left in mass units
- molar mass: none found for 'free flucloxacillin' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Drennan_2021_2_table_p5_1:row1:col7 = '0.321 (0.057–0.552)'
- unparsed cell Drennan_2021_2_table_p5_1:row2:col7 = '-0.78 (-3.72 to -0.287)'
- unparsed cell Drennan_2021_2_table_p5_1:row3:col7 = '0.625 (0.448–0.788)'
- unparsed cell Drennan_2021_2_table_p5_1:row4:col7 = '1.18 (0.138–1.62)'
- unparsed cell Drennan_2021_2_table_p5_1:row5:col7 = '535 (291–641)'
- unparsed cell Drennan_2021_2_table_p5_1:row7:col7 = '413 (305–581)'
- unparsed cell Drennan_2021_2_table_p5_1:row8:col7 = '0.013 (0.006–0.019)'
- unparsed cell Drennan_2021_2_table_p5_1:row10:col7 = '-0.668 (-0.987 to -0.396)'
- unparsed cell Drennan_2021_2_table_p5_1:row11:col7 = '1.01 (0.806–1.36)'
- unparsed cell Drennan_2021_2_table_p5_1:row14:col7 = '0.198 (0.073–0.442)'
- unparsed cell Drennan_2021_2_table_p5_1:row15:col7 = '0.163 (0.069–0.304)'
- unparsed cell Drennan_2021_2_table_p5_1:row16:col7 = '0.142 (0.04–0.297)'
- unparsed cell Drennan_2021_2_table_p5_1:row17:col7 = '0.251 (0.1–0.34)'
- unparsed cell Drennan_2021_2_table_p5_1:row19:col7 = '0.489 (0.055–0.686)'
- unparsed cell Drennan_2021_2_table_p5_1:row20:col7 = '0.185 (0.069–0.601)'
- unparsed cell Drennan_2021_2_table_p5_1:row21:col7 = '0.306 (0.19–0.508)'
- unparsed cell Drennan_2021_2_table_p5_1:row22:col7 = '0.27 (0.188–0.324)'
- unparsed cell Drennan_2021_2_table_p5_1:row25:col7 = '0.059 (0.003–0.093)'
- unparsed cell Drennan_2021_2_table_p5_1:row26:col7 = '0.206 (0.17–0.284)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.7 (14/20 fields) | 6 |

<details><summary>6 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[a]` | not captured | 0.004 | only_one_extracted |
| `gpt-oss:120b` | `parameters[βclprobenecid]` | 0.003 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[γabs]` | 0.184 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[γv]` | 0.082 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ωabs]` | 0.217 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ωv].parameter_id` | Q65 | Q312 | mismatch |

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
| C2_base_sign_Q3 | fail | not captured | -0.653 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Drennan_2021_2_table_p5_1:row7:col3', 'Drennan_2021_2_table_p5_1:row7:col4', 'Drennan_2021_2_table_p5_1:row7:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Drennan_2021_2_table_p5_1:row3:col3', 'Drennan_2021_2_table_p5_1:row3:col4', 'Drennan_2021_2_table_p5_1:row3:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Drennan_2021_2_table_p5_1:row5:col3', 'Drennan_2021_2_table_p5_1:row5:col4', 'Drennan_2021_2_table_p5_1:row5:col5'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Drennan_2021_2_table_p5_1:row1:col3', 'Drennan_2021_2_table_p5_1:row1:col4', 'Drennan_2021_2_table_p5_1:row1:col5'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [time] / [mass] | not captured | not captured | not captured | ['Drennan_2021_2_table_p5_1:row10:col4', 'Drennan_2021_2_table_p5_1:row10:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 18.5 | not captured | not captured | ['Drennan_2021_2_table_p5_1:row7:col3', 'Drennan_2021_2_table_p5_1:row7:col4', 'Drennan_2021_2_table_p5_1:row7:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 18.5 L/h | not captured | not captured | ['Drennan_2021_2_table_p5_1:row7:col3', 'Drennan_2021_2_table_p5_1:row7:col4', 'Drennan_2021_2_table_p5_1:row7:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 48.4 L | not captured | not captured | ['Drennan_2021_2_table_p5_1:row5:col3', 'Drennan_2021_2_table_p5_1:row5:col4', 'Drennan_2021_2_table_p5_1:row5:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_flucloxacillin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Drennan_2021_2` / `Drennan_2021_2::final`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:02 UTC</sub>
