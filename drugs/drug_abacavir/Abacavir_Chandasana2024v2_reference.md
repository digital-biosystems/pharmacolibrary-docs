<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;abacavir&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/&quot;},{&quot;label&quot;:&quot;Chandasana_2024_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Abacavir_Chupradit2024_reference&quot;,&quot;label&quot;:&quot;Chupradit_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Chupradit2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Fauchet2014_reference&quot;,&quot;label&quot;:&quot;Fauchet_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Fauchet2014_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Zhang2015_reference&quot;,&quot;label&quot;:&quot;Zhang_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Zhang2015_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Ji2024_reference&quot;,&quot;label&quot;:&quot;Ji_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Ji2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abacavir — `Abacavir_Chandasana2024v2_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667), gpt-oss:120b (not confirmed, agreement 0.893). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The abacavir children's HIV-1 model was held back because kabs and V/F carry no unit, so their values (2.08 h−1, 32.7 l) cannot be converted to SI.**

Kabs and V/F have no unit; without a unit the values cannot be converted, so the model cannot use them. The record also lists conflicting weight-exponent values for the same covariate effects (0.794, 0.455, 0.758 for clearance; 0.556 versus 0.698 for volume), and a second reader assigned 0.698 to the volume exponent while this record gives 0.556. The weight-based consistency check could not compute a comparison (ratio None), so it is inconclusive rather than a demonstrated fault. The dose compound is also disputed: abacavir versus abacavir/dolutegravir/lamivudine. Extracted — abacavir: CL/F 16.3 L/h, V2/F 10.1 l, kabs 2.08, Q/F 1.69 l/h, V3/F 23 l, Fab 1.62, V1/F 23.1 l, V/F 32.7, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has abacavir/dolutegravir/lamivudine FDC, the second reading abacavir/dolutegravir/lamivudine fixed-dose combination; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:35:50.746810+00:00) predates the upstream re-run (2026-10-07 14:49:32.511034+00:00). Current validate status: `needs_review`.

> **Dose compound ≠ measured compound:** dosed `abacavir/dolutegravir/lamivudine FDC`, measured `abacavir`.

## Citation
Chandasana H et al., Population Pharmacokinetic Modeling of…, Infectious diseases and the… (2024)
  ·  DOI: [10.1007/s40121-024-01008-y](https://doi.org/10.1007/s40121-024-01008-y)

## Model component
<dbs-pgx drug="abacavir" model-id="Abacavir_Chandasana2024v2_reference" status="needs_review" stale="true" population="children with HIV-1 (IMPAACT 2019)" measured-compound="abacavir" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted, plus 6 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Apparent clearance, CL/F [L/h] | `Q27` · CL/F | 16.3 | L/h | 4.527777777777778e-06 | [l] / [h] | 3.62 | llm_confirmed (0.6) | Chandasana_2024_2_table_1:row0:col1 | — | 36.3 (None% RSE) |
| Apparent central volume of distribution, V2/F [l] | `Q82` · V2/F | 10.1 | l | 0.0101 | [l] | 7.56 | llm_corrected (0.6) | Chandasana_2024_2_table_1:row1:col1 | — | 51.9 (None% RSE) |
| Absorption rate constant, KA [h−1] | `Q49` · kabs | 2.08 | 1/h | 0.0005777777777777778 | 1/h | 2.31 | llm_confirmed (0.6) | Chandasana_2024_2_table_1:row2:col1, Chandasana_2024_2_table_3:row0:col1 | — | 107 (None% RSE) |
| Intercompartment clearance, Q/F [l/h] | `Q69` · Q/F | 1.69 | l/h | 4.694444444444444e-07 | [l] / [h] | 7.87 | llm_corrected (0.6) | Chandasana_2024_2_table_1:row3:col1 | — | 67.9 (None% RSE) |
| Apparent peripheral compartment volume of distribution, V3/F [l] | `Q78` · V3/F | 23.0 | l | 0.023 | [l] | 17.4 | llm_corrected (0.6) | Chandasana_2024_2_table_1:row4:col1 | — | 91.9 (None% RSE) |
| F, tablet ARROW PK Substudy Part 2 | `Q40` · Fab | 1.62 | not captured | not captured | not captured | 8.02 | llm (0.6) | Chandasana_2024_2_table_1:row5:col1 | — | not captured |
| Apparent central volume of distribution, V/F [l] | `Q290` · V1/F | 23.1 | l | 0.023100000000000002 | [l] | 2.42 | llm_confirmed (0.6) | Chandasana_2024_2_table_2:row1:col1, Chandasana_2024_2_table_3:row2:col1 | — | not captured |
| Maturation half time, TM50 [PMA weeks] | `Q900` · equation variable | 52.2 | FMAT | not captured | [fmat] | not captured | llm (0.6) | Chandasana_2024_2_table_2:row10:col1 | — | not captured |
| Lag time ALAG1 (h) | `Q83` · tlag | 0.297 | h | 1069.2 | [h] | 12.1 | llm_confirmed (0.6) | Chandasana_2024_2_table_3:row1:col1 | — | not captured |
| theta_cl_f_wt_power | `Q900` · theta_cl_f_wt_power | 0.794 | not captured | not captured | not captured | not captured | not captured (not captured) | Chandasana_2024_2_table_1:row7:col1 | — | not captured |
| theta_v2_f_wt_power | `Q900` · theta_v2_f_wt_power | 0.698 | not captured | not captured | not captured | not captured | not captured (not captured) | Chandasana_2024_2_table_1:row8:col1 | — | not captured |
| theta_cl_f_wt_power | `Q900` · theta_cl_f_wt_power | 0.455 | not captured | not captured | not captured | 4.15 | not captured (not captured) | Chandasana_2024_2_table_2:row7:col1 | — | not captured |
| theta_q353_wt_power | `Q900` · theta_q353_wt_power | 0.556 | not captured | not captured | not captured | 3.87 | not captured (not captured) | Chandasana_2024_2_table_2:row8:col1 | — | not captured |
| theta_cl_f_wt_power | `Q900` · theta_cl_f_wt_power | 0.758 | not captured | not captured | not captured | 7.07 | not captured (not captured) | Chandasana_2024_2_table_3:row6:col1 | — | not captured |
| theta_q76_wt_power | `Q900` · theta_q76_wt_power | 0.677 | not captured | not captured | not captured | 8.98 | not captured (not captured) | Chandasana_2024_2_table_3:row7:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Q/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V2/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V3/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'CL/F' routed out of structural estimates ('Interindividual variability')
- table section iov: 'IOV-CL/F' routed out of structural estimates ('Interoccasion variability')
- table section iiv: 'V/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'KA' routed out of structural estimates ('Interindividual variability')
- table section iov: 'IOV-KA' routed out of structural estimates ('Interoccasion variability')
- table section iov: 'IOV-V/F' routed out of structural estimates ('Interoccasion variability')
- table section iov: 'IOVKA' routed out of structural estimates ('Interoccasion variability')
- table section residual_error: 'Additive error [mg/l]' routed out of structural estimates ('Residual error')
- column 'auc0–24(µg*h/ml)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'c24(µg/ml)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Weight bands' — extend the ontology if this is a real PK parameter (source ['Tab4:row0:col3', 'Tab4:row0:col4'])
- dropped duplicate Q27 ('Apparent clearance, CL/F [l/h]', value '9.16') — already have one for this compound
- dropped duplicate Q49 ('Absorption rate constant, KA, FCT [h−1]', value '0.854') — already have one for this compound
- dropped duplicate Q49 ('Absorption rate constant, KA ~ DT and granules [h−1]', value '2.04') — already have one for this compound
- unit_dimension_unknown: 'FMAT' (equation variable)
- dropped PD-category row 'Hill coefficient related to the slope of the enzyme maturation process' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Chandasana_2024_2_table_2:row11:col1'])
- covariate category for Ct from footnote/prose kept as documentation only (['Tab4:footnote'])
- NIL: refused to back-fill base 'AUC' from footnote/prose loose number 37 (source ['Tab4:footnote']); the table cell was unparseable — needs review
- covariate category for AUC from footnote/prose kept as documentation only (['Tab4:footnote'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 6.3 (source ['Tab4:footnote']); the table cell was unparseable — needs review
- covariate effect for Q353 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q76 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Absorption rate constant, KA [h−1]' → 1/h (from the paper text: 'Table 2 footnote/parameter list states KA [h−1] = 2.08, i.e., reciprocal hours.')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=abacavir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- companion parameter table 1 transcribed (14 record(s))
- companion parameter table 2 transcribed (18 record(s))
- companion parameter table 3 transcribed (16 record(s))
- LLM selected parameter table(s) 1, 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (22/33 fields) | 11 |
| `gpt-oss:120b` | not confirmed | 0.893 (25/28 fields) | 3 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant, ka [h-1]].value` | 2.08 | 0.85 | mismatch |
| `gpt-oss-120b` | `parameters[apparent central volume of distribution, v/f [l]].covariate_forms` | [] | ['power', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[apparent central volume of distribution, v/f [l]].parameter_id` | Q290 | Q76 | mismatch |
| `gpt-oss-120b` | `parameters[apparent central volume of distribution, v/f [l]].value` | 23.1 | 13.6 | mismatch |
| `gpt-oss-120b` | `parameters[f, solution arrow pk substudy part 2]` | not captured | 1.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f, tablet arrow pk substudy part 2].parameter_id` | Q40 | Q87 | mismatch |
| `gpt-oss-120b` | `parameters[maturation half time, tm50 [pma weeks]]` | 52.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q353_wt_power]` | 0.556 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_wt_power]` | 0.677 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_f_wt_power]` | not captured | 0.556 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | abacavir/dolutegravir/lamivudine FDC | abacavir/dolutegravir/lamivudine fixed-dose combination | mismatch |
| `gpt-oss:120b` | `parameters[absolute bioavailability (f1) solution po]` | not captured | 0.496 | only_one_extracted |
| `gpt-oss:120b` | `parameters[f, tablet arrow pk substudy part 2].parameter_id` | Q40 | Q87 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | abacavir | abacavir/dolutegravir/lamivudine fixed-dose combination | mismatch |

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
| C2_center_consistency_wt | fail | not captured | [15.6, 18.5, 70.0] | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Chandasana_2024_2_table_1:row0:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Chandasana_2024_2_table_2:row1:col1', 'Chandasana_2024_2_table_3:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Chandasana_2024_2_table_1:row2:col1', 'Chandasana_2024_2_table_3:row0:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Chandasana_2024_2_table_1:row3:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Chandasana_2024_2_table_1:row4:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Chandasana_2024_2_table_1:row1:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Chandasana_2024_2_table_3:row1:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 16.3 L/h | not captured | not captured | ['Chandasana_2024_2_table_1:row0:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 23.1 L | not captured | not captured | ['Chandasana_2024_2_table_2:row1:col1', 'Chandasana_2024_2_table_3:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 10.1 L | not captured | not captured | ['Chandasana_2024_2_table_1:row1:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_abacavir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chandasana_2024_2` / `Chandasana_2024_2::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 14:49 UTC</sub>
