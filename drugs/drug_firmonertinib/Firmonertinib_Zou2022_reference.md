<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;firmonertinib&quot;,&quot;href&quot;:&quot;drugs/drug_firmonertinib/&quot;},{&quot;label&quot;:&quot;Zou_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# firmonertinib — `Firmonertinib_Zou2022_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span>

<div class="pk-model-meta" hidden drug="firmonertinib" model-id="Firmonertinib_Zou2022_reference" status="not_simulated" stale="false" population="NSCLC patients and healthy volunteers" measured-compound="furmonertinib" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Zou HX, Zhang YF, Zhong DF, Jiang Y, Liu F, Zhao QY et al. Effect of autoinduction and food on the pharmacokinetics of furmonertinib and its active metabolite characterized by a population pharmacokinetic model. Acta pharmacologica Sinica 43(7):1865–1874 (2022).
  ·  DOI: [10.1038/s41401-021-00798-y](https://doi.org/10.1038/s41401-021-00798-y)

## Population and dosing

**Population:** NSCLC patients and healthy volunteers · condition non-small cell lung cancer · age group adult · n = 54.

**Dosing:** 20, 40, 80, 160, 240 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted, plus 3 covariate effects.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL base /F (L/h) | CL/F | 70.5 | L/h | 6.41 |  |
| V c /F (L) | V1/F | 2897 | L | 6.35 |  |
| k a (1/h) | kabs | 1.34 | 1/h | 5.63 |  |
| Q/F (L/h) | Q/F | 12.4 | L/h | 34.2 |  |
| V p /F (L) | V2/F | 1470 | L | 26.7 |  |
| CL m /(F • Fm) (L/h) | CL | 119 | L/h | 3.56 |  |
| V cm /(F • Fm) (L) | V | 291 | L | 9.27 | 0.144 (3.39% RSE) |
| k 67 (1/h) | kcomp | 0.952 | 1/h | 17.5 |  |
| k 76 (1/h) | kel | 0.0542 | 1/h | 9.20 |  |
| f_food | f_food | 0.224 |  | 38.3 |  |
| theta_q319_body_weight_power | theta_q319_body_weight_power | 0.622 |  | 27.8 |  |
| theta_q45_food_fm | theta_q45_food_fm | -0.335 |  | 7.87 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.774), qwen3.8-27b (not confirmed, agreement 0.594). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was built but has not been simulated yet; the covariate scenarios were not simulated (+3 more).**

The base model was simulated, not the covariate effects the record defines. Extracted — firmonertinib: CL/F 70.5 L/h, V1/F 2.9e+03 L, kabs 1.34 1/h, Q/F 12.4 L/h, V2/F 1.47e+03 L; AST5902: CL 119 L/h, V 291 L, kcomp 0.952 1/h, kel 0.0542 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl base /f].covariate_forms`: this record has ['linear_fractional'], the second reading none; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL base /F (L/h) | `Q27` · CL/F | 70.5 | L/h | 1.958e-05 | m3/s | l/h | 6.41 | llm_corrected (0.6) | tab_1:row2:col2 |  |
| V c /F (L) | `Q290` · V1/F | 2897 | L | 2.897 | m3 | l | 6.35 | space_fold (0.95) | tab_1:row3:col2 |  |
| k a (1/h) | `Q49` · kabs | 1.34 | 1/h | 0.0003722 | 1/s | 1/h | 5.63 | exact (1) | tab_1:row4:col0, tab_1:row4:col2 |  |
| Q/F (L/h) | `Q69` · Q/F | 12.4 | L/h | 3.444e-06 | m3/s | l/h | 34.2 | exact (1) | tab_1:row5:col2 |  |
| V p /F (L) | `Q82` · V2/F | 1470 | L | 1.47 | m3 | l | 26.7 | space_fold (0.95) | tab_1:row6:col2 |  |
| CL m /(F • Fm) (L/h) | `Q22` · CL | 119 | L/h | 3.306e-05 | m3/s | l/h | 3.56 | exact (1) | tab_1:row9:col2 |  |
| V cm /(F • Fm) (L) | `Q61` · V | 291 | L | 0.291 | m3 | l | 9.27 | exact (1) | tab_1:row10:col2 | 0.144 (3.39% RSE) |
| k 67 (1/h) | `Q48` · kcomp | 0.952 | 1/h | 0.0002644 | 1/s | 1/h | 17.5 | llm_confirmed (0.6) | tab_1:row11:col0, tab_1:row11:col2 |  |
| k 76 (1/h) | `Q47` · kel | 0.0542 | 1/h | 1.506e-05 | 1/s | 1/h | 9.20 | llm (0.6) | tab_1:row12:col0, tab_1:row12:col2 |  |
| f_food | `Q900` · f_food | 0.224 |  |  |  |  | 38.3 |  | tab_1:row16:col2 |  |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.622 |  |  |  |  | 27.8 |  | tab_1:row15:col2 |  |
| theta_q45_food_fm | `Q900` · theta_q45_food_fm | -0.335 |  |  |  |  | 7.87 |  | tab_1:row17:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- compound tags: 16 row(s) → AST5902 (m_suffix 12, name 4)
- column 'parameters (units)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'k ENZ (1/h)' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col0', 'tab_1:row7:col2'])
- dropped PD-category row 'S' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row8:col2'])
- dropped unlinked row (NIL): 'θ CLbase/F, ALP' — extend the ontology if this is a real PK parameter (source ['tab_1:row13:col2'])
- dropped unlinked row (NIL): 'θ CLm/(F•Fm), ALP' — extend the ontology if this is a real PK parameter (source ['tab_1:row14:col2'])
- covariate level 'θ F, food' → Q900:f_food = 0.224 (linear_fractional on Q27)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q45 has no base parameter row (kept as unattached equation-variable)
- metabolite volume: 'V cm /(F • Fm) (L)' Q63→Q61 for AST5902 — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=furmonertinib
- template fit: PK_3M_3C — first-pass formation; parent 2 + hepatic, metabolites [1] (site presystemic: 'The result of the food effect implies an alternative model structure, where the AST5902 was produced by the first-pass m')
- row roles: 5 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 8 linked by role; re-tagged parent→AST5902 ×6
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table tab_1: unspecified_interval_bound
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.774 (24/31 fields) | 7 |
| `qwen3.8-27b` | not confirmed | 0.594 (19/32 fields) | 13 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl base /f].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl m /(f • fm)].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[f_food]` | 0.224 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k enz]` |  | 0.00304 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_body_weight_power]` |  | 0.622 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_body_weight_power]` | 0.622 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q87_food_f]` |  | 0.224 | only_one_extracted |
| `qwen3.8-27b` | `model.links` | [['furmonertinib (ast2818)', 'ast5902', 'metabolism']] | [['furmonertinib', 'ast5902', 'metabolism']] | mismatch |
| `qwen3.8-27b` | `parameters[cl m /(f • fm)].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[k 67].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[k 67].parameter_id` | Q900 | Q67 | mismatch |
| `qwen3.8-27b` | `parameters[k 76]` | 0.0540 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[k enz].parameter_id` | Q47 | Q350 | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_food_fm]` |  | -0.332 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_equation_variable_food_fm]` | -0.332 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_body_weight_power]` | 0.629 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q45_body_weight_power]` |  | 0.629 | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ clm/(f•fm), alp]` | -0.258 |  | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | furmonertinib (AST2818) | furmonertinib | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | furmonertinib (AST2818) | furmonertinib | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_1:row9:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_1:row2:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['tab_1:row3:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['tab_1:row12:col0', 'tab_1:row12:col2'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['tab_1:row11:col0', 'tab_1:row11:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_1:row4:col0', 'tab_1:row4:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_1:row10:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['tab_1:row5:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['tab_1:row6:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 119 L/h | ['tab_1:row9:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 70.5 L/h | ['tab_1:row2:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.9e+03 L | ['tab_1:row3:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 291 L | ['tab_1:row10:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.47e+03 L | ['tab_1:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_param_coverage |  | fail | 9 scholar param(s) emitted or defaulted | 7 covered |  | neither emitted nor in defaulted[]: ['V2/F', 'kcomp'] |
| T3_topology_template |  | fail | parent_metabolite_hepatic → PK_3M_3C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | fail | no second reader contradicts | verdict disputed; agreement 0.774 (24 of 31 compared fields agree, 5 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.774 | cross-check contradicted by a second reader: verdict disputed; agreement 0.774 (24 of 31 compared fields agree, 5 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_firmonertinib/Firmonertinib_Zou2022_reference/Firmonertinib_Zou2022_reference_modelica.zip" download>Firmonertinib_Zou2022_reference_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_firmonertinib/Firmonertinib_Zou2022_reference/Firmonertinib_Zou2022_reference_matlab.zip" download>Firmonertinib_Zou2022_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_firmonertinib/Firmonertinib_Zou2022_reference/Firmonertinib_Zou2022_reference_matlab_simbio.zip" download>Firmonertinib_Zou2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_firmonertinib/Firmonertinib_Zou2022_reference/Firmonertinib_Zou2022_reference_sbml.zip" download>Firmonertinib_Zou2022_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_firmonertinib/Firmonertinib_Zou2022_reference/Firmonertinib_Zou2022_reference_cellml.zip" download>Firmonertinib_Zou2022_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Zou HX, Zhang YF, Zhong DF, Jiang Y, Liu F, Zhao QY et al. Effect of autoinduction and food on the pharmacokinetics of furmonertinib and its active metabolite characterized by a population pharmacokinetic model. Acta pharmacologica Sinica 43(7):1865–1874 (2022). [doi:10.1038/s41401-021-00798-y](https://doi.org/10.1038/s41401-021-00798-y)

**This record:** Pharmacolibrary, model `Firmonertinib_Zou2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_firmonertinib/Firmonertinib_Zou2022_reference>

```bibtex
@misc{pharmacolibrary_FirmonertinibZou2022reference,
  title  = {{Pharmacolibrary model Firmonertinib_Zou2022_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_firmonertinib/Firmonertinib_Zou2022_reference},
  note   = {Parameters from doi:10.1038/s41401-021-00798-y},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfirmonertinib%5D%20Firmonertinib_Zou2022_reference&body=Drug%3A%20firmonertinib%0ARecord%3A%20Firmonertinib_Zou2022_reference%0APaper%3A%20Zou_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_firmonertinib/Firmonertinib_Zou2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 12:51 UTC</sub>
