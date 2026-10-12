<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;inebilizumab&quot;,&quot;href&quot;:&quot;drugs/drug_inebilizumab/&quot;},{&quot;label&quot;:&quot;Yan_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# inebilizumab — `Inebilizumab_Yan2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.655). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Vmax (832) has a daily rate unit that could not be converted, causing a dimension mismatch that rejected the inebilizumab model.**

The record lists Vmax with a value of 832 and a unit of µg/day. Because this specific unit was unavailable for conversion to standard SI units, the parameter lacked a valid physical value for dimensional analysis. This incompatibility triggered a structural parameter check failure, resulting in the rejection of the entire pharmacokinetic record. Extracted — inebilizumab: CL 188 mL/day, V1 2.95e+03 mL, Q 363 mL/day, V2 2.57e+03 mL, Vmax 832 µg/day, kel 0.00294 /day, Km 5.89 µg/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[km].covariate_forms`: this record has ['linear_fractional'], the second reading none; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Yan L et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2022)
  ·  DOI: [10.1007/s40262-021-01071-5](https://doi.org/10.1007/s40262-021-01071-5)

<div class="pk-model-meta" hidden drug="inebilizumab" model-id="Inebilizumab_Yan2022_reference" status="rejected" stale="false" population="adult subjects with NMOSD, SSc, or MS" measured-compound="inebilizumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 4 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (mL/day) | `Q22` · CL | 188 | mL/day | 2.1759259259259256e-09 | [ml] / [d] | 25 | exact (1.0) | Tab6:row1:col1, Tab6:row1:col2, Tab6:row1:col3, Tab6:row1:col5, Tab6:row1:col6 | — | 27 (None% RSE) |
| Vc (mL) | `Q63` · V1 | 2950 | mL | 0.00295 | [ml] | 30 | exact (1.0) | Tab6:row3:col1, Tab6:row3:col2, Tab6:row3:col3, Tab6:row3:col5, Tab6:row3:col6 | — | 17 (None% RSE) |
| weight_on_vca | `Q900` · weight_on_vca | 0.39 | not captured | not captured | not captured | 22.4 | not captured (not captured) | Tab6:row4:col1, Tab6:row4:col2, Tab6:row4:col3 | — | not captured |
| Q (mL/day) | `Q30` · Q | 363 | mL/day | 4.201388888888889e-09 | [ml] / [d] | 6.0 | exact (1.0) | Tab6:row5:col1, Tab6:row5:col2, Tab6:row5:col3 | — | not captured |
| Vp (mL) | `Q64` · V2 | 2570 | mL | 0.00257 | [ml] | 45 | exact (1.0) | Tab6:row7:col1, Tab6:row7:col2, Tab6:row7:col3, Tab6:row7:col5, Tab6:row7:col6 | — | 16 (None% RSE) |
| Vmax (µg/day) | `Q66` · Vmax | 832 | µg/day | not captured | [µg] / [d] | 61 | special_case (0.95) | Tab6:row9:col1, Tab6:row9:col2, Tab6:row9:col3, Tab6:row9:col5, Tab6:row9:col6 | — | 30 (None% RSE) |
| Kdec (/day) | `Q47` · kel | 0.00294 | /day | 3.402777777777778e-08 | [1] / [d] | 55.1 | llm (0.6) | Tab6:row11:col1, Tab6:row11:col2, Tab6:row11:col3 | — | not captured |
| Km (µg/mL) | `Q1` · Km | 5.89 | µg/mL | not captured | [µg] / [ml] | 25.5 | exact (1.0) | Tab6:row12:col1, Tab6:row12:col2, Tab6:row12:col3 | — | not captured |
| theta_km_weight | `Q900` · theta_km_weight | 0.57 | not captured | not captured | not captured | 15.8 | not captured (not captured) | Tab6:row2:col1, Tab6:row2:col2, Tab6:row2:col3 | — | not captured |
| theta_q900_weight | `Q900` · theta_q900_weight | 0.84 | not captured | not captured | not captured | 21.1 | not captured (not captured) | Tab6:row6:col1, Tab6:row6:col2, Tab6:row6:col3 | — | not captured |
| theta_q321_weight | `Q900` · theta_q321_weight | 0.40 | not captured | not captured | not captured | 27.9 | not captured (not captured) | Tab6:row8:col1, Tab6:row8:col2, Tab6:row8:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL (mL/day)' routed out of structural estimates ('IIV (CV%)')
- table section iiv: 'Vc (mL)' routed out of structural estimates ('IIV (CV%)')
- table section iiv: 'Vp (mL)' routed out of structural estimates ('IIV (CV%)')
- table section iiv: 'Vmax (µg/day)' routed out of structural estimates ('IIV (CV%)')
- table section residual_error: 'Proportional error (%CV)' routed out of structural estimates ('Residual variability')
- covariate level 'Weight on Vca' → Q900:weight_on_vca = 0.39 (linear_fractional on Q22)
- unit_dimension_mismatch: 'Vmax (µg/day)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q66 ('Study CP200 on Vmax (%)', value '210') — already have one for this compound
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q321 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=inebilizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'inebilizumab' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 6

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.655 (19/29 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[km].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_weight]` | not captured | 0.57 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_km_weight]` | 0.57 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q321_weight]` | 0.40 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q49_weight]` | not captured | 0.84 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_weight]` | not captured | 0.39 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q900_weight]` | 0.84 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_weight]` | not captured | 0.40 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[weight_on_vca]` | 0.39 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab6:row12:col1', 'Tab6:row12:col2', 'Tab6:row12:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab6:row1:col1', 'Tab6:row1:col2', 'Tab6:row1:col3', 'Tab6:row1:col5', 'Tab6:row1:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab6:row5:col1', 'Tab6:row5:col2', 'Tab6:row5:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab6:row11:col1', 'Tab6:row11:col2', 'Tab6:row11:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab6:row3:col1', 'Tab6:row3:col2', 'Tab6:row3:col3', 'Tab6:row3:col5', 'Tab6:row3:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab6:row7:col1', 'Tab6:row7:col2', 'Tab6:row7:col3', 'Tab6:row7:col5', 'Tab6:row7:col6'] |
| C5_dimension_Q66 | fail | [mass] / [time] | µg/day | not captured | not captured | ['Tab6:row9:col1', 'Tab6:row9:col2', 'Tab6:row9:col3', 'Tab6:row9:col5', 'Tab6:row9:col6'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 188.0 | not captured | not captured | ['Tab6:row1:col1', 'Tab6:row1:col2', 'Tab6:row1:col3', 'Tab6:row1:col5', 'Tab6:row1:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00783 L/h | not captured | not captured | ['Tab6:row1:col1', 'Tab6:row1:col2', 'Tab6:row1:col3', 'Tab6:row1:col5', 'Tab6:row1:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.95 L | not captured | not captured | ['Tab6:row3:col1', 'Tab6:row3:col2', 'Tab6:row3:col3', 'Tab6:row3:col5', 'Tab6:row3:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.57 L | not captured | not captured | ['Tab6:row7:col1', 'Tab6:row7:col2', 'Tab6:row7:col3', 'Tab6:row7:col5', 'Tab6:row7:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_inebilizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yan_2022` / `Yan_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:51 UTC</sub>
