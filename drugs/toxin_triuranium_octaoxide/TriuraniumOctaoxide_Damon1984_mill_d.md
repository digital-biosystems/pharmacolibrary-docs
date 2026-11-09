<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Triuranium octaoxide&quot;,&quot;href&quot;:&quot;drugs/toxin_triuranium_octaoxide/&quot;},{&quot;label&quot;:&quot;Damon_1984 \u00b7 mill_d&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Triuranium octaoxide — `TriuraniumOctaoxide_Damon1984_mill_d`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Triuranium octaoxide retention parameters for uranium in rats lack kinetic quantities like rate constants or clearance to support standard pharmacokinetic modeling.

<div class="pk-model-meta" hidden drug="Triuranium octaoxide" model-id="TriuraniumOctaoxide_Damon1984_mill_d" status="rejected" stale="false" population="Rats" measured-compound="Uranium" parameterization="mechanistic" topology="1C"></div>

## Citation
Damon EG, Eidson AF, Hahn FF, Griffith WC, Guilmette RA. Comparison of early lung clearance of yellowcake aerosols in rats with in vitro dissolution and IR analysis. Health physics 46(4):859–866 (1984).
  ·  DOI: [10.1097/00004032-198404000-00011](https://doi.org/10.1097/00004032-198404000-00011)

## Population and dosing

**Population:** Rats · condition exposure · age group adult · n = 100.

**Dosing:** 9.8, 322 mg, inhaled, single.

**Dosed compound ≠ measured compound:** dosed Yellowcake aerosols (Ammonium diuranate and Triuranium octaoxide), measured Uranium.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Retentionᵃ or Dissolutionᵇ Parameters A₁ (%) | A1 | 26 | % |
| Retentionᵃ or Dissolutionᵇ Parameters T₁ (days) | equation variable | 0.13 | days |
| Retentionᵃ or Dissolutionᵇ Parameters A₂ (%) | A2 | 75 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Triuranium octaoxide retention parameters for uranium in rats lack kinetic quantities like rate constants or clearance to support standard pharmacokinetic modeling.**

The record reports retention coefficients A1 (26%) and A2 (75%) and a time value of 0.13 days, but contains no half-life, rate constant, volume, or clearance. The reported unit for one parameter could not be converted to standard SI units, leaving the value in its original form. Extracted — Uranium: A1 26 %, A2 75 %.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|
| Retentionᵃ or Dissolutionᵇ Parameters A₁ (%) | `Q415` · A1 | 26 | % | 0.26 | % | llm_confirmed (0.6) | Damon_1984_table_2:row4:col2, Damon_1984_table_2:row8:col2, Damon_1984_table_2:row11:col2 |
| Retentionᵃ or Dissolutionᵇ Parameters T₁ (days) | `Q900` · equation variable | 0.13 | days |  | d | llm (0.6) | Damon_1984_table_2:row4:col3 |
| Retentionᵃ or Dissolutionᵇ Parameters A₂ (%) | `Q416` · A2 | 75 | % | 0.75 | % | llm_confirmed (0.6) | Damon_1984_table_2:row4:col4, Damon_1984_table_2:row8:col4, Damon_1984_table_2:row11:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'mill d' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Retentionᵃ or Dissolutionᵇ Parameters T₂ (days)' — extend the ontology if this is a real PK parameter (source ['Damon_1984_table_2:row4:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Uranium
- toxin: 2 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- population split: 'mill d' subgroup of Damon_1984 (paper reports 2 populations: mill a, mill d)
- review gap-fill skipped: this record measures 'Uranium', not triuranium_octaoxide — the review values are the parent's

**Extraction notes:**
- table Damon_1984_table_2: unbound_uncertainty
- table Damon_1984_table_2: unparsed_numeric_cell
- transposed table Damon_1984_table_2: logical view retains original source coordinates
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | pass | 2 |
| C0b_disposition_core | fail |  |
| C8_topology | pass |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btriuranium_octaoxide%5D%20TriuraniumOctaoxide_Damon1984_mill_d&body=Drug%3A%20triuranium_octaoxide%0ARecord%3A%20TriuraniumOctaoxide_Damon1984_mill_d%0APaper%3A%20Damon_1984%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_triuranium_octaoxide/TriuraniumOctaoxide_Damon1984_mill_d%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 01:05 UTC</sub>
