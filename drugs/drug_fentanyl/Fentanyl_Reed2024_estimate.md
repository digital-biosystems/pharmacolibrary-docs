# fentanyl — `Fentanyl_Reed2024_estimate`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Reed RA; Berghaus LJ; Reynolds RM; Holmes BT; Krikorian AM; Sakai DM; et al. et al. (2024). Frontiers in pain research (Lausanne, Switzerland) 5
  ·  DOI: [10.3389/fpain.2024.1373759](https://doi.org/10.3389/fpain.2024.1373759)

## Model component
<dbs-pgx drug="fentanyl" model-id="Fentanyl_Reed2024_estimate" status="rejected" stale="false" population="healthy adult horses" measured-compound="fentanyl" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tvAlpha (1/h) | `Q67` · λ1 | —(suppressed) | not captured | — | not captured | not captured | tv_prefix (0.95) | T2:row4:col1 | — | not captured |
| tvBeta (1/h) | `Q47` · kel | —(suppressed) | not captured | — | not captured | not captured | tv_prefix (0.95) | T2:row5:col1 | — | not captured |
| t1/2α (h) | `Q59` · t1/2α | —(suppressed) | h | — | [h] | not captured | exact (1.0) | T2:row7:col1 | — | not captured |
| t1/2β (h) | `Q60` · t1/2β | —(suppressed) | h | — | [h] | not captured | exact (1.0) | T2:row8:col1 | — | not captured |
| t1/2γ (h) | `Q89` · t1/2γ | —(suppressed) | h | — | [h] | not captured | exact (1.0) | T2:row9:col1 | — | not captured |
| AUClast (h*pg/ml) | `Q74` · AUClast | —(suppressed) | h*pg/ml | — | [[h] · [pg]] / [ml] | not captured | exact (1.0) | T2:row10:col1 | — | not captured |
| Cl (ml/h/kg) | `Q22` · CL | —(suppressed) | ml/h/kg | — | [ml] / [[h] · [kg]] | not captured | exact (1.0) | T2:row11:col1 | — | not captured |
| V1 (L/kg) | `Q63` · V1 | —(suppressed) | L/kg | — | [l] / [kg] | not captured | exact (1.0) | T2:row12:col1 | — | not captured |
| V2 (L/kg) | `Q64` · V2 | —(suppressed) | L/kg | — | [l] / [kg] | not captured | exact (1.0) | T2:row13:col1 | — | not captured |
| V3 (L/kg) | `Q77` · V3 | —(suppressed) | L/kg | — | [l] / [kg] | not captured | exact (1.0) | T2:row14:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'tvA (pg/ml)' — extend the ontology if this is a real PK parameter (source ['T2:row1:col1'])
- dropped unlinked row (NIL): 'tvB (pg/ml)' — extend the ontology if this is a real PK parameter (source ['T2:row2:col1'])
- dropped unlinked row (NIL): 'tvC (pg/ml)' — extend the ontology if this is a real PK parameter (source ['T2:row3:col1'])
- dropped PD-category row 'tvGamma (1/h)' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row6:col1'])
- dropped unlinked row (NIL): 'stdev0' — extend the ontology if this is a real PK parameter (source ['T2:row15:col1'])
- dropped unlinked row (NIL): 'A' — extend the ontology if this is a real PK parameter (source ['T2:row17:col1'])
- dropped unlinked row (NIL): 'B' — extend the ontology if this is a real PK parameter (source ['T2:row18:col1'])
- dropped unlinked row (NIL): 'C' — extend the ontology if this is a real PK parameter (source ['T2:row19:col1'])
- dropped duplicate Q47 ('Beta', value '0.004') — already have one for this compound
- dropped PD-category row 'Gamma' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row22:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fentanyl
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- population split: 'estimate' subgroup of Reed_2024 (paper reports 4 populations: dose absorbed (mg), estimate, fractional bioavailability (%), target dose(mg))
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T2:row20:col1 = '1.48 × 10−6'
- companion parameter table 3 transcribed (9 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row11:col1'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['T2:row7:col1'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['T2:row8:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row12:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row13:col1'] |
| C5_dimension_Q74 | pass | [time] * [mass] / [length] ** 3 | not captured | not captured | not captured | ['T2:row10:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row14:col1'] |
| C5_dimension_Q89 | pass | [time] | not captured | not captured | not captured | ['T2:row9:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 722.4 | not captured | not captured | ['T2:row11:col1'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 50.6 L/h | not captured | not captured | ['T2:row11:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 13.4 L | not captured | not captured | ['T2:row12:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 12.9 L | not captured | not captured | ['T2:row13:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fentanyl/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Reed_2024` / `Reed_2024::estimate`)


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
