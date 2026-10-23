<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;mexiletine&quot;,&quot;href&quot;:&quot;drugs/drug_mexiletine/&quot;},{&quot;label&quot;:&quot;H\u00e4selbarth_1981 \u00b7 subject_6&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mexiletine — `Mexiletine_Hselbarth1981_subject_6`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="mexiletine" model-id="Mexiletine_Hselbarth1981_subject_6" status="rejected" stale="false" population="healthy adults" measured-compound="mexiletine" parameterization="mechanistic" topology="1C"></div>

## Citation
Häselbarth V, Doevendans JE, Wolf M. Kinetics and bioavailability of mexiletine in healthy subjects. Clinical pharmacology and therapeutics 29(6):729–736 (1981).
  ·  DOI: [10.1038/clpt.1981.103](https://doi.org/10.1038/clpt.1981.103)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = &gt;=6.

**Dosing:** 200, 400, 432 mg, iv, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k01 (hr)⁻¹ | kel | 1.112 | 1/h |
| Lag time τ (hr) | tlag | 1.002 | hr |
| tmax (hr) | tmax | 4.29 | hr |
| cmax (µg/ml) | Cmax | 0.94 | µg/ml |
| AUC₀^∞ (µg/ml/hr) | AUC∞ | 15.492 | µg/ml/hr |
| AUC₀ᶜ (µg/ml/hr) | AUC | 13.353 | µg/ml/hr |
| volume of distribution | V | 74.0 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.364). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (Cmax, AUC∞ and AUC), so that value has no SI equivalent. Extracted — mexiletine: kel 1.11 1/h, tlag 1 hr, tmax 4.29 hr, Cmax 0.94 µg/ml, AUC∞ 15.5 µg/ml/hr, AUC 13.4 µg/ml/hr, V 74 L.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of auc0^inf: this record has 15.492, the second reading none; it also differs on 6 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| k01 (hr)⁻¹ | `Q47` · kel | 1.112 | 1/h | 0.0003089 | 1/s | 1/h | llm_corrected (0.6) | Häselbarth_1981_table_3:row2:col6, Häselbarth_1981_table_3:row2:col7 |
| Lag time τ (hr) | `Q83` · tlag | 1.002 | hr | 3607 | s | h | llm_confirmed (0.6) | Häselbarth_1981_table_3:row3:col6, Häselbarth_1981_table_3:row3:col7, Häselbarth_1981_table_4:row3:col6, Häselbarth_1981_table_4:row3:col7 |
| tmax (hr) | `Q56` · tmax | 4.29 | hr | 1.544e+04 | s | h | exact (1) | Häselbarth_1981_table_3:row5:col6, Häselbarth_1981_table_3:row5:col7 |
| cmax (µg/ml) | `Q32` · Cmax | 0.94 | µg/ml |  |  | µg/ml | exact (1) | Häselbarth_1981_table_3:row6:col6, Häselbarth_1981_table_3:row6:col7 |
| AUC₀^∞ (µg/ml/hr) | `Q17` · AUC∞ | 15.492 | µg/ml/hr |  |  | µg/(h·ml) | llm (0.6) | Häselbarth_1981_table_3:row7:col6, Häselbarth_1981_table_3:row7:col7 |
| AUC₀ᶜ (µg/ml/hr) | `Q88` · AUC | 13.353 | µg/ml/hr |  |  | µg/(h·ml) | llm (0.6) | Häselbarth_1981_table_4:row7:col6, Häselbarth_1981_table_4:row7:col7 |
| volume of distribution | `Q61` · V | 74.0 | L | 0.074 | m3 | L | review_gapfill (0.7) | Sauer_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'k00 (hr)⁻¹' — extend the ontology if this is a real PK parameter (source ['Häselbarth_1981_table_3:row1:col6', 'Häselbarth_1981_table_3:row1:col7'])
- unit_dimension_mismatch: 'AUC₀^∞ (µg/ml/hr)' → Q17 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'k₀₀ (hr)⁻¹' — extend the ontology if this is a real PK parameter (source ['Häselbarth_1981_table_4:row1:col6', 'Häselbarth_1981_table_4:row1:col7'])
- dropped duplicate Q47 ('k₀₁ (hr)⁻¹', value '0.692') — already have one for this compound
- dropped duplicate Q56 ('t_max (hr)', value '11.06') — already have one for this compound
- dropped duplicate Q32 ('c_max (µg/ml)', value '0.53') — already have one for this compound
- unit_dimension_mismatch: 'AUC₀ᶜ (µg/ml/hr)' → Q88 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Conventional capsule (200 mg)' — extend the ontology if this is a real PK parameter (source ['Häselbarth_1981_table_5:row0:col6'])
- dropped unlinked row (NIL): 'Sustained-release form (432 mg)' — extend the ontology if this is a real PK parameter (source ['Häselbarth_1981_table_5:row1:col6'])
- implicit units: 'k01 (hr)⁻¹' → 1/h (from the popPK convention: 'The parameter k01 is identified as the elimination rate constant (terminal/beta phase). In population pharmacokinetics, ')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mexiletine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'subject 6' subgroup of Häselbarth_1981 (paper reports 6 populations: subject 1, subject 2, subject 3, subject 4, subject 5, subject 6)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Sauer_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3, 4, 5
- transposed table Häselbarth_1981_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.364 (4/11 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auc0^inf]` | 15.492 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0c]` | 13.353 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` | 0.94 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[k01 (hr)-]` | 1.112 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[lag time 7]` |  | 0.904 | only_one_extracted |
| `gpt-oss:120b` | `parameters[lag time τ]` | 1.002 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[tmax]` | 4.29 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | fail | [mass] / [length] ** 3 / [time] | µg/ml/hr | ['Häselbarth_1981_table_3:row7:col6', 'Häselbarth_1981_table_3:row7:col7'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Häselbarth_1981_table_3:row6:col6', 'Häselbarth_1981_table_3:row6:col7'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Häselbarth_1981_table_3:row2:col6', 'Häselbarth_1981_table_3:row2:col7'] |
| C5_dimension_Q56 | pass | [time] |  | ['Häselbarth_1981_table_3:row5:col6', 'Häselbarth_1981_table_3:row5:col7'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Sauer_2025:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Häselbarth_1981_table_3:row3:col6', 'Häselbarth_1981_table_3:row3:col7', 'Häselbarth_1981_table_4:row3:col6', 'Häselbarth_1981_table_4:row3:col7'] |
| C5_dimension_Q88 | fail | [mass] / [length] ** 3 / [time] | µg/ml/hr | ['Häselbarth_1981_table_4:row7:col6', 'Häselbarth_1981_table_4:row7:col7'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 74 L | ['Sauer_2025:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmexiletine%5D%20Mexiletine_Hselbarth1981_subject_6&body=Drug%3A%20mexiletine%0ARecord%3A%20Mexiletine_Hselbarth1981_subject_6%0APaper%3A%20H%C3%A4selbarth_1981%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mexiletine/Mexiletine_Hselbarth1981_subject_6%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-08 19:53 UTC</sub>
