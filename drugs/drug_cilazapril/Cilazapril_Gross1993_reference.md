<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;cilazapril&quot;,&quot;href&quot;:&quot;drugs/drug_cilazapril/&quot;},{&quot;label&quot;:&quot;Gross_1993 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cilazapril — `Cilazapril_Gross1993_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Cilazapril's metabolism to cilazaprilat is unlinked, and abstract-only values lack mechanistic depth.

<div class="pk-model-meta" hidden drug="cilazapril" model-id="Cilazapril_Gross1993_reference" status="rejected" stale="false" population="healthy volunteers and patients with compensated cirrhosis" measured-compound="cilazapril" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Gross V, Treher E, Haag K, Neis W, Wiegand U, Schölmerich J. Angiotensin-converting enzyme (ACE)-inhibition in cirrhosis. Pharmacokinetics and dynamics of the ACE-inhibitor cilazapril (Ro 31-2848). Journal of hepatology 17(1):40–47 (1993).
  ·  DOI: [10.1016/s0168-8278(05)80519-7](https://doi.org/10.1016/s0168-8278(05)80519-7)

## Population and dosing

**Population:** healthy volunteers and cirrhotic patients · condition cirrhosis · age group adult · n = 19.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 7.8 +/- 6.0 l/h vs. | CL | 7.8 | l/h |
| 1st phase: 2.5 +/- 0.8 h vs. | t1/2α | 2.5 | h |
| Ka | kabs | 0.319 | h–1 |
| LAG | tlag | 2.0 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Cilazapril's metabolism to cilazaprilat is unlinked, and abstract-only values lack mechanistic depth.**

The record defines a hydrolysis path from cilazapril to cilazaprilat but assigns no link parameter, leaving the metabolite compartment unreachable. Because the data is abstract-only, the reported clearance of 7.8 l/h stands in for a fitted model rather than a mechanistic estimate. A second reader disagreed on the mechanistic parameterization and disputed several parameter values like the absorption rate constant. Extracted — cilazapril: CL 7.8 l/h, t1/2α 2.5 h, kabs 0.319 h–1, tlag 2 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has cilazapril → cilazaprilat (hydrolysis), the second reading none; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 7.8 +/- 6.0 l/h vs. | `Q22` · CL | 7.8 | l/h | 2.167e-06 | m3/s | l/h | llm (0.6) | Gross_1993:abstract |
| 1st phase: 2.5 +/- 0.8 h vs. | `Q59` · t1/2α | 2.5 | h | 9000 | s | h | llm (0.6) | Gross_1993:abstract |
| Ka | `Q49` · kabs | 0.319 | h–1 | 8.861e-05 | 1/s | 1/h | review_gapfill (0.7) | Kim_2017:review |
| LAG | `Q83` · tlag | 2.0 | h | 7200 | s | h | review_gapfill (0.7) | Kim_2017:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: '25.5 +/- 7.9 ng/ml; p &lt; 0.05) and a decreased apparent oral clearance (7.8 +/- 6.0 l/h vs.'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cilazapril
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Kim_2017's review values (primary lacked it)
- gap-filled Q83 (tlag) from Kim_2017's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Gross_1993_metadata.yaml (3 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (3/12 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['cilazapril', 'cilazaprilat', 'hydrolysis']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[/max]` |  | 94.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[1st phase: 2.5 +/- 0.8 h vs.]` | 2.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[7.8 +/- 6.0 l/h vs.]` | 7.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc24]` |  | 65.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cm=-]` |  | 10.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[i.,4]` |  | 53.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.319 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag]` | 2.0 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Gross_1993:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kim_2017:review'] |
| C5_dimension_Q59 | pass | [time] |  | ['Gross_1993:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Kim_2017:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.8 | ['Gross_1993:abstract'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.8 L/h | ['Gross_1993:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcilazapril%5D%20Cilazapril_Gross1993_reference&body=Drug%3A%20cilazapril%0ARecord%3A%20Cilazapril_Gross1993_reference%0APaper%3A%20Gross_1993%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cilazapril/Cilazapril_Gross1993_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 10:03 UTC</sub>
