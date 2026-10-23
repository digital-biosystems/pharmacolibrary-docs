<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;mirogabalin&quot;,&quot;href&quot;:&quot;drugs/drug_mirogabalin/&quot;},{&quot;label&quot;:&quot;Yin_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mirogabalin_Li2023_reference&quot;,&quot;label&quot;:&quot;Li_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mirogabalin/Mirogabalin_Li2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mirogabalin — `Mirogabalin_Yin2016_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Mirogabalin's total clearance was recorded as a 25% percent change rather than an absolute rate constant, causing a dimension mismatch that rejected the model.

<div class="pk-model-meta" hidden drug="mirogabalin" model-id="Mirogabalin_Yin2016_reference" status="rejected" stale="false" population="subjects with varying degrees of renal function" measured-compound="mirogabalin" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Yin OQ, Merante D, Truitt K, Miller R. Population pharmacokinetic modeling and simulation for assessing renal impairment effect on the pharmacokinetics of mirogabalin. Journal of clinical pharmacology 56(2):203–212 (2016).
  ·  DOI: [10.1002/jcph.584](https://doi.org/10.1002/jcph.584)

## Population and dosing

**Population:** subjects with varying degrees of renal function · condition renal impairment · age group adult.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| The total clearance of mirogabalin was decreased by | CL | 25 | % |
| lower Cmax,ss of mirogabalin | Cmax | 37 | % |
| Predicted mirogabalin AUCss was | AUCSS | 26 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.333). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Mirogabalin's total clearance was recorded as a 25% percent change rather than an absolute rate constant, causing a dimension mismatch that rejected the model.**

The record lists total clearance with a value of 25 and a unit of '%', representing a relative decrease in renal function subjects. This percentage change is dimensionally incompatible with a structural clearance parameter, which requires an absolute rate constant. Additionally, the record was built from the abstract alone, so these summary statistics stand in for a fitted model. Extracted — mirogabalin: CL 25 %, Cmax 37 %, AUCSS 26 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of aucss higher (%) mild renal impairment: this record has none, the second reading 26; it also differs on 7 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| The total clearance of mirogabalin was decreased by | `Q22` · CL | 25 | % | % | llm_confirmed (0.6) | Yin_2016:abstract, Yin_2016:abstract, Yin_2016:abstract |
| lower Cmax,ss of mirogabalin | `Q32` · Cmax | 37 | % | % | llm_confirmed (0.6) | Yin_2016:abstract, Yin_2016:abstract |
| Predicted mirogabalin AUCss was | `Q18` · AUCSS | 26 | % | % | llm_confirmed (0.6) | Yin_2016:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'A single oral dose of' — extend the ontology if this is a real PK parameter (source ['Yin_2016:abstract'])
- unit_dimension_mismatch: 'The total clearance of mirogabalin was decreased by' → Q22 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'dose reduction by' — extend the ontology if this is a real PK parameter (source ['Yin_2016:abstract', 'Yin_2016:abstract'])
- unit_dimension_mismatch: 'lower Cmax,ss of mirogabalin' → Q32 (unit 'dimensionless' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Predicted mirogabalin AUCss was' → Q18 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mirogabalin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — other model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=other; 5/5 row label(s) assigned, 0 linked by role; re-tagged mirogabalin→parent ×9
- molar mass: none found for 'lactam metabolite' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Yin_2016_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.333 (4/12 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[aucss higher (%) mild renal impairment]` |  | 26 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax,ss lower (%) moderate renal impairment]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax,ss lower (%) severe renal impairment]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lower cmax,ss of mirogabalin]` | 37 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[predicted mirogabalin aucss was]` | 26 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[single oral dose of mirogabalin]` |  | 5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[the total clearance of mirogabalin was decreased by]` | 25 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[total clearance of mirogabalin decreased by]` |  | 25 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q18 | fail | dimensionless | % | ['Yin_2016:abstract'] |
| C5_dimension_Q22 | fail | dimensionless | % | ['Yin_2016:abstract', 'Yin_2016:abstract', 'Yin_2016:abstract'] |
| C5_dimension_Q32 | fail | dimensionless | % | ['Yin_2016:abstract', 'Yin_2016:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 25 | ['Yin_2016:abstract', 'Yin_2016:abstract', 'Yin_2016:abstract'] |
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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmirogabalin%5D%20Mirogabalin_Yin2016_reference&body=Drug%3A%20mirogabalin%0ARecord%3A%20Mirogabalin_Yin2016_reference%0APaper%3A%20Yin_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mirogabalin/Mirogabalin_Yin2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 06:26 UTC</sub>
