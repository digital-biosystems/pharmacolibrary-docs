<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Plutonium&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium/&quot;},{&quot;label&quot;:&quot;Avtandilashvili_2013 \u00b7 case_0202&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Plutonium_Dumit2025_reference&quot;,&quot;label&quot;:&quot;Dumit_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium/Plutonium_Dumit2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Plutonium — `Plutonium_Avtandilashvili2013_case_0202`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper); c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q307 unit d-1 (1 / [time]) vs [mass] / [time] (+1 more).

<div class="pk-model-meta" hidden drug="Plutonium" model-id="Plutonium_Avtandilashvili2013_case_0202" status="rejected" stale="false" population="two refractory PuO2 inhalation cases (USTUR tissue donors 0202 and 0407)" measured-compound="Plutonium" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Avtandilashvili M, Brey R, Birchall A. Application of Bayesian inference to the bioassay data from long-term follow-up of two refractory PuO2 inhalation cases. Health physics 104(4):394–404 (2013).
  ·  DOI: [10.1097/HP.0b013e31827fd5cf](https://doi.org/10.1097/HP.0b013e31827fd5cf)

## Population and dosing

**Population:** two refractory PuO2 inhalation cases (USTUR tissue donors 0202 and 0407) · condition occupational exposure · age group adult · n = 2.

**Dosed compound ≠ measured compound:** dosed PuO2, measured Plutonium.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| I → LNH (d-1) | R1 | 2.94 | d-1 |
| Absorption to blood Parameter: Rapidly absorbed fraction, f1 | Fab | 1.32 |  |
| Rapid absorption rate, s1 (d-1) | kabs | 4.33 | d-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper); c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q307 unit d-1 (1 / [time]) vs [mass] / [time] (+1 more).**

A reported unit could not be converted (R1), so that value has no SI equivalent. None of the extracted parameters is plutonium's own; they describe PuO2. Extracted — PuO2: R1 2.94 d-1, Fab 1.32, kabs 4.33 d-1.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| I → LNH (d-1) | `Q307` · R1 | 2.94 | d-1 |  |  | 1/d | llm (0.6) | Avtandilashvili_2013_table_3:row2:col4 |
| Absorption to blood Parameter: Rapidly absorbed fraction, f1 | `Q40` · Fab | 1.32 |  | 0.0132 |  |  | llm_confirmed (0.6) | Avtandilashvili_2013_table_3:row6:col4 |
| Rapid absorption rate, s1 (d-1) | `Q49` · kabs | 4.33 | d-1 | 5.012e-05 | 1/s | 1/d | llm_confirmed (0.6) | Avtandilashvili_2013_table_3:row7:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'case 0202' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Particle transport Parameter: Fraction deposited in interstitium' — extend the ontology if this is a real PK parameter (source ['Avtandilashvili_2013_table_3:row0:col4'])
- dropped unlinked row (NIL): 'A → bbL (d-1)' — extend the ontology if this is a real PK parameter (source ['Avtandilashvili_2013_table_3:row1:col4'])
- unit_dimension_mismatch: 'I → LNH (d-1)' → Q307 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped unlinked row (NIL): 'Total eff. dose' — extend the ontology if this is a real PK parameter (source ['Avtandilashvili_2013_table_3:row4:col4', 'Avtandilashvili_2013_table_3:row10:col4'])
- dropped unlinked row (NIL): 'Weighted equiv. lung dose' — extend the ontology if this is a real PK parameter (source ['Avtandilashvili_2013_table_3:row5:col4', 'Avtandilashvili_2013_table_3:row11:col4'])
- 'Absorption to blood Parameter: Rapidly absorbed fraction, f1' → Q40: printed without a unit and above 1 — read as a percentage
- dropped duplicate Q49 ('Slow absorption rate, s2 (d-1)', value '1.22') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Plutonium
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- status held at "Needs review" — not promoted
- population split: 'case 0202' subgroup of Avtandilashvili_2013 (paper reports 2 populations: case 0202, case 0407)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Avtandilashvili_2013_table_4: unparsed_numeric_cell
- table Avtandilashvili_2013_table_3: ragged_grid
- companion parameter table 3 transcribed (60 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q307 | fail | [mass] / [time] | d-1 (1 / [time]) | ['Avtandilashvili_2013_table_3:row2:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Avtandilashvili_2013_table_3:row7:col4'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bplutonium%5D%20Plutonium_Avtandilashvili2013_case_0202&body=Drug%3A%20plutonium%0ARecord%3A%20Plutonium_Avtandilashvili2013_case_0202%0APaper%3A%20Avtandilashvili_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_plutonium/Plutonium_Avtandilashvili2013_case_0202%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 08:04 UTC</sub>
