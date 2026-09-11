# haloperidol — `Haloperidol_Pilla2013_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
not matched (stem Pilla_2013)

## Model component
<dbs-pgx drug="haloperidol" model-id="Haloperidol_Pilla2013_reference" status="extracted" stale="false" population="patients with schizophrenia" measured-compound="haloperidol" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 86 | L/h | 2.3888888888888892e-05 | [l] / [h] | not captured | exact (1.0) | tab_1:row4:col1, tab_1:row4:col3 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 12 | L/h | 3.3333333333333333e-06 | [l] / [h] | not captured | exact (1.0) | tab_1:row5:col1, tab_1:row5:col3, tab_1:row5:col4 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | 9 | L | 0.009000000000000001 | [l] | not captured | exact (1.0) | tab_1:row6:col1, tab_1:row6:col3, tab_1:row6:col4 | — | not captured |
| Vp/F (L) | `Q82` · V2/F | 12 | L | 0.012 | [l] | not captured | exact (1.0) | tab_1:row7:col1, tab_1:row7:col3, tab_1:row7:col4 | — | not captured |
| Ka (h j1 ) | `Q49` · kabs | 6 | h j1 | not captured | [h] · [j1] | not captured | exact (1.0) | tab_1:row8:col1, tab_1:row8:col3, tab_1:row8:col4 | — | not captured |
| RUV proportional | `Q315` · sigma | 0.44 | not captured | not captured | not captured | not captured | boundary (0.8) | tab_1:row11:col1, tab_1:row11:col3 | — | not captured |
| Baseline PANSS | `Q324` · E0 | 0.5 | not captured | not captured | not captured | not captured | boundary (0.8) | tab_1:row13:col1, tab_1:row13:col3, tab_1:row13:col4 | — | 16 (None% RSE) |
| P max | `Q32` · Cmax | 4 | not captured | not captured | not captured | not captured | llm (0.5) | tab_1:row14:col1, tab_1:row14:col3, tab_1:row14:col4 | — | not captured |
| E max | `Q320` · Emax | 0.29 | not captured | not captured | not captured | not captured | llm (0.5) | tab_1:row15:col1, tab_1:row15:col3 | — | not captured |
| EC 50 (ng/mL) | `Q321` · EC50 | 2.71 | ng/mL | not captured | [ng] / [ml] | not captured | llm (0.5) | tab_1:row16:col1, tab_1:row16:col3 | — | not captured |
| KT (1/d) | `Q47` · kel | 6 | not captured | not captured | not captured | not captured | llm (0.5) | tab_1:row17:col1, tab_1:row17:col3, tab_1:row17:col4 | — | not captured |
| t 2 (delay in drug effect in days)* | `Q83` · tlag | 6 | not captured | not captured | not captured | not captured | llm (0.5) | tab_1:row18:col1 | — | not captured |
| BHAZ: placebo (1/d) | `Q341` · placebo_Emax | 0.1 | not captured | not captured | not captured | not captured | llm (0.5) | tab_1:row19:col1, tab_1:row19:col3, tab_1:row19:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source

**Interpretation flags:**
- unit_dimension_unknown: 'h j1' (kabs)
- dropped duplicate Q47 ('BHAZ: haloperidol (1/d)', value '0.1') — already have one for this compound
- unit_dimension_unknown: 'additive' (sigma)
- dropped duplicate Q315 ('RUV as SD (additive)', value '0.1') — already have one for this compound
- NIL: refused to back-fill base 'shrinkage' from footnote/prose loose number 16.2 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=haloperidol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell tab_1:row4:col2 = '89 (77Y101)'
- unparsed cell tab_1:row4:col4 = 'j2'
- unparsed cell tab_1:row5:col2 = '225 (56Y391)'
- unparsed cell tab_1:row6:col2 = '637 (91Y1143)'
- unparsed cell tab_1:row7:col2 = '2487 (573Y3565)'
- unparsed cell tab_1:row8:col2 = '0.227 (0.056Y0.387)'
- unparsed cell tab_1:row9:col2 = '44 (31Y55)'
- unparsed cell tab_1:row9:col4 = 'j0.5'
- unparsed cell tab_1:row10:col2 = '119 (95Y180)'
- unparsed cell tab_1:row10:col4 = 'j5'
- unparsed cell tab_1:row11:col2 = '0.44 (0.38Y0.50)'
- unparsed cell tab_1:row11:col4 = 'j6'
- unparsed cell tab_1:row13:col2 = '91.6 (90.8Y92.3)'
- unparsed cell tab_1:row14:col2 = '0.075 (0.064Y0.096)'
- unparsed cell tab_1:row15:col2 = '0.34 (0.19Y0.66)'
- unparsed cell tab_1:row15:col4 = 'j2'
- unparsed cell tab_1:row16:col2 = '4.03(1.89Y10.78)'
- unparsed cell tab_1:row16:col4 = 'j15'
- unparsed cell tab_1:row17:col2 = '0.113 (0.062Y0.167)'
- unparsed cell tab_1:row19:col2 = '0.00144 (0.0009Y0.0015)'
- unparsed cell tab_1:row20:col2 = '0.00087 (0.00066Y0.00111)'
- unparsed cell tab_1:row21:col1 = 'j0.0295 (2)'
- unparsed cell tab_1:row21:col2 = 'j0.0292 (j0.0317 to 0.0271)'
- unparsed cell tab_1:row21:col3 = 'j0.0292'
- unparsed cell tab_1:row21:col4 = 'j0.2'
- unparsed cell tab_1:row22:col2 = '0.20 (0.19Y0.22)'
- unparsed cell tab_1:row22:col4 = 'j0.2'
- unparsed cell tab_1:row23:col2 = '16 (15Y17)'
- unparsed cell tab_1:row23:col4 = 'j1'
- unparsed cell tab_1:row24:col2 = '0.28 (0.17Y0.48)'
- unparsed cell tab_1:row24:col4 = 'j7'
- unparsed cell tab_1:row25:col2 = '151 (76Y287)'
- unparsed cell tab_1:row26:col2 = '8.7 (8.3Y9.1)'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row6:col1', 'tab_1:row6:col3', 'tab_1:row6:col4'] |
| C5_dimension_Q321 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_1:row16:col1', 'tab_1:row16:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row5:col1', 'tab_1:row5:col3', 'tab_1:row5:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row7:col1', 'tab_1:row7:col3', 'tab_1:row7:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_haloperidol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Pilla_2013` / `Pilla_2013::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_2C_enteral.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_haloperidol/Haloperidol_Pilla2013_reference/Haloperidol_Pilla2013_reference_modelica.zip" download>Haloperidol_Pilla2013_reference_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_haloperidol/Haloperidol_Pilla2013_reference/Haloperidol_Pilla2013_reference_fmi.zip" download>Haloperidol_Pilla2013_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_haloperidol/Haloperidol_Pilla2013_reference/Haloperidol_Pilla2013_reference_matlab.zip" download>Haloperidol_Pilla2013_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_haloperidol/Haloperidol_Pilla2013_reference/Haloperidol_Pilla2013_reference_matlab_simbio.zip" download>Haloperidol_Pilla2013_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_haloperidol/Haloperidol_Pilla2013_reference/Haloperidol_Pilla2013_reference_sbml.zip" download>Haloperidol_Pilla2013_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_haloperidol/Haloperidol_Pilla2013_reference/Haloperidol_Pilla2013_reference_cellml.zip" download>Haloperidol_Pilla2013_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
