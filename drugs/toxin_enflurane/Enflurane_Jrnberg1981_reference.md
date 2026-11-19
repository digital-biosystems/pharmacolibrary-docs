<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Enflurane&quot;,&quot;href&quot;:&quot;drugs/toxin_enflurane/&quot;},{&quot;label&quot;:&quot;J\u00e4rnberg_1981 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Enflurane — `Enflurane_Jrnberg1981_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Fluoride Cmax is 26.3 microM, conflicting with the mass-per-volume dimension required for concentration in the model structure.

<div class="pk-model-meta" hidden drug="Enflurane" model-id="Enflurane_Jrnberg1981_reference" status="rejected" stale="false" population="patients undergoing enflurane anesthesia" measured-compound="Inorganic Fluoride" parameterization="mechanistic" topology="1C"></div>

## Citation
Järnberg PO, Ekstrand J, Irestedt L. Renal fluoride excretion and plasma fluoride levels during and after enflurane anesthesia are dependent on urinary pH. Anesthesiology 54(1):48–52 (1981).
  ·  DOI: [10.1097/00000542-198101000-00009](https://doi.org/10.1097/00000542-198101000-00009)

## Population and dosing

**Population:** patients undergoing enflurane anesthesia · condition anesthesia · age group adult · n = two groups (exact number not specified in text).

**Dosed compound ≠ measured compound:** dosed Enflurane, measured Inorganic Fluoride.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| urinary flow rate | CLR | 7 | L/h |
| inulin clearance (Cin) | CL | 61 | per cent of control values |
| para-aminohippurate (PAH) clearance (CPAH) | CL | 43 | per cent of control values |
| Fractional fluoride clearances (CF/CIN) | fe | 0.06 | CF/CIN |
| Mean maximal plasma levels of fluoride | Cmax | 26.3 | microM |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Fluoride Cmax is 26.3 microM, conflicting with the mass-per-volume dimension required for concentration in the model structure.**

The fluoride Cmax value of 26.3 microM has a dimension of length, whereas the parameter definition requires mass divided by volume cubed. This dimensional mismatch renders the parameter incompatible with the compartmental equations. Additionally, the model relies on abstract-only summary statistics rather than fitted parameters. Extracted — Inorganic Fluoride: CLR 7 L/h, fe 0.06 CF/CIN, Cmax 26.3 microM; Inulin: CL 61 per cent of control values; Para-aminohippurate (PAH): CL 43 per cent of control values.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| urinary flow rate | `Q26` · CLR | 7 | L/h | 1.944e-06 | m3/s | L/h | llm (0.6) | Järnberg_1981:abstract, Järnberg_1981:abstract |
| inulin clearance (Cin) | `Q22` · CL | 61 | per cent of control values |  |  | 1/(cent·control·of·values) | llm_confirmed (0.6) | Järnberg_1981:abstract, Järnberg_1981:abstract |
| para-aminohippurate (PAH) clearance (CPAH) | `Q22` · CL | 43 | per cent of control values |  |  | 1/(cent·control·of·values) | llm_confirmed (0.6) | Järnberg_1981:abstract, Järnberg_1981:abstract |
| Fractional fluoride clearances (CF/CIN) | `Q44` · fe | 0.06 | CF/CIN |  |  | cf/cin | llm (0.6) | Järnberg_1981:abstract, Järnberg_1981:abstract |
| Mean maximal plasma levels of fluoride | `Q32` · Cmax | 26.3 | microM |  |  | m·icrom | llm (0.6) | Järnberg_1981:abstract, Järnberg_1981:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'per cent of control values' (CLR)
- unit_dimension_unknown: 'per cent of control values' (CL)
- unit_dimension_unknown: 'CF/CIN' (fe)
- dropped unlinked row (NIL): 'urinary pH' — extend the ontology if this is a real PK parameter (source ['Järnberg_1981:abstract', 'Järnberg_1981:abstract'])
- unit_dimension_mismatch: 'Mean maximal plasma levels of fluoride' → Q32 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- implicit units: 'urinary flow rate' → L/h (from the popPK convention: 'Urinary flow rate is a volume per unit time. While mL/min is common in clinical labs, population PK models typically use')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Inorganic Fluoride
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 6/6 row label(s) assigned, 0 linked by role; re-tagged Inorganic Fluoride→Inulin ×2, Inorganic Fluoride→Para-aminohippurate (PAH) ×2
- molar mass: no plausible PubChem entry for 'Inorganic Fluoride' ('Inorganic Fluoride') — left in mass units
- molar mass: none found for 'Inorganic Fluoride' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'Inorganic Fluoride', not enflurane — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Järnberg_1981_metadata.yaml (12 record(s)); values are summary statistics, not a fitted model
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
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Järnberg_1981:abstract', 'Järnberg_1981:abstract'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | microM ([length]) | ['Järnberg_1981:abstract', 'Järnberg_1981:abstract'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | per cent of control values | ['Järnberg_1981:abstract', 'Järnberg_1981:abstract'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | per cent of control values | ['Järnberg_1981:abstract', 'Järnberg_1981:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 61 | ['Järnberg_1981:abstract', 'Järnberg_1981:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Benflurane%5D%20Enflurane_Jrnberg1981_reference&body=Drug%3A%20enflurane%0ARecord%3A%20Enflurane_Jrnberg1981_reference%0APaper%3A%20J%C3%A4rnberg_1981%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_enflurane/Enflurane_Jrnberg1981_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 12:03 UTC</sub>
