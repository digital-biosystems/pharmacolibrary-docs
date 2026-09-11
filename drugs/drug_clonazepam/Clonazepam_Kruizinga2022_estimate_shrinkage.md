# clonazepam — `Clonazepam_Kruizinga2022_estimate_shrinkage`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Kruizinga MD; Zuiker RGJA; Bergmann KR; Egas AC; Cohen AF; Santen GWE; et al. et al. (2022). British journal of clinical pharmacology 88
  ·  DOI: [10.1111/bcp.15152](https://doi.org/10.1111/bcp.15152)

## Model component
<dbs-pgx drug="clonazepam" model-id="Clonazepam_Kruizinga2022_estimate_shrinkage" status="extracted" stale="false" population="healthy adults" measured-compound="clonazepam" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ V D central (L) | `Q63` · V1 | 11.5 | L | 0.0115 | [l] | not captured | llm (0.6) | bcp15152-tbl-0002:row3:col2 | — | not captured |
| θ clearance (L h−1) | `Q22` · CL | 0.16 | L h−1 | 4.444444444444445e-08 | [l] / [h] | not captured | llm_confirmed (0.6) | bcp15152-tbl-0002:row4:col2 | — | not captured |
| θ V D peripheral (L) | `Q64` · V2 | 12.9 | L | 0.0129 | [l] | not captured | llm (0.6) | bcp15152-tbl-0002:row5:col2 | — | not captured |
| θ Q (L h−1) | `Q30` · Q | 11.2 | L h−1 | 3.111111111111111e-06 | [l] / [h] | not captured | llm (0.6) | bcp15152-tbl-0002:row6:col2 | — | not captured |
| θ K el saliva (h−1) | `Q47` · kel | 0.12 | h−1 | 3.3333333333333335e-05 | [1] / [h] | not captured | llm (0.6) | bcp15152-tbl-0002:row8:col2 | — | not captured |
| θ RatioKM (μg/L) | `Q1` · Km | 0.74 | μg/L | not captured | [µg] / [l] | not captured | llm (0.6) | bcp15152-tbl-0002:row10:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped diagnostic row 'Plasma kinetics' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped diagnostic row 'θ Prob. slow group' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped unlinked row (NIL): 'Saliva kinetics' — extend the ontology if this is a real PK parameter (source ['bcp15152-tbl-0002:row7:col2'])
- dropped diagnostic row 'θ RatioMAX' → Q318 (shrinkage) — reported statistic, not a parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clonazepam
- population split: 'estimate (shrinkage %)' subgroup of Kruizinga_2022 (paper reports 2 populations: estimate (shrinkage %), parameter)

**Extraction notes:**
- unparsed cell bcp15152-tbl-0002:row1:col1 = 'θ k a ‐ slow group (h−1)'
- unparsed cell bcp15152-tbl-0002:row7:col1 = 'θ F saliva (% 1000−1)'
- unparsed cell bcp15152-tbl-0002:row11:col1 = 'ω 2 k a ‐ slow group'
- unparsed cell bcp15152-tbl-0002:row11:col2 = '0.16 [2.24%]'
- unparsed cell bcp15152-tbl-0002:row12:col1 = '0.25 [0.33%]'
- unparsed cell bcp15152-tbl-0002:row13:col1 = '0.026 [3.98%]'
- unparsed cell bcp15152-tbl-0002:row14:col1 = '0.28 [5.30%]'
- unparsed cell bcp15152-tbl-0002:row15:col1 = '0.056 [17.2%]'
- unparsed cell bcp15152-tbl-0002:row16:col1 = 'σ 2 proportional plasma'
- unparsed cell bcp15152-tbl-0002:row16:col2 = '0.0058 [15.9%]'
- unparsed cell bcp15152-tbl-0002:row17:col1 = '0.057 [16.5%]'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['bcp15152-tbl-0002:row10:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp15152-tbl-0002:row4:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp15152-tbl-0002:row6:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp15152-tbl-0002:row8:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp15152-tbl-0002:row3:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp15152-tbl-0002:row5:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.16 | not captured | not captured | ['bcp15152-tbl-0002:row4:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.16 L/h | not captured | not captured | ['bcp15152-tbl-0002:row4:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 11.5 L | not captured | not captured | ['bcp15152-tbl-0002:row3:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 12.9 L | not captured | not captured | ['bcp15152-tbl-0002:row5:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_clonazepam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kruizinga_2022` / `Kruizinga_2022::estimate_shrinkage`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_2C.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_estimate_shrinkage/Clonazepam_Kruizinga2022_estimate_shrinkage_modelica.zip" download>Clonazepam_Kruizinga2022_estimate_shrinkage_modelica.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_estimate_shrinkage/Clonazepam_Kruizinga2022_estimate_shrinkage_fmi.zip" download>Clonazepam_Kruizinga2022_estimate_shrinkage_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_estimate_shrinkage/Clonazepam_Kruizinga2022_estimate_shrinkage_matlab.zip" download>Clonazepam_Kruizinga2022_estimate_shrinkage_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_estimate_shrinkage/Clonazepam_Kruizinga2022_estimate_shrinkage_matlab_simbio.zip" download>Clonazepam_Kruizinga2022_estimate_shrinkage_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_estimate_shrinkage/Clonazepam_Kruizinga2022_estimate_shrinkage_sbml.zip" download>Clonazepam_Kruizinga2022_estimate_shrinkage_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_estimate_shrinkage/Clonazepam_Kruizinga2022_estimate_shrinkage_cellml.zip" download>Clonazepam_Kruizinga2022_estimate_shrinkage_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
