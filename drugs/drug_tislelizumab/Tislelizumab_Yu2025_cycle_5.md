<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;tislelizumab&quot;,&quot;href&quot;:&quot;drugs/drug_tislelizumab/&quot;},{&quot;label&quot;:&quot;Yu_2025 \u00b7 cycle_5&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tislelizumab_Kim2025_reference&quot;,&quot;label&quot;:&quot;Kim_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tislelizumab/Tislelizumab_Kim2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tislelizumab — `Tislelizumab_Yu2025_cycle_5`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="tislelizumab" model-id="Tislelizumab_Yu2025_cycle_5" status="needs_review" stale="false" population="patients with advanced solid tumors or cHL" measured-compound="tislelizumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Yu T, Wu CY, Sahasranaman S, Tian X, Fei Li Y, Tang Z et al. Clinical Pharmacology Overview of Tislelizumab in Patients With Advanced Tumors With a Focus on Racial Impact. Clinical and translational science 18(5):e70221 (2025).
  ·  DOI: [10.1111/cts.70221](https://doi.org/10.1111/cts.70221)

## Population and dosing

**Population:** patients with advanced solid tumors or cHL · condition advanced solid tumors or cHL · age group adult.

**Dosing:** 200 mg, iv, multiple, every 2160 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0‐tau (μg/mL*day) | AUCt | 12 | μg/mL*day |
| Cmax (μg/mL) | Cmax | 12 | μg/mL |
| Ctrough (μg/mL) | Ctrough | 11 | μg/mL |
| CLss (L/day) | CL | 12 | L/day |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.889). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. A reported unit could not be converted (AUCt, Cmax and Ctrough), so that value has no SI equivalent. Extracted — tislelizumab: AUCt 12 μg/mL*day, Cmax 12 μg/mL, Ctrough 11 μg/mL, CL 12 L/day.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[auc0‐tau].parameter_id`: this record has Q19, the second reading Q18. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0‐tau (μg/mL*day) | `Q19` · AUCt | 12 | μg/mL*day |  |  | µg/(d·ml) | llm (0.6) | cts70221-tbl-0002:row2:col3 |
| Cmax (μg/mL) | `Q32` · Cmax | 12 | μg/mL |  |  | µg/ml | exact (1) | cts70221-tbl-0002:row3:col3 |
| Ctrough (μg/mL) | `Q37` · Ctrough | 11 | μg/mL |  |  | µg/ml | exact (1) | cts70221-tbl-0002:row4:col3 |
| CLss (L/day) | `Q22` · CL | 12 | L/day | 1.389e-07 | m3/s | l/d | llm (0.6) | cts70221-tbl-0002:row6:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tislelizumab
- population split: 'cycle 5' subgroup of Yu_2025 (paper reports 2 populations: cycle 1, cycle 5)
- molar mass: none found for 'tislelizumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell cts70221-tbl-0002:row2:col2 = '582.0 (516.0, 657.0)'
- unparsed cell cts70221-tbl-0002:row2:col4 = '1073.0 (881.0, 1307.0)'
- unparsed cell cts70221-tbl-0002:row2:col5 = '1.9 (1.6, 2.2)'
- unparsed cell cts70221-tbl-0002:row3:col2 = '66.5 (60.5, 73.2)'
- unparsed cell cts70221-tbl-0002:row3:col4 = '126.0 (104.0, 153.0)'
- unparsed cell cts70221-tbl-0002:row3:col5 = '1.9 (1.7, 2.2)'
- unparsed cell cts70221-tbl-0002:row4:col2 = '15.0 (12.5, 18.1)'
- unparsed cell cts70221-tbl-0002:row4:col4 = '30.1 (24.5, 37.0)'
- unparsed cell cts70221-tbl-0002:row4:col5 = '2.1 (1.7, 2.6)'
- unparsed cell cts70221-tbl-0002:row5:col2 = '0.2 (0.2, 0.3)'
- unparsed cell cts70221-tbl-0002:row6:col4 = '0.2 (0.2, 0.2)'
- unparsed cell Yu_2025_table_1:row2:col9 = '1.6 (1.2, 2.1) 2.0 (1.5, 2.6)'
- unparsed cell Yu_2025_table_1:row3:col9 = '2.7 (2.1, 3.4) 3.1 (2.3, 4.2)'
- unparsed cell Yu_2025_table_1:row4:col9 = '1.6 (1.3, 1.8) 1.9 (1.5, 2.5)'
- unparsed cell Yu_2025_table_1:row5:col6 = '476 (NE)'
- unparsed cell Yu_2025_table_1:row5:col7 = '3453 (NE)'
- unparsed cell Yu_2025_table_1:row5:col8 = '8.09 (NE)'
- unparsed cell Yu_2025_table_1:row5:col9 = '1.3 (NE, NE) 1.4 (NE, NE)'
- unparsed cell Yu_2025_table_1:row9:col9 = '1.2 (1.0,1.4) 1.6 (1.2, 2.1)'
- companion parameter table 1 transcribed (49 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.889 (8/9 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0‐tau].parameter_id` | Q19 | Q18 | mismatch |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['cts70221-tbl-0002:row2:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cts70221-tbl-0002:row6:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['cts70221-tbl-0002:row3:col3'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  | ['cts70221-tbl-0002:row4:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 12 | ['cts70221-tbl-0002:row6:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.5 L/h | ['cts70221-tbl-0002:row6:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btislelizumab%5D%20Tislelizumab_Yu2025_cycle_5&body=Drug%3A%20tislelizumab%0ARecord%3A%20Tislelizumab_Yu2025_cycle_5%0APaper%3A%20Yu_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tislelizumab/Tislelizumab_Yu2025_cycle_5%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 21:11 UTC</sub>
