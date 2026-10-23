<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;naltrexone&quot;,&quot;href&quot;:&quot;drugs/drug_naltrexone/&quot;},{&quot;label&quot;:&quot;Christie_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# naltrexone — `Naltrexone_Christie2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">goat</span>

> The naltrexone record was rejected because the oral clearance CL/F is negative (−1618.0 mL/min/kg), which is pharmacologically implausible.

<div class="pk-model-meta" hidden drug="naltrexone" model-id="Naltrexone_Christie2025_reference" status="rejected" stale="false" population="" measured-compound="naltrexone" parameterization="apparent" topology="2C"></div>

## Citation
Christie JT, Bruce M, Pfitzer S, Laubscher L, Raath JP, Laurence M et al. Pharmacokinetics and Bioavailability of Single-Dose Intramuscular and Intravenous Administration of Thiafentanil in Goats (Capra hircus). Journal of veterinary pharmacology and therapeutics 48(4):289–299 (2025).
  ·  DOI: [10.1111/jvp.13507](https://doi.org/10.1111/jvp.13507)

## Population and dosing

**Population:** review reference.

> **Species: goat.** This record comes from an animal study (goat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cl/F (mL/ min/kg) | CL/F | -1618.0 | mL/ min/kg |
| Central volume of distribution V C (mL/kg) | V1 | 89.9 | mL/kg |
| Peripheral volume of distribution V P (mL/ kg) | V2 | 588.0 | mL/ kg |
| Intercompartmental clearance Cl Q (mL/ min/kg) | Q | 44.6 | mL/ min/kg |
| First-order absorption rate constant k a (1/ min) | kabs | 0.484 | 1/ min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.765). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">goat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The naltrexone record was rejected because the oral clearance CL/F is negative (−1618.0 mL/min/kg), which is pharmacologically implausible.**

For naltrexone, the two-compartment model reports CL/F = −1618.0 mL/min/kg, a negative total clearance following oral administration, alongside V1 = 89.9 mL/kg, V2 = 588.0 mL/kg, Q = 44.6 mL/min/kg and kabs = 0.484 1/min. A negative clearance cannot represent drug elimination and indicates the base value or a covariate shift is wrong. A second reader also disagreed on several extracted values, reading Q as 24.1 instead of 44.6 mL/min/kg, kabs as 0.264 instead of 0.484 1/min, and the central volume as 37.1 instead of 89.9 mL/kg, so the extracted numbers are themselves uncertain. Extracted — naltrexone: CL/F -1.62e+03 mL/ min/kg, V1 89.9 mL/kg, V2 588 mL/ kg, Q 44.6 mL/ min/kg, kabs 0.484 1/ min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on parameter Q17: this record has 1896, the second reading 1896; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cl/F (mL/ min/kg) | `Q27` · CL/F | -1618.0 | mL/ min/kg | -0.001888 | m3/s | L/h | review (0.7) | Christie_2025:review |
| Central volume of distribution V C (mL/kg) | `Q63` · V1 | 89.9 | mL/kg | 0.006293 | m3 | L | review (0.7) | Christie_2025:review |
| Peripheral volume of distribution V P (mL/ kg) | `Q64` · V2 | 588.0 | mL/ kg | 0.04116 | m3 | L | review (0.7) | Christie_2025:review |
| Intercompartmental clearance Cl Q (mL/ min/kg) | `Q30` · Q | 44.6 | mL/ min/kg | 5.203e-05 | m3/s | L/h | review (0.7) | Christie_2025:review |
| First-order absorption rate constant k a (1/ min) | `Q49` · kabs | 0.484 | 1/ min | 0.008067 | 1/s | 1/h | review (0.7) | Christie_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- built from REVIEW reference values (Christie_2025) — secondary source
- volume reported by review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.765 (13/17 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `values[Q17]` | 1896 | 1896 | mismatch |
| `gpt-oss-120b` | `values[Q40]` | 0.936 | 0.936 | mismatch |
| `gpt-oss-120b` | `values[Q64]` | 588 |  | only_one_extracted |
| `gpt-oss-120b` | `values[Q74]` | 1452.5 | 1452.5 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_base_sign_Q27 | fail |  | -1618 |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Christie_2025:review'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Christie_2025:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Christie_2025:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Christie_2025:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Christie_2025:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 6.29 L | ['Christie_2025:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 41.2 L | ['Christie_2025:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnaltrexone%5D%20Naltrexone_Christie2025_reference&body=Drug%3A%20naltrexone%0ARecord%3A%20Naltrexone_Christie2025_reference%0APaper%3A%20Christie_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_naltrexone/Naltrexone_Christie2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-04 20:38 UTC</sub>
