<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;pyrazinamide&quot;,&quot;href&quot;:&quot;drugs/drug_pyrazinamide/&quot;},{&quot;label&quot;:&quot;Peloquin_1997 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pyrazinamide_Xu2024_reference&quot;,&quot;label&quot;:&quot;Xu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyrazinamide/Pyrazinamide_Xu2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pyrazinamide — `Pyrazinamide_Peloquin1997_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-11-07 16:14 UTC (Rejected), but the paper was screened again on 2026-10-13 11:45 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Pyrazinamide summary statistics (Cmax, tmax, half-life) from the abstract lack the volume and clearance required for a compartmental model.

<div class="pk-model-meta" hidden drug="pyrazinamide" model-id="Pyrazinamide_Peloquin1997_reference" status="rejected" stale="true" population="healthy males" measured-compound="pyrazinamide" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Peloquin CA, Jaresko GS, Yong CL, Keung AC, Bulpitt AE, Jelliffe RW. Population pharmacokinetic modeling of isoniazid, rifampin, and pyrazinamide. Antimicrobial agents and chemotherapy 41(12):2670–2679 (1997).
  ·  DOI: [10.1128/AAC.41.12.2670](https://doi.org/10.1128/AAC.41.12.2670)

## Population and dosing

**Population:** healthy males · condition healthy · age group adult · n = 24.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| median peak concentrations in plasma (C[max]) | Cmax | 2.44 | microg/ml |
| time of maximum concentrations of drugs in plasma [T(max)] | tmax | 1.0 | h |
| median elimination half-lives (t1/2) | t1/2z | 1.2 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Pyrazinamide summary statistics (Cmax, tmax, half-life) from the abstract lack the volume and clearance required for a compartmental model.**

The record contains only exposure metrics: peak concentration (2.44 microg/ml), time to peak (1.0 h), and elimination half-life (1.2 h). It lacks distribution volume and clearance values necessary for a compartmental population PK model. As an abstract-only record, the summary statistics cannot represent a fitted model, resulting in an orphan compartment. Extracted — pyrazinamide: Cmax 2.44 microg/ml, tmax 1 h, t1/2z 1.2 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has pyrazinamide, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| median peak concentrations in plasma (C[max]) | `Q32` · Cmax | 2.44 | microg/ml |  |  | µg/ml | llm_confirmed (0.6) | Peloquin_1997:abstract, Peloquin_1997:abstract |
| time of maximum concentrations of drugs in plasma [T(max)] | `Q56` · tmax | 1.0 | h | 3600 | s | h | llm (0.6) | Peloquin_1997:abstract |
| median elimination half-lives (t1/2) | `Q57` · t1/2z | 1.2 | h | 4320 | s | h | llm (0.6) | Peloquin_1997:abstract, Peloquin_1997:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q32 ('C(max)', value 11.8) — already have one for this compound
- dropped duplicate Q56 ('T(max)', value 1.0) — already have one for this compound
- dropped duplicate Q57 ('t1/2', value 3.4) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pyrazinamide
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Peloquin_1997_metadata.yaml (11 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.1 (1/10 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['unknown', 'unknown', 'unknown']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[c[max]]` |  | 2.44 | only_one_extracted |
| `gpt-oss-120b` | `parameters[median elimination half-lives]` | 1.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[median peak concentrations in plasma]` | 2.44 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` |  | 1.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t]` |  | 1.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[time of maximum concentrations of drugs in plasma [t(max)]]` | 1.0 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | pyrazinamide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | pyrazinamide | unknown | mismatch |

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
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Peloquin_1997:abstract', 'Peloquin_1997:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Peloquin_1997:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Peloquin_1997:abstract', 'Peloquin_1997:abstract'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpyrazinamide%5D%20Pyrazinamide_Peloquin1997_reference&body=Drug%3A%20pyrazinamide%0ARecord%3A%20Pyrazinamide_Peloquin1997_reference%0APaper%3A%20Peloquin_1997%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pyrazinamide/Pyrazinamide_Peloquin1997_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-13 11:45 UTC</sub>
