<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;atezolizumab&quot;,&quot;href&quot;:&quot;drugs/drug_atezolizumab/&quot;},{&quot;label&quot;:&quot;Shemesh_2020 \u00b7 ttmb_16_mut_mb&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atezolizumab — `Atezolizumab_Shemesh2020_ttmb_16_mut_mb`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Atezolizumab’s clearance of 0.223 mL/day/kg and volume of 6.91 L were rejected for implausible clearance/volume magnitude amid a unit/scale extraction error.

<div class="pk-model-meta" hidden drug="atezolizumab" model-id="Atezolizumab_Shemesh2020_ttmb_16_mut_mb" status="rejected" stale="false" population="pan-tumor patients treated with atezolizumab across seven clinical trials" measured-compound="atezolizumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Shemesh CS, Chan P, Legrand FA, Shames DS, Das Thakur M, Shi J et al. Pan-cancer population pharmacokinetics and exposure-safety and -efficacy analyses of atezolizumab in patients with high tumor mutational burden. Pharmacology research & perspectives 8(6):e00685 (2020).
  ·  DOI: [10.1002/prp2.685](https://doi.org/10.1002/prp2.685)

## Population and dosing

**Population:** pan-tumor patients treated with atezolizumab across seven clinical trials · condition cancer · age group adult · n = 2672.

**Dosing:** 10, 15, 20, 1200 mg (1200); mg/kg (10, 15, 20), iv, multiple, every 504 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C max, µg/mL | Cmax | 376 | µg/mL |
| C min, µg/mL | Cmin | 66.7 | µg/mL |
| AUC, µg∙day/mL | AUC | 2830 | µg∙day/mL |
| CL, mL/day/kg | CL | 0.223 | mL/day/kg |
| volume of distribution | V | 6.91 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Atezolizumab’s clearance of 0.223 mL/day/kg and volume of 6.91 L were rejected for implausible clearance/volume magnitude amid a unit/scale extraction error.**

The reported unit could not be converted to SI, leaving the affected parameter without an SI value. The finding does not specify whether clearance or volume was outside the physiological window. Extracted — atezolizumab: Cmax 376 µg/mL, Cmin 66.7 µg/mL, AUC 2.83e+03 µg∙day/mL, CL 0.223 mL/day/kg, V 6.91 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of steady state: this record has none, the second reading 532; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C max, µg/mL | `Q32` · Cmax | 376 | µg/mL |  |  | µg/ml | space_fold (0.95) | prp2685-tbl-0002:row1:col2 |
| C min, µg/mL | `Q36` · Cmin | 66.7 | µg/mL |  |  | µg/ml | space_fold (0.95) | prp2685-tbl-0002:row3:col2 |
| AUC, µg∙day/mL | `Q88` · AUC | 2830 | µg∙day/mL |  |  | (d·µg)/ml | exact (1) | prp2685-tbl-0002:row5:col2 |
| CL, mL/day/kg | `Q22` · CL | 0.223 | mL/day/kg | 1.807e-10 | m3/s | ml/(d·kg) | exact (1) | prp2685-tbl-0002:row7:col2 |
| volume of distribution | `Q61` · V | 6.91 | L | 0.00691 | m3 | L | review_gapfill (0.7) | Chan_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Metric' — extend the ontology if this is a real PK parameter (source ['prp2685-tbl-0002:row0:col2'])
- dropped unlinked row (NIL): 'Steady state' — extend the ontology if this is a real PK parameter (source ['prp2685-tbl-0002:row2:col2', 'prp2685-tbl-0002:row4:col2', 'prp2685-tbl-0002:row6:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atezolizumab
- population split: 'ttmb &lt;16 mut/mb (n = 709)' subgroup of Shemesh_2020 (paper reports 2 populations: ttmb &lt;16 mut/mb (n = 709), ttmb ≥16 mut/mb (n = 171))
- molar mass: none found for 'atezolizumab' — its concentrations stay mass-only
- gap-filled Q61 (V) from Chan_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell prp2685-tbl-0002:row1:col1 = 'Cycle 1'
- unparsed cell prp2685-tbl-0002:row3:col1 = 'Cycle 1'
- unparsed cell prp2685-tbl-0002:row5:col1 = 'Cycle 1'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[steady state]` |  | 532 | only_one_extracted |
| `qwen3.8-27b` | `parameters[volume of distribution]` | 6.91 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['prp2685-tbl-0002:row7:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['prp2685-tbl-0002:row1:col2'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 |  | ['prp2685-tbl-0002:row3:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Chan_2025:review'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['prp2685-tbl-0002:row5:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.223 | ['prp2685-tbl-0002:row7:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | fail | clearance within physiological range | 0.00065 L/h | ['prp2685-tbl-0002:row7:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.91 L | ['Chan_2025:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batezolizumab%5D%20Atezolizumab_Shemesh2020_ttmb_16_mut_mb&body=Drug%3A%20atezolizumab%0ARecord%3A%20Atezolizumab_Shemesh2020_ttmb_16_mut_mb%0APaper%3A%20Shemesh_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atezolizumab/Atezolizumab_Shemesh2020_ttmb_16_mut_mb%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 09:22 UTC</sub>
