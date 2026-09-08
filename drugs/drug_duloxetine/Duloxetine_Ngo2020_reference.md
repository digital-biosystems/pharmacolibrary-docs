# duloxetine — `Duloxetine_Ngo2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Ngo TL; Lee CH; Han N; Back HM; Rhee SJ; Noh K; et al. et al. (2020). International journal of molecular sciences 21
  ·  DOI: [10.3390/ijms21051862](https://doi.org/10.3390/ijms21051862)

## Model component
<dbs-pgx drug="duloxetine" model-id="Duloxetine_Ngo2020_reference" status="rejected" stale="false" population="rats and extrapolated humans" measured-compound="duloxetine" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| K a | `Q95` · t1/2ka | —(suppressed) | not captured | — | not captured | 1.35 | llm (0.5) | tab_1:row1:col1, tab_1:row1:col2, tab_1:row1:col3, tab_1:row1:col5, tab_1:row1:col6, tab_1:row1:col8 | — | not captured |
| Emax_F pm | `Q320` · Emax | —(suppressed) | not captured | — | not captured | 0.147 | llm (0.5) | tab_1:row2:col2, tab_1:row2:col3, tab_1:row2:col5, tab_1:row2:col6, tab_1:row2:col8 | — | not captured |
| IC50_F pm | `Q322` · IC50 | —(suppressed) | not captured | — | not captured | 538 | llm (0.5) | tab_1:row3:col2, tab_1:row3:col3, tab_1:row3:col5, tab_1:row3:col6, tab_1:row3:col8 | — | not captured |
| F pm | `Q45` · fm | —(suppressed) | not captured | — | not captured | 0.589 | llm (0.5) | tab_1:row4:col2, tab_1:row4:col3, tab_1:row4:col5, tab_1:row4:col6, tab_1:row4:col8 | — | not captured |
| CL p | `Q22` · CL | —(suppressed) | not captured | — | not captured | 1.97 | boundary (0.8) | tab_1:row5:col2, tab_1:row5:col3, tab_1:row5:col5, tab_1:row5:col6, tab_1:row5:col8 | — | 10.2 (14.0% RSE) |
| V p | `Q61` · V | —(suppressed) | not captured | — | not captured | 14.6 | llm (0.5) | tab_1:row6:col2, tab_1:row6:col3, tab_1:row6:col5, tab_1:row6:col6, tab_1:row6:col8 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| absorption rate constant | Q49 | not captured | exact |
| elimination rate constant | Q47 | not captured | exact |
| apparent oral clearance | Q27 | not captured | exact |
| volume of distribution | Q61 | not captured | exact |
| apparent volume of distribution | Q76 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Parameters'
- dropped duplicate Q22 ('Emax_CL pm', value '1.00') — already have one for this compound
- dropped duplicate Q322 ('IC50_CL pm', value '596') — already have one for this compound
- dropped duplicate Q22 ('CL pm /F p', value '1.77') — already have one for this compound
- dropped duplicate Q22 ('CL m /F m', value '16.0') — already have one for this compound
- dropped unlinked row (NIL): 'V m /F m' — extend the ontology if this is a real PK parameter (source ['tab_1:row11:col2', 'tab_1:row11:col3', 'tab_1:row11:col5', 'tab_1:row11:col6', 'tab_1:row11:col8'])
- dropped unlinked row (NIL): 'Prop_p' — extend the ontology if this is a real PK parameter (source ['tab_1:row15:col2', 'tab_1:row15:col3', 'tab_1:row15:col5', 'tab_1:row15:col6', 'tab_1:row15:col8'])
- dropped unlinked row (NIL): 'Prop_m' — extend the ontology if this is a real PK parameter (source ['tab_1:row16:col2', 'tab_1:row16:col3', 'tab_1:row16:col5', 'tab_1:row16:col6', 'tab_1:row16:col8'])
- dropped value-less row: 'RSE'
- dropped value-less row: 'CI'
- dropped value-less row: 'Prop_p'
- dropped value-less row: 'Prop_m'
- dropped value-less row: 'F pm'
- dropped value-less row: 'CL pm'
- dropped value-less row: 'CL p'
- dropped value-less row: 'K a'
- dropped value-less row: 'V p'
- dropped value-less row: 'F p'
- dropped value-less row: 'CL m'
- dropped value-less row: 'V m'
- dropped value-less row: 'F m'
- dropped duplicate Q27 ('apparent clearance', value None) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=duloxetine

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | Fm=0.746 present with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_duloxetine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ngo_2020` / `Ngo_2020::reference`)


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
