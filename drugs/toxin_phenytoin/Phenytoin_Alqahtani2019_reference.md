<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Phenytoin&quot;,&quot;href&quot;:&quot;drugs/toxin_phenytoin/&quot;},{&quot;label&quot;:&quot;Alqahtani_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Phenytoin_Dickinson1989_reference&quot;,&quot;label&quot;:&quot;Dickinson_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenytoin/Phenytoin_Dickinson1989_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenytoin_Guk2019_reference&quot;,&quot;label&quot;:&quot;Guk_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenytoin/Phenytoin_Guk2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenytoin_Ku2016_reference&quot;,&quot;label&quot;:&quot;Ku_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenytoin/Phenytoin_Ku2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenytoin_Li2016_reference&quot;,&quot;label&quot;:&quot;Li_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenytoin/Phenytoin_Li2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenytoin_Tanaka2013_reference&quot;,&quot;label&quot;:&quot;Tanaka_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenytoin/Phenytoin_Tanaka2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Phenytoin — `Phenytoin_Alqahtani2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Volume of distribution 0.61 L/h/kg has incorrect flow units, clearance 0.0234 L/h/kg is physiologically implausible, and parameters derive from abstract summaries.

<div class="pk-model-meta" hidden drug="Phenytoin" model-id="Phenytoin_Alqahtani2019_reference" status="rejected" stale="false" population="Saudi epileptic patients" measured-compound="Phenytoin" parameterization="mechanistic" topology="1C"></div>

## Citation
Alqahtani S, Alzaidi T, Alotaibi M, Alsultan A. Estimation of Phenytoin Pharmacokinetic Parameters in Saudi Epileptic Patients. Pharmacology 104(1-2):60-66 (2019).
  ·  DOI: [10.1159/000500314](https://doi.org/10.1159/000500314)

## Population and dosing

**Population:** Saudi epileptic patients · condition epilepsy · age group adult · n = 43.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| trough concentration | Ctrough | 11.2 | mg/L |
| volume of distribution (V) | V | 0.61 | L/h/kg |
| maximal elimination rate (Vmax) | Vmax | 6.12 | mg/kg/day |
| Michaelis-Menten constant (Km) | Km | 5.33 | mg/L |
| θ1 (CL), L/h/kg* | CL | 0.0234 | L/h/kg |
| Ka1 (1/h), fosphenytoin | kabs | 1.99 | (1/h) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Volume of distribution 0.61 L/h/kg has incorrect flow units, clearance 0.0234 L/h/kg is physiologically implausible, and parameters derive from abstract summaries.**

The volume of distribution (0.61) carries the unit L/h/kg, which includes a time dimension incompatible with a volume parameter. The clearance value (0.0234 L/h/kg) falls outside physiological windows, indicating a likely magnitude or unit extraction error. All parameters were derived from abstract summary statistics rather than a fitted pharmacokinetic model. Extracted — phenytoin: Ctrough 11.2 mg/L, V 0.61 L/h/kg, Vmax 6.12 mg/kg/day, Km 5.33 mg/L, CL 0.0234 L/h/kg, kabs 1.99 (1/h).

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| trough concentration | `Q37` · Ctrough | 11.2 | mg/L | 0.0112 | kg/m3 | mg/l | exact (1) | Alqahtani_2019:abstract |
| volume of distribution (V) | `Q61` · V | 0.61 | L/h/kg | 1.186e-05 | m3/s | l/(h·kg) | exact (1) | Alqahtani_2019:abstract |
| maximal elimination rate (Vmax) | `Q66` · Vmax | 6.12 | mg/kg/day | 4.958e-09 | kg/s | mg/(d·kg) | llm_corrected (0.6) | Alqahtani_2019:abstract |
| Michaelis-Menten constant (Km) | `Q1` · Km | 5.33 | mg/L | 0.00533 | kg/m3 | mg/l | llm_confirmed (0.6) | Alqahtani_2019:abstract |
| θ1 (CL), L/h/kg* | `Q22` · CL | 0.0234 | L/h/kg | 4.55e-07 | m3/s | L/h | review_gapfill (0.7) | Ku_2016:review |
| Ka1 (1/h), fosphenytoin | `Q49` · kabs | 1.99 | (1/h) | 0.0005528 | 1/s | 1/h | review_gapfill (0.7) | Ku_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'TDD' — extend the ontology if this is a real PK parameter (source ['Alqahtani_2019:abstract'])
- unit_dimension_mismatch: 'volume of distribution (V)' → Q61 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped value-less row: 'age'
- dropped value-less row: 'body weight'
- dropped value-less row: 'valproic acid (VPA) cotherapy'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Phenytoin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Ku_2016's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Ku_2016's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Alqahtani_2019_metadata.yaml (11 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
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
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Alqahtani_2019:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Ku_2016:review'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  | ['Alqahtani_2019:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ku_2016:review'] |
| C5_dimension_Q61 | fail | [length] ** 3 | L/h/kg ([length] ** 3 / [time]) | ['Alqahtani_2019:abstract'] |
| C5_dimension_Q66 | pass | [mass] / [time] |  | ['Alqahtani_2019:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0234 | ['Ku_2016:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.64 L/h | ['Ku_2016:review'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0119 L | ['Alqahtani_2019:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenytoin%5D%20Phenytoin_Alqahtani2019_reference&body=Drug%3A%20phenytoin%0ARecord%3A%20Phenytoin_Alqahtani2019_reference%0APaper%3A%20Alqahtani_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_phenytoin/Phenytoin_Alqahtani2019_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 18:28 UTC</sub>
