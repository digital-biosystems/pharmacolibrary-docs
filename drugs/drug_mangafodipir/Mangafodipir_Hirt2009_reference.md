<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;mangafodipir&quot;,&quot;href&quot;:&quot;drugs/drug_mangafodipir/&quot;},{&quot;label&quot;:&quot;Hirt_2009 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mangafodipir — `Mangafodipir_Hirt2009_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was refused because manganese’s mean transit time (MTT) of 3.8 days has a dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="mangafodipir" model-id="Mangafodipir_Hirt2009_reference" status="rejected" stale="false" population="patients with acute alcoholic hepatitis" measured-compound="manganese" parameterization="apparent" topology="2C"></div>

## Citation
Hirt D, Richardet JP, Urien S, Poupon J, Sogni P, Batteux F et al. Pharmacokinetic-pharmacodynamic modeling of manganese after a single intravenous infusion of mangafodipir in patients with acute alcoholic hepatitis. Therapeutic drug monitoring 31(5):557–565 (2009).
  ·  DOI: [10.1097/FTD.0b013e3181affd6d](https://doi.org/10.1097/FTD.0b013e3181affd6d)

## Population and dosing

**Population:** patients with acute alcoholic hepatitis · condition acute alcoholic hepatitis · age group adult · n = 7.

**Dosed compound ≠ measured compound:** dosed mangafodipir, measured manganese.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| clearance | CLm/F | 23.1 | L/h |
| central volume of distribution | V1 | 35.4 | L |
| peripheral volume of distribution | V2 | 1090 | L |
| intercompartmental clearance | Q | 27.3 | L |
| mean transit time (tau) | MTT | 3.8 | days |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.417). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was refused because manganese’s mean transit time (MTT) of 3.8 days has a dimension mismatch on a structural parameter.**

MTT is the mean time for a drug molecule to transit through the body from administration to elimination; the finding identifies a dimension mismatch involving this structural parameter. The record was built from the abstract alone, so reported summary statistics stood in for a fitted model. Extracted — mangafodipir: CLm/F 23.1 L/h, V1 35.4 L, V2 1.09e+03 L, Q 27.3 L; manganese: MTT 3.8 days.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of central volume of distribution: this record has 35.4, the second reading none; it also differs on 6 more fields. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| clearance | `Q351` · CLm/F | 23.1 | L/h | 6.417e-06 | m3/s | l/h | exact (1) | Hirt_2009:abstract |
| central volume of distribution | `Q63` · V1 | 35.4 | L | 0.0354 | m3 | l | boundary_compartment (0.9) | Hirt_2009:abstract |
| peripheral volume of distribution | `Q64` · V2 | 1090 | L | 1.09 | m3 | l | boundary_compartment (0.9) | Hirt_2009:abstract |
| intercompartmental clearance | `Q30` · Q | 27.3 | L |  |  | l | exact (1) | Hirt_2009:abstract |
| mean transit time (tau) | `Q81` · MTT | 3.8 | days |  |  | d | exact (1) | Hirt_2009:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'intercompartmental clearance' → Q30 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'endogenous Mn concentrations' — extend the ontology if this is a real PK parameter (source ['Hirt_2009:abstract'])
- dropped PD-category row 'slope-relating effect to concentration' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hirt_2009:abstract'])
- metabolite manganese: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=manganese
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 7/7 row label(s) assigned, 4 linked by role; re-tagged manganese→parent ×4
- molar mass: no plausible PubChem entry for 'manganese' ('no full name in the paper') — left in mass units
- molar mass: none found for 'manganese' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Hirt_2009_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.417 (5/12 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[central and peripheral volume of distribution]` |  | 35.4 | only_one_extracted |
| `qwen3.8-27b` | `parameters[central volume of distribution]` | 35.4 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[clearance]` | 23.1 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[clearance]` |  | 23.1 | only_one_extracted |
| `qwen3.8-27b` | `parameters[intercompartmental clearance]` | 27.3 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[intercompartmental clearance]` |  | 27.3 | only_one_extracted |
| `qwen3.8-27b` | `parameters[peripheral volume of distribution]` | 1090 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q30 | fail | [length] ** 3 | L | ['Hirt_2009:abstract'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Hirt_2009:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Hirt_2009:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Hirt_2009:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 35.4 L | ['Hirt_2009:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.09e+03 L | ['Hirt_2009:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmangafodipir%5D%20Mangafodipir_Hirt2009_reference&body=Drug%3A%20mangafodipir%0ARecord%3A%20Mangafodipir_Hirt2009_reference%0APaper%3A%20Hirt_2009%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mangafodipir/Mangafodipir_Hirt2009_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 19:06 UTC</sub>
