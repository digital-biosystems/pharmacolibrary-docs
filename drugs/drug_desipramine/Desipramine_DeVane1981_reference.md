<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;desipramine&quot;,&quot;href&quot;:&quot;drugs/drug_desipramine/&quot;},{&quot;label&quot;:&quot;DeVane_1981 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# desipramine — `Desipramine_DeVane1981_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The desipramine absorption parameter was recorded as an absorption half-life but carries the value 0.74 with unit h⁻¹, an absorption rate constant, so the dimension does not match the parameter's meaning and the record was rejected.

<div class="pk-model-meta" hidden drug="desipramine" model-id="Desipramine_DeVane1981_reference" status="rejected" stale="false" population="healthy male volunteers" measured-compound="desipramine" parameterization="mechanistic" topology="1C"></div>

## Citation
DeVane CL, Savett M, Jusko WJ. Desipramine and 2-hydroxy-desipramine pharmacokinetics in normal volunteers. European journal of clinical pharmacology (1981).
  ·  DOI: [10.1007/BF00558386](https://doi.org/10.1007/BF00558386)

## Population and dosing

**Population:** healthy male volunteers · condition healthy · age group adult · n = 4.

**Dosing:** 50 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cp m~x [ng/ml] | Cmax | 11.5 | ng/ml |
| ka [h -1] | t1/2ka | 0.74 |  |
| C1B [1/kg/h] | CL | 1.86 | 1/kg/h |
| Vd~ [1/kg] | Vnorm | 22.4 | 1/kg |
| t'Afl [h] | t1/2z | 21.8 | h |
| AUC [h . ng/ml] 259 | AUC | 487 |  |
| Cp m~ [ng/ml] | Ct | 11.8 | ng/ml |
| AUC [h -ng/ml] 243 | AUCt | 391 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.688). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The desipramine absorption parameter was recorded as an absorption half-life but carries the value 0.74 with unit h⁻¹, an absorption rate constant, so the dimension does not match the parameter's meaning and the record was rejected.**

For desipramine in healthy male volunteers (DeVane_1981), the parameter labeled 'ka [h -1]' with value 0.74 h⁻¹ is a first-order absorption rate constant, but it was interpreted as the half-life of the absorption phase, whose dimension should be time — a dimension mismatch on a structural parameter. The record also contains a unit ('1/kg/h' on the clearance, verbatim 'C1B [1/kg/h]') that could not be converted to SI, so clearance reached the model without an SI value. A second reader additionally disputed several entries: they read no value for the AUCt of 391 h·ng/ml, reported a bioavailability fraction of 0.40 that this record lacks, and assigned different parameter identities for the absorption rate constant, terminal half-life (21.8 h) and volume of distribution (22.4 l/kg). Extracted — desipramine: Cmax 11.5 ng/ml, t1/2ka 0.74, CL 1.86 1/kg/h, Vnorm 22.4 1/kg, t1/2z 21.8 h, AUC 487, Ct 11.8 ng/ml, AUCt 391.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of auc [h -ng/ml] 243: this record has 391, the second reading none; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cp m~x [ng/ml] | `Q32` · Cmax | 11.5 | ng/ml |  |  | ng/ml | llm (0.6) | tab_0:row4:col1, tab_0:row4:col2, tab_0:row4:col3, tab_0:row4:col4, tab_0:row4:col5 |
| ka [h -1] | `Q95` · t1/2ka | 0.74 |  |  |  |  | llm_corrected (0.6) | tab_0:row5:col1, tab_0:row5:col2, tab_0:row5:col3, tab_0:row5:col4, tab_0:row5:col5 |
| C1B [1/kg/h] | `Q22` · CL | 1.86 | 1/kg/h |  |  | 1/(h·kg) | llm (0.6) | tab_0:row7:col1, tab_0:row7:col2, tab_0:row7:col3, tab_0:row7:col4, tab_0:row7:col5 |
| Vd~ [1/kg] | `Q352` · Vnorm | 22.4 | 1/kg |  |  | 1/kg | llm_corrected (0.6) | tab_0:row8:col1, tab_0:row8:col2, tab_0:row8:col3, tab_0:row8:col4, tab_0:row8:col5 |
| t'Afl [h] | `Q57` · t1/2z | 21.8 | h | 7.848e+04 | s | h | llm (0.6) | tab_0:row9:col1, tab_0:row9:col2, tab_0:row9:col3, tab_0:row9:col4, tab_0:row9:col5 |
| AUC [h . ng/ml] 259 | `Q88` · AUC | 487 |  |  |  |  | llm_confirmed (0.6) | tab_0:row10:col1, tab_0:row10:col2, tab_0:row10:col3, tab_0:row10:col4 |
| Cp m~ [ng/ml] | `Q75` · Ct | 11.8 | ng/ml |  |  | ng/ml | llm (0.6) | tab_0:row12:col1, tab_0:row12:col2, tab_0:row12:col3, tab_0:row12:col4, tab_0:row12:col5 |
| AUC [h -ng/ml] 243 | `Q19` · AUCt | 391 |  |  |  |  | llm_corrected (0.6) | tab_0:row13:col1, tab_0:row13:col2, tab_0:row13:col3, tab_0:row13:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Subject' — extend the ontology if this is a real PK parameter (source ['tab_0:row0:col1', 'tab_0:row0:col2', 'tab_0:row0:col3', 'tab_0:row0:col4'])
- dropped unlinked row (NIL): '[~tg/kg free base] 577' — extend the ontology if this is a real PK parameter (source ['tab_0:row2:col1', 'tab_0:row2:col2', 'tab_0:row2:col3', 'tab_0:row2:col4'])
- dropped unlinked row (NIL): 'F *a' — extend the ontology if this is a real PK parameter (source ['tab_0:row6:col1', 'tab_0:row6:col2', 'tab_0:row6:col3', 'tab_0:row6:col4', 'tab_0:row6:col5'])
- unit_dimension_mismatch: 'C1B [1/kg/h]' → Q22 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'Vd~ [1/kg]' → Q352 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=desipramine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.688 (11/16 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc [h -ng/ml] 243]` | 391 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f *a]` |  | 0.40 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka [h -1]].parameter_id` | Q95 | Q49 | mismatch |
| `gpt-oss-120b` | `parameters[t'afl [h]].parameter_id` | Q57 | Q83 | mismatch |
| `gpt-oss-120b` | `parameters[vd- [1/kg]].parameter_id` | Q352 | Q61 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | fail | 1 / [time] | 1/kg/h | ['tab_0:row7:col1', 'tab_0:row7:col2', 'tab_0:row7:col3', 'tab_0:row7:col4', 'tab_0:row7:col5'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col3', 'tab_0:row4:col4', 'tab_0:row4:col5'] |
| C5_dimension_Q352 | fail | dimensionless | 1/kg | ['tab_0:row8:col1', 'tab_0:row8:col2', 'tab_0:row8:col3', 'tab_0:row8:col4', 'tab_0:row8:col5'] |
| C5_dimension_Q57 | pass | [time] |  | ['tab_0:row9:col1', 'tab_0:row9:col2', 'tab_0:row9:col3', 'tab_0:row9:col4', 'tab_0:row9:col5'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  | ['tab_0:row12:col1', 'tab_0:row12:col2', 'tab_0:row12:col3', 'tab_0:row12:col4', 'tab_0:row12:col5'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 |  | ['tab_0:row13:col1', 'tab_0:row13:col2', 'tab_0:row13:col3', 'tab_0:row13:col4'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 |  | ['tab_0:row10:col1', 'tab_0:row10:col2', 'tab_0:row10:col3', 'tab_0:row10:col4'] |
| C5_unit_missing_Q95 | fail | [time] |  | ['tab_0:row5:col1', 'tab_0:row5:col2', 'tab_0:row5:col3', 'tab_0:row5:col4', 'tab_0:row5:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.86 | ['tab_0:row7:col1', 'tab_0:row7:col2', 'tab_0:row7:col3', 'tab_0:row7:col4', 'tab_0:row7:col5'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdesipramine%5D%20Desipramine_DeVane1981_reference&body=Drug%3A%20desipramine%0ARecord%3A%20Desipramine_DeVane1981_reference%0APaper%3A%20DeVane_1981%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_desipramine/Desipramine_DeVane1981_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-09-23 20:06 UTC</sub>
