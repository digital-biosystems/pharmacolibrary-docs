# berotralstat — `Berotralstat_Mathis2022_parameter_estimate_rse`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Mathis A; Sale M; Cornpropst M; Sheridan WP; Ma SC et al. (2022). Clinical and translational science 15
  ·  DOI: [10.1111/cts.13233](https://doi.org/10.1111/cts.13233)

## Model component
<dbs-pgx drug="berotralstat" model-id="Berotralstat_Mathis2022_parameter_estimate_rse" status="" stale="false" population="healthy subjects and patients with hereditary angioedema" measured-compound="berotralstat" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance (L/h) | `Q22` · CL | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | cts13233-tbl-0001:row1:col1 | — | not captured |
| Volume (L) | `Q61` · V | —(suppressed) | L | — | [l] | not captured | exact (1.0) | cts13233-tbl-0001:row2:col1 | — | not captured |
| Ka (1/h) | `Q49` · kabs | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | cts13233-tbl-0001:row5:col1 | — | not captured |
| K23 (1/h) | `Q48` · kcomp | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | cts13233-tbl-0001:row6:col1 | — | not captured |
| Absorption lag time (h) | `Q83` · tlag | —(suppressed) | h | — | [h] | not captured | exact (1.0) | cts13233-tbl-0001:row8:col1 | — | not captured |
| Bioavailability as a function of dose | `Q40` · Fab | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | cts13233-tbl-0001:row11:col1 | — | not captured |
| Clearance as a function of weight | `Q319` · allometric_exponent | —(suppressed) | not captured | — | not captured | not captured | llm_corrected (0.6) | cts13233-tbl-0001:row13:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka']
- `invented_absorption`: ka defaulted — not reported in source

**Interpretation flags:**
- dropped duplicate Q48 ('K32 (1/h)', value '0.0309') — already have one for this compound
- dropped duplicate Q48 ('K24 (1/h)', value '0.00281') — already have one for this compound
- dropped duplicate Q48 ('K42 (1/h)', value '0.00136') — already have one for this compound
- dropped duplicate Q61 ('Volume as a function of weight', value '1.00') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=berotralstat
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'parameter estimate (rse%)' subgroup of Mathis_2022 (paper reports 6 populations: adolescents (12–18 years), low weight adults (60–80 kg), normal weight adults (80–100 kg), overweight adults (100–120 kg), parameter estimate (rse%), underweight adults (40–60 kg))

**Extraction notes:**
- transposed table Mathis_2022_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 2 transcribed (25 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_berotralstat/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Mathis_2022` / `Mathis_2022::parameter_estimate_rse`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_berotralstat/Berotralstat_Mathis2022_parameter_estimate_rse/Berotralstat_Mathis2022_parameter_estimate_rse_modelica.zip" download>Berotralstat_Mathis2022_parameter_estimate_rse_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_berotralstat/Berotralstat_Mathis2022_parameter_estimate_rse/Berotralstat_Mathis2022_parameter_estimate_rse_fmi.zip" download>Berotralstat_Mathis2022_parameter_estimate_rse_fmi.zip</a> <span class="pk-size">(1.2 MB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_berotralstat/Berotralstat_Mathis2022_parameter_estimate_rse/Berotralstat_Mathis2022_parameter_estimate_rse_matlab.zip" download>Berotralstat_Mathis2022_parameter_estimate_rse_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_berotralstat/Berotralstat_Mathis2022_parameter_estimate_rse/Berotralstat_Mathis2022_parameter_estimate_rse_matlab_simbio.zip" download>Berotralstat_Mathis2022_parameter_estimate_rse_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_berotralstat/Berotralstat_Mathis2022_parameter_estimate_rse/Berotralstat_Mathis2022_parameter_estimate_rse_sbml.zip" download>Berotralstat_Mathis2022_parameter_estimate_rse_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_berotralstat/Berotralstat_Mathis2022_parameter_estimate_rse/Berotralstat_Mathis2022_parameter_estimate_rse_cellml.zip" download>Berotralstat_Mathis2022_parameter_estimate_rse_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
