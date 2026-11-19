<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Flupenthixol&quot;,&quot;href&quot;:&quot;drugs/toxin_flupenthixol/&quot;},{&quot;label&quot;:&quot;Wu_2019 \u00b7 flupentixol_reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flupenthixol_Correll2021_reference&quot;,&quot;label&quot;:&quot;Correll_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flupenthixol/Flupenthixol_Correll2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flupenthixol_Levron1987_reference&quot;,&quot;label&quot;:&quot;Levron_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flupenthixol/Flupenthixol_Levron1987_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flupenthixol_Wu2019_fasted_state&quot;,&quot;label&quot;:&quot;Wu_2019_fasted_state&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flupenthixol/Flupenthixol_Wu2019_fasted_state.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flupenthixol_Wu2019_fed_state&quot;,&quot;label&quot;:&quot;Wu_2019_fed_state&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flupenthixol/Flupenthixol_Wu2019_fed_state.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flupenthixol_Wu2019_geometric_mean_reference&quot;,&quot;label&quot;:&quot;Wu_2019_geometric_mean_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flupenthixol/Flupenthixol_Wu2019_geometric_mean_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flupenthixol_Wu2019_geometric_mean_test&quot;,&quot;label&quot;:&quot;Wu_2019_geometric_mean_test&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flupenthixol/Flupenthixol_Wu2019_geometric_mean_test.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Flupenthixol — `Flupenthixol_Wu2019_flupentixol_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q56 unit ha ([length] ** 2) vs [time]; Q57 unit hb ([length] ** 2) vs [time]; Q27 unit L/hb ([length]) vs [length] ** 3 / [time].

<div class="pk-model-meta" hidden drug="Flupenthixol" model-id="Flupenthixol_Wu2019_flupentixol_reference" status="rejected" stale="false" population="healthy Chinese volunteers" measured-compound="flupentixol" parameterization="apparent" topology="1C"></div>

## Citation
Wu L, Xu C, Wu G, Zhou H, Lv D, Zhai Y et al. Bioequivalence Study Of A Fixed-Dose Combination Tablet Containing Melitracen 10 mg And Flupentixol 0.5 mg In Healthy Chinese Volunteers Under Fasted And Fed Conditions. Drug design, development and therapy 13:3331–3342 (2019).
  ·  DOI: [10.2147/DDDT.S207561](https://doi.org/10.2147/DDDT.S207561)

## Population and dosing

**Population:** healthy Chinese volunteers · condition healthy · age group adult · n = 48.

**Dosed compound ≠ measured compound:** dosed flupentixol (in fixed-dose combination tablet with melitracen), measured flupentixol.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Tmax, ha | tmax | 8.000 | ha |
| Cmax, ng/mLb | Cmax | 0.1602 |  |
| AUC0–t, ng·h/mLb | AUCt | 9.7168 |  |
| AUC0-∞, ng·h/mLb | AUC∞ | 11.5212 |  |
| t½, hb | t1/2z | 53.0663 | hb |
| CL/F, L/hb | CL/F | 46.2537 | L/hb |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q56 unit ha ([length] ** 2) vs [time]; Q57 unit hb ([length] ** 2) vs [time]; Q27 unit L/hb ([length]) vs [length] ** 3 / [time].**

A reported unit could not be converted (tmax, t1/2z and CL/F), so that value has no SI equivalent. Extracted — flupenthixol: tmax 8 ha, Cmax 0.16, AUCt 9.72, AUC∞ 11.5, t1/2z 53.1 hb, CL/F 46.3 L/hb.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has flupentixol (in fixed-dose combination tablet with melitracen), the second reading Flupentixol; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| Tmax, ha | `Q56` · tmax | 8.000 | ha | h·a | llm_confirmed (0.6) | Wu_2019_table_3:row1:col2 |
| Cmax, ng/mLb | `Q32` · Cmax | 0.1602 |  |  | llm_confirmed (0.6) | Wu_2019_table_3:row2:col2 |
| AUC0–t, ng·h/mLb | `Q19` · AUCt | 9.7168 |  |  | llm_confirmed (0.6) | Wu_2019_table_3:row3:col2 |
| AUC0-∞, ng·h/mLb | `Q17` · AUC∞ | 11.5212 |  |  | llm_confirmed (0.6) | Wu_2019_table_3:row4:col2 |
| t½, hb | `Q57` · t1/2z | 53.0663 | hb | h·b | llm (0.6) | Wu_2019_table_3:row5:col2 |
| CL/F, L/hb | `Q27` · CL/F | 46.2537 | L/hb | l/(h·b) | llm_confirmed (0.6) | Wu_2019_table_3:row7:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Tmax, ha' → Q56 (unit '[length] ** 2' vs ontology '[time]') — route to review
- unit_dimension_mismatch: 't½, hb' → Q57 (unit '[length] ** 2' vs ontology '[time]') — route to review
- unit_dimension_mismatch: 'CL/F, L/hb' → Q27 (unit '[length]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped value-less row: 'Table 7. Total Number Of Adverse Events And Percentage Of Healthy Subjects Experiencing Adverse Events In The Fasted Or Fed Study. Values Are Given As No. (%)' (captured trailing unit '%' for child rows)
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 1 column 146 (char 145)) — units left missing
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=flupentixol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'flupentixol / reference (n=24)' subgroup of Wu_2019 (paper reports 7 populations: fasted state (n=24), fed state (n=24), flupentixol / reference (n=22c), flupentixol / reference (n=24), flupentixol / test (n=24), geometric mean (reference), geometric mean (test))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table T0007: representations disagree; selected evidence retained, not merged
- table Wu_2019_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (27 record(s))
- table Wu_2019_table_4: unparsed_numeric_cell
- companion parameter table 4 transcribed (27 record(s))
- table Wu_2019_table_5: unbound_uncertainty
- table Wu_2019_table_5: conflicting_units
- companion parameter table 5 transcribed (30 record(s))
- table Wu_2019_table_6: unbound_uncertainty
- table Wu_2019_table_6: conflicting_units
- companion parameter table 6 transcribed (30 record(s))
- LLM selected parameter table(s) 3, 4, 5, 6
- LLM region Wu_2019:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[auc0-inf, ng h/mlb]` |  | 11.5212 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0-inf, ng h/mlb]` | 11.5212 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0-t, ng h/mlb]` |  | 9.7168 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0-t, ng h/mlb]` | 9.7168 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f, l/hb]` | 46.2537 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax, ng/mlb]` |  | 0.1602 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax, ng/mlb]` | 0.1602 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1⁄2, hb]` |  | 53.0663 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1⁄2, hb]` | 53.0663 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[tmax, ha]` | 8.000 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | flupentixol (in fixed-dose combination tablet with melitracen) | Flupentixol | mismatch |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q27 | fail | [length] ** 3 / [time] | L/hb ([length]) | ['Wu_2019_table_3:row7:col2'] |
| C5_dimension_Q56 | fail | [time] | ha ([length] ** 2) | ['Wu_2019_table_3:row1:col2'] |
| C5_dimension_Q57 | fail | [time] | hb ([length] ** 2) | ['Wu_2019_table_3:row5:col2'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 |  | ['Wu_2019_table_3:row4:col2'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 |  | ['Wu_2019_table_3:row3:col2'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 |  | ['Wu_2019_table_3:row2:col2'] |
| C7_apparent_coherence | pass |  |  |  |
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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bflupenthixol%5D%20Flupenthixol_Wu2019_flupentixol_reference&body=Drug%3A%20flupenthixol%0ARecord%3A%20Flupenthixol_Wu2019_flupentixol_reference%0APaper%3A%20Wu_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_flupenthixol/Flupenthixol_Wu2019_flupentixol_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 09:00 UTC</sub>
