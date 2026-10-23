<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;tinzaparin&quot;,&quot;href&quot;:&quot;drugs/drug_tinzaparin/&quot;},{&quot;label&quot;:&quot;Gouin-Thibault_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tinzaparin — `Tinzaparin_GouinThibault2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:41 UTC (Needs review), but the paper was screened again on 2026-10-05 16:46 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="tinzaparin" model-id="Tinzaparin_GouinThibault2024_reference" status="needs_review" stale="true" population="patients with severe and end-stage renal impairment" measured-compound="tinzaparin anti-Xa" parameterization="mechanistic" topology="1C"></div>

## Citation
Gouin-Thibault I, Mansour A, Caribotti C, Pierre-Jean M, Bouzille G, Ballerie A et al. Tinzaparin, an alternative to subcutaneous unfractionated heparin, in patients with severe and end-stage renal impairment: a retrospective observational single-center study. Journal of thrombosis and haemostasis : JTH 22(10):2864–2872 (2024).
  ·  DOI: [10.1016/j.jtha.2024.07.006](https://doi.org/10.1016/j.jtha.2024.07.006)

## Population and dosing

**Population:** patients with severe and end-stage renal impairment · condition severe and end-stage renal impairment · age group adult · n = 623.

**Dosing:** 175, 4500 IU, sc, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed tinzaparin, measured tinzaparin anti-Xa.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Ka (h -1 ) | kabs | 0.079 | h -1 | 12.4 |
| V (mL)* | V | 3661 | mL | 24.5 |
| Cl (mL.h -1 )* | CL | 891 | mL/h | 3.7 |
| 𝛽 𝐵𝑊 𝑉 | allometric_exponent | 1.45 |  | 35.1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. None of the extracted parameters is tinzaparin's own; they describe tinzaparin anti-Xa. Extracted — tinzaparin anti-Xa: V 3.66e+03 mL, CL 891 mL.h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tinzaparin, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Ka (h -1 ) | `Q49` · kabs | 0.079 | h -1 | 2.194e-05 | 1/s | 1/h | 12.4 | exact (1) | tab_0:row2:col1, tab_0:row2:col2 |
| V (mL)* | `Q61` · V | 3661 | mL | 0.003661 | m3 | L | 24.5 | llm (0.6) | tab_0:row3:col1, tab_0:row3:col2 |
| Cl (mL.h -1 )* | `Q22` · CL | 891 | mL/h | 2.475e-07 | m3/s | L/h | 3.7 | llm_confirmed (0.6) | tab_0:row4:col1, tab_0:row4:col2 |
| 𝛽 𝐵𝑊 𝑉 | `Q319` · allometric_exponent | 1.45 |  |  |  |  | 35.1 | llm (0.6) | tab_0:row6:col1, tab_0:row6:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional (%)' routed out of structural estimates ('Residual error model')
- dropped duplicate Q319 ('𝛽 𝐵𝑊 𝐶𝑙', value '0.87') — already have one for this compound
- dropped value-less row: '𝜼 𝑽'
- dropped value-less row: '𝜼 𝑪𝒍'
- implicit units: 'V (mL)*' → mL (from the paper text: "The paper text states: 'Mean values were 0.079 h -1 , 3661 mL, 891 mL.h -1 for constant of absorption, volume of distrib")
- implicit units: 'Cl (mL.h -1 )*' → mL/h (from the paper text: "The paper text states: 'Mean values were 0.079 h -1 , 3661 mL, 891 mL.h -1 for constant of absorption, volume of distrib")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (V (mL)*); Q22 (Cl (mL.h -1 )*)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tinzaparin anti-Xa
- molar mass: no plausible PubChem entry for 'tinzaparin anti-Xa' ('tinzaparin') — left in mass units
- molar mass: none found for 'tinzaparin' — its concentrations stay mass-only
- molar mass: none found for 'tinzaparin anti-Xa' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell tab_0:row9:col1 = '128% (11.6)'
- unparsed cell tab_0:row10:col1 = '42% (6.9)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.727 (8/11 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[β bw v]` | 1.45 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tinzaparin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | tinzaparin anti-Xa | unknown | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_0:row4:col1', 'tab_0:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_0:row2:col1', 'tab_0:row2:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_0:row3:col1', 'tab_0:row3:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 891 | ['tab_0:row4:col1', 'tab_0:row4:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.891 L/h | ['tab_0:row4:col1', 'tab_0:row4:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.66 L | ['tab_0:row3:col1', 'tab_0:row3:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btinzaparin%5D%20Tinzaparin_GouinThibault2024_reference&body=Drug%3A%20tinzaparin%0ARecord%3A%20Tinzaparin_GouinThibault2024_reference%0APaper%3A%20Gouin-Thibault_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tinzaparin/Tinzaparin_GouinThibault2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 16:46 UTC</sub>
