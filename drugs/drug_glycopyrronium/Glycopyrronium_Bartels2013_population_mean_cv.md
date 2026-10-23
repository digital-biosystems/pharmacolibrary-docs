<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;glycopyrronium&quot;,&quot;href&quot;:&quot;drugs/drug_glycopyrronium/&quot;},{&quot;label&quot;:&quot;Bartels_2013 \u00b7 population_mean_cv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Glycopyrronium_Bartels2013_model_based&quot;,&quot;label&quot;:&quot;Bartels_2013_model_based&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_model_based.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Glycopyrronium_Bartels2013_noncompartmental&quot;,&quot;label&quot;:&quot;Bartels_2013_noncompartmental&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_noncompartmental.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Glycopyrronium_Bartels2013_population_mean_cv&quot;,&quot;label&quot;:&quot;Bartels_2013_population_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_population_mean_cv.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# glycopyrronium — `Glycopyrronium_Bartels2013_population_mean_cv`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Needs review), but the paper was screened again on 2026-10-07 19:32 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="glycopyrronium" model-id="Glycopyrronium_Bartels2013_population_mean_cv" status="extracted" stale="true" population="healthy volunteers" measured-compound="glycopyrronium" parameterization="mechanistic" topology="2C"></div>

## Citation
Bartels C, Looby M, Sechaud R, Kaiser G. Determination of the pharmacokinetics of glycopyrronium in the lung using a population pharmacokinetic modelling approach. British journal of clinical pharmacology 76(6):868–879 (2013).
  ·  DOI: [10.1111/bcp.12118](https://doi.org/10.1111/bcp.12118)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = &gt;$n_subjects&lt;/unknown.

**Dosing:** 120, 200, 400 mg, oral, inhaled, iv, single.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_population_mean_cv/Glycopyrronium_Bartels2013_population_mean_cv.svg" alt="Glycopyrronium_Bartels2013_population_mean_cv diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Systemic clearance | CL | 44.9 | L/h | 3.1 |
| Volume of central plasma compartment | V1 | 11.3 | L | 6.7 |
| Intercompartmental clearance | Q | 8.23 | L/h | 8.9 |
| Volume of peripheral PK compartment | V2 | 71.5 | L | 4.4 |
| Bioavailability after inhalation with concomitant charcoal treatment expressed as odds | Fab | 1.11 |  | 18 |
| Slow lung absorption rate | kabs | 0.009 | 1/h | 10.1 |
| Volume of distribution at steady state ‡ | Vss | 102 | L |  |
| Intermediate lung absorption half-life | t1/2z | 0.45 | h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.864). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The glycopyrronium model was quarantined because clearance, volume of distribution, absorption rate constant, absorption lag time and the intercompartmental rate constants had no source values, so library placeholders were substituted.**

For glycopyrronium in healthy volunteers, the record's clearance, volume of distribution, absorption rate constant, absorption lag time, central→peripheral rate constant and peripheral→central rate constant had no value extracted from the source, so a library placeholder stood in for each and the model was held back rather than published with invented numbers. The absorption check also failed: the absorption rate constant was defaulted because it was not reported in the source, judged 'invented absorption: not acceptable'. A second reader further disagreed on several absorption half-life entries, reading the fast lung absorption half-life as a different parameter and leaving the intermediate lung absorption half-life (0.45) and the fraction of dose with slow absorption (6.48) unconfirmed against this record. Extracted — glycopyrronium: CL 44.9, V1 11.3, Q 8.23, V2 71.5, Fab 1.11, kabs 0.009, Vss 102, t1/2z 0.45.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[fast lung absorption half-life].parameter_id`: this record has Q59, the second reading Q95; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Systemic clearance | `Q22` · CL | 44.9 | L/h | 1.247e-05 | m3/s | L/h | 3.1 | llm_confirmed (0.6) | Bartels_2013_table_p6_1:row0:col3, Bartels_2013_table_p6_1:row0:col4 |
| Volume of central plasma compartment | `Q63` · V1 | 11.3 | L | 0.0113 | m3 | L | 6.7 | boundary_compartment (0.9) | Bartels_2013_table_p6_1:row1:col3, Bartels_2013_table_p6_1:row1:col4 |
| Intercompartmental clearance | `Q30` · Q | 8.23 | L/h | 2.286e-06 | m3/s | L/h | 8.9 | exact (1) | Bartels_2013_table_p6_1:row2:col3, Bartels_2013_table_p6_1:row2:col4, Bartels_2013_table_p6_1:row4:col3, Bartels_2013_table_p6_1:row4:col4 |
| Volume of peripheral PK compartment | `Q64` · V2 | 71.5 | L | 0.0715 | m3 | L | 4.4 | boundary_compartment (0.9) | Bartels_2013_table_p6_1:row3:col3, Bartels_2013_table_p6_1:row3:col4, Bartels_2013_table_p6_1:row5:col3, Bartels_2013_table_p6_1:row5:col4 |
| Bioavailability after inhalation with concomitant charcoal treatment expressed as odds | `Q40` · Fab | 1.11 |  |  |  |  | 18 | llm_confirmed (0.6) | Bartels_2013_table_p6_1:row6:col3, Bartels_2013_table_p6_1:row6:col4 |
| Slow lung absorption rate | `Q49` · kabs | 0.009 | 1/h | 2.5e-06 | 1/s | 1/h | 10.1 | llm_confirmed (0.6) | Bartels_2013_table_p6_1:row10:col3, Bartels_2013_table_p6_1:row10:col4 |
| Volume of distribution at steady state ‡ | `Q65` · Vss | 102 | L | 0.102 | m3 | L |  | llm_corrected (0.6) | Bartels_2013_table_2:row2:col4 |
| Intermediate lung absorption half-life | `Q57` · t1/2z | 0.45 | h | 1620 | s | h |  | llm_corrected (0.6) | Bartels_2013_table_2:row12:col2, Bartels_2013_table_2:row12:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Fast lung absorption half-life | Q59 | llm_corrected |
| Slow lung absorption half-life | Q95 | llm_corrected |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameter related to fraction of dose with slow absorption' — extend the ontology if this is a real PK parameter (source ['Bartels_2013_table_p6_1:row7:col3', 'Bartels_2013_table_p6_1:row7:col4'])
- dropped duplicate Q40 ('Parameter related to fraction of dose with intermediate absorption', value '0.734') — already have one for this compound
- dropped duplicate Q49 ('Intermediate lung absorption rate', value '1.54') — already have one for this compound
- dropped duplicate Q49 ('GI tract absorption rate', value '0.34') — already have one for this compound
- dropped duplicate Q57 ('GI tract absorption half-life', value None) — already have one for this compound
- dropped unlinked row (NIL): '0' — extend the ontology if this is a real PK parameter (source ['Bartels_2013_table_2:row21:col1'])
- implicit units: 'Systemic clearance' → L/h (from the popPK convention: 'Standard unit for systemic clearance in population PK studies; magnitude 44.9 is consistent with L/h.')
- implicit units: 'Volume of central plasma compartment' → L (from the popPK convention: 'Standard unit for volume of distribution in population PK studies; magnitude 11.3 is consistent with L.')
- implicit units: 'Intercompartmental clearance' → L/h (from the popPK convention: 'Standard unit for intercompartmental clearance in population PK studies; magnitude 8.23 is consistent with L/h.')
- implicit units: 'Volume of peripheral PK compartment' → L (from the popPK convention: 'Standard unit for volume of distribution in population PK studies; magnitude 71.5 is consistent with L.')
- implicit units: 'Slow lung absorption rate' → 1/h (from the popPK convention: 'Standard unit for first-order rate constants in population PK studies; magnitude 0.009 is consistent with 1/h (half-life')
- implicit units: 'Volume of distribution at steady state ‡' → L (from the popPK convention: 'Standard unit for volume of distribution at steady state in population PK studies; magnitude 102 is consistent with L.')
- implicit units: 'Intermediate lung absorption half-life' → h (from the popPK convention: 'Standard unit for half-lives in population PK studies; magnitude 0.45 is consistent with hours.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=glycopyrronium
- population split: 'population mean (%cv)' subgroup of Bartels_2013 (paper reports 3 populations: model-based, noncompartmental, population mean (%cv))
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Bartels_2013_table_2:row1:col4 = 'l h -1'
- unparsed cell Bartels_2013_table_2:row11:col5 = '&lt;~0.03 (estimate)'
- unparsed cell Bartels_2013_table_2:row13:col6 = '52 or 57 §'
- unparsed cell Bartels_2013_table_2:row21:col2 = '1 0'
- companion parameter table 2 transcribed (14 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.864 (19/22 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[fast lung absorption half-life].parameter_id` | Q59 | Q95 | mismatch |
| `gpt-oss-120b` | `parameters[intermediate lung absorption half-life]` | 0.45 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[slow lung absorption half-life]` |  |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Bartels_2013_table_p6_1:row0:col3', 'Bartels_2013_table_p6_1:row0:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Bartels_2013_table_p6_1:row2:col3', 'Bartels_2013_table_p6_1:row2:col4', 'Bartels_2013_table_p6_1:row4:col3', 'Bartels_2013_table_p6_1:row4:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Bartels_2013_table_p6_1:row10:col3', 'Bartels_2013_table_p6_1:row10:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['Bartels_2013_table_2:row12:col2', 'Bartels_2013_table_2:row12:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Bartels_2013_table_p6_1:row1:col3', 'Bartels_2013_table_p6_1:row1:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Bartels_2013_table_p6_1:row3:col3', 'Bartels_2013_table_p6_1:row3:col4', 'Bartels_2013_table_p6_1:row5:col3', 'Bartels_2013_table_p6_1:row5:col4'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Bartels_2013_table_2:row2:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 44.9 | ['Bartels_2013_table_p6_1:row0:col3', 'Bartels_2013_table_p6_1:row0:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 44.9 L/h | ['Bartels_2013_table_p6_1:row0:col3', 'Bartels_2013_table_p6_1:row0:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 11.3 L | ['Bartels_2013_table_p6_1:row1:col3', 'Bartels_2013_table_p6_1:row1:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 71.5 L | ['Bartels_2013_table_p6_1:row3:col3', 'Bartels_2013_table_p6_1:row3:col4', 'Bartels_2013_table_p6_1:row5:col3', 'Bartels_2013_table_p6_1:row5:col4'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 102 L | ['Bartels_2013_table_2:row2:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | invented_absorption: not acceptable | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped | 52.5 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 57.2 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 3.5 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_population_mean_cv/Glycopyrronium_Bartels2013_population_mean_cv_modelica.zip" download>Glycopyrronium_Bartels2013_population_mean_cv_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_population_mean_cv/Glycopyrronium_Bartels2013_population_mean_cv_fmi.zip" download>Glycopyrronium_Bartels2013_population_mean_cv_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_population_mean_cv/Glycopyrronium_Bartels2013_population_mean_cv_matlab.zip" download>Glycopyrronium_Bartels2013_population_mean_cv_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_population_mean_cv/Glycopyrronium_Bartels2013_population_mean_cv_matlab_simbio.zip" download>Glycopyrronium_Bartels2013_population_mean_cv_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_population_mean_cv/Glycopyrronium_Bartels2013_population_mean_cv_sbml.zip" download>Glycopyrronium_Bartels2013_population_mean_cv_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_population_mean_cv/Glycopyrronium_Bartels2013_population_mean_cv_cellml.zip" download>Glycopyrronium_Bartels2013_population_mean_cv_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3184 | kg/mol |
| input | dosing | `F` | 1.11 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00012 | kg |
| input | model | `Cl` | 1.247e-05 | m3/s |
| input | model | `VdPerKg` | 0.0001614 | m3/kg |
| input | model | `k12` | 0.0002023 | 1/s |
| input | model | `k21` | 3.197e-05 | 1/s |
| input | model | `ka` | 2.5e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Bartels C, Looby M, Sechaud R, Kaiser G. Determination of the pharmacokinetics of glycopyrronium in the lung using a population pharmacokinetic modelling approach. British journal of clinical pharmacology 76(6):868–879 (2013). [doi:10.1111/bcp.12118](https://doi.org/10.1111/bcp.12118)

**This record:** Pharmacolibrary v26.09, model `Glycopyrronium_Bartels2013_population_mean_cv`. <https://pharmacolibrary.github.io/#/drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_population_mean_cv>

```bibtex
@misc{pharmacolibrary_GlycopyrroniumBartels2013populationmeancv,
  title  = {{Pharmacolibrary model Glycopyrronium_Bartels2013_population_mean_cv}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_population_mean_cv},
  note   = {Parameters from doi:10.1111/bcp.12118},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 120 mg, single dose, first-order absorption (ka 0.009 /h, F 1.11). Doses in the paper: 120, 200, 400 mg.

<dbs-fmusim paramsurl="drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_population_mean_cv/Glycopyrronium_Bartels2013_population_mean_cv_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_population_mean_cv/Glycopyrronium_Bartels2013_population_mean_cv_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Glycopyrronium_Bartels2013_population_mean_cv_params.json` · controls `Glycopyrronium_Bartels2013_population_mean_cv_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bglycopyrronium%5D%20Glycopyrronium_Bartels2013_population_mean_cv&body=Drug%3A%20glycopyrronium%0ARecord%3A%20Glycopyrronium_Bartels2013_population_mean_cv%0APaper%3A%20Bartels_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_population_mean_cv%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 19:32 UTC</sub>
