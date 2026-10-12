<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefamandole&quot;,&quot;href&quot;:&quot;drugs/drug_cefamandole/&quot;},{&quot;label&quot;:&quot;Campillo_1979 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefamandole — `Cefamandole_Campillo1979_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The cefamandole record contains an orphan peripheral compartment and an unresolvable dimension mismatch on a structural parameter, derived solely from the paper abstract.**

The model structure defines a second peripheral compartment, but the extracted abstract-only data fails to provide a valid connection, rendering it unreachable from the dose. Additionally, a structural parameter exhibits a dimension mismatch that the automated review identified. Because only the abstract was read, the reported summary statistics stood in for a fitted model, limiting the validation of these kinetic links. Extracted — cefamandole: λ1 5.01 hr-1, kel 0.182 hr-1, k12 2.6 hr-1, k21 2.15 hr-1, k13 0.441 hr-1, V1 5.7 l, V2 6.19 l, Vss 11.9 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has cefamandole, the second reading unknown; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Campillo JA et al., Pharmacokinetics of cefamandole in pati…, International journal of cl… (1979)

## Model component
<dbs-pgx drug="cefamandole" model-id="Cefamandole_Campillo1979_reference" status="rejected" stale="false" population="patients with terminal renal impairment" measured-compound="cefamandole" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| alpha | `Q67` · λ1 | 5.006 | hr-1 | not captured | [1] / [h] | not captured | exact (1.0) | Campillo_1979:abstract | — | not captured |
| beta | `Q47` · kel | 0.182 | hr-1 | 5.055555555555555e-05 | [1] / [h] | not captured | exact (1.0) | Campillo_1979:abstract | — | not captured |
| K12 | `Q301` · k12 | 2.598 | hr-1 | 0.0007216666666666667 | [1] / [h] | not captured | exact (1.0) | Campillo_1979:abstract | — | not captured |
| K21 | `Q302` · k21 | 2.147 | hr-1 | 0.0005963888888888888 | [1] / [h] | not captured | exact (1.0) | Campillo_1979:abstract | — | not captured |
| K13 | `Q303` · k13 | 0.441 | hr-1 | 0.0001225 | [1] / [h] | not captured | exact (1.0) | Campillo_1979:abstract | — | not captured |
| Vc | `Q63` · V1 | 5.7 | l | 0.0057 | [l] | not captured | exact (1.0) | Campillo_1979:abstract | — | not captured |
| Vp | `Q64` · V2 | 6.19 | l | 0.00619 | [l] | not captured | exact (1.0) | Campillo_1979:abstract | — | not captured |
| Vdss | `Q65` · Vss | 11.94 | l | 0.01194 | [l] | not captured | llm (0.6) | Campillo_1979:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'alpha' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cefamandole
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Campillo_1979_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.1 (2/20 fields) | 18 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alpha]` | 5.006 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[alpha]` | not captured | 5.006 | only_one_extracted |
| `gpt-oss-120b` | `parameters[beta]` | 0.182 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[beta]` | not captured | 0.182 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` | 2.598 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` | not captured | 2.598 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k13]` | 0.441 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k13]` | not captured | 0.441 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` | 2.147 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` | not captured | 2.147 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | 5.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | not captured | 5.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vdss]` | 11.94 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vdss]` | not captured | 11.94 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | 6.19 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | not captured | 6.19 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | cefamandole | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | cefamandole | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Campillo_1979:abstract'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Campillo_1979:abstract'] |
| C5_dimension_Q303 | pass | 1 / [time] | not captured | not captured | not captured | ['Campillo_1979:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Campillo_1979:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Campillo_1979:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Campillo_1979:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Campillo_1979:abstract'] |
| C5_dimension_Q67 | fail | 1 / [time] | hr-1 | not captured | not captured | ['Campillo_1979:abstract'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.7 L | not captured | not captured | ['Campillo_1979:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.19 L | not captured | not captured | ['Campillo_1979:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 11.9 L | not captured | not captured | ['Campillo_1979:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_cefamandole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Campillo_1979` / `Campillo_1979::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:48 UTC</sub>
