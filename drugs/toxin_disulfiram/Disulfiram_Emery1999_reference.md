<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Disulfiram&quot;,&quot;href&quot;:&quot;drugs/toxin_disulfiram/&quot;},{&quot;label&quot;:&quot;Emery_1999 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Disulfiram_Lanz2023_reference&quot;,&quot;label&quot;:&quot;Lanz_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_disulfiram/Disulfiram_Lanz2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Disulfiram — `Disulfiram_Emery1999_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The 6-hydroxychlorzoxazone metabolite is unreachable because the parent compound Chlorzoxazone is absent from the disulfiram model, leaving no dose path to this compartment.

<div class="pk-model-meta" hidden drug="Disulfiram" model-id="Disulfiram_Emery1999_reference" status="rejected" stale="false" population="Healthy subjects" measured-compound="2-thiothiazolidine-4-carboxylic acid" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Emery MG, Jubert C, Thummel KE, Kharasch ED. Duration of cytochrome P-450 2E1 (CYP2E1) inhibition and estimation of functional CYP2E1 enzyme half-life after single-dose disulfiram administration in humans. The Journal of pharmacology and experimental therapeutics 291(1):213–219 (1999).

## Population and dosing

**Population:** Healthy subjects · condition healthy · age group adult.

**Dosed compound ≠ measured compound:** dosed Disulfiram, measured 2-thiothiazolidine-4-carboxylic acid.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CLZ clearance ... on the first day | CL | 10.2 | L/h |
| 6-hydroxychlorzoxazone fractional metabolic clearance ... on the first day | CLfm | 5.5 | L/h |
| degradation half-life | t1/2z | 50 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The 6-hydroxychlorzoxazone metabolite is unreachable because the parent compound Chlorzoxazone is absent from the disulfiram model, leaving no dose path to this compartment.**

The model structure includes a disulfiram parent linked to 2-thiothiazolidine-4-carboxylic acid, but separately defines a Chlorzoxazone metabolite, 6-hydroxychlorzoxazone, with no corresponding parent Chlorzoxazone compartment. This creates an orphan compartment with no administration path or precursor in the topology. Additionally, the model was constructed from abstract summary statistics rather than fitted parameters, which contributed to the rejection. Extracted — Chlorzoxazone: CL 10.2 L/h; 6-hydroxychlorzoxazone: CLfm 5.5 L/h; 2-thiothiazolidine-4-carboxylic acid: t1/2z 50 h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CLZ clearance ... on the first day | `Q22` · CL | 10.2 | L/h | 2.833e-06 | m3/s | L/h | llm_confirmed (0.6) | Emery_1999:abstract |
| 6-hydroxychlorzoxazone fractional metabolic clearance ... on the first day | `Q370` · CLfm | 5.5 | L/h | 1.528e-06 | m3/s | L/h | exact (1) | Emery_1999:abstract |
| degradation half-life | `Q57` · t1/2z | 50 | h | 1.8e+05 | s | h | llm (0.6) | Emery_1999:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: '% of baseline values' (CL)
- unit_dimension_unknown: '% of baseline values' (CLfm)
- dropped unlinked row (NIL): 'in vivo CYP2E1 synthesis rate' — extend the ontology if this is a real PK parameter (source ['Emery_1999:abstract'])
- implicit units: 'CLZ clearance ... on the first day' → L/h (from the popPK convention: 'No units provided in text. For population pharmacokinetics, total clearance values are conventionally expressed in L/h, ')
- implicit units: '6-hydroxychlorzoxazone fractional metabolic clearance ... on the first day' → L/h (from the popPK convention: 'No units provided in text. Formation clearance is a type of clearance; population PK parameters describing clearance are')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=2-thiothiazolidine-4-carboxylic acid
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — turnover model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=turnover; 4/4 row label(s) assigned, 3 linked by role; re-tagged 2-thiothiazolidine-4-carboxylic acid→Chlorzoxazone ×1, 2-thiothiazolidine-4-carboxylic acid→6-hydroxychlorzoxazone ×1
- molar mass: none of 2 PubChem candidate(s) is '2-thiothiazolidine-4-carboxylic acid' (LLM) — left in mass units
- molar mass: none found for '2-thiothiazolidine-4-carboxylic acid' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures '2-thiothiazolidine-4-carboxylic acid', not disulfiram — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Emery_1999_metadata.yaml (4 record(s)); values are summary statistics, not a fitted model
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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Emery_1999:abstract'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Emery_1999:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Emery_1999:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.2 | ['Emery_1999:abstract'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 10.2 L/h | ['Emery_1999:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdisulfiram%5D%20Disulfiram_Emery1999_reference&body=Drug%3A%20disulfiram%0ARecord%3A%20Disulfiram_Emery1999_reference%0APaper%3A%20Emery_1999%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_disulfiram/Disulfiram_Emery1999_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 19:20 UTC</sub>
