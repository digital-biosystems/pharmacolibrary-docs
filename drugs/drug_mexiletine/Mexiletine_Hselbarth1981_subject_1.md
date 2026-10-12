<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;mexiletine&quot;,&quot;href&quot;:&quot;drugs/drug_mexiletine/&quot;},{&quot;label&quot;:&quot;H\u00e4selbarth_1981 \u00b7 subject_1&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mexiletine — `Mexiletine_Hselbarth1981_subject_1`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.364). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The mexiletine elimination rate constant was rejected because its unit could not be converted to standard SI units.**

The record lists the elimination rate constant as 2.345 1/h, but this unit was not recognized for conversion to SI. Consequently, the parameter lacked a valid SI value, triggering a dimension mismatch. A second reader also disagreed on the extracted values for AUC, Cmax, and lag time. Extracted — mexiletine: kel 2.35 1/h, tlag 0.685 hr, tmax 0.91 hr, Cmax 0.93 µg/ml, AUC∞ 7.7 µg/ml/hr, AUC 10 µg/ml/hr, V 74 L.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of auc0^inf: this record has 7.696, the second reading none; it also differs on 6 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

## Citation
Häselbarth V et al., Kinetics and bioavailability of mexilet…, Clinical pharmacology and t… (1981)
  ·  DOI: [10.1038/clpt.1981.103](https://doi.org/10.1038/clpt.1981.103)

<div class="pk-model-meta" hidden drug="mexiletine" model-id="Mexiletine_Hselbarth1981_subject_1" status="rejected" stale="false" population="healthy adults" measured-compound="mexiletine" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k01 (hr)⁻¹ | `Q47` · kel | 2.345 | 1/h | 0.000651388888888889 | 1/h | not captured | llm_corrected (0.6) | Häselbarth_1981_table_3:row2:col1 | — | not captured |
| Lag time τ (hr) | `Q83` · tlag | 0.685 | hr | 2466.0 | [h] | not captured | llm_confirmed (0.6) | Häselbarth_1981_table_3:row3:col1, Häselbarth_1981_table_4:row3:col1 | — | not captured |
| tmax (hr) | `Q56` · tmax | 0.91 | hr | 3276.0 | [h] | not captured | exact (1.0) | Häselbarth_1981_table_3:row5:col1 | — | not captured |
| cmax (µg/ml) | `Q32` · Cmax | 0.93 | µg/ml | not captured | [µg] / [ml] | not captured | exact (1.0) | Häselbarth_1981_table_3:row6:col1 | — | not captured |
| AUC₀^∞ (µg/ml/hr) | `Q17` · AUC∞ | 7.696 | µg/ml/hr | not captured | [µg] / [[h] · [ml]] | not captured | llm (0.6) | Häselbarth_1981_table_3:row7:col1 | — | not captured |
| AUC₀ᶜ (µg/ml/hr) | `Q88` · AUC | 10.0 | µg/ml/hr | not captured | [µg] / [[h] · [ml]] | not captured | llm (0.6) | Häselbarth_1981_table_4:row7:col1 | — | not captured |
| volume of distribution | `Q61` · V | 74.0 | L | 0.074 | L | not captured | review_gapfill (0.7) | Sauer_2025:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'k00 (hr)⁻¹' — extend the ontology if this is a real PK parameter (source ['Häselbarth_1981_table_3:row1:col1'])
- unit_dimension_mismatch: 'AUC₀^∞ (µg/ml/hr)' → Q17 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'k₀₀ (hr)⁻¹' — extend the ontology if this is a real PK parameter (source ['Häselbarth_1981_table_4:row1:col1'])
- dropped duplicate Q47 ('k₀₁ (hr)⁻¹', value '2.720') — already have one for this compound
- dropped duplicate Q56 ('t_max (hr)', value '10.36') — already have one for this compound
- dropped duplicate Q32 ('c_max (µg/ml)', value '0.36') — already have one for this compound
- unit_dimension_mismatch: 'AUC₀ᶜ (µg/ml/hr)' → Q88 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Conventional capsule (200 mg)' — extend the ontology if this is a real PK parameter (source ['Häselbarth_1981_table_5:row0:col1'])
- dropped unlinked row (NIL): 'Sustained-release form (432 mg)' — extend the ontology if this is a real PK parameter (source ['Häselbarth_1981_table_5:row1:col1'])
- implicit units: 'k01 (hr)⁻¹' → 1/h (from the popPK convention: 'The parameter k01 is identified as the elimination rate constant (terminal/beta phase). In population pharmacokinetics, ')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mexiletine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'subject 1' subgroup of Häselbarth_1981 (paper reports 6 populations: subject 1, subject 2, subject 3, subject 4, subject 5, subject 6)
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
| `gpt-oss:120b` | `parameters[auc0^inf]` | 7.696 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0c]` | 10.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` | 0.93 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k01 (hr)-]` | 2.345 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[lag time 7]` | not captured | 0.904 | only_one_extracted |
| `gpt-oss:120b` | `parameters[lag time τ]` | 0.685 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[tmax]` | 0.91 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | fail | [mass] / [length] ** 3 / [time] | µg/ml/hr | not captured | not captured | ['Häselbarth_1981_table_3:row7:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Häselbarth_1981_table_3:row6:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Häselbarth_1981_table_3:row2:col1'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Häselbarth_1981_table_3:row5:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sauer_2025:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Häselbarth_1981_table_3:row3:col1', 'Häselbarth_1981_table_4:row3:col1'] |
| C5_dimension_Q88 | fail | [mass] / [length] ** 3 / [time] | µg/ml/hr | not captured | not captured | ['Häselbarth_1981_table_4:row7:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 74 L | not captured | not captured | ['Sauer_2025:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_mexiletine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Häselbarth_1981` / `Häselbarth_1981::subject_1`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-08 19:53 UTC</sub>
