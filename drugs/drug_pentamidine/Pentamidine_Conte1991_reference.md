<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;Pentamidine&quot;,&quot;href&quot;:&quot;drugs/drug_pentamidine/&quot;},{&quot;label&quot;:&quot;Conte_1991 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Pentamidine — `Pentamidine_Conte1991_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The pentamidine record was rejected because the intercompartmental clearance Q between central and peripheral compartments has a dimension mismatch, with a value of 0.001 L/h that is inconsistent with the structural parameter's expected scale.

<div class="pk-model-meta" hidden drug="Pentamidine" model-id="Pentamidine_Conte1991_reference" status="rejected" stale="false" population="patients with normal renal function or receiving hemodialysis" measured-compound="pentamidine" parameterization="mechanistic" topology="1C"></div>

## Citation
Conte JE. Pharmacokinetics of intravenous pentamidine in patients with normal renal function or receiving hemodialysis. The Journal of infectious diseases 163(1):169–175 (1991).
  ·  DOI: [10.1093/infdis/163.1.169](https://doi.org/10.1093/infdis/163.1.169)

## Population and dosing

**Population:** patients with normal renal function or receiving hemodialysis · condition Pneumocystis carinii pneumonia / renal impairment · age group adult · n = 24.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| peak plasma concentration | Cmax | 249 | ng/ml |
| plasma clearance | CL | 268 | l/h |
| elimination half-life | t1/2z | 29 | h |
| P | Q | 0.001 | L/h |
| renal clearance-to-plasma clearance ratio | CL_ratio | 2.1 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The pentamidine record was rejected because the intercompartmental clearance Q between central and peripheral compartments has a dimension mismatch, with a value of 0.001 L/h that is inconsistent with the structural parameter's expected scale.**

The model for pentamidine (Conte_1991, one-compartment structure) reports plasma clearance of 268 l/h, terminal half-life of 29 h, and Cmax of 249 ng/ml, but the intercompartmental clearance Q is recorded as 0.001 L/h, which failed the dimensional check on a structural parameter. The record was also built from the paper's abstract alone, so reported summary statistics stood in for a fitted model, limiting what could be validated. Extracted — pentamidine: Cmax 249 ng/ml, CL 268 l/h, t1/2z 29 h, Q 0.001 L/h, CL_ratio 2.1 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[elimination half-life].value`: this record has 29, the second reading none; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| peak plasma concentration | `Q32` · Cmax | 249 | ng/ml |  |  | ng/ml | llm_confirmed (0.6) | Conte_1991:abstract, Conte_1991:abstract |
| plasma clearance | `Q22` · CL | 268 | l/h | 7.444e-05 | m3/s | l/h | llm_confirmed (0.6) | Conte_1991:abstract, Conte_1991:abstract |
| elimination half-life | `Q57` · t1/2z | 29 | h | 1.044e+05 | s | h | llm (0.6) | Conte_1991:abstract, Conte_1991:abstract |
| P | `Q30` · Q | 0.001 | L/h | 2.778e-10 | m3/s | L/h | llm (0.6) | Conte_1991:abstract |
| renal clearance-to-plasma clearance ratio | `Q31` · CL_ratio | 2.1 | % |  |  | % | llm_confirmed (0.6) | Conte_1991:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| linear regression | Q900 | llm |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q900 ('r', value 0.91) — already have one for this compound
- unit_dimension_mismatch: 'renal clearance-to-plasma clearance ratio' → Q31 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q57 ('elimination half-life after the last dose', value 12.0) — already have one for this compound
- covariate renal for fe from footnote/prose kept as documentation only (['Conte_1991:abstract', 'Conte_1991:abstract'])
- implicit units: 'P' → L/h (from the popPK convention: 'No unit stated in text, caption, or footnotes. Intercompartmental clearance (Q) in population PK is conventionally expre')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pentamidine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Conte_1991_metadata.yaml (13 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (5/10 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[elimination half-life].value` | 29 |  | mismatch |
| `gpt-oss-120b` | `parameters[linear regression]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[p]` | 0.001 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[peak plasma concentration].value` | 249 |  | mismatch |
| `gpt-oss-120b` | `parameters[plasma clearance].value` | 268 |  | mismatch |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Conte_1991:abstract', 'Conte_1991:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Conte_1991:abstract'] |
| C5_dimension_Q31 | fail | dimensionless | % | ['Conte_1991:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Conte_1991:abstract', 'Conte_1991:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Conte_1991:abstract', 'Conte_1991:abstract'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 268 | ['Conte_1991:abstract', 'Conte_1991:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 268 L/h | ['Conte_1991:abstract', 'Conte_1991:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpentamidine%5D%20Pentamidine_Conte1991_reference&body=Drug%3A%20pentamidine%0ARecord%3A%20Pentamidine_Conte1991_reference%0APaper%3A%20Conte_1991%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pentamidine/Pentamidine_Conte1991_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 08:20 UTC</sub>
