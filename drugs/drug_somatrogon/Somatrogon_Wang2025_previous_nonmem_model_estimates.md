<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01A&quot;,&quot;href&quot;:&quot;atc/H01A.md&quot;},{&quot;label&quot;:&quot;somatrogon&quot;,&quot;href&quot;:&quot;drugs/drug_somatrogon/&quot;},{&quot;label&quot;:&quot;Wang_2025 \u00b7 previous_nonmem_model_estimates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Somatrogon_Wang2025_previous_nonmem_model_estimates&quot;,&quot;label&quot;:&quot;Wang_2025_previous_nonmem_model_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# somatrogon — `Somatrogon_Wang2025_previous_nonmem_model_estimates`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**The record was held back because the reverse intercompartmental clearance was missing, forcing use of library defaults unsupported by the paper.**

The model definition omits an explicit value for k21, so library placeholder values were used instead of paper estimates. The record includes covariate effects, but the simulation only exercised the reference individual, leaving the pediatric weight and ADA impacts unverified. Extracted — somatrogon: CL/F 0.472 L/h, Q/F 0.014 L/h, V1/F 10.9 L, V/F 2.37 L, kabs 0.313 1/h, tlag 0.353 h.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Wang Y et al., Implementing a Bayesian approach using…, CPT: pharmacometrics & syst… (2025)
  ·  DOI: [10.1002/psp4.13279](https://doi.org/10.1002/psp4.13279)

<div class="pk-model-meta" hidden drug="somatrogon" model-id="Somatrogon_Wang2025_previous_nonmem_model_estimates" status="needs_review" stale="false" population="pediatric participants" measured-compound="somatrogon" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted, plus 3 covariate effects.

**Parameterization:** CL/F, Q/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 0.472 | L/h | 1.311111111111111e-07 | [l] / [h] | not captured | exact (1.0) | Wang_2025_table_4:row0:col1 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 0.014 | L/h | 3.8888888888888884e-09 | [l] / [h] | not captured | exact (1.0) | Wang_2025_table_4:row1:col1 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | 10.9 | L | 0.0109 | [l] | not captured | exact (1.0) | Wang_2025_table_4:row2:col1 | — | not captured |
| Vp/R (L) | `Q76` · V/F | 2.37 | L | 0.00237 | [l] | not captured | llm (0.6) | Wang_2025_table_4:row3:col1 | — | not captured |
| Ka (1/h) | `Q49` · kabs | 0.313 | 1/h | 8.694444444444445e-05 | 1/h | not captured | exact (1.0) | Wang_2025_table_4:row4:col1 | — | not captured |
| Lag time (h) | `Q83` · tlag | 0.353 | h | 1270.8 | [h] | not captured | exact (1.0) | Wang_2025_table_4:row6:col1 | — | not captured |
| weight_effect_on_cl_f_and_q_f | `Q900` · weight_effect_on_cl_f_and_q_f | 1.26 | not captured | not captured | not captured | not captured | not captured (not captured) | Wang_2025_table_4:row7:col1 | — | not captured |
| weight_effect_on_vc_f_and_vp_f | `Q900` · weight_effect_on_vc_f_and_vp_f | 1.74 | not captured | not captured | not captured | not captured | not captured (not captured) | Wang_2025_table_4:row8:col1 | — | not captured |
| theta_cl_f_ada | `Q900` · theta_cl_f_ada | -0.258 | L/h | not captured | not captured | not captured | not captured (not captured) | Wang_2025_table_4:row9:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k21']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- covariate level 'Weight effect on CL/F and Q/F' → Q900:weight_effect_on_cl_f_and_q_f = 1.26 (linear_fractional on Q27)
- covariate level 'Weight effect on Vc/F and Vp/F' → Q900:weight_effect_on_vc_f_and_vp_f = 1.74 (linear_fractional on Q27)
- implicit units: 'Ka (1/h)' → 1/h (from the popPK convention: "The text refers to 'first-order absorption rate constant Ka', for which the conventional unit is 1/h, consistent with th")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=somatrogon
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'previous nonmem model estimates' subgroup of Wang_2025 (paper reports 2 populations: nonmem focei estimates (previous analysis), previous nonmem model estimates)
- molar mass: none found for 'somatrogon' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell psp413279-tbl-0005:row2:col1 = '0.472 (0.406, 0.538) a'
- unparsed cell psp413279-tbl-0005:row2:col2 = '0.478 (0.416, 0.545)'
- unparsed cell psp413279-tbl-0005:row2:col6 = '0.489 (0.429, 0.557)'
- unparsed cell psp413279-tbl-0005:row2:col10 = '0.524 (0.473, 0.578)'
- unparsed cell psp413279-tbl-0005:row3:col1 = '0.014 (0.009, 0.018) a'
- unparsed cell psp413279-tbl-0005:row3:col2 = '0.065 (0.039, 0.098)'
- unparsed cell psp413279-tbl-0005:row3:col6 = '0.063 (0.038, 0.093)'
- unparsed cell psp413279-tbl-0005:row3:col10 = '0.052 (0.031, 0.079)'
- unparsed cell psp413279-tbl-0005:row4:col1 = '10.9 (8.696, 13.104) a'
- unparsed cell psp413279-tbl-0005:row4:col2 = '6.805 (4.775, 9.503)'
- unparsed cell psp413279-tbl-0005:row4:col6 = '7.563 (5.397, 10.066)'
- unparsed cell psp413279-tbl-0005:row4:col10 = '9.952 (8.454, 11.431)'
- unparsed cell psp413279-tbl-0005:row5:col1 = '2.37 (0.314, 4.426) a'
- unparsed cell psp413279-tbl-0005:row5:col2 = '2.303 (1.568, 3.125)'
- unparsed cell psp413279-tbl-0005:row5:col6 = '2.252 (1.582, 3.077)'
- unparsed cell psp413279-tbl-0005:row5:col10 = '2.042 (1.456, 2.713)'
- unparsed cell psp413279-tbl-0005:row6:col1 = '0.313 (0.227, 0.399) a'
- unparsed cell psp413279-tbl-0005:row6:col2 = '0.178 (0.11, 0.309)'
- unparsed cell psp413279-tbl-0005:row6:col6 = '0.194 (0.111, 0.343)'
- unparsed cell psp413279-tbl-0005:row6:col10 = '0.256 (0.139, 0.477)'
- unparsed cell psp413279-tbl-0005:row7:col1 = '0.55 (0.475, 0.625) a'
- unparsed cell psp413279-tbl-0005:row7:col2 = '0.691 (0.655, 0.728)'
- unparsed cell psp413279-tbl-0005:row7:col6 = '0.692 (0.657, 0.728)'
- unparsed cell psp413279-tbl-0005:row7:col10 = '0.694 (0.656, 0.733)'
- unparsed cell psp413279-tbl-0005:row8:col1 = '0.353 (0.184, 0.522) a'
- unparsed cell psp413279-tbl-0005:row8:col2 = '1.116 (0.282, 1.625)'
- unparsed cell psp413279-tbl-0005:row8:col6 = '1.002 (0.225, 1.589)'
- unparsed cell psp413279-tbl-0005:row8:col10 = '0.784 (0.143, 1.436)'
- unparsed cell psp413279-tbl-0005:row9:col1 = '1.26 (0.994, 1.526) a'
- unparsed cell psp413279-tbl-0005:row9:col2 = '1.258 (0.83, 1.715)'
- unparsed cell psp413279-tbl-0005:row9:col6 = '1.265 (0.819, 1.703)'
- unparsed cell psp413279-tbl-0005:row9:col10 = '1.324 (0.892, 1.742)'
- unparsed cell psp413279-tbl-0005:row10:col1 = '1.74 (1.462, 2.018) a'
- unparsed cell psp413279-tbl-0005:row10:col2 = '1.341 (0.722, 2.004)'
- unparsed cell psp413279-tbl-0005:row10:col6 = '1.354 (0.692, 2.019)'
- unparsed cell psp413279-tbl-0005:row10:col10 = '1.448 (0.846, 2.067)'
- unparsed cell psp413279-tbl-0005:row11:col1 = '−0.258 (−0.274, −0.242) b'
- unparsed cell psp413279-tbl-0005:row11:col2 = '−0.111 (−0.267, 0.063)'
- unparsed cell psp413279-tbl-0005:row11:col6 = '−0.115 (−0.268, 0.062)'
- unparsed cell psp413279-tbl-0005:row11:col10 = '−0.117 (−0.287, 0.054)'
- unparsed cell psp413279-tbl-0005:row12:col2 = '0.058 (0.021, 0.113)'
- unparsed cell psp413279-tbl-0005:row12:col6 = '0.060 (0.022, 0.12)'
- unparsed cell psp413279-tbl-0005:row12:col10 = '0.076 (0.026, 0.151)'
- unparsed cell psp413279-tbl-0005:row13:col2 = '0.106 (0.02, 0.224)'
- unparsed cell psp413279-tbl-0005:row13:col6 = '0.104 (0.024, 0.223)'
- unparsed cell psp413279-tbl-0005:row13:col10 = '0.131 (0.036, 0.264)'
- unparsed cell psp413279-tbl-0005:row14:col2 = '0.352 (0.113, 0.685)'
- unparsed cell psp413279-tbl-0005:row14:col6 = '0.320 (0.113, 0.623)'
- unparsed cell psp413279-tbl-0005:row14:col10 = '0.325 (0.108, 0.626)'
- unparsed cell psp413279-tbl-0005:row15:col2 = '−0.024 (−0.115, 0.06)'
- unparsed cell psp413279-tbl-0005:row15:col6 = '−0.026 (−0.117, 0.059)'
- unparsed cell psp413279-tbl-0005:row15:col10 = '−0.017 (−0.133, 0.094)'
- unparsed cell psp413279-tbl-0005:row16:col2 = '0.006 (−0.191, 0.235)'
- unparsed cell psp413279-tbl-0005:row16:col6 = '0.002 (−0.192, 0.213)'
- unparsed cell psp413279-tbl-0005:row16:col10 = '−0.007 (−0.224, 0.245)'
- unparsed cell psp413279-tbl-0005:row17:col2 = '0.307 (0.069, 0.711)'
- unparsed cell psp413279-tbl-0005:row17:col6 = '0.338 (0.07, 0.776)'
- unparsed cell psp413279-tbl-0005:row17:col10 = '0.372 (0.077, 0.859)'
- unparsed cell psp413279-tbl-0005:row18:col2 = '0.005 (−0.04, 0.049)'
- unparsed cell psp413279-tbl-0005:row18:col6 = '0.003 (−0.045, 0.048)'
- unparsed cell psp413279-tbl-0005:row18:col10 = '0.002 (−0.06, 0.058)'
- unparsed cell psp413279-tbl-0005:row19:col2 = '−0.007 (−0.136, 0.108)'
- unparsed cell psp413279-tbl-0005:row19:col6 = '−0.011 (−0.131, 0.11)'
- unparsed cell psp413279-tbl-0005:row19:col10 = '−0.013 (−0.145, 0.112)'
- unparsed cell psp413279-tbl-0005:row20:col2 = '0.000 (−0.121, 0.122)'
- unparsed cell psp413279-tbl-0005:row20:col6 = '0.003 (−0.134, 0.134)'
- unparsed cell psp413279-tbl-0005:row20:col10 = '0.000 (−0.145, 0.145)'
- unparsed cell psp413279-tbl-0005:row21:col2 = '0.096 (0.017, 0.266)'
- unparsed cell psp413279-tbl-0005:row21:col6 = '0.095 (0.017, 0.25)'
- unparsed cell psp413279-tbl-0005:row21:col10 = '0.098 (0.018, 0.26)'
- unparsed cell Wang_2025_table_4:row0:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row0:col3 = 'N (0.472, 2)'
- unparsed cell Wang_2025_table_4:row0:col4 = 'N (0.472, 0.5)'
- unparsed cell Wang_2025_table_4:row1:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row1:col3 = 'N (0.0135, 0.1)'
- unparsed cell Wang_2025_table_4:row1:col4 = 'N (0.0135, 0.05)'
- unparsed cell Wang_2025_table_4:row2:col2 = 'U (0, 20)'
- unparsed cell Wang_2025_table_4:row2:col3 = 'N (10.9, 3)'
- unparsed cell Wang_2025_table_4:row2:col4 = 'N (10.9, 1)'
- unparsed cell Wang_2025_table_4:row3:col2 = 'U (0, 20)'
- unparsed cell Wang_2025_table_4:row3:col3 = 'N (2.37, 3)'
- unparsed cell Wang_2025_table_4:row3:col4 = 'N (2.37, 1)'
- unparsed cell Wang_2025_table_4:row4:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row4:col3 = 'N (0.313, 1)'
- unparsed cell Wang_2025_table_4:row4:col4 = 'N (0.313, 0.5)'
- unparsed cell Wang_2025_table_4:row5:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row5:col3 = 'N (0.55, 1)'
- unparsed cell Wang_2025_table_4:row5:col4 = 'N (0.55, 0.5)'
- unparsed cell Wang_2025_table_4:row6:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row6:col3 = 'N (0.353, 1)'
- unparsed cell Wang_2025_table_4:row6:col4 = 'N (0.353, 0.5)'
- unparsed cell Wang_2025_table_4:row7:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row7:col3 = 'N (1.26, 3)'
- unparsed cell Wang_2025_table_4:row7:col4 = 'N (1.26, 1)'
- unparsed cell Wang_2025_table_4:row8:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row8:col3 = 'N (1.74, 3)'
- unparsed cell Wang_2025_table_4:row8:col4 = 'N (1.74, 1)'
- unparsed cell Wang_2025_table_4:row9:col2 = 'U (−1, 5)'
- unparsed cell Wang_2025_table_4:row9:col3 = 'N (−0.258, 3)'
- unparsed cell Wang_2025_table_4:row9:col4 = 'N (−0.258, 1)'
- companion parameter table 4 transcribed (10 record(s))
- LLM selected parameter table(s) 4, 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wang_2025_table_4:row0:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wang_2025_table_4:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Wang_2025_table_4:row4:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wang_2025_table_4:row1:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wang_2025_table_4:row3:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Wang_2025_table_4:row6:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.472 L/h | not captured | not captured | ['Wang_2025_table_4:row0:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 10.9 L | not captured | not captured | ['Wang_2025_table_4:row2:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.37 L | not captured | not captured | ['Wang_2025_table_4:row3:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=somatrogon) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_somatrogon/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2025` / `Wang_2025::previous_nonmem_model_estimates`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_somatrogon/models/modelica/Somatrogon_Wang2025_previous_nonmem_model_estimates.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_somatrogon/models/modelica/Somatrogon_Wang2025_previous_nonmem_model_estimates.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_somatrogon/models/modelica/Somatrogon_Wang2025_previous_nonmem_model_estimates.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates/Somatrogon_Wang2025_previous_nonmem_model_estimates_modelica.zip" download>Somatrogon_Wang2025_previous_nonmem_model_estimates_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates/Somatrogon_Wang2025_previous_nonmem_model_estimates_fmi.zip" download>Somatrogon_Wang2025_previous_nonmem_model_estimates_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates/Somatrogon_Wang2025_previous_nonmem_model_estimates_matlab.zip" download>Somatrogon_Wang2025_previous_nonmem_model_estimates_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates/Somatrogon_Wang2025_previous_nonmem_model_estimates_matlab_simbio.zip" download>Somatrogon_Wang2025_previous_nonmem_model_estimates_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates/Somatrogon_Wang2025_previous_nonmem_model_estimates_sbml.zip" download>Somatrogon_Wang2025_previous_nonmem_model_estimates_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates/Somatrogon_Wang2025_previous_nonmem_model_estimates_cellml.zip" download>Somatrogon_Wang2025_previous_nonmem_model_estimates_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates/Somatrogon_Wang2025_previous_nonmem_model_estimates.svg" alt="Somatrogon_Wang2025_previous_nonmem_model_estimates diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 17.5 mg, single dose, first-order absorption (ka 0.313 /h, lag 21.2 min, F 1). Doses in the paper: 17.5–46.2 mg.

<dbs-fmusim paramsurl="drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates/Somatrogon_Wang2025_previous_nonmem_model_estimates_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates/Somatrogon_Wang2025_previous_nonmem_model_estimates_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Somatrogon_Wang2025_previous_nonmem_model_estimates_params.json` · controls `Somatrogon_Wang2025_previous_nonmem_model_estimates_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:21 UTC</sub>
