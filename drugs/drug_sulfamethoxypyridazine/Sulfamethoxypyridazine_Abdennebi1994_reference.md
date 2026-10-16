<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfamethoxypyridazine&quot;,&quot;href&quot;:&quot;drugs/drug_sulfamethoxypyridazine/&quot;},{&quot;label&quot;:&quot;Abdennebi_1994 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sulfamethoxypyridazine — `Sulfamethoxypyridazine_Abdennebi1994_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: camelid.** This record comes from an animal study (camelid), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**Sulfamethoxypyridazine absolute bioavailability was rejected because its reported unit could not be converted to SI.**

The absolute bioavailability is listed as 53.9 with the unit 'p.100', which indicates a percentage rather than a dimensionless fraction. This specific unit label was not recognized for conversion to standard SI units. Consequently, the parameter remained without a valid SI value, triggering a dimensional mismatch on a structural parameter and leading to the record's rejection. Extracted — sulfamethoxypyridazine: λ1 5.09 h⁻¹, t1/2z 136 h, kel 61 h⁻¹, k12 3.44e+03 h⁻¹, k21 1.5e+03 h⁻¹, V 165 l/kg, Vss 544 l/kg, Ct 35 l/kg.h, … (+5).

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Abdennebi EH et al., [Pharmacokinetics and plasma protein bi…, Revue d'elevage et de medec… (1994)

<div class="pk-model-meta" hidden drug="sulfamethoxypyridazine" model-id="Sulfamethoxypyridazine_Abdennebi1994_reference" status="rejected" stale="false" population="dromedary camels" measured-compound="sulfamethoxypyridazine" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 13 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| A (µg/ml) | `Q900` · equation variable | 216.59 | µg/ml | not captured | [µg] / [ml] | not captured | llm (0.6) | Abdennebi_1994_table_2:row0:col1, Abdennebi_1994_table_2:row0:col2, Abdennebi_1994_table_2:row0:col3, Abdennebi_1994_table_2:row0:col4, Abdennebi_1994_table_2:row0:col5 | — | not captured |
| α (h⁻¹) | `Q67` · λ1 | 5.09 | h⁻¹ | not captured | [1] / [h] | not captured | exact (1.0) | Abdennebi_1994_table_2:row1:col1, Abdennebi_1994_table_2:row1:col2, Abdennebi_1994_table_2:row1:col3, Abdennebi_1994_table_2:row1:col4, Abdennebi_1994_table_2:row1:col5 | — | not captured |
| t1/2(α) (h) | `Q57` · t1/2z | 0136 | h | 489600.0 | [h] | not captured | space_fold (0.95) | Abdennebi_1994_table_2:row2:col1, Abdennebi_1994_table_2:row2:col2, Abdennebi_1994_table_2:row2:col3, Abdennebi_1994_table_2:row2:col4, Abdennebi_1994_table_2:row2:col5 | — | not captured |
| β (h⁻¹) | `Q47` · kel | 0061 | h⁻¹ | 0.016944444444444446 | [1] / [h] | not captured | exact (1.0) | Abdennebi_1994_table_2:row4:col1, Abdennebi_1994_table_2:row4:col2, Abdennebi_1994_table_2:row4:col3, Abdennebi_1994_table_2:row4:col4, Abdennebi_1994_table_2:row4:col5 | — | not captured |
| K12 (h⁻¹) | `Q301` · k12 | 3445 | h⁻¹ | 0.9569444444444445 | [1] / [h] | not captured | exact (1.0) | Abdennebi_1994_table_2:row7:col1, Abdennebi_1994_table_2:row7:col2, Abdennebi_1994_table_2:row7:col3, Abdennebi_1994_table_2:row7:col4, Abdennebi_1994_table_2:row7:col5 | — | not captured |
| K21 (h⁻¹) | `Q302` · k21 | 1498 | h⁻¹ | 0.4161111111111111 | [1] / [h] | not captured | exact (1.0) | Abdennebi_1994_table_2:row8:col1, Abdennebi_1994_table_2:row8:col2, Abdennebi_1994_table_2:row8:col3, Abdennebi_1994_table_2:row8:col4, Abdennebi_1994_table_2:row8:col5 | — | not captured |
| Vd(c) (l/kg) | `Q61` · V | 0165 | l/kg | 11.55 | [l] / [kg] | not captured | space_fold (0.95) | Abdennebi_1994_table_2:row10:col1, Abdennebi_1994_table_2:row10:col2, Abdennebi_1994_table_2:row10:col3, Abdennebi_1994_table_2:row10:col4, Abdennebi_1994_table_2:row10:col5 | — | not captured |
| Vss (l/kg) | `Q65` · Vss | 0544 | l/kg | 38.080000000000005 | [l] / [kg] | not captured | exact (1.0) | Abdennebi_1994_table_2:row12:col1, Abdennebi_1994_table_2:row12:col2, Abdennebi_1994_table_2:row12:col3, Abdennebi_1994_table_2:row12:col4, Abdennebi_1994_table_2:row12:col5 | — | not captured |
| CT (l/kg.h) | `Q75` · Ct | 0035 | l/kg.h | not captured | [l] / [[h] · [kg]] | not captured | exact (1.0) | Abdennebi_1994_table_2:row13:col1, Abdennebi_1994_table_2:row13:col2, Abdennebi_1994_table_2:row13:col3, Abdennebi_1994_table_2:row13:col4, Abdennebi_1994_table_2:row13:col5 | — | not captured |
| Ka (h⁻¹) | `Q49` · kabs | 0098 | h⁻¹ | 0.02722222222222222 | [1] / [h] | not captured | exact (1.0) | Abdennebi_1994_table_3:row0:col1, Abdennebi_1994_table_3:row0:col2, Abdennebi_1994_table_3:row0:col3, Abdennebi_1994_table_3:row0:col4, Abdennebi_1994_table_3:row0:col5 | — | not captured |
| Cmax (µg/ml) | `Q32` · Cmax | 50.92 | µg/ml | not captured | [µg] / [ml] | not captured | exact (1.0) | Abdennebi_1994_table_3:row4:col1, Abdennebi_1994_table_3:row4:col2, Abdennebi_1994_table_3:row4:col3, Abdennebi_1994_table_3:row4:col4, Abdennebi_1994_table_3:row4:col5 | — | not captured |
| Tmax (h) | `Q56` · tmax | 20.75 | h | 74700.0 | [h] | not captured | exact (1.0) | Abdennebi_1994_table_3:row5:col1, Abdennebi_1994_table_3:row5:col2, Abdennebi_1994_table_3:row5:col3, Abdennebi_1994_table_3:row5:col4, Abdennebi_1994_table_3:row5:col5 | — | not captured |
| F (p.100) | `Q40` · Fab | 53.9 | p.100 | not captured | not captured | not captured | exact (1.0) | Abdennebi_1994_table_3:row7:col1, Abdennebi_1994_table_3:row7:col2, Abdennebi_1994_table_3:row7:col3, Abdennebi_1994_table_3:row7:col4, Abdennebi_1994_table_3:row7:col5 | — | not captured |
| TMA (h) | `Q59` · t1/2α | 8.9 | h | 32040.0 | [h] | not captured | llm (0.6) | Abdennebi_1994_table_3:row8:col1, Abdennebi_1994_table_3:row8:col2, Abdennebi_1994_table_3:row8:col3, Abdennebi_1994_table_3:row8:col4, Abdennebi_1994_table_3:row8:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'a' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'b' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'c' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'd' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'α (h⁻¹)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped duplicate Q900 ('B(µg/ml)', value '86.65') — already have one for this compound
- dropped duplicate Q57 ('t1/2(β) (h)', value '11.34') — already have one for this compound
- dropped duplicate Q57 ('TMR (h)', value '9.69') — already have one for this compound
- dropped duplicate Q47 ('K10 (h⁻¹)', value '0207') — already have one for this compound
- dropped duplicate Q61 ('Vd(β) (l/kg)', value '0560') — already have one for this compound
- unit_dimension_mismatch: 'CT (l/kg.h)' → Q75 (unit '[length] ** 3 * [time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q57 ('t1/2(Ka) (h)', value '7.02') — already have one for this compound
- dropped duplicate Q57 ('t1/2(K10) (h)', value '36.83') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sulfamethoxypyridazine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- LLM region Abdennebi_1994:other_prose: Error code: 429 - {'error': {'message': 'Rate limit exceeded for api_key: 8d79104cac3d0b5a8019d9c3dd60ff02e7a84591fb3552ddb3bbcabd52b31d23. Limit type: max_parallel_requests. Current limit: 4, Remaining: 0. Limit resets at: 2026-10-07 11:41:39 UTC', 'type': 'throttling_error', 'param': None, 'code': '429'}}

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Abdennebi_1994_table_2:row7:col1', 'Abdennebi_1994_table_2:row7:col2', 'Abdennebi_1994_table_2:row7:col3', 'Abdennebi_1994_table_2:row7:col4', 'Abdennebi_1994_table_2:row7:col5'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Abdennebi_1994_table_2:row8:col1', 'Abdennebi_1994_table_2:row8:col2', 'Abdennebi_1994_table_2:row8:col3', 'Abdennebi_1994_table_2:row8:col4', 'Abdennebi_1994_table_2:row8:col5'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Abdennebi_1994_table_3:row4:col1', 'Abdennebi_1994_table_3:row4:col2', 'Abdennebi_1994_table_3:row4:col3', 'Abdennebi_1994_table_3:row4:col4', 'Abdennebi_1994_table_3:row4:col5'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Abdennebi_1994_table_2:row4:col1', 'Abdennebi_1994_table_2:row4:col2', 'Abdennebi_1994_table_2:row4:col3', 'Abdennebi_1994_table_2:row4:col4', 'Abdennebi_1994_table_2:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Abdennebi_1994_table_3:row0:col1', 'Abdennebi_1994_table_3:row0:col2', 'Abdennebi_1994_table_3:row0:col3', 'Abdennebi_1994_table_3:row0:col4', 'Abdennebi_1994_table_3:row0:col5'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Abdennebi_1994_table_3:row5:col1', 'Abdennebi_1994_table_3:row5:col2', 'Abdennebi_1994_table_3:row5:col3', 'Abdennebi_1994_table_3:row5:col4', 'Abdennebi_1994_table_3:row5:col5'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Abdennebi_1994_table_2:row2:col1', 'Abdennebi_1994_table_2:row2:col2', 'Abdennebi_1994_table_2:row2:col3', 'Abdennebi_1994_table_2:row2:col4', 'Abdennebi_1994_table_2:row2:col5'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Abdennebi_1994_table_3:row8:col1', 'Abdennebi_1994_table_3:row8:col2', 'Abdennebi_1994_table_3:row8:col3', 'Abdennebi_1994_table_3:row8:col4', 'Abdennebi_1994_table_3:row8:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Abdennebi_1994_table_2:row10:col1', 'Abdennebi_1994_table_2:row10:col2', 'Abdennebi_1994_table_2:row10:col3', 'Abdennebi_1994_table_2:row10:col4', 'Abdennebi_1994_table_2:row10:col5'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Abdennebi_1994_table_2:row12:col1', 'Abdennebi_1994_table_2:row12:col2', 'Abdennebi_1994_table_2:row12:col3', 'Abdennebi_1994_table_2:row12:col4', 'Abdennebi_1994_table_2:row12:col5'] |
| C5_dimension_Q67 | fail | 1 / [time] | h⁻¹ | not captured | not captured | ['Abdennebi_1994_table_2:row1:col1', 'Abdennebi_1994_table_2:row1:col2', 'Abdennebi_1994_table_2:row1:col3', 'Abdennebi_1994_table_2:row1:col4', 'Abdennebi_1994_table_2:row1:col5'] |
| C5_dimension_Q75 | fail | [length] ** 3 * [time] | l/kg.h | not captured | not captured | ['Abdennebi_1994_table_2:row13:col1', 'Abdennebi_1994_table_2:row13:col2', 'Abdennebi_1994_table_2:row13:col3', 'Abdennebi_1994_table_2:row13:col4', 'Abdennebi_1994_table_2:row13:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.16e+04 L | not captured | not captured | ['Abdennebi_1994_table_2:row10:col1', 'Abdennebi_1994_table_2:row10:col2', 'Abdennebi_1994_table_2:row10:col3', 'Abdennebi_1994_table_2:row10:col4', 'Abdennebi_1994_table_2:row10:col5'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 3.81e+04 L | not captured | not captured | ['Abdennebi_1994_table_2:row12:col1', 'Abdennebi_1994_table_2:row12:col2', 'Abdennebi_1994_table_2:row12:col3', 'Abdennebi_1994_table_2:row12:col4', 'Abdennebi_1994_table_2:row12:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_sulfamethoxypyridazine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Abdennebi_1994` / `Abdennebi_1994::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:11 UTC</sub>
