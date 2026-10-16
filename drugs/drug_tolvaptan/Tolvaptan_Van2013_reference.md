<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03X&quot;,&quot;href&quot;:&quot;atc/C03X.md&quot;},{&quot;label&quot;:&quot;tolvaptan&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/&quot;},{&quot;label&quot;:&quot;Van_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tolvaptan_Lanke2019_reference&quot;,&quot;label&quot;:&quot;Lanke_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Lanke2019_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Plosker2010_reference&quot;,&quot;label&quot;:&quot;Plosker_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Plosker2010_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Shoaf2017_reference&quot;,&quot;label&quot;:&quot;Shoaf_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Shoaf2017_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Van2013_reference&quot;,&quot;label&quot;:&quot;Van_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Van2013_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Tolvaptan_Bhatt2014_reference&quot;,&quot;label&quot;:&quot;Bhatt_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Bhatt2014_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tolvaptan — `Tolvaptan_Van2013_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.974), gpt-oss:120b (not confirmed, agreement 0.921). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 10, model 5.64); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (theta_cl_f_chf_nyha_class_1_or_2, theta_cl_f_chf_nyha_class_3_or_4, theta_cl_f_cirrhosis_child_pugh_score_ge_6_l_h and theta_cl_f_hyponatremia_moderate_hyponatremia), so that value has no SI equivalent. Extracted — tolvaptan: tlag 0.154 h, kabs 0.832 h^-1, CL/F 16 l/h, V1/F 111 l, Q/F 2.93 l/h, V2/F 31.2 l.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has tolvaptan, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:41:50.332340+00:00) predates the upstream re-run (2026-10-06 19:25:37.937787+00:00). Current validate status: `extracted`.

## Citation
Van Wart SA et al., Population pharmacokinetics of tolvapta…, Biopharmaceutics & drug dis… (2013)
  ·  DOI: [10.1002/bdd.1849](https://doi.org/10.1002/bdd.1849)

<div class="pk-model-meta" hidden drug="tolvaptan" model-id="Tolvaptan_Van2013_reference" status="extracted" stale="true" population="healthy subjects and patients with hyponatremia secondary to congestive heart failure or hepatic cirrhosis" measured-compound="tolvaptan" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted, plus 9 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t_lag (h) | `Q83` · tlag | 0.154 | h | 554.4 | [h] | 2.28 | exact (1.0) | Van_2013_table_p8_1:row0:col1, Van_2013_table_p8_1:row0:col2 | — | not captured |
| k_a (h^-1) | `Q49` · kabs | 0.832 | h^-1 | 0.0002311111111111111 | [1] / [h] | 5.76 | exact (1.0) | Van_2013_table_p8_1:row1:col1, Van_2013_table_p8_1:row1:col2 | — | not captured |
| CL/F (l/h) | `Q27` · CL/F | 16.0 | l/h | 4.444444444444444e-06 | [l] / [h] | 7.56 | exact (1.0) | Van_2013_table_p8_1:row3:col1, Van_2013_table_p8_1:row3:col2 | — | not captured |
| V_c/F (l) | `Q290` · V1/F | 111 | l | 0.111 | [l] | 6.80 | exact (1.0) | Van_2013_table_p8_1:row9:col1, Van_2013_table_p8_1:row9:col2 | — | not captured |
| CL_d/F (l/h) | `Q69` · Q/F | 2.93 | l/h | 8.13888888888889e-07 | [l] / [h] | 8.94 | exact (1.0) | Van_2013_table_p8_1:row14:col1, Van_2013_table_p8_1:row14:col2 | — | not captured |
| V_p/F (l) | `Q82` · V2/F | 31.2 | l | 0.0312 | [l] | 9.74 | exact (1.0) | Van_2013_table_p8_1:row15:col1, Van_2013_table_p8_1:row15:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.372 | not captured | not captured | not captured | 22.3 | not captured (not captured) | Van_2013_table_p8_1:row4:col1, Van_2013_table_p8_1:row4:col2 | — | not captured |
| theta_cl_f_chf_nyha_class_1_or_2 | `Q900` · theta_cl_f_chf_nyha_class_1_or_2 | -6.69 | l/h | not captured | not captured | 19.6 | not captured (not captured) | Van_2013_table_p8_1:row5:col1, Van_2013_table_p8_1:row5:col2 | — | not captured |
| theta_cl_f_chf_nyha_class_3_or_4 | `Q900` · theta_cl_f_chf_nyha_class_3_or_4 | -8.72 | l/h | not captured | not captured | 13.8 | not captured (not captured) | Van_2013_table_p8_1:row6:col1, Van_2013_table_p8_1:row6:col2 | — | not captured |
| theta_cl_f_cirrhosis_child_pugh_score_ge_6_l_h | `Q900` · theta_cl_f_cirrhosis_child_pugh_score_ge_6_l_h | -6.72 | l/h | not captured | not captured | 17.1 | not captured (not captured) | Van_2013_table_p8_1:row7:col1, Van_2013_table_p8_1:row7:col2 | — | not captured |
| theta_cl_f_hyponatremia_moderate_hyponatremia | `Q900` · theta_cl_f_hyponatremia_moderate_hyponatremia | -2.92 | l/h | not captured | not captured | 21.2 | not captured (not captured) | Van_2013_table_p8_1:row8:col1, Van_2013_table_p8_1:row8:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.678 | not captured | not captured | not captured | 17.3 | not captured (not captured) | Van_2013_table_p8_1:row10:col1, Van_2013_table_p8_1:row10:col2 | — | not captured |
| theta_v1_f_chf_nyha_class_1_or_2 | `Q900` · theta_v1_f_chf_nyha_class_1_or_2 | -44.5 | l | not captured | not captured | 18.2 | not captured (not captured) | Van_2013_table_p8_1:row11:col1, Van_2013_table_p8_1:row11:col2 | — | not captured |
| theta_v1_f_chf_nyha_class_3_or_4 | `Q900` · theta_v1_f_chf_nyha_class_3_or_4 | -54.1 | l | not captured | not captured | 13.9 | not captured (not captured) | Van_2013_table_p8_1:row12:col1, Van_2013_table_p8_1:row12:col2 | — | not captured |
| theta_v1_f_cirrhosis_child_pugh_score_ge_10_l | `Q900` · theta_v1_f_cirrhosis_child_pugh_score_ge_10_l | 71.9 | l | not captured | not captured | 27.0 | not captured (not captured) | Van_2013_table_p8_1:row13:col1, Van_2013_table_p8_1:row13:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Relative oral bioavailability (F) | Q87 | not captured | exact |

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped value-less row: 'ω^2 for k_3'
- dropped value-less row: 'ω^2 for CL/F'
- dropped value-less row: 'ω^2 for V_c/F'
- dropped value-less row: 'ω^2 for CL_d/F'
- dropped value-less row: 'ω^2 for V_p/F'
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- theta_v1_f_cirrhosis_child_pugh_score_ge_10_l: label says 'decrease' but the reported value is 71.9 (positive) — curated as an INCREASE, per the printed number
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tolvaptan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell Van_2013_table_p8_1:row16:col1 = '0.244 (49.4% CV)'
- unparsed cell Van_2013_table_p8_1:row17:col1 = '0.298 (54.6% CV)'
- unparsed cell Van_2013_table_p8_1:row18:col1 = '0.271 (52.1% CV)'
- unparsed cell Van_2013_table_p8_1:row20:col1 = '0.230 (48.0% CV)'
- unparsed cell Van_2013_table_p8_1:row21:col1 = '0.381 (61.7% CV)'
- unparsed cell Van_2013_table_p8_1:row23:col1 = '1.95 (140% CV)'
- unparsed cell Van_2013_table_p8_1:row24:col1 = '0.0910 (30.2% CV)'
- skipped illustrative/example figure caption(s) fig_1 — per-individual fit, not model parameters

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.974 (37/38 fields) | 1 |
| `gpt-oss:120b` | not confirmed | 0.921 (35/38 fields) | 3 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | tolvaptan | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | tolvaptan | unknown | mismatch |

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
| `Q87` · Frel | missing_in_extraction | None | None | not captured |
| `Q900:theta_cl_f_chf_nyha_class_1_or_2` | match | -6.69 l/h | -6.69 l/h | 1.0 |
| `Q900:theta_cl_f_chf_nyha_class_3_or_4` | match | -8.72 l/h | -8.72 l/h | 1.0 |
| `Q900:theta_cl_f_cirrhosis_child_pugh_score_ge_6_l_h` | match | -6.72 l/h | -6.72 l/h | 1.0 |
| `Q900:theta_cl_f_hyponatremia_moderate_hyponatremia` | match | -2.92 l/h | -2.92 l/h | 1.0 |
| `Q900:theta_cl_f_weight_power` | missing_in_extraction | None | 0.372 | not captured |
| `Q900:theta_q319_weight_power` | extra_in_extraction | 0.678 | None | not captured |
| `Q900:theta_v1_f_chf_nyha_class_1_or_2` | match | -44.5 l | -44.5 l | 1.0 |
| `Q900:theta_v1_f_chf_nyha_class_3_or_4` | match | -54.1 l | -54.1 l | 1.0 |
| `Q900:theta_v1_f_cirrhosis_child_pugh_score_ge_10_l` | match | 71.9 l | 71.9 l | 1.0 |
| `Q900:theta_v1_f_weight_power` | missing_in_extraction | None | 0.678 | not captured |

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_alpha | pass | 3.6 | 3.554 | 0.9872 | 0.25 | reported t½α |
| C1_half_life_beta | pass | 10.0 | 9.988 | 0.9988 | 0.25 | reported t½β |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Van_2013_table_p8_1:row3:col1', 'Van_2013_table_p8_1:row3:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Van_2013_table_p8_1:row9:col1', 'Van_2013_table_p8_1:row9:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Van_2013_table_p8_1:row1:col1', 'Van_2013_table_p8_1:row1:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Van_2013_table_p8_1:row14:col1', 'Van_2013_table_p8_1:row14:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Van_2013_table_p8_1:row15:col1', 'Van_2013_table_p8_1:row15:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Van_2013_table_p8_1:row0:col1', 'Van_2013_table_p8_1:row0:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 16 L/h | not captured | not captured | ['Van_2013_table_p8_1:row3:col1', 'Van_2013_table_p8_1:row3:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 111 L | not captured | not captured | ['Van_2013_table_p8_1:row9:col1', 'Van_2013_table_p8_1:row9:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 31.2 L | not captured | not captured | ['Van_2013_table_p8_1:row15:col1', 'Van_2013_table_p8_1:row15:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=tolvaptan) | C_central | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_alpha | reference | skipped | 3.6 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 3.2 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 4.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 5.7 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | fail | 10.0 | 5.644625498258702 | 0.5645 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 11.5 | 5.644625498258702 | 0.4908 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 12.6 | 5.644625498258702 | 0.448 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 13.5 | 5.644625498258702 | 0.4181 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 17.7 | 5.644625498258702 | 0.3189 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 10.0 | 5.644625498258702 | 0.5645 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 11.5 | 5.644625498258702 | 0.4908 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 12.6 | 5.644625498258702 | 0.448 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 10.0 | 5.644625498258702 | 0.5645 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 17.7 | 5.644625498258702 | 0.3189 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tolvaptan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Van_2013` / `Van_2013::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tolvaptan/models/modelica/Tolvaptan_Van2013_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tolvaptan/models/modelica/Tolvaptan_Van2013_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tolvaptan/models/modelica/Tolvaptan_Van2013_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_modelica.zip" download>Tolvaptan_Van2013_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_fmi.zip" download>Tolvaptan_Van2013_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_matlab.zip" download>Tolvaptan_Van2013_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_matlab_simbio.zip" download>Tolvaptan_Van2013_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_sbml.zip" download>Tolvaptan_Van2013_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_cellml.zip" download>Tolvaptan_Van2013_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference.svg" alt="Tolvaptan_Van2013_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 5 mg, single dose, first-order absorption (ka 0.832 /h, lag 9.24 min, F 1). Doses in the paper: 5, 10, 15, 30, 60, 90 mg.

<dbs-fmusim paramsurl="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Tolvaptan_Van2013_reference_params.json` · controls `Tolvaptan_Van2013_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 19:25 UTC</sub>
