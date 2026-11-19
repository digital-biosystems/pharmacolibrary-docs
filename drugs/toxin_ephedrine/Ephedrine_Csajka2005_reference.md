<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Ephedrine&quot;,&quot;href&quot;:&quot;drugs/toxin_ephedrine/&quot;},{&quot;label&quot;:&quot;Csajka_2005 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ephedrine_Dings2026_reference&quot;,&quot;label&quot;:&quot;Dings_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ephedrine/Ephedrine_Dings2026_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ephedrine_Jeong2021_reference&quot;,&quot;label&quot;:&quot;Jeong_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ephedrine/Ephedrine_Jeong2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ephedrine_Tran2020_reference&quot;,&quot;label&quot;:&quot;Tran_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ephedrine/Ephedrine_Tran2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ephedrine — `Ephedrine_Csajka2005_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record assigns caffeine's clearance, volume, and absorption rate constants to caffeine, not the studied ephedrine, rendering the model pharmacokinetically invalid.

<div class="pk-model-meta" hidden drug="Ephedrine" model-id="Ephedrine_Csajka2005_reference" status="rejected" stale="false" population="healthy subjects" measured-compound="Ephedrine" parameterization="mechanistic" topology="manual_model_class"></div>

## Citation
Csajka C, Haller CA, Benowitz NL, Verotta D. Mechanistic pharmacokinetic modelling of ephedrine, norephedrine and caffeine in healthy subjects. British journal of clinical pharmacology 59(3):335-345 (2005).
  ·  DOI: [10.1111/j.1365-2125.2005.02254.x](https://doi.org/10.1111/j.1365-2125.2005.02254.x)

## Population and dosing

**Population:** healthy subjects · condition healthy · age group adult · n = 24.

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Caffeine clearance | CL | 0.083 | l min(-1) |
| Caffeine volume of distribution | V | 38.6 | l |
| Caffeine absorption rate constant | kabs | 0.064 | l min(-1) |
| Ephedrine clearance | CL | 0.34 | l min(-1) |
| Ephedrine volume of distribution | V | 181 | l |
| relative bioavailability of herbal compared with pharmaceutical ephedrine | Frel | 32 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record assigns caffeine's clearance, volume, and absorption rate constants to caffeine, not the studied ephedrine, rendering the model pharmacokinetically invalid.**

Three parameters (clearance, volume, absorption rate) are explicitly linked to caffeine despite ephedrine being the measured compound. An absorption rate constant is also recorded with clearance units (L/min). The record was derived from an abstract, relying on summary statistics rather than a fitted model. Extracted — Caffeine: CL 0.083 l min(-1), V 38.6 l, kabs 0.064 l min(-1); ephedrine: CL 0.34 l min(-1), V 181 l, Frel 32.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Caffeine clearance | `Q22` · CL | 0.083 | l min(-1) | 1.383e-06 | m3/s | l/min | llm_confirmed (0.6) | Csajka_2005:abstract, Csajka_2005:abstract |
| Caffeine volume of distribution | `Q61` · V | 38.6 | l | 0.0386 | m3 | l | llm_confirmed (0.6) | Csajka_2005:abstract |
| Caffeine absorption rate constant | `Q49` · kabs | 0.064 | l min(-1) |  |  | l/min | llm_confirmed (0.6) | Csajka_2005:abstract |
| Ephedrine clearance | `Q22` · CL | 0.34 | l min(-1) | 5.667e-06 | m3/s | l/min | llm_confirmed (0.6) | Csajka_2005:abstract |
| Ephedrine volume of distribution | `Q61` · V | 181 | l | 0.181 | m3 | l | llm_confirmed (0.6) | Csajka_2005:abstract |
| relative bioavailability of herbal compared with pharmaceutical ephedrine | `Q87` · Frel | 32 |  |  |  |  | llm_confirmed (0.6) | Csajka_2005:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Caffeine absorption rate constant' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Ephedrine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 6/6 row label(s) assigned, 6 linked by role; re-tagged Ephedrine→Caffeine ×4, Ephedrine→parent ×3
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Csajka_2005_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model
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
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Csajka_2005:abstract', 'Csajka_2005:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Csajka_2005:abstract'] |
| C5_dimension_Q49 | fail | 1 / [time] | l min(-1) ([length] ** 3 / [time]) | ['Csajka_2005:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Csajka_2005:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Csajka_2005:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.083 | ['Csajka_2005:abstract', 'Csajka_2005:abstract'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.98 L/h | ['Csajka_2005:abstract', 'Csajka_2005:abstract'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 20.4 L/h | ['Csajka_2005:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 38.6 L | ['Csajka_2005:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 181 L | ['Csajka_2005:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bephedrine%5D%20Ephedrine_Csajka2005_reference&body=Drug%3A%20ephedrine%0ARecord%3A%20Ephedrine_Csajka2005_reference%0APaper%3A%20Csajka_2005%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ephedrine/Ephedrine_Csajka2005_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 12:27 UTC</sub>
