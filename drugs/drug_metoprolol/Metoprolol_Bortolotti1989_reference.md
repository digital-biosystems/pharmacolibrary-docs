<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;metoprolol&quot;,&quot;href&quot;:&quot;drugs/drug_metoprolol/&quot;},{&quot;label&quot;:&quot;Bortolotti_1989 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# metoprolol — `Metoprolol_Bortolotti1989_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.846), gpt-oss:120b (not confirmed, agreement 0.105). The first reading is what the record holds.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected because the plasma protein binding value of 32% was incorrectly assigned to the unbound fraction parameter.**

The parameter labeled 'Plasma protein binding' with a value of 32% is defined as the unbound fraction (fu), creating a dimension mismatch. The record was built from the abstract alone, so these summary statistics stand in for a fitted model. A second reader could not verify the extracted values for clearance, AUC, or the elimination rate constant. Extracted — metoprolol: fu 32 %, CL 3.7 1/h/kg, MRT 0.77 h, AUC 0.9 mg h/l, kel 3.17 h-1, Ae 1.5 % of the administered dose.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of dose: this record has none, the second reading 3.2; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-29 08:52:10.271149+00:00) predates the upstream re-run (2026-10-07 00:08:09.410974+00:00). Current validate status: `rejected`.

## Citation
Bortolotti A et al., Pharmacokinetic and pharmacodynamic mod…, European journal of drug me… (1989)
  ·  DOI: [10.1007/BF03190855](https://doi.org/10.1007/BF03190855)

## Model component
<dbs-pgx drug="metoprolol" model-id="Metoprolol_Bortolotti1989_reference" status="rejected" stale="true" population="rabbits with liver failure" measured-compound="metoprolol" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Plasma protein binding | `Q46` · fu | 32 | % | not captured | [%] | not captured | llm_confirmed (0.6) | Bortolotti_1989:abstract, Bortolotti_1989:abstract | — | not captured |
| total plasma drug clearance | `Q22` · CL | 3.7 | 1/h/kg | not captured | [1] / [[h] · [kg]] | not captured | llm_confirmed (0.6) | Bortolotti_1989:abstract, Bortolotti_1989:abstract | — | not captured |
| MRT | `Q53` · MRT | 0.77 | h | 2772.0 | [h] | not captured | exact (1.0) | Bortolotti_1989:abstract, Bortolotti_1989:abstract | — | not captured |
| AUC | `Q88` · AUC | 0.9 | mg h/l | not captured | [[h] · [mg]] / [l] | not captured | exact (1.0) | Bortolotti_1989:abstract, Bortolotti_1989:abstract | — | not captured |
| k10 | `Q47` · kel | 3.17 | h-1 | 0.0008805555555555555 | [1] / [h] | not captured | exact (1.0) | Bortolotti_1989:abstract, Bortolotti_1989:abstract | — | not captured |
| amount excreted | `Q91` · Ae | 1.5 | % of the administered dose | not captured | [%] · [oftheadministereddose] | not captured | exact (1.0) | Bortolotti_1989:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| terminal elimination half-life | Q57 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'total plasma drug clearance' → Q22 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_unknown: 'mg h/l' (AUC)
- unit_dimension_unknown: '% of the administered dose' (Ae )
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=metoprolol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Bortolotti_1989_metadata.yaml (13 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.846 (11/13 fields) | 2 |
| `gpt-oss:120b` | not confirmed | 0.105 (2/19 fields) | 17 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[dose]` | not captured | 3.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total plasma drug clearance].parameter_id` | Q22 | Q354 | mismatch |
| `gpt-oss:120b` | `parameters[amount excreted]` | 1.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[amount excreted]` | not captured | 1.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc]` | 0.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc]` | not captured | 0.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[dose]` | not captured | 3.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k10]` | 3.17 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k10]` | not captured | 3.17 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mrt]` | 0.77 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[mrt]` | not captured | 0.77 | only_one_extracted |
| `gpt-oss:120b` | `parameters[plasma protein binding, concentration-independent, normal]` | not captured | 32 | only_one_extracted |
| `gpt-oss:120b` | `parameters[plasma protein binding]` | 32 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[terminal elimination half-life]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[terminal elimination half-life]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[total plasma drug clearance]` | 3.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[total plasma drug clearance]` | not captured | 3.7 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | metoprolol | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | metoprolol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | fail | 1 / [time] | 1/h/kg | not captured | not captured | ['Bortolotti_1989:abstract', 'Bortolotti_1989:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Bortolotti_1989:abstract', 'Bortolotti_1989:abstract'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Bortolotti_1989:abstract', 'Bortolotti_1989:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Bortolotti_1989:abstract', 'Bortolotti_1989:abstract'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | mg h/l | not captured | not captured | ['Bortolotti_1989:abstract', 'Bortolotti_1989:abstract'] |
| C5_unit_missing_Q91 | fail | [mass] | % of the administered dose | not captured | not captured | ['Bortolotti_1989:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.7 | not captured | not captured | ['Bortolotti_1989:abstract', 'Bortolotti_1989:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_metoprolol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bortolotti_1989` / `Bortolotti_1989::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:08 UTC</sub>
