<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Dimethyl sulfoxide&quot;,&quot;href&quot;:&quot;drugs/toxin_dimethyl_sulfoxide/&quot;},{&quot;label&quot;:&quot;Blythe_1986 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;DimethylSulfoxide_Benkessou2025_reference&quot;,&quot;label&quot;:&quot;Benkessou_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_dimethyl_sulfoxide/DimethylSulfoxide_Benkessou2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;DimethylSulfoxide_Kaye1983_reference&quot;,&quot;label&quot;:&quot;Kaye_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_dimethyl_sulfoxide/DimethylSulfoxide_Kaye1983_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;DimethylSulfoxide_Lee2019_reference&quot;,&quot;label&quot;:&quot;Lee_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_dimethyl_sulfoxide/DimethylSulfoxide_Lee2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;DimethylSulfoxide_Sarkar2025_reference&quot;,&quot;label&quot;:&quot;Sarkar_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_dimethyl_sulfoxide/DimethylSulfoxide_Sarkar2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Dimethyl sulfoxide — `DimethylSulfoxide_Blythe1986_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

> DMSO AUC unit mg/ml/hr is dimensionally invalid, as it represents concentration rate rather than the required mass·time/volume dimension.

<div class="pk-model-meta" hidden drug="Dimethyl sulfoxide" model-id="DimethylSulfoxide_Blythe1986_reference" status="rejected" stale="false" population="Thoroughbred horses" measured-compound="Dimethyl sulfoxide" parameterization="mechanistic" topology="1C"></div>

## Citation
Blythe LL, Craig AM, Christensen JM, Appell LH, Slizeski ML. Pharmacokinetic disposition of dimethyl sulfoxide administered intravenously to horses. American journal of veterinary research 47(8):1739–1743 (1986).

## Population and dosing

**Population:** Thoroughbred horses · condition healthy · n = 6.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| biological half-lives | t1/2z | 8.6 | hours |
| mean residence times | MRT | 9.8 | hours |
| areas under the curve | AUC | 12.55 | mg/ml/hr |
| clearances | CL | 0.081 | L/kg/hr |
| nab-paclitaxel (1650 L) versus CrEL-paclitaxel (177 L) | V | 1650.0 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**DMSO AUC unit mg/ml/hr is dimensionally invalid, as it represents concentration rate rather than the required mass·time/volume dimension.**

The AUC value of 12.55 carries the unit mg/ml/hr. This unit has dimensions of mass per volume per time, which conflicts with the correct pharmacokinetic dimensions of mass·time/volume. Consequently, the record is dimensionally inconsistent and was rejected. The model also lacks fitted parameters, relying instead on abstract-derived summary statistics. Extracted — dimethyl sulfoxide: t1/2z 8.6 hours, MRT 9.8 hours, AUC 12.6 mg/ml/hr, CL 0.081 L/kg/hr, V 1.65e+03 L.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| biological half-lives | `Q57` · t1/2z | 8.6 | hours | 3.096e+04 | s | h | llm_confirmed (0.6) | Blythe_1986:abstract, Blythe_1986:abstract |
| mean residence times | `Q53` · MRT | 9.8 | hours | 3.528e+04 | s | h | llm_confirmed (0.6) | Blythe_1986:abstract, Blythe_1986:abstract |
| areas under the curve | `Q88` · AUC | 12.55 | mg/ml/hr |  |  | mg/(h·ml) | llm_confirmed (0.6) | Blythe_1986:abstract, Blythe_1986:abstract |
| clearances | `Q22` · CL | 0.081 | L/kg/hr | 1.575e-06 | m3/s | l/(h·kg) | llm_confirmed (0.6) | Blythe_1986:abstract, Blythe_1986:abstract |
| nab-paclitaxel (1650 L) versus CrEL-paclitaxel (177 L) | `Q61` · V | 1650.0 | L | 1.65 | m3 | L | review_gapfill (0.7) | Chen_2015:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'areas under the curve' → Q88 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Dimethyl sulfoxide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Chen_2015's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Blythe_1986_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model
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
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Blythe_1986:abstract', 'Blythe_1986:abstract'] |
| C5_dimension_Q53 | pass | [time] |  | ['Blythe_1986:abstract', 'Blythe_1986:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Blythe_1986:abstract', 'Blythe_1986:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Chen_2015:review'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | mg/ml/hr ([mass] / [length] ** 3 / [time]) | ['Blythe_1986:abstract', 'Blythe_1986:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.081 | ['Blythe_1986:abstract', 'Blythe_1986:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.67 L/h | ['Blythe_1986:abstract', 'Blythe_1986:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.65e+03 L | ['Chen_2015:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdimethyl_sulfoxide%5D%20DimethylSulfoxide_Blythe1986_reference&body=Drug%3A%20dimethyl_sulfoxide%0ARecord%3A%20DimethylSulfoxide_Blythe1986_reference%0APaper%3A%20Blythe_1986%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_dimethyl_sulfoxide/DimethylSulfoxide_Blythe1986_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 03:18 UTC</sub>
