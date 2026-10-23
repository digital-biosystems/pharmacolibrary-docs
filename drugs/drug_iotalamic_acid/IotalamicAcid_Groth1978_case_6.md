<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;iotalamic acid&quot;,&quot;href&quot;:&quot;drugs/drug_iotalamic_acid/&quot;},{&quot;label&quot;:&quot;Groth_1978 \u00b7 case_6&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;IotalamicAcid_Shin2015_reference&quot;,&quot;label&quot;:&quot;Shin_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iotalamic_acid/IotalamicAcid_Shin2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# iotalamic acid — `IotalamicAcid_Groth1978_case_6`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Rejected: the central volume of distribution V1 for sodium iothalamate is recorded as 0.011 ml and the peripheral volume V2 as 0.082 L, physiologically implausible magnitudes indicating a unit/scale extraction error, with an orphan compartment and a unit that could not be converted to SI.

<div class="pk-model-meta" hidden drug="iotalamic acid" model-id="IotalamicAcid_Groth1978_case_6" status="rejected" stale="false" population="adults with varying renal function" measured-compound="sodium iothalamate" parameterization="mechanistic" topology="2C"></div>

## Citation
Groth T, Tengström B. The usefulness of 125I-sodium lothalamate as a GFR-indicator in single intravenous injection tests. Upsala journal of medical sciences 83(1):53–63 (1978).
  ·  DOI: [10.3109/03009737809179113](https://doi.org/10.3109/03009737809179113)

## Population and dosing

**Population:** adults with varying renal function · condition renal impairment · age group adult · n = 90.

**Dosing:** 10 µCi, iv, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Nosslin's method "Random-walk" model | CLR | 107 | ml/min |
| k2 (min−1) | k21 | 0.012 | min−1 |
| k3 (min−1) | kel | 0.027 | min−1 |
| V1 (ml) | V1 | 0.011 | ml |
| Clin (ml/min) | CLint | 103 | ml/min |
| Total volume of distr. V1.(1+ (k1/k2)) (ml) | Vss | 91 | ml |
| Extracell. vol. 10% of b.w. (l) | V | 10.9 | l |
| VPT,bi | V2 | 0.082 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.588). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected: the central volume of distribution V1 for sodium iothalamate is recorded as 0.011 ml and the peripheral volume V2 as 0.082 L, physiologically implausible magnitudes indicating a unit/scale extraction error, with an orphan compartment and a unit that could not be converted to SI.**

The central compartment volume V1 is 0.011 ml and the peripheral volume V2 is 0.082 L for sodium iothalamate, magnitudes far outside any physiological window for a 2-compartment model in adults, consistent with a unit or scale extraction error. The model structure also contains an unreachable/orphan compartment with no path from the dose. One reported unit could not be converted to SI units, so that parameter was recorded without a usable value. Other parameters (CLR 107 ml/min, kel 0.027 min−1, k21 0.012 min−1, Vss 91 ml, V 10.9 l) were extracted, but the dimension mismatch on a structural parameter and the implausible clearance/volume magnitudes led to rejection. Extracted — sodium iothalamate: CLR 107 ml/min, k21 0.012 min−1, kel 0.027 min−1, V1 0.011 ml, CLint 103 ml/min, Vss 91 ml, V 10.9 l, V2 0.082 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[clin].parameter_id`: this record has Q3, the second reading Q22; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Nosslin's method "Random-walk" model | `Q26` · CLR | 107 | ml/min | 1.783e-06 | m3/s | L/h | llm (0.6) | Groth_1978_table_2:row2:col4 |
| k2 (min−1) | `Q302` · k21 | 0.012 | min−1 | 0.0002 | 1/s | 1/min | llm (0.6) | Groth_1978_table_3:row1:col5, Groth_1978_table_3:row1:col6 |
| k3 (min−1) | `Q47` · kel | 0.027 | min−1 | 0.00045 | 1/s | 1/min | llm (0.6) | Groth_1978_table_3:row2:col5, Groth_1978_table_3:row2:col6 |
| V1 (ml) | `Q63` · V1 | 0.011 | ml | 1.1e-08 | m3 | ml | exact (1) | Groth_1978_table_3:row3:col5, Groth_1978_table_3:row3:col6 |
| Clin (ml/min) | `Q3` · CLint | 103 | ml/min |  |  | ml/min | llm (0.6) | Groth_1978_table_3:row5:col5, Groth_1978_table_3:row5:col6 |
| Total volume of distr. V1.(1+ (k1/k2)) (ml) | `Q65` · Vss | 91 | ml | 9.1e-05 | m3 | ml | llm_corrected (0.6) | Groth_1978_table_3:row6:col5 |
| Extracell. vol. 10% of b.w. (l) | `Q61` · V | 10.9 | l | 0.0109 | m3 | l | llm (0.6) | Groth_1978_table_5:row4:col3 |
| VPT,bi | `Q64` · V2 | 0.082 | L | 8.2e-05 | m3 | L | review_gapfill (0.7) | Takita_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Table 111 . "Best" estimates of the parameters in the two-compartment model for three typical cases where data from the initialpart, t 6 min, are available'
- unit_dimension_mismatch: 'Clin (ml/min)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- dropped unlinked row (NIL): 'Body weight (kg)' — extend the ontology if this is a real PK parameter (source ['Groth_1978_table_5:row0:col3'])
- dropped duplicate Q63 ('V1 (l)', value '5.3') — already have one for this compound
- dropped duplicate Q65 ('Total volume of distr. (l)', value '12.1') — already have one for this compound
- dropped duplicate Q63 ('Plasma vol. 4% of b.w. (l)', value '2.3') — already have one for this compound
- implicit units: 'Nosslin\'s method "Random-walk" model' → ml/min (from the paper text: "Table II lists estimates of GFR in ml/min, including 'Random-walk' model 107; Table IV also reports GFR (ml/min) for the")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sodium iothalamate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'case 6' subgroup of Groth_1978 (paper reports 6 populations: case 1, case 2, case 3, case 4, case 5, case 6)
- gap-filled Q64 (V2) from Takita_2020's review values (primary lacked it)
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
| `gpt-oss-120b` | not confirmed | 0.588 (10/17 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clin].parameter_id` | Q3 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[extracell. vol. 10% of b.w.]` | 10.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k2].parameter_id` | Q302 | Q47 | mismatch |
| `gpt-oss-120b` | `parameters[k3].parameter_id` | Q47 | Q48 | mismatch |
| `gpt-oss-120b` | `parameters[nosslin's method "random-walk" model].parameter_id` | Q26 | Q41 | mismatch |
| `gpt-oss-120b` | `parameters[v1].parameter_id` | Q63 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[vpt,bi]` | 0.082 |  | only_one_extracted |

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
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Groth_1978_table_2:row2:col4'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] | ml/min | ['Groth_1978_table_3:row5:col5', 'Groth_1978_table_3:row5:col6'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Groth_1978_table_3:row1:col5', 'Groth_1978_table_3:row1:col6'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Groth_1978_table_3:row2:col5', 'Groth_1978_table_3:row2:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Groth_1978_table_5:row4:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Groth_1978_table_3:row3:col5', 'Groth_1978_table_3:row3:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Takita_2020:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Groth_1978_table_3:row6:col5'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 10.9 L | ['Groth_1978_table_5:row4:col3'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 1.1e-05 L | ['Groth_1978_table_3:row3:col5', 'Groth_1978_table_3:row3:col6'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.082 L | ['Takita_2020:review'] |
| C9_phys_window_Q65 | fail | volume within physiological range | 0.091 L | ['Groth_1978_table_3:row6:col5'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biotalamic_acid%5D%20IotalamicAcid_Groth1978_case_6&body=Drug%3A%20iotalamic_acid%0ARecord%3A%20IotalamicAcid_Groth1978_case_6%0APaper%3A%20Groth_1978%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_iotalamic_acid/IotalamicAcid_Groth1978_case_6%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 23:14 UTC</sub>
