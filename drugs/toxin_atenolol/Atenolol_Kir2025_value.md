<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Atenolol&quot;,&quot;href&quot;:&quot;drugs/toxin_atenolol/&quot;},{&quot;label&quot;:&quot;Kir_2025 \u00b7 value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atenolol_Kir2025_reference&quot;,&quot;label&quot;:&quot;Kir_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_atenolol/Atenolol_Kir2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Atenolol — `Atenolol_Kir2025_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Absorption and transfer rate constants erroneously have mass flow units, and intrinsic clearance is an implausible 148 mL/min/kg.

<div class="pk-model-meta" hidden drug="Atenolol" model-id="Atenolol_Kir2025_value" status="rejected" stale="false" population="male Sprague-Dawley rats" measured-compound="Atenolol" parameterization="mechanistic" topology="1C"></div>

## Citation
Kir F, Sahin S, Jusko WJ. Minimal Physiologically-Based Pharmacokinetic Modeling of Atenolol and Metoprolol Absorption in Malnourished Rats. European journal of drug metabolism and pharmacokinetics 50(3):251–263 (2025).
  ·  DOI: [10.1007/s13318-025-00943-6](https://doi.org/10.1007/s13318-025-00943-6)

## Population and dosing

**Population:** male Sprague-Dawley rats · condition malnourished vs control.

**Dosing:** 17500, 21840 mg, oral, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Kp1 | Kp | 4.033 |  |
| CLint (mL/min/kg) | CLint | 148 | mL/min/kg |
| k01 M (mg/min/kg) | kabs | 0.611 | mg/min/kg |
| k02 C (mg/min/kg) | k13 | 5.57 | mg/min/kg |
| fr C | FR | 0.336 |  |
| Vss (L/kg) | Vss | 5.82 | L/kg |
| F C | Fab | 0.422 |  |
| V0_1 | V | 10.1 | ml |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Absorption and transfer rate constants erroneously have mass flow units, and intrinsic clearance is an implausible 148 mL/min/kg.**

The absorption rate constant and central-to-peripheral transfer constant are recorded as mg/min/kg, which are mass flow units incompatible with first-order rate constants requiring reciprocal time. The intrinsic clearance value of 148 mL/min/kg falls outside the physiological range, indicating a scaling error. Additionally, a reported unit could not be standardized to SI, leaving the model parameter unconverted. Extracted — atenolol: Kp 4.03, CLint 148 mL/min/kg, kabs 0.611 mg/min/kg, k13 5.57 mg/min/kg, FR 0.336, Vss 5.82 L/kg, Fab 0.422, V 10.1 ml.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Kp1 | `Q410` · Kp | 4.033 |  |  |  |  | llm (0.6) | Kir_2025_table_3:row3:col2, Tab2:footnote |
| CLint (mL/min/kg) | `Q3` · CLint | 148 | mL/min/kg |  |  | ml/(min·kg) | exact (1) | Kir_2025_table_3:row4:col2 |
| k01 M (mg/min/kg) | `Q49` · kabs | 0.611 | mg/min/kg |  |  | mg/(min·kg) | llm_confirmed (0.6) | Kir_2025_table_3:row6:col2 |
| k02 C (mg/min/kg) | `Q303` · k13 | 5.57 | mg/min/kg |  |  | mg/(min·kg) | llm (0.6) | Kir_2025_table_3:row7:col2 |
| fr C | `Q43` · FR | 0.336 |  | 0.336 |  |  | llm_confirmed (0.6) | Kir_2025_table_3:row9:col2 |
| Vss (L/kg) | `Q65` · Vss | 5.82 | L/kg | 0.4074 | m3 | l/kg | exact (1) | Kir_2025_table_3:row11:col2 |
| F C | `Q40` · Fab | 0.422 |  | 0.422 |  |  | llm (0.6) | Kir_2025_table_3:row12:col2 |
| V0_1 | `Q61` · V | 10.1 | ml | 1.01e-05 | m3 | L | review_gapfill (0.7) | Fu_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'fd1a' — extend the ontology if this is a real PK parameter (source ['Kir_2025_table_3:row2:col2'])
- unit_dimension_mismatch: 'CLint (mL/min/kg)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped unlinked row (NIL): 'k01 C (mg/min/kg)' — extend the ontology if this is a real PK parameter (source ['Kir_2025_table_3:row5:col2'])
- unit_dimension_mismatch: 'k01 M (mg/min/kg)' → Q49 (unit '[mass] / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'k02 C (mg/min/kg)' → Q303 (unit '[mass] / [time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'k02 M (mg/min/kg)' — extend the ontology if this is a real PK parameter (source ['Kir_2025_table_3:row8:col2'])
- dropped duplicate Q43 ('fr M', value '0.0387') — already have one for this compound
- dropped value-less row: 'RSE'
- dropped value-less row: 'SE'
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'Fd'
- NIL: refused to back-fill base 'Vss' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'C'
- dropped value-less row: 'M'
- dropped value-less row: 'k02'
- dropped value-less row: 'k03'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Atenolol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'value' subgroup of Kir_2025 (paper reports 5 populations: blood, kidney, liver, lung, value)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Fu_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- transposed table Kir_2025_table_S2: logical view retains original source coordinates
- table Kir_2025_table_3: unbound_uncertainty
- table Kir_2025_table_3: ragged_grid
- companion parameter table 3 transcribed (27 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q3 | fail | [length] ** 3 / [mass] / [time] | mL/min/kg ([length] ** 3 / [time]) | ['Kir_2025_table_3:row4:col2'] |
| C5_dimension_Q303 | fail | 1 / [time] | mg/min/kg ([mass] / [time]) | ['Kir_2025_table_3:row7:col2'] |
| C5_dimension_Q49 | fail | 1 / [time] | mg/min/kg ([mass] / [time]) | ['Kir_2025_table_3:row6:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Fu_2022:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Kir_2025_table_3:row11:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0101 L | ['Fu_2022:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 407 L | ['Kir_2025_table_3:row11:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batenolol%5D%20Atenolol_Kir2025_value&body=Drug%3A%20atenolol%0ARecord%3A%20Atenolol_Kir2025_value%0APaper%3A%20Kir_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_atenolol/Atenolol_Kir2025_value%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 19:26 UTC</sub>
