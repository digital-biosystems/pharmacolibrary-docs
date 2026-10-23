<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04C&quot;,&quot;href&quot;:&quot;atc/N04C.md&quot;},{&quot;label&quot;:&quot;istradefylline&quot;,&quot;href&quot;:&quot;drugs/drug_istradefylline/&quot;},{&quot;label&quot;:&quot;Knebel_2011 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# istradefylline — `Istradefylline_Knebel2011_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The istradefylline record was rejected because its structure is one-compartment while the parameters include V2/F (198 L) and V3/F (307 L) described as peripheral and second peripheral compartment volumes, a dimension mismatch.

<div class="pk-model-meta" hidden drug="istradefylline" model-id="Istradefylline_Knebel2011_reference" status="rejected" stale="false" population="healthy subjects and patients with Parkinson&#39;s disease" measured-compound="istradefylline" parameterization="apparent" topology="1C"></div>

## Citation
Knebel W, Rao N, Uchimura T, Mori A, Fisher J, Gastonguay MR et al. Population pharmacokinetic analysis of istradefylline in healthy subjects and in patients with Parkinson's disease. Journal of clinical pharmacology 51(1):40–52 (2011).
  ·  DOI: [10.1177/0091270010363809](https://doi.org/10.1177/0091270010363809)

## Population and dosing

**Population:** healthy subjects and patients with Parkinson's disease · condition healthy and Parkinson's disease · age group mixed · n = 1449.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F | CL/F | 5.76 | L/h |
| V2/F | V2/F | 198 | L |
| Q | Q | 21.6 | L/h |
| V3/F | V3/F | 307 | L |
| Ka | kabs | 0.464 | h(-1) |
| Istradefylline area under the concentration-time curve at steady-state increased | AUCSS | 35 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.133). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The istradefylline record was rejected because its structure is one-compartment while the parameters include V2/F (198 L) and V3/F (307 L) described as peripheral and second peripheral compartment volumes, a dimension mismatch.**

The model structure is stated as 1C (one compartment), yet the extracted parameters contain V2/F = 198 L, described as the volume of the peripheral compartment, and V3/F = 307 L, described as the volume of a second peripheral compartment in a three-compartment model, alongside Q = 21.6 L/h for intercompartmental clearance. These peripheral-compartment parameters cannot belong to a one-compartment structure. The record was also built from the paper's abstract alone, so reported summary statistics (e.g., the 35% increase in steady-state AUC) stood in for a fitted model. Extracted — istradefylline: CL/F 5.76 L/h, V2/F 198 L, Q 21.6 L/h, V3/F 307 L, kabs 0.464 h(-1), AUCSS 35 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has istradefylline, the second reading unknown; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 5.76 | L/h | 1.6e-06 | m3/s | l/h | exact (1) | Knebel_2011:abstract |
| V2/F | `Q82` · V2/F | 198 | L | 0.198 | m3 | l | exact (1) | Knebel_2011:abstract |
| Q | `Q30` · Q | 21.6 | L/h | 6e-06 | m3/s | l/h | exact (1) | Knebel_2011:abstract |
| V3/F | `Q78` · V3/F | 307 | L | 0.307 | m3 | l | exact (1) | Knebel_2011:abstract |
| Ka | `Q49` · kabs | 0.464 | h(-1) | 0.0001289 | 1/s | 1/h | exact (1) | Knebel_2011:abstract |
| Istradefylline area under the concentration-time curve at steady-state increased | `Q18` · AUCSS | 35 | % |  |  | % | llm (0.6) | Knebel_2011:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Istradefylline area under the concentration-time curve at steady-state increased' → Q18 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Istradefylline area under the concentration-time curve at steady-state decreased' → Q18 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q18 ('Istradefylline area under the concentration-time curve at steady-state decreased', value 38) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=istradefylline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Knebel_2011_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.133 (2/15 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f]` | 5.76 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 5.76 | only_one_extracted |
| `gpt-oss-120b` | `parameters[istradefylline area under the concentration-time curve at steady-state increased]` | 35 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.464 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 0.464 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 21.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` |  | 21.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | 198 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` |  | 198 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | 307 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` |  | 307 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | istradefylline | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | istradefylline | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q18 | fail | dimensionless | % | ['Knebel_2011:abstract'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Knebel_2011:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Knebel_2011:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Knebel_2011:abstract'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Knebel_2011:abstract'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Knebel_2011:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.76 L/h | ['Knebel_2011:abstract'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 198 L | ['Knebel_2011:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bistradefylline%5D%20Istradefylline_Knebel2011_reference&body=Drug%3A%20istradefylline%0ARecord%3A%20Istradefylline_Knebel2011_reference%0APaper%3A%20Knebel_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_istradefylline/Istradefylline_Knebel2011_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 14:32 UTC</sub>
