<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;chloroquine&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/&quot;},{&quot;label&quot;:&quot;Chotsiri_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chloroquine_AbdRahman2020_reference&quot;,&quot;label&quot;:&quot;Abd-Rahman_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/Chloroquine_AbdRahman2020_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Chloroquine_Chotsiri2022_reference&quot;,&quot;label&quot;:&quot;Chotsiri_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/Chloroquine_Chotsiri2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Chloroquine_Karunajeewa2010_reference&quot;,&quot;label&quot;:&quot;Karunajeewa_2010_reference&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/Chloroquine_Karunajeewa2010_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Chloroquine_Yao2021_reference&quot;,&quot;label&quot;:&quot;Yao_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/Chloroquine_Yao2021_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# chloroquine — `Chloroquine_Chotsiri2022_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the model was built differently from what the record describes. Evidence: T3_topology_template — expected parent_metabolite → PK_Parent_Metabolite* — got PK_1C_enteral
**Second reading:** `gpt-oss:120b` read this paper differently on `screen.dose_compound` (chloroquine vs chloroquine and azithromycin) and 1 more field(s) — a structural parameter, so the record is disputed.
**How to address:** Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
<sub>owner: **scholar**</sub>

## Citation
Chotsiri P; Tarning J; Hoglund RM; Watson JA; White NJ et al. (2022). Clinical pharmacology and therapeutics 112
  ·  DOI: [10.1002/cpt.2665](https://doi.org/10.1002/cpt.2665)

## Model component
<dbs-pgx drug="chloroquine" model-id="Chloroquine_Chotsiri2022_reference" status="model_quarantined" stale="false" population="healthy adult volunteers" measured-compound="chloroquine" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| K a1 (hr -1 ) | `Q49` · kabs | 0.350 | hr -1 | 9.722222222222222e-05 | [1] / [h] | not captured | llm (0.5) | tab_0:row5:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'first-order absorption rate constant'
- dropped value-less row: 'K a2'
- dropped value-less row: 'NA'
- dropped value-less row: 'OCC'
- dropped value-less row: 'V C /F'
- dropped value-less row: 'V P1 /F'
- dropped value-less row: 'V P2 /F'
- dropped value-less row: 'Q 1 /F'
- dropped value-less row: 'Q 2 /F'
- dropped value-less row: 'RSE'
- dropped value-less row: 'σ'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 80.8 (source ['tab_0:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=chloroquine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell tab_0:row2:col2 = '95% CI b'
- unparsed cell tab_0:row2:col4 = '95% CI b'
- unparsed cell tab_0:row4:col1 = '100% (fixed)'
- unparsed cell tab_0:row4:col3 = '100% (fixed)'
- unparsed cell tab_0:row5:col2 = '0.273, 0.449'
- unparsed cell tab_0:row5:col3 = '1.59 (12.4%)'
- unparsed cell tab_0:row5:col4 = '1.42, 2.30'
- unparsed cell tab_0:row6:col1 = '0.169 (17.6%)'
- unparsed cell tab_0:row6:col2 = '0.112, 0.221'
- unparsed cell tab_0:row7:col1 = '47.4 (4.46%)'
- unparsed cell tab_0:row7:col2 = '43.0, 51.4'
- unparsed cell tab_0:row7:col3 = '101 (3.61%)'
- unparsed cell tab_0:row7:col4 = '94.4, 108'
- unparsed cell tab_0:row8:col1 = '2,550 (3.29%)'
- unparsed cell tab_0:row8:col2 = '2,380, 2,720'
- unparsed cell tab_0:row8:col3 = '451 (8.57%)'
- unparsed cell tab_0:row8:col4 = '402, 563'
- unparsed cell tab_0:row9:col1 = '347 (6.85%)'
- unparsed cell tab_0:row9:col2 = '304, 394'
- unparsed cell tab_0:row9:col3 = '80.6 (5.01%)'
- unparsed cell tab_0:row9:col4 = '73.7, 89.4'
- unparsed cell tab_0:row10:col1 = '6,480 (5.62%)'
- unparsed cell tab_0:row10:col2 = '5,830, 7,260'
- unparsed cell tab_0:row10:col3 = '2,510 (4.17%)'
- unparsed cell tab_0:row10:col4 = '2,340, 2,740'
- unparsed cell tab_0:row11:col3 = '343 (6.49%)'
- unparsed cell tab_0:row11:col4 = '304, 394'
- unparsed cell tab_0:row12:col3 = '824 (5.46%)'
- unparsed cell tab_0:row12:col4 = '714, 883'
- unparsed cell tab_0:row13:col1 = '-0.286 (1.71%)'
- unparsed cell tab_0:row13:col2 = '-0.295, -0.275'
- unparsed cell tab_0:row15:col1 = '16.7% (9.54%)/14.1%*'
- unparsed cell tab_0:row15:col2 = '14.0%, 20.2%/11.5%,'
- unparsed cell tab_0:row15:col3 = '21.5% (8.52%)/14.9%*'
- unparsed cell tab_0:row15:col4 = '18.0%, 25.3%/12.0%,'
- unparsed cell tab_0:row17:col1 = '73.3% (15.1%)/71.0%* (14.1%)'
- unparsed cell tab_0:row17:col2 = '53.5%, 109%/51.9%, 99.0%*'
- unparsed cell tab_0:row17:col3 = '59.4% (25.5%)/51.0%* (13.7%)'
- unparsed cell tab_0:row17:col4 = '28.3%, 63.9%/46.2%, 90.3%*'
- unparsed cell tab_0:row18:col1 = '18.5% (7.87%)'
- unparsed cell tab_0:row18:col2 = '15.3%, 20.9%'
- unparsed cell tab_0:row18:col3 = '14.8% (9.78%)'
- unparsed cell tab_0:row18:col4 = '13.0%, 19.1%'
- unparsed cell tab_0:row19:col1 = '11.4% (14.4%)'
- unparsed cell tab_0:row19:col2 = '7.73%, 14.1%'
- unparsed cell tab_0:row19:col3 = '49.6%* (10.6%)'
- unparsed cell tab_0:row19:col4 = '37.6%, 58.2%*'
- unparsed cell tab_0:row20:col1 = '32.6%* (11.1%)'
- unparsed cell tab_0:row20:col2 = '25.2%, 40.6%*'
- unparsed cell tab_0:row21:col1 = '18.2%* (13.9%)'
- unparsed cell tab_0:row21:col2 = '12.9%, 22.7%*'
- unparsed cell tab_0:row22:col3 = '30.1% (12.8%)'
- unparsed cell tab_0:row22:col4 = '24.8%, 40.3%'
- unparsed cell tab_0:row24:col1 = '0.0178 (4.71%)'
- unparsed cell tab_0:row24:col2 = '0.0163, 0.0194'
- unparsed cell tab_0:row24:col3 = '0.0194 (5.09%)'
- unparsed cell tab_0:row24:col4 = '0.0179, 0.0218'
- LLM region Chotsiri_2022:discussion_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.6 (3/5 fields) | 2 |

<details><summary>2 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `screen.dose_compound` | chloroquine | chloroquine and azithromycin | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | chloroquine | chloroquine; azithromycin | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_0:row5:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 1 scholar param(s) emitted or defaulted | 1 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | fail | parent_metabolite → PK_Parent_Metabolite* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_chloroquine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chotsiri_2022` / `Chotsiri_2022::reference`)
- model: `../../../knowledgebase/drugs/drug_chloroquine/models/modelica/_needs_review/Chloroquine_Chotsiri2022_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_chloroquine/models/modelica/_needs_review/Chloroquine_Chotsiri2022_reference.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-07-15 11:06 UTC</sub>
