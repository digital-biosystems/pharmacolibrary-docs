<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;inositol&quot;,&quot;href&quot;:&quot;drugs/drug_inositol/&quot;},{&quot;label&quot;:&quot;Antonowski_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Inositol_Phelps2016_reference&quot;,&quot;label&quot;:&quot;Phelps_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_inositol/Inositol_Phelps2016_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# inositol — `Inositol_Antonowski2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The AUC/dose parameter for myo-inositol uses a non-standard unit, preventing consistent dimensional analysis and rejecting the record.

<div class="pk-model-meta" hidden drug="inositol" model-id="Inositol_Antonowski2022_reference" status="rejected" stale="false" population="Wistar rats" measured-compound="myo-inositol" parameterization="apparent" topology="1C"></div>

## Citation
Antonowski T, Osowski A, Szczesny D, Szablińska-Piernik J, Juśkiewicz J, Lahuta L et al. Pharmacokinetics of. International journal of molecular sciences 23(19) (2022).
  ·  DOI: [10.3390/ijms231911246](https://doi.org/10.3390/ijms231911246)

## Population and dosing

**Population:** Wistar rats · condition healthy · n = &gt;= 27.

**Dosing:** 140000 mg, oral, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| V/F [L] | V/F | 5.1 | L | 6.5 |
| CL/F [L/h] | CL/F | 0.853 | L/h | 10.1 |
| Ka [1/h] | kabs | 1.89 | 1/h | 10.7 |
| C0 [mg/L] | C0 | 10 | mg/L | 4.0 |
| Kel [1/h] | kel | 0.17 | 1/h |  |
| T0.5 [h] | t1/2z | 4.08 | h |  |
| AUC [mg/L·h/kg] | AUC/dose | 2.34 | mg/L·h/kg |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.938). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The AUC/dose parameter for myo-inositol uses a non-standard unit, preventing consistent dimensional analysis and rejecting the record.**

The reported AUC/dose value of 2.34 is expressed in mg/L·h/kg, a unit that could not be standardized to SI units. This lack of standardization caused a dimension mismatch on a structural parameter. As a result, the model record was rejected because the parameter lacked a valid, consistent unit representation. Extracted — inositol: V/F 5.1 L, CL/F 0.853 L/h, kabs 1.89 1/h, C0 10 mg/L, kel 0.17 1/h, t1/2z 4.08 h, AUC/dose 2.34 mg/L·h/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[auc [mg/l h/kg]].parameter_id`: this record has Q189, the second reading Q88. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| V/F [L] | `Q76` · V/F | 5.1 | L | 0.0051 | m3 | l | 6.5 | llm_confirmed (0.6) | ijms-23-11246-t001:row1:col2 |
| CL/F [L/h] | `Q27` · CL/F | 0.853 | L/h | 2.369e-07 | m3/s | l/h | 10.1 | llm_confirmed (0.6) | ijms-23-11246-t001:row2:col2 |
| Ka [1/h] | `Q49` · kabs | 1.89 | 1/h | 0.000525 | 1/s | 1/h | 10.7 | llm_confirmed (0.6) | ijms-23-11246-t001:row3:col2 |
| C0 [mg/L] | `Q86` · C0 | 10 | mg/L |  |  | mg/l | 4.0 | llm_confirmed (0.6) | ijms-23-11246-t001:row4:col1, ijms-23-11246-t001:row4:col2 |
| Kel [1/h] | `Q47` · kel | 0.17 | 1/h | 4.722e-05 | 1/s | 1/h |  | llm_confirmed (0.6) | ijms-23-11246-t001:row8:col2 |
| T0.5 [h] | `Q57` · t1/2z | 4.08 | h | 1.469e+04 | s | h |  | llm (0.6) | ijms-23-11246-t001:row9:col1, ijms-23-11246-t001:row9:col2 |
| AUC [mg/L·h/kg] | `Q189` · AUC/dose | 2.34 | mg/L·h/kg |  |  | mg/(h·kg·l) |  | llm_corrected (0.6) | ijms-23-11246-t001:row11:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'σ2 (%)' routed out of structural estimates ('Residual variability')
- column 'description' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'C0 [mg/L]' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped PD-category row 'kin [1/h]' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['ijms-23-11246-t001:row10:col1', 'ijms-23-11246-t001:row10:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=myo-inositol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.938 (15/16 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc [mg/l h/kg]].parameter_id` | Q189 | Q88 | mismatch |

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
| C5_dimension_Q189 | pass | [mass] * [time] / [length] ** 3 |  | ['ijms-23-11246-t001:row11:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['ijms-23-11246-t001:row2:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['ijms-23-11246-t001:row8:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['ijms-23-11246-t001:row3:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['ijms-23-11246-t001:row9:col1', 'ijms-23-11246-t001:row9:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['ijms-23-11246-t001:row1:col2'] |
| C5_dimension_Q86 | fail | [mass] / [length] ** 3 | mg/L | ['ijms-23-11246-t001:row4:col1', 'ijms-23-11246-t001:row4:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.853 L/h | ['ijms-23-11246-t001:row2:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 5.1 L | ['ijms-23-11246-t001:row1:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Binositol%5D%20Inositol_Antonowski2022_reference&body=Drug%3A%20inositol%0ARecord%3A%20Inositol_Antonowski2022_reference%0APaper%3A%20Antonowski_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_inositol/Inositol_Antonowski2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:34 UTC</sub>
