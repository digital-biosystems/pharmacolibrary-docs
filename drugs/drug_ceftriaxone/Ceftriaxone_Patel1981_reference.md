<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;ceftriaxone&quot;,&quot;href&quot;:&quot;drugs/drug_ceftriaxone/&quot;},{&quot;label&quot;:&quot;Patel_1981 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ceftriaxone_Alonso2021_reference&quot;,&quot;label&quot;:&quot;Alonso_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ceftriaxone/Ceftriaxone_Alonso2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ceftriaxone_Kumar2010_reference&quot;,&quot;label&quot;:&quot;Kumar_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ceftriaxone/Ceftriaxone_Kumar2010_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ceftriaxone_RoubaudBaudron2025_reference&quot;,&quot;label&quot;:&quot;Roubaud-Baudron_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ceftriaxone/Ceftriaxone_RoubaudBaudron2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ceftriaxone — `Ceftriaxone_Patel1981_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The ceftriaxone volume of distribution was recorded in liters, a unit with no defined conversion factor, causing rejection.

<div class="pk-model-meta" hidden drug="ceftriaxone" model-id="Ceftriaxone_Patel1981_reference" status="rejected" stale="false" population="healthy adults" measured-compound="ceftriaxone" parameterization="mechanistic" topology="1C"></div>

## Citation
Patel IH, Chen S, Parsonnet M, Hackman MR, Brooks MA, Konikoff J et al. Pharmacokinetics of ceftriaxone in humans. Antimicrobial agents and chemotherapy 20(5):634–641 (1981).
  ·  DOI: [10.1128/AAC.20.5.634](https://doi.org/10.1128/AAC.20.5.634)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = 12.

**Dosing:** 500, 1000, 2000 mg, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| A (pg/ml) | equation variable | 37.1 | pg/ml |
| B (ug/ml) | Ct | 1306 | ug/ml |
| AUC (pg.h/mi) | AUC | 551 | pg.h/mi |
| V, (liter) | V | 4.54 | liter |
| Ka (h−1)   1 0.55 | kabs | 1.0 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.538). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The ceftriaxone volume of distribution was recorded in liters, a unit with no defined conversion factor, causing rejection.**

The model specifies a volume of distribution value of 4.54 liters. This unit lacks a defined path to standard SI units, preventing a valid dimensional check. Consequently, the parameter arrived with an unconverted value, triggering a dimension mismatch and the record's refusal. Extracted — ceftriaxone: Ct 1.31e+03 ug/ml, AUC 551 pg.h/mi, V 4.54 liter, kabs 1 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of 0-24: this record has none, the second reading 373; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| A (pg/ml) | `Q900` · equation variable | 37.1 | pg/ml |  |  | pg/ml | llm (0.6) | tab_1:row4:col1, tab_1:row4:col2, tab_1:row4:col3 |
| B (ug/ml) | `Q75` · Ct | 1306 | ug/ml |  |  | µg/ml | llm (0.6) | tab_1:row8:col1, tab_1:row8:col2, tab_1:row8:col3 |
| AUC (pg.h/mi) | `Q88` · AUC | 551 | pg.h/mi |  |  | (h·pg)/(m·i) | exact (1) | tab_1:row16:col1, tab_1:row16:col2, tab_1:row16:col3 |
| V, (liter) | `Q61` · V | 4.54 | liter | 0.00454 | m3 | l | llm (0.6) | tab_1:row18:col1, tab_1:row18:col2, tab_1:row18:col3 |
| Ka (h−1)   1 0.55 | `Q49` · kabs | 1.0 | h−1 | 0.0002778 | 1/s | 1/h | review_gapfill (0.7) | Alonso_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'and two-tailed paired t-test' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped PD-category row 'a (per h)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row6:col1', 'tab_1:row6:col2', 'tab_1:row6:col3'])
- unit_dimension_mismatch: 'AUC (pg.h/mi)' → Q88 (unit '[mass] * [time] / [length]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ceftriaxone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Alonso_2021's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_1:row6:col4 = 'P 0.01'
- unparsed cell tab_1:row6:col6 = 'P 0.01'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.538 (7/13 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[0-24]` |  | 373 | only_one_extracted |
| `gpt-oss-120b` | `parameters[12-24]` |  | 305 | only_one_extracted |
| `gpt-oss-120b` | `parameters[a].parameter_id` | Q900 | Q47 | mismatch |
| `gpt-oss-120b` | `parameters[a].value` | 37.1 | 3.3 | mismatch |
| `gpt-oss-120b` | `parameters[b].parameter_id` | Q75 | Q86 | mismatch |
| `gpt-oss-120b` | `parameters[ka (h-1) 1 0.55]` | 1.0 |  | only_one_extracted |

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
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Alonso_2021:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_1:row18:col1', 'tab_1:row18:col2', 'tab_1:row18:col3'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  | ['tab_1:row8:col1', 'tab_1:row8:col2', 'tab_1:row8:col3'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] | pg.h/mi | ['tab_1:row16:col1', 'tab_1:row16:col2', 'tab_1:row16:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.54 L | ['tab_1:row18:col1', 'tab_1:row18:col2', 'tab_1:row18:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bceftriaxone%5D%20Ceftriaxone_Patel1981_reference&body=Drug%3A%20ceftriaxone%0ARecord%3A%20Ceftriaxone_Patel1981_reference%0APaper%3A%20Patel_1981%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ceftriaxone/Ceftriaxone_Patel1981_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 10:45 UTC</sub>
