<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;indocyanine green&quot;,&quot;href&quot;:&quot;drugs/drug_indocyanine_green/&quot;},{&quot;label&quot;:&quot;Mathes_2019 \u00b7 hemorrhage&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;IndocyanineGreen_Han2025_reference&quot;,&quot;label&quot;:&quot;Han_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_indocyanine_green/IndocyanineGreen_Han2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# indocyanine green — `IndocyanineGreen_Mathes2019_hemorrhage`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The indocyanine green record was rejected because the normalized clearance of 174.0 mL/min/m² was extracted with the unit mL/min, giving an implausible magnitude, and the peripheral compartment (V2 = 85.6 mL) is unreachable from the dose.

<div class="pk-model-meta" hidden drug="indocyanine green" model-id="IndocyanineGreen_Mathes2019_hemorrhage" status="rejected" stale="false" population="anesthetized Sprague-Dawley rats with hemorrhagic shock or endotoxemia" measured-compound="indocyanine green" parameterization="mechanistic" topology="3C"></div>

## Citation
Mathes A, Plata C, Rensing H, Kreuer S, Fink T, Raddatz A. Plasma Disappearance Rate of Indocyanine Green for Determination of Liver Function in Three Different Models of Shock. Diagnostics (Basel, Switzerland) 9(3):E108 (2019).
  ·  DOI: [10.3390/diagnostics9030108](https://doi.org/10.3390/diagnostics9030108)

## Population and dosing

**Population:** anesthetized Sprague-Dawley rats with hemorrhagic shock or endotoxemia · condition hemorrhagic shock and endotoxemia · age group adult · n = 24.

**Dosing:** 2.5 mg/h, iv, multiple.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ICG Distribution Volume (mL) | V | 41.6 | mL |
| Calculated ICG Clearance (mL/min/m2) | CLnorm | 174.0 | mL/min |
| ICG Distribution Volume 1 (mL) | V1 | 20.2 | mL |
| ICG Distribution Volume 2 (mL) | V2 | 85.6 | mL |
| Micro-rate constant k10 | kel | 0.04 | 1/h |
| Micro-rate constant k12 | k12 | 0.08 | 1/h |
| Micro-rate constant k21 | k21 | 0.01 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.917). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The indocyanine green record was rejected because the normalized clearance of 174.0 mL/min/m² was extracted with the unit mL/min, giving an implausible magnitude, and the peripheral compartment (V2 = 85.6 mL) is unreachable from the dose.**

The clearance parameter is reported per m² of body surface area (mL/min/m²) but was recorded as mL/min, so its magnitude falls outside the physiological window and suggests a unit/scale extraction error. The three-compartment structure also fails the connectivity check: a compartment has no path from the dose (unreachable/orphan compartment). The remaining parameters — V = 41.6 mL, V1 = 20.2 mL, kel = 0.04 1/h, k12 = 0.08 1/h, k21 = 0.01 1/h — are recorded, but the unit and topology problems stand. Extracted — indocyanine green: V 41.6 mL, CLnorm 174 mL/min, V1 20.2 mL, V2 85.6 mL, kel 0.04 1/h, k12 0.08 1/h, k21 0.01 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[calculated icg clearance].parameter_id`: this record has Q354, the second reading Q22. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ICG Distribution Volume (mL) | `Q61` · V | 41.6 | mL | 4.16e-05 | m3 | ml | llm_confirmed (0.6) | diagnostics-09-00108-t002:row2:col2 |
| Calculated ICG Clearance (mL/min/m2) | `Q354` · CLnorm | 174.0 | mL/min | 2.9e-06 | m3/s | L/h | llm_corrected (0.6) | diagnostics-09-00108-t002:row3:col2 |
| ICG Distribution Volume 1 (mL) | `Q63` · V1 | 20.2 | mL | 2.02e-05 | m3 | ml | llm_corrected (0.6) | diagnostics-09-00108-t002:row5:col2 |
| ICG Distribution Volume 2 (mL) | `Q64` · V2 | 85.6 | mL | 8.56e-05 | m3 | ml | llm_corrected (0.6) | diagnostics-09-00108-t002:row7:col2 |
| Micro-rate constant k10 | `Q47` · kel | 0.04 | 1/h | 1.111e-05 | 1/s | 1/h | llm_confirmed (0.6) | diagnostics-09-00108-t002:row9:col2 |
| Micro-rate constant k12 | `Q301` · k12 | 0.08 | 1/h | 2.222e-05 | 1/s | 1/h | llm_confirmed (0.6) | diagnostics-09-00108-t002:row10:col2 |
| Micro-rate constant k21 | `Q302` · k21 | 0.01 | 1/h | 2.778e-06 | 1/s | 1/h | llm_confirmed (0.6) | diagnostics-09-00108-t002:row11:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'mL/min/m2' (CLnorm)
- dropped duplicate Q354 ('Calculated ICG Clearance 1 (mL/min/m2)', value '84.0') — already have one for this compound
- dropped duplicate Q354 ('Calculated ICG Clearance 2 (mL/min/m2)', value '170.0') — already have one for this compound
- dropped duplicate Q61 ('ICG Distribution Volume 1 [mL]', value '0.01') — already have one for this compound
- dropped duplicate Q354 ('Calculated ICG Clearance 1 [mL/min/m2]', value '134.0') — already have one for this compound
- dropped duplicate Q64 ('ICG Distribution Volume 2 [mL]', value '3.85') — already have one for this compound
- dropped duplicate Q354 ('Calculated ICG Clearance 2 [mL/min/m2]', value '94.0') — already have one for this compound
- dropped value-less row: 'ICG'
- dropped value-less row: 'LPS'
- implicit units: 'Calculated ICG Clearance (mL/min/m2)' → mL/min (from the popPK convention: 'Paper reports ICG blood clearance without units; clearance conventionally in volume/time, consistent with magnitude ~174')
- implicit units: 'Micro-rate constant k10' → 1/h (from the popPK convention: 'k10 = CL1/V1 is a first-order rate constant; conventionally in 1/h, consistent with value 0.04.')
- implicit units: 'Micro-rate constant k12' → 1/h (from the popPK convention: 'k12 is a first-order transfer rate constant; conventionally in 1/h, consistent with value 0.08.')
- implicit units: 'Micro-rate constant k21' → 1/h (from the popPK convention: 'k21 is a first-order transfer rate constant; conventionally in 1/h, consistent with value 0.01.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=indocyanine green
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- population split: 'hemorrhage' subgroup of Mathes_2019 (paper reports 4 populations: hemorrhage, moderate endotoxemia, severe endotoxemia, sham)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.917 (11/12 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[calculated icg clearance].parameter_id` | Q354 | Q22 | mismatch |

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
| C5_dimension_Q301 | pass | 1 / [time] |  | ['diagnostics-09-00108-t002:row10:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['diagnostics-09-00108-t002:row11:col2'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['diagnostics-09-00108-t002:row3:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['diagnostics-09-00108-t002:row9:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['diagnostics-09-00108-t002:row2:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['diagnostics-09-00108-t002:row5:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['diagnostics-09-00108-t002:row7:col2'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0416 L | ['diagnostics-09-00108-t002:row2:col2'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.0202 L | ['diagnostics-09-00108-t002:row5:col2'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.0856 L | ['diagnostics-09-00108-t002:row7:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bindocyanine_green%5D%20IndocyanineGreen_Mathes2019_hemorrhage&body=Drug%3A%20indocyanine_green%0ARecord%3A%20IndocyanineGreen_Mathes2019_hemorrhage%0APaper%3A%20Mathes_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_indocyanine_green/IndocyanineGreen_Mathes2019_hemorrhage%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 21:11 UTC</sub>
