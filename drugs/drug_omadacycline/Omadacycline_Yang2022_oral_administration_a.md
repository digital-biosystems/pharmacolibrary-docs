<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01A&quot;,&quot;href&quot;:&quot;atc/J01A.md&quot;},{&quot;label&quot;:&quot;omadacycline&quot;,&quot;href&quot;:&quot;drugs/drug_omadacycline/&quot;},{&quot;label&quot;:&quot;Yang_2022 \u00b7 oral_administration_a&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Omadacycline_Chapagain2022_reference&quot;,&quot;label&quot;:&quot;Chapagain_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_omadacycline/Omadacycline_Chapagain2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Omadacycline_Lakota2020_reference&quot;,&quot;label&quot;:&quot;Lakota_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_omadacycline/Omadacycline_Lakota2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Omadacycline_Singh2026_reference&quot;,&quot;label&quot;:&quot;Singh_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_omadacycline/Omadacycline_Singh2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# omadacycline — `Omadacycline_Yang2022_oral_administration_a`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The absorption rate constant is recorded with a half-life value, creating a dimensional mismatch for this structural parameter.

<div class="pk-model-meta" hidden drug="omadacycline" model-id="Omadacycline_Yang2022_oral_administration_a" status="rejected" stale="false" population="healthy adults" measured-compound="omadacycline" parameterization="mechanistic" topology="2C"></div>

## Citation
Yang H, Huang Z, Chen Y, Zhu Y, Cao G, Wang J et al. Pharmacokinetics, Safety and Pharmacokinetics/Pharmacodynamics Analysis of Omadacycline in Chinese Healthy Subjects. Frontiers in pharmacology 13:869237 (2022).
  ·  DOI: [10.3389/fphar.2022.869237](https://doi.org/10.3389/fphar.2022.869237)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = 60.

**Dosing:** 50, 100, 150, 300, 450 mg, intravenous; oral, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V 1 (L) | V1 | 110 | L |
| V 2 (L) | V2 | 215 | L |
| CL (L/h) | CL | 14.5 | L/h |
| CL 2 (L/h) | Q | 38.8 | L/h |
| k a1 (h −1 ) | t1/2ka | 0.967 | h −1 |
| T lag (h) | tlag | 0.678 | h |
| AUC0-inf | AUC∞ | 5.70 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.923). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The absorption rate constant is recorded with a half-life value, creating a dimensional mismatch for this structural parameter.**

The parameter meaning defines the value as a half-life, but the label and units (h⁻¹) identify it as a rate constant. Consequently, the unit could not be converted, and no valid value was extracted for the model. Extracted — omadacycline: V1 110 L, V2 215 L, CL 14.5 L/h, Q 38.8 L/h, t1/2ka 0.967 h −1, tlag 0.678 h, AUC∞ 5.7.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[k a1].parameter_id`: this record has Q95, the second reading Q49. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V 1 (L) | `Q63` · V1 | 110 | L | 0.11 | m3 | l | space_fold (0.95) | T2:row3:col4, T2:row3:col5, T2:row3:col6 |
| V 2 (L) | `Q64` · V2 | 215 | L | 0.215 | m3 | l | space_fold (0.95) | T2:row4:col4, T2:row4:col5, T2:row4:col6 |
| CL (L/h) | `Q22` · CL | 14.5 | L/h | 4.028e-06 | m3/s | l/h | exact (1) | T2:row6:col4, T2:row6:col5, T2:row6:col6 |
| CL 2 (L/h) | `Q30` · Q | 38.8 | L/h | 1.078e-05 | m3/s | l/h | special_case (0.95) | T2:row7:col4, T2:row7:col5, T2:row7:col6 |
| k a1 (h −1 ) | `Q95` · t1/2ka | 0.967 | h −1 |  |  | 1/h | llm (0.6) | T2:row9:col4, T2:row9:col5, T2:row9:col6 |
| T lag (h) | `Q83` · tlag | 0.678 | h | 2441 | s | h | space_fold (0.95) | T2:row12:col4, T2:row12:col5, T2:row12:col6 |
| AUC0-inf | `Q17` · AUC∞ | 5.70 |  |  |  |  | exact (1) | Yang_2022_table_1:row6:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| t1/2 (h) | Q57 | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'n' — extend the ontology if this is a real PK parameter (source ['T2:row2:col4', 'T2:row2:col5', 'T2:row2:col6'])
- unit_dimension_mismatch: 'k a1 (h −1 )' → Q95 (unit '1 / [time]' vs ontology '[time]') — route to review
- unit_dimension_mismatch: 'k a2 (h −1 )' → Q95 (unit '1 / [time]' vs ontology '[time]') — route to review
- dropped duplicate Q95 ('k a2 (h −1 )', value '1.95') — already have one for this compound
- dropped unlinked row (NIL): 'P 1' — extend the ontology if this is a real PK parameter (source ['T2:row11:col4', 'T2:row11:col5', 'T2:row11:col6'])
- implicit units: 'AUC0-inf' — the LLM proposed 'mg h/L', whose dimension does not fit Q17; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (V 1 (L)); Q64 (V 2 (L)); Q22 (CL (L/h)); Q30 (CL 2 (L/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=omadacycline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'oral administration a' subgroup of Yang_2022 (paper reports 2 populations: intravenous administration, oral administration a)

**Extraction notes:**
- unparsed cell Yang_2022_table_1:row4:col2 = '0.55 (0.25, 0.57'
- unparsed cell Yang_2022_table_1:row4:col3 = '0.61 (0.57, 0.65)'
- unparsed cell Yang_2022_table_1:row4:col5 = '0.55 (0.25, 0.57)'
- unparsed cell Yang_2022_table_1:row4:col6 = '1.75 (1.00, 3.00)'
- unparsed cell Yang_2022_table_1:row4:col7 = '3.00 (3.00, 3.00'
- unparsed cell Yang_2022_table_1:row4:col9 = '3.98 (2.98, 3.98)'
- unparsed cell Yang_2022_table_1:row5:col1 = 'AUC0-24'
- companion parameter table 1 transcribed (67 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.923 (12/13 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[k a1].parameter_id` | Q95 | Q49 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_alpha | fail | 0.1 | 1.105 | 11.05 | 0.25 | reported t½α |
| C1_half_life_beta | fail | 1.9 | 18.27 | 9.617 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['T2:row6:col4', 'T2:row6:col5', 'T2:row6:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['T2:row7:col4', 'T2:row7:col5', 'T2:row7:col6'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Yang_2022_table_1:row7:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['T2:row3:col4', 'T2:row3:col5', 'T2:row3:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['T2:row4:col4', 'T2:row4:col5', 'T2:row4:col6'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['T2:row12:col4', 'T2:row12:col5', 'T2:row12:col6'] |
| C5_dimension_Q95 | fail | 1 / [time] | h −1 |  |  | ['T2:row9:col4', 'T2:row9:col5', 'T2:row9:col6'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 |  |  |  | ['Yang_2022_table_1:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 14.5 |  |  | ['T2:row6:col4', 'T2:row6:col5', 'T2:row6:col6'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 14.5 L/h |  |  | ['T2:row6:col4', 'T2:row6:col5', 'T2:row6:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 110 L |  |  | ['T2:row3:col4', 'T2:row3:col5', 'T2:row3:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 215 L |  |  | ['T2:row4:col4', 'T2:row4:col5', 'T2:row4:col6'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bomadacycline%5D%20Omadacycline_Yang2022_oral_administration_a&body=Drug%3A%20omadacycline%0ARecord%3A%20Omadacycline_Yang2022_oral_administration_a%0APaper%3A%20Yang_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_omadacycline/Omadacycline_Yang2022_oral_administration_a%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:01 UTC</sub>
