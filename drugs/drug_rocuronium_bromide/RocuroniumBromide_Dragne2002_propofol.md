<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;rocuronium bromide&quot;,&quot;href&quot;:&quot;drugs/drug_rocuronium_bromide/&quot;},{&quot;label&quot;:&quot;Dragne_2002 \u00b7 propofol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;RocuroniumBromide_Ji2023_reference&quot;,&quot;label&quot;:&quot;Ji_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rocuronium_bromide/RocuroniumBromide_Ji2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;RocuroniumBromide_Li2025_reference&quot;,&quot;label&quot;:&quot;Li_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rocuronium_bromide/RocuroniumBromide_Li2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rocuronium bromide — `RocuroniumBromide_Dragne2002_propofol`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The elimination rate constant beta (0.0470 min⁻¹) for rocuronium bromide was rejected because its unit could not be converted to SI.

<div class="pk-model-meta" hidden drug="rocuronium bromide" model-id="RocuroniumBromide_Dragne2002_propofol" status="rejected" stale="false" population="surgical patients under anesthesia" measured-compound="rocuronium_bromide" parameterization="mechanistic" topology="1C"></div>

## Citation
Dragne A, Varin F, Plaud B, Donati F. Rocuronium pharmacokinetic-pharmacodynamic relationship under stable propofol or isoflurane anesthesia. Canadian journal of anaesthesia = Journal canadien d'anesthesie 49(4):353–360 (2002).
  ·  DOI: [10.1007/BF03017322](https://doi.org/10.1007/BF03017322)

## Population and dosing

**Population:** surgical patients under anesthesia · age group adult · n = ,
  "condition": "surgical anesthesia.

**Dosing:** 21, 35 mg, iv, multiple, every 60 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 12 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| A (ng·mL⁻¹) | equation variable | 5987 | ng·mL⁻¹ |
| B (ng·mL⁻¹) | C0 | 1488 | ng·mL⁻¹ |
| α (min⁻¹) | λ1 | 0.5562 | min⁻¹ |
| β (min⁻¹) | kel | 0.0470 | min⁻¹ |
| t½ α (min) | t1/2α | 1.68 | min |
| t½ β (min) | t1/2β | 18.46 | min |
| t½ γ (min) | t1/2γ | 86.62 | min |
| Cl (mL·kg⁻¹·min⁻¹) | CL | 4.37 | mL·kg⁻¹·min⁻¹ |
| Vc (mL·kg⁻¹) | V | 38 | mL·kg⁻¹ |
| Vss (mL·kg⁻¹) | Vss | 204 | mL·kg⁻¹ |
| Cp60 (ng·mL⁻¹) | Ct | 323 | ng·mL⁻¹ |
| Cmax (ng·mL⁻¹) | Cmax | 18667 | ng·mL⁻¹ |
| Tmax (min) | tmax | 0.60 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.722). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The elimination rate constant beta (0.0470 min⁻¹) for rocuronium bromide was rejected because its unit could not be converted to SI.**

The record assigns the elimination rate constant to a parameter with the value 0.0470 min⁻¹. The review identified a dimension mismatch on this structural parameter because the reported unit was not recognized by the system for conversion. Consequently, the parameter lacked a valid SI value, resulting in the rejection of the model record. Extracted — rocuronium bromide: C0 1.49e+03 ng·mL⁻¹, λ1 0.556 min⁻¹, kel 0.047 min⁻¹, t1/2α 1.68 min, t1/2β 18.5 min, t1/2γ 86.6 min, CL 4.37 mL·kg⁻¹·min⁻¹, V 38 mL·kg⁻¹, … (+4).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has rocuronium_bromide, the second reading rocuronium bromide; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| A (ng·mL⁻¹) | `Q900` · equation variable | 5987 | ng·mL⁻¹ |  |  | ng/ml | llm (0.6) | Dragne_2002_table_p4_1:row0:col1 |
| B (ng·mL⁻¹) | `Q86` · C0 | 1488 | ng·mL⁻¹ |  |  | ng/ml | llm (0.6) | Dragne_2002_table_p4_1:row1:col1 |
| α (min⁻¹) | `Q67` · λ1 | 0.5562 | min⁻¹ |  |  | 1/min | exact (1) | Dragne_2002_table_p4_1:row3:col1 |
| β (min⁻¹) | `Q47` · kel | 0.0470 | min⁻¹ | 0.0007833 | 1/s | 1/min | exact (1) | Dragne_2002_table_p4_1:row4:col1 |
| t½ α (min) | `Q59` · t1/2α | 1.68 | min | 100.8 | s | min | llm (0.6) | Dragne_2002_table_p4_1:row6:col1 |
| t½ β (min) | `Q60` · t1/2β | 18.46 | min | 1108 | s | min | llm (0.6) | Dragne_2002_table_p4_1:row7:col1 |
| t½ γ (min) | `Q89` · t1/2γ | 86.62 | min | 5197 | s | min | llm (0.6) | Dragne_2002_table_p4_1:row8:col1 |
| Cl (mL·kg⁻¹·min⁻¹) | `Q22` · CL | 4.37 | mL·kg⁻¹·min⁻¹ | 5.098e-06 | m3/s | ml/(min·kg) | exact (1) | Dragne_2002_table_p4_1:row9:col1 |
| Vc (mL·kg⁻¹) | `Q61` · V | 38 | mL·kg⁻¹ | 0.00266 | m3 | ml/kg | exact (1) | Dragne_2002_table_p4_1:row10:col1 |
| Vss (mL·kg⁻¹) | `Q65` · Vss | 204 | mL·kg⁻¹ | 0.01428 | m3 | ml/kg | exact (1) | Dragne_2002_table_p4_1:row11:col1 |
| Cp60 (ng·mL⁻¹) | `Q75` · Ct | 323 | ng·mL⁻¹ |  |  | ng/ml | llm (0.6) | Dragne_2002_table_p4_1:row12:col1 |
| Cmax (ng·mL⁻¹) | `Q32` · Cmax | 18667 | ng·mL⁻¹ |  |  | ng/ml | exact (1) | Dragne_2002_table_p4_1:row13:col1 |
| Tmax (min) | `Q56` · tmax | 0.60 | min | 36 | s | min | exact (1) | Dragne_2002_table_p4_1:row14:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'B (ng·mL⁻¹)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q900 ('C (ng·mL⁻¹)', value '145') — already have one for this compound
- unit_dimension_mismatch: 'α (min⁻¹)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=rocuronium_bromide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Vc (mL·kg⁻¹)' is the general volume)
- status held at route_to_review — not promoted
- population split: 'propofol (n=5)' subgroup of Dragne_2002 (paper reports 2 populations: isoflurane (n=5), propofol (n=5))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.722 (13/18 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[a]` | 5987 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[b]` | 1488 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cp60].parameter_id` | Q75 | Q37 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | rocuronium_bromide | rocuronium bromide | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | rocuronium_bromide | rocuronium | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 5.15 | 6.027 | 1.17 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Dragne_2002_table_p4_1:row9:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Dragne_2002_table_p4_1:row13:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  |  |  | ['Dragne_2002_table_p4_1:row4:col1'] |
| C5_dimension_Q56 | pass | [time] |  |  |  | ['Dragne_2002_table_p4_1:row14:col1'] |
| C5_dimension_Q59 | pass | [time] |  |  |  | ['Dragne_2002_table_p4_1:row6:col1'] |
| C5_dimension_Q60 | pass | [time] |  |  |  | ['Dragne_2002_table_p4_1:row7:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['Dragne_2002_table_p4_1:row10:col1'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  |  |  | ['Dragne_2002_table_p4_1:row11:col1'] |
| C5_dimension_Q67 | fail | 1 / [time] | min⁻¹ |  |  | ['Dragne_2002_table_p4_1:row3:col1'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  |  |  | ['Dragne_2002_table_p4_1:row12:col1'] |
| C5_dimension_Q86 | fail | [mass] / [length] ** 3 | ng·mL⁻¹ |  |  | ['Dragne_2002_table_p4_1:row1:col1'] |
| C5_dimension_Q89 | pass | [time] |  |  |  | ['Dragne_2002_table_p4_1:row8:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.37 |  |  | ['Dragne_2002_table_p4_1:row9:col1'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 18.4 L/h |  |  | ['Dragne_2002_table_p4_1:row9:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.66 L |  |  | ['Dragne_2002_table_p4_1:row10:col1'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 14.3 L |  |  | ['Dragne_2002_table_p4_1:row11:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brocuronium_bromide%5D%20RocuroniumBromide_Dragne2002_propofol&body=Drug%3A%20rocuronium_bromide%0ARecord%3A%20RocuroniumBromide_Dragne2002_propofol%0APaper%3A%20Dragne_2002%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_rocuronium_bromide/RocuroniumBromide_Dragne2002_propofol%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 02:51 UTC</sub>
