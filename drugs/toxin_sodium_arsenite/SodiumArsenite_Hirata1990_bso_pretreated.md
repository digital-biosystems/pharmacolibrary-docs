<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Sodium arsenite&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_arsenite/&quot;},{&quot;label&quot;:&quot;Hirata_1990 \u00b7 bso_pretreated&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumArsenite_Hershberger2026_reference&quot;,&quot;label&quot;:&quot;Hershberger_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_arsenite/SodiumArsenite_Hershberger2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumArsenite_Leffler1984_reference&quot;,&quot;label&quot;:&quot;Leffler_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_arsenite/SodiumArsenite_Leffler1984_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sodium arsenite — `SodiumArsenite_Hirata1990_bso_pretreated`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q1 unit hr⁻¹ (1 / [time]) vs [mass] / [length] ** 3.

<div class="pk-model-meta" hidden drug="Sodium arsenite" model-id="SodiumArsenite_Hirata1990_bso_pretreated" status="rejected" stale="false" population="Male Syrian golden hamsters" measured-compound="Inorganic arsenic" parameterization="mechanistic" topology="retention"></div>

## Citation
Hirata M, Tanaka A, Hisanaga A, Ishinishi N. Effects of glutathione depletion on the acute nephrotoxic potential of arsenite and on arsenic metabolism in hamsters. Toxicology and applied pharmacology 106(3):469–481 (1990).
  ·  DOI: [10.1016/0041-008x(90)90342-r](https://doi.org/10.1016/0041-008x(90)90342-r)

## Population and dosing

**Population:** Male Syrian golden hamsters · condition acute oral exposure · age group adult · n = 12.

**Dosing:** 350 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed Sodium arsenite, measured Inorganic arsenic.

> **Species: other animal.** This record comes from an animal study (other animal), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| A (μg As/ml) | equation variable | 0.70 | μg As/ml |
| α (hr⁻¹) | λ1 | 0.16 | hr⁻¹ |
| β (hr⁻¹) | kel | 0.012 | hr⁻¹ |
| t½(α) (hr) | t1/2α | 4.49 | hr |
| t½(β) (hr) | t1/2β | 58.0 | hr |
| k₁₂ (hr⁻¹) | k12 | 0.057 | hr⁻¹ |
| k₂₁ (hr⁻¹) | k21 | 0.089 | hr⁻¹ |
| km (hr⁻¹) | Km | 0.004 | hr⁻¹ |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q1 unit hr⁻¹ (1 / [time]) vs [mass] / [length] ** 3.**

A reported unit could not be converted (equation variable and Km), so that value has no SI equivalent. Extracted — sodium arsenite: λ1 0.16 hr⁻¹, kel 0.012 hr⁻¹, t1/2α 4.49 hr, t1/2β 58 hr, k12 0.057 hr⁻¹, k21 0.089 hr⁻¹, Km 0.004 hr⁻¹.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| A (μg As/ml) | `Q900` · equation variable | 0.70 | μg As/ml |  |  | (µg·as)/ml | llm (0.6) | Hirata_1990_table_3:row0:col2 |
| α (hr⁻¹) | `Q67` · λ1 | 0.16 | hr⁻¹ | 4.444e-05 | 1/s | 1/h | exact (1) | Hirata_1990_table_3:row2:col2 |
| β (hr⁻¹) | `Q47` · kel | 0.012 | hr⁻¹ | 3.333e-06 | 1/s | 1/h | exact (1) | Hirata_1990_table_3:row3:col2 |
| t½(α) (hr) | `Q59` · t1/2α | 4.49 | hr | 1.616e+04 | s | h | half_life_rule (0.95) | Hirata_1990_table_3:row4:col2 |
| t½(β) (hr) | `Q60` · t1/2β | 58.0 | hr | 2.088e+05 | s | h | half_life_rule (0.95) | Hirata_1990_table_3:row5:col2 |
| k₁₂ (hr⁻¹) | `Q301` · k12 | 0.057 | hr⁻¹ | 1.583e-05 | 1/s | 1/h | exact (1) | Hirata_1990_table_3:row6:col2 |
| k₂₁ (hr⁻¹) | `Q302` · k21 | 0.089 | hr⁻¹ | 2.472e-05 | 1/s | 1/h | exact (1) | Hirata_1990_table_3:row7:col2 |
| km (hr⁻¹) | `Q1` · Km | 0.004 | hr⁻¹ |  |  | 1/h | exact (1) | Hirata_1990_table_3:row9:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q900 ('B (μg As/ml)', value '0.82') — already have one for this compound
- dropped duplicate Q47 ('ke b (hr⁻¹)', value '0.016') — already have one for this compound
- unit_dimension_mismatch: 'km (hr⁻¹)' → Q1 (unit '1 / [time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('km/ke', value '0.27') — already have one for this compound
- dropped unlinked row (NIL): 'k₂₁/k₁₂' — extend the ontology if this is a real PK parameter (source ['Hirata_1990_table_3:row11:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Inorganic arsenic
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 4 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'bso-pretreated' subgroup of Hirata_1990 (paper reports 2 populations: bso-pretreated, control)
- review gap-fill skipped: this record measures 'Inorganic arsenic', not sodium_arsenite — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | hr⁻¹ (1 / [time]) | ['Hirata_1990_table_3:row9:col2'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Hirata_1990_table_3:row6:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Hirata_1990_table_3:row7:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Hirata_1990_table_3:row3:col2'] |
| C5_dimension_Q59 | pass | [time] |  | ['Hirata_1990_table_3:row4:col2'] |
| C5_dimension_Q60 | pass | [time] |  | ['Hirata_1990_table_3:row5:col2'] |
| C5_dimension_Q67 | pass | 1 / [time] |  | ['Hirata_1990_table_3:row2:col2'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_arsenite%5D%20SodiumArsenite_Hirata1990_bso_pretreated&body=Drug%3A%20sodium_arsenite%0ARecord%3A%20SodiumArsenite_Hirata1990_bso_pretreated%0APaper%3A%20Hirata_1990%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sodium_arsenite/SodiumArsenite_Hirata1990_bso_pretreated%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-08 23:37 UTC</sub>
