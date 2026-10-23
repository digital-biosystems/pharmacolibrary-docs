<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03X&quot;,&quot;href&quot;:&quot;atc/C03X.md&quot;},{&quot;label&quot;:&quot;tolvaptan&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/&quot;},{&quot;label&quot;:&quot;Van_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tolvaptan_Bhatt2014_reference&quot;,&quot;label&quot;:&quot;Bhatt_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Bhatt2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Lanke2019_base&quot;,&quot;label&quot;:&quot;Lanke_2019_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Lanke2019_base.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Lanke2019_final&quot;,&quot;label&quot;:&quot;Lanke_2019_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Lanke2019_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Plosker2010_reference&quot;,&quot;label&quot;:&quot;Plosker_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Plosker2010_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Shoaf2017_reference&quot;,&quot;label&quot;:&quot;Shoaf_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Shoaf2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Van2013_reference&quot;,&quot;label&quot;:&quot;Van_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Van2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tolvaptan — `Tolvaptan_Van2013_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The two-compartment tolvaptan model yields a terminal half-life of 5.64 h, failing to match the paper's reported values of 10.0 to 17.7 h.

<div class="pk-model-meta" hidden drug="tolvaptan" model-id="Tolvaptan_Van2013_reference" status="needs_review" stale="false" population="healthy subjects and patients with hyponatremia secondary to congestive heart failure or hepatic cirrhosis" measured-compound="tolvaptan" parameterization="apparent" topology="2C"></div>

## Citation
Van Wart SA, Shoaf SE, Mallikaarjun S, Mager DE. Population pharmacokinetics of tolvaptan in healthy subjects and patients with hyponatremia secondary to congestive heart failure or hepatic cirrhosis. Biopharmaceutics & drug disposition 34(6):336–347 (2013).
  ·  DOI: [10.1002/bdd.1849](https://doi.org/10.1002/bdd.1849)

## Population and dosing

**Population:** healthy subjects and patients with hyponatremia secondary to congestive heart failure or hepatic cirrhosis · age group adult · n = condition:.

**Dosing:** 5, 10, 15, 30, 60, 90 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted, plus 12 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference.svg" alt="Tolvaptan_Van2013_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| t_lag (h) | tlag | 0.154 | h | 2.28 |
| k_a (h^-1) | kabs | 0.832 | h^-1 | 5.76 |
| CL/F (l/h) | CL/F | 16.0 | l/h | 7.56 |
| V_c/F (l) | V1/F | 111 | l | 6.80 |
| CL_d/F (l/h) | Q/F | 2.93 | l/h | 8.94 |
| V_p/F (l) | V2/F | 31.2 | l | 9.74 |
| 2_for_cl_d_f | 2_for_cl_d_f | 0.381 |  | 18.1 |
| theta_q319_weight_power | theta_q319_weight_power | 0.372 |  | 22.3 |
| theta_cl_f_chf_nyha_class_3_or_4 | theta_cl_f_chf_nyha_class_3_or_4 | -8.72 | l/h | 13.8 |
| theta_cl_f_cirrhosis_child_pugh_score_ge_6_l_h | theta_cl_f_cirrhosis_child_pugh_score_ge_6_l_h | -6.72 | l/h | 17.1 |
| theta_cl_f_hyponatremia_moderate_hyponatremia | theta_cl_f_hyponatremia_moderate_hyponatremia | -2.92 | l/h | 21.2 |
| theta_q319_weight_power | theta_q319_weight_power | 0.678 |  | 17.3 |
| theta_v1_f_chf_nyha_class_1_or_2 | theta_v1_f_chf_nyha_class_1_or_2 | -44.5 | l | 18.2 |
| theta_v1_f_chf_nyha_class_3_or_4 | theta_v1_f_chf_nyha_class_3_or_4 | -54.1 | l | 13.9 |
| theta_v1_f_cirrhosis_child_pugh_score_ge_10_l | theta_v1_f_cirrhosis_child_pugh_score_ge_10_l | 71.9 | l | 27.0 |
| theta_q314_category | theta_q314_category | 0.244 |  | 26.0 |
| theta_q312_category | theta_q312_category | 0.271 |  | 5.79 |
| theta_q313_category | theta_q313_category | 0.230 |  | 8.78 |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.974). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The two-compartment tolvaptan model yields a terminal half-life of 5.64 h, failing to match the paper's reported values of 10.0 to 17.7 h.**

The simulated terminal half-life deviates significantly from the paper's reported range, with ratios between 0.3189 and 0.5645 for expected values like 10.0, 11.5, and 17.7 h. This discrepancy persists because relative oral bioavailability was not extracted, so the model was held back rather than published. Additionally, the record defines multiple covariate effects, but the simulation only exercised the reference individual, leaving these clinical scenarios untested. Extracted — tolvaptan: tlag 0.154 h, kabs 0.832 h^-1, CL/F 16 l/h, V1/F 111 l, Q/F 2.93 l/h, V2/F 31.2 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of f: this record has none, the second reading none. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| t_lag (h) | `Q83` · tlag | 0.154 | h | 554.4 | s | h | 2.28 | exact (1) | Van_2013_table_p8_1:row0:col1 |
| k_a (h^-1) | `Q49` · kabs | 0.832 | h^-1 | 0.0002311 | 1/s | 1/h | 5.76 | exact (1) | Van_2013_table_p8_1:row1:col1 |
| CL/F (l/h) | `Q27` · CL/F | 16.0 | l/h | 4.444e-06 | m3/s | l/h | 7.56 | exact (1) | Van_2013_table_p8_1:row3:col1 |
| V_c/F (l) | `Q290` · V1/F | 111 | l | 0.111 | m3 | l | 6.80 | exact (1) | Van_2013_table_p8_1:row9:col1 |
| CL_d/F (l/h) | `Q69` · Q/F | 2.93 | l/h | 8.139e-07 | m3/s | l/h | 8.94 | exact (1) | Van_2013_table_p8_1:row14:col1 |
| V_p/F (l) | `Q82` · V2/F | 31.2 | l | 0.0312 | m3 | l | 9.74 | exact (1) | Van_2013_table_p8_1:row15:col1 |
| 2_for_cl_d_f | `Q900` · 2_for_cl_d_f | 0.381 |  |  |  |  | 18.1 |  | Van_2013_table_p8_1:row21:col1 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.372 |  |  |  |  | 22.3 |  | Van_2013_table_p8_1:row4:col1 |
| theta_cl_f_chf_nyha_class_3_or_4 | `Q900` · theta_cl_f_chf_nyha_class_3_or_4 | -8.72 | l/h |  |  |  | 13.8 |  | Van_2013_table_p8_1:row6:col1 |
| theta_cl_f_cirrhosis_child_pugh_score_ge_6_l_h | `Q900` · theta_cl_f_cirrhosis_child_pugh_score_ge_6_l_h | -6.72 | l/h |  |  |  | 17.1 |  | Van_2013_table_p8_1:row7:col1 |
| theta_cl_f_hyponatremia_moderate_hyponatremia | `Q900` · theta_cl_f_hyponatremia_moderate_hyponatremia | -2.92 | l/h |  |  |  | 21.2 |  | Van_2013_table_p8_1:row8:col1 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.678 |  |  |  |  | 17.3 |  | Van_2013_table_p8_1:row10:col1 |
| theta_v1_f_chf_nyha_class_1_or_2 | `Q900` · theta_v1_f_chf_nyha_class_1_or_2 | -44.5 | l |  |  |  | 18.2 |  | Van_2013_table_p8_1:row11:col1 |
| theta_v1_f_chf_nyha_class_3_or_4 | `Q900` · theta_v1_f_chf_nyha_class_3_or_4 | -54.1 | l |  |  |  | 13.9 |  | Van_2013_table_p8_1:row12:col1 |
| theta_v1_f_cirrhosis_child_pugh_score_ge_10_l | `Q900` · theta_v1_f_cirrhosis_child_pugh_score_ge_10_l | 71.9 | l |  |  |  | 27.0 |  | Van_2013_table_p8_1:row13:col1 |
| theta_q314_category | `Q900` · theta_q314_category | 0.244 |  |  |  |  | 26.0 |  | Van_2013_table_p8_1:row16:col1 |
| theta_q312_category | `Q900` · theta_q312_category | 0.271 |  |  |  |  | 5.79 |  | Van_2013_table_p8_1:row18:col1 |
| theta_q313_category | `Q900` · theta_q313_category | 0.230 |  |  |  |  | 8.78 |  | Van_2013_table_p8_1:row20:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Relative oral bioavailability (F) | Q87 | exact |

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Decrease in CL/F for CHF, NYHA Class 1 or 2 (l/h)' — extend the ontology if this is a real PK parameter (source ['Van_2013_table_p8_1:row5:col1'])
- covariate level 'ω^2 for CL_d/F' → Q900:2_for_cl_d_f = 0.381 (additive_shift on Q27)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- theta_v1_f_cirrhosis_child_pugh_score_ge_10_l: label says 'decrease' but the reported value is 71.9 (positive) — curated as an INCREASE, per the printed number
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q312 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q313 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q313 — ambiguous identity (two shifts cannot share one category)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tolvaptan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- table Van_2013_table_p8_1: unbound_uncertainty
- skipped illustrative/example figure caption(s) fig_1 — per-individual fit, not model parameters

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.974 (37/38 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Ground-truth comparison:** <span class="pk-badge pk-badge--orange">unconfirmed</span>  (13/16 matched, agreement 0.812, tol 0.25)

| o_id | agreement | extracted | truth | fold |
|---|---|---|---|---|
| `Q27` · CL/F | match | 16.0 l/h | 16.0 l/h | 1.0 |
| `Q290` · V1/F | match | 111 l | 111 l | 1.0 |
| `Q49` · kabs | match | 0.832 h^-1 | 0.832 h-1 | 1.0 |
| `Q69` · Q/F | match | 2.93 l/h | 2.93 l/h | 1.0 |
| `Q82` · V2/F | match | 31.2 l | 31.2 l | 1.0 |
| `Q83` · tlag | match | 0.154 h | 0.154 h | 1.0 |
| `Q87` · Frel | missing_in_extraction | None | None |  |
| `Q900:theta_cl_f_chf_nyha_class_1_or_2` | match | -6.69 l/h | -6.69 l/h | 1.0 |
| `Q900:theta_cl_f_chf_nyha_class_3_or_4` | match | -8.72 l/h | -8.72 l/h | 1.0 |
| `Q900:theta_cl_f_cirrhosis_child_pugh_score_ge_6_l_h` | match | -6.72 l/h | -6.72 l/h | 1.0 |
| `Q900:theta_cl_f_hyponatremia_moderate_hyponatremia` | match | -2.92 l/h | -2.92 l/h | 1.0 |
| `Q900:theta_cl_f_weight_power` | missing_in_extraction | None | 0.372 |  |
| `Q900:theta_q319_weight_power` | extra_in_extraction | 0.678 | None |  |
| `Q900:theta_v1_f_chf_nyha_class_1_or_2` | match | -44.5 l | -44.5 l | 1.0 |
| `Q900:theta_v1_f_chf_nyha_class_3_or_4` | match | -54.1 l | -54.1 l | 1.0 |
| `Q900:theta_v1_f_cirrhosis_child_pugh_score_ge_10_l` | match | 71.9 l | 71.9 l | 1.0 |
| `Q900:theta_v1_f_weight_power` | missing_in_extraction | None | 0.678 |  |

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_alpha | pass | 3.6 | 3.554 | 0.9872 | 0.25 | reported t½α |
| C1_half_life_beta | pass | 10 | 9.988 | 0.9988 | 0.25 | reported t½β |
| C2_reference | pass |  |  |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['Van_2013_table_p8_1:row3:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  |  |  | ['Van_2013_table_p8_1:row9:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Van_2013_table_p8_1:row1:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  |  |  | ['Van_2013_table_p8_1:row14:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  |  |  | ['Van_2013_table_p8_1:row15:col1'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['Van_2013_table_p8_1:row0:col1'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 16 L/h |  |  | ['Van_2013_table_p8_1:row3:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 111 L |  |  | ['Van_2013_table_p8_1:row9:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 31.2 L |  |  | ['Van_2013_table_p8_1:row15:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=tolvaptan) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | apparent_assumption: not acceptable |  | LLM adjudication → deterministic rule |
| T1_t_half_alpha | reference | skipped | 3.6 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 3.2 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 4.5 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 5.7 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | fail | 10 | 5.645 | 0.5645 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 11.5 | 5.645 | 0.4908 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 12.6 | 5.645 | 0.448 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 13.5 | 5.645 | 0.4181 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 17.7 | 5.645 | 0.3189 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 10 | 5.645 | 0.5645 | h→SI vs simulated h |
| T1_t_half_beta | reference | skipped |  | 5.645 |  | non-numeric value |
| T1_t_half_beta | reference | fail | 10 | 5.645 | 0.5645 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 17.7 | 5.645 | 0.3189 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_modelica.zip" download>Tolvaptan_Van2013_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_fmi.zip" download>Tolvaptan_Van2013_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_matlab.zip" download>Tolvaptan_Van2013_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_matlab_simbio.zip" download>Tolvaptan_Van2013_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_sbml.zip" download>Tolvaptan_Van2013_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_cellml.zip" download>Tolvaptan_Van2013_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4489 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 554.4 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-06 | kg |
| input | model | `Cl` | 4.444e-06 | m3/s |
| input | model | `VdPerKg` | 0.001586 | m3/kg |
| input | model | `k12` | 7.332e-06 | 1/s |
| input | model | `k21` | 2.609e-05 | 1/s |
| input | model | `ka` | 0.0002311 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Van Wart SA, Shoaf SE, Mallikaarjun S, Mager DE. Population pharmacokinetics of tolvaptan in healthy subjects and patients with hyponatremia secondary to congestive heart failure or hepatic cirrhosis. Biopharmaceutics & drug disposition 34(6):336–347 (2013). [doi:10.1002/bdd.1849](https://doi.org/10.1002/bdd.1849)

**This record:** Pharmacolibrary v26.09, model `Tolvaptan_Van2013_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_tolvaptan/Tolvaptan_Van2013_reference>

```bibtex
@misc{pharmacolibrary_TolvaptanVan2013reference,
  title  = {{Pharmacolibrary model Tolvaptan_Van2013_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_tolvaptan/Tolvaptan_Van2013_reference},
  note   = {Parameters from doi:10.1002/bdd.1849},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 5 mg, single dose, first-order absorption (ka 0.832 /h, lag 9.24 min, F 1). Doses in the paper: 5, 10, 15, 30, 60, 90 mg.

<dbs-fmusim paramsurl="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Tolvaptan_Van2013_reference_params.json` · controls `Tolvaptan_Van2013_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btolvaptan%5D%20Tolvaptan_Van2013_reference&body=Drug%3A%20tolvaptan%0ARecord%3A%20Tolvaptan_Van2013_reference%0APaper%3A%20Van_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tolvaptan/Tolvaptan_Van2013_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-20 18:54 UTC</sub>
