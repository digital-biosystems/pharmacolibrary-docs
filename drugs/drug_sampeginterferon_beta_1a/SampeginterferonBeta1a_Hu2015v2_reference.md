<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;sampeginterferon beta-1a&quot;,&quot;href&quot;:&quot;drugs/drug_sampeginterferon_beta_1a/&quot;},{&quot;label&quot;:&quot;Hu_2015_2 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sampeginterferon beta-1a — `SampeginterferonBeta1a_Hu2015v2_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Rejected for a dimension mismatch and an orphan peripheral compartment lacking a path from the dose.

<div class="pk-model-meta" hidden drug="sampeginterferon beta-1a" model-id="SampeginterferonBeta1a_Hu2015v2_reference" status="rejected" stale="false" population="subjects with normal or impaired renal function" measured-compound="peginterferon beta-1a" parameterization="mechanistic" topology="2C"></div>

## Citation
Hu X, Seddighzadeh A, Stecher S, Zhu Y, Goyal J, Matson M et al. Pharmacokinetics, pharmacodynamics, and safety of peginterferon beta-1a in subjects with normal or impaired renal function. Journal of clinical pharmacology 55(2):179–188 (2015).
  ·  DOI: [10.1002/jcph.390](https://doi.org/10.1002/jcph.390)

## Population and dosing

**Population:** subjects with normal or impaired renal function · condition renal impairment · age group adult · n = 35.

**Dosing:** 63, 125 mg, sc, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL (L/h) | CL | 2.12 | L/h | 11 |
| V (L) | V | 229 | L | 9.9 |
| DKa (h À1 ) | t1/2ka | 0.0448 | h À1 | 16 |
| K dialysis (h À1 ) | CL_HD | 0.0454 | h À1 | 47 |
| v 2 | V2 | 46 |  | 0.561 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.875). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected for a dimension mismatch and an orphan peripheral compartment lacking a path from the dose.**

The dialysis clearance parameter, assigned a value of 0.0454, failed dimensional validation, while the peripheral volume of distribution of 46 L defines an unreachable compartment. The extraction process also failed to convert a reported unit to SI, leaving the model without a complete structural definition. Extracted — peginterferon beta-1a: CL 2.12 L/h, V 229 L, t1/2ka 0.0448 h À1, CL_HD 0.0454 h À1, V2 46.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[dka].parameter_id`: this record has Q95, the second reading Q49; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 2.12 | L/h | 5.889e-07 | m3/s | l/h | 11 | exact (1) | tab_2:row1:col1, tab_2:row1:col2, tab_2:row1:col3 |
| V (L) | `Q61` · V | 229 | L | 0.229 | m3 | l | 9.9 | exact (1) | tab_2:row2:col2, tab_2:row2:col3 |
| DKa (h À1 ) | `Q95` · t1/2ka | 0.0448 | h À1 |  |  | 1/h | 16 | llm (0.6) | tab_2:row3:col2, tab_2:row3:col3 |
| K dialysis (h À1 ) | `Q356` · CL_HD | 0.0454 | h À1 |  |  | 1/h | 47 | llm (0.6) | tab_2:row7:col2, tab_2:row7:col3 |
| v 2 | `Q64` · V2 | 46 |  |  |  |  | 0.561 | space_fold (0.95) | tab_2:row8:col3, tab_2:row8:col4, tab_2:row9:col3, tab_2:row9:col4, tab_2:row10:col3, tab_2:row10:col4, tab_2:row12:col3, tab_2:row12:col4, tab_2:row13:col3, tab_2:row13:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'definition' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'DKa (h À1 )' → Q95 (unit '1 / [time]' vs ontology '[time]') — route to review
- routed 'CL_CrCl_COV' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q22 ('CL_ESRD (L/h)', value '2.76') — already have one for this compound
- dropped duplicate Q61 ('V_ESRD (L)', value '305') — already have one for this compound
- unit_dimension_mismatch: 'K dialysis (h À1 )' → Q356 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- routed 'cov V_CL' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q22 ('cov V_CL_ESRD', value '0.245') — already have one for this compound
- dropped unlinked row (NIL): 'SD' — extend the ontology if this is a real PK parameter (source ['tab_2:row15:col2', 'tab_2:row15:col3'])
- dropped value-less row: 's 2'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=peginterferon beta-1a
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'peginterferon beta-1a' ('peginterferon beta-1a') — left in mass units
- molar mass: none found for 'sampeginterferon_beta_1a' — its concentrations stay mass-only
- molar mass: none found for 'peginterferon beta-1a' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'peginterferon beta-1a', not sampeginterferon_beta_1a — the review values are the parent's

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.875 (14/16 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[dka].parameter_id` | Q95 | Q49 | mismatch |
| `gpt-oss-120b` | `parameters[k dialysis].parameter_id` | Q356 | Q47 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_2:row1:col1', 'tab_2:row1:col2', 'tab_2:row1:col3'] |
| C5_dimension_Q356 | fail | 1 / [time] | h À1 | ['tab_2:row7:col2', 'tab_2:row7:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_2:row2:col2', 'tab_2:row2:col3'] |
| C5_dimension_Q95 | fail | 1 / [time] | h À1 | ['tab_2:row3:col2', 'tab_2:row3:col3'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 |  | ['tab_2:row8:col3', 'tab_2:row8:col4', 'tab_2:row9:col3', 'tab_2:row9:col4', 'tab_2:row10:col3', 'tab_2:row10:col4', 'tab_2:row12:col3', 'tab_2:row12:col4', 'tab_2:row13:col3', 'tab_2:row13:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.12 | ['tab_2:row1:col1', 'tab_2:row1:col2', 'tab_2:row1:col3'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.12 L/h | ['tab_2:row1:col1', 'tab_2:row1:col2', 'tab_2:row1:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 229 L | ['tab_2:row2:col2', 'tab_2:row2:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsampeginterferon_beta_1a%5D%20SampeginterferonBeta1a_Hu2015v2_reference&body=Drug%3A%20sampeginterferon_beta_1a%0ARecord%3A%20SampeginterferonBeta1a_Hu2015v2_reference%0APaper%3A%20Hu_2015_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sampeginterferon_beta_1a/SampeginterferonBeta1a_Hu2015v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 23:08 UTC</sub>
