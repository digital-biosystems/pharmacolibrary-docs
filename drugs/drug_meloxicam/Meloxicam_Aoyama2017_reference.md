# meloxicam — `Meloxicam_Aoyama2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Aoyama T; Ishida Y; Kaneko M; Miyamoto A; Saito Y; Tohkin M; et al. et al. (2017). CPT: pharmacometrics & systems pharmacology 6
  ·  DOI: [10.1002/psp4.12259](https://doi.org/10.1002/psp4.12259)

## Model component
<dbs-pgx drug="meloxicam" model-id="Meloxicam_Aoyama2017_reference" status="rejected" stale="false" population="East Asian and white adult subjects" measured-compound="meloxicam" parameterization="apparent" topology="3C"></dbs-pgx>

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | tab_1:row2:col1, tab_1:row2:col3 | — | 21.0 (None% RSE) |
| Vc (L) | `Q63` · V1 | —(suppressed) | L | — | [l] | not captured | exact (1.0) | tab_1:row5:col1, tab_1:row5:col3 | — | not captured |
| LBM on Vd | `Q61` · V | —(suppressed) | not captured | — | not captured | not captured | boundary (0.8) | tab_1:row6:col1, tab_1:row6:col3 | — | 17.1 (None% RSE) |
| Q (L/h) | `Q30` · Q | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | tab_1:row7:col1, tab_1:row7:col3 | — | not captured |
| Vp (L) | `Q64` · V2 | —(suppressed) | L | — | [l] | not captured | exact (1.0) | tab_1:row8:col1, tab_1:row8:col3 | — | not captured |
| Ka (/h) | `Q49` · kabs | —(suppressed) | /h | — | [1] / [h] | not captured | exact (1.0) | tab_1:row9:col1, tab_1:row9:col3 | — | 130 (None% RSE) |
| x 2 F | `Q87` · Frel | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_1:row15:col1, tab_1:row15:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CI, confidence interval; CL, apparent clearance; CL ð | Q27 | not captured | boundary |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('CYP2C9 *2 on CL', value '20.147') — already have one for this compound
- dropped duplicate Q22 ('CYP2C9 *3 on CL', value '20.400') — already have one for this compound
- unit_dimension_unknown: '/h' (kabs)
- dropped unlinked row (NIL): 'DT (h)' — extend the ontology if this is a real PK parameter (source ['tab_1:row10:col1', 'tab_1:row10:col3'])
- dropped duplicate Q49 ('x Ka -x F', value '0.262') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=meloxicam
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell tab_1:row1:col1 = 'Estimate (61.96 3 SE)'
- unparsed cell tab_1:row1:col2 = 'Median (95% CI)'
- unparsed cell tab_1:row2:col2 = '(0.375 to 0.407)'
- unparsed cell tab_1:row2:col4 = '(0.375 to 0.407)'
- unparsed cell tab_1:row3:col2 = '(20.234 to 20.0604)'
- unparsed cell tab_1:row3:col4 = '(20.215 to 20.0410)'
- unparsed cell tab_1:row4:col2 = '(20.488 to 20.312)'
- unparsed cell tab_1:row4:col4 = '(20.483 to 20.301)'
- unparsed cell tab_1:row5:col2 = '(7.24 to 8.34)'
- unparsed cell tab_1:row5:col4 = '(7.01 to 8.35)'
- unparsed cell tab_1:row6:col2 = '(0.695 to 1.40)'
- unparsed cell tab_1:row6:col4 = '(0.746 to 1.41)'
- unparsed cell tab_1:row7:col2 = '(0.948 to 1.53)'
- unparsed cell tab_1:row7:col4 = '(1.00 to 1.68)'
- unparsed cell tab_1:row8:col2 = '(2.20 to 3.26)'
- unparsed cell tab_1:row8:col4 = '(2.22 to 3.49)'
- unparsed cell tab_1:row9:col2 = '(1.38 to 2.62)'
- unparsed cell tab_1:row9:col4 = '(1.44 to 2.84)'
- unparsed cell tab_1:row10:col2 = '(1.86 to 1.96)'
- unparsed cell tab_1:row10:col4 = '(1.83 to 1.94)'
- unparsed cell tab_1:row11:col2 = '(0.367 to 0.483)'
- unparsed cell tab_1:row11:col4 = '(0.364 to 0.481)'
- unparsed cell tab_1:row12:col2 = '(18.4 to 23.9)'
- unparsed cell tab_1:row12:col4 = '(18.2 to 23.5)'
- unparsed cell tab_1:row13:col2 = '(13.4 to 20.3)'
- unparsed cell tab_1:row13:col4 = '(14.0 to 20.0)'
- unparsed cell tab_1:row14:col2 = '(68.1 to 201)'
- unparsed cell tab_1:row14:col4 = '(81.5 to 193)'
- unparsed cell tab_1:row15:col2 = '(1.46 to 2.60)'
- unparsed cell tab_1:row15:col4 = '(1.45 to 2.62)'
- unparsed cell tab_1:row16:col2 = '(0.0269 to 0.459)'
- unparsed cell tab_1:row16:col4 = '(0.0421 to 0.482)'
- unparsed cell tab_1:row17:col2 = '(11.3 to 13.2)'
- unparsed cell tab_1:row17:col4 = '(11.4 to 13.2)'
- unparsed cell tab_1:row18:col1 = 'Þ50:391 Á 12n Ã2 Á 0:1472n Ã3 Á 0:400 ð'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row2:col1', 'tab_1:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row7:col1', 'tab_1:row7:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row5:col1', 'tab_1:row5:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row8:col1', 'tab_1:row8:col3'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.423 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_meloxicam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Aoyama_2017` / `Aoyama_2017::reference`)


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
