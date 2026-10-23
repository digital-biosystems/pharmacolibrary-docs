<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefamandole&quot;,&quot;href&quot;:&quot;drugs/drug_cefamandole/&quot;},{&quot;label&quot;:&quot;Campillo_1979 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefamandole — `Cefamandole_Campillo1979_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The cefamandole record contains an orphan peripheral compartment and an unresolvable dimension mismatch on a structural parameter, derived solely from the paper abstract.

<div class="pk-model-meta" hidden drug="cefamandole" model-id="Cefamandole_Campillo1979_reference" status="rejected" stale="false" population="patients with terminal renal impairment" measured-compound="cefamandole" parameterization="mechanistic" topology="2C"></div>

## Citation
Campillo JA, Lanao JM, Dominguez-Gil A, Tabernero JM, Rubio F. Pharmacokinetics of cefamandole in patients undergoing hemodialysis. International journal of clinical pharmacology and biopharmacy 17(9):416–420 (1979).

## Population and dosing

**Population:** patients with terminal renal impairment · condition terminal renal impairment · age group adult · n = 17.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| alpha | λ1 | 5.006 | hr-1 |
| beta | kel | 0.182 | hr-1 |
| K12 | k12 | 2.598 | hr-1 |
| K21 | k21 | 2.147 | hr-1 |
| K13 | k13 | 0.441 | hr-1 |
| Vc | V1 | 5.7 | l |
| Vp | V2 | 6.19 | l |
| Vdss | Vss | 11.94 | l |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The cefamandole record contains an orphan peripheral compartment and an unresolvable dimension mismatch on a structural parameter, derived solely from the paper abstract.**

The model structure defines a second peripheral compartment, but the extracted abstract-only data fails to provide a valid connection, rendering it unreachable from the dose. Additionally, a structural parameter exhibits a dimension mismatch that the automated review identified. Because only the abstract was read, the reported summary statistics stood in for a fitted model, limiting the validation of these kinetic links. Extracted — cefamandole: λ1 5.01 hr-1, kel 0.182 hr-1, k12 2.6 hr-1, k21 2.15 hr-1, k13 0.441 hr-1, V1 5.7 l, V2 6.19 l, Vss 11.9 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has cefamandole, the second reading unknown; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| alpha | `Q67` · λ1 | 5.006 | hr-1 |  |  | 1/h | exact (1) | Campillo_1979:abstract |
| beta | `Q47` · kel | 0.182 | hr-1 | 5.056e-05 | 1/s | 1/h | exact (1) | Campillo_1979:abstract |
| K12 | `Q301` · k12 | 2.598 | hr-1 | 0.0007217 | 1/s | 1/h | exact (1) | Campillo_1979:abstract |
| K21 | `Q302` · k21 | 2.147 | hr-1 | 0.0005964 | 1/s | 1/h | exact (1) | Campillo_1979:abstract |
| K13 | `Q303` · k13 | 0.441 | hr-1 | 0.0001225 | 1/s | 1/h | exact (1) | Campillo_1979:abstract |
| Vc | `Q63` · V1 | 5.7 | l | 0.0057 | m3 | l | exact (1) | Campillo_1979:abstract |
| Vp | `Q64` · V2 | 6.19 | l | 0.00619 | m3 | l | exact (1) | Campillo_1979:abstract |
| Vdss | `Q65` · Vss | 11.94 | l | 0.01194 | m3 | l | llm (0.6) | Campillo_1979:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `gpt-oss-120b` | `parameters[alpha]` | 5.006 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[alpha]` |  | 5.006 | only_one_extracted |
| `gpt-oss-120b` | `parameters[beta]` | 0.182 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[beta]` |  | 0.182 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` | 2.598 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` |  | 2.598 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k13]` | 0.441 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k13]` |  | 0.441 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` | 2.147 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` |  | 2.147 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | 5.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` |  | 5.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vdss]` | 11.94 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vdss]` |  | 11.94 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | 6.19 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` |  | 6.19 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | cefamandole | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | cefamandole | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Campillo_1979:abstract'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Campillo_1979:abstract'] |
| C5_dimension_Q303 | pass | 1 / [time] |  | ['Campillo_1979:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Campillo_1979:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Campillo_1979:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Campillo_1979:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Campillo_1979:abstract'] |
| C5_dimension_Q67 | fail | 1 / [time] | hr-1 | ['Campillo_1979:abstract'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.7 L | ['Campillo_1979:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.19 L | ['Campillo_1979:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 11.9 L | ['Campillo_1979:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcefamandole%5D%20Cefamandole_Campillo1979_reference&body=Drug%3A%20cefamandole%0ARecord%3A%20Cefamandole_Campillo1979_reference%0APaper%3A%20Campillo_1979%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cefamandole/Cefamandole_Campillo1979_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:48 UTC</sub>
