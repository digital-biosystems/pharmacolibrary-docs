<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;amisulpride&quot;,&quot;href&quot;:&quot;drugs/drug_amisulpride/&quot;},{&quot;label&quot;:&quot;Reeves_2016 \u00b7 group_1&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amisulpride_Liu2023_reference&quot;,&quot;label&quot;:&quot;Liu_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amisulpride/Amisulpride_Liu2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amisulpride_Wang2022_reference&quot;,&quot;label&quot;:&quot;Wang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amisulpride/Amisulpride_Wang2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amisulpride_Yan2024_final&quot;,&quot;label&quot;:&quot;Yan_2024_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amisulpride/Amisulpride_Yan2024_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amisulpride_Li2023_reference&quot;,&quot;label&quot;:&quot;Li_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amisulpride/Amisulpride_Li2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amisulpride_Reeves2016_combined&quot;,&quot;label&quot;:&quot;Reeves_2016_combined&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amisulpride/Amisulpride_Reeves2016_combined.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amisulpride_Reeves2016_group_1&quot;,&quot;label&quot;:&quot;Reeves_2016_group_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amisulpride/Amisulpride_Reeves2016_group_1.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amisulpride — `Amisulpride_Reeves2016_group_1`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The amisulpride two-compartment model for older people is held back because bioavailability F and lag time were left at library defaults instead of paper estimates, and the simulated profile misses the paper's Cmax (6.4e-05 vs 5.91e-06) and terminal half-life (13.6 h vs 28.4 h).

<div class="pk-model-meta" hidden drug="amisulpride" model-id="Amisulpride_Reeves2016_group_1" status="needs_review" stale="false" population="older people (healthy elderly and Alzheimer&#39;s disease patients)" measured-compound="amisulpride" parameterization="mechanistic" topology="2C"></div>

## Citation
Reeves S, Bertrand J, D'Antonio F, McLachlan E, Nair A, Brownings S et al. A population approach to characterise amisulpride pharmacokinetics in older people and Alzheimer's disease. Psychopharmacology 233(18):3371–3381 (2016).
  ·  DOI: [10.1007/s00213-016-4379-6](https://doi.org/10.1007/s00213-016-4379-6)

## Population and dosing

**Population:** older people (healthy elderly and Alzheimer's disease patients) · condition healthy elderly and Alzheimer's disease · age group elderly · n = 45.

**Dosing:** 25, 75 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_amisulpride/Amisulpride_Reeves2016_group_1/Amisulpride_Reeves2016_group_1.svg" alt="Amisulpride_Reeves2016_group_1 diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ka | kabs | 0.87 | 1/h |
| Cl | CL | 84 | L/h |
| V1 | V1 | 15 | L |
| Q | Q | 117 | L/h |
| V2 population | V2 | 808 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The amisulpride two-compartment model for older people is held back because bioavailability F and lag time were left at library defaults instead of paper estimates, and the simulated profile misses the paper's Cmax (6.4e-05 vs 5.91e-06) and terminal half-life (13.6 h vs 28.4 h).**

Simulated as the paper dosed it, peak concentrations fall far below all reported Cmax values (ratios 0.0923, 0.0762 and 0.117), and the terminal half-life of 28.4 h exceeds every reported value (12.4–22.7 h; ratios 2.0902, 1.8702, 2.2925, 1.2523 and 1.858). The builder substituted library defaults for bioavailability F and lag time Tlag, which affect the simulated profile but are not supported by this paper. The use of defaulted parameters was judged not acceptable, so the record was not published. Extracted — amisulpride: kabs 0.87 1/h, CL 84 L/h, V1 15 L, Q 117 L/h, V2 808 L.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ka | `Q49` · kabs | 0.87 | 1/h | 0.0002417 | 1/s | 1/h | exact (1) | Tab3:row2:col1, Tab3:row2:col2 |
| Cl | `Q22` · CL | 84 | L/h | 2.333e-05 | m3/s | L/h | exact (1) | Tab3:row3:col1, Tab3:row3:col2 |
| V1 | `Q63` · V1 | 15 | L | 0.015 | m3 | L | exact (1) | Tab3:row6:col2 |
| Q | `Q30` · Q | 117 | L/h | 3.25e-05 | m3/s | L/h | exact (1) | Tab3:row10:col1, Tab3:row10:col2 |
| V2 population | `Q64` · V2 | 808 | L | 0.808 | m3 | L | llm_confirmed (0.6) | Tab3:row12:col1, Tab3:row12:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- table section residual_error: 'σ (group 1)%' routed out of structural estimates ('Residual error')
- dropped unlinked row (NIL): 'Parameter (units)' — extend the ontology if this is a real PK parameter (source ['Tab3:row0:col1', 'Tab3:row0:col2'])
- unit_dimension_unknown: 'n = 20' (kabs)
- unit_dimension_unknown: 'n = 20' (CL)
- dropped duplicate Q22 ('β-Cl,weight', value '0.75') — already have one for this compound
- unit_dimension_unknown: 'n = 20' (V1)
- dropped unlinked row (NIL): '399 (Women)' — extend the ontology if this is a real PK parameter (source ['Tab3:row7:col1'])
- routed 'β-V1, weight' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q63 ('β-V1,Gender', value '25') — already have one for this compound
- unit_dimension_unknown: 'n = 20' (Q)
- dropped duplicate Q30 ('β-Q,weight', value '0.75') — already have one for this compound
- unit_dimension_unknown: 'n = 20' (V2)
- dropped duplicate Q64 ('β-V2,weight', value '1') — already have one for this compound
- routed 'ω_ka%' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ω_Cl%' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ω_V1%' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω_Q%' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω_V2%' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ω_Cl_V1%' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω_Cl_Q%' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q30 ('ω_V1_Q%', value '51') — already have one for this compound
- routed 'ω_Cl_V2%' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω_V1_V2%' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω_Q_V2%' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped value-less row: 'weight'
- dropped value-less row: 'age'
- implicit units: 'ka' → 1/h (from the popPK convention: 'No unit stated for ka; first-order absorption rate constants are conventionally in 1/h in population PK, consistent with')
- implicit units: 'Cl' → L/h (from the paper text: "Text states 'the population estimate for CL (54.3 l/h)' and 'group 1 alone (84 l/h)', matching CL = 84; CrCL was also 'c")
- implicit units: 'V1' → L (from the paper text: "Text states 'Population estimates for V1 were 40 % lower in women (399 l/h) than men (668 l/h)' — the paper reports V1 v")
- implicit units: 'Q' → L/h (from the popPK convention: "No unit stated for Q; intercompartmental clearances are conventionally in L/h, consistent with the paper's clearance uni")
- implicit units: 'V2 population' → L (from the popPK convention: 'No unit stated for V2; volumes of distribution are conventionally in L, consistent with V1 reported in litres and value ')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Cl); Q63 (V1); Q30 (Q); Q64 (V2 population)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amisulpride
- population split: 'group 1 (n = 20)' subgroup of Reeves_2016 (paper reports 2 populations: combined (n = 45), group 1 (n = 20))
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab3:row6:col1 = '668 (Men)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (9/9 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 13.6 | 11.53 | 0.8476 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['Tab3:row10:col1', 'Tab3:row10:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['Tab3:row6:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['Tab3:row12:col1', 'Tab3:row12:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 84 |  |  | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 84 L/h |  |  | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 15 L |  |  | ['Tab3:row6:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 808 L |  |  | ['Tab3:row12:col1', 'Tab3:row12:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=amisulpride) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 6.4e-05 | 5.908e-06 | 0.0923 | ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 2.1 | 5.908e-06 |  | unresolved concentration unit (exp 'h', sim 'kg/m3') |
| T1_cmax | reference | fail | 7.75e-05 | 5.908e-06 | 0.0762 | ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 5.05e-05 | 5.908e-06 | 0.117 | ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | -0.11 | 5.908e-06 |  | unresolved concentration unit (exp 'r', sim 'kg/m3') |
| T1_cmax | reference | skipped | -0.33 | 5.908e-06 |  | unresolved concentration unit (exp 'r', sim 'kg/m3') |
| T1_cmax | reference | skipped | -0.33 | 5.908e-06 |  | unresolved concentration unit (exp 'r', sim 'kg/m3') |
| T1_cmax | reference | skipped | -0.17 | 5.908e-06 |  | unresolved concentration unit (exp 'r', sim 'kg/m3') |
| T1_t_half_terminal | reference | fail | 13.6 | 28.43 | 2.09 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 15.2 | 28.43 | 1.87 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 12.4 | 28.43 | 2.292 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 22.7 | 28.43 | 1.252 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 15.3 | 28.43 | 1.858 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 13.6 | 28.43 | 2.09 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_amisulpride/Amisulpride_Reeves2016_group_1/Amisulpride_Reeves2016_group_1_modelica.zip" download>Amisulpride_Reeves2016_group_1_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_amisulpride/Amisulpride_Reeves2016_group_1/Amisulpride_Reeves2016_group_1_fmi.zip" download>Amisulpride_Reeves2016_group_1_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_amisulpride/Amisulpride_Reeves2016_group_1/Amisulpride_Reeves2016_group_1_matlab.zip" download>Amisulpride_Reeves2016_group_1_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_amisulpride/Amisulpride_Reeves2016_group_1/Amisulpride_Reeves2016_group_1_matlab_simbio.zip" download>Amisulpride_Reeves2016_group_1_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_amisulpride/Amisulpride_Reeves2016_group_1/Amisulpride_Reeves2016_group_1_sbml.zip" download>Amisulpride_Reeves2016_group_1_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_amisulpride/Amisulpride_Reeves2016_group_1/Amisulpride_Reeves2016_group_1_cellml.zip" download>Amisulpride_Reeves2016_group_1_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3695 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2.5e-05 | kg |
| input | model | `Cl` | 2.333e-05 | m3/s |
| input | model | `VdPerKg` | 0.0002143 | m3/kg |
| input | model | `k12` | 0.002167 | 1/s |
| input | model | `k21` | 4.022e-05 | 1/s |
| input | model | `ka` | 0.0002417 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Reeves S, Bertrand J, D'Antonio F, McLachlan E, Nair A, Brownings S et al. A population approach to characterise amisulpride pharmacokinetics in older people and Alzheimer's disease. Psychopharmacology 233(18):3371–3381 (2016). [doi:10.1007/s00213-016-4379-6](https://doi.org/10.1007/s00213-016-4379-6)

**This record:** Pharmacolibrary v26.09, model `Amisulpride_Reeves2016_group_1`. <https://pharmacolibrary.github.io/#/drugs/drug_amisulpride/Amisulpride_Reeves2016_group_1>

```bibtex
@misc{pharmacolibrary_AmisulprideReeves2016group1,
  title  = {{Pharmacolibrary model Amisulpride_Reeves2016_group_1}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_amisulpride/Amisulpride_Reeves2016_group_1},
  note   = {Parameters from doi:10.1007/s00213-016-4379-6},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 25 mg, single dose, first-order absorption (ka 0.87 /h, F 0.9). Doses in the paper: 25–75 mg.

<dbs-fmusim paramsurl="drugs/drug_amisulpride/Amisulpride_Reeves2016_group_1/Amisulpride_Reeves2016_group_1_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_amisulpride/Amisulpride_Reeves2016_group_1/Amisulpride_Reeves2016_group_1_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Amisulpride_Reeves2016_group_1_params.json` · controls `Amisulpride_Reeves2016_group_1_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamisulpride%5D%20Amisulpride_Reeves2016_group_1&body=Drug%3A%20amisulpride%0ARecord%3A%20Amisulpride_Reeves2016_group_1%0APaper%3A%20Reeves_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amisulpride/Amisulpride_Reeves2016_group_1%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 14:57 UTC</sub>
