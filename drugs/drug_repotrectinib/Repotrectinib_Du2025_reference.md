<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;repotrectinib&quot;,&quot;href&quot;:&quot;drugs/drug_repotrectinib/&quot;},{&quot;label&quot;:&quot;Du_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# repotrectinib — `Repotrectinib_Du2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.765). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (Q), so that value has no SI equivalent. Extracted — repotrectinib: CL 7.1 L/h, V1 19.8 L, V2 221 L, Q 4.98 L, Fab 0.52, tlag 0.421 h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of clmaxage_age_effect_on_clmax: this record has none, the second reading -0.292; it also differs on 7 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Du S et al., A Novel Empirical Autoinduction Model t…, CPT: pharmacometrics & syst… (2025)
  ·  DOI: [10.1002/psp4.70036](https://doi.org/10.1002/psp4.70036)

<div class="pk-model-meta" hidden drug="repotrectinib" model-id="Repotrectinib_Du2025_reference" status="rejected" stale="false" population="adult and adolescent patients with advanced solid tumors" measured-compound="repotrectinib" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 7 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h); systemic clearance | `Q22` · CL | 7.1 | L/h | 1.972222222222222e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | psp470036-tbl-0002:row2:col1 | — | not captured |
| VC(L); central volume | `Q63` · V1 | 19.8 | L | 0.0198 | [l] | not captured | llm_confirmed (0.6) | psp470036-tbl-0002:row3:col1 | — | not captured |
| VP(L); peripheral volume | `Q64` · V2 | 221 | L | 0.221 | [l] | not captured | llm_confirmed (0.6) | psp470036-tbl-0002:row4:col1 | — | not captured |
| Q(L); intercompartmental clearance | `Q30` · Q | 4.98 | L | not captured | [l] | not captured | llm_confirmed (0.6) | psp470036-tbl-0002:row5:col1 | — | not captured |
| F1FASTED; bioavailability at fasted | `Q40` · Fab | 0.52 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | psp470036-tbl-0002:row10:col1 | — | not captured |
| ALAG1 (h); Lag time | `Q83` · tlag | 0.421 | h | 1515.6 | [h] | not captured | llm_confirmed (0.6) | psp470036-tbl-0002:row14:col1 | — | not captured |
| vcvpwt_body_weight_effect_on_v2_and_v3 | `Q900` · vcvpwt_body_weight_effect_on_v2_and_v3 | 0.962 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470036-tbl-0002:row16:col1 | — | not captured |
| theta_q49_fasted_ka_h_absorption_rate_constant_at_fasted | `Q900` · theta_q49_fasted_ka_h_absorption_rate_constant_at_fasted | 0.0541 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470036-tbl-0002:row6:col1 | — | not captured |
| theta_q49_fed_ka_h_absorption_rate_constant_at_fed | `Q900` · theta_q49_fed_ka_h_absorption_rate_constant_at_fed | 0.124 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470036-tbl-0002:row7:col1 | — | not captured |
| theta_q49_fasted_kamodified_hour_absorption_rate_constant_at_modified | `Q900` · theta_q49_fasted_kamodified_hour_absorption_rate_constant_at_modified | 0.141 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470036-tbl-0002:row8:col1 | — | not captured |
| theta_q49_food_kaunknown_h_absorption_rate_constant_at_unknown_status | `Q900` · theta_q49_food_kaunknown_h_absorption_rate_constant_at_unknown_status | 0.193 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470036-tbl-0002:row9:col1 | — | not captured |
| theta_cl_body_weight | `Q900` · theta_cl_body_weight | 0.477 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470036-tbl-0002:row15:col1 | — | not captured |
| theta_q354_age | `Q900` · theta_q354_age | -0.292 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470036-tbl-0002:row22:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- unit_dimension_mismatch: 'Q(L); intercompartmental clearance' → Q30 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- covariate level 'VCVPWT; Body weight effect on V2 and V3' → Q900:vcvpwt_body_weight_effect_on_v2_and_v3 = 0.962 (linear_fractional on Q22)
- dropped duplicate Q64 ('VCPOP; population effct on V2', value '-0.854') — already have one for this compound
- dropped unlinked row (NIL): 'CLMAX; maximum induced clearance' — extend the ontology if this is a real PK parameter (source ['psp470036-tbl-0002:row18:col1'])
- dropped PD-category row 'EC50 (ng/mL); concentration to achieve half of CLMAX' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp470036-tbl-0002:row19:col1'])
- dropped PD-category row 'GAMMA; Hill coefficient' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp470036-tbl-0002:row20:col1'])
- dropped unlinked row (NIL): 'TC50 (h); time to achieve half of CLMAX' — extend the ontology if this is a real PK parameter (source ['psp470036-tbl-0002:row21:col1'])
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q354 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=repotrectinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- table psp470036-tbl-0002: unbound_uncertainty
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
| `qwen3.8-27b` | `parameters[clmaxage_age_effect_on_clmax]` | not captured | -0.292 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clqwt_body_weight_on_cl_and_q]` | 0.477 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[f1unknown; bioavailability at unknown food status]` | 0.533 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[tc50 (h); time to achieve half of clmax]` | 47.2 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_age]` | -0.292 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_body_weight]` | 0.962 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q31_body_weight]` | not captured | 0.477 | only_one_extracted |
| `qwen3.8-27b` | `parameters[vcvpwt_body_weight_effect_on_v2_and_v3]` | not captured | 0.962 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470036-tbl-0002:row2:col1'] |
| C5_dimension_Q30 | fail | [length] ** 3 | L | not captured | not captured | ['psp470036-tbl-0002:row5:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470036-tbl-0002:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470036-tbl-0002:row4:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['psp470036-tbl-0002:row14:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.1 | not captured | not captured | ['psp470036-tbl-0002:row2:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.1 L/h | not captured | not captured | ['psp470036-tbl-0002:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 19.8 L | not captured | not captured | ['psp470036-tbl-0002:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 221 L | not captured | not captured | ['psp470036-tbl-0002:row4:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_repotrectinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Du_2025` / `Du_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 21:03 UTC</sub>
