<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;pyrimethamine&quot;,&quot;href&quot;:&quot;drugs/drug_pyrimethamine/&quot;},{&quot;label&quot;:&quot;Odongo_2015 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pyrimethamine — `Pyrimethamine_Odongo2015_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.824). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The pyrimethamine model record was rejected because its structure is a two-compartment model, yet it contains a compartment with no connection to the dose path, leaving an orphan compartment.**

The record's structure is stated as two compartments (2C), but the parameter set includes V3/F of 49.53 L, described as the volume of a second peripheral compartment in a three-compartment model, together with Q of 0.282 L/h. This extra peripheral compartment has no place in the declared two-compartment topology, so it stands as an unreachable compartment with no path from the oral dose. The remaining parameters (kabs 1.05 /h, CL/F 0.799 L/h, tlag 0.394 h, pregnancy effect on clearance 0.319 L/h) are otherwise complete, but the structural inconsistency alone led to rejection. Extracted — pyrimethamine: kabs 1.05 /h, V2/F 154 L, CL/F 0.799 L/h, V3/F 49.5 L, Q 0.282 L/h, tlag 0.394 h, CLb 0.319 L/h, V2 0.0079.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sulphadoxine-pyrimethamine, the second reading pyrimethamine; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `sulphadoxine-pyrimethamine`, measured `pyrimethamine`.

## Citation
Odongo CO et al., Trimester-Specific Population Pharmacok…, Drugs in R&D (2015)
  ·  DOI: [10.1007/s40268-015-0110-z](https://doi.org/10.1007/s40268-015-0110-z)

<div class="pk-model-meta" hidden drug="pyrimethamine" model-id="Pyrimethamine_Odongo2015_reference" status="rejected" stale="false" population="pregnant and nonpregnant Ugandan women" measured-compound="pyrimethamine" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KATV [/h] | `Q49` · kabs | 1.05 | /h | 0.0002916666666666667 | [1] / [h] | not captured | llm (0.6) | Tab2:row2:col4, Tab2:row2:col5, Tab2:row2:col6 | — | not captured |
| V 2/F TV [L] | `Q82` · V2/F | 153.60 | L | 0.1536 | [l] | not captured | llm (0.6) | Tab2:row3:col4, Tab2:row3:col5, Tab2:row3:col6 | — | not captured |
| CL/F TV [L/h] | `Q27` · CL/F | 0.799 | L/h | 2.2194444444444445e-07 | [l] / [h] | not captured | llm_confirmed (0.6) | Tab2:row4:col4, Tab2:row4:col5, Tab2:row4:col6 | — | not captured |
| V 3/F TV [L] | `Q78` · V3/F | 49.53 | L | 0.049530000000000005 | [l] | not captured | llm (0.6) | Tab2:row5:col4, Tab2:row5:col5, Tab2:row5:col6 | — | not captured |
| Q TV [L/h] | `Q30` · Q | 0.282 | L/h | 7.833333333333332e-08 | [l] / [h] | not captured | llm (0.6) | Tab2:row6:col4, Tab2:row6:col5, Tab2:row6:col6 | — | not captured |
| ALAGTV [h] | `Q83` · tlag | 0.394 | h | 1418.4 | [h] | not captured | llm (0.6) | Tab2:row7:col4, Tab2:row7:col5, Tab2:row7:col6 | — | not captured |
| Pregnancy–CLb | `Q23` · CLb | 0.319 | L/h | 8.861111111111111e-08 | L/h | not captured | llm_confirmed (0.6) | Tab2:row10:col5, Tab2:row10:col6 | — | not captured |
| Gestation–V 2 c | `Q64` · V2 | 0.0079 | not captured | not captured | not captured | not captured | llm (0.6) | Tab2:row11:col5, Tab2:row11:col6 | — | not captured |
| theta_q314_age_power | `Q900` · theta_q314_age_power | 0.016 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row8:col5, Tab2:row8:col6 | — | not captured |
| theta_v2_body_weight_v_2_d | `Q900` · theta_v2_body_weight_v_2_d | 0.0084 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row12:col5, Tab2:row12:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

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
| `gpt-oss-120b` | `parameters[theta_q22_age_power]` | not captured | 0.016 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_age_power]` | 0.016 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sulphadoxine-pyrimethamine | pyrimethamine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row10:col5', 'Tab2:row10:col6'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col4', 'Tab2:row4:col5', 'Tab2:row4:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row6:col4', 'Tab2:row6:col5', 'Tab2:row6:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row2:col4', 'Tab2:row2:col5', 'Tab2:row2:col6'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col4', 'Tab2:row5:col5', 'Tab2:row5:col6'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row3:col4', 'Tab2:row3:col5', 'Tab2:row3:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab2:row7:col4', 'Tab2:row7:col5', 'Tab2:row7:col6'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row11:col5', 'Tab2:row11:col6'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q23 | pass | clearance within physiological range | 0.319 L/h | not captured | not captured | ['Tab2:row10:col5', 'Tab2:row10:col6'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.799 L/h | not captured | not captured | ['Tab2:row4:col4', 'Tab2:row4:col5', 'Tab2:row4:col6'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 154 L | not captured | not captured | ['Tab2:row3:col4', 'Tab2:row3:col5', 'Tab2:row3:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_pyrimethamine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Odongo_2015` / `Odongo_2015::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:08 UTC</sub>
