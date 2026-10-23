<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;ibrutinib&quot;,&quot;href&quot;:&quot;drugs/drug_ibrutinib/&quot;},{&quot;label&quot;:&quot;Gisleskog_2025 \u00b7 final_updated_population_pk_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ibrutinib_Gisleskog2025_final_updated_population_pk_model&quot;,&quot;label&quot;:&quot;Gisleskog_2025_final_updated_population_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ibrutinib_Gisleskog2025_previous_population_pk_model&quot;,&quot;label&quot;:&quot;Gisleskog_2025_previous_population_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_previous_population_pk_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ibrutinib — `Ibrutinib_Gisleskog2025_final_updated_population_pk_model`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> Ibrutinib’s record is held back because its simulated Cmax misses the reported peak and V2/F = 613 L is not represented in parameter coverage.

<div class="pk-model-meta" hidden drug="ibrutinib" model-id="Ibrutinib_Gisleskog2025_final_updated_population_pk_model" status="needs_review" stale="false" population="patients with previously untreated mantle cell lymphoma" measured-compound="ibrutinib" parameterization="apparent" topology="1C"></div>

## Citation
Gisleskog PO, Valenzuela B, Treijtel N, Deshpande S, Henninger T, Perez-Ruixo JJ. Population Pharmacokinetic and Exposure-Response Analyses of Ibrutinib Combined With Bendamustine and Rituximab in Patients With Mantle Cell Lymphoma. CPT: pharmacometrics & systems pharmacology 14(10):1562–1574 (2025).
  ·  DOI: [10.1002/psp4.70061](https://doi.org/10.1002/psp4.70061)

## Population and dosing

**Population:** patients with previously untreated mantle cell lymphoma · condition previously untreated mantle cell lymphoma · age group adult · n = 259.

**Dosing:** 560 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model/Ibrutinib_Gisleskog2025_final_updated_population_pk_model.svg" alt="Ibrutinib_Gisleskog2025_final_updated_population_pk_model diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h) | CL/F | 1123 | L/h |
| V2/F (L) | V2/F | 613 | L |
| Q/F (L/h) | Q/F | 1128 | L/h |
| V3/F (L) | V3/F | 6673 | L |
| k a (h−1) | kabs | 0.719 | h−1 |
| ALAG1 (h) | tlag | 0.167 | h |
| D1 fast/mod fast (h) | D1 | 2.45 | h |
| theta_q87_fed_f1_mod_fast_fixed | theta_q87_fed_f1_mod_fast_fixed | 65.64 |  |
| apparent volume of distribution at steady state (estimated as the sum of V2/F and V3/F) | V/F | 7286.0 | L |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Ibrutinib’s record is held back because its simulated Cmax misses the reported peak and V2/F = 613 L is not represented in parameter coverage.**

The model does not reproduce the paper's peak concentration (Cmax). Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance: expected values were 7.45e-05 and 6.39e-06, while the simulated value was 5.048173671576684e-05, with ratios of 0.6776 and 7.9001. Parameter coverage is incomplete: V2/F, the apparent peripheral-compartment volume, is listed as 613 L but was neither emitted nor defaulted. The covariate scenarios were not simulated. The base model was simulated, not the covariate effects the record defines. Extracted — ibrutinib: CL/F 1.12e+03 L/h, V2/F 613 L, Q/F 1.13e+03 L/h, V3/F 6.67e+03 L, kabs 0.719 h−1, tlag 0.167 h, D1 2.45 h, V/F 7.29e+03 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of alag1: this record has 0.167, the second reading none; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 1123 | L/h | 0.0003119 | m3/s | l/h | exact (1) | psp470061-tbl-0002:row2:col3 |
| V2/F (L) | `Q82` · V2/F | 613 | L | 0.613 | m3 | l | exact (1) | psp470061-tbl-0002:row3:col3, psp470061-tbl-0002:row3:col4 |
| Q/F (L/h) | `Q69` · Q/F | 1128 | L/h | 0.0003133 | m3/s | l/h | exact (1) | psp470061-tbl-0002:row4:col3, psp470061-tbl-0002:row4:col4 |
| V3/F (L) | `Q78` · V3/F | 6673 | L | 6.673 | m3 | l | exact (1) | psp470061-tbl-0002:row5:col3, psp470061-tbl-0002:row5:col4 |
| k a (h−1) | `Q49` · kabs | 0.719 | h−1 | 0.0001997 | 1/s | 1/h | space_fold (0.95) | psp470061-tbl-0002:row6:col3 |
| ALAG1 (h) | `Q83` · tlag | 0.167 | h | 601.2 | s | h | llm (0.6) | psp470061-tbl-0002:row7:col3, psp470061-tbl-0002:row7:col4 |
| D1 fast/mod fast (h) | `Q310` · D1 | 2.45 | h | 8820 | s | h | llm_confirmed (0.6) | psp470061-tbl-0002:row8:col3 |
| theta_q87_fed_f1_mod_fast_fixed | `Q900` · theta_q87_fed_f1_mod_fast_fixed | 65.64 |  |  |  |  |  | psp470061-tbl-0002:row10:col4 |
| apparent volume of distribution at steady state (estimated as the sum of V2/F and V3/F) | `Q76` · V/F | 7286.0 | L | 7.286 | m3 | L | review_gapfill (0.7) | Gisleskog_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- covariate effect for Q87 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ibrutinib
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'final (updated) population pk model' subgroup of Gisleskog_2025 (paper reports 2 populations: final (updated) population pk model, previous population pk model)
- gap-filled Q76 (V/F) from Gisleskog_2025's review values (primary lacked it)

**Extraction notes:**
- unparsed cell psp470061-tbl-0002:row6:col2 = '0 FIX (FIX)'
- unparsed cell psp470061-tbl-0002:row8:col2 = '0 FIX (FIX)'
- unparsed cell psp470061-tbl-0002:row10:col1 = '1 FIX (−)'
- unparsed cell psp470061-tbl-0002:row10:col3 = '1 FIX (−)'
- unparsed cell psp470061-tbl-0002:row12:col3 = '1.59 FIX (−)'
- unparsed cell psp470061-tbl-0002:row13:col3 = '0.699 FIX (−)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.286 (4/14 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[alag1]` | 0.167 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[apparent volume of distribution at steady state]` | 7286.0 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/f].value` | 1123 | 1100 | mismatch |
| `qwen3.8-27b` | `parameters[d1 fast/mod fast]` | 2.45 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[k a].value` | 0.719 | 0.451 | mismatch |
| `qwen3.8-27b` | `parameters[q/f].value` | 1128 | 709 | mismatch |
| `qwen3.8-27b` | `parameters[theta_q319_age_power]` |  | 0.699 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q87_fed_f1_mod_fast_fixed]` | 65.64 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v2/f].value` | 613 | 436 | mismatch |
| `qwen3.8-27b` | `parameters[v3/f].value` | 6673 | 8660 | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp470061-tbl-0002:row2:col3'] |
| C5_dimension_Q310 | pass | [time] |  | ['psp470061-tbl-0002:row8:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp470061-tbl-0002:row6:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['psp470061-tbl-0002:row4:col3', 'psp470061-tbl-0002:row4:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Gisleskog_2025:review'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['psp470061-tbl-0002:row5:col3', 'psp470061-tbl-0002:row5:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['psp470061-tbl-0002:row3:col3', 'psp470061-tbl-0002:row3:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['psp470061-tbl-0002:row7:col3', 'psp470061-tbl-0002:row7:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.12e+03 L/h | ['psp470061-tbl-0002:row2:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 7.29e+03 L | ['Gisleskog_2025:review'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 613 L | ['psp470061-tbl-0002:row3:col3', 'psp470061-tbl-0002:row3:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=ibrutinib) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | fail | 6 scholar param(s) emitted or defaulted | 5 covered |  | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 5.048e-05 |  | non-numeric value |
| T1_cmax | reference | fail | 7.45e-05 | 5.048e-05 | 0.6776 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 6.39e-06 | 5.048e-05 | 7.9 | ng/mL→SI vs simulated kg/m3 |
| T1_cmin_ss | reference | skipped |  |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 3.9 |  |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model/Ibrutinib_Gisleskog2025_final_updated_population_pk_model_modelica.zip" download>Ibrutinib_Gisleskog2025_final_updated_population_pk_model_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model/Ibrutinib_Gisleskog2025_final_updated_population_pk_model_fmi.zip" download>Ibrutinib_Gisleskog2025_final_updated_population_pk_model_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model/Ibrutinib_Gisleskog2025_final_updated_population_pk_model_matlab.zip" download>Ibrutinib_Gisleskog2025_final_updated_population_pk_model_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model/Ibrutinib_Gisleskog2025_final_updated_population_pk_model_matlab_simbio.zip" download>Ibrutinib_Gisleskog2025_final_updated_population_pk_model_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model/Ibrutinib_Gisleskog2025_final_updated_population_pk_model_sbml.zip" download>Ibrutinib_Gisleskog2025_final_updated_population_pk_model_sbml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model/Ibrutinib_Gisleskog2025_final_updated_population_pk_model_cellml.zip" download>Ibrutinib_Gisleskog2025_final_updated_population_pk_model_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4405 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 601.2 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00056 | kg |
| input | model | `Cl` | 0.0003119 | m3/s |
| input | model | `VdPerKg` | 0.1041 | m3/kg |
| input | model | `ka` | 0.0001997 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Gisleskog PO, Valenzuela B, Treijtel N, Deshpande S, Henninger T, Perez-Ruixo JJ. Population Pharmacokinetic and Exposure-Response Analyses of Ibrutinib Combined With Bendamustine and Rituximab in Patients With Mantle Cell Lymphoma. CPT: pharmacometrics & systems pharmacology 14(10):1562–1574 (2025). [doi:10.1002/psp4.70061](https://doi.org/10.1002/psp4.70061)

**This record:** Pharmacolibrary v26.09, model `Ibrutinib_Gisleskog2025_final_updated_population_pk_model`. <https://pharmacolibrary.github.io/#/drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model>

```bibtex
@misc{pharmacolibrary_IbrutinibGisleskog2025finalupdatedpopulationpkmodel,
  title  = {{Pharmacolibrary model Ibrutinib_Gisleskog2025_final_updated_population_pk_model}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model},
  note   = {Parameters from doi:10.1002/psp4.70061},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 560 mg, single dose, first-order absorption (ka 0.719 /h, lag 10 min, F 1). Dose in the paper: 560 mg.

<dbs-fmusim paramsurl="drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model/Ibrutinib_Gisleskog2025_final_updated_population_pk_model_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model/Ibrutinib_Gisleskog2025_final_updated_population_pk_model_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Ibrutinib_Gisleskog2025_final_updated_population_pk_model_params.json` · controls `Ibrutinib_Gisleskog2025_final_updated_population_pk_model_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bibrutinib%5D%20Ibrutinib_Gisleskog2025_final_updated_population_pk_model&body=Drug%3A%20ibrutinib%0ARecord%3A%20Ibrutinib_Gisleskog2025_final_updated_population_pk_model%0APaper%3A%20Gisleskog_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 01:23 UTC</sub>
