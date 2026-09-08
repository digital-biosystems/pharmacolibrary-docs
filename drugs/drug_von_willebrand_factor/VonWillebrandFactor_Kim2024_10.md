# von Willebrand factor — `VonWillebrandFactor_Kim2024_10`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `BT200`, measured `factor VIII`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Kim MS; Hajducek DM; Gilbert JC; Iorio A; Jilma B; Edginton AN et al. (2024). The AAPS journal 26
  ·  DOI: [10.1208/s12248-024-00952-4](https://doi.org/10.1208/s12248-024-00952-4)

## Model component
<dbs-pgx drug="von Willebrand factor" model-id="VonWillebrandFactor_Kim2024_10" status="" stale="false" population="humans" measured-compound="factor VIII" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θCL (L/h) | `Q22` · CL | —(suppressed) | L/h | — | [l] / [h] | not captured | llm_confirmed (0.6) | Kim_2024_table_p12_1:row8:col10 | — | not captured |
| θV1 (L) | `Q61` · V | —(suppressed) | L | — | [l] | not captured | llm_confirmed (0.6) | Kim_2024_table_p12_1:row9:col10 | — | not captured |
| θka (1/h) | `Q49` · kabs | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Kim_2024_table_p12_1:row12:col10 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'ka', 'Tlag']
- `invented_absorption`: ka defaulted — not reported in source

**Interpretation flags:**
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'OBS1)' — extend the ontology if this is a real PK parameter (source ['Kim_2024_table_p12_1:row0:col10'])
- dropped unlinked row (NIL): 'INDS2)' — extend the ontology if this is a real PK parameter (source ['Kim_2024_table_p12_1:row1:col10'])
- dropped unlinked row (NIL): 'RECS3)' — extend the ontology if this is a real PK parameter (source ['Kim_2024_table_p12_1:row2:col10'])
- dropped unlinked row (NIL): 'OBJ4)' — extend the ontology if this is a real PK parameter (source ['Kim_2024_table_p12_1:row3:col10'])
- dropped unlinked row (NIL): 'AIC5)' — extend the ontology if this is a real PK parameter (source ['Kim_2024_table_p12_1:row4:col10'])
- dropped unlinked row (NIL): 'BIC6)' — extend the ontology if this is a real PK parameter (source ['Kim_2024_table_p12_1:row5:col10'])
- dropped unlinked row (NIL): 'Øη1' — extend the ontology if this is a real PK parameter (source ['Kim_2024_table_p12_1:row7:col10'])
- dropped diagnostic row 'ωka² [Shk. %]' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped duplicate Q22 ('ωCL-V1', value '0') — already have one for this compound
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (θCL (L/h)); Q63 (θV1 (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=factor VIII
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'θV1 (L)' is the general volume)
- population split: '10' subgroup of Kim_2024 (paper reports 14 populations: 1, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- transposed table Kim_2024_table_p12_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Kim_2024_table_p12_1:row13:col7 = '0.0493 [5.09]'
- unparsed cell Kim_2024_table_p12_1:row13:col10 = '0.130 [0.856]'
- unparsed cell Kim_2024_table_p12_1:row13:col11 = '0.0870 [2.24]'
- unparsed cell Kim_2024_table_p12_1:row13:col12 = '0.101 [4.35]'
- unparsed cell Kim_2024_table_p12_1:row13:col13 = '0.146 [2.70]'
- unparsed cell Kim_2024_table_p12_1:row13:col14 = '0.166 [1.81]'
- unparsed cell Kim_2024_table_p12_1:row14:col8 = '0.0656 [0.859]'
- unparsed cell Kim_2024_table_p12_1:row14:col10 = '0.167 [3.53]'
- unparsed cell Kim_2024_table_p12_1:row14:col12 = '0.0931 [13.8]'
- unparsed cell Kim_2024_table_p12_1:row14:col13 = '0.162 [5.35]'
- unparsed cell Kim_2024_table_p12_1:row14:col14 = '0.266 [7.31]'
- unparsed cell Kim_2024_table_p12_1:row15:col9 = '0.520 [16.9]'
- unparsed cell Kim_2024_table_p12_1:row15:col11 = '0.428 [14.0]'
- unparsed cell Kim_2024_table_p12_1:row15:col12 = '0.292 [30.9]'
- unparsed cell Kim_2024_table_p12_1:row15:col13 = '0.189 [26.5]'
- unparsed cell Kim_2024_table_p12_1:row15:col14 = '0.264 [85.4]'
- unparsed cell Kim_2024_table_p12_1:row17:col2 = '0.400 [0.888]'
- unparsed cell Kim_2024_table_p12_1:row17:col3 = '0.400 [1e-10]'
- unparsed cell Kim_2024_table_p12_1:row17:col5 = '0.317 [1e-10]'
- unparsed cell Kim_2024_table_p12_1:row17:col6 = '0.400 [1e-10]'
- unparsed cell Kim_2024_table_p12_1:row17:col7 = '0.217 [2.75]'
- unparsed cell Kim_2024_table_p12_1:row17:col8 = '0.252 [6.21]'
- unparsed cell Kim_2024_table_p12_1:row17:col9 = '0.238 [4.76]'
- unparsed cell Kim_2024_table_p12_1:row17:col10 = '0.137 [6.17]'
- unparsed cell Kim_2024_table_p12_1:row17:col11 = '0.148 [4.47]'
- unparsed cell Kim_2024_table_p12_1:row17:col12 = '0.133 [7.91]'
- unparsed cell Kim_2024_table_p12_1:row17:col13 = '0.127 [7.30]'
- unparsed cell Kim_2024_table_p12_1:row17:col14 = '0.273 [4.54]'
- unparsed cell Kim_2024_table_p12_1:row18:col1 = '1756240 [1e-10]'
- unparsed cell Kim_2024_table_p12_1:row18:col3 = '0 [1e-10]'
- unparsed cell Kim_2024_table_p12_1:row18:col4 = '201557 [1e-10]'
- unparsed cell Kim_2024_table_p12_1:row18:col6 = '0 [1e-10]'

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_von_willebrand_factor/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kim_2024` / `Kim_2024::10`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_von_willebrand_factor/VonWillebrandFactor_Kim2024_10/VonWillebrandFactor_Kim2024_10_modelica.zip" download>VonWillebrandFactor_Kim2024_10_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_von_willebrand_factor/VonWillebrandFactor_Kim2024_10/VonWillebrandFactor_Kim2024_10_matlab.zip" download>VonWillebrandFactor_Kim2024_10_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_von_willebrand_factor/VonWillebrandFactor_Kim2024_10/VonWillebrandFactor_Kim2024_10_matlab_simbio.zip" download>VonWillebrandFactor_Kim2024_10_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_von_willebrand_factor/VonWillebrandFactor_Kim2024_10/VonWillebrandFactor_Kim2024_10_sbml.zip" download>VonWillebrandFactor_Kim2024_10_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_von_willebrand_factor/VonWillebrandFactor_Kim2024_10/VonWillebrandFactor_Kim2024_10_cellml.zip" download>VonWillebrandFactor_Kim2024_10_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
