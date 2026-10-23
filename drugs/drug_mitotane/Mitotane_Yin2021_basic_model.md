<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;mitotane&quot;,&quot;href&quot;:&quot;drugs/drug_mitotane/&quot;},{&quot;label&quot;:&quot;Yin_2021 \u00b7 basic_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mitotane_Cazaubon2019_reference&quot;,&quot;label&quot;:&quot;Cazaubon_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mitotane/Mitotane_Cazaubon2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitotane_Kerkhofs2015_reference&quot;,&quot;label&quot;:&quot;Kerkhofs_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mitotane/Mitotane_Kerkhofs2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mitotane — `Mitotane_Yin2021_basic_model`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The intercompartmental clearance parameter Q/F is dimensionally inconsistent with its unit of /day.

<div class="pk-model-meta" hidden drug="mitotane" model-id="Mitotane_Yin2021_basic_model" status="rejected" stale="false" population="adults with adrenocortical carcinoma" measured-compound="mitotane" parameterization="apparent" topology="2C"></div>

## Citation
Yin A, Ettaieb MHT, Swen JJ, van Deun L, Kerkhofs TMA, van der Straaten RJHM et al. Population Pharmacokinetic and Pharmacogenetic Analysis of Mitotane in Patients with Adrenocortical Carcinoma: Towards Individualized Dosing. Clinical pharmacokinetics 60(1):89–102 (2021).
  ·  DOI: [10.1007/s40262-020-00913-y](https://doi.org/10.1007/s40262-020-00913-y)

## Population and dosing

**Population:** adults with adrenocortical carcinoma · condition adrenocortical carcinoma · age group adult · n = &gt;.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| KA (/day) | kabs | 15.0 | /day |
| CL/F (L/day)a | CL/F | 217 | L/day |
| Vc/F (L)b | V1/F | 4790 | L |
| Vp/F (L) | V2/F | 19300 | L |
| Q/F (/day) | Q/F | 1100 | /day |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The intercompartmental clearance parameter Q/F is dimensionally inconsistent with its unit of /day.**

The record lists the apparent intercompartmental clearance Q/F with a value of 1100 and a unit of /day. However, an intercompartmental clearance parameter physically requires a volume-per-time unit, such as L/day, rather than a simple rate constant unit. This dimensional mismatch indicates the structural parameter is incorrectly defined for the two-compartment model. Extracted — mitotane: kabs 15 /day, CL/F 217 L/day, V1/F 4.79e+03 L, V2/F 1.93e+04 L, Q/F 1.1e+03 /day.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| KA (/day) | `Q49` · kabs | 15.0 | /day | 0.0001736 | 1/s | 1/d | exact (1) | Tab2:row2:col1 |
| CL/F (L/day)a | `Q27` · CL/F | 217 | L/day | 2.512e-06 | m3/s | L/h | llm_confirmed (0.6) | Tab2:row3:col1, Tab2:row3:col3 |
| Vc/F (L)b | `Q290` · V1/F | 4790 | L | 4.79 | m3 | L | llm_confirmed (0.6) | Tab2:row9:col1 |
| Vp/F (L) | `Q82` · V2/F | 19300 | L | 19.3 | m3 | l | exact (1) | Tab2:row11:col1 |
| Q/F (/day) | `Q69` · Q/F | 1100 | /day |  |  | 1/d | exact (1) | Tab2:row12:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'PRO (CV%)' routed out of structural estimates ('Residual errors')
- table section residual_error: 'ADD (mg/L)' routed out of structural estimates ('Residual errors')
- unit_dimension_mismatch: 'Q/F (/day)' → Q69 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- implicit units: 'CL/F (L/day)a' → L/day (from the paper text: "The table header in the prompt explicitly states 'CL/F (L/day)a = 217', indicating the unit is L/day.")
- implicit units: 'Vc/F (L)b' → L (from the paper text: "The table header in the prompt explicitly states 'Vc/F (L)b = 4790', indicating the unit is L.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=mitotane
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'basic model' subgroup of Yin_2021 (paper reports 2 populations: basic model, final model)
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (9/9 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab2:row3:col1', 'Tab2:row3:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab2:row9:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row2:col1'] |
| C5_dimension_Q69 | fail | 1 / [time] | /day | ['Tab2:row12:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab2:row11:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 9.04 L/h | ['Tab2:row3:col1', 'Tab2:row3:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 4.79e+03 L | ['Tab2:row9:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.93e+04 L | ['Tab2:row11:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmitotane%5D%20Mitotane_Yin2021_basic_model&body=Drug%3A%20mitotane%0ARecord%3A%20Mitotane_Yin2021_basic_model%0APaper%3A%20Yin_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mitotane/Mitotane_Yin2021_basic_model%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 21:06 UTC</sub>
