<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadopiclenol&quot;,&quot;href&quot;:&quot;drugs/drug_gadopiclenol/&quot;},{&quot;label&quot;:&quot;Eto_2025 \u00b7 0_1_mmol_kg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gadopiclenol_Eto2025_0_025_mmol_kg&quot;,&quot;label&quot;:&quot;Eto_2025_0_025_mmol_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_025_mmol_kg.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gadopiclenol_Eto2025_0_05_mmol_kg&quot;,&quot;label&quot;:&quot;Eto_2025_0_05_mmol_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_05_mmol_kg.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gadopiclenol_Eto2025_0_1_mmol_kg&quot;,&quot;label&quot;:&quot;Eto_2025_0_1_mmol_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_1_mmol_kg.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gadopiclenol — `Gadopiclenol_Eto2025_0_1_mmol_kg`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="gadopiclenol" model-id="Gadopiclenol_Eto2025_0_1_mmol_kg" status="curated_candidate" stale="false" population="Japanese and non-Japanese subjects, including adults and pediatric patients" measured-compound="gadopiclenol" parameterization="mechanistic" topology="1C"></div>

## Citation
Eto T, Taoka T, Felices M, Pitrou C. Pharmacokinetics and safety of gadopiclenol in Japanese healthy volunteers. Japanese journal of radiology 43(12):1962–1970 (2025).
  ·  DOI: [10.1007/s11604-025-01842-1](https://doi.org/10.1007/s11604-025-01842-1)

## Population and dosing

**Population:** Japanese and non-Japanese subjects, including adults and pediatric patients · condition healthy and renal impairment · age group mixed.

**Dosing:** 0.025, 0.05, 0.1 mmol/kg, iv, single.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_1_mmol_kg/Gadopiclenol_Eto2025_0_1_mmol_kg.svg" alt="Gadopiclenol_Eto2025_0_1_mmol_kg diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Cmax (µg/mL) | Cmax | 992.0 | µg/mL |
| AUCinf (µg/mL.h) | AUC∞ | 1288 | µg/mL.h |
| AUCinf/Dose (µg/mL.h) | AUC/dose | 176 | µg/mL.h |
| t1/2 (h) | t1/2z | 1.73 | h |
| Vd (L) | V | 14.4 | L |
| Cl (L/h) | CL | 5.8 | L/h |
| Clr (L/h) | CLR | 6.0 | L/h |
| fe (%)* | fe | 103.5 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.267). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (Cmax, AUC∞ and AUC/dose), so that value has no SI equivalent.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of aucinf: this record has 1288, the second reading none; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (µg/mL) | `Q32` · Cmax | 992.0 | µg/mL |  |  | µg/ml | exact (1) | Eto_2025_table_2:row2:col6, Eto_2025_table_2:row2:col7, Eto_2025_table_2:row2:col8 |
| AUCinf (µg/mL.h) | `Q17` · AUC∞ | 1288 | µg/mL.h |  |  | µg/(h·ml) | exact (1) | Eto_2025_table_2:row4:col6, Eto_2025_table_2:row4:col7, Eto_2025_table_2:row4:col8 |
| AUCinf/Dose (µg/mL.h) | `Q189` · AUC/dose | 176 | µg/mL.h |  |  | µg/(h·ml) | exact (1) | Eto_2025_table_2:row6:col6, Eto_2025_table_2:row6:col7, Eto_2025_table_2:row6:col8 |
| t1/2 (h) | `Q57` · t1/2z | 1.73 | h | 6228 | s | h | exact (1) | Eto_2025_table_2:row8:col6, Eto_2025_table_2:row8:col7, Eto_2025_table_2:row8:col8 |
| Vd (L) | `Q61` · V | 14.4 | L | 0.0144 | m3 | l | exact (1) | Eto_2025_table_2:row10:col6, Eto_2025_table_2:row10:col7, Eto_2025_table_2:row10:col8 |
| Cl (L/h) | `Q22` · CL | 5.8 | L/h | 1.611e-06 | m3/s | l/h | exact (1) | Eto_2025_table_2:row12:col6, Eto_2025_table_2:row12:col7, Eto_2025_table_2:row12:col8 |
| Clr (L/h) | `Q26` · CLR | 6.0 | L/h | 1.667e-06 | m3/s | l/h | exact (1) | Eto_2025_table_2:row14:col6, Eto_2025_table_2:row14:col7, Eto_2025_table_2:row14:col8 |
| fe (%)* | `Q44` · fe | 103.5 |  |  |  |  | llm_confirmed (0.6) | Eto_2025_table_2:row16:col6, Eto_2025_table_2:row16:col7, Eto_2025_table_2:row16:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Study' — extend the ontology if this is a real PK parameter (source ['Eto_2025_table_2:row0:col7'])
- dropped unlinked row (NIL): 'n subjects' — extend the ontology if this is a real PK parameter (source ['Eto_2025_table_2:row1:col6', 'Eto_2025_table_2:row1:col7', 'Eto_2025_table_2:row1:col8'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gadopiclenol
- population split: '0.1 mmol/kg' subgroup of Eto_2025 (paper reports 3 populations: 0.025 mmol/kg, 0.05 mmol/kg, 0.1 mmol/kg)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Eto_2025_table_2:row0:col2 = 'Non-Japanese [7]'
- unparsed cell Eto_2025_table_2:row0:col4 = 'Non-Japanese [7]'
- unparsed cell Eto_2025_table_2:row0:col6 = 'Non-Japanese [7]'
- companion parameter table 2 transcribed (64 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.267 (4/15 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[aucinf/dose]` | 176 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[aucinf]` | 1288 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl]` | 5.8 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[clr]` | 6.0 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cmax]` | 992.0 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[fe (%)*]` | 103.5 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[t1/2]` | 1.73 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[total clearance]` |  | 5.3 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v1]` |  | 5.0 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v2]` |  | 5.6 | only_one_extracted |
| `qwen3.8-27b` | `parameters[vd].value` | 14.4 | 11.3 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 1.44 | 1.721 | 1.195 | 0.25 | reported t½β |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Eto_2025_table_2:row4:col6', 'Eto_2025_table_2:row4:col7', 'Eto_2025_table_2:row4:col8'] |
| C5_dimension_Q189 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Eto_2025_table_2:row6:col6', 'Eto_2025_table_2:row6:col7', 'Eto_2025_table_2:row6:col8'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Eto_2025_table_2:row12:col6', 'Eto_2025_table_2:row12:col7', 'Eto_2025_table_2:row12:col8'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  |  |  | ['Eto_2025_table_2:row14:col6', 'Eto_2025_table_2:row14:col7', 'Eto_2025_table_2:row14:col8'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Eto_2025_table_2:row2:col6', 'Eto_2025_table_2:row2:col7', 'Eto_2025_table_2:row2:col8'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Eto_2025_table_2:row8:col6', 'Eto_2025_table_2:row8:col7', 'Eto_2025_table_2:row8:col8'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['Eto_2025_table_2:row10:col6', 'Eto_2025_table_2:row10:col7', 'Eto_2025_table_2:row10:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 5.8 |  |  | ['Eto_2025_table_2:row12:col6', 'Eto_2025_table_2:row12:col7', 'Eto_2025_table_2:row12:col8'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.8 L/h |  |  | ['Eto_2025_table_2:row12:col6', 'Eto_2025_table_2:row12:col7', 'Eto_2025_table_2:row12:col8'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 14.4 L |  |  | ['Eto_2025_table_2:row10:col6', 'Eto_2025_table_2:row10:col7', 'Eto_2025_table_2:row10:col8'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=gadopiclenol) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | pass | 1.4 | 1.726 | 1.233 | h→SI vs simulated h |
| T1_t_half_beta | reference | pass | 1.4 | 1.726 | 1.233 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.43 | 1.726 | 1.207 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.44 | 1.726 | 1.199 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.7 | 1.726 | 1.015 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.5 | 1.726 | 1.151 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.8 | 1.726 | 0.959 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_1_mmol_kg/Gadopiclenol_Eto2025_0_1_mmol_kg_modelica.zip" download>Gadopiclenol_Eto2025_0_1_mmol_kg_modelica.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_1_mmol_kg/Gadopiclenol_Eto2025_0_1_mmol_kg_fmi.zip" download>Gadopiclenol_Eto2025_0_1_mmol_kg_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_1_mmol_kg/Gadopiclenol_Eto2025_0_1_mmol_kg_matlab.zip" download>Gadopiclenol_Eto2025_0_1_mmol_kg_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_1_mmol_kg/Gadopiclenol_Eto2025_0_1_mmol_kg_matlab_simbio.zip" download>Gadopiclenol_Eto2025_0_1_mmol_kg_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_1_mmol_kg/Gadopiclenol_Eto2025_0_1_mmol_kg_sbml.zip" download>Gadopiclenol_Eto2025_0_1_mmol_kg_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_1_mmol_kg/Gadopiclenol_Eto2025_0_1_mmol_kg_cellml.zip" download>Gadopiclenol_Eto2025_0_1_mmol_kg_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.9701 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.611e-06 | m3/s |
| input | model | `VdPerKg` | 0.0002057 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Eto T, Taoka T, Felices M, Pitrou C. Pharmacokinetics and safety of gadopiclenol in Japanese healthy volunteers. Japanese journal of radiology 43(12):1962–1970 (2025). [doi:10.1007/s11604-025-01842-1](https://doi.org/10.1007/s11604-025-01842-1)

**This record:** Pharmacolibrary v26.09, model `Gadopiclenol_Eto2025_0_1_mmol_kg`. <https://pharmacolibrary.github.io/#/drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_1_mmol_kg>

```bibtex
@misc{pharmacolibrary_GadopiclenolEto202501mmolkg,
  title  = {{Pharmacolibrary model Gadopiclenol_Eto2025_0_1_mmol_kg}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_1_mmol_kg},
  note   = {Parameters from doi:10.1007/s11604-025-01842-1},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_1_mmol_kg/Gadopiclenol_Eto2025_0_1_mmol_kg_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_1_mmol_kg/Gadopiclenol_Eto2025_0_1_mmol_kg_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Gadopiclenol_Eto2025_0_1_mmol_kg_params.json` · controls `Gadopiclenol_Eto2025_0_1_mmol_kg_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgadopiclenol%5D%20Gadopiclenol_Eto2025_0_1_mmol_kg&body=Drug%3A%20gadopiclenol%0ARecord%3A%20Gadopiclenol_Eto2025_0_1_mmol_kg%0APaper%3A%20Eto_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_1_mmol_kg%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 18:13 UTC</sub>
