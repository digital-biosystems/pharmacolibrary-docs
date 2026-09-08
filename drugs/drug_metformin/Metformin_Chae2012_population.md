# metformin — `Metformin_Chae2012_population`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Chae JW; Baek IH; Lee BY; Cho SK; Kwon KI et al. (2012). British journal of clinical pharmacology 74
  ·  DOI: [10.1111/j.1365-2125.2012.04260.x](https://doi.org/10.1111/j.1365-2125.2012.04260.x)

## Model component
<dbs-pgx drug="metformin" model-id="Metformin_Chae2012_population" status="extracted" stale="false" population="healthy humans" measured-compound="metformin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (l h -1 ) | `Q22` · CL | 52.6 | l h -1 | 1.4611111111111112e-05 | [l] / [h] | not captured | exact (1.0) | tab_1:row4:col2 | — | not captured |
| V (l) | `Q61` · V | 113 | l | 0.113 | [l] | not captured | exact (1.0) | tab_1:row5:col2 | — | not captured |
| Ka (h -1 ) | `Q49` · kabs | 0.41 | h -1 | 0.00011388888888888888 | [1] / [h] | not captured | exact (1.0) | tab_1:row6:col2 | — | not captured |
| ABCG2 | `Q900` · ABCG2 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC22A1 | `Q900` · SLC22A1 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC22A3 | `Q900` · SLC22A3 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC22A4 | `Q900` · SLC22A4 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC47A2 | `Q900` · SLC47A2 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameter, unit' — extend the ontology if this is a real PK parameter (source ['tab_1:row2:col5'])
- dropped unlinked row (NIL): 't' — extend the ontology if this is a real PK parameter (source ['tab_1:row9:col2'])
- dropped PD-category row 'Emax' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row10:col2'])
- dropped PD-category row 'EC50' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row11:col2'])
- dropped unlinked row (NIL): 'r' — extend the ontology if this is a real PK parameter (source ['tab_1:row12:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=metformin
- population split: 'population' subgroup of Chae_2012 (paper reports 2 populations: interindividual, population)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row4:col3 = '52.9 (48.5, 56.7)'
- unparsed cell tab_1:row4:col5 = '27.9 (26.5, 29.1)'
- unparsed cell tab_1:row5:col3 = '113 (100, 126)'
- unparsed cell tab_1:row5:col5 = '22.2 (20.2, 24.1)'
- unparsed cell tab_1:row6:col3 = '0.41 (0.39, 0.43)'
- unparsed cell tab_1:row7:col3 = '23.1 (21.7, 25.2)'
- unparsed cell tab_1:row9:col3 = '0.48 (0.48, 0.51)'
- unparsed cell tab_1:row10:col3 = '20.3 (19.2, 20.4)'
- unparsed cell tab_1:row11:col3 = '3.68 (3.49, 3.81)'
- unparsed cell tab_1:row12:col3 = '0.59 (0.50, 0.60)'
- unparsed cell tab_1:row12:col5 = '4.07 (3.86, 4.22)'
- unparsed cell tab_1:row13:col3 = '40.4 (38.2, 42.9)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row6:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row5:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 52.6 | not captured | not captured | ['tab_1:row4:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 52.6 L/h | not captured | not captured | ['tab_1:row4:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 113 L | not captured | not captured | ['tab_1:row5:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_metformin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chae_2012` / `Chae_2012::population`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_metformin/Metformin_Chae2012_population/Metformin_Chae2012_population_modelica.zip" download>Metformin_Chae2012_population_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_metformin/Metformin_Chae2012_population/Metformin_Chae2012_population_matlab.zip" download>Metformin_Chae2012_population_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_metformin/Metformin_Chae2012_population/Metformin_Chae2012_population_matlab_simbio.zip" download>Metformin_Chae2012_population_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_metformin/Metformin_Chae2012_population/Metformin_Chae2012_population_sbml.zip" download>Metformin_Chae2012_population_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_metformin/Metformin_Chae2012_population/Metformin_Chae2012_population_cellml.zip" download>Metformin_Chae2012_population_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
