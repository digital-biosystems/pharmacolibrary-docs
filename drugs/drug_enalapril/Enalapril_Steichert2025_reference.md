<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;enalapril&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/&quot;},{&quot;label&quot;:&quot;Steichert_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Enalapril_Kechagia2015_reference&quot;,&quot;label&quot;:&quot;Kechagia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Kechagia2015_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enalapril_Steichert2025v2_reference&quot;,&quot;label&quot;:&quot;Steichert_2025_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Steichert2025v2_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enalapril_Steichert2025_reference&quot;,&quot;label&quot;:&quot;Steichert_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Steichert2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Enalapril_Faisal2019v2_reference&quot;,&quot;label&quot;:&quot;Faisal_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Faisal2019v2_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Kechagia_2015_DBP&quot;,&quot;label&quot;:&quot;Kechagia_2015 \u00b7 DBP&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/pd_Kechagia_2015_DBP.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# enalapril — `Enalapril_Steichert2025_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154), gpt-oss:120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 40, model 0.000184); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. Extracted — enalapril: kabs 0.6 1/h, CL/F 3.43 L/h, V/F 2.83 L, tlag 0.195 h; enalaprilat: CL/F 1.36 L/h, V1/F 24.4 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has enalapril → enalaprilat (metabolism), the second reading none; it also differs on 21 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Steichert M et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2025)
  ·  DOI: [10.1007/s40262-025-01520-5](https://doi.org/10.1007/s40262-025-01520-5)

<div class="pk-model-meta" hidden drug="enalapril" model-id="Enalapril_Steichert2025_reference" status="needs_review" stale="false" population="children with heart failure" measured-compound="enalapril" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent–metabolite model: parent with 1 compartment(s); metabolite enalaprilat: 1 compartment(s); formed from the central compartment; oral dose — template `PK_3M_9C`.  
**Parameters:** 6 extracted, plus 4 covariate effects.

**Parameterization:** CL/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka | `Q49` · kabs | 0.6 | 1/h | 0.00016666666666666666 | 1/h | not captured | exact (1.0) | Tab2:row2:col1, Tab2:row2:col2, Tab2:row2:col5 | — | not captured |
| CL_ENA/F | `Q27` · CL/F | 3.43 | L/h | 9.527777777777779e-07 | L/h | not captured | llm (0.6) | Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col5, Tab2:row3:col6 | — | not captured |
| CL_ENAAT/F | `Q27` · CL/F | 1.36 | L/h | 3.777777777777778e-07 | L/h | not captured | exact (1.0) | Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col5, Tab2:row4:col6 | — | not captured |
| Vd_ENA/F | `Q76` · V/F | 2.83 | L | 0.00283 | L | not captured | llm (0.6) | Tab2:row5:col2, Tab2:row5:col3, Tab2:row5:col5, Tab2:row5:col6 | — | not captured |
| Vd_ENAAT/F | `Q290` · V1/F | 24.45 | L | 0.02445 | L | not captured | exact (1.0) | Tab2:row6:col2, Tab2:row6:col3, Tab2:row6:col5, Tab2:row6:col6 | — | not captured |
| tlag | `Q83` · tlag | 0.195 | h | 702.0 | h | not captured | exact (1.0) | Tab2:row7:col2, Tab2:row7:col3, Tab2:row7:col5, Tab2:row7:col6 | — | not captured |
| age_on_cl_enaat_f | `Q900` · age_on_cl_enaat_f | 0.092 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row12:col2, Tab2:row12:col3, Tab2:row12:col5, Tab2:row12:col6 | — | not captured |
| serum_creatinine_on_cl_enaat_f | `Q900` · serum_creatinine_on_cl_enaat_f | 33.3 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row13:col3 | — | not captured |
| theta_q319_weight | `Q900` · theta_q319_weight | 1 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row10:col2, Tab2:row10:col5 | — | not captured |
| theta_q319_weight | `Q900` · theta_q319_weight | 1 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row11:col2, Tab2:row11:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'IIV CL_ENA/F' routed out of structural estimates ('Interindividual variabilitya')
- table section iiv: 'IIV CL_ENAAT/F' routed out of structural estimates ('Interindividual variabilitya')
- table section iiv: 'IIV Vd_ENA/F' routed out of structural estimates ('Interindividual variabilitya')
- table section iiv: 'IIV Vd_ENAAT/F' routed out of structural estimates ('Interindividual variabilitya')
- table section residual_error: 'Proportional errorb' routed out of structural estimates ('Residual variability enalapril')
- table section residual_error: 'Additive errorc' routed out of structural estimates ('Residual variability enalapril')
- table section residual_error: 'Proportional errorb' routed out of structural estimates ('Residual variability enalaprilat')
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Weight on CL_ENA/F (referenced to 5 kg)' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col2', 'Tab2:row8:col5'])
- dropped unlinked row (NIL): 'Weight on CL_ENAAT/F (referenced to 5 kg)' — extend the ontology if this is a real PK parameter (source ['Tab2:row9:col2', 'Tab2:row9:col5'])
- covariate level 'Age on CL_ENAAT/F' → Q900:age_on_cl_enaat_f = 0.092 (linear_fractional on Q27)
- covariate level 'Serum creatinine on CL_ENAAT/F' → Q900:serum_creatinine_on_cl_enaat_f = 33.3 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'Ross score on Vd_ENAAT/F' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col3'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'ka' → 1/h (from the paper text: "The text states: 'the absorption rate constant (ka) was fixed to the estimated value of the aforementioned final model (")
- implicit units: 'CL_ENA/F' → L/h (from the paper text: "The text states: 'By extrapolation of the estimated apparent clearances of the children with heart failure to an adult w")
- implicit units: 'CL_ENAAT/F' → L/h (from the paper text: "The text states: '...and the apparent clearance of enalaprilat 21.7 L/h.'")
- implicit units: 'Vd_ENA/F' → L (from the popPK convention: 'The paper does not explicitly state the unit for Vd_ENA/F, but the standard unit for apparent volume of distribution in ')
- implicit units: 'Vd_ENAAT/F' → L (from the popPK convention: 'The paper does not explicitly state the unit for Vd_ENAAT/F, but the standard unit for apparent volume of distribution i')
- implicit units: 'tlag' → h (from the popPK convention: 'The paper does not explicitly state the unit for tlag, but the standard unit for lag time in population PK is hours (h),')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=enalapril
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- row roles (LLM): model_class=compartmental; 19/19 row label(s) assigned, 23 linked by role; re-tagged parent→enalaprilat ×28
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row13:col2 = '− 0.0141'
- unparsed cell Tab2:row13:col5 = '− 0.0141'
- unparsed cell Tab2:row13:col6 = '− 0.0288 to − 0.004'
- unparsed cell Tab2:row14:col2 = '− 0.15'
- unparsed cell Tab2:row14:col5 = '− 0.149'
- unparsed cell Tab2:row14:col6 = '− 0.248 to − 0.004'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.154 (4/26 fields) | 22 |
| `gpt-oss:120b` | not confirmed | 0.125 (3/24 fields) | 21 |

<details><summary>43 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['enalapril', 'enalaprilat', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[age_on_cl_enaat_f]` | not captured | 29.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[age_on_cl_enaat_f]` | 0.092 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_ena/f].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl_ena/f].rse_percent` | not captured | 3.43 | mismatch |
| `gpt-oss-120b` | `parameters[cl_ena/f].value` | 3.43 | 12.6 | mismatch |
| `gpt-oss-120b` | `parameters[cl_enaat/f]` | 1.36 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].rse_percent` | not captured | 0.6 | mismatch |
| `gpt-oss-120b` | `parameters[ross score on vd_enaat/f]` | not captured | 26.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[serum_creatinine_on_cl_enaat_f]` | not captured | 33.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[serum_creatinine_on_cl_enaat_f]` | 33.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_weight]` | not captured | 0.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight].rse_percent` | not captured | 0.75 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q319_weight].value` | 1 | 0.75 | mismatch |
| `gpt-oss-120b` | `parameters[theta_v_f_weight]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag].rse_percent` | not captured | 0.195 | mismatch |
| `gpt-oss-120b` | `parameters[tlag].value` | 0.195 | 2.8 | mismatch |
| `gpt-oss-120b` | `parameters[vd_ena/f].covariate_forms` | [] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[vd_ena/f].rse_percent` | not captured | 2.83 | mismatch |
| `gpt-oss-120b` | `parameters[vd_ena/f].value` | 2.83 | 18.1 | mismatch |
| `gpt-oss-120b` | `parameters[vd_enaat/f]` | 24.45 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[age_on_cl_enaat_f]` | 0.092 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl_ena/f]` | 3.43 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl_ena/f]` | not captured | 12.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl_enaat/f].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss:120b` | `parameters[cl_enaat/f].value` | 1.36 | 7.1 | mismatch |
| `gpt-oss:120b` | `parameters[ka]` | 0.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | not captured | 0.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_age]` | not captured | 29.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_weight]` | not captured | 0.75 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_weight]` | not captured | 0.75 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q319_weight]` | 1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q319_weight]` | 1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q76_weight]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v_f_weight]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tlag]` | 0.195 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[tlag]` | not captured | 2.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd_ena/f]` | 2.83 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd_ena/f]` | not captured | 18.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd_enaat/f].value` | 24.45 | 15.7 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | enalapril | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | enalapril | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col5', 'Tab2:row3:col6'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col5', 'Tab2:row4:col6'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col5', 'Tab2:row6:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col5'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col5', 'Tab2:row5:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab2:row7:col2', 'Tab2:row7:col3', 'Tab2:row7:col5', 'Tab2:row7:col6'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 3.43 L/h | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col5', 'Tab2:row3:col6'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.36 L/h | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col5', 'Tab2:row4:col6'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 24.4 L | not captured | not captured | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col5', 'Tab2:row6:col6'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.83 L | not captured | not captured | ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col5', 'Tab2:row5:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_metabolite_built[enalaprilat] | not captured | pass | own V, CL and formation clearance &gt; 0 | {'V': 0.02445, 'CL': 3.777777777777778e-07, 'formation': 9.527777777777779e-07} | not captured | enalaprilat = compartment M1 with its own numbers |
| T3_metabolite_output[enalaprilat] | not captured | pass | not captured | 6.132765739838674e-05 | not captured | C_M1 (enalaprilat) must rise above 0 when the parent is dosed |
| T3_molar_mass[enalaprilat] | not captured | pass | not captured | {'MW': 0.3764467, 'MW_m1': 0.348399} | not captured | formation is molecule-for-molecule |
| T3_output_variable | not captured | pass | C_central (measured=enalapril) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_shared_parameters | not captured | skipped | not captured | not captured | not captured | parent–metabolite template: every compound has its own slot |
| T3_topology_template | not captured | pass | parent_metabolite_central → PK_3M_9C* | PK_3M_9C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 40 | 0.00018422449909641418 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 60 | 0.00018422449909641418 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | fail | 1.85e-06 | 0.00018422449909641418 | 99.5808 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 6.789999999999999e-06 | 0.00018422449909641418 | 27.1317 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 14.6 | 0.00018422449909641418 | not captured | unresolved concentration unit (exp 'µg/L/mg·kg', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_enalapril/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Steichert_2025` / `Steichert_2025::reference`)
- model: `../../../knowledgebase/drugs/drug_enalapril/models/modelica/Enalapril_Steichert2025_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_enalapril/models/modelica/Enalapril_Steichert2025_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_enalapril/models/modelica/Enalapril_Steichert2025_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025_reference/Enalapril_Steichert2025_reference_modelica.zip" download>Enalapril_Steichert2025_reference_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025_reference/Enalapril_Steichert2025_reference_fmi.zip" download>Enalapril_Steichert2025_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_3M_9C.fmu" download>PK_3M_9C.fmu</a> <span class="pk-size">(1.4 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025_reference/Enalapril_Steichert2025_reference_matlab.zip" download>Enalapril_Steichert2025_reference_matlab.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025_reference/Enalapril_Steichert2025_reference_sbml.zip" download>Enalapril_Steichert2025_reference_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025_reference/Enalapril_Steichert2025_reference_cellml.zip" download>Enalapril_Steichert2025_reference_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3M_9C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_enalapril/Enalapril_Steichert2025_reference/Enalapril_Steichert2025_reference.svg" alt="Enalapril_Steichert2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2.1 mg, single dose, first-order absorption (ka 0.6 /h, lag 11.7 min, F 1). Doses in the paper: 2.1–5.6 mg.

<dbs-fmusim paramsurl="drugs/drug_enalapril/Enalapril_Steichert2025_reference/Enalapril_Steichert2025_reference_params.json" metaurl="assets/fmu/PK_3M_9C.vr.json" wasmurl="assets/fmu/PK_3M_9C.js" controlsurl="drugs/drug_enalapril/Enalapril_Steichert2025_reference/Enalapril_Steichert2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3M_9C` · parameters `Enalapril_Steichert2025_reference_params.json` · controls `Enalapril_Steichert2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:42 UTC</sub>
