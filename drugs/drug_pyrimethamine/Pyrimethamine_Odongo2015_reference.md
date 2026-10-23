<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;pyrimethamine&quot;,&quot;href&quot;:&quot;drugs/drug_pyrimethamine/&quot;},{&quot;label&quot;:&quot;Odongo_2015 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pyrimethamine — `Pyrimethamine_Odongo2015_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The pyrimethamine model record was rejected because its structure is a two-compartment model, yet it contains a compartment with no connection to the dose path, leaving an orphan compartment.

<div class="pk-model-meta" hidden drug="pyrimethamine" model-id="Pyrimethamine_Odongo2015_reference" status="rejected" stale="false" population="pregnant and nonpregnant Ugandan women" measured-compound="pyrimethamine" parameterization="apparent" topology="2C"></div>

## Citation
Odongo CO, Bisaso KR, Ntale M, Odia G, Ojara FW, Byamugisha J et al. Trimester-Specific Population Pharmacokinetics and Other Correlates of Variability in Sulphadoxine-Pyrimethamine Disposition Among Ugandan Pregnant Women. Drugs in R&D 15(4):351–362 (2015).
  ·  DOI: [10.1007/s40268-015-0110-z](https://doi.org/10.1007/s40268-015-0110-z)

## Population and dosing

**Population:** pregnant and nonpregnant Ugandan women · condition malaria prophylaxis in pregnancy (IPTp) · age group adult · n = 199.

**Dosing:** 1500 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed sulphadoxine-pyrimethamine, measured pyrimethamine.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| KATV [/h] | kabs | 1.05 | /h |
| V 2/F TV [L] | V2/F | 153.60 | L |
| CL/F TV [L/h] | CL/F | 0.799 | L/h |
| V 3/F TV [L] | V3/F | 49.53 | L |
| Q TV [L/h] | Q | 0.282 | L/h |
| ALAGTV [h] | tlag | 0.394 | h |
| Pregnancy–CLb | CLb | 0.319 | L/h |
| Gestation–V 2 c | V2 | 0.0079 |  |
| theta_q314_age_power | theta_q314_age_power | 0.016 |  |
| theta_v2_body_weight_v_2_d | theta_v2_body_weight_v_2_d | 0.0084 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.824). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The pyrimethamine model record was rejected because its structure is a two-compartment model, yet it contains a compartment with no connection to the dose path, leaving an orphan compartment.**

The record's structure is stated as two compartments (2C), but the parameter set includes V3/F of 49.53 L, described as the volume of a second peripheral compartment in a three-compartment model, together with Q of 0.282 L/h. This extra peripheral compartment has no place in the declared two-compartment topology, so it stands as an unreachable compartment with no path from the oral dose. The remaining parameters (kabs 1.05 /h, CL/F 0.799 L/h, tlag 0.394 h, pregnancy effect on clearance 0.319 L/h) are otherwise complete, but the structural inconsistency alone led to rejection. Extracted — pyrimethamine: kabs 1.05 /h, V2/F 154 L, CL/F 0.799 L/h, V3/F 49.5 L, Q 0.282 L/h, tlag 0.394 h, CLb 0.319 L/h, V2 0.0079.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sulphadoxine-pyrimethamine, the second reading pyrimethamine; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| KATV [/h] | `Q49` · kabs | 1.05 | /h | 0.0002917 | 1/s | 1/h | llm (0.6) | Tab2:row2:col4, Tab2:row2:col5, Tab2:row2:col6 |
| V 2/F TV [L] | `Q82` · V2/F | 153.60 | L | 0.1536 | m3 | l | llm (0.6) | Tab2:row3:col4, Tab2:row3:col5, Tab2:row3:col6 |
| CL/F TV [L/h] | `Q27` · CL/F | 0.799 | L/h | 2.219e-07 | m3/s | l/h | llm_confirmed (0.6) | Tab2:row4:col4, Tab2:row4:col5, Tab2:row4:col6 |
| V 3/F TV [L] | `Q78` · V3/F | 49.53 | L | 0.04953 | m3 | l | llm (0.6) | Tab2:row5:col4, Tab2:row5:col5, Tab2:row5:col6 |
| Q TV [L/h] | `Q30` · Q | 0.282 | L/h | 7.833e-08 | m3/s | l/h | llm (0.6) | Tab2:row6:col4, Tab2:row6:col5, Tab2:row6:col6 |
| ALAGTV [h] | `Q83` · tlag | 0.394 | h | 1418 | s | h | llm (0.6) | Tab2:row7:col4, Tab2:row7:col5, Tab2:row7:col6 |
| Pregnancy–CLb | `Q23` · CLb | 0.319 | L/h | 8.861e-08 | m3/s | L/h | llm_confirmed (0.6) | Tab2:row10:col5, Tab2:row10:col6 |
| Gestation–V 2 c | `Q64` · V2 | 0.0079 |  |  |  |  | llm (0.6) | Tab2:row11:col5, Tab2:row11:col6 |
| theta_q314_age_power | `Q900` · theta_q314_age_power | 0.016 |  |  |  |  |  | Tab2:row8:col5, Tab2:row8:col6 |
| theta_v2_body_weight_v_2_d | `Q900` · theta_v2_body_weight_v_2_d | 0.0084 |  |  |  |  |  | Tab2:row12:col5, Tab2:row12:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |

## Departures & gaps

**Interpretation flags:**
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Pregnancy–CLb' → L/h (from the popPK convention: 'The paper does not state a unit for CLb. Blood (systemic) clearance in population PK is conventionally expressed in L/h,')
- implicit units: 'Gestation–V 2 c' — the LLM proposed 'L/week', whose dimension does not fit Q64; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pyrimethamine

**Extraction notes:**
- unparsed cell Odongo_2015_table_3:row3:col1 = '0.01 (0.01–0.01)'
- unparsed cell Odongo_2015_table_3:row3:col2 = '0.04 (0.03–0.04)'
- unparsed cell Odongo_2015_table_3:row3:col3 = '0.04 (0.03–0.04)'
- unparsed cell Odongo_2015_table_3:row4:col1 = '8.92 (7.87–9.0)'
- unparsed cell Odongo_2015_table_3:row4:col2 = '10.7 (10.55–10.84)'
- unparsed cell Odongo_2015_table_3:row4:col3 = '11.7 (11.6–11.8)'
- unparsed cell Odongo_2015_table_3:row5:col1 = '0.03 (0.02–0.03)'
- unparsed cell Odongo_2015_table_3:row5:col2 = '0.03 (0.02–0.03)'
- unparsed cell Odongo_2015_table_3:row5:col3 = '0.03 (0.03–0.03)'
- unparsed cell Odongo_2015_table_3:row6:col1 = '217.8 (126.4–344.9)'
- unparsed cell Odongo_2015_table_3:row6:col2 = '180.3 (60.3–287.9)'
- unparsed cell Odongo_2015_table_3:row6:col3 = '194.8 (112.2–302.8)'
- unparsed cell Odongo_2015_table_3:row8:col1 = '793,100 (735,200–847,000)'
- unparsed cell Odongo_2015_table_3:row8:col2 = '144,600 (120,100–169,600)'
- unparsed cell Odongo_2015_table_3:row8:col3 = '144,100 (107,600–170,500)'
- unparsed cell Odongo_2015_table_3:row10:col1 = '1.05 (0.79–1.30)'
- unparsed cell Odongo_2015_table_3:row10:col2 = '1.89 (0.74–1.43)'
- unparsed cell Odongo_2015_table_3:row10:col3 = '1.39 (0.82–1.56)'
- unparsed cell Odongo_2015_table_3:row11:col1 = '0.59 (0.49–0.64)'
- unparsed cell Odongo_2015_table_3:row11:col2 = '0.92 (0.79–1.01)'
- unparsed cell Odongo_2015_table_3:row11:col3 = '0.94 (0.77–1.06)'
- unparsed cell Odongo_2015_table_3:row12:col1 = '128.7 (119.7–133.4)'
- unparsed cell Odongo_2015_table_3:row12:col2 = '155.3 (145–161.8)'
- unparsed cell Odongo_2015_table_3:row12:col3 = '171.6 (158.3–180.8)'
- unparsed cell Odongo_2015_table_3:row13:col1 = '52.9 (27.5–70.5)'
- unparsed cell Odongo_2015_table_3:row13:col2 = '54.6 (37.2–68.9)'
- unparsed cell Odongo_2015_table_3:row13:col3 = '60.2 (45.6–62.5)'
- unparsed cell Odongo_2015_table_3:row15:col1 = '279.7 (211.6–302.7)'
- unparsed cell Odongo_2015_table_3:row15:col2 = '232.2 (183.2–261.9)'
- unparsed cell Odongo_2015_table_3:row15:col3 = '253.8 (213–262.8)'
- unparsed cell Odongo_2015_table_3:row16:col1 = '133.03 (117.3–153.1)'
- unparsed cell Odongo_2015_table_3:row16:col2 = '87.66 (74.1–95.3)'
- unparsed cell Odongo_2015_table_3:row16:col3 = '87.4 (70.9–97.9)'
- companion parameter table 3 transcribed (11 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.824 (14/17 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[theta_q22_age_power]` |  | 0.016 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_age_power]` | 0.016 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sulphadoxine-pyrimethamine | pyrimethamine | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] |  | ['Tab2:row10:col5', 'Tab2:row10:col6'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab2:row4:col4', 'Tab2:row4:col5', 'Tab2:row4:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row6:col4', 'Tab2:row6:col5', 'Tab2:row6:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row2:col4', 'Tab2:row2:col5', 'Tab2:row2:col6'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Tab2:row5:col4', 'Tab2:row5:col5', 'Tab2:row5:col6'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab2:row3:col4', 'Tab2:row3:col5', 'Tab2:row3:col6'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab2:row7:col4', 'Tab2:row7:col5', 'Tab2:row7:col6'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 |  | ['Tab2:row11:col5', 'Tab2:row11:col6'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q23 | pass | clearance within physiological range | 0.319 L/h | ['Tab2:row10:col5', 'Tab2:row10:col6'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.799 L/h | ['Tab2:row4:col4', 'Tab2:row4:col5', 'Tab2:row4:col6'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 154 L | ['Tab2:row3:col4', 'Tab2:row3:col5', 'Tab2:row3:col6'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpyrimethamine%5D%20Pyrimethamine_Odongo2015_reference&body=Drug%3A%20pyrimethamine%0ARecord%3A%20Pyrimethamine_Odongo2015_reference%0APaper%3A%20Odongo_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pyrimethamine/Pyrimethamine_Odongo2015_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 08:08 UTC</sub>
