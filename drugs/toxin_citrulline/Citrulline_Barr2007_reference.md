<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Citrulline&quot;,&quot;href&quot;:&quot;drugs/toxin_citrulline/&quot;},{&quot;label&quot;:&quot;Barr_2007 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Citrulline_Aschner2023_reference&quot;,&quot;label&quot;:&quot;Aschner_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_citrulline/Citrulline_Aschner2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Citrulline — `Citrulline_Barr2007_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Citrulline clearance and concentration dimensions mismatch, and abstract-only statistics stand in for fitted model parameters.

<div class="pk-model-meta" hidden drug="Citrulline" model-id="Citrulline_Barr2007_reference" status="rejected" stale="false" population="infants and children undergoing congenital heart surgery" measured-compound="Citrulline" parameterization="mechanistic" topology="1C"></div>

## Citation
Barr FE, Tirona RG, Taylor MB, Rice G, Arnold J, Cunningham G et al. Pharmacokinetics and safety of intravenously administered citrulline in children undergoing congenital heart surgery: potential therapy for postoperative pulmonary hypertension. The Journal of thoracic and cardiovascular surgery 134(2):319–326 (2007).
  ·  DOI: [10.1016/j.jtcvs.2007.02.043](https://doi.org/10.1016/j.jtcvs.2007.02.043)

## Population and dosing

**Population:** infants and children undergoing congenital heart surgery · condition postoperative pulmonary hypertension · age group child · n = 17.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| clearance of intravenously administered citrulline | CL | 0.6 | h.kg |
| volume of distribution | V | 0.9 | L/kg |
| estimated half-life | t1/2z | 60 | minutes |
| Mean plasma citrulline levels | Ct | 125 | mumol/L |
| absorption rate constant | kabs | 0.95 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Citrulline clearance and concentration dimensions mismatch, and abstract-only statistics stand in for fitted model parameters.**

The clearance parameter unit, h.kg, conflicts dimensionally with the expected volume/time structure, as does the concentration unit mumol/L versus mass/volume. The record is abstract-only, meaning summary statistics like the 60-minute half-life and 125 mumol/L mean level replace actual fitted model values. Consequently, the structural parameter dimensions fail consistency checks despite plausible pharmacokinetic labels. Extracted — citrulline: CL 0.6 h.kg, V 0.9 L/kg, t1/2z 60 minutes, Ct 125 mumol/L, kabs 0.95 h-1.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| clearance of intravenously administered citrulline | `Q22` · CL | 0.6 | h.kg |  |  | h·kg | llm_confirmed (0.6) | Barr_2007:abstract |
| volume of distribution | `Q61` · V | 0.9 | L/kg | 0.063 | m3 | l/kg | exact (1) | Barr_2007:abstract |
| estimated half-life | `Q57` · t1/2z | 60 | minutes | 3600 | s | min | half_life_rule (0.95) | Barr_2007:abstract |
| Mean plasma citrulline levels | `Q75` · Ct | 125 | mumol/L |  |  | µM/l | llm (0.6) | Barr_2007:abstract |
| absorption rate constant | `Q49` · kabs | 0.95 | h-1 | 0.0002639 | 1/s | 1/h | review_gapfill (0.7) | Aschner_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'clearance of intravenously administered citrulline' → Q22 (unit '[time] * [mass]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'continuous infusion' — extend the ontology if this is a real PK parameter (source ['Barr_2007:abstract'])
- unit_dimension_mismatch: 'Mean plasma citrulline levels' → Q75 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'calculated clearance' → Q22 (unit '[time] * [mass]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('calculated clearance', value 0.52) — already have one for this compound
- dropped unlinked row (NIL): 'initial bolus' — extend the ontology if this is a real PK parameter (source ['Barr_2007:abstract'])
- dropped unlinked row (NIL): 'postoperative infusion' — extend the ontology if this is a real PK parameter (source ['Barr_2007:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Citrulline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Aschner_2023's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Barr_2007_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model
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
| C5_dimension_Q22 | fail | [length] ** 3 / [time] | h.kg ([time] * [mass]) | ['Barr_2007:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Aschner_2023:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Barr_2007:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Barr_2007:abstract'] |
| C5_dimension_Q75 | fail | [mass] / [length] ** 3 | mumol/L ([substance] / [length] ** 3) | ['Barr_2007:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.6 | ['Barr_2007:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 63 L | ['Barr_2007:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcitrulline%5D%20Citrulline_Barr2007_reference&body=Drug%3A%20citrulline%0ARecord%3A%20Citrulline_Barr2007_reference%0APaper%3A%20Barr_2007%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_citrulline/Citrulline_Barr2007_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 07:40 UTC</sub>
