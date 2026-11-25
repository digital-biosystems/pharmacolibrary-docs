<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;lenvatinib&quot;,&quot;href&quot;:&quot;drugs/drug_lenvatinib/&quot;},{&quot;label&quot;:&quot;Majid_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lenvatinib_Tamai2017_base_base_model_population_mean_rse&quot;,&quot;label&quot;:&quot;Tamai_2017_base_base_model_population_mean_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lenvatinib/Lenvatinib_Tamai2017_base_base_model_population_mean_rse.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lenvatinib_Tamai2017_final_final_model_population_mean_rse&quot;,&quot;label&quot;:&quot;Tamai_2017_final_final_model_population_mean_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lenvatinib/Lenvatinib_Tamai2017_final_final_model_population_mean_rse.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lenvatinib — `Lenvatinib_Majid2024_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span>

<div class="pk-model-meta" hidden drug="lenvatinib" model-id="Lenvatinib_Majid2024_reference" status="not_simulated" stale="false" population="patients with cancer (RR-DTC, RCC, HCC)" measured-compound="lenvatinib" parameterization="apparent" topology="general_linear"></div>

## Citation
Majid O, Hayato S, Sreerama Reddy SH, Lalovic B, Hihara T, Hoshi T et al. Population pharmacokinetic-pharmacodynamic modeling of serum biomarkers as predictors of tumor dynamics following lenvatinib treatment in patients with radioiodine-refractory differentiated thyroid cancer (RR-DTC). CPT: pharmacometrics & systems pharmacology 13(6):954–969 (2024).
  ·  DOI: [10.1002/psp4.13130](https://doi.org/10.1002/psp4.13130)

## Population and dosing

**Population:** patients with cancer (RR-DTC, RCC, HCC) · condition radioiodine-refractory differentiated thyroid cancer, renal cell carcinoma, hepatic cell carcinoma · age group adult.

**Dosing:** 4, 8, 10, 14, 18, 20, 24 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** CL/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted, plus 1 covariate effect.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F (L/h) | CL/F | 6.28 | L/h | 2.88 |
| V1/F (L) | V1/F | 46.0 | L | 2.61 |
| V2/F (L) | V2/F | 28.3 | L | 5.90 |
| V3/F (L) | V3/F | 30.9 | L | 3.09 |
| Q1 (L/h) | Q | 3.57 | L/h | 2.89 |
| Q2 (L/h) | Q2 | 0.688 | L/h | 3.15 |
| Ka [1/h] | kabs | 0.803 | 1/h | 4.36 |
| D1 [h] | D1 | 1.27 | h | 3.61 |
| F1 | Fab | 0.882 |  | 1.10 |
| DTC population ~ CL/F (ratio) | CL_ratio | 0.951 | ratio | 3.65 |
| theta_cl_f_albumin_power | theta_cl_f_albumin_power | 0.900 |  | 1.98 |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75), qwen3.8-27b (not confirmed, agreement 0.769). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was built but has not been simulated yet; the covariate scenarios were not simulated (+1 more).**

The base model was simulated, not the covariate effects the record defines. Extracted — lenvatinib: CL/F 6.28 L/h, V1/F 46 L, V2/F 28.3 L, V3/F 30.9 L, Q 3.57 L/h, Q2 0.688 L/h, kabs 0.803 1/h, D1 1.27 h, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has lenvatinib → vegf (exposure_response); lenvatinib → ang-2 (exposure_response); lenvatinib → tie-2 (exposure_response) …, the second reading none; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 6.28 | L/h | 1.744e-06 | m3/s | l/h | 2.88 | exact (1) | psp413130-tbl-0001:row2:col1 |
| V1/F (L) | `Q290` · V1/F | 46.0 | L | 0.046 | m3 | l | 2.61 | exact (1) | psp413130-tbl-0001:row3:col1 |
| V2/F (L) | `Q82` · V2/F | 28.3 | L | 0.0283 | m3 | l | 5.90 | exact (1) | psp413130-tbl-0001:row4:col1 |
| V3/F (L) | `Q78` · V3/F | 30.9 | L | 0.0309 | m3 | l | 3.09 | exact (1) | psp413130-tbl-0001:row5:col1 |
| Q1 (L/h) | `Q30` · Q | 3.57 | L/h | 9.917e-07 | m3/s | l/h | 2.89 | exact (1) | psp413130-tbl-0001:row6:col1 |
| Q2 (L/h) | `Q99` · Q2 | 0.688 | L/h | 1.911e-07 | m3/s | l/h | 3.15 | second_intercompartmental (0.9) | psp413130-tbl-0001:row7:col1 |
| Ka [1/h] | `Q49` · kabs | 0.803 | 1/h | 0.0002231 | 1/s | 1/h | 4.36 | llm_confirmed (0.6) | psp413130-tbl-0001:row8:col1 |
| D1 [h] | `Q310` · D1 | 1.27 | h | 4572 | s | h | 3.61 | llm_confirmed (0.6) | psp413130-tbl-0001:row9:col1 |
| F1 | `Q40` · Fab | 0.882 |  | 0.882 |  |  | 1.10 | exact (1) | psp413130-tbl-0001:row10:col1 |
| DTC population ~ CL/F (ratio) | `Q31` · CL_ratio | 0.951 | ratio | 0.951 |  | ratio | 3.65 | llm_corrected (0.6) | psp413130-tbl-0001:row16:col1 |
| theta_cl_f_albumin_power | `Q900` · theta_cl_f_albumin_power | 0.900 |  |  |  |  | 1.98 |  | psp413130-tbl-0001:row14:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'Proportional (CV%; healthy subjects studies)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional (CV%; Patients studies)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional (CV%; TAD ≤2 h)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additional (ng/mL; TAD ≤2 h)' routed out of structural estimates ('Residual variability')
- 'Q2 (L/h)' linked to Q99: a second intercompartmental clearance beside the Q30 already present
- dropped unlinked row (NIL): 'CYP3A4 inhibitors ~ CL/F (ratio)' — extend the ontology if this is a real PK parameter (source ['psp413130-tbl-0001:row12:col1'])
- dropped 'ALP (&gt;ULN) ~ CL/F (ratio)' → Q27: unit 'ratio' is a statistic (%, CV, RSE, shrinkage or fold), not a clearance — the row is a variability or a ratio, not the estimate
- dropped 'Healthy population ~ CL/F (ratio)' → Q27: unit 'ratio' is a statistic (%, CV, RSE, shrinkage or fold), not a clearance — the row is a variability or a ratio, not the estimate
- dropped 'HCC population ~ CL/F (ratio)' → Q27: unit 'ratio' is a statistic (%, CV, RSE, shrinkage or fold), not a clearance — the row is a variability or a ratio, not the estimate
- dropped 'RCC population ~ CL/F (ratio)' → Q27: unit 'ratio' is a statistic (%, CV, RSE, shrinkage or fold), not a clearance — the row is a variability or a ratio, not the estimate
- dropped duplicate Q27 ('CL/F', value '35.6') — already have one for this compound
- dropped duplicate Q290 ('V1/F', value '42.8') — already have one for this compound
- dropped duplicate Q82 ('V2/F', value '68.2') — already have one for this compound
- dropped duplicate Q78 ('V3/F', value '36.2') — already have one for this compound
- dropped duplicate Q49 ('Ka', value '58.8') — already have one for this compound
- dropped duplicate Q310 ('D1', value '96.7') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lenvatinib
- topology: 4 first-order transfer(s) across 5 compounds → general_linear
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table psp413130-tbl-0001: unparsed_numeric_cell
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.75 (21/28 fields) | 7 |
| `qwen3.8-27b` | not confirmed | 0.769 (20/26 fields) | 6 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['lenvatinib', 'vegf', 'exposure_response'], ['lenvatinib', 'ang-2', 'exposure_response'], ['lenvatinib', 'tie-2', 'exposure_response'], ['lenvatinib', 'fgf-23', 'exposure_response']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['power'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cyp3a4_inhibitors_cl_f_ratio]` |  | 0.896 | only_one_extracted |
| `gpt-oss-120b` | `parameters[dtc population - cl/f]` | 0.951 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[healthy population - cl/f]` |  | 1.19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_albumin_power]` | 0.900 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_ratio_albumin_power]` |  | 0.900 | only_one_extracted |
| `qwen3.8-27b` | `parameters[alp (&gt;uln) - cl/f]` | 0.910 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/f].covariate_forms` | [] | ['power'] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_f_albumin_power]` |  | 0.900 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_ratio_albumin_power]` | 0.900 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_ratio_cyp3a4_power]` | 0.896 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q31_cyp3a4_power]` |  | 0.896 | only_one_extracted |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp413130-tbl-0001:row2:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp413130-tbl-0001:row3:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp413130-tbl-0001:row6:col1'] |
| C5_dimension_Q310 | pass | [time] |  | ['psp413130-tbl-0001:row9:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp413130-tbl-0001:row8:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['psp413130-tbl-0001:row5:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['psp413130-tbl-0001:row4:col1'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['psp413130-tbl-0001:row7:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.28 L/h | ['psp413130-tbl-0001:row2:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 46 L | ['psp413130-tbl-0001:row3:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 28.3 L | ['psp413130-tbl-0001:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | general_linear → PK_General_Linear* | PK_General_Linear |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | fail | no second reader contradicts | verdict disputed; agreement 0.75 (21 of 28 compared fields agree, 5 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.75 | cross-check contradicted by a second reader: verdict disputed; agreement 0.75 (21 of 28 compared fields agree, 5 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_lenvatinib/Lenvatinib_Majid2024_reference/Lenvatinib_Majid2024_reference_modelica.zip" download>Lenvatinib_Majid2024_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_lenvatinib/Lenvatinib_Majid2024_reference/Lenvatinib_Majid2024_reference_matlab.zip" download>Lenvatinib_Majid2024_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_lenvatinib/Lenvatinib_Majid2024_reference/Lenvatinib_Majid2024_reference_matlab_simbio.zip" download>Lenvatinib_Majid2024_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_lenvatinib/Lenvatinib_Majid2024_reference/Lenvatinib_Majid2024_reference_sbml.zip" download>Lenvatinib_Majid2024_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_lenvatinib/Lenvatinib_Majid2024_reference/Lenvatinib_Majid2024_reference_cellml.zip" download>Lenvatinib_Majid2024_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Majid O, Hayato S, Sreerama Reddy SH, Lalovic B, Hihara T, Hoshi T et al. Population pharmacokinetic-pharmacodynamic modeling of serum biomarkers as predictors of tumor dynamics following lenvatinib treatment in patients with radioiodine-refractory differentiated thyroid cancer (RR-DTC). CPT: pharmacometrics & systems pharmacology 13(6):954–969 (2024). [doi:10.1002/psp4.13130](https://doi.org/10.1002/psp4.13130)

**This record:** Pharmacolibrary, model `Lenvatinib_Majid2024_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_lenvatinib/Lenvatinib_Majid2024_reference>

```bibtex
@misc{pharmacolibrary_LenvatinibMajid2024reference,
  title  = {{Pharmacolibrary model Lenvatinib_Majid2024_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_lenvatinib/Lenvatinib_Majid2024_reference},
  note   = {Parameters from doi:10.1002/psp4.13130},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blenvatinib%5D%20Lenvatinib_Majid2024_reference&body=Drug%3A%20lenvatinib%0ARecord%3A%20Lenvatinib_Majid2024_reference%0APaper%3A%20Majid_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lenvatinib/Lenvatinib_Majid2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 12:54 UTC</sub>
