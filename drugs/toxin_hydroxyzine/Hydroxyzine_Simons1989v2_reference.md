<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Hydroxyzine&quot;,&quot;href&quot;:&quot;drugs/toxin_hydroxyzine/&quot;},{&quot;label&quot;:&quot;Simons_1989_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydroxyzine_Knych2019_reference&quot;,&quot;label&quot;:&quot;Knych_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydroxyzine/Hydroxyzine_Knych2019_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxyzine_Simons1984_reference&quot;,&quot;label&quot;:&quot;Simons_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydroxyzine/Hydroxyzine_Simons1984_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxyzine_Simons1984v2_reference&quot;,&quot;label&quot;:&quot;Simons_1984_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydroxyzine/Hydroxyzine_Simons1984v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxyzine_Simons1989_reference&quot;,&quot;label&quot;:&quot;Simons_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydroxyzine/Hydroxyzine_Simons1989_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Hydroxyzine — `Hydroxyzine_Simons1989v2_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the metabolite cetirizine has zero compartments, leaving it unlinked to the dose despite the abstract-only source data.

<div class="pk-model-meta" hidden drug="Hydroxyzine" model-id="Hydroxyzine_Simons1989v2_reference" status="rejected" stale="false" population="healthy, fasting subjects" measured-compound="Hydroxyzine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Simons KJ, Watson WT, Chen XY, Simons FE. Pharmacokinetic and pharmacodynamic studies of the H1-receptor antagonist hydroxyzine in the elderly. Clinical pharmacology and therapeutics 45(1):9–14 (1989).
  ·  DOI: [10.1038/clpt.1989.2](https://doi.org/10.1038/clpt.1989.2)

## Population and dosing

**Population:** healthy, fasting subjects · condition healthy · age group elderly · n = 9.

**Dosed compound ≠ measured compound:** dosed Hydroxyzine hydrochloride, measured Hydroxyzine.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| serum elimination t1/2 of hydroxyzine | t1/2z | 29.3 | hours |
| volume of distribution | V | 22.5 | L/kg |
| clearance rate | CL | 9.6 | ml/min/kg |
| AUC | AUC | 1383.1 | ng.hr/ml |
| mean serum elimination t1/2 of cetirizine | t1/2z | 24.8 | hours |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the metabolite cetirizine has zero compartments, leaving it unlinked to the dose despite the abstract-only source data.**

The cetirizine metabolite entry specifies n_cmt: 0, creating an orphan compartment with no path from the hydroxyzine dose. This structural defect triggered the rejection for an unlinked metabolite. The model relies entirely on abstract summary statistics rather than fitted parameters, but the zero-compartment assignment for cetirizine is the primary structural failure. Extracted — hydroxyzine: t1/2z 29.3 hours, V 22.5 L/kg, CL 9.6 ml/min/kg, AUC 1.38e+03 ng.hr/ml; Cetirizine: t1/2z 24.8 hours.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| serum elimination t1/2 of hydroxyzine | `Q57` · t1/2z | 29.3 | hours | 1.055e+05 | s | h | llm_confirmed (0.6) | Simons_1989_2:abstract |
| volume of distribution | `Q61` · V | 22.5 | L/kg | 1.575 | m3 | l/kg | exact (1) | Simons_1989_2:abstract |
| clearance rate | `Q22` · CL | 9.6 | ml/min/kg | 1.12e-05 | m3/s | ml/(min·kg) | exact (1) | Simons_1989_2:abstract |
| AUC | `Q88` · AUC | 1383.1 | ng.hr/ml | 4.979 | kg*s/m3 | (h·ng)/ml | exact (1) | Simons_1989_2:abstract |
| mean serum elimination t1/2 of cetirizine | `Q57` · t1/2z | 24.8 | hours | 8.928e+04 | s | h | llm_confirmed (0.6) | Simons_1989_2:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Hydroxyzine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 5/5 row label(s) assigned, 0 linked by role; re-tagged Hydroxyzine→parent ×4, Hydroxyzine→Cetirizine ×1
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Simons_1989_2_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Simons_1989_2:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Simons_1989_2:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Simons_1989_2:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Simons_1989_2:abstract'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Simons_1989_2:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.6 | ['Simons_1989_2:abstract'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['generated in vivo'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 40.3 L/h | ['Simons_1989_2:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.58e+03 L | ['Simons_1989_2:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhydroxyzine%5D%20Hydroxyzine_Simons1989v2_reference&body=Drug%3A%20hydroxyzine%0ARecord%3A%20Hydroxyzine_Simons1989v2_reference%0APaper%3A%20Simons_1989_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_hydroxyzine/Hydroxyzine_Simons1989v2_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 23:13 UTC</sub>
