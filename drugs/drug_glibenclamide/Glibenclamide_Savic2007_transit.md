<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;glibenclamide&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/&quot;},{&quot;label&quot;:&quot;Savic_2007 \u00b7 transit&quot;}]"></div>

# glibenclamide — `Glibenclamide_Savic2007_transit`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `MTT`, `Fab`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the model was built differently from what the record describes; the engineer's deviations are not documented and quantified. Evidence: T3_param_coverage — expected 5 scholar param(s) emitted or defaulted — got 3 covered; T6_deviations — got defaulted_parameters: structural deviation not quantified.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
3. If the paper never reports it, the record cannot become a model.
4. Open the emitted .mo and compare its base class and parameters with the record.
5. Check the .deviation.json beside it for what the engineer defaulted or assumed.
6. A wrong base class or a defaulted core parameter means rebuilding, not curating.

<sub>owner: **scholar** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Savic RM; Jonker DM; Kerbusch T; Karlsson MO et al. (2007). Journal of pharmacokinetics and pharmacodynamics 34
  ·  DOI: [10.1007/s10928-007-9066-0](https://doi.org/10.1007/s10928-007-9066-0)

## Model component
<dbs-pgx drug="glibenclamide" model-id="Glibenclamide_Savic2007_transit" status="model_quarantined" stale="false" population="healthy volunteers" measured-compound="glibenclamide, furosemide, amiloride, moxonidine" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k (1/h) | `Q47` · kel | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row5:col2, tab_1:row5:col3, tab_1:row5:col4 | — | not captured |
| V (l) | `Q61` · V | —(suppressed) | l | — | [l] | not captured | exact (1.0) | tab_1:row6:col2, tab_1:row6:col3, tab_1:row6:col4, Savic_2007_table_3:row5:col2, Savic_2007_table_3:row5:col3, Savic_2007_table_3:row5:col4, Savic_2007_table_5:row5:col2, Savic_2007_table_5:row5:col3, Savic_2007_table_5:row5:col4 | — | not captured |
| k23 | `Q48` · kcomp | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row7:col2, tab_1:row7:col3, tab_1:row7:col4 | — | 7 (None% RSE) |
| k a (1/h) | `Q49` · kabs | —(suppressed) | not captured | — | not captured | not captured | space_fold (0.95) | tab_1:row14:col2, tab_1:row14:col3, tab_1:row14:col4, Savic_2007_table_3:row8:col2, Savic_2007_table_3:row8:col3, Savic_2007_table_3:row8:col4, Savic_2007_table_4:row11:col2, Savic_2007_table_4:row11:col3, Savic_2007_table_4:row11:col4, Savic_2007_table_5:row10:col2, Savic_2007_table_5:row10:col3, Savic_2007_table_5:row10:col4 | — | not captured |
| t lag (h) MT T (h) | `Q81` · MTT | —(suppressed) | h | — | [h] | not captured | llm (0.6) | tab_1:row15:col4, Savic_2007_table_3:row9:col4, Savic_2007_table_4:row12:col2, Savic_2007_table_4:row12:col4, Savic_2007_table_5:row11:col4 | — | not captured |
| n | `Q311` · n_transit | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | tab_1:row16:col3, tab_1:row16:col4, Savic_2007_table_3:row10:col3, Savic_2007_table_3:row10:col4, Savic_2007_table_4:row13:col3, Savic_2007_table_4:row13:col4, Savic_2007_table_5:row12:col3, Savic_2007_table_5:row12:col4 | — | not captured |
| Bioavailbility (F) | `Q40` · Fab | —(suppressed) | F | — | [f] | not captured | llm_confirmed (0.6) | tab_1:row17:col2, tab_1:row17:col3, tab_1:row17:col4 | — | not captured |
| CL(l/h) | `Q22` · CL | —(suppressed) | l/h | — | [l] / [h] | not captured | exact (1.0) | Savic_2007_table_3:row4:col2, Savic_2007_table_3:row4:col3, Savic_2007_table_3:row4:col4, Savic_2007_table_4:row4:col2, Savic_2007_table_4:row4:col3, Savic_2007_table_4:row4:col4, Savic_2007_table_5:row4:col2, Savic_2007_table_5:row4:col3, Savic_2007_table_5:row4:col4 | — | 17 (None% RSE) |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'transit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['tab_1:row4:col3', 'Savic_2007_table_3:row3:col3', 'Savic_2007_table_4:row3:col3', 'Savic_2007_table_5:row3:col3'])
- dropped duplicate Q48 ('k32', value '0.53') — already have one for this compound
- unit_dimension_unknown: 'F' (Fab)
- dropped duplicate Q61 ('V (l/kg)', value '1.35') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=glibenclamide, furosemide, amiloride, moxonidine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'transit' subgroup of Savic_2007 (paper reports 2 populations: lag, transit)

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Savic_2007_table_3:row4:col2', 'Savic_2007_table_3:row4:col3', 'Savic_2007_table_3:row4:col4', 'Savic_2007_table_4:row4:col2', 'Savic_2007_table_4:row4:col3', 'Savic_2007_table_4:row4:col4', 'Savic_2007_table_5:row4:col2', 'Savic_2007_table_5:row4:col3', 'Savic_2007_table_5:row4:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row6:col2', 'tab_1:row6:col3', 'tab_1:row6:col4', 'Savic_2007_table_3:row5:col2', 'Savic_2007_table_3:row5:col3', 'Savic_2007_table_3:row5:col4', 'Savic_2007_table_5:row5:col2', 'Savic_2007_table_5:row5:col3', 'Savic_2007_table_5:row5:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.2 | not captured | not captured | ['Savic_2007_table_3:row4:col2', 'Savic_2007_table_3:row4:col3', 'Savic_2007_table_3:row4:col4', 'Savic_2007_table_4:row4:col2', 'Savic_2007_table_4:row4:col3', 'Savic_2007_table_4:row4:col4', 'Savic_2007_table_5:row4:col2', 'Savic_2007_table_5:row4:col3', 'Savic_2007_table_5:row4:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 10.2 L/h | not captured | not captured | ['Savic_2007_table_3:row4:col2', 'Savic_2007_table_3:row4:col3', 'Savic_2007_table_3:row4:col4', 'Savic_2007_table_4:row4:col2', 'Savic_2007_table_4:row4:col3', 'Savic_2007_table_4:row4:col4', 'Savic_2007_table_5:row4:col2', 'Savic_2007_table_5:row4:col3', 'Savic_2007_table_5:row4:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.39 L | not captured | not captured | ['tab_1:row6:col2', 'tab_1:row6:col3', 'tab_1:row6:col4', 'Savic_2007_table_3:row5:col2', 'Savic_2007_table_3:row5:col3', 'Savic_2007_table_3:row5:col4', 'Savic_2007_table_5:row5:col2', 'Savic_2007_table_5:row5:col3', 'Savic_2007_table_5:row5:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 3 covered | not captured | neither emitted nor in defaulted[]: ['kcomp', 'kabs'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: structural deviation not quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_glibenclamide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Savic_2007` / `Savic_2007::transit`)
- model: `../../../knowledgebase/drugs/drug_glibenclamide/models/modelica/_needs_review/Glibenclamide_Savic2007_transit.mo`
- deviation: `../../../knowledgebase/drugs/drug_glibenclamide/models/modelica/_needs_review/Glibenclamide_Savic2007_transit.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_glibenclamide/Glibenclamide_Savic2007_transit/Glibenclamide_Savic2007_transit_matlab.zip" download>Glibenclamide_Savic2007_transit_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_glibenclamide/Glibenclamide_Savic2007_transit/Glibenclamide_Savic2007_transit_matlab_simbio.zip" download>Glibenclamide_Savic2007_transit_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_glibenclamide/Glibenclamide_Savic2007_transit/Glibenclamide_Savic2007_transit_sbml.zip" download>Glibenclamide_Savic2007_transit_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_glibenclamide/Glibenclamide_Savic2007_transit/Glibenclamide_Savic2007_transit_cellml.zip" download>Glibenclamide_Savic2007_transit_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
