<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;tislelizumab&quot;,&quot;href&quot;:&quot;drugs/drug_tislelizumab/&quot;},{&quot;label&quot;:&quot;Liu_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tislelizumab_Kim2025_reference&quot;,&quot;label&quot;:&quot;Kim_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tislelizumab/Tislelizumab_Kim2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tislelizumab — `Tislelizumab_Liu2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.091). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected because apparent parameters for tislelizumab were double-corrected for bioavailability, violating coherence.**

The model structure is defined as two compartments, yet the record includes a third volume of distribution (V3/F) and a third intercompartmental clearance (Q3/F). The clearance (CL/F) and all volume parameters are explicitly defined as adjusted for bioavailability, creating a double correction error. This inconsistency between the stated two-compartment structure and the extracted three-compartment parameters caused the rejection. Extracted — tislelizumab: CL/F 0.153 L/d, V1/F 3.05 L, V2/F 1.27 L, V3/F 2.1 L, Q/F 0.74 L/d, Q3/F 0.092 L/d, kabs 0.189 1/d.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tislelizumab, the second reading unknown; it also differs on 29 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

## Citation
Liu X et al., Model-Informed Development of a Subcuta…, Clinical and translational… (2026)
  ·  DOI: [10.1111/cts.70649](https://doi.org/10.1111/cts.70649)

<div class="pk-model-meta" hidden drug="tislelizumab" model-id="Tislelizumab_Liu2026_reference" status="rejected" stale="false" population="patients with locally advanced or metastatic non-small cell lung cancer" measured-compound="tislelizumab" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 6 covariate effects.

**Parameterization:** CL/F, Q/F, Q3/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/d | `Q27` · CL/F | 0.153 | L/d | 1.7708333333333335e-09 | [l] / [d] | not captured | exact (1.0) | cts70649-tbl-0001:row1:col1 | — | 26.3 (None% RSE) |
| Vc/F, L | `Q290` · V1/F | 3.05 | L | 0.0030499999999999998 | [l] | not captured | exact (1.0) | cts70649-tbl-0001:row2:col1 | — | 16.7 (None% RSE) |
| V2/F, L | `Q82` · V2/F | 1.27 | L | 0.00127 | [l] | not captured | exact (1.0) | cts70649-tbl-0001:row3:col1 | — | 74.7 (None% RSE) |
| V3/F, L | `Q78` · V3/F | 2.1 | L | 0.0021000000000000003 | [l] | not captured | exact (1.0) | cts70649-tbl-0001:row4:col1 | — | 99.9 (None% RSE) |
| Q2/F, L/d | `Q69` · Q/F | 0.74 | L/d | 8.564814814814814e-09 | [l] / [d] | not captured | special_case (0.95) | cts70649-tbl-0001:row5:col1 | — | not captured |
| Q3/F, L/d | `Q309` · Q3/F | 0.092 | L/d | 1.0648148148148147e-09 | [l] / [d] | not captured | exact (1.0) | cts70649-tbl-0001:row6:col1 | — | not captured |
| effect_of_baseline_albumin_on_cl_f | `Q900` · effect_of_baseline_albumin_on_cl_f | -0.457 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70649-tbl-0001:row8:col1 | — | not captured |
| effect_of_baseline_body_weight_on_vc_f | `Q900` · effect_of_baseline_body_weight_on_vc_f | 0.397 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70649-tbl-0001:row13:col1 | — | not captured |
| Ka thigh, 1/d | `Q49` · kabs | 0.189 | 1/d | 2.1875e-06 | [1] / [d] | not captured | llm_confirmed (0.6) | cts70649-tbl-0001:row16:col1 | — | 38.2 (None% RSE) |
| theta_cl_f_weight | `Q900` · theta_cl_f_weight | 0.565 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70649-tbl-0001:row7:col1 | — | not captured |
| theta_cl_f_ada | `Q900` · theta_cl_f_ada | 0.111 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70649-tbl-0001:row10:col1 | — | not captured |
| theta_v1_f_sex | `Q900` · theta_v1_f_sex | -0.116 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70649-tbl-0001:row14:col1 | — | not captured |
| theta_v1_f_age | `Q900` · theta_v1_f_age | 0.0966 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70649-tbl-0001:row15:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('ω (on SD scale)—interindividual variability, %')
- table section iiv: 'Vc/F' routed out of structural estimates ('ω (on SD scale)—interindividual variability, %')
- table section iiv: 'V2/F' routed out of structural estimates ('ω (on SD scale)—interindividual variability, %')
- table section iiv: 'V3/F' routed out of structural estimates ('ω (on SD scale)—interindividual variability, %')
- table section iiv: 'Ka, thigh' routed out of structural estimates ('ω (on SD scale)—interindividual variability, %')
- table section iiv: 'Bioavailability, thigh' routed out of structural estimates ('ω (on SD scale)—interindividual variability, %')
- table section iiv: 'Ka, abdomen' routed out of structural estimates ('ω (on SD scale)—interindividual variability, %')
- table section iiv: 'Bioavailability, abdomen' routed out of structural estimates ('ω (on SD scale)—interindividual variability, %')
- covariate level 'Effect of baseline albumin on CL/F' → Q900:effect_of_baseline_albumin_on_cl_f = -0.457 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'Effect of baseline tumor burden on CL/F' — extend the ontology if this is a real PK parameter (source ['cts70649-tbl-0001:row9:col1'])
- dropped duplicate Q27 ('Effect of gastric cancer status on CL/F', value '0.069') — already have one for this compound
- dropped duplicate Q27 ('Effect of classic Hodgkin lymphoma status on CL/F', value '-0.216') — already have one for this compound
- covariate level 'Effect of baseline body weight on Vc/F' → Q900:effect_of_baseline_body_weight_on_vc_f = 0.397 (linear_fractional on Q27)
- dropped duplicate Q49 ('Ka abdomen, 1/d', value '0.247') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tislelizumab
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- molar mass: none found for 'tislelizumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cts70649-tbl-0001:row16:col3 = '6.1%'
- unparsed cell cts70649-tbl-0001:row17:col3 = '3.2%'
- unparsed cell cts70649-tbl-0001:row18:col3 = '10.9%'
- unparsed cell cts70649-tbl-0001:row19:col3 = '5.9%'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.091 (3/33 fields) | 30 |

<details><summary>30 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bioavailability, abdomen]` | not captured | 0.731 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability, thigh]` | not captured | 0.866 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 0.153 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | 0.153 | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_baseline_albumin_on_cl_f]` | -0.457 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_baseline_body_weight_on_vc_f]` | 0.397 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka thigh]` | 0.189 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka thigh]` | not captured | 0.189 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2/f]` | 0.74 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2/f]` | not captured | 0.74 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q3/f]` | 0.092 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q3/f]` | not captured | 0.092 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_ada]` | 0.111 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_ada]` | not captured | 0.111 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_albumin]` | not captured | -0.457 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_weight]` | 0.565 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_body_weight]` | not captured | 0.397 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q38_weight]` | not captured | 0.565 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_age]` | 0.0966 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_age]` | not captured | 0.0966 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_sex]` | -0.116 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_sex]` | not captured | -0.116 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | 1.27 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | not captured | 1.27 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | 2.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | not captured | 2.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 3.05 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | not captured | 3.05 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tislelizumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | tislelizumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70649-tbl-0001:row1:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70649-tbl-0001:row2:col1'] |
| C5_dimension_Q309 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70649-tbl-0001:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cts70649-tbl-0001:row16:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70649-tbl-0001:row5:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70649-tbl-0001:row4:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70649-tbl-0001:row3:col1'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.866 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.00638 L/h | not captured | not captured | ['cts70649-tbl-0001:row1:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 3.05 L | not captured | not captured | ['cts70649-tbl-0001:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.27 L | not captured | not captured | ['cts70649-tbl-0001:row3:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tislelizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Liu_2026` / `Liu_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:11 UTC</sub>
