<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;atezolizumab&quot;,&quot;href&quot;:&quot;drugs/drug_atezolizumab/&quot;},{&quot;label&quot;:&quot;Chan_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atezolizumab_Stroh2017_reference&quot;,&quot;label&quot;:&quot;Stroh_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atezolizumab/Atezolizumab_Stroh2017_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atezolizumab_Chan2025_reference&quot;,&quot;label&quot;:&quot;Chan_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atezolizumab/Atezolizumab_Chan2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Atezolizumab_Shemesh2019_adult_model&quot;,&quot;label&quot;:&quot;Shemesh_2019_adult_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atezolizumab/Atezolizumab_Shemesh2019_adult_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atezolizumab_Shemesh2019_pediatric_young_adult_model&quot;,&quot;label&quot;:&quot;Shemesh_2019_pediatric_young_adult_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atezolizumab/Atezolizumab_Shemesh2019_pediatric_young_adult_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atezolizumab — `Atezolizumab_Chan2025_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The model does not reproduce the paper's time of the peak (tmax) (paper 108, model 364); the model does not reproduce the paper's peak concentration (Cmax) (paper 0.189, model 0.0142) (+4 more).

<div class="pk-model-meta" hidden drug="atezolizumab" model-id="Atezolizumab_Chan2025_reference" status="needs_review" stale="false" population="patients with non-small cell lung cancer" measured-compound="atezolizumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Chan P, Liu SN, Gosselin N, Sauve Z, Marchand M, Lin A et al. Population Pharmacokinetics and Exposure-Response of Subcutaneous Atezolizumab in Patients With Non-Small Cell Lung Cancer. CPT: pharmacometrics & systems pharmacology 14(4):726–737 (2025).
  ·  DOI: [10.1002/psp4.13310](https://doi.org/10.1002/psp4.13310)

## Population and dosing

**Population:** patients with non-small cell lung cancer · condition non-small cell lung cancer · age group adult.

**Dosing:** 1200, 1800, 1875 mg, sc, iv, multiple, every 21 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_atezolizumab/Atezolizumab_Chan2025_reference/Atezolizumab_Chan2025_reference.svg" alt="Atezolizumab_Chan2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL (L/d) | CL | 0.200 | L/d |  |
| Vc (L) | V1 | 3.28 | L |  |
| Vp (L) | V2 | 3.63 | L |  |
| Q (L/d) | Q | 0.546 | L/d |  |
| KA (1/d) | kabs | 0.304 | 1/d | 3.0 |
| F1 | Fab | 0.718 |  | 1.8 |
| theta_q61_sex | theta_q61_sex | -0.129 |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.48), qwen3.8-27b (not confirmed, agreement 0.542). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper 108, model 364); the model does not reproduce the paper's peak concentration (Cmax) (paper 0.189, model 0.0142) (+4 more).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. The base model was simulated, not the covariate effects the record defines. Extracted — atezolizumab: CL 0.2 L/d, V1 3.28 L, V2 3.63 L, Q 0.546 L/d, kabs 0.304 1/d, Fab 0.718.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl].covariate_forms`: this record has none, the second reading ['additive_shift', 'linear_fractional', 'linear_fractional']; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/d) | `Q22` · CL | 0.200 | L/d | 2.315e-09 | m3/s | l/d |  | exact (1) | psp413310-tbl-0002:row1:col1 |
| Vc (L) | `Q63` · V1 | 3.28 | L | 0.00328 | m3 | l |  | exact (1) | psp413310-tbl-0002:row2:col1 |
| Vp (L) | `Q64` · V2 | 3.63 | L | 0.00363 | m3 | l |  | exact (1) | psp413310-tbl-0002:row3:col1 |
| Q (L/d) | `Q30` · Q | 0.546 | L/d | 6.319e-09 | m3/s | l/d |  | exact (1) | psp413310-tbl-0002:row4:col1 |
| KA (1/d) | `Q49` · kabs | 0.304 | 1/d | 3.519e-06 | 1/s | 1/d | 3.0 | exact (1) | psp413310-tbl-0002:row13:col1 |
| F1 | `Q40` · Fab | 0.718 |  | 0.718 |  |  | 1.8 | exact (1) | psp413310-tbl-0002:row14:col1 |
| theta_q61_sex | `Q900` · theta_q61_sex | -0.129 |  |  |  |  |  |  | psp413310-tbl-0002:row11:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- table section iiv: 'POPIIV CL' routed out of structural estimates ('Omega (standard deviation scale)—Between subject variability')
- table section iiv: 'POPIIV Vc' routed out of structural estimates ('Omega (standard deviation scale)—Between subject variability')
- table section iiv: 'POPIIV Vp' routed out of structural estimates ('Omega (standard deviation scale)—Between subject variability')
- table section iiv: 'POPIIV KA' routed out of structural estimates ('Omega (standard deviation scale)—Between subject variability')
- table section iiv: 'POPIIV F1' routed out of structural estimates ('Omega (standard deviation scale)—Between subject variability')
- table section residual_error: 'Proportional error (%)' routed out of structural estimates ('Sigma (residual error)')
- table section residual_error: 'Additive error (μg/mL)' routed out of structural estimates ('Sigma (residual error)')
- dropped unlinked row (NIL): 'Albumin on CL (ALB/40 in g/L)' — extend the ontology if this is a real PK parameter (source ['psp413310-tbl-0002:row5:col1'])
- dropped unlinked row (NIL): 'ADA status on CL (additive effect for positive ADA)' — extend the ontology if this is a real PK parameter (source ['psp413310-tbl-0002:row6:col1'])
- dropped unlinked row (NIL): 'Tumor burden on CL (Tumor burden/63 mm)' — extend the ontology if this is a real PK parameter (source ['psp413310-tbl-0002:row7:col1'])
- dropped unlinked row (NIL): 'Bodyweight on CL (BWT/77 in kg)' — extend the ontology if this is a real PK parameter (source ['psp413310-tbl-0002:row8:col1'])
- dropped unlinked row (NIL): 'Albumin on Vc (ALB/40 in g/L)' — extend the ontology if this is a real PK parameter (source ['psp413310-tbl-0002:row9:col1'])
- dropped unlinked row (NIL): 'Bodyweight on Vc (BWT/77 in kg)' — extend the ontology if this is a real PK parameter (source ['psp413310-tbl-0002:row10:col1'])
- dropped unlinked row (NIL): 'Sex on Vp (additive effect for female)' — extend the ontology if this is a real PK parameter (source ['psp413310-tbl-0002:row12:col1'])
- dropped unlinked row (NIL): 'Albumin on KA (ALB/40 in g/L)' — extend the ontology if this is a real PK parameter (source ['psp413310-tbl-0002:row15:col1'])
- dropped unlinked row (NIL): 'Hemoglobin on F1 On logit scale (HGB/123 in g/L)' — extend the ontology if this is a real PK parameter (source ['psp413310-tbl-0002:row16:col1'])
- covariate effect for Q61 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atezolizumab
- molar mass: none found for 'atezolizumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table psp413310-tbl-0002: ragged_grid
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.48 (12/25 fields) | 13 |
| `qwen3.8-27b` | not confirmed | 0.542 (13/24 fields) | 11 |

<details><summary>24 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].covariate_forms` | [] | ['additive_shift', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[ka].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_ada]` |  | 0.159 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_albumin]` |  | -1.12 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_bodyweight]` |  | 0.808 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_kabs_albumin]` |  | 0.795 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_sex]` | -0.129 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_albumin]` |  | -0.350 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_bodyweight]` |  | 0.559 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_sex]` |  | -0.129 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_sex]` |  | -0.272 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc].covariate_forms` | [] | ['additive_shift', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[vp].covariate_forms` | [] | ['additive_shift'] | mismatch |
| `qwen3.8-27b` | `parameters[cl].covariate_forms` | ['additive_shift', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[ka].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_ada]` | 0.159 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_albumin]` | -1.12 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_kabs_albumin]` | 0.795 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q301_sex]` |  | -0.272 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_bodyweight]` |  | 0.808 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v1_albumin]` | -0.350 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v2_sex]` | -0.272 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[vc].covariate_forms` | ['additive_shift', 'linear_fractional'] | ['additive_shift'] | mismatch |
| `qwen3.8-27b` | `parameters[vp].covariate_forms` | ['additive_shift'] | [] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp413310-tbl-0002:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp413310-tbl-0002:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp413310-tbl-0002:row13:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp413310-tbl-0002:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp413310-tbl-0002:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.2 | ['psp413310-tbl-0002:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00833 L/h | ['psp413310-tbl-0002:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.28 L | ['psp413310-tbl-0002:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.63 L | ['psp413310-tbl-0002:row3:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=atezolizumab) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | fail | no second reader contradicts | verdict disputed; agreement 0.48 (12 of 25 compared fields agree, 9 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.48 | cross-check contradicted by a second reader: verdict disputed; agreement 0.48 (12 of 25 compared fields agree, 9 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |
| T1_cmax | reference | fail | 0.189 | 0.01416 | 0.0749 | reported 189.0 μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.438 | 0.01416 | 0.0323 | reported 438.0 μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.376 | 0.01416 | 0.0377 | reported 376.0 μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.626 | 0.01416 | 0.0226 | reported 626.0 μg/mL→SI vs simulated kg/m3 |
| T1_tmax | reference | fail | 108 | 363.6 | 3.367 | reported 4.5 days→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_atezolizumab/Atezolizumab_Chan2025_reference/Atezolizumab_Chan2025_reference_modelica.zip" download>Atezolizumab_Chan2025_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_atezolizumab/Atezolizumab_Chan2025_reference/Atezolizumab_Chan2025_reference_fmi.zip" download>Atezolizumab_Chan2025_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_atezolizumab/Atezolizumab_Chan2025_reference/Atezolizumab_Chan2025_reference_matlab.zip" download>Atezolizumab_Chan2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_atezolizumab/Atezolizumab_Chan2025_reference/Atezolizumab_Chan2025_reference_matlab_simbio.zip" download>Atezolizumab_Chan2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_atezolizumab/Atezolizumab_Chan2025_reference/Atezolizumab_Chan2025_reference_sbml.zip" download>Atezolizumab_Chan2025_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_atezolizumab/Atezolizumab_Chan2025_reference/Atezolizumab_Chan2025_reference_cellml.zip" download>Atezolizumab_Chan2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0012 | kg |
| input | model | `Cl` | 2.315e-09 | m3/s |
| input | model | `VdPerKg` | 4.686e-05 | m3/kg |
| input | model | `k12` | 1.927e-06 | 1/s |
| input | model | `k21` | 1.741e-06 | 1/s |
| input | model | `ka` | 3.519e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Chan P, Liu SN, Gosselin N, Sauve Z, Marchand M, Lin A et al. Population Pharmacokinetics and Exposure-Response of Subcutaneous Atezolizumab in Patients With Non-Small Cell Lung Cancer. CPT: pharmacometrics & systems pharmacology 14(4):726–737 (2025). [doi:10.1002/psp4.13310](https://doi.org/10.1002/psp4.13310)

**This record:** Pharmacolibrary, model `Atezolizumab_Chan2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_atezolizumab/Atezolizumab_Chan2025_reference>

```bibtex
@misc{pharmacolibrary_AtezolizumabChan2025reference,
  title  = {{Pharmacolibrary model Atezolizumab_Chan2025_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_atezolizumab/Atezolizumab_Chan2025_reference},
  note   = {Parameters from doi:10.1002/psp4.13310},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1200 mg, single dose, first-order absorption (ka 0.0127 /h, F 0.9). Doses in the paper: 1200, 1800, 1875 mg.

<dbs-fmusim paramsurl="drugs/drug_atezolizumab/Atezolizumab_Chan2025_reference/Atezolizumab_Chan2025_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_atezolizumab/Atezolizumab_Chan2025_reference/Atezolizumab_Chan2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Atezolizumab_Chan2025_reference_params.json` · controls `Atezolizumab_Chan2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batezolizumab%5D%20Atezolizumab_Chan2025_reference&body=Drug%3A%20atezolizumab%0ARecord%3A%20Atezolizumab_Chan2025_reference%0APaper%3A%20Chan_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atezolizumab/Atezolizumab_Chan2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 10:49 UTC</sub>
