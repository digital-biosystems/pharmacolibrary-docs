<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;ibrutinib&quot;,&quot;href&quot;:&quot;drugs/drug_ibrutinib/&quot;},{&quot;label&quot;:&quot;Gisleskog_2025 \u00b7 final_updated_population_pk_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ibrutinib_Gisleskog2025_final_updated_population_pk_model&quot;,&quot;label&quot;:&quot;Gisleskog_2025_final_updated_population_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ibrutinib_Gisleskog2025_previous_population_pk_model&quot;,&quot;label&quot;:&quot;Gisleskog_2025_previous_population_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_previous_population_pk_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ibrutinib — `Ibrutinib_Gisleskog2025_final_updated_population_pk_model`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Ibrutinib’s record is held back because its simulated Cmax misses the reported peak and V2/F = 613 L is not represented in parameter coverage.**

The model does not reproduce the paper's peak concentration (Cmax). Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance: expected values were 7.45e-05 and 6.39e-06, while the simulated value was 5.048173671576684e-05, with ratios of 0.6776 and 7.9001. Parameter coverage is incomplete: V2/F, the apparent peripheral-compartment volume, is listed as 613 L but was neither emitted nor defaulted. The covariate scenarios were not simulated. The base model was simulated, not the covariate effects the record defines. Extracted — ibrutinib: CL/F 1.12e+03 L/h, V2/F 613 L, Q/F 1.13e+03 L/h, V3/F 6.67e+03 L, kabs 0.719 h−1, tlag 0.167 h, D1 2.45 h, V/F 7.29e+03 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of alag1: this record has 0.167, the second reading none; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Gisleskog PO et al., Population Pharmacokinetic and Exposure…, CPT: pharmacometrics & syst… (2025)
  ·  DOI: [10.1002/psp4.70061](https://doi.org/10.1002/psp4.70061)

<div class="pk-model-meta" hidden drug="ibrutinib" model-id="Ibrutinib_Gisleskog2025_final_updated_population_pk_model" status="needs_review" stale="false" population="patients with previously untreated mantle cell lymphoma" measured-compound="ibrutinib" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 8 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, Q/F, V/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 1123 | L/h | 0.00031194444444444444 | [l] / [h] | not captured | exact (1.0) | psp470061-tbl-0002:row2:col3 | — | not captured |
| V2/F (L) | `Q82` · V2/F | 613 | L | 0.613 | [l] | not captured | exact (1.0) | psp470061-tbl-0002:row3:col3, psp470061-tbl-0002:row3:col4 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 1128 | L/h | 0.0003133333333333334 | [l] / [h] | not captured | exact (1.0) | psp470061-tbl-0002:row4:col3, psp470061-tbl-0002:row4:col4 | — | not captured |
| V3/F (L) | `Q78` · V3/F | 6673 | L | 6.673 | [l] | not captured | exact (1.0) | psp470061-tbl-0002:row5:col3, psp470061-tbl-0002:row5:col4 | — | not captured |
| k a (h−1) | `Q49` · kabs | 0.719 | h−1 | 0.0001997222222222222 | [1] / [h] | not captured | space_fold (0.95) | psp470061-tbl-0002:row6:col3 | — | not captured |
| ALAG1 (h) | `Q83` · tlag | 0.167 | h | 601.2 | [h] | not captured | llm (0.6) | psp470061-tbl-0002:row7:col3, psp470061-tbl-0002:row7:col4 | — | not captured |
| D1 fast/mod fast (h) | `Q310` · D1 | 2.45 | h | 8820.0 | [h] | not captured | llm_confirmed (0.6) | psp470061-tbl-0002:row8:col3 | — | not captured |
| theta_q87_fed_f1_mod_fast_fixed | `Q900` · theta_q87_fed_f1_mod_fast_fixed | 65.64 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470061-tbl-0002:row10:col4 | — | not captured |
| apparent volume of distribution at steady state (estimated as the sum of V2/F and V3/F) | `Q76` · V/F | 7286.0 | L | 7.2860000000000005 | L | not captured | review_gapfill (0.7) | Gisleskog_2025:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `qwen3.8-27b` | `parameters[alag1]` | 0.167 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[apparent volume of distribution at steady state]` | 7286.0 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/f].value` | 1123 | 1100 | mismatch |
| `qwen3.8-27b` | `parameters[d1 fast/mod fast]` | 2.45 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[k a].value` | 0.719 | 0.451 | mismatch |
| `qwen3.8-27b` | `parameters[q/f].value` | 1128 | 709 | mismatch |
| `qwen3.8-27b` | `parameters[theta_q319_age_power]` | not captured | 0.699 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q87_fed_f1_mod_fast_fixed]` | 65.64 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[v2/f].value` | 613 | 436 | mismatch |
| `qwen3.8-27b` | `parameters[v3/f].value` | 6673 | 8660 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470061-tbl-0002:row2:col3'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['psp470061-tbl-0002:row8:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470061-tbl-0002:row6:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470061-tbl-0002:row4:col3', 'psp470061-tbl-0002:row4:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Gisleskog_2025:review'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470061-tbl-0002:row5:col3', 'psp470061-tbl-0002:row5:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470061-tbl-0002:row3:col3', 'psp470061-tbl-0002:row3:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['psp470061-tbl-0002:row7:col3', 'psp470061-tbl-0002:row7:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.12e+03 L/h | not captured | not captured | ['psp470061-tbl-0002:row2:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 7.29e+03 L | not captured | not captured | ['Gisleskog_2025:review'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 613 L | not captured | not captured | ['psp470061-tbl-0002:row3:col3', 'psp470061-tbl-0002:row3:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=ibrutinib) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 6 scholar param(s) emitted or defaulted | 5 covered | not captured | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | 5.048173671576684e-05 | not captured | non-numeric value |
| T1_cmax | reference | fail | 7.45e-05 | 5.048173671576684e-05 | 0.6776 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 6.39e-06 | 5.048173671576684e-05 | 7.9001 | ng/mL→SI vs simulated kg/m3 |
| T1_cmin_ss | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 3.9 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ibrutinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gisleskog_2025` / `Gisleskog_2025::final_updated_population_pk_model`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ibrutinib/models/modelica/Ibrutinib_Gisleskog2025_final_updated_population_pk_model.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ibrutinib/models/modelica/Ibrutinib_Gisleskog2025_final_updated_population_pk_model.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ibrutinib/models/modelica/Ibrutinib_Gisleskog2025_final_updated_population_pk_model.json`


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
</div><figure class="pk-models-diagram"><img src="drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model/Ibrutinib_Gisleskog2025_final_updated_population_pk_model.svg" alt="Ibrutinib_Gisleskog2025_final_updated_population_pk_model diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 560 mg, single dose, first-order absorption (ka 0.719 /h, lag 10 min, F 1). Dose in the paper: 560 mg.

<dbs-fmusim paramsurl="drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model/Ibrutinib_Gisleskog2025_final_updated_population_pk_model_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model/Ibrutinib_Gisleskog2025_final_updated_population_pk_model_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Ibrutinib_Gisleskog2025_final_updated_population_pk_model_params.json` · controls `Ibrutinib_Gisleskog2025_final_updated_population_pk_model_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 01:23 UTC</sub>
