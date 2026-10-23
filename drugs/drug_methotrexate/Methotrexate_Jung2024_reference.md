<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;methotrexate&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/&quot;},{&quot;label&quot;:&quot;Jung_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methotrexate_Pan2026_reference&quot;,&quot;label&quot;:&quot;Pan_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Pan2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Pignon1994_reference&quot;,&quot;label&quot;:&quot;Pignon_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Pignon1994_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Tan2024_reference&quot;,&quot;label&quot;:&quot;Tan_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Tan2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Wei2025_reference&quot;,&quot;label&quot;:&quot;Wei_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Wei2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Yu2025_reference&quot;,&quot;label&quot;:&quot;Yu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Yu2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_van2024_reference&quot;,&quot;label&quot;:&quot;van_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_van2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# methotrexate — `Methotrexate_Jung2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The two-compartment model for methotrexate was rejected because the peripheral compartment is structurally unreachable from the dose.

<div class="pk-model-meta" hidden drug="methotrexate" model-id="Methotrexate_Jung2024_reference" status="rejected" stale="false" population="Korean patients with haematologic malignancy" measured-compound="methotrexate" parameterization="mechanistic" topology="2C"></div>

## Citation
Jung YS, Son M, Lee SG, Chong JW, Kim SJ, Jang JE et al. A population pharmacokinetic model of methotrexate in Korean patients with haematologic malignancy. British journal of clinical pharmacology 90(3):849–862 (2024).
  ·  DOI: [10.1111/bcp.15969](https://doi.org/10.1111/bcp.15969)

## Population and dosing

**Population:** Korean patients with haematologic malignancy · condition haematologic malignancy · age group mixed · n = &gt;=0.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| θV1 (L) | V1 | 25.09 | L | 3.6 |
| θV2 (L) | V2 | 17.65 | L | 11.2 |
| θCL | θCL | 12.89 | L/h | 5.0 |
| θQ | θQ | 0.655 | L/h | 10.2 |
| absorption rate ka6MP | kabs | 21.07 | 1/day |  |
| t lag,oral | tlag | 0.36 | hour |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The two-compartment model for methotrexate was rejected because the peripheral compartment is structurally unreachable from the dose.**

The rejection reason explicitly identifies an unreachable compartment in the model structure. The record defines a central volume (V1) and a peripheral volume (V2) connected by intercompartmental clearance (Q), yet the structure fails to link the peripheral compartment to the input. This disconnect prevents the model from simulating methotrexate distribution into the peripheral compartment, rendering the parameter set for that compartment invalid. Extracted — methotrexate: V1 25.1 L, V2 17.6 L, kabs 21.1 1/day, tlag 0.36 hour.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has methotrexate, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| θV1 (L) | `Q63` · V1 | 25.09 | L | 0.02509 | m3 | l | 3.6 | llm_confirmed (0.6) | Jung_2024_table_p6_1:row0:col1 |
| θV2 (L) | `Q64` · V2 | 17.65 | L | 0.01765 | m3 | l | 11.2 | llm_confirmed (0.6) | Jung_2024_table_p6_1:row1:col1 |
| θCL | `Q900` · θCL | 12.89 | L/h | 3.581e-06 | m3/s |  | 5.0 |  | Jung_2024_table_p6_1:row2:col1 |
| θQ | `Q900` · θQ | 0.655 | L/h | 1.819e-07 | m3/s |  | 10.2 |  | Jung_2024_table_p6_1:row3:col1 |
| absorption rate ka6MP | `Q49` · kabs | 21.07 | 1/day | 0.0002439 | 1/s | 1/h |  | review_gapfill (0.7) | Gebhard_2023:review |
| t lag,oral | `Q83` · tlag | 0.36 | hour | 1296 | s | h |  | review_gapfill (0.7) | Tan_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| θCL (L/h) | Q22 | llm_confirmed |
| θQ (L/h) | Q30 | llm |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'θAge−V2' — extend the ontology if this is a real PK parameter (source ['Jung_2024_table_p6_1:row4:col1'])
- unit_dimension_mismatch: 'θAge−CL (year−1)' → Q22 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('θAge−CL (year−1)', value '-0.0086') — already have one for this compound
- dropped duplicate Q22 ('θCr−CL', value '-0.3176') — already have one for this compound
- dropped unlinked row (NIL): 'Factor' — extend the ontology if this is a real PK parameter (source ['Jung_2024_table_p6_1:row7:col1'])
- dropped unlinked row (NIL): 'π2V1 (CV%)' — extend the ontology if this is a real PK parameter (source ['Jung_2024_table_p6_1:row12:col1'])
- dropped unlinked row (NIL): 'π2CL (CV%)' — extend the ontology if this is a real PK parameter (source ['Jung_2024_table_p6_1:row13:col1'])
- dropped unlinked row (NIL): 'π2Q (CV%)' — extend the ontology if this is a real PK parameter (source ['Jung_2024_table_p6_1:row14:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=methotrexate
- bound model equation to Q22 (CL): TVCL = 12.89 ∗ (WT/50)^0.75 ∗ [1 - 0.0086 ∗ (Age - 14)] ∗ (Cr/0.55) -0.3176
- bound model equation to Q30 (Q): TVQ = 0.655∗(WT/50)^0.75
- Q22 (CL) is equation-defined: value moved to equation-variable 'θCL (L/h)'; equation kept verbatim
- Q30 (Q) is equation-defined: value moved to equation-variable 'θQ (L/h)'; equation kept verbatim
- gap-filled Q49 (kabs) from Gebhard_2023's review values (primary lacked it)
- gap-filled Q83 (tlag) from Tan_2024's review values (primary lacked it)

**Extraction notes:**
- table Jung_2024_table_p6_1: missing_label
- captured model equation TVCL = 12.89 ∗ (WT/50)^0.75 ∗ [1 - 0.0086 ∗ (Age - 14)] ∗ (Cr/0.55) -0.3176
- captured model equation TVQ = 0.655∗(WT/50)^0.75

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.571 (8/14 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka]` | 0.268 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t lag,oral]` | 0.36 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θv1].value` | 25.09 | 24.67 | mismatch |
| `gpt-oss-120b` | `parameters[θv2].value` | 17.65 | 17.93 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | methotrexate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | methotrexate | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Jung_2024_table_p6_1:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Jung_2024_table_p6_1:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Gebhard_2023:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Jung_2024_table_p6_1:row0:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Jung_2024_table_p6_1:row1:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tan_2024:review'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 25.1 L | ['Jung_2024_table_p6_1:row0:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 17.6 L | ['Jung_2024_table_p6_1:row1:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethotrexate%5D%20Methotrexate_Jung2024_reference&body=Drug%3A%20methotrexate%0ARecord%3A%20Methotrexate_Jung2024_reference%0APaper%3A%20Jung_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_methotrexate/Methotrexate_Jung2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 13:27 UTC</sub>
