<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Isoniazid&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/&quot;},{&quot;label&quot;:&quot;Calderin_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Isoniazid_Courtney2026_reference&quot;,&quot;label&quot;:&quot;Courtney_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Courtney2026_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Amaeze2023_reference&quot;,&quot;label&quot;:&quot;Amaeze_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Amaeze2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Yunivita2024_acetylator_phenotypea_non_slow&quot;,&quot;label&quot;:&quot;Yunivita_2024_acetylator_phenotypea_non_slow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Yunivita2024_acetylator_phenotypea_non_slow.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Yunivita2024_acetylator_phenotypea_slow&quot;,&quot;label&quot;:&quot;Yunivita_2024_acetylator_phenotypea_slow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Yunivita2024_acetylator_phenotypea_slow.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Isoniazid — `Isoniazid_Calderin2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record is rejected because the absorption transit compartment count lacks a valid dimensionless value, leaving the absorption model parameter incomplete.

<div class="pk-model-meta" hidden drug="Isoniazid" model-id="Isoniazid_Calderin2025_reference" status="rejected" stale="false" population="adults with tuberculous meningitis" measured-compound="Isoniazid" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Calderin JM, Wasserman S, Resendiz-Galvan JE, Abdelgawad N, Davis A, Stek C et al. Population pharmacokinetics of pyrazinamide and isoniazid in plasma and cerebrospinal fluid from South African adults with tuberculous meningitis. Antimicrobial agents and chemotherapy 69(8):e0009925 (2025).
  ·  DOI: [10.1128/aac.00099-25](https://doi.org/10.1128/aac.00099-25)

## Population and dosing

**Population:** adults with tuberculous meningitis · condition tuberculous meningitis · age group adult · n = 49.

**Dosing:** 350 mg, oral, multiple.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Clearance (L/h)b | CL | 4.19 | L/h |
| Central volume of distribution (L)b | V1 | 45.0 | L |
| Intercompartmental clearance (L/h)b | Q | 5.02 | L/h |
| Peripheral volume of distribution (L)b | V2 | 22.3 | L |
| Bioavailability (.) | Fab | 1 | units |
| Mean absorption transit time (h) | MTT | 0.291 | h |
| Number of absorption transit compartments (.)d | n_transit | 4.25 | units |
| First-order absorption rate constant (h−1) | kabs | 2.5 | h−1 |
| Hepatic blood flow (L/h)b,e | QH | 76.3 | L/h |
| CSF-to-plasma pseudo-partition coefficient, PPCCSF-Plasma (.) | Kp | 1.05 | units |
| Plasma-to-CSF equilibrium half-life, HLPlasma-CSF (h) | t1/2z | 0.66 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record is rejected because the absorption transit compartment count lacks a valid dimensionless value, leaving the absorption model parameter incomplete.**

The number of absorption transit compartments is assigned a non-physical unit (luminosity per square meter) that cannot be converted to a dimensionless count. Consequently, no valid value for the compartment number could be established, rendering the absorption model structure undefined. Extracted — isoniazid: CL 4.19 L/h, V1 45 L, Q 5.02 L/h, V2 22.3 L, Fab 1 units, MTT 0.291 h, n_transit 4.25 units, kabs 2.5 h−1, … (+3).

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Clearance (L/h)b | `Q22` · CL | 4.19 | L/h | 1.164e-06 | m3/s | l/h | llm_confirmed (0.6) | T2:row2:col1 |
| Central volume of distribution (L)b | `Q63` · V1 | 45.0 | L | 0.045 | m3 | l | boundary_compartment (0.9) | T2:row6:col1, T2:row6:col2 |
| Intercompartmental clearance (L/h)b | `Q30` · Q | 5.02 | L/h | 1.394e-06 | m3/s | l/h | llm_confirmed (0.6) | T2:row7:col2 |
| Peripheral volume of distribution (L)b | `Q64` · V2 | 22.3 | L | 0.0223 | m3 | l | boundary_compartment (0.9) | T2:row8:col2 |
| Bioavailability (.) | `Q40` · Fab | 1 | units |  |  |  | exact (1) | T2:row9:col1, T2:row9:col2 |
| Mean absorption transit time (h) | `Q81` · MTT | 0.291 | h | 1048 | s | h | llm_corrected (0.6) | T2:row10:col1, T2:row10:col2 |
| Number of absorption transit compartments (.)d | `Q311` · n_transit | 4.25 | units |  |  | units | llm_corrected (0.6) | T2:row11:col1, T2:row11:col2 |
| First-order absorption rate constant (h−1) | `Q49` · kabs | 2.5 | h−1 | 0.0006944 | 1/s | 1/h | llm_confirmed (0.6) | T2:row12:col1, T2:row12:col2 |
| Hepatic blood flow (L/h)b,e | `Q369` · QH | 76.3 | L/h | 2.119e-05 | m3/s | l/h | llm_confirmed (0.6) | T2:row13:col2 |
| CSF-to-plasma pseudo-partition coefficient, PPCCSF-Plasma (.) | `Q410` · Kp | 1.05 | units |  |  | units | llm_confirmed (0.6) | T2:row22:col1, T2:row22:col2 |
| Plasma-to-CSF equilibrium half-life, HLPlasma-CSF (h) | `Q57` · t1/2z | 0.66 | h | 2376 | s | h | llm (0.6) | T2:row23:col1, T2:row23:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Clearance (L/h)b'; source reconciliation required
- table representations disagree for 'Slow acetylator (L/h)b'; source reconciliation required
- table representations disagree for 'Intermediate acetylator (L/h)b'; source reconciliation required
- table representations disagree for 'Rapid acetylator (L/h)b'; source reconciliation required
- table representations disagree for 'Central volume of distribution (L)b'; source reconciliation required
- table representations disagree for 'Intercompartmental clearance (L/h)b'; source reconciliation required
- table representations disagree for 'Peripheral volume of distribution (L)b'; source reconciliation required
- table representations disagree for 'Bioavailability (.)'; source reconciliation required
- table representations disagree for 'Mean absorption transit time (h)'; source reconciliation required
- table representations disagree for 'Number of absorption transit compartments (.)d'; source reconciliation required
- table representations disagree for 'First-order absorption rate constant (h−1)'; source reconciliation required
- table representations disagree for 'Hepatic blood flow (L/h)b,e'; source reconciliation required
- table representations disagree for 'BOV scaling factor for unobserved dose (fold change)'; source reconciliation required
- table representations disagree for 'Change in clearance on day 28 (%)'; source reconciliation required
- table representations disagree for 'Between-subject variability in clearance (%)'; source reconciliation required
- table representations disagree for 'Between occasion variability in bioavailability (%)'; source reconciliation required
- table representations disagree for 'Between occasion variability in mean absorption transit time (%)'; source reconciliation required
- table representations disagree for 'Between occasion variability in absorption rate constant (%)'; source reconciliation required
- table representations disagree for 'Proportional error for plasma (%)'; source reconciliation required
- table representations disagree for 'Additive error for plasma (mg/L)c'; source reconciliation required
- table representations disagree for 'CSF-to-plasma pseudo-partition coefficient, PPCCSF-Plasma (.)'; source reconciliation required
- table representations disagree for 'Plasma-to-CSF equilibrium half-life, HLPlasma-CSF (h)'; source reconciliation required
- table representations disagree for 'Proportional error for CSF (%)'; source reconciliation required
- table representations disagree for 'Additive error for CSF (mg/L)c'; source reconciliation required
- dropped unlinked row (NIL): 'Slow acetylator (L/h)b' — extend the ontology if this is a real PK parameter (source ['T2:row3:col2'])
- dropped unlinked row (NIL): 'Intermediate acetylator (L/h)b' — extend the ontology if this is a real PK parameter (source ['T2:row4:col2'])
- dropped unlinked row (NIL): 'Rapid acetylator (L/h)b' — extend the ontology if this is a real PK parameter (source ['T2:row5:col2'])
- dropped 'Change in clearance on day 28 (%)' → Q22: unit '%' is a statistic (%, CV, RSE, shrinkage or fold), not a clearance — the row is a variability or a ratio, not the estimate
- routed 'Between-subject variability in clearance (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- unit_dimension_mismatch: 'CSF-to-plasma pseudo-partition coefficient, PPCCSF-Plasma (.)' → Q410 (unit '[luminosity] / [length] ** 2' vs ontology 'dimensionless') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Isoniazid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table T2: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T2:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T2:row7:col2'] |
| C5_dimension_Q369 | pass | [length] ** 3 / [time] |  | ['T2:row13:col2'] |
| C5_dimension_Q410 | fail | dimensionless | units ([luminosity] / [length] ** 2) | ['T2:row22:col1', 'T2:row22:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T2:row12:col1', 'T2:row12:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['T2:row23:col1', 'T2:row23:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T2:row6:col1', 'T2:row6:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T2:row8:col2'] |
| C5_dimension_Q81 | pass | [time] |  | ['T2:row10:col1', 'T2:row10:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.19 L/h | ['T2:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 45 L | ['T2:row6:col1', 'T2:row6:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 22.3 L | ['T2:row8:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bisoniazid%5D%20Isoniazid_Calderin2025_reference&body=Drug%3A%20isoniazid%0ARecord%3A%20Isoniazid_Calderin2025_reference%0APaper%3A%20Calderin_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_isoniazid/Isoniazid_Calderin2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 01:03 UTC</sub>
