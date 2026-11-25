<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;bevacizumab&quot;,&quot;href&quot;:&quot;drugs/drug_bevacizumab/&quot;},{&quot;label&quot;:&quot;Lobet_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bevacizumab_Turner2014_reference&quot;,&quot;label&quot;:&quot;Turner_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bevacizumab/Bevacizumab_Turner2014_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bevacizumab_Caulet2016_estimate&quot;,&quot;label&quot;:&quot;Caulet_2016_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bevacizumab/Bevacizumab_Caulet2016_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# bevacizumab — `Bevacizumab_Lobet2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q331 unit nM ([length]) vs [mass] / [length] ** 3; c8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="bevacizumab" model-id="Bevacizumab_Lobet2024_reference" status="rejected" stale="false" population="metastatic colorectal cancer patients" measured-compound="bevacizumab" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Lobet S, Caulet M, Paintaud G, Azzopardi N, Desvignes C, Chautard R et al. Confounding mitigation for the exposure-response relationship of bevacizumab in colorectal cancer patients. British journal of clinical pharmacology 90(4):976–986 (2024).
  ·  DOI: [10.1111/bcp.15983](https://doi.org/10.1111/bcp.15983)

## Population and dosing

**Population:** metastatic colorectal cancer patients · condition metastatic colorectal cancer · age group adult.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| steady-state dissociation constant | KD | 10 | nM |
| antibody-target complexes elimination constant | kel | 0.52 | day-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375), qwen3.8-27b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q331 unit nM ([length]) vs [mass] / [length] ** 3; c8 unreachable/orphan compartment or unlinked metabolite.**

Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — bevacizumab: KD 10 nM, kel 0.52 day-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has bevacizumab → vegf (target_mediated_disposition), the second reading none; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| steady-state dissociation constant | `Q331` · KD | 10 | nM |  |  | nM | llm_confirmed (0.6) | Lobet_2024:abstract |
| antibody-target complexes elimination constant | `Q47` · kel | 0.52 | day-1 | 6.019e-06 | 1/s | 1/d | llm (0.6) | Lobet_2024:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'baseline target levels' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Lobet_2024:abstract'])
- unit_dimension_mismatch: 'steady-state dissociation constant' → Q331 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=bevacizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted
- molar mass: none found for 'bevacizumab' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Lobet_2024_metadata.yaml (3 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.375 (3/8 fields) | 5 |
| `qwen3.8-27b` | partly confirmed | 0.5 (4/8 fields) | 4 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['bevacizumab', 'vegf', 'target_mediated_disposition']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[antibody-target complexes elimination constant]` | 0.52 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kint]` |  | 0.52 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kss]` |  | 10 | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state dissociation constant]` | 10 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[antibody-target complexes elimination constant]` | 0.52 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[kint]` |  | 0.52 | only_one_extracted |
| `qwen3.8-27b` | `parameters[kss]` |  | 10 | only_one_extracted |
| `qwen3.8-27b` | `parameters[steady-state dissociation constant]` | 10 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q331 | fail | [mass] / [length] ** 3 | nM ([length]) | ['Lobet_2024:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Lobet_2024:abstract'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['KSS'] |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbevacizumab%5D%20Bevacizumab_Lobet2024_reference&body=Drug%3A%20bevacizumab%0ARecord%3A%20Bevacizumab_Lobet2024_reference%0APaper%3A%20Lobet_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bevacizumab/Bevacizumab_Lobet2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 19:40 UTC</sub>
