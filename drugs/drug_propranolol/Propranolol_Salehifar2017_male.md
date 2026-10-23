<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;propranolol&quot;,&quot;href&quot;:&quot;drugs/drug_propranolol/&quot;},{&quot;label&quot;:&quot;Salehifar_2017 \u00b7 male&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propranolol_Takechi2018_reference&quot;,&quot;label&quot;:&quot;Takechi_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propranolol/Propranolol_Takechi2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# propranolol — `Propranolol_Salehifar2017_male`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's terminal half-life (model/paper ratio 0.0989); the clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="propranolol" model-id="Propranolol_Salehifar2017_male" status="needs_review" stale="false" population="healthy Iranian adults" measured-compound="propranolol" parameterization="mechanistic" topology="1C"></div>

## Citation
Salehifar E, Ebrahim S, Shiran MR, Faramarzi F, Askari Rad H, Avan R et al. Pharmacokinetic Parameters and Over-Responsiveness of Iranian Population to Propranolol. Advanced pharmaceutical bulletin 7(2):195–202 (2017).
  ·  DOI: [10.15171/apb.2017.024](https://doi.org/10.15171/apb.2017.024)

## Population and dosing

**Population:** healthy Iranian adults · condition healthy · age group adult · n = ? The JSON schema requires valid JSON. 20 is valid..

**Dosing:** 40 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cp max (ng/ml) | Cmax | 35.9 | ng/ml |
| T max (min) | tmax | 105 | min |
| Vd (Lit) | V | 360.9 | L |
| Cl (Lit/hr) | CL | 128.4 | L/h |
| Ka (hr -1) | kabs | 0.5 | hr -1 |
| T½α (hr) | t1/2α | 0.77 | hr |
| T½β (hr) | t1/2β | 19.7 | hr |
| T½ (hr) | t1/2z | 2.1 | hr |
| AUC 0-2 (ng×hr/ml) | AUCt | 32.7 | ng*h/mL |
| AUC 0-10 (ng×hr/ml) | AUC | 169.2 | ng*h/mL |
| AUC 0-∞ (ng×hr/ml) | AUC∞ | 169.6 | ng*h/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (model/paper ratio 0.0989); the clearance plausibility check could not be computed.**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — propranolol: Cmax 35.9 ng/ml, tmax 105 min, V 361 L, CL 128 L/h, kabs 0.5 hr -1, t1/2α 0.77 hr, t1/2β 19.7 hr, t1/2z 2.1 hr, … (+3).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of auc 0-10: this record has 169.2, the second reading none; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cp max (ng/ml) | `Q32` · Cmax | 35.9 | ng/ml |  |  | ng/ml | llm (0.6) | T2:row3:col1, T2:row3:col2, T2:row3:col3 |
| T max (min) | `Q56` · tmax | 105 | min | 6300 | s | min | space_fold (0.95) | T2:row4:col1, T2:row4:col2, T2:row4:col3 |
| Vd (Lit) | `Q61` · V | 360.9 | L | 0.3609 | m3 | L | exact (1) | T2:row5:col1, T2:row5:col2, T2:row5:col3 |
| Cl (Lit/hr) | `Q22` · CL | 128.4 | L/h | 3.567e-05 | m3/s | L/h | exact (1) | T2:row7:col1, T2:row7:col2, T2:row7:col3 |
| Ka (hr -1) | `Q49` · kabs | 0.5 | hr -1 | 0.0001389 | 1/s | 1/h | exact (1) | T2:row9:col1, T2:row9:col2, T2:row9:col3 |
| T½α (hr) | `Q59` · t1/2α | 0.77 | hr | 2772 | s | h | llm (0.6) | T2:row10:col1, T2:row10:col2, T2:row10:col3 |
| T½β (hr) | `Q60` · t1/2β | 19.7 | hr | 7.092e+04 | s | h | llm (0.6) | T2:row11:col1, T2:row11:col2, T2:row11:col3 |
| T½ (hr) | `Q57` · t1/2z | 2.1 | hr | 7560 | s | h | llm (0.6) | T2:row12:col1, T2:row12:col2, T2:row12:col3 |
| AUC 0-2 (ng×hr/ml) | `Q19` · AUCt | 32.7 | ng*h/mL |  |  | ng*h/mL | llm_corrected (0.6) | T2:row13:col1, T2:row13:col2, T2:row13:col3 |
| AUC 0-10 (ng×hr/ml) | `Q88` · AUC | 169.2 | ng*h/mL |  |  | ng*h/mL | llm_confirmed (0.6) | T2:row14:col1, T2:row14:col2, T2:row14:col3 |
| AUC 0-∞ (ng×hr/ml) | `Q17` · AUC∞ | 169.6 | ng*h/mL |  |  | ng*h/mL | space_fold (0.95) | T2:row15:col1, T2:row15:col2, T2:row15:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for '\u200dDose (mg/kg)'; source reconciliation required
- table representations disagree for 'Cp max (ng/ml)'; source reconciliation required
- table representations disagree for 'T max (min)'; source reconciliation required
- table representations disagree for 'Vd (Lit)'; source reconciliation required
- table representations disagree for 'Vd (Lit/Kg)'; source reconciliation required
- table representations disagree for 'Cl (Lit/hr)'; source reconciliation required
- table representations disagree for 'Cl (Lit /Kg/hr)'; source reconciliation required
- table representations disagree for 'Ka (hr -1)'; source reconciliation required
- table representations disagree for 'T½α (hr)'; source reconciliation required
- table representations disagree for 'T½β (hr)'; source reconciliation required
- table representations disagree for 'T½ (hr)'; source reconciliation required
- table representations disagree for 'AUC 0-2 (ng×hr/ml)'; source reconciliation required
- table representations disagree for 'AUC 0-10 (ng×hr/ml)'; source reconciliation required
- table representations disagree for 'AUC 0-∞ (ng×hr/ml)'; source reconciliation required
- table representations disagree for 'pH at time zero urine'; source reconciliation required
- table representations disagree for 'pH at time 4hr urine'; source reconciliation required
- dropped unlinked row (NIL): '\u200dDose (mg/kg)' — extend the ontology if this is a real PK parameter (source ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col3'])
- unit_dimension_unknown: 'N=10' (V)
- dropped duplicate Q61 ('Vd (Lit/Kg)', value '4.95') — already have one for this compound
- unit_dimension_unknown: 'N=10' (CL)
- dropped duplicate Q22 ('Cl (Lit /Kg/hr)', value '1.77') — already have one for this compound
- unit_dimension_unknown: 'ng×hr/ml' (AUCt)
- unit_dimension_unknown: 'ng×hr/ml' (AUC)
- unit_dimension_unknown: 'ng×hr/ml' (AUC∞)
- dropped unlinked row (NIL): 'pH at time zero urine' — extend the ontology if this is a real PK parameter (source ['T2:row16:col1', 'T2:row16:col2', 'T2:row16:col3'])
- dropped unlinked row (NIL): 'pH at time 4hr urine' — extend the ontology if this is a real PK parameter (source ['T2:row17:col1', 'T2:row17:col2', 'T2:row17:col3'])
- implicit units: 'Vd (Lit)' → L (from the paper text: "Table 2 lists the variable as 'Vd (Lit)' and the paper text states 'apparent volume of distribution (V/F)... were 334.12")
- implicit units: 'Cl (Lit/hr)' → L/h (from the paper text: "Table 2 lists the variable as 'Cl (Lit/hr)' and the paper text states 'oral plasma clearance (CL/F) was 126.59 ml/hr' (n")
- implicit units: 'AUC 0-2 (ng×hr/ml)' → ng*h/mL (from the paper text: "Table 2 lists the variable as 'AUC 0-2 (ng×hr/ml)'.")
- implicit units: 'AUC 0-10 (ng×hr/ml)' → ng*h/mL (from the paper text: "Table 2 lists the variable as 'AUC 0-10 (ng×hr/ml)'.")
- implicit units: 'AUC 0-∞ (ng×hr/ml)' → ng*h/mL (from the paper text: "Table 2 lists the variable as 'AUC 0-∞ (ng×hr/ml)'.")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (Vd (Lit)); Q22 (Cl (Lit/hr))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=propranolol
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'male (n=10)' subgroup of Salehifar_2017 (paper reports 5 populations: female (n=10), male (n=10), mean of differences, other sources, this study)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table T2: ragged_grid
- table T2: representations disagree; selected evidence retained, not merged
- table Salehifar_2017_table_4: unparsed_numeric_cell
- companion parameter table 4 transcribed (10 record(s))
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.778 (14/18 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc 0-10]` | 169.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc 0-2].parameter_id` | Q88 | Q19 | mismatch |
| `gpt-oss-120b` | `parameters[variable]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[‍dose]` |  | 0.55 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | fail | 19.7 | 1.948 | 0.0989 | 0.25 | reported t½β |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['T2:row15:col1', 'T2:row15:col2', 'T2:row15:col3'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['T2:row13:col1', 'T2:row13:col2', 'T2:row13:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['T2:row7:col1', 'T2:row7:col2', 'T2:row7:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['T2:row9:col1', 'T2:row9:col2', 'T2:row9:col3'] |
| C5_dimension_Q56 | pass | [time] |  |  |  | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col3'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['T2:row12:col1', 'T2:row12:col2', 'T2:row12:col3'] |
| C5_dimension_Q59 | pass | [time] |  |  |  | ['T2:row10:col1', 'T2:row10:col2', 'T2:row10:col3'] |
| C5_dimension_Q60 | pass | [time] |  |  |  | ['T2:row11:col1', 'T2:row11:col2', 'T2:row11:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['T2:row5:col1', 'T2:row5:col2', 'T2:row5:col3'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['T2:row14:col1', 'T2:row14:col2', 'T2:row14:col3'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 128.4 |  |  | ['T2:row7:col1', 'T2:row7:col2', 'T2:row7:col3'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 128 L/h |  |  | ['T2:row7:col1', 'T2:row7:col2', 'T2:row7:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 361 L |  |  | ['T2:row5:col1', 'T2:row5:col2', 'T2:row5:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpropranolol%5D%20Propranolol_Salehifar2017_male&body=Drug%3A%20propranolol%0ARecord%3A%20Propranolol_Salehifar2017_male%0APaper%3A%20Salehifar_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_propranolol/Propranolol_Salehifar2017_male%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 12:33 UTC</sub>
