<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Atenolol&quot;,&quot;href&quot;:&quot;drugs/toxin_atenolol/&quot;},{&quot;label&quot;:&quot;Bouchard_2021 \u00b7 oxprenolol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atenolol_Kir2025_reference&quot;,&quot;label&quot;:&quot;Kir_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_atenolol/Atenolol_Kir2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Atenolol — `Atenolol_Bouchard2021_oxprenolol`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Atenolol's molecular weight of 265 Da was recorded with a conflicting time dimension, preventing conversion to SI units for the model.

<div class="pk-model-meta" hidden drug="Atenolol" model-id="Atenolol_Bouchard2021_oxprenolol" status="rejected" stale="false" population="patients with end-stage kidney disease and poisoned patients" measured-compound="Atenolol" parameterization="mechanistic" topology="1C"></div>

## Citation
Bouchard J, Shepherd G, Hoffman RS, Gosselin S, Roberts DM, Li Y et al. Extracorporeal treatment for poisoning to beta-adrenergic antagonists: systematic review and recommendations from the EXTRIP workgroup. Critical care (London, England) 25(1):201 (2021).
  ·  DOI: [10.1186/s13054-021-03585-7](https://doi.org/10.1186/s13054-021-03585-7)

## Population and dosing

**Population:** patients with end-stage kidney disease and poisoned patients · condition acute poisoning and end-stage kidney disease · age group adult · n = 334.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| MW (Da) | MW | 265 | Da |
| V_D (L/kg) CKD | V | 0.8 | L/kg |
| Endogenous Cl (mL/min) ESKD | CL | 550 | mL/min |
| Renal Cl (mL/min), Normal GFR | CLR | 10 | mL/min |
| Ka | kabs | 1.13 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Atenolol's molecular weight of 265 Da was recorded with a conflicting time dimension, preventing conversion to SI units for the model.**

The structural parameter for atenolol molecular weight (265 Da) contained a dimensional conflict, appearing as a time unit rather than mass. This incompatibility prevented the system from converting the value into the standard SI units required for simulation. As a result, the model could not be built because the parameter value remained unusable. Extracted — atenolol: MW 265 Da, V 0.8 L/kg, CL 550 mL/min, CLR 10 mL/min, kabs 1.13 h−1.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| MW (Da) | `Q374` · MW | 265 | Da |  |  | d·a | exact (1) | Bouchard_2021_table_1:row18:col1 |
| V_D (L/kg) CKD | `Q61` · V | 0.8 | L/kg | 0.056 | m3 | l/kg | llm_confirmed (0.6) | Bouchard_2021_table_1:row18:col4 |
| Endogenous Cl (mL/min) ESKD | `Q22` · CL | 550 | mL/min | 9.167e-06 | m3/s | ml/min | llm_confirmed (0.6) | Bouchard_2021_table_1:row18:col10 |
| Renal Cl (mL/min), Normal GFR | `Q26` · CLR | 10 | mL/min | 1.667e-07 | m3/s | ml/min | llm_corrected (0.6) | Bouchard_2021_table_1:row18:col11 |
| Ka | `Q49` · kabs | 1.13 | h−1 | 0.0003139 | 1/s | 1/h | review_gapfill (0.7) | Fu_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'MW (Da)' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped value-less row: 'ECTR'
- dropped value-less row: 'IHD'
- dropped value-less row: 'TPE'
- dropped value-less row: 'CKRT'
- dropped value-less row: 'HP'
- dropped value-less row: 'Pts'
- dropped value-less row: 'PCC'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Atenolol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'oxprenolol' subgroup of Bouchard_2021 (paper reports 5 populations: alprenolol, atenolol, ecmo - standard care, hd, oxprenolol)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Fu_2022's review values (primary lacked it)

**Extraction notes:**
- table Bouchard_2021_table_8: ragged_grid
- table Bouchard_2021_table_1: unbound_uncertainty
- table Bouchard_2021_table_1: ragged_grid
- transposed table Bouchard_2021_table_1: logical view retains original source coordinates
- companion parameter table 1 transcribed (238 record(s))
- table Bouchard_2021_table_4: missing_label
- table Bouchard_2021_table_4: unparsed_numeric_cell
- companion parameter table 4 transcribed (7 record(s), model stage 'final')
- table Bouchard_2021_table_5: missing_label
- table Bouchard_2021_table_5: unparsed_numeric_cell
- companion parameter table 5 transcribed (1 record(s))
- no LLM table selection; kept 3 deterministically-scored parameter table(s)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Bouchard_2021_table_1:row18:col10'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Bouchard_2021_table_1:row18:col11'] |
| C5_dimension_Q374 | fail | [mass] / [substance] | Da ([time]) | ['Bouchard_2021_table_1:row18:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Fu_2022:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Bouchard_2021_table_1:row18:col4'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 550 | ['Bouchard_2021_table_1:row18:col10'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 33 L/h | ['Bouchard_2021_table_1:row18:col10'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 56 L | ['Bouchard_2021_table_1:row18:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batenolol%5D%20Atenolol_Bouchard2021_oxprenolol&body=Drug%3A%20atenolol%0ARecord%3A%20Atenolol_Bouchard2021_oxprenolol%0APaper%3A%20Bouchard_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_atenolol/Atenolol_Bouchard2021_oxprenolol%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 19:26 UTC</sub>
