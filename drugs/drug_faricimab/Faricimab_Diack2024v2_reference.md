<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01L&quot;,&quot;href&quot;:&quot;atc/S01L.md&quot;},{&quot;label&quot;:&quot;faricimab&quot;,&quot;href&quot;:&quot;drugs/drug_faricimab/&quot;},{&quot;label&quot;:&quot;Diack_2024_2 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# faricimab — `Faricimab_Diack2024v2_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Faricimab intrinsic and total clearance values are physiologically implausible because a reported unit could not be converted to standard units.

<div class="pk-model-meta" hidden drug="faricimab" model-id="Faricimab_Diack2024v2_reference" status="rejected" stale="false" population="adults with nAMD or DME" measured-compound="faricimab" parameterization="mechanistic" topology="1C"></div>

## Citation
Diack C, Gibiansky L, Jaminion F, Gibiansky E, Gaudreault J, Bogman K et al. Ocular Pharmacokinetics of Faricimab Following Intravitreal Administration in Patients With Retinal Disease. Translational vision science & technology 13(11):14 (2024).
  ·  DOI: [10.1167/tvst.13.11.14](https://doi.org/10.1167/tvst.13.11.14)

## Population and dosing

**Population:** adults with nAMD or DME · condition neovascular age-related macular degeneration, diabetic macular edema · age group adult · n = 2246.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| VA (mL) | V | 0.253 | mL |
| kAH (L/day) | CLint | 15.6 | L/day |
| CL (L/day) | CL | 2.33 | L/day |
| RωkVHωkAH | VH | 0.0251 |  |
| RωkAHωCL | CLnorm | 0.0311 |  |
| theta_v1_wt_power | theta_v1_wt_power | 1.00 |  |
| theta_q369_ada_kvh_l_day | theta_q369_ada_kvh_l_day | 1.30 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Faricimab intrinsic and total clearance values are physiologically implausible because a reported unit could not be converted to standard units.**

The intrinsic clearance of 15.6 L/day and total clearance of 2.33 L/day are flagged as having implausible magnitudes. One parameter was reported in a unit that lacks a standard conversion factor, preventing its transformation to base units. This gap led to the dimension mismatch and the physiological range violations that caused the rejection. Extracted — faricimab: V 0.253 mL, CLint 15.6 L/day, CL 2.33 L/day, VH 0.0251, CLnorm 0.0311.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| VA (mL) | `Q61` · V | 0.253 | mL | 2.53e-07 | m3 | ml | llm (0.6) | tbl3:row1:col2 |
| kAH (L/day) | `Q3` · CLint | 15.6 | L/day |  |  | l/d | llm (0.6) | tbl3:row4:col2 |
| CL (L/day) | `Q22` · CL | 2.33 | L/day | 2.697e-08 | m3/s | l/d | exact (1) | tbl3:row5:col2 |
| RωkVHωkAH | `Q368` · VH | 0.0251 |  |  |  |  | llm (0.6) | tbl3:row17:col2 |
| RωkAHωCL | `Q354` · CLnorm | 0.0311 |  |  |  |  | llm_corrected (0.6) | tbl3:row19:col2 |
| theta_v1_wt_power | `Q900` · theta_v1_wt_power | 1.00 |  |  |  |  |  | tbl3:row9:col2 |
| theta_q369_ada_kvh_l_day | `Q900` · theta_q369_ada_kvh_l_day | 1.30 |  |  |  |  |  | tbl3:row14:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q63 ('VC (L)', value '1.48') — already have one for this compound
- dropped unlinked row (NIL): 'kVH (L/day)' — extend the ontology if this is a real PK parameter (source ['tbl3:row3:col2'])
- unit_dimension_mismatch: 'kAH (L/day)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- routed 'SDprop' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'SDPhaseI' — extend the ontology if this is a real PK parameter (source ['tbl3:row7:col2'])
- dropped unlinked row (NIL): 'SDPhaseII' — extend the ontology if this is a real PK parameter (source ['tbl3:row8:col2'])
- dropped duplicate Q22 ('CLWT (L/day)', value '0.773') — already have one for this compound
- dropped duplicate Q22 ('CLfemale (L/day)', value '0.863') — already have one for this compound
- dropped duplicate Q22 ('CLformulation1 (L/day)', value '0.816') — already have one for this compound
- dropped unlinked row (NIL): 'kVH,age (L/day)' — extend the ontology if this is a real PK parameter (source ['tbl3:row13:col2'])
- covariate effect for Q369 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=faricimab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'VA (mL)' is the general volume)
- status held at "Needs review" — not promoted
- molar mass: none found for 'faricimab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tbl3:row1:col1 = 'θ1'
- unparsed cell tbl3:row2:col1 = 'θ2'
- unparsed cell tbl3:row3:col1 = 'θ3'
- unparsed cell tbl3:row4:col1 = 'θ4'
- unparsed cell tbl3:row5:col1 = 'θ5'
- unparsed cell tbl3:row6:col1 = 'θ6'
- unparsed cell tbl3:row7:col1 = 'θ7'
- unparsed cell tbl3:row8:col1 = 'θ8'
- unparsed cell tbl3:row9:col1 = 'θ9'
- unparsed cell tbl3:row10:col1 = 'θ10'
- unparsed cell tbl3:row11:col1 = 'θ11'
- unparsed cell tbl3:row12:col1 = 'θ12'
- unparsed cell tbl3:row13:col1 = 'θ13'
- unparsed cell tbl3:row13:col4 = '−0.6 to −0.465'
- unparsed cell tbl3:row14:col1 = 'θ14'
- unparsed cell tbl3:row15:col1 = 'Ω(1,1)'
- unparsed cell tbl3:row15:col6 = '60.5%'
- unparsed cell tbl3:row16:col1 = 'Ω(2,2)'
- unparsed cell tbl3:row16:col6 = '5.0%'
- unparsed cell tbl3:row17:col1 = 'Ω(2,3)'
- unparsed cell tbl3:row18:col1 = 'Ω(3,3)'
- unparsed cell tbl3:row18:col6 = '60.0%'
- unparsed cell tbl3:row19:col1 = 'Ω(3,4)'
- unparsed cell tbl3:row20:col1 = 'Ω(4,4)'
- unparsed cell tbl3:row20:col6 = '52.9%'
- unparsed cell tbl3:row21:col1 = 'Ω(5,5)'
- unparsed cell tbl3:row21:col6 = '42.3%'
- unparsed cell tbl3:row22:col1 = 'Σ(1,1)'
- unparsed cell tbl3:row22:col6 = '10.6%'
- unparsed cell tbl3:row23:col1 = 'Σ(2,2)'
- unparsed cell tbl3:row23:col6 = '17.5%'
- transposed table Diack_2024_2_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Diack_2024_2_table_4:row5:col2 = '0.333 (0.248–0.475)'
- unparsed cell Diack_2024_2_table_4:row5:col3 = '2.2 (1.44–6.8)'
- unparsed cell Diack_2024_2_table_4:row5:col5 = '0.327 (0.236–0.454)'
- unparsed cell Diack_2024_2_table_4:row5:col6 = '2.01 (1.4–4.81)'
- companion parameter table 4 transcribed (4 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tbl3:row5:col2'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] | L/day | ['tbl3:row4:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tbl3:row1:col2'] |
| C5_unit_missing_Q354 | fail | [length] ** 3 / [time] |  | ['tbl3:row19:col2'] |
| C5_unit_missing_Q368 | fail | [length] ** 3 |  | ['tbl3:row17:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.33 | ['tbl3:row5:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0971 L/h | ['tbl3:row5:col2'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.000253 L | ['tbl3:row1:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfaricimab%5D%20Faricimab_Diack2024v2_reference&body=Drug%3A%20faricimab%0ARecord%3A%20Faricimab_Diack2024v2_reference%0APaper%3A%20Diack_2024_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_faricimab/Faricimab_Diack2024v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 21:17 UTC</sub>
