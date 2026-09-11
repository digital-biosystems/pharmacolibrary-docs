# ilaprazole — `Ilaprazole_Yu2023_final_model`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Yu M; Liu S; Wu X; Wang H et al. (2023). Frontiers in pharmacology 14
  ·  DOI: [10.3389/fphar.2023.1306222](https://doi.org/10.3389/fphar.2023.1306222)

## Model component
<dbs-pgx drug="ilaprazole" model-id="Ilaprazole_Yu2023_final_model" status="" stale="false" population="healthy subjects and patients with duodenal ulcer" measured-compound="ilaprazole" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V (L) | `Q61` · V | —(suppressed) | L | — | [l] | not captured | exact (1.0) | T3:row3:col1, T3:row3:col2, T3:row3:col3 | — | not captured |
| Vp (L) | `Q64` · V2 | —(suppressed) | L | — | [l] | not captured | exact (1.0) | T3:row4:col1, T3:row4:col2, T3:row4:col3 | — | 21.763 (None% RSE) |
| CL (L/h) | `Q22` · CL | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | T3:row5:col1, T3:row5:col2, T3:row5:col3 | — | 25.051 (None% RSE) |
| wt_effect_on_vp | `Q900` · wt_effect_on_vp | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | T3:row9:col1, T3:row9:col2, T3:row9:col3 | — | not captured |
| theta_cl_sex | `Q900` · theta_cl_sex | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | T3:row8:col1, T3:row8:col2, T3:row8:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k12', 'k21']

**Interpretation flags:**
- dropped duplicate Q22 ('CLp (L/h)', value '13.086') — already have one for this compound
- covariate level 'WT effect on Vp' → Q900:wt_effect_on_vp = 1.545 (linear_fractional on Q22)
- unit_dimension_unknown: 'Disease status = 1' (CL)
- dropped duplicate Q22 ('Disease status effect on CL (Disease status = 1)', value '0.290') — already have one for this compound
- unit_dimension_unknown: 'Disease status = 1' (V2)
- dropped duplicate Q64 ('Disease status effect on Vp (Disease status = 1)', value '0.356') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ilaprazole
- population split: 'final model' subgroup of Yu_2023 (paper reports 2 populations: bootstrapping, final model)

**Extraction notes:**
- unparsed cell T3:row13:col1 = '0.013 (34.0%)'
- unparsed cell T3:row14:col1 = '0.032 (1.82%)'
- unparsed cell T3:row15:col1 = '0.059 (24.4%)'
- LLM selected parameter table(s) 3

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ilaprazole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yu_2023` / `Yu_2023::final_model`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_2C.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ilaprazole/Ilaprazole_Yu2023_final_model/Ilaprazole_Yu2023_final_model_modelica.zip" download>Ilaprazole_Yu2023_final_model_modelica.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ilaprazole/Ilaprazole_Yu2023_final_model/Ilaprazole_Yu2023_final_model_fmi.zip" download>Ilaprazole_Yu2023_final_model_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ilaprazole/Ilaprazole_Yu2023_final_model/Ilaprazole_Yu2023_final_model_matlab.zip" download>Ilaprazole_Yu2023_final_model_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ilaprazole/Ilaprazole_Yu2023_final_model/Ilaprazole_Yu2023_final_model_matlab_simbio.zip" download>Ilaprazole_Yu2023_final_model_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ilaprazole/Ilaprazole_Yu2023_final_model/Ilaprazole_Yu2023_final_model_sbml.zip" download>Ilaprazole_Yu2023_final_model_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ilaprazole/Ilaprazole_Yu2023_final_model/Ilaprazole_Yu2023_final_model_cellml.zip" download>Ilaprazole_Yu2023_final_model_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
