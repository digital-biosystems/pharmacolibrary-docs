<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;sarilumab&quot;,&quot;href&quot;:&quot;drugs/drug_sarilumab/&quot;},{&quot;label&quot;:&quot;Xu_2019 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sarilumab — `Sarilumab_Xu2019_estimate`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.48). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Sarlumab's Vmax parameter of 8.06 mg/day could not be converted to SI units, causing a dimension mismatch.**

The model for sarilumab includes Vmax with a value of 8.06 mg/day. The review process failed to convert this unit to SI, leaving the parameter without a standard value. This resulted in a dimension mismatch on this structural parameter. Extracted — sarilumab: Vmax 8.06 mg/day, Km 0.939 mg/L, V1/F 2.08 L, CL/F 0.26 L/day, kabs 0.136 day, Q/F 0.156 L/day, V2/F 5.23 L, Vnorm 0.0299.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of ada_effect_on_clo_f: this record has 1.43, the second reading none; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Xu C et al., Population Pharmacokinetics of Sariluma…, Clinical pharmacokinetics (2019)
  ·  DOI: [10.1007/s40262-019-00765-1](https://doi.org/10.1007/s40262-019-00765-1)

<div class="pk-model-meta" hidden drug="sarilumab" model-id="Sarilumab_Xu2019_estimate" status="rejected" stale="false" population="patients with rheumatoid arthritis" measured-compound="sarilumab" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted, plus 5 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vm (mg/day) | `Q66` · Vmax | 8.06 | mg/day | not captured | [mg] / [d] | not captured | special_case (0.95) | Tab3:row2:col1 | — | not captured |
| Km (mg/L) | `Q1` · Km | 0.939 | mg/L | not captured | [mg] / [l] | not captured | exact (1.0) | Tab3:row3:col1 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | 2.08 | L | 0.0020800000000000003 | [l] | not captured | exact (1.0) | Tab3:row4:col1 | — | not captured |
| CLO/F (L/day) | `Q27` · CL/F | 0.260 | L/day | 3.0092592592592598e-09 | [l] / [d] | not captured | llm (0.6) | Tab3:row5:col1 | — | not captured |
| Ka (day) | `Q49` · kabs | 0.136 | day | not captured | [d] | not captured | exact (1.0) | Tab3:row6:col1 | — | not captured |
| Q/F (L/day) | `Q69` · Q/F | 0.156 | L/day | 1.8055555555555555e-09 | [l] / [d] | not captured | exact (1.0) | Tab3:row7:col1 | — | not captured |
| Vp/F (L) | `Q82` · V2/F | 5.23 | L | 0.00523 | [l] | not captured | exact (1.0) | Tab3:row8:col1 | — | not captured |
| wt_effect_on_clo_f | `Q900` · wt_effect_on_clo_f | 0.885 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row9:col1 | — | not captured |
| wt_effect_on_vm | `Q900` · wt_effect_on_vm | 0.516 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row10:col1 | — | not captured |
| ada_effect_on_clo_f | `Q900` · ada_effect_on_clo_f | 1.43 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row14:col1 | — | not captured |
| sex_effect_on_clo_f | `Q900` · sex_effect_on_clo_f | 0.846 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row16:col1 | — | not captured |
| BLCRP effect on Vm | `Q352` · Vnorm | 0.0299 | not captured | not captured | not captured | not captured | llm (0.6) | Tab3:row17:col1 | — | not captured |
| theta_q367_crcl | `Q900` · theta_q367_crcl | 0.212 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row12:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- status held at route_to_review — not promoted
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
| `gpt-oss-120b` | `parameters[ada_effect_on_clo_f]` | 1.43 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[blcrp effect on vm].covariate_forms` | [] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[blcrp effect on vm].parameter_id` | Q352 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[clo/f].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[sex_effect_on_clo_f]` | 0.846 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_ada]` | not captured | 1.43 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_sex]` | not captured | 0.846 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_wt]` | not captured | 0.885 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q367_crcl]` | 0.212 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_crcl]` | not captured | 0.212 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_wt]` | not captured | 0.516 | only_one_extracted |
| `gpt-oss-120b` | `parameters[wt_effect_on_clo_f]` | 0.885 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[wt_effect_on_vm]` | 0.516 | not captured | only_one_extracted |

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
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab3:row3:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row5:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row4:col1'] |
| C5_dimension_Q49 | fail | [time] | day | not captured | not captured | ['Tab3:row6:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/day | not captured | not captured | ['Tab3:row2:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row7:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row8:col1'] |
| C5_unit_missing_Q352 | fail | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row17:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0108 L/h | not captured | not captured | ['Tab3:row5:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.08 L | not captured | not captured | ['Tab3:row4:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 5.23 L | not captured | not captured | ['Tab3:row8:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_sarilumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Xu_2019` / `Xu_2019::estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:26 UTC</sub>
