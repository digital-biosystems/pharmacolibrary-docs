<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;lurasidone&quot;,&quot;href&quot;:&quot;drugs/drug_lurasidone/&quot;},{&quot;label&quot;:&quot;Yang_2026 \u00b7 pop&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lurasidone — `Lurasidone_Yang2026_pop`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The lurasidone drug-interaction parameter θCL-VPA, reported as a clearance ratio of 40.5, carries the unit h⁻¹, a dimension mismatch for a structural ratio parameter, so the record was rejected.

<div class="pk-model-meta" hidden drug="lurasidone" model-id="Lurasidone_Yang2026_pop" status="rejected" stale="false" population="Chinese psychiatric inpatients" measured-compound="lurasidone" parameterization="apparent" topology="1C"></div>

## Citation
Yang Y, Lu H, Xiao T, Ni X, Wang Z, Chen Y et al. Impact of valproate co-medication and age on lurasidone exposure: a population pharmacokinetic study and real-world evaluation in Chinese psychiatric inpatients. Frontiers in pharmacology 17:1810528 (2026).
  ·  DOI: [10.3389/fphar.2026.1810528](https://doi.org/10.3389/fphar.2026.1810528)

## Population and dosing

**Population:** Chinese psychiatric inpatients · condition psychiatric disorders · age group mixed · n = 156.

**Dosing:** 50, 60 mg/day, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L·h-1) | CL/F | 8.6 | L·h-1 |
| V/F (L) | V/F | 18.2 | L |
| θCL-VPA | CL_ratio | 40.5 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The lurasidone drug-interaction parameter θCL-VPA, reported as a clearance ratio of 40.5, carries the unit h⁻¹, a dimension mismatch for a structural ratio parameter, so the record was rejected.**

In the Yang_2026 population model of lurasidone in Chinese psychiatric inpatients, the covariate effect θCL-VPA on CL/F is described as a ratio of clearances but is reported with the unit h⁻¹, which is dimensionally inconsistent for a dimensionless ratio. The unit h⁻¹ could not be converted to SI, so the parameter reached the model without an SI value. The other parameters, CL/F of 8.6 L·h⁻¹ and V/F of 18.2 L, are dimensionally consistent. Extracted — lurasidone: CL/F 8.6 L·h-1, V/F 18.2 L, CL_ratio 40.5 h-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has lurasidone, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L·h-1) | `Q27` · CL/F | 8.6 | L·h-1 | 2.389e-06 | m3/s | l/h | exact (1) | T3:row3:col6, T3:row8:col6 |
| V/F (L) | `Q76` · V/F | 18.2 | L | 0.0182 | m3 | l | exact (1) | T3:row4:col6, T3:row9:col6 |
| θCL-VPA | `Q31` · CL_ratio | 40.5 | h-1 |  |  | 1/h | llm_corrected (0.6) | T3:row6:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- routed 'θCL-AGE' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- unit_dimension_mismatch: 'θCL-VPA' → Q31 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped value-less row: 'Ka: primary absorption rate constant'
- dropped value-less row: 'CL/F: apparent clearance'
- dropped value-less row: 'V/F: apparent volume of distribution'
- dropped value-less row: 'θCL-AGE: effect of age on apparent clearance'
- dropped value-less row: 'θCL-VPA: effect of combined valproic acid on apparent clearance'
- dropped value-less row: 'CV: coefficient of variation'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lurasidone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: '​' subgroup of Yang_2026 (paper reports 2 populations: final model, ​)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (4/8 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θcl-age]` |  | 22.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θcl-vpa]` | 40.5 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | lurasidone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | lurasidone | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T3:row3:col6', 'T3:row8:col6'] |
| C5_dimension_Q31 | fail | 1 / [time] | h-1 | ['T3:row6:col6'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['T3:row4:col6', 'T3:row9:col6'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 8.6 L/h | ['T3:row3:col6', 'T3:row8:col6'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 18.2 L | ['T3:row4:col6', 'T3:row9:col6'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blurasidone%5D%20Lurasidone_Yang2026_pop&body=Drug%3A%20lurasidone%0ARecord%3A%20Lurasidone_Yang2026_pop%0APaper%3A%20Yang_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lurasidone/Lurasidone_Yang2026_pop%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 15:57 UTC</sub>
