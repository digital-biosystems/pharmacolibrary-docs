<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefiderocol&quot;,&quot;href&quot;:&quot;drugs/drug_cefiderocol/&quot;},{&quot;label&quot;:&quot;Bilal_2021 \u00b7 14c_cf_studya&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefiderocol_Zhang2025_reference&quot;,&quot;label&quot;:&quot;Zhang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefiderocol/Cefiderocol_Zhang2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefiderocol_Bilal2021_14c_cf_studya&quot;,&quot;label&quot;:&quot;Bilal_2021_14c_cf_studya&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefiderocol/Cefiderocol_Bilal2021_14c_cf_studya.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Cefiderocol_Bilal2021_final&quot;,&quot;label&quot;:&quot;Bilal_2021_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefiderocol/Cefiderocol_Bilal2021_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefiderocol_Bilal2021_final_final_model_with_crcla&quot;,&quot;label&quot;:&quot;Bilal_2021_final_final_model_with_crcla&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefiderocol/Cefiderocol_Bilal2021_final_final_model_with_crcla.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefiderocol_Koenig2025_reference&quot;,&quot;label&quot;:&quot;Koenig_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefiderocol/Cefiderocol_Koenig2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefiderocol_SanzCodina2024_reference&quot;,&quot;label&quot;:&quot;Sanz-Codina_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefiderocol/Cefiderocol_SanzCodina2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefiderocol_Zahr2022_reference&quot;,&quot;label&quot;:&quot;Zahr_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefiderocol/Cefiderocol_Zahr2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefiderocol — `Cefiderocol_Bilal2021_14c_cf_studya`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 0.0744, model 0.00617); the model does not reproduce the paper's time of the peak (tmax) (paper 1, model 0.183) (+1 more).

<div class="pk-model-meta" hidden drug="cefiderocol" model-id="Cefiderocol_Bilal2021_14c_cf_studya" status="needs_review" stale="false" population="mixed" measured-compound="cefiderocol" parameterization="mechanistic" topology="1C"></div>

## Citation
Bilal M, El Tabei L, Büsker S, Krauss C, Fuhr U, Taubert M. Clinical Pharmacokinetics and Pharmacodynamics of Cefiderocol. Clinical pharmacokinetics 60(12):1495–1508 (2021).
  ·  DOI: [10.1007/s40262-021-01063-5](https://doi.org/10.1007/s40262-021-01063-5)

## Population and dosing

**Population:** mixed · condition mixed · age group adult · n = 516.

**Dosing:** 100, 1000, 2000 mg, iv, multiple, every 8 h.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_cefiderocol/Cefiderocol_Bilal2021_14c_cf_studya/Cefiderocol_Bilal2021_14c_cf_studya.svg" alt="Cefiderocol_Bilal2021_14c_cf_studya diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (mg/L) | Cmax | 72.9 | mg/L |
| AUC0–last (mg∙h/L) | AUClast | 171 | mg∙h/L |
| AUC0–inf (mg∙h/L) | AUC∞ | 172 | mg∙h/L |
| t1/2,z (h) | t1/2z | 2.30 | h |
| CL (L/h) | CL | 4.78 | L/h |
| Vz (L) | V | 15.8 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 0.0744, model 0.00617); the model does not reproduce the paper's time of the peak (tmax) (paper 1, model 0.183) (+1 more).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (Cmax, AUClast and AUC∞), so that value has no SI equivalent. Extracted — cefiderocol: Cmax 72.9 mg/L, AUClast 171 mg∙h/L, AUC∞ 172 mg∙h/L, t1/2z 2.3 h, CL 4.78 L/h, V 15.8 L.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (mg/L) | `Q32` · Cmax | 72.9 | mg/L |  |  | mg/l | exact (1) | Bilal_2021_table_1:row3:col5 |
| AUC0–last (mg∙h/L) | `Q74` · AUClast | 171 | mg∙h/L |  |  | (h·mg)/l | exact (1) | Bilal_2021_table_1:row5:col5 |
| AUC0–inf (mg∙h/L) | `Q17` · AUC∞ | 172 | mg∙h/L |  |  | (h·mg)/l | exact (1) | Bilal_2021_table_1:row6:col5 |
| t1/2,z (h) | `Q57` · t1/2z | 2.30 | h | 8280 | s | h | llm_confirmed (0.6) | Bilal_2021_table_1:row7:col5 |
| CL (L/h) | `Q22` · CL | 4.78 | L/h | 1.328e-06 | m3/s | l/h | exact (1) | Bilal_2021_table_1:row8:col5 |
| Vz (L) | `Q61` · V | 15.8 | L | 0.0158 | m3 | l | exact (1) | Bilal_2021_table_1:row9:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '(n = 6)' — extend the ontology if this is a real PK parameter (source ['Bilal_2021_table_1:row2:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cefiderocol
- population split: '[14c] cf-studya' subgroup of Bilal_2021 (paper reports 6 populations: [14c] cf-studya, final model* withcrcla (n = 3427), final model** with crcla(n = 2571), final model*** with crcla(n = 1624), phase i pk, safety, and tolerability study, phase i study in renally impaired subjects)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 1 transcribed (56 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Bilal_2021_table_1:row6:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Bilal_2021_table_1:row8:col5'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Bilal_2021_table_1:row3:col5'] |
| C5_dimension_Q57 | pass | [time] |  | ['Bilal_2021_table_1:row7:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Bilal_2021_table_1:row9:col5'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['Bilal_2021_table_1:row5:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.78 | ['Bilal_2021_table_1:row8:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.78 L/h | ['Bilal_2021_table_1:row8:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 15.8 L | ['Bilal_2021_table_1:row9:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=cefiderocol) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | fail | 0.0744 | 0.006172 | 0.083 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.156 | 0.006172 | 0.0396 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0681 | 0.006172 | 0.0906 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.141 | 0.006172 | 0.0438 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0729 | 0.006172 | 0.0847 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.081 | 0.006172 | 0.0762 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0801 | 0.006172 | 0.0771 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.093 | 0.006172 | 0.0664 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.093 | 0.006172 | 0.0664 | mg/L→SI vs simulated kg/m3 |
| T1_t_half_terminal | reference | pass | 2.26 | 2.29 | 1.013 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.74 | 2.29 | 0.8357 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.19 | 2.29 | 1.046 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.4 | 2.29 | 0.9541 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.3 | 2.29 | 0.9956 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.8 | 2.29 | 0.8178 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 6.9 | 2.29 | 0.3319 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 9.6 | 2.29 | 0.2385 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 9.6 | 2.29 | 0.2385 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1 | 0.1833 | 0.1833 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1 | 0.1833 | 0.1833 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1 | 0.1833 | 0.1833 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1 | 0.1833 | 0.1833 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.97 | 0.1833 | 0.189 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1 | 0.1833 | 0.1833 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1 | 0.1833 | 0.1833 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1 | 0.1833 | 0.1833 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1 | 0.1833 | 0.1833 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cefiderocol/Cefiderocol_Bilal2021_14c_cf_studya/Cefiderocol_Bilal2021_14c_cf_studya_modelica.zip" download>Cefiderocol_Bilal2021_14c_cf_studya_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_cefiderocol/Cefiderocol_Bilal2021_14c_cf_studya/Cefiderocol_Bilal2021_14c_cf_studya_fmi.zip" download>Cefiderocol_Bilal2021_14c_cf_studya_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_cefiderocol/Cefiderocol_Bilal2021_14c_cf_studya/Cefiderocol_Bilal2021_14c_cf_studya_matlab.zip" download>Cefiderocol_Bilal2021_14c_cf_studya_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_cefiderocol/Cefiderocol_Bilal2021_14c_cf_studya/Cefiderocol_Bilal2021_14c_cf_studya_matlab_simbio.zip" download>Cefiderocol_Bilal2021_14c_cf_studya_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_cefiderocol/Cefiderocol_Bilal2021_14c_cf_studya/Cefiderocol_Bilal2021_14c_cf_studya_sbml.zip" download>Cefiderocol_Bilal2021_14c_cf_studya_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_cefiderocol/Cefiderocol_Bilal2021_14c_cf_studya/Cefiderocol_Bilal2021_14c_cf_studya_cellml.zip" download>Cefiderocol_Bilal2021_14c_cf_studya_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.7522 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 1.328e-06 | m3/s |
| input | model | `VdPerKg` | 0.0002257 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Bilal M, El Tabei L, Büsker S, Krauss C, Fuhr U, Taubert M. Clinical Pharmacokinetics and Pharmacodynamics of Cefiderocol. Clinical pharmacokinetics 60(12):1495–1508 (2021). [doi:10.1007/s40262-021-01063-5](https://doi.org/10.1007/s40262-021-01063-5)

**This record:** Pharmacolibrary v26.09, model `Cefiderocol_Bilal2021_14c_cf_studya`. <https://pharmacolibrary.github.io/#/drugs/drug_cefiderocol/Cefiderocol_Bilal2021_14c_cf_studya>

```bibtex
@misc{pharmacolibrary_CefiderocolBilal202114ccfstudya,
  title  = {{Pharmacolibrary model Cefiderocol_Bilal2021_14c_cf_studya}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_cefiderocol/Cefiderocol_Bilal2021_14c_cf_studya},
  note   = {Parameters from doi:10.1007/s40262-021-01063-5},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 100 mg infusion over 10 min, single dose. Doses in the paper: 100, 1000, 2000 mg.

<dbs-fmusim paramsurl="drugs/drug_cefiderocol/Cefiderocol_Bilal2021_14c_cf_studya/Cefiderocol_Bilal2021_14c_cf_studya_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_cefiderocol/Cefiderocol_Bilal2021_14c_cf_studya/Cefiderocol_Bilal2021_14c_cf_studya_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Cefiderocol_Bilal2021_14c_cf_studya_params.json` · controls `Cefiderocol_Bilal2021_14c_cf_studya_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcefiderocol%5D%20Cefiderocol_Bilal2021_14c_cf_studya&body=Drug%3A%20cefiderocol%0ARecord%3A%20Cefiderocol_Bilal2021_14c_cf_studya%0APaper%3A%20Bilal_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cefiderocol/Cefiderocol_Bilal2021_14c_cf_studya%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:36 UTC</sub>
