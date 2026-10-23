<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;dosulepin&quot;,&quot;href&quot;:&quot;drugs/drug_dosulepin/&quot;},{&quot;label&quot;:&quot;Maguire_1981 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dosulepin — `Dosulepin_Maguire1981_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-06 22:46 UTC (Rejected), but the paper was screened again on 2026-10-06 22:51 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The dosulepin (dothiepin) record was rejected because the metabolites dothiepin S-oxide and northiaden are unlinked: their formation from dothiepin has no parameter values, and the model was built from the abstract only.

<div class="pk-model-meta" hidden drug="dosulepin" model-id="Dosulepin_Maguire1981_reference" status="rejected" stale="true" population="healthy volunteers" measured-compound="dothiepin" parameterization="apparent" topology="general_linear"></div>

## Citation
Maguire KP, Burrows GD, Norman TR, Scoggins BA. Metabolism and pharmacokinetics of dothiepin. British journal of clinical pharmacology 12(3):405–409 (1981).
  ·  DOI: [10.1111/j.1365-2125.1981.tb01235.x](https://doi.org/10.1111/j.1365-2125.1981.tb01235.x)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = 7.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| absorption half life | t1/2ka | 1.2 | h |
| distribution half-life | t1/2α | 2.6 | h |
| elimination half-life | t1/2z | 22 | h |
| apparent volume of distribution | V/F | 45 | l/kg |
| oral clearance | CL/F | 1.36 | l kg-1 h-1 |
| half-life of elimination of dothiepin S-oxide | t1/2z | 19 | h |
| half-life of elimination of northiaden | t1/2z | 33 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.176). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The dosulepin (dothiepin) record was rejected because the metabolites dothiepin S-oxide and northiaden are unlinked: their formation from dothiepin has no parameter values, and the model was built from the abstract only.**

Both metabolites (dothiepin S-oxide and northiaden, each with 0 compartments) are formed from dothiepin via metabolism links whose parameter kind and value are unknown, so no formation path is quantified. The record is abstract-only, meaning reported summary statistics (e.g. t1/2z 22 h, V/F 45 l/kg, CL/F 1.36 l kg-1 h-1) stood in for a fitted model. The metabolite elimination half-lives (19 h for dothiepin S-oxide, 33 h for northiaden) are reported but the metabolites remain unreachable from the dose. Extracted — dosulepin: t1/2ka 1.2 h, t1/2α 2.6 h, t1/2z 22 h, V/F 45 l/kg, CL/F 1.36 l kg-1 h-1; dothiepin S-oxide: t1/2z 19 h; northiaden: t1/2z 33 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has dothiepin → dothiepin s-oxide (metabolism); dothiepin → northiaden (metabolism), the second reading none; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| absorption half life | `Q95` · t1/2ka | 1.2 | h | 4320 | s | h | llm_corrected (0.6) | Maguire_1981:abstract |
| distribution half-life | `Q59` · t1/2α | 2.6 | h | 9360 | s | h | llm (0.6) | Maguire_1981:abstract |
| elimination half-life | `Q57` · t1/2z | 22 | h | 7.92e+04 | s | h | llm (0.6) | Maguire_1981:abstract |
| apparent volume of distribution | `Q76` · V/F | 45 | l/kg | 3.15 | m3 | l/kg | exact (1) | Maguire_1981:abstract |
| oral clearance | `Q27` · CL/F | 1.36 | l kg-1 h-1 | 2.644e-05 | m3/s | l/(h·kg) | exact (1) | Maguire_1981:abstract |
| half-life of elimination of dothiepin S-oxide | `Q57` · t1/2z | 19 | h | 6.84e+04 | s | h | llm (0.6) | Maguire_1981:abstract |
| half-life of elimination of northiaden | `Q57` · t1/2z | 33 | h | 1.188e+05 | s | h | llm (0.6) | Maguire_1981:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dothiepin
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=noncompartmental; 7/7 row label(s) assigned, 0 linked by role; re-tagged dothiepin→parent ×5, dothiepin→dothiepin S-oxide ×1, dothiepin→northiaden ×1
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Maguire_1981_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.176 (3/17 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['dothiepin', 'dothiepin s-oxide', 'metabolism'], ['dothiepin', 'northiaden', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[absorption half life]` | 1.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption half life]` |  | 1.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` | 45 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` |  | 45 | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution half-life]` | 2.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution half-life]` |  | 2.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` | 22 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` |  | 22 | only_one_extracted |
| `gpt-oss-120b` | `parameters[half-life of elimination of dothiepin s-oxide]` | 19 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[half-life of elimination of northiaden]` | 33 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean half-life of elimination of dothiepin s-oxide]` |  | 19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[oral clearance]` | 1.36 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[oral clearance]` |  | 1.36 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Maguire_1981:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Maguire_1981:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Maguire_1981:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Maguire_1981:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Maguire_1981:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Maguire_1981:abstract'] |
| C5_dimension_Q95 | pass | [time] |  | ['Maguire_1981:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 95.2 L/h | ['Maguire_1981:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 3.15e+03 L | ['Maguire_1981:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdosulepin%5D%20Dosulepin_Maguire1981_reference&body=Drug%3A%20dosulepin%0ARecord%3A%20Dosulepin_Maguire1981_reference%0APaper%3A%20Maguire_1981%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dosulepin/Dosulepin_Maguire1981_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 22:51 UTC</sub>
