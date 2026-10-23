<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;potassium salicylate&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_salicylate/&quot;},{&quot;label&quot;:&quot;Kotschwar_2009 \u00b7 mean_se&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PotassiumSalicylate_Buntenktter2017_reference&quot;,&quot;label&quot;:&quot;Buntenk\u00f6tter_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_salicylate/PotassiumSalicylate_Buntenktter2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PotassiumSalicylate_Kotschwar2009_period_1&quot;,&quot;label&quot;:&quot;Kotschwar_2009_period_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_1.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PotassiumSalicylate_Kotschwar2009_period_2&quot;,&quot;label&quot;:&quot;Kotschwar_2009_period_2&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PotassiumSalicylate_Kotschwar2009_period_3&quot;,&quot;label&quot;:&quot;Kotschwar_2009_period_3&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_3.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# potassium salicylate — `PotassiumSalicylate_Kotschwar2009_mean_se`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

> Rejected because the absorption rate constant for salicylate lacks a compatible unit, leaving its SI value undefined.

<div class="pk-model-meta" hidden drug="potassium salicylate" model-id="PotassiumSalicylate_Kotschwar2009_mean_se" status="rejected" stale="false" population="bovine calves" measured-compound="salicylate" parameterization="mechanistic" topology="1C"></div>

## Citation
Kotschwar JL, Coetzee JF, Anderson DE, Gehring R, KuKanich B, Apley MD. Analgesic efficacy of sodium salicylate in an amphotericin B-induced bovine synovitis-arthritis model. Journal of dairy science 92(8):3731–3743 (2009).
  ·  DOI: [10.3168/jds.2009-2058](https://doi.org/10.3168/jds.2009-2058)

## Population and dosing

**Population:** bovine calves · condition synovitis-arthritis · age group adult · n = 10.

**Dosing:** 3500 mg, iv, multiple.

**Dosed compound ≠ measured compound:** dosed sodium salicylate, measured salicylate.

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC (min × mg/L) | AUC | 12099.0 | min × mg/L |
| T 1/2 el (min) | t1/2z | 36.9 | min |
| K 10 (1/min) | kel | 0.02 |  |
| C 0 (mg/L) | C0 | 226.9 | mg/L |
| CL B (mL/min•kg) | CLb | 4.3 | mL/min•kg |
| V d (L/kg) | V | 0.2 | L/kg |
| MRT (min) | MRT | 53.2 | min |
| ka capsule (h−1) | kabs | 0.22 | h−1 |
| Lag0 (h) | tlag | 2.81 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected because the absorption rate constant for salicylate lacks a compatible unit, leaving its SI value undefined.**

The parameter labeled 'ka capsule' has a value of 0.22 but no unit extracted, unlike other parameters with explicit units. This omission prevents conversion to standard SI units, causing a dimension mismatch. Consequently, the model builder received no valid SI value for this structural parameter. Extracted — potassium salicylate: AUC 1.21e+04 min × mg/L, t1/2z 36.9 min, kel 0.02, C0 227 mg/L, CLb 4.3 mL/min•kg, V 0.2 L/kg, MRT 53.2 min, kabs 0.22 h−1, … (+1).

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC (min × mg/L) | `Q88` · AUC | 12099.0 | min × mg/L |  |  | (min·mg)/l | exact (1) | Kotschwar_2009_table_2:row0:col1 |
| T 1/2 el (min) | `Q57` · t1/2z | 36.9 | min | 2214 | s | min | space_fold (0.95) | Kotschwar_2009_table_2:row1:col1 |
| K 10 (1/min) | `Q47` · kel | 0.02 |  |  |  |  | space_fold (0.95) | Kotschwar_2009_table_2:row2:col1 |
| C 0 (mg/L) | `Q86` · C0 | 226.9 | mg/L |  |  | mg/l | space_fold (0.95) | Kotschwar_2009_table_2:row3:col1 |
| CL B (mL/min•kg) | `Q23` · CLb | 4.3 | mL/min•kg |  |  | ml/(min·kg) | space_fold (0.95) | Kotschwar_2009_table_2:row4:col1 |
| V d (L/kg) | `Q61` · V | 0.2 | L/kg | 0.014 | m3 | l/kg | space_fold (0.95) | Kotschwar_2009_table_2:row5:col1 |
| MRT (min) | `Q53` · MRT | 53.2 | min | 3192 | s | min | exact (1) | Kotschwar_2009_table_2:row6:col1 |
| ka capsule (h−1) | `Q49` · kabs | 0.22 | h−1 | 6.111e-05 | 1/s | 1/h | review_gapfill (0.7) | Koh_2025:review |
| Lag0 (h) | `Q83` · tlag | 2.81 | h | 1.012e+04 | s | h | review_gapfill (0.7) | Koh_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'mean ± se' classified 'ci' by the LLM but kept as the estimate: the header names the point value
- dropped unlinked row (NIL): 'Cortisol (nmol/L)' — extend the ontology if this is a real PK parameter (source ['tab_1:row3:col5', 'tab_1:row3:col6', 'tab_1:row3:col7'])
- dropped unlinked row (NIL): 'Heart rate (bpm)' — extend the ontology if this is a real PK parameter (source ['tab_1:row8:col5', 'tab_1:row8:col6', 'tab_1:row8:col7'])
- dropped unlinked row (NIL): 'Electrodermal activity' — extend the ontology if this is a real PK parameter (source ['tab_1:row10:col5', 'tab_1:row10:col6', 'tab_1:row10:col7'])
- unit_dimension_unknown: 'min × mg/L' (AUC)
- unit_dimension_mismatch: 'C 0 (mg/L)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_unknown: 'mL/min•kg' (CLb)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=salicylate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'mean ± se' subgroup of Kotschwar_2009 (paper reports 4 populations: mean ± se, period 1, period 2, period 3)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Koh_2025's review values (primary lacked it)
- gap-filled Q83 (tlag) from Koh_2025's review values (primary lacked it)

**Extraction notes:**
- companion parameter table 2 transcribed (7 record(s))
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Koh_2025:review'] |
| C5_dimension_Q53 | pass | [time] |  | ['Kotschwar_2009_table_2:row6:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Kotschwar_2009_table_2:row1:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Kotschwar_2009_table_2:row5:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Koh_2025:review'] |
| C5_dimension_Q86 | fail | [mass] / [length] ** 3 | mg/L | ['Kotschwar_2009_table_2:row3:col1'] |
| C5_unit_missing_Q23 | fail | [length] ** 3 / [time] | mL/min•kg | ['Kotschwar_2009_table_2:row4:col1'] |
| C5_unit_missing_Q47 | fail | 1 / [time] |  | ['Kotschwar_2009_table_2:row2:col1'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | min × mg/L | ['Kotschwar_2009_table_2:row0:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.3 | ['Kotschwar_2009_table_2:row4:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 14 L | ['Kotschwar_2009_table_2:row5:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpotassium_salicylate%5D%20PotassiumSalicylate_Kotschwar2009_mean_se&body=Drug%3A%20potassium_salicylate%0ARecord%3A%20PotassiumSalicylate_Kotschwar2009_mean_se%0APaper%3A%20Kotschwar_2009%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_mean_se%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:06 UTC</sub>
