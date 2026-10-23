<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;coagulation factor IX&quot;,&quot;href&quot;:&quot;drugs/drug_coagulation_factor_ix/&quot;},{&quot;label&quot;:&quot;Preijers_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# coagulation factor IX — `CoagulationFactorIx_Preijers2022_reference`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:37 UTC (Needs review), but the paper was screened again on 2026-10-05 17:40 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. No value for coagulation factor ix's clearance, volume of distribution, central→peripheral rate constant and peripheral→central rate constant — all 17 extracted parameters describe N9-GP, rFIXFc and rIX-FP, not coagulation factor ix; the covariate scenarios were not simulated.

<div class="pk-model-meta" hidden drug="coagulation factor IX" model-id="CoagulationFactorIx_Preijers2022_reference" status="rejected" stale="true" population="hemophilia B patients" measured-compound="factor IX" parameterization="mechanistic" topology="2C"></div>

## Citation
Preijers T, van Spengler MWF, Meijer K, Fijnvandraat K, Fischer K, Leebeek FWG et al. In silico evaluation of limited sampling strategies for individualized dosing of extended half-life factor IX concentrates in hemophilia B patients. European journal of clinical pharmacology 78(2):237–249 (2022).
  ·  DOI: [10.1007/s00228-021-03173-2](https://doi.org/10.1007/s00228-021-03173-2)

## Population and dosing

**Population:** hemophilia B patients · condition hemophilia B · age group mixed · n = 10000.

**Dosing:** 50 IU/kg, iv, single.

**Dosed compound ≠ measured compound:** dosed extended half-life factor IX concentrates, measured factor IX.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted, plus 4 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Clearance (CL; mLh−1) | CL | 4.6 | mL/h | 16.1 (None% RSE) |
| Volume of central compartment (V1; mL) | V1 | 4.8 | mL |  |
| Distribution CL to compartment 2 (Q(2); mLh−1) | Q2 | 35.2 | mL/h |  |
| Volume of compartment 2 (V2; mL) | V2 | 11.8 | mL |  |
| Distribution CL to compartment 3 (Q3; mLh−1) | Q3 | 3930 | mL/h |  |
| Volume of compartment 3 (V3; mL) | V3 | 3990 | mL |  |
| t1/2 (h) | t1/2z | 94.3 | h |  |
| theta_q319_body_weight_power | theta_q319_body_weight_power | 0.436 |  |  |
| theta_q319_body_weight_power | theta_q319_body_weight_power | 0.396 |  |  |
| theta_q319_body_weight_power | theta_q319_body_weight_power | 0.79 |  |  |
| theta_q319_weight_power | theta_q319_weight_power | 0.38 |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for coagulation factor ix's clearance, volume of distribution, central→peripheral rate constant and peripheral→central rate constant — all 17 extracted parameters describe N9-GP, rFIXFc and rIX-FP, not coagulation factor ix; the covariate scenarios were not simulated.**

The model was built, but coagulation factor ix's clearance, volume of distribution, central→peripheral rate constant and peripheral→central rate constant had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (CL, CL, CL and V1), so that value has no SI equivalent. Extracted — N9-GP: CL 4.6 CL; mLh−1, V1 4.8 V1; mL, Q2 35.2, V2 11.8 V2; mL, t1/2z 94.3 h; rFIXFc: CL 239 CL; mLh−1, V1 7.14e+03 V1; mL, Q2 167, V2 8.7e+03 V2; mL, Q3 3.93e+03 Q3; mLh−1, V3 3.99e+03 V3; mL, t1/2z 79 h; rIX-FP: CL 57 CL; mLh−1, V1 6.48e+03 V1; mL, Q2 29, V2 1.58e+03 V2; mL, t1/2z 108 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has extended half-life factor IX concentrates, the second reading N9-GP, rFIXFc, rIX-FP; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Clearance (CL; mLh−1) | `Q22` · CL | 4.6 | mL/h | 1.278e-09 | m3/s | L/h | exact (1) | Tab1:row3:col2, Tab1:row3:col3, Tab1:row3:col5, Tab1:row3:col6 | 16.1 (None% RSE) |
| Volume of central compartment (V1; mL) | `Q63` · V1 | 4.8 | mL | 4.8e-06 | m3 | L | boundary_compartment (0.9) | Tab1:row4:col2, Tab1:row4:col3, Tab1:row4:col5, Tab1:row4:col6 |  |
| Distribution CL to compartment 2 (Q(2); mLh−1) | `Q99` · Q2 | 35.2 | mL/h | 9.778e-09 | m3/s | L/h | llm_corrected (0.6) | Tab1:row5:col2, Tab1:row5:col3, Tab1:row5:col5, Tab1:row5:col6 |  |
| Volume of compartment 2 (V2; mL) | `Q64` · V2 | 11.8 | mL | 1.18e-05 | m3 | L | llm_corrected (0.6) | Tab1:row6:col2, Tab1:row6:col3, Tab1:row6:col5, Tab1:row6:col6 |  |
| Distribution CL to compartment 3 (Q3; mLh−1) | `Q308` · Q3 | 3930 | mL/h | 1.092e-06 | m3/s | L/h | llm_corrected (0.6) | Tab1:row7:col3 |  |
| Volume of compartment 3 (V3; mL) | `Q77` · V3 | 3990 | mL | 0.00399 | m3 | L | llm_corrected (0.6) | Tab1:row8:col3 |  |
| t1/2 (h) | `Q57` · t1/2z | 94.3 | h | 3.395e+05 | s | h | exact (1) | Tab1:row29:col1, Tab1:row29:col3, Tab1:row29:col5 |  |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.436 |  |  |  |  |  | Tab1:row10:col3, Tab1:row10:col5, Tab1:row10:col6 |  |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.396 |  |  |  |  |  | Tab1:row11:col3, Tab1:row11:col5, Tab1:row11:col6 |  |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.79 |  |  |  |  |  | Tab1:row12:col5, Tab1:row12:col6 |  |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.38 |  |  |  |  |  | Tab1:row13:col5, Tab1:row13:col6 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV on CL' routed out of structural estimates ('Inter-individual variability (%CVd)')
- table section iiv: 'IIV on V1' routed out of structural estimates ('Inter-individual variability (%CVd)')
- table section iiv: 'IIV on V2' routed out of structural estimates ('Inter-individual variability (%CVd)')
- table section iiv: 'IIV on V3' routed out of structural estimates ('Inter-individual variability (%CVd)')
- table section iiv: 'IIV on Q(2)' routed out of structural estimates ('Inter-individual variability (%CVd)')
- table section iiv: 'Correlation between CL and V1 (%)' routed out of structural estimates ('Inter-individual variability (%CVd)')
- table section iiv: 'IIV on baseline' routed out of structural estimates ('Inter-individual variability (%CVd)')
- table section iov: 'IOV CL' routed out of structural estimates ('Inter-occasion variability (%CV)')
- table section iov: 'IOV V1' routed out of structural estimates ('Inter-occasion variability (%CV)')
- table section residual_error: 'Additive residual variability (SD; IUmL−1)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional residual variability (%CV)' routed out of structural estimates ('Residual variability')
- column 'n9-gpa' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'rfixfcb' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'rix-fpc' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'CL; mLh−1' (CL)
- unit_dimension_unknown: 'V1; mL' (V1)
- unit_dimension_unknown: 'V2; mL' (V2)
- unit_dimension_unknown: 'Q3; mLh−1' (Q3)
- unit_dimension_unknown: 'V3; mL' (V3)
- dropped unlinked row (NIL): 'Baseline FIX level' — extend the ontology if this is a real PK parameter (source ['Tab1:row9:col5', 'Tab1:row9:col6'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Clearance (CL; mLh−1)' → mL/h (from the paper text: "The parameter description in the input list explicitly states 'Clearance (CL; mLh−1)'. Additionally, the paper text note")
- implicit units: 'Volume of central compartment (V1; mL)' → mL (from the paper text: "The parameter description in the input list explicitly states 'Volume of central compartment (V1; mL)'.")
- implicit units: 'Distribution CL to compartment 2 (Q(2); mLh−1)' → mL/h (from the paper text: "The parameter description in the input list explicitly states 'Distribution CL to compartment 2 (Q(2); mLh−1)'.")
- implicit units: 'Volume of compartment 2 (V2; mL)' → mL (from the paper text: "The parameter description in the input list explicitly states 'Volume of compartment 2 (V2; mL)'.")
- implicit units: 'Distribution CL to compartment 3 (Q3; mLh−1)' → mL/h (from the paper text: "The parameter description in the input list explicitly states 'Distribution CL to compartment 3 (Q3; mLh−1)'.")
- implicit units: 'Volume of compartment 3 (V3; mL)' → mL (from the paper text: "The parameter description in the input list explicitly states 'Volume of compartment 3 (V3; mL)'.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=factor IX
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- molar mass: no plausible PubChem entry for 'factor IX' ('factor IX') — left in mass units
- molar mass: none found for 'coagulation_factor_ix' — its concentrations stay mass-only
- molar mass: none found for 'factor IX' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'factor IX', not coagulation_factor_ix — the review values are the parent's

**Extraction notes:**
- unparsed cell Tab1:row3:col1 = '0.684*'
- unparsed cell Tab1:row4:col1 = '73.9*'
- unparsed cell Tab1:row5:col1 = '0.614*'
- unparsed cell Tab1:row6:col1 = '15.6*'
- LLM selected parameter table(s) 1
- LLM region Preijers_2022:other_prose: no JSON records returned
- LLM region Preijers_2022:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.714 (10/14 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['', '', 'none']] | mismatch |
| `gpt-oss:120b` | `parameters[baseline fix level]` |  | 0.0106 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | extended half-life factor IX concentrates | N9-GP, rFIXFc, rIX-FP | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | factor IX | coagulation_factor_ix | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab1:row3:col2', 'Tab1:row3:col3', 'Tab1:row3:col5', 'Tab1:row3:col6'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['Tab1:row7:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['Tab1:row29:col1', 'Tab1:row29:col3', 'Tab1:row29:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab1:row4:col2', 'Tab1:row4:col3', 'Tab1:row4:col5', 'Tab1:row4:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab1:row6:col2', 'Tab1:row6:col3', 'Tab1:row6:col5', 'Tab1:row6:col6'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Tab1:row8:col3'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['Tab1:row5:col2', 'Tab1:row5:col3', 'Tab1:row5:col5', 'Tab1:row5:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.6 | ['Tab1:row3:col2', 'Tab1:row3:col3', 'Tab1:row3:col5', 'Tab1:row3:col6'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0046 L/h | ['Tab1:row3:col2', 'Tab1:row3:col3', 'Tab1:row3:col5', 'Tab1:row3:col6'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.0048 L | ['Tab1:row4:col2', 'Tab1:row4:col3', 'Tab1:row4:col5', 'Tab1:row4:col6'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.0118 L | ['Tab1:row6:col2', 'Tab1:row6:col3', 'Tab1:row6:col5', 'Tab1:row6:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage |  | pass | 12 scholar param(s) emitted or defaulted | 12 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcoagulation_factor_ix%5D%20CoagulationFactorIx_Preijers2022_reference&body=Drug%3A%20coagulation_factor_ix%0ARecord%3A%20CoagulationFactorIx_Preijers2022_reference%0APaper%3A%20Preijers_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_coagulation_factor_ix/CoagulationFactorIx_Preijers2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-05 17:40 UTC</sub>
