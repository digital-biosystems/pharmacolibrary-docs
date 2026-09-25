<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;glibenclamide&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/&quot;},{&quot;label&quot;:&quot;Savic_2007 \u00b7 lag&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Glibenclamide_Rambiritch2016v2_reference&quot;,&quot;label&quot;:&quot;Rambiritch_2016_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/Glibenclamide_Rambiritch2016v2_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Glibenclamide_Savic2007_lag&quot;,&quot;label&quot;:&quot;Savic_2007_lag&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/Glibenclamide_Savic2007_lag.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Glibenclamide_Savic2007_transit&quot;,&quot;label&quot;:&quot;Savic_2007_transit&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/Glibenclamide_Savic2007_transit.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# glibenclamide — `Glibenclamide_Savic2007_lag`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the model was built differently from what the record describes; the engineer's deviations are not documented and quantified. Evidence: T3_param_coverage — expected 5 scholar param(s) emitted or defaulted — got 4 covered; T6_deviations — got invented_absorption: not acceptable.
**How to address:** not a curation fix — the pipeline is the limit here (scholar: a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value).
<sub>owner: **scholar**</sub>

## Citation
Savic RM; Jonker DM; Kerbusch T; Karlsson MO et al. (2007). Journal of pharmacokinetics and pharmacodynamics 34
  ·  DOI: [10.1007/s10928-007-9066-0](https://doi.org/10.1007/s10928-007-9066-0)

## Model component
<dbs-pgx drug="glibenclamide" model-id="Glibenclamide_Savic2007_lag" status="model_quarantined" stale="false" population="healthy volunteers" measured-compound="glibenclamide, furosemide, amiloride, moxonidine" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k (1/h) | `Q47` · kel | 1.13 | not captured | not captured | not captured | not captured | exact (1.0) | tab_1:row5:col1, tab_1:row5:col2, tab_1:row5:col4 | — | not captured |
| V (l) | `Q61` · V | 3.84 | l | 0.00384 | [l] | not captured | exact (1.0) | tab_1:row6:col1, tab_1:row6:col2, tab_1:row6:col4, Savic_2007_table_3:row5:col1, Savic_2007_table_3:row5:col2, Savic_2007_table_3:row5:col4, Savic_2007_table_5:row5:col1, Savic_2007_table_5:row5:col2, Savic_2007_table_5:row5:col4 | — | not captured |
| k23 | `Q48` · kcomp | 0.34 | not captured | not captured | not captured | not captured | exact (1.0) | tab_1:row7:col1, tab_1:row7:col2, tab_1:row7:col4 | — | 18 (None% RSE) |
| k a (1/h) | `Q49` · kabs | 0.51 | not captured | not captured | not captured | not captured | space_fold (0.95) | tab_1:row14:col1, tab_1:row14:col2, tab_1:row14:col4, Savic_2007_table_3:row8:col1, Savic_2007_table_3:row8:col2, Savic_2007_table_3:row8:col4, Savic_2007_table_4:row11:col1, Savic_2007_table_4:row11:col2, Savic_2007_table_4:row11:col4, Savic_2007_table_5:row10:col1, Savic_2007_table_5:row10:col2, Savic_2007_table_5:row10:col4 | — | not captured |
| t lag (h) MT T (h) | `Q81` · MTT | -0.359 | h | not captured | [h] | not captured | llm (0.6) | tab_1:row15:col4, Savic_2007_table_3:row9:col4, Savic_2007_table_4:row12:col2, Savic_2007_table_4:row12:col4, Savic_2007_table_5:row11:col4 | — | not captured |
| n | `Q311` · n_transit | 10.8 | not captured | not captured | not captured | not captured | llm (0.6) | tab_1:row16:col4, Savic_2007_table_3:row10:col4, Savic_2007_table_4:row13:col4, Savic_2007_table_5:row12:col4 | — | not captured |
| Bioavailbility (F) | `Q40` · Fab | 0.94 | F | not captured | [f] | not captured | llm_confirmed (0.6) | tab_1:row17:col1, tab_1:row17:col2, tab_1:row17:col4 | — | not captured |
| CL(l/h) | `Q22` · CL | 14.5 | l/h | 4.027777777777778e-06 | [l] / [h] | not captured | exact (1.0) | Savic_2007_table_3:row4:col1, Savic_2007_table_3:row4:col2, Savic_2007_table_3:row4:col4, Savic_2007_table_4:row4:col1, Savic_2007_table_4:row4:col2, Savic_2007_table_4:row4:col4, Savic_2007_table_5:row4:col1, Savic_2007_table_5:row4:col2, Savic_2007_table_5:row4:col4 | — | 21 (None% RSE) |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'lag' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['tab_1:row4:col1', 'Savic_2007_table_3:row3:col1', 'Savic_2007_table_4:row3:col1', 'Savic_2007_table_5:row3:col1'])
- dropped duplicate Q48 ('k32', value '0.66') — already have one for this compound
- unit_dimension_unknown: 'F' (Fab)
- dropped duplicate Q61 ('V (l/kg)', value '1.43') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=glibenclamide, furosemide, amiloride, moxonidine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'lag' subgroup of Savic_2007 (paper reports 2 populations: lag, transit)

**Extraction notes:**
- unparsed cell tab_1:row15:col1 = '0.306 -b'
- unparsed cell tab_1:row15:col2 = '0.295-0.313 -'
- unparsed cell tab_1:row15:col3 = '-b 0.458'
- unparsed cell tab_1:row19:col1 = '0 a -b'
- unparsed cell tab_1:row19:col3 = '-b 30'
- unparsed cell Savic_2007_table_3:row9:col3 = '-b 0.37'
- unparsed cell Savic_2007_table_3:row12:col3 = '-b 120'
- companion parameter table 3 transcribed (26 record(s))
- unparsed cell Savic_2007_table_4:row12:col1 = '0.24 -b'
- unparsed cell Savic_2007_table_4:row12:col3 = '-b 0.324'
- companion parameter table 4 transcribed (48 record(s))
- unparsed cell Savic_2007_table_5:row11:col1 = '0.841 -b'
- unparsed cell Savic_2007_table_5:row11:col2 = '0.612-0.977 -'
- unparsed cell Savic_2007_table_5:row11:col3 = '-b 1.03'
- unparsed cell Savic_2007_table_5:row14:col3 = '-b 52'
- companion parameter table 5 transcribed (32 record(s))
- LLM selected parameter table(s) 2, 3, 4, 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Savic_2007_table_3:row4:col1', 'Savic_2007_table_3:row4:col2', 'Savic_2007_table_3:row4:col4', 'Savic_2007_table_4:row4:col1', 'Savic_2007_table_4:row4:col2', 'Savic_2007_table_4:row4:col4', 'Savic_2007_table_5:row4:col1', 'Savic_2007_table_5:row4:col2', 'Savic_2007_table_5:row4:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row6:col1', 'tab_1:row6:col2', 'tab_1:row6:col4', 'Savic_2007_table_3:row5:col1', 'Savic_2007_table_3:row5:col2', 'Savic_2007_table_3:row5:col4', 'Savic_2007_table_5:row5:col1', 'Savic_2007_table_5:row5:col2', 'Savic_2007_table_5:row5:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 14.5 | not captured | not captured | ['Savic_2007_table_3:row4:col1', 'Savic_2007_table_3:row4:col2', 'Savic_2007_table_3:row4:col4', 'Savic_2007_table_4:row4:col1', 'Savic_2007_table_4:row4:col2', 'Savic_2007_table_4:row4:col4', 'Savic_2007_table_5:row4:col1', 'Savic_2007_table_5:row4:col2', 'Savic_2007_table_5:row4:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 14.5 L/h | not captured | not captured | ['Savic_2007_table_3:row4:col1', 'Savic_2007_table_3:row4:col2', 'Savic_2007_table_3:row4:col4', 'Savic_2007_table_4:row4:col1', 'Savic_2007_table_4:row4:col2', 'Savic_2007_table_4:row4:col4', 'Savic_2007_table_5:row4:col1', 'Savic_2007_table_5:row4:col2', 'Savic_2007_table_5:row4:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.84 L | not captured | not captured | ['tab_1:row6:col1', 'tab_1:row6:col2', 'tab_1:row6:col4', 'Savic_2007_table_3:row5:col1', 'Savic_2007_table_3:row5:col2', 'Savic_2007_table_3:row5:col4', 'Savic_2007_table_5:row5:col1', 'Savic_2007_table_5:row5:col2', 'Savic_2007_table_5:row5:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['kcomp'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_glibenclamide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Savic_2007` / `Savic_2007::lag`)
- model: `../../../knowledgebase/drugs/drug_glibenclamide/models/modelica/_needs_review/Glibenclamide_Savic2007_lag.mo`
- deviation: `../../../knowledgebase/drugs/drug_glibenclamide/models/modelica/_needs_review/Glibenclamide_Savic2007_lag.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_glibenclamide/Glibenclamide_Savic2007_lag/Glibenclamide_Savic2007_lag_matlab.zip" download>Glibenclamide_Savic2007_lag_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_glibenclamide/Glibenclamide_Savic2007_lag/Glibenclamide_Savic2007_lag_matlab_simbio.zip" download>Glibenclamide_Savic2007_lag_matlab_simbio.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_glibenclamide/Glibenclamide_Savic2007_lag/Glibenclamide_Savic2007_lag_sbml.zip" download>Glibenclamide_Savic2007_lag_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_glibenclamide/Glibenclamide_Savic2007_lag/Glibenclamide_Savic2007_lag_cellml.zip" download>Glibenclamide_Savic2007_lag_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-15 21:33 UTC</sub>
