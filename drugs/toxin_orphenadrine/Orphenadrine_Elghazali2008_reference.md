<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Orphenadrine&quot;,&quot;href&quot;:&quot;drugs/toxin_orphenadrine/&quot;},{&quot;label&quot;:&quot;Elghazali_2008 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Orphenadrine_Labout1982_reference&quot;,&quot;label&quot;:&quot;Labout_1982_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_orphenadrine/Orphenadrine_Labout1982_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Orphenadrine — `Orphenadrine_Elghazali2008_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q310 unit mg ([mass]) vs [time].

<div class="pk-model-meta" hidden drug="Orphenadrine" model-id="Orphenadrine_Elghazali2008_reference" status="rejected" stale="false" population="camels (Camelus dromedarius)" measured-compound="orphenadrine" parameterization="mechanistic" topology="1C"></div>

## Citation
Elghazali M, Wasfi IA, Abdel Hadi AA, Latum AM. Pharmacokinetic, metabolism and withdrawal time of orphenadrine in camels (Camelus dromedarius) after intravenous administration. Research in veterinary science 85(3):563–569 (2008).
  ·  DOI: [10.1016/j.rvsc.2008.01.006](https://doi.org/10.1016/j.rvsc.2008.01.006)

## Population and dosing

**Population:** camels (Camelus dromedarius) · condition healthy · age group adult · n = 6.

**Dosed compound ≠ measured compound:** dosed orphenadrine aspartate, measured orphenadrine.

> **Species: camelid.** This record comes from an animal study (camelid), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| distribution half-life (t(1/2)(alpha)) | t1/2α | 0.5 | h |
| elimination half-life (t(1/2)(beta)) | t1/2β | 3.57 | h |
| area under the time concentration curve (AUC) | AUC | 1.03 | g/hl(-1) |
| volume of distribution at steady state (Vd(ss)) | Vss | 1.92 | lkg(-1) |
| volume of the central compartment of the two compartment pharmacokinetic model (V(c)) | V | 0.87 | lkg(-1) |
| total body clearance (Cl(T)) | CLnorm | 0.6 | l/hkg(-1) |
| single dose of orphenadrine aspartate | D1 | 350 | mg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.235). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q310 unit mg ([mass]) vs [time].**

Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — orphenadrine: t1/2α 0.5 h, t1/2β 3.57 h, AUC 1.03 g/hl(-1), Vss 1.92 lkg(-1), V 0.87 lkg(-1), CLnorm 0.6 l/hkg(-1), D1 350 mg.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of area under the time concentration curve: this record has none, the second reading 1.03; it also differs on 12 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| distribution half-life (t(1/2)(alpha)) | `Q59` · t1/2α | 0.5 | h | 1800 | s | h | half_life_rule (0.95) | Elghazali_2008:abstract |
| elimination half-life (t(1/2)(beta)) | `Q60` · t1/2β | 3.57 | h | 1.285e+04 | s | h | half_life_rule (0.95) | Elghazali_2008:abstract |
| area under the time concentration curve (AUC) | `Q88` · AUC | 1.03 | g/hl(-1) |  |  | (g·l)/h | llm (0.6) | Elghazali_2008:abstract |
| volume of distribution at steady state (Vd(ss)) | `Q65` · Vss | 1.92 | lkg(-1) | 0.1344 | m3 | l/kg | llm_corrected (0.6) | Elghazali_2008:abstract |
| volume of the central compartment of the two compartment pharmacokinetic model (V(c)) | `Q61` · V | 0.87 | lkg(-1) | 0.0609 | m3 | l/kg | llm_confirmed (0.6) | Elghazali_2008:abstract |
| total body clearance (Cl(T)) | `Q354` · CLnorm | 0.6 | l/hkg(-1) | 1.167e-05 | m3/s | l/(h·kg) | llm_corrected (0.6) | Elghazali_2008:abstract |
| single dose of orphenadrine aspartate | `Q310` · D1 | 350 | mg |  |  | mg | llm (0.6) | Elghazali_2008:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'g/hl(-1)' (AUC)
- unit_dimension_mismatch: 'single dose of orphenadrine aspartate' → Q310 (unit '[mass]' vs ontology '[time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=orphenadrine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 3 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'volume of the central compartment of the two compartment pharmacokinetic model (V(c))' is the general volume)
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Elghazali_2008_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.235 (4/17 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[area under the time concentration curve]` |  | 1.03 | only_one_extracted |
| `gpt-oss:120b` | `parameters[area under the time concentration curve]` | 1.03 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[distribution half-life (t(1/2)(alpha))]` |  | 0.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[distribution half-life (t(1/2)(alpha))]` | 0.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life (t(1/2)(beta))]` |  | 3.57 | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life (t(1/2)(beta))]` | 3.57 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[single dose of orphenadrine aspartate]` | 350 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[total body clearance (cl(t))]` |  | 0.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[total body clearance (cl(t))]` | 0.6 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution at steady state (vd(ss))]` |  | 1.92 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution at steady state (vd(ss))]` | 1.92 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of the central compartment of the two compartment pharmacokinetic model (v(c))]` |  | 0.87 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of the central compartment of the two compartment pharmacokinetic model (v(c))]` | 0.87 |  | only_one_extracted |

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
| C5_dimension_Q310 | fail | [time] | mg ([mass]) | ['Elghazali_2008:abstract'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Elghazali_2008:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Elghazali_2008:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Elghazali_2008:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Elghazali_2008:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Elghazali_2008:abstract'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | g/hl(-1) | ['Elghazali_2008:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 60.9 L | ['Elghazali_2008:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 134 L | ['Elghazali_2008:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Borphenadrine%5D%20Orphenadrine_Elghazali2008_reference&body=Drug%3A%20orphenadrine%0ARecord%3A%20Orphenadrine_Elghazali2008_reference%0APaper%3A%20Elghazali_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_orphenadrine/Orphenadrine_Elghazali2008_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 10:20 UTC</sub>
