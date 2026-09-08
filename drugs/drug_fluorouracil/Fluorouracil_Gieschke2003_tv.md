# fluorouracil — `Fluorouracil_Gieschke2003_tv`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `capecitabine`, measured `5-fluorouracil`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Gieschke R; Burger HU; Reigner B; Blesch KS; Steimer JL et al. (2003). British journal of clinical pharmacology 55
  ·  DOI: [10.1046/j.1365-2125.2003.01765.x](https://doi.org/10.1046/j.1365-2125.2003.01765.x)

## Model component
<dbs-pgx drug="fluorouracil" model-id="Fluorouracil_Gieschke2003_tv" status="rejected" stale="false" population="patients with advanced or metastatic colorectal cancer" measured-compound="5-fluorouracil" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KA (l h -1 ) | `Q49` · kabs | —(suppressed) | l h -1 | — | [l] / [h] | 0.166 | exact (1.0) | tab_3:row2:col1, tab_3:row2:col2 | — | not captured |
| TLAG (h) | `Q83` · tlag | —(suppressed) | h | — | [h] | 2.02E-4 | exact (1.0) | tab_3:row3:col1, tab_3:row3:col2 | — | not captured |
| V1 (l) | `Q63` · V1 | —(suppressed) | l | — | [l] | 14.1 | exact (1.0) | tab_3:row4:col1, tab_3:row4:col2 | — | not captured |
| CL1 (l h -1 ) | `Q22` · CL | —(suppressed) | l h -1 | — | [l] / [h] | 1.8 | llm (0.6) | tab_3:row5:col1, tab_3:row5:col2 | — | not captured |
| V2 (l) | `Q64` · V2 | —(suppressed) | l | — | [l] | not captured | exact (1.0) | tab_3:row6:col1 | — | not captured |
| CL2 (l h -1 ) | `Q30` · Q | —(suppressed) | l h -1 | — | [l] / [h] | 39.3 | special_case (0.95) | tab_3:row7:col1, tab_3:row7:col2 | — | not captured |
| V3 (l) | `Q77` · V3 | —(suppressed) | l | — | [l] | 2.35 | exact (1.0) | tab_3:row8:col1, tab_3:row8:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'KA (l h -1 )' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q22 ('CL3 (l h -1 )', value '27.5') — already have one for this compound
- unit_dimension_mismatch: 'BSAV3: Effect of BSA on V3' → Q77 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q77 ('BSAV3: Effect of BSA on V3', value '0.812') — already have one for this compound
- dropped unlinked row (NIL): 'CLRCL3: Effect of CLCR on CL3' — extend the ontology if this is a real PK parameter (source ['tab_3:row14:col1', 'tab_3:row14:col2'])
- dropped unlinked row (NIL): 'CLRV3: Effect of CLCR on V3' — extend the ontology if this is a real PK parameter (source ['tab_3:row15:col1', 'tab_3:row15:col2'])
- dropped unlinked row (NIL): 'ALPCL2: Effect of ALP on CL2' — extend the ontology if this is a real PK parameter (source ['tab_3:row16:col1', 'tab_3:row16:col2'])
- dropped unlinked row (NIL): 'Res. Error FBAL*' — extend the ontology if this is a real PK parameter (source ['tab_3:row20:col1', 'tab_3:row20:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=5-fluorouracil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- population split: 'tv' subgroup of Gieschke_2003 (paper reports 3 populations: re, remark, tv)

**Extraction notes:**
- unparsed cell tab_3:row3:col3 = '49 498'
- unparsed cell tab_3:row3:col4 = '182 000'
- unparsed cell tab_3:row18:col5 = "Correlation of e's for 5¢-DFUR and"
- unparsed cell tab_3:row19:col5 = '5-FU:'
- unparsed cell tab_3:row20:col5 = '0.77 (SE: 0.0435)'
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_3:row5:col1', 'tab_3:row5:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_3:row7:col1', 'tab_3:row7:col2'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | l h -1 | not captured | not captured | ['tab_3:row2:col1', 'tab_3:row2:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_3:row4:col1', 'tab_3:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_3:row6:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_3:row8:col1', 'tab_3:row8:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['tab_3:row3:col1', 'tab_3:row3:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 75.8 | not captured | not captured | ['tab_3:row5:col1', 'tab_3:row5:col2'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 75.8 L/h | not captured | not captured | ['tab_3:row5:col1', 'tab_3:row5:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 90.6 L | not captured | not captured | ['tab_3:row4:col1', 'tab_3:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 17.8 L | not captured | not captured | ['tab_3:row6:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fluorouracil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gieschke_2003` / `Gieschke_2003::tv`)


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
