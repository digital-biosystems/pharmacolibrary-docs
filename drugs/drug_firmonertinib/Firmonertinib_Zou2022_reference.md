<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;firmonertinib&quot;,&quot;href&quot;:&quot;drugs/drug_firmonertinib/&quot;},{&quot;label&quot;:&quot;Zou_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# firmonertinib — `Firmonertinib_Zou2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.594). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected because AST5902’s apparent clearance CLm/F is −0.258, and structural rate parameters kabs 1.32 and kel 0.00311 have unconvertible recorded units.**

For AST5902, CLm/F is reported as −0.258, a negative apparent metabolite clearance. The structural rate parameters kabs 1.32 and kel 0.00311 are labeled as having units of 1/h, but their recorded units are “units”; that unit could not be converted to SI, leaving a dimensional mismatch. Extracted — firmonertinib: CL/F 70.5 L/h, V1/F 2.84e+03 L, kabs 1.32 units, Q/F 12.6 L/h, V2/F 1.5e+03 L, kel 0.00311 units; AST5902: CL 119 L/h, V 286 L, kcomp 0.054 units, CLm/F -0.258 units.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has furmonertinib (AST2818), the second reading furmonertinib; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Zou HX et al., Effect of autoinduction and food on the…, Acta pharmacologica Sinica (2022)
  ·  DOI: [10.1038/s41401-021-00798-y](https://doi.org/10.1038/s41401-021-00798-y)

## Model component
<dbs-pgx drug="firmonertinib" model-id="Firmonertinib_Zou2022_reference" status="rejected" stale="false" population="NSCLC patients and healthy volunteers" measured-compound="furmonertinib (AST2818)" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 10 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, CLm/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL base /F (L/h) | `Q27` · CL/F | 70.5 | L/h | 1.9583333333333336e-05 | [l] / [h] | 6.41 | llm_corrected (0.6) | tab_1:row2:col1, tab_1:row2:col2, tab_1:row2:col3, tab_1:row2:col4, tab_1:row2:col5 | — | not captured |
| V c /F (L) | `Q290` · V1/F | 2837 | L | 2.837 | [l] | 6.35 | space_fold (0.95) | tab_1:row3:col1, tab_1:row3:col2, tab_1:row3:col3, tab_1:row3:col4, tab_1:row3:col5 | — | not captured |
| k a (1/h) | `Q49` · kabs | 1.32 | units | not captured | [units] | 5.63 | exact (1.0) | tab_1:row4:col1, tab_1:row4:col2, tab_1:row4:col3, tab_1:row4:col4, tab_1:row4:col5 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 12.6 | L/h | 3.5e-06 | [l] / [h] | 34.2 | exact (1.0) | tab_1:row5:col1, tab_1:row5:col2, tab_1:row5:col3, tab_1:row5:col4, tab_1:row5:col5 | — | not captured |
| V p /F (L) | `Q82` · V2/F | 1499 | L | 1.499 | [l] | 26.7 | space_fold (0.95) | tab_1:row6:col1, tab_1:row6:col2, tab_1:row6:col3, tab_1:row6:col4, tab_1:row6:col5 | — | not captured |
| k ENZ (1/h) | `Q47` · kel | 0.00311 | units | not captured | [units] | 6.56 | exact (1.0) | tab_1:row7:col1, tab_1:row7:col2, tab_1:row7:col3, tab_1:row7:col4, tab_1:row7:col5 | — | not captured |
| CL m /(F • Fm) (L/h) | `Q22` · CL | 119 | L/h | 3.305555555555556e-05 | [l] / [h] | 3.56 | exact (1.0) | tab_1:row9:col1, tab_1:row9:col2, tab_1:row9:col3, tab_1:row9:col4, tab_1:row9:col5 | — | not captured |
| V cm /(F • Fm) (L) | `Q61` · V | 286 | L | 0.28600000000000003 | [l] | 9.27 | exact (1.0) | tab_1:row10:col1, tab_1:row10:col2, tab_1:row10:col3, tab_1:row10:col4, tab_1:row10:col5 | — | 0.142 (27.1% RSE) |
| k 67 (1/h) | `Q900` · equation variable | 0.972 | units | not captured | [units] | 17.5 | llm (0.6) | tab_1:row11:col1, tab_1:row11:col2, tab_1:row11:col3, tab_1:row11:col4, tab_1:row11:col5 | — | not captured |
| k 76 (1/h) | `Q48` · kcomp | 0.0540 | units | not captured | [units] | 9.20 | llm (0.6) | tab_1:row12:col1, tab_1:row12:col2, tab_1:row12:col3, tab_1:row12:col4, tab_1:row12:col5 | — | not captured |
| θ CLm/(F•Fm), ALP | `Q351` · CLm/F | -0.258 | units | not captured | [units] | 32.7 | llm_corrected (0.6) | tab_1:row14:col1, tab_1:row14:col2, tab_1:row14:col3, tab_1:row14:col4, tab_1:row14:col5 | — | not captured |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.629 | not captured | not captured | not captured | 27.8 | not captured (not captured) | tab_1:row15:col1, tab_1:row15:col2, tab_1:row15:col3, tab_1:row15:col4, tab_1:row15:col5 | — | not captured |
| theta_equation_variable_food_fm | `Q900` · theta_equation_variable_food_fm | -0.332 | not captured | not captured | not captured | 7.87 | not captured (not captured) | tab_1:row17:col1, tab_1:row17:col2, tab_1:row17:col3, tab_1:row17:col4, tab_1:row17:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Shrinkage of IIV on CL/F' routed out of structural estimates ('Shrinkage of IIV on CL/F, V c /F, k a , CL m /(F • Fm) and V cm /(F • Fm) were all small (≤15%).')
- table section iiv: 'Shrinkage of IIV on V c /F' routed out of structural estimates ('Shrinkage of IIV on CL/F, V c /F, k a , CL m /(F • Fm) and V cm /(F • Fm) were all small (≤15%).')
- table section iiv: 'Shrinkage of IIV on k a' routed out of structural estimates ('Shrinkage of IIV on CL/F, V c /F, k a , CL m /(F • Fm) and V cm /(F • Fm) were all small (≤15%).')
- table section iiv: 'Shrinkage of IIV on CL m /(F • Fm)' routed out of structural estimates ('Shrinkage of IIV on CL/F, V c /F, k a , CL m /(F • Fm) and V cm /(F • Fm) were all small (≤15%).')
- table section iiv: 'Shrinkage of IIV on V cm /(F • Fm)' routed out of structural estimates ('Shrinkage of IIV on CL/F, V c /F, k a , CL m /(F • Fm) and V cm /(F • Fm) were all small (≤15%).')
- unit_dimension_mismatch: 'k a (1/h)' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'k ENZ (1/h)' → Q47 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped PD-category row 'S' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row8:col2', 'tab_1:row8:col3', 'tab_1:row8:col4', 'tab_1:row8:col5', 'tab_1:row8:col6'])
- unit_dimension_mismatch: 'k 76 (1/h)' → Q48 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'θ CLbase/F, ALP' — extend the ontology if this is a real PK parameter (source ['tab_1:row13:col1', 'tab_1:row13:col2', 'tab_1:row13:col3', 'tab_1:row13:col4', 'tab_1:row13:col5'])
- unit_dimension_mismatch: 'θ CLm/(F•Fm), ALP' → Q351 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'θ F, food' — extend the ontology if this is a real PK parameter (source ['tab_1:row16:col1', 'tab_1:row16:col2', 'tab_1:row16:col3', 'tab_1:row16:col4', 'tab_1:row16:col5'])
- routed 'δ ADD ERR' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'δ ADD ERR AST5902 (CV%)' — extend the ontology if this is a real PK parameter (source ['tab_1:row25:col1', 'tab_1:row25:col2', 'tab_1:row25:col3', 'tab_1:row25:col4', 'tab_1:row25:col5'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- metabolite volume: 'V cm /(F • Fm) (L)' Q63→Q61 for AST5902 — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=furmonertinib (AST2818)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_3C — first-pass formation; parent 2 + hepatic, metabolites [1] (site presystemic: 'The result of the food effect implies an alternative model structure, where the AST5902 was produced by the first-pass m')
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 40 linked by role; re-tagged parent→AST5902 ×40
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.594 (19/32 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['furmonertinib (ast2818)', 'ast5902', 'metabolism']] | [['furmonertinib', 'ast5902', 'metabolism']] | mismatch |
| `qwen3.8-27b` | `parameters[cl m /(f • fm)].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[k 67].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[k 67].parameter_id` | Q900 | Q67 | mismatch |
| `qwen3.8-27b` | `parameters[k 76]` | 0.0540 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[k enz].parameter_id` | Q47 | Q350 | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_food_fm]` | not captured | -0.332 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_equation_variable_food_fm]` | -0.332 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_body_weight_power]` | 0.629 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q45_body_weight_power]` | not captured | 0.629 | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ clm/(f•fm), alp]` | -0.258 | not captured | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | furmonertinib (AST2818) | furmonertinib | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | furmonertinib (AST2818) | furmonertinib | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q351 | fail | not captured | -0.258 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row9:col1', 'tab_1:row9:col2', 'tab_1:row9:col3', 'tab_1:row9:col4', 'tab_1:row9:col5'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row2:col1', 'tab_1:row2:col2', 'tab_1:row2:col3', 'tab_1:row2:col4', 'tab_1:row2:col5'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3', 'tab_1:row3:col4', 'tab_1:row3:col5'] |
| C5_dimension_Q351 | fail | [luminosity] / [length] ** 2 | units | not captured | not captured | ['tab_1:row14:col1', 'tab_1:row14:col2', 'tab_1:row14:col3', 'tab_1:row14:col4', 'tab_1:row14:col5'] |
| C5_dimension_Q47 | fail | [luminosity] / [length] ** 2 | units | not captured | not captured | ['tab_1:row7:col1', 'tab_1:row7:col2', 'tab_1:row7:col3', 'tab_1:row7:col4', 'tab_1:row7:col5'] |
| C5_dimension_Q48 | fail | [luminosity] / [length] ** 2 | units | not captured | not captured | ['tab_1:row12:col1', 'tab_1:row12:col2', 'tab_1:row12:col3', 'tab_1:row12:col4', 'tab_1:row12:col5'] |
| C5_dimension_Q49 | fail | [luminosity] / [length] ** 2 | units | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col3', 'tab_1:row4:col4', 'tab_1:row4:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row10:col1', 'tab_1:row10:col2', 'tab_1:row10:col3', 'tab_1:row10:col4', 'tab_1:row10:col5'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row5:col1', 'tab_1:row5:col2', 'tab_1:row5:col3', 'tab_1:row5:col4', 'tab_1:row5:col5'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row6:col1', 'tab_1:row6:col2', 'tab_1:row6:col3', 'tab_1:row6:col4', 'tab_1:row6:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 119 L/h | not captured | not captured | ['tab_1:row9:col1', 'tab_1:row9:col2', 'tab_1:row9:col3', 'tab_1:row9:col4', 'tab_1:row9:col5'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 70.5 L/h | not captured | not captured | ['tab_1:row2:col1', 'tab_1:row2:col2', 'tab_1:row2:col3', 'tab_1:row2:col4', 'tab_1:row2:col5'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.84e+03 L | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3', 'tab_1:row3:col4', 'tab_1:row3:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 286 L | not captured | not captured | ['tab_1:row10:col1', 'tab_1:row10:col2', 'tab_1:row10:col3', 'tab_1:row10:col4', 'tab_1:row10:col5'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.5e+03 L | not captured | not captured | ['tab_1:row6:col1', 'tab_1:row6:col2', 'tab_1:row6:col3', 'tab_1:row6:col4', 'tab_1:row6:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_firmonertinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zou_2022` / `Zou_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:43 UTC</sub>
