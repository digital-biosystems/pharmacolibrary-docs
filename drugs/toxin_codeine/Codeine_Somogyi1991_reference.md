<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Codeine&quot;,&quot;href&quot;:&quot;drugs/toxin_codeine/&quot;},{&quot;label&quot;:&quot;Somogyi_1991 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Codeine_Gretler2020_reference&quot;,&quot;label&quot;:&quot;Gretler_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_codeine/Codeine_Gretler2020_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_Guay1988_reference&quot;,&quot;label&quot;:&quot;Guay_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_codeine/Codeine_Guay1988_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_KuKanich2016_reference&quot;,&quot;label&quot;:&quot;KuKanich_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_codeine/Codeine_KuKanich2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Codeine — `Codeine_Somogyi1991_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The Codeine AUC of 0.81 µmol·L⁻¹·h has a molar unit dimension incompatible with the model's mass-based clearance definitions, causing a structural rejection.

<div class="pk-model-meta" hidden drug="Codeine" model-id="Codeine_Somogyi1991_reference" status="rejected" stale="false" population="six healthy subjects" measured-compound="Codeine" parameterization="mechanistic" topology="retention"></div>

## Citation
Somogyi A, Bochner F, Chen ZR. Lack of effect of paracetamol on the pharmacokinetics and metabolism of codeine in man. European journal of clinical pharmacology 41(4):379–382 (1991).
  ·  DOI: [10.1007/BF00314972](https://doi.org/10.1007/BF00314972)

## Population and dosing

**Population:** six healthy subjects · condition healthy · age group adult · n = 6.

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t1/2 | t1/2z | 2.2 | h |
| AUC | AUC | 0.81 | mumol.l-1.h |
| CLR | CLR | 252 | ml.min-1 |
| apparent partial clearances of codeine to morphine | CLfm | 88 | ml.min-1 |
| apparent partial clearances of codeine to norcodeine | CLfm | 71 | ml.min-1 |
| apparent partial clearances of codeine to codeine-6-glucuronide | CLfm | 820 | ml.min-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The Codeine AUC of 0.81 µmol·L⁻¹·h has a molar unit dimension incompatible with the model's mass-based clearance definitions, causing a structural rejection.**

The record, derived solely from an abstract, reports Codeine AUC as 0.81 µmol·L⁻¹·h. This unit represents substance amount per volume per time, whereas the clearance parameters (e.g., renal clearance 252 ml·min⁻¹) and the underlying mass-balance structure require mass per volume per time. The dimension mismatch between the molar AUC and the expected mass-based structural parameters prevented validation, leading to rejection. Extracted — codeine: t1/2z 2.2 h, AUC 0.81 mumol.l-1.h, CLR 252 ml.min-1; Morphine: CLfm 88 ml.min-1; Norcodeine: CLfm 71 ml.min-1; Codeine-6-glucuronide: CLfm 820 ml.min-1.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t1/2 | `Q57` · t1/2z | 2.2 | h | 7920 | s | h | half_life_rule (0.95) | Somogyi_1991:abstract |
| AUC | `Q88` · AUC | 0.81 | mumol.l-1.h |  |  | µM/(h·l) | exact (1) | Somogyi_1991:abstract |
| CLR | `Q26` · CLR | 252 | ml.min-1 | 4.2e-06 | m3/s | ml/min | exact (1) | Somogyi_1991:abstract |
| apparent partial clearances of codeine to morphine | `Q370` · CLfm | 88 | ml.min-1 | 1.467e-06 | m3/s | ml/min | llm_confirmed (0.6) | Somogyi_1991:abstract, Somogyi_1991:abstract |
| apparent partial clearances of codeine to norcodeine | `Q370` · CLfm | 71 | ml.min-1 | 1.183e-06 | m3/s | ml/min | llm_confirmed (0.6) | Somogyi_1991:abstract, Somogyi_1991:abstract |
| apparent partial clearances of codeine to codeine-6-glucuronide | `Q370` · CLfm | 820 | ml.min-1 | 1.367e-05 | m3/s | ml/min | llm_confirmed (0.6) | Somogyi_1991:abstract, Somogyi_1991:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUC' → Q88 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Codeine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 3 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 6/6 row label(s) assigned, 7 linked by role; re-tagged Codeine→Morphine ×2, Codeine→Norcodeine ×2, Codeine→Codeine-6-glucuronide ×2
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Somogyi_1991_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model
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
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Somogyi_1991:abstract'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Somogyi_1991:abstract', 'Somogyi_1991:abstract'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Somogyi_1991:abstract', 'Somogyi_1991:abstract'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Somogyi_1991:abstract', 'Somogyi_1991:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Somogyi_1991:abstract'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | mumol.l-1.h ([substance] * [time] / [length] ** 3) | ['Somogyi_1991:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcodeine%5D%20Codeine_Somogyi1991_reference&body=Drug%3A%20codeine%0ARecord%3A%20Codeine_Somogyi1991_reference%0APaper%3A%20Somogyi_1991%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_codeine/Codeine_Somogyi1991_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 16:13 UTC</sub>
