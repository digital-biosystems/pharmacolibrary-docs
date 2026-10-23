<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;abatacept&quot;,&quot;href&quot;:&quot;drugs/drug_abatacept/&quot;},{&quot;label&quot;:&quot;Gandhi_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abatacept — `Abatacept_Gandhi2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Bioavailability was mislabelled as an excretion fraction with unitless value 6.09, while allometric and covariate exponents were recorded with implausible magnitude and missing SI units.

<div class="pk-model-meta" hidden drug="abatacept" model-id="Abatacept_Gandhi2021_reference" status="rejected" stale="false" population="adults with rheumatoid arthritis and children with polyarticular juvenile idiopathic arthritis" measured-compound="abatacept" parameterization="mechanistic" topology="2C"></div>

## Citation
Gandhi Y, Passarell JA, Roy A, Murthy B. Model-Based Selection and Recommendation for Subcutaneous Abatacept Dose in Patients With Polyarticular Juvenile Idiopathic Arthritis. Journal of clinical pharmacology 61(5):688–699 (2021).
  ·  DOI: [10.1002/jcph.1797](https://doi.org/10.1002/jcph.1797)

## Population and dosing

**Population:** adults with rheumatoid arthritis and children with polyarticular juvenile idiopathic arthritis · condition rheumatoid arthritis and polyarticular juvenile idiopathic arthritis · age group mixed · n = ,2616.

**Dosing:** 10, 50, 87.5, 125 mg, sc, iv, multiple, every 168 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted, plus 8 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| KA (L/h) | kabs | 11.0 | L/h | 1.11 (None% RSE) |
| VC (L) a | V1 | 1.57 | Units | 0.0464 (None% RSE) |
| CL (L/h) a | CL | 1.36 | Units | 0.0637 (None% RSE) |
| VP (L) a | V2 | 3.71 | Units | 0.154 (None% RSE) |
| Intercompartmental CL (L/h) | Q | 7.25 | L/h |  |
| Bioavailability of SC formulation a | fe | 6.09 | Units |  |
| Power of body weight on bioavailability | allometric_exponent | 27.3 | Units |  |
| Power of age on bioavailability | slope | 27.1 | Units |  |
| theta_allometric_exponent_body_weight_power | theta_allometric_exponent_body_weight_power | 6.99 |  |  |
| theta_allometric_exponent_body_weight_power | theta_allometric_exponent_body_weight_power | 2.93 |  |  |
| theta_q900_gfr_power | theta_q900_gfr_power | 7.19 |  |  |
| theta_q314_albumin_power | theta_q314_albumin_power | 9.69 |  |  |
| theta_q900_weight_power | theta_q900_weight_power | 12.8 |  |  |
| theta_allometric_exponent_weight_power | theta_allometric_exponent_weight_power | 12.5 |  |  |
| theta_cl_sex_power | theta_cl_sex_power | 21.4 |  |  |
| theta_allometric_exponent_body_weight_power | theta_allometric_exponent_body_weight_power | 7.20 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.344). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Bioavailability was mislabelled as an excretion fraction with unitless value 6.09, while allometric and covariate exponents were recorded with implausible magnitude and missing SI units.**

The parameter meaning defines fe as the fraction of dose excreted unchanged, yet its value of 6.09 exceeds 1 and its verbatim label describes subcutaneous bioavailability. Several covariate exponents, such as the weight allometric power of 12.8 and sex clearance power of 21.4, were extracted with unitless labels that lacked SI conversion, indicating structural and dimensional mismatches in the model record. Extracted — abatacept: kabs 11 L/h, V1 1.57 Units, CL 1.36 Units, V2 3.71 Units, Q 7.25 L/h, fe 6.09 Units, allometric_exponent 27.3 Units, slope 27.1 Units.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[bioavailability of sc formulation a].parameter_id`: this record has Q44, the second reading Q40; it also differs on 20 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| KA (L/h) | `Q49` · kabs | 11.0 | L/h |  |  | l/h | exact (1) | jcph1797-tbl-0002:row2:col1, jcph1797-tbl-0002:row2:col2 | 1.11 (None% RSE) |
| VC (L) a | `Q63` · V1 | 1.57 | Units |  |  | units | llm_confirmed (0.6) | jcph1797-tbl-0002:row4:col1, jcph1797-tbl-0002:row4:col2 | 0.0464 (None% RSE) |
| CL (L/h) a | `Q22` · CL | 1.36 | Units |  |  | units | llm_confirmed (0.6) | jcph1797-tbl-0002:row8:col1, jcph1797-tbl-0002:row8:col2 | 0.0637 (None% RSE) |
| VP (L) a | `Q64` · V2 | 3.71 | Units |  |  | units | llm_confirmed (0.6) | jcph1797-tbl-0002:row16:col1, jcph1797-tbl-0002:row16:col2 | 0.154 (None% RSE) |
| Intercompartmental CL (L/h) | `Q30` · Q | 7.25 | L/h | 2.014e-06 | m3/s | l/h | llm_corrected (0.6) | jcph1797-tbl-0002:row19:col1, jcph1797-tbl-0002:row19:col2 |  |
| Bioavailability of SC formulation a | `Q44` · fe | 6.09 | Units |  |  |  | llm_corrected (0.6) | jcph1797-tbl-0002:row20:col1, jcph1797-tbl-0002:row20:col2 |  |
| Power of body weight on bioavailability | `Q319` · allometric_exponent | 27.3 | Units |  |  |  | llm_corrected (0.6) | jcph1797-tbl-0002:row22:col1, jcph1797-tbl-0002:row22:col2 |  |
| Power of age on bioavailability | `Q335` · slope | 27.1 | Units |  |  |  | llm_corrected (0.6) | jcph1797-tbl-0002:row23:col1, jcph1797-tbl-0002:row23:col2 |  |
| theta_allometric_exponent_body_weight_power | `Q900` · theta_allometric_exponent_body_weight_power | 6.99 |  |  |  |  |  | jcph1797-tbl-0002:row5:col1, jcph1797-tbl-0002:row5:col2 |  |
| theta_allometric_exponent_body_weight_power | `Q900` · theta_allometric_exponent_body_weight_power | 2.93 |  |  |  |  |  | jcph1797-tbl-0002:row9:col1, jcph1797-tbl-0002:row9:col2 |  |
| theta_q900_gfr_power | `Q900` · theta_q900_gfr_power | 7.19 |  |  |  |  |  | jcph1797-tbl-0002:row10:col1, jcph1797-tbl-0002:row10:col2 |  |
| theta_q314_albumin_power | `Q900` · theta_q314_albumin_power | 9.69 |  |  |  |  |  | jcph1797-tbl-0002:row11:col1, jcph1797-tbl-0002:row11:col2 |  |
| theta_q900_weight_power | `Q900` · theta_q900_weight_power | 12.8 |  |  |  |  |  | jcph1797-tbl-0002:row12:col1, jcph1797-tbl-0002:row12:col2 |  |
| theta_allometric_exponent_weight_power | `Q900` · theta_allometric_exponent_weight_power | 12.5 |  |  |  |  |  | jcph1797-tbl-0002:row13:col1, jcph1797-tbl-0002:row13:col2 |  |
| theta_cl_sex_power | `Q900` · theta_cl_sex_power | 21.4 |  |  |  |  |  | jcph1797-tbl-0002:row14:col1, jcph1797-tbl-0002:row14:col2 |  |
| theta_allometric_exponent_body_weight_power | `Q900` · theta_allometric_exponent_body_weight_power | 7.20 |  |  |  |  |  | jcph1797-tbl-0002:row17:col1, jcph1797-tbl-0002:row17:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'KA (L/h)' routed out of structural estimates ('Interindividual Variability/Residual Variability')
- table section iiv: 'Power of body weight on VC' routed out of structural estimates ('Interindividual Variability/Residual Variability')
- table section iiv: 'Power of albumin on CL b' routed out of structural estimates ('Interindividual Variability/Residual Variability')
- table section iiv: 'VP (L) a' routed out of structural estimates ('Interindividual Variability/Residual Variability')
- table section iiv: 'Bioavailability of SC formulation a' routed out of structural estimates ('Interindividual Variability/Residual Variability')
- table section iiv: 'Proportional residual error' routed out of structural estimates ('Interindividual Variability/Residual Variability')
- table section iiv: 'Additive residual error' routed out of structural estimates ('Interindividual Variability/Residual Variability')
- table section iiv: 'Minimum value of the objective function = 65 061.705' routed out of structural estimates ('Interindividual Variability/Residual Variability')
- unit_dimension_mismatch: 'KA (L/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'VC (L) a' → Q63 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'Power of age on VC' — extend the ontology if this is a real PK parameter (source ['jcph1797-tbl-0002:row6:col1', 'jcph1797-tbl-0002:row6:col2'])
- unit_dimension_mismatch: 'CL (L/h) a' → Q22 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'VP (L) a' → Q64 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'Minimum value of the objective function = 65 061.705' — extend the ontology if this is a real PK parameter (source ['jcph1797-tbl-0002:row27:col1', 'jcph1797-tbl-0002:row27:col2'])
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=abatacept
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'abatacept' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell jcph1797-tbl-0002:row2:col5 = '74.9%'
- unparsed cell jcph1797-tbl-0002:row5:col5 = '61.5%'
- unparsed cell jcph1797-tbl-0002:row11:col5 = '14.3%'
- unparsed cell jcph1797-tbl-0002:row16:col5 = '54.7%'
- unparsed cell jcph1797-tbl-0002:row20:col5 = '49.2%'
- unparsed cell jcph1797-tbl-0002:row25:col5 = '12.3%'
- unparsed cell jcph1797-tbl-0002:row26:col5 = '12.3%'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.344 (11/32 fields) | 21 |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bioavailability of sc formulation a].parameter_id` | Q44 | Q40 | mismatch |
| `gpt-oss-120b` | `parameters[cl (l/h) a].covariate_forms` | ['power'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[intercompartmental cl]` | 7.25 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[power of age on bioavailability]` | 27.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[power of body weight on bioavailability].covariate_forms` | ['power', 'power', 'power', 'power'] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_allometric_exponent_body_weight_power]` | 6.99 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_allometric_exponent_sex_power]` |  | 21.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_allometric_exponent_weight_power]` | 12.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_sex_power]` | 21.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q23_albumin_power]` |  | 9.69 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q23_body_weight_power]` |  | 2.93 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q23_gfr_power]` |  | 7.19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q23_weight_power]` |  | 12.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_albumin_power]` | 9.69 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q900_gfr_power]` | 7.19 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q900_weight_power]` | 12.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_age_power]` |  | 23.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_body_weight_power]` |  | 6.99 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_body_weight_power]` |  | 7.20 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc (l) a].covariate_forms` | [] | ['power', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[vp (l) a].covariate_forms` | [] | ['power'] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | fail | [luminosity] / [length] ** 2 | Units | ['jcph1797-tbl-0002:row8:col1', 'jcph1797-tbl-0002:row8:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['jcph1797-tbl-0002:row19:col1', 'jcph1797-tbl-0002:row19:col2'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | L/h | ['jcph1797-tbl-0002:row2:col1', 'jcph1797-tbl-0002:row2:col2'] |
| C5_dimension_Q63 | fail | [luminosity] / [length] ** 2 | Units | ['jcph1797-tbl-0002:row4:col1', 'jcph1797-tbl-0002:row4:col2'] |
| C5_dimension_Q64 | fail | [luminosity] / [length] ** 2 | Units | ['jcph1797-tbl-0002:row16:col1', 'jcph1797-tbl-0002:row16:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.36 | ['jcph1797-tbl-0002:row8:col1', 'jcph1797-tbl-0002:row8:col2'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Babatacept%5D%20Abatacept_Gandhi2021_reference&body=Drug%3A%20abatacept%0ARecord%3A%20Abatacept_Gandhi2021_reference%0APaper%3A%20Gandhi_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_abatacept/Abatacept_Gandhi2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:32 UTC</sub>
