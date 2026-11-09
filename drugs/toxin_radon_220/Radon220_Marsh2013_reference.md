<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Radon-220&quot;,&quot;href&quot;:&quot;drugs/toxin_radon_220/&quot;},{&quot;label&quot;:&quot;Marsh_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Radon220_Hofmann1990_grillmaier_and_muth&quot;,&quot;label&quot;:&quot;Hofmann_1990_grillmaier_and_muth&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_radon_220/Radon220_Hofmann1990_grillmaier_and_muth.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Radon220_Hofmann1990_this_study&quot;,&quot;label&quot;:&quot;Hofmann_1990_this_study&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_radon_220/Radon220_Hofmann1990_this_study.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Radon-220 — `Radon220_Marsh2013_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.80).">human + animal</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="Radon-220" model-id="Radon220_Marsh2013_reference" status="rejected" stale="false" population="adult male volunteers and laboratory animals" measured-compound="Lead-212" parameterization="apparent" topology="general_linear"></div>

## Citation
Marsh JW, Bailey MR. A review of lung-to-blood absorption rates for radon progeny. Radiation protection dosimetry 157(4):499–514 (2013).
  ·  DOI: [10.1093/rpd/nct179](https://doi.org/10.1093/rpd/nct179)

## Population and dosing

**Population:** adult male volunteers and laboratory animals · condition occupational exposure · age group adult.

**Dosed compound ≠ measured compound:** dosed Radon-220 progeny, measured Lead-212.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.80).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Bound fraction, fb | Fab | 0 | fb |
| half-time | t1/2z | 12 | h |
| 214 Pb effective clearance rate from the head | CLm/F | 6.0 | s 21 |
| slow clearance phase with a half-time | t1/2β | 10 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.80).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

A reported unit could not be converted (Fab and CLm/F), so that value has no SI equivalent. Extracted — radon 220: Fab 0 fb; Lead-212: t1/2z 12 h, CLm/F 6 s 21, t1/2β 10 h.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Bound fraction, fb | `Q40` · Fab | 0 | fb |  |  | fb | llm (0.6) | Marsh_2013_table_2:row3:col1, Marsh_2013_table_2:row3:col2 |
| half-time | `Q57` · t1/2z | 12 | h | 4.32e+04 | s | h | toxin_unit_relink (0.85) | Marsh_2013:other_prose |
| 214 Pb effective clearance rate from the head | `Q351` · CLm/F | 6.0 | s 21 |  |  | s 21 | boundary (0.8) | Marsh_2013:other_prose |
| slow clearance phase with a half-time | `Q60` · t1/2β | 10 | h | 3.6e+04 | s | h | toxin_unit_relink (0.85) | Marsh_2013:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- substance matrix Marsh_2013_table_4 ('Table 4 . Estimated HRTM absorption parameter values for unattached and attached radon pro'): no row names this substance — its 5 row(s) (Bianco et al.(14), James et al.(9), Greenhalgh et al.(13), Butterweck et al.(12), Booker et al.(6), Hurch et al.(8), Hurch and Mercer(7)g and Hurch et al.(8)) are other substances' values; none taken
- dropped unlinked row (NIL): 'Rapid dissolution fraction, fr' — extend the ontology if this is a real PK parameter (source ['Marsh_2013_table_2:row0:col1', 'Marsh_2013_table_2:row0:col2'])
- salvaged Q57 ('half-time'=12) from results prose — parameter table was unreadable
- salvaged Q22 ('214 Pb effective clearance rate from the head'=6.0) from results prose — parameter table was unreadable
- salvaged Q60 ('slow clearance phase with a half-time'=10) from results prose — parameter table was unreadable
- implicit units: '214 Pb effective clearance rate from the head' — the LLM proposed '1/h', whose dimension does not fit Q22; left unset
- metabolite lead-212: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Lead-212
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- template fit: none — other model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=other; 2/2 row label(s) assigned, 0 linked by role
- molar mass: no plausible PubChem entry for 'Radon-220 progeny' ('no full name in the paper') — left in mass units
- molar mass: PubChem entry choice failed (JSONDecodeError)
- molar mass: none of 1 PubChem candidate(s) is 'Lead-212' (LLM) — left in mass units
- molar mass: none found for 'Radon-220 progeny' — its concentrations stay mass-only
- molar mass: none found for 'Lead-212' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'Lead-212', not radon_220 — the review values are the parent's

**Extraction notes:**
- table Marsh_2013_table_4: unparsed_numeric_cell
- table Marsh_2013_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (4 record(s))
- LLM selected parameter table(s) 2, 4
- dropped sensitivity-analysis table(s) 3 from the LLM selection — perturbations of a model, not a model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_unit_missing_Q351 | fail | [length] ** 3 / [time] | s 21 | ['Marsh_2013:other_prose'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bradon_220%5D%20Radon220_Marsh2013_reference&body=Drug%3A%20radon_220%0ARecord%3A%20Radon220_Marsh2013_reference%0APaper%3A%20Marsh_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_radon_220/Radon220_Marsh2013_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 12:12 UTC</sub>
