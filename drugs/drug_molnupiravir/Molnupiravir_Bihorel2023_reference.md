<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;molnupiravir&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/&quot;},{&quot;label&quot;:&quot;Bihorel_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Molnupiravir_Bihorel2023_reference&quot;,&quot;label&quot;:&quot;Bihorel_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Molnupiravir_Gouda2022_reference&quot;,&quot;label&quot;:&quot;Gouda_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/Molnupiravir_Gouda2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Molnupiravir_Lv2025_reference&quot;,&quot;label&quot;:&quot;Lv_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/Molnupiravir_Lv2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# molnupiravir — `Molnupiravir_Bihorel2023_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="molnupiravir" model-id="Molnupiravir_Bihorel2023_reference" status="accepted_with_caveats" stale="false" population="adults with COVID-19 and healthy participants" measured-compound="NHC" parameterization="apparent" topology="2C"></div>

## Citation
Bihorel S, Cao Y, Chawla A, Birger R, Maas BM, Gao W et al. Population pharmacokinetics of molnupiravir in adults with COVID-19: Lack of clinically important exposure variation across individuals. CPT: pharmacometrics & systems pharmacology 12(12):1859–1871 (2023).
  ·  DOI: [10.1002/psp4.13031](https://doi.org/10.1002/psp4.13031)

## Population and dosing

**Population:** adults with COVID-19 and healthy participants · condition COVID-19 · age group adult · n = 1207.

**Dosing:** 800 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed molnupiravir, measured NHC.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 5 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference/Molnupiravir_Bihorel2023_reference.svg" alt="Molnupiravir_Bihorel2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Apparent central clearance in 80 kg participants, L/h | CL/F | 1.97 | L/h | 8.99 |
| power_of_body_weight_effect | power_of_body_weight_effect | 14.0 |  |  |
| Apparent central volume in 28 kg/m2 BMI male participants, L | V1/F | 5.07 | L | 24.1 |
| Apparent distribution clearance, L/h | Q | 5.70 | L/h |  |
| Apparent peripheral volume, L | V2/F | 14.6 | L |  |
| First‐order absorption rate constant, 1/h | kabs | 2.57 | 1/h |  |
| Mean absorption transit time, h | MAT | 5.39 | h |  |
| proportional_shift_in_oral_solution | proportional_shift_in_oral_solution | 5.49 |  |  |
| Number of transit compartments | n_transit | 16.5 |  |  |
| Relative bioavailability | Frel | 1.00 |  |  |
| theta_q314_category | theta_q314_category | 11.8 |  |  |
| theta_q314_bmi_power | theta_q314_bmi_power | 13.1 |  |  |
| theta_frel_category | theta_frel_category | 6.29 |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.367). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. None of the extracted parameters is molnupiravir's own; they describe NHC.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of first‐order absorption rate constant: this record has none, the second reading 2.57; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Apparent central clearance in 80 kg participants, L/h | `Q27` · CL/F | 1.97 | L/h | 5.472e-07 | m3/s | l/h | 8.99 | exact (1) | psp413031-tbl-0002:row3:col1, psp413031-tbl-0002:row3:col2, psp413031-tbl-0002:row3:col4 |
| power_of_body_weight_effect | `Q900` · power_of_body_weight_effect | 14.0 |  |  |  |  |  |  | psp413031-tbl-0002:row4:col1, psp413031-tbl-0002:row4:col2 |
| Apparent central volume in 28 kg/m2 BMI male participants, L | `Q290` · V1/F | 5.07 | L | 0.00507 | m3 | l | 24.1 | exact (1) | psp413031-tbl-0002:row6:col1, psp413031-tbl-0002:row6:col2, psp413031-tbl-0002:row6:col4 |
| Apparent distribution clearance, L/h | `Q30` · Q | 5.70 | L/h | 1.583e-06 | m3/s | l/h |  | llm_confirmed (0.6) | psp413031-tbl-0002:row10:col1, psp413031-tbl-0002:row10:col2 |
| Apparent peripheral volume, L | `Q82` · V2/F | 14.6 | L | 0.0146 | m3 | l |  | exact (1) | psp413031-tbl-0002:row12:col1, psp413031-tbl-0002:row12:col2 |
| First‐order absorption rate constant, 1/h | `Q49` · kabs | 2.57 | 1/h | 0.0007139 | 1/s | 1/h |  | exact (1) | psp413031-tbl-0002:row14:col1, psp413031-tbl-0002:row14:col2 |
| Mean absorption transit time, h | `Q73` · MAT | 5.39 | h | 1.94e+04 | s | h |  | llm_corrected (0.6) | psp413031-tbl-0002:row16:col1, psp413031-tbl-0002:row16:col2 |
| proportional_shift_in_oral_solution | `Q900` · proportional_shift_in_oral_solution | 5.49 |  |  |  |  |  |  | psp413031-tbl-0002:row18:col1, psp413031-tbl-0002:row18:col2 |
| Number of transit compartments | `Q311` · n_transit | 16.5 |  |  |  |  |  | exact (1) | psp413031-tbl-0002:row20:col1, psp413031-tbl-0002:row20:col2 |
| Relative bioavailability | `Q87` · Frel | 1.00 |  |  |  |  |  | exact (1) | psp413031-tbl-0002:row22:col1 |
| theta_q314_category | `Q900` · theta_q314_category | 11.8 |  |  |  |  |  |  | psp413031-tbl-0002:row7:col1, psp413031-tbl-0002:row7:col2 |
| theta_q314_bmi_power | `Q900` · theta_q314_bmi_power | 13.1 |  |  |  |  |  |  | psp413031-tbl-0002:row8:col1, psp413031-tbl-0002:row8:col2 |
| theta_frel_category | `Q900` · theta_frel_category | 6.29 |  |  |  |  |  |  | psp413031-tbl-0002:row17:col1, psp413031-tbl-0002:row17:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'Phase I trials' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Phase II/III trials' routed out of structural estimates ('Residual variability')
- covariate level 'Power of body weight effect' → Q900:power_of_body_weight_effect = 14.0 (power on Q27)
- covariate level 'Proportional shift in oral solution' → Q900:proportional_shift_in_oral_solution = 5.49 (additive_shift on Q27)
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=NHC
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- row roles (LLM): model_class=compartmental; 16/16 row label(s) assigned, 14 linked by role; re-tagged NHC (β-D-N4-hydroxycytidine)→NHC ×32
- review gap-fill skipped: this record measures 'NHC', not molnupiravir — the review values are the parent's

**Extraction notes:**
- unparsed cell psp413031-tbl-0002:row3:col3 = '43.4 %CV'
- unparsed cell psp413031-tbl-0002:row6:col3 = '62.9 %CV'
- unparsed cell psp413031-tbl-0002:row23:col3 = '39.8 %CV'
- unparsed cell psp413031-tbl-0002:row25:col3 = '25.5 %CV'
- unparsed cell psp413031-tbl-0002:row26:col3 = '49.7 %CV'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.367 (11/30 fields) | 19 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent central clearance in 80 kg participants].covariate_forms` | ['additive_shift', 'power'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[apparent central clearance in 80 kg participants].parameter_id` | Q27 | Q351 | mismatch |
| `gpt-oss-120b` | `parameters[apparent central clearance in 80 kg participants].rse_percent` | 8.99 |  | mismatch |
| `gpt-oss-120b` | `parameters[apparent central volume in 28 kg/m2 bmi male participants].rse_percent` | 24.1 |  | mismatch |
| `gpt-oss-120b` | `parameters[apparent distribution clearance].parameter_id` | Q30 | Q69 | mismatch |
| `gpt-oss-120b` | `parameters[first‐order absorption rate constant]` |  | 2.57 | only_one_extracted |
| `gpt-oss-120b` | `parameters[first‐order absorption rate constant]` | 2.57 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean absorption transit time]` |  | 5.39 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean absorption transit time]` | 5.39 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[number of transit compartments]` | 16.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[number of transit compartments]` |  | 16.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[power_of_bmi_effect]` |  | 13.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[power_of_body_weight_effect]` | 14.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[proportional_shift_in_oral_solution]` | 5.49 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_frel_category].value` | 6.29 | 11.8 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q314_bmi_power]` | 13.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_category]` | 11.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_body_weight_power]` |  | 14.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q87_category]` |  | 6.29 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp413031-tbl-0002:row3:col1', 'psp413031-tbl-0002:row3:col2', 'psp413031-tbl-0002:row3:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp413031-tbl-0002:row6:col1', 'psp413031-tbl-0002:row6:col2', 'psp413031-tbl-0002:row6:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp413031-tbl-0002:row10:col1', 'psp413031-tbl-0002:row10:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp413031-tbl-0002:row14:col1', 'psp413031-tbl-0002:row14:col2'] |
| C5_dimension_Q73 | pass | [time] |  | ['psp413031-tbl-0002:row16:col1', 'psp413031-tbl-0002:row16:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['psp413031-tbl-0002:row12:col1', 'psp413031-tbl-0002:row12:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.97 L/h | ['psp413031-tbl-0002:row3:col1', 'psp413031-tbl-0002:row3:col2', 'psp413031-tbl-0002:row3:col4'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 5.07 L | ['psp413031-tbl-0002:row6:col1', 'psp413031-tbl-0002:row6:col2', 'psp413031-tbl-0002:row6:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 14.6 L | ['psp413031-tbl-0002:row12:col1', 'psp413031-tbl-0002:row12:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=NHC) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 0.004189 | non-numeric value |
| T1_cmax | reference | skipped |  | 0.004189 | non-numeric value |
| T1_cmax | reference | skipped | 15 | 0.004189 | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmin_ss | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference/Molnupiravir_Bihorel2023_reference_modelica.zip" download>Molnupiravir_Bihorel2023_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference/Molnupiravir_Bihorel2023_reference_fmi.zip" download>Molnupiravir_Bihorel2023_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference/Molnupiravir_Bihorel2023_reference_matlab.zip" download>Molnupiravir_Bihorel2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference/Molnupiravir_Bihorel2023_reference_matlab_simbio.zip" download>Molnupiravir_Bihorel2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference/Molnupiravir_Bihorel2023_reference_sbml.zip" download>Molnupiravir_Bihorel2023_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference/Molnupiravir_Bihorel2023_reference_cellml.zip" download>Molnupiravir_Bihorel2023_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2592 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0008 | kg |
| input | model | `Cl` | 5.472e-07 | m3/s |
| input | model | `VdPerKg` | 7.243e-05 | m3/kg |
| input | model | `k12` | 0.0003123 | 1/s |
| input | model | `k21` | 0.0001084 | 1/s |
| input | model | `ka` | 0.0007139 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Bihorel S, Cao Y, Chawla A, Birger R, Maas BM, Gao W et al. Population pharmacokinetics of molnupiravir in adults with COVID-19: Lack of clinically important exposure variation across individuals. CPT: pharmacometrics & systems pharmacology 12(12):1859–1871 (2023). [doi:10.1002/psp4.13031](https://doi.org/10.1002/psp4.13031)

**This record:** Pharmacolibrary v26.09, model `Molnupiravir_Bihorel2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference>

```bibtex
@misc{pharmacolibrary_MolnupiravirBihorel2023reference,
  title  = {{Pharmacolibrary model Molnupiravir_Bihorel2023_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference},
  note   = {Parameters from doi:10.1002/psp4.13031},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 800 mg, single dose, first-order absorption (ka 2.57 /h, F 1). Dose in the paper: 800 mg.

<dbs-fmusim paramsurl="drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference/Molnupiravir_Bihorel2023_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference/Molnupiravir_Bihorel2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Molnupiravir_Bihorel2023_reference_params.json` · controls `Molnupiravir_Bihorel2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmolnupiravir%5D%20Molnupiravir_Bihorel2023_reference&body=Drug%3A%20molnupiravir%0ARecord%3A%20Molnupiravir_Bihorel2023_reference%0APaper%3A%20Bihorel_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:13 UTC</sub>
