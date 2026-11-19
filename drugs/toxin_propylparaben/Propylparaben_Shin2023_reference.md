<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Propylparaben&quot;,&quot;href&quot;:&quot;drugs/toxin_propylparaben/&quot;},{&quot;label&quot;:&quot;Shin_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propylparaben_Gazin2013_reference&quot;,&quot;label&quot;:&quot;Gazin_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_propylparaben/Propylparaben_Gazin2013_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Propylparaben_Shin2019_reference&quot;,&quot;label&quot;:&quot;Shin_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_propylparaben/Propylparaben_Shin2019_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Propylparaben — `Propylparaben_Shin2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The maximum concentration Cmax for propylparaben is recorded as 10.5 hours, a time unit conflicting with the required mass per volume concentration.

<div class="pk-model-meta" hidden drug="Propylparaben" model-id="Propylparaben_Shin2023_reference" status="rejected" stale="false" population="five male volunteers" measured-compound="Propylparaben (deuterated) and its conjugated metabolites" parameterization="mechanistic" topology="retention"></div>

## Citation
Shin MY, Choi JW, Lee S, Kim S, Kho Y, Choi K et al. Pharmacokinetics of transdermal methyl-, ethyl-, and propylparaben in humans following single dermal administration. Chemosphere 310:136689 (2023).
  ·  DOI: [10.1016/j.chemosphere.2022.136689](https://doi.org/10.1016/j.chemosphere.2022.136689)

## Population and dosing

**Population:** five male volunteers · age group adult.

**Dosed compound ≠ measured compound:** dosed Propylparaben (deuterated), measured Propylparaben (deuterated) and its conjugated metabolites.

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| average peak values ... reached at EtP-d4 | Cmax | 10.5 | h |
| oral exposure (Tmax) | tmax | 2 | h |
| terminal elimination half-lives MeP-d4 | t1/2z | 12.2 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The maximum concentration Cmax for propylparaben is recorded as 10.5 hours, a time unit conflicting with the required mass per volume concentration.**

The extracted Cmax value of 10.5 h fails dimensional checks because concentration requires mass/volume units, not time. Additionally, the model is held back because it relies solely on abstract-derived summary statistics rather than a fully fitted pharmacokinetic model. Extracted — Propylparaben (deuterated) and its conjugated metabolites: Cmax 10.5 h, tmax 2 h, t1/2z 12.2 h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| average peak values ... reached at EtP-d4 | `Q32` · Cmax | 10.5 | h |  |  | h | llm_confirmed (0.6) | Shin_2023:abstract |
| oral exposure (Tmax) | `Q56` · tmax | 2 | h | 7200 | s | h | llm_corrected (0.6) | Shin_2023:abstract |
| terminal elimination half-lives MeP-d4 | `Q57` · t1/2z | 12.2 | h | 4.392e+04 | s | h | llm (0.6) | Shin_2023:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Fue of total PrP-d4 following dermal exposure | Q40 | llm_corrected |
| Fue of unconjugated PrP-d4 following dermal exposure | Q44 | llm_corrected |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'average peak values ... reached at MeP-d4' — extend the ontology if this is a real PK parameter (source ['Shin_2023:abstract'])
- unit_dimension_mismatch: 'average peak values ... reached at EtP-d4' → Q32 (unit '[time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'average peak values ... reached at PrP-d4' — extend the ontology if this is a real PK parameter (source ['Shin_2023:abstract'])
- dropped duplicate Q57 ('terminal elimination half-lives EtP-d4', value 12.0) — already have one for this compound
- dropped duplicate Q57 ('terminal elimination half-lives PrP-d4', value 9.3) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Propylparaben (deuterated) and its conjugated metabolites
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'Propylparaben (deuterated) and its conjugated metabolites' ('no full name in the paper') — left in mass units
- molar mass: none found for 'Propylparaben (deuterated) and its conjugated metabolites' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'Propylparaben (deuterated) and its conjugated metabolites', not propylparaben — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Shin_2023_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | h ([time]) | ['Shin_2023:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Shin_2023:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Shin_2023:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpropylparaben%5D%20Propylparaben_Shin2023_reference&body=Drug%3A%20propylparaben%0ARecord%3A%20Propylparaben_Shin2023_reference%0APaper%3A%20Shin_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_propylparaben/Propylparaben_Shin2023_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 21:07 UTC</sub>
