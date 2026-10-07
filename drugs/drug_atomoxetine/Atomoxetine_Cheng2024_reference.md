<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;atomoxetine&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/&quot;},{&quot;label&quot;:&quot;Cheng_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atomoxetine_Li2012_reference&quot;,&quot;label&quot;:&quot;Li_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/Atomoxetine_Li2012_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Tobin2026_reference&quot;,&quot;label&quot;:&quot;Tobin_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/Atomoxetine_Tobin2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pgx_Tobin_2026_CYP2D6_Q27&quot;,&quot;label&quot;:&quot;Tobin_2026 \u00b7 CYP2D6&quot;,&quot;group&quot;:&quot;PGx&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/pgx_Tobin_2026_CYP2D6_Q27.md&quot;,&quot;status&quot;:&quot;quantitative&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atomoxetine — `Atomoxetine_Cheng2024_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume; kel has no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. Extracted — atomoxetine: kel 7.35.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of ex: this record has none, the second reading -0.182; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:23:27.118214+00:00) predates the upstream re-run (2026-10-07 00:13:08.767462+00:00). Current validate status: `needs_review`.

## Citation
Cheng S et al., Population Pharmacokinetic Analysis of…, Clinical pharmacology and t… (2024)
  ·  DOI: [10.1002/cpt.3155](https://doi.org/10.1002/cpt.3155)

## Model component
<dbs-pgx drug="atomoxetine" model-id="Atomoxetine_Cheng2024_reference" status="needs_review" stale="true" population="children and adolescents with ADHD" measured-compound="atomoxetine" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** CL/F, Q/F, V/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KATR (1/hour) | `Q49` · kabs | 7.35 | 1/h | 0.0020416666666666665 | 1/h | not captured | exact (1.0) | tab_0:row18:col1 | — | not captured |
| KELR (1/hour) | `Q47` · kel | 0.000754 | 1/h | 2.0944444444444444e-07 | 1/h | not captured | exact (1.0) | tab_0:row19:col1, tab_0:row48:col1 | — | not captured |
| EX (unitless) | `Q319` · allometric_exponent | -0.182 | unitless | not captured | [unitless] | not captured | llm (0.6) | tab_0:row35:col1 | — | not captured |
| BASE (unitless) | `Q45` · fm | 0.0284 | unitless | not captured | [unitless] | not captured | exact (1.0) | tab_0:row36:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| V/F (L) | Q76 | not captured | exact |
| Q/F (L/hour) | Q69 | not captured | exact |
| V2/F (L) | Q82 | not captured | exact |
| CL/F (L/hour) | Q27 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'CYP2D6 AS ≤ 0.5' — extend the ontology if this is a real PK parameter (source ['tab_0:row4:col1'])
- dropped unlinked row (NIL): 'CYP2D6 AS 0' — extend the ontology if this is a real PK parameter (source ['tab_0:row9:col1', 'tab_0:row23:col1', 'tab_0:row39:col1'])
- unit_dimension_unknown: 'stratified by CYP2D6 phenotype' (kabs)
- unit_dimension_unknown: 'stratified by CYP2D6 phenotype' (kel)
- unit_dimension_unknown: 'unitless' (allometric_exponent)
- unit_dimension_unknown: 'unitless' (fm)
- implicit units: 'KATR (1/hour)' → 1/h (from the paper text: 'Table lists "KATR (1/hour)" — absorption rate constant, unit 1/hour.')
- implicit units: 'KELR (1/hour)' → 1/h (from the paper text: 'Table lists "KELR (1/hour)" — elimination rate constant, unit 1/hour.')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atomoxetine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 3 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment (site presystemic: 'These differences in ATX bioavailability between CYP2D6 AS groups are consistent with the literature, and are primarily ')
- status held at route_to_review — not promoted
- row roles: per-genotype parameters — typical value from the reference group: CYP2D6 AS ≤ 0.5, CYP2D6 AS 0
- row roles (LLM): model_class=compartmental; 13/13 row label(s) assigned, 14 linked by role; re-tagged parent→2-carboxymethylatomoxetine ×1
- molar mass: no plausible PubChem entry for '2-carboxymethylatomoxetine' ('2-carboxymethylatomoxetine') — left in mass units
- molar mass: none found for '2-carboxymethylatomoxetine' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_0:row5:col2 = '0.894 (0.835, 0.961)'
- unparsed cell tab_0:row6:col2 = '0.811 (0.756, 0.868)'
- unparsed cell tab_0:row9:col2 = '2.10 (1.64, 2.66)'
- unparsed cell tab_0:row10:col2 = '6.49 (3.56, 11.0)'
- unparsed cell tab_0:row11:col2 = '17.9 (10.3, 29.5)'
- unparsed cell tab_0:row12:col2 = '19.1 (10.7, 32.2)'
- unparsed cell tab_0:row13:col2 = '75.5 (67.5, 84.5)'
- unparsed cell tab_0:row14:col2 = '0.48 (0.38, 0.60)'
- unparsed cell tab_0:row16:col2 = '8.43 (5.64, 15.4)'
- unparsed cell tab_0:row18:col2 = '7.28 (6.34, 8.57)'
- unparsed cell tab_0:row19:col2 = '0.000763 (0.000587, 0.000913)'
- unparsed cell tab_0:row23:col2 = '0.360 (0.316, 0.414)'
- unparsed cell tab_0:row24:col2 = '0.740 (0.677, 0.797)'
- unparsed cell tab_0:row25:col2 = '0.924 (0.905, 0.941)'
- unparsed cell tab_0:row26:col2 = '0.932 (0.916, 0.947)'
- unparsed cell tab_0:row28:col2 = '7.76 (6.27, 9.34)'
- unparsed cell tab_0:row28:col4 = 'Volume of distribution of 4-OH'
- unparsed cell tab_0:row29:col2 = '1.60 (1.17, 2.22)'
- unparsed cell tab_0:row31:col2 = '11.5 (9.60, 13.7)'
- unparsed cell tab_0:row33:col2 = '7.82 (7.15, 8.52)'
- unparsed cell tab_0:row33:col4 = 'Clearance of 4-OH'
- unparsed cell tab_0:row35:col2 = '-0.184 (-0.221, -0.140)'
- unparsed cell tab_0:row36:col2 = '0.0285 (0.0218, 0.0357)'
- unparsed cell tab_0:row39:col2 = '0.837 (0.488, 1.55)'
- unparsed cell tab_0:row40:col2 = '3.46 (0.703, 15.5)'
- unparsed cell tab_0:row41:col2 = '10.5 (2.83, 39.4)'
- unparsed cell tab_0:row42:col2 = '17.5 (4.63, 64.3)'
- unparsed cell tab_0:row43:col2 = '11.9 (9.23, 15.4)'
- unparsed cell tab_0:row44:col2 = '6.99 (5.25, 9.33)'
- unparsed cell tab_0:row46:col2 = '34.7 (27.2, 41.7)'
- unparsed cell tab_0:row48:col2 = '0.00214 (0.00152, 0.00281)'
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.75 (9/12 fields) | 3 |

<details><summary>3 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[ex]` | not captured | -0.182 | only_one_extracted |
| `gpt-oss:120b` | `parameters[katr].parameter_id` | Q47 | Q306 | mismatch |
| `gpt-oss:120b` | `parameters[kelr]` | not captured | 0.00211 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row33:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_0:row19:col1', 'tab_0:row48:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_0:row18:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row14:col1', 'tab_0:row29:col1', 'tab_0:row44:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row13:col1', 'tab_0:row28:col1', 'tab_0:row43:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row16:col1', 'tab_0:row31:col1', 'tab_0:row46:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_atomoxetine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Cheng_2024` / `Cheng_2024::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:13 UTC</sub>
