<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;obinutuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_obinutuzumab/&quot;},{&quot;label&quot;:&quot;Gibiansky_2014 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# obinutuzumab — `Obinutuzumab_Gibiansky2014_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because a structural parameter's unit could not be converted to SI, causing a dimension mismatch.

<div class="pk-model-meta" hidden drug="obinutuzumab" model-id="Obinutuzumab_Gibiansky2014_reference" status="rejected" stale="false" population="patients with CLL and NHL" measured-compound="obinutuzumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Gibiansky E, Gibiansky L, Carlile DJ, Jamois C, Buchheit V, Frey N. Population Pharmacokinetics of Obinutuzumab (GA101) in Chronic Lymphocytic Leukemia (CLL) and Non-Hodgkin's Lymphoma and Exposure-Response in CLL. CPT: pharmacometrics & systems pharmacology 3(10):e144 (2014).
  ·  DOI: [10.1038/psp.2014.42](https://doi.org/10.1038/psp.2014.42)

## Population and dosing

**Population:** patients with CLL and NHL · condition CLL and NHL · age group adult · n = &gt;=678.

**Dosing:** 200, 2000 mg, iv, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted, plus 5 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CLt (L/day) | CL | 0.196 | L/day | 0.231 |  |
| CLint (L/day) | CLint | 0.0775 | L/day | 0.0828 | 0.137 (0.159% RSE) |
| V1 (L) | V1 | 2.68 | L | 2.76 |  |
| V2 (L) | V2 | 0.922 | L | 1.01 |  |
| Q (L/day) | Q | 1.03 | L/day | 1.29 |  |
| theta_cl_sex_clt | theta_cl_sex_clt | 1.23 |  | 1.49 |  |
| theta_clint_sex_clint | theta_clint_sex_clint | 1.14 |  | 1.22 |  |
| theta_cl_wt_power | theta_cl_wt_power | 0.437 |  | 0.615 |  |
| theta_v1_sex_v1 | theta_v1_sex_v1 | 1.14 |  | 1.18 |  |
| theta_v1_wt_v1 | theta_v1_wt_v1 | 0.293 |  | 0.383 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.964). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because a structural parameter's unit could not be converted to SI, causing a dimension mismatch.**

A reported unit for a structural parameter was not recognized, so the parameter lacked a standard SI value. This resulted in a dimension mismatch on that parameter, leading to rejection. The second reader disagreed on the dose compound and primary analyte, marking them as unknown instead of obinutuzumab. Extracted — obinutuzumab: CL 0.196 L/day, CLint 0.0775 L/day, V1 2.68 L, V2 0.922 L, Q 1.03 L/day.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of kdes: this record has none, the second reading 0.0291. That field does not shape the model.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLt (L/day) | `Q22` · CL | 0.196 | L/day | 2.269e-09 | m3/s | l/d | 0.231 | exact (1) | Gibiansky_2014_table_p4_1:row3:col2, Gibiansky_2014_table_p4_1:row3:col3, Gibiansky_2014_table_p4_1:row3:col4 |  |
| CLint (L/day) | `Q3` · CLint | 0.0775 | L/day |  |  | l/d | 0.0828 | exact (1) | Gibiansky_2014_table_p4_1:row5:col2, Gibiansky_2014_table_p4_1:row5:col3, Gibiansky_2014_table_p4_1:row5:col4 | 0.137 (0.159% RSE) |
| V1 (L) | `Q63` · V1 | 2.68 | L | 0.00268 | m3 | l | 2.76 | exact (1) | Gibiansky_2014_table_p4_1:row10:col2, Gibiansky_2014_table_p4_1:row10:col3, Gibiansky_2014_table_p4_1:row10:col4 |  |
| V2 (L) | `Q64` · V2 | 0.922 | L | 0.000922 | m3 | l | 1.01 | exact (1) | Gibiansky_2014_table_p4_1:row13:col2, Gibiansky_2014_table_p4_1:row13:col3, Gibiansky_2014_table_p4_1:row13:col4 |  |
| Q (L/day) | `Q30` · Q | 1.03 | L/day | 1.192e-08 | m3/s | l/d | 1.29 | exact (1) | Gibiansky_2014_table_p4_1:row14:col2, Gibiansky_2014_table_p4_1:row14:col3, Gibiansky_2014_table_p4_1:row14:col4 |  |
| theta_cl_sex_clt | `Q900` · theta_cl_sex_clt | 1.23 |  |  |  |  | 1.49 |  | Gibiansky_2014_table_p4_1:row4:col2, Gibiansky_2014_table_p4_1:row4:col3, Gibiansky_2014_table_p4_1:row4:col4 |  |
| theta_clint_sex_clint | `Q900` · theta_clint_sex_clint | 1.14 |  |  |  |  | 1.22 |  | Gibiansky_2014_table_p4_1:row6:col2, Gibiansky_2014_table_p4_1:row6:col3, Gibiansky_2014_table_p4_1:row6:col4 |  |
| theta_cl_wt_power | `Q900` · theta_cl_wt_power | 0.437 |  |  |  |  | 0.615 |  | Gibiansky_2014_table_p4_1:row7:col2, Gibiansky_2014_table_p4_1:row7:col3, Gibiansky_2014_table_p4_1:row7:col4 |  |
| theta_v1_sex_v1 | `Q900` · theta_v1_sex_v1 | 1.14 |  |  |  |  | 1.18 |  | Gibiansky_2014_table_p4_1:row11:col2, Gibiansky_2014_table_p4_1:row11:col3, Gibiansky_2014_table_p4_1:row11:col4 |  |
| theta_v1_wt_v1 | `Q900` · theta_v1_wt_v1 | 0.293 |  |  |  |  | 0.383 |  | Gibiansky_2014_table_p4_1:row12:col2, Gibiansky_2014_table_p4_1:row12:col3, Gibiansky_2014_table_p4_1:row12:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'kdes (1/day)' — extend the ontology if this is a real PK parameter (source ['Gibiansky_2014_table_p4_1:row0:col2', 'Gibiansky_2014_table_p4_1:row0:col3', 'Gibiansky_2014_table_p4_1:row0:col4'])
- dropped unlinked row (NIL): 'kdes,DIS' — extend the ontology if this is a real PK parameter (source ['Gibiansky_2014_table_p4_1:row1:col2', 'Gibiansky_2014_table_p4_1:row1:col3', 'Gibiansky_2014_table_p4_1:row1:col4'])
- dropped unlinked row (NIL): 'kdes,BSI2 ≤ 1,750' — extend the ontology if this is a real PK parameter (source ['Gibiansky_2014_table_p4_1:row2:col2', 'Gibiansky_2014_table_p4_1:row2:col3', 'Gibiansky_2014_table_p4_1:row2:col4'])
- unit_dimension_mismatch: 'CLint (L/day)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- dropped duplicate Q3 ('CLint,DIS23 = CLint,DIS23', value '0.778') — already have one for this compound
- dropped duplicate Q3 ('CLint,DIS4 = CLt,DIS4', value '1.25') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=obinutuzumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- molar mass: none found for 'obinutuzumab' — its concentrations stay mass-only

**Extraction notes:**
- final table tbl3: grid unusable → re-running vision table extraction for Gibiansky_2014
- unparsed cell Gibiansky_2014_table_p4_1:row0:col1 = 'exp(θ1)'
- unparsed cell Gibiansky_2014_table_p4_1:row1:col1 = 'exp(θ12)'
- unparsed cell Gibiansky_2014_table_p4_1:row2:col1 = 'exp(θ13)'
- unparsed cell Gibiansky_2014_table_p4_1:row3:col1 = 'exp(θ2)'
- unparsed cell Gibiansky_2014_table_p4_1:row4:col1 = 'exp(θ3)'
- unparsed cell Gibiansky_2014_table_p4_1:row5:col1 = 'exp(θ4)'
- unparsed cell Gibiansky_2014_table_p4_1:row6:col1 = 'exp(θ5)'
- unparsed cell Gibiansky_2014_table_p4_1:row7:col1 = 'θ7'
- unparsed cell Gibiansky_2014_table_p4_1:row8:col1 = 'exp(θ13)'
- unparsed cell Gibiansky_2014_table_p4_1:row9:col1 = 'exp(θ14)'
- unparsed cell Gibiansky_2014_table_p4_1:row10:col1 = 'exp(θ6)'
- unparsed cell Gibiansky_2014_table_p4_1:row11:col1 = 'exp(θ11)'
- unparsed cell Gibiansky_2014_table_p4_1:row12:col1 = 'θ8'
- unparsed cell Gibiansky_2014_table_p4_1:row13:col1 = 'exp(θ9)'
- unparsed cell Gibiansky_2014_table_p4_1:row14:col1 = 'exp(θ10)'
- unparsed cell Gibiansky_2014_table_p4_1:row15:col1 = 'Ω(1,1)'
- unparsed cell Gibiansky_2014_table_p4_1:row15:col6 = '15.4%'
- unparsed cell Gibiansky_2014_table_p4_1:row16:col1 = 'Ω(2,2)'
- unparsed cell Gibiansky_2014_table_p4_1:row16:col6 = '21.6%'
- unparsed cell Gibiansky_2014_table_p4_1:row17:col1 = 'Ω(3,3)'
- unparsed cell Gibiansky_2014_table_p4_1:row17:col6 = '11%'
- unparsed cell Gibiansky_2014_table_p4_1:row18:col1 = 'Ω(4,4)'
- unparsed cell Gibiansky_2014_table_p4_1:row18:col6 = '10.8%'
- unparsed cell Gibiansky_2014_table_p4_1:row19:col1 = 'Ω(5,5)'
- unparsed cell Gibiansky_2014_table_p4_1:row19:col6 = '32.6%'
- unparsed cell Gibiansky_2014_table_p4_1:row20:col1 = 'Ω(6,6)'
- unparsed cell Gibiansky_2014_table_p4_1:row20:col6 = '52.2%'
- unparsed cell Gibiansky_2014_table_p4_1:row21:col1 = 'Ω(7,7)'
- unparsed cell Gibiansky_2014_table_p4_1:row21:col6 = '0.1%'
- unparsed cell Gibiansky_2014_table_p4_1:row22:col1 = 'Σ(1,1)'
- unparsed cell Gibiansky_2014_table_p4_1:row22:col6 = '1.8%'
- unparsed cell Gibiansky_2014_table_p4_1:row23:col1 = 'Σ(2,2)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.964 (27/28 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[kdes]` |  | 0.0291 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Gibiansky_2014_table_p4_1:row3:col2', 'Gibiansky_2014_table_p4_1:row3:col3', 'Gibiansky_2014_table_p4_1:row3:col4'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] | L/day | ['Gibiansky_2014_table_p4_1:row5:col2', 'Gibiansky_2014_table_p4_1:row5:col3', 'Gibiansky_2014_table_p4_1:row5:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Gibiansky_2014_table_p4_1:row14:col2', 'Gibiansky_2014_table_p4_1:row14:col3', 'Gibiansky_2014_table_p4_1:row14:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Gibiansky_2014_table_p4_1:row10:col2', 'Gibiansky_2014_table_p4_1:row10:col3', 'Gibiansky_2014_table_p4_1:row10:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Gibiansky_2014_table_p4_1:row13:col2', 'Gibiansky_2014_table_p4_1:row13:col3', 'Gibiansky_2014_table_p4_1:row13:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.196 | ['Gibiansky_2014_table_p4_1:row3:col2', 'Gibiansky_2014_table_p4_1:row3:col3', 'Gibiansky_2014_table_p4_1:row3:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00817 L/h | ['Gibiansky_2014_table_p4_1:row3:col2', 'Gibiansky_2014_table_p4_1:row3:col3', 'Gibiansky_2014_table_p4_1:row3:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.68 L | ['Gibiansky_2014_table_p4_1:row10:col2', 'Gibiansky_2014_table_p4_1:row10:col3', 'Gibiansky_2014_table_p4_1:row10:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.922 L | ['Gibiansky_2014_table_p4_1:row13:col2', 'Gibiansky_2014_table_p4_1:row13:col3', 'Gibiansky_2014_table_p4_1:row13:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bobinutuzumab%5D%20Obinutuzumab_Gibiansky2014_reference&body=Drug%3A%20obinutuzumab%0ARecord%3A%20Obinutuzumab_Gibiansky2014_reference%0APaper%3A%20Gibiansky_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_obinutuzumab/Obinutuzumab_Gibiansky2014_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 18:08 UTC</sub>
