# lamotrigine — `Lamotrigine_Huo2025_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Huo J; Liu Y; Yang J; Chen M; Yang L; Wang L; et al. et al. (2025). Drug design, development and therapy 19
  ·  DOI: [10.2147/DDDT.S541597](https://doi.org/10.2147/DDDT.S541597)

## Model component
<dbs-pgx drug="lamotrigine" model-id="Lamotrigine_Huo2025_reference" status="extracted" stale="false" population="Chinese perigestational epilepsy patients" measured-compound="lamotrigine" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (h -1 ) | `Q49` · kabs | 1.93 | h -1 | 0.0005361111111111111 | [1] / [h] | not captured | exact (1.0) | tab_3:row2:col1, tab_3:row2:col3, tab_3:row2:col5 | — | not captured |
| CL (L/h) | `Q22` · CL | 2.44 | L/h | 6.777777777777778e-07 | [l] / [h] | not captured | exact (1.0) | tab_3:row4:col1, tab_3:row4:col3, tab_3:row4:col5 | — | not captured |
| σ 1 (multiplicative, CV) | `Q315` · sigma | 0.30 | multiplicative, CV | not captured | [µl] · [m] · [tiplicative] | not captured | llm (0.5) | tab_3:row16:col1, tab_3:row16:col3, tab_3:row16:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Peripregnancy stage2' — extend the ontology if this is a real PK parameter (source ['tab_3:row5:col3', 'tab_3:row5:col5'])
- dropped unlinked row (NIL): 'Peripregnancy stage3' — extend the ontology if this is a real PK parameter (source ['tab_3:row7:col3', 'tab_3:row7:col5'])
- dropped unlinked row (NIL): 'Peripregnancy stage4' — extend the ontology if this is a real PK parameter (source ['tab_3:row9:col3', 'tab_3:row9:col5'])
- dropped duplicate Q22 ('BW on CL (L/h)', value '0.92') — already have one for this compound
- unit_dimension_unknown: 'multiplicative, CV' (sigma)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lamotrigine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell tab_3:row3:col1 = '68.8 (fixed)'
- unparsed cell tab_3:row3:col3 = '68.8 (fixed)'
- unparsed cell tab_3:row3:col5 = '68.8 (fixed)'
- unparsed cell tab_3:row4:col2 = '(3.11, 3.74)'
- unparsed cell tab_3:row4:col4 = '(1.84, 3.00)'
- unparsed cell tab_3:row4:col6 = '(1.94, 3.16)'
- unparsed cell tab_3:row5:col4 = '(0.02, 0.53)'
- unparsed cell tab_3:row5:col6 = '(0.003, 0.50)'
- unparsed cell tab_3:row7:col4 = '(0.34, 0.85)'
- unparsed cell tab_3:row7:col6 = '(0.32, 0.82)'
- unparsed cell tab_3:row9:col4 = '(0.30, 0.84)'
- unparsed cell tab_3:row9:col6 = '(0.27, 0.82)'
- unparsed cell tab_3:row11:col3 = '-0.33 (-42.98)'
- unparsed cell tab_3:row11:col4 = '(-0.62, -0.05)'
- unparsed cell tab_3:row11:col5 = '-0.36 (-42.01)'
- unparsed cell tab_3:row11:col6 = '(-0.67, -0.09)'
- unparsed cell tab_3:row13:col4 = '(0.52, 1.38)'
- unparsed cell tab_3:row13:col6 = '(0.51, 1.33)'
- unparsed cell tab_3:row14:col3 = '-0.60 (-30.54)'
- unparsed cell tab_3:row14:col4 = '(-0.95, -0.24)'
- unparsed cell tab_3:row14:col5 = '-0.58 (-34.93)'
- unparsed cell tab_3:row14:col6 = '(-1.09, -1.28)'
- unparsed cell tab_3:row15:col1 = '50.76%'
- unparsed cell tab_3:row15:col3 = '32.96%'
- unparsed cell tab_3:row15:col5 = '32.02%'
- unparsed cell tab_3:row16:col2 = '(0.28, 0.47)'
- unparsed cell tab_3:row16:col4 = '(0.27, 0.34)'
- unparsed cell tab_3:row16:col6 = '(0.27, 0.34)'
- unparsed cell tab_3:row17:col2 = '(0.17, 0.59)'
- unparsed cell tab_3:row17:col4 = '(0.003, 0.005)'
- unparsed cell tab_3:row17:col6 = '(0.003729, 0.003733)'
- LLM region Huo_2025:other_prose: no JSON records returned

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C2_base_Q22 | pass | 2.44 | 2.42 | 0.9918 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_3:row4:col1', 'tab_3:row4:col3', 'tab_3:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_3:row2:col1', 'tab_3:row2:col3', 'tab_3:row2:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.44 | not captured | not captured | ['tab_3:row4:col1', 'tab_3:row4:col3', 'tab_3:row4:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lamotrigine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Huo_2025` / `Huo_2025::reference`)


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
