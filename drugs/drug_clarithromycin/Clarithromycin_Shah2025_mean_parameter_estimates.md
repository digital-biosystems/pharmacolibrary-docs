# clarithromycin — `Clarithromycin_Shah2025_mean_parameter_estimates`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Shah RV; Kipper K; Baker EH; Barker CIS; Oldfield I; Davidson HC; et al. et al. (2025). Antibiotics (Basel, Switzerland) 14
  ·  DOI: [10.3390/antibiotics14060559](https://doi.org/10.3390/antibiotics14060559)

## Model component
<dbs-pgx drug="clarithromycin" model-id="Clarithromycin_Shah2025_mean_parameter_estimates" status="" stale="false" population="critically ill adults" measured-compound="clarithromycin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θCL (L/h/70 kg) | `Q22` · CL | —(suppressed) | L/h/70 kg | — | [l] / [[h] · [70kg]] | not captured | llm_confirmed (0.6) | antibiotics-14-00559-t002:row2:col1 | — | not captured |
| θV1 (L/70 kg) | `Q61` · V | —(suppressed) | L/70 kg | — | [l] / [70kg] | not captured | llm_confirmed (0.6) | antibiotics-14-00559-t002:row3:col1 | — | not captured |
| θQ (L/h/70 kg) | `Q30` · Q | —(suppressed) | L/h/70 kg | — | [l] / [[h] · [70kg]] | not captured | llm (0.6) | antibiotics-14-00559-t002:row4:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'θV2 (L/h/70 kg)' — extend the ontology if this is a real PK parameter (source ['antibiotics-14-00559-t002:row5:col1'])
- dropped duplicate Q22 ('η2 CL', value '0.53') — already have one for this compound
- dropped duplicate Q63 ('η2 V1', value '1.55') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clarithromycin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'θV1 (L/70 kg)' is the general volume)
- population split: 'mean parameter estimates' subgroup of Shah_2025 (paper reports 2 populations: mean parameter estimates, relative standard error (%))

**Extraction notes:**
- unparsed cell antibiotics-14-00559-t002:row2:col4 = '7.8 (5.6–10.7)'
- unparsed cell antibiotics-14-00559-t002:row3:col4 = '25.3 (5.4–45.0)'
- unparsed cell antibiotics-14-00559-t002:row4:col4 = '62.4 (43.4–112.5)'
- unparsed cell antibiotics-14-00559-t002:row5:col4 = '62.0 (44.7–108.0)'
- unparsed cell antibiotics-14-00559-t002:row7:col4 = '0.51 (0.21–0.87)'
- unparsed cell antibiotics-14-00559-t002:row8:col4 = '1.58 (0.15–7.95)'
- unparsed cell antibiotics-14-00559-t002:row10:col4 = '0.0317 (0.0161–0.0553)'
- LLM selected parameter table(s) 2

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_clarithromycin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Shah_2025` / `Shah_2025::mean_parameter_estimates`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_1C.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_clarithromycin/Clarithromycin_Shah2025_mean_parameter_estimates/Clarithromycin_Shah2025_mean_parameter_estimates_modelica.zip" download>Clarithromycin_Shah2025_mean_parameter_estimates_modelica.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_clarithromycin/Clarithromycin_Shah2025_mean_parameter_estimates/Clarithromycin_Shah2025_mean_parameter_estimates_fmi.zip" download>Clarithromycin_Shah2025_mean_parameter_estimates_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_clarithromycin/Clarithromycin_Shah2025_mean_parameter_estimates/Clarithromycin_Shah2025_mean_parameter_estimates_matlab.zip" download>Clarithromycin_Shah2025_mean_parameter_estimates_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_clarithromycin/Clarithromycin_Shah2025_mean_parameter_estimates/Clarithromycin_Shah2025_mean_parameter_estimates_matlab_simbio.zip" download>Clarithromycin_Shah2025_mean_parameter_estimates_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_clarithromycin/Clarithromycin_Shah2025_mean_parameter_estimates/Clarithromycin_Shah2025_mean_parameter_estimates_sbml.zip" download>Clarithromycin_Shah2025_mean_parameter_estimates_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_clarithromycin/Clarithromycin_Shah2025_mean_parameter_estimates/Clarithromycin_Shah2025_mean_parameter_estimates_cellml.zip" download>Clarithromycin_Shah2025_mean_parameter_estimates_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
