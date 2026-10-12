<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;indocyanine green&quot;,&quot;href&quot;:&quot;drugs/drug_indocyanine_green/&quot;},{&quot;label&quot;:&quot;Mathes_2019 \u00b7 severe_endotoxemia&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;IndocyanineGreen_Han2025_reference&quot;,&quot;label&quot;:&quot;Han_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_indocyanine_green/IndocyanineGreen_Han2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# indocyanine green — `IndocyanineGreen_Mathes2019_severe_endotoxemia`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.917). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The indocyanine green record was rejected because the normalized clearance of 202.0 mL/min/kg (labelled mL/min/m2) is physiologically implausible, indicating a unit/scale extraction error, and the 3-compartment structure contains an unreachable compartment.**

For indocyanine green in anesthetized rats, the clearance parameter CLnorm is reported as 202.0 with unit mL/min/kg while the paper label reads mL/min/m2, a mismatch that puts clearance far outside the physiological window. The compartmental structure (V1 = 14.1 mL, V2 = 25.5 mL, k12 = 0.33 1/h, k21 = 0.18 1/h, kel = 0.12 1/h) was flagged as having an unreachable or orphan compartment with no path from the dose. These two failed checks led to rejection of the record. Extracted — indocyanine green: V 42.8 mL, CLnorm 202 mL/min/kg, V1 14.1 mL, V2 25.5 mL, kel 0.12 1/h, k12 0.33 1/h, k21 0.18 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[calculated icg clearance].parameter_id`: this record has Q354, the second reading Q22. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Mathes A et al., Plasma Disappearance Rate of Indocyanin…, Diagnostics (Basel, Switzer… (2019)
  ·  DOI: [10.3390/diagnostics9030108](https://doi.org/10.3390/diagnostics9030108)

<div class="pk-model-meta" hidden drug="indocyanine green" model-id="IndocyanineGreen_Mathes2019_severe_endotoxemia" status="rejected" stale="false" population="anesthetized Sprague-Dawley rats with hemorrhagic shock or endotoxemia" measured-compound="indocyanine green" parameterization="mechanistic" topology="3C"></div>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ICG Distribution Volume (mL) | `Q61` · V | 42.8 | mL | 4.28e-05 | [ml] | not captured | llm_confirmed (0.6) | diagnostics-09-00108-t002:row2:col4 | — | not captured |
| Calculated ICG Clearance (mL/min/m2) | `Q354` · CLnorm | 202.0 | mL/min/kg | 0.00023566666666666668 | L/h | not captured | llm_corrected (0.6) | diagnostics-09-00108-t002:row3:col4 | — | not captured |
| ICG Distribution Volume 1 (mL) | `Q63` · V1 | 14.1 | mL | 1.4099999999999999e-05 | [ml] | not captured | llm_corrected (0.6) | diagnostics-09-00108-t002:row5:col4 | — | not captured |
| ICG Distribution Volume 2 (mL) | `Q64` · V2 | 25.5 | mL | 2.55e-05 | [ml] | not captured | llm_corrected (0.6) | diagnostics-09-00108-t002:row7:col4 | — | not captured |
| Micro-rate constant k10 | `Q47` · kel | 0.12 | 1/h | 3.3333333333333335e-05 | 1/h | not captured | llm_confirmed (0.6) | diagnostics-09-00108-t002:row9:col4 | — | not captured |
| Micro-rate constant k12 | `Q301` · k12 | 0.33 | 1/h | 9.166666666666667e-05 | 1/h | not captured | llm_confirmed (0.6) | diagnostics-09-00108-t002:row10:col4 | — | not captured |
| Micro-rate constant k21 | `Q302` · k21 | 0.18 | 1/h | 4.9999999999999996e-05 | 1/h | not captured | llm_confirmed (0.6) | diagnostics-09-00108-t002:row11:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'mL/min/m2' (CLnorm)
- dropped duplicate Q354 ('Calculated ICG Clearance 1 (mL/min/m2)', value '181.0') — already have one for this compound
- dropped duplicate Q354 ('Calculated ICG Clearance 2 (mL/min/m2)', value '467.0') — already have one for this compound
- dropped duplicate Q61 ('ICG Distribution Volume 1 [mL]', value '14.1') — already have one for this compound
- dropped duplicate Q354 ('Calculated ICG Clearance 1 [mL/min/m2]', value '181.0') — already have one for this compound
- dropped duplicate Q64 ('ICG Distribution Volume 2 [mL]', value '10.00') — already have one for this compound
- dropped duplicate Q354 ('Calculated ICG Clearance 2 [mL/min/m2]', value '182.0') — already have one for this compound
- dropped value-less row: 'ICG'
- dropped value-less row: 'LPS'
- implicit units: 'Calculated ICG Clearance (mL/min/m2)' → mL/min/kg (from the paper text: 'The paper reports ICG blood clearance in rats and discusses V1 relative to blood volume of 70–80 mL/kg body weight; clea')
- implicit units: 'Micro-rate constant k10' → 1/h (from the popPK convention: 'k10 = CL1/V1 is a first-order elimination rate constant; no unit stated in text, standard unit is 1/h.')
- implicit units: 'Micro-rate constant k12' → 1/h (from the popPK convention: 'k12 is a first-order intercompartmental transfer rate constant; no unit stated, standard unit is 1/h.')
- implicit units: 'Micro-rate constant k21' → 1/h (from the popPK convention: 'k21 is a first-order intercompartmental transfer rate constant; no unit stated, standard unit is 1/h.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=indocyanine green
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- population split: 'severe endotoxemia' subgroup of Mathes_2019 (paper reports 4 populations: hemorrhage, moderate endotoxemia, severe endotoxemia, sham)
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

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['diagnostics-09-00108-t002:row10:col4'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['diagnostics-09-00108-t002:row11:col4'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['diagnostics-09-00108-t002:row3:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['diagnostics-09-00108-t002:row9:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['diagnostics-09-00108-t002:row2:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['diagnostics-09-00108-t002:row5:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['diagnostics-09-00108-t002:row7:col4'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0428 L | not captured | not captured | ['diagnostics-09-00108-t002:row2:col4'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.0141 L | not captured | not captured | ['diagnostics-09-00108-t002:row5:col4'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.0255 L | not captured | not captured | ['diagnostics-09-00108-t002:row7:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_indocyanine_green/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Mathes_2019` / `Mathes_2019::severe_endotoxemia`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:11 UTC</sub>
