<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;amphotericin B&quot;,&quot;href&quot;:&quot;drugs/drug_amphotericin_b/&quot;},{&quot;label&quot;:&quot;Stott_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AmphotericinB_Stott2022_reference&quot;,&quot;label&quot;:&quot;Stott_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amphotericin_b/AmphotericinB_Stott2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amphotericin B — `AmphotericinB_Stott2018_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:36 UTC) predates the latest extraction (2026-10-03 23:37 UTC); the status shown comes from the current checks. The amphotericin B deoxycholate record lacks values for the intercompartmental transfer rate constants k12 and k21, so only 2 of the 4 expected parameters were covered and it was held for review.

<div class="pk-model-meta" hidden drug="amphotericin B" model-id="AmphotericinB_Stott2018_reference" status="rejected" stale="true" population="adults with cryptococcal meningitis" measured-compound="amphotericin_b" parameterization="mechanistic" topology="1C"></div>

## Citation
Stott KE, Beardsley J, Whalley S, Kibengo FM, Mai NTH, Tùng NLN et al. Population Pharmacokinetic Model and Meta-analysis of Outcomes of Amphotericin B Deoxycholate Use in Adults with Cryptococcal Meningitis. Antimicrobial agents and chemotherapy 62(7) (2018).
  ·  DOI: [10.1128/AAC.02526-17](https://doi.org/10.1128/AAC.02526-17)

## Population and dosing

**Population:** adults with cryptococcal meningitis · condition cryptococcal meningitis · age group adult · n = &gt;=42.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| first-order rate constant from central compartment to peripheral compartment | k12 | 5.36 | h-1 |
| first-order rate constant from peripheral compartment to central compartment | k21 | 9.92 | h-1 |
| area under concentration-time curve from h 144 to h 168 (AUC144-168) | AUCt | 5.83 | mg · h/liter |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The amphotericin B deoxycholate record lacks values for the intercompartmental transfer rate constants k12 and k21, so only 2 of the 4 expected parameters were covered and it was held for review.**

The record, built from the paper's abstract only, reports clearance (0.03 liters/h), volume (0.82 liters) and AUC144-168 (5.83 mg·h/liter) for amphotericin B deoxycholate, but neither k12 (5.36 h-1) nor k21 (9.92 h-1) was emitted or defaulted, leaving 2 of 4 parameters covered. Because only the abstract was read, the reported summary statistics stand in for a fitted model, so the two-compartment structure (1C) is not fully parameterized from a fitted model. Extracted — amphotericin_b_deoxycholate: CL 0.03 liters/h, V 0.82 liters, k12 5.36 h-1, k21 9.92 h-1, AUCt 5.83 mg · h/liter.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has amphotericin_b, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| first-order rate constant from central compartment to peripheral compartment | `Q301` · k12 | 5.36 | h-1 | 0.001489 | 1/s | 1/h | llm (0.6) | Stott_2018:abstract |
| first-order rate constant from peripheral compartment to central compartment | `Q302` · k21 | 9.92 | h-1 | 0.002756 | 1/s | 1/h | llm (0.6) | Stott_2018:abstract |
| area under concentration-time curve from h 144 to h 168 (AUC144-168) | `Q19` · AUCt | 5.83 | mg · h/liter |  |  | (h·mg)/l | llm (0.6) | Stott_2018:abstract, Stott_2018:abstract, Stott_2018:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| clearance | Q22 | exact |
| volume | Q61 | exact |

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amphotericin_b
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Stott_2018_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[area under concentration-time curve from h 144 to h 168]` | 5.83 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc144-168]` |  | 5.83 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[first-order rate constant from central compartment to peripheral compartment]` | 5.36 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[first-order rate constant from central compartment to peripheral compartment]` |  | 5.36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[first-order rate constant from peripheral compartment to central compartment]` | 9.92 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[first-order rate constant from peripheral compartment to central compartment]` |  | 9.92 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | amphotericin_b | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | amphotericin_b | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Stott_2018:abstract', 'Stott_2018:abstract', 'Stott_2018:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Stott_2018:abstract'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Stott_2018:abstract'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Stott_2018:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Stott_2018:abstract'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=amphotericin_b_deoxycholate) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | fail | 4 scholar param(s) emitted or defaulted | 2 covered | neither emitted nor in defaulted[]: ['k12', 'k21'] |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations | pass |  |  | no engineer deviations to adjudicate |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamphotericin_b%5D%20AmphotericinB_Stott2018_reference&body=Drug%3A%20amphotericin_b%0ARecord%3A%20AmphotericinB_Stott2018_reference%0APaper%3A%20Stott_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amphotericin_b/AmphotericinB_Stott2018_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-03 23:37 UTC</sub>
