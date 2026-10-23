<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;abacavir&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/&quot;},{&quot;label&quot;:&quot;Chandasana_2024_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Abacavir_Zhang2015_reference&quot;,&quot;label&quot;:&quot;Zhang_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Zhang2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Chupradit2024_reference&quot;,&quot;label&quot;:&quot;Chupradit_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Chupradit2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Ji2024_reference&quot;,&quot;label&quot;:&quot;Ji_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Ji2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abacavir — `Abacavir_Chandasana2024v2_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The weight scaling check for abacavir clearance could not compute a ratio due to inconclusive data.

<div class="pk-model-meta" hidden drug="abacavir" model-id="Abacavir_Chandasana2024v2_reference" status="needs_review" stale="false" population="children with HIV-1" measured-compound="abacavir" parameterization="apparent" topology="2C"></div>

## Citation
Chandasana H, van Dijkman SC, Mehta R, Bush M, Rabie H, Flynn P et al. Population Pharmacokinetic Modeling of Abacavir/Dolutegravir/Lamivudine to Support a Fixed-Dose Combination in Children with HIV-1. Infectious diseases and therapy 13(8):1877–1891 (2024).
  ·  DOI: [10.1007/s40121-024-01008-y](https://doi.org/10.1007/s40121-024-01008-y)

## Population and dosing

**Population:** children with HIV-1 · condition HIV-1 · age group child.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 11 extracted, plus 5 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Apparent clearance, CL/F [L/h] | CL/F | 16.3 | L/h | 3.62 | 36.3 (None% RSE) |
| Apparent central volume of distribution, V2/F [l] | V2/F | 10.1 | l | 7.56 | 51.9 (None% RSE) |
| Absorption rate constant, KA [h−1] | kabs | 2.08 | h−1 | 9.76 | 107 (None% RSE) |
| Intercompartment clearance, Q/F [l/h] | Q/F | 1.69 | l/h | 7.87 | 67.9 (None% RSE) |
| Apparent peripheral compartment volume of distribution, V3/F [l] | V3/F | 23.0 | l | 17.4 | 91.9 (None% RSE) |
| F, tablet ARROW PK Substudy Part 2 | Fab | 1.62 |  | 8.02 |  |
| Apparent central volume of distribution, V/F [l] | V1/F | 23.1 | l | 4.68 |  |
| F, fasted FCT | fe | 1.00 |  |  |  |
| F, fasted DT/granules | FG | 1.53 |  | 3.26 |  |
| Maturation half time, TM50 [PMA weeks] | t1/2z | 52.2 | weeks |  |  |
| Lag time ALAG1 (h) | tlag | 0.297 | h | 12.1 |  |
| theta_cl_f_wt_power | theta_cl_f_wt_power | 0.794 |  |  |  |
| theta_q76_wt_power | theta_q76_wt_power | 0.698 |  |  |  |
| theta_q354_wt_power | theta_q354_wt_power | 0.455 |  | 4.15 |  |
| theta_q76_wt_power | theta_q76_wt_power | 0.556 |  | 3.87 |  |
| theta_cl_f_wt_power | theta_cl_f_wt_power | 0.758 |  | 7.07 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The weight scaling check for abacavir clearance could not compute a ratio due to inconclusive data.**

The automated check failed without producing a comparison value, making the result inconclusive rather than a confirmed error. Additionally, there are significant disagreements on the absorption rate constant and central volume values, with recorded values of 2.08 and 23.1 conflicting with second reader estimates. Extracted — abacavir: CL/F 16.3 L/h, V2/F 10.1 l, kabs 2.08 h−1, Q/F 1.69 l/h, V3/F 23 l, Fab 1.62, V1/F 23.1 l, fe 1, … (+3).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has abacavir/dolutegravir/lamivudine FDC, the second reading abacavir/dolutegravir/lamivudine fixed-dose combination; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Apparent clearance, CL/F [L/h] | `Q27` · CL/F | 16.3 | L/h | 4.528e-06 | m3/s | l/h | 3.62 | llm_confirmed (0.6) | Chandasana_2024_2_table_1:row0:col1 | 36.3 (None% RSE) |
| Apparent central volume of distribution, V2/F [l] | `Q82` · V2/F | 10.1 | l | 0.0101 | m3 | l | 7.56 | llm_corrected (0.6) | Chandasana_2024_2_table_1:row1:col1 | 51.9 (None% RSE) |
| Absorption rate constant, KA [h−1] | `Q49` · kabs | 2.08 | h−1 | 0.0005778 | 1/s | 1/h | 9.76 | llm_confirmed (0.6) | Chandasana_2024_2_table_1:row2:col1, Chandasana_2024_2_table_3:row0:col1 | 107 (None% RSE) |
| Intercompartment clearance, Q/F [l/h] | `Q69` · Q/F | 1.69 | l/h | 4.694e-07 | m3/s | l/h | 7.87 | llm_corrected (0.6) | Chandasana_2024_2_table_1:row3:col1 | 67.9 (None% RSE) |
| Apparent peripheral compartment volume of distribution, V3/F [l] | `Q78` · V3/F | 23.0 | l | 0.023 | m3 | l | 17.4 | llm_corrected (0.6) | Chandasana_2024_2_table_1:row4:col1 | 91.9 (None% RSE) |
| F, tablet ARROW PK Substudy Part 2 | `Q40` · Fab | 1.62 |  |  |  |  | 8.02 | llm (0.6) | Chandasana_2024_2_table_1:row5:col1 |  |
| Apparent central volume of distribution, V/F [l] | `Q290` · V1/F | 23.1 | l | 0.0231 | m3 | l | 4.68 | llm_confirmed (0.6) | Chandasana_2024_2_table_2:row1:col1, Chandasana_2024_2_table_3:row2:col1 |  |
| F, fasted FCT | `Q44` · fe | 1.00 |  |  |  |  |  | llm (0.6) | Chandasana_2024_2_table_2:row4:col1 |  |
| F, fasted DT/granules | `Q41` · FG | 1.53 |  |  |  |  | 3.26 | llm (0.6) | Chandasana_2024_2_table_2:row6:col1 |  |
| Maturation half time, TM50 [PMA weeks] | `Q57` · t1/2z | 52.2 | weeks |  |  | weeks |  | llm (0.6) | Chandasana_2024_2_table_2:row10:col1 |  |
| Lag time ALAG1 (h) | `Q83` · tlag | 0.297 | h | 1069 | s | h | 12.1 | llm_confirmed (0.6) | Chandasana_2024_2_table_3:row1:col1 |  |
| theta_cl_f_wt_power | `Q900` · theta_cl_f_wt_power | 0.794 |  |  |  |  |  |  | Chandasana_2024_2_table_1:row7:col1 |  |
| theta_q76_wt_power | `Q900` · theta_q76_wt_power | 0.698 |  |  |  |  |  |  | Chandasana_2024_2_table_1:row8:col1 |  |
| theta_q354_wt_power | `Q900` · theta_q354_wt_power | 0.455 |  |  |  |  | 4.15 |  | Chandasana_2024_2_table_2:row7:col1 |  |
| theta_q76_wt_power | `Q900` · theta_q76_wt_power | 0.556 |  |  |  |  | 3.87 |  | Chandasana_2024_2_table_2:row8:col1 |  |
| theta_cl_f_wt_power | `Q900` · theta_cl_f_wt_power | 0.758 |  |  |  |  | 7.07 |  | Chandasana_2024_2_table_3:row6:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Q/F' routed out of structural estimates ('Interindividual variability CV%')
- table section iiv: 'V2/F' routed out of structural estimates ('Interindividual variability CV%')
- table section iiv: 'V3/F' routed out of structural estimates ('Interindividual variability CV%')
- table section iiv: 'CL/F' routed out of structural estimates ('Interindividual variability CV%')
- table section iov: 'IOV-CL/F' routed out of structural estimates ('Interoccasion variability')
- table section residual_error: 'Proportional error' routed out of structural estimates ('Residual error')
- table section iiv: 'V/F' routed out of structural estimates ('Interindividual variability CV%')
- table section iiv: 'KA' routed out of structural estimates ('Interindividual variability CV%')
- table section iov: 'IOV-KA' routed out of structural estimates ('Interoccasion variability')
- table section residual_error: 'Proportional error study P1093' routed out of structural estimates ('Residual error')
- table section residual_error: 'Additive error (μg/ml), study P1093' routed out of structural estimates ('Residual error')
- table section residual_error: 'Proportional error ODYSSEY' routed out of structural estimates ('Residual error')
- table section residual_error: 'Additive error study (μg/ml), ODYSSEY' routed out of structural estimates ('Residual error')
- table section iov: 'IOV-V/F' routed out of structural estimates ('Interoccasion variability')
- table section iov: 'IOVKA' routed out of structural estimates ('Interoccasion variability')
- table section residual_error: 'Additive error [mg/l]' routed out of structural estimates ('Residual error')
- column 'cmax(µg/ml)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for '≥ 6 to &lt; 10 kg'; source reconciliation required
- column 'auc0–24(µg*h/ml)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'c24(µg/ml)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for '≥ 10 to &lt; 14 kg'; source reconciliation required
- table representations disagree for '≥ 14 to &lt; 20 kg'; source reconciliation required
- table representations disagree for '≥ 20 to &lt; 25 kg'; source reconciliation required
- table representations disagree for '≥ 25 kg to &lt; 40 kg'; source reconciliation required
- dropped unlinked row (NIL): '≥ 6 to &lt; 10 kg' — extend the ontology if this is a real PK parameter (source ['Tab4:row2:col2', 'Tab4:row2:col3', 'Tab4:row2:col4', 'Tab4:row8:col2', 'Tab4:row8:col3', 'Tab4:row8:col4', 'Tab4:row14:col2', 'Tab4:row14:col3', 'Tab4:row14:col4'])
- dropped unlinked row (NIL): '≥ 10 to &lt; 14 kg' — extend the ontology if this is a real PK parameter (source ['Tab4:row3:col2', 'Tab4:row3:col3', 'Tab4:row3:col4', 'Tab4:row9:col2', 'Tab4:row9:col3', 'Tab4:row9:col4', 'Tab4:row15:col2', 'Tab4:row15:col3', 'Tab4:row15:col4'])
- dropped unlinked row (NIL): '≥ 14 to &lt; 20 kg' — extend the ontology if this is a real PK parameter (source ['Tab4:row4:col2', 'Tab4:row4:col3', 'Tab4:row4:col4', 'Tab4:row10:col2', 'Tab4:row10:col3', 'Tab4:row10:col4', 'Tab4:row16:col2', 'Tab4:row16:col3', 'Tab4:row16:col4'])
- dropped unlinked row (NIL): '≥ 20 to &lt; 25 kg' — extend the ontology if this is a real PK parameter (source ['Tab4:row5:col2', 'Tab4:row5:col3', 'Tab4:row5:col4', 'Tab4:row11:col2', 'Tab4:row11:col3', 'Tab4:row11:col4', 'Tab4:row17:col2', 'Tab4:row17:col3', 'Tab4:row17:col4'])
- dropped unlinked row (NIL): '≥ 25 kg to &lt; 40 kg' — extend the ontology if this is a real PK parameter (source ['Tab4:row6:col2', 'Tab4:row6:col3', 'Tab4:row6:col4', 'Tab4:row12:col2', 'Tab4:row12:col3', 'Tab4:row12:col4', 'Tab4:row18:col2', 'Tab4:row18:col3', 'Tab4:row18:col4'])
- dropped duplicate Q27 ('Apparent clearance, CL/F [l/h]', value '9.16') — already have one for this compound
- dropped duplicate Q49 ('Absorption rate constant, KA, FCT [h−1]', value '0.854') — already have one for this compound
- dropped duplicate Q49 ('Absorption rate constant, KA ~ DT and granules [h−1]', value '2.04') — already have one for this compound
- dropped PD-category row 'Hill coefficient related to the slope of the enzyme maturation process' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Chandasana_2024_2_table_2:row11:col1'])
- dropped unlinked row (NIL): 'VL/F ~ (WT/18.5)' — extend the ontology if this is a real PK parameter (source ['Chandasana_2024_2_table_3:row7:col1'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['Tab4:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'AUC' from footnote/prose loose number None (source ['Tab4:footnote']); the table cell was unparseable — needs review
- covariate effect for Q76 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q354 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Maturation half time, TM50 [PMA weeks]' → weeks (from the paper text: "The parameter definition provided in the input lists the label as 'TM50 [PMA weeks]' and the table caption states 'TM50H")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=abacavir
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- table Tab4: unparsed_numeric_cell
- table Tab4: representations disagree; selected evidence retained, not merged
- companion parameter table 1 transcribed (15 record(s))
- companion parameter table 2 transcribed (20 record(s))
- companion parameter table 3 transcribed (16 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (22/33 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant, ka [h-1]].value` | 2.08 | 0.85 | mismatch |
| `gpt-oss-120b` | `parameters[apparent central volume of distribution, v/f [l]].covariate_forms` | [] | ['power', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[apparent central volume of distribution, v/f [l]].parameter_id` | Q290 | Q76 | mismatch |
| `gpt-oss-120b` | `parameters[apparent central volume of distribution, v/f [l]].value` | 23.1 | 13.6 | mismatch |
| `gpt-oss-120b` | `parameters[f, solution arrow pk substudy part 2]` |  | 1.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f, tablet arrow pk substudy part 2].parameter_id` | Q40 | Q87 | mismatch |
| `gpt-oss-120b` | `parameters[maturation half time, tm50 [pma weeks]]` | 52.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q353_wt_power]` | 0.556 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_wt_power]` | 0.677 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_f_wt_power]` |  | 0.556 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | abacavir/dolutegravir/lamivudine FDC | abacavir/dolutegravir/lamivudine fixed-dose combination | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_center_consistency_wt | fail |  | [15.6, 18.5] |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Chandasana_2024_2_table_1:row0:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Chandasana_2024_2_table_2:row1:col1', 'Chandasana_2024_2_table_3:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Chandasana_2024_2_table_1:row2:col1', 'Chandasana_2024_2_table_3:row0:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Chandasana_2024_2_table_2:row10:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Chandasana_2024_2_table_1:row3:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Chandasana_2024_2_table_1:row4:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Chandasana_2024_2_table_1:row1:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Chandasana_2024_2_table_3:row1:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 16.3 L/h | ['Chandasana_2024_2_table_1:row0:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 23.1 L | ['Chandasana_2024_2_table_2:row1:col1', 'Chandasana_2024_2_table_3:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 10.1 L | ['Chandasana_2024_2_table_1:row1:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Babacavir%5D%20Abacavir_Chandasana2024v2_reference&body=Drug%3A%20abacavir%0ARecord%3A%20Abacavir_Chandasana2024v2_reference%0APaper%3A%20Chandasana_2024_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_abacavir/Abacavir_Chandasana2024v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 09:56 UTC</sub>
