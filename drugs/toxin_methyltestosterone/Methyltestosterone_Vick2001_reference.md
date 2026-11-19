<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Methyltestosterone&quot;,&quot;href&quot;:&quot;drugs/toxin_methyltestosterone/&quot;},{&quot;label&quot;:&quot;Vick_2001 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Methyltestosterone — `Methyltestosterone_Vick2001_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

> Rejected: AUC and tmax use unit h/l (time per volume), lacking the mass dimension required for concentration-time integrals.

<div class="pk-model-meta" hidden drug="Methyltestosterone" model-id="Methyltestosterone_Vick2001_reference" status="rejected" stale="false" population="rainbow trout" measured-compound="Methyltestosterone" parameterization="mechanistic" topology="1C"></div>

## Citation
Vick AM, Hayton WL. Methyltestosterone pharmacokinetics and oral bioavailability in rainbow trout (Oncorhynchus mykiss). Aquatic toxicology (Amsterdam, Netherlands) 52(3-4):177–188 (2001).
  ·  DOI: [10.1016/s0166-445x(00)00146-6](https://doi.org/10.1016/s0166-445x(00)00146-6)

## Population and dosing

**Population:** rainbow trout · condition healthy.

> **Species: other animal.** This record comes from an animal study (other animal), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 12 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| area under the plasma concentration-time curve | AUC | 11.2 | h/l |
| total body clearance | CL | 0.64 | l/h per kg |
| distribution half-life | t1/2α | 4.13 | h |
| elimination half-life | t1/2z | 54.9 | h |
| volume of the central compartment | V | 3.83 | l/kg |
| volume of distribution at steady state | Vss | 6.06 | l/kg |
| mean residence time | MRT | 9.57 | h |
| peak concentration | Cmax | 3.03 | micromol/l |
| time of concentration peak | tmax | 8.8 | h |
| mean absorption time | MAT | 13.8 | h |
| area under curve (AUC)(0--&gt;infinity) | AUC∞ | 90.2 | h/l |
| absorption | Fab | 4.7 | half-life of |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected: AUC and tmax use unit h/l (time per volume), lacking the mass dimension required for concentration-time integrals.**

The AUC values (11.2 and 90.2) and tmax (8.8) are recorded with the unit h/l, which dimensionally represents time divided by volume, whereas these parameters require a mass or concentration term in the numerator. Cmax is also flagged for using a molar unit (micromol/l) instead of the expected mass concentration. The record is further limited because it derives from abstract-only data, treating summary statistics as a fitted model. Extracted — methyltestosterone: AUC 11.2 h/l, CL 0.64 l/h per kg, t1/2α 4.13 h, t1/2z 54.9 h, V 3.83 l/kg, Vss 6.06 l/kg, MRT 9.57 h, Cmax 3.03 micromol/l, … (+4).

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| area under the plasma concentration-time curve | `Q88` · AUC | 11.2 | h/l |  |  | h/l | llm (0.6) | Vick_2001:abstract, Vick_2001:abstract |
| total body clearance | `Q22` · CL | 0.64 | l/h per kg | 1.244e-05 | m3/s | l/(h·kg) | llm_confirmed (0.6) | Vick_2001:abstract, Vick_2001:abstract |
| distribution half-life | `Q59` · t1/2α | 4.13 | h | 1.487e+04 | s | h | half_life_rule (0.95) | Vick_2001:abstract, Vick_2001:abstract |
| elimination half-life | `Q57` · t1/2z | 54.9 | h | 1.976e+05 | s | h | half_life_rule (0.95) | Vick_2001:abstract, Vick_2001:abstract |
| volume of the central compartment | `Q61` · V | 3.83 | l/kg | 0.2681 | m3 | l/kg | exact (1) | Vick_2001:abstract, Vick_2001:abstract |
| volume of distribution at steady state | `Q65` · Vss | 6.06 | l/kg | 0.4242 | m3 | l/kg | llm_corrected (0.6) | Vick_2001:abstract, Vick_2001:abstract |
| mean residence time | `Q53` · MRT | 9.57 | h | 3.445e+04 | s | h | exact (1) | Vick_2001:abstract, Vick_2001:abstract |
| peak concentration | `Q32` · Cmax | 3.03 | micromol/l |  |  | µM/l | exact (1) | Vick_2001:abstract |
| time of concentration peak | `Q56` · tmax | 8.8 | h | 3.168e+04 | s | h | llm_corrected (0.6) | Vick_2001:abstract |
| mean absorption time | `Q73` · MAT | 13.8 | h | 4.968e+04 | s | h | exact (1) | Vick_2001:abstract |
| area under curve (AUC)(0--&gt;infinity) | `Q17` · AUC∞ | 90.2 | h/l |  |  | h/l | llm_corrected (0.6) | Vick_2001:abstract |
| absorption | `Q40` · Fab | 4.7 | half-life of |  |  | h·l·alf·ife·of | exact (1) | Vick_2001:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'area under the plasma concentration-time curve' → Q88 (unit '[time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'peak concentration' → Q32 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'area under curve (AUC)(0--&gt;infinity)' → Q17 (unit '[time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_unknown: 'half-life of' (Fab)
- dropped duplicate Q57 ('half-life', value '6.18') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Methyltestosterone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'volume of the central compartment' is the general volume)
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Vick_2001_metadata.yaml (20 record(s)); values are summary statistics, not a fitted model
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | fail | [mass] * [time] / [length] ** 3 | h/l ([time] / [length] ** 3) | ['Vick_2001:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Vick_2001:abstract', 'Vick_2001:abstract'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | micromol/l ([substance] / [length] ** 3) | ['Vick_2001:abstract'] |
| C5_dimension_Q53 | pass | [time] |  | ['Vick_2001:abstract', 'Vick_2001:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Vick_2001:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Vick_2001:abstract', 'Vick_2001:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Vick_2001:abstract', 'Vick_2001:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Vick_2001:abstract', 'Vick_2001:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Vick_2001:abstract', 'Vick_2001:abstract'] |
| C5_dimension_Q73 | pass | [time] |  | ['Vick_2001:abstract'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | h/l ([time] / [length] ** 3) | ['Vick_2001:abstract', 'Vick_2001:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.64 | ['Vick_2001:abstract', 'Vick_2001:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 44.8 L/h | ['Vick_2001:abstract', 'Vick_2001:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 268 L | ['Vick_2001:abstract', 'Vick_2001:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 424 L | ['Vick_2001:abstract', 'Vick_2001:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethyltestosterone%5D%20Methyltestosterone_Vick2001_reference&body=Drug%3A%20methyltestosterone%0ARecord%3A%20Methyltestosterone_Vick2001_reference%0APaper%3A%20Vick_2001%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_methyltestosterone/Methyltestosterone_Vick2001_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 08:23 UTC</sub>
