<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;arsenic trioxide&quot;,&quot;href&quot;:&quot;drugs/drug_arsenic_trioxide/&quot;},{&quot;label&quot;:&quot;Hua_2011 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# arsenic trioxide — `ArsenicTrioxide_Hua2011_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the abstract-only source provided summary statistics that caused a dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="arsenic trioxide" model-id="ArsenicTrioxide_Hua2011_reference" status="rejected" stale="false" population="Chinese primary hepatocarcinoma patients" measured-compound="arsenic trioxide" parameterization="mechanistic" topology="1C"></div>

## Citation
Hua H, Qin S, Rui J, Li J. Pharmacokinetics of arsenic trioxide (As₂O₃) in Chinese primary hepatocarcinoma patients. Asian Pacific journal of cancer prevention : APJCP 12(1):61–65 (2011).

## Population and dosing

**Population:** Chinese primary hepatocarcinoma patients · condition primary hepatocarcinoma · age group adult · n = &gt;=13.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| The mean plasma maximal peak concentration (Cpmax) | Cmax | 136.4 | μg/L |
| plasma distribution half-life time (T½α) | t1/2α | 0.071 | hours |
| plasma elimination half-life time (T½β) | t1/2β | 23.9 | hours |
| apparent distribution volume (Vd) | V | 335.1 | L |
| system clearance (CLs) | CL | 8.65 | L/h |
| area under curve (AUC0-t) of concentration-time | AUCt | 1128.5 | μg/h/L |
| minimal steady state plasma drug concentration (Cssmin) | Cmin | 31.7 | μg/L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.211). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the abstract-only source provided summary statistics that caused a dimension mismatch on a structural parameter.**

The record was built from the abstract alone, so reported summary statistics stood in for a fitted model. This resulted in a dimension mismatch on a structural parameter. The specific parameter causing the mismatch is not identified in the facts. Extracted — arsenic trioxide: Cmax 136 μg/L, t1/2α 0.071 hours, t1/2β 23.9 hours, V 335 L, CL 8.65 L/h, AUCt 1.13e+03 μg/h/L, Cmin 31.7 μg/L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of apparent distribution volume: this record has 335.1, the second reading none; it also differs on 14 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| The mean plasma maximal peak concentration (Cpmax) | `Q32` · Cmax | 136.4 | μg/L |  |  | µg/l | llm_confirmed (0.6) | Hua_2011:abstract |
| plasma distribution half-life time (T½α) | `Q59` · t1/2α | 0.071 | hours | 255.6 | s | h | llm (0.6) | Hua_2011:abstract |
| plasma elimination half-life time (T½β) | `Q60` · t1/2β | 23.9 | hours | 8.604e+04 | s | h | llm (0.6) | Hua_2011:abstract |
| apparent distribution volume (Vd) | `Q61` · V | 335.1 | L | 0.3351 | m3 | l | llm_confirmed (0.6) | Hua_2011:abstract |
| system clearance (CLs) | `Q22` · CL | 8.65 | L/h | 2.403e-06 | m3/s | l/h | llm_confirmed (0.6) | Hua_2011:abstract |
| area under curve (AUC0-t) of concentration-time | `Q19` · AUCt | 1128.5 | μg/h/L |  |  | µg/(h·l) | llm_confirmed (0.6) | Hua_2011:abstract |
| minimal steady state plasma drug concentration (Cssmin) | `Q36` · Cmin | 31.7 | μg/L |  |  | µg/l | llm (0.6) | Hua_2011:abstract, Hua_2011:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q61 ('entry distribution volume (Vc)', value 20.3) — already have one for this compound
- unit_dimension_mismatch: 'area under curve (AUC0-t) of concentration-time' → Q19 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=arsenic trioxide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Hua_2011_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.211 (4/19 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent distribution volume]` | 335.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[area under curve (auc0-t) of concentration-time]` | 1128.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-t]` |  | 1128.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cls]` |  | 8.65 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cpmax]` |  | 136.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cssmin]` |  | 31.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[minimal steady state plasma drug concentration]` | 31.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma distribution half-life time]` | 0.071 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma elimination half-life time]` | 23.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[system clearance]` | 8.65 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1⁄2α]` |  | 0.071 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1⁄2β]` |  | 23.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[the mean plasma maximal peak concentration]` | 136.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` |  | 20.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` |  | 335.1 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q19 | fail | [mass] / [time] / [length] ** 3 | μg/h/L | ['Hua_2011:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Hua_2011:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Hua_2011:abstract'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 |  | ['Hua_2011:abstract', 'Hua_2011:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Hua_2011:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Hua_2011:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Hua_2011:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.65 | ['Hua_2011:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.65 L/h | ['Hua_2011:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 335 L | ['Hua_2011:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Barsenic_trioxide%5D%20ArsenicTrioxide_Hua2011_reference&body=Drug%3A%20arsenic_trioxide%0ARecord%3A%20ArsenicTrioxide_Hua2011_reference%0APaper%3A%20Hua_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_arsenic_trioxide/ArsenicTrioxide_Hua2011_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 23:11 UTC</sub>
