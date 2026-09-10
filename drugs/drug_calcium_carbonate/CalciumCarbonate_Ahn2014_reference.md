# calcium carbonate — `CalciumCarbonate_Ahn2014_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `calcium`, measured `parathyroid hormone`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Ahn JE; Jeon S; Lee J; Han S; Yim DS et al. (2014). The Korean journal of physiology & pharmacology : official journal of the Korean Physiological Society and the Korean Society of Pharmacology 18
  ·  DOI: [10.4196/kjpp.2014.18.3.217](https://doi.org/10.4196/kjpp.2014.18.3.217)

## Model component
<dbs-pgx drug="calcium carbonate" model-id="CalciumCarbonate_Ahn2014_reference" status="extracted" stale="false" population="healthy subjects" measured-compound="parathyroid hormone" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (hr-1) | `Q49` · kabs | 0.871 | hr-1 | 0.00024194444444444445 | [1] / [h] | not captured | exact (1.0) | Ahn_2014_table_p3_1:row4:col1, Ahn_2014_table_p3_1:row4:col3 | — | 0.390 (None% RSE) |
| Relative F1 | `Q87` · Frel | 2.14 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Ahn_2014_table_p3_1:row6:col1, Ahn_2014_table_p3_1:row6:col3 | — | not captured |
| CL (L/h) | `Q22` · CL | 0.46 | L/h | 1.277777777777778e-07 | L/h | not captured | review_gapfill (0.7) | Ekobena_2025:review | — | not captured |
| apparent distribution volume | `Q61` · V | 11.6 | L | 0.0116 | L | not captured | review_gapfill (0.7) | Ekobena_2025:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'kin_ca' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ahn_2014_table_p3_1:row0:col1', 'Ahn_2014_table_p3_1:row0:col3'])
- dropped PD-category row 'kout_ca' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ahn_2014_table_p3_1:row1:col1'])
- dropped PD-category row 'kin_pth' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ahn_2014_table_p3_1:row2:col1', 'Ahn_2014_table_p3_1:row2:col3'])
- dropped PD-category row 'kout_pth' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ahn_2014_table_p3_1:row3:col1', 'Ahn_2014_table_p3_1:row3:col3'])
- dropped PD-category row 'EC50 (mmol/L)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ahn_2014_table_p3_1:row5:col1', 'Ahn_2014_table_p3_1:row5:col3'])
- routed 'SD_ca (mmol/L)' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'CV_pth (% CV)' — extend the ontology if this is a real PK parameter (source ['Ahn_2014_table_p3_1:row12:col1', 'Ahn_2014_table_p3_1:row12:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=parathyroid hormone
- gap-filled Q22 (CL) from Ekobena_2025's review values (primary lacked it)
- gap-filled Q61 (V) from Ekobena_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- final table T2: grid unusable → re-running vision table extraction for Ahn_2014
- unparsed cell Ahn_2014_table_p3_1:row0:col2 = '3.39, 3.43'
- unparsed cell Ahn_2014_table_p3_1:row0:col4 = '3.39, 3.43'
- unparsed cell Ahn_2014_table_p3_1:row2:col2 = '12.4, 30.8'
- unparsed cell Ahn_2014_table_p3_1:row2:col4 = '9.12, 33.0'
- unparsed cell Ahn_2014_table_p3_1:row3:col2 = '0.513, 1.19'
- unparsed cell Ahn_2014_table_p3_1:row3:col4 = '0.375, 1.26'
- unparsed cell Ahn_2014_table_p3_1:row4:col2 = '0.438, 1.15'
- unparsed cell Ahn_2014_table_p3_1:row4:col4 = '0.54, 7.18'
- unparsed cell Ahn_2014_table_p3_1:row5:col2 = '0.0924, 0.224'
- unparsed cell Ahn_2014_table_p3_1:row5:col4 = '0.026, 0.232'
- unparsed cell Ahn_2014_table_p3_1:row6:col2 = '1.06, 2.90'
- unparsed cell Ahn_2014_table_p3_1:row6:col4 = '1.31, 8.58'
- unparsed cell Ahn_2014_table_p3_1:row7:col2 = '0.000814, 0.000377'
- unparsed cell Ahn_2014_table_p3_1:row7:col4 = '0.0001, 0.0004'
- unparsed cell Ahn_2014_table_p3_1:row8:col2 = '0.0260, 0.0646'
- unparsed cell Ahn_2014_table_p3_1:row8:col4 = '0.0213, 0.0616'
- unparsed cell Ahn_2014_table_p3_1:row9:col2 = '0.161, 0.651'
- unparsed cell Ahn_2014_table_p3_1:row9:col4 = '0.164, 1.34'
- unparsed cell Ahn_2014_table_p3_1:row10:col2 = '0.0015, 0.0179'
- unparsed cell Ahn_2014_table_p3_1:row10:col4 = '0.0026, 0.0189'
- unparsed cell Ahn_2014_table_p3_1:row11:col2 = '0.0212, 0.0304'
- unparsed cell Ahn_2014_table_p3_1:row11:col4 = '0.022, 0.0301'
- unparsed cell Ahn_2014_table_p3_1:row12:col2 = '18.8, 23.2'
- unparsed cell Ahn_2014_table_p3_1:row12:col4 = '18.9, 23'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ekobena_2025:review'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Ahn_2014_table_p3_1:row4:col1', 'Ahn_2014_table_p3_1:row4:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ekobena_2025:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.46 | not captured | not captured | ['Ekobena_2025:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.46 L/h | not captured | not captured | ['Ekobena_2025:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 11.6 L | not captured | not captured | ['Ekobena_2025:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_calcium_carbonate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ahn_2014` / `Ahn_2014::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_calcium_carbonate/CalciumCarbonate_Ahn2014_reference/CalciumCarbonate_Ahn2014_reference_modelica.zip" download>CalciumCarbonate_Ahn2014_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_calcium_carbonate/CalciumCarbonate_Ahn2014_reference/CalciumCarbonate_Ahn2014_reference_fmi.zip" download>CalciumCarbonate_Ahn2014_reference_fmi.zip</a> <span class="pk-size">(1.2 MB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_calcium_carbonate/CalciumCarbonate_Ahn2014_reference/CalciumCarbonate_Ahn2014_reference_matlab.zip" download>CalciumCarbonate_Ahn2014_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_calcium_carbonate/CalciumCarbonate_Ahn2014_reference/CalciumCarbonate_Ahn2014_reference_matlab_simbio.zip" download>CalciumCarbonate_Ahn2014_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_calcium_carbonate/CalciumCarbonate_Ahn2014_reference/CalciumCarbonate_Ahn2014_reference_sbml.zip" download>CalciumCarbonate_Ahn2014_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_calcium_carbonate/CalciumCarbonate_Ahn2014_reference/CalciumCarbonate_Ahn2014_reference_cellml.zip" download>CalciumCarbonate_Ahn2014_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
