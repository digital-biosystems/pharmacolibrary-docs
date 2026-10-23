<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;avelumab&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/&quot;},{&quot;label&quot;:&quot;Wilkins_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# avelumab — `Avelumab_Wilkins2019_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span>

<div class="pk-model-meta" hidden drug="avelumab" model-id="Avelumab_Wilkins2019_reference" status="not_modelled" stale="false" population="patients with 14 tumor types across three clinical studies" measured-compound="avelumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Wilkins JJ, Brockhaus B, Dai H, Vugmeyster Y, White JT, Brar S et al. Time-Varying Clearance and Impact of Disease State on the Pharmacokinetics of Avelumab in Merkel Cell Carcinoma and Urothelial Carcinoma. CPT: pharmacometrics & systems pharmacology 8(6):415–427 (2019).
  ·  DOI: [10.1002/psp4.12406](https://doi.org/10.1002/psp4.12406)

## Population and dosing

**Population:** patients with 14 tumor types across three clinical studies · condition multiple cancers · n = 1827.

**Dosing:** 700 mg, iv, multiple, every 336 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 12 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL, L/hour | CL | 0.0308 | L/hour | 1.36 | 0.0171 (None% RSE) |
| Central volume, L | V1 | 3.42 | L | 1.20 |  |
| Peripheral volume, L | V2 | 0.918 | L | 6.75 |  |
| Intercompartmental CL, L/hour | Q | 0.0313 | L/hour | 5.92 |  |
| t_50_for_all_other_tumor_types | t_50_for_all_other_tumor_types | 68.4 |  | 2.54 |  |
| albumin_on_cl_cl_alb_1 | albumin_on_cl_cl_alb_1 | -0.438 |  | 12.2 |  |
| CRP on CL (θCL,CRP)1 | equation variable | 0.0677 |  | 6.82 |  |
| theta_q323_category | theta_q323_category | 0 |  |  |  |
| theta_q319_body_weight | theta_q319_body_weight | 0.324 |  | 10.1 |  |
| theta_cl_sex | theta_cl_sex | -0.15 |  | 8.85 |  |
| theta_equation_variable_age | theta_equation_variable_age | -0.12 |  | 22.5 |  |
| theta_cl_race | theta_cl_race | -0.12 |  | 17.6 |  |
| theta_equation_variable_egfr | theta_equation_variable_egfr | 0.0579 |  | 32.6 |  |
| theta_cl_ada | theta_cl_ada | 0.123 | L/hour | 22.0 |  |
| theta_q319_body_weight | theta_q319_body_weight | 0.362 |  | 8.50 |  |
| theta_v1_sex | theta_v1_sex | -0.160 |  | 8.57 |  |
| theta_v1_albumin | theta_v1_albumin | -0.278 |  | 20.6 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.568). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No model has been built from this record yet; the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (theta_cl_ada), so that value has no SI equivalent.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of age_on_cl_cl_age_1: this record has none, the second reading -0.12; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, L/hour | `Q22` · CL | 0.0308 | L/hour | 8.556e-09 | m3/s | l/h | 1.36 | exact (1) | psp412406-tbl-0002:row1:col1, psp412406-tbl-0002:row1:col2 | 0.0171 (None% RSE) |
| Central volume, L | `Q63` · V1 | 3.42 | L | 0.00342 | m3 | l | 1.20 | exact (1) | psp412406-tbl-0002:row2:col1, psp412406-tbl-0002:row2:col2 |  |
| Peripheral volume, L | `Q64` · V2 | 0.918 | L | 0.000918 | m3 | l | 6.75 | exact (1) | psp412406-tbl-0002:row3:col1, psp412406-tbl-0002:row3:col2 |  |
| Intercompartmental CL, L/hour | `Q30` · Q | 0.0313 | L/hour | 8.694e-09 | m3/s | l/h | 5.92 | llm_corrected (0.6) | psp412406-tbl-0002:row4:col1, psp412406-tbl-0002:row4:col2 |  |
| t_50_for_all_other_tumor_types | `Q900` · t_50_for_all_other_tumor_types | 68.4 |  |  |  |  | 2.54 |  | psp412406-tbl-0002:row9:col1, psp412406-tbl-0002:row9:col2 |  |
| albumin_on_cl_cl_alb_1 | `Q900` · albumin_on_cl_cl_alb_1 | -0.438 |  |  |  |  | 12.2 |  | psp412406-tbl-0002:row18:col1, psp412406-tbl-0002:row18:col2 |  |
| CRP on CL (θCL,CRP)1 | `Q900` · equation variable | 0.0677 |  |  |  |  | 6.82 | llm_corrected (0.6) | psp412406-tbl-0002:row22:col1, psp412406-tbl-0002:row22:col2 |  |
| theta_q323_category | `Q900` · theta_q323_category | 0 |  |  |  |  |  |  | psp412406-tbl-0002:row7:col1 |  |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.324 |  |  |  |  | 10.1 |  | psp412406-tbl-0002:row14:col1, psp412406-tbl-0002:row14:col2 |  |
| theta_cl_sex | `Q900` · theta_cl_sex | -0.15 |  |  |  |  | 8.85 |  | psp412406-tbl-0002:row15:col1, psp412406-tbl-0002:row15:col2 |  |
| theta_equation_variable_age | `Q900` · theta_equation_variable_age | -0.12 |  |  |  |  | 22.5 |  | psp412406-tbl-0002:row16:col1, psp412406-tbl-0002:row16:col2 |  |
| theta_cl_race | `Q900` · theta_cl_race | -0.12 |  |  |  |  | 17.6 |  | psp412406-tbl-0002:row17:col1, psp412406-tbl-0002:row17:col2 |  |
| theta_equation_variable_egfr | `Q900` · theta_equation_variable_egfr | 0.0579 |  |  |  |  | 32.6 |  | psp412406-tbl-0002:row19:col1, psp412406-tbl-0002:row19:col2 |  |
| theta_cl_ada | `Q900` · theta_cl_ada | 0.123 | L/hour |  |  |  | 22.0 |  | psp412406-tbl-0002:row21:col1, psp412406-tbl-0002:row21:col2 |  |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.362 |  |  |  |  | 8.50 |  | psp412406-tbl-0002:row28:col1, psp412406-tbl-0002:row28:col2 |  |
| theta_v1_sex | `Q900` · theta_v1_sex | -0.160 |  |  |  |  | 8.57 |  | psp412406-tbl-0002:row29:col1, psp412406-tbl-0002:row29:col2 |  |
| theta_v1_albumin | `Q900` · theta_v1_albumin | -0.278 |  |  |  |  | 20.6 |  | psp412406-tbl-0002:row30:col1, psp412406-tbl-0002:row30:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- dropped PD-category row 'Imax SCCHN' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412406-tbl-0002:row5:col1', 'psp412406-tbl-0002:row5:col2'])
- dropped PD-category row 'Imax mMCC' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412406-tbl-0002:row6:col1', 'psp412406-tbl-0002:row6:col2'])
- dropped unlinked row (NIL): 'T 50 mMCC' — extend the ontology if this is a real PK parameter (source ['psp412406-tbl-0002:row8:col1', 'psp412406-tbl-0002:row8:col2'])
- covariate level 'T 50, for all other tumor types' → Q900:t_50_for_all_other_tumor_types = 68.4 (additive_shift on Q22)
- covariate level 'Albumin on CL (θCL,Alb)1' → Q900:albumin_on_cl_cl_alb_1 = -0.438 (linear_fractional on Q22)
- dropped duplicate Q22 ('Tumor burden on CL (θCL,TS)1', value '0.0592') — already have one for this compound
- dropped duplicate Q900 ('Platelets on CL (θCL,Plat)1', value '0.0603') — already have one for this compound
- dropped duplicate Q22 ('AST on CL (θCL,AST)1', value '-0.0514') — already have one for this compound
- dropped duplicate Q900 ('Not taking concomitant opioids on CL (θCL,COpi)2', value '-0.0445') — already have one for this compound
- dropped duplicate Q22 ('Previous use of biologics on CL (θCL,PBio)2', value '-0.0508') — already have one for this compound
- dropped duplicate Q900 ('Previous use of biologics on V 1 (θV1,PBio) 2', value '-0.0526') — already have one for this compound
- covariate effect for Q323 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=avelumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'avelumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell psp412406-tbl-0002:row1:col3 = '0.03; 0.0316'
- unparsed cell psp412406-tbl-0002:row2:col3 = '3.34; 3.5'
- unparsed cell psp412406-tbl-0002:row3:col3 = '0.796; 1.04'
- unparsed cell psp412406-tbl-0002:row4:col3 = '0.0277; 0.0349'
- unparsed cell psp412406-tbl-0002:row5:col3 = '−0.389; −0.180'
- unparsed cell psp412406-tbl-0002:row6:col3 = '−0.507; −0.266'
- unparsed cell psp412406-tbl-0002:row8:col3 = '99.6; 162'
- unparsed cell psp412406-tbl-0002:row9:col3 = '65.0; 71.8'
- unparsed cell psp412406-tbl-0002:row10:col3 = '0.415; 1.05'
- unparsed cell psp412406-tbl-0002:row11:col3 = '1.22; 2.15'
- unparsed cell psp412406-tbl-0002:row12:col3 = '2.52; 3.31'
- unparsed cell psp412406-tbl-0002:row14:col3 = '0.260; 0.388'
- unparsed cell psp412406-tbl-0002:row15:col3 = '−0.176; −0.124'
- unparsed cell psp412406-tbl-0002:row16:col3 = '−0.173; −0.0671'
- unparsed cell psp412406-tbl-0002:row17:col3 = '−0.161; −0.0785'
- unparsed cell psp412406-tbl-0002:row18:col3 = '−0.543; −0.333'
- unparsed cell psp412406-tbl-0002:row19:col3 = '0.0209; 0.0949'
- unparsed cell psp412406-tbl-0002:row20:col3 = '0.0441; 0.0744'
- unparsed cell psp412406-tbl-0002:row21:col3 = '0.0698; 0.176'
- unparsed cell psp412406-tbl-0002:row22:col3 = '0.0586; 0.0767'
- unparsed cell psp412406-tbl-0002:row23:col3 = '0.0266; 0.094'
- unparsed cell psp412406-tbl-0002:row24:col3 = '−0.0747; −0.028'
- unparsed cell psp412406-tbl-0002:row25:col3 = '−0.0683; −0.0208'
- unparsed cell psp412406-tbl-0002:row26:col3 = '−0.0796; −0.022'
- unparsed cell psp412406-tbl-0002:row28:col3 = '0.301; 0.422'
- unparsed cell psp412406-tbl-0002:row29:col3 = '−0.187; −0.133'
- unparsed cell psp412406-tbl-0002:row30:col3 = '−0.390; −0.165'
- unparsed cell psp412406-tbl-0002:row31:col3 = '−0.0827; −0.0226'
- unparsed cell psp412406-tbl-0002:row33:col3 = '0.0464; 0.0605'
- unparsed cell psp412406-tbl-0002:row34:col3 = '0.0125; 0.0218'
- unparsed cell psp412406-tbl-0002:row35:col3 = '0.0297; 0.0366'
- unparsed cell psp412406-tbl-0002:row36:col3 = '0.0321; 0.0946'
- unparsed cell psp412406-tbl-0002:row37:col3 = '−0.0429; 0.0148'
- unparsed cell psp412406-tbl-0002:row38:col3 = '0.659; 1.06'
- unparsed cell psp412406-tbl-0002:row39:col3 = '0.0485; 0.0707'
- unparsed cell psp412406-tbl-0002:row41:col3 = '0.161; 0.164'
- unparsed cell psp412406-tbl-0002:row42:col3 = '2.39; 2.48'
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
| `qwen3.8-27b` | `parameters[age_on_cl_cl_age_1]` |  | -0.12 | only_one_extracted |
| `qwen3.8-27b` | `parameters[albumin_on_cl_cl_alb_1]` | -0.438 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[crp on cl (θcl,crp)1]` | 0.0677 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[intercompartmental cl]` | 0.0313 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[t_50_for_all_other_tumor_types].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_ada].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_race].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_sex].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_equation_variable_age]` | -0.12 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_equation_variable_egfr]` | 0.0579 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q1_body_weight]` |  | 0.324 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_body_weight].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_q319_body_weight].rse_percent` | 10.1 | 8.50 | mismatch |
| `qwen3.8-27b` | `parameters[theta_q319_body_weight].value` | 0.324 | 0.362 | mismatch |
| `qwen3.8-27b` | `parameters[theta_q31_egfr]` |  | 0.0579 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q323_category].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_q900_albumin]` |  | -0.438 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v1_albumin].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_v1_sex].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp412406-tbl-0002:row1:col1', 'psp412406-tbl-0002:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp412406-tbl-0002:row4:col1', 'psp412406-tbl-0002:row4:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp412406-tbl-0002:row2:col1', 'psp412406-tbl-0002:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp412406-tbl-0002:row3:col1', 'psp412406-tbl-0002:row3:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0308 | ['psp412406-tbl-0002:row1:col1', 'psp412406-tbl-0002:row1:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0308 L/h | ['psp412406-tbl-0002:row1:col1', 'psp412406-tbl-0002:row1:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.42 L | ['psp412406-tbl-0002:row2:col1', 'psp412406-tbl-0002:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.918 L | ['psp412406-tbl-0002:row3:col1', 'psp412406-tbl-0002:row3:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | note |
|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage |  | skipped |  | no emitted model to inspect (engineer build absent) |
| T6_deviations |  | pass |  | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | skipped | 6.1 | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 146 | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 4.5 | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 6.8 | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 5.7 | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bavelumab%5D%20Avelumab_Wilkins2019_reference&body=Drug%3A%20avelumab%0ARecord%3A%20Avelumab_Wilkins2019_reference%0APaper%3A%20Wilkins_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_avelumab/Avelumab_Wilkins2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 09:40 UTC</sub>
