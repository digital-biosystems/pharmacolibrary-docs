<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P03A&quot;,&quot;href&quot;:&quot;atc/P03A.md&quot;},{&quot;label&quot;:&quot;permethrin&quot;,&quot;href&quot;:&quot;drugs/drug_permethrin/&quot;},{&quot;label&quot;:&quot;Anad\u00f3n_1991 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# permethrin — `Permethrin_Anadn1991_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The permethrin record was rejected because its metabolites, m-phenoxybenzyl alcohol and m-phenoxybenzoic acid, are unlinked: their metabolism connections from permethrin carry no parameter value, leaving no quantified path from the dose.**

Both metabolites are listed with zero compartments and their metabolism links from permethrin have an unknown link parameter with no value or kind, so no formation clearance connects them to the parent drug. The record was also built from the paper's abstract alone, so reported summary statistics (t1/2β 8.67 hr, MRT 11.19 hr, CL 0.058 liter/hr, tmax 3.52 hr, Fab 60.69%, t1/2z 23.1 hr, tlag 18.5 h) stood in for a fitted model rather than a model estimated from the data. Extracted — permethrin: t1/2β 8.67 hr, MRT 11.2 hr, CL 0.058 liter/hr, tmax 3.52 hr, Fab 60.7 %, t1/2z 23.1 hr, tlag 18.5 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has permethrin, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Anadón A et al., Toxicokinetics of permethrin in the rat, Toxicology and applied phar… (1991)
  ·  DOI: [10.1016/0041-008x(91)90284-l](https://doi.org/10.1016/0041-008x(91)90284-l)

<div class="pk-model-meta" hidden drug="permethrin" model-id="Permethrin_Anadn1991_reference" status="rejected" stale="false" population="male Sprague-Dawley rats" measured-compound="permethrin" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| elimination half-life (t1/2 beta) | `Q60` · t1/2β | 8.67 | hr | 31212.0 | [h] | not captured | llm (0.6) | Anadón_1991:abstract | — | not captured |
| mean residence time from plasma | `Q53` · MRT | 11.19 | hr | 40284.0 | [h] | not captured | llm_confirmed (0.6) | Anadón_1991:abstract | — | not captured |
| total plasma clearance | `Q22` · CL | 0.058 | liter/hr | 1.6111111111111112e-08 | [l] / [h] | not captured | llm_confirmed (0.6) | Anadón_1991:abstract | — | not captured |
| Tmax | `Q56` · tmax | 3.52 | hr | 12672.0 | [h] | not captured | exact (1.0) | Anadón_1991:abstract | — | not captured |
| oral bioavailability of permethrin | `Q40` · Fab | 60.69 | % | not captured | not captured | not captured | llm_confirmed (0.6) | Anadón_1991:abstract | — | not captured |
| elimination half-life (t1/2el), hippocampus | `Q57` · t1/2z | 23.1 | hr | 83160.0 | [h] | not captured | llm_confirmed (0.6) | Anadón_1991:abstract | — | not captured |
| Tlag [h] | `Q83` · tlag | 18.5 | h | 66600.0 | h | not captured | review_gapfill (0.7) | Duthaler_2021:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q57 ('elimination half-life (t1/2el), medulla oblongata', value 22.36) — already have one for this compound
- dropped duplicate Q57 ('elimination half-life (t1/2el), frontal cortex', value 13.86) — already have one for this compound
- dropped duplicate Q57 ('elimination half-life (t1/2el), sciatic nerve', value 16.27) — already have one for this compound
- dropped duplicate Q60 ('plasma (t1/2 beta)', value 12.37) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=permethrin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles: 5 per-group rows of permethrin summary_statistic but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=noncompartmental; 10/10 row label(s) assigned, 0 linked by role; re-tagged permethrin→parent ×10
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Duthaler_2021's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Anadón_1991_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.167 (3/18 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[elimination half-life (t1/2el) - hippocampus]` | not captured | 23.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life (t1/2el), hippocampus]` | 23.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` | 8.67 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` | not captured | 8.67 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean residence time from plasma]` | 11.19 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean residence time from plasma]` | not captured | 11.19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[oral bioavailability of permethrin]` | 60.69 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[oral bioavailability]` | not captured | 60.69 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag [h]]` | 18.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | 3.52 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | not captured | 3.52 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total plasma clearance]` | 0.058 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[total plasma clearance]` | not captured | 0.058 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | permethrin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | permethrin | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Anadón_1991:abstract'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Anadón_1991:abstract'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Anadón_1991:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Anadón_1991:abstract'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Anadón_1991:abstract'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Duthaler_2021:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.058 | not captured | not captured | ['Anadón_1991:abstract'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown', 'unknown'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.058 L/h | not captured | not captured | ['Anadón_1991:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_permethrin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Anadón_1991` / `Anadón_1991::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:29 UTC</sub>
