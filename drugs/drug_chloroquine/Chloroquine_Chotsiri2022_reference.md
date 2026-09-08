# chloroquine — `Chloroquine_Chotsiri2022_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Chotsiri P; Tarning J; Hoglund RM; Watson JA; White NJ et al. (2022). Clinical pharmacology and therapeutics 112
  ·  DOI: [10.1002/cpt.2665](https://doi.org/10.1002/cpt.2665)

## Model component
<dbs-pgx drug="chloroquine" model-id="Chloroquine_Chotsiri2022_reference" status="extracted" stale="false" population="healthy adult volunteers" measured-compound="chloroquine" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| K a1 (hr -1 ) | `Q49` · kabs | 0.350 | hr -1 | 9.722222222222222e-05 | [1] / [h] | not captured | llm (0.5) | tab_0:row5:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'first-order absorption rate constant'
- dropped value-less row: 'K a2'
- dropped value-less row: 'NA'
- dropped value-less row: 'OCC'
- dropped value-less row: 'V C /F'
- dropped value-less row: 'V P1 /F'
- dropped value-less row: 'V P2 /F'
- dropped value-less row: 'Q 1 /F'
- dropped value-less row: 'Q 2 /F'
- dropped value-less row: 'RSE'
- dropped value-less row: 'σ'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 80.8 (source ['tab_0:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=chloroquine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell tab_0:row2:col2 = '95% CI b'
- unparsed cell tab_0:row2:col4 = '95% CI b'
- unparsed cell tab_0:row4:col1 = '100% (fixed)'
- unparsed cell tab_0:row4:col3 = '100% (fixed)'
- unparsed cell tab_0:row5:col2 = '0.273, 0.449'
- unparsed cell tab_0:row5:col3 = '1.59 (12.4%)'
- unparsed cell tab_0:row5:col4 = '1.42, 2.30'
- unparsed cell tab_0:row6:col1 = '0.169 (17.6%)'
- unparsed cell tab_0:row6:col2 = '0.112, 0.221'
- unparsed cell tab_0:row7:col1 = '47.4 (4.46%)'
- unparsed cell tab_0:row7:col2 = '43.0, 51.4'
- unparsed cell tab_0:row7:col3 = '101 (3.61%)'
- unparsed cell tab_0:row7:col4 = '94.4, 108'
- unparsed cell tab_0:row8:col1 = '2,550 (3.29%)'
- unparsed cell tab_0:row8:col2 = '2,380, 2,720'
- unparsed cell tab_0:row8:col3 = '451 (8.57%)'
- unparsed cell tab_0:row8:col4 = '402, 563'
- unparsed cell tab_0:row9:col1 = '347 (6.85%)'
- unparsed cell tab_0:row9:col2 = '304, 394'
- unparsed cell tab_0:row9:col3 = '80.6 (5.01%)'
- unparsed cell tab_0:row9:col4 = '73.7, 89.4'
- unparsed cell tab_0:row10:col1 = '6,480 (5.62%)'
- unparsed cell tab_0:row10:col2 = '5,830, 7,260'
- unparsed cell tab_0:row10:col3 = '2,510 (4.17%)'
- unparsed cell tab_0:row10:col4 = '2,340, 2,740'
- unparsed cell tab_0:row11:col3 = '343 (6.49%)'
- unparsed cell tab_0:row11:col4 = '304, 394'
- unparsed cell tab_0:row12:col3 = '824 (5.46%)'
- unparsed cell tab_0:row12:col4 = '714, 883'
- unparsed cell tab_0:row13:col1 = '-0.286 (1.71%)'
- unparsed cell tab_0:row13:col2 = '-0.295, -0.275'
- unparsed cell tab_0:row15:col1 = '16.7% (9.54%)/14.1%*'
- unparsed cell tab_0:row15:col2 = '14.0%, 20.2%/11.5%,'
- unparsed cell tab_0:row15:col3 = '21.5% (8.52%)/14.9%*'
- unparsed cell tab_0:row15:col4 = '18.0%, 25.3%/12.0%,'
- unparsed cell tab_0:row17:col1 = '73.3% (15.1%)/71.0%* (14.1%)'
- unparsed cell tab_0:row17:col2 = '53.5%, 109%/51.9%, 99.0%*'
- unparsed cell tab_0:row17:col3 = '59.4% (25.5%)/51.0%* (13.7%)'
- unparsed cell tab_0:row17:col4 = '28.3%, 63.9%/46.2%, 90.3%*'
- unparsed cell tab_0:row18:col1 = '18.5% (7.87%)'
- unparsed cell tab_0:row18:col2 = '15.3%, 20.9%'
- unparsed cell tab_0:row18:col3 = '14.8% (9.78%)'
- unparsed cell tab_0:row18:col4 = '13.0%, 19.1%'
- unparsed cell tab_0:row19:col1 = '11.4% (14.4%)'
- unparsed cell tab_0:row19:col2 = '7.73%, 14.1%'
- unparsed cell tab_0:row19:col3 = '49.6%* (10.6%)'
- unparsed cell tab_0:row19:col4 = '37.6%, 58.2%*'
- unparsed cell tab_0:row20:col1 = '32.6%* (11.1%)'
- unparsed cell tab_0:row20:col2 = '25.2%, 40.6%*'
- unparsed cell tab_0:row21:col1 = '18.2%* (13.9%)'
- unparsed cell tab_0:row21:col2 = '12.9%, 22.7%*'
- unparsed cell tab_0:row22:col3 = '30.1% (12.8%)'
- unparsed cell tab_0:row22:col4 = '24.8%, 40.3%'
- unparsed cell tab_0:row24:col1 = '0.0178 (4.71%)'
- unparsed cell tab_0:row24:col2 = '0.0163, 0.0194'
- unparsed cell tab_0:row24:col3 = '0.0194 (5.09%)'
- unparsed cell tab_0:row24:col4 = '0.0179, 0.0218'
- LLM region Chotsiri_2022:discussion_prose: no JSON records returned

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_0:row5:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_chloroquine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chotsiri_2022` / `Chotsiri_2022::reference`)


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
