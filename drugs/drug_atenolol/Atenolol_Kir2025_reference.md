<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;atenolol&quot;,&quot;href&quot;:&quot;drugs/drug_atenolol/&quot;},{&quot;label&quot;:&quot;Kir_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atenolol — `Atenolol_Kir2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

> This record was reviewed on 2026-09-28 14:36 UTC (Needs review), but the paper was screened again on 2026-10-06 23:08 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The atenolol model for malnourished and non-malnourished rats fails to reproduce the paper's Cmax (0.025 vs 0.0498) and tmax (5.0 vs 1.81), and its absorption rate constant was invented rather than reported, so it was held back.

<div class="pk-model-meta" hidden drug="atenolol" model-id="Atenolol_Kir2025_reference" status="rejected" stale="true" population="malnourished rats" measured-compound="atenolol" parameterization="mechanistic" topology="1C"></div>

## Citation
Kir F, Sahin S, Jusko WJ. Minimal Physiologically-Based Pharmacokinetic Modeling of Atenolol and Metoprolol Absorption in Malnourished Rats. European journal of drug metabolism and pharmacokinetics 50(3):251–263 (2025).
  ·  DOI: [10.1007/s13318-025-00943-6](https://doi.org/10.1007/s13318-025-00943-6)

## Population and dosing

**Population:** malnourished rats · condition malnutrition.

**Dosing:** 17500, 21840 mg, oral, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (mL/min/kg) | CL | 16.04 | mL/min/kg |
| k01 C (mg/min/kg) | kabs | 1.19 | mg/min/kg |
| k03 Cc (mg/min/kg) | k13 | 0 | mg/min/kg |
| Vss (L/kg)d | Vss | 1.41 | L/kg |
| Kp1 | Kp | 4.033 |  |
| CLint (mL/min/kg) | CLint | 148 | mL/min/kg |
| F M | fm | 0.839 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The atenolol model for malnourished and non-malnourished rats fails to reproduce the paper's Cmax (0.025 vs 0.0498) and tmax (5.0 vs 1.81), and its absorption rate constant was invented rather than reported, so it was held back.**

Simulated as the paper dosed it, the model's peak concentration for atenolol exceeds the reported values (0.025, 0.0228, 0.0143, 0.0206) with ratios of 1.9928, 2.1851, 3.484 and 2.4185, and the time of the peak is 1.81 against a reported 5.0 (ratio 0.3613). The absorption rate constant was not reported in the source and was defaulted, which was judged not acceptable; F and Tlag were likewise left at defaults because no source values were extracted. A reported unit could not be converted to SI, so a parameter was used without an SI value, and a second reader disagreed on whether the analyte was atenolol alone or atenolol with metoprolol. Extracted — atenolol: CL 16 mL/min/kg, kabs 1.19 mg/min/kg, V 1.41 L/kg.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (mL/min/kg) | `Q22` · CL | 16.04 | mL/min/kg | 1.871e-05 | m3/s | ml/(min·kg) | exact (1) | Tab2:row5:col2, Tab2:row5:col3, Tab2:row5:col4 |
| k01 C (mg/min/kg) | `Q49` · kabs | 1.19 | mg/min/kg |  |  | mg/(min·kg) | llm_confirmed (0.6) | Tab2:row6:col1, Tab2:row6:col2, Tab2:row6:col3, Tab2:row6:col4, Kir_2025_table_3:row5:col1, Kir_2025_table_3:row5:col3, Kir_2025_table_3:row5:col4 |
| k03 Cc (mg/min/kg) | `Q303` · k13 | 0 | mg/min/kg |  |  | mg/(min·kg) | llm (0.6) | Tab2:row10:col1, Tab2:row10:col2 |
| Vss (L/kg)d | `Q65` · Vss | 1.41 | L/kg | 0.0987 | m3 | L | llm_confirmed (0.6) | Tab2:row12:col2 |
| Kp1 | `Q410` · Kp | 4.033 |  |  |  |  | llm (0.6) | Kir_2025_table_3:row3:col2, Kir_2025_table_3:row3:col3, Kir_2025_table_3:row3:col4 |
| CLint (mL/min/kg) | `Q3` · CLint | 148 | mL/min/kg |  |  | ml/(min·kg) | exact (1) | Kir_2025_table_3:row4:col2, Kir_2025_table_3:row4:col3, Kir_2025_table_3:row4:col4 |
| F M | `Q45` · fm | 0.839 |  |  |  |  | space_fold (0.95) | Kir_2025_table_3:row13:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'linearization' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'definition' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'fd1a' — extend the ontology if this is a real PK parameter (source ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Kir_2025_table_3:row2:col2', 'Kir_2025_table_3:row2:col3', 'Kir_2025_table_3:row2:col4'])
- dropped unlinked row (NIL): 'Kp1b' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4'])
- unit_dimension_mismatch: 'k01 C (mg/min/kg)' → Q49 (unit '[mass] / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'k01 M (mg/min/kg)' → Q49 (unit '[mass] / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('k01 M (mg/min/kg)', value '0.611') — already have one for this compound
- dropped unlinked row (NIL): 'k02 C (mg/min/kg)' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col1', 'Tab2:row8:col3', 'Tab2:row8:col4', 'Kir_2025_table_3:row7:col1', 'Kir_2025_table_3:row7:col2', 'Kir_2025_table_3:row7:col3', 'Kir_2025_table_3:row7:col4'])
- dropped unlinked row (NIL): 'k02 M (mg/min/kg)' — extend the ontology if this is a real PK parameter (source ['Tab2:row9:col1', 'Tab2:row9:col2', 'Tab2:row9:col3', 'Kir_2025_table_3:row8:col1', 'Kir_2025_table_3:row8:col2', 'Kir_2025_table_3:row8:col3', 'Kir_2025_table_3:row8:col4'])
- unit_dimension_mismatch: 'k03 Cc (mg/min/kg)' → Q303 (unit '[mass] / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'k03 M (mg/min/kg)' → Q303 (unit '[mass] / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q303 ('k03 M (mg/min/kg)', value '1.16') — already have one for this compound
- dropped unlinked row (NIL): 'F Ce' — extend the ontology if this is a real PK parameter (source ['Tab2:row13:col2'])
- dropped unlinked row (NIL): 'F Me' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col1'])
- unit_dimension_mismatch: 'CLint (mL/min/kg)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- dropped unlinked row (NIL): 'fr C' — extend the ontology if this is a real PK parameter (source ['Kir_2025_table_3:row9:col2', 'Kir_2025_table_3:row9:col3', 'Kir_2025_table_3:row9:col4'])
- dropped unlinked row (NIL): 'fr M' — extend the ontology if this is a real PK parameter (source ['Kir_2025_table_3:row10:col1', 'Kir_2025_table_3:row10:col2', 'Kir_2025_table_3:row10:col3'])
- dropped duplicate Q65 ('Vss (L/kg)', value '5.82') — already have one for this compound
- dropped unlinked row (NIL): 'F C' — extend the ontology if this is a real PK parameter (source ['Kir_2025_table_3:row12:col2'])
- implicit units: 'Vss (L/kg)d' → L/kg (from the paper text: "Table 3 caption/footnote d states: 'Calculated based on Vss = (Vb + V1·Kp1 + V2·Kp2 + V3·Kp3)/body weight'. Additionally")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (mL/min/kg))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atenolol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row3:col1 = 'Fractional distribution parameter for Tissue 1'
- unparsed cell Tab2:row4:col1 = 'Tissue-to-plasma partition coefficient for Tissue 1'
- unparsed cell Tab2:row7:col1 = '1.012*'
- unparsed cell Tab2:row8:col2 = '1.86**'
- unparsed cell Kir_2025_table_3:row2:col1 = 'Fractional distribution parameter for Tissue 1'
- unparsed cell Kir_2025_table_3:row3:col1 = 'Tissue-to-plasma partition coefficient for Tissue 1'
- unparsed cell Kir_2025_table_3:row5:col2 = '4.5*'
- companion parameter table 3 transcribed (32 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] | mL/min/kg | ['Kir_2025_table_3:row4:col2', 'Kir_2025_table_3:row4:col3', 'Kir_2025_table_3:row4:col4'] |
| C5_dimension_Q303 | fail | [mass] / [time] | mg/min/kg | ['Tab2:row10:col1', 'Tab2:row10:col2'] |
| C5_dimension_Q49 | fail | [mass] / [time] | mg/min/kg | ['Tab2:row6:col1', 'Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col4', 'Kir_2025_table_3:row5:col1', 'Kir_2025_table_3:row5:col3', 'Kir_2025_table_3:row5:col4'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Tab2:row12:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 16.04 | ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 67.4 L/h | ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 98.7 L | ['Tab2:row12:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=atenolol) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.025 | 0.04982 | 1.993 | µg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0228 | 0.04982 | 2.185 | µg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0143 | 0.04982 | 3.484 | µg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0206 | 0.04982 | 2.418 | µg/mL→SI vs simulated kg/m3 |
| T1_tmax | reference | fail | 5 | 1.806 | 0.3613 | min→SI vs simulated h |
| T1_tmax | reference | pass | 2.25 | 1.806 | 0.8028 | min→SI vs simulated h |
| T1_tmax | reference | pass | 1.833 | 1.806 | 0.9852 | min→SI vs simulated h |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batenolol%5D%20Atenolol_Kir2025_reference&body=Drug%3A%20atenolol%0ARecord%3A%20Atenolol_Kir2025_reference%0APaper%3A%20Kir_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atenolol/Atenolol_Kir2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:08 UTC</sub>
