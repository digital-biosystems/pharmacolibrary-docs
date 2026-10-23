<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;Samidorphan&quot;,&quot;href&quot;:&quot;drugs/drug_samidorphan/&quot;},{&quot;label&quot;:&quot;Sun_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Samidorphan — `Samidorphan_Sun2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The samidorphan absorption rate constant kabs is reported with the unit 'h' (value 0.861), a dimension mismatch for a rate constant, so the record was rejected.

<div class="pk-model-meta" hidden drug="Samidorphan" model-id="Samidorphan_Sun2021_reference" status="rejected" stale="false" population="healthy subjects and patients with schizophrenia" measured-compound="samidorphan" parameterization="apparent" topology="2C"></div>

## Citation
Sun L, Mills R, Sadler BM, Rege B. Population Pharmacokinetics of Olanzapine and Samidorphan When Administered in Combination in Healthy Subjects and Patients With Schizophrenia. Journal of clinical pharmacology 61(11):1430–1441 (2021).
  ·  DOI: [10.1002/jcph.1911](https://doi.org/10.1002/jcph.1911)

## Population and dosing

**Population:** healthy subjects and patients with schizophrenia · condition schizophrenia and healthy volunteers · age group adult.

**Dosing:** 5, 30 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed olanzapine and samidorphan (OLZ/SAM combination tablet), measured samidorphan.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted, plus 13 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F (L/h) | CL/F | 15.5 | L/h | 2.85 | 0.087 (None% RSE) |
| Vc/F (L) | V1/F | 656 | L | 2.23 | 0.054 (None% RSE) |
| Vp/F (L) | V2/F | 225 | L | 9.42 | 0.681 (None% RSE) |
| Ka (h) | kabs | 0.861 | h | 5.70 | 1.76 (None% RSE) |
| ALAG (h) | tlag | 0.323 | h | 5.57 | 0.131 (None% RSE) |
| Q/F (L/h) | Q/F | 6.15 | L/h | 18.4 | 0.223 (None% RSE) |
| wt_on_vc_f_b | wt_on_vc_f_b | 1.0 |  |  |  |
| theta_cl_f_wt | theta_cl_f_wt | 0.75 |  |  |  |
| theta_q31_hepatic | theta_q31_hepatic | 0.810 |  | 9.04 |  |
| theta_cl_f_renal | theta_cl_f_renal | 0.801 |  | 5.67 |  |
| theta_kabs_food | theta_kabs_food | 0.107 |  | 36.9 |  |
| theta_tlag_formulation | theta_tlag_formulation | 1.41 |  | 5.80 |  |
| theta_q314_wt | theta_q314_wt | 0.75 |  |  |  |
| theta_cl_f_smoking | theta_cl_f_smoking | 1.30 |  | 3.64 |  |
| theta_q87_food | theta_q87_food | 0.943 |  | 2.26 |  |
| theta_v1_f_age | theta_v1_f_age | 0.356 |  | 11.8 |  |
| theta_cl_f_hepatic | theta_cl_f_hepatic | 0.875 |  |  |  |
| theta_q314_race | theta_q314_race | 1.10 |  | 3.22 |  |
| theta_cl_f_sex | theta_cl_f_sex | 0.862 |  | 3.56 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.705). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The samidorphan absorption rate constant kabs is reported with the unit 'h' (value 0.861), a dimension mismatch for a rate constant, so the record was rejected.**

In the Sun_2021 population model for samidorphan (2-compartment structure), the absorption rate constant kabs is listed as 0.861 with unit 'h'; a first-order absorption rate constant must have dimension 1/h, so the reported unit is dimensionally wrong for this structural parameter. The unit could not be converted to SI, so the parameter reached the model without an SI value. All other reported parameters (CL/F 15.5 L/h, V1/F 656 L, V2/F 225 L, tlag 0.323 h, Q/F 6.15 L/h) carry units consistent with their meanings. Extracted — samidorphan: CL/F 15.5 L/h, V1/F 656 L, V2/F 225 L, kabs 0.861 h, tlag 0.323 h, Q/F 6.15 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has olanzapine and samidorphan (OLZ/SAM combination tablet), the second reading unknown; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 15.5 | L/h | 4.306e-06 | m3/s | l/h | 2.85 | exact (1) | jcph1911-tbl-0004:row1:col1, jcph1911-tbl-0004:row1:col2, Sun_2021_table_3:row0:col1, Sun_2021_table_3:row0:col2 | 0.087 (None% RSE) |
| Vc/F (L) | `Q290` · V1/F | 656 | L | 0.656 | m3 | l | 2.23 | exact (1) | jcph1911-tbl-0004:row2:col1, jcph1911-tbl-0004:row2:col2, Sun_2021_table_3:row1:col1, Sun_2021_table_3:row1:col2 | 0.054 (None% RSE) |
| Vp/F (L) | `Q82` · V2/F | 225 | L | 0.225 | m3 | l | 9.42 | exact (1) | jcph1911-tbl-0004:row3:col1, jcph1911-tbl-0004:row3:col2, Sun_2021_table_3:row4:col1, Sun_2021_table_3:row4:col2 | 0.681 (None% RSE) |
| Ka (h) | `Q49` · kabs | 0.861 | h |  |  | h | 5.70 | exact (1) | jcph1911-tbl-0004:row4:col1, jcph1911-tbl-0004:row4:col2, Sun_2021_table_3:row2:col1, Sun_2021_table_3:row2:col2 | 1.76 (None% RSE) |
| ALAG (h) | `Q83` · tlag | 0.323 | h | 1163 | s | h | 5.57 | exact (1) | jcph1911-tbl-0004:row5:col1, jcph1911-tbl-0004:row5:col2 | 0.131 (None% RSE) |
| Q/F (L/h) | `Q69` · Q/F | 6.15 | L/h | 1.708e-06 | m3/s | l/h | 18.4 | exact (1) | jcph1911-tbl-0004:row6:col1, jcph1911-tbl-0004:row6:col2, Sun_2021_table_3:row5:col1, Sun_2021_table_3:row5:col2 | 0.223 (None% RSE) |
| wt_on_vc_f_b | `Q900` · wt_on_vc_f_b | 1.0 |  |  |  |  |  |  | Sun_2021_table_3:row7:col1 |  |
| theta_cl_f_wt | `Q900` · theta_cl_f_wt | 0.75 |  |  |  |  |  |  | jcph1911-tbl-0004:row7:col1 |  |
| theta_q31_hepatic | `Q900` · theta_q31_hepatic | 0.810 |  |  |  |  | 9.04 |  | jcph1911-tbl-0004:row10:col1, jcph1911-tbl-0004:row10:col2 |  |
| theta_cl_f_renal | `Q900` · theta_cl_f_renal | 0.801 |  |  |  |  | 5.67 |  | jcph1911-tbl-0004:row11:col1, jcph1911-tbl-0004:row11:col2, Sun_2021_table_3:row13:col1, Sun_2021_table_3:row13:col2 |  |
| theta_kabs_food | `Q900` · theta_kabs_food | 0.107 |  |  |  |  | 36.9 |  | jcph1911-tbl-0004:row12:col1, jcph1911-tbl-0004:row12:col2 |  |
| theta_tlag_formulation | `Q900` · theta_tlag_formulation | 1.41 |  |  |  |  | 5.80 |  | jcph1911-tbl-0004:row14:col1, jcph1911-tbl-0004:row14:col2 |  |
| theta_q314_wt | `Q900` · theta_q314_wt | 0.75 |  |  |  |  |  |  | Sun_2021_table_3:row6:col1 |  |
| theta_cl_f_smoking | `Q900` · theta_cl_f_smoking | 1.30 |  |  |  |  | 3.64 |  | Sun_2021_table_3:row9:col1, Sun_2021_table_3:row9:col2 |  |
| theta_q87_food | `Q900` · theta_q87_food | 0.943 |  |  |  |  | 2.26 |  | Sun_2021_table_3:row10:col1, Sun_2021_table_3:row10:col2 |  |
| theta_v1_f_age | `Q900` · theta_v1_f_age | 0.356 |  |  |  |  | 11.8 |  | Sun_2021_table_3:row11:col1, Sun_2021_table_3:row11:col2 |  |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | 0.875 |  |  |  |  |  |  | Sun_2021_table_3:row12:col1 |  |
| theta_q314_race | `Q900` · theta_q314_race | 1.10 |  |  |  |  | 3.22 |  | Sun_2021_table_3:row14:col1, Sun_2021_table_3:row14:col2 |  |
| theta_cl_f_sex | `Q900` · theta_cl_f_sex | 0.862 |  |  |  |  | 3.56 |  | Sun_2021_table_3:row15:col1, Sun_2021_table_3:row15:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Vc/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Ka' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ALAG' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Vp/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Q/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Residual variability in σ2 prop' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'VpF' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Interoccasion variability in Ka' routed out of structural estimates ('Interindividual variability')
- unit_dimension_mismatch: 'Ka (h)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'WT on Vc/F a' — extend the ontology if this is a real PK parameter (source ['jcph1911-tbl-0004:row8:col1'])
- dropped duplicate Q27 ('Rifampin inducer effect (in the presence vs absence of rifampin) on CL/F', value '1.80') — already have one for this compound
- unit_dimension_mismatch: 'Change in ALAG b , c' → Q83 (unit '[luminosity] / [length] ** 2' vs ontology '[time]') — route to review
- dropped duplicate Q83 ('Change in ALAG b , c', value '10.1') — already have one for this compound
- dropped duplicate Q83 ('ALAG (h) a', value '0.782') — already have one for this compound
- covariate level 'WT on Vc/F b' → Q900:wt_on_vc_f_b = 1.0 (linear_fractional on Q27)
- covariate effect for Q31 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q87 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=samidorphan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell jcph1911-tbl-0004:row1:col3 = '34.3‐36.5'
- unparsed cell jcph1911-tbl-0004:row2:col3 = '288‐306'
- unparsed cell jcph1911-tbl-0004:row3:col3 = '102‐146'
- unparsed cell jcph1911-tbl-0004:row4:col3 = '4.77‐8.45'
- unparsed cell jcph1911-tbl-0004:row5:col3 = '0.288‐0.358'
- unparsed cell jcph1911-tbl-0004:row6:col3 = '10.2‐14.0'
- unparsed cell jcph1911-tbl-0004:row9:col3 = '2.54‐2.86'
- unparsed cell jcph1911-tbl-0004:row10:col3 = '0.667‐0.953'
- unparsed cell jcph1911-tbl-0004:row11:col3 = '0.503‐0.637'
- unparsed cell jcph1911-tbl-0004:row12:col3 = '0.0296‐0.184'
- unparsed cell jcph1911-tbl-0004:row13:col3 = '7.92‐12.3'
- unparsed cell jcph1911-tbl-0004:row14:col3 = '1.25‐1.57'
- unparsed cell jcph1911-tbl-0004:row16:col3 = '0.066‐0.107'
- unparsed cell jcph1911-tbl-0004:row17:col3 = '0.034‐0.075'
- unparsed cell jcph1911-tbl-0004:row18:col3 = '1.18‐2.34'
- unparsed cell jcph1911-tbl-0004:row19:col3 = '0.067‐0.195'
- unparsed cell jcph1911-tbl-0004:row20:col3 = '0.354‐1.010'
- unparsed cell jcph1911-tbl-0004:row22:col3 = '0.053‐0.069'
- unparsed cell Sun_2021_table_3:row0:col3 = '14.6‐16.4'
- unparsed cell Sun_2021_table_3:row1:col3 = '627‐685'
- unparsed cell Sun_2021_table_3:row2:col3 = '0.765‐0.957'
- unparsed cell Sun_2021_table_3:row4:col3 = '183‐267'
- unparsed cell Sun_2021_table_3:row5:col3 = '3.94‐8.36'
- unparsed cell Sun_2021_table_3:row8:col3 = '1.64‐1.96'
- unparsed cell Sun_2021_table_3:row9:col3 = '1.21‐1.39'
- unparsed cell Sun_2021_table_3:row10:col3 = '0.901‐0.985'
- unparsed cell Sun_2021_table_3:row11:col3 = '0.273‐0.439'
- unparsed cell Sun_2021_table_3:row13:col3 = '0.712‐0.890'
- unparsed cell Sun_2021_table_3:row14:col3 = '1.03‐1.17'
- unparsed cell Sun_2021_table_3:row15:col3 = '0.802‐0.922'
- unparsed cell Sun_2021_table_3:row17:col3 = '0.137‐0.205'
- unparsed cell Sun_2021_table_3:row18:col3 = '0.084‐0.171'
- unparsed cell Sun_2021_table_3:row19:col3 = '0.003‐0.415'
- unparsed cell Sun_2021_table_3:row20:col3 = '0.259‐0.379'
- unparsed cell Sun_2021_table_3:row23:col3 = '0.455‐0.805'
- unparsed cell Sun_2021_table_3:row24:col3 = '0.0405‐0.0519'
- companion parameter table 3 transcribed (50 record(s), model stage 'final')
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.705 (31/44 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[rifampin inducer effect (in the presence vs absence of rifampin) on cl/f]` |  | 1.80 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_hepatic].rse_percent` |  | 9.04 | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_f_hepatic].value` | 0.875 | 0.810 | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_f_race]` |  | 1.10 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_race]` | 1.10 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_wt]` | 0.75 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q31_hepatic]` | 0.810 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_wt]` |  | 1.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f].covariate_forms` | ['linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[wt_on_vc_f_b]` | 1.0 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | olanzapine and samidorphan (OLZ/SAM combination tablet) | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | samidorphan | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jcph1911-tbl-0004:row1:col1', 'jcph1911-tbl-0004:row1:col2', 'Sun_2021_table_3:row0:col1', 'Sun_2021_table_3:row0:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['jcph1911-tbl-0004:row2:col1', 'jcph1911-tbl-0004:row2:col2', 'Sun_2021_table_3:row1:col1', 'Sun_2021_table_3:row1:col2'] |
| C5_dimension_Q49 | fail | [time] | h | ['jcph1911-tbl-0004:row4:col1', 'jcph1911-tbl-0004:row4:col2', 'Sun_2021_table_3:row2:col1', 'Sun_2021_table_3:row2:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['jcph1911-tbl-0004:row6:col1', 'jcph1911-tbl-0004:row6:col2', 'Sun_2021_table_3:row5:col1', 'Sun_2021_table_3:row5:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['jcph1911-tbl-0004:row3:col1', 'jcph1911-tbl-0004:row3:col2', 'Sun_2021_table_3:row4:col1', 'Sun_2021_table_3:row4:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['jcph1911-tbl-0004:row5:col1', 'jcph1911-tbl-0004:row5:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 15.5 L/h | ['jcph1911-tbl-0004:row1:col1', 'jcph1911-tbl-0004:row1:col2', 'Sun_2021_table_3:row0:col1', 'Sun_2021_table_3:row0:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 656 L | ['jcph1911-tbl-0004:row2:col1', 'jcph1911-tbl-0004:row2:col2', 'Sun_2021_table_3:row1:col1', 'Sun_2021_table_3:row1:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 225 L | ['jcph1911-tbl-0004:row3:col1', 'jcph1911-tbl-0004:row3:col2', 'Sun_2021_table_3:row4:col1', 'Sun_2021_table_3:row4:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsamidorphan%5D%20Samidorphan_Sun2021_reference&body=Drug%3A%20samidorphan%0ARecord%3A%20Samidorphan_Sun2021_reference%0APaper%3A%20Sun_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_samidorphan/Samidorphan_Sun2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 17:18 UTC</sub>
