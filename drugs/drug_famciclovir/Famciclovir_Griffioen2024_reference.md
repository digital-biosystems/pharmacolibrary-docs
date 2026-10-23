<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;famciclovir&quot;,&quot;href&quot;:&quot;drugs/drug_famciclovir/&quot;},{&quot;label&quot;:&quot;Griffioen_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# famciclovir — `Famciclovir_Griffioen2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="famciclovir" model-id="Famciclovir_Griffioen2024_reference" status="rejected" stale="false" population="African elephants" measured-compound="penciclovir" parameterization="mechanistic" topology="1C"></div>

## Citation
Griffioen JA, Fayette MA, Proudfoot JS, Howard LL, Papich MG. Penciclovir pharmacokinetics after oral and rectal administration of famciclovir in African elephants (Loxodonta africana) shows that effective concentrations can be achieved from rectal administration, despite lower absorption. American journal of veterinary research 85(7) (2024).
  ·  DOI: [10.2460/ajvr.24.02.0039](https://doi.org/10.2460/ajvr.24.02.0039)

## Population and dosing

**Population:** African elephants · age group mixed · n = 15.

**Dosed compound ≠ measured compound:** dosed famciclovir, measured penciclovir.

> **Species: other animal.** This record comes from an animal study (other animal), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| time to maximum concentration (tmax) | tmax | 2.12 | hours |
| area under the concentration-versus-time curve (AUC) | AUC | 33.93 | μg·h/mL |
| maximum observed concentration (Cmax) | Cmax | 3.73 | μg/mL |
| absorption half-life (t1/2) | t1/2ka | 0.65 | hours |
| tmax | tmax | 0.65 | hours |
| AUC | AUC | 15.62 | μg·h/mL |
| Cmax | Cmax | 2.52 | μg/mL |
| absorption t1/2 | t1/2ka | 0.13 | hours |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.25). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of absorption t1/2: this record has 0.13, the second reading none; it also differs on 11 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| time to maximum concentration (tmax) | `Q56` · tmax | 2.12 | hours | 7632 | s | h | exact (1) | Griffioen_2024:abstract |
| area under the concentration-versus-time curve (AUC) | `Q88` · AUC | 33.93 | μg·h/mL |  |  | (h·µg)/ml | llm (0.6) | Griffioen_2024:abstract |
| maximum observed concentration (Cmax) | `Q32` · Cmax | 3.73 | μg/mL |  |  | µg/ml | llm_corrected (0.6) | Griffioen_2024:abstract |
| absorption half-life (t1/2) | `Q95` · t1/2ka | 0.65 | hours | 2340 | s | h | llm_corrected (0.6) | Griffioen_2024:abstract |
| tmax | `Q56` · tmax | 0.65 | hours | 2340 | s | h | exact (1) | Griffioen_2024:abstract |
| AUC | `Q88` · AUC | 15.62 | μg·h/mL |  |  | (h·µg)/ml | exact (1) | Griffioen_2024:abstract |
| Cmax | `Q32` · Cmax | 2.52 | μg/mL |  |  | µg/ml | exact (1) | Griffioen_2024:abstract |
| absorption t1/2 | `Q95` · t1/2ka | 0.13 | hours | 468 | s | h | exact (1) | Griffioen_2024:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=penciclovir
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 8/8 row label(s) assigned, 0 linked by role; re-tagged penciclovir→parent ×4
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'penciclovir', not famciclovir — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Griffioen_2024_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.25 (4/16 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[absorption half-life]` | 0.65 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[absorption t1/2]` | 0.13 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[area under the concentration-versus-time curve]` | 33.93 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[auc]` | 15.62 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[auc]` |  | 33.93 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cmax]` | 2.52 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cmax]` |  | 3.73 | only_one_extracted |
| `qwen3.8-27b` | `parameters[maximum observed concentration]` | 3.73 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[t1/2]` |  | 0.65 | only_one_extracted |
| `qwen3.8-27b` | `parameters[time to maximum concentration]` | 2.12 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[tmax]` | 0.65 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[tmax]` |  | 2.12 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Griffioen_2024:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Griffioen_2024:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Griffioen_2024:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Griffioen_2024:abstract'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Griffioen_2024:abstract'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Griffioen_2024:abstract'] |
| C5_dimension_Q95 | pass | [time] |  | ['Griffioen_2024:abstract'] |
| C5_dimension_Q95 | pass | [time] |  | ['Griffioen_2024:abstract'] |
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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfamciclovir%5D%20Famciclovir_Griffioen2024_reference&body=Drug%3A%20famciclovir%0ARecord%3A%20Famciclovir_Griffioen2024_reference%0APaper%3A%20Griffioen_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_famciclovir/Famciclovir_Griffioen2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:53 UTC</sub>
