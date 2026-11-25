<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;tolcapone&quot;,&quot;href&quot;:&quot;drugs/drug_tolcapone/&quot;},{&quot;label&quot;:&quot;Jorga_2000 \u00b7 fluctuator_model_s_e_of_the_estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat&quot;,&quot;label&quot;:&quot;Jorga_2000_final_non_fluctuator_model_final_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolcapone/Tolcapone_Jorga2000_final_non_fluctuator_model_final_estimat.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolcapone_Jorga2000_non_fluctuator_model_s_e_of_the_estimate&quot;,&quot;label&quot;:&quot;Jorga_2000_non_fluctuator_model_s_e_of_the_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolcapone/Tolcapone_Jorga2000_non_fluctuator_model_s_e_of_the_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tolcapone — `Tolcapone_Jorga2000_fluctuator_model_s_e_of_the_estimate`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> V and CLint have no unit.

<div class="pk-model-meta" hidden drug="tolcapone" model-id="Tolcapone_Jorga2000_fluctuator_model_s_e_of_the_estimate" status="needs_review" stale="false" population="patients with Parkinson&#39;s disease" measured-compound="tolcapone" parameterization="mechanistic" topology="3C"></div>

## Citation
Jorga K, Fotteler B, Banken L, Snell P, Steimer JL. Population pharmacokinetics of tolcapone in parkinsonian patients in dose finding studies. British journal of clinical pharmacology 49(1):39–48 (2000).
  ·  DOI: [10.1046/j.1365-2125.2000.00113.x](https://doi.org/10.1046/j.1365-2125.2000.00113.x)

## Population and dosing

**Population:** patients with Parkinson's disease · condition Parkinson's disease · age group adult.

**Dosing:** 50, 200, 400 mg, oral, multiple, every 8 h.

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (l h⁻¹) | CL | 0.2 | l h⁻¹ |
| Vc (l) | V1 | 4.5 | l |
| Vp (l) | V2 | 3.6 | l |
| Q (l h⁻¹) | Q | 2.0 | l h⁻¹ |
| ka (h⁻¹) | kabs | 0.6 | h⁻¹ |
| θFood(F) | equation variable | 0.04 |  |
| θDose400mg (V) | V | 0.30 |  |
| θAlbumin (Vp) | CLint | 1.09 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**V and CLint have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — tolcapone: CL 0.2 l h⁻¹, V1 4.5 l, V2 3.6 l, Q 2 l h⁻¹, kabs 0.6 h⁻¹, V 0.3, CLint 1.09.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of θalbumin: this record has 1.09, the second reading none; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (l h⁻¹) | `Q22` · CL | 0.2 | l h⁻¹ | 5.556e-08 | m3/s | l/h | exact (1) | Jorga_2000_table_3:row1:col2 |
| Vc (l) | `Q63` · V1 | 4.5 | l | 0.0045 | m3 | l | exact (1) | Jorga_2000_table_3:row2:col2 |
| Vp (l) | `Q64` · V2 | 3.6 | l | 0.0036 | m3 | l | exact (1) | Jorga_2000_table_3:row3:col2 |
| Q (l h⁻¹) | `Q30` · Q | 2.0 | l h⁻¹ | 5.556e-07 | m3/s | l/h | exact (1) | Jorga_2000_table_3:row4:col2 |
| ka (h⁻¹) | `Q49` · kabs | 0.6 | h⁻¹ | 0.0001667 | 1/s | 1/h | exact (1) | Jorga_2000_table_3:row5:col2 |
| θFood(F) | `Q900` · equation variable | 0.04 |  | 0.04 |  |  | llm (0.6) | Jorga_2000_table_3:row12:col2 |
| θDose400mg (V) | `Q61` · V | 0.30 |  |  |  |  | llm (0.6) | Jorga_2000_table_3:row19:col2 |
| θAlbumin (Vp) | `Q3` · CLint | 1.09 |  |  |  |  | llm (0.6) | Jorga_2000_table_3:row20:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iov: 'IOV (Vp)' routed out of structural estimates ('Inter-occasion variability σ²')
- 'θFood(F)': unit 'F' is a parameter symbol — dropped
- unit_dimension_mismatch: 'θLBW(CL)' → Q22 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('θLBW(CL)', value '0.14') — already have one for this compound
- unit_dimension_mismatch: 'θProtein(CL)' → Q30 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('θProtein(CL)', value '0.45') — already have one for this compound
- dropped duplicate Q63 ('θLBW(Vc)', value '0.45') — already have one for this compound
- 'θDose50mg (V)': unit 'V' is a parameter symbol — dropped
- dropped duplicate Q900 ('θDose50mg (V)', value '0.08') — already have one for this compound
- 'θDose400mg (V)': unit 'V' is a parameter symbol — dropped
- unit_dimension_unknown: 'mult' (equation variable)
- dropped duplicate Q900 ('ε (mult)', value '0.03') — already have one for this compound
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (l h⁻¹)); Q63 (Vc (l)); Q64 (Vp (l)); Q30 (Q (l h⁻¹)); Q61 (θDose400mg (V))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tolcapone
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- population split: 'fluctuator model s.e. of the estimate' subgroup of Jorga_2000 (paper reports 6 populations: fluctuator model final estimate, fluctuator model s.e. of the estimate, fluctuators, non-fluctuator model final estimate, non-fluctuator model s.e. of the estimate, non-fluctuators)

**Extraction notes:**
- companion parameter table 4 transcribed (10 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.714 (10/14 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θalbumin]` | 1.09 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θdose400mg]` | 0.30 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θdose50mg]` |  | 0.08 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θfood].parameter_id` | Q900 | Q87 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Jorga_2000_table_3:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Jorga_2000_table_3:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Jorga_2000_table_3:row5:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Jorga_2000_table_3:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Jorga_2000_table_3:row3:col2'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [time] / [mass] |  | ['Jorga_2000_table_3:row20:col2'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 |  | ['Jorga_2000_table_3:row19:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.2 | ['Jorga_2000_table_3:row1:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.2 L/h | ['Jorga_2000_table_3:row1:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.5 L | ['Jorga_2000_table_3:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.6 L | ['Jorga_2000_table_3:row3:col2'] |

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btolcapone%5D%20Tolcapone_Jorga2000_fluctuator_model_s_e_of_the_estimate&body=Drug%3A%20tolcapone%0ARecord%3A%20Tolcapone_Jorga2000_fluctuator_model_s_e_of_the_estimate%0APaper%3A%20Jorga_2000%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tolcapone/Tolcapone_Jorga2000_fluctuator_model_s_e_of_the_estimate%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 15:55 UTC</sub>
