# ciprofloxacin — `Ciprofloxacin_Hffken1985_100_mg_orally`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Höffken G; Lode H; Prinzing C; Borner K; Koeppe P et al. (1985). Antimicrobial agents and chemotherapy 27
  ·  DOI: [10.1128/AAC.27.3.375](https://doi.org/10.1128/AAC.27.3.375)

## Model component
<dbs-pgx drug="ciprofloxacin" model-id="Ciprofloxacin_Hffken1985_100_mg_orally" status="extracted" stale="false" population="healthy volunteers" measured-compound="ciprofloxacin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax (mg/liter) | `Q32` · Cmax | 0.49 | mg/liter | not captured | [mg] / [l] | not captured | exact (1.0) | Höffken_1985_table_1:row0:col4 | — | not captured |
| Tmax (min) | `Q56` · tmax | 49.5 | min | 2970.0 | [min] | not captured | exact (1.0) | Höffken_1985_table_1:row1:col4 | — | not captured |
| Varea (liters/ 100 kg) | `Q61` · V | 304 | liters/ 100 kg | 0.2128 | [l] / [100kg] | not captured | llm (0.6) | Höffken_1985_table_1:row2:col4 | — | not captured |
| t1/2α (min) | `Q59` · t1/2α | 41.2 | min | 2472.0 | [min] | not captured | exact (1.0) | Höffken_1985_table_1:row3:col4 | — | not captured |
| t1/2β (min) | `Q60` · t1/2β | 245.5 | min | 14730.0 | [min] | not captured | exact (1.0) | Höffken_1985_table_1:row4:col4 | — | not captured |
| AUCtot (mg · h/liter) | `Q17` · AUC∞ | 1.9 | mg · h/liter | not captured | [[h] · [mg]] / [l] | not captured | exact (1.0) | Höffken_1985_table_1:row6:col4 | — | not captured |
| f | `Q40` · Fab | 0.63 | not captured | not captured | not captured | not captured | exact (1.0) | Höffken_1985_table_1:row7:col4 | — | not captured |
| Cl (L/h/kg) | `Q22` · CL | 0.81 | L/h/kg | 1.575e-05 | L/h | not captured | review_gapfill (0.7) | Ambros_2025:review | — | not captured |
| Ka (h−1) | `Q49` · kabs | 1.0 | h−1 | 0.0002777777777777778 | 1/h | not captured | review_gapfill (0.7) | Alonso_2021:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ciprofloxacin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: '100 mg orally' subgroup of Höffken_1985 (paper reports 8 populations: 100 mg, 100 mg i.v., 100 mg orally, 50 mg, 50 mg i.v., 50 mg orally, 750 mg, 750 mg orally)
- gap-filled Q22 (CL) from Ambros_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Alonso_2021's review values (primary lacked it)

**Extraction notes:**
- final table tab_0: grid unusable → re-running vision table extraction for Höffken_1985
- transposed table Höffken_1985_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- transposed table Höffken_1985_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 2 transcribed (6 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Höffken_1985_table_1:row6:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ambros_2025:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Höffken_1985_table_1:row0:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Alonso_2021:review'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Höffken_1985_table_1:row1:col4'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Höffken_1985_table_1:row3:col4'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Höffken_1985_table_1:row4:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Höffken_1985_table_1:row2:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.81 | not captured | not captured | ['Ambros_2025:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 56.7 L/h | not captured | not captured | ['Ambros_2025:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 213 L | not captured | not captured | ['Höffken_1985_table_1:row2:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ciprofloxacin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Höffken_1985` / `Höffken_1985::100_mg_orally`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_1C_enteral.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ciprofloxacin/Ciprofloxacin_Hffken1985_100_mg_orally/Ciprofloxacin_Hffken1985_100_mg_orally_modelica.zip" download>Ciprofloxacin_Hffken1985_100_mg_orally_modelica.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ciprofloxacin/Ciprofloxacin_Hffken1985_100_mg_orally/Ciprofloxacin_Hffken1985_100_mg_orally_fmi.zip" download>Ciprofloxacin_Hffken1985_100_mg_orally_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ciprofloxacin/Ciprofloxacin_Hffken1985_100_mg_orally/Ciprofloxacin_Hffken1985_100_mg_orally_matlab.zip" download>Ciprofloxacin_Hffken1985_100_mg_orally_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ciprofloxacin/Ciprofloxacin_Hffken1985_100_mg_orally/Ciprofloxacin_Hffken1985_100_mg_orally_matlab_simbio.zip" download>Ciprofloxacin_Hffken1985_100_mg_orally_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ciprofloxacin/Ciprofloxacin_Hffken1985_100_mg_orally/Ciprofloxacin_Hffken1985_100_mg_orally_sbml.zip" download>Ciprofloxacin_Hffken1985_100_mg_orally_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ciprofloxacin/Ciprofloxacin_Hffken1985_100_mg_orally/Ciprofloxacin_Hffken1985_100_mg_orally_cellml.zip" download>Ciprofloxacin_Hffken1985_100_mg_orally_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
