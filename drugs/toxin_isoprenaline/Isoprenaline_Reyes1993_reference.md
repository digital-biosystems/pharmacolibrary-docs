<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Isoprenaline&quot;,&quot;href&quot;:&quot;drugs/toxin_isoprenaline/&quot;},{&quot;label&quot;:&quot;Reyes_1993 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Isoprenaline — `Isoprenaline_Reyes1993_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Clearance and volume of distribution for isoprenaline are reported in mass-based units (mg/kg) rather than volume-based units, preventing proper pharmacokinetic interpretation.

<div class="pk-model-meta" hidden drug="Isoprenaline" model-id="Isoprenaline_Reyes1993_reference" status="rejected" stale="false" population="critically ill pediatric patients (postoperative cardiac and reactive airway disease)" measured-compound="Isoproterenol" parameterization="mechanistic" topology="1C"></div>

## Citation
Reyes G, Schwartz PH, Newth CJ, Eldadah MK. The pharmacokinetics of isoproterenol in critically ill pediatric patients. Journal of clinical pharmacology 33(1):29–34 (1993).
  ·  DOI: [10.1002/j.1552-4604.1993.tb03899.x](https://doi.org/10.1002/j.1552-4604.1993.tb03899.x)

## Population and dosing

**Population:** critically ill pediatric patients (postoperative cardiac and reactive airway disease) · condition critical illness · age group mixed · n = 19.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| steady-state plasma concentration | Css | 1.9 | ng/mL |
| clearance | CL | 42.5 | mg/kg/minute |
| plasma half-life of ISO | t1/2z | 4.2 | minutes |
| volume of distribution | V | 216 | mg/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Clearance and volume of distribution for isoprenaline are reported in mass-based units (mg/kg) rather than volume-based units, preventing proper pharmacokinetic interpretation.**

The clearance parameter is listed with a unit of mg/kg/minute, which represents mass per time, whereas pharmacokinetic clearance requires a volume per time dimension. Similarly, the volume of distribution is reported as 216 mg/kg, a mass-based unit, instead of the required volume-based unit (e.g., L/kg). These dimensional inconsistencies prevent the parameters from being used in standard compartmental models. The record was also derived solely from an abstract, meaning these values are reported summary statistics rather than fitted model parameters. Extracted — isoprenaline: Css 1.9 ng/mL, CL 42.5 mg/kg/minute, t1/2z 4.2 minutes, V 216 mg/kg.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| steady-state plasma concentration | `Q34` · Css | 1.9 | ng/mL | 1.9e-06 | kg/m3 | ng/ml | llm (0.6) | Reyes_1993:abstract |
| clearance | `Q22` · CL | 42.5 | mg/kg/minute |  |  | mg/(min·kg) | exact (1) | Reyes_1993:abstract, Reyes_1993:abstract, Reyes_1993:abstract |
| plasma half-life of ISO | `Q57` · t1/2z | 4.2 | minutes | 252 | s | min | llm (0.6) | Reyes_1993:abstract |
| volume of distribution | `Q61` · V | 216 | mg/kg |  |  | mg/kg | exact (1) | Reyes_1993:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'clearance' → Q22 (unit '[mass] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q34 ('normalized steady-state plasma concentration', value 2.1) — already have one for this compound
- unit_dimension_mismatch: 'volume of distribution' → Q61 (unit '[mass]' vs ontology '[length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Isoproterenol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Reyes_1993_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model
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
| C5_dimension_Q22 | fail | [length] ** 3 / [time] | mg/kg/minute ([mass] / [time]) | ['Reyes_1993:abstract', 'Reyes_1993:abstract', 'Reyes_1993:abstract'] |
| C5_dimension_Q34 | pass | [mass] / [length] ** 3 |  | ['Reyes_1993:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Reyes_1993:abstract'] |
| C5_dimension_Q61 | fail | [length] ** 3 | mg/kg ([mass]) | ['Reyes_1993:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 42.5 | ['Reyes_1993:abstract', 'Reyes_1993:abstract', 'Reyes_1993:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bisoprenaline%5D%20Isoprenaline_Reyes1993_reference&body=Drug%3A%20isoprenaline%0ARecord%3A%20Isoprenaline_Reyes1993_reference%0APaper%3A%20Reyes_1993%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_isoprenaline/Isoprenaline_Reyes1993_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 02:52 UTC</sub>
