<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;avelumab&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/&quot;},{&quot;label&quot;:&quot;Wilkins_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Avelumab_Masters2022_reference&quot;,&quot;label&quot;:&quot;Masters_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/Avelumab_Masters2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Avelumab_Vugmeyster2022_reference&quot;,&quot;label&quot;:&quot;Vugmeyster_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/Avelumab_Vugmeyster2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Avelumab_Wilkins2019_reference&quot;,&quot;label&quot;:&quot;Wilkins_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/Avelumab_Wilkins2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# avelumab — `Avelumab_Wilkins2019_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 108, model 459); the covariate scenarios were not simulated (+1 more).

<div class="pk-model-meta" hidden drug="avelumab" model-id="Avelumab_Wilkins2019_reference" status="needs_review" stale="false" population="patients with Merkel cell carcinoma and urothelial carcinoma" measured-compound="avelumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Wilkins JJ, Brockhaus B, Dai H, Vugmeyster Y, White JT, Brar S et al. Time-Varying Clearance and Impact of Disease State on the Pharmacokinetics of Avelumab in Merkel Cell Carcinoma and Urothelial Carcinoma. CPT: pharmacometrics & systems pharmacology 8(6):415–427 (2019).
  ·  DOI: [10.1002/psp4.12406](https://doi.org/10.1002/psp4.12406)

## Population and dosing

**Population:** patients with Merkel cell carcinoma and urothelial carcinoma · condition Merkel cell carcinoma and urothelial carcinoma · age group adult.

**Dosing:** 700 mg, iv, multiple, every 168 h.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 12 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_avelumab/Avelumab_Wilkins2019_reference/Avelumab_Wilkins2019_reference.svg" alt="Avelumab_Wilkins2019_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL, L/hour | CL | 0.0308 | L/hour | 1.36 |
| Central volume, L | V1 | 3.42 | L | 1.20 |
| Peripheral volume, L | V2 | 0.918 | L | 6.75 |
| Intercompartmental CL, L/hour | Q | 0.0313 | L/hour | 5.92 |
| t_50_for_all_other_tumor_types | t_50_for_all_other_tumor_types | 68.4 |  | 2.54 |
| age_on_cl_cl_age_1 | age_on_cl_cl_age_1 | -0.12 |  | 22.5 |
| albumin_on_cl_cl_alb_1 | albumin_on_cl_cl_alb_1 | -0.438 |  | 12.2 |
| egfr_on_cl_cl_egfr_1 | egfr_on_cl_cl_egfr_1 | 0.0579 |  | 32.6 |
| theta_q323_category | theta_q323_category | 0 |  |  |
| theta_q319_body_weight | theta_q319_body_weight | 0.324 |  | 10.1 |
| theta_cl_sex | theta_cl_sex | -0.15 |  | 8.85 |
| theta_cl_race | theta_cl_race | -0.12 |  | 17.6 |
| theta_cl_ada | theta_cl_ada | 0.123 | L/hour | 22.0 |
| theta_q319_body_weight | theta_q319_body_weight | 0.362 |  | 8.50 |
| theta_v1_sex | theta_v1_sex | -0.160 |  | 8.57 |
| theta_v1_albumin | theta_v1_albumin | -0.278 |  | 20.6 |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.694), qwen3.8-27b (not confirmed, agreement 0.568). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 108, model 459); the covariate scenarios were not simulated (+1 more).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (theta_cl_ada), so that value has no SI equivalent. Extracted — avelumab: CL 0.0308 L/hour, V1 3.42 L, V2 0.918 L, Q 0.0313 L/hour.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of age_on_cl_cl_age_1: this record has -0.12, the second reading none; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL, L/hour | `Q22` · CL | 0.0308 | L/hour | 8.556e-09 | m3/s | l/h | 1.36 | exact (1) | psp412406-tbl-0002:row1:col1 |
| Central volume, L | `Q63` · V1 | 3.42 | L | 0.00342 | m3 | l | 1.20 | exact (1) | psp412406-tbl-0002:row2:col1 |
| Peripheral volume, L | `Q64` · V2 | 0.918 | L | 0.000918 | m3 | l | 6.75 | exact (1) | psp412406-tbl-0002:row3:col1 |
| Intercompartmental CL, L/hour | `Q30` · Q | 0.0313 | L/hour | 8.694e-09 | m3/s | l/h | 5.92 | llm_corrected (0.6) | psp412406-tbl-0002:row4:col1 |
| t_50_for_all_other_tumor_types | `Q900` · t_50_for_all_other_tumor_types | 68.4 |  |  |  |  | 2.54 |  | psp412406-tbl-0002:row9:col1 |
| age_on_cl_cl_age_1 | `Q900` · age_on_cl_cl_age_1 | -0.12 |  |  |  |  | 22.5 |  | psp412406-tbl-0002:row16:col1 |
| albumin_on_cl_cl_alb_1 | `Q900` · albumin_on_cl_cl_alb_1 | -0.438 |  |  |  |  | 12.2 |  | psp412406-tbl-0002:row18:col1 |
| egfr_on_cl_cl_egfr_1 | `Q900` · egfr_on_cl_cl_egfr_1 | 0.0579 |  |  |  |  | 32.6 |  | psp412406-tbl-0002:row19:col1 |
| theta_q323_category | `Q900` · theta_q323_category | 0 |  |  |  |  |  |  | psp412406-tbl-0002:row7:col1 |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.324 |  |  |  |  | 10.1 |  | psp412406-tbl-0002:row14:col1 |
| theta_cl_sex | `Q900` · theta_cl_sex | -0.15 |  |  |  |  | 8.85 |  | psp412406-tbl-0002:row15:col1 |
| theta_cl_race | `Q900` · theta_cl_race | -0.12 |  |  |  |  | 17.6 |  | psp412406-tbl-0002:row17:col1 |
| theta_cl_ada | `Q900` · theta_cl_ada | 0.123 | L/hour |  |  |  | 22.0 |  | psp412406-tbl-0002:row21:col1 |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.362 |  |  |  |  | 8.50 |  | psp412406-tbl-0002:row28:col1 |
| theta_v1_sex | `Q900` · theta_v1_sex | -0.160 |  |  |  |  | 8.57 |  | psp412406-tbl-0002:row29:col1 |
| theta_v1_albumin | `Q900` · theta_v1_albumin | -0.278 |  |  |  |  | 20.6 |  | psp412406-tbl-0002:row30:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- dropped PD-category row 'Imax mMCC' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412406-tbl-0002:row6:col1'])
- dropped unlinked row (NIL): 'T 50 mMCC' — extend the ontology if this is a real PK parameter (source ['psp412406-tbl-0002:row8:col1'])
- covariate level 'T 50, for all other tumor types' → Q900:t_50_for_all_other_tumor_types = 68.4 (additive_shift on Q22)
- covariate level 'Age on CL (θCL,Age)1' → Q900:age_on_cl_cl_age_1 = -0.12 (linear_fractional on Q22)
- covariate level 'Albumin on CL (θCL,Alb)1' → Q900:albumin_on_cl_cl_alb_1 = -0.438 (linear_fractional on Q22)
- covariate level 'eGFR on CL (θCL,eGFR)1' → Q900:egfr_on_cl_cl_egfr_1 = 0.0579 (linear_fractional on Q22)
- dropped duplicate Q22 ('Tumor burden on CL (θCL,TS)1', value '0.0592') — already have one for this compound
- dropped duplicate Q22 ('CRP on CL (θCL,CRP)1', value '0.0677') — already have one for this compound
- dropped unlinked row (NIL): 'Platelets on CL (θCL,Plat)1' — extend the ontology if this is a real PK parameter (source ['psp412406-tbl-0002:row23:col1'])
- dropped unlinked row (NIL): 'AST on CL (θCL,AST)1' — extend the ontology if this is a real PK parameter (source ['psp412406-tbl-0002:row24:col1'])
- dropped 'Not taking concomitant opioids on CL (θCL,COpi)2' → Q22 = -0.0445: a clearance of -0.0445 is not a parameter value (source ['psp412406-tbl-0002:row25:col1'])
- dropped unlinked row (NIL): 'Previous use of biologics on CL (θCL,PBio)2' — extend the ontology if this is a real PK parameter (source ['psp412406-tbl-0002:row26:col1'])
- dropped unlinked row (NIL): 'Previous use of biologics on V 1 (θV1,PBio) 2' — extend the ontology if this is a real PK parameter (source ['psp412406-tbl-0002:row31:col1'])
- covariate effect for Q323 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=avelumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- molar mass: none found for 'avelumab' — its concentrations stay mass-only

**Extraction notes:**
- table psp412406-tbl-0002: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.694 (25/36 fields) | 11 |
| `qwen3.8-27b` | not confirmed | 0.568 (25/44 fields) | 19 |

<details><summary>30 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[age_on_cl_cl_age_1]` | -0.12 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[albumin_on_cl_cl_alb_1]` | -0.438 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl].covariate_forms` | ['additive_shift', 'additive_shift', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | ['additive_shift', 'additive_shift', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[egfr_on_cl_cl_egfr_1]` | 0.0579 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_age]` |  | -0.12 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_albumin]` |  | -0.438 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_body_weight]` |  | 0.324 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_egfr]` |  | 0.0579 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_body_weight]` | 0.324 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_body_weight]` |  | 0.362 | only_one_extracted |
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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp412406-tbl-0002:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp412406-tbl-0002:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp412406-tbl-0002:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp412406-tbl-0002:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0308 | ['psp412406-tbl-0002:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0308 L/h | ['psp412406-tbl-0002:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.42 L | ['psp412406-tbl-0002:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.918 L | ['psp412406-tbl-0002:row3:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=avelumab) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| X1_cross_check |  | fail | no second reader contradicts | verdict disputed; agreement 0.694 (25 of 36 compared fields agree, 9 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.694 | cross-check contradicted by a second reader: verdict disputed; agreement 0.694 (25 of 36 compared fields agree, 9 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |
| T1_t_half_beta | reference | fail | 146.4 | 458.6 | 3.132 | reported 6.1 days→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 108 | 458.6 | 4.246 | reported 4.5 days→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 163.2 | 458.6 | 2.81 | reported 6.8 days→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 136.8 | 458.6 | 3.352 | reported 5.7 days→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_avelumab/Avelumab_Wilkins2019_reference/Avelumab_Wilkins2019_reference_modelica.zip" download>Avelumab_Wilkins2019_reference_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_avelumab/Avelumab_Wilkins2019_reference/Avelumab_Wilkins2019_reference_fmi.zip" download>Avelumab_Wilkins2019_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_avelumab/Avelumab_Wilkins2019_reference/Avelumab_Wilkins2019_reference_matlab.zip" download>Avelumab_Wilkins2019_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_avelumab/Avelumab_Wilkins2019_reference/Avelumab_Wilkins2019_reference_matlab_simbio.zip" download>Avelumab_Wilkins2019_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_avelumab/Avelumab_Wilkins2019_reference/Avelumab_Wilkins2019_reference_sbml.zip" download>Avelumab_Wilkins2019_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_avelumab/Avelumab_Wilkins2019_reference/Avelumab_Wilkins2019_reference_cellml.zip" download>Avelumab_Wilkins2019_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
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
| input | dosing | `adminMass` | 0.0007 | kg |
| input | model | `Cl` | 8.556e-09 | m3/s |
| input | model | `VdPerKg` | 4.886e-05 | m3/kg |
| input | model | `k12` | 2.542e-06 | 1/s |
| input | model | `k21` | 9.471e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Wilkins JJ, Brockhaus B, Dai H, Vugmeyster Y, White JT, Brar S et al. Time-Varying Clearance and Impact of Disease State on the Pharmacokinetics of Avelumab in Merkel Cell Carcinoma and Urothelial Carcinoma. CPT: pharmacometrics & systems pharmacology 8(6):415–427 (2019). [doi:10.1002/psp4.12406](https://doi.org/10.1002/psp4.12406)

**This record:** Pharmacolibrary, model `Avelumab_Wilkins2019_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_avelumab/Avelumab_Wilkins2019_reference>

```bibtex
@misc{pharmacolibrary_AvelumabWilkins2019reference,
  title  = {{Pharmacolibrary model Avelumab_Wilkins2019_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_avelumab/Avelumab_Wilkins2019_reference},
  note   = {Parameters from doi:10.1002/psp4.12406},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 700 mg infusion over 10 min, single dose. Dose in the paper: 700 mg.

<dbs-fmusim paramsurl="drugs/drug_avelumab/Avelumab_Wilkins2019_reference/Avelumab_Wilkins2019_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_avelumab/Avelumab_Wilkins2019_reference/Avelumab_Wilkins2019_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Avelumab_Wilkins2019_reference_params.json` · controls `Avelumab_Wilkins2019_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bavelumab%5D%20Avelumab_Wilkins2019_reference&body=Drug%3A%20avelumab%0ARecord%3A%20Avelumab_Wilkins2019_reference%0APaper%3A%20Wilkins_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_avelumab/Avelumab_Wilkins2019_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 11:26 UTC</sub>
