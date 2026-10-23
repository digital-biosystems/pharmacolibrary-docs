<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;mitotane&quot;,&quot;href&quot;:&quot;drugs/drug_mitotane/&quot;},{&quot;label&quot;:&quot;Yin_2021 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mitotane_Cazaubon2019_reference&quot;,&quot;label&quot;:&quot;Cazaubon_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mitotane/Mitotane_Cazaubon2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitotane_Kerkhofs2015_reference&quot;,&quot;label&quot;:&quot;Kerkhofs_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mitotane/Mitotane_Kerkhofs2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mitotane — `Mitotane_Yin2021_final`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Mitotane's clearance and central volume were rejected because the units 'GA/AA' and one other were unconvertible to standard SI units.

<div class="pk-model-meta" hidden drug="mitotane" model-id="Mitotane_Yin2021_final" status="rejected" stale="false" population="adults with adrenocortical carcinoma" measured-compound="mitotane" parameterization="apparent" topology="3C"></div>

## Citation
Yin A, Ettaieb MHT, Swen JJ, van Deun L, Kerkhofs TMA, van der Straaten RJHM et al. Population Pharmacokinetic and Pharmacogenetic Analysis of Mitotane in Patients with Adrenocortical Carcinoma: Towards Individualized Dosing. Clinical pharmacokinetics 60(1):89–102 (2021).
  ·  DOI: [10.1007/s40262-020-00913-y](https://doi.org/10.1007/s40262-020-00913-y)

## Population and dosing

**Population:** adults with adrenocortical carcinoma · condition adrenocortical carcinoma · age group adult · n = &gt;.

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| KA (/day) | kabs | 15.0 | /day |
| CL/F (L/day)a | CL/F | 298 | L/day |
| CL_SNP1 (GA/AA) | CL | 0.551 | GA/AA |
| CL_SNP3 (CC) | V2 | 0.753 | CC |
| Vc/F (L)b | V1/F | 6210 | L |
| Vp/F (L) | V2/F | 18100 | L |
| Q/F (/day) | Q/F | 883 | /day |
| theta_q319_weight_power | theta_q319_weight_power | 1.10 |  |
| theta_q319_weight_power | theta_q319_weight_power | 1.22 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.733). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Mitotane's clearance and central volume were rejected because the units 'GA/AA' and one other were unconvertible to standard SI units.**

The record lists a total clearance of 0.551 with unit 'GA/AA' and a central volume of 6210 L. The unit 'GA/AA' appears to be a genotype label rather than a physical quantity, making it impossible to convert to standard units for modeling. This dimensional inconsistency caused the structural parameter check to fail. Extracted — mitotane: kabs 15 /day, CL/F 298 L/day, CL 0.551 GA/AA, V2 0.753 CC, V1/F 6.21e+03 L, V2/F 1.81e+04 L, Q/F 883 /day.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl_snp1: this record has 0.551, the second reading none; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| KA (/day) | `Q49` · kabs | 15.0 | /day | 0.0001736 | 1/s | 1/d | exact (1) | Tab2:row2:col4 |
| CL/F (L/day)a | `Q27` · CL/F | 298 | L/day | 3.449e-06 | m3/s | L/h | llm_confirmed (0.6) | Tab2:row3:col4, Tab2:row3:col6 |
| CL_SNP1 (GA/AA) | `Q22` · CL | 0.551 | GA/AA |  |  | (g·a)/aa | llm (0.6) | Tab2:row4:col4 |
| CL_SNP3 (CC) | `Q64` · V2 | 0.753 | CC |  |  | cc | llm (0.6) | Tab2:row6:col4 |
| Vc/F (L)b | `Q290` · V1/F | 6210 | L | 6.21 | m3 | L | llm_confirmed (0.6) | Tab2:row9:col4 |
| Vp/F (L) | `Q82` · V2/F | 18100 | L | 18.1 | m3 | l | exact (1) | Tab2:row11:col4 |
| Q/F (/day) | `Q69` · Q/F | 883 | /day |  |  | 1/d | exact (1) | Tab2:row12:col4 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 1.10 |  |  |  |  |  | Tab2:row8:col4 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 1.22 |  |  |  |  |  | Tab2:row10:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'PRO (CV%)' routed out of structural estimates ('Residual errors')
- table section residual_error: 'ADD (mg/L)' routed out of structural estimates ('Residual errors')
- unit_dimension_unknown: 'GA/AA' (CL)
- unit_dimension_unknown: 'AG/GG' (CL)
- dropped duplicate Q22 ('CL_SNP2 (AG/GG)', value '0.601') — already have one for this compound
- unit_dimension_unknown: 'TT' (CL)
- dropped duplicate Q22 ('CL_SNP3 (TT)', value '2.49') — already have one for this compound
- unit_dimension_mismatch: 'Q/F (/day)' → Q69 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CL/F (L/day)a' → L/day (from the paper text: "The table header in the provided text explicitly states: '1. CL/F (L/day)a = 298'")
- implicit units: 'Vc/F (L)b' → L (from the paper text: "The table header in the provided text explicitly states: '3. Vc/F (L)b = 6210'")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=mitotane
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- model-stage split: 'final model' is the final model of Yin_2021 (paper reports 2 stages: basic model, final model); same population, different model-building step
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row3:col2 = '67.0 [8]'
- unparsed cell Tab2:row3:col5 = '43.0 [16]'
- unparsed cell Tab2:row9:col2 = '68.1 [53]'
- unparsed cell Tab2:row9:col5 = '47.2 [55]'
- unparsed cell Tab2:row11:col2 = '76.9 [17]'
- unparsed cell Tab2:row11:col5 = '88.8 [15]'
- unparsed cell Tab2:row12:col2 = '102 [34]'
- unparsed cell Tab2:row12:col5 = '97.3 [34]'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.733 (11/15 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl_snp1]` | 0.551 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_snp2]` |  | 0.601 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_snp3].parameter_id` | Q64 | Q77 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q63_weight_power]` |  | 1.22 | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab2:row3:col4', 'Tab2:row3:col6'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab2:row9:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row2:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row6:col4'] |
| C5_dimension_Q69 | fail | 1 / [time] | /day | ['Tab2:row12:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab2:row11:col4'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | GA/AA | ['Tab2:row4:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 12.4 L/h | ['Tab2:row3:col4', 'Tab2:row3:col6'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 6.21e+03 L | ['Tab2:row9:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.81e+04 L | ['Tab2:row11:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmitotane%5D%20Mitotane_Yin2021_final&body=Drug%3A%20mitotane%0ARecord%3A%20Mitotane_Yin2021_final%0APaper%3A%20Yin_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mitotane/Mitotane_Yin2021_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 21:06 UTC</sub>
