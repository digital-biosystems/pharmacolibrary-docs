<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;coagulation factor IX&quot;,&quot;href&quot;:&quot;drugs/drug_coagulation_factor_ix/&quot;},{&quot;label&quot;:&quot;Preijers_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# coagulation factor IX — `CoagulationFactorIx_Preijers2022_reference`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**No value for coagulation factor ix's clearance, volume of distribution, central→peripheral rate constant and peripheral→central rate constant — all 17 extracted parameters describe N9-GP, rFIXFc and rIX-FP, not coagulation factor ix; the covariate scenarios were not simulated.**

The model was built, but coagulation factor ix's clearance, volume of distribution, central→peripheral rate constant and peripheral→central rate constant had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (CL, CL, CL and V1), so that value has no SI equivalent. Extracted — N9-GP: CL 4.6 CL; mLh−1, V1 4.8 V1; mL, Q2 35.2, V2 11.8 V2; mL, t1/2z 94.3 h; rFIXFc: CL 239 CL; mLh−1, V1 7.14e+03 V1; mL, Q2 167, V2 8.7e+03 V2; mL, Q3 3.93e+03 Q3; mLh−1, V3 3.99e+03 V3; mL, t1/2z 79 h; rIX-FP: CL 57 CL; mLh−1, V1 6.48e+03 V1; mL, Q2 29, V2 1.58e+03 V2; mL, t1/2z 108 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has extended half-life factor IX concentrates, the second reading N9-GP, rFIXFc, rIX-FP; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:37:13.751695+00:00) predates the upstream re-run (2026-10-05 17:40:19.540556+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `extended half-life factor IX concentrates`, measured `factor IX`.

## Citation
Preijers T et al., In silico evaluation of limited samplin…, European journal of clinica… (2022)
  ·  DOI: [10.1007/s00228-021-03173-2](https://doi.org/10.1007/s00228-021-03173-2)

## Model component
<dbs-pgx drug="coagulation factor IX" model-id="CoagulationFactorIx_Preijers2022_reference" status="rejected" stale="true" population="hemophilia B patients" measured-compound="factor IX" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 4 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance (CL; mLh−1) | `Q22` · CL | 4.6 | mL/h | 1.2777777777777776e-09 | L/h | not captured | exact (1.0) | Tab1:row3:col2, Tab1:row3:col3, Tab1:row3:col5, Tab1:row3:col6 | — | 16.1 (None% RSE) |
| Volume of central compartment (V1; mL) | `Q63` · V1 | 4.8 | mL | 4.8e-06 | L | not captured | boundary_compartment (0.9) | Tab1:row4:col2, Tab1:row4:col3, Tab1:row4:col5, Tab1:row4:col6 | — | not captured |
| Distribution CL to compartment 2 (Q(2); mLh−1) | `Q99` · Q2 | 35.2 | mL/h | 9.777777777777778e-09 | L/h | not captured | llm_corrected (0.6) | Tab1:row5:col2, Tab1:row5:col3, Tab1:row5:col5, Tab1:row5:col6 | — | not captured |
| Volume of compartment 2 (V2; mL) | `Q64` · V2 | 11.8 | mL | 1.18e-05 | L | not captured | llm_corrected (0.6) | Tab1:row6:col2, Tab1:row6:col3, Tab1:row6:col5, Tab1:row6:col6 | — | not captured |
| Distribution CL to compartment 3 (Q3; mLh−1) | `Q308` · Q3 | 3930 | mL/h | 1.0916666666666664e-06 | L/h | not captured | llm_corrected (0.6) | Tab1:row7:col3 | — | not captured |
| Volume of compartment 3 (V3; mL) | `Q77` · V3 | 3990 | mL | 0.00399 | L | not captured | llm_corrected (0.6) | Tab1:row8:col3 | — | not captured |
| t1/2 (h) | `Q57` · t1/2z | 94.3 | h | 339480.0 | [h] | not captured | exact (1.0) | Tab1:row29:col1, Tab1:row29:col3, Tab1:row29:col5 | — | not captured |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.436 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab1:row10:col3, Tab1:row10:col5, Tab1:row10:col6 | — | not captured |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.396 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab1:row11:col3, Tab1:row11:col5, Tab1:row11:col6 | — | not captured |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.79 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab1:row12:col5, Tab1:row12:col6 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.38 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab1:row13:col5, Tab1:row13:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `gpt-oss:120b` | `parameters[baseline fix level]` | not captured | 0.0106 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | extended half-life factor IX concentrates | N9-GP, rFIXFc, rIX-FP | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | factor IX | coagulation_factor_ix | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row3:col2', 'Tab1:row3:col3', 'Tab1:row3:col5', 'Tab1:row3:col6'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row7:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Tab1:row29:col1', 'Tab1:row29:col3', 'Tab1:row29:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row4:col2', 'Tab1:row4:col3', 'Tab1:row4:col5', 'Tab1:row4:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row6:col2', 'Tab1:row6:col3', 'Tab1:row6:col5', 'Tab1:row6:col6'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row8:col3'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row5:col2', 'Tab1:row5:col3', 'Tab1:row5:col5', 'Tab1:row5:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.6 | not captured | not captured | ['Tab1:row3:col2', 'Tab1:row3:col3', 'Tab1:row3:col5', 'Tab1:row3:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0046 L/h | not captured | not captured | ['Tab1:row3:col2', 'Tab1:row3:col3', 'Tab1:row3:col5', 'Tab1:row3:col6'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.0048 L | not captured | not captured | ['Tab1:row4:col2', 'Tab1:row4:col3', 'Tab1:row4:col5', 'Tab1:row4:col6'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.0118 L | not captured | not captured | ['Tab1:row6:col2', 'Tab1:row6:col3', 'Tab1:row6:col5', 'Tab1:row6:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage | not captured | pass | 12 scholar param(s) emitted or defaulted | 12 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_coagulation_factor_ix/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Preijers_2022` / `Preijers_2022::reference`)
- model: `../../../knowledgebase/drugs/drug_coagulation_factor_ix/models/modelica/_needs_review/CoagulationFactorIx_Preijers2022_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_coagulation_factor_ix/models/modelica/_needs_review/CoagulationFactorIx_Preijers2022_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 17:40 UTC</sub>
