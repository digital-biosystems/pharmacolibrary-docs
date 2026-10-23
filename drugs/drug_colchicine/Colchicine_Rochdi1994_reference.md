<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M04A&quot;,&quot;href&quot;:&quot;atc/M04A.md&quot;},{&quot;label&quot;:&quot;colchicine&quot;,&quot;href&quot;:&quot;drugs/drug_colchicine/&quot;},{&quot;label&quot;:&quot;Rochdi_1994 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# colchicine — `Colchicine_Rochdi1994_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Colchicine's terminal half-life of 1.2 hours is dimensionally inconsistent with the fast phase half-life of 9.2 minutes.

<div class="pk-model-meta" hidden drug="colchicine" model-id="Colchicine_Rochdi1994_reference" status="rejected" stale="false" population="healthy adult males and elderly females" measured-compound="colchicine" parameterization="mechanistic" topology="1C"></div>

## Citation
Rochdi M, Sabouraud A, Girre C, Venet R, Scherrmann JM. Pharmacokinetics and absolute bioavailability of colchicine after i.v. and oral administration in healthy human volunteers and elderly subjects. European journal of clinical pharmacology 46(4):351–354 (1994).
  ·  DOI: [10.1007/BF00194404](https://doi.org/10.1007/BF00194404)

## Population and dosing

**Population:** healthy adult males and elderly females · age group mixed.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t1/2 lambda 1 | λ1 | 9.2 | min |
| t1/2 lambda 2 | t1/2β | 1.2 | h |
| Vz | V | 6.7 | l.kg-1 |
| Vss | Vss | 4.2 | l.kg-1 |
| Total body clearance | CL | 10.5 | l.h-1 |
| Maximal plasma concentration | Cmax | 5.5 | ng.ml-1 |
| Mean absolute bioavailability of the tablet | Fab | 44 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.158). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Colchicine's terminal half-life of 1.2 hours is dimensionally inconsistent with the fast phase half-life of 9.2 minutes.**

The record lists a macro-rate constant of 9.2 minutes for the fast disposition phase and a terminal half-life of 1.2 hours. Although abstract-only summaries provide these values directly, the dimensional mismatch between the fast and slow phases flags a structural error. Consequently, the record was rejected due to this inconsistency in the reported disposition parameters. Extracted — colchicine: λ1 9.2 min, t1/2β 1.2 h, V 6.7 l.kg-1, Vss 4.2 l.kg-1, CL 10.5 l.h-1, Cmax 5.5 ng.ml-1, Fab 44 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has colchicine, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t1/2 lambda 1 | `Q67` · λ1 | 9.2 | min |  |  | min | llm_corrected (0.6) | Rochdi_1994:abstract, Rochdi_1994:abstract |
| t1/2 lambda 2 | `Q60` · t1/2β | 1.2 | h | 4320 | s | h | llm_corrected (0.6) | Rochdi_1994:abstract |
| Vz | `Q61` · V | 6.7 | l.kg-1 | 0.469 | m3 | l/kg | exact (1) | Rochdi_1994:abstract, Rochdi_1994:abstract |
| Vss | `Q65` · Vss | 4.2 | l.kg-1 | 0.294 | m3 | l/kg | exact (1) | Rochdi_1994:abstract, Rochdi_1994:abstract |
| Total body clearance | `Q22` · CL | 10.5 | l.h-1 | 2.917e-06 | m3/s | l/h | llm_confirmed (0.6) | Rochdi_1994:abstract, Rochdi_1994:abstract |
| Maximal plasma concentration | `Q32` · Cmax | 5.5 | ng.ml-1 |  |  | ng/ml | llm (0.6) | Rochdi_1994:abstract |
| Mean absolute bioavailability of the tablet | `Q40` · Fab | 44 | % |  |  |  | llm_confirmed (0.6) | Rochdi_1994:abstract, Rochdi_1994:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 't1/2 lambda 1' → Q67 (unit '[time]' vs ontology '[mass] / [time]') — route to review
- dropped duplicate Q32 ('Cmax', value 12) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=colchicine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Rochdi_1994_metadata.yaml (13 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.158 (3/19 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[first distribution half-life]` |  | 9.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximal plasma concentration]` | 5.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximal plasma concentration]` |  | 5.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean absolute bioavailability of the tablet]` | 44 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean absolute bioavailability]` |  | 44 | only_one_extracted |
| `gpt-oss-120b` | `parameters[second distribution half-life]` |  | 1.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 lambda 1]` | 9.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 lambda 2]` | 1.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` | 10.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` |  | 10.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` |  | 6.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vss]` | 4.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vss]` |  | 4.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz]` | 6.7 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | colchicine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | colchicine | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Rochdi_1994:abstract', 'Rochdi_1994:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Rochdi_1994:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Rochdi_1994:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Rochdi_1994:abstract', 'Rochdi_1994:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Rochdi_1994:abstract', 'Rochdi_1994:abstract'] |
| C5_dimension_Q67 | fail | [time] | min | ['Rochdi_1994:abstract', 'Rochdi_1994:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.5 | ['Rochdi_1994:abstract', 'Rochdi_1994:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 10.5 L/h | ['Rochdi_1994:abstract', 'Rochdi_1994:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 469 L | ['Rochdi_1994:abstract', 'Rochdi_1994:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 294 L | ['Rochdi_1994:abstract', 'Rochdi_1994:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcolchicine%5D%20Colchicine_Rochdi1994_reference&body=Drug%3A%20colchicine%0ARecord%3A%20Colchicine_Rochdi1994_reference%0APaper%3A%20Rochdi_1994%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_colchicine/Colchicine_Rochdi1994_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 03:20 UTC</sub>
