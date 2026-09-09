# paclitaxel — `Paclitaxel_He2022_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
He J; Jackson CGCA; Deva S; Hung T; Clarke K; Segelov E; et al. et al. (2022). CPT: pharmacometrics & systems pharmacology 11
  ·  DOI: [10.1002/psp4.12799](https://doi.org/10.1002/psp4.12799)

## Model component
<dbs-pgx drug="paclitaxel" model-id="Paclitaxel_He2022_reference" status="extracted" stale="false" population="patients with advanced/metastatic solid tumors" measured-compound="paclitaxel" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h)a | `Q22` · CL | 34.4 | not captured | not captured | not captured | 4.2 | boundary (0.8) | He_2022_table_p7_1:row1:col1, He_2022_table_p7_1:row1:col2, He_2022_table_p7_1:row1:col3 | — | 29.8 (25.8% RSE) |
| V2 (L) | `Q64` · V2 | 176 | L | 0.176 | [l] | 15.9 | exact (1.0) | He_2022_table_p7_1:row2:col1, He_2022_table_p7_1:row2:col2, He_2022_table_p7_1:row2:col3 | linear_fractional on race=0.696 | 13.0 (27.0% RSE) |
| Q (L/h) | `Q30` · Q | 48.0 | L/h | 1.3333333333333333e-05 | [l] / [h] | 5.1 | exact (1.0) | He_2022_table_p7_1:row3:col1, He_2022_table_p7_1:row3:col2, He_2022_table_p7_1:row3:col3 | — | not captured |
| V3 (L) | `Q77` · V3 | 855 | L | 0.855 | [l] | 4.9 | exact (1.0) | He_2022_table_p7_1:row4:col1, He_2022_table_p7_1:row4:col2 | — | not captured |
| KA (1/h) | `Q49` · kabs | 0.724 | not captured | not captured | not captured | 5.2 | exact (1.0) | He_2022_table_p7_1:row5:col1, He_2022_table_p7_1:row5:col2 | — | not captured |
| Formulation on F1 (proportional) | `Q87` · Frel | 0.895 | proportional | not captured | [proportional] | 28.5 | llm (0.5) | He_2022_table_p7_1:row10:col1, He_2022_table_p7_1:row10:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'proportional' (Frel)
- dropped unlinked row (NIL): 'Log additive' — extend the ontology if this is a real PK parameter (source ['He_2022_table_p7_1:row16:col1', 'He_2022_table_p7_1:row16:col2'])
- dropped value-less row: 'OFV'
- dropped unlinked row (NIL): 'Condition number' — extend the ontology if this is a real PK parameter (source ['He_2022_table_p7_1:row18:col3'])
- dropped value-less row: 'CL'
- dropped value-less row: 'F1'
- dropped value-less row: 'GI'
- dropped value-less row: 'KA'
- dropped value-less row: 'popPK'
- dropped value-less row: 'Q'
- dropped value-less row: 'V2'
- dropped value-less row: 'V3'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=paclitaxel
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell He_2022_table_p7_1:row6:col1 = '0.215 (fixed)'
- unparsed cell He_2022_table_p7_1:row7:col1 = '0.119 (fixed)'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['He_2022_table_p7_1:row3:col1', 'He_2022_table_p7_1:row3:col2', 'He_2022_table_p7_1:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['He_2022_table_p7_1:row2:col1', 'He_2022_table_p7_1:row2:col2', 'He_2022_table_p7_1:row2:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['He_2022_table_p7_1:row4:col1', 'He_2022_table_p7_1:row4:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 34.4 | not captured | not captured | ['He_2022_table_p7_1:row1:col1', 'He_2022_table_p7_1:row1:col2', 'He_2022_table_p7_1:row1:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_paclitaxel/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `He_2022` / `He_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
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
