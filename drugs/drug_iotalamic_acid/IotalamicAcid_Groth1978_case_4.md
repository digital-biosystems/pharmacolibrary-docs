<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;iotalamic acid&quot;,&quot;href&quot;:&quot;drugs/drug_iotalamic_acid/&quot;},{&quot;label&quot;:&quot;Groth_1978 \u00b7 case_4&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;IotalamicAcid_Shin2015_reference&quot;,&quot;label&quot;:&quot;Shin_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iotalamic_acid/IotalamicAcid_Shin2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# iotalamic acid — `IotalamicAcid_Groth1978_case_4`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The sodium iothalamate record was rejected because the volume of distribution V was extracted as 0.008 ml (with Vss 69 ml), physiologically implausible values indicating a unit/scale extraction error, and one reported unit could not be converted to SI.

<div class="pk-model-meta" hidden drug="iotalamic acid" model-id="IotalamicAcid_Groth1978_case_4" status="rejected" stale="false" population="adults with varying renal function" measured-compound="sodium iothalamate" parameterization="mechanistic" topology="1C"></div>

## Citation
Groth T, Tengström B. The usefulness of 125I-sodium lothalamate as a GFR-indicator in single intravenous injection tests. Upsala journal of medical sciences 83(1):53–63 (1978).
  ·  DOI: [10.3109/03009737809179113](https://doi.org/10.3109/03009737809179113)

## Population and dosing

**Population:** adults with varying renal function · condition renal impairment · age group adult · n = 90.

**Dosing:** 10 µCi, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Nosslin's method "Random-walk" model | CLR | 107 | mL/min |
| k2 (min−1) | kel | 0.021 | min−1 |
| k3 (min−1) | k21 | 0.028 | min−1 |
| V1 (ml) | V | 0.008 | ml |
| Clin (ml/min) | CLint | 82 | ml/min |
| Total volume of distr. V1.(1+ (k1/k2)) (ml) | Vss | 69 | ml |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.769). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The sodium iothalamate record was rejected because the volume of distribution V was extracted as 0.008 ml (with Vss 69 ml), physiologically implausible values indicating a unit/scale extraction error, and one reported unit could not be converted to SI.**

The one-compartment model for sodium iothalamate in adults with varying renal function carries V = 0.008 ml and Vss = 69 ml, magnitudes far outside any physiological window for this contrast agent, alongside CLR = 107 mL/min, kel = 0.021 min−1, k21 = 0.028 min−1 and CLint = 82 ml/min. The dimension mismatch on the structural volume parameter and the implausible clearance/volume magnitudes point to a unit or scale extraction error. Because one reported unit could not be expressed in SI units, the parameter reached the model without a usable numeric value, and the record was refused rather than published. Extracted — sodium iothalamate: CLR 107 mL/min, kel 0.021 min−1, k21 0.028 min−1, V 0.008 ml, CLint 82 ml/min, Vss 69 ml.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[clin].parameter_id`: this record has Q3, the second reading Q22; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Nosslin's method "Random-walk" model | `Q26` · CLR | 107 | mL/min | 1.783e-06 | m3/s | L/h | llm (0.6) | Groth_1978_table_2:row2:col4 |
| k2 (min−1) | `Q47` · kel | 0.021 | min−1 | 0.00035 | 1/s | 1/min | llm (0.6) | Groth_1978_table_3:row1:col1, Groth_1978_table_3:row1:col2 |
| k3 (min−1) | `Q302` · k21 | 0.028 | min−1 | 0.0004667 | 1/s | 1/min | llm (0.6) | Groth_1978_table_3:row2:col1, Groth_1978_table_3:row2:col2 |
| V1 (ml) | `Q61` · V | 0.008 | ml | 8e-09 | m3 | ml | exact (1) | Groth_1978_table_3:row3:col1, Groth_1978_table_3:row3:col2 |
| Clin (ml/min) | `Q3` · CLint | 82 | ml/min |  |  | ml/min | llm (0.6) | Groth_1978_table_3:row5:col1, Groth_1978_table_3:row5:col2 |
| Total volume of distr. V1.(1+ (k1/k2)) (ml) | `Q65` · Vss | 69 | ml | 6.9e-05 | m3 | ml | llm_corrected (0.6) | Groth_1978_table_3:row6:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Table 111 . "Best" estimates of the parameters in the two-compartment model for three typical cases where data from the initialpart, t 6 min, are available'
- unit_dimension_mismatch: 'Clin (ml/min)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- dropped unlinked row (NIL): 'Body weight (kg)' — extend the ontology if this is a real PK parameter (source ['Groth_1978_table_5:row0:col1'])
- dropped duplicate Q63 ('V1 (l)', value '4.0') — already have one for this compound
- dropped duplicate Q65 ('Total volume of distr. (l)', value '13.8') — already have one for this compound
- dropped duplicate Q63 ('Plasma vol. 4% of b.w. (l)', value '3.0') — already have one for this compound
- dropped duplicate Q63 ('Extracell. vol. 10% of b.w. (l)', value '14.3') — already have one for this compound
- implicit units: 'Nosslin\'s method "Random-walk" model' → mL/min (from the paper text: "Table II lists GFR estimates in ml/min, including 'Random-walk' model 107; Table I also gives 'Clearance k3·V1 (ml/min)'")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sodium iothalamate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V1 (ml)' is the general volume)
- status held at route_to_review — not promoted
- population split: 'case 4' subgroup of Groth_1978 (paper reports 6 populations: case 1, case 2, case 3, case 4, case 5, case 6)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- final table tab_0: grid unusable → re-running vision table extraction for Groth_1978
- companion parameter table 1 transcribed (12 record(s))
- companion parameter table 2 transcribed (13 record(s))
- transposed table Groth_1978_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Groth_1978_table_3:row6:col3 = '116±19a'
- companion parameter table 3 transcribed (26 record(s))
- transposed table Groth_1978_table_5: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 5 transcribed (15 record(s))
- LLM selected parameter table(s) 1, 2, 3, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.769 (10/13 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clin].parameter_id` | Q3 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[k3].parameter_id` | Q302 | Q48 | mismatch |
| `gpt-oss-120b` | `parameters[nosslin's method "random-walk" model].parameter_id` | Q26 | Q41 | mismatch |

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
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Groth_1978_table_2:row2:col4'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] | ml/min | ['Groth_1978_table_3:row5:col1', 'Groth_1978_table_3:row5:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Groth_1978_table_3:row2:col1', 'Groth_1978_table_3:row2:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Groth_1978_table_3:row1:col1', 'Groth_1978_table_3:row1:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Groth_1978_table_3:row3:col1', 'Groth_1978_table_3:row3:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Groth_1978_table_3:row6:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 8e-06 L | ['Groth_1978_table_3:row3:col1', 'Groth_1978_table_3:row3:col2'] |
| C9_phys_window_Q65 | fail | volume within physiological range | 0.069 L | ['Groth_1978_table_3:row6:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biotalamic_acid%5D%20IotalamicAcid_Groth1978_case_4&body=Drug%3A%20iotalamic_acid%0ARecord%3A%20IotalamicAcid_Groth1978_case_4%0APaper%3A%20Groth_1978%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_iotalamic_acid/IotalamicAcid_Groth1978_case_4%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 23:14 UTC</sub>
