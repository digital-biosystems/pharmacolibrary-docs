<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Nystatin&quot;,&quot;href&quot;:&quot;drugs/toxin_nystatin/&quot;},{&quot;label&quot;:&quot;Groll_2003 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Nystatin — `Nystatin_Groll2003_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

> no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).

<div class="pk-model-meta" hidden drug="Nystatin" model-id="Nystatin_Groll2003_reference" status="rejected" stale="false" population="rabbits" measured-compound="nystatin (total LNYS concentrations)" parameterization="mechanistic" topology="1C"></div>

## Citation
Groll AH, Mickiene D, Petraitis V, Petraitiene R, Alfaro RM, King C et al. Comparative drug disposition, urinary pharmacokinetics, and renal effects of multilamellar liposomal nystatin and amphotericin B deoxycholate in rabbits. Antimicrobial agents and chemotherapy 47(12):3917–3925 (2003).
  ·  DOI: [10.1128/AAC.47.12.3917-3925.2003](https://doi.org/10.1128/AAC.47.12.3917-3925.2003)

## Population and dosing

**Population:** rabbits · condition healthy (experimental dosing) · age group adult.

**Dosed compound ≠ measured compound:** dosed multilamellar liposomal nystatin (LNYS; Nyotran), measured nystatin (total LNYS concentrations).

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (LNYS, plasma) | Cmax | 17 | microg/ml |
| AUC(0-24) (LNYS, plasma) | AUC | 17 | microg.h/ml |
| total clearance from plasma (LNYS) | CLnorm | 0.117 | liter/h/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).**

Only the abstract was available, so reported summary statistics stand in for a fitted model. None of the extracted parameters is nystatin's own; they describe nystatin (total LNYS concentrations). Extracted — nystatin (total LNYS concentrations): Cmax 17 microg/ml, AUC 17 microg.h/ml, CLnorm 0.117 liter/h/kg.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has multilamellar liposomal nystatin (LNYS; Nyotran), the second reading Nystatin (multilamellar liposomal nystatin, LNYS); it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (LNYS, plasma) | `Q32` · Cmax | 17 | microg/ml | 0.017 | kg/m3 | µg/ml | exact (1) | Groll_2003:abstract |
| AUC(0-24) (LNYS, plasma) | `Q88` · AUC | 17 | microg.h/ml | 61.2 | kg*s/m3 | (h·µg)/ml | space_fold (0.95) | Groll_2003:abstract |
| total clearance from plasma (LNYS) | `Q354` · CLnorm | 0.117 | liter/h/kg | 2.275e-06 | m3/s | l/(h·kg) | llm_corrected (0.6) | Groll_2003:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| volume of distribution at steady state | Q65 | llm_corrected |
| dose-normalized AUC(0-24) in urine | Q189 | llm_corrected |
| renal clearance | Q26 | exact |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q32 ('Cmax (DAMB, plasma)', value 3.36) — already have one for this compound
- dropped duplicate Q88 ('AUC(0-24) (DAMB, plasma)', value 12) — already have one for this compound
- dropped duplicate Q354 ('total clearance from plasma (DAMB)', value 0.055) — already have one for this compound
- dropped duplicate Q32 ('Cmax (LNYS, urine)', value 16) — already have one for this compound
- dropped duplicate Q32 ('Cmax (DAMB, urine)', value 0.96) — already have one for this compound
- dropped duplicate Q88 ('AUC(0-24) (LNYS, urine)', value 63) — already have one for this compound
- dropped duplicate Q88 ('AUC(0-24) (DAMB, urine)', value 8.9) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nystatin (total LNYS concentrations)
- molar mass: none found for 'nystatin (total LNYS concentrations)' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Groll_2003_metadata.yaml (13 record(s)); values are summary statistics, not a fitted model
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
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.167 (2/12 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auc(0-24)]` | 17 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` | 17 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[dose-normalized auc(0-24) in urine]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[renal clearance]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[standard dose of]` |  | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[therapeutic dosages of lnys]` |  | 2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[total clearance from plasma]` | 0.117 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution at steady state]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | multilamellar liposomal nystatin (LNYS; Nyotran) | Nystatin (multilamellar liposomal nystatin, LNYS) | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | nystatin (total LNYS concentrations) | Nystatin (LNYS) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Groll_2003:abstract'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Groll_2003:abstract'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Groll_2003:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnystatin%5D%20Nystatin_Groll2003_reference&body=Drug%3A%20nystatin%0ARecord%3A%20Nystatin_Groll2003_reference%0APaper%3A%20Groll_2003%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_nystatin/Nystatin_Groll2003_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 09:59 UTC</sub>
