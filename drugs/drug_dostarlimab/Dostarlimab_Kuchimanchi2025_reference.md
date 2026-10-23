<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;dostarlimab&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/&quot;},{&quot;label&quot;:&quot;Kuchimanchi_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dostarlimab_Melhem2022_mean&quot;,&quot;label&quot;:&quot;Melhem_2022_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/Dostarlimab_Melhem2022_mean.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dostarlimab_Shang2022_reference&quot;,&quot;label&quot;:&quot;Shang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/Dostarlimab_Shang2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dostarlimab_Kuchimanchi2025_reference&quot;,&quot;label&quot;:&quot;Kuchimanchi_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dostarlimab — `Dostarlimab_Kuchimanchi2025_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 0.382, model 0.138); the covariate scenarios were not simulated.

<div class="pk-model-meta" hidden drug="dostarlimab" model-id="Dostarlimab_Kuchimanchi2025_reference" status="needs_review" stale="false" population="patients with primary advanced or recurrent endometrial cancer" measured-compound="dostarlimab" parameterization="mechanistic" topology="2C"></div>

## Citation
Kuchimanchi M, Jørgensen TL, Hanze E, André T, Jain A, Berton D et al. Population pharmacokinetics and exposure-response relationships of dostarlimab in primary advanced or recurrent endometrial cancer in part 1 of RUBY. British journal of clinical pharmacology 91(3):841–855 (2025).
  ·  DOI: [10.1111/bcp.16325](https://doi.org/10.1111/bcp.16325)

## Population and dosing

**Population:** patients with primary advanced or recurrent endometrial cancer · condition primary advanced or recurrent endometrial cancer · age group adult · n = 868.

**Dosing:** 500, 1000 mg, iv, multiple.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted, plus 3 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference/Dostarlimab_Kuchimanchi2025_reference.svg" alt="Dostarlimab_Kuchimanchi2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Clearance (CL [L·h−1]) | CL | 0.00732 | L/h | 2.03 | None (6.97% RSE) |
| Central volume of distribution (Vc (L)) | V1 | 3.09 | L | 0.754 | None (8.30% RSE) |
| Intercompartmental clearance (Q [L·h−1]) | Q | 0.0191 | L/h | 12.0 |  |
| Peripheral volume of distribution (Vp (L)) | V2 | 2.48 | L | 5.18 |  |
| T50 (days) | t1/2z | 145 | days | 12.9 |  |
| Effect of ALT on CL | equation variable | -0.0623 |  | 26.5 |  |
| theta_q319_wt | theta_q319_wt | 0.523 |  | 7.78 |  |
| theta_v1_wt | theta_v1_wt | 0.48 |  | 4.75 |  |
| theta_cl_age | theta_cl_age | -0.238 |  | 26.2 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.522). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 0.382, model 0.138); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. Extracted — dostarlimab: CL 0.00732 L/h, V1 3.09 L, Q 0.0191 L/h, V2 2.48 L, t1/2z 145 days.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[central volume of distribution (vc (l))].covariate_forms`: this record has ['linear_fractional'], the second reading none; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance (CL [L·h−1]) | `Q22` · CL | 0.00732 | L/h | 2.033e-09 | m3/s | L/h | 2.03 | exact (1) | bcp16325-tbl-0002:row1:col1, bcp16325-tbl-0002:row1:col2, bcp16325-tbl-0002:row1:col3 | None (6.97% RSE) |
| Central volume of distribution (Vc (L)) | `Q63` · V1 | 3.09 | L | 0.00309 | m3 | L | 0.754 | boundary_compartment (0.9) | bcp16325-tbl-0002:row2:col1, bcp16325-tbl-0002:row2:col2, bcp16325-tbl-0002:row2:col3 | None (8.30% RSE) |
| Intercompartmental clearance (Q [L·h−1]) | `Q30` · Q | 0.0191 | L/h | 5.306e-09 | m3/s | L/h | 12.0 | exact (1) | bcp16325-tbl-0002:row5:col1, bcp16325-tbl-0002:row5:col2, bcp16325-tbl-0002:row5:col3 |  |
| Peripheral volume of distribution (Vp (L)) | `Q64` · V2 | 2.48 | L | 0.00248 | m3 | L | 5.18 | boundary_compartment (0.9) | bcp16325-tbl-0002:row6:col1, bcp16325-tbl-0002:row6:col2, bcp16325-tbl-0002:row6:col3 |  |
| T50 (days) | `Q57` · t1/2z | 145 | days | 1.253e+07 | s | d | 12.9 | llm (0.6) | bcp16325-tbl-0002:row8:col1, bcp16325-tbl-0002:row8:col2, bcp16325-tbl-0002:row8:col3 |  |
| Effect of ALT on CL | `Q900` · equation variable | -0.0623 |  |  |  |  | 26.5 | llm_corrected (0.6) | bcp16325-tbl-0002:row15:col1, bcp16325-tbl-0002:row15:col2 |  |
| theta_q319_wt | `Q900` · theta_q319_wt | 0.523 |  |  |  |  | 7.78 |  | bcp16325-tbl-0002:row10:col1, bcp16325-tbl-0002:row10:col2, bcp16325-tbl-0002:row10:col3 |  |
| theta_v1_wt | `Q900` · theta_v1_wt | 0.48 |  |  |  |  | 4.75 |  | bcp16325-tbl-0002:row11:col1, bcp16325-tbl-0002:row11:col2, bcp16325-tbl-0002:row11:col3 |  |
| theta_cl_age | `Q900` · theta_cl_age | -0.238 |  |  |  |  | 26.2 |  | bcp16325-tbl-0002:row13:col1, bcp16325-tbl-0002:row13:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'CL [L·h−1]' (CL)
- unit_dimension_unknown: 'Q [L·h−1]' (Q)
- dropped PD-category row 'Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp16325-tbl-0002:row7:col1', 'bcp16325-tbl-0002:row7:col2'])
- dropped PD-category row 'Hill' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp16325-tbl-0002:row9:col1', 'bcp16325-tbl-0002:row9:col2', 'bcp16325-tbl-0002:row9:col3'])
- dropped unlinked row (NIL): 'Effect of ALB on CL' — extend the ontology if this is a real PK parameter (source ['bcp16325-tbl-0002:row14:col1', 'bcp16325-tbl-0002:row14:col2'])
- dropped duplicate Q22 ('Effect of combination therapy on CL', value '-0.0779') — already have one for this compound
- dropped duplicate Q22 ('Effect of male on CL', value '0.15') — already have one for this compound
- dropped duplicate Q63 ('Effect of ALB on Vc', value '-0.132') — already have one for this compound
- dropped duplicate Q63 ('Effect of male on Vc', value '0.137') — already have one for this compound
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Clearance (CL [L·h−1])' → L/h (from the paper text: 'The parameter is listed as “Clearance (CL [L·h−1])”. This explicitly states L/h.')
- implicit units: 'Central volume of distribution (Vc (L))' → L (from the paper text: 'The parameter is listed as “Central volume of distribution (Vc (L))”. This explicitly states L.')
- implicit units: 'Intercompartmental clearance (Q [L·h−1])' → L/h (from the paper text: 'The parameter is listed as “Intercompartmental clearance (Q [L·h−1])”. This explicitly states L/h.')
- implicit units: 'Peripheral volume of distribution (Vp (L))' → L (from the paper text: 'The parameter is listed as “Peripheral volume of distribution (Vp (L))”. This explicitly states L.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dostarlimab
- molar mass: none found for 'dostarlimab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell bcp16325-tbl-0002:row7:col3 = '(−0.157 to −0.0704)'
- unparsed cell bcp16325-tbl-0002:row13:col3 = '(−0.360 to −0.116)'
- unparsed cell bcp16325-tbl-0002:row14:col3 = '(−1.06 to −0.778)'
- unparsed cell bcp16325-tbl-0002:row15:col3 = '(−0.0947 to −0.0300)'
- unparsed cell bcp16325-tbl-0002:row16:col3 = '(−0.118 to −0.0384)'
- unparsed cell bcp16325-tbl-0002:row18:col3 = '(−0.222 to −0.0409)'
- unparsed cell bcp16325-tbl-0002:row20:col1 = '0.0563 (23.7% CV)'
- unparsed cell bcp16325-tbl-0002:row22:col1 = '0.0278 (16.7% CV)'
- unparsed cell bcp16325-tbl-0002:row23:col1 = '0.903 (95.0% CV)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.522 (12/23 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[central volume of distribution (vc (l))].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[clearance].covariate_forms` | ['linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[effect of alb on vc]` |  | -0.132 | only_one_extracted |
| `qwen3.8-27b` | `parameters[effect of alt on cl]` | -0.0623 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[effect_of_age_on_cl]` |  | -0.238 | only_one_extracted |
| `qwen3.8-27b` | `parameters[effect_of_wt_on_cl]` |  | 0.523 | only_one_extracted |
| `qwen3.8-27b` | `parameters[effect_of_wt_on_vc_and_vp]` |  | 0.48 | only_one_extracted |
| `qwen3.8-27b` | `parameters[t50]` | 145 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_age]` | -0.238 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_wt]` | 0.523 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v1_wt]` | 0.48 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['bcp16325-tbl-0002:row1:col1', 'bcp16325-tbl-0002:row1:col2', 'bcp16325-tbl-0002:row1:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['bcp16325-tbl-0002:row5:col1', 'bcp16325-tbl-0002:row5:col2', 'bcp16325-tbl-0002:row5:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['bcp16325-tbl-0002:row8:col1', 'bcp16325-tbl-0002:row8:col2', 'bcp16325-tbl-0002:row8:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['bcp16325-tbl-0002:row2:col1', 'bcp16325-tbl-0002:row2:col2', 'bcp16325-tbl-0002:row2:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['bcp16325-tbl-0002:row6:col1', 'bcp16325-tbl-0002:row6:col2', 'bcp16325-tbl-0002:row6:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.00732 | ['bcp16325-tbl-0002:row1:col1', 'bcp16325-tbl-0002:row1:col2', 'bcp16325-tbl-0002:row1:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00732 L/h | ['bcp16325-tbl-0002:row1:col1', 'bcp16325-tbl-0002:row1:col2', 'bcp16325-tbl-0002:row1:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.09 L | ['bcp16325-tbl-0002:row2:col1', 'bcp16325-tbl-0002:row2:col2', 'bcp16325-tbl-0002:row2:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.48 L | ['bcp16325-tbl-0002:row6:col1', 'bcp16325-tbl-0002:row6:col2', 'bcp16325-tbl-0002:row6:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=dostarlimab) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | fail | 0.382 | 0.1377 | 0.3606 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 1.72 | 0.1377 |  | unresolved concentration unit (exp 'fold', sim 'kg/m3') |
| T1_cmax | reference | pass | 0.147 | 0.1377 | 0.9369 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | pass | 0.145 | 0.1377 | 0.9499 | mg/L→SI vs simulated kg/m3 |
| T1_cmin_ss | reference | skipped | 39.70 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 39.50 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 15.5 |  |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference/Dostarlimab_Kuchimanchi2025_reference_modelica.zip" download>Dostarlimab_Kuchimanchi2025_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference/Dostarlimab_Kuchimanchi2025_reference_fmi.zip" download>Dostarlimab_Kuchimanchi2025_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference/Dostarlimab_Kuchimanchi2025_reference_matlab.zip" download>Dostarlimab_Kuchimanchi2025_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference/Dostarlimab_Kuchimanchi2025_reference_matlab_simbio.zip" download>Dostarlimab_Kuchimanchi2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference/Dostarlimab_Kuchimanchi2025_reference_sbml.zip" download>Dostarlimab_Kuchimanchi2025_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference/Dostarlimab_Kuchimanchi2025_reference_cellml.zip" download>Dostarlimab_Kuchimanchi2025_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
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
| input | dosing | `adminMass` | 0.0005 | kg |
| input | model | `Cl` | 2.033e-09 | m3/s |
| input | model | `VdPerKg` | 4.414e-05 | m3/kg |
| input | model | `k12` | 1.717e-06 | 1/s |
| input | model | `k21` | 2.139e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kuchimanchi M, Jørgensen TL, Hanze E, André T, Jain A, Berton D et al. Population pharmacokinetics and exposure-response relationships of dostarlimab in primary advanced or recurrent endometrial cancer in part 1 of RUBY. British journal of clinical pharmacology 91(3):841–855 (2025). [doi:10.1111/bcp.16325](https://doi.org/10.1111/bcp.16325)

**This record:** Pharmacolibrary v26.09, model `Dostarlimab_Kuchimanchi2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference>

```bibtex
@misc{pharmacolibrary_DostarlimabKuchimanchi2025reference,
  title  = {{Pharmacolibrary model Dostarlimab_Kuchimanchi2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference},
  note   = {Parameters from doi:10.1111/bcp.16325},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 500 mg infusion over 10 min, single dose. Doses in the paper: 500, 1000 mg.

<dbs-fmusim paramsurl="drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference/Dostarlimab_Kuchimanchi2025_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference/Dostarlimab_Kuchimanchi2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Dostarlimab_Kuchimanchi2025_reference_params.json` · controls `Dostarlimab_Kuchimanchi2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdostarlimab%5D%20Dostarlimab_Kuchimanchi2025_reference&body=Drug%3A%20dostarlimab%0ARecord%3A%20Dostarlimab_Kuchimanchi2025_reference%0APaper%3A%20Kuchimanchi_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 12:09 UTC</sub>
