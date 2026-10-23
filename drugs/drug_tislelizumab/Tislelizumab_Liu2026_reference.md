<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;tislelizumab&quot;,&quot;href&quot;:&quot;drugs/drug_tislelizumab/&quot;},{&quot;label&quot;:&quot;Liu_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tislelizumab_Kim2025_reference&quot;,&quot;label&quot;:&quot;Kim_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tislelizumab/Tislelizumab_Kim2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tislelizumab — `Tislelizumab_Liu2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because apparent parameters for tislelizumab were double-corrected for bioavailability, violating coherence.

<div class="pk-model-meta" hidden drug="tislelizumab" model-id="Tislelizumab_Liu2026_reference" status="rejected" stale="false" population="patients with locally advanced or metastatic non-small cell lung cancer" measured-compound="tislelizumab" parameterization="apparent" topology="2C"></div>

## Citation
Liu X, Guan Y, Liu Y, Yu T, Abdrashitov R, Niu Z et al. Model-Informed Development of a Subcutaneous Formulation of Tislelizumab: Phase 1 Pharmacokinetics in Patients With Cancer. Clinical and translational science 19(7):e70649 (2026).
  ·  DOI: [10.1111/cts.70649](https://doi.org/10.1111/cts.70649)

## Population and dosing

**Population:** patients with locally advanced or metastatic non-small cell lung cancer · condition non-small cell lung cancer · age group adult.

**Dosing:** 200, 300 mg, subcutaneous, intravenous, multiple, every 21 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, Q3/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 6 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F, L/d | CL/F | 0.153 | L/d | 26.3 (None% RSE) |
| Vc/F, L | V1/F | 3.05 | L | 16.7 (None% RSE) |
| V2/F, L | V2/F | 1.27 | L | 74.7 (None% RSE) |
| V3/F, L | V3/F | 2.1 | L | 99.9 (None% RSE) |
| Q2/F, L/d | Q/F | 0.74 | L/d |  |
| Q3/F, L/d | Q3/F | 0.092 | L/d |  |
| effect_of_baseline_albumin_on_cl_f | effect_of_baseline_albumin_on_cl_f | -0.457 |  |  |
| effect_of_baseline_body_weight_on_vc_f | effect_of_baseline_body_weight_on_vc_f | 0.397 |  |  |
| Ka thigh, 1/d | kabs | 0.189 | 1/d | 38.2 (None% RSE) |
| theta_cl_f_weight | theta_cl_f_weight | 0.565 |  |  |
| theta_cl_f_ada | theta_cl_f_ada | 0.111 |  |  |
| theta_v1_f_sex | theta_v1_f_sex | -0.116 |  |  |
| theta_v1_f_age | theta_v1_f_age | 0.0966 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.091). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because apparent parameters for tislelizumab were double-corrected for bioavailability, violating coherence.**

The model structure is defined as two compartments, yet the record includes a third volume of distribution (V3/F) and a third intercompartmental clearance (Q3/F). The clearance (CL/F) and all volume parameters are explicitly defined as adjusted for bioavailability, creating a double correction error. This inconsistency between the stated two-compartment structure and the extracted three-compartment parameters caused the rejection. Extracted — tislelizumab: CL/F 0.153 L/d, V1/F 3.05 L, V2/F 1.27 L, V3/F 2.1 L, Q/F 0.74 L/d, Q3/F 0.092 L/d, kabs 0.189 1/d.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tislelizumab, the second reading unknown; it also differs on 29 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/d | `Q27` · CL/F | 0.153 | L/d | 1.771e-09 | m3/s | l/d | exact (1) | cts70649-tbl-0001:row1:col1 | 26.3 (None% RSE) |
| Vc/F, L | `Q290` · V1/F | 3.05 | L | 0.00305 | m3 | l | exact (1) | cts70649-tbl-0001:row2:col1 | 16.7 (None% RSE) |
| V2/F, L | `Q82` · V2/F | 1.27 | L | 0.00127 | m3 | l | exact (1) | cts70649-tbl-0001:row3:col1 | 74.7 (None% RSE) |
| V3/F, L | `Q78` · V3/F | 2.1 | L | 0.0021 | m3 | l | exact (1) | cts70649-tbl-0001:row4:col1 | 99.9 (None% RSE) |
| Q2/F, L/d | `Q69` · Q/F | 0.74 | L/d | 8.565e-09 | m3/s | l/d | special_case (0.95) | cts70649-tbl-0001:row5:col1 |  |
| Q3/F, L/d | `Q309` · Q3/F | 0.092 | L/d | 1.065e-09 | m3/s | l/d | exact (1) | cts70649-tbl-0001:row6:col1 |  |
| effect_of_baseline_albumin_on_cl_f | `Q900` · effect_of_baseline_albumin_on_cl_f | -0.457 |  |  |  |  |  | cts70649-tbl-0001:row8:col1 |  |
| effect_of_baseline_body_weight_on_vc_f | `Q900` · effect_of_baseline_body_weight_on_vc_f | 0.397 |  |  |  |  |  | cts70649-tbl-0001:row13:col1 |  |
| Ka thigh, 1/d | `Q49` · kabs | 0.189 | 1/d | 2.187e-06 | 1/s | 1/d | llm_confirmed (0.6) | cts70649-tbl-0001:row16:col1 | 38.2 (None% RSE) |
| theta_cl_f_weight | `Q900` · theta_cl_f_weight | 0.565 |  |  |  |  |  | cts70649-tbl-0001:row7:col1 |  |
| theta_cl_f_ada | `Q900` · theta_cl_f_ada | 0.111 |  |  |  |  |  | cts70649-tbl-0001:row10:col1 |  |
| theta_v1_f_sex | `Q900` · theta_v1_f_sex | -0.116 |  |  |  |  |  | cts70649-tbl-0001:row14:col1 |  |
| theta_v1_f_age | `Q900` · theta_v1_f_age | 0.0966 |  |  |  |  |  | cts70649-tbl-0001:row15:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `gpt-oss-120b` | `parameters[bioavailability, abdomen]` |  | 0.731 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability, thigh]` |  | 0.866 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 0.153 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 0.153 | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_baseline_albumin_on_cl_f]` | -0.457 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_baseline_body_weight_on_vc_f]` | 0.397 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka thigh]` | 0.189 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka thigh]` |  | 0.189 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2/f]` | 0.74 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2/f]` |  | 0.74 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q3/f]` | 0.092 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q3/f]` |  | 0.092 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_ada]` | 0.111 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_ada]` |  | 0.111 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_albumin]` |  | -0.457 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_weight]` | 0.565 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_body_weight]` |  | 0.397 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q38_weight]` |  | 0.565 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_age]` | 0.0966 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_age]` |  | 0.0966 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_sex]` | -0.116 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_sex]` |  | -0.116 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | 1.27 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` |  | 1.27 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | 2.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` |  | 2.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 3.05 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` |  | 3.05 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tislelizumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | tislelizumab | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cts70649-tbl-0001:row1:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['cts70649-tbl-0001:row2:col1'] |
| C5_dimension_Q309 | pass | [length] ** 3 / [time] |  | ['cts70649-tbl-0001:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cts70649-tbl-0001:row16:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['cts70649-tbl-0001:row5:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['cts70649-tbl-0001:row4:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['cts70649-tbl-0001:row3:col1'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.866 with apparent parameterization |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.00638 L/h | ['cts70649-tbl-0001:row1:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 3.05 L | ['cts70649-tbl-0001:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.27 L | ['cts70649-tbl-0001:row3:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btislelizumab%5D%20Tislelizumab_Liu2026_reference&body=Drug%3A%20tislelizumab%0ARecord%3A%20Tislelizumab_Liu2026_reference%0APaper%3A%20Liu_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tislelizumab/Tislelizumab_Liu2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 21:11 UTC</sub>
