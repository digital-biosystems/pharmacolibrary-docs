<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;exenatide&quot;,&quot;href&quot;:&quot;drugs/drug_exenatide/&quot;},{&quot;label&quot;:&quot;Cirincione_2017_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Exenatide_Li2012_reference&quot;,&quot;label&quot;:&quot;Li_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_exenatide/Exenatide_Li2012_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# exenatide — `Exenatide_Cirincione2017v2_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the intercompartmental clearance parameter had a unit that could not be converted to standard SI.

<div class="pk-model-meta" hidden drug="exenatide" model-id="Exenatide_Cirincione2017v2_reference" status="rejected" stale="false" population="type 2 diabetes mellitus" measured-compound="exenatide" parameterization="mechanistic" topology="1C"></div>

## Citation
Cirincione B, Mager DE. Population pharmacokinetics of exenatide. British journal of clinical pharmacology 83(3):517–526 (2017).
  ·  DOI: [10.1111/bcp.13135](https://doi.org/10.1111/bcp.13135)

## Population and dosing

**Population:** type 2 diabetes mellitus · condition type 2 diabetes mellitus · age group adult.

**Dosing:** 0.005, 0.01 mg, subcutaneous, multiple, every 12 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Cl_int (l h −1 ) | CLint | 4.58 | l h −1 |  | 33.9 (None% RSE) |
| Cl_eGFR | Km | 0.838 |  | 12.3 | 95.7 (None% RSE) |
| Cl d (l h −1 ) | Q | 3.72 | l h −1 | 21.7 |  |
| V max (μg h −1 ) | Vmax | 1.55 | μg h −1 | 22.1 |  |
| V p (l) | V2 | 7.04 | l | 9.49 |  |
| Vc_wtkg | Vnorm | 2.67 | L/kg | 13.3 |  |
| F | Fab | 1 |  |  |  |
| fr | FR | 0.628 |  | 3.5 |  |
| ka | kabs | 0.006 | h-1 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.889). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the intercompartmental clearance parameter had a unit that could not be converted to standard SI.**

The parameter representing transfer between central and peripheral compartments, labeled 'Cl d', was reported in l/h, a unit the system could not translate. This prevented the value from being standardized. Additionally, a second reader disagreed that the dose compound and primary analyte were definitively exenatide, marking them as unknown. Extracted — exenatide: CLint 4.58 l h −1, Km 0.838, Q 3.72 l h −1, Vmax 1.55 μg h −1, V2 7.04 l, Vnorm 2.67 L/kg, Fab 1, FR 0.628, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of vc=vc_int⋅weight84.8vc_wtkg: this record has none, the second reading none; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cl_int (l h −1 ) | `Q3` · CLint | 4.58 | l h −1 |  |  | l/h |  | exact (1) | bcp13135-tbl-0002:row1:col1 | 33.9 (None% RSE) |
| Cl_eGFR | `Q1` · Km | 0.838 |  |  |  |  | 12.3 | llm (0.6) | bcp13135-tbl-0002:row2:col1 | 95.7 (None% RSE) |
| Cl d (l h −1 ) | `Q30` · Q | 3.72 | l h −1 | 1.033e-06 | m3/s | l/h | 21.7 | space_fold (0.95) | bcp13135-tbl-0002:row4:col1 |  |
| V max (μg h −1 ) | `Q66` · Vmax | 1.55 | μg h −1 |  |  | µg/h | 22.1 | special_case (0.95) | bcp13135-tbl-0002:row6:col1 |  |
| V p (l) | `Q64` · V2 | 7.04 | l | 0.00704 | m3 | l | 9.49 | space_fold (0.95) | bcp13135-tbl-0002:row7:col1, bcp13135-tbl-0002:row11:col1 |  |
| Vc_wtkg | `Q352` · Vnorm | 2.67 | L/kg | 0.1869 | m3 | L | 13.3 | llm (0.6) | bcp13135-tbl-0002:row9:col1 |  |
| F | `Q40` · Fab | 1 |  |  |  |  |  | exact (1) | bcp13135-tbl-0002:row15:col1 |  |
| fr | `Q43` · FR | 0.628 |  |  |  |  | 3.5 | exact (1) | bcp13135-tbl-0002:row16:col1 |  |
| ka | `Q49` · kabs | 0.006 | h-1 | 1.667e-06 | 1/s | 1/h |  | review_gapfill (0.7) | Choi_2025:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Cl = Cl_int ⋅eGFR80 Cl_eGFR | Q22 | llm_confirmed |
| Vc=Vc_int⋅weight84.8Vc_wtkg | Q63 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Cl_int (l h −1 )' routed out of structural estimates ('IIV(%)')
- table section iiv: 'Cl = Cl_int ⋅eGFR80 Cl_eGFR' routed out of structural estimates ('IIV(%)')
- table section iiv: 'K m (pg ml −1 )' routed out of structural estimates ('IIV(%)')
- table section iiv: 'Vc_int (l)' routed out of structural estimates ('IIV(%)')
- table section iiv: 'Vc=Vc_int⋅weight84.8Vc_wtkg' routed out of structural estimates ('IIV(%)')
- unit_dimension_mismatch: 'Cl_int (l h −1 )' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- dropped duplicate Q1 ('K m (pg ml −1 )', value '567') — already have one for this compound
- unit_dimension_mismatch: 'V max (μg h −1 )' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Vc_int (l)' → Q3 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- dropped duplicate Q3 ('Vc_int (l)', value '7.03') — already have one for this compound
- unit_dimension_mismatch: 'k a_max (μg h −1 )' → Q1 (unit '[mass] / [time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('k a_max (μg h −1 )', value '12.8') — already have one for this compound
- unit_dimension_mismatch: 'K m_ka (μg)' → Q1 (unit '[mass]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('K m_ka (μg)', value '16.9') — already have one for this compound
- dropped unlinked row (NIL): 'τ (h)' — extend the ontology if this is a real PK parameter (source ['bcp13135-tbl-0002:row14:col1'])
- dropped unlinked row (NIL): 'RV (log units) SD' — extend the ontology if this is a real PK parameter (source ['bcp13135-tbl-0002:row17:col1'])
- dropped unlinked row (NIL): 'Study 1' — extend the ontology if this is a real PK parameter (source ['bcp13135-tbl-0002:row18:col1'])
- dropped unlinked row (NIL): 'Study 5' — extend the ontology if this is a real PK parameter (source ['bcp13135-tbl-0002:row19:col1'])
- dropped unlinked row (NIL): 'All other studies' — extend the ontology if this is a real PK parameter (source ['bcp13135-tbl-0002:row20:col1'])
- implicit units: 'Vc_wtkg' → L/kg (from the popPK convention: "The parameter is the central volume of distribution normalized to total weight (indicated by the variable name 'Vc_wtkg'")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=exenatide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- gap-filled Q49 (kabs) from Choi_2025's review values (primary lacked it)

**Extraction notes:**
- table bcp13135-tbl-0002: unbound_uncertainty
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.889 (24/27 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[vc=vc_int⋅weight84.8vc_wtkg]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc_int].parameter_id` | Q61 | Q63 | mismatch |
| `gpt-oss-120b` | `parameters[vc_wtkg]` |  | 2.67 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] | l h −1 | ['bcp13135-tbl-0002:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['bcp13135-tbl-0002:row4:col1'] |
| C5_dimension_Q352 | pass | [length] ** 3 |  | ['bcp13135-tbl-0002:row9:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Choi_2025:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['bcp13135-tbl-0002:row7:col1', 'bcp13135-tbl-0002:row11:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] | μg h −1 | ['bcp13135-tbl-0002:row6:col1'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 |  | ['bcp13135-tbl-0002:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q64 | pass | volume within physiological range | 7.04 L | ['bcp13135-tbl-0002:row7:col1', 'bcp13135-tbl-0002:row11:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bexenatide%5D%20Exenatide_Cirincione2017v2_reference&body=Drug%3A%20exenatide%0ARecord%3A%20Exenatide_Cirincione2017v2_reference%0APaper%3A%20Cirincione_2017_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_exenatide/Exenatide_Cirincione2017v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 09:39 UTC</sub>
