<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;melphalan flufenamide&quot;,&quot;href&quot;:&quot;drugs/drug_melphalan_flufenamide/&quot;},{&quot;label&quot;:&quot;Huledal_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# melphalan flufenamide — `MelphalanFlufenamide_Huledal2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Melphalan flufenamide metabolism lacks a rate constant, leaving the melphalan compartment unreachable in this abstract-based record.

<div class="pk-model-meta" hidden drug="melphalan flufenamide" model-id="MelphalanFlufenamide_Huledal2024_reference" status="rejected" stale="false" population="adults with relapsed refractory multiple myeloma" measured-compound="melphalan" parameterization="apparent" topology="general_linear"></div>

## Citation
Huledal G, Ruiz-Garcia A, Kawakatsu S, Wang X, Sjöberg P, Gullbo J et al. Pharmacokinetics and Metabolism of Melflufen, an Alkylating Peptide-Drug Conjugate, in Patients with Relapsed Refractory Multiple Myeloma. Journal of clinical pharmacology 64(2):240–252 (2024).
  ·  DOI: [10.1002/jcph.2355](https://doi.org/10.1002/jcph.2355)

## Population and dosing

**Population:** adults with relapsed refractory multiple myeloma · condition relapsed refractory multiple myeloma · age group adult · n = n_subjects_int_value_ignored_by_schema_constraint_but_present_in_text_for_reference_only_if_needed_else_0_but_schema_wants_string_or_number_let_us_pick_298_or_unknown_let's_go_with_298_as_it's_the_pop_pk_sample_size.

**Dosed compound ≠ measured compound:** dosed melphalan_flufenamide, measured melphalan.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| half-life in the α phase of the curve | t1/2α | 1.24 | minutes |
| half-life in the β phase of the curve | t1/2β | 26.7 | minutes |
| clearance | CLm/F | 13.4 | L/min |
| central and deep peripheral volumes of distribution | Vss | 2.7 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Melphalan flufenamide metabolism lacks a rate constant, leaving the melphalan compartment unreachable in this abstract-based record.**

The record lists a metabolic link from melphalan flufenamide to melphalan but provides no value for the link parameter, rendering the compartment orphaned. Additionally, the clearance parameter is recorded in L/min, which is dimensionally inconsistent for the structural model. Since the data was derived solely from the paper's abstract, the reported summary statistics stand in for a fitted model. Extracted — melphalan flufenamide: t1/2α 1.24 minutes, t1/2β 26.7 minutes, CLm/F 13.4 L/min, Vss 2.7 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has melphalan_flufenamide, the second reading melphalan flufenamide; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| half-life in the α phase of the curve | `Q59` · t1/2α | 1.24 | minutes | 74.4 | s | min | llm (0.6) | Huledal_2024:abstract |
| half-life in the β phase of the curve | `Q60` · t1/2β | 26.7 | minutes | 1602 | s | min | llm (0.6) | Huledal_2024:abstract |
| clearance | `Q351` · CLm/F | 13.4 | L/min | 0.0002233 | m3/s | l/min | exact (1) | Huledal_2024:abstract, Huledal_2024:abstract |
| central and deep peripheral volumes of distribution | `Q65` · Vss | 2.7 | L | 0.0027 | m3 | l | llm (0.6) | Huledal_2024:abstract, Huledal_2024:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Desethyl-melflufen exposure | Q88 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Desethyl-melflufen exposure' → Q88 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- metabolite melphalan: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=melphalan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=noncompartmental; 5/5 row label(s) assigned, 2 linked by role; re-tagged melphalan→parent ×6, melphalan→desethyl-melflufen ×1
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Huledal_2024_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.286 (4/14 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['melphalan_flufenamide', 'melphalan', 'metabolism'], ['melphalan_flufenamide', 'desethyl-melflufen', 'metabolism']] | [['melphalan flufenamide', 'melphalan', 'metabolism'], ['melphalan flufenamide', 'desethyl-melflufen', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[central and deep peripheral volumes of distribution]` | 2.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume of distribution]` |  | 2.70 | only_one_extracted |
| `gpt-oss-120b` | `parameters[deep peripheral volume of distribution]` |  | 51.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[desethyl-melflufen exposure]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose]` |  | 40 | only_one_extracted |
| `gpt-oss-120b` | `parameters[half-life in the α phase of the curve]` | 1.24 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[intravenous infusion duration]` |  | 30 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean half-life in the α phase of the curve]` |  | 1.24 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | melphalan_flufenamide | melphalan flufenamide | mismatch |

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
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Huledal_2024:abstract', 'Huledal_2024:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Huledal_2024:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Huledal_2024:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Huledal_2024:abstract', 'Huledal_2024:abstract'] |
| C5_dimension_Q88 | fail | dimensionless | % | ['Huledal_2024:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |
| C9_phys_window_Q65 | pass | volume within physiological range | 2.7 L | ['Huledal_2024:abstract', 'Huledal_2024:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmelphalan_flufenamide%5D%20MelphalanFlufenamide_Huledal2024_reference&body=Drug%3A%20melphalan_flufenamide%0ARecord%3A%20MelphalanFlufenamide_Huledal2024_reference%0APaper%3A%20Huledal_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_melphalan_flufenamide/MelphalanFlufenamide_Huledal2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:15 UTC</sub>
