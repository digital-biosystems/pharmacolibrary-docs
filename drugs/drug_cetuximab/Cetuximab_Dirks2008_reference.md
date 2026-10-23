<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;cetuximab&quot;,&quot;href&quot;:&quot;drugs/drug_cetuximab/&quot;},{&quot;label&quot;:&quot;Dirks_2008 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cetuximab — `Cetuximab_Dirks2008_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Cetuximab’s structural volume-of-distribution parameter V is reported as 4.38 mg/h, a rate unit inconsistent with a volume, so the record was rejected.

<div class="pk-model-meta" hidden drug="cetuximab" model-id="Cetuximab_Dirks2008_reference" status="rejected" stale="false" population="patients with recurrent and/or metastatic squamous cell carcinoma of the head and neck" measured-compound="cetuximab" parameterization="mechanistic" topology="3C"></div>

## Citation
Dirks NL, Nolting A, Kovar A, Meibohm B. Population pharmacokinetics of cetuximab in patients with squamous cell carcinoma of the head and neck. Journal of clinical pharmacology 48(3):267–278 (2008).
  ·  DOI: [10.1177/0091270007313393](https://doi.org/10.1177/0091270007313393)

## Population and dosing

**Population:** patients with recurrent and/or metastatic squamous cell carcinoma of the head and neck · condition recurrent and/or metastatic squamous cell carcinoma of the head and neck · n = 143.

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V(max) | V | 4.38 | mg/h |
| K(m) | kel | 74 | mug/mL |
| central compartment volume V(1) | V1 | 2.83 | L |
| peripheral compartment volume | V2 | 2.43 | L |
| intercompartmental clearance | Q | 0.103 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.444). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Cetuximab’s structural volume-of-distribution parameter V is reported as 4.38 mg/h, a rate unit inconsistent with a volume, so the record was rejected.**

The record defines V as a volume of distribution, but gives its value as 4.38 mg/h. It was built from the abstract alone, so reported summary statistics stood in for a fitted model. Extracted — cetuximab: V 4.38 mg/h, kel 74 mug/mL, V1 2.83 L, V2 2.43 L, Q 0.103 L/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of central compartment volume v: this record has 2.83, the second reading none; it also differs on 4 more fields. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V(max) | `Q61` · V | 4.38 | mg/h |  |  | mg/h | exact (1) | Dirks_2008:abstract |
| K(m) | `Q47` · kel | 74 | mug/mL |  |  | µg/ml | exact (1) | Dirks_2008:abstract |
| central compartment volume V(1) | `Q63` · V1 | 2.83 | L | 0.00283 | m3 | l | llm_confirmed (0.6) | Dirks_2008:abstract |
| peripheral compartment volume | `Q64` · V2 | 2.43 | L | 0.00243 | m3 | l | exact (1) | Dirks_2008:abstract |
| intercompartmental clearance | `Q30` · Q | 0.103 | L/h | 2.861e-08 | m3/s | l/h | exact (1) | Dirks_2008:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'V(max)' → Q61 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'K(m)' → Q47 (unit '[mass] / [length] ** 3' vs ontology '1 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cetuximab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- molar mass: none found for 'cetuximab' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Dirks_2008_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.444 (4/9 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[central compartment volume v]` | 2.83 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[intercompartmental clearance]` | 0.103 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[k]` | 74 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[peripheral compartment volume]` | 2.43 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v]` | 4.38 |  | only_one_extracted |

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
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Dirks_2008:abstract'] |
| C5_dimension_Q47 | fail | [mass] / [length] ** 3 | mug/mL | ['Dirks_2008:abstract'] |
| C5_dimension_Q61 | fail | [mass] / [time] | mg/h | ['Dirks_2008:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Dirks_2008:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Dirks_2008:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.83 L | ['Dirks_2008:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.43 L | ['Dirks_2008:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcetuximab%5D%20Cetuximab_Dirks2008_reference&body=Drug%3A%20cetuximab%0ARecord%3A%20Cetuximab_Dirks2008_reference%0APaper%3A%20Dirks_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cetuximab/Cetuximab_Dirks2008_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 11:26 UTC</sub>
