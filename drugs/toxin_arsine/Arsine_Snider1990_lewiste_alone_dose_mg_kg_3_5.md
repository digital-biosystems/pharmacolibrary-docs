<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Arsine&quot;,&quot;href&quot;:&quot;drugs/toxin_arsine/&quot;},{&quot;label&quot;:&quot;Snider_1990 \u00b7 lewiste_alone_dose_mg_kg_3_5&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Arsine — `Arsine_Snider1990_lewiste_alone_dose_mg_kg_3_5`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

> Terminal half-life for arsenic is assigned unit mg/kg instead of time, causing a dimension mismatch that rejected the record.

<div class="pk-model-meta" hidden drug="Arsine" model-id="Arsine_Snider1990_lewiste_alone_dose_mg_kg_3_5" status="rejected" stale="false" population="Male New Zealand White rabbits" measured-compound="Arsenic" parameterization="mechanistic" topology="1C"></div>

## Citation
Snider TH, Wientjes MG, Joiner RL, Fisher GL. Arsenic distribution in rabbits after Lewisite administration and treatment with British anti-Lewisite (BAL). Fundamental and applied toxicology : official journal of the Society of Toxicology 14(2):262–272 (1990).
  ·  DOI: [10.1016/0272-0590(90)90206-y](https://doi.org/10.1016/0272-0590(90)90206-y)

## Population and dosing

**Population:** Male New Zealand White rabbits · condition acute poisoning · age group adult · n = 20.

**Dosing:** 168, 245 mg, sc, single.

**Dosed compound ≠ measured compound:** dosed Lewisite, measured Arsenic.

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Clearance, ml/min/kg | CL | 129 | ml/min/kg |
| Volume of distribution (steady state), liters/kg | Vss | 12.7 | liters/kg |
| Half-life, hr (terminal phase) | t1/2z | 75 | mg/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Terminal half-life for arsenic is assigned unit mg/kg instead of time, causing a dimension mismatch that rejected the record.**

The terminal elimination half-life for arsenic is listed with a value of 75 but carries the unit mg/kg rather than a time unit like hours. The label verbatim indicates 'Half-life, hr (terminal phase)', confirming the parameter represents a time duration, yet the recorded unit is a mass concentration. This dimensional conflict between a [time] parameter and a [mass] unit prevented the conversion to SI units. Extracted — Arsenic: CL 129 ml/min/kg, Vss 12.7 liters/kg, t1/2z 75 mg/kg.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Clearance, ml/min/kg | `Q22` · CL | 129 | ml/min/kg | 0.0001505 | m3/s | ml/(min·kg) | exact (1) | Snider_1990_table_2:row0:col2 |
| Volume of distribution (steady state), liters/kg | `Q65` · Vss | 12.7 | liters/kg | 0.889 | m3 | l/kg | llm_corrected (0.6) | Snider_1990_table_2:row1:col2 |
| Half-life, hr (terminal phase) | `Q57` · t1/2z | 75 | mg/kg |  |  | mg/kg | half_life_rule (0.95) | Snider_1990_table_2:row2:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Half-life, hr (terminal phase)' → Q57 (unit '[mass]' vs ontology '[time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Arsenic
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- population split: 'lewiste alone dose (mg/kg) 3.5' subgroup of Snider_1990 (paper reports 4 populations: lewiste alone dose (mg/kg) 2.4, lewiste alone dose (mg/kg) 3.5, lewite with bal dose (mg/kg) 2.4, lewite with bal dose (mg/kg) 3.5)
- review gap-fill skipped: this record measures 'Arsenic', not arsine — the review values are the parent's

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Snider_1990_table_2:row0:col2'] |
| C5_dimension_Q57 | fail | [time] | mg/kg ([mass]) | ['Snider_1990_table_2:row2:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Snider_1990_table_2:row1:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 129 | ['Snider_1990_table_2:row0:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 542 L/h | ['Snider_1990_table_2:row0:col2'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 889 L | ['Snider_1990_table_2:row1:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Barsine%5D%20Arsine_Snider1990_lewiste_alone_dose_mg_kg_3_5&body=Drug%3A%20arsine%0ARecord%3A%20Arsine_Snider1990_lewiste_alone_dose_mg_kg_3_5%0APaper%3A%20Snider_1990%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_arsine/Arsine_Snider1990_lewiste_alone_dose_mg_kg_3_5%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 06:47 UTC</sub>
