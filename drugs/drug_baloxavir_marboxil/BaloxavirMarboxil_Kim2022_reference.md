<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;baloxavir marboxil&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/&quot;},{&quot;label&quot;:&quot;Kim_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BaloxavirMarboxil_Kim2022_reference&quot;,&quot;label&quot;:&quot;Kim_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;BaloxavirMarboxil_Retout2026_reference&quot;,&quot;label&quot;:&quot;Retout_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# baloxavir marboxil — `BaloxavirMarboxil_Kim2022_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-07 14:33 UTC (Needs review), but the paper was screened again on 2026-10-07 15:33 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="baloxavir marboxil" model-id="BaloxavirMarboxil_Kim2022_reference" status="extracted" stale="true" population="healthy Korean and Japanese adults" measured-compound="baloxavir acid" parameterization="apparent" topology="1C"></div>

## Citation
Kim Y, Lee S, Kim Y, Jang IJ, Lee S. Pharmacokinetics and safety of a novel influenza treatment (baloxavir marboxil) in Korean subjects compared with Japanese subjects. Clinical and translational science 15(2):422–432 (2022).
  ·  DOI: [10.1111/cts.13160](https://doi.org/10.1111/cts.13160)

## Population and dosing

**Population:** healthy Korean and Japanese adults · condition healthy · age group adult · n = 48.

**Dosing:** 20, 40, 80 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed baloxavir marboxil, measured baloxavir acid.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, Q/F, Q2/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference/BaloxavirMarboxil_Kim2022_reference.svg" alt="BaloxavirMarboxil_Kim2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h) | CLm/F | 4.5 | L/h |
| Q 1/F (L/h) | Q/F | 9.8 | L/h |
| Q 2/F (L/h) | Q2/F | 2.86 | L/h |
| V c/F (L) | V1/F | 9.0 | L |
| V p1/F (L) | V2/F | 4.7 | L |
| V p2/F (L) | V3/F | 228 | L |
| F 1 | Fab | 9.6 |  |
| K a (1/h) | kabs | 11.3 | 1/h |
| ALAG1 (h) | tlag | 12.7 | h |
| D 2 (h) | t1/2β | 8.3 | h |
| theta_cl_f_body_weight | theta_cl_f_body_weight | 74 |  |
| theta_q76_body_weight | theta_q76_body_weight | 29.3 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The baloxavir acid model fails the Cmax check and is missing the V2/F parameter.**

The simulated peak concentration is 7.10419045677101e-05, while the expected value is 2.7799999999999998e-05. The record shows that V2/F was neither emitted nor included in the defaults. Covariate scenarios involving body weight were also not exercised during simulation. Extracted — baloxavir acid: CLm/F 7.43 L/h, Q/F 51 L/h, Q2/F 2.69 L/h, V1/F 251 L, V2/F 309 L, V3/F 224 L, Fab 0.625, kabs 0.917 1/h, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[alag1].value`: this record has 12.7, the second reading 0.175; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q351` · CLm/F | 4.5 | L/h | 1.25e-06 | m3/s | l/h | exact (1) | cts13160-tbl-0002:row3:col2, cts13160-tbl-0002:row3:col3, cts13160-tbl-0002:row3:col4, cts13160-tbl-0002:row3:col5 |
| Q 1/F (L/h) | `Q69` · Q/F | 9.8 | L/h | 2.722e-06 | m3/s | l/h | exact (1) | cts13160-tbl-0002:row4:col2, cts13160-tbl-0002:row4:col3, cts13160-tbl-0002:row4:col4, cts13160-tbl-0002:row4:col5 |
| Q 2/F (L/h) | `Q80` · Q2/F | 2.86 | L/h | 7.944e-07 | m3/s | l/h | special_case (0.95) | cts13160-tbl-0002:row5:col1, cts13160-tbl-0002:row5:col2, cts13160-tbl-0002:row5:col3, cts13160-tbl-0002:row5:col4 |
| V c/F (L) | `Q290` · V1/F | 9.0 | L | 0.009 | m3 | l | exact (1) | cts13160-tbl-0002:row7:col2, cts13160-tbl-0002:row7:col3, cts13160-tbl-0002:row7:col4, cts13160-tbl-0002:row7:col5 |
| V p1/F (L) | `Q82` · V2/F | 4.7 | L | 0.0047 | m3 | l | exact (1) | cts13160-tbl-0002:row8:col2, cts13160-tbl-0002:row8:col3, cts13160-tbl-0002:row8:col4, cts13160-tbl-0002:row8:col5 |
| V p2/F (L) | `Q78` · V3/F | 228 | L | 0.228 | m3 | l | exact (1) | cts13160-tbl-0002:row9:col1, cts13160-tbl-0002:row9:col2, cts13160-tbl-0002:row9:col3, cts13160-tbl-0002:row9:col4 |
| F 1 | `Q40` · Fab | 9.6 |  |  |  |  | space_fold (0.95) | cts13160-tbl-0002:row11:col2, cts13160-tbl-0002:row11:col3, cts13160-tbl-0002:row11:col4, cts13160-tbl-0002:row11:col5, cts13160-fig-0002:caption |
| K a (1/h) | `Q49` · kabs | 11.3 | 1/h | 0.003139 | 1/s | 1/h | exact (1) | cts13160-tbl-0002:row12:col2, cts13160-tbl-0002:row12:col3, cts13160-tbl-0002:row12:col4, cts13160-tbl-0002:row12:col5 |
| ALAG1 (h) | `Q83` · tlag | 12.7 | h | 4.572e+04 | s | h | exact (1) | cts13160-tbl-0002:row13:col2, cts13160-tbl-0002:row13:col3, cts13160-tbl-0002:row13:col4, cts13160-tbl-0002:row13:col5 |
| D 2 (h) | `Q60` · t1/2β | 8.3 | h | 2.988e+04 | s | h | llm (0.6) | cts13160-tbl-0002:row14:col2, cts13160-tbl-0002:row14:col3, cts13160-tbl-0002:row14:col4, cts13160-tbl-0002:row14:col5 |
| theta_cl_f_body_weight | `Q900` · theta_cl_f_body_weight | 74 |  |  |  |  |  | cts13160-tbl-0002:row6:col1, cts13160-tbl-0002:row6:col2, cts13160-tbl-0002:row6:col3, cts13160-tbl-0002:row6:col4 |
| theta_q76_body_weight | `Q900` · theta_q76_body_weight | 29.3 |  |  |  |  |  | cts13160-tbl-0002:row10:col1, cts13160-tbl-0002:row10:col2, cts13160-tbl-0002:row10:col3, cts13160-tbl-0002:row10:col4, cts13160-tbl-0002:row10:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'σ prop (%)' routed out of structural estimates ('Residual error')
- column 'description' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q83 ('ALAG2 (h)', value '8.7') — already have one for this compound
- dropped value-less row: 'F 2'
- dropped value-less row: 'D 2'
- dropped value-less row: 'K a'
- dropped value-less row: 'V c/F'
- dropped value-less row: 'V p1/F'
- dropped value-less row: 'V p2/F'
- dropped value-less row: 'Q 1/F'
- dropped value-less row: 'Q 2/F'
- dropped value-less row: 'CL/F'
- covariate effect for Q76 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'K a (1/h)' → 1/h (from the paper text: "Text states 'first‐order absorption rate constant (k a, 0.917/h)', indicating rate constants are in 1/h.")
- metabolite baloxavir acid: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=baloxavir acid
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- row roles (LLM): model_class=compartmental; 31/31 row label(s) assigned, 43 linked by role
- review gap-fill skipped: this record measures 'baloxavir acid', not baloxavir_marboxil — the review values are the parent's

**Extraction notes:**
- unparsed cell cts13160-tbl-0002:row6:col5 = '−0.325 to 1.718'
- unparsed cell cts13160-tbl-0002:row21:col1 = 'Interindividual variability of ALAG1'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.222 (4/18 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alag1].value` | 12.7 | 0.175 | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].parameter_id` | Q351 | Q27 | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].value` | 4.5 | 6.76 | mismatch |
| `gpt-oss-120b` | `parameters[d 2].value` | 8.3 | 2.11 | mismatch |
| `gpt-oss-120b` | `parameters[f 1].value` | 9.6 | 0.50 | mismatch |
| `gpt-oss-120b` | `parameters[k a].value` | 11.3 | 0.684 | mismatch |
| `gpt-oss-120b` | `parameters[q 1/f].value` | 9.8 | 43.8 | mismatch |
| `gpt-oss-120b` | `parameters[q 2/f]` | 2.86 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_body_weight].value` | 74 | 0.617 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q76_body_weight].value` | 29.3 | 0.161 | mismatch |
| `gpt-oss-120b` | `parameters[v c/f].value` | 9.0 | 192 | mismatch |
| `gpt-oss-120b` | `parameters[v p1/f].value` | 4.7 | 269 | mismatch |
| `gpt-oss-120b` | `parameters[v p2/f].value` | 228 | 196 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['cts13160-tbl-0002:row7:col2', 'cts13160-tbl-0002:row7:col3', 'cts13160-tbl-0002:row7:col4', 'cts13160-tbl-0002:row7:col5'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['cts13160-tbl-0002:row3:col2', 'cts13160-tbl-0002:row3:col3', 'cts13160-tbl-0002:row3:col4', 'cts13160-tbl-0002:row3:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cts13160-tbl-0002:row12:col2', 'cts13160-tbl-0002:row12:col3', 'cts13160-tbl-0002:row12:col4', 'cts13160-tbl-0002:row12:col5'] |
| C5_dimension_Q60 | pass | [time] |  | ['cts13160-tbl-0002:row14:col2', 'cts13160-tbl-0002:row14:col3', 'cts13160-tbl-0002:row14:col4', 'cts13160-tbl-0002:row14:col5'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['cts13160-tbl-0002:row4:col2', 'cts13160-tbl-0002:row4:col3', 'cts13160-tbl-0002:row4:col4', 'cts13160-tbl-0002:row4:col5'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['cts13160-tbl-0002:row9:col1', 'cts13160-tbl-0002:row9:col2', 'cts13160-tbl-0002:row9:col3', 'cts13160-tbl-0002:row9:col4'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] |  | ['cts13160-tbl-0002:row5:col1', 'cts13160-tbl-0002:row5:col2', 'cts13160-tbl-0002:row5:col3', 'cts13160-tbl-0002:row5:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['cts13160-tbl-0002:row8:col2', 'cts13160-tbl-0002:row8:col3', 'cts13160-tbl-0002:row8:col4', 'cts13160-tbl-0002:row8:col5'] |
| C5_dimension_Q83 | pass | [time] |  | ['cts13160-tbl-0002:row13:col2', 'cts13160-tbl-0002:row13:col3', 'cts13160-tbl-0002:row13:col4', 'cts13160-tbl-0002:row13:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 9 L | ['cts13160-tbl-0002:row7:col2', 'cts13160-tbl-0002:row7:col3', 'cts13160-tbl-0002:row7:col4', 'cts13160-tbl-0002:row7:col5'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 4.7 L | ['cts13160-tbl-0002:row8:col2', 'cts13160-tbl-0002:row8:col3', 'cts13160-tbl-0002:row8:col4', 'cts13160-tbl-0002:row8:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=baloxavir acid) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | fail | 6 scholar param(s) emitted or defaulted | 5 covered |  | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 2.78e-05 | 7.104e-05 | 2.555 | ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | pass | 5.72e-05 | 7.104e-05 | 1.242 | ng/ml→SI vs simulated kg/m3 |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference/BaloxavirMarboxil_Kim2022_reference_modelica.zip" download>BaloxavirMarboxil_Kim2022_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference/BaloxavirMarboxil_Kim2022_reference_fmi.zip" download>BaloxavirMarboxil_Kim2022_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4835 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 4.572e+04 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2e-05 | kg |
| input | model | `Cl` | 1.25e-06 | m3/s |
| input | model | `VdPerKg` | 0.0001286 | m3/kg |
| input | model | `ka` | 0.003139 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kim Y, Lee S, Kim Y, Jang IJ, Lee S. Pharmacokinetics and safety of a novel influenza treatment (baloxavir marboxil) in Korean subjects compared with Japanese subjects. Clinical and translational science 15(2):422–432 (2022). [doi:10.1111/cts.13160](https://doi.org/10.1111/cts.13160)

**This record:** Pharmacolibrary v26.09, model `BaloxavirMarboxil_Kim2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference>

```bibtex
@misc{pharmacolibrary_BaloxavirMarboxilKim2022reference,
  title  = {{Pharmacolibrary model BaloxavirMarboxil_Kim2022_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference},
  note   = {Parameters from doi:10.1111/cts.13160},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 20 mg, single dose, first-order absorption (ka 11.3 /h, lag 762 min, F 1). Doses in the paper: 20, 40, 80 mg.

<dbs-fmusim paramsurl="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference/BaloxavirMarboxil_Kim2022_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference/BaloxavirMarboxil_Kim2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `BaloxavirMarboxil_Kim2022_reference_params.json` · controls `BaloxavirMarboxil_Kim2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbaloxavir_marboxil%5D%20BaloxavirMarboxil_Kim2022_reference&body=Drug%3A%20baloxavir_marboxil%0ARecord%3A%20BaloxavirMarboxil_Kim2022_reference%0APaper%3A%20Kim_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 15:33 UTC</sub>
