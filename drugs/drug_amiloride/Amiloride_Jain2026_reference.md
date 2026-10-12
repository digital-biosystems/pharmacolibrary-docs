<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;amiloride&quot;,&quot;href&quot;:&quot;drugs/drug_amiloride/&quot;},{&quot;label&quot;:&quot;Jain_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amiloride — `Amiloride_Jain2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.231), gpt-oss:120b (not confirmed, agreement 0.231). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The amiloride record was rejected because its apparent parameters (CL/F 19 L/h, V/F 9.83 L) are incoherent with the bioavailability fraction Fab 0.133, indicating a double bioavailability correction.**

The record, built from the paper's abstract only, reports amiloride apparent clearance of 19 L/h and apparent central volume of 9.83 L together with an absolute bioavailability of 0.133; the apparent-parameter coherence check found a double correction, so the values cannot both be used as reported. A second reader also could not confirm the dose compound and primary analyte as amiloride, and read the four parameter values (0.136 h-1, 19 L/h, 9.83 L, 0.133) as absent from the record. Extracted — amiloride: kabs 0.136 h-1, CL/F 19 L/h, V/F 9.83 L, Fab 0.133 uncertainty.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has amiloride, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:36:01.426586+00:00) predates the upstream re-run (2026-10-06 17:42:24.431556+00:00). Current validate status: `rejected`.

## Citation
Jain M et al., Population Pharmacokinetics of Intranas…, European journal of drug me… (2026)
  ·  DOI: [10.1007/s13318-026-01011-3](https://doi.org/10.1007/s13318-026-01011-3)

## Model component
<dbs-pgx drug="amiloride" model-id="Amiloride_Jain2026_reference" status="rejected" stale="true" population="healthy adults" measured-compound="amiloride" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| slow absorption rate constant | `Q49` · kabs | 0.136 | h-1 | 3.777777777777778e-05 | [1] / [h] | not captured | llm_confirmed (0.6) | Jain_2026:abstract | — | not captured |
| apparent clearance | `Q27` · CL/F | 19 | L/h | 5.277777777777778e-06 | [l] / [h] | not captured | exact (1.0) | Jain_2026:abstract | — | not captured |
| apparent central volume of distribution | `Q76` · V/F | 9.83 | L | 0.00983 | [l] | not captured | llm_confirmed (0.6) | Jain_2026:abstract | — | not captured |
| nasal bioavailability fraction | `Q40` · Fab | 0.133 | uncertainty | not captured | not captured | not captured | llm_confirmed (0.6) | Jain_2026:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=amiloride
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'apparent central volume of distribution' is the general volume)
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Jain_2026_metadata.yaml (4 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.231 (3/13 fields) | 10 |
| `gpt-oss:120b` | not confirmed | 0.231 (3/13 fields) | 10 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent central volume of distribution]` | 9.83 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent central volume of distribution]` | not captured | 9.83 | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent clearance]` | 19 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent clearance]` | not captured | 19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[nasal bioavailability fraction]` | 0.133 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[nasal bioavailability fraction]` | not captured | 0.133 | only_one_extracted |
| `gpt-oss-120b` | `parameters[slow absorption rate constant]` | 0.136 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[slow absorption rate constant]` | not captured | 0.136 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | amiloride | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | amiloride | unknown | mismatch |
| `gpt-oss:120b` | `parameters[apparent central volume of distribution]` | 9.83 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent central volume of distribution]` | not captured | 9.83 | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent clearance]` | 19 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent clearance]` | not captured | 19 | only_one_extracted |
| `gpt-oss:120b` | `parameters[nasal bioavailability fraction]` | 0.133 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[nasal bioavailability fraction]` | not captured | 0.133 | only_one_extracted |
| `gpt-oss:120b` | `parameters[slow absorption rate constant]` | 0.136 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[slow absorption rate constant]` | not captured | 0.136 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | amiloride | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | amiloride | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Jain_2026:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Jain_2026:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Jain_2026:abstract'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.133 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 19 L/h | not captured | not captured | ['Jain_2026:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 9.83 L | not captured | not captured | ['Jain_2026:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amiloride/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jain_2026` / `Jain_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 17:42 UTC</sub>
