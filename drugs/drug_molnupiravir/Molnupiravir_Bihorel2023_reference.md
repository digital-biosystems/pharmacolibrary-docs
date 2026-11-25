<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;molnupiravir&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/&quot;},{&quot;label&quot;:&quot;Bihorel_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Molnupiravir_Bihorel2023_reference&quot;,&quot;label&quot;:&quot;Bihorel_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Molnupiravir_Gouda2022_reference&quot;,&quot;label&quot;:&quot;Gouda_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/Molnupiravir_Gouda2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Molnupiravir_Lv2025_reference&quot;,&quot;label&quot;:&quot;Lv_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/Molnupiravir_Lv2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# molnupiravir — `Molnupiravir_Bihorel2023_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The covariate scenarios were not simulated; cross_check_disputed (+1 more).

<div class="pk-model-meta" hidden drug="molnupiravir" model-id="Molnupiravir_Bihorel2023_reference" status="needs_review" stale="false" population="adults with COVID-19" measured-compound="NHC" parameterization="apparent" topology="2C"></div>

## Citation
Bihorel S, Cao Y, Chawla A, Birger R, Maas BM, Gao W et al. Population pharmacokinetics of molnupiravir in adults with COVID-19: Lack of clinically important exposure variation across individuals. CPT: pharmacometrics & systems pharmacology 12(12):1859–1871 (2023).
  ·  DOI: [10.1002/psp4.13031](https://doi.org/10.1002/psp4.13031)

## Population and dosing

**Population:** adults with COVID-19 · age group adult.

**Dosing:** 50, 1600 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed molnupiravir, measured NHC.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 5 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference/Molnupiravir_Bihorel2023_reference.svg" alt="Molnupiravir_Bihorel2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Apparent central clearance in 80 kg participants, L/h | CL | 70.6 | L/h | 1.97 |
| Apparent central volume in 28 kg/m2 BMI male participants, L | V1/F | 63.9 | L | 5.07 |
| proportional_shift_in_female_participants | proportional_shift_in_female_participants | -0.330 |  | 11.8 |
| Apparent distribution clearance, L/h | Q | 2.99 | L/h | 5.70 |
| Apparent peripheral volume, L | V2/F | 68.3 | L | 14.6 |
| First-order absorption rate constant, 1/h | kabs | 0.797 | 1/h | 2.57 |
| Mean absorption transit time, h | MAT | 0.435 | h | 5.39 |
| proportional_shift_due_to_high_fat_meal | proportional_shift_due_to_high_fat_meal | 4.22 |  | 6.29 |
| proportional_shift_in_oral_solution | proportional_shift_in_oral_solution | -0.616 |  | 5.49 |
| Number of transit compartments | n_transit | 7.84 |  | 16.5 |
| Relative bioavailability | Frel | 1.00 |  |  |
| theta_q319_body_weight_power | theta_q319_body_weight_power | 0.412 |  | 14.0 |
| theta_q319_bmi_power | theta_q319_bmi_power | 0.997 |  | 13.1 |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.765). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The covariate scenarios were not simulated; cross_check_disputed (+1 more).**

The base model was simulated, not the covariate effects the record defines. None of the extracted parameters is molnupiravir's own; they describe NHC. Extracted — NHC: CL 70.6 L/h, V1/F 63.9 L, Q 2.99 L/h, V2/F 68.3 L, kabs 0.797 1/h, MAT 0.435 h, n_transit 7.84, Frel 1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[apparent central clearance in 80 kg participants].parameter_id`: this record has Q22, the second reading Q351; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Apparent central clearance in 80 kg participants, L/h | `Q22` · CL | 70.6 | L/h | 1.961e-05 | m3/s | l/h | 1.97 | llm_confirmed (0.6) | Bihorel_2023_table_p10_1:row1:col1 |
| Apparent central volume in 28 kg/m2 BMI male participants, L | `Q290` · V1/F | 63.9 | L | 0.0639 | m3 | l | 5.07 | llm_confirmed (0.6) | Bihorel_2023_table_p10_1:row4:col1 |
| proportional_shift_in_female_participants | `Q900` · proportional_shift_in_female_participants | -0.330 |  |  |  |  | 11.8 |  | Bihorel_2023_table_p10_1:row5:col1 |
| Apparent distribution clearance, L/h | `Q30` · Q | 2.99 | L/h | 8.306e-07 | m3/s | l/h | 5.70 | llm_confirmed (0.6) | Bihorel_2023_table_p10_1:row8:col1 |
| Apparent peripheral volume, L | `Q82` · V2/F | 68.3 | L | 0.0683 | m3 | l | 14.6 | exact (1) | Bihorel_2023_table_p10_1:row10:col1 |
| First-order absorption rate constant, 1/h | `Q49` · kabs | 0.797 | 1/h | 0.0002214 | 1/s | 1/h | 2.57 | llm_confirmed (0.6) | Bihorel_2023_table_p10_1:row12:col1 |
| Mean absorption transit time, h | `Q73` · MAT | 0.435 | h | 1566 | s | h | 5.39 | llm_corrected (0.6) | Bihorel_2023_table_p10_1:row14:col1 |
| proportional_shift_due_to_high_fat_meal | `Q900` · proportional_shift_due_to_high_fat_meal | 4.22 |  |  |  |  | 6.29 |  | Bihorel_2023_table_p10_1:row15:col1 |
| proportional_shift_in_oral_solution | `Q900` · proportional_shift_in_oral_solution | -0.616 |  |  |  |  | 5.49 |  | Bihorel_2023_table_p10_1:row16:col1 |
| Number of transit compartments | `Q311` · n_transit | 7.84 |  | 7.84 |  |  | 16.5 | exact (1) | Bihorel_2023_table_p10_1:row18:col1 |
| Relative bioavailability | `Q87` · Frel | 1.00 |  |  |  |  |  | exact (1) | Bihorel_2023_table_p10_1:row20:col1 |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.412 |  |  |  |  | 14.0 |  | Bihorel_2023_table_p10_1:row2:col1 |
| theta_q319_bmi_power | `Q900` · theta_q319_bmi_power | 0.997 |  |  |  |  | 13.1 |  | Bihorel_2023_table_p10_1:row6:col1 |

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
- covariate level 'Proportional shift in female participants' → Q900:proportional_shift_in_female_participants = -0.330 (additive_shift on Q22)
- covariate level 'Proportional shift due to high-fat meal' → Q900:proportional_shift_due_to_high_fat_meal = 4.22 (additive_shift on Q22)
- covariate level 'Proportional shift in oral solution' → Q900:proportional_shift_in_oral_solution = -0.616 (additive_shift on Q22)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=NHC

**Extraction notes:**
- table Bihorel_2023_table_p10_1: unbound_uncertainty
- table Bihorel_2023_table_p10_1: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.765 (26/34 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent central clearance in 80 kg participants].covariate_forms` | ['additive_shift', 'additive_shift', 'additive_shift'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[apparent central clearance in 80 kg participants].parameter_id` | Q22 | Q351 | mismatch |
| `gpt-oss-120b` | `parameters[apparent distribution clearance].parameter_id` | Q30 | Q69 | mismatch |
| `gpt-oss-120b` | `parameters[mean absorption transit time].parameter_id` | Q73 | Q83 | mismatch |
| `gpt-oss-120b` | `parameters[proportional_shift_due_to_high_fat_meal]` | 4.22 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[proportional_shift_in_oral_solution]` | -0.616 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[relative bioavailability].covariate_forms` | [] | ['additive_shift'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_frel_category]` |  | 4.22 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Bihorel_2023_table_p10_1:row1:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Bihorel_2023_table_p10_1:row4:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Bihorel_2023_table_p10_1:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Bihorel_2023_table_p10_1:row12:col1'] |
| C5_dimension_Q73 | pass | [time] |  | ['Bihorel_2023_table_p10_1:row14:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Bihorel_2023_table_p10_1:row10:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 70.6 L/h | ['Bihorel_2023_table_p10_1:row1:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 63.9 L | ['Bihorel_2023_table_p10_1:row4:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 68.3 L | ['Bihorel_2023_table_p10_1:row10:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=NHC) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | fail | no second reader contradicts | verdict disputed; agreement 0.765 (26 of 34 compared fields agree, 3 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.765 | cross-check contradicted by a second reader: verdict disputed; agreement 0.765 (26 of 34 compared fields agree, 3 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |
| T1_cmax | reference | skipped | 15 | 0.0001903 |  | unresolved concentration unit (exp '', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference/Molnupiravir_Bihorel2023_reference_modelica.zip" download>Molnupiravir_Bihorel2023_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
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
| input | dosing | `adminMass` | 5e-05 | kg |
| input | model | `Cl` | 1.961e-05 | m3/s |
| input | model | `VdPerKg` | 0.0009129 | m3/kg |
| input | model | `k12` | 1.3e-05 | 1/s |
| input | model | `k21` | 1.216e-05 | 1/s |
| input | model | `ka` | 0.0002214 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Bihorel S, Cao Y, Chawla A, Birger R, Maas BM, Gao W et al. Population pharmacokinetics of molnupiravir in adults with COVID-19: Lack of clinically important exposure variation across individuals. CPT: pharmacometrics & systems pharmacology 12(12):1859–1871 (2023). [doi:10.1002/psp4.13031](https://doi.org/10.1002/psp4.13031)

**This record:** Pharmacolibrary, model `Molnupiravir_Bihorel2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference>

```bibtex
@misc{pharmacolibrary_MolnupiravirBihorel2023reference,
  title  = {{Pharmacolibrary model Molnupiravir_Bihorel2023_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference},
  note   = {Parameters from doi:10.1002/psp4.13031},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 50 mg, single dose, first-order absorption (ka 0.797 /h, F 1). Doses in the paper: 50–1600 mg.

<dbs-fmusim paramsurl="drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference/Molnupiravir_Bihorel2023_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference/Molnupiravir_Bihorel2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Molnupiravir_Bihorel2023_reference_params.json` · controls `Molnupiravir_Bihorel2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmolnupiravir%5D%20Molnupiravir_Bihorel2023_reference&body=Drug%3A%20molnupiravir%0ARecord%3A%20Molnupiravir_Bihorel2023_reference%0APaper%3A%20Bihorel_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 14:49 UTC</sub>
