<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P03B&quot;,&quot;href&quot;:&quot;atc/P03B.md&quot;},{&quot;label&quot;:&quot;dibutylphthalate&quot;,&quot;href&quot;:&quot;drugs/drug_dibutylphthalate/&quot;},{&quot;label&quot;:&quot;Chang_2013 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dibutylphthalate — `Dibutylphthalate_Chang2013_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Only clearance was extracted — no volume; λ1 and AUC have no unit (+1 more).

<div class="pk-model-meta" hidden drug="dibutylphthalate" model-id="Dibutylphthalate_Chang2013_reference" status="needs_review" stale="false" population="adult male rats" measured-compound="dibutyl phthalate" parameterization="mechanistic" topology="1C"></div>

## Citation
Chang LW, Hou ML, Tsai TH. Pharmacokinetics of dibutyl phthalate (DBP) in the rat determined by UPLC-MS/MS. International journal of molecular sciences 14(1):836–849 (2013).
  ·  DOI: [10.3390/ijms14010836](https://doi.org/10.3390/ijms14010836)

## Population and dosing

**Population:** adult male rats · condition healthy · age group adult · n = 5.

**Dosing:** 2100, 7000 mg, iv and oral, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| B (μg/mL) | Ct | 0.18 | μg/mL |
| α (1/min) | λ1 | 0.15 |  |
| β (1/min) | kel | 0.02 | 1/min |
| AUC (min μg/mL) | AUC | 57.8 | min μg/mL |
| t1/2,α (min) | t1/2α | 5.77 | min |
| t1/2,β (min) | t1/2β | 217 | min |
| CL(mL/min/kg) | CL | 551 | mL/min/kg |
| MRT (min) | MRT | 123 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; λ1 and AUC have no unit (+1 more).**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — dibutylphthalate: Ct 0.18 μg/mL, λ1 0.15, kel 0.02 1/min, AUC 57.8 min μg/mL, t1/2α 5.77 min, t1/2β 217 min, CL 551 mL/min/kg, MRT 123 min.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| B (μg/mL) | `Q75` · Ct | 0.18 | μg/mL |  |  | µg/ml | llm (0.6) | t4-ijms-14-00836:row4:col1 |
| α (1/min) | `Q67` · λ1 | 0.15 |  |  |  |  | exact (1) | t4-ijms-14-00836:row5:col1 |
| β (1/min) | `Q47` · kel | 0.02 | 1/min | 0.0003333 | 1/s | 1/h | exact (1) | t4-ijms-14-00836:row6:col1 |
| AUC (min μg/mL) | `Q88` · AUC | 57.8 | min μg/mL |  |  | (min·µg)/ml | exact (1) | t4-ijms-14-00836:row7:col1 |
| t1/2,α (min) | `Q59` · t1/2α | 5.77 | min | 346.2 | s | min | llm_corrected (0.6) | t4-ijms-14-00836:row8:col1 |
| t1/2,β (min) | `Q60` · t1/2β | 217 | min | 1.302e+04 | s | min | llm_corrected (0.6) | t4-ijms-14-00836:row9:col1 |
| CL(mL/min/kg) | `Q22` · CL | 551 | mL/min/kg | 0.0006428 | m3/s | ml/(min·kg) | exact (1) | t4-ijms-14-00836:row10:col1 |
| MRT (min) | `Q53` · MRT | 123 | min | 7380 | s | min | exact (1) | t4-ijms-14-00836:row11:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Pharmacokinetic parameters | Q900 | llm |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q900 ('A (μg/mL)', value '6.04') — already have one for this compound
- unit_dimension_unknown: 'min μg/mL' (AUC)
- dropped value-less row: 'AUC'
- dropped value-less row: 't1/2,α'
- dropped value-less row: 't1/2,β'
- dropped value-less row: 'A'
- dropped value-less row: 'B'
- dropped value-less row: 'α'
- dropped value-less row: 'β'
- dropped value-less row: 'CL'
- dropped value-less row: 'MRT'
- implicit units: 'α (1/min)' — the LLM proposed '1/min', whose dimension does not fit Q67; left unset
- implicit units: 'β (1/min)' → 1/min (from the paper text: 'Parameter listed as β (1/min) = 0.02; half-lives reported in min (t1/2,β = 217 ± 131 min), so rate constants are per min')
- implicit units: 'AUC (min μg/mL)' — the LLM proposed 'min μg/mL', whose dimension does not fit Q88; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dibutyl phthalate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['t4-ijms-14-00836:row10:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['t4-ijms-14-00836:row6:col1'] |
| C5_dimension_Q53 | pass | [time] |  | ['t4-ijms-14-00836:row11:col1'] |
| C5_dimension_Q59 | pass | [time] |  | ['t4-ijms-14-00836:row8:col1'] |
| C5_dimension_Q60 | pass | [time] |  | ['t4-ijms-14-00836:row9:col1'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  | ['t4-ijms-14-00836:row4:col1'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] |  | ['t4-ijms-14-00836:row5:col1'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | min μg/mL | ['t4-ijms-14-00836:row7:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 551 | ['t4-ijms-14-00836:row10:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.31e+03 L/h | ['t4-ijms-14-00836:row10:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdibutylphthalate%5D%20Dibutylphthalate_Chang2013_reference&body=Drug%3A%20dibutylphthalate%0ARecord%3A%20Dibutylphthalate_Chang2013_reference%0APaper%3A%20Chang_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dibutylphthalate/Dibutylphthalate_Chang2013_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 13:01 UTC</sub>
