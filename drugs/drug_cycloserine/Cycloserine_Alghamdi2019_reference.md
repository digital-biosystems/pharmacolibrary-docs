<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;cycloserine&quot;,&quot;href&quot;:&quot;drugs/drug_cycloserine/&quot;},{&quot;label&quot;:&quot;Alghamdi_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cycloserine_Kengo2024_reference&quot;,&quot;label&quot;:&quot;Kengo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cycloserine/Cycloserine_Kengo2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cycloserine_Mulubwa2019v2_reference&quot;,&quot;label&quot;:&quot;Mulubwa_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cycloserine/Cycloserine_Mulubwa2019v2_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cycloserine — `Cycloserine_Alghamdi2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The covariate effect for clearance in patients versus healthy subjects is a negative value (-0.660), implying an impossible reduction in drug elimination.

<div class="pk-model-meta" hidden drug="cycloserine" model-id="Cycloserine_Alghamdi2019_reference" status="rejected" stale="false" population="TB patients and healthy subjects" measured-compound="cycloserine" parameterization="apparent" topology="1C"></div>

## Citation
Alghamdi WA, Alsultan A, Al-Shaer MH, An G, Ahmed S, Alkabab Y et al. Cycloserine Population Pharmacokinetics and Pharmacodynamics in Patients with Tuberculosis. Antimicrobial agents and chemotherapy 63(5) (2019).
  ·  DOI: [10.1128/AAC.00055-19](https://doi.org/10.1128/AAC.00055-19)

## Population and dosing

**Population:** TB patients and healthy subjects · condition tuberculosis · age group adult · n = 247.

**Dosing:** 539, 917 mg, oral, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Tlag (h) | tlag | 0.326 | h | 10.6 |
| ka (h−1) | kabs | 6.61 | h−1 | 34.4 |
| V/F (liter) | V/F | 24.9 | liter | 4.05 |
| CL/F (liter/h) | CL/F | 2.00 | liter/h | 3.58 |
| βCL, patients (vs HS) | CL | -0.660 | vs HS | 18.7 |
| theta_q26_crcl_power | theta_q26_crcl_power | 0.413 |  | 18.1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The covariate effect for clearance in patients versus healthy subjects is a negative value (-0.660), implying an impossible reduction in drug elimination.**

The parameter representing the relative clearance difference between patients and healthy subjects is recorded as -0.660. This negative value indicates a physiologically implausible shift in elimination capacity between the two groups. Furthermore, the unit label for this parameter could not be interpreted to convert the value into standard pharmacokinetic terms. Extracted — cycloserine: tlag 0.326 h, kabs 6.61 h−1, V/F 24.9 liter, CL/F 2 liter/h, CL -0.66 vs HS.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of 500-mg dose: this record has none, the second reading none; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Tlag (h) | `Q83` · tlag | 0.326 | h | 1174 | s | h | 10.6 | exact (1) | T2:row4:col1, T2:row4:col2 |
| ka (h−1) | `Q49` · kabs | 6.61 | h−1 | 0.001836 | 1/s | 1/h | 34.4 | exact (1) | T2:row5:col1, T2:row5:col2 |
| V/F (liter) | `Q76` · V/F | 24.9 | liter | 0.0249 | m3 | l | 4.05 | exact (1) | T2:row6:col1, T2:row6:col2 |
| CL/F (liter/h) | `Q27` · CL/F | 2.00 | liter/h | 5.556e-07 | m3/s | l/h | 3.58 | exact (1) | T2:row8:col1, T2:row8:col2 |
| βCL, patients (vs HS) | `Q22` · CL | -0.660 | vs HS |  |  | vshs | 18.7 | boundary (0.8) | T2:row9:col2 |
| theta_q26_crcl_power | `Q900` · theta_q26_crcl_power | 0.413 |  |  |  |  | 18.1 |  | T2:row10:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional' routed out of structural estimates ('Residual error parameter')
- dropped unlinked row (NIL): '−2LL' — extend the ontology if this is a real PK parameter (source ['T2:row2:col1', 'T2:row2:col2'])
- unit_dimension_unknown: 'vs HS' (CL)
- dropped duplicate Q83 ('ω, Tlag', value '0.409') — already have one for this compound
- routed 'ω, ka' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω, V/F' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q27 ('ω, CL/F', value '0.353') — already have one for this compound
- dropped duplicate Q27 ('γ, CL/F', value '0.190') — already have one for this compound
- covariate effect for Q26 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cycloserine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell T2:row9:col3 = '&lt;0.0001'
- unparsed cell T2:row10:col3 = '&lt;0.0001'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.778 (14/18 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[500-mg dose]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_crcl_power]` |  | 0.413 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q26_crcl_power]` | 0.413 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[βcl, patients].covariate_forms` | [] | ['power'] | mismatch |

</details>

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
| C1_half_life_beta | fail | 16.8 | 8.63 | 0.5137 | 0.25 | reported t½β |
| C2_base_sign_Q22 | fail |  | -0.66 |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['T2:row8:col1', 'T2:row8:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['T2:row5:col1', 'T2:row5:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['T2:row6:col1', 'T2:row6:col2'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['T2:row4:col1', 'T2:row4:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | vs HS |  |  | ['T2:row9:col2'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2 L/h |  |  | ['T2:row8:col1', 'T2:row8:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 24.9 L |  |  | ['T2:row6:col1', 'T2:row6:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcycloserine%5D%20Cycloserine_Alghamdi2019_reference&body=Drug%3A%20cycloserine%0ARecord%3A%20Cycloserine_Alghamdi2019_reference%0APaper%3A%20Alghamdi_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cycloserine/Cycloserine_Alghamdi2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 12:31 UTC</sub>
