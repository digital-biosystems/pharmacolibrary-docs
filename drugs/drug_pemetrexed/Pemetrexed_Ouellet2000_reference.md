<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;pemetrexed&quot;,&quot;href&quot;:&quot;drugs/drug_pemetrexed/&quot;},{&quot;label&quot;:&quot;Ouellet_2000 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pemetrexed_Boosman2023_reference&quot;,&quot;label&quot;:&quot;Boosman_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pemetrexed/Pemetrexed_Boosman2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pemetrexed_Cao2022_reference&quot;,&quot;label&quot;:&quot;Cao_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pemetrexed/Pemetrexed_Cao2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pemetrexed_Srinivasan2019_reference&quot;,&quot;label&quot;:&quot;Srinivasan_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pemetrexed/Pemetrexed_Srinivasan2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pemetrexed — `Pemetrexed_Ouellet2000_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Pemetrexed's central volume of distribution (11.3) had an undefined unit, causing a dimension mismatch in the two-compartment model.

<div class="pk-model-meta" hidden drug="pemetrexed" model-id="Pemetrexed_Ouellet2000_reference" status="rejected" stale="false" population="cancer patients" measured-compound="pemetrexed disodium" parameterization="mechanistic" topology="2C"></div>

## Citation
Ouellet D, Periclou AP, Johnson RD, Woodworth JR, Lalonde RL. Population pharmacokinetics of pemetrexed disodium (ALIMTA) in patients with cancer. Cancer chemotherapy and pharmacology 46(3):227–234 (2000).
  ·  DOI: [10.1007/s002800000144](https://doi.org/10.1007/s002800000144)

## Population and dosing

**Population:** cancer patients · age group adult · n = No information.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| central volume (V(c)) | V1 | 11.3 | 1 |
| distributional CL (Q) | Q | 3.21 | l/h |
| peripheral volume (V(p)) | V2 | 5.2 | l |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Pemetrexed's central volume of distribution (11.3) had an undefined unit, causing a dimension mismatch in the two-compartment model.**

The record lists the central volume as 11.3 with a unit of '1', which is not a valid volume unit for pharmacokinetic conversion. This undefined unit triggered a structural dimension check failure. The model parameters were also derived solely from the paper's abstract rather than full fitted data. Extracted — pemetrexed: V1 11.3 1, Q 3.21 l/h, V2 5.2 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has pemetrexed disodium, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| central volume (V(c)) | `Q63` · V1 | 11.3 | 1 |  |  | 1 | llm_confirmed (0.6) | Ouellet_2000:abstract |
| distributional CL (Q) | `Q30` · Q | 3.21 | l/h | 8.917e-07 | m3/s | l/h | llm_corrected (0.6) | Ouellet_2000:abstract |
| peripheral volume (V(p)) | `Q64` · V2 | 5.2 | l | 0.0052 | m3 | l | llm_confirmed (0.6) | Ouellet_2000:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'slope of 0.0292' — extend the ontology if this is a real PK parameter (source ['Ouellet_2000:abstract'])
- unit_dimension_mismatch: 'central volume (V(c))' → Q63 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- routed 'Between-patient variability was 19.6%' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'coefficient of variation of 23.7%' → Q313 (IOV) to iov — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'standard deviation of 0.0410 microg/ml' — extend the ontology if this is a real PK parameter (source ['Ouellet_2000:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pemetrexed disodium
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Ouellet_2000_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (2/10 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[central volume (v(c))]` | 11.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume (v(c))]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[distributional cl]` | 3.21 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[distributional cl]` |  | 3.21 | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume (v(p))]` | 5.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume (v(p))]` |  | 5.2 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | pemetrexed disodium | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | pemetrexed disodium | unknown | mismatch |

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
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Ouellet_2000:abstract'] |
| C5_dimension_Q63 | fail | dimensionless | 1 | ['Ouellet_2000:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Ouellet_2000:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.2 L | ['Ouellet_2000:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpemetrexed%5D%20Pemetrexed_Ouellet2000_reference&body=Drug%3A%20pemetrexed%0ARecord%3A%20Pemetrexed_Ouellet2000_reference%0APaper%3A%20Ouellet_2000%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pemetrexed/Pemetrexed_Ouellet2000_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:11 UTC</sub>
