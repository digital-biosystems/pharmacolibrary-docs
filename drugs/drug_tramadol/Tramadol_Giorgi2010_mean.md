# tramadol — `Tramadol_Giorgi2010_mean`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Giorgi M; Del Carlo S; Łebkowska-Wieruszewska B; Kowalski CJ; Saccomanni G et al. (2010). Polish journal of veterinary sciences 13
  ·  DOI: [10.2478/v10181-010-0027-y](https://doi.org/10.2478/v10181-010-0027-y)

## Model component
<dbs-pgx drug="tramadol" model-id="Tramadol_Giorgi2010_mean" status="rejected" stale="false" population="healthy beagle dogs" measured-compound="tramadol" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| K 10 | `Q49` · kabs | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | tab_1:row1:col2, Giorgi_2010_table_1:row2:col2 | — | not captured |
| K 12 | `Q301` · k12 | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | tab_1:row2:col2 | — | not captured |
| K 21 | `Q302` · k21 | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | tab_1:row3:col2 | — | not captured |
| K 10 t 1/2 | `Q95` · t1/2ka | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | tab_1:row4:col2, Giorgi_2010_table_1:row6:col2 | — | not captured |
| Cl T | `Q22` · CL | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | tab_1:row6:col2, Giorgi_2010_table_1:row7:col2 | — | not captured |
| AUMC 0-∞ | `Q20` · AUMC | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | tab_1:row7:col2 | — | not captured |
| MRT | `Q53` · MRT | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row8:col2 | — | not captured |
| Vdss | `Q65` · Vss | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | tab_1:row9:col2 | — | not captured |
| V 1 | `Q63` · V1 | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | tab_1:row10:col2 | — | not captured |
| Vd | `Q61` · V | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Giorgi_2010_table_1:row0:col2 | — | not captured |
| Tlag | `Q83` · tlag | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Giorgi_2010_table_1:row3:col2 | — | not captured |
| AUC 0-∞ | `Q17` · AUC∞ | —(suppressed) | not captured | — | not captured | not captured | llm_corrected (0.6) | Giorgi_2010_table_1:row4:col2 | — | not captured |
| Tmax | `Q56` · tmax | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Giorgi_2010_table_1:row8:col2 | — | not captured |
| Cmax | `Q32` · Cmax | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Giorgi_2010_table_1:row9:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q49 ('K 01', value '6.90') — already have one for this compound
- dropped duplicate Q49 ('K 01 t 1/2', value '0.10') — already have one for this compound
- dropped unlinked row (NIL): 'F%' — extend the ontology if this is a real PK parameter (source ['Giorgi_2010_table_1:row10:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tramadol
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- population split: 'mean' subgroup of Giorgi_2010 (paper reports 2 populations: mean, parameters)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row11:col2 = '487 56,97 6,15'
- unparsed cell tab_1:row11:col3 = '332 37,18 0,75'
- companion parameter table 1 transcribed (24 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 14 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 1131.0 | not captured | not captured | ['tab_1:row6:col2', 'Giorgi_2010_table_1:row7:col2'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none'] | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tramadol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Giorgi_2010` / `Giorgi_2010::mean`)


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
