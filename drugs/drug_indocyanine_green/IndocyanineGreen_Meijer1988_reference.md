<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;indocyanine green&quot;,&quot;href&quot;:&quot;drugs/drug_indocyanine_green/&quot;},{&quot;label&quot;:&quot;Meijer_1988 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;IndocyanineGreen_Han2025_reference&quot;,&quot;label&quot;:&quot;Han_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_indocyanine_green/IndocyanineGreen_Han2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# indocyanine green — `IndocyanineGreen_Meijer1988_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The indocyanine green record was rejected because the extracted volume of distribution of 3.01 mL and clearance of 230 ml.min-1 fail the physiological plausibility check, indicating a unit or scale extraction error.

<div class="pk-model-meta" hidden drug="indocyanine green" model-id="IndocyanineGreen_Meijer1988_reference" status="rejected" stale="false" population="patients undergoing bile collection" measured-compound="indocyanine green" parameterization="mechanistic" topology="1C"></div>

## Citation
Meijer DK, Weert B, Vermeer GA. Pharmacokinetics of biliary excretion in man. VI. Indocyanine green. European journal of clinical pharmacology 35(3):295–303 (1988).
  ·  DOI: [10.1007/BF00558268](https://doi.org/10.1007/BF00558268)

## Population and dosing

**Population:** patients undergoing bile collection · age group adult · n = 15.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| dose-dependent apparent t1/2 | t1/2z | 67.6 | min |
| mean t1/2 of ascending phase of biliary excretion rate curve | kexcr | 5 | min |
| t1/2 of the descending phase | t1/2β | 73 | min |
| time of maximal excretion | tmax | 1.3 | h |
| clearance | CL | 230 | ml.min-1 |
| Volume of Distribution V | V | 3.01 | mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The indocyanine green record was rejected because the extracted volume of distribution of 3.01 mL and clearance of 230 ml.min-1 fail the physiological plausibility check, indicating a unit or scale extraction error.**

The volume of distribution was recorded as 3.01 mL, a magnitude far below any plausible value for indocyanine green, and the clearance of 230 ml.min-1 was flagged as outside the physiological window; both point to a dimension mismatch on a structural parameter, likely from misreading units in the abstract. The record was built from the paper's abstract alone, so reported summary statistics stood in for a fitted model, which limits what could be extracted. Other parameters, such as the terminal half-life of 67.6 min and the biliary excretion half-life of 5 min, were recorded but the implausible clearance and volume caused the rejection. Extracted — indocyanine green: t1/2z 67.6 min, kexcr 5 min, t1/2β 73 min, tmax 1.3 h, CL 230 ml.min-1, V 3.01 mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[clearance].value`: this record has 230, the second reading 475; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| dose-dependent apparent t1/2 | `Q57` · t1/2z | 67.6 | min | 4056 | s | min | llm_confirmed (0.6) | Meijer_1988:abstract, Meijer_1988:abstract, Meijer_1988:abstract |
| mean t1/2 of ascending phase of biliary excretion rate curve | `Q50` · kexcr | 5 | min |  |  | min | llm_corrected (0.6) | Meijer_1988:abstract |
| t1/2 of the descending phase | `Q60` · t1/2β | 73 | min | 4380 | s | min | llm_corrected (0.6) | Meijer_1988:abstract, Meijer_1988:abstract |
| time of maximal excretion | `Q56` · tmax | 1.3 | h | 4680 | s | h | llm_corrected (0.6) | Meijer_1988:abstract, Meijer_1988:abstract |
| clearance | `Q22` · CL | 230 | ml.min-1 | 3.833e-06 | m3/s | ml/min | exact (1) | Meijer_1988:abstract, Meijer_1988:abstract |
| Volume of Distribution V | `Q61` · V | 3.01 | mL | 3.01e-06 | m3 | L | review_gapfill (0.7) | Carpenter_2018:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 't1/2 of initial phase'
- unit_dimension_mismatch: 'mean t1/2 of ascending phase of biliary excretion rate curve' → Q50 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q57 ('mean t1/2 of descending phase of biliary excretion rate curve', value 72) — already have one for this compound
- dropped duplicate Q22 ('clearance conventionally calculated from the initial t1/2', value 475) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=indocyanine green
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Carpenter_2018's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Meijer_1988_metadata.yaml (13 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (4/12 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clearance].value` | 230 | 475 | mismatch |
| `gpt-oss-120b` | `parameters[dose-dependent apparent t1/2]` | 67.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean t1/2 of ascending phase of biliary excretion rate curve]` | 5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 (ascending phase,]` |  | 5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 of the descending phase]` | 73 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[time of maximal excretion].value` | 1.3 |  | mismatch |
| `gpt-oss-120b` | `parameters[volume of distribution v]` | 3.01 |  | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Meijer_1988:abstract', 'Meijer_1988:abstract'] |
| C5_dimension_Q50 | fail | [time] | min | ['Meijer_1988:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Meijer_1988:abstract', 'Meijer_1988:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Meijer_1988:abstract', 'Meijer_1988:abstract', 'Meijer_1988:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Meijer_1988:abstract', 'Meijer_1988:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Carpenter_2018:review'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 230 | ['Meijer_1988:abstract', 'Meijer_1988:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 13.8 L/h | ['Meijer_1988:abstract', 'Meijer_1988:abstract'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.00301 L | ['Carpenter_2018:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bindocyanine_green%5D%20IndocyanineGreen_Meijer1988_reference&body=Drug%3A%20indocyanine_green%0ARecord%3A%20IndocyanineGreen_Meijer1988_reference%0APaper%3A%20Meijer_1988%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_indocyanine_green/IndocyanineGreen_Meijer1988_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 21:11 UTC</sub>
