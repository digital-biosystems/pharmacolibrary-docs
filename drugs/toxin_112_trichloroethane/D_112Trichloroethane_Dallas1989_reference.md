<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;1,1,2-Trichloroethane&quot;,&quot;href&quot;:&quot;drugs/toxin_112_trichloroethane/&quot;},{&quot;label&quot;:&quot;Dallas_1989 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# 1,1,2-Trichloroethane — `D_112Trichloroethane_Dallas1989_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Cardiac output, liver flow, and muscle flow for 1,1,1-trichloroethane have invalid units and implausible magnitudes.

<div class="pk-model-meta" hidden drug="1,1,2-Trichloroethane" model-id="D_112Trichloroethane_Dallas1989_reference" status="rejected" stale="false" population="male Sprague-Dawley rats" measured-compound="1,1,1-Trichloroethane" parameterization="mechanistic" topology="2C"></div>

## Citation
Dallas CE, Ramanathan R, Muralidhara S, Gallo JM, Bruckner JV. The uptake and elimination of 1,1,1-trichloroethane during and following inhalation exposures in rats. Toxicology and applied pharmacology 98(3):385–397 (1989).
  ·  DOI: [10.1016/0041-008x(89)90168-3](https://doi.org/10.1016/0041-008x(89)90168-3)

## Population and dosing

**Population:** male Sprague-Dawley rats · condition inhalation exposure · age group adult · n = 12.

**Dosing:** 50, 500 ppm, inhaled, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cardiac output, Qb | Qb | 106.4 | Qb |
| Liver, Qh | QH | 39.8 | Qh |
| Muscle, Qm | Km | 12.8 | Qm |
| Richly perfused, QR | Q | 44.4 | L/h |
| Blood, Vs | V1 | 25.4 | ml |
| Fat, Vf | V | 30.5 | ml |
| Lung:air, Ra | blood_air_partition | 8.6 | Ra |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Cardiac output, liver flow, and muscle flow for 1,1,1-trichloroethane have invalid units and implausible magnitudes.**

The cardiac output, liver blood flow, and muscle flow parameters are listed with non-physical units that conflict with their flow dimensions. Consequently, the model was rejected because these structural parameters fall outside physiological windows, indicating extraction errors. One reported unit could not be converted to standard SI units, leaving that parameter without a valid physical value. Extracted — 1,1,1-Trichloroethane: Qb 106 Qb, QH 39.8 Qh, Km 12.8 Qm, Q 44.4 L/h, V1 25.4 ml, V 30.5 ml, blood_air_partition 8.6 Ra.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cardiac output, Qb | `Q54` · Qb | 106.4 | Qb |  |  | qb | llm_confirmed (0.6) | Dallas_1989_table_1:row5:col1 |
| Liver, Qh | `Q369` · QH | 39.8 | Qh |  |  | qh | llm_confirmed (0.6) | Dallas_1989_table_1:row7:col1 |
| Muscle, Qm | `Q1` · Km | 12.8 | Qm |  |  | qm | llm (0.6) | Dallas_1989_table_1:row8:col1 |
| Richly perfused, QR | `Q30` · Q | 44.4 | L/h | 1.233e-05 | m3/s | L/h | llm (0.6) | Dallas_1989_table_1:row9:col1 |
| Blood, Vs | `Q63` · V1 | 25.4 | ml | 2.54e-05 | m3 | ml | llm (0.6) | Dallas_1989_table_1:row11:col1 |
| Fat, Vf | `Q61` · V | 30.5 | ml | 3.05e-05 | m3 | ml | llm (0.6) | Dallas_1989_table_1:row12:col1 |
| Lung:air, Ra | `Q411` · blood_air_partition | 8.6 | Ra |  |  | ra | llm (0.6) | Dallas_1989_table_1:row19:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Cardiac output, Qb' → Q54 (unit '[length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Fat, Qf' — extend the ontology if this is a real PK parameter (source ['Dallas_1989_table_1:row6:col1'])
- unit_dimension_mismatch: 'Liver, Qh' → Q369 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'Muscle, Qm' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_unknown: 'QR' (Q)
- dropped duplicate Q61 ('Liver, Vh', value '13.6') — already have one for this compound
- dropped duplicate Q61 ('Muscle, Vm', value '248.0') — already have one for this compound
- dropped duplicate Q61 ('Richly perfused, VR', value '17.0') — already have one for this compound
- dropped unlinked row (NIL): 'Alveolar, Va' — extend the ontology if this is a real PK parameter (source ['Dallas_1989_table_1:row16:col1'])
- dropped duplicate Q63 ('Lung, Vt', value '3.97') — already have one for this compound
- unit_dimension_mismatch: 'Lung:air, Ra' → Q411 (unit '[time]' vs ontology 'dimensionless') — route to review
- dropped unlinked row (NIL): 'Fat:blood, Rt' — extend the ontology if this is a real PK parameter (source ['Dallas_1989_table_1:row20:col1'])
- unit_dimension_mismatch: 'Liver:blood, Rh' → Q54 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q54 ('Liver:blood, Rh', value '1.49') — already have one for this compound
- dropped unlinked row (NIL): 'Lung:blood, Ri' — extend the ontology if this is a real PK parameter (source ['Dallas_1989_table_1:row22:col1'])
- dropped unlinked row (NIL): 'Muscle:blood, Rm' — extend the ontology if this is a real PK parameter (source ['Dallas_1989_table_1:row23:col1'])
- dropped unlinked row (NIL): 'Richly perfused:blood, Rr' — extend the ontology if this is a real PK parameter (source ['Dallas_1989_table_1:row24:col1'])
- dropped unlinked row (NIL): 'Lung:alveolar mass transfer coefficient, k' — extend the ontology if this is a real PK parameter (source ['Dallas_1989_table_1:row26:col1'])
- implicit units: 'Richly perfused, QR' → L/h (from the popPK convention: 'The parameter QR represents an apparent intercompartmental clearance (blood flow or perfusion rate) in a physiological P')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=1,1,1-Trichloroethane
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted

**Extraction notes:**
- table Dallas_1989_table_1: unparsed_numeric_cell
- LLM selected parameter table(s) 1
- toxin: the located table(s) gave no kinetic value — 13 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | Qm ([length]) | ['Dallas_1989_table_1:row8:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Dallas_1989_table_1:row9:col1'] |
| C5_dimension_Q369 | fail | [length] ** 3 / [time] | Qh ([time]) | ['Dallas_1989_table_1:row7:col1'] |
| C5_dimension_Q411 | fail | dimensionless | Ra ([time]) | ['Dallas_1989_table_1:row19:col1'] |
| C5_dimension_Q54 | fail | [length] ** 3 / [time] | Qb ([length] ** 2) | ['Dallas_1989_table_1:row5:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Dallas_1989_table_1:row12:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Dallas_1989_table_1:row11:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0305 L | ['Dallas_1989_table_1:row12:col1'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.0254 L | ['Dallas_1989_table_1:row11:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B112_trichloroethane%5D%20D_112Trichloroethane_Dallas1989_reference&body=Drug%3A%20112_trichloroethane%0ARecord%3A%20D_112Trichloroethane_Dallas1989_reference%0APaper%3A%20Dallas_1989%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_112_trichloroethane/D_112Trichloroethane_Dallas1989_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-08 22:48 UTC</sub>
