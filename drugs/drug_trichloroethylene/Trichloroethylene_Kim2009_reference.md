<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;trichloroethylene&quot;,&quot;href&quot;:&quot;drugs/drug_trichloroethylene/&quot;},{&quot;label&quot;:&quot;Kim_2009 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trichloroethylene — `Trichloroethylene_Kim2009_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> The model for trichloroethylene was rejected because the three identified metabolites lack defined metabolic rate parameters to link them to the parent compound.

<div class="pk-model-meta" hidden drug="trichloroethylene" model-id="Trichloroethylene_Kim2009_reference" status="rejected" stale="false" population="male B6C3F1 mice" measured-compound="trichloroacetic acid" parameterization="apparent" topology="general_linear"></div>

## Citation
Kim S, Kim D, Pollack GM, Collins LB, Rusyn I. Pharmacokinetic analysis of trichloroethylene metabolism in male B6C3F1 mice: Formation and disposition of trichloroacetic acid, dichloroacetic acid, S-(1,2-dichlorovinyl)glutathione and S-(1,2-dichlorovinyl)-L-cysteine. Toxicology and applied pharmacology 238(1):90–99 (2009).
  ·  DOI: [10.1016/j.taap.2009.04.019](https://doi.org/10.1016/j.taap.2009.04.019)

## Population and dosing

**Population:** male B6C3F1 mice · condition healthy · age group adult.

**Dosed compound ≠ measured compound:** dosed trichloroethylene, measured trichloroacetic acid.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| bioavailability of oral TCE | Fab | 74 | % |
| half-life | t1/2z | 0.6 | h |
| clearance | CLm/F | 0.081 | ml/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.059). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model for trichloroethylene was rejected because the three identified metabolites lack defined metabolic rate parameters to link them to the parent compound.**

The record lists dichloroacetic acid, trichloroacetic acid, and S-(1,2-dichlorovinyl)glutathione as formed from trichloroethylene, but no specific link parameters are assigned to these metabolic transformations. Consequently, these metabolite compartments are structurally unreachable from the central dose compartment because the necessary rate constants are missing. Although the abstract provides summary statistics like a bioavailability of 74% and a terminal half-life of 0.6 h, these values do not provide the specific metabolic clearance rates required to connect the metabolites to the parent drug. Extracted — trichloroethylene: Fab 74 %, t1/2z 0.6 h, CLm/F 0.081 ml/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has trichloroethylene, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| bioavailability of oral TCE | `Q40` · Fab | 74 | % |  |  |  | llm_confirmed (0.6) | Kim_2009:abstract |
| half-life | `Q57` · t1/2z | 0.6 | h | 2160 | s | h | llm (0.6) | Kim_2009:abstract, Kim_2009:abstract, Kim_2009:abstract, Kim_2009:abstract |
| clearance | `Q351` · CLm/F | 0.081 | ml/h | 2.25e-11 | m3/s | ml/h | exact (1) | Kim_2009:abstract, Kim_2009:abstract, Kim_2009:abstract, Kim_2009:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- metabolite trichloroacetic acid: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=trichloroacetic acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=noncompartmental; 3/3 row label(s) assigned, 4 linked by role; re-tagged trichloroacetic acid→parent ×9
- molar mass: no plausible PubChem entry for 'S-(1,2-dichlorovinyl)glutathione' ('no full name in the paper') — left in mass units
- molar mass: no plausible PubChem entry for 'S-(1,2-dichlorovinyl)-L-cysteine' ('no full name in the paper') — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'dichloroacetic acid' (LLM) — left in mass units
- molar mass: none found for 'dichloroacetic acid' — its concentrations stay mass-only
- molar mass: none found for 'S-(1,2-dichlorovinyl)glutathione' — its concentrations stay mass-only
- molar mass: none found for 'S-(1,2-dichlorovinyl)-L-cysteine' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Kim_2009_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.059 (1/17 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['trichloroethylene', 'trichloroacetic acid', 'metabolism'], ['trichloroethylene', 's-(1,2-dichlorovinyl)glutathione', 'metabolism'], ['s-(1,2-dichlorovinyl)glutathione', 's-(1,2-dichlorovinyl)-l-cysteine', 'interconversion']] | [['trichloroethylene', 'dichloroacetic acid', 'metabolism'], ['trichloroethylene', 'trichloroacetic acid', 'metabolism'], ['trichloroethylene', 's-(1,2-dichlorovinyl)glutathione', 'metabolism'], ['s-(1,2-dichlorovinyl)glutathione', 's-(1,2-dichlorovinyl)-l-cysteine', 'hydrolysis']] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[bioavailability of oral tce]` | 74 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability of oral tce]` |  | 74 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | 0.081 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[dca clearance]` |  | 0.081 | only_one_extracted |
| `gpt-oss-120b` | `parameters[dca half-life]` |  | 0.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[dcvc clearance]` |  | 176 | only_one_extracted |
| `gpt-oss-120b` | `parameters[dcvc half-life]` |  | 1.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[dcvg clearance]` |  | 16.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[dcvg half-life]` |  | 1.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[half-life]` | 0.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tca clearance]` |  | 3.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tca half-life]` |  | 12 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | trichloroethylene | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | trichloroacetic acid | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Kim_2009:abstract', 'Kim_2009:abstract', 'Kim_2009:abstract', 'Kim_2009:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Kim_2009:abstract', 'Kim_2009:abstract', 'Kim_2009:abstract', 'Kim_2009:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none'] |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrichloroethylene%5D%20Trichloroethylene_Kim2009_reference&body=Drug%3A%20trichloroethylene%0ARecord%3A%20Trichloroethylene_Kim2009_reference%0APaper%3A%20Kim_2009%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trichloroethylene/Trichloroethylene_Kim2009_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 05:09 UTC</sub>
