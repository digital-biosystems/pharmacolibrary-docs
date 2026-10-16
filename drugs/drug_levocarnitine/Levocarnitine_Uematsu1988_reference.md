<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;levocarnitine&quot;,&quot;href&quot;:&quot;drugs/drug_levocarnitine/&quot;},{&quot;label&quot;:&quot;Uematsu_1988 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# levocarnitine — `Levocarnitine_Uematsu1988_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (primary re-run, agreement 0.222), gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. Only the abstract was available, so reported summary statistics stand in for a fitted model. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has l-carnitine, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `l-carnitine`, measured `carnitine`.

## Citation
Uematsu T et al., Pharmacokinetics and safety of l-carnit…, European journal of clinica… (1988)
  ·  DOI: [10.1007/BF00614562](https://doi.org/10.1007/BF00614562)

<div class="pk-model-meta" hidden drug="levocarnitine" model-id="Levocarnitine_Uematsu1988_reference" status="rejected" stale="false" population="healthy subjects" measured-compound="carnitine" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| V. | Q61 | not captured | llm |
| total 24 h excretion in urine | Q91 | not captured | llm_corrected |
| Vc | Q63 | not captured | exact |
| t1/2 gamma | Q89 | not captured | exact |
| urine recovery in 24 h | Q44 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'l-carnitine' — extend the ontology if this is a real PK parameter (source ['Uematsu_1988:abstract'])
- dropped unlinked row (NIL): 'healthy subjects' — extend the ontology if this is a real PK parameter (source ['Uematsu_1988:abstract'])
- unit_dimension_mismatch: 'V.' → Q61 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'total 24 h excretion in urine' → Q91 (unit '[mass] / [time]' vs ontology '[mass]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=carnitine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume Q63 kept: Q61 already present — review duplicate volume
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Uematsu_1988_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | primary re-run | 0.222 (2/9 fields) | 7 |
| `gpt-oss:120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[t1/2 gamma]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[total 24 h excretion in urine]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[urine recovery in 24 h]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v.]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | l-carnitine | levocarnitine | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | l-carnitine | levocarnitine | mismatch |
| `gpt-oss:120b` | `parameters[l-carnitine]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2 gamma]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2 gamma]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[total 24 h excretion in urine]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[total 24 h excretion in urine]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[urine recovery in 24 h]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v.]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v.]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | l-carnitine | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | l-carnitine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q44 | pass | dimensionless | not captured | not captured | not captured | ['Uematsu_1988:abstract'] |
| C5_dimension_Q61 | fail | dimensionless | % | not captured | not captured | ['Uematsu_1988:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Uematsu_1988:abstract'] |
| C5_dimension_Q89 | pass | [time] | not captured | not captured | not captured | ['Uematsu_1988:abstract'] |
| C5_dimension_Q91 | fail | [mass] / [time] | mg/day | not captured | not captured | ['Uematsu_1988:abstract', 'Uematsu_1988:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_levocarnitine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Uematsu_1988` / `Uematsu_1988::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:14 UTC</sub>
