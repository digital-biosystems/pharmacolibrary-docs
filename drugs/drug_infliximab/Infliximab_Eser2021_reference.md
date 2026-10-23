<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;infliximab&quot;,&quot;href&quot;:&quot;drugs/drug_infliximab/&quot;},{&quot;label&quot;:&quot;Eser_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Infliximab_Eser2021_reference&quot;,&quot;label&quot;:&quot;Eser_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_infliximab/Infliximab_Eser2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Infliximab_Little2022_reference&quot;,&quot;label&quot;:&quot;Little_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_infliximab/Infliximab_Little2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# infliximab — `Infliximab_Eser2021_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="infliximab" model-id="Infliximab_Eser2021_reference" status="accepted_with_caveats" stale="false" population="adults with rheumatoid arthritis and ankylosing spondylitis" measured-compound="infliximab" parameterization="mechanistic" topology="2C"></div>

## Citation
Eser A, Reinisch W, Schreiber S, Ahmad T, Boulos S, Mould DR. Increased Induction Infliximab Clearance Predicts Early Antidrug Antibody Detection. Journal of clinical pharmacology 61(2):224–233 (2021).
  ·  DOI: [10.1002/jcph.1732](https://doi.org/10.1002/jcph.1732)

## Population and dosing

**Population:** adults with rheumatoid arthritis and ankylosing spondylitis · condition rheumatoid arthritis and ankylosing spondylitis · age group adult.

**Dosing:** 210, 350 mg, iv, multiple, every 56 h.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 7 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_infliximab/Infliximab_Eser2021_reference/Infliximab_Eser2021_reference.svg" alt="Infliximab_Eser2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Baseline CL, L/day | CL | 0.266 | L/day | 1.5 |
| Vc, L | V1 | 2.79 | L | 0.4 |
| Q, L/day | Q | 0.0557 | L/day | 5.7 |
| Vp, L | V2 | 0.898 | L | 3 |
| effect_of_weight_on_baseline_cl | effect_of_weight_on_baseline_cl | 0.729 |  | 5.8 |
| effect_of_albumin_on_baseline_cl | effect_of_albumin_on_baseline_cl | -0.32 |  | 11.2 |
| effect_of_patient_sex_on_baseline_cl | effect_of_patient_sex_on_baseline_cl | -0.0728 |  | 13.9 |
| theta_v1_weight | theta_v1_weight | 1 |  |  |
| theta_q_weight | theta_q_weight | 0.75 |  |  |
| theta_v2_weight | theta_v2_weight | 1 |  |  |
| theta_cl_ada | theta_cl_ada | 0.307 |  | 10.3 |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[baseline cl].covariate_forms`: this record has ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'], the second reading ['linear_fractional', 'linear_fractional']; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Baseline CL, L/day | `Q22` · CL | 0.266 | L/day | 3.079e-09 | m3/s | l/d | 1.5 | llm_corrected (0.6) | jcph1732-tbl-0003:row1:col1, jcph1732-tbl-0003:row1:col2, jcph1732-tbl-0003:row1:col3, jcph1732-tbl-0003:row1:col4, jcph1732-tbl-0003:row1:col5 |
| Vc, L | `Q63` · V1 | 2.79 | L | 0.00279 | m3 | l | 0.4 | exact (1) | jcph1732-tbl-0003:row2:col1, jcph1732-tbl-0003:row2:col2, jcph1732-tbl-0003:row2:col3, jcph1732-tbl-0003:row2:col4, jcph1732-tbl-0003:row2:col5 |
| Q, L/day | `Q30` · Q | 0.0557 | L/day | 6.447e-10 | m3/s | l/d | 5.7 | exact (1) | jcph1732-tbl-0003:row3:col1, jcph1732-tbl-0003:row3:col2, jcph1732-tbl-0003:row3:col3, jcph1732-tbl-0003:row3:col4, jcph1732-tbl-0003:row3:col5 |
| Vp, L | `Q64` · V2 | 0.898 | L | 0.000898 | m3 | l | 3 | exact (1) | jcph1732-tbl-0003:row4:col1, jcph1732-tbl-0003:row4:col2, jcph1732-tbl-0003:row4:col3, jcph1732-tbl-0003:row4:col4, jcph1732-tbl-0003:row4:col5 |
| effect_of_weight_on_baseline_cl | `Q900` · effect_of_weight_on_baseline_cl | 0.729 |  |  |  |  | 5.8 |  | jcph1732-tbl-0003:row5:col1, jcph1732-tbl-0003:row5:col2, jcph1732-tbl-0003:row5:col3, jcph1732-tbl-0003:row5:col4, jcph1732-tbl-0003:row5:col5 |
| effect_of_albumin_on_baseline_cl | `Q900` · effect_of_albumin_on_baseline_cl | -0.32 |  |  |  |  | 11.2 |  | jcph1732-tbl-0003:row9:col1, jcph1732-tbl-0003:row9:col2, jcph1732-tbl-0003:row9:col3, jcph1732-tbl-0003:row9:col4, jcph1732-tbl-0003:row9:col5 |
| effect_of_patient_sex_on_baseline_cl | `Q900` · effect_of_patient_sex_on_baseline_cl | -0.0728 |  |  |  |  | 13.9 |  | jcph1732-tbl-0003:row12:col1, jcph1732-tbl-0003:row12:col2, jcph1732-tbl-0003:row12:col3, jcph1732-tbl-0003:row12:col4, jcph1732-tbl-0003:row12:col5 |
| theta_v1_weight | `Q900` · theta_v1_weight | 1 |  |  |  |  |  |  | jcph1732-tbl-0003:row6:col1, jcph1732-tbl-0003:row6:col3, jcph1732-tbl-0003:row6:col4, jcph1732-tbl-0003:row6:col5 |
| theta_q_weight | `Q900` · theta_q_weight | 0.75 |  |  |  |  |  |  | jcph1732-tbl-0003:row7:col1, jcph1732-tbl-0003:row7:col3, jcph1732-tbl-0003:row7:col4, jcph1732-tbl-0003:row7:col5 |
| theta_v2_weight | `Q900` · theta_v2_weight | 1 |  |  |  |  |  |  | jcph1732-tbl-0003:row8:col1, jcph1732-tbl-0003:row8:col3, jcph1732-tbl-0003:row8:col4, jcph1732-tbl-0003:row8:col5 |
| theta_cl_ada | `Q900` · theta_cl_ada | 0.307 |  |  |  |  | 10.3 |  | jcph1732-tbl-0003:row10:col1, jcph1732-tbl-0003:row10:col2, jcph1732-tbl-0003:row10:col3, jcph1732-tbl-0003:row10:col4, jcph1732-tbl-0003:row10:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate level 'Effect of weight on baseline CL' → Q900:effect_of_weight_on_baseline_cl = 0.729 (linear_fractional on Q22)
- covariate level 'Effect of albumin on baseline CL' → Q900:effect_of_albumin_on_baseline_cl = -0.32 (linear_fractional on Q22)
- dropped duplicate Q22 ('Effect of glucose on baseline CL', value '0.0725') — already have one for this compound
- covariate level 'Effect of patient sex on baseline CL' → Q900:effect_of_patient_sex_on_baseline_cl = -0.0728 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Effect of CRP on baseline CL' — extend the ontology if this is a real PK parameter (source ['jcph1732-tbl-0003:row13:col1', 'jcph1732-tbl-0003:row13:col2', 'jcph1732-tbl-0003:row13:col3', 'jcph1732-tbl-0003:row13:col4', 'jcph1732-tbl-0003:row13:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=infliximab
- molar mass: none found for 'infliximab' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (18/27 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[baseline cl].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[effect_of_albumin_on_baseline_cl]` | -0.32 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_patient_sex_on_baseline_cl]` | -0.0728 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_weight_on_baseline_cl]` | 0.729 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_ada]` | 0.307 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_albumin]` |  | -0.32 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_sex]` |  | -0.0728 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q38_ada]` |  | 0.307 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q38_weight]` |  | 0.729 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['jcph1732-tbl-0003:row1:col1', 'jcph1732-tbl-0003:row1:col2', 'jcph1732-tbl-0003:row1:col3', 'jcph1732-tbl-0003:row1:col4', 'jcph1732-tbl-0003:row1:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['jcph1732-tbl-0003:row3:col1', 'jcph1732-tbl-0003:row3:col2', 'jcph1732-tbl-0003:row3:col3', 'jcph1732-tbl-0003:row3:col4', 'jcph1732-tbl-0003:row3:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['jcph1732-tbl-0003:row2:col1', 'jcph1732-tbl-0003:row2:col2', 'jcph1732-tbl-0003:row2:col3', 'jcph1732-tbl-0003:row2:col4', 'jcph1732-tbl-0003:row2:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['jcph1732-tbl-0003:row4:col1', 'jcph1732-tbl-0003:row4:col2', 'jcph1732-tbl-0003:row4:col3', 'jcph1732-tbl-0003:row4:col4', 'jcph1732-tbl-0003:row4:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.266 | ['jcph1732-tbl-0003:row1:col1', 'jcph1732-tbl-0003:row1:col2', 'jcph1732-tbl-0003:row1:col3', 'jcph1732-tbl-0003:row1:col4', 'jcph1732-tbl-0003:row1:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0111 L/h | ['jcph1732-tbl-0003:row1:col1', 'jcph1732-tbl-0003:row1:col2', 'jcph1732-tbl-0003:row1:col3', 'jcph1732-tbl-0003:row1:col4', 'jcph1732-tbl-0003:row1:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.79 L | ['jcph1732-tbl-0003:row2:col1', 'jcph1732-tbl-0003:row2:col2', 'jcph1732-tbl-0003:row2:col3', 'jcph1732-tbl-0003:row2:col4', 'jcph1732-tbl-0003:row2:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.898 L | ['jcph1732-tbl-0003:row4:col1', 'jcph1732-tbl-0003:row4:col2', 'jcph1732-tbl-0003:row4:col3', 'jcph1732-tbl-0003:row4:col4', 'jcph1732-tbl-0003:row4:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=infliximab) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_infliximab/Infliximab_Eser2021_reference/Infliximab_Eser2021_reference_modelica.zip" download>Infliximab_Eser2021_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_infliximab/Infliximab_Eser2021_reference/Infliximab_Eser2021_reference_fmi.zip" download>Infliximab_Eser2021_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_infliximab/Infliximab_Eser2021_reference/Infliximab_Eser2021_reference_matlab.zip" download>Infliximab_Eser2021_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_infliximab/Infliximab_Eser2021_reference/Infliximab_Eser2021_reference_matlab_simbio.zip" download>Infliximab_Eser2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_infliximab/Infliximab_Eser2021_reference/Infliximab_Eser2021_reference_sbml.zip" download>Infliximab_Eser2021_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_infliximab/Infliximab_Eser2021_reference/Infliximab_Eser2021_reference_cellml.zip" download>Infliximab_Eser2021_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00021 | kg |
| input | model | `Cl` | 3.079e-09 | m3/s |
| input | model | `VdPerKg` | 3.986e-05 | m3/kg |
| input | model | `k12` | 2.311e-07 | 1/s |
| input | model | `k21` | 7.179e-07 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Eser A, Reinisch W, Schreiber S, Ahmad T, Boulos S, Mould DR. Increased Induction Infliximab Clearance Predicts Early Antidrug Antibody Detection. Journal of clinical pharmacology 61(2):224–233 (2021). [doi:10.1002/jcph.1732](https://doi.org/10.1002/jcph.1732)

**This record:** Pharmacolibrary v26.09, model `Infliximab_Eser2021_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_infliximab/Infliximab_Eser2021_reference>

```bibtex
@misc{pharmacolibrary_InfliximabEser2021reference,
  title  = {{Pharmacolibrary model Infliximab_Eser2021_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_infliximab/Infliximab_Eser2021_reference},
  note   = {Parameters from doi:10.1002/jcph.1732},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 210 mg infusion over 10 min, single dose. Doses in the paper: 210, 350 mg.

<dbs-fmusim paramsurl="drugs/drug_infliximab/Infliximab_Eser2021_reference/Infliximab_Eser2021_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_infliximab/Infliximab_Eser2021_reference/Infliximab_Eser2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Infliximab_Eser2021_reference_params.json` · controls `Infliximab_Eser2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Binfliximab%5D%20Infliximab_Eser2021_reference&body=Drug%3A%20infliximab%0ARecord%3A%20Infliximab_Eser2021_reference%0APaper%3A%20Eser_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_infliximab/Infliximab_Eser2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:53 UTC</sub>
