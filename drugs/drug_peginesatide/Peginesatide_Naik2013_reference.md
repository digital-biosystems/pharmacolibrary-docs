<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;peginesatide&quot;,&quot;href&quot;:&quot;drugs/drug_peginesatide/&quot;},{&quot;label&quot;:&quot;Naik_2013 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# peginesatide — `Peginesatide_Naik2013_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:39 UTC (Needs review), but the paper was screened again on 2026-10-05 21:32 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The peginesatide record lacks any clearance parameter — only volumes (V2 35.6 mL/kg, V3 7.42 mL/kg, V 34.9 mL/kg) and Q 5.23 mL/kg/hr were extracted — so the disposition is incomplete and the model was held back.

<div class="pk-model-meta" hidden drug="peginesatide" model-id="Peginesatide_Naik2013_reference" status="needs_review" stale="true" population="patients with chronic kidney disease on dialysis" measured-compound="peginesatide" parameterization="mechanistic" topology="2C"></div>

## Citation
Naik H, Tsai MC, Fiedler-Kelly J, Qiu P, Vakilynejad M. A Population Pharmacokinetic and Pharmacodynamic Analysis of Peginesatide in Patients with Chronic Kidney Disease on Dialysis. PloS one 8(6):e66422 (2013).
  ·  DOI: [10.1371/journal.pone.0066422](https://doi.org/10.1371/journal.pone.0066422)

## Population and dosing

**Population:** patients with chronic kidney disease on dialysis · condition chronic kidney disease · age group adult · n = 672.

**Dosing:** 2.1, 11.2 mg, iv, sc, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted, plus 5 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Maximum rate of elimination (Vmax), in ng/mL/hr | Vmax | 44.7 |  | 10.0 |  |
| Concentration needed to reach 50% of Vmax (KM),in ng/mL | Km | 1860 | ng/mL | 14.6 | 0.0575 (29.0% RSE) |
| Central volume of distribution (V2), in mL/kg | V1 | 35.6 | mL/kg | 2.7 |  |
| Absorption rate constant (Ka), in 1/hr | kabs | 0.00869 | 1/hr | 15.6 | 0.190 (32.0% RSE) |
| Subcutaneous bioavailability (F1) | Fab | 0.499 | F1 | 4.4 |  |
| Inter–compartmental clearance (Q), in mL/kg/hr | Q | 5.23 | mL/kg/hr |  |  |
| Peripheral volume of distribution (V3), in mL/kg | V2 | 7.42 | mL/kg | 10.3 | 0.100 (8.1% RSE) |
| theta_q319_bmi_power | theta_q319_bmi_power | -0.485 |  | 8.7 |  |
| theta_q335_age | theta_q335_age | -0.125 |  | 19.0 |  |
| theta_km_weight_power | theta_km_weight_power | -0.190 |  | 25.5 |  |
| theta_q335_category | theta_q335_category | 0.482 |  | 22.4 |  |
| theta_kabs_category | theta_kabs_category | 0.00815 |  | 20.3 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.871). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The peginesatide record lacks any clearance parameter — only volumes (V2 35.6 mL/kg, V3 7.42 mL/kg, V 34.9 mL/kg) and Q 5.23 mL/kg/hr were extracted — so the disposition is incomplete and the model was held back.**

Only volume terms were extracted for peginesatide; no clearance was recorded, so a model would have needed a library default for the missing clearance and was therefore not built. A reference check also failed without computing a comparison (ratio None), so it is inconclusive rather than a demonstrated fault. A second reader further disagreed on covariate forms, reading the BMI effect on Q (-0.485) as a BMI power on the central volume instead, and did not confirm the mean volume of 34.9 mL/kg. Extracted — peginesatide: Vmax 44.7, Km 1.86e+03, V2 35.6, kabs 0.00869, Fab 0.499 F1, Q 5.23, V3 7.42, V 34.9 mL/kg.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has none, the second reading peginesatide → hemoglobin (pharmacodynamic_stimulation); it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Maximum rate of elimination (Vmax), in ng/mL/hr | `Q66` · Vmax | 44.7 |  |  |  |  | 10.0 | llm_confirmed (0.6) | pone-0066422-t006:row1:col1, pone-0066422-t006:row1:col2, pone-0066422-t006:row1:col3, pone-0066422-t006:row1:col4 |  |
| Concentration needed to reach 50% of Vmax (KM),in ng/mL | `Q1` · Km | 1860 | ng/mL |  |  | ng/mL | 14.6 | llm_corrected (0.6) | pone-0066422-t006:row2:col1, pone-0066422-t006:row2:col2, pone-0066422-t006:row2:col3, pone-0066422-t006:row2:col4 | 0.0575 (29.0% RSE) |
| Central volume of distribution (V2), in mL/kg | `Q63` · V1 | 35.6 | mL/kg | 0.002492 | m3 | L | 2.7 | boundary_compartment (0.9) | pone-0066422-t006:row3:col1, pone-0066422-t006:row3:col2, pone-0066422-t006:row3:col3, pone-0066422-t006:row3:col4 |  |
| Absorption rate constant (Ka), in 1/hr | `Q49` · kabs | 0.00869 | 1/hr | 2.414e-06 | 1/s | 1/h | 15.6 | llm_confirmed (0.6) | pone-0066422-t006:row4:col1, pone-0066422-t006:row4:col2, pone-0066422-t006:row4:col3, pone-0066422-t006:row4:col4 | 0.190 (32.0% RSE) |
| Subcutaneous bioavailability (F1) | `Q40` · Fab | 0.499 | F1 |  |  |  | 4.4 | llm_confirmed (0.6) | pone-0066422-t006:row5:col1, pone-0066422-t006:row5:col2, pone-0066422-t006:row5:col3, pone-0066422-t006:row5:col4 |  |
| Inter–compartmental clearance (Q), in mL/kg/hr | `Q30` · Q | 5.23 | mL/kg/hr | 1.017e-07 | m3/s | L/h |  | llm_confirmed (0.6) | pone-0066422-t006:row6:col1, pone-0066422-t006:row6:col2 |  |
| Peripheral volume of distribution (V3), in mL/kg | `Q64` · V2 | 7.42 | mL/kg | 0.0005194 | m3 | L | 10.3 | boundary_compartment (0.9) | pone-0066422-t006:row7:col1, pone-0066422-t006:row7:col2, pone-0066422-t006:row7:col3, pone-0066422-t006:row7:col4 | 0.100 (8.1% RSE) |
| theta_q319_bmi_power | `Q900` · theta_q319_bmi_power | -0.485 |  |  |  |  | 8.7 |  | pone-0066422-t006:row8:col1, pone-0066422-t006:row8:col2 |  |
| theta_q335_age | `Q900` · theta_q335_age | -0.125 |  |  |  |  | 19.0 |  | pone-0066422-t006:row9:col1, pone-0066422-t006:row9:col2 |  |
| theta_km_weight_power | `Q900` · theta_km_weight_power | -0.190 |  |  |  |  | 25.5 |  | pone-0066422-t006:row10:col1, pone-0066422-t006:row10:col2 |  |
| theta_q335_category | `Q900` · theta_q335_category | 0.482 |  |  |  |  | 22.4 |  | pone-0066422-t006:row11:col1, pone-0066422-t006:row11:col2, pone-0066422-t006:row11:col3, pone-0066422-t006:row11:col4 |  |
| theta_kabs_category | `Q900` · theta_kabs_category | 0.00815 |  |  |  |  | 20.3 |  | pone-0066422-t006:row13:col1, pone-0066422-t006:row13:col2, pone-0066422-t006:row13:col3, pone-0066422-t006:row13:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- routed 'Cov between V2 and Ka' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q335 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Maximum rate of elimination (Vmax), in ng/mL/hr' — the LLM proposed 'ng/mL/hr', whose dimension does not fit Q66; left unset
- implicit units: 'Concentration needed to reach 50% of Vmax (KM),in ng/mL' → ng/mL (from the paper text: "The parameter list explicitly states: 'Concentration needed to reach 50% of Vmax (KM),in ng/mL = 1860'")
- implicit units: 'Central volume of distribution (V2), in mL/kg' → mL/kg (from the paper text: "The parameter list explicitly states: 'Central volume of distribution (V2), in mL/kg = 35.6'")
- implicit units: 'Absorption rate constant (Ka), in 1/hr' → 1/hr (from the paper text: "The parameter list explicitly states: 'Absorption rate constant (Ka), in 1/hr = 0.00869'")
- implicit units: 'Inter–compartmental clearance (Q), in mL/kg/hr' → mL/kg/hr (from the paper text: "The parameter list explicitly states: 'Inter–compartmental clearance (Q), in mL/kg/hr = 5.23'")
- implicit units: 'Peripheral volume of distribution (V3), in mL/kg' → mL/kg (from the paper text: "The parameter list explicitly states: 'Peripheral volume of distribution (V3), in mL/kg = 7.42'")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=peginesatide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- molar mass: none found for 'peginesatide' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pone-0066422-t006:row8:col3 = '–0.685 to –0.280'
- unparsed cell pone-0066422-t006:row8:col4 = '–0.685 to –0.280'
- unparsed cell pone-0066422-t006:row9:col3 = '–0.238 to –0.0015'
- unparsed cell pone-0066422-t006:row9:col4 = '–0.238 to –0.0015'
- unparsed cell pone-0066422-t006:row10:col3 = '–0.307 to –0.0895'
- unparsed cell pone-0066422-t006:row10:col4 = '–0.307 to –0.0895'
- unparsed cell pone-0066422-t006:row16:col3 = '–0.136 to –0.0342'
- unparsed cell pone-0066422-t006:row16:col4 = '–0.136 to –0.0342'
- LLM selected parameter table(s) 6

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.871 (27/31 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['peginesatide', 'hemoglobin', 'pharmacodynamic_stimulation']] | mismatch |
| `gpt-oss:120b` | `parameters[peripheral volume of distribution (v3), in ml/kg].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss:120b` | `parameters[theta_q319_bmi_power]` | -0.485 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v2_bmi_power]` |  | -0.485 | only_one_extracted |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['pone-0066422-t006:row2:col1', 'pone-0066422-t006:row2:col2', 'pone-0066422-t006:row2:col3', 'pone-0066422-t006:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['pone-0066422-t006:row6:col1', 'pone-0066422-t006:row6:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pone-0066422-t006:row4:col1', 'pone-0066422-t006:row4:col2', 'pone-0066422-t006:row4:col3', 'pone-0066422-t006:row4:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['pone-0066422-t006:row3:col1', 'pone-0066422-t006:row3:col2', 'pone-0066422-t006:row3:col3', 'pone-0066422-t006:row3:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['pone-0066422-t006:row7:col1', 'pone-0066422-t006:row7:col2', 'pone-0066422-t006:row7:col3', 'pone-0066422-t006:row7:col4'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 |  | ['pone-0066422-t006:row1:col1', 'pone-0066422-t006:row1:col2', 'pone-0066422-t006:row1:col3', 'pone-0066422-t006:row1:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.49 L | ['pone-0066422-t006:row3:col1', 'pone-0066422-t006:row3:col2', 'pone-0066422-t006:row3:col3', 'pone-0066422-t006:row3:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.519 L | ['pone-0066422-t006:row7:col1', 'pone-0066422-t006:row7:col2', 'pone-0066422-t006:row7:col3', 'pone-0066422-t006:row7:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpeginesatide%5D%20Peginesatide_Naik2013_reference&body=Drug%3A%20peginesatide%0ARecord%3A%20Peginesatide_Naik2013_reference%0APaper%3A%20Naik_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_peginesatide/Peginesatide_Naik2013_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-05 21:32 UTC</sub>
