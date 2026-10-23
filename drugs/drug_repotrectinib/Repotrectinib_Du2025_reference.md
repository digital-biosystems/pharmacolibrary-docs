<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;repotrectinib&quot;,&quot;href&quot;:&quot;drugs/drug_repotrectinib/&quot;},{&quot;label&quot;:&quot;Du_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Repotrectinib_Du2025_reference&quot;,&quot;label&quot;:&quot;Du_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_repotrectinib/Repotrectinib_Du2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# repotrectinib — `Repotrectinib_Du2025_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> Repotrectinib was held back because its absorption lag time, tlag = 0.421 h, was not covered and its covariate effects were not simulated.

<div class="pk-model-meta" hidden drug="repotrectinib" model-id="Repotrectinib_Du2025_reference" status="needs_review" stale="false" population="healthy volunteers and patients with advanced solid tumors harboring ALK, ROS1, or NTRK1-3 rearrangements" measured-compound="repotrectinib" parameterization="mechanistic" topology="2C"></div>

## Citation
Du S, Hu Z, Shen J, Hamuro L, Lam J, Lu M et al. A Novel Empirical Autoinduction Model to Characterize the Population Pharmacokinetics and Recommend Dose for Repotrectinib in Adult and Adolescents With Advanced Solid Tumors Harboring ALK, ROS1, or NTRK1-3 Rearrangements. CPT: pharmacometrics & systems pharmacology 14(7):1179–1190 (2025).
  ·  DOI: [10.1002/psp4.70036](https://doi.org/10.1002/psp4.70036)

## Population and dosing

**Population:** healthy volunteers and patients with advanced solid tumors harboring ALK, ROS1, or NTRK1-3 rearrangements · condition advanced solid tumors harboring ALK, ROS1, or NTRK1-3 rearrangements; healthy volunteers · age group mixed · n = 644.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted, plus 7 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_repotrectinib/Repotrectinib_Du2025_reference/Repotrectinib_Du2025_reference.svg" alt="Repotrectinib_Du2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL (L/h); systemic clearance | CL | 7.1 | L/h | 4.5 |
| VC(L); central volume | V1 | 19.8 | L | 9.5 |
| VP(L); peripheral volume | V2 | 221 | L | 4 |
| Q(L); intercompartmental clearance | Q | 4.98 | L/h | 6.5 |
| F1FASTED; bioavailability at fasted | Fab | 0.52 |  | 5.3 |
| F1Unknown; bioavailability at unknown food status | Frel | 0.533 |  | 5.6 |
| ALAG1 (h); Lag time | tlag | 0.421 | h | 1.7 |
| clqwt_body_weight_on_cl_and_q | clqwt_body_weight_on_cl_and_q | 0.477 |  | 14.3 |
| TC50 (h); time to achieve half of CLMAX | equation variable | 47.2 |  | 22.6 |
| theta_q49_fasted_ka_h_absorption_rate_constant_at_fasted | theta_q49_fasted_ka_h_absorption_rate_constant_at_fasted | 0.0541 |  | 3.8 |
| theta_q49_fed_ka_h_absorption_rate_constant_at_fed | theta_q49_fed_ka_h_absorption_rate_constant_at_fed | 0.124 |  | 3.8 |
| theta_q49_fasted_kamodified_hour_absorption_rate_constant_at_modified | theta_q49_fasted_kamodified_hour_absorption_rate_constant_at_modified | 0.141 |  | 5.8 |
| theta_q49_food_kaunknown_h_absorption_rate_constant_at_unknown_status | theta_q49_food_kaunknown_h_absorption_rate_constant_at_unknown_status | 0.193 |  | 3.6 |
| theta_q319_body_weight | theta_q319_body_weight | 0.962 |  | 5.4 |
| theta_cl_age | theta_cl_age | -0.292 |  | 9.2 |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.765). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Repotrectinib was held back because its absorption lag time, tlag = 0.421 h, was not covered and its covariate effects were not simulated.**

The record lists repotrectinib absorption lag time as 0.421 h, but tlag was neither emitted nor defaulted: 4 of 5 expected parameters were covered. The covariate scenarios were not simulated. The base model was simulated, not the covariate effects the record defines. Extracted — repotrectinib: CL 7.1 L/h, V1 19.8 L, V2 221 L, Q 4.98 L/h, Fab 0.52, Frel 0.533, tlag 0.421 h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of clmaxage_age_effect_on_clmax: this record has none, the second reading -0.292; it also differs on 7 more fields. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h); systemic clearance | `Q22` · CL | 7.1 | L/h | 1.972e-06 | m3/s | L/h | 4.5 | llm_confirmed (0.6) | psp470036-tbl-0002:row2:col1, psp470036-tbl-0002:row2:col2, psp470036-tbl-0002:row2:col3 |
| VC(L); central volume | `Q63` · V1 | 19.8 | L | 0.0198 | m3 | L | 9.5 | llm_confirmed (0.6) | psp470036-tbl-0002:row3:col1, psp470036-tbl-0002:row3:col2, psp470036-tbl-0002:row3:col3 |
| VP(L); peripheral volume | `Q64` · V2 | 221 | L | 0.221 | m3 | L | 4 | llm_confirmed (0.6) | psp470036-tbl-0002:row4:col1, psp470036-tbl-0002:row4:col2, psp470036-tbl-0002:row4:col3 |
| Q(L); intercompartmental clearance | `Q30` · Q | 4.98 | L/h | 1.383e-06 | m3/s | L/h | 6.5 | llm_confirmed (0.6) | psp470036-tbl-0002:row5:col1, psp470036-tbl-0002:row5:col2, psp470036-tbl-0002:row5:col3 |
| F1FASTED; bioavailability at fasted | `Q40` · Fab | 0.52 |  |  |  |  | 5.3 | llm_confirmed (0.6) | psp470036-tbl-0002:row10:col1, psp470036-tbl-0002:row10:col2, psp470036-tbl-0002:row10:col3 |
| F1Unknown; bioavailability at unknown food status | `Q87` · Frel | 0.533 |  |  |  |  | 5.6 | llm_corrected (0.6) | psp470036-tbl-0002:row13:col1, psp470036-tbl-0002:row13:col2, psp470036-tbl-0002:row13:col3 |
| ALAG1 (h); Lag time | `Q83` · tlag | 0.421 | h | 1516 | s | h | 1.7 | llm_confirmed (0.6) | psp470036-tbl-0002:row14:col1, psp470036-tbl-0002:row14:col2, psp470036-tbl-0002:row14:col3 |
| clqwt_body_weight_on_cl_and_q | `Q900` · clqwt_body_weight_on_cl_and_q | 0.477 |  |  |  |  | 14.3 |  | psp470036-tbl-0002:row15:col1, psp470036-tbl-0002:row15:col2, psp470036-tbl-0002:row15:col3 |
| TC50 (h); time to achieve half of CLMAX | `Q900` · equation variable | 47.2 |  |  |  |  | 22.6 | llm (0.6) | psp470036-tbl-0002:row21:col1, psp470036-tbl-0002:row21:col2, psp470036-tbl-0002:row21:col3 |
| theta_q49_fasted_ka_h_absorption_rate_constant_at_fasted | `Q900` · theta_q49_fasted_ka_h_absorption_rate_constant_at_fasted | 0.0541 |  |  |  |  | 3.8 |  | psp470036-tbl-0002:row6:col1, psp470036-tbl-0002:row6:col2, psp470036-tbl-0002:row6:col3 |
| theta_q49_fed_ka_h_absorption_rate_constant_at_fed | `Q900` · theta_q49_fed_ka_h_absorption_rate_constant_at_fed | 0.124 |  |  |  |  | 3.8 |  | psp470036-tbl-0002:row7:col1, psp470036-tbl-0002:row7:col2, psp470036-tbl-0002:row7:col3 |
| theta_q49_fasted_kamodified_hour_absorption_rate_constant_at_modified | `Q900` · theta_q49_fasted_kamodified_hour_absorption_rate_constant_at_modified | 0.141 |  |  |  |  | 5.8 |  | psp470036-tbl-0002:row8:col1, psp470036-tbl-0002:row8:col2, psp470036-tbl-0002:row8:col3 |
| theta_q49_food_kaunknown_h_absorption_rate_constant_at_unknown_status | `Q900` · theta_q49_food_kaunknown_h_absorption_rate_constant_at_unknown_status | 0.193 |  |  |  |  | 3.6 |  | psp470036-tbl-0002:row9:col1, psp470036-tbl-0002:row9:col2, psp470036-tbl-0002:row9:col3 |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.962 |  |  |  |  | 5.4 |  | psp470036-tbl-0002:row16:col1, psp470036-tbl-0002:row16:col2, psp470036-tbl-0002:row16:col3 |
| theta_cl_age | `Q900` · theta_cl_age | -0.292 |  |  |  |  | 9.2 |  | psp470036-tbl-0002:row22:col1, psp470036-tbl-0002:row22:col2, psp470036-tbl-0002:row22:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω 2 CLH; IIV on CL for healthy volunteers' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'ω 2 VC; IIV on VC' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'ω 2 Q; IIV on Q' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'ω 2 KA; IIV on KA' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'ω 2 F1; IIV on F1' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'ω 2 CLP; IIV on CL for Patients' routed out of structural estimates ('Interindividual variability (IIV)')
- table section residual_error: 'Proportional error in healthy volunteers' routed out of structural estimates ('Residual error')
- table section residual_error: 'Additive error in healthy volunteers' routed out of structural estimates ('Residual error')
- table section residual_error: 'Proportional error in patients' routed out of structural estimates ('Residual error')
- table section residual_error: 'Additive error in patients' routed out of structural estimates ('Residual error')
- covariate level 'CLQWT; Body weight on CL and Q' → Q900:clqwt_body_weight_on_cl_and_q = 0.477 (linear_fractional on Q22)
- routed 'VCPOP; population effct on V2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q22 ('CLMAX; maximum induced clearance', value '1.59') — already have one for this compound
- dropped PD-category row 'EC50 (ng/mL); concentration to achieve half of CLMAX' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp470036-tbl-0002:row19:col1', 'psp470036-tbl-0002:row19:col2', 'psp470036-tbl-0002:row19:col3'])
- dropped PD-category row 'GAMMA; Hill coefficient' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp470036-tbl-0002:row20:col1'])
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CL (L/h); systemic clearance' → L/h (from the popPK convention: 'CL is systemic clearance; clearance is conventionally reported in L/h, consistent with the estimate of 7.1.')
- implicit units: 'VC(L); central volume' → L (from the popPK convention: 'VC is the central volume of distribution; volumes are conventionally reported in L, consistent with the estimate of 19.8')
- implicit units: 'VP(L); peripheral volume' → L (from the popPK convention: 'VP is the peripheral volume of distribution; volumes are conventionally reported in L, consistent with the estimate of 2')
- implicit units: 'Q(L); intercompartmental clearance' → L/h (from the popPK convention: 'Q is intercompartmental clearance; clearances are conventionally reported in L/h, consistent with the estimate of 4.98.')
- implicit units: 'ALAG1 (h); Lag time' → h (from the popPK convention: 'ALAG1 is an absorption lag time; lag times are conventionally reported in hours, consistent with the estimate of 0.421.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=repotrectinib

**Extraction notes:**
- unparsed cell psp470036-tbl-0002:row2:col5 = '[6.471, 7.729]'
- unparsed cell psp470036-tbl-0002:row3:col5 = '[16.12, 23.48]'
- unparsed cell psp470036-tbl-0002:row4:col5 = '[203.7, 238.3]'
- unparsed cell psp470036-tbl-0002:row5:col5 = '[4.347, 5.613]'
- unparsed cell psp470036-tbl-0002:row6:col5 = '[0.0501, 0.0581]'
- unparsed cell psp470036-tbl-0002:row7:col5 = '[0.1148, 0.1332]'
- unparsed cell psp470036-tbl-0002:row8:col5 = '[0.125, 0.157]'
- unparsed cell psp470036-tbl-0002:row9:col5 = '[0.1794, 0.2066]'
- unparsed cell psp470036-tbl-0002:row10:col5 = '[0.4665, 0.5735]'
- unparsed cell psp470036-tbl-0002:row11:col5 = '[0.6877, 0.8323]'
- unparsed cell psp470036-tbl-0002:row12:col5 = '[0.5628, 0.7152]'
- unparsed cell psp470036-tbl-0002:row13:col5 = '[0.4742, 0.5918]'
- unparsed cell psp470036-tbl-0002:row14:col5 = '[0.4073, 0.4347]'
- unparsed cell psp470036-tbl-0002:row15:col5 = '[0.3437, 0.6123]'
- unparsed cell psp470036-tbl-0002:row16:col5 = '[0.8601, 1.062]'
- unparsed cell psp470036-tbl-0002:row17:col5 = '[−0.8969, −0.8111]'
- unparsed cell psp470036-tbl-0002:row18:col5 = '[1.464, 1.716]'
- unparsed cell psp470036-tbl-0002:row19:col5 = '[62.93, 91.07]'
- unparsed cell psp470036-tbl-0002:row21:col5 = '[26.23, 68.17]'
- unparsed cell psp470036-tbl-0002:row22:col5 = '[−0.3445, −0.2395]'
- unparsed cell psp470036-tbl-0002:row24:col5 = '[0.0233, 0.0549]'
- unparsed cell psp470036-tbl-0002:row25:col5 = '[0.6161, 0.9199]'
- unparsed cell psp470036-tbl-0002:row26:col5 = '[0.3416, 0.5744]'
- unparsed cell psp470036-tbl-0002:row27:col5 = '[0.07121, 0.121]'
- unparsed cell psp470036-tbl-0002:row28:col5 = '[0.2413, 0.4687]'
- unparsed cell psp470036-tbl-0002:row29:col5 = '[0.2394, 0.3386]'
- unparsed cell psp470036-tbl-0002:row31:col5 = '[0.3261, 0.3439]'
- unparsed cell psp470036-tbl-0002:row33:col5 = '[0.4131, 0.4349]'
- unparsed cell psp470036-tbl-0002:row34:col5 = '[9.497, 11.7]'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.765 (26/34 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[clmaxage_age_effect_on_clmax]` |  | -0.292 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clqwt_body_weight_on_cl_and_q]` | 0.477 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[f1unknown; bioavailability at unknown food status]` | 0.533 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[tc50 (h); time to achieve half of clmax]` | 47.2 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_age]` | -0.292 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_body_weight]` | 0.962 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q31_body_weight]` |  | 0.477 | only_one_extracted |
| `qwen3.8-27b` | `parameters[vcvpwt_body_weight_effect_on_v2_and_v3]` |  | 0.962 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp470036-tbl-0002:row2:col1', 'psp470036-tbl-0002:row2:col2', 'psp470036-tbl-0002:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp470036-tbl-0002:row5:col1', 'psp470036-tbl-0002:row5:col2', 'psp470036-tbl-0002:row5:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp470036-tbl-0002:row3:col1', 'psp470036-tbl-0002:row3:col2', 'psp470036-tbl-0002:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp470036-tbl-0002:row4:col1', 'psp470036-tbl-0002:row4:col2', 'psp470036-tbl-0002:row4:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['psp470036-tbl-0002:row14:col1', 'psp470036-tbl-0002:row14:col2', 'psp470036-tbl-0002:row14:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.1 | ['psp470036-tbl-0002:row2:col1', 'psp470036-tbl-0002:row2:col2', 'psp470036-tbl-0002:row2:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.1 L/h | ['psp470036-tbl-0002:row2:col1', 'psp470036-tbl-0002:row2:col2', 'psp470036-tbl-0002:row2:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 19.8 L | ['psp470036-tbl-0002:row3:col1', 'psp470036-tbl-0002:row3:col2', 'psp470036-tbl-0002:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 221 L | ['psp470036-tbl-0002:row4:col1', 'psp470036-tbl-0002:row4:col2', 'psp470036-tbl-0002:row4:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=repotrectinib) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | fail | 5 scholar param(s) emitted or defaulted | 4 covered | neither emitted nor in defaulted[]: ['tlag'] |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 1.79 | 0.0002097 | unresolved concentration unit (exp 'fed versus fasted states at steady state', sim 'kg/m3') |
| T1_cmax | reference | skipped | 2.81 | 0.0002097 | unresolved concentration unit (exp 'fed versus fasted states on Day 1', sim 'kg/m3') |
| T1_cmin_ss | reference | skipped | 1.05 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 3.24 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_repotrectinib/Repotrectinib_Du2025_reference/Repotrectinib_Du2025_reference_modelica.zip" download>Repotrectinib_Du2025_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_repotrectinib/Repotrectinib_Du2025_reference/Repotrectinib_Du2025_reference_fmi.zip" download>Repotrectinib_Du2025_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_repotrectinib/Repotrectinib_Du2025_reference/Repotrectinib_Du2025_reference_matlab.zip" download>Repotrectinib_Du2025_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_repotrectinib/Repotrectinib_Du2025_reference/Repotrectinib_Du2025_reference_matlab_simbio.zip" download>Repotrectinib_Du2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_repotrectinib/Repotrectinib_Du2025_reference/Repotrectinib_Du2025_reference_sbml.zip" download>Repotrectinib_Du2025_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_repotrectinib/Repotrectinib_Du2025_reference/Repotrectinib_Du2025_reference_cellml.zip" download>Repotrectinib_Du2025_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3554 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.972e-06 | m3/s |
| input | model | `VdPerKg` | 0.0002829 | m3/kg |
| input | model | `k12` | 6.987e-05 | 1/s |
| input | model | `k21` | 6.259e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Du S, Hu Z, Shen J, Hamuro L, Lam J, Lu M et al. A Novel Empirical Autoinduction Model to Characterize the Population Pharmacokinetics and Recommend Dose for Repotrectinib in Adult and Adolescents With Advanced Solid Tumors Harboring ALK, ROS1, or NTRK1-3 Rearrangements. CPT: pharmacometrics & systems pharmacology 14(7):1179–1190 (2025). [doi:10.1002/psp4.70036](https://doi.org/10.1002/psp4.70036)

**This record:** Pharmacolibrary v26.09, model `Repotrectinib_Du2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_repotrectinib/Repotrectinib_Du2025_reference>

```bibtex
@misc{pharmacolibrary_RepotrectinibDu2025reference,
  title  = {{Pharmacolibrary model Repotrectinib_Du2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_repotrectinib/Repotrectinib_Du2025_reference},
  note   = {Parameters from doi:10.1002/psp4.70036},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_repotrectinib/Repotrectinib_Du2025_reference/Repotrectinib_Du2025_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_repotrectinib/Repotrectinib_Du2025_reference/Repotrectinib_Du2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Repotrectinib_Du2025_reference_params.json` · controls `Repotrectinib_Du2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brepotrectinib%5D%20Repotrectinib_Du2025_reference&body=Drug%3A%20repotrectinib%0ARecord%3A%20Repotrectinib_Du2025_reference%0APaper%3A%20Du_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_repotrectinib/Repotrectinib_Du2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 05:57 UTC</sub>
