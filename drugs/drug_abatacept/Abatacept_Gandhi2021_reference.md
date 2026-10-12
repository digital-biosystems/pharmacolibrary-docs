<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;abatacept&quot;,&quot;href&quot;:&quot;drugs/drug_abatacept/&quot;},{&quot;label&quot;:&quot;Gandhi_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abatacept — `Abatacept_Gandhi2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.344). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Bioavailability was mislabelled as an excretion fraction with unitless value 6.09, while allometric and covariate exponents were recorded with implausible magnitude and missing SI units.**

The parameter meaning defines fe as the fraction of dose excreted unchanged, yet its value of 6.09 exceeds 1 and its verbatim label describes subcutaneous bioavailability. Several covariate exponents, such as the weight allometric power of 12.8 and sex clearance power of 21.4, were extracted with unitless labels that lacked SI conversion, indicating structural and dimensional mismatches in the model record. Extracted — abatacept: kabs 11 L/h, V1 1.57 Units, CL 1.36 Units, V2 3.71 Units, Q 7.25 L/h, fe 6.09 Units, allometric_exponent 27.3 Units, slope 27.1 Units.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[bioavailability of sc formulation a].parameter_id`: this record has Q44, the second reading Q40; it also differs on 20 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Gandhi Y et al., Model-Based Selection and Recommendatio…, Journal of clinical pharmac… (2021)
  ·  DOI: [10.1002/jcph.1797](https://doi.org/10.1002/jcph.1797)

## Model component
<dbs-pgx drug="abatacept" model-id="Abatacept_Gandhi2021_reference" status="rejected" stale="false" population="adults with rheumatoid arthritis and children with polyarticular juvenile idiopathic arthritis" measured-compound="abatacept" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted, plus 8 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KA (L/h) | `Q49` · kabs | 11.0 | L/h | not captured | [l] / [h] | not captured | exact (1.0) | jcph1797-tbl-0002:row2:col1, jcph1797-tbl-0002:row2:col2 | — | 1.11 (None% RSE) |
| VC (L) a | `Q63` · V1 | 1.57 | Units | not captured | [units] | not captured | llm_confirmed (0.6) | jcph1797-tbl-0002:row4:col1, jcph1797-tbl-0002:row4:col2 | — | 0.0464 (None% RSE) |
| CL (L/h) a | `Q22` · CL | 1.36 | Units | not captured | [units] | not captured | llm_confirmed (0.6) | jcph1797-tbl-0002:row8:col1, jcph1797-tbl-0002:row8:col2 | — | 0.0637 (None% RSE) |
| VP (L) a | `Q64` · V2 | 3.71 | Units | not captured | [units] | not captured | llm_confirmed (0.6) | jcph1797-tbl-0002:row16:col1, jcph1797-tbl-0002:row16:col2 | — | 0.154 (None% RSE) |
| Intercompartmental CL (L/h) | `Q30` · Q | 7.25 | L/h | 2.013888888888889e-06 | [l] / [h] | not captured | llm_corrected (0.6) | jcph1797-tbl-0002:row19:col1, jcph1797-tbl-0002:row19:col2 | — | not captured |
| Bioavailability of SC formulation a | `Q44` · fe | 6.09 | Units | not captured | not captured | not captured | llm_corrected (0.6) | jcph1797-tbl-0002:row20:col1, jcph1797-tbl-0002:row20:col2 | — | not captured |
| Power of body weight on bioavailability | `Q319` · allometric_exponent | 27.3 | Units | not captured | not captured | not captured | llm_corrected (0.6) | jcph1797-tbl-0002:row22:col1, jcph1797-tbl-0002:row22:col2 | — | not captured |
| Power of age on bioavailability | `Q335` · slope | 27.1 | Units | not captured | not captured | not captured | llm_corrected (0.6) | jcph1797-tbl-0002:row23:col1, jcph1797-tbl-0002:row23:col2 | — | not captured |
| theta_allometric_exponent_body_weight_power | `Q900` · theta_allometric_exponent_body_weight_power | 6.99 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1797-tbl-0002:row5:col1, jcph1797-tbl-0002:row5:col2 | — | not captured |
| theta_allometric_exponent_body_weight_power | `Q900` · theta_allometric_exponent_body_weight_power | 2.93 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1797-tbl-0002:row9:col1, jcph1797-tbl-0002:row9:col2 | — | not captured |
| theta_q900_gfr_power | `Q900` · theta_q900_gfr_power | 7.19 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1797-tbl-0002:row10:col1, jcph1797-tbl-0002:row10:col2 | — | not captured |
| theta_q314_albumin_power | `Q900` · theta_q314_albumin_power | 9.69 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1797-tbl-0002:row11:col1, jcph1797-tbl-0002:row11:col2 | — | not captured |
| theta_q900_weight_power | `Q900` · theta_q900_weight_power | 12.8 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1797-tbl-0002:row12:col1, jcph1797-tbl-0002:row12:col2 | — | not captured |
| theta_allometric_exponent_weight_power | `Q900` · theta_allometric_exponent_weight_power | 12.5 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1797-tbl-0002:row13:col1, jcph1797-tbl-0002:row13:col2 | — | not captured |
| theta_cl_sex_power | `Q900` · theta_cl_sex_power | 21.4 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1797-tbl-0002:row14:col1, jcph1797-tbl-0002:row14:col2 | — | not captured |
| theta_allometric_exponent_body_weight_power | `Q900` · theta_allometric_exponent_body_weight_power | 7.20 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1797-tbl-0002:row17:col1, jcph1797-tbl-0002:row17:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `gpt-oss-120b` | `parameters[intercompartmental cl]` | 7.25 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[power of age on bioavailability]` | 27.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[power of body weight on bioavailability].covariate_forms` | ['power', 'power', 'power', 'power'] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_allometric_exponent_body_weight_power]` | 6.99 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_allometric_exponent_sex_power]` | not captured | 21.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_allometric_exponent_weight_power]` | 12.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_sex_power]` | 21.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q23_albumin_power]` | not captured | 9.69 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q23_body_weight_power]` | not captured | 2.93 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q23_gfr_power]` | not captured | 7.19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q23_weight_power]` | not captured | 12.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_albumin_power]` | 9.69 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q900_gfr_power]` | 7.19 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q900_weight_power]` | 12.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_age_power]` | not captured | 23.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_body_weight_power]` | not captured | 6.99 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_body_weight_power]` | not captured | 7.20 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc (l) a].covariate_forms` | [] | ['power', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[vp (l) a].covariate_forms` | [] | ['power'] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['jcph1797-tbl-0002:row8:col1', 'jcph1797-tbl-0002:row8:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph1797-tbl-0002:row19:col1', 'jcph1797-tbl-0002:row19:col2'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | L/h | not captured | not captured | ['jcph1797-tbl-0002:row2:col1', 'jcph1797-tbl-0002:row2:col2'] |
| C5_dimension_Q63 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['jcph1797-tbl-0002:row4:col1', 'jcph1797-tbl-0002:row4:col2'] |
| C5_dimension_Q64 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['jcph1797-tbl-0002:row16:col1', 'jcph1797-tbl-0002:row16:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.36 | not captured | not captured | ['jcph1797-tbl-0002:row8:col1', 'jcph1797-tbl-0002:row8:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_abatacept/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gandhi_2021` / `Gandhi_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:32 UTC</sub>
