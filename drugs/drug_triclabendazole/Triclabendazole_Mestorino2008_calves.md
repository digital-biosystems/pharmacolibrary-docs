<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02B&quot;,&quot;href&quot;:&quot;atc/P02B.md&quot;},{&quot;label&quot;:&quot;triclabendazole&quot;,&quot;href&quot;:&quot;drugs/drug_triclabendazole/&quot;},{&quot;label&quot;:&quot;Mestorino_2008 \u00b7 calves&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# triclabendazole — `Triclabendazole_Mestorino2008_calves`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

> Only clearance was extracted — no volume; aUC∞ has no unit.

<div class="pk-model-meta" hidden drug="triclabendazole" model-id="Triclabendazole_Mestorino2008_calves" status="needs_review" stale="false" population="female calves and female sheep" measured-compound="triclabendazole sulfoxide" parameterization="mechanistic" topology="1C"></div>

## Citation
Mestorino N, Formentini EA, Lucas MF, Fernandez C, Modamio P, Hernández EM et al. Pharmacokinetic disposition of triclabendazole in cattle and sheep; discrimination of the order and the rate of the absorption process of its active metabolite triclabendazole sulfoxide. Veterinary research communications 32(1):21–33 (2008).
  ·  DOI: [10.1007/s11259-007-9000-3](https://doi.org/10.1007/s11259-007-9000-3)

## Population and dosing

**Population:** female calves and female sheep · condition healthy · n = 12.

**Dosing:** 700 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed triclabendazole, measured triclabendazole sulfoxide.

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC 0-∞ (μg h/ml) | AUC∞ | 525.7 | μg h/ml |
| MRT (t) 0-∞ (h) | MRT | 49.9 | h |
| MAT (h) | MAT | 15.0 | h |
| t max (h) | tmax | 30.0 | h |
| C max (μg/ml) | Cmax | 10.7 | μg/ml |
| 1 z (h -1 ) | kel | 0.030 | h -1 |
| t 1/2 (1 z ) (h) | t1/2z | 23.8 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.923). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; aUC∞ has no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (AUC∞ and Cmax), so that value has no SI equivalent. None of the extracted parameters is triclabendazole's own; they describe triclabendazole sulfoxide. Extracted — triclabendazole sulfoxide: AUC∞ 526 μg h/ml, MRT 49.9 h, MAT 15 h, tmax 30 h, Cmax 10.7 μg/ml, kel 0.03 h -1, t1/2z 23.8 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[kinetic parameter a].parameter_id`: this record has Q900, the second reading Q49. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC 0-∞ (μg h/ml) | `Q17` · AUC∞ | 525.7 | μg h/ml |  |  | (h·µg)/ml | space_fold (0.95) | tab_0:row1:col1 |
| MRT (t) 0-∞ (h) | `Q53` · MRT | 49.9 | h | 1.796e+05 | s | h | space_fold (0.95) | tab_0:row3:col1 |
| MAT (h) | `Q73` · MAT | 15.0 | h | 5.4e+04 | s | h | exact (1) | tab_0:row4:col1 |
| t max (h) | `Q56` · tmax | 30.0 | h | 1.08e+05 | s | h | space_fold (0.95) | tab_0:row5:col1 |
| C max (μg/ml) | `Q32` · Cmax | 10.7 | μg/ml |  |  | µg/ml | space_fold (0.95) | tab_0:row6:col1 |
| 1 z (h -1 ) | `Q47` · kel | 0.030 | h -1 | 8.333e-06 | 1/s | 1/h | exact (1) | tab_0:row7:col1 |
| t 1/2 (1 z ) (h) | `Q57` · t1/2z | 23.8 | h | 8.568e+04 | s | h | space_fold (0.95) | tab_0:row8:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Kinetic parameter a | Q900 | llm |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'n=6' (equation variable)
- unit_dimension_unknown: 'μg h/ml' (AUC∞)
- dropped value-less row: 'max'
- dropped value-less row: 'C max'
- dropped value-less row: 'λ z'
- dropped value-less row: 't 1/2 (λ z )' (captured trailing unit 'λ z' for child rows)
- dropped value-less row: 'NS'
- implicit units: 'AUC 0-∞ (μg h/ml)' — the LLM proposed 'μg h/ml', whose dimension does not fit Q17; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=triclabendazole sulfoxide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model (site presystemic: 'The zero-order rate constant of absorption/formation of TCBZ-SO is justified by the slow release of the drugs from the r')
- status held at route_to_review — not promoted
- population split: 'calves (n=6)' subgroup of Mestorino_2008 (paper reports 2 populations: calves (n=6), sheep (n=6))
- row roles (LLM): model_class=noncompartmental; 13/13 row label(s) assigned, 2 linked by role
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_0:row1:col2 = '512.7±101.5 NS'
- unparsed cell tab_0:row6:col2 = '12.7±2.16 NS'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.923 (12/13 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[kinetic parameter a].parameter_id` | Q900 | Q49 | mismatch |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['tab_0:row6:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['tab_0:row7:col1'] |
| C5_dimension_Q53 | pass | [time] |  | ['tab_0:row3:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['tab_0:row5:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['tab_0:row8:col1'] |
| C5_dimension_Q73 | pass | [time] |  | ['tab_0:row4:col1'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | μg h/ml | ['tab_0:row1:col1'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btriclabendazole%5D%20Triclabendazole_Mestorino2008_calves&body=Drug%3A%20triclabendazole%0ARecord%3A%20Triclabendazole_Mestorino2008_calves%0APaper%3A%20Mestorino_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_triclabendazole/Triclabendazole_Mestorino2008_calves%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 09:34 UTC</sub>
