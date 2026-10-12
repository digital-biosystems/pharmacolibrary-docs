<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;ethosuximide&quot;,&quot;href&quot;:&quot;drugs/drug_ethosuximide/&quot;},{&quot;label&quot;:&quot;Diezi_2023 \u00b7 final_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ethosuximide_Diezi2023_final_model&quot;,&quot;label&quot;:&quot;Diezi_2023_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ethosuximide_Diezi2023_granules_a&quot;,&quot;label&quot;:&quot;Diezi_2023_granules_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethosuximide/Ethosuximide_Diezi2023_granules_a.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethosuximide_Diezi2023_granules_b&quot;,&quot;label&quot;:&quot;Diezi_2023_granules_b&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethosuximide/Ethosuximide_Diezi2023_granules_b.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethosuximide_Diezi2023_syrup_zarontin_b&quot;,&quot;label&quot;:&quot;Diezi_2023_syrup_zarontin_b&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethosuximide/Ethosuximide_Diezi2023_syrup_zarontin_b.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ethosuximide — `Ethosuximide_Diezi2023_final_model`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.909). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**Ethosuximide model fails time-to-peak checks and uses placeholder values for bioavailability and lag time instead of paper estimates.**

The simulated time of the peak is 1.18 hours, differing significantly from paper-reported values like 0.63 hours. Bioavailability and absorption lag time were not extracted from the paper, so standard library placeholders were used rather than specific estimates. These unreported parameters affect the simulated profile but lack support from this study's data. Extracted — ethosuximide: CL 0.569 L/h, V1 31.3 L, Q 10.2 L/h, V2 13.9 L, kabs 5.59 h−1, allometric_exponent 1.71.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[θ weight].parameter_id`: this record has Q319, the second reading Q900. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Diezi L et al., An innovative ethosuximide granule form…, Pharmacology research & per… (2023)
  ·  DOI: [10.1002/prp2.1032](https://doi.org/10.1002/prp2.1032)

<div class="pk-model-meta" hidden drug="ethosuximide" model-id="Ethosuximide_Diezi2023_final_model" status="needs_review" stale="false" population="healthy adults" measured-compound="ethosuximide" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 0.569 | L/h | 1.5805555555555554e-07 | [l] / [h] | not captured | exact (1.0) | prp21032-tbl-0002:row2:col1, prp21032-tbl-0002:row2:col2, prp21032-tbl-0002:row2:col3, prp21032-tbl-0002:row2:col4 | — | not captured |
| V c (L) | `Q63` · V1 | 31.3 | L | 0.0313 | [l] | not captured | space_fold (0.95) | prp21032-tbl-0002:row3:col1, prp21032-tbl-0002:row3:col2, prp21032-tbl-0002:row3:col3, prp21032-tbl-0002:row3:col4 | — | not captured |
| Q (L/h) | `Q30` · Q | 10.2 | L/h | 2.833333333333333e-06 | [l] / [h] | not captured | exact (1.0) | prp21032-tbl-0002:row4:col1, prp21032-tbl-0002:row4:col2 | — | not captured |
| V p (L) | `Q64` · V2 | 13.9 | L | 0.013900000000000001 | [l] | not captured | space_fold (0.95) | prp21032-tbl-0002:row5:col1, prp21032-tbl-0002:row5:col2 | — | not captured |
| kasyrup (h−1) | `Q49` · kabs | 5.59 | h−1 | 0.0015527777777777777 | [1] / [h] | not captured | llm (0.6) | prp21032-tbl-0002:row6:col1, prp21032-tbl-0002:row6:col2, prp21032-tbl-0002:row6:col3, prp21032-tbl-0002:row6:col4 | — | not captured |
| θ weight | `Q319` · allometric_exponent | 1.71 | not captured | not captured | not captured | not captured | llm (0.6) | prp21032-tbl-0002:row8:col1, prp21032-tbl-0002:row8:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- routed 'kagranulesA&B (h−1)' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (L/h)); Q63 (V c (L)); Q30 (Q (L/h)); Q64 (V p (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ethosuximide
- population split: 'final model' subgroup of Diezi_2023 (paper reports 4 populations: final model, granules (a), granules (b), syrup (zarontin®) (b))
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell prp21032-tbl-0002:row2:col6 = '(0.53; 0.61)'
- unparsed cell prp21032-tbl-0002:row2:col8 = '(12.3; 20.9)'
- unparsed cell prp21032-tbl-0002:row3:col8 = '(3.2; 11.5)'
- unparsed cell prp21032-tbl-0002:row6:col6 = '(2.70; 11.8)'
- unparsed cell prp21032-tbl-0002:row6:col8 = '(66.3; 144.4)'
- unparsed cell prp21032-tbl-0002:row7:col6 = '(1.40; 2.95)'
- unparsed cell prp21032-tbl-0002:row7:col8 = '(32.5; 78.3)'
- unparsed cell prp21032-tbl-0002:row8:col6 = '(1.38; 2.26)'
- unparsed cell prp21032-tbl-0002:row9:col6 = '(0.12; 0.18)'
- unparsed cell prp21032-tbl-0002:row10:col6 = '(0.02; 0.04)'
- transposed table Diezi_2023_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 1 transcribed (18 record(s))
- LLM selected parameter table(s) 1
- dropped sensitivity-analysis table(s) 2 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.909 (10/11 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θ weight].parameter_id` | Q319 | Q900 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['prp21032-tbl-0002:row2:col1', 'prp21032-tbl-0002:row2:col2', 'prp21032-tbl-0002:row2:col3', 'prp21032-tbl-0002:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['prp21032-tbl-0002:row4:col1', 'prp21032-tbl-0002:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['prp21032-tbl-0002:row6:col1', 'prp21032-tbl-0002:row6:col2', 'prp21032-tbl-0002:row6:col3', 'prp21032-tbl-0002:row6:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp21032-tbl-0002:row3:col1', 'prp21032-tbl-0002:row3:col2', 'prp21032-tbl-0002:row3:col3', 'prp21032-tbl-0002:row3:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp21032-tbl-0002:row5:col1', 'prp21032-tbl-0002:row5:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.569 | not captured | not captured | ['prp21032-tbl-0002:row2:col1', 'prp21032-tbl-0002:row2:col2', 'prp21032-tbl-0002:row2:col3', 'prp21032-tbl-0002:row2:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.569 L/h | not captured | not captured | ['prp21032-tbl-0002:row2:col1', 'prp21032-tbl-0002:row2:col2', 'prp21032-tbl-0002:row2:col3', 'prp21032-tbl-0002:row2:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 31.3 L | not captured | not captured | ['prp21032-tbl-0002:row3:col1', 'prp21032-tbl-0002:row3:col2', 'prp21032-tbl-0002:row3:col3', 'prp21032-tbl-0002:row3:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 13.9 L | not captured | not captured | ['prp21032-tbl-0002:row5:col1', 'prp21032-tbl-0002:row5:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=ethosuximide) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 93.7 | 0.010509916393747838 | not captured | unresolved concentration unit (exp '90% Confidence Interval (CI): 76.3–115.1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 87.6 | 0.010509916393747838 | not captured | unresolved concentration unit (exp '90% CI: 81.6–94.0', sim 'kg/m3') |
| T1_tmax | reference | fail | 0.63 | 1.1835165665915643 | 1.8786 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.75 | 1.1835165665915643 | 1.578 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.5 | 1.1835165665915643 | 2.367 | h→SI vs simulated h |
| T1_tmax | reference | fail | 4.0 | 1.1835165665915643 | 0.2959 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ethosuximide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Diezi_2023` / `Diezi_2023::final_model`)
- model: `../../../knowledgebase/drugs/drug_ethosuximide/models/modelica/Ethosuximide_Diezi2023_final_model.mo`
- deviation: `../../../knowledgebase/drugs/drug_ethosuximide/models/modelica/Ethosuximide_Diezi2023_final_model.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_ethosuximide/models/modelica/Ethosuximide_Diezi2023_final_model.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model/Ethosuximide_Diezi2023_final_model_modelica.zip" download>Ethosuximide_Diezi2023_final_model_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model/Ethosuximide_Diezi2023_final_model_fmi.zip" download>Ethosuximide_Diezi2023_final_model_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model/Ethosuximide_Diezi2023_final_model_matlab.zip" download>Ethosuximide_Diezi2023_final_model_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model/Ethosuximide_Diezi2023_final_model_matlab_simbio.zip" download>Ethosuximide_Diezi2023_final_model_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model/Ethosuximide_Diezi2023_final_model_sbml.zip" download>Ethosuximide_Diezi2023_final_model_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model/Ethosuximide_Diezi2023_final_model_cellml.zip" download>Ethosuximide_Diezi2023_final_model_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model/Ethosuximide_Diezi2023_final_model.svg" alt="Ethosuximide_Diezi2023_final_model diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 700 mg, single dose, first-order absorption (ka 5.59 /h, F 0.9). Dose in the paper: 700 mg.

<dbs-fmusim paramsurl="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model/Ethosuximide_Diezi2023_final_model_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model/Ethosuximide_Diezi2023_final_model_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Ethosuximide_Diezi2023_final_model_params.json` · controls `Ethosuximide_Diezi2023_final_model_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:47 UTC</sub>
