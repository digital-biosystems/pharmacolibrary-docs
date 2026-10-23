<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;amiodarone&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/&quot;},{&quot;label&quot;:&quot;Sermsappasuk_2006 \u00b7 estimate_mean_s_d&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amiodarone_Lesko1989_reference&quot;,&quot;label&quot;:&quot;Lesko_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Lesko1989_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Gaete1995_reference&quot;,&quot;label&quot;:&quot;Gaete_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Gaete1995_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Hirai2022_reference&quot;,&quot;label&quot;:&quot;Hirai_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Hirai2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Kolowrat2025_reference&quot;,&quot;label&quot;:&quot;Kolowrat_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Kolowrat2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Morath2025_reference&quot;,&quot;label&quot;:&quot;Morath_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Morath2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Pollak2000_amitarone_typical_value&quot;,&quot;label&quot;:&quot;Pollak_2000_amitarone_typical_value&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Pollak2000_amitarone_typical_value.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Pollak2000_desethylamiodarone_typical_value&quot;,&quot;label&quot;:&quot;Pollak_2000_desethylamiodarone_typical_value&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Pollak2000_desethylamiodarone_typical_value.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amiodarone — `Amiodarone_Sermsappasuk2006_estimate_mean_s_d`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

> The record for amiodarone lacks elimination and volume parameters, and includes an absorption constant despite an intravenous perfusion study design.

<div class="pk-model-meta" hidden drug="amiodarone" model-id="Amiodarone_Sermsappasuk2006_estimate_mean_s_d" status="rejected" stale="false" population="isolated perfused rat heart" measured-compound="amiodarone" parameterization="mechanistic" topology="1C"></div>

## Citation
Sermsappasuk P, Baek M, Weiss M. Kinetic analysis of myocardial uptake and negative inotropic effect of amiodarone in rat heart. European journal of pharmaceutical sciences : official journal of the European Federation for Pharmaceutical Sciences 28(3):243–248 (2006).
  ·  DOI: [10.1016/j.ejps.2006.02.007](https://doi.org/10.1016/j.ejps.2006.02.007)

## Population and dosing

**Population:** isolated perfused rat heart · condition healthy · n = &gt;= 6.

**Dosing:** 10 M, iv, multiple, every 15 h.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k₁₂ (1/min) | k12 | 519.0 | 1/min |
| k₂₁ (1/min) | k21 | 0.0030 | 1/min |
| τ (min) | Q2 | 11.1 | min |
| K a (h−1) | kabs | 0.82 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.364). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record for amiodarone lacks elimination and volume parameters, and includes an absorption constant despite an intravenous perfusion study design.**

The paper is an exposure/outcome study that reports no distribution volume or clearance, so it does not describe a compartmental PK model. The structural check failed because the intercompartmental clearance parameter was reported in minutes, a unit that could not be reconciled with the rate constants' units. Furthermore, the inclusion of an absorption rate constant is inconsistent with the isolated perfused rat heart preparation described. Extracted — amiodarone: k12 519 1/min, k21 0.003 1/min, Q2 11.1 min, kabs 0.82 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has amiodarone, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| k₁₂ (1/min) | `Q301` · k12 | 519.0 | 1/min | 8.65 | 1/s | 1/min | exact (1) | Sermsappasuk_2006_table_1:row1:col1 |
| k₂₁ (1/min) | `Q302` · k21 | 0.0030 | 1/min | 5e-05 | 1/s | 1/min | exact (1) | Sermsappasuk_2006_table_1:row2:col1 |
| τ (min) | `Q99` · Q2 | 11.1 | min |  |  | min | llm (0.6) | Sermsappasuk_2006_table_1:row4:col1 |
| K a (h−1) | `Q49` · kabs | 0.82 | h−1 | 0.0002278 | 1/s | 1/h | review_gapfill (0.7) | Kolowrat_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'estimate (mean ± s.d.)' classified 'ci' by the LLM but kept as the estimate: the header names the point value
- unit_dimension_mismatch: 'τ (min)' → Q99 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped PD-category row 'E_max (%)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Sermsappasuk_2006_table_1:row5:col1'])
- dropped PD-category row 'EC₅₀ (μM)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Sermsappasuk_2006_table_1:row6:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amiodarone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'estimate (mean ± s.d.)' subgroup of Sermsappasuk_2006 (paper reports 2 populations: cvᵃ (mean ± s.d.), estimate (mean ± s.d.))
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Kolowrat_2025's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.364 (4/11 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl d]` |  | 31.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | 0.82 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvv]` | 30.703 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[uptake clearance cl d]` | 31.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[τ]` |  | 11.1 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | amiodarone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | amiodarone | unknown | mismatch |

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
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Sermsappasuk_2006_table_1:row1:col1'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Sermsappasuk_2006_table_1:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kolowrat_2025:review'] |
| C5_dimension_Q99 | fail | [time] | min | ['Sermsappasuk_2006_table_1:row4:col1'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamiodarone%5D%20Amiodarone_Sermsappasuk2006_estimate_mean_s_d&body=Drug%3A%20amiodarone%0ARecord%3A%20Amiodarone_Sermsappasuk2006_estimate_mean_s_d%0APaper%3A%20Sermsappasuk_2006%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amiodarone/Amiodarone_Sermsappasuk2006_estimate_mean_s_d%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 10:37 UTC</sub>
