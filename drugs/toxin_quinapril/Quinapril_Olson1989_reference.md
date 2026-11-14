<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Quinapril&quot;,&quot;href&quot;:&quot;drugs/toxin_quinapril/&quot;},{&quot;label&quot;:&quot;Olson_1989 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quinapril_Blumer2003_reference&quot;,&quot;label&quot;:&quot;Blumer_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_quinapril/Quinapril_Blumer2003_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quinapril_CetnarowskiCropp1991_reference&quot;,&quot;label&quot;:&quot;Cetnarowski-Cropp_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_quinapril/Quinapril_CetnarowskiCropp1991_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quinapril_Elliott1992_reference&quot;,&quot;label&quot;:&quot;Elliott_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_quinapril/Quinapril_Elliott1992_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quinapril_Wolter1993_reference&quot;,&quot;label&quot;:&quot;Wolter_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_quinapril/Quinapril_Wolter1993_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Quinapril — `Quinapril_Olson1989_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Quinapril" model-id="Quinapril_Olson1989_reference" status="rejected" stale="false" population="unknown" measured-compound="Quinapril" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Olson SC, Horvath AM, Michniewicz BM, Sedman AJ, Colburn WA, Welling PG. The clinical pharmacokinetics of quinapril. Angiology 40(4 Pt 2):351–359 (1989).
  ·  DOI: [10.1177/000331978904000404](https://doi.org/10.1177/000331978904000404)

## Population and dosing

**Population:** unknown.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Peak plasma QT concentrations | Cmax | 923 | ng/mL |
| Peak plasma Q concentrations | Cmax | 207 | ng/mL |
| apparent half-lives of Q | t1/2z | 0.8 | hours |
| apparent half-lives of QT | t1/2z | 1.9 | hours |
| apparent plasma clearances of Q | Q | 1850 | mL/min |
| apparent plasma clearances of QT | CL | 220 | mL/min |
| half-life of metabolites | t1/2z | 1 | hour |
| excreted in urine as each of these metabolites | Ae | 6 |  |
| half-lives | t1/2z | 1.35 | hours |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Peak plasma QT concentrations | `Q32` · Cmax | 923 | ng/mL | 0.000923 | kg/m3 | ng/ml | llm_confirmed (0.6) | Olson_1989:abstract |
| Peak plasma Q concentrations | `Q32` · Cmax | 207 | ng/mL | 0.000207 | kg/m3 | ng/ml | llm_confirmed (0.6) | Olson_1989:abstract |
| apparent half-lives of Q | `Q57` · t1/2z | 0.8 | hours | 2880 | s | h | llm (0.6) | Olson_1989:abstract |
| apparent half-lives of QT | `Q57` · t1/2z | 1.9 | hours | 6840 | s | h | llm (0.6) | Olson_1989:abstract |
| apparent plasma clearances of Q | `Q30` · Q | 1850 | mL/min | 3.083e-05 | m3/s | ml/min | llm (0.6) | Olson_1989:abstract |
| apparent plasma clearances of QT | `Q22` · CL | 220 | mL/min | 3.667e-06 | m3/s | ml/min | llm (0.6) | Olson_1989:abstract |
| half-life of metabolites | `Q57` · t1/2z | 1 | hour | 3600 | s | h | llm (0.6) | Olson_1989:abstract |
| excreted in urine as each of these metabolites | `Q91` · Ae | 6 |  |  |  |  | llm (0.6) | Olson_1989:abstract |
| half-lives | `Q57` · t1/2z | 1.35 | hours | 4860 | s | h | llm (0.6) | Olson_1989:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- implicit units: 'excreted in urine as each of these metabolites' — the LLM proposed '%', whose dimension does not fit Q91; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Quinapril
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- toxin: half-lives printed only as a range — the value is the range's midpoint; route to review
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 9/9 row label(s) assigned, 0 linked by role; re-tagged Quinapril→Quinaprilat ×3, Quinapril→parent ×3, Quinapril→Diketopiperazine metabolites of Q ×2
- molar mass: no plausible PubChem entry for 'Diketopiperazine metabolites of Q' ('Quinapril Metabolite PD109488') — left in mass units
- molar mass: none found for 'Diketopiperazine metabolites of Q' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Olson_1989_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model
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
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Olson_1989:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Olson_1989:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Olson_1989:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Olson_1989:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Olson_1989:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Olson_1989:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Olson_1989:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Olson_1989:abstract'] |
| C5_unit_missing_Q91 | fail | [mass] |  | ['Olson_1989:abstract'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 220 | ['Olson_1989:abstract'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown', 'unknown'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 13.2 L/h | ['Olson_1989:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquinapril%5D%20Quinapril_Olson1989_reference&body=Drug%3A%20quinapril%0ARecord%3A%20Quinapril_Olson1989_reference%0APaper%3A%20Olson_1989%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_quinapril/Quinapril_Olson1989_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 05:19 UTC</sub>
