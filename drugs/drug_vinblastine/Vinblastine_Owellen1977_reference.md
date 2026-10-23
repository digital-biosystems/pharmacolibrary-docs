<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vinblastine&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/&quot;},{&quot;label&quot;:&quot;Owellen_1977 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vinblastine_Levque1996_reference&quot;,&quot;label&quot;:&quot;Lev\u00eaque_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Levque1996_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Toso1995_reference&quot;,&quot;label&quot;:&quot;Toso_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Toso1995_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Petric2023_reference&quot;,&quot;label&quot;:&quot;Petric_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Petric2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Zhou1990_reference&quot;,&quot;label&quot;:&quot;Zhou_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Zhou1990_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vinblastine — `Vinblastine_Owellen1977_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record is rejected because the 1173.0 min terminal half-life is inconsistent with the reported two-compartment structure.

<div class="pk-model-meta" hidden drug="vinblastine" model-id="Vinblastine_Owellen1977_reference" status="rejected" stale="false" population="humans" measured-compound="vinblastine" parameterization="mechanistic" topology="2C"></div>

## Citation
Owellen RJ, Hartke CA, Hains FO. Pharmacokinetics and metabolism of vinblastine in humans. Cancer research 37(8 Pt 1):2597–2602 (1977).

## Population and dosing

**Population:** humans · age group adult.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| alpha phase: t1/2 | t1/2α | 3.9 | min |
| Vc | V1 | 16.8 | liters |
| beta phase: t1/2 | t1/2β | 53.0 | min |
| Vbeta | V2 | 79.0 | liters |
| gamma phase: t1/2 | t1/2γ | 1173.0 | min |
| systemic clearance | CL | 46.2 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.267), gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record is rejected because the 1173.0 min terminal half-life is inconsistent with the reported two-compartment structure.**

The extracted model structure specifies a two-compartment design, yet the parameters include a terminal elimination half-life (1173.0 min) characteristic of a third compartment. Additionally, the second reader disagreed on several parameter values and the dose compound, noting that the abstract-only source provided summary statistics rather than fitted model outputs. Extracted — vinblastine: t1/2α 3.9 min, V1 16.8 liters, t1/2β 53 min, V2 79 liters, t1/2γ 1.17e+03 min, CL 46.2 L/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on how the model is parameterised: this record has mechanistic, the second reading apparent; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| alpha phase: t1/2 | `Q59` · t1/2α | 3.9 | min | 234 | s | min | llm_corrected (0.6) | Owellen_1977:abstract |
| Vc | `Q63` · V1 | 16.8 | liters | 0.0168 | m3 | l | exact (1) | Owellen_1977:abstract |
| beta phase: t1/2 | `Q60` · t1/2β | 53.0 | min | 3180 | s | min | llm_corrected (0.6) | Owellen_1977:abstract |
| Vbeta | `Q64` · V2 | 79.0 | liters | 0.079 | m3 | l | llm_corrected (0.6) | Owellen_1977:abstract |
| gamma phase: t1/2 | `Q89` · t1/2γ | 1173.0 | min | 7.038e+04 | s | min | llm_corrected (0.6) | Owellen_1977:abstract |
| systemic clearance | `Q22` · CL | 46.2 | L/h | 1.283e-05 | m3/s | L/h | review_gapfill (0.7) | Levêque_1996:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Vgamma' — extend the ontology if this is a real PK parameter (source ['Owellen_1977:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vinblastine
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Levêque_1996's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Owellen_1977_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.267 (4/15 fields) | 11 |
| `gpt-oss:120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>23 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[alpha phase: t1/2]` | 3.9 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[beta phase:t1/2]` | 53.0 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[gamma phase:t1/2]` | 1173.0 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2]` |  | 3.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vbeta]` |  | 79.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vbeta]` | 79.0 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc]` |  | 16.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc]` | 16.8 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vgamma]` |  | 1656.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vgamma]` | 1656.0 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | vinblastine | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | vinblastine | unknown | mismatch |
| `qwen3.8-27b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `qwen3.8-27b` | `parameters[alpha phase: vc]` |  | 16.8 | only_one_extracted |
| `qwen3.8-27b` | `parameters[beta phase: t1/2]` |  | 53.0 | only_one_extracted |
| `qwen3.8-27b` | `parameters[beta phase: vbeta]` |  | 79.0 | only_one_extracted |
| `qwen3.8-27b` | `parameters[beta phase:t1/2]` | 53.0 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[gamma phase: t1/2]` |  | 1173.0 | only_one_extracted |
| `qwen3.8-27b` | `parameters[gamma phase: vgamma]` |  | 1656.0 | only_one_extracted |
| `qwen3.8-27b` | `parameters[gamma phase:t1/2]` | 1173.0 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[systemic clearance]` | 1491.0 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[vbeta]` | 79.0 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[vc]` | 16.8 |  | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Levêque_1996:review'] |
| C5_dimension_Q59 | pass | [time] |  | ['Owellen_1977:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Owellen_1977:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Owellen_1977:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Owellen_1977:abstract'] |
| C5_dimension_Q89 | pass | [time] |  | ['Owellen_1977:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 46.2 | ['Levêque_1996:review'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 46.2 L/h | ['Levêque_1996:review'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 16.8 L | ['Owellen_1977:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 79 L | ['Owellen_1977:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvinblastine%5D%20Vinblastine_Owellen1977_reference&body=Drug%3A%20vinblastine%0ARecord%3A%20Vinblastine_Owellen1977_reference%0APaper%3A%20Owellen_1977%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vinblastine/Vinblastine_Owellen1977_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 11:49 UTC</sub>
