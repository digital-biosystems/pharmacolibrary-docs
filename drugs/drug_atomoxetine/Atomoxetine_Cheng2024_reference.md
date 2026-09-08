# atomoxetine — `Atomoxetine_Cheng2024_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Cheng S; Al-Kofahi M; Leeder JS; Brown JT et al. (2024). Clinical pharmacology and therapeutics 115
  ·  DOI: [10.1002/cpt.3155](https://doi.org/10.1002/cpt.3155)

## Model component
<dbs-pgx drug="atomoxetine" model-id="Atomoxetine_Cheng2024_reference" status="extracted" stale="false" population="children and adolescents with ADHD" measured-compound="atomoxetine" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KATR (1/hour) | `Q47` · kel | 7.35 | not captured | not captured | not captured | not captured | llm (0.5) | tab_0:row18:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| V/F (L) | Q76 | not captured | exact |
| Q/F (L/hour) | Q69 | not captured | exact |
| V2/F (L) | Q82 | not captured | exact |
| CL/F (L/hour) | Q27 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'CYP2D6 AS 1' — extend the ontology if this is a real PK parameter (source ['tab_0:row5:col1', 'tab_0:row11:col1', 'tab_0:row25:col1', 'tab_0:row41:col1'])
- dropped unlinked row (NIL): 'CYP2D6 AS ≥ 2' — extend the ontology if this is a real PK parameter (source ['tab_0:row6:col1', 'tab_0:row12:col1', 'tab_0:row26:col1', 'tab_0:row42:col1'])
- dropped unlinked row (NIL): 'CYP2D6 AS 0' — extend the ontology if this is a real PK parameter (source ['tab_0:row9:col1', 'tab_0:row23:col1', 'tab_0:row39:col1'])
- dropped unlinked row (NIL): 'CYP2D6 AS 0.5' — extend the ontology if this is a real PK parameter (source ['tab_0:row10:col1', 'tab_0:row24:col1', 'tab_0:row40:col1'])
- dropped duplicate Q47 ('KELR (1/hour)', value '0.00211') — already have one for this compound
- dropped unlinked row (NIL): 'EX (unitless)' — extend the ontology if this is a real PK parameter (source ['tab_0:row35:col1'])
- dropped unlinked row (NIL): 'BASE (unitless)' — extend the ontology if this is a real PK parameter (source ['tab_0:row36:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atomoxetine
- topology: 3 first-order transfer(s) across 4 compounds → general_linear

**Extraction notes:**
- unparsed cell tab_0:row1:col2 = 'SIR median (95% CI)'
- unparsed cell tab_0:row4:col1 = '1 FIXED'
- unparsed cell tab_0:row5:col2 = '0.894 (0.835, 0.961)'
- unparsed cell tab_0:row6:col2 = '0.811 (0.756, 0.868)'
- unparsed cell tab_0:row9:col2 = '2.10 (1.64, 2.66)'
- unparsed cell tab_0:row10:col2 = '6.49 (3.56, 11.0)'
- unparsed cell tab_0:row11:col2 = '17.9 (10.3, 29.5)'
- unparsed cell tab_0:row12:col2 = '19.1 (10.7, 32.2)'
- unparsed cell tab_0:row13:col2 = '75.5 (67.5, 84.5)'
- unparsed cell tab_0:row14:col2 = '0.48 (0.38, 0.60)'
- unparsed cell tab_0:row16:col2 = '8.43 (5.64, 15.4)'
- unparsed cell tab_0:row18:col2 = '7.28 (6.34, 8.57)'
- unparsed cell tab_0:row19:col2 = '0.000763 (0.000587, 0.000913)'
- unparsed cell tab_0:row21:col2 = 'Fraction of ATX (Other than renal and 2-COOH eliminations)'
- unparsed cell tab_0:row23:col2 = '0.360 (0.316, 0.414)'
- unparsed cell tab_0:row24:col2 = '0.740 (0.677, 0.797)'
- unparsed cell tab_0:row25:col2 = '0.924 (0.905, 0.941)'
- unparsed cell tab_0:row26:col2 = '0.932 (0.916, 0.947)'
- unparsed cell tab_0:row28:col2 = '7.76 (6.27, 9.34)'
- unparsed cell tab_0:row28:col4 = 'Volume of distribution of 4-OH'
- unparsed cell tab_0:row29:col2 = '1.60 (1.17, 2.22)'
- unparsed cell tab_0:row31:col2 = '11.5 (9.60, 13.7)'
- unparsed cell tab_0:row33:col2 = '7.82 (7.15, 8.52)'
- unparsed cell tab_0:row33:col4 = 'Clearance of 4-OH'
- unparsed cell tab_0:row35:col2 = '-0.184 (-0.221, -0.140)'
- unparsed cell tab_0:row36:col2 = '0.0285 (0.0218, 0.0357)'
- unparsed cell tab_0:row39:col2 = '0.837 (0.488, 1.55)'
- unparsed cell tab_0:row40:col2 = '3.46 (0.703, 15.5)'
- unparsed cell tab_0:row41:col2 = '10.5 (2.83, 39.4)'
- unparsed cell tab_0:row42:col2 = '17.5 (4.63, 64.3)'
- unparsed cell tab_0:row43:col2 = '11.9 (9.23, 15.4)'
- unparsed cell tab_0:row44:col2 = '6.99 (5.25, 9.33)'
- unparsed cell tab_0:row46:col2 = '34.7 (27.2, 41.7)'
- unparsed cell tab_0:row48:col2 = '0.00214 (0.00152, 0.00281)'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row33:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row14:col1', 'tab_0:row29:col1', 'tab_0:row44:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row13:col1', 'tab_0:row28:col1', 'tab_0:row43:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row16:col1', 'tab_0:row31:col1', 'tab_0:row46:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_atomoxetine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Cheng_2024` / `Cheng_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
