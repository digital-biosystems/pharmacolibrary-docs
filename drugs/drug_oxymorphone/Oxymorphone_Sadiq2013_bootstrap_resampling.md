# oxymorphone — `Oxymorphone_Sadiq2013_bootstrap_resampling`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Sadiq MW; Boström E; Keizer R; Björkman S; Hammarlund-Udenaes M et al. (2013). Journal of pharmaceutical sciences 102
  ·  DOI: [10.1002/jps.23492](https://doi.org/10.1002/jps.23492)

## Model component
<dbs-pgx drug="oxymorphone" model-id="Oxymorphone_Sadiq2013_bootstrap_resampling" status="" stale="false" population="male Sprague-Dawley rats" measured-compound="oxymorphone" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (mL/min) | `Q22` · CL | —(suppressed) | mL/min | — | [ml] / [min] | not captured | exact (1.0) | tab_1:row2:col4 | — | not captured |
| V c (mL) | `Q61` · V | —(suppressed) | mL | — | [ml] | not captured | llm (0.6) | tab_1:row3:col2, tab_1:row3:col3, tab_1:row3:col4 | — | not captured |
| Q (mL/min) | `Q30` · Q | —(suppressed) | mL/min | — | [ml] / [min] | not captured | exact (1.0) | tab_1:row4:col2, tab_1:row4:col4 | — | not captured |
| Fu (%) | `Q46` · fu | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row6:col2, tab_1:row6:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'bootstrap resampling' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bootstrap resampling' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bootstrap resampling' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bootstrap resampling' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bootstrap resampling' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q30 ('Q av (mL/min)', value '39.4') — already have one for this compound
- dropped unlinked row (NIL): 'REC blood (%)' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col2', 'tab_1:row7:col3', 'tab_1:row7:col4'])
- dropped unlinked row (NIL): 'REC brain (%)' — extend the ontology if this is a real PK parameter (source ['tab_1:row8:col2', 'tab_1:row8:col3', 'tab_1:row8:col4'])
- dropped duplicate Q22 ('CL in (mL/min)', value '10.5') — already have one for this compound
- dropped unlinked row (NIL): 'K p,uu' — extend the ontology if this is a real PK parameter (source ['tab_1:row10:col2', 'tab_1:row10:col4'])
- dropped PD-category row 'Baseline effect (s)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row11:col2', 'tab_1:row11:col4'])
- dropped PD-category row 'E max (s)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row12:col4'])
- dropped PD-category row 'EC 50 (ng/mL)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row13:col3', 'tab_1:row13:col4'])
- dropped duplicate Q22 ('ω CL', value '34') — already have one for this compound
- dropped duplicate Q63 ('ω Vc', value '58.5') — already have one for this compound
- routed 'ω fu' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω Base' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped PD-category row 'ω EC50' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row19:col2', 'tab_1:row19:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oxymorphone
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V c (mL)' is the general volume)
- population split: 'bootstrap resampling' subgroup of Sadiq_2013 (paper reports 2 populations: bootstrap resampling, original data set)

**Extraction notes:**
- unparsed cell tab_1:row2:col2 = '8 .3'
- unparsed cell tab_1:row2:col3 = '5 4 .1'
- unparsed cell tab_1:row4:col3 = '5 .2'
- unparsed cell tab_1:row5:col2 = '2 4 .6'
- unparsed cell tab_1:row5:col3 = '5 2 .3'
- unparsed cell tab_1:row6:col3 = '0 .49'
- unparsed cell tab_1:row9:col3 = '0 .13'
- unparsed cell tab_1:row10:col3 = '1 .9'
- unparsed cell tab_1:row11:col3 = '5 .27'
- unparsed cell tab_1:row12:col2 = '7 4'
- unparsed cell tab_1:row12:col3 = '4 8 .6'
- unparsed cell tab_1:row13:col2 = '5 1 .2'
- unparsed cell tab_1:row16:col3 = '0 .027'
- unparsed cell tab_1:row17:col3 = '0 .32'
- unparsed cell tab_1:row18:col3 = '0 .02'
- unparsed cell tab_1:row19:col3 = '0 .042'
- LLM selected parameter table(s) 2

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_oxymorphone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sadiq_2013` / `Sadiq_2013::bootstrap_resampling`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_1C.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_bootstrap_resampling/Oxymorphone_Sadiq2013_bootstrap_resampling_modelica.zip" download>Oxymorphone_Sadiq2013_bootstrap_resampling_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_bootstrap_resampling/Oxymorphone_Sadiq2013_bootstrap_resampling_fmi.zip" download>Oxymorphone_Sadiq2013_bootstrap_resampling_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_bootstrap_resampling/Oxymorphone_Sadiq2013_bootstrap_resampling_matlab.zip" download>Oxymorphone_Sadiq2013_bootstrap_resampling_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_bootstrap_resampling/Oxymorphone_Sadiq2013_bootstrap_resampling_matlab_simbio.zip" download>Oxymorphone_Sadiq2013_bootstrap_resampling_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_bootstrap_resampling/Oxymorphone_Sadiq2013_bootstrap_resampling_sbml.zip" download>Oxymorphone_Sadiq2013_bootstrap_resampling_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_bootstrap_resampling/Oxymorphone_Sadiq2013_bootstrap_resampling_cellml.zip" download>Oxymorphone_Sadiq2013_bootstrap_resampling_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
