<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;methyprylon&quot;,&quot;href&quot;:&quot;drugs/drug_methyprylon/&quot;},{&quot;label&quot;:&quot;Gwilt_1982 \u00b7 caster_oil&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methyprylon_Gwilt1985_reference&quot;,&quot;label&quot;:&quot;Gwilt_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methyprylon/Methyprylon_Gwilt1985_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# methyprylon — `Methyprylon_Gwilt1982_caster_oil`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

> The methyprylon record was rejected because a first-order rate constant reported in hr-1 could not be expressed in SI units, leaving a structural parameter with a dimension mismatch.

<div class="pk-model-meta" hidden drug="methyprylon" model-id="Methyprylon_Gwilt1982_caster_oil" status="rejected" stale="false" population="intoxicated beagle dogs" measured-compound="methyprylon" parameterization="mechanistic" topology="2C"></div>

## Citation
Gwilt PR, Pankaskie MC, Mitala JJ. The effect of oral castor oil on the disposition of methyprylon in intoxicated dogs. Canadian Anaesthetists' Society journal 29(4):381–383 (1982).
  ·  DOI: [10.1007/BF03007530](https://doi.org/10.1007/BF03007530)

## Population and dosing

**Population:** intoxicated beagle dogs · condition acute methyprylon intoxication · age group adult · n = 5.

**Dosing:** 10500 mg, iv, single.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| α (hr-1) | λ1 | 9.71 | hr-1 |
| β (hr-1) | kel | 0.21 | hr-1 |
| K12 (hr-1) | k12 | 6.64 | hr-1 |
| K21 (hr-1) | k21 | 1.55 | hr-1 |
| V1 (liter) | V1 | 3.11 | liter |
| Vdβ (liter) | V | 7.85 | liter |
| Vdss (liter) | Vss | 7.11 | liter |
| Total clearance (liter/hr) | CL | 1.95 | liter/hr |
| Total area under plasma-time curve, (mg hr/liter) | AUC | 940.19 | mg·h/L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The methyprylon record was rejected because a first-order rate constant reported in hr-1 could not be expressed in SI units, leaving a structural parameter with a dimension mismatch.**

The two-compartment model for methyprylon in intoxicated beagle dogs (Gwilt_1982) reports rate constants λ1 = 9.71 hr-1, kel = 0.21 hr-1, k12 = 6.64 hr-1 and k21 = 1.55 hr-1, with volumes V1 = 3.11 L, Vdβ = 7.85 L, Vdss = 7.11 L, clearance 1.95 L/hr and AUC 940.19 mg·h/L. The hr-1 unit of one rate constant could not be converted to a standard unit, so that parameter entered model construction without a usable SI value, and a dimension mismatch on a structural parameter was flagged, leading to rejection. Extracted — methyprylon: λ1 9.71 hr-1, kel 0.21 hr-1, k12 6.64 hr-1, k21 1.55 hr-1, V1 3.11 liter, V 7.85 liter, Vss 7.11 liter, CL 1.95 liter/hr, … (+1).

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| α (hr-1) | `Q67` · λ1 | 9.71 | hr-1 |  |  | 1/h | exact (1) | Gwilt_1982_table_2:row0:col2 |
| β (hr-1) | `Q47` · kel | 0.21 | hr-1 | 5.833e-05 | 1/s | 1/h | exact (1) | Gwilt_1982_table_2:row1:col2 |
| K12 (hr-1) | `Q301` · k12 | 6.64 | hr-1 | 0.001844 | 1/s | 1/h | exact (1) | Gwilt_1982_table_2:row3:col2 |
| K21 (hr-1) | `Q302` · k21 | 1.55 | hr-1 | 0.0004306 | 1/s | 1/h | exact (1) | Gwilt_1982_table_2:row4:col2 |
| V1 (liter) | `Q63` · V1 | 3.11 | liter | 0.00311 | m3 | l | exact (1) | Gwilt_1982_table_2:row5:col2 |
| Vdβ (liter) | `Q61` · V | 7.85 | liter | 0.00785 | m3 | l | llm_confirmed (0.6) | Gwilt_1982_table_2:row6:col2 |
| Vdss (liter) | `Q65` · Vss | 7.11 | liter | 0.00711 | m3 | l | llm (0.6) | Gwilt_1982_table_2:row7:col2 |
| Total clearance (liter/hr) | `Q22` · CL | 1.95 | liter/hr | 5.417e-07 | m3/s | l/h | exact (1) | Gwilt_1982_table_2:row8:col2 |
| Total area under plasma-time curve, (mg hr/liter) | `Q88` · AUC | 940.19 | mg·h/L |  |  | mg·h/L | llm (0.6) | Gwilt_1982_table_2:row9:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'α (hr-1)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped duplicate Q47 ('K10 (hr-1)', value '1.45') — already have one for this compound
- unit_dimension_unknown: 'mg hr/liter' (AUC)
- implicit units: 'Total area under plasma-time curve, (mg hr/liter)' → mg·h/L (from the paper text: "Table II lists 'Total area under plasma-time curve, (mg hr/liter) = 940.19', i.e., mg·hr/liter.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=methyprylon
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'caster oil (n = 5)' subgroup of Gwilt_1982 (paper reports 2 populations: caster oil (n = 5), control* (n = 5))

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (13/13 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Gwilt_1982_table_2:row8:col2'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Gwilt_1982_table_2:row3:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Gwilt_1982_table_2:row4:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Gwilt_1982_table_2:row1:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Gwilt_1982_table_2:row6:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Gwilt_1982_table_2:row5:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Gwilt_1982_table_2:row7:col2'] |
| C5_dimension_Q67 | fail | 1 / [time] | hr-1 | ['Gwilt_1982_table_2:row0:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Gwilt_1982_table_2:row9:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.95 | ['Gwilt_1982_table_2:row8:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.95 L/h | ['Gwilt_1982_table_2:row8:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 7.85 L | ['Gwilt_1982_table_2:row6:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.11 L | ['Gwilt_1982_table_2:row5:col2'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 7.11 L | ['Gwilt_1982_table_2:row7:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethyprylon%5D%20Methyprylon_Gwilt1982_caster_oil&body=Drug%3A%20methyprylon%0ARecord%3A%20Methyprylon_Gwilt1982_caster_oil%0APaper%3A%20Gwilt_1982%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_methyprylon/Methyprylon_Gwilt1982_caster_oil%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 21:41 UTC</sub>
