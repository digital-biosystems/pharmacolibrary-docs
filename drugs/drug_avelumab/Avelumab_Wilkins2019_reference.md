<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;avelumab&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/&quot;},{&quot;label&quot;:&quot;Wilkins_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Avelumab_Vugmeyster2022_adult_model&quot;,&quot;label&quot;:&quot;Vugmeyster_2022_adult_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/Avelumab_Vugmeyster2022_adult_model.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Avelumab_van2025_reference&quot;,&quot;label&quot;:&quot;van_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/Avelumab_van2025_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Avelumab_Wilkins2019_reference&quot;,&quot;label&quot;:&quot;Wilkins_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/Avelumab_Wilkins2019_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# avelumab — `Avelumab_Wilkins2019_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.568). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 146, model 459); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. Extracted — avelumab: CL 0.0308 L/hour, V1 3.42 L, V2 0.918 L, Q 0.0313 L/hour.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of age_on_cl_cl_age_1: this record has none, the second reading -0.12; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Wilkins JJ et al., Time-Varying Clearance and Impact of Di…, CPT: pharmacometrics & syst… (2019)
  ·  DOI: [10.1002/psp4.12406](https://doi.org/10.1002/psp4.12406)

<div class="pk-model-meta" hidden drug="avelumab" model-id="Avelumab_Wilkins2019_reference" status="needs_review" stale="false" population="patients with Merkel cell carcinoma and urothelial carcinoma" measured-compound="avelumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 4 extracted, plus 12 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, L/hour | `Q22` · CL | 0.0308 | L/hour | 8.555555555555557e-09 | [l] / [h] | 1.36 | exact (1.0) | psp412406-tbl-0002:row1:col1 | — | 0.0171 (13.8% RSE) |
| Central volume, L | `Q63` · V1 | 3.42 | L | 0.00342 | [l] | 1.20 | exact (1.0) | psp412406-tbl-0002:row2:col1 | — | not captured |
| Peripheral volume, L | `Q64` · V2 | 0.918 | L | 0.0009180000000000001 | [l] | 6.75 | exact (1.0) | psp412406-tbl-0002:row3:col1 | — | not captured |
| Intercompartmental CL, L/hour | `Q30` · Q | 0.0313 | L/hour | 8.694444444444445e-09 | [l] / [h] | 5.92 | llm_corrected (0.6) | psp412406-tbl-0002:row4:col1 | — | not captured |
| t_50_for_all_other_tumor_types | `Q900` · t_50_for_all_other_tumor_types | 68.4 | not captured | not captured | not captured | 2.54 | not captured (not captured) | psp412406-tbl-0002:row9:col1 | — | not captured |
| age_on_cl_cl_age_1 | `Q900` · age_on_cl_cl_age_1 | -0.12 | not captured | not captured | not captured | 22.5 | not captured (not captured) | psp412406-tbl-0002:row16:col1 | — | not captured |
| albumin_on_cl_cl_alb_1 | `Q900` · albumin_on_cl_cl_alb_1 | -0.438 | not captured | not captured | not captured | 12.2 | not captured (not captured) | psp412406-tbl-0002:row18:col1 | — | not captured |
| theta_q323_category | `Q900` · theta_q323_category | 0 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412406-tbl-0002:row7:col1 | — | not captured |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.324 | not captured | not captured | not captured | 10.1 | not captured (not captured) | psp412406-tbl-0002:row14:col1 | — | not captured |
| theta_cl_sex | `Q900` · theta_cl_sex | -0.15 | not captured | not captured | not captured | 8.85 | not captured (not captured) | psp412406-tbl-0002:row15:col1 | — | not captured |
| theta_cl_race | `Q900` · theta_cl_race | -0.12 | not captured | not captured | not captured | 17.6 | not captured (not captured) | psp412406-tbl-0002:row17:col1 | — | not captured |
| theta_cl_egfr | `Q900` · theta_cl_egfr | 0.0579 | not captured | not captured | not captured | 32.6 | not captured (not captured) | psp412406-tbl-0002:row19:col1 | — | not captured |
| theta_q314_ada | `Q900` · theta_q314_ada | 0.123 | not captured | not captured | not captured | 22.0 | not captured (not captured) | psp412406-tbl-0002:row21:col1 | — | not captured |
| theta_q1_body_weight | `Q900` · theta_q1_body_weight | 0.362 | not captured | not captured | not captured | 8.50 | not captured (not captured) | psp412406-tbl-0002:row28:col1 | — | not captured |
| theta_q32_sex | `Q900` · theta_q32_sex | -0.160 | not captured | not captured | not captured | 8.57 | not captured (not captured) | psp412406-tbl-0002:row29:col1 | — | not captured |
| theta_v1_albumin | `Q900` · theta_v1_albumin | -0.278 | not captured | not captured | not captured | 20.6 | not captured (not captured) | psp412406-tbl-0002:row30:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV on CL (ωCL2, variance)' routed out of structural estimates ('IIV')
- table section iiv: 'cov(CL,V 1) (ωCL,V1, covariance)' routed out of structural estimates ('IIV')
- table section iiv: 'IIV on V 1 (ωV12, variance)' routed out of structural estimates ('IIV')
- table section iiv: 'cov(V 1,V 2) (ωCL,V1, covariance)' routed out of structural estimates ('IIV')
- table section iiv: 'cov(CL,V 2) (ωCL,V1, covariance)' routed out of structural estimates ('IIV')
- table section iiv: 'IIV on V 2 (ωV22, variance)' routed out of structural estimates ('IIV')
- table section iiv: 'IIV on Imax (ωImax2, variance)' routed out of structural estimates ('IIV')
- table section residual_error: 'Proportional residual error (σadd)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive residual error (σadd), μg/mL' routed out of structural estimates ('Residual variability')
- dropped PD-category row 'Imax SCCHN' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412406-tbl-0002:row5:col1'])
- dropped unlinked row (NIL): 'Imax mMCC' — extend the ontology if this is a real PK parameter (source ['psp412406-tbl-0002:row6:col1'])
- dropped unlinked row (NIL): 'T 50 mMCC' — extend the ontology if this is a real PK parameter (source ['psp412406-tbl-0002:row8:col1'])
- covariate level 'T 50, for all other tumor types' → Q900:t_50_for_all_other_tumor_types = 68.4 (additive_shift on Q22)
- covariate level 'Age on CL (θCL,Age)1' → Q900:age_on_cl_cl_age_1 = -0.12 (linear_fractional on Q22)
- covariate level 'Albumin on CL (θCL,Alb)1' → Q900:albumin_on_cl_cl_alb_1 = -0.438 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Tumor burden on CL (θCL,TS)1' — extend the ontology if this is a real PK parameter (source ['psp412406-tbl-0002:row20:col1'])
- dropped unlinked row (NIL): 'CRP on CL (θCL,CRP)1' — extend the ontology if this is a real PK parameter (source ['psp412406-tbl-0002:row22:col1'])
- routed 'Platelets on CL (θCL,Plat)1' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'AST on CL (θCL,AST)1' — extend the ontology if this is a real PK parameter (source ['psp412406-tbl-0002:row24:col1'])
- dropped duplicate Q22 ('Not taking concomitant opioids on CL (θCL,COpi)2', value '-0.0445') — already have one for this compound
- dropped duplicate Q22 ('Previous use of biologics on CL (θCL,PBio)2', value '-0.0508') — already have one for this compound
- dropped unlinked row (NIL): 'Previous use of biologics on V 1 (θV1,PBio) 2' — extend the ontology if this is a real PK parameter (source ['psp412406-tbl-0002:row31:col1'])
- covariate effect for Q323 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q32 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=avelumab
- molar mass: none found for 'avelumab' — its concentrations stay mass-only

**Extraction notes:**
- table psp412406-tbl-0002: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.568 (25/44 fields) | 19 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[age_on_cl_cl_age_1]` | not captured | -0.12 | only_one_extracted |
| `qwen3.8-27b` | `parameters[albumin_on_cl_cl_alb_1]` | -0.438 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[crp on cl (θcl,crp)1]` | 0.0677 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[intercompartmental cl]` | 0.0313 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[t_50_for_all_other_tumor_types].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_ada].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_race].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_sex].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_equation_variable_age]` | -0.12 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_equation_variable_egfr]` | 0.0579 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q1_body_weight]` | not captured | 0.324 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_body_weight].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_q319_body_weight].rse_percent` | 10.1 | 8.50 | mismatch |
| `qwen3.8-27b` | `parameters[theta_q319_body_weight].value` | 0.324 | 0.362 | mismatch |
| `qwen3.8-27b` | `parameters[theta_q31_egfr]` | not captured | 0.0579 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q323_category].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_q900_albumin]` | not captured | -0.438 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v1_albumin].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_v1_sex].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412406-tbl-0002:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412406-tbl-0002:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412406-tbl-0002:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412406-tbl-0002:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0308 | not captured | not captured | ['psp412406-tbl-0002:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0308 L/h | not captured | not captured | ['psp412406-tbl-0002:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.42 L | not captured | not captured | ['psp412406-tbl-0002:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.918 L | not captured | not captured | ['psp412406-tbl-0002:row3:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=avelumab) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | fail | 146.39999999999998 | 458.5969730257959 | 3.1325 | days→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_avelumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wilkins_2019` / `Wilkins_2019::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_avelumab/models/modelica/Avelumab_Wilkins2019_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_avelumab/models/modelica/Avelumab_Wilkins2019_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_avelumab/models/modelica/Avelumab_Wilkins2019_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_avelumab/Avelumab_Wilkins2019_reference/Avelumab_Wilkins2019_reference_modelica.zip" download>Avelumab_Wilkins2019_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_avelumab/Avelumab_Wilkins2019_reference/Avelumab_Wilkins2019_reference_fmi.zip" download>Avelumab_Wilkins2019_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_avelumab/Avelumab_Wilkins2019_reference/Avelumab_Wilkins2019_reference_matlab.zip" download>Avelumab_Wilkins2019_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_avelumab/Avelumab_Wilkins2019_reference/Avelumab_Wilkins2019_reference_matlab_simbio.zip" download>Avelumab_Wilkins2019_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_avelumab/Avelumab_Wilkins2019_reference/Avelumab_Wilkins2019_reference_sbml.zip" download>Avelumab_Wilkins2019_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_avelumab/Avelumab_Wilkins2019_reference/Avelumab_Wilkins2019_reference_cellml.zip" download>Avelumab_Wilkins2019_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_avelumab/Avelumab_Wilkins2019_reference/Avelumab_Wilkins2019_reference.svg" alt="Avelumab_Wilkins2019_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 700 mg infusion over 10 min, single dose. Dose in the paper: 700 mg.

<dbs-fmusim paramsurl="drugs/drug_avelumab/Avelumab_Wilkins2019_reference/Avelumab_Wilkins2019_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_avelumab/Avelumab_Wilkins2019_reference/Avelumab_Wilkins2019_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Avelumab_Wilkins2019_reference_params.json` · controls `Avelumab_Wilkins2019_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 18:06 UTC</sub>
