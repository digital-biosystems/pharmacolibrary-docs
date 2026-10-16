<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;avelumab&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/&quot;},{&quot;label&quot;:&quot;van_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Avelumab_Vugmeyster2022_adult_model&quot;,&quot;label&quot;:&quot;Vugmeyster_2022_adult_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/Avelumab_Vugmeyster2022_adult_model.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Avelumab_van2025_reference&quot;,&quot;label&quot;:&quot;van_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/Avelumab_van2025_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Avelumab_Wilkins2019_reference&quot;,&quot;label&quot;:&quot;Wilkins_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/Avelumab_Wilkins2019_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# avelumab — `Avelumab_van2025_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the links between molecules: this record has none, the second reading avelumab → anti-drug antibodies (immunogenicity); it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
van der Walt JS et al., Interplay between pharmacokinetics and…, Journal of pharmacokinetics… (2025)
  ·  DOI: [10.1007/s10928-025-09971-w](https://doi.org/10.1007/s10928-025-09971-w)

<div class="pk-model-meta" hidden drug="avelumab" model-id="Avelumab_van2025_reference" status="accepted_with_caveats" stale="false" population="patients with several tumor types" measured-compound="avelumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 4 extracted, plus 6 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance (CL), L/h | `Q22` · CL | 0.0272 | L/h | 7.555555555555556e-09 | [l] / [h] | not captured | space_fold (0.95) | van_2025_table_5:row4:col1, van_2025_table_5:row4:col2, van_2025_table_5:row4:col3, van_2025_table_5:row4:col4, van_2025_table_5:row4:col5 | — | 38.5 (None% RSE) |
| Central volume (V1), L | `Q63` · V1 | 3.52 | L | 0.00352 | [l] | not captured | llm_confirmed (0.6) | van_2025_table_5:row5:col1, van_2025_table_5:row5:col2, van_2025_table_5:row5:col3, van_2025_table_5:row5:col4, van_2025_table_5:row5:col5 | — | 23.4 (None% RSE) |
| Peripheral volume, L | `Q64` · V2 | 0.582 | L | 0.0005819999999999999 | [l] | not captured | exact (1.0) | van_2025_table_5:row6:col1, van_2025_table_5:row6:col2, van_2025_table_5:row6:col3, van_2025_table_5:row6:col4, van_2025_table_5:row6:col5 | — | not captured |
| Intercompartmental clearance, L/h | `Q30` · Q | 0.0128 | L/h | 3.555555555555556e-09 | [l] / [h] | not captured | exact (1.0) | van_2025_table_5:row7:col1, van_2025_table_5:row7:col2, van_2025_table_5:row7:col3, van_2025_table_5:row7:col4, van_2025_table_5:row7:col5 | — | not captured |
| baseline_ada_change_in_k34 | `Q900` · baseline_ada_change_in_k34 | 4.38 | not captured | not captured | not captured | not captured | not captured (not captured) | van_2025_table_5:row19:col1, van_2025_table_5:row19:col2, van_2025_table_5:row19:col3, van_2025_table_5:row19:col4, van_2025_table_5:row19:col5 | — | not captured |
| theta_q302_category | `Q900` · theta_q302_category | 0.00461 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab4:row4:col1, Tab4:row4:col2, Tab4:row4:col3, Tab4:row4:col4, Tab4:row4:col5, Tab4:row4:col6 | — | not captured |
| theta_q67_category | `Q900` · theta_q67_category | 0.139 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab4:row5:col1, Tab4:row5:col2, Tab4:row5:col3, Tab4:row5:col4, Tab4:row5:col5, Tab4:row5:col6 | — | not captured |
| theta_q346_ada_baseline_change_in_01 | `Q900` · theta_q346_ada_baseline_change_in_01 | 4.84 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab4:row6:col3, Tab4:row6:col4, Tab4:row6:col5, Tab4:row6:col6 | — | not captured |
| theta_q301_ada_rate_constant_to_ada_01_h | `Q900` · theta_q301_ada_rate_constant_to_ada_01_h | 0.00404 | not captured | not captured | not captured | not captured | not captured (not captured) | van_2025_table_5:row12:col1, van_2025_table_5:row12:col2, van_2025_table_5:row12:col3, van_2025_table_5:row12:col4, van_2025_table_5:row12:col5 | — | not captured |
| theta_q335_ada | `Q900` · theta_q335_ada | 0.116 | not captured | not captured | not captured | not captured | not captured (not captured) | van_2025_table_5:row21:col3, van_2025_table_5:row21:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'ΔOFV'; source reconciliation required
- table representations disagree for 'Typical value for λ01, /h'; source reconciliation required
- table representations disagree for 'Typical value for λ10, /h'; source reconciliation required
- table representations disagree for 'Baseline ADA+ : change in λ01'; source reconciliation required
- table representations disagree for 'GC/GEJC'; source reconciliation required
- table representations disagree for 'UC'; source reconciliation required
- table representations disagree for 'MCC'; source reconciliation required
- table representations disagree for 'IIV on λ01, %'; source reconciliation required
- table representations disagree for 'IIV on K21, %'; source reconciliation required
- dropped unlinked row (NIL): 'ΔOFV' — extend the ontology if this is a real PK parameter (source ['Tab4:row3:col1', 'van_2025_table_5:row2:col1'])
- dropped unlinked row (NIL): 'GC/GEJC' — extend the ontology if this is a real PK parameter (source ['Tab4:row8:col5', 'Tab4:row8:col6', 'van_2025_table_5:row15:col1', 'van_2025_table_5:row15:col2', 'van_2025_table_5:row15:col3', 'van_2025_table_5:row15:col4', 'van_2025_table_5:row15:col5'])
- dropped unlinked row (NIL): 'UC' — extend the ontology if this is a real PK parameter (source ['Tab4:row9:col6'])
- dropped unlinked row (NIL): 'MCC' — extend the ontology if this is a real PK parameter (source ['Tab4:row10:col6'])
- dropped unlinked row (NIL): 'T50, days' — extend the ontology if this is a real PK parameter (source ['van_2025_table_5:row9:col1', 'van_2025_table_5:row9:col2', 'van_2025_table_5:row9:col3', 'van_2025_table_5:row9:col4', 'van_2025_table_5:row9:col5'])
- dropped unlinked row (NIL): 'γ' — extend the ontology if this is a real PK parameter (source ['van_2025_table_5:row10:col1', 'van_2025_table_5:row10:col2', 'van_2025_table_5:row10:col3', 'van_2025_table_5:row10:col4', 'van_2025_table_5:row10:col5'])
- dropped unlinked row (NIL): 'Rate constant ADA+ to ADA− (λ10), /h' — extend the ontology if this is a real PK parameter (source ['van_2025_table_5:row13:col1', 'van_2025_table_5:row13:col2', 'van_2025_table_5:row13:col3', 'van_2025_table_5:row13:col4', 'van_2025_table_5:row13:col5'])
- covariate level 'Baseline ADA+ : change in K34' → Q900:baseline_ada_change_in_k34 = 4.38 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Maximum change' — extend the ontology if this is a real PK parameter (source ['van_2025_table_5:row22:col5'])
- dropped unlinked row (NIL): '50% of maximum change' — extend the ontology if this is a real PK parameter (source ['van_2025_table_5:row23:col5', 'van_2025_table_5:row27:col4', 'van_2025_table_5:row27:col5'])
- dropped unlinked row (NIL): 'Shape of effect curve' — extend the ontology if this is a real PK parameter (source ['van_2025_table_5:row24:col5', 'van_2025_table_5:row28:col4', 'van_2025_table_5:row28:col5'])
- covariate effect for Q302 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q67 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q346 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q301 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q335 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=avelumab
- status held at route_to_review — not promoted
- molar mass: none found for 'avelumab' — its concentrations stay mass-only

**Extraction notes:**
- table Tab4: representations disagree; selected evidence retained, not merged
- companion parameter table 5 transcribed (100 record(s))
- LLM selected parameter table(s) 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.25 (4/16 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [] | [['avelumab', 'anti-drug antibodies', 'immunogenicity']] | mismatch |
| `qwen3.8-27b` | `parameters[clearance (cl)]` | not captured | 0.028 | only_one_extracted |
| `qwen3.8-27b` | `parameters[maximum change]` | 0.217 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_ratio_ada]` | 19.0 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q302_category]` | not captured | 0.00461 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q346_ada_baseline_change_in_01]` | not captured | 4.84 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q47_category]` | 0.139 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q67_ada_rate_constant_to_ada_01_h]` | not captured | 0.00404 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q67_category].value` | 0.00461 | 0.139 | mismatch |
| `qwen3.8-27b` | `parameters[theta_q900_ada_baseline_change_in_01]` | 4.84 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q900_ada_rate_constant_to_ada_01_h]` | 0.00404 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[tvcl]` | 0.0285 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['van_2025_table_5:row4:col1', 'van_2025_table_5:row4:col2', 'van_2025_table_5:row4:col3', 'van_2025_table_5:row4:col4', 'van_2025_table_5:row4:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['van_2025_table_5:row7:col1', 'van_2025_table_5:row7:col2', 'van_2025_table_5:row7:col3', 'van_2025_table_5:row7:col4', 'van_2025_table_5:row7:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['van_2025_table_5:row5:col1', 'van_2025_table_5:row5:col2', 'van_2025_table_5:row5:col3', 'van_2025_table_5:row5:col4', 'van_2025_table_5:row5:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['van_2025_table_5:row6:col1', 'van_2025_table_5:row6:col2', 'van_2025_table_5:row6:col3', 'van_2025_table_5:row6:col4', 'van_2025_table_5:row6:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0272 | not captured | not captured | ['van_2025_table_5:row4:col1', 'van_2025_table_5:row4:col2', 'van_2025_table_5:row4:col3', 'van_2025_table_5:row4:col4', 'van_2025_table_5:row4:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0272 L/h | not captured | not captured | ['van_2025_table_5:row4:col1', 'van_2025_table_5:row4:col2', 'van_2025_table_5:row4:col3', 'van_2025_table_5:row4:col4', 'van_2025_table_5:row4:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.52 L | not captured | not captured | ['van_2025_table_5:row5:col1', 'van_2025_table_5:row5:col2', 'van_2025_table_5:row5:col3', 'van_2025_table_5:row5:col4', 'van_2025_table_5:row5:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.582 L | not captured | not captured | ['van_2025_table_5:row6:col1', 'van_2025_table_5:row6:col2', 'van_2025_table_5:row6:col3', 'van_2025_table_5:row6:col4', 'van_2025_table_5:row6:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=avelumab) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_avelumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `van_2025` / `van_2025::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_avelumab/models/modelica/Avelumab_van2025_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_avelumab/models/modelica/Avelumab_van2025_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_avelumab/models/modelica/Avelumab_van2025_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_avelumab/Avelumab_van2025_reference/Avelumab_van2025_reference_modelica.zip" download>Avelumab_van2025_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_avelumab/Avelumab_van2025_reference/Avelumab_van2025_reference_fmi.zip" download>Avelumab_van2025_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_avelumab/Avelumab_van2025_reference/Avelumab_van2025_reference_matlab.zip" download>Avelumab_van2025_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_avelumab/Avelumab_van2025_reference/Avelumab_van2025_reference_matlab_simbio.zip" download>Avelumab_van2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_avelumab/Avelumab_van2025_reference/Avelumab_van2025_reference_sbml.zip" download>Avelumab_van2025_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_avelumab/Avelumab_van2025_reference/Avelumab_van2025_reference_cellml.zip" download>Avelumab_van2025_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_avelumab/Avelumab_van2025_reference/Avelumab_van2025_reference.svg" alt="Avelumab_van2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 800 mg infusion over 10 min, single dose. Dose in the paper: 800 mg.

<dbs-fmusim paramsurl="drugs/drug_avelumab/Avelumab_van2025_reference/Avelumab_van2025_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_avelumab/Avelumab_van2025_reference/Avelumab_van2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Avelumab_van2025_reference_params.json` · controls `Avelumab_van2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 18:06 UTC</sub>
