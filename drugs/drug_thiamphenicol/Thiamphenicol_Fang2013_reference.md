<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01B&quot;,&quot;href&quot;:&quot;atc/J01B.md&quot;},{&quot;label&quot;:&quot;thiamphenicol&quot;,&quot;href&quot;:&quot;drugs/drug_thiamphenicol/&quot;},{&quot;label&quot;:&quot;Fang_2013 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# thiamphenicol — `Thiamphenicol_Fang2013_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: fish.** This record comes from an animal study (fish), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The record is an exposure paper summary lacking volume and clearance, with an unlinked metabolite and a dimension mismatch.**

The abstract provides summary statistics for thiamphenicol and florfenicol but omits distribution volume and clearance, precluding compartmental parameter estimation. The model structure includes an unreachable or unlinked metabolite, and a structural parameter exhibits a dimension mismatch. These deficiencies, combined with the abstract-only source, confirm the record is not a valid population pharmacokinetic model. Extracted — thiamphenicol and florfenicol: Cmax 7.96 μg/mL, tmax 2 h, t1/2ka 0.666 h, t1/2β 10.7 h, AUCt 29.1 mg/kg·h, MRT 9.77 h, t1/2z 6.84 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has thiamphenicol and florfenicol, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Fang W et al., Pharmacokinetics and tissue distributio…, Journal of aquatic animal h… (2013)
  ·  DOI: [10.1080/08997659.2012.754799](https://doi.org/10.1080/08997659.2012.754799)

<div class="pk-model-meta" hidden drug="thiamphenicol" model-id="Thiamphenicol_Fang2013_reference" status="rejected" stale="false" population="Pacific white shrimp (Litopenaeus vannamei) in freshwater" measured-compound="thiamphenicol and florfenicol" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| C max | `Q32` · Cmax | 7.96 | μg/mL | not captured | [µg] / [ml] | not captured | space_fold (0.95) | Fang_2013:abstract, Fang_2013:abstract | — | not captured |
| T max | `Q56` · tmax | 2 | h | 7200.0 | [h] | not captured | space_fold (0.95) | Fang_2013:abstract | — | not captured |
| t 1/2ka | `Q95` · t1/2ka | 0.666 | h | 2397.6 | [h] | not captured | space_fold (0.95) | Fang_2013:abstract | — | not captured |
| t 1/2β | `Q60` · t1/2β | 10.659 | h | 38372.4 | [h] | not captured | space_fold (0.95) | Fang_2013:abstract | — | not captured |
| AUC0-t | `Q19` · AUCt | 29.10 | mg/kg·h | not captured | [mg] / [[h] · [kg]] | not captured | exact (1.0) | Fang_2013:abstract, Fang_2013:abstract, Fang_2013:abstract | — | not captured |
| MRT0-t | `Q53` · MRT | 9.77 | h | 35172.0 | [h] | not captured | exact (1.0) | Fang_2013:abstract | — | not captured |
| t 1/2z | `Q57` · t1/2z | 6.84 | h | 24624.0 | [h] | not captured | space_fold (0.95) | Fang_2013:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUC0-t' → Q19 (unit '[mass] / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'peak concentrations of THA' → Q32 (unit 'dimensionless' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q32 ('peak concentrations of THA', value '204.25') — already have one for this compound
- unit_dimension_mismatch: 'peak concentrations of FLR' → Q32 (unit 'dimensionless' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q32 ('peak concentrations of FLR', value '164.22') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=thiamphenicol and florfenicol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- molar mass: none found for 'thiamphenicol and florfenicol' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Fang_2013_metadata.yaml (12 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.111 (2/18 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0-t]` | 29.10 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0‐t]` | not captured | 29.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max]` | 7.96 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max]` | not captured | 7.96 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt0-t]` | 9.77 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt0‐t]` | not captured | 9.77 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2ka]` | 0.666 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2ka]` | not captured | 0.666 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2z]` | 6.84 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2z]` | not captured | 6.84 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2β]` | 10.659 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2β]` | not captured | 10.659 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t max]` | 2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t max]` | not captured | 2 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | thiamphenicol and florfenicol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | thiamphenicol and florfenicol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | fail | [mass] / [time] | mg/kg·h | not captured | not captured | ['Fang_2013:abstract', 'Fang_2013:abstract', 'Fang_2013:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Fang_2013:abstract', 'Fang_2013:abstract'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Fang_2013:abstract'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Fang_2013:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Fang_2013:abstract'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Fang_2013:abstract'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['Fang_2013:abstract'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_thiamphenicol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Fang_2013` / `Fang_2013::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:12 UTC</sub>
