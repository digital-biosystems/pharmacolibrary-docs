<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;amiloride&quot;,&quot;href&quot;:&quot;drugs/drug_amiloride/&quot;},{&quot;label&quot;:&quot;Jain_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amiloride — `Amiloride_Jain2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:36 UTC (Rejected), but the paper was screened again on 2026-10-06 17:42 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The amiloride record was rejected because its apparent parameters (CL/F 19 L/h, V/F 9.83 L) are incoherent with the bioavailability fraction Fab 0.133, indicating a double bioavailability correction.

<div class="pk-model-meta" hidden drug="amiloride" model-id="Amiloride_Jain2026_reference" status="rejected" stale="true" population="healthy adults" measured-compound="amiloride" parameterization="apparent" topology="1C"></div>

## Citation
Jain M, Kumar S, Battaglia M, Davies S, Rower J, Reilly C et al. Population Pharmacokinetics of Intranasal Amiloride in Healthy Volunteers. European journal of drug metabolism and pharmacokinetics 51(4):463–473 (2026).
  ·  DOI: [10.1007/s13318-026-01011-3](https://doi.org/10.1007/s13318-026-01011-3)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = &gt;=15.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| slow absorption rate constant | kabs | 0.136 | h-1 |
| apparent clearance | CL/F | 19 | L/h |
| apparent central volume of distribution | V/F | 9.83 | L |
| nasal bioavailability fraction | Fab | 0.133 | uncertainty |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.231). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The amiloride record was rejected because its apparent parameters (CL/F 19 L/h, V/F 9.83 L) are incoherent with the bioavailability fraction Fab 0.133, indicating a double bioavailability correction.**

The record, built from the paper's abstract only, reports amiloride apparent clearance of 19 L/h and apparent central volume of 9.83 L together with an absolute bioavailability of 0.133; the apparent-parameter coherence check found a double correction, so the values cannot both be used as reported. A second reader also could not confirm the dose compound and primary analyte as amiloride, and read the four parameter values (0.136 h-1, 19 L/h, 9.83 L, 0.133) as absent from the record. Extracted — amiloride: kabs 0.136 h-1, CL/F 19 L/h, V/F 9.83 L, Fab 0.133 uncertainty.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has amiloride, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| slow absorption rate constant | `Q49` · kabs | 0.136 | h-1 | 3.778e-05 | 1/s | 1/h | llm_confirmed (0.6) | Jain_2026:abstract |
| apparent clearance | `Q27` · CL/F | 19 | L/h | 5.278e-06 | m3/s | l/h | exact (1) | Jain_2026:abstract |
| apparent central volume of distribution | `Q76` · V/F | 9.83 | L | 0.00983 | m3 | l | llm_confirmed (0.6) | Jain_2026:abstract |
| nasal bioavailability fraction | `Q40` · Fab | 0.133 | uncertainty |  |  |  | llm_confirmed (0.6) | Jain_2026:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=amiloride
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'apparent central volume of distribution' is the general volume)
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Jain_2026_metadata.yaml (4 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.231 (3/13 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent central volume of distribution]` | 9.83 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent central volume of distribution]` |  | 9.83 | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent clearance]` | 19 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent clearance]` |  | 19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[nasal bioavailability fraction]` | 0.133 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[nasal bioavailability fraction]` |  | 0.133 | only_one_extracted |
| `gpt-oss-120b` | `parameters[slow absorption rate constant]` | 0.136 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[slow absorption rate constant]` |  | 0.136 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | amiloride | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | amiloride | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Jain_2026:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Jain_2026:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Jain_2026:abstract'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.133 with apparent parameterization |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 19 L/h | ['Jain_2026:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 9.83 L | ['Jain_2026:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamiloride%5D%20Amiloride_Jain2026_reference&body=Drug%3A%20amiloride%0ARecord%3A%20Amiloride_Jain2026_reference%0APaper%3A%20Jain_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amiloride/Amiloride_Jain2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 17:42 UTC</sub>
