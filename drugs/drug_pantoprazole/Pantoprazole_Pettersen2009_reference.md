# pantoprazole — `Pantoprazole_Pettersen2009_reference`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span>

### Reviewer guidance

**What is wrong:** no model exists yet, so there is nothing to judge; the engineer did not exercise the covariate scenarios this record defines. Evidence: T2_covariates_not_exercised

**Steps:**
1. No curator action. Run the engineer for this drug.
2. Advisory only — the base model still replicates.
3. Check the record's covariate_definitions in _interpretv2.yaml.
4. Re-run the engineer for this drug if the covariate curves are wanted.

<sub>owner: **engineer** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Pettersen G; Mouksassi MS; Théorêt Y; Labbé L; Faure C; Nguyen B; et al. et al. (2009). British journal of clinical pharmacology 67
  ·  DOI: [10.1111/j.1365-2125.2008.03328.x](https://doi.org/10.1111/j.1365-2125.2008.03328.x)

## Model component
<dbs-pgx drug="pantoprazole" model-id="Pantoprazole_Pettersen2009_reference" status="not_modelled" stale="false" population="paediatric intensive care patients" measured-compound="pantoprazole" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (l h -1 ) | `Q22` · CL | —(suppressed) | l h -1 | — | [l] / [h] | not captured | exact (1.0) | tab_1:row3:col1, tab_1:row3:col2 | — | 27.0 (None% RSE) |
| Vc (l) | `Q63` · V1 | —(suppressed) | l | — | [l] | not captured | exact (1.0) | tab_1:row4:col1, tab_1:row4:col2 | — | 39.5 (None% RSE) |
| Q (l h -1 ) | `Q30` · Q | —(suppressed) | l h -1 | — | [l] / [h] | not captured | exact (1.0) | tab_1:row5:col1, tab_1:row5:col2 | — | 27.3 (None% RSE) |
| V2 (l) | `Q64` · V2 | —(suppressed) | l | — | [l] | not captured | exact (1.0) | tab_1:row6:col1, tab_1:row6:col2 | — | 93.9 (None% RSE) |
| theta_q314_age | `Q900` · theta_q314_age | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | tab_1:row17:col1, tab_1:row17:col2 | — | not captured |
| theta_q312_cyp2c19 | `Q900` · theta_q312_cyp2c19 | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | tab_1:row18:col1, tab_1:row18:col2 | — | not captured |
| theta_q312_hepatic | `Q900` · theta_q312_hepatic | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | tab_1:row19:col1, tab_1:row19:col2 | — | not captured |
| first-order absorption rate constants (K a ) ... for OS | `Q49` · kabs | —(suppressed) | h -1 | — | 1/h | not captured | review_gapfill (0.7) | McCann_2023:review | — | not captured |
| lag time ... for the DRT formulation | `Q83` · tlag | —(suppressed) | h | — | h | not captured | review_gapfill (0.7) | McCann_2023:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- routed 'SIRS covariate effect' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q312 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q312 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pantoprazole
- gap-filled Q49 (kabs) from McCann_2023's review values (primary lacked it)
- gap-filled Q83 (tlag) from McCann_2023's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_1:row3:col3 = '3.88, 6.90'
- unparsed cell tab_1:row4:col3 = '1.54, 2.83'
- unparsed cell tab_1:row5:col3 = '0.7, 1.6'
- unparsed cell tab_1:row6:col3 = '1.76, 6.04'
- unparsed cell tab_1:row8:col3 = '10.5, 37.8'
- unparsed cell tab_1:row9:col3 = '21.3, 68.6'
- unparsed cell tab_1:row10:col3 = '7.7, 62.1'
- unparsed cell tab_1:row11:col3 = '52.6, 169.9'
- unparsed cell tab_1:row14:col3 = '13.1, 23.6'
- unparsed cell tab_1:row16:col3 = '0.160, 0.784'
- unparsed cell tab_1:row17:col3 = '0.206, 0.407'
- unparsed cell tab_1:row18:col3 = '0.125, 0.800'
- unparsed cell tab_1:row19:col3 = '0.291, 0.904'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 2.0 | 2.123 | 1.0615 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row5:col1', 'tab_1:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['McCann_2023:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row6:col1', 'tab_1:row6:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['McCann_2023:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 5.08 | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.08 L/h | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.2 L | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.69 L | not captured | not captured | ['tab_1:row6:col1', 'tab_1:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | skipped | 2.0 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_pantoprazole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Pettersen_2009` / `Pettersen_2009::paediatric intensive care patients`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_2C_enteral.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference/Pantoprazole_Pettersen2009_reference_modelica.zip" download>Pantoprazole_Pettersen2009_reference_modelica.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference/Pantoprazole_Pettersen2009_reference_fmi.zip" download>Pantoprazole_Pettersen2009_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference/Pantoprazole_Pettersen2009_reference_matlab.zip" download>Pantoprazole_Pettersen2009_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference/Pantoprazole_Pettersen2009_reference_matlab_simbio.zip" download>Pantoprazole_Pettersen2009_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference/Pantoprazole_Pettersen2009_reference_sbml.zip" download>Pantoprazole_Pettersen2009_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference/Pantoprazole_Pettersen2009_reference_cellml.zip" download>Pantoprazole_Pettersen2009_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
