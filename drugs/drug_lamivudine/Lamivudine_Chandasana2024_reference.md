<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;lamivudine&quot;,&quot;href&quot;:&quot;drugs/drug_lamivudine/&quot;},{&quot;label&quot;:&quot;Chandasana_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lamivudine_Chandasana2024v2_reference&quot;,&quot;label&quot;:&quot;Chandasana_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lamivudine/Lamivudine_Chandasana2024v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lamivudine — `Lamivudine_Chandasana2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Apparent clearance was doubly corrected by an explicit bioavailability parameter, and a peripheral compartment lacks a connection from the central compartment.

<div class="pk-model-meta" hidden drug="lamivudine" model-id="Lamivudine_Chandasana2024_reference" status="rejected" stale="false" population="children with HIV-1" measured-compound="lamivudine" parameterization="apparent" topology="general_linear"></div>

## Citation
Chandasana H, van Dijkman SC, Mehta R, Bush M, Rabie H, Flynn P et al. Population Pharmacokinetic Modeling of Abacavir/Dolutegravir/Lamivudine to Support a Fixed-Dose Combination in Children with HIV-1. Infectious diseases and therapy 13(8):1877–1891 (2024).
  ·  DOI: [10.1007/s40121-024-01008-y](https://doi.org/10.1007/s40121-024-01008-y)

## Population and dosing

**Population:** children with HIV-1 · condition HIV-1 · age group child.

**Dosed compound ≠ measured compound:** dosed abacavir/dolutegravir/lamivudine fixed-dose combination, measured lamivudine.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted, plus 4 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Absorption rate constant, KA [h−1] | kabs | 0.85 | 1/h | 9.76 | 76.5 (None% RSE) |
| Lag time ALAG1 (h) | tlag | 0.297 | h | 12.1 |  |
| Apparent central volume of distribution, V/F [l] | V1/F | 13.6 | l | 4.68 |  |
| Apparent clearance, CL/F [l/h] | CL/F | 1.03 | l/h | 4.49 | 28.6 (None% RSE) |
| Absolute bioavailability (F1) solution PO | Fab | 0.496 |  | 5.36 |  |
| Apparent central volume of distribution, V2/F [l] | V2/F | 10.1 | l | 7.56 | 51.9 (None% RSE) |
| Intercompartment clearance, Q/F [l/h] | Q/F | 1.69 | l/h | 7.87 | 67.9 (None% RSE) |
| Apparent peripheral compartment volume of distribution, V3/F [l] | V3/F | 23.0 | l | 17.4 | 91.9 (None% RSE) |
| Maturation half time, TM50 [PMA weeks] | t1/2z | 52.2 | weeks |  |  |
| theta_cl_f_wt_power | theta_cl_f_wt_power | 0.758 |  | 7.07 |  |
| theta_q319_wt_power | theta_q319_wt_power | 0.794 |  |  |  |
| theta_cl_f_wt_power | theta_cl_f_wt_power | 0.455 |  | 4.15 |  |
| theta_q76_wt_power | theta_q76_wt_power | 0.556 |  | 3.87 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.677). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Apparent clearance was doubly corrected by an explicit bioavailability parameter, and a peripheral compartment lacks a connection from the central compartment.**

The record includes apparent clearance (1.03 l/h) and an absolute bioavailability value (0.496), which violates apparent-parameter coherence by double correcting for bioavailability. Additionally, the model structure features an unreachable peripheral compartment with no path from the dose. A missing unit conversion for a reported parameter also prevented the model from reaching a final state. Extracted — lamivudine: kabs 0.85 1/h, tlag 0.297 h, V1/F 13.6 l, CL/F 1.03 l/h, Fab 0.496, V2/F 10.1 l, Q/F 1.69 l/h, V3/F 23 l, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has abacavir/dolutegravir/lamivudine fixed-dose combination, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant, KA [h−1] | `Q49` · kabs | 0.85 | 1/h | 0.0002361 | 1/s | 1/h | 9.76 | llm_confirmed (0.6) | Tab3:row1:col1, Chandasana_2024_table_1:row2:col1 | 76.5 (None% RSE) |
| Lag time ALAG1 (h) | `Q83` · tlag | 0.297 | h | 1069 | s | h | 12.1 | llm_confirmed (0.6) | Tab3:row2:col1 |  |
| Apparent central volume of distribution, V/F [l] | `Q290` · V1/F | 13.6 | l | 0.0136 | m3 | l | 4.68 | llm_confirmed (0.6) | Tab3:row3:col1, Chandasana_2024_table_2:row1:col1 |  |
| Apparent clearance, CL/F [l/h] | `Q27` · CL/F | 1.03 | l/h | 2.861e-07 | m3/s | l/h | 4.49 | llm_confirmed (0.6) | Tab3:row4:col1, Chandasana_2024_table_2:row0:col1 | 28.6 (None% RSE) |
| Absolute bioavailability (F1) solution PO | `Q40` · Fab | 0.496 |  |  |  |  | 5.36 | llm_confirmed (0.6) | Tab3:row5:col1 |  |
| Apparent central volume of distribution, V2/F [l] | `Q82` · V2/F | 10.1 | l | 0.0101 | m3 | l | 7.56 | llm_corrected (0.6) | Chandasana_2024_table_1:row1:col1 | 51.9 (None% RSE) |
| Intercompartment clearance, Q/F [l/h] | `Q69` · Q/F | 1.69 | l/h | 4.694e-07 | m3/s | l/h | 7.87 | llm_corrected (0.6) | Chandasana_2024_table_1:row3:col1 | 67.9 (None% RSE) |
| Apparent peripheral compartment volume of distribution, V3/F [l] | `Q78` · V3/F | 23.0 | l | 0.023 | m3 | l | 17.4 | llm_corrected (0.6) | Chandasana_2024_table_1:row4:col1 | 91.9 (None% RSE) |
| Maturation half time, TM50 [PMA weeks] | `Q57` · t1/2z | 52.2 | weeks |  |  | weeks |  | llm (0.6) | Chandasana_2024_table_2:row10:col1 |  |
| theta_cl_f_wt_power | `Q900` · theta_cl_f_wt_power | 0.758 |  |  |  |  | 7.07 |  | Tab3:row7:col1 |  |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | 0.794 |  |  |  |  |  |  | Chandasana_2024_table_1:row7:col1 |  |
| theta_cl_f_wt_power | `Q900` · theta_cl_f_wt_power | 0.455 |  |  |  |  | 4.15 |  | Chandasana_2024_table_2:row7:col1 |  |
| theta_q76_wt_power | `Q900` · theta_q76_wt_power | 0.556 |  |  |  |  | 3.87 |  | Chandasana_2024_table_2:row8:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'KA' routed out of structural estimates ('Interindividual variability')
- table section iov: 'IOV-CL/F' routed out of structural estimates ('Interoccasion variability')
- table section iov: 'IOV-V/F' routed out of structural estimates ('Interoccasion variability')
- table section iov: 'IOVKA' routed out of structural estimates ('Interoccasion variability')
- table section residual_error: 'Additive error [mg/l]' routed out of structural estimates ('Residual error')
- table section iiv: 'Q/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V2/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V3/F' routed out of structural estimates ('Interindividual variability')
- table section iov: 'IOV-KA' routed out of structural estimates ('Interoccasion variability')
- dropped unlinked row (NIL): 'VL/F ~ (WT/18.5)' — extend the ontology if this is a real PK parameter (source ['Tab3:row8:col1'])
- dropped duplicate Q27 ('Apparent clearance, CL/F [L/h]', value '16.3') — already have one for this compound
- dropped unlinked row (NIL): 'V/2F ~ (WT/15.6)' — extend the ontology if this is a real PK parameter (source ['Chandasana_2024_table_1:row8:col1'])
- dropped duplicate Q49 ('Absorption rate constant, KA, FCT [h−1]', value '0.854') — already have one for this compound
- dropped duplicate Q49 ('Absorption rate constant, KA ~ DT and granules [h−1]', value '2.04') — already have one for this compound
- unit_dimension_unknown: 'FMAT' (t1/2z)
- dropped PD-category row 'Hill coefficient related to the slope of the enzyme maturation process' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Chandasana_2024_table_2:row11:col1'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q76 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Absorption rate constant, KA [h−1]' → 1/h (from the paper text: "Table 1 row: 'Absorption rate constant, KA [h−1]'")
- implicit units: 'Maturation half time, TM50 [PMA weeks]' → weeks (from the paper text: "Table 2 caption/footnote: 'TM50HILL... PMA (weeks)'")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lamivudine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted

**Extraction notes:**
- companion parameter table 1 transcribed (14 record(s))
- companion parameter table 2 transcribed (18 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.677 (21/31 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['none', 'none', 'none']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[apparent clearance, cl/f [l/h]].covariate_forms` | ['power', 'power'] | ['power', 'power', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[f, tablet arrow pk substudy part 2]` |  | 1.62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[maturation half time, tm50 [pma weeks]].parameter_id` | Q57 | Q73 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q319_wt_power]` | 0.794 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_wt_power]` |  | 0.698 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_wt_power].rse_percent` | 3.87 | 8.98 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q76_wt_power].value` | 0.556 | 0.677 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | abacavir/dolutegravir/lamivudine fixed-dose combination | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | lamivudine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_center_consistency_wt | fail |  | [18.5, 70.0] |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row4:col1', 'Chandasana_2024_table_2:row0:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab3:row3:col1', 'Chandasana_2024_table_2:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab3:row1:col1', 'Chandasana_2024_table_1:row2:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Chandasana_2024_table_2:row10:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Chandasana_2024_table_1:row3:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Chandasana_2024_table_1:row4:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Chandasana_2024_table_1:row1:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab3:row2:col1'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.496 with apparent parameterization |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.03 L/h | ['Tab3:row4:col1', 'Chandasana_2024_table_2:row0:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 13.6 L | ['Tab3:row3:col1', 'Chandasana_2024_table_2:row1:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 10.1 L | ['Chandasana_2024_table_1:row1:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blamivudine%5D%20Lamivudine_Chandasana2024_reference&body=Drug%3A%20lamivudine%0ARecord%3A%20Lamivudine_Chandasana2024_reference%0APaper%3A%20Chandasana_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lamivudine/Lamivudine_Chandasana2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 13:08 UTC</sub>
