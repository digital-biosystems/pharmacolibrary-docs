<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;ribavirin&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/&quot;},{&quot;label&quot;:&quot;Mulder_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ribavirin_Jin2012_mean_of_25_leverage_runs_cv&quot;,&quot;label&quot;:&quot;Jin_2012_mean_of_25_leverage_runs_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ribavirin_Jin2012_population_mean_in_final_pk_model&quot;,&quot;label&quot;:&quot;Jin_2012_population_mean_in_final_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/Ribavirin_Jin2012_population_mean_in_final_pk_model.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ribavirin_Wade2006_reference&quot;,&quot;label&quot;:&quot;Wade_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/Ribavirin_Wade2006_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ribavirin — `Ribavirin_Mulder2025_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The ribavirin model was quarantined because bioavailability (F), volume of distribution (Vd) and absorption lag time (Tlag) had no extracted values and library placeholders were used instead, and the peripheral volume V2 (769 L) was neither emitted nor defaulted.

<div class="pk-model-meta" hidden drug="ribavirin" model-id="Ribavirin_Mulder2025_reference" status="model_quarantined" stale="false" population="adult solid organ transplant recipients with chronic hepatitis E virus infection" measured-compound="ribavirin" parameterization="mechanistic" topology="1C"></div>

## Citation
Mulder MB, van Noort M, de Man RA, Kamar N, de Bruijne J, Knoester M et al. Development of a ribavirin dosing regimen in transplant recipients with chronic hepatitis E virus infection: a population pharmacokinetic and -dynamic model. The Journal of antimicrobial chemotherapy 80(8):2158–2168 (2025).
  ·  DOI: [10.1093/jac/dkaf183](https://doi.org/10.1093/jac/dkaf183)

## Population and dosing

**Population:** adult solid organ transplant recipients with chronic hepatitis E virus infection · condition chronic hepatitis E virus infection · age group adult · n = 107.

**Dosing:** 200, 400, 600 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted, plus 2 covariate effects.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Ka (h−1) | kabs | 2.91 | h−1 |  |
| CL (L/h) | CL | 26.4 | L/h | 15 |
| V2 (L) | V2 | 769 | L |  |
| Q1 (L/h) | Q | 104 | L/h |  |
| V3 (L) | V3 | 3570 | L |  |
| egfr_on_cl | egfr_on_cl | 1.32 |  | 14 |
| TDEG (h) | t1/2z | 6398 | h |  |
| Elimination rate of virions (h−1) | kel | 0.0123 | h−1 | 7 |
| theta_q314_sex | theta_q314_sex | 0.732 |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The ribavirin model was quarantined because bioavailability (F), volume of distribution (Vd) and absorption lag time (Tlag) had no extracted values and library placeholders were used instead, and the peripheral volume V2 (769 L) was neither emitted nor defaulted.**

For ribavirin in adult solid organ transplant recipients with chronic hepatitis E, the record lists F, Vd and Tlag as defaulted parameters, meaning no explicit estimates existed and library placeholders would have stood in, so the model was held back rather than published with invented numbers. Parameter coverage reached only 4 of the expected 5 parameters, with V2 (769 L) neither emitted nor defaulted. The covariate effects defined in the record (egfr_on_cl 1.32 and theta_q314_sex 0.732) were not exercised: only the reference individual was simulated. The deviations check could not be completed and returned 'defaulted_parameters: not acceptable'. Extracted — ribavirin: kabs 2.91 h−1, CL 26.4 L/h, V2 769 L, Q 104 L/h, V3 3.57e+03 L, t1/2z 6.4e+03 h, kel 0.0123 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of egfr_on_cl: this record has 1.32, the second reading none; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Ka (h−1) | `Q49` · kabs | 2.91 | h−1 | 0.0008083 | 1/s | 1/h |  | exact (1) | dkaf183-T2:row3:col2 |
| CL (L/h) | `Q22` · CL | 26.4 | L/h | 7.333e-06 | m3/s | l/h | 15 | exact (1) | dkaf183-T2:row4:col2, dkaf183-T2:row4:col3, dkaf183-T2:row4:col4, dkaf183-T2:row4:col5 |
| V2 (L) | `Q64` · V2 | 769 | L | 0.769 | m3 | l |  | exact (1) | dkaf183-T2:row5:col2 |
| Q1 (L/h) | `Q30` · Q | 104 | L/h | 2.889e-05 | m3/s | l/h |  | exact (1) | dkaf183-T2:row6:col2 |
| V3 (L) | `Q77` · V3 | 3570 | L | 3.57 | m3 | l |  | exact (1) | dkaf183-T2:row7:col2 |
| egfr_on_cl | `Q900` · egfr_on_cl | 1.32 |  |  |  |  | 14 |  | dkaf183-T2:row8:col2, dkaf183-T2:row8:col3, dkaf183-T2:row8:col4, dkaf183-T2:row8:col5 |
| TDEG (h) | `Q57` · t1/2z | 6398 | h | 2.303e+07 | s | h |  | llm (0.6) | dkaf183-T2:row22:col2 |
| Elimination rate of virions (h−1) | `Q47` · kel | 0.0123 | h−1 | 3.417e-06 | 1/s | 1/h | 7 | llm_confirmed (0.6) | dkaf183-T2:row24:col2, dkaf183-T2:row24:col3, dkaf183-T2:row24:col4, dkaf183-T2:row24:col5 |
| theta_q314_sex | `Q900` · theta_q314_sex | 0.732 |  |  |  |  |  |  | dkaf183-T2:row11:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'bootstrap of the final model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- covariate level 'eGFR on Cl' → Q900:egfr_on_cl = 1.32 (linear_fractional on Q22)
- routed 'WGT on V2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'WGT on V3' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Cut-off value on kidney function (mL/min)' — extend the ontology if this is a real PK parameter (source ['dkaf183-T2:row12:col2', 'dkaf183-T2:row12:col3', 'dkaf183-T2:row12:col4', 'dkaf183-T2:row12:col5'])
- routed 'Standard deviation proportional error' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped PD-category row 'kout (h−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['dkaf183-T2:row16:col2', 'dkaf183-T2:row16:col3', 'dkaf183-T2:row16:col4', 'dkaf183-T2:row16:col5'])
- dropped PD-category row 'Slope' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['dkaf183-T2:row17:col2', 'dkaf183-T2:row17:col3', 'dkaf183-T2:row17:col4', 'dkaf183-T2:row17:col5'])
- routed 'Standard deviation additive error (mmol/L)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Factor' — extend the ontology if this is a real PK parameter (source ['dkaf183-T2:row23:col2'])
- dropped PD-category row 'IC50 (ng/L)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['dkaf183-T2:row25:col2'])
- dropped PD-category row 'Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['dkaf183-T2:row26:col2'])
- routed 'Standard deviation additive error' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (L/h)); Q64 (V2 (L)); Q30 (Q1 (L/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ribavirin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (14/21 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[egfr_on_cl]` | 1.32 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[factor]` |  | 100 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tdeg].parameter_id` | Q57 | Q59 | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_egfr]` |  | 1.32 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_sex]` | 0.732 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v3_sex]` |  | 0.732 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3].covariate_forms` | [] | ['linear_fractional'] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['dkaf183-T2:row4:col2', 'dkaf183-T2:row4:col3', 'dkaf183-T2:row4:col4', 'dkaf183-T2:row4:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['dkaf183-T2:row6:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['dkaf183-T2:row24:col2', 'dkaf183-T2:row24:col3', 'dkaf183-T2:row24:col4', 'dkaf183-T2:row24:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['dkaf183-T2:row3:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['dkaf183-T2:row22:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['dkaf183-T2:row5:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['dkaf183-T2:row7:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 26.4 | ['dkaf183-T2:row4:col2', 'dkaf183-T2:row4:col3', 'dkaf183-T2:row4:col4', 'dkaf183-T2:row4:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 26.4 L/h | ['dkaf183-T2:row4:col2', 'dkaf183-T2:row4:col3', 'dkaf183-T2:row4:col4', 'dkaf183-T2:row4:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 769 L | ['dkaf183-T2:row5:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage |  | fail | 5 scholar param(s) emitted or defaulted | 4 covered | neither emitted nor in defaulted[]: ['V2'] |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bribavirin%5D%20Ribavirin_Mulder2025_reference&body=Drug%3A%20ribavirin%0ARecord%3A%20Ribavirin_Mulder2025_reference%0APaper%3A%20Mulder_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ribavirin/Ribavirin_Mulder2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:48 UTC</sub>
