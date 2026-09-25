<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;avatrombopag&quot;,&quot;href&quot;:&quot;drugs/drug_avatrombopag/&quot;},{&quot;label&quot;:&quot;Liu_2025_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Avatrombopag_Liu2025v2_reference&quot;,&quot;label&quot;:&quot;Liu_2025_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_avatrombopag/Avatrombopag_Liu2025v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# avatrombopag — `Avatrombopag_Liu2025v2_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** C1_half_life_beta failed (ratio 0.6843).
**Second reading:** Independently confirmed by `gpt-oss:120b`.
**How to address:** not a curation fix — the pipeline is the limit here (scholar: a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value).
<sub>owner: **scholar**</sub>

## Citation
Liu X; Chen L; Ju G; Li C; Liu B; Fei Y; et al. et al. (2025). Pharmaceuticals (Basel, Switzerland) 18
  ·  DOI: [10.3390/ph18060903](https://doi.org/10.3390/ph18060903)

## Model component
<dbs-pgx drug="avatrombopag" model-id="Avatrombopag_Liu2025v2_reference" status="needs_review" stale="false" population="healthy Chinese adults" measured-compound="avatrombopag" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 7.85 | L/h | 2.1805555555555555e-06 | [l] / [h] | not captured | exact (1.0) | pharmaceuticals-18-00903-t003:row2:col1 | — | not captured |
| Vd/F (L) | `Q76` · V/F | 199 | L | 0.199 | [l] | not captured | exact (1.0) | pharmaceuticals-18-00903-t003:row3:col1 | — | not captured |
| ka (/h) | `Q49` · kabs | 0.582 | /h | 0.00016166666666666665 | [1] / [h] | not captured | exact (1.0) | pharmaceuticals-18-00903-t003:row4:col1 | — | not captured |
| MTT (h) | `Q81` · MTT | 1.33 | h | not captured | [h] | not captured | exact (1.0) | pharmaceuticals-18-00903-t003:row5:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'COV1 *' — extend the ontology if this is a real PK parameter (source ['pharmaceuticals-18-00903-t003:row6:col1'])
- dropped unlinked row (NIL): 'COV2 *' — extend the ontology if this is a real PK parameter (source ['pharmaceuticals-18-00903-t003:row7:col1'])
- dropped unlinked row (NIL): 'COV3 *' — extend the ontology if this is a real PK parameter (source ['pharmaceuticals-18-00903-t003:row8:col1'])
- dropped duplicate Q27 ('CL/F', value '0.182') — already have one for this compound
- dropped duplicate Q76 ('Vd/F', value '0.159') — already have one for this compound
- dropped duplicate Q49 ('KA', value '0.504') — already have one for this compound
- dropped duplicate Q81 ('MTT', value '0.131') — already have one for this compound
- dropped duplicate Q49 ('OCC [KA]', value '0.913') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=avatrombopag
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceuticals-18-00903-t003:row2:col2 = '14%'
- unparsed cell pharmaceuticals-18-00903-t003:row2:col3 = '7.81 [5.92–10.62]'
- unparsed cell pharmaceuticals-18-00903-t003:row3:col2 = '13%'
- unparsed cell pharmaceuticals-18-00903-t003:row3:col3 = '198.01 [149.77–267.64]'
- unparsed cell pharmaceuticals-18-00903-t003:row4:col2 = '13%'
- unparsed cell pharmaceuticals-18-00903-t003:row4:col3 = '0.581 [0.4723–0.785]'
- unparsed cell pharmaceuticals-18-00903-t003:row5:col2 = '5%'
- unparsed cell pharmaceuticals-18-00903-t003:row5:col3 = '1.33 [1.22–1.45]'
- unparsed cell pharmaceuticals-18-00903-t003:row6:col2 = '111%'
- unparsed cell pharmaceuticals-18-00903-t003:row6:col3 = '−0.0702 [−0.3069–0.2698]'
- unparsed cell pharmaceuticals-18-00903-t003:row7:col2 = '15%'
- unparsed cell pharmaceuticals-18-00903-t003:row7:col3 = '−0.28 [−0.47–0.01]'
- unparsed cell pharmaceuticals-18-00903-t003:row8:col2 = '56%'
- unparsed cell pharmaceuticals-18-00903-t003:row8:col3 = '0.186 [−0.216–0.431]'
- unparsed cell pharmaceuticals-18-00903-t003:row10:col2 = '35%'
- unparsed cell pharmaceuticals-18-00903-t003:row10:col3 = '0.174 [0.126–0.235]'
- unparsed cell pharmaceuticals-18-00903-t003:row11:col2 = '32%'
- unparsed cell pharmaceuticals-18-00903-t003:row11:col3 = '0.153 [0.106–0.204]'
- unparsed cell pharmaceuticals-18-00903-t003:row12:col2 = '35%'
- unparsed cell pharmaceuticals-18-00903-t003:row12:col3 = '0.48 [0.29–0.78]'
- unparsed cell pharmaceuticals-18-00903-t003:row13:col2 = '23%'
- unparsed cell pharmaceuticals-18-00903-t003:row13:col3 = '0.128 [0.093–0.169]'
- unparsed cell pharmaceuticals-18-00903-t003:row14:col2 = '12%'
- unparsed cell pharmaceuticals-18-00903-t003:row14:col3 = '0.922 [0.681–1.346]'
- unparsed cell pharmaceuticals-18-00903-t003:row17:col2 = '3.00%'
- unparsed cell pharmaceuticals-18-00903-t003:row17:col3 = '1.17 [0.86–1.48]'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (8/8 fields) | none |

_Every reader agrees on every compared field of this record._

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
| C1_half_life_beta | fail | 25.68 | 17.572 | 0.6843 | 0.25 | reported t½β |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceuticals-18-00903-t003:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceuticals-18-00903-t003:row4:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceuticals-18-00903-t003:row3:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 7.85 L/h | not captured | not captured | ['pharmaceuticals-18-00903-t003:row2:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 199 L | not captured | not captured | ['pharmaceuticals-18-00903-t003:row3:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_avatrombopag/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Liu_2025_2` / `Liu_2025_2::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-18 19:31 UTC</sub>
