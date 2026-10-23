<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;methotrexate&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/&quot;},{&quot;label&quot;:&quot;Bischoff_1971 \u00b7 rat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methotrexate_Pan2026_reference&quot;,&quot;label&quot;:&quot;Pan_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Pan2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Pignon1994_reference&quot;,&quot;label&quot;:&quot;Pignon_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Pignon1994_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Tan2024_reference&quot;,&quot;label&quot;:&quot;Tan_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Tan2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Wei2025_reference&quot;,&quot;label&quot;:&quot;Wei_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Wei2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Yu2025_reference&quot;,&quot;label&quot;:&quot;Yu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Yu2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_van2024_reference&quot;,&quot;label&quot;:&quot;van_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_van2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# methotrexate — `Methotrexate_Bischoff1971_rat`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; v2, Vmax, V and Q have no unit.

<div class="pk-model-meta" hidden drug="methotrexate" model-id="Methotrexate_Bischoff1971_rat" status="needs_review" stale="false" population="mice, rats, dogs, and man" measured-compound="methotrexate" parameterization="mechanistic" topology="2C"></div>

## Citation
Methotrexate pharmacokinetics (1971).

## Population and dosing

**Population:** mice, rats, dogs, and man · condition healthy · age group mixed.

**Dosing:** 35, 210, 1750, 21000 mg, i.p., single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V_P | V2 | 9.0 |  |
| V_M | Vmax | 100 |  |
| V_L | V | 8.3 |  |
| Q_M | Q | 3.0 |  |
| CL = | CL | 7.63 | L/hour |
| absorption rate ka6MP | kabs | 21.07 | 1/day |
| t lag,oral | tlag | 0.36 | hour |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.412). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; v2, Vmax, V and Q have no unit.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Blackman_2026, Gebhard_2023, Tan_2024) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. Extracted — methotrexate: V2 9, Vmax 100, V 8.3, Q 3, CL 7.63 L/hour, kabs 21.1 1/day, tlag 0.36 hour.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of a_m: this record has none, the second reading 0; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V_P | `Q64` · V2 | 9.0 |  |  |  |  | exact (1) | Bischoff_1971_table_1:row2:col2 |
| V_M | `Q66` · Vmax | 100 |  |  |  |  | llm (0.6) | Bischoff_1971_table_1:row3:col2 |
| V_L | `Q61` · V | 8.3 |  |  |  |  | llm (0.6) | Bischoff_1971_table_1:row5:col2 |
| Q_M | `Q30` · Q | 3.0 |  |  |  |  | llm (0.6) | Bischoff_1971_table_1:row9:col2 |
| CL = | `Q22` · CL | 7.63 | L/hour | 2.119e-06 | m3/s | L/h | review_gapfill (0.7) | Blackman_2026:review |
| absorption rate ka6MP | `Q49` · kabs | 21.07 | 1/day | 0.0002439 | 1/s | 1/h | review_gapfill (0.7) | Gebhard_2023:review |
| t lag,oral | `Q83` · tlag | 0.36 | hour | 1296 | s | h | review_gapfill (0.7) | Tan_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Body weight, g,ᵃ' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row0:col2'])
- dropped unlinked row (NIL): 'V_K' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row4:col2'])
- dropped unlinked row (NIL): 'V_G,ᶜ' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row6:col2', 'Bischoff_1971_table_1:row7:col2'])
- dropped unlinked row (NIL): 'Q_K' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row10:col2'])
- dropped duplicate Q30 ('Q_L', value '6.5') — already have one for this compound
- dropped unlinked row (NIL): 'Q_G' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row12:col2'])
- dropped unlinked row (NIL): 'R_M' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row14:col2'])
- dropped unlinked row (NIL): 'R_K' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row15:col2'])
- dropped unlinked row (NIL): 'R_L' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row16:col2'])
- dropped unlinked row (NIL): 'a_M' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row19:col2'])
- dropped unlinked row (NIL): 'a_K' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row20:col2'])
- dropped unlinked row (NIL): 'a_L' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row21:col2'])
- dropped unlinked row (NIL): 'k_K' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row24:col2'])
- dropped unlinked row (NIL): 'ml/min.ᵍ' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row27:col2'])
- dropped unlinked row (NIL): 'τ₁, min.' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row28:col2'])
- dropped unlinked row (NIL): 'Reciprocal = k_F, min.-1' — extend the ontology if this is a real PK parameter (source ['Bischoff_1971_table_1:row31:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=methotrexate
- population split: 'rat' subgroup of Bischoff_1971 (paper reports 5 populations: 17 kg., dog, 5 kg., dog/monkey, man, mouse, rat)
- gap-filled Q22 (CL) from Blackman_2026's review values (primary lacked it)
- gap-filled Q49 (kabs) from Gebhard_2023's review values (primary lacked it)
- gap-filled Q83 (tlag) from Tan_2024's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1
- unparsed cell Bischoff_1971_table_1:row14:col3 = '(0.15)'
- unparsed cell Bischoff_1971_table_1:row14:col4 = '(0.15)'
- unparsed cell Bischoff_1971_table_1:row14:col5 = '(0.15)'
- unparsed cell Bischoff_1971_table_1:row15:col3 = '(14)'
- unparsed cell Bischoff_1971_table_1:row15:col5 = '(3.0)'
- unparsed cell Bischoff_1971_table_1:row16:col3 = '(2.0)'
- unparsed cell Bischoff_1971_table_1:row16:col5 = '(3.0)'
- unparsed cell Bischoff_1971_table_1:row17:col2 = '(1.0)'
- unparsed cell Bischoff_1971_table_1:row17:col3 = '(1.0)'
- unparsed cell Bischoff_1971_table_1:row17:col4 = '(1.0)'
- unparsed cell Bischoff_1971_table_1:row17:col5 = '(1.0)'
- unparsed cell Bischoff_1971_table_1:row19:col3 = '(0)'
- unparsed cell Bischoff_1971_table_1:row19:col4 = '(0)'
- unparsed cell Bischoff_1971_table_1:row19:col5 = '(0)'
- unparsed cell Bischoff_1971_table_1:row20:col3 = '(0.3)'
- unparsed cell Bischoff_1971_table_1:row20:col4 = '(0.3)'
- unparsed cell Bischoff_1971_table_1:row20:col5 = '(0.3)'
- unparsed cell Bischoff_1971_table_1:row21:col3 = '(0.4)'
- unparsed cell Bischoff_1971_table_1:row21:col4 = '(0.4)'
- unparsed cell Bischoff_1971_table_1:row21:col5 = '(0.4)'
- unparsed cell Bischoff_1971_table_1:row22:col2 = '(0.1)'
- unparsed cell Bischoff_1971_table_1:row22:col3 = '(0.1)'
- unparsed cell Bischoff_1971_table_1:row22:col4 = '(0.1)'
- unparsed cell Bischoff_1971_table_1:row22:col5 = '(0.1)'
- unparsed cell Bischoff_1971_table_1:row24:col3 = '(20)'
- unparsed cell Bischoff_1971_table_1:row24:col5 = '190ᶠ'
- unparsed cell Bischoff_1971_table_1:row27:col3 = '(2.0)'
- unparsed cell Bischoff_1971_table_1:row27:col5 = '200ᵃ'
- unparsed cell Bischoff_1971_table_1:row28:col3 = '(6)'
- unparsed cell Bischoff_1971_table_1:row28:col5 = '(10)'
- unparsed cell Bischoff_1971_table_1:row30:col2 = '100ᶠ'
- unparsed cell Bischoff_1971_table_1:row30:col3 = '(450)'
- unparsed cell Bischoff_1971_table_1:row30:col4 = '(650)'
- unparsed cell Bischoff_1971_table_1:row30:col5 = '(1,000)'
- unparsed cell Bischoff_1971_table_1:row31:col3 = '(0.0022)'
- unparsed cell Bischoff_1971_table_1:row31:col4 = '(0.0015)'
- unparsed cell Bischoff_1971_table_1:row31:col5 = '(0.001)'
- unparsed cell Bischoff_1971_table_1:row32:col2 = '(20)'
- unparsed cell Bischoff_1971_table_1:row32:col3 = '(340)'
- unparsed cell Bischoff_1971_table_1:row32:col4 = '(1,000)'
- unparsed cell Bischoff_1971_table_1:row32:col5 = '(1,900)'
- unparsed cell Bischoff_1971_table_1:row33:col2 = '(200)'
- unparsed cell Bischoff_1971_table_1:row33:col3 = '(200)'
- unparsed cell Bischoff_1971_table_1:row33:col4 = '(200)'
- unparsed cell Bischoff_1971_table_1:row33:col5 = '(200)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.412 (7/17 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[a_m]` |  | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl l]` | 0.159 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k_k]` |  | 1.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.268 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[r_k]` |  | 3.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[r_m]` |  | 0.15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t lag,oral]` | 0.36 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_l]` | 8.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_m].parameter_id` | Q66 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[τ1, min.]` |  | 2.0 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Blackman_2026:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Gebhard_2023:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tan_2024:review'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] |  | ['Bischoff_1971_table_1:row9:col2'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 |  | ['Bischoff_1971_table_1:row5:col2'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 |  | ['Bischoff_1971_table_1:row2:col2'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 |  | ['Bischoff_1971_table_1:row3:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.63 | ['Blackman_2026:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.63 L/h | ['Blackman_2026:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethotrexate%5D%20Methotrexate_Bischoff1971_rat&body=Drug%3A%20methotrexate%0ARecord%3A%20Methotrexate_Bischoff1971_rat%0APaper%3A%20Bischoff_1971%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_methotrexate/Methotrexate_Bischoff1971_rat%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-09-15 06:21 UTC</sub>
