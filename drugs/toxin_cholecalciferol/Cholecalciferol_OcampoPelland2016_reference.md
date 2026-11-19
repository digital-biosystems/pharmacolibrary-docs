<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Cholecalciferol&quot;,&quot;href&quot;:&quot;drugs/toxin_cholecalciferol/&quot;},{&quot;label&quot;:&quot;Ocampo-Pelland_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cholecalciferol_Deb2020_reference&quot;,&quot;label&quot;:&quot;Deb_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cholecalciferol/Cholecalciferol_Deb2020_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cholecalciferol_Dueland1983_reference&quot;,&quot;label&quot;:&quot;Dueland_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cholecalciferol/Cholecalciferol_Dueland1983_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cholecalciferol_urek2023_liposome_formulation&quot;,&quot;label&quot;:&quot;\u017burek_2023_liposome_formulation&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cholecalciferol/Cholecalciferol_urek2023_liposome_formulation.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cholecalciferol_urek2023_oil_formulation&quot;,&quot;label&quot;:&quot;\u017burek_2023_oil_formulation&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cholecalciferol/Cholecalciferol_urek2023_oil_formulation.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cholecalciferol — `Cholecalciferol_OcampoPelland2016_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> V2 has dimensionally incorrect units (L/h), and Vmax/Km use amount-based units conflicting with mass-based clearance, indicating abstract-derived parameter inconsistencies.

<div class="pk-model-meta" hidden drug="Cholecalciferol" model-id="Cholecalciferol_OcampoPelland2016_reference" status="rejected" stale="false" population="healthy or osteoporotic populations" measured-compound="Cholecalciferol" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Ocampo-Pelland AS, Gastonguay MR, French JF, Riggs MM. Model-based meta-analysis for development of a population-pharmacokinetic (PPK) model for Vitamin D3 and its 25OHD3 metabolite using both individual and arm-level data. Journal of pharmacokinetics and pharmacodynamics 43(2):191-206 (2016).
  ·  DOI: [10.1007/s10928-016-9465-1](https://doi.org/10.1007/s10928-016-9465-1)

## Population and dosing

**Population:** healthy or osteoporotic populations · condition healthy or osteoporotic · age group mixed · n = `5395.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| maximum rate of metabolism | Vmax | 1.62 | nmol/h |
| Michaelis-Menten constant | Km | 6.39 | nmol/L |
| central volume of distribution | V1 | 15.5 | L |
| intercompartmental clearance | Q | 0.185 | L/h |
| peripheral volume of distribution | V2 | 2333 | L/h |
| baseline concentration | C0 | 3.75 | nmol/L |
| Calcitroic acid predicted total body clearance | CL | 2.61 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**V2 has dimensionally incorrect units (L/h), and Vmax/Km use amount-based units conflicting with mass-based clearance, indicating abstract-derived parameter inconsistencies.**

The peripheral volume of distribution is reported in L/h, which is dimensionally invalid for a volume. Vmax and Km are expressed in nmol/h and nmol/L respectively, creating a unit conflict with the cholecalciferol clearance defined in L/h and mass-based dimensions. These inconsistencies, combined with the reliance on abstract summary statistics rather than a fitted model, led to rejection. Extracted — cholecalciferol: Vmax 1.62 nmol/h, Km 6.39 nmol/L, V1 15.5 L, Q 0.185 L/h, V2 2.33e+03 L/h, CL 2.61 L/h; 25-hydroxyvitamin D3: C0 3.75 nmol/L.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| maximum rate of metabolism | `Q66` · Vmax | 1.62 | nmol/h |  |  | nM/h | llm (0.6) | Ocampo-Pelland_2016:abstract |
| Michaelis-Menten constant | `Q1` · Km | 6.39 | nmol/L |  |  | nM/l | llm_confirmed (0.6) | Ocampo-Pelland_2016:abstract |
| central volume of distribution | `Q63` · V1 | 15.5 | L | 0.0155 | m3 | l | boundary_compartment (0.9) | Ocampo-Pelland_2016:abstract |
| intercompartmental clearance | `Q30` · Q | 0.185 | L/h | 5.139e-08 | m3/s | l/h | exact (1) | Ocampo-Pelland_2016:abstract |
| peripheral volume of distribution | `Q64` · V2 | 2333 | L/h | 0.0006481 | m3/s | l/h | boundary_compartment (0.9) | Ocampo-Pelland_2016:abstract |
| baseline concentration | `Q86` · C0 | 3.75 | nmol/L |  |  | nM/l | llm_corrected (0.6) | Ocampo-Pelland_2016:abstract |
| Calcitroic acid predicted total body clearance | `Q22` · CL | 2.61 | L/h | 7.25e-07 | m3/s | L/h | review_gapfill (0.7) | Deb_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'maximum rate of metabolism' → Q66 (unit '[substance] / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'Michaelis-Menten constant' → Q1 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'peripheral volume of distribution' → Q64 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'baseline concentration' → Q86 (unit '[substance] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Cholecalciferol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — other model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=other; 6/6 row label(s) assigned, 3 linked by role; re-tagged Cholecalciferol→parent ×5, Cholecalciferol→25-hydroxyvitamin D3 ×1
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Deb_2020's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Ocampo-Pelland_2016_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model
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
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | nmol/L ([substance] / [length] ** 3) | ['Ocampo-Pelland_2016:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Deb_2020:review'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Ocampo-Pelland_2016:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Ocampo-Pelland_2016:abstract'] |
| C5_dimension_Q64 | fail | [length] ** 3 | L/h ([length] ** 3 / [time]) | ['Ocampo-Pelland_2016:abstract'] |
| C5_dimension_Q66 | fail | [mass] / [time] | nmol/h ([substance] / [time]) | ['Ocampo-Pelland_2016:abstract'] |
| C5_dimension_Q86 | fail | [mass] * [time] / [length] ** 3 | nmol/L ([substance] / [length] ** 3) | ['Ocampo-Pelland_2016:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.61 | ['Deb_2020:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.61 L/h | ['Deb_2020:review'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 15.5 L | ['Ocampo-Pelland_2016:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.648 L | ['Ocampo-Pelland_2016:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcholecalciferol%5D%20Cholecalciferol_OcampoPelland2016_reference&body=Drug%3A%20cholecalciferol%0ARecord%3A%20Cholecalciferol_OcampoPelland2016_reference%0APaper%3A%20Ocampo-Pelland_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cholecalciferol/Cholecalciferol_OcampoPelland2016_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 13:10 UTC</sub>
