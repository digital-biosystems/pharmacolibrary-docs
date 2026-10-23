<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;telmisartan&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/&quot;},{&quot;label&quot;:&quot;Tatami_2003 \u00b7 estimated_value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Telmisartan_Tatami2003_final&quot;,&quot;label&quot;:&quot;Tatami_2003_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Tatami2003_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Huang2019_reference&quot;,&quot;label&quot;:&quot;Huang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Huang2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Ieiri2011_reference&quot;,&quot;label&quot;:&quot;Ieiri_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Ieiri2011_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Petersen2024_reference&quot;,&quot;label&quot;:&quot;Petersen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Petersen2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Yu_2015_K&quot;,&quot;label&quot;:&quot;Yu_2015 \u00b7 K+&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/pd_Yu_2015_K.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# telmisartan — `Telmisartan_Tatami2003_estimated_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Telmisartan central and peripheral volumes of distribution were extracted as negative values (-0.641 L and -0.269 L), rendering the model physically impossible.

<div class="pk-model-meta" hidden drug="telmisartan" model-id="Telmisartan_Tatami2003_estimated_value" status="rejected" stale="false" population="healthy volunteers and hypertensive patients" measured-compound="telmisartan" parameterization="mechanistic" topology="2C"></div>

## Citation
Tatami S, Sarashina A, Yamamura N, Igarashi T, Tanigawara Y. Population pharmacokinetics of an angiotensin II receptor antagonist, telmisartan, in healthy volunteers and hypertensive patients. Drug metabolism and pharmacokinetics 18(3):203–211 (2003).
  ·  DOI: [10.2133/dmpk.18.203](https://doi.org/10.2133/dmpk.18.203)

## Population and dosing

**Population:** healthy volunteers and hypertensive patients · condition hypertension · age group adult · n = 149.

**Dosing:** 20, 40, 80 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka | kabs | 0.964 | 1/h |
| CL W F | CL | 1.14 | L/h |
| V 2 W F | V2 | -0.269 | L |
| V 1 W F | V1 | -0.641 | L |
| Absorption lag time | tlag | 0.873 | h |
| Q | Q | 19.1 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Telmisartan central and peripheral volumes of distribution were extracted as negative values (-0.641 L and -0.269 L), rendering the model physically impossible.**

The two-compartment model lists the central volume (V1) as -0.641 L and the peripheral volume (V2) as -0.269 L. These negative volumes are physiologically implausible for telmisartan, despite the clearance and intercompartmental clearance having positive values. This structural violation invalidates the parameter estimates for the absorption and distribution phases. Extracted — telmisartan: kabs 0.964 1/h, CL 1.14 L/h, V2 -0.269 L, V1 -0.641 L, tlag 0.873 h, Q 19.1 L/h.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka | `Q49` · kabs | 0.964 | 1/h | 0.0002678 | 1/s | 1/h | exact (1) | Tatami_2003_table_2:row0:col3 |
| CL W F | `Q22` · CL | 1.14 | L/h | 3.167e-07 | m3/s | L/h | llm_confirmed (0.6) | Tatami_2003_table_2:row1:col3, Tatami_2003_table_2:row3:col3, Tatami_2003_table_2:row4:col3, Tatami_2003_table_2:row5:col3, Tatami_2003_table_2:row6:col3, Tatami_2003_table_2:row7:col3 |
| V 2 W F | `Q64` · V2 | -0.269 | L | -0.000269 | m3 | L | llm (0.6) | Tatami_2003_table_2:row2:col3, Tatami_2003_table_2:row11:col3, Tatami_2003_table_2:row12:col3 |
| V 1 W F | `Q63` · V1 | -0.641 | L | -0.000641 | m3 | L | llm (0.6) | Tatami_2003_table_2:row8:col3, Tatami_2003_table_2:row9:col3 |
| Absorption lag time | `Q83` · tlag | 0.873 | h | 3143 | s | h | exact (1) | Tatami_2003_table_2:row10:col3 |
| Q | `Q30` · Q | 19.1 | L/h | 5.306e-06 | m3/s | L/h | review_gapfill (0.7) | Chae_2018:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- implicit units: 'Ka' → 1/h (from the paper text: 'The paper text under \'Model development\' explicitly lists the basic pharmacokinetic parameters with their units: "first-')
- implicit units: 'CL W F' → L/h (from the paper text: 'The paper text under \'Model development\' explicitly lists the basic pharmacokinetic parameters with their units: "oral c')
- implicit units: 'V 2 W F' → L (from the paper text: 'The paper text under \'Model development\' explicitly lists the basic pharmacokinetic parameters with their units: "volume')
- implicit units: 'V 1 W F' → L (from the paper text: 'The paper text under \'Model development\' explicitly lists the basic pharmacokinetic parameters with their units: "volume')
- implicit units: 'Absorption lag time' → h (from the paper text: 'The paper text under \'Model development\' explicitly lists the basic pharmacokinetic parameters with their units: "absorp')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL W F); Q64 (V 2 W F); Q63 (V 1 W F)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=telmisartan
- population split: 'estimated value' subgroup of Tatami_2003 (paper reports 4 populations: estimated parameters, estimated value, final estimates of the model parameters, value)
- gap-filled Q30 (Q) from Chae_2018's review values (primary lacked it)

**Extraction notes:**
- table Tatami_2003_table_2: units_need_context
- companion parameter table 2 transcribed (39 record(s))
- table Tatami_2003_table_3: unknown_column_role
- table Tatami_2003_table_3: ragged_grid
- table Tatami_2003_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (87 record(s))
- table Tatami_2003_table_4: unknown_column_role
- table Tatami_2003_table_4: ragged_grid
- table Tatami_2003_table_4: unparsed_numeric_cell
- companion parameter table 4 transcribed (28 record(s))
- LLM selected parameter table(s) 2, 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_base_sign_Q63 | fail |  | -0.641 |  |
| C2_base_sign_Q64 | fail |  | -0.269 |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tatami_2003_table_2:row1:col3', 'Tatami_2003_table_2:row3:col3', 'Tatami_2003_table_2:row4:col3', 'Tatami_2003_table_2:row5:col3', 'Tatami_2003_table_2:row6:col3', 'Tatami_2003_table_2:row7:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Chae_2018:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tatami_2003_table_2:row0:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tatami_2003_table_2:row8:col3', 'Tatami_2003_table_2:row9:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tatami_2003_table_2:row2:col3', 'Tatami_2003_table_2:row11:col3', 'Tatami_2003_table_2:row12:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tatami_2003_table_2:row10:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.14 | ['Tatami_2003_table_2:row1:col3', 'Tatami_2003_table_2:row3:col3', 'Tatami_2003_table_2:row4:col3', 'Tatami_2003_table_2:row5:col3', 'Tatami_2003_table_2:row6:col3', 'Tatami_2003_table_2:row7:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.14 L/h | ['Tatami_2003_table_2:row1:col3', 'Tatami_2003_table_2:row3:col3', 'Tatami_2003_table_2:row4:col3', 'Tatami_2003_table_2:row5:col3', 'Tatami_2003_table_2:row6:col3', 'Tatami_2003_table_2:row7:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btelmisartan%5D%20Telmisartan_Tatami2003_estimated_value&body=Drug%3A%20telmisartan%0ARecord%3A%20Telmisartan_Tatami2003_estimated_value%0APaper%3A%20Tatami_2003%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_telmisartan/Telmisartan_Tatami2003_estimated_value%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 10:08 UTC</sub>
