<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;sarilumab&quot;,&quot;href&quot;:&quot;drugs/drug_sarilumab/&quot;},{&quot;label&quot;:&quot;Xu_2019 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sarilumab — `Sarilumab_Xu2019_estimate`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Sarlumab's Vmax parameter of 8.06 mg/day could not be converted to SI units, causing a dimension mismatch.

<div class="pk-model-meta" hidden drug="sarilumab" model-id="Sarilumab_Xu2019_estimate" status="rejected" stale="false" population="patients with rheumatoid arthritis" measured-compound="sarilumab" parameterization="apparent" topology="2C"></div>

## Citation
Xu C, Su Y, Paccaly A, Kanamaluru V. Population Pharmacokinetics of Sarilumab in Patients with Rheumatoid Arthritis. Clinical pharmacokinetics 58(11):1455–1467 (2019).
  ·  DOI: [10.1007/s40262-019-00765-1](https://doi.org/10.1007/s40262-019-00765-1)

## Population and dosing

**Population:** patients with rheumatoid arthritis · age group adult · n = &gt;24.

**Dosing:** 50, 200 mg, subcutaneous, multiple, every 168 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 5 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vm (mg/day) | Vmax | 8.06 | mg/day |
| Km (mg/L) | Km | 0.939 | mg/L |
| Vc/F (L) | V1/F | 2.08 | L |
| CLO/F (L/day) | CL/F | 0.260 | L/day |
| Ka (day) | kabs | 0.136 | day |
| Q/F (L/day) | Q/F | 0.156 | L/day |
| Vp/F (L) | V2/F | 5.23 | L |
| wt_effect_on_clo_f | wt_effect_on_clo_f | 0.885 |  |
| wt_effect_on_vm | wt_effect_on_vm | 0.516 |  |
| ada_effect_on_clo_f | ada_effect_on_clo_f | 1.43 |  |
| sex_effect_on_clo_f | sex_effect_on_clo_f | 0.846 |  |
| BLCRP effect on Vm | Vnorm | 0.0299 |  |
| theta_q367_crcl | theta_q367_crcl | 0.212 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.48). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Sarlumab's Vmax parameter of 8.06 mg/day could not be converted to SI units, causing a dimension mismatch.**

The model for sarilumab includes Vmax with a value of 8.06 mg/day. The review process failed to convert this unit to SI, leaving the parameter without a standard value. This resulted in a dimension mismatch on this structural parameter. Extracted — sarilumab: Vmax 8.06 mg/day, Km 0.939 mg/L, V1/F 2.08 L, CL/F 0.26 L/day, kabs 0.136 day, Q/F 0.156 L/day, V2/F 5.23 L, Vnorm 0.0299.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of ada_effect_on_clo_f: this record has 1.43, the second reading none; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vm (mg/day) | `Q66` · Vmax | 8.06 | mg/day |  |  | mg/d | special_case (0.95) | Tab3:row2:col1 |
| Km (mg/L) | `Q1` · Km | 0.939 | mg/L |  |  | mg/l | exact (1) | Tab3:row3:col1 |
| Vc/F (L) | `Q290` · V1/F | 2.08 | L | 0.00208 | m3 | l | exact (1) | Tab3:row4:col1 |
| CLO/F (L/day) | `Q27` · CL/F | 0.260 | L/day | 3.009e-09 | m3/s | l/d | llm (0.6) | Tab3:row5:col1 |
| Ka (day) | `Q49` · kabs | 0.136 | day |  |  | d | exact (1) | Tab3:row6:col1 |
| Q/F (L/day) | `Q69` · Q/F | 0.156 | L/day | 1.806e-09 | m3/s | l/d | exact (1) | Tab3:row7:col1 |
| Vp/F (L) | `Q82` · V2/F | 5.23 | L | 0.00523 | m3 | l | exact (1) | Tab3:row8:col1 |
| wt_effect_on_clo_f | `Q900` · wt_effect_on_clo_f | 0.885 |  |  |  |  |  | Tab3:row9:col1 |
| wt_effect_on_vm | `Q900` · wt_effect_on_vm | 0.516 |  |  |  |  |  | Tab3:row10:col1 |
| ada_effect_on_clo_f | `Q900` · ada_effect_on_clo_f | 1.43 |  |  |  |  |  | Tab3:row14:col1 |
| sex_effect_on_clo_f | `Q900` · sex_effect_on_clo_f | 0.846 |  |  |  |  |  | Tab3:row16:col1 |
| BLCRP effect on Vm | `Q352` · Vnorm | 0.0299 |  |  |  |  | llm (0.6) | Tab3:row17:col1 |
| theta_q367_crcl | `Q900` · theta_q367_crcl | 0.212 |  |  |  |  |  | Tab3:row12:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Vma' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'CLO/Fa' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'Vc/Fa' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'Kaa' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section residual_error: 'σ2c' routed out of structural estimates ('Residual variability (CV%)')
- unit_dimension_mismatch: 'Vm (mg/day)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Ka (day)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- covariate level 'WT effect on CLO/F' → Q900:wt_effect_on_clo_f = 0.885 (linear_fractional on Q27)
- covariate level 'WT effect on Vm' → Q900:wt_effect_on_vm = 0.516 (linear_fractional on Q27)
- dropped duplicate Q49 ('DP2 effect on Ka', value '0.663') — already have one for this compound
- covariate level 'ADA effect on CLO/F' → Q900:ada_effect_on_clo_f = 1.43 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'DP2 effect on CLO/F' — extend the ontology if this is a real PK parameter (source ['Tab3:row15:col1'])
- covariate level 'Sex effect on CLO/F' → Q900:sex_effect_on_clo_f = 0.846 (linear_fractional on Q27)
- covariate effect for Q367 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sarilumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'estimate' subgroup of Xu_2019 (paper reports 3 populations: estimate, sarilumab150 mg q2w, sarilumab200 mg q2w)
- molar mass: none found for 'sarilumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab3:row11:col1 = '− 0.844'
- unparsed cell Tab3:row23:col1 = '− 0.566'
- companion parameter table 4 transcribed (6 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.48 (12/25 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ada_effect_on_clo_f]` | 1.43 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[blcrp effect on vm].covariate_forms` | [] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[blcrp effect on vm].parameter_id` | Q352 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[clo/f].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[sex_effect_on_clo_f]` | 0.846 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_ada]` |  | 1.43 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_sex]` |  | 0.846 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_wt]` |  | 0.885 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q367_crcl]` | 0.212 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_crcl]` |  | 0.212 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_wt]` |  | 0.516 | only_one_extracted |
| `gpt-oss-120b` | `parameters[wt_effect_on_clo_f]` | 0.885 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[wt_effect_on_vm]` | 0.516 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Tab3:row3:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row5:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab3:row4:col1'] |
| C5_dimension_Q49 | fail | [time] | day | ['Tab3:row6:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/day | ['Tab3:row2:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab3:row7:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab3:row8:col1'] |
| C5_unit_missing_Q352 | fail | [length] ** 3 |  | ['Tab3:row17:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0108 L/h | ['Tab3:row5:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.08 L | ['Tab3:row4:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 5.23 L | ['Tab3:row8:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsarilumab%5D%20Sarilumab_Xu2019_estimate&body=Drug%3A%20sarilumab%0ARecord%3A%20Sarilumab_Xu2019_estimate%0APaper%3A%20Xu_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sarilumab/Sarilumab_Xu2019_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 00:26 UTC</sub>
