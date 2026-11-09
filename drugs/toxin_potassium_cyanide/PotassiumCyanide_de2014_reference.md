<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Potassium cyanide&quot;,&quot;href&quot;:&quot;drugs/toxin_potassium_cyanide/&quot;},{&quot;label&quot;:&quot;de_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PotassiumCyanide_Thompson2012_reference&quot;,&quot;label&quot;:&quot;Thompson_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_potassium_cyanide/PotassiumCyanide_Thompson2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PotassiumCyanide_Sousa2003_goats&quot;,&quot;label&quot;:&quot;Sousa_2003_goats&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_potassium_cyanide/PotassiumCyanide_Sousa2003_goats.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PotassiumCyanide_Sousa2003_pigs&quot;,&quot;label&quot;:&quot;Sousa_2003_pigs&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_potassium_cyanide/PotassiumCyanide_Sousa2003_pigs.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PotassiumCyanide_Sousa2003_rats&quot;,&quot;label&quot;:&quot;Sousa_2003_rats&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_potassium_cyanide/PotassiumCyanide_Sousa2003_rats.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Potassium cyanide — `PotassiumCyanide_de2014_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q32 unit μmol/L ([substance] / [length] ** 3) vs [mass] / [length] ** 3; Q19 unit μmol/hour/L ([substance] / [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="Potassium cyanide" model-id="PotassiumCyanide_de2014_reference" status="rejected" stale="false" population="female Wistar rats" measured-compound="Thiocyanate" parameterization="apparent" topology="1C"></div>

## Citation
de Sousa AB, Górniak SL. Toxicokinetic aspects of thiocyanate after oral exposure to cyanide in female Wistar rats in different physiological states. Drug and chemical toxicology 37(1):63–68 (2014).
  ·  DOI: [10.3109/01480545.2013.806533](https://doi.org/10.3109/01480545.2013.806533)

## Population and dosing

**Population:** female Wistar rats · condition acute exposure · age group adult.

**Dosing:** 210 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed Potassium cyanide, measured Thiocyanate.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLm,norm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (μmol/L) | Cmax | 139.55 | μmol/L |
| Tmax (hours) | tmax | 6 | hours |
| AUC0-24h (μmol/hour/L) | AUCt | 2393.43 | μmol/hour/L |
| Kel (h-1) | kel | 0.030 | h-1 |
| Cl (L/kg/hour) | CLm,norm/F | 0.02 | L/kg/hour |
| t1/2β (hours) | t1/2β | 23.10 | hours |
| Vd (L/kg) | V | 0.64 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q32 unit μmol/L ([substance] / [length] ** 3) vs [mass] / [length] ** 3; Q19 unit μmol/hour/L ([substance] / [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3.**

A reported unit could not be converted (Cmax and AUCt), so that value has no SI equivalent. None of the extracted parameters is potassium cyanide's own; they describe Thiocyanate. Extracted — Thiocyanate: Cmax 140 μmol/L, tmax 6 hours, AUCt 2.39e+03 μmol/hour/L, kel 0.03 h-1, CLm,norm/F 0.02 L/kg/hour, t1/2β 23.1 hours, V 0.64 L/kg.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (μmol/L) | `Q32` · Cmax | 139.55 | μmol/L |  |  | (µM·ol)/l | exact (1) | de_2014_table_1:row1:col1, de_2014_table_1:row1:col2, de_2014_table_1:row1:col3 |
| Tmax (hours) | `Q56` · tmax | 6 | hours | 2.16e+04 | s | h | exact (1) | de_2014_table_1:row2:col1, de_2014_table_1:row2:col2, de_2014_table_1:row2:col3 |
| AUC0-24h (μmol/hour/L) | `Q19` · AUCt | 2393.43 | μmol/hour/L |  |  | (µM·ol)/(h·l) | llm (0.6) | de_2014_table_1:row3:col1, de_2014_table_1:row3:col2, de_2014_table_1:row3:col3 |
| Kel (h-1) | `Q47` · kel | 0.030 | h-1 | 8.333e-06 | 1/s | 1/h | exact (1) | de_2014_table_1:row4:col1, de_2014_table_1:row4:col2, de_2014_table_1:row4:col3 |
| Cl (L/kg/hour) | `Q375` · CLm,norm/F | 0.02 | L/kg/hour | 3.889e-07 | m3/s | l/(h·kg) | exact (1) | de_2014_table_1:row5:col1, de_2014_table_1:row5:col2, de_2014_table_1:row5:col3 |
| t1/2β (hours) | `Q60` · t1/2β | 23.10 | hours | 8.316e+04 | s | h | half_life_rule (0.95) | de_2014_table_1:row6:col1, de_2014_table_1:row6:col2, de_2014_table_1:row6:col3 |
| Vd (L/kg) | `Q61` · V | 0.64 | L/kg | 0.0448 | m3 | l/kg | exact (1) | de_2014_table_1:row7:col1, de_2014_table_1:row7:col2, de_2014_table_1:row7:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Cmax (μmol/L)' → Q32 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC0-24h (μmol/hour/L)' → Q19 (unit '[substance] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- metabolite thiocyanate: Q22→Q375 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided), normalised to a standard size
- metabolite volume: 'Vd (L/kg)' Q63→Q61 for Thiocyanate — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Thiocyanate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 7/7 row label(s) assigned, 9 linked by role
- review gap-fill skipped: this record measures 'Thiocyanate', not potassium_cyanide — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 1
- table de_2014_table_1: missing_label

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q19 | fail | [mass] * [time] / [length] ** 3 | μmol/hour/L ([substance] / [time] / [length] ** 3) | ['de_2014_table_1:row3:col1', 'de_2014_table_1:row3:col2', 'de_2014_table_1:row3:col3'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | μmol/L ([substance] / [length] ** 3) | ['de_2014_table_1:row1:col1', 'de_2014_table_1:row1:col2', 'de_2014_table_1:row1:col3'] |
| C5_dimension_Q375 | pass | [length] ** 3 / [time] |  | ['de_2014_table_1:row5:col1', 'de_2014_table_1:row5:col2', 'de_2014_table_1:row5:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['de_2014_table_1:row4:col1', 'de_2014_table_1:row4:col2', 'de_2014_table_1:row4:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['de_2014_table_1:row2:col1', 'de_2014_table_1:row2:col2', 'de_2014_table_1:row2:col3'] |
| C5_dimension_Q60 | pass | [time] |  | ['de_2014_table_1:row6:col1', 'de_2014_table_1:row6:col2', 'de_2014_table_1:row6:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['de_2014_table_1:row7:col1', 'de_2014_table_1:row7:col2', 'de_2014_table_1:row7:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 44.8 L | ['de_2014_table_1:row7:col1', 'de_2014_table_1:row7:col2', 'de_2014_table_1:row7:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpotassium_cyanide%5D%20PotassiumCyanide_de2014_reference&body=Drug%3A%20potassium_cyanide%0ARecord%3A%20PotassiumCyanide_de2014_reference%0APaper%3A%20de_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_potassium_cyanide/PotassiumCyanide_de2014_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 09:39 UTC</sub>
