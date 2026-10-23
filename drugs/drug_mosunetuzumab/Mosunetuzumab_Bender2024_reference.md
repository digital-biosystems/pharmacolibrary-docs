<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;mosunetuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_mosunetuzumab/&quot;},{&quot;label&quot;:&quot;Bender_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mosunetuzumab — `Mosunetuzumab_Bender2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="mosunetuzumab" model-id="Mosunetuzumab_Bender2024_reference" status="rejected" stale="false" population="adults with relapsed/refractory B-cell non-Hodgkin lymphoma" measured-compound="mosunetuzumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Bender B, Li CC, Marchand M, Turner DC, Li F, Vadhavkar S et al. Population pharmacokinetics and CD20 binding dynamics for mosunetuzumab in relapsed/refractory B-cell non-Hodgkin lymphoma. Clinical and translational science 17(6):e13825 (2024).
  ·  DOI: [10.1111/cts.13825](https://doi.org/10.1111/cts.13825)

## Population and dosing

**Population:** adults with relapsed/refractory B-cell non-Hodgkin lymphoma · condition relapsed/refractory B-cell non-Hodgkin lymphoma · age group adult · n = &gt;=439.

**Dosing:** 0.05, 0.2, 0.4, 0.8, 1.2, 1.6, 2, 2.8, 3, 4.2, 6, 9, 13.5, 20, 27, 30, 40.5, 60 mg, iv, multiple, every 21 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CLbase (L/day) | CLb | 1.08 | L/day | 5.6 |  |
| V1 (L) | V1 | 5.49 | L | 2.5 | 0.0981 (5.8% RSE) |
| CLss (L/day) | CL | 0.584 | L/day | 2.0 |  |
| HLtrans (day) | ktr | 16.3 | day | 7.1 |  |
| V2 (L) | V2 | 6.17 | L | 3.6 | 0.0621 (16.7% RSE) |
| Q (L/day) | Q | 1.46 | L/day | 3.7 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.542). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (ktr), so that value has no SI equivalent. Extracted — mosunetuzumab: CLb 1.08 L/day, V1 5.49 L, CL 0.584 L/day, ktr 16.3 day, V2 6.17 L, Q 1.46 L/day.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has mosunetuzumab, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLbase (L/day) | `Q23` · CLb | 1.08 | L/day | 1.25e-08 | m3/s | l/d | 5.6 | llm (0.6) | cts13825-tbl-0002:row1:col1, cts13825-tbl-0002:row1:col2 |  |
| V1 (L) | `Q63` · V1 | 5.49 | L | 0.00549 | m3 | l | 2.5 | exact (1) | cts13825-tbl-0002:row2:col1, cts13825-tbl-0002:row2:col2 | 0.0981 (5.8% RSE) |
| CLss (L/day) | `Q22` · CL | 0.584 | L/day | 6.759e-09 | m3/s | l/d | 2.0 | llm (0.6) | cts13825-tbl-0002:row3:col1, cts13825-tbl-0002:row3:col2 |  |
| HLtrans (day) | `Q306` · ktr | 16.3 | day |  |  | d | 7.1 | llm (0.6) | cts13825-tbl-0002:row4:col1, cts13825-tbl-0002:row4:col2 |  |
| V2 (L) | `Q64` · V2 | 6.17 | L | 0.00617 | m3 | l | 3.6 | exact (1) | cts13825-tbl-0002:row5:col1, cts13825-tbl-0002:row5:col2 | 0.0621 (16.7% RSE) |
| Q (L/day) | `Q30` · Q | 1.46 | L/day | 1.69e-08 | m3/s | l/d | 3.7 | exact (1) | cts13825-tbl-0002:row6:col1, cts13825-tbl-0002:row6:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'HLtrans (day)' → Q306 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'HLss (day) b' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row7:col1'])
- dropped unlinked row (NIL): 'Body weight on CLss (WT_CLss)' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row8:col1', 'cts13825-tbl-0002:row8:col2'])
- dropped unlinked row (NIL): 'Body weight on V1 (WT_V1)' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row9:col1', 'cts13825-tbl-0002:row9:col2'])
- dropped unlinked row (NIL): 'Body weight on V2 (WT_V2)' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row10:col1', 'cts13825-tbl-0002:row10:col2'])
- dropped unlinked row (NIL): 'Albumin on CLbase (ALB_CLbase)' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row11:col1', 'cts13825-tbl-0002:row11:col2'])
- dropped unlinked row (NIL): 'anti‐CD20 drug on CLbase (aCD20_CLbase)' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row12:col1', 'cts13825-tbl-0002:row12:col2'])
- dropped unlinked row (NIL): 'Sex (female) on CLss (Sex_CLss)' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row13:col1', 'cts13825-tbl-0002:row13:col2'])
- dropped unlinked row (NIL): 'Albumin on V1 (ALB_V1)' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row14:col1', 'cts13825-tbl-0002:row14:col2'])
- dropped unlinked row (NIL): 'Sex (female) on V1 (Sex_V1)' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row15:col1', 'cts13825-tbl-0002:row15:col2'])
- dropped unlinked row (NIL): 'Tumor SPD on CLss (SPD_CLss)' — extend the ontology if this is a real PK parameter (source ['cts13825-tbl-0002:row16:col1', 'cts13825-tbl-0002:row16:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mosunetuzumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'mosunetuzumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell cts13825-tbl-0002:row1:col3 = '[0.962; 1.20]'
- unparsed cell cts13825-tbl-0002:row2:col3 = '[5.221; 5.76]'
- unparsed cell cts13825-tbl-0002:row3:col3 = '[0.561; 0.607]'
- unparsed cell cts13825-tbl-0002:row4:col3 = '[14.026; 18.6]'
- unparsed cell cts13825-tbl-0002:row5:col3 = '[5.729; 6.61]'
- unparsed cell cts13825-tbl-0002:row6:col3 = '[1.354; 1.57]'
- unparsed cell cts13825-tbl-0002:row8:col3 = '[0.436; 0.662]'
- unparsed cell cts13825-tbl-0002:row9:col3 = '[0.319; 0.547]'
- unparsed cell cts13825-tbl-0002:row10:col3 = '[0.508; 0.966]'
- unparsed cell cts13825-tbl-0002:row11:col3 = '[−2.074; −0.946]'
- unparsed cell cts13825-tbl-0002:row12:col3 = '[−0.800; −0.346]'
- unparsed cell cts13825-tbl-0002:row13:col3 = '[−0.175; −0.081]'
- unparsed cell cts13825-tbl-0002:row14:col3 = '[−0.701; −0.261]'
- unparsed cell cts13825-tbl-0002:row15:col3 = '[−0.173; −0.079]'
- unparsed cell cts13825-tbl-0002:row16:col3 = '[0.045; 0.142]'
- unparsed cell cts13825-tbl-0002:row17:col3 = '[0.356; 0.496]'
- unparsed cell cts13825-tbl-0002:row18:col3 = '[0.169; 0.191]'
- unparsed cell cts13825-tbl-0002:row19:col3 = '[0.0722; 0.124]'
- unparsed cell cts13825-tbl-0002:row20:col3 = '[0.0266; 0.0420]'
- unparsed cell cts13825-tbl-0002:row21:col3 = '[−0.133; −0.0459]'
- unparsed cell cts13825-tbl-0002:row22:col3 = '[0.510; 0.968]'
- unparsed cell cts13825-tbl-0002:row23:col3 = '[0.0417; 0.0825]'
- unparsed cell cts13825-tbl-0002:row24:col3 = '[0.258; 0.260]'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.542 (13/24 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['rituximab', 'mosunetuzumab', 'none'], ['obinutuzumab', 'mosunetuzumab', 'none']] | mismatch |
| `gpt-oss-120b` | `parameters[clss].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[hltrans].parameter_id` | Q306 | Q57 | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_body_weight]` |  | 0.549 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_albumin]` |  | -0.481 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_sex]` |  | -0.126 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_body_weight]` |  | 0.737 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1].covariate_forms` | [] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[v2].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | mosunetuzumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | mosunetuzumab | unknown | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cts13825-tbl-0002:row3:col1', 'cts13825-tbl-0002:row3:col2'] |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] |  | ['cts13825-tbl-0002:row1:col1', 'cts13825-tbl-0002:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['cts13825-tbl-0002:row6:col1', 'cts13825-tbl-0002:row6:col2'] |
| C5_dimension_Q306 | fail | [time] | day | ['cts13825-tbl-0002:row4:col1', 'cts13825-tbl-0002:row4:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['cts13825-tbl-0002:row2:col1', 'cts13825-tbl-0002:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cts13825-tbl-0002:row5:col1', 'cts13825-tbl-0002:row5:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.584 | ['cts13825-tbl-0002:row3:col1', 'cts13825-tbl-0002:row3:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0243 L/h | ['cts13825-tbl-0002:row3:col1', 'cts13825-tbl-0002:row3:col2'] |
| C9_phys_window_Q23 | pass | clearance within physiological range | 0.045 L/h | ['cts13825-tbl-0002:row1:col1', 'cts13825-tbl-0002:row1:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.49 L | ['cts13825-tbl-0002:row2:col1', 'cts13825-tbl-0002:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.17 L | ['cts13825-tbl-0002:row5:col1', 'cts13825-tbl-0002:row5:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmosunetuzumab%5D%20Mosunetuzumab_Bender2024_reference&body=Drug%3A%20mosunetuzumab%0ARecord%3A%20Mosunetuzumab_Bender2024_reference%0APaper%3A%20Bender_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mosunetuzumab/Mosunetuzumab_Bender2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:11 UTC</sub>
