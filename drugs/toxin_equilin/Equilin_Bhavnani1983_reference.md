<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Equilin&quot;,&quot;href&quot;:&quot;drugs/toxin_equilin/&quot;},{&quot;label&quot;:&quot;Bhavnani_1983 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Equilin — `Equilin_Bhavnani1983_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The abstract-only record lacks fitted parameters for the metabolite 17 beta-dihydroequilin, resulting in unlinked compartments and missing clearance values for key molecules.

<div class="pk-model-meta" hidden drug="Equilin" model-id="Equilin_Bhavnani1983_reference" status="rejected" stale="false" population="normal postmenopausal women and a normal man" measured-compound="Equilin | Equilin sulfate" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Bhavnani BR, Woolever CA, Benoit H, Wong T. Pharmacokinetics of equilin and equilin sulfate in normal postmenopausal women and men. The Journal of clinical endocrinology and metabolism 56(5):1048–1056 (1983).
  ·  DOI: [10.1210/jcem-56-5-1048](https://doi.org/10.1210/jcem-56-5-1048)

## Population and dosing

**Population:** normal postmenopausal women and a normal man · condition healthy · age group adult.

**Dosed compound ≠ measured compound:** dosed Equilin sulfate | Equilin, measured Equilin | Equilin sulfate.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| The initial fast component (half-life | t1/2α | 5.2 | min |
| mean volume | V | 12.4 | liters |
| MCR of equilin... in the normal man | CL | 1982 | liters/day/m2 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The abstract-only record lacks fitted parameters for the metabolite 17 beta-dihydroequilin, resulting in unlinked compartments and missing clearance values for key molecules.**

The model includes 17 beta-dihydroequilin and its conjugate, but no metabolic rate parameters were extracted, leaving these metabolites orphaned without a path from the dose. Additionally, the terminal half-life for Equilin lacks a value, and metabolic clearance is reported only for a single subject rather than the population. Consequently, the record represents reported summary statistics rather than a fitted model with defined elimination pathways for all compartments. Extracted — equilin: t1/2α 5.2 min, V 12.4 liters, CL 1.98e+03 liters/day/m2.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| The initial fast component (half-life | `Q59` · t1/2α | 5.2 | min | 312 | s | min | llm (0.6) | Bhavnani_1983:abstract |
| mean volume | `Q61` · V | 12.4 | liters | 0.0124 | m3 | l | llm_confirmed (0.6) | Bhavnani_1983:abstract |
| MCR of equilin... in the normal man | `Q22` · CL | 1982 | liters/day/m2 | 3.969e-05 | m3/s | l/(d·m2) | llm (0.6) | Bhavnani_1983:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| half-life of equilin | Q57 | llm |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'mean value for the rate constant of total removal from the initial volume' — extend the ontology if this is a real PK parameter (source ['Bhavnani_1983:abstract'])
- dropped unlinked row (NIL): 'irreversible' — extend the ontology if this is a real PK parameter (source ['Bhavnani_1983:abstract'])
- dropped duplicate Q59 ('mean half-life of the slower component of equilin sulfate', value 190) — already have one for this compound
- dropped unlinked row (NIL): 'mean MCR' — extend the ontology if this is a real PK parameter (source ['Bhavnani_1983:abstract'])
- dropped duplicate Q57 ('half-life', value '23') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Equilin | Equilin sulfate
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles: per-genotype parameters — typical value from the reference group: MCR of equilin... in the normal man
- row roles (LLM): model_class=noncompartmental; 10/10 row label(s) assigned, 0 linked by role; re-tagged Equilin | Equilin sulfate→Equilin sulfate ×6, Equilin | Equilin sulfate→Equilin ×3
- molar mass: none of 1 PubChem candidate(s) is 'Equilin | Equilin sulfate' (LLM) — left in mass units
- molar mass: none found for 'Equilin | Equilin sulfate' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Bhavnani_1983_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model
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
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Bhavnani_1983:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Bhavnani_1983:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Bhavnani_1983:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Bhavnani_1983:abstract'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 1982 | ['Bhavnani_1983:abstract'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown', 'unknown', 'unknown'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 143 L/h | ['Bhavnani_1983:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 12.4 L | ['Bhavnani_1983:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bequilin%5D%20Equilin_Bhavnani1983_reference&body=Drug%3A%20equilin%0ARecord%3A%20Equilin_Bhavnani1983_reference%0APaper%3A%20Bhavnani_1983%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_equilin/Equilin_Bhavnani1983_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 13:35 UTC</sub>
