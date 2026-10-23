<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;semaglutide&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/&quot;},{&quot;label&quot;:&quot;Carlsson_2018 \u00b7 full&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Semaglutide_Langeskov2022_reference&quot;,&quot;label&quot;:&quot;Langeskov_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Langeskov2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Yu2024_reference&quot;,&quot;label&quot;:&quot;Yu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Yu2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Carlsson2018_base&quot;,&quot;label&quot;:&quot;Carlsson_2018_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Carlsson2018_base.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Carlsson2018_full&quot;,&quot;label&quot;:&quot;Carlsson_2018_full&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Carlsson2018_full.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Semaglutide_Min2025_reference&quot;,&quot;label&quot;:&quot;Min_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Min2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# semaglutide — `Semaglutide_Carlsson2018_full`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The model assumes bioavailability is unity and simulates only the reference subject, leaving the defined covariate effects untested.

<div class="pk-model-meta" hidden drug="semaglutide" model-id="Semaglutide_Carlsson2018_full" status="needs_review" stale="false" population="adults with type 2 diabetes mellitus" measured-compound="semaglutide" parameterization="apparent" topology="1C"></div>

## Citation
Carlsson Petri KC, Ingwersen SH, Flint A, Zacho J, Overgaard RV. Semaglutide s.c. Once-Weekly in Type 2 Diabetes: A Population Pharmacokinetic Analysis. Diabetes therapy : research, treatment and education of diabetes and related disorders 9(4):1533–1547 (2018).
  ·  DOI: [10.1007/s13300-018-0458-5](https://doi.org/10.1007/s13300-018-0458-5)

## Population and dosing

**Population:** adults with type 2 diabetes mellitus · condition type 2 diabetes mellitus · age group adult · n = &gt;= 60, 60-69, 70-79, 80-89, &gt;= 90 years), body weight (kg), HbA1c (%), and body surface area (m2) were not significantly associated with semaglutide exposure. The final model included only age as a covariate on clearance, with older age (&gt;= 70 years) associated with a 15% lower clearance compared to younger subjects. The model was evaluated using visual predictive checks and was deemed adequate..

**Dosing:** 0.25, 0.5, 1 mg, sc, multiple, every 168 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted, plus 13 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full.svg" alt="Semaglutide_Carlsson2018_full diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| ka (h-1) | kabs | 0.0286 | h-1 |  |  |
| CL/F (L/h) | CL/F | 0.0478 | L/h | 1.06 | 12.9 (None% RSE) |
| V/F (L) | V/F | 12.2 | L | 0.487 | 37.3 (None% RSE) |
| body_weight | body_weight | 0.774 |  | 3.27 |  |
| sex_male | sex_male | 1.04 |  | 0.963 |  |
| age_65_74_years | age_65_74_years | 0.988 |  | 1.11 |  |
| age_gt_74_years | age_gt_74_years | 0.961 |  | 2.41 |  |
| maintenance_dose_0.5_mg | maintenance_dose_0.5_mg | 1.00 |  | 0.855 |  |
| race_black | race_black | 0.974 |  | 3.28 |  |
| race_asian | race_asian | 0.989 |  | 1.25 |  |
| ethnicity_hispanic_or_latino | ethnicity_hispanic_or_latino | 1.06 |  | 1.62 |  |
| injection_site_thigh | injection_site_thigh | 1.04 |  | 2.1 |  |
| injection_site_upper_arm | injection_site_upper_arm | 1.08 |  | 2.13 |  |
| renal_mild_impairment | renal_mild_impairment | 0.948 |  | 0.963 |  |
| renal_moderate_impairment | renal_moderate_impairment | 0.955 |  | 2.95 |  |
| renal_severe_impairment | renal_severe_impairment | 0.920 |  | 4.15 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-5.6-luna (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model assumes bioavailability is unity and simulates only the reference subject, leaving the defined covariate effects untested.**

The record applies apparent parameterization by fixing bioavailability and metabolic bioavailability at 1.0 without molar correction. Additionally, the simulation restricted to the reference individual failed to exercise the extensive list of covariate effects included in the model structure. Extracted — semaglutide: kabs 0.0286 h-1, CL/F 0.0478 L/h, V/F 12.2 L.

Independently confirmed by `gpt-oss-120b`, `gpt-5.6-luna`.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (h-1) | `Q49` · kabs | 0.0286 | h-1 | 7.944e-06 | 1/s | 1/h |  | exact (1) | Carlsson_2018_table_S3:row0:col1 |  |
| CL/F (L/h) | `Q27` · CL/F | 0.0478 | L/h | 1.328e-08 | m3/s | l/h | 1.06 | exact (1) | Carlsson_2018_table_S3:row1:col1 | 12.9 (None% RSE) |
| V/F (L) | `Q76` · V/F | 12.2 | L | 0.0122 | m3 | l | 0.487 | exact (1) | Carlsson_2018_table_S3:row2:col1 | 37.3 (None% RSE) |
| body_weight | `Q900` · body_weight | 0.774 |  |  |  |  | 3.27 |  | Carlsson_2018_table_S3:row3:col1 |  |
| sex_male | `Q900` · sex_male | 1.04 |  |  |  |  | 0.963 |  | Carlsson_2018_table_S3:row4:col1 |  |
| age_65_74_years | `Q900` · age_65_74_years | 0.988 |  |  |  |  | 1.11 |  | Carlsson_2018_table_S3:row5:col1 |  |
| age_gt_74_years | `Q900` · age_gt_74_years | 0.961 |  |  |  |  | 2.41 |  | Carlsson_2018_table_S3:row6:col1 |  |
| maintenance_dose_0.5_mg | `Q900` · maintenance_dose_0.5_mg | 1.00 |  |  |  |  | 0.855 |  | Carlsson_2018_table_S3:row7:col1 |  |
| race_black | `Q900` · race_black | 0.974 |  |  |  |  | 3.28 |  | Carlsson_2018_table_S3:row8:col1 |  |
| race_asian | `Q900` · race_asian | 0.989 |  |  |  |  | 1.25 |  | Carlsson_2018_table_S3:row9:col1 |  |
| ethnicity_hispanic_or_latino | `Q900` · ethnicity_hispanic_or_latino | 1.06 |  |  |  |  | 1.62 |  | Carlsson_2018_table_S3:row10:col1 |  |
| injection_site_thigh | `Q900` · injection_site_thigh | 1.04 |  |  |  |  | 2.1 |  | Carlsson_2018_table_S3:row11:col1 |  |
| injection_site_upper_arm | `Q900` · injection_site_upper_arm | 1.08 |  |  |  |  | 2.13 |  | Carlsson_2018_table_S3:row12:col1 |  |
| renal_mild_impairment | `Q900` · renal_mild_impairment | 0.948 |  |  |  |  | 0.963 |  | Carlsson_2018_table_S3:row13:col1 |  |
| renal_moderate_impairment | `Q900` · renal_moderate_impairment | 0.955 |  |  |  |  | 2.95 |  | Carlsson_2018_table_S3:row14:col1 |  |
| renal_severe_impairment | `Q900` · renal_severe_impairment | 0.920 |  |  |  |  | 4.15 |  | Carlsson_2018_table_S3:row15:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'CL/F (L/h)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'V/F (L)' routed out of structural estimates ('IIV (%CV)')
- dropped unlinked row (NIL): 'Body weight, kg' — extend the ontology if this is a real PK parameter (source ['Carlsson_2018_table_2:row19:col2'])
- dropped unlinked row (NIL): 'BMI, kg/m²' — extend the ontology if this is a real PK parameter (source ['Carlsson_2018_table_2:row21:col2'])
- dropped unlinked row (NIL): 'Duration of diabetes, years' — extend the ontology if this is a real PK parameter (source ['Carlsson_2018_table_2:row23:col2'])
- dropped unlinked row (NIL): 'HbA1c, %' — extend the ontology if this is a real PK parameter (source ['Carlsson_2018_table_2:row25:col2'])
- covariate level 'Body weight' → Q900:body_weight = 0.774 (power on Q27)
- covariate level 'Sex - male' → Q900:sex_male = 1.04 (linear_fractional on Q27)
- covariate level 'Age 65–74 years' → Q900:age_65_74_years = 0.988 (linear_fractional on Q27)
- covariate level 'Age &gt;74 years' → Q900:age_gt_74_years = 0.961 (linear_fractional on Q27)
- covariate level 'Maintenance dose 0.5 mg' → Q900:maintenance_dose_0.5_mg = 1.00 (linear_fractional on Q27)
- covariate level 'Race - black' → Q900:race_black = 0.974 (linear_fractional on Q27)
- covariate level 'Race - Asian' → Q900:race_asian = 0.989 (linear_fractional on Q27)
- covariate level 'Ethnicity – Hispanic or Latino' → Q900:ethnicity_hispanic_or_latino = 1.06 (linear_fractional on Q27)
- covariate level 'Injection site - thigh' → Q900:injection_site_thigh = 1.04 (linear_fractional on Q27)
- covariate level 'Injection site - upper arm' → Q900:injection_site_upper_arm = 1.08 (linear_fractional on Q27)
- covariate level 'Renal - Mild impairment' → Q900:renal_mild_impairment = 0.948 (linear_fractional on Q27)
- covariate level 'Renal - Moderate impairment' → Q900:renal_moderate_impairment = 0.955 (linear_fractional on Q27)
- covariate level 'Renal - Severe impairment' → Q900:renal_severe_impairment = 0.920 (linear_fractional on Q27)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=semaglutide
- model-stage split: 'full' is the full model of Carlsson_2018 (paper reports 2 stages: base, full); same population, different model-building step
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Carlsson_2018_table_2: unbound_uncertainty
- table Carlsson_2018_table_2: unparsed_numeric_cell
- table Carlsson_2018_table_S2: unbound_uncertainty
- companion parameter table S2 transcribed (15 record(s), model stage 'base')
- table Carlsson_2018_table_S3: unbound_uncertainty
- companion parameter table S3 transcribed (67 record(s), model stage 'full')
- LLM selected parameter table(s) S2, S3
- dropped sensitivity-analysis table(s) S4 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  ·  2 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (36/36 fields) | none |
| `gpt-5.6-luna` | confirmed | 1.0 (36/36 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Carlsson_2018_table_S3:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Carlsson_2018_table_S3:row0:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Carlsson_2018_table_S3:row2:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0478 L/h | ['Carlsson_2018_table_S3:row1:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 12.2 L | ['Carlsson_2018_table_S3:row2:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=semaglutide) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | apparent_assumption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_modelica.zip" download>Semaglutide_Carlsson2018_full_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_fmi.zip" download>Semaglutide_Carlsson2018_full_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_matlab.zip" download>Semaglutide_Carlsson2018_full_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_matlab_simbio.zip" download>Semaglutide_Carlsson2018_full_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_sbml.zip" download>Semaglutide_Carlsson2018_full_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_cellml.zip" download>Semaglutide_Carlsson2018_full_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 4.114 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2.5e-07 | kg |
| input | model | `Cl` | 1.328e-08 | m3/s |
| input | model | `VdPerKg` | 0.0001743 | m3/kg |
| input | model | `ka` | 7.944e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Carlsson Petri KC, Ingwersen SH, Flint A, Zacho J, Overgaard RV. Semaglutide s.c. Once-Weekly in Type 2 Diabetes: A Population Pharmacokinetic Analysis. Diabetes therapy : research, treatment and education of diabetes and related disorders 9(4):1533–1547 (2018). [doi:10.1007/s13300-018-0458-5](https://doi.org/10.1007/s13300-018-0458-5)

**This record:** Pharmacolibrary v26.09, model `Semaglutide_Carlsson2018_full`. <https://pharmacolibrary.github.io/#/drugs/drug_semaglutide/Semaglutide_Carlsson2018_full>

```bibtex
@misc{pharmacolibrary_SemaglutideCarlsson2018full,
  title  = {{Pharmacolibrary model Semaglutide_Carlsson2018_full}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_semaglutide/Semaglutide_Carlsson2018_full},
  note   = {Parameters from doi:10.1007/s13300-018-0458-5},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.25 mg, single dose, first-order absorption (ka 0.0286 /h, F 1). Doses in the paper: 0.25, 0.5, 1 mg.

<dbs-fmusim paramsurl="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Semaglutide_Carlsson2018_full_params.json` · controls `Semaglutide_Carlsson2018_full_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsemaglutide%5D%20Semaglutide_Carlsson2018_full&body=Drug%3A%20semaglutide%0ARecord%3A%20Semaglutide_Carlsson2018_full%0APaper%3A%20Carlsson_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_semaglutide/Semaglutide_Carlsson2018_full%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-20 18:34 UTC</sub>
