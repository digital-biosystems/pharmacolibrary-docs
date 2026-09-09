# semaglutide — `Semaglutide_Overgaard2019_shrinkage`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
not matched (stem Overgaard_2019)

## Model component
<dbs-pgx drug="semaglutide" model-id="Semaglutide_Overgaard2019_shrinkage" status="extracted" stale="false" population="healthy subjects and those with type 2 diabetes" measured-compound="semaglutide" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant (ka), h−1 | `Q49` · kabs | 0.0253 | h−1 | 7.027777777777778e-06 | 1/h | not captured | boundary (0.8) | Overgaard_2019:other_prose | — | not captured |
| Clearance (CL), L/h | `Q22` · CL | 0.0348 | L/h | 9.666666666666666e-09 | L/h | not captured | boundary (0.8) | Overgaard_2019:other_prose | — | not captured |
| Central volume (Vc), L | `Q63` · V1 | 3.59 | L | 0.00359 | L | not captured | boundary (0.8) | Overgaard_2019:other_prose | — | not captured |
| Intercompartmental clearance (Q), L/h | `Q30` · Q | 0.304 | L/h | 8.444444444444446e-08 | L/h | not captured | boundary (0.8) | Overgaard_2019:other_prose | — | not captured |
| Peripheral volume (Vp), L | `Q64` · V2 | 4.1 | L | 0.0040999999999999995 | L | not captured | boundary (0.8) | Overgaard_2019:other_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped value-less row: 'Absorption rate constant (ka), h−1'
- dropped value-less row: 'Clearance (CL), L/h'
- dropped value-less row: 'Central volume (Vc), L'
- dropped value-less row: 'Intercompartmental clearance (Q), L/h'
- dropped value-less row: 'Peripheral volume (Vp), L'
- salvaged Q49 ('Absorption rate constant (ka), h−1'=0.0253) from results prose — parameter table was unreadable
- salvaged Q22 ('Clearance (CL), L/h'=0.0348) from results prose — parameter table was unreadable
- salvaged Q63 ('Central volume (Vc), L'=3.59) from results prose — parameter table was unreadable
- salvaged Q30 ('Intercompartmental clearance (Q), L/h'=0.304) from results prose — parameter table was unreadable
- salvaged Q64 ('Peripheral volume (Vp), L'=4.1) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=semaglutide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'shrinkage (%)' subgroup of Overgaard_2019 (paper reports 5 populations: estimate, one-compartment model, one-compartment model from phase 3a trialsa, shrinkage (%), two-compartment final model)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab4:row1:col2 = '[0.0236–0.027]'
- unparsed cell Tab4:row2:col2 = '[0.0327–0.0369]'
- unparsed cell Tab4:row3:col2 = '[3.28–3.9]'
- unparsed cell Tab4:row4:col2 = '[0.249–0.359]'
- unparsed cell Tab4:row5:col2 = '[3.78–4.42]'
- unparsed cell Tab4:row6:col2 = '[0.798–0.896]'
- unparsed cell Tab4:row7:col2 = '[0.912–1.1]'
- unparsed cell Tab4:row8:col2 = '[0.833–1.01]'
- unparsed cell Tab4:row9:col2 = '[1.09–1.16]'
- unparsed cell Tab4:row10:col2 = '[0.844–0.921]'
- unparsed cell Tab4:row11:col2 = '[0.0301–0.039]'
- unparsed cell Tab4:row12:col2 = '[0.0438–0.0615]'
- unparsed cell Tab4:row13:col2 = '[0.109–0.168]'
- unparsed cell Tab4:row14:col2 = '[0.485–0.603]'
- unparsed cell Overgaard_2019_table_5:row0:col3 = '0.0286 (fixed)c'
- companion parameter table 5 transcribed (10 record(s))
- LLM selected parameter table(s) 4, 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0348 | not captured | not captured | ['Overgaard_2019:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0348 L/h | not captured | not captured | ['Overgaard_2019:other_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.59 L | not captured | not captured | ['Overgaard_2019:other_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.1 L | not captured | not captured | ['Overgaard_2019:other_prose'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_semaglutide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Overgaard_2019` / `Overgaard_2019::shrinkage`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_semaglutide/Semaglutide_Overgaard2019_shrinkage/Semaglutide_Overgaard2019_shrinkage_modelica.zip" download>Semaglutide_Overgaard2019_shrinkage_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Overgaard2019_shrinkage/Semaglutide_Overgaard2019_shrinkage_fmi.zip" download>Semaglutide_Overgaard2019_shrinkage_fmi.zip</a> <span class="pk-size">(1.2 MB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Overgaard2019_shrinkage/Semaglutide_Overgaard2019_shrinkage_matlab.zip" download>Semaglutide_Overgaard2019_shrinkage_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Overgaard2019_shrinkage/Semaglutide_Overgaard2019_shrinkage_matlab_simbio.zip" download>Semaglutide_Overgaard2019_shrinkage_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Overgaard2019_shrinkage/Semaglutide_Overgaard2019_shrinkage_sbml.zip" download>Semaglutide_Overgaard2019_shrinkage_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Overgaard2019_shrinkage/Semaglutide_Overgaard2019_shrinkage_cellml.zip" download>Semaglutide_Overgaard2019_shrinkage_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
