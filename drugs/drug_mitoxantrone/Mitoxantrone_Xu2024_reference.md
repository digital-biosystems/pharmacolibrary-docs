<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;mitoxantrone&quot;,&quot;href&quot;:&quot;drugs/drug_mitoxantrone/&quot;},{&quot;label&quot;:&quot;Xu_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mitoxantrone_Brandon2026_reference&quot;,&quot;label&quot;:&quot;Brandon_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mitoxantrone/Mitoxantrone_Brandon2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitoxantrone_Launay1989_reference&quot;,&quot;label&quot;:&quot;Launay_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mitoxantrone/Mitoxantrone_Launay1989_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mitoxantrone — `Mitoxantrone_Xu2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because interconversion between liposome-encapsulated and free mitoxantrone has no specified parameter (none), leaving a compartment unreachable.

<div class="pk-model-meta" hidden drug="mitoxantrone" model-id="Mitoxantrone_Xu2024_reference" status="rejected" stale="false" population="patients with relapsed/refractory lymphoma or small cell lung cancer" measured-compound="liposome-encapsulated mitoxantrone and free mitoxantrone" parameterization="apparent" topology="general_linear"></div>

## Citation
Xu G, Yang D, Ding H, Zhong L, Zhu J, Mi X et al. Population pharmacokinetics of free and liposome-encapsulated mitoxantrone in patients with relapsed/refractory lymphoma or small cell lung cancer. European journal of clinical pharmacology 80(9):1399–1407 (2024).
  ·  DOI: [10.1007/s00228-024-03711-8](https://doi.org/10.1007/s00228-024-03711-8)

## Population and dosing

**Population:** patients with relapsed/refractory lymphoma or small cell lung cancer · condition relapsed/refractory lymphoma or small cell lung cancer · n = 65.

**Dosed compound ≠ measured compound:** dosed pegylated liposomal mitoxantrone, measured liposome-encapsulated mitoxantrone and free mitoxantrone.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Rel | CLR | 0.0191 | L/h |
| V of liposome-encapsulated mitoxantrone | V | 2.32 | L |
| apparent CL of free mitoxantrone | CLu | 1.66 | L/h |
| apparent V of free mitoxantrone | V/F | 35.8 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.083). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because interconversion between liposome-encapsulated and free mitoxantrone has no specified parameter (none), leaving a compartment unreachable.**

The record lists interconversion from liposome-encapsulated mitoxantrone to free mitoxantrone but gives no parameter for that link, so the compartment has no path from the dose. The record is abstract-only, so reported summary statistics stand in for a fitted model. Extracted — liposome-encapsulated mitoxantrone and free mitoxantrone: CLR 0.0191 L/h, V 2.32 L, CLu 1.66 L/h, V/F 35.8 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has pegylated liposomal mitoxantrone, the second reading mitoxantrone; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Rel | `Q26` · CLR | 0.0191 | L/h | 5.306e-09 | m3/s | l/h | llm (0.6) | Xu_2024:abstract |
| V of liposome-encapsulated mitoxantrone | `Q61` · V | 2.32 | L | 0.00232 | m3 | l | llm (0.6) | Xu_2024:abstract |
| apparent CL of free mitoxantrone | `Q24` · CLu | 1.66 | L/h | 4.611e-07 | m3/s | l/h | llm_corrected (0.6) | Xu_2024:abstract |
| apparent V of free mitoxantrone | `Q76` · V/F | 35.8 | L | 0.0358 | m3 | l | llm (0.6) | Xu_2024:abstract, Xu_2024:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=liposome-encapsulated mitoxantrone and free mitoxantrone
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- molar mass: no plausible PubChem entry for 'liposome-encapsulated mitoxantrone and free mitoxantrone' ('liposome-encapsulated mitoxantrone and free mitoxantrone') — left in mass units
- molar mass: none found for 'liposome-encapsulated mitoxantrone and free mitoxantrone' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Xu_2024_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.083 (1/12 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['liposome-encapsulated mitoxantrone', 'free mitoxantrone', 'interconversion']] | [] | mismatch |
| `qwen3.8-27b` | `parameters[apparent cl of free mitoxantrone]` | 1.66 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[apparent cl of free mitoxantrone]` |  | 1.66 | only_one_extracted |
| `qwen3.8-27b` | `parameters[apparent v of free mitoxantrone]` | 35.8 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[apparent v of free mitoxantrone]` |  | 35.8 | only_one_extracted |
| `qwen3.8-27b` | `parameters[rel]` | 0.0191 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[release (rel) of liposome-encapsulated mitoxantrone to free mitoxantrone]` |  | 0.0191 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v of liposome-encapsulated mitoxantrone]` | 2.32 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v of liposome-encapsulated mitoxantrone]` |  | 2.32 | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | pegylated liposomal mitoxantrone | mitoxantrone | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | liposome-encapsulated mitoxantrone and free mitoxantrone | mitoxantrone | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q24 | pass | [length] ** 3 / [time] |  | ['Xu_2024:abstract'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Xu_2024:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Xu_2024:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Xu_2024:abstract', 'Xu_2024:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |
| C9_phys_window_Q24 | pass | clearance within physiological range | 1.66 L/h | ['Xu_2024:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.32 L | ['Xu_2024:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 35.8 L | ['Xu_2024:abstract', 'Xu_2024:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmitoxantrone%5D%20Mitoxantrone_Xu2024_reference&body=Drug%3A%20mitoxantrone%0ARecord%3A%20Mitoxantrone_Xu2024_reference%0APaper%3A%20Xu_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mitoxantrone/Mitoxantrone_Xu2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 19:31 UTC</sub>
