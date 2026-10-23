<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;pyrimethamine&quot;,&quot;href&quot;:&quot;drugs/drug_pyrimethamine/&quot;},{&quot;label&quot;:&quot;Salman_2011 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pyrimethamine — `Pyrimethamine_Salman2011_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The pyrimethamine AUC∞ is dimensionally inconsistent: 2844 μg/day/liter is not an area under the concentration-time curve, so the record was rejected.

<div class="pk-model-meta" hidden drug="pyrimethamine" model-id="Pyrimethamine_Salman2011_reference" status="rejected" stale="false" population="Papua New Guinean infants aged 2 to 13 months" measured-compound="pyrimethamine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Salman S, Griffin S, Kose K, Pitus N, Winmai J, Moore B et al. Pharmacokinetic properties of conventional and double-dose sulfadoxine-pyrimethamine given as intermittent preventive treatment in infancy. Antimicrobial agents and chemotherapy 55(4):1693–1700 (2011).
  ·  DOI: [10.1128/AAC.01075-10](https://doi.org/10.1128/AAC.01075-10)

## Population and dosing

**Population:** Papua New Guinean infants aged 2 to 13 months · condition healthy infants (IPTi for malaria prevention) · age group infant · n = 70.

**Dosed compound ≠ measured compound:** dosed sulfadoxine-pyrimethamine, measured pyrimethamine.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC(0-∞) PYR conventional dose | AUC∞ | 2844 | μg/day/liter |
| AUC(0-∞) SDX conventional dose | AUC∞ | 1460 | mg/day/liter |
| reduction in SDX relative bioavailability with the double dose | Frel | 32 | % |
| total volume of distribution | V | 1330.0 | liters |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.417). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The pyrimethamine AUC∞ is dimensionally inconsistent: 2844 μg/day/liter is not an area under the concentration-time curve, so the record was rejected.**

The record reports AUC∞ for pyrimethamine as 2844 μg/day/liter and for sulfadoxine as 1460 mg/day/liter; a unit of concentration per day is a dimension mismatch for an AUC extrapolated to infinity, which failed the dimensional check on a structural parameter. The record was also built from the abstract alone, so reported summary statistics stood in for a fitted model. The metabolite N(4)-acetylsulfadoxine is formed from sulfadoxine with no compartment count given, and the link between sulfadoxine and its metabolite is of unknown kind. Extracted — pyrimethamine: AUC∞ 2.84e+03 μg/day/liter, V 1.33e+03 liters; sulfadoxine: AUC∞ 1.46e+03 mg/day/liter, Frel 32 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of auc(0-inf) double dose pyr: this record has none, the second reading 4915; it also differs on 6 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC(0-∞) PYR conventional dose | `Q17` · AUC∞ | 2844 | μg/day/liter |  |  | µg/(d·l) | llm_corrected (0.6) | Salman_2011:abstract |
| AUC(0-∞) SDX conventional dose | `Q17` · AUC∞ | 1460 | mg/day/liter |  |  | mg/(d·l) | llm_corrected (0.6) | Salman_2011:abstract |
| reduction in SDX relative bioavailability with the double dose | `Q87` · Frel | 32 | % |  |  |  | llm_confirmed (0.6) | Salman_2011:abstract |
| total volume of distribution | `Q61` · V | 1330.0 | liters | 1.33 | m3 | L | review_gapfill (0.7) | Ramharter_2019:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUC(0-∞) PYR conventional dose' → Q17 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC(0-∞) SDX conventional dose' → Q17 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pyrimethamine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles: per-genotype parameters — typical value from the reference group: AUC(0-∞) PYR conventional dose, AUC(0-∞) SDX conventional dose
- row roles (LLM): model_class=noncompartmental; 5/5 row label(s) assigned, 0 linked by role; re-tagged pyrimethamine→sulfadoxine ×2
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Ramharter_2019's review values (primary lacked it)
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Salman_2011_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.417 (5/12 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[32% reduction in sdx relative bioavailability]` |  | 32 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc(0-inf) double dose pyr]` |  | 4915 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc(0-inf) double dose sdx]` |  | 2434 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc(0-inf) pyr conventional dose]` | 2844 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc(0-inf) sdx conventional dose]` | 1460 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[reduction in sdx relative bioavailability with the double dose]` | 32 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[total volume of distribution]` | 1330.0 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | fail | [mass] / [time] / [length] ** 3 | μg/day/liter | ['Salman_2011:abstract'] |
| C5_dimension_Q17 | fail | [mass] / [time] / [length] ** 3 | mg/day/liter | ['Salman_2011:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Ramharter_2019:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.33e+03 L | ['Ramharter_2019:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpyrimethamine%5D%20Pyrimethamine_Salman2011_reference&body=Drug%3A%20pyrimethamine%0ARecord%3A%20Pyrimethamine_Salman2011_reference%0APaper%3A%20Salman_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pyrimethamine/Pyrimethamine_Salman2011_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 08:08 UTC</sub>
