<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;selexipag&quot;,&quot;href&quot;:&quot;drugs/drug_selexipag/&quot;},{&quot;label&quot;:&quot;Krause_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Selexipag_Ruehs2021_reference&quot;,&quot;label&quot;:&quot;Ruehs_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_selexipag/Selexipag_Ruehs2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# selexipag — `Selexipag_Krause2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.515). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (Q, Q2, Q and Q2), so that value has no SI equivalent. Extracted — selexipag: tlag 0.67 h, kabs 0.71 1/h, V2/F 12.9 L, CL/F 19.1 L/h, Q 0.09 1/h, Q2 0.06 1/h, V/F 38.9 L; ACT-333679: V2/F 4.65 L, kfm 0.67 1/h, Q 1.04 1/h, Q2 0.18 1/h, kel 0.49 1/h, Km 0.15 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl: this record has none, the second reading 0.61; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Krause A et al., Population Modeling of Selexipag Pharma…, CPT: pharmacometrics & syst… (2017)
  ·  DOI: [10.1002/psp4.12202](https://doi.org/10.1002/psp4.12202)

<div class="pk-model-meta" hidden drug="selexipag" model-id="Selexipag_Krause2017_reference" status="rejected" stale="false" population="PAH patients" measured-compound="selexipag" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 13 extracted, plus 3 covariate effects.

**Parameterization:** CL/F, V/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tlag (h) | `Q83` · tlag | 0.67 | h | 2412.0 | [h] | not captured | exact (1.0) | psp412202-tbl-0001:row2:col2 | — | 1.92 (None% RSE) |
| ka (1/h) | `Q49` · kabs | 0.71 | 1/h | 0.00019722222222222222 | [1] / [h] | not captured | exact (1.0) | psp412202-tbl-0001:row3:col2, psp412202-tbl-0001:row3:col3, psp412202-tbl-0001:row3:col4 | — | 0.39 (None% RSE) |
| Vp/F (L) | `Q82` · V2/F | 12.90 | L | 0.0129 | [l] | not captured | exact (1.0) | psp412202-tbl-0001:row4:col2, psp412202-tbl-0001:row4:col3, psp412202-tbl-0001:row4:col4 | — | 0.31 (None% RSE) |
| CL/F (L/h) | `Q27` · CL/F | 19.10 | L/h | 5.3055555555555565e-06 | [l] / [h] | not captured | exact (1.0) | psp412202-tbl-0001:row6:col2, psp412202-tbl-0001:row6:col3, psp412202-tbl-0001:row6:col4 | — | 0.73 (None% RSE) |
| k12 (1/h) | `Q30` · Q | 0.09 | 1/h | not captured | [1] / [h] | not captured | exact (1.0) | psp412202-tbl-0001:row9:col2, psp412202-tbl-0001:row9:col3, psp412202-tbl-0001:row9:col4 | — | not captured |
| k21 (1/h) | `Q99` · Q2 | 0.06 | 1/h | not captured | [1] / [h] | not captured | exact (1.0) | psp412202-tbl-0001:row10:col2, psp412202-tbl-0001:row10:col3, psp412202-tbl-0001:row10:col4 | — | not captured |
| Vm/F (L) | `Q82` · V2/F | 4.65 | L | 0.0046500000000000005 | [l] | not captured | exact (1.0) | psp412202-tbl-0001:row11:col2, psp412202-tbl-0001:row11:col3, psp412202-tbl-0001:row11:col4 | — | not captured |
| kmet (1/h) | `Q305` · kfm | 0.67 | 1/h | 0.00018611111111111112 | [1] / [h] | not captured | exact (1.0) | psp412202-tbl-0001:row13:col2, psp412202-tbl-0001:row13:col3, psp412202-tbl-0001:row13:col4 | — | not captured |
| k34 (1/h) | `Q30` · Q | 1.04 | 1/h | not captured | [1] / [h] | not captured | exact (1.0) | psp412202-tbl-0001:row14:col2, psp412202-tbl-0001:row14:col3, psp412202-tbl-0001:row14:col4 | — | not captured |
| k43 (1/h) | `Q99` · Q2 | 0.18 | 1/h | not captured | [1] / [h] | not captured | exact (1.0) | psp412202-tbl-0001:row15:col2, psp412202-tbl-0001:row15:col3, psp412202-tbl-0001:row15:col4 | — | not captured |
| km (1/h) | `Q47` · kel | 0.49 | 1/h | 0.0001361111111111111 | [1] / [h] | not captured | exact (1.0) | psp412202-tbl-0001:row16:col2, psp412202-tbl-0001:row16:col3, psp412202-tbl-0001:row16:col4 | — | not captured |
| PAH comedication on km (ERA) | `Q1` · Km | 0.15 | % | not captured | [%] | not captured | llm_confirmed (0.6) | psp412202-tbl-0001:row18:col2, psp412202-tbl-0001:row18:col3, psp412202-tbl-0001:row18:col4, psp412202-tbl-0001:row18:col5 | — | 0.27 (None% RSE) |
| theta_v2_f_body_weight | `Q900` · theta_v2_f_body_weight | 1.20 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412202-tbl-0001:row5:col2, psp412202-tbl-0001:row5:col3, psp412202-tbl-0001:row5:col4 | — | not captured |
| theta_cl_f_body_weight | `Q900` · theta_cl_f_body_weight | 0.61 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412202-tbl-0001:row7:col2, psp412202-tbl-0001:row7:col3, psp412202-tbl-0001:row7:col4 | — | not captured |
| theta_km_sex | `Q900` · theta_km_sex | 0.15 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412202-tbl-0001:row17:col2, psp412202-tbl-0001:row17:col3, psp412202-tbl-0001:row17:col4, psp412202-tbl-0001:row17:col5 | — | not captured |
| Population mean estimates (inter-individual variability [%]) for V/F | `Q76` · V/F | 38.9 | L | 0.0389 | L | not captured | review_gapfill (0.7) | Ruehs_2021:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Vm | Q66 | not captured | special_case |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'tlag (h)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'ka (1/h)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'Vp/F (L)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'CL/F (L/h)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'k12 (1/h)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'k21 (1/h)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'Vm/F (L)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'kmet (1/h)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'k34 (1/h)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'k43 (1/h)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'km (1/h)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section residual_error: 'b_1' routed out of structural estimates ('Residual error terms')
- table section residual_error: 'b_2' routed out of structural estimates ('Residual error terms')
- table representations disagree for 'tlag (h)'; source reconciliation required
- table representations disagree for 'ka (1/h)'; source reconciliation required
- table representations disagree for 'Vp/F (L)'; source reconciliation required
- table representations disagree for 'Body weight on Vp/F'; source reconciliation required
- table representations disagree for 'CL/F (L/h)'; source reconciliation required
- table representations disagree for 'Body weight on CL/F'; source reconciliation required
- table representations disagree for 'Total bilirubin on CL/F'; source reconciliation required
- table representations disagree for 'k12 (1/h)'; source reconciliation required
- table representations disagree for 'k21 (1/h)'; source reconciliation required
- table representations disagree for 'Vm/F (L)'; source reconciliation required
- table representations disagree for 'Body weight on Vm/F'; source reconciliation required
- table representations disagree for 'kmet (1/h)'; source reconciliation required
- table representations disagree for 'k34 (1/h)'; source reconciliation required
- table representations disagree for 'k43 (1/h)'; source reconciliation required
- table representations disagree for 'km (1/h)'; source reconciliation required
- table representations disagree for 'Sex on km'; source reconciliation required
- table representations disagree for 'PAH comedication on km (ERA)'; source reconciliation required
- table representations disagree for 'PAH comedication on km (PDE5 inh.)'; source reconciliation required
- table representations disagree for 'PAH comedication on km (ERA and PDE5 inh.)'; source reconciliation required
- dropped unlinked row (NIL): 'Total bilirubin on CL/F' — extend the ontology if this is a real PK parameter (source ['psp412202-tbl-0001:row8:col2', 'psp412202-tbl-0001:row8:col3', 'psp412202-tbl-0001:row8:col4'])
- unit_dimension_mismatch: 'k12 (1/h)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'k21 (1/h)' → Q99 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Body weight on Vm/F' — extend the ontology if this is a real PK parameter (source ['psp412202-tbl-0001:row12:col2', 'psp412202-tbl-0001:row12:col3', 'psp412202-tbl-0001:row12:col4'])
- unit_dimension_mismatch: 'k34 (1/h)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'k43 (1/h)' → Q99 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'PAH comedication on km (ERA)' → Q1 (unit 'dimensionless' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'PAH comedication on km (PDE5 inh.)' → Q1 (unit 'dimensionless' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('PAH comedication on km (PDE5 inh.)', value '0.07') — already have one for this compound
- unit_dimension_mismatch: 'PAH comedication on km (ERA and PDE5 inh.)' → Q1 (unit 'dimensionless' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('PAH comedication on km (ERA and PDE5 inh.)', value '0.37') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=selexipag
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- bound model equation to Q66 (Vmax): Vm = Vm, pop (bw/70)^0.88
- Q66 (Vmax) is equation-defined: value moved to equation-variable 'Vm'; equation kept verbatim
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 64 linked by role; re-tagged parent→ACT-333679 ×48
- gap-filled Q76 (V/F) from Ruehs_2021's review values (primary lacked it)

**Extraction notes:**
- table psp412202-tbl-0001: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 1
- captured model equation Vm = Vm, pop (bw/70)^0.88

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.515 (17/33 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[body_weight_on_vm_f]` | 0.88 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl]` | not captured | 0.61 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` | 0.06 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k34].parameter_id` | Q30 | Q99 | mismatch |
| `gpt-oss-120b` | `parameters[k43]` | 0.18 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[km]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_bilirubin]` | not captured | -0.40 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q352_body_weight]` | 1.20 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q367_body_weight]` | not captured | 0.88 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_f_body_weight]` | not captured | 1.20 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total_bilirubin_on_cl_f]` | -0.40 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[vp]` | not captured | 1.2 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | fail | dimensionless | % | not captured | not captured | ['psp412202-tbl-0001:row18:col2', 'psp412202-tbl-0001:row18:col3', 'psp412202-tbl-0001:row18:col4', 'psp412202-tbl-0001:row18:col5'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row6:col2', 'psp412202-tbl-0001:row6:col3', 'psp412202-tbl-0001:row6:col4'] |
| C5_dimension_Q30 | fail | 1 / [time] | 1/h | not captured | not captured | ['psp412202-tbl-0001:row9:col2', 'psp412202-tbl-0001:row9:col3', 'psp412202-tbl-0001:row9:col4'] |
| C5_dimension_Q30 | fail | 1 / [time] | 1/h | not captured | not captured | ['psp412202-tbl-0001:row14:col2', 'psp412202-tbl-0001:row14:col3', 'psp412202-tbl-0001:row14:col4'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row13:col2', 'psp412202-tbl-0001:row13:col3', 'psp412202-tbl-0001:row13:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row16:col2', 'psp412202-tbl-0001:row16:col3', 'psp412202-tbl-0001:row16:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row3:col2', 'psp412202-tbl-0001:row3:col3', 'psp412202-tbl-0001:row3:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ruehs_2021:review'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412202-tbl-0001:row4:col2', 'psp412202-tbl-0001:row4:col3', 'psp412202-tbl-0001:row4:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412202-tbl-0001:row11:col2', 'psp412202-tbl-0001:row11:col3', 'psp412202-tbl-0001:row11:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row2:col2'] |
| C5_dimension_Q99 | fail | 1 / [time] | 1/h | not captured | not captured | ['psp412202-tbl-0001:row10:col2', 'psp412202-tbl-0001:row10:col3', 'psp412202-tbl-0001:row10:col4'] |
| C5_dimension_Q99 | fail | 1 / [time] | 1/h | not captured | not captured | ['psp412202-tbl-0001:row15:col2', 'psp412202-tbl-0001:row15:col3', 'psp412202-tbl-0001:row15:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 19.1 L/h | not captured | not captured | ['psp412202-tbl-0001:row6:col2', 'psp412202-tbl-0001:row6:col3', 'psp412202-tbl-0001:row6:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 38.9 L | not captured | not captured | ['Ruehs_2021:review'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 12.9 L | not captured | not captured | ['psp412202-tbl-0001:row4:col2', 'psp412202-tbl-0001:row4:col3', 'psp412202-tbl-0001:row4:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 4.65 L | not captured | not captured | ['psp412202-tbl-0001:row11:col2', 'psp412202-tbl-0001:row11:col3', 'psp412202-tbl-0001:row11:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_selexipag/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Krause_2017` / `Krause_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 21:41 UTC</sub>
