<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;sorafenib&quot;,&quot;href&quot;:&quot;drugs/drug_sorafenib/&quot;},{&quot;label&quot;:&quot;Huh_2021 \u00b7 parameter_estimates_relative_standard_error&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sorafenib_Jain2011_reference&quot;,&quot;label&quot;:&quot;Jain_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sorafenib/Sorafenib_Jain2011_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sorafenib_Altalal2023_reference&quot;,&quot;label&quot;:&quot;Altalal_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sorafenib/Sorafenib_Altalal2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sorafenib_Huh2021_nexavar_200_mg&quot;,&quot;label&quot;:&quot;Huh_2021_nexavar_200_mg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sorafenib/Sorafenib_Huh2021_nexavar_200_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sorafenib_Huh2021_parameter_estimates_relative_standard_erro&quot;,&quot;label&quot;:&quot;Huh_2021_parameter_estimates_relative_standard_error&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sorafenib/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Sorafenib_Huh2021_syo_1644_100_mg&quot;,&quot;label&quot;:&quot;Huh_2021_syo_1644_100_mg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sorafenib/Sorafenib_Huh2021_syo_1644_100_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sorafenib_Huh2021_syo_1644_150_mg&quot;,&quot;label&quot;:&quot;Huh_2021_syo_1644_150_mg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sorafenib/Sorafenib_Huh2021_syo_1644_150_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sorafenib_Huh2021_syo_1644_200_mg&quot;,&quot;label&quot;:&quot;Huh_2021_syo_1644_200_mg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sorafenib/Sorafenib_Huh2021_syo_1644_200_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sorafenib — `Sorafenib_Huh2021_parameter_estimates_relative_standard_erro`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 20, model 1.29).

<div class="pk-model-meta" hidden drug="sorafenib" model-id="Sorafenib_Huh2021_parameter_estimates_relative_standard_erro" status="needs_review" stale="false" population="healthy volunteers" measured-compound="sorafenib" parameterization="mechanistic" topology="1C"></div>

## Citation
Huh KY, Hwang S, Park SY, Lim HJ, Jin M, Oh J et al. Population Pharmacokinetic Modelling and Simulation to Determine the Optimal Dose of Nanoparticulated Sorafenib to the Reference Sorafenib. Pharmaceutics 13(5) (2021).
  ·  DOI: [10.3390/pharmaceutics13050629](https://doi.org/10.3390/pharmaceutics13050629)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = 32.

**Dosing:** 100, 150, 200 mg, oral, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_sorafenib/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro.svg" alt="Sorafenib_Huh2021_parameter_estimates_relative_standard_erro diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Relative bioavailability † | Frel | 1.62 |  | 8.7 |
| MTT (h) | MTT | 3.24 | h | 5.4 |
| NN | n_transit | 1.72 |  | 7.3 |
| ka (h−1) | kabs | 1.6 | h−1 | 16.8 |
| CL (L/h) | CL | 3.33 | L/h | 9.6 |
| V (L) | V | 8.17 | L | 31.5 |
| Fent | Fab | 0.215 |  | 13.5 |
| kEhc (h−1) | kel | 0.212 | h−1 | 6.8 |
| Tgb1 (h) | t1/2z | 8.14 | h | 0.3 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.864). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 20, model 1.29).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (MTT), so that value has no SI equivalent. Extracted — sorafenib: Frel 1.62, MTT 3.24 h, n_transit 1.72, kabs 1.6 h−1, CL 3.33 L/h, V 8.17 L, Fab 0.215, kel 0.212 h−1, … (+1).

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of fent: this record has 0.215, the second reading none; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Relative bioavailability † | `Q87` · Frel | 1.62 |  |  |  |  | 8.7 | exact (1) | pharmaceutics-13-00629-t002:row1:col1 |
| MTT (h) | `Q81` · MTT | 3.24 | h |  |  | h | 5.4 | exact (1) | pharmaceutics-13-00629-t002:row2:col1 |
| NN | `Q311` · n_transit | 1.72 |  |  |  |  | 7.3 | exact (1) | pharmaceutics-13-00629-t002:row3:col1 |
| ka (h−1) | `Q49` · kabs | 1.6 | h−1 | 0.0004444 | 1/s | 1/h | 16.8 | exact (1) | pharmaceutics-13-00629-t002:row4:col1 |
| CL (L/h) | `Q22` · CL | 3.33 | L/h | 9.25e-07 | m3/s | l/h | 9.6 | exact (1) | pharmaceutics-13-00629-t002:row5:col1 |
| V (L) | `Q61` · V | 8.17 | L | 0.00817 | m3 | l | 31.5 | exact (1) | pharmaceutics-13-00629-t002:row6:col1 |
| Fent | `Q40` · Fab | 0.215 |  |  |  |  | 13.5 | llm (0.6) | pharmaceutics-13-00629-t002:row7:col1 |
| kEhc (h−1) | `Q47` · kel | 0.212 | h−1 | 5.889e-05 | 1/s | 1/h | 6.8 | llm (0.6) | pharmaceutics-13-00629-t002:row8:col1 |
| Tgb1 (h) | `Q57` · t1/2z | 8.14 | h | 2.93e+04 | s | h | 0.3 | llm (0.6) | pharmaceutics-13-00629-t002:row9:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- dropped duplicate Q57 ('Tgb2 (h)', value '12.2') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sorafenib
- population split: 'parameter estimates(relative standard error, %)' subgroup of Huh_2021 (paper reports 5 populations: nexavar® 200 mg(n = 8), parameter estimates(relative standard error, %), syo-1644 100 mg(n = 7), syo-1644 150 mg(n = 7), syo-1644 200 mg(n = 8))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceutics-13-00629-t002:row1:col2 = '1.62 (1.34–1.91)'
- unparsed cell pharmaceutics-13-00629-t002:row2:col2 = '3.24 (2.89–3.59)'
- unparsed cell pharmaceutics-13-00629-t002:row3:col2 = '1.75 (1.46–1.98)'
- unparsed cell pharmaceutics-13-00629-t002:row4:col2 = '1.68 (0.79–2.41)'
- unparsed cell pharmaceutics-13-00629-t002:row5:col2 = '3.23 (2.6–4.06)'
- unparsed cell pharmaceutics-13-00629-t002:row6:col2 = '8.35 (3.16–13.19)'
- unparsed cell pharmaceutics-13-00629-t002:row7:col2 = '0.19 (0.13–0.3)'
- unparsed cell pharmaceutics-13-00629-t002:row8:col2 = '0.21 (0.18–0.24)'
- unparsed cell pharmaceutics-13-00629-t002:row9:col2 = '8.14 (8.1–8.19)'
- unparsed cell pharmaceutics-13-00629-t002:row10:col2 = '12.16 (12.04–12.29)'
- unparsed cell pharmaceutics-13-00629-t002:row11:col2 = '90.5 (55.4–138.9)'
- unparsed cell pharmaceutics-13-00629-t002:row12:col2 = '25.0 (17.7–31.8)'
- unparsed cell pharmaceutics-13-00629-t002:row13:col2 = '21.0 (13.2–28.2)'
- unparsed cell pharmaceutics-13-00629-t002:row14:col2 = '9.0 (5.9–11.8)'
- unparsed cell pharmaceutics-13-00629-t002:row15:col2 = '36.1 (33.3–39.5)'
- companion parameter table 1 transcribed (20 record(s))
- LLM selected parameter table(s) 1
- dropped sensitivity-analysis table(s) 2 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.864 (19/22 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[fent]` | 0.215 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[tgb1]` | 8.14 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[tgb2]` |  | 12.2 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-13-00629-t002:row5:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['pharmaceutics-13-00629-t002:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pharmaceutics-13-00629-t002:row4:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['pharmaceutics-13-00629-t002:row9:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['pharmaceutics-13-00629-t002:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.33 | ['pharmaceutics-13-00629-t002:row5:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.33 L/h | ['pharmaceutics-13-00629-t002:row5:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 8.17 L | ['pharmaceutics-13-00629-t002:row6:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=sorafenib) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 22 | 0.01242 |  | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_t_half_beta | reference | fail | 20 | 1.292 | 0.0646 | h→SI vs simulated h |
| T1_tmax | reference | skipped | 4 | 1.249 |  | unresolved time unit 'h post-dose' |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_sorafenib/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro_modelica.zip" download>Sorafenib_Huh2021_parameter_estimates_relative_standard_erro_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_sorafenib/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro_fmi.zip" download>Sorafenib_Huh2021_parameter_estimates_relative_standard_erro_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sorafenib/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro_matlab.zip" download>Sorafenib_Huh2021_parameter_estimates_relative_standard_erro_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sorafenib/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro_matlab_simbio.zip" download>Sorafenib_Huh2021_parameter_estimates_relative_standard_erro_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sorafenib/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro_sbml.zip" download>Sorafenib_Huh2021_parameter_estimates_relative_standard_erro_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sorafenib/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro_cellml.zip" download>Sorafenib_Huh2021_parameter_estimates_relative_standard_erro_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4648 | kg/mol |
| input | dosing | `F` | 1.62 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 9.25e-07 | m3/s |
| input | model | `VdPerKg` | 0.0001167 | m3/kg |
| input | model | `ka` | 0.0004444 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Huh KY, Hwang S, Park SY, Lim HJ, Jin M, Oh J et al. Population Pharmacokinetic Modelling and Simulation to Determine the Optimal Dose of Nanoparticulated Sorafenib to the Reference Sorafenib. Pharmaceutics 13(5) (2021). [doi:10.3390/pharmaceutics13050629](https://doi.org/10.3390/pharmaceutics13050629)

**This record:** Pharmacolibrary v26.09, model `Sorafenib_Huh2021_parameter_estimates_relative_standard_erro`. <https://pharmacolibrary.github.io/#/drugs/drug_sorafenib/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro>

```bibtex
@misc{pharmacolibrary_SorafenibHuh2021parameterestimatesrelativestandarderro,
  title  = {{Pharmacolibrary model Sorafenib_Huh2021_parameter_estimates_relative_standard_erro}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_sorafenib/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro},
  note   = {Parameters from doi:10.3390/pharmaceutics13050629},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 1.6 /h, F 1.62). Doses in the paper: 100, 150, 200 mg.

<dbs-fmusim paramsurl="drugs/drug_sorafenib/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_sorafenib/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Sorafenib_Huh2021_parameter_estimates_relative_standard_erro_params.json` · controls `Sorafenib_Huh2021_parameter_estimates_relative_standard_erro_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsorafenib%5D%20Sorafenib_Huh2021_parameter_estimates_relative_standard_erro&body=Drug%3A%20sorafenib%0ARecord%3A%20Sorafenib_Huh2021_parameter_estimates_relative_standard_erro%0APaper%3A%20Huh_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sorafenib/Sorafenib_Huh2021_parameter_estimates_relative_standard_erro%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:09 UTC</sub>
