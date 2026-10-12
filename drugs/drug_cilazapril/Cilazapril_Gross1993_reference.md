<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;cilazapril&quot;,&quot;href&quot;:&quot;drugs/drug_cilazapril/&quot;},{&quot;label&quot;:&quot;Gross_1993 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cilazapril — `Cilazapril_Gross1993_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25), gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The cilazapril record was rejected because the hydrolysis link to cilazaprilat leaves the metabolite unlinked from the dose, and the abstract-only source means summary statistics (CL 7.8 l/h, t1/2α 2.5 h) stand in for a fitted model.**

The record contains only a hydrolysis relation from cilazapril to cilazaprilat with no dose-connecting structure, so the metabolite compartment is unreachable, triggering the orphan-compartment refusal. Because only the paper's abstract was read, the reported values — clearance 7.8 l/h, fast-phase half-life 2.5 h, absorption rate constant 0.319 h⁻¹, lag time 2.0 h — are summary statistics rather than fitted model parameters. A second reader also disagreed on the parameterization (mechanistic vs apparent) and on whether the cilazaprilat hydrolysis link should exist at all, and read the 7.8 l/h as apparent oral clearance and the 2.5 h as plasma half-life. Extracted — cilazapril: CL 7.8 l/h, t1/2α 2.5 h, kabs 0.319 h–1, tlag 2 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has cilazapril → cilazaprilat (hydrolysis), the second reading none; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:36:55.531461+00:00) predates the upstream re-run (2026-10-02 17:16:53.705553+00:00). Current validate status: `rejected`.

## Citation
Gross V et al., Angiotensin-converting enzyme (ACE)-inh…, Journal of hepatology (1993)
  ·  DOI: [10.1016/s0168-8278(05)80519-7](https://doi.org/10.1016/s0168-8278(05)80519-7)

## Model component
<dbs-pgx drug="cilazapril" model-id="Cilazapril_Gross1993_reference" status="rejected" stale="true" population="healthy volunteers and patients with compensated cirrhosis" measured-compound="cilazapril" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| 7.8 +/- 6.0 l/h vs. | `Q22` · CL | 7.8 | l/h | 2.1666666666666665e-06 | [l] / [h] | not captured | llm (0.6) | Gross_1993:abstract | — | not captured |
| 1st phase: 2.5 +/- 0.8 h vs. | `Q59` · t1/2α | 2.5 | h | 9000.0 | [h] | not captured | llm (0.6) | Gross_1993:abstract | — | not captured |
| Ka | `Q49` · kabs | 0.319 | h–1 | 8.861111111111111e-05 | 1/h | not captured | review_gapfill (0.7) | Kim_2017:review | — | not captured |
| LAG | `Q83` · tlag | 2.0 | h | 7200.0 | h | not captured | review_gapfill (0.7) | Kim_2017:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (3/12 fields) | 9 |
| `gpt-oss:120b` | not confirmed | 0.2 (2/10 fields) | 8 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['cilazapril', 'cilazaprilat', 'hydrolysis']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[/max]` | not captured | 94.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[1st phase: 2.5 +/- 0.8 h vs.]` | 2.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[7.8 +/- 6.0 l/h vs.]` | 7.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc24]` | not captured | 65.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cm=-]` | not captured | 10.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[i.,4]` | not captured | 53.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.319 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag]` | 2.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `model.links` | [['cilazapril', 'cilazaprilat', 'hydrolysis']] | [] | mismatch |
| `gpt-oss:120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss:120b` | `parameters[1st phase: 2.5 +/- 0.8 h vs.]` | 2.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[7.8 +/- 6.0 l/h vs.]` | 7.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent oral clearance]` | not captured | 7.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 0.319 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[lag]` | 2.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[plasma half-life]` | not captured | 2.5 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Gross_1993:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Kim_2017:review'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Gross_1993:abstract'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Kim_2017:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.8 | not captured | not captured | ['Gross_1993:abstract'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.8 L/h | not captured | not captured | ['Gross_1993:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_cilazapril/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gross_1993` / `Gross_1993::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-02 17:16 UTC</sub>
