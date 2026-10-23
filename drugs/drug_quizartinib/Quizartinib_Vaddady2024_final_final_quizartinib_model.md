<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;quizartinib&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/&quot;},{&quot;label&quot;:&quot;Vaddady_2024 \u00b7 final_final_quizartinib_model&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quizartinib — `Quizartinib_Vaddady2024_final_final_quizartinib_model`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Quizartinib’s clearance-ratio parameter is −0.301, producing the implausible negative-clearance scenario that led to rejection.

<div class="pk-model-meta" hidden drug="quizartinib" model-id="Quizartinib_Vaddady2024_final_final_quizartinib_model" status="rejected" stale="false" population="newly diagnosed and relapsed/refractory FLT3-ITD-positive AML patients and non-AML subjects" measured-compound="quizartinib" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Vaddady P, Glatard A, Smania G, Nakayama S, Inoue H, Kurumaddali A et al. Population pharmacokinetic analysis of quizartinib in patients with newly diagnosed FLT3-internal-tandem-duplication-positive acute myeloid leukemia. Clinical and translational science 17(12):e70074 (2024).
  ·  DOI: [10.1111/cts.70074](https://doi.org/10.1111/cts.70074)

## Population and dosing

**Population:** newly diagnosed and relapsed/refractory FLT3-ITD-positive AML patients and non-AML subjects · condition acute myeloid leukemia.

**Dosing:** 20, 90 mg/day, oral.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted, plus 5 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CLquiz | CL | 6.65 | L/h |  |
| V c,quiz | V1 | 371 | L |  |
| Q 1,quiz | Q | 40.7 | L/h |  |
| V p1,quiz | V2 | 312 | L |  |
| Q 2,quiz | Q2 | 0.757 | L/h |  |
| V p2,quiz | V3 | 91.9 | L |  |
| T lag | tlag | 0.196 | h | 0.647 (None% RSE) |
| k a | kabs | 1.10 | 1/h | 0.423 (None% RSE) |
| D1 | D1 | 0.710 | h | 0.821 (None% RSE) |
| Fractional change in CLquiz with strong CYP3A inhibitors | CL_ratio | -0.301 |  |  |
| Fractional change in F rel with strong CYP3A inhibitors | Frel | 0.273 |  | -1.28 (None% RSE) |
| fractional_change_in_k_a_for_non_aml_subjects | fractional_change_in_k_a_for_non_aml_subjects | -0.188 |  |  |
| theta_frel_category | theta_frel_category | 1.73 |  |  |
| theta_v2_age | theta_v2_age | 0.0152 |  |  |
| theta_q900_race | theta_q900_race | -0.261 |  |  |
| theta_v1_category | theta_v1_category | -0.169 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Quizartinib’s clearance-ratio parameter is −0.301, producing the implausible negative-clearance scenario that led to rejection.**

The record identifies this parameter as the ratio of quizartinib clearances with strong CYP3A inhibitors and gives its value as −0.301. The reported finding is an implausible negative clearance in a covariate scenario or the base model. Extracted — quizartinib: CL 6.65 L/h, V1 371 L, Q 40.7 L/h, V2 312 L, Q2 0.757 L/h, V3 91.9 L, tlag 0.196 h, kabs 1.1 1/h, … (+3).

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of fractional_change_in_k_a_for_non_aml_subjects: this record has -0.188, the second reading none; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CLquiz | `Q22` · CL | 6.65 | L/h | 1.847e-06 | m3/s | L/h | llm (0.6) | cts70074-tbl-0003:row2:col2, cts70074-tbl-0003:row2:col3 |  |
| V c,quiz | `Q63` · V1 | 371 | L | 0.371 | m3 | L | llm (0.6) | cts70074-tbl-0003:row3:col2, cts70074-tbl-0003:row3:col3 |  |
| Q 1,quiz | `Q30` · Q | 40.7 | L/h | 1.131e-05 | m3/s | L/h | exact (1) | cts70074-tbl-0003:row4:col2, cts70074-tbl-0003:row4:col3 |  |
| V p1,quiz | `Q64` · V2 | 312 | L | 0.312 | m3 | L | exact (1) | cts70074-tbl-0003:row5:col2, cts70074-tbl-0003:row5:col3 |  |
| Q 2,quiz | `Q99` · Q2 | 0.757 | L/h | 2.103e-07 | m3/s | L/h | exact (1) | cts70074-tbl-0003:row6:col2, cts70074-tbl-0003:row6:col3 |  |
| V p2,quiz | `Q77` · V3 | 91.9 | L | 0.0919 | m3 | L | exact (1) | cts70074-tbl-0003:row7:col2, cts70074-tbl-0003:row7:col3 |  |
| T lag | `Q83` · tlag | 0.196 | h | 705.6 | s | h | space_fold (0.95) | cts70074-tbl-0003:row8:col2, cts70074-tbl-0003:row8:col3 | 0.647 (None% RSE) |
| k a | `Q49` · kabs | 1.10 | 1/h | 0.0003056 | 1/s | 1/h | space_fold (0.95) | cts70074-tbl-0003:row9:col1, cts70074-tbl-0003:row9:col2, cts70074-tbl-0003:row9:col3 | 0.423 (None% RSE) |
| D1 | `Q310` · D1 | 0.710 | h | 2556 | s | h | exact (1) | cts70074-tbl-0003:row10:col2, cts70074-tbl-0003:row10:col3 | 0.821 (None% RSE) |
| Fractional change in CLquiz with strong CYP3A inhibitors | `Q31` · CL_ratio | -0.301 |  |  |  |  | llm (0.6) | cts70074-tbl-0003:row11:col2, cts70074-tbl-0003:row11:col3 |  |
| Fractional change in F rel with strong CYP3A inhibitors | `Q87` · Frel | 0.273 |  |  |  |  | llm_confirmed (0.6) | cts70074-tbl-0003:row12:col2, cts70074-tbl-0003:row12:col3 | -1.28 (None% RSE) |
| fractional_change_in_k_a_for_non_aml_subjects | `Q900` · fractional_change_in_k_a_for_non_aml_subjects | -0.188 |  |  |  |  |  | cts70074-tbl-0003:row15:col2, cts70074-tbl-0003:row15:col3 |  |
| theta_frel_category | `Q900` · theta_frel_category | 1.73 |  |  |  |  |  | cts70074-tbl-0003:row13:col2, cts70074-tbl-0003:row13:col3 |  |
| theta_v2_age | `Q900` · theta_v2_age | 0.0152 |  |  |  |  |  | cts70074-tbl-0003:row16:col1, cts70074-tbl-0003:row16:col2, cts70074-tbl-0003:row16:col3 |  |
| theta_q900_race | `Q900` · theta_q900_race | -0.261 |  |  |  |  |  | cts70074-tbl-0003:row17:col2, cts70074-tbl-0003:row17:col3 |  |
| theta_v1_category | `Q900` · theta_v1_category | -0.169 |  |  |  |  |  | cts70074-tbl-0003:row18:col2, cts70074-tbl-0003:row18:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q87 ('Fractional change in F rel with moderate CYP3A inhibitors', value '0.116') — already have one for this compound
- covariate level 'Fractional change in k a for non‐AML subjects' → Q900:fractional_change_in_k_a_for_non_aml_subjects = -0.188 (additive_shift on Q22)
- dropped duplicate Q87 ('Fractional change in F rel during Induction', value '-0.419') — already have one for this compound
- dropped duplicate Q87 ('Fractional change in F rel during Consolidation', value '-0.192') — already have one for this compound
- dropped duplicate Q87 ('Fractional change in F rel during Continuation', value '0.418') — already have one for this compound
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['cts70074-tbl-0003:row33:col2'])
- dropped unlinked row (NIL): 'Condition number' — extend the ontology if this is a real PK parameter (source ['cts70074-tbl-0003:row34:col2'])
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CLquiz' → L/h (from the popPK convention: 'Clearance is conventionally expressed in L/h; 6.65 is consistent with an apparent clearance in this unit.')
- implicit units: 'V c,quiz' → L (from the popPK convention: 'Central compartment volume is conventionally expressed in L; 371 is consistent with a volume in this unit.')
- implicit units: 'Q 1,quiz' → L/h (from the popPK convention: 'Intercompartmental clearance is conventionally expressed in L/h; 40.7 is consistent with a clearance in this unit.')
- implicit units: 'V p1,quiz' → L (from the popPK convention: 'Peripheral compartment volume is conventionally expressed in L; 312 is consistent with a volume in this unit.')
- implicit units: 'Q 2,quiz' → L/h (from the popPK convention: 'Intercompartmental clearance is conventionally expressed in L/h; 0.757 is consistent with a clearance in this unit.')
- implicit units: 'V p2,quiz' → L (from the popPK convention: 'Peripheral compartment volume is conventionally expressed in L; 91.9 is consistent with a volume in this unit.')
- implicit units: 'T lag' → h (from the popPK convention: 'Absorption lag time is conventionally expressed in hours; 0.196 is consistent with a time in this unit.')
- implicit units: 'k a' → 1/h (from the popPK convention: 'A first-order absorption rate constant is conventionally expressed in 1/h; 1.10 is consistent with a rate constant in th')
- implicit units: 'D1' → h (from the popPK convention: 'Duration of zero-order input is conventionally expressed in hours; 0.710 is consistent with a duration in this unit.')
- implicit units: 'Fractional change in CLquiz with strong CYP3A inhibitors' — the LLM proposed 'dimensionless', whose dimension does not fit Q31; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CLquiz); Q63 (V c,quiz); Q30 (Q 1,quiz); Q64 (V p1,quiz); Q99 (Q 2,quiz)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quizartinib
- template fit: PK_3M_9C — formed from central; parent 3, metabolites [0]
- model equation 'COVEffWT = (WT/75)^θ' not bound — neither LHS nor base term 'WT' linked to an ontology parameter
- model-stage split: 'final quizartinib model' is the final model of Vaddady_2024 (paper reports 2 stages: final ac886 model, final quizartinib model); same population, different model-building step
- row roles (LLM): model_class=compartmental; 33/33 row label(s) assigned, 25 linked by role; re-tagged quizartinib→parent ×74, AC886→parent ×37

**Extraction notes:**
- unparsed cell cts70074-tbl-0003:row2:col5 = 'CLAC886'
- unparsed cell cts70074-tbl-0003:row3:col5 = 'V c,AC886'
- unparsed cell cts70074-tbl-0003:row4:col5 = 'V p,AC886'
- unparsed cell cts70074-tbl-0003:row5:col5 = 'Q AC886'
- unparsed cell cts70074-tbl-0003:row11:col5 = 'Fractional change in CLAC886 for non‐AML subjects'
- unparsed cell cts70074-tbl-0003:row12:col5 = 'Fractional change in CLAC886 for Black race'
- unparsed cell cts70074-tbl-0003:row13:col5 = 'Fractional change in CLAC886 with strong CYP3A inhibitors'
- unparsed cell cts70074-tbl-0003:row14:col5 = 'Fractional change in V c,AC886 with strong CYP3A inhibitors'
- unparsed cell cts70074-tbl-0003:row23:col5 = 'IIV CLAC886 AML patients'
- unparsed cell cts70074-tbl-0003:row24:col5 = 'IIV CLAC886 non‐AML subjects'
- unparsed cell cts70074-tbl-0003:row25:col5 = 'IIV V c,AC886'
- LLM selected parameter table(s) 3
- captured model equation COVEffWT = (WT/75)^θ

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.6 (18/30 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[fractional_change_in_k_a_for_non_aml_subjects]` | -0.188 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[k a].covariate_forms` | [] | ['additive_shift'] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_race]` |  | -0.261 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_kabs_category]` |  | -0.188 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q900_race]` | -0.261 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v1_category]` | -0.169 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v2_age]` | 0.0152 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v_age]` |  | 0.0152 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v_category]` |  | -0.169 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v c,quiz].covariate_forms` | ['additive_shift'] | ['additive_shift', 'linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[v c,quiz].parameter_id` | Q63 | Q61 | mismatch |
| `qwen3.8-27b` | `parameters[v p1,quiz].covariate_forms` | ['linear_fractional'] | [] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_base_sign_Q31 | fail |  | -0.301 |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cts70074-tbl-0003:row2:col2', 'cts70074-tbl-0003:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['cts70074-tbl-0003:row4:col2', 'cts70074-tbl-0003:row4:col3'] |
| C5_dimension_Q310 | pass | [time] |  | ['cts70074-tbl-0003:row10:col2', 'cts70074-tbl-0003:row10:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cts70074-tbl-0003:row9:col1', 'cts70074-tbl-0003:row9:col2', 'cts70074-tbl-0003:row9:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['cts70074-tbl-0003:row3:col2', 'cts70074-tbl-0003:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cts70074-tbl-0003:row5:col2', 'cts70074-tbl-0003:row5:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['cts70074-tbl-0003:row7:col2', 'cts70074-tbl-0003:row7:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['cts70074-tbl-0003:row8:col2', 'cts70074-tbl-0003:row8:col3'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['cts70074-tbl-0003:row6:col2', 'cts70074-tbl-0003:row6:col3'] |
| C5_unit_missing_Q31 | fail | [length] ** 3 / [time] |  | ['cts70074-tbl-0003:row11:col2', 'cts70074-tbl-0003:row11:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.65 | ['cts70074-tbl-0003:row2:col2', 'cts70074-tbl-0003:row2:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 6.65 L/h | ['cts70074-tbl-0003:row2:col2', 'cts70074-tbl-0003:row2:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 371 L | ['cts70074-tbl-0003:row3:col2', 'cts70074-tbl-0003:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 312 L | ['cts70074-tbl-0003:row5:col2', 'cts70074-tbl-0003:row5:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquizartinib%5D%20Quizartinib_Vaddady2024_final_final_quizartinib_model&body=Drug%3A%20quizartinib%0ARecord%3A%20Quizartinib_Vaddady2024_final_final_quizartinib_model%0APaper%3A%20Vaddady_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_quizartinib/Quizartinib_Vaddady2024_final_final_quizartinib_model%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 05:30 UTC</sub>
