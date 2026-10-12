<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;selexipag&quot;,&quot;href&quot;:&quot;drugs/drug_selexipag/&quot;},{&quot;label&quot;:&quot;Krause_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Selexipag_Ruehs2021_reference&quot;,&quot;label&quot;:&quot;Ruehs_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_selexipag/Selexipag_Ruehs2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# selexipag — `Selexipag_Krause2017_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.515). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Q, Q2, Q, Q2 and Km have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Km), so that value has no SI equivalent. Extracted — selexipag: tlag 0.67 h, kabs 0.71 1/h, V2/F 12.9 L, CL/F 19.1 L/h, Q 0.09, Q2 0.06; ACT-333679: V1/F 4.65 L, kfm 0.67 1/h, Q 1.04, Q2 0.18, kel 0.49 1/h, Km 0.15 ERA.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl: this record has none, the second reading 0.61; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Krause A et al., Population Modeling of Selexipag Pharma…, CPT: pharmacometrics & syst… (2017)
  ·  DOI: [10.1002/psp4.12202](https://doi.org/10.1002/psp4.12202)

<div class="pk-model-meta" hidden drug="selexipag" model-id="Selexipag_Krause2017_reference" status="needs_review" stale="false" population="patients with pulmonary arterial hypertension" measured-compound="selexipag" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 12 extracted, plus 5 covariate effects.

**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tlag (h) | `Q83` · tlag | 0.67 | h | 2412.0 | [h] | not captured | exact (1.0) | psp412202-tbl-0001:row2:col2 | — | 1.92 (None% RSE) |
| ka (1/h) | `Q49` · kabs | 0.71 | 1/h | 0.00019722222222222222 | 1/h | not captured | exact (1.0) | psp412202-tbl-0001:row3:col2, psp412202-tbl-0001:row3:col3, psp412202-tbl-0001:row3:col4 | — | 0.39 (None% RSE) |
| Vp/F (L) | `Q82` · V2/F | 12.90 | L | 0.0129 | [l] | not captured | exact (1.0) | psp412202-tbl-0001:row4:col2, psp412202-tbl-0001:row4:col3, psp412202-tbl-0001:row4:col4 | — | 0.31 (None% RSE) |
| CL/F (L/h) | `Q27` · CL/F | 19.10 | L/h | 5.3055555555555565e-06 | [l] / [h] | not captured | exact (1.0) | psp412202-tbl-0001:row6:col2, psp412202-tbl-0001:row6:col3, psp412202-tbl-0001:row6:col4 | — | 0.73 (None% RSE) |
| total_bilirubin_on_cl_f | `Q900` · total_bilirubin_on_cl_f | -0.40 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412202-tbl-0001:row8:col2, psp412202-tbl-0001:row8:col3, psp412202-tbl-0001:row8:col4 | — | not captured |
| k12 (1/h) | `Q30` · Q | 0.09 | not captured | not captured | not captured | not captured | exact (1.0) | psp412202-tbl-0001:row9:col2, psp412202-tbl-0001:row9:col3, psp412202-tbl-0001:row9:col4 | — | not captured |
| k21 (1/h) | `Q99` · Q2 | 0.06 | not captured | not captured | not captured | not captured | exact (1.0) | psp412202-tbl-0001:row10:col2, psp412202-tbl-0001:row10:col3, psp412202-tbl-0001:row10:col4 | — | not captured |
| Vm/F (L) | `Q290` · V1/F | 4.65 | L | 0.0046500000000000005 | [l] | not captured | exact (1.0) | psp412202-tbl-0001:row11:col2, psp412202-tbl-0001:row11:col3, psp412202-tbl-0001:row11:col4 | — | not captured |
| body_weight_on_vm_f | `Q900` · body_weight_on_vm_f | 0.88 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412202-tbl-0001:row12:col2, psp412202-tbl-0001:row12:col3, psp412202-tbl-0001:row12:col4 | — | not captured |
| kmet (1/h) | `Q305` · kfm | 0.67 | 1/h | 0.00018611111111111112 | 1/h | not captured | exact (1.0) | psp412202-tbl-0001:row13:col2, psp412202-tbl-0001:row13:col3, psp412202-tbl-0001:row13:col4 | — | not captured |
| k34 (1/h) | `Q30` · Q | 1.04 | not captured | not captured | not captured | not captured | exact (1.0) | psp412202-tbl-0001:row14:col2, psp412202-tbl-0001:row14:col3, psp412202-tbl-0001:row14:col4 | — | not captured |
| k43 (1/h) | `Q99` · Q2 | 0.18 | not captured | not captured | not captured | not captured | exact (1.0) | psp412202-tbl-0001:row15:col2, psp412202-tbl-0001:row15:col3, psp412202-tbl-0001:row15:col4 | — | not captured |
| km (1/h) | `Q47` · kel | 0.49 | 1/h | 0.0001361111111111111 | 1/h | not captured | exact (1.0) | psp412202-tbl-0001:row16:col2, psp412202-tbl-0001:row16:col3, psp412202-tbl-0001:row16:col4 | — | not captured |
| PAH comedication on km (ERA) | `Q1` · Km | 0.15 | ERA | not captured | [era] | not captured | llm_confirmed (0.6) | psp412202-tbl-0001:row18:col2, psp412202-tbl-0001:row18:col3, psp412202-tbl-0001:row18:col4, psp412202-tbl-0001:row18:col5 | — | 0.27 (None% RSE) |
| theta_q352_body_weight | `Q900` · theta_q352_body_weight | 1.20 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412202-tbl-0001:row5:col2, psp412202-tbl-0001:row5:col3, psp412202-tbl-0001:row5:col4 | — | not captured |
| theta_cl_f_body_weight | `Q900` · theta_cl_f_body_weight | 0.61 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412202-tbl-0001:row7:col2, psp412202-tbl-0001:row7:col3, psp412202-tbl-0001:row7:col4 | — | not captured |
| theta_km_sex | `Q900` · theta_km_sex | 0.15 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412202-tbl-0001:row17:col2, psp412202-tbl-0001:row17:col3, psp412202-tbl-0001:row17:col4, psp412202-tbl-0001:row17:col5 | — | not captured |

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
- covariate level 'Total bilirubin on CL/F' → Q900:total_bilirubin_on_cl_f = -0.40 (linear_fractional on Q27)
- covariate level 'Body weight on Vm/F' → Q900:body_weight_on_vm_f = 0.88 (linear_fractional on Q27)
- unit_dimension_unknown: 'ERA' (Km)
- unit_dimension_unknown: 'PDE5 inh.' (Km)
- dropped duplicate Q1 ('PAH comedication on km (PDE5 inh.)', value '0.07') — already have one for this compound
- unit_dimension_unknown: 'ERA and PDE5 inh.' (Km)
- dropped duplicate Q1 ('PAH comedication on km (ERA and PDE5 inh.)', value '0.37') — already have one for this compound
- covariate effect for Q352 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'ka (1/h)' → 1/h (from the paper text: "Text description: 'ka (1/h) = 0.71'")
- implicit units: 'k12 (1/h)' — the LLM proposed '1/h', whose dimension does not fit Q30; left unset
- implicit units: 'k21 (1/h)' — the LLM proposed '1/h', whose dimension does not fit Q99; left unset
- implicit units: 'kmet (1/h)' → 1/h (from the paper text: "Text description: 'kmet (1/h) = 0.67'")
- implicit units: 'k34 (1/h)' — the LLM proposed '1/h', whose dimension does not fit Q30; left unset
- implicit units: 'k43 (1/h)' — the LLM proposed '1/h', whose dimension does not fit Q99; left unset
- implicit units: 'km (1/h)' → 1/h (from the paper text: "Text description: 'km (1/h) = 0.49'")
- implicit units: 'PAH comedication on km (ERA)' — the LLM proposed '1/h', whose dimension does not fit Q1; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=selexipag
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- bound model equation to Q66 (Vmax): Vm = Vm, pop (bw/70)^0.88
- Q66 (Vmax) is equation-defined: value moved to equation-variable 'Vm'; equation kept verbatim
- status held at route_to_review — not promoted
- row roles: 3 per-group rows of ACT-333679 covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 64 linked by role; re-tagged parent→ACT-333679 ×48

**Extraction notes:**
- unparsed cell psp412202-tbl-0001:row5:col5 = '&lt;0.001'
- unparsed cell psp412202-tbl-0001:row7:col5 = '&lt;0.001'
- unparsed cell psp412202-tbl-0001:row8:col5 = '&lt;0.001'
- unparsed cell psp412202-tbl-0001:row11:col1 = 'Apparent volume of distribution, central compartment ACT‐333679'
- unparsed cell psp412202-tbl-0001:row12:col5 = '&lt;0.001'
- unparsed cell psp412202-tbl-0001:row13:col1 = 'Metabolism rate constant selexipag to ACT‐333679'
- unparsed cell psp412202-tbl-0001:row14:col1 = 'Transfer rate constant central to peripheral compartment ACT‐333679'
- unparsed cell psp412202-tbl-0001:row15:col1 = 'Transfer rate constant peripheral to central compartment ACT‐333679'
- unparsed cell psp412202-tbl-0001:row16:col1 = 'Elimination rate constant ACT‐333679'
- unparsed cell psp412202-tbl-0001:row20:col5 = '&lt;0.001'
- unparsed cell psp412202-tbl-0001:row23:col1 = 'Proportional error ACT‐333679'
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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row6:col2', 'psp412202-tbl-0001:row6:col3', 'psp412202-tbl-0001:row6:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412202-tbl-0001:row11:col2', 'psp412202-tbl-0001:row11:col3', 'psp412202-tbl-0001:row11:col4'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row13:col2', 'psp412202-tbl-0001:row13:col3', 'psp412202-tbl-0001:row13:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row16:col2', 'psp412202-tbl-0001:row16:col3', 'psp412202-tbl-0001:row16:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row3:col2', 'psp412202-tbl-0001:row3:col3', 'psp412202-tbl-0001:row3:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412202-tbl-0001:row4:col2', 'psp412202-tbl-0001:row4:col3', 'psp412202-tbl-0001:row4:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row2:col2'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 | ERA | not captured | not captured | ['psp412202-tbl-0001:row18:col2', 'psp412202-tbl-0001:row18:col3', 'psp412202-tbl-0001:row18:col4', 'psp412202-tbl-0001:row18:col5'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row9:col2', 'psp412202-tbl-0001:row9:col3', 'psp412202-tbl-0001:row9:col4'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row14:col2', 'psp412202-tbl-0001:row14:col3', 'psp412202-tbl-0001:row14:col4'] |
| C5_unit_missing_Q99 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row10:col2', 'psp412202-tbl-0001:row10:col3', 'psp412202-tbl-0001:row10:col4'] |
| C5_unit_missing_Q99 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row15:col2', 'psp412202-tbl-0001:row15:col3', 'psp412202-tbl-0001:row15:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 19.1 L/h | not captured | not captured | ['psp412202-tbl-0001:row6:col2', 'psp412202-tbl-0001:row6:col3', 'psp412202-tbl-0001:row6:col4'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 4.65 L | not captured | not captured | ['psp412202-tbl-0001:row11:col2', 'psp412202-tbl-0001:row11:col3', 'psp412202-tbl-0001:row11:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 12.9 L | not captured | not captured | ['psp412202-tbl-0001:row4:col2', 'psp412202-tbl-0001:row4:col3', 'psp412202-tbl-0001:row4:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_selexipag/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Krause_2017` / `Krause_2017::reference`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 18:20 UTC</sub>
