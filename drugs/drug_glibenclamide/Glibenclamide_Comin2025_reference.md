<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;glibenclamide&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/&quot;},{&quot;label&quot;:&quot;Comin_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;pd_Rambiritch_2016_FBG_2&quot;,&quot;label&quot;:&quot;Rambiritch_2016 \u00b7 FBG&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/pd_Rambiritch_2016_FBG_2.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Rambiritch_2016_full_glucose_profile_2&quot;,&quot;label&quot;:&quot;Rambiritch_2016 \u00b7 full glucose profile&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/pd_Rambiritch_2016_full_glucose_profile_2.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Rambiritch_2016_mean_glucose_concentration_2&quot;,&quot;label&quot;:&quot;Rambiritch_2016 \u00b7 mean glucose concentration&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/pd_Rambiritch_2016_mean_glucose_concentration_2.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# glibenclamide — `Glibenclamide_Comin2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Glibenclamide model rejected because intercompartmental clearance of 179 h⁻¹ is physiologically implausible and its unit could not be converted to standard SI units.

<div class="pk-model-meta" hidden drug="glibenclamide" model-id="Glibenclamide_Comin2025_reference" status="rejected" stale="false" population="healthy adults" measured-compound="glibenclamide" parameterization="mechanistic" topology="1C"></div>

## Citation
Comin L, Marie S, Ursino M, Zohar S, Tournier N, Comets E. Modeling Whole-Body Dynamic PET Microdosing Data to Predict the Whole-Body Pharmacokinetics of Glyburide in Humans. Clinical pharmacokinetics 64(11):1709–1722 (2025).
  ·  DOI: [10.1007/s40262-025-01562-9](https://doi.org/10.1007/s40262-025-01562-9)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = 16.

**Dosing:** 0.0125 mg, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| V_Bpop (L) | V | 0.062 | L |  |
| k_Epop (h⁻¹) | kel | 0.26 | h⁻¹ |  |
| Tk0_pop (h) | k12 | 0.46 | h |  |
| k_L1L2_pop (h⁻¹) | k21 | 8.2 | h⁻¹ | 9.6 |
| k_K1B_pop (h⁻¹) | Q | 179 | h⁻¹ | 10 |
| k_BS_pop (h⁻¹) | kuptake | 0.24 | h⁻¹ |  |
| k_BF_pop (h⁻¹) | kout_peripheral | 0.19 | h⁻¹ |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.588). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Glibenclamide model rejected because intercompartmental clearance of 179 h⁻¹ is physiologically implausible and its unit could not be converted to standard SI units.**

The apparent intercompartmental clearance was extracted as 179 h⁻¹, a magnitude far outside the physiological window for this compound. The review notes a dimension mismatch on this structural parameter and states that the reported unit could not be mapped to a standard SI unit, preventing proper value establishment. A second reader also disagreed with the extracted 0.23 h⁻¹ transfer rate constant and failed to identify the dose compound. Extracted — glibenclamide: V 0.062 L, kel 0.26 h⁻¹, k12 0.46 h, k21 8.2 h⁻¹, Q 179 h⁻¹, kuptake 0.24 h⁻¹, kout_peripheral 0.19 h⁻¹.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of k_k1b_pop: this record has none, the second reading 0.23; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| V_Bpop (L) | `Q61` · V | 0.062 | L | 6.2e-05 | m3 | l |  | llm (0.6) | Comin_2025_table_2:row0:col1, Comin_2025_table_2:row0:col4, Comin_2025_table_2:row0:col8 |
| k_Epop (h⁻¹) | `Q47` · kel | 0.26 | h⁻¹ | 7.222e-05 | 1/s | 1/h |  | llm (0.6) | Comin_2025_table_2:row1:col1, Comin_2025_table_2:row1:col4, Comin_2025_table_2:row1:col8 |
| Tk0_pop (h) | `Q301` · k12 | 0.46 | h |  |  | h |  | llm (0.6) | Comin_2025_table_2:row2:col1, Comin_2025_table_2:row2:col4 |
| k_L1L2_pop (h⁻¹) | `Q302` · k21 | 8.2 | h⁻¹ | 0.002278 | 1/s | 1/h | 9.6 | llm (0.6) | Comin_2025_table_2:row7:col1 |
| k_K1B_pop (h⁻¹) | `Q30` · Q | 179 | h⁻¹ |  |  | 1/h | 10 | llm (0.6) | Comin_2025_table_2:row10:col1 |
| k_BS_pop (h⁻¹) | `Q349` · kuptake | 0.24 | h⁻¹ | 6.667e-05 | 1/s | 1/h |  | llm (0.6) | Comin_2025_table_2:row15:col1, Comin_2025_table_2:row15:col4, Comin_2025_table_2:row15:col8 |
| k_BF_pop (h⁻¹) | `Q346` · kout_peripheral | 0.19 | h⁻¹ | 5.278e-05 | 1/s | 1/h |  | llm (0.6) | Comin_2025_table_2:row18:col1, Comin_2025_table_2:row18:col4, Comin_2025_table_2:row18:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Tk0_pop (h)' → Q301 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q61 ('V_Lpop (L)', value '0.12') — already have one for this compound
- dropped unlinked row (NIL): 'k_L1B_pop (h⁻¹)' — extend the ontology if this is a real PK parameter (source ['Comin_2025_table_2:row4:col1', 'Comin_2025_table_2:row4:col4'])
- dropped unlinked row (NIL): 'β_L1Brif' — extend the ontology if this is a real PK parameter (source ['Comin_2025_table_2:row5:col1'])
- dropped unlinked row (NIL): 'k_B1L_pop (h⁻¹)' — extend the ontology if this is a real PK parameter (source ['Comin_2025_table_2:row6:col1', 'Comin_2025_table_2:row6:col4'])
- dropped duplicate Q302 ('k_L2L1_pop (h⁻¹)', value '0.22') — already have one for this compound
- dropped duplicate Q61 ('V_Kpop (L)', value '0.23') — already have one for this compound
- unit_dimension_mismatch: 'k_K1B_pop (h⁻¹)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q47 ('k_BK1_pop (h⁻¹)', value '0.26') — already have one for this compound
- dropped duplicate Q301 ('k_K1K2_pop (h⁻¹)', value '0.15') — already have one for this compound
- dropped duplicate Q302 ('k_K2K1_pop (h⁻¹)', value '0.12') — already have one for this compound
- dropped duplicate Q61 ('V_Spop (L)', value '0.038') — already have one for this compound
- dropped unlinked row (NIL): 'k_SB_pop (h⁻¹)' — extend the ontology if this is a real PK parameter (source ['Comin_2025_table_2:row16:col1'])
- dropped duplicate Q61 ('V_Ppop (L)', value '0.026') — already have one for this compound
- dropped duplicate Q301 ('k_PB_pop (h⁻¹)', value '0.30') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=glibenclamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- amount-only peripheral compartment: a peripheral output rate (kout_peripheral) is present with no reported volume — model its AMOUNT; concentration is not identifiable without an assumed volume
- status held at route_to_review — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Comin_2025_table_2: ambiguous_uncertainty_binding
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.588 (10/17 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[k_k1b_pop]` |  | 0.23 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k_k1k2_pop]` | 0.23 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k_l1l2_pop].parameter_id` | Q302 | Q301 | mismatch |
| `gpt-oss-120b` | `parameters[k_l2l1_pop]` |  | 0.12 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tk0_pop]` |  | 0.26 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_lpop]` | 0.12 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_ppop]` |  | 0.026 | only_one_extracted |

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
| C5_dimension_Q30 | fail | 1 / [time] | h⁻¹ | ['Comin_2025_table_2:row10:col1'] |
| C5_dimension_Q301 | fail | [time] | h | ['Comin_2025_table_2:row2:col1', 'Comin_2025_table_2:row2:col4'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Comin_2025_table_2:row7:col1'] |
| C5_dimension_Q346 | pass | 1 / [time] |  | ['Comin_2025_table_2:row18:col1', 'Comin_2025_table_2:row18:col4', 'Comin_2025_table_2:row18:col8'] |
| C5_dimension_Q349 | pass | 1 / [time] |  | ['Comin_2025_table_2:row15:col1', 'Comin_2025_table_2:row15:col4', 'Comin_2025_table_2:row15:col8'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Comin_2025_table_2:row1:col1', 'Comin_2025_table_2:row1:col4', 'Comin_2025_table_2:row1:col8'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Comin_2025_table_2:row0:col1', 'Comin_2025_table_2:row0:col4', 'Comin_2025_table_2:row0:col8'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.062 L | ['Comin_2025_table_2:row0:col1', 'Comin_2025_table_2:row0:col4', 'Comin_2025_table_2:row0:col8'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bglibenclamide%5D%20Glibenclamide_Comin2025_reference&body=Drug%3A%20glibenclamide%0ARecord%3A%20Glibenclamide_Comin2025_reference%0APaper%3A%20Comin_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_glibenclamide/Glibenclamide_Comin2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 09:51 UTC</sub>
