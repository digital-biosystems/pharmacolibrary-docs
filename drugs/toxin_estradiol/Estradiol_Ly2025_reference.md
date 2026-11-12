<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Estradiol&quot;,&quot;href&quot;:&quot;drugs/toxin_estradiol/&quot;},{&quot;label&quot;:&quot;Ly_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Estradiol — `Estradiol_Ly2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span>

> Estradiol clearance parameters have units (pmol/mL) that do not match their mass-based PK dimensions, causing a structural rejection.

<div class="pk-model-meta" hidden drug="Estradiol" model-id="Estradiol_Ly2025_reference" status="rejected" stale="false" population="female zebrafish" measured-compound="Estradiol" parameterization="apparent" topology="1C"></div>

## Citation
Ly TK, Chadili E, Palluel O, Le Menach K, Budzinski H, Tebby C et al. PBK-TD modelling of the gonadotropic axis: Case study with two azole fungicides in female zebrafish. Aquatic toxicology (Amsterdam, Netherlands) 283:107337 (2025).
  ·  DOI: [10.1016/j.aquatox.2025.107337](https://doi.org/10.1016/j.aquatox.2025.107337)

## Population and dosing

**Population:** female zebrafish · condition experimental exposure.

**Dosing:** 2.2, 23.3, 238.9 µg/L, other, multiple.

**Dosed compound ≠ measured compound:** dosed Imazalil, measured Estradiol.

> **Species: fish.** This record comes from an animal study (fish), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ke_E2 | kel | 21.5 | 1/d |
| Km_19a | Km | 0.52 | pmol/mL |
| Vmax_19a | Vmax | 21.5 | pmol/d/mL |
| kd_E2ER_liver | CLm/F | 43.8 | 1/d |
| k1_E2ER_brain | Q | 2.72 | mL/pmol/d |
| PC_fat_E2 | Kp | 1.53 | No unit |
| k1_TSBP_ven | equation variable | 78.6 | mL/pmol/d |
| PC_liver_VTG | V | 7.1E-3 | No unit |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Estradiol clearance parameters have units (pmol/mL) that do not match their mass-based PK dimensions, causing a structural rejection.**

The partition coefficient and elimination rate constant are assigned units of pmol/mL and 1/d, respectively, which are dimensionally incompatible with mass-based clearances. The review identified a dimension mismatch for parameters with units of pmol/d/mL and 1/d that cannot convert to standard mass units. The record was rejected because the reported units for these kinetic parameters could not be converted to SI dimensions. Extracted — estradiol: kel 21.5 1/d, Km 0.52 pmol/mL, Vmax 21.5 pmol/d/mL, CLm/F 43.8 1/d, Q 2.72 mL/pmol/d, Kp 1.53 No unit, V 0.0071 No unit.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ke_E2 | `Q47` · kel | 21.5 | 1/d | 0.0002488 | 1/s | 1/d | llm (0.6) | Ly_2025_table_2:row1:col5 |
| Km_19a | `Q1` · Km | 0.52 | pmol/mL |  |  | pM/ml | llm (0.6) | Ly_2025_table_2:row2:col5 |
| Vmax_19a | `Q66` · Vmax | 21.5 | pmol/d/mL |  |  | pM/(d·ml) | llm (0.6) | Ly_2025_table_2:row3:col5 |
| kd_E2ER_liver | `Q351` · CLm/F | 43.8 | 1/d |  |  | 1/d | llm (0.6) | Ly_2025_table_2:row7:col5 |
| k1_E2ER_brain | `Q30` · Q | 2.72 | mL/pmol/d |  |  | ml/(d·pM) | llm (0.6) | Ly_2025_table_2:row10:col5 |
| PC_fat_E2 | `Q410` · Kp | 1.53 | No unit |  |  | no·unit | llm (0.6) | Ly_2025_table_2:row12:col5 |
| k1_TSBP_ven | `Q900` · equation variable | 78.6 | mL/pmol/d |  |  | ml/(d·pM) | llm (0.6) | Ly_2025_table_2:row29:col5 |
| PC_liver_VTG | `Q61` · V | 7.1E-3 | No unit |  |  | no·unit | llm (0.6) | Ly_2025_table_2:row43:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Km_19a' → Q1 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Vmax_19a' → Q66 (unit '[substance] / [time] / [length] ** 3' vs ontology '[mass] / [time]') — route to review
- dropped unlinked row (NIL): 'k1_E2SBP_ven' — extend the ontology if this is a real PK parameter (source ['Ly_2025_table_2:row4:col5'])
- dropped unlinked row (NIL): 'kd_E2SBP_ven' — extend the ontology if this is a real PK parameter (source ['Ly_2025_table_2:row5:col5'])
- dropped unlinked row (NIL): 'k1_E2ER_liver' — extend the ontology if this is a real PK parameter (source ['Ly_2025_table_2:row6:col5'])
- unit_dimension_mismatch: 'kd_E2ER_liver' → Q351 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'k1_E2ER_gonads' — extend the ontology if this is a real PK parameter (source ['Ly_2025_table_2:row8:col5'])
- dropped duplicate Q47 ('kd_E2ER_gonads', value '60.9') — already have one for this compound
- unit_dimension_mismatch: 'k1_E2ER_brain' → Q30 (unit '[length] ** 3 / [substance] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'kd_E2ER_brain' — extend the ontology if this is a real PK parameter (source ['Ly_2025_table_2:row11:col5'])
- unit_dimension_unknown: 'No unit' (Kp)
- dropped duplicate Q410 ('PC_gonads_E2', value '0.11') — already have one for this compound
- dropped unlinked row (NIL): 'PC_kidney_E2' — extend the ontology if this is a real PK parameter (source ['Ly_2025_table_2:row14:col5'])
- dropped unlinked row (NIL): 'PC_pp_E2' — extend the ontology if this is a real PK parameter (source ['Ly_2025_table_2:row15:col5'])
- dropped duplicate Q410 ('PC_liver_E2', value '1.49') — already have one for this compound
- dropped unlinked row (NIL): 'PC_skin_E2' — extend the ontology if this is a real PK parameter (source ['Ly_2025_table_2:row17:col5'])
- dropped unlinked row (NIL): 'PC_GIT_E2' — extend the ontology if this is a real PK parameter (source ['Ly_2025_table_2:row18:col5'])
- dropped unlinked row (NIL): 'PC_rp_E2' — extend the ontology if this is a real PK parameter (source ['Ly_2025_table_2:row19:col5'])
- dropped unlinked row (NIL): 'PC_brain_E2' — extend the ontology if this is a real PK parameter (source ['Ly_2025_table_2:row20:col5'])
- unit_dimension_mismatch: 'Km_11b' → Q1 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('Km_11b', value '50.0') — already have one for this compound
- unit_dimension_mismatch: 'Vmax_11b' → Q66 (unit '[substance] / [time] / [length] ** 3' vs ontology '[mass] / [time]') — route to review
- dropped duplicate Q66 ('Vmax_11b', value '3.4E-1') — already have one for this compound
- dropped duplicate Q47 ('ke_KT', value '1.32') — already have one for this compound
- unit_dimension_mismatch: 'Km_chol_gonads' → Q1 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('Km_chol_gonads', value '5.37') — already have one for this compound
- dropped unlinked row (NIL): 'Vmax_chol_gonads' — extend the ontology if this is a real PK parameter (source ['Ly_2025_table_2:row27:col5'])
- dropped duplicate Q410 ('Ratio_chol_LR', value '1.83') — already have one for this compound
- dropped PD-category row 'kd_TSBP_ven' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ly_2025_table_2:row30:col5'])
- dropped duplicate Q47 ('ke_T', value '0.004') — already have one for this compound
- dropped unlinked row (NIL): 'nT' — extend the ontology if this is a real PK parameter (source ['Ly_2025_table_2:row32:col5'])
- dropped unlinked row (NIL): 'P_LH_brain' — extend the ontology if this is a real PK parameter (source ['Ly_2025_table_2:row34:col5'])
- dropped unlinked row (NIL): 'k1_LHLR_gonads' — extend the ontology if this is a real PK parameter (source ['Ly_2025_table_2:row35:col5'])
- dropped unlinked row (NIL): 'kd_LHLR_gonads' — extend the ontology if this is a real PK parameter (source ['Ly_2025_table_2:row36:col5'])
- dropped duplicate Q47 ('ke_LH', value '2.4') — already have one for this compound
- unit_dimension_mismatch: 'Ki_E2ER' → Q410 (unit '[substance] / [length] ** 3' vs ontology 'dimensionless') — route to review
- dropped duplicate Q410 ('Ki_E2ER', value '2.6E-2') — already have one for this compound
- unit_dimension_mismatch: 'Km_VTG_liver' → Q1 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('Km_VTG_liver', value '3.4E-4') — already have one for this compound
- unit_dimension_mismatch: 'Vmax_VTG_liver' → Q66 (unit '[substance] / [time] / [length] ** 3' vs ontology '[mass] / [time]') — route to review
- dropped duplicate Q66 ('Vmax_VTG_liver', value '860.2') — already have one for this compound
- dropped unlinked row (NIL): 'nVTG' — extend the ontology if this is a real PK parameter (source ['Ly_2025_table_2:row42:col5'])
- unit_dimension_unknown: 'No unit' (V)
- dropped duplicate Q410 ('PC_gonads_VTG', value '9.8E-2') — already have one for this compound
- dropped duplicate Q47 ('ke_egg', value '0.2') — already have one for this compound
- implicit units: 'PC_liver_VTG' — the LLM proposed 'No unit', whose dimension does not fit Q61; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Estradiol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Ly_2025_table_2: unbound_uncertainty
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | pmol/mL ([substance] / [length] ** 3) | ['Ly_2025_table_2:row2:col5'] |
| C5_dimension_Q30 | fail | [length] ** 3 / [time] | mL/pmol/d ([length] ** 3 / [substance] / [time]) | ['Ly_2025_table_2:row10:col5'] |
| C5_dimension_Q351 | fail | [length] ** 3 / [time] | 1/d (1 / [time]) | ['Ly_2025_table_2:row7:col5'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Ly_2025_table_2:row1:col5'] |
| C5_dimension_Q66 | fail | [mass] / [time] | pmol/d/mL ([substance] / [time] / [length] ** 3) | ['Ly_2025_table_2:row3:col5'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | No unit | ['Ly_2025_table_2:row43:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bestradiol%5D%20Estradiol_Ly2025_reference&body=Drug%3A%20estradiol%0ARecord%3A%20Estradiol_Ly2025_reference%0APaper%3A%20Ly_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_estradiol/Estradiol_Ly2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 07:37 UTC</sub>
