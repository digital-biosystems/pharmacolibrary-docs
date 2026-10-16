<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;omalizumab&quot;,&quot;href&quot;:&quot;drugs/drug_omalizumab/&quot;},{&quot;label&quot;:&quot;Oh_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# omalizumab — `Omalizumab_Oh2023_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.759). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**KD and λ1 have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — omalizumab: CL/F 0.26 L/day, CL 1.68 L/day, V/F 8.92 L, kabs 0.92 1/day, tlag 0.06 day, KD 2.12, λ1 0.12.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading omalizumab → ige (interconversion); it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Oh E et al., PK/PD modeling to characterize placebo…, CPT: pharmacometrics & syst… (2023)
  ·  DOI: [10.1002/psp4.12953](https://doi.org/10.1002/psp4.12953)

<div class="pk-model-meta" hidden drug="omalizumab" model-id="Omalizumab_Oh2023_reference" status="needs_review" stale="false" population="patients with chronic spontaneous urticaria" measured-compound="omalizumab" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 5 covariate effects.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| body_weight_kg_on_slope | `Q900` · body_weight_kg_on_slope | 0.0143 | not captured | not captured | not captured | 23 | not captured (not captured) | psp412953-tbl-0003:row13:col1, psp412953-tbl-0003:row13:col2 | — | not captured |
| Apparent clearance omalizumab, L/day | `Q27` · CL/F | 0.26 | L/day | 3.0092592592592598e-09 | [l] / [d] | 2 | llm_confirmed (0.6) | Oh_2023_table_2:row1:col1, Oh_2023_table_2:row1:col2 | — | 35 (None% RSE) |
| Apparent clearance IgE, L/day | `Q22` · CL | 1.68 | L/day | 1.9444444444444445e-08 | [l] / [d] | 8 | llm_corrected (0.6) | Oh_2023_table_2:row2:col1, Oh_2023_table_2:row2:col2 | — | 0.080 (None% RSE) |
| Apparent volume omalizumab and IgE, L | `Q76` · V/F | 8.92 | L | 0.00892 | [l] | 2 | llm_confirmed (0.6) | Oh_2023_table_2:row4:col1, Oh_2023_table_2:row4:col2 | — | 29 (None% RSE) |
| Absorption rate, 1/day | `Q49` · kabs | 0.92 | 1/day | 1.0648148148148148e-05 | [1] / [d] | 9 | exact (1.0) | Oh_2023_table_2:row6:col1, Oh_2023_table_2:row6:col2 | — | 122 (None% RSE) |
| Lag time, day | `Q83` · tlag | 0.060 | day | 5184.0 | [d] | 3 | exact (1.0) | Oh_2023_table_2:row7:col1, Oh_2023_table_2:row7:col2 | — | not captured |
| Apparent binding constant, nM b | `Q331` · KD | 2.12 | not captured | not captured | not captured | 9 | llm (0.6) | Oh_2023_table_2:row8:col1, Oh_2023_table_2:row8:col2 | — | not captured |
| Alpha, α b | `Q67` · λ1 | 0.12 | not captured | not captured | not captured | 20 | llm_confirmed (0.6) | Oh_2023_table_2:row9:col1, Oh_2023_table_2:row9:col2 | — | not captured |
| body_weight_on_cl_x_cl_e_cl_c | `Q900` · body_weight_on_cl_x_cl_e_cl_c | 0.61 | not captured | not captured | not captured | 20 | not captured (not captured) | Oh_2023_table_2:row12:col1, Oh_2023_table_2:row12:col2 | — | not captured |
| bodyweight_on_v_x_v_e_v_c | `Q900` · bodyweight_on_v_x_v_e_v_c | 0.76 | not captured | not captured | not captured | 9 | not captured (not captured) | Oh_2023_table_2:row17:col1, Oh_2023_table_2:row17:col2 | — | not captured |
| bodyweight_on_r_e | `Q900` · bodyweight_on_r_e | 0.51 | not captured | not captured | not captured | 23 | not captured (not captured) | Oh_2023_table_2:row18:col1, Oh_2023_table_2:row18:col2 | — | not captured |
| theta_q324_ethnicity | `Q900` · theta_q324_ethnicity | 0.568 | not captured | not captured | not captured | 47 | not captured (not captured) | psp412953-tbl-0003:row10:col1, psp412953-tbl-0003:row10:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Baseline itch severity score (Baseitch)' routed out of structural estimates ('IIV (CV%)')
- table section iiv: 'Rate of onset of placebo effect (k placebo, 1/d)' routed out of structural estimates ('IIV (CV%)')
- table section iiv: 'Placebo effect on itch severity score at plateau (E placebo)' routed out of structural estimates ('IIV (CV%)')
- table section iiv: 'Effect‐site elimination rate constant (K E0, 1/d)' routed out of structural estimates ('IIV (CV%)')
- table section iiv: 'Slope term in linear drug effect model (slope)' routed out of structural estimates ('IIV (CV%)')
- table section iiv: 'Apparent clearance omalizumab, L/day' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'Apparent clearance IgE, L/day' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'Apparent clearance omalizumab‐IgE complex, L/day' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'Apparent volume omalizumab and IgE, L' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'Apparent volume complex, L a' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'Absorption rate, 1/day' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'Apparent binding constant, nM b' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'Covariance CL X and V X' routed out of structural estimates ('Covariances and IIV')
- table section iiv: 'IIV omalizumab (%) c' routed out of structural estimates ('Covariances and IIV')
- table section iiv: 'IIV total IgE (%) c' routed out of structural estimates ('Covariances and IIV')
- table section iiv: 'IIV free IgE (%) c' routed out of structural estimates ('Covariances and IIV')
- dropped PD-category row 'Baseline itch severity score (Baseitch)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412953-tbl-0003:row2:col1', 'psp412953-tbl-0003:row2:col2'])
- dropped unlinked row (NIL): 'Rate of onset of placebo effect (k placebo, 1/d)' — extend the ontology if this is a real PK parameter (source ['psp412953-tbl-0003:row3:col1', 'psp412953-tbl-0003:row3:col2'])
- dropped PD-category row 'Placebo effect on itch severity score at plateau (E placebo)' → Q341 (placebo_Emax, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412953-tbl-0003:row4:col1', 'psp412953-tbl-0003:row4:col2'])
- dropped PD-category row 'Baseline itch severity score on E placebo' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412953-tbl-0003:row5:col1', 'psp412953-tbl-0003:row5:col2'])
- routed 'Add. error' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- dropped PD-category row 'Effect‐site elimination rate constant (K E0, 1/d)' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412953-tbl-0003:row8:col1', 'psp412953-tbl-0003:row8:col2'])
- dropped PD-category row 'Slope term in linear drug effect model (slope)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412953-tbl-0003:row9:col1', 'psp412953-tbl-0003:row9:col2'])
- dropped PD-category row 'Log10(Baseline IgE (IU/mL)) on K E0' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412953-tbl-0003:row11:col1', 'psp412953-tbl-0003:row11:col2'])
- dropped PD-category row 'Baseline itch severity score on slope' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412953-tbl-0003:row12:col1', 'psp412953-tbl-0003:row12:col2'])
- covariate level 'Body weight (kg) on slope' → Q900:body_weight_kg_on_slope = 0.0143 (linear_fractional on the model)
- dropped unlinked row (NIL): 'Log10(Baseline IgE (IU/mL)) on slope' — extend the ontology if this is a real PK parameter (source ['psp412953-tbl-0003:row14:col1', 'psp412953-tbl-0003:row14:col2'])
- dropped duplicate Q22 ('Apparent clearance omalizumab‐IgE complex, L/day', value '0.44') — already have one for this compound
- dropped duplicate Q76 ('Apparent volume complex, L a', value '5.79') — already have one for this compound
- dropped PD-category row 'IgE production rate, ×g/day' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Oh_2023_table_2:row10:col1', 'Oh_2023_table_2:row10:col2'])
- covariate level 'Body weight on CL X , CL E , CL C' → Q900:body_weight_on_cl_x_cl_e_cl_c = 0.61 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'Body mass index on CL X' — extend the ontology if this is a real PK parameter (source ['Oh_2023_table_2:row13:col1', 'Oh_2023_table_2:row13:col2'])
- dropped unlinked row (NIL): 'Anti‐FcεRI autoantibodies (Yes vs. No) on CL X' — extend the ontology if this is a real PK parameter (source ['Oh_2023_table_2:row14:col1', 'Oh_2023_table_2:row14:col2'])
- unit_dimension_unknown: 'Yes vs. No' (CL)
- dropped duplicate Q22 ('H2RAs on CL X (Yes vs. No)', value '-0.070') — already have one for this compound
- dropped PD-category row 'Baseline IgE on CL E' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Oh_2023_table_2:row16:col1', 'Oh_2023_table_2:row16:col2'])
- covariate level 'Bodyweight on V X , V E , V C' → Q900:bodyweight_on_v_x_v_e_v_c = 0.76 (linear_fractional on Q27)
- covariate level 'Bodyweight on R E' → Q900:bodyweight_on_r_e = 0.51 (linear_fractional on Q27)
- dropped PD-category row 'Baseline IgE on R E' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Oh_2023_table_2:row19:col1', 'Oh_2023_table_2:row19:col2'])
- dropped PD-category row 'Baseline IgE on K D0' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Oh_2023_table_2:row20:col1', 'Oh_2023_table_2:row20:col2'])
- covariate effect for Q324 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Apparent binding constant, nM b' — the LLM proposed 'nM', whose dimension does not fit Q331; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=omalizumab
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- molar mass: none found for 'omalizumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell psp412953-tbl-0003:row2:col3 = '[13.01, 14.01]'
- unparsed cell psp412953-tbl-0003:row3:col3 = '[0.024, 0.042]'
- unparsed cell psp412953-tbl-0003:row4:col3 = '[5.86, 7.61]'
- unparsed cell psp412953-tbl-0003:row5:col3 = '[0.001, 0.050]'
- unparsed cell psp412953-tbl-0003:row6:col3 = '[2.47, 2.76]'
- unparsed cell psp412953-tbl-0003:row8:col3 = '[0.086, 0.10]'
- unparsed cell psp412953-tbl-0003:row9:col3 = '[0.015, 0.21]'
- unparsed cell psp412953-tbl-0003:row10:col3 = '[0.080, 1.06]'
- unparsed cell psp412953-tbl-0003:row11:col3 = '[0.073, 0.21]'
- unparsed cell psp412953-tbl-0003:row12:col3 = '[0.053, 0.10]'
- unparsed cell psp412953-tbl-0003:row13:col3 = '[0.009, 0.020]'
- unparsed cell psp412953-tbl-0003:row14:col3 = '[0.20, 0.27]'
- unparsed cell Oh_2023_table_2:row1:col3 = '[0.247, 0.271]'
- unparsed cell Oh_2023_table_2:row2:col3 = '[1.41, 1.95]'
- unparsed cell Oh_2023_table_2:row3:col3 = '[0.36, 0.53]'
- unparsed cell Oh_2023_table_2:row4:col3 = '[8.59, 9.25]'
- unparsed cell Oh_2023_table_2:row6:col3 = '[0.75, 1.09]'
- unparsed cell Oh_2023_table_2:row7:col3 = '[0.056, 0.064]'
- unparsed cell Oh_2023_table_2:row8:col3 = '[1.73, 2.51]'
- unparsed cell Oh_2023_table_2:row9:col3 = '[0.07, 0.17]'
- unparsed cell Oh_2023_table_2:row10:col3 = '[243, 335]'
- unparsed cell Oh_2023_table_2:row12:col3 = '[0.37, 0.84]'
- unparsed cell Oh_2023_table_2:row13:col3 = '[0.35, 0.82]'
- unparsed cell Oh_2023_table_2:row14:col3 = '[−0.13, −0.0041]'
- unparsed cell Oh_2023_table_2:row15:col3 = '[−0.12, −0.017]'
- unparsed cell Oh_2023_table_2:row16:col3 = '[−0.20, −0.11]'
- unparsed cell Oh_2023_table_2:row17:col3 = '[0.62, 0.89]'
- unparsed cell Oh_2023_table_2:row18:col3 = '[0.28, 0.75]'
- unparsed cell Oh_2023_table_2:row19:col3 = '[0.80, 0.88]'
- unparsed cell Oh_2023_table_2:row20:col3 = '[−0.13, −0.029]'
- companion parameter table 2 transcribed (58 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.759 (22/29 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['omalizumab', 'ige', 'interconversion']] | mismatch |
| `gpt-oss-120b` | `parameters[apparent clearance ige]` | 1.68 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[body mass index on cl x]` | not captured | 0.59 | only_one_extracted |
| `gpt-oss-120b` | `parameters[body_weight_kg_on_slope]` | 0.0143 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q324_ethnicity]` | 0.568 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q326_ethnicity]` | not captured | 0.568 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q335_body_weight]` | not captured | 0.0143 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Oh_2023_table_2:row2:col1', 'Oh_2023_table_2:row2:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Oh_2023_table_2:row1:col1', 'Oh_2023_table_2:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Oh_2023_table_2:row6:col1', 'Oh_2023_table_2:row6:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Oh_2023_table_2:row4:col1', 'Oh_2023_table_2:row4:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Oh_2023_table_2:row7:col1', 'Oh_2023_table_2:row7:col2'] |
| C5_unit_missing_Q331 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Oh_2023_table_2:row8:col1', 'Oh_2023_table_2:row8:col2'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] | not captured | not captured | not captured | ['Oh_2023_table_2:row9:col1', 'Oh_2023_table_2:row9:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.07 L/h | not captured | not captured | ['Oh_2023_table_2:row2:col1', 'Oh_2023_table_2:row2:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0108 L/h | not captured | not captured | ['Oh_2023_table_2:row1:col1', 'Oh_2023_table_2:row1:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 8.92 L | not captured | not captured | ['Oh_2023_table_2:row4:col1', 'Oh_2023_table_2:row4:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_omalizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Oh_2023` / `Oh_2023::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 22:06 UTC</sub>
