<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;simvastatin&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/&quot;},{&quot;label&quot;:&quot;Methaneethorn_2014_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Simvastatin_Corsini1999_reference&quot;,&quot;label&quot;:&quot;Corsini_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Corsini1999_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Simvastatin_Mauro1993_reference&quot;,&quot;label&quot;:&quot;Mauro_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Mauro1993_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Simvastatin_Sun2022_reference&quot;,&quot;label&quot;:&quot;Sun_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Sun2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Simvastatin_Friedrich2014_reference&quot;,&quot;label&quot;:&quot;Friedrich_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Friedrich2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Simvastatin_Jadhav2023_reference&quot;,&quot;label&quot;:&quot;Jadhav_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Jadhav2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Wei_2014_LDL_C&quot;,&quot;label&quot;:&quot;Wei_2014 \u00b7 LDL-C&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/pd_Wei_2014_LDL_C.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# simvastatin — `Simvastatin_Methaneethorn2014v2_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Simvastatin elimination rate constant was rejected because the hour-based unit for the 0.02 value could not be standardized.

<div class="pk-model-meta" hidden drug="simvastatin" model-id="Simvastatin_Methaneethorn2014v2_reference" status="rejected" stale="false" population="healthy adults" measured-compound="simvastatin" parameterization="mechanistic" topology="1C"></div>

## Citation
Methaneethorn J, Chamnansua M, Kaewdang N, Lohitnavy M. A pharmacokinetic drug-drug interaction model of simvastatin and verapamil in humans. Annual International Conference of the IEEE Engineering in Medicine and Biology Society. IEEE Engineering in Medicine and Biology Society. Annual International Conference 2014:5711–5714 (2014).
  ·  DOI: [10.1109/EMBC.2014.6944924](https://doi.org/10.1109/EMBC.2014.6944924)

## Population and dosing

**Population:** healthy adults · age group adult · n = ... (the thought process is not to be repeated in the output).

**Dosing:** 40 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| F | Fab | 0.17 |  |
| Kₐ (h⁻¹) | kabs | 0.6 | h⁻¹ |
| VD(S) (L) | V | 150 | L |
| Vmax (μM/h) | Vmax | 4 | μM/h |
| Km (μM) | Km | 0.726 | μM |
| Kₑ(S) (h⁻¹) | kel | 0.02 | h⁻¹ |
| Ki(V) (μM) | kic | 0.5 | μM |
| K12 (h⁻¹) | k12 | 19.4 | h⁻¹ |
| K21 (h⁻¹) | k21 | 4.24 | h⁻¹ |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Simvastatin elimination rate constant was rejected because the hour-based unit for the 0.02 value could not be standardized.**

The elimination rate constant is listed as 0.02 per hour, but this specific unit could not be converted to the standard scientific unit. As a result, the parameter value was unavailable for the model's structural check, causing a dimension mismatch. A second reader also failed to confirm the dose compound and primary analyte, marking them as unknown. Extracted — simvastatin: Fab 0.17, kabs 0.6 h⁻¹, V 150 L, Vmax 4 μM/h, Km 0.726 μM, kel 0.02 h⁻¹, kic 0.5 μM, k12 19.4 h⁻¹, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has simvastatin, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 0.17 |  |  |  |  | exact (1) | Methaneethorn_2014_2_table_1:row0:col2, Methaneethorn_2014_2_table_1:row11:col2 |
| Kₐ (h⁻¹) | `Q49` · kabs | 0.6 | h⁻¹ | 0.0001667 | 1/s | 1/h | exact (1) | Methaneethorn_2014_2_table_1:row1:col2 |
| VD(S) (L) | `Q61` · V | 150 | L | 0.15 | m3 | l | space_fold (0.95) | Methaneethorn_2014_2_table_1:row2:col2 |
| Vmax (μM/h) | `Q66` · Vmax | 4 | μM/h |  |  | µM/h | special_case (0.95) | Methaneethorn_2014_2_table_1:row4:col2, Methaneethorn_2014_2_table_1:row19:col2 |
| Km (μM) | `Q1` · Km | 0.726 | μM |  |  | µM | exact (1) | Methaneethorn_2014_2_table_1:row5:col2, Methaneethorn_2014_2_table_1:row20:col2 |
| Kₑ(S) (h⁻¹) | `Q47` · kel | 0.02 | h⁻¹ | 5.556e-06 | 1/s | 1/h | space_fold (0.95) | Methaneethorn_2014_2_table_1:row6:col2 |
| Ki(V) (μM) | `Q350` · kic | 0.5 | μM |  |  | µM | llm (0.6) | Methaneethorn_2014_2_table_1:row9:col2 |
| K12 (h⁻¹) | `Q301` · k12 | 19.4 | h⁻¹ | 0.005389 | 1/s | 1/h | exact (1) | Methaneethorn_2014_2_table_1:row17:col2 |
| K21 (h⁻¹) | `Q302` · k21 | 4.24 | h⁻¹ | 0.001178 | 1/s | 1/h | exact (1) | Methaneethorn_2014_2_table_1:row18:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q61 ('VD(SM) (L)', value '22.5') — already have one for this compound
- unit_dimension_mismatch: 'Vmax (μM/h)' → Q66 (unit '[length] / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Km (μM)' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q47 ('Kₑ(SM) (h⁻¹)', value '0.4') — already have one for this compound
- unit_dimension_mismatch: 'Ki(V) (μM)' → Q350 (unit '[length]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'Ki(NV) (μM)' — extend the ontology if this is a real PK parameter (source ['Methaneethorn_2014_2_table_1:row10:col2'])
- dropped duplicate Q49 ('Kₐ(lumen) (h⁻¹)', value '2.6') — already have one for this compound
- dropped duplicate Q49 ('Kₐ(wall) (h⁻¹)', value '1.4') — already have one for this compound
- dropped duplicate Q61 ('VD(I) (L)', value '37.65') — already have one for this compound
- dropped duplicate Q61 ('VD(NV) (L)', value '172.67') — already have one for this compound
- dropped duplicate Q61 ('VD(2) (L)', value '7.7') — already have one for this compound
- unit_dimension_mismatch: 'Vmax(wall) (μM/h)' → Q66 (unit '[length] / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q66 ('Vmax(wall) (μM/h)', value '0.00125') — already have one for this compound
- unit_dimension_mismatch: 'Km(wall) (μM)' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('Km(wall) (μM)', value '0.726') — already have one for this compound
- dropped duplicate Q47 ('Kₑ(V) (h⁻¹)', value '1.16') — already have one for this compound
- dropped duplicate Q47 ('Kₑ(NV) (h⁻¹)', value '0.6') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=simvastatin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.111 (1/9 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['simvastatin', 'simvastatin hydroxy acid', 'metabolism'], ['verapamil', 'norverapamil', 'metabolism']] | [['verapamil', 'norverapamil', 'metabolism'], ['simvastatin', 'simvastatin hydroxy acid', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[ka]` | 0.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 0.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean systemic clearance]` | 12.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd(s)]` | 150 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` |  | 150 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | simvastatin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | simvastatin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | fail | [length] | μM | ['Methaneethorn_2014_2_table_1:row5:col2', 'Methaneethorn_2014_2_table_1:row20:col2'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Methaneethorn_2014_2_table_1:row17:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Methaneethorn_2014_2_table_1:row18:col2'] |
| C5_dimension_Q350 | fail | [length] | μM | ['Methaneethorn_2014_2_table_1:row9:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Methaneethorn_2014_2_table_1:row6:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Methaneethorn_2014_2_table_1:row1:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Methaneethorn_2014_2_table_1:row2:col2'] |
| C5_dimension_Q66 | fail | [length] / [time] | μM/h | ['Methaneethorn_2014_2_table_1:row4:col2', 'Methaneethorn_2014_2_table_1:row19:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 150 L | ['Methaneethorn_2014_2_table_1:row2:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsimvastatin%5D%20Simvastatin_Methaneethorn2014v2_reference&body=Drug%3A%20simvastatin%0ARecord%3A%20Simvastatin_Methaneethorn2014v2_reference%0APaper%3A%20Methaneethorn_2014_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_simvastatin/Simvastatin_Methaneethorn2014v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 11:06 UTC</sub>
