<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P03A&quot;,&quot;href&quot;:&quot;atc/P03A.md&quot;},{&quot;label&quot;:&quot;permethrin&quot;,&quot;href&quot;:&quot;drugs/drug_permethrin/&quot;},{&quot;label&quot;:&quot;G\u00f6gebakan_2015 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# permethrin — `Permethrin_Ggebakan2015_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q17 unit mg/h/l ([mass] / [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="permethrin" model-id="Permethrin_Ggebakan2015_reference" status="rejected" stale="false" population="broiler chickens" measured-compound="permethrin" parameterization="mechanistic" topology="1C"></div>

## Citation
Gögebakan T, Eraslan G. Single-dose toxicokinetics of permethrin in broiler chickens. British poultry science 56(5):605–611 (2015).
  ·  DOI: [10.1080/00071668.2015.1085957](https://doi.org/10.1080/00071668.2015.1085957)

## Population and dosing

**Population:** broiler chickens · condition healthy · age group adult.

> **Species: bird.** This record comes from an animal study (bird), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| half-life at λ phase (t1/2λ) | t1/2β | 4.73 | h |
| mean residence time (MRT) | MRT | 5.06 | h |
| area under the concentration-time curve in 0→∞ (AUC0→∞) | AUC∞ | 16.45 | mg/h/l |
| Cmax | Cmax | 0.6 | μg/ml |
| tmax | tmax | 0.55 | h |
| t1/2λ | t1/2α | 5.54 | h |
| bioavailability | Fab | 0.11 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q17 unit mg/h/l ([mass] / [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3.**

Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — permethrin: t1/2β 4.73 h, MRT 5.06 h, AUC∞ 16.4 mg/h/l, Cmax 0.6 μg/ml, tmax 0.55 h, t1/2α 5.54 h, Fab 0.11.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of bioavailability: this record has 0.11, the second reading none; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| half-life at λ phase (t1/2λ) | `Q60` · t1/2β | 4.73 | h | 1.703e+04 | s | h | llm (0.6) | Gögebakan_2015:abstract |
| mean residence time (MRT) | `Q53` · MRT | 5.06 | h | 1.822e+04 | s | h | exact (1) | Gögebakan_2015:abstract |
| area under the concentration-time curve in 0→∞ (AUC0→∞) | `Q17` · AUC∞ | 16.45 | mg/h/l |  |  | mg/(h·l) | llm (0.6) | Gögebakan_2015:abstract |
| Cmax | `Q32` · Cmax | 0.6 | μg/ml | 0.0006 | kg/m3 | µg/ml | exact (1) | Gögebakan_2015:abstract |
| tmax | `Q56` · tmax | 0.55 | h | 1980 | s | h | exact (1) | Gögebakan_2015:abstract |
| t1/2λ | `Q59` · t1/2α | 5.54 | h | 1.994e+04 | s | h | llm_corrected (0.6) | Gögebakan_2015:abstract |
| bioavailability | `Q40` · Fab | 0.11 |  |  |  |  | exact (1) | Gögebakan_2015:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'area under the concentration-time curve in 0→∞ (AUC0→∞)' → Q17 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q53 ('MRT', value 7.06) — already have one for this compound
- unit_dimension_mismatch: 'AUC0→∞' → Q17 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q17 ('AUC0→∞', value 1.95) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=permethrin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Gögebakan_2015_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.714 (10/14 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bioavailability of permethrin]` |  | 0.11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability]` | 0.11 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[half-life at λ phase].parameter_id` | Q60 | Q57 | mismatch |
| `gpt-oss-120b` | `parameters[t1/2λ]` | 5.54 |  | only_one_extracted |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | fail | [mass] * [time] / [length] ** 3 | mg/h/l ([mass] / [time] / [length] ** 3) | ['Gögebakan_2015:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Gögebakan_2015:abstract'] |
| C5_dimension_Q53 | pass | [time] |  | ['Gögebakan_2015:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Gögebakan_2015:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Gögebakan_2015:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Gögebakan_2015:abstract'] |
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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpermethrin%5D%20Permethrin_Ggebakan2015_reference&body=Drug%3A%20permethrin%0ARecord%3A%20Permethrin_Ggebakan2015_reference%0APaper%3A%20G%C3%B6gebakan_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_permethrin/Permethrin_Ggebakan2015_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-24 03:04 UTC</sub>
