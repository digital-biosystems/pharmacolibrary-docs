<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;ipilimumab&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/&quot;},{&quot;label&quot;:&quot;Feng_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ipilimumab_van2019_reference&quot;,&quot;label&quot;:&quot;van_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_van2019_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ipilimumab_Hu2024_reference&quot;,&quot;label&quot;:&quot;Hu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ipilimumab_Leven2019_reference&quot;,&quot;label&quot;:&quot;Leven_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Leven2019_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ipilimumab_Shang2022_reference&quot;,&quot;label&quot;:&quot;Shang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Shang2022_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ipilimumab — `Ipilimumab_Feng2014_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CLb has no unit; the model does not reproduce the paper's terminal half-life (model/paper ratio 0.305).

<div class="pk-model-meta" hidden drug="ipilimumab" model-id="Ipilimumab_Feng2014_reference" status="needs_review" stale="false" population="patients with advanced melanoma" measured-compound="ipilimumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Feng Y, Masson E, Dai D, Parker SM, Berman D, Roy A. Model-based clinical pharmacology profiling of ipilimumab in patients with advanced melanoma. British journal of clinical pharmacology 78(1):106–117 (2014).
  ·  DOI: [10.1111/bcp.12323](https://doi.org/10.1111/bcp.12323)

## Population and dosing

**Population:** patients with advanced melanoma · condition advanced melanoma · age group adult.

**Dosing:** 0.3, 3, 10 mg kg−1, iv, multiple, every 216 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CLREF (l h−1) | CLnorm | 0.0150 | l h−1 |
| VcREF (l) | V | 4.15 | l |
| QREF (l h−1) | Q | 0.0411 | l h−1 |
| VpREF (l) | V3 | 3.11 | l |
| CLBW | CLb | 0.642 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667), qwen3.8-27b (not confirmed, agreement 0.615). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CLb has no unit; the model does not reproduce the paper's terminal half-life (model/paper ratio 0.305).**

Without a unit the value cannot be converted, so the model cannot use it. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — ipilimumab: CLnorm 0.015 l h−1, V 4.15 l, Q 0.0411 l h−1, V3 3.11 l, CLb 0.642.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of clbw: this record has 0.642, the second reading none; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CLREF (l h−1) | `Q354` · CLnorm | 0.0150 | l h−1 | 4.167e-09 | m3/s | l/h | llm (0.6) | tbl2:row2:col1 |
| VcREF (l) | `Q61` · V | 4.15 | l | 0.00415 | m3 | l | llm (0.6) | tbl2:row3:col1 |
| QREF (l h−1) | `Q30` · Q | 0.0411 | l h−1 | 1.142e-08 | m3/s | l/h | llm (0.6) | tbl2:row4:col1 |
| VpREF (l) | `Q77` · V3 | 3.11 | l | 0.00311 | m3 | l | llm (0.6) | tbl2:row5:col1 |
| CLBW | `Q23` · CLb | 0.642 |  |  |  |  | llm (0.6) | tbl2:row6:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2CL' routed out of structural estimates ('Inter-individual variability model parameters')
- table section residual_error: 'Proportional error (%)' routed out of structural estimates ('Residual error model parameters')
- table section residual_error: 'Additive error (μg ml−1)' routed out of structural estimates ('Residual error model parameters')
- table representations disagree for 'CLREF (l h−1)'; source reconciliation required
- table representations disagree for 'VcREF (l)'; source reconciliation required
- table representations disagree for 'QREF (l h−1)'; source reconciliation required
- table representations disagree for 'VpREF (l)'; source reconciliation required
- table representations disagree for 'CLBW'; source reconciliation required
- table representations disagree for 'VcBW'; source reconciliation required
- table representations disagree for 'CLLDH'; source reconciliation required
- dropped duplicate Q61 ('VcBW', value '0.708') — already have one for this compound
- dropped unlinked row (NIL): 'CLLDH' — extend the ontology if this is a real PK parameter (source ['tbl2:row8:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ipilimumab
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- molar mass: none found for 'ipilimumab' — its concentrations stay mass-only

**Extraction notes:**
- table tbl2: missing_label
- table tbl2: unparsed_numeric_cell
- table tbl2: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (8/12 fields) | 4 |
| `qwen3.8-27b` | not confirmed | 0.615 (8/13 fields) | 5 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clbw]` | 0.642 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clref].parameter_id` | Q354 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[vcref].parameter_id` | Q61 | Q63 | mismatch |
| `gpt-oss-120b` | `parameters[vpref].parameter_id` | Q77 | Q64 | mismatch |
| `qwen3.8-27b` | `parameters[clbw]` |  | 0.642 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clref].parameter_id` | Q22 | Q26 | mismatch |
| `qwen3.8-27b` | `parameters[vcbw]` | 0.708 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[vcref].parameter_id` | Q63 | Q61 | mismatch |
| `qwen3.8-27b` | `parameters[vpref].parameter_id` | Q64 | Q63 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | fail | 14.7 | 4.481 | 0.3048 | 0.25 | reported t½β |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['tbl2:row4:col1'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  |  |  | ['tbl2:row2:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['tbl2:row3:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  |  |  | ['tbl2:row5:col1'] |
| C5_unit_missing_Q23 | fail | [length] ** 3 / [time] |  |  |  | ['tbl2:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.642 |  |  | ['tbl2:row6:col1'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.15 L |  |  | ['tbl2:row3:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bipilimumab%5D%20Ipilimumab_Feng2014_reference&body=Drug%3A%20ipilimumab%0ARecord%3A%20Ipilimumab_Feng2014_reference%0APaper%3A%20Feng_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ipilimumab/Ipilimumab_Feng2014_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 14:13 UTC</sub>
