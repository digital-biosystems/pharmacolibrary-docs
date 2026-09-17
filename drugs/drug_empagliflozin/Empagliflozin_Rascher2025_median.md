<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;empagliflozin&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/&quot;},{&quot;label&quot;:&quot;Rascher_2025 \u00b7 median&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Empagliflozin_Baron2016_reference&quot;,&quot;label&quot;:&quot;Baron_2016_reference&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/Empagliflozin_Baron2016_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Empagliflozin_Rascher2025_bulk_ess&quot;,&quot;label&quot;:&quot;Rascher_2025_bulk_ess&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/Empagliflozin_Rascher2025_bulk_ess.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Empagliflozin_Rascher2025_bulk_ess&quot;,&quot;label&quot;:&quot;Rascher_2025_bulk_ess&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/Empagliflozin_Rascher2025_bulk_ess.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Empagliflozin_Rascher2025_median&quot;,&quot;label&quot;:&quot;Rascher_2025_median&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/Empagliflozin_Rascher2025_median.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Empagliflozin_Rascher2025_median&quot;,&quot;label&quot;:&quot;Rascher_2025_median&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/Empagliflozin_Rascher2025_median.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Empagliflozin_Rascher2025_pop&quot;,&quot;label&quot;:&quot;Rascher_2025_pop&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/Empagliflozin_Rascher2025_pop.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Empagliflozin_Rascher2025_pop&quot;,&quot;label&quot;:&quot;Rascher_2025_pop&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/Empagliflozin_Rascher2025_pop.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Empagliflozin_Rascher2025_tail_ess&quot;,&quot;label&quot;:&quot;Rascher_2025_tail_ess&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/Empagliflozin_Rascher2025_tail_ess.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Empagliflozin_Rascher2025_tail_ess&quot;,&quot;label&quot;:&quot;Rascher_2025_tail_ess&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/Empagliflozin_Rascher2025_tail_ess.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# empagliflozin — `Empagliflozin_Rascher2025_median`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the model was built differently from what the record describes; the engineer's deviations are not documented and quantified. Evidence: T3_param_coverage — expected 4 scholar param(s) emitted or defaulted — got 2 covered; T6_deviations — got invented_absorption: not acceptable

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.
3. Open the emitted .mo and compare its base class and parameters with the record.
4. Check the .deviation.json beside it for what the engineer defaulted or assumed.
5. A wrong base class or a defaulted core parameter means rebuilding, not curating.
6. Read the .deviation.json and confirm each deviation names what changed and why.

<sub>owner: **scholar** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Rascher J; Cheng S; Johnston C; Härtter S; Jan-Georg W; Marquard J; et al. et al. (2025). British journal of clinical pharmacology 91
  ·  DOI: [10.1002/bcp.70096](https://doi.org/10.1002/bcp.70096)

## Model component
<dbs-pgx drug="empagliflozin" model-id="Empagliflozin_Rascher2025_median" status="model_quarantined" stale="false" population="paediatric patients aged 10–17 years with type 2 diabetes mellitus" measured-compound="empagliflozin" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | bcp70096-tbl-0003:row2:col3 | — | not captured |
| V2/F (L) | `Q82` · V2/F | —(suppressed) | L | — | [l] | not captured | exact (1.0) | bcp70096-tbl-0003:row3:col3 | — | not captured |
| KA (1/h) | `Q49` · kabs | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | bcp70096-tbl-0003:row4:col3 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | bcp70096-tbl-0003:row5:col3 | — | not captured |
| V3/F (L) | `Q78` · V3/F | —(suppressed) | L | — | [l] | not captured | exact (1.0) | bcp70096-tbl-0003:row6:col3 | — | not captured |
| D1 (h) | `Q310` · D1 | —(suppressed) | h | — | [h] | not captured | exact (1.0) | bcp70096-tbl-0003:row7:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q27 ('EGFRCL/F', value '0.407') — already have one for this compound
- dropped unlinked row (NIL): 'BLACKCL/F' — extend the ontology if this is a real PK parameter (source ['bcp70096-tbl-0003:row10:col3'])
- dropped unlinked row (NIL): 'ASIANCL/F' — extend the ontology if this is a real PK parameter (source ['bcp70096-tbl-0003:row11:col3'])
- dropped unlinked row (NIL): 'FEMALECL/F' — extend the ontology if this is a real PK parameter (source ['bcp70096-tbl-0003:row12:col3'])
- dropped unlinked row (NIL): 'ΩCL/F' — extend the ontology if this is a real PK parameter (source ['bcp70096-tbl-0003:row14:col3'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=empagliflozin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'median' subgroup of Rascher_2025 (paper reports 4 populations: bulk ess, median, tail ess, ȓ)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell bcp70096-tbl-0003:row2:col1 = 'exp(Ɵ 1)'
- unparsed cell bcp70096-tbl-0003:row2:col4 = '(5.71, 7.90)'
- unparsed cell bcp70096-tbl-0003:row3:col1 = 'exp(Ɵ 2)'
- unparsed cell bcp70096-tbl-0003:row3:col4 = '(1.30, 6.63)'
- unparsed cell bcp70096-tbl-0003:row4:col1 = 'exp(Ɵ 3)'
- unparsed cell bcp70096-tbl-0003:row4:col4 = '(0.232, 0.246)'
- unparsed cell bcp70096-tbl-0003:row5:col1 = 'exp(Ɵ 4)'
- unparsed cell bcp70096-tbl-0003:row5:col4 = '(5.22, 5.83)'
- unparsed cell bcp70096-tbl-0003:row6:col1 = 'exp(Ɵ 5)'
- unparsed cell bcp70096-tbl-0003:row6:col4 = '(67.6, 76.2)'
- unparsed cell bcp70096-tbl-0003:row7:col1 = 'exp(Ɵ 6)'
- unparsed cell bcp70096-tbl-0003:row7:col4 = '(0.199, 0.542)'
- unparsed cell bcp70096-tbl-0003:row9:col1 = 'Ɵ 7'
- unparsed cell bcp70096-tbl-0003:row9:col4 = '(0.363, 0.454)'
- unparsed cell bcp70096-tbl-0003:row10:col1 = 'exp(Ɵ 8)'
- unparsed cell bcp70096-tbl-0003:row10:col4 = '(0.834, 0.967)'
- unparsed cell bcp70096-tbl-0003:row11:col1 = 'exp(Ɵ 9)'
- unparsed cell bcp70096-tbl-0003:row11:col4 = '(0.904, 0.965)'
- unparsed cell bcp70096-tbl-0003:row12:col1 = 'exp(Ɵ 10)'
- unparsed cell bcp70096-tbl-0003:row12:col4 = '(0.977, 1.45)'
- unparsed cell bcp70096-tbl-0003:row14:col1 = 'Ω1,1'
- unparsed cell bcp70096-tbl-0003:row14:col4 = '(25.3, 44.0)'
- unparsed cell bcp70096-tbl-0003:row16:col1 = 'Σ1,1'
- unparsed cell bcp70096-tbl-0003:row16:col4 = '(41.9, 54.2)'
- unparsed cell bcp70096-tbl-0003:row17:col1 = 'Σ2,2'
- unparsed cell bcp70096-tbl-0003:row17:col4 = '(0.664, 5.94)'
- unparsed cell bcp70096-tbl-0003:row18:col1 = 'Σ3,3'
- unparsed cell bcp70096-tbl-0003:row18:col4 = '(213, 731)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp70096-tbl-0003:row2:col3'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['bcp70096-tbl-0003:row7:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp70096-tbl-0003:row5:col3'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp70096-tbl-0003:row6:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp70096-tbl-0003:row3:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.74 L/h | not captured | not captured | ['bcp70096-tbl-0003:row2:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 4.12 L | not captured | not captured | ['bcp70096-tbl-0003:row3:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | fail | 4 scholar param(s) emitted or defaulted | 2 covered | not captured | neither emitted nor in defaulted[]: ['V2/F', 'Q/F'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_empagliflozin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Rascher_2025` / `Rascher_2025::median`)
- model: `../../../knowledgebase/drugs/drug_empagliflozin/models/modelica/_needs_review/Empagliflozin_Rascher2025_median.mo`
- deviation: `../../../knowledgebase/drugs/drug_empagliflozin/models/modelica/_needs_review/Empagliflozin_Rascher2025_median.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
