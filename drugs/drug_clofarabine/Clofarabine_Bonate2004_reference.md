<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;clofarabine&quot;,&quot;href&quot;:&quot;drugs/drug_clofarabine/&quot;},{&quot;label&quot;:&quot;Bonate_2004 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clofarabine_Bonate2011_reference&quot;,&quot;label&quot;:&quot;Bonate_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clofarabine/Clofarabine_Bonate2011_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clofarabine — `Clofarabine_Bonate2004_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Clearance normalized to 70 kg was reported in kg, creating a dimension mismatch with the volume parameters.

<div class="pk-model-meta" hidden drug="clofarabine" model-id="Clofarabine_Bonate2004_reference" status="rejected" stale="false" population="pediatric patients with acute leukemias" measured-compound="clofarabine" parameterization="mechanistic" topology="3C"></div>

## Citation
Bonate PL, Craig A, Gaynon P, Gandhi V, Jeha S, Kadota R et al. Population pharmacokinetics of clofarabine, a second-generation nucleoside analog, in pediatric patients with acute leukemia. Journal of clinical pharmacology 44(11):1309–1322 (2004).
  ·  DOI: [10.1177/0091270004269236](https://doi.org/10.1177/0091270004269236)

## Population and dosing

**Population:** pediatric patients with acute leukemias · condition acute leukemia · age group mixed · n = 32.

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| clearance-related terms | CLnorm | 0.75 | kg |
| volume-related terms | V | 1.0 | kg |
| reference patient | equation variable | 40 | kg |
| systemic clearance | CL | 32.8 | L/h |
| central volume | V1 | 115 | L |
| intercompartmental clearance | Q | 20.5 | L/h |
| peripheral volume | V2 | 94.5 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.615). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Clearance normalized to 70 kg was reported in kg, creating a dimension mismatch with the volume parameters.**

The record lists clearance normalized to a reference individual with a value of 0.75 and unit kg, which is dimensionally invalid. In contrast, the systemic clearance is correctly provided as 32.8 L/h. Since only the abstract was read, these summary statistics could not be reconciled into a consistent fitted model. Extracted — clofarabine: CLnorm 0.75 kg, V 1 kg, CL 32.8 L/h, V1 115 L, Q 20.5 L/h, V2 94.5 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of average predicted concentration: this record has none, the second reading 11.6; it also differs on 4 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| clearance-related terms | `Q354` · CLnorm | 0.75 | kg |  |  | kg | llm_corrected (0.6) | Bonate_2004:abstract |
| volume-related terms | `Q61` · V | 1.0 | kg |  |  | kg | llm_confirmed (0.6) | Bonate_2004:abstract |
| reference patient | `Q900` · equation variable | 40 | kg |  |  | kg | llm (0.6) | Bonate_2004:abstract |
| systemic clearance | `Q22` · CL | 32.8 | L/h | 9.111e-06 | m3/s | l/h | llm_confirmed (0.6) | Bonate_2004:abstract |
| central volume | `Q63` · V1 | 115 | L | 0.115 | m3 | l | exact (1) | Bonate_2004:abstract |
| intercompartmental clearance | `Q30` · Q | 20.5 | L/h | 5.694e-06 | m3/s | l/h | exact (1) | Bonate_2004:abstract |
| peripheral volume | `Q64` · V2 | 94.5 | L | 0.0945 | m3 | l | exact (1) | Bonate_2004:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| clofarabine triphosphate half-life | Q57 | llm |

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'weight'
- unit_dimension_mismatch: 'clearance-related terms' → Q354 (unit '[mass]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'volume-related terms' → Q61 (unit '[mass]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q900 ('average predicted concentration', value 11.6) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clofarabine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Bonate_2004_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.615 (8/13 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[average predicted concentration]` |  | 11.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance-related terms]` | 0.75 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clofarabine triphosphate half-life]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[reference patient]` | 40 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume-related terms]` | 1.0 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Bonate_2004:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Bonate_2004:abstract'] |
| C5_dimension_Q354 | fail | [mass] | kg | ['Bonate_2004:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Bonate_2004:abstract'] |
| C5_dimension_Q61 | fail | [mass] | kg | ['Bonate_2004:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Bonate_2004:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Bonate_2004:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 32.8 | ['Bonate_2004:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 32.8 L/h | ['Bonate_2004:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 115 L | ['Bonate_2004:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 94.5 L | ['Bonate_2004:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclofarabine%5D%20Clofarabine_Bonate2004_reference&body=Drug%3A%20clofarabine%0ARecord%3A%20Clofarabine_Bonate2004_reference%0APaper%3A%20Bonate_2004%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clofarabine/Clofarabine_Bonate2004_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 16:39 UTC</sub>
