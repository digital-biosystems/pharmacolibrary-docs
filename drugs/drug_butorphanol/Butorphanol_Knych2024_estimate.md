# butorphanol — `Butorphanol_Knych2024_estimate`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Knych HK; Weiner D; McKemie DS; Traynham M; Blea J et al. (2024). Journal of veterinary pharmacology and therapeutics 47
  ·  DOI: [10.1111/jvp.13450](https://doi.org/10.1111/jvp.13450)

## Model component
<dbs-pgx drug="butorphanol" model-id="Butorphanol_Knych2024_estimate" status="extracted" stale="false" population="exercised Thoroughbred horses" measured-compound="butorphanol" parameterization="apparent" topology="3C"></dbs-pgx>

**Parameterization:** CL/F, Q3/F, V/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tvKa (1/h) | `Q49` · kabs | 6.28 | not captured | not captured | not captured | not captured | tv_prefix (0.95) | Knych_2024_table_p6_1:row0:col1 | — | not captured |
| tvV/F (L/kg) | `Q76` · V/F | 0.465 | L/kg | 0.03255 | [l] / [kg] | not captured | tv_prefix (0.95) | Knych_2024_table_p6_1:row1:col1 | — | not captured |
| tvV2/F (L/kg) | `Q82` · V2/F | 0.420 | L/kg | 0.029400000000000003 | [l] / [kg] | not captured | tv_prefix (0.95) | Knych_2024_table_p6_1:row2:col1 | — | not captured |
| tvV3/F (L/kg) | `Q78` · V3/F | 0.368 | L/kg | 0.02576 | [l] / [kg] | not captured | tv_prefix (0.95) | Knych_2024_table_p6_1:row3:col1 | — | not captured |
| tvCl/F (mL/min/kg) | `Q27` · CL/F | 9.85 | mL/min/kg | 1.1491666666666665e-05 | [ml] / [[min] · [kg]] | not captured | tv_prefix (0.95) | Knych_2024_table_p6_1:row4:col1 | — | not captured |
| tvCl2/F (mL/min/kg) | `Q309` · Q3/F | 0.667 | mL/min/kg | 7.781666666666667e-07 | [ml] / [[min] · [kg]] | not captured | llm (0.6) | Knych_2024_table_p6_1:row5:col1 | — | not captured |
| V | `Q61` · V | 0.144 | not captured | not captured | not captured | not captured | exact (1.0) | Knych_2024_table_p6_1:row10:col1 | — | not captured |
| V2 | `Q64` · V2 | 0.295 | not captured | not captured | not captured | not captured | exact (1.0) | Knych_2024_table_p6_1:row11:col1 | — | not captured |
| V3 | `Q77` · V3 | 0.132 | not captured | not captured | not captured | not captured | exact (1.0) | Knych_2024_table_p6_1:row12:col1 | — | not captured |
| Cl | `Q22` · CL | 0.053 | not captured | not captured | not captured | not captured | exact (1.0) | Knych_2024_table_p6_1:row13:col1 | — | not captured |
| Cl2 | `Q30` · Q | 0.710 | not captured | not captured | not captured | not captured | special_case (0.95) | Knych_2024_table_p6_1:row14:col1 | — | not captured |
| Cl3 | `Q308` · Q3 | 0.278 | not captured | not captured | not captured | not captured | llm (0.6) | Knych_2024_table_p6_1:row15:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag', 'k12', 'k21', 'k13', 'k31']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source

**Interpretation flags:**
- dropped duplicate Q309 ('tvCl3/F (mL/min/kg)', value '2.98') — already have one for this compound
- routed 'stdev0' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped duplicate Q49 ('Ka', value '0.412') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=butorphanol
- population split: 'estimate' subgroup of Knych_2024 (paper reports 2 populations: estimate, shrinkage)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Knych_2024_table_p6_1:row4:col1'] |
| C5_dimension_Q309 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Knych_2024_table_p6_1:row5:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Knych_2024_table_p6_1:row1:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Knych_2024_table_p6_1:row3:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Knych_2024_table_p6_1:row2:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 41.4 L/h | not captured | not captured | ['Knych_2024_table_p6_1:row4:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 32.6 L | not captured | not captured | ['Knych_2024_table_p6_1:row1:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 29.4 L | not captured | not captured | ['Knych_2024_table_p6_1:row2:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_butorphanol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Knych_2024` / `Knych_2024::estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_butorphanol/Butorphanol_Knych2024_estimate/Butorphanol_Knych2024_estimate_modelica.zip" download>Butorphanol_Knych2024_estimate_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_butorphanol/Butorphanol_Knych2024_estimate/Butorphanol_Knych2024_estimate_matlab.zip" download>Butorphanol_Knych2024_estimate_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_butorphanol/Butorphanol_Knych2024_estimate/Butorphanol_Knych2024_estimate_matlab_simbio.zip" download>Butorphanol_Knych2024_estimate_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_butorphanol/Butorphanol_Knych2024_estimate/Butorphanol_Knych2024_estimate_sbml.zip" download>Butorphanol_Knych2024_estimate_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_butorphanol/Butorphanol_Knych2024_estimate/Butorphanol_Knych2024_estimate_cellml.zip" download>Butorphanol_Knych2024_estimate_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
