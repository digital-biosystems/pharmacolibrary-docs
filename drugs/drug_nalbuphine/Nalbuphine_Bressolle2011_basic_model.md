# nalbuphine — `Nalbuphine_Bressolle2011_basic_model`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Bressolle F; Khier S; Rochette A; Kinowski JM; Dadure C; Capdevila X et al. (2011). British journal of anaesthesia 106
  ·  DOI: [10.1093/bja/aer001](https://doi.org/10.1093/bja/aer001)

## Model component
<dbs-pgx drug="nalbuphine" model-id="Nalbuphine_Bressolle2011_basic_model" status="needs_review" stale="false" population="children after surgery" measured-compound="nalbuphine" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (litre h 21 ) 130 | `Q22` · CL | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | tab_5:row6:col2 | — | not captured |
| V 1 (litre) | `Q63` · V1 | —(suppressed) | litre | — | [l] | not captured | llm (0.6) | tab_5:row7:col3, Bressolle_2011_table_2:row4:col1 | — | not captured |
| V 2 (litre) | `Q64` · V2 | —(suppressed) | litre | — | [l] | not captured | llm (0.6) | tab_5:row8:col3, Bressolle_2011_table_2:row6:col1 | — | not captured |
| Q (litre h 21 ) 75.6 | `Q30` · Q | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | tab_5:row9:col2 | — | not captured |
| KA (h-1) | `Q49` · kabs | —(suppressed) | h-1 | — | 1/h | not captured | review_gapfill (0.7) | Zhu_2024:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q64 ('v 2 CL', value '0.0324') — already have one for this compound
- dropped duplicate Q64 ('v 2 V 1', value '0.0929') — already have one for this compound
- dropped duplicate Q64 ('v 2 Q', value '0.123') — already have one for this compound
- routed 'variability, s 2' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- unit_dimension_unknown: 'litre h 21' (CL)
- dropped duplicate Q22 ('CL (litre h 21 )', value '41.6') — already have one for this compound
- unit_dimension_unknown: 'litre h 21' (Q)
- dropped duplicate Q30 ('Q (litre h 21 )', value '15.7') — already have one for this compound
- dropped PD-category row 's (%)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Bressolle_2011_table_2:row10:col1'])
- dropped unlinked row (NIL): '(DV vs IPRED)' — extend the ontology if this is a real PK parameter (source ['Bressolle_2011_table_2:row12:col1', 'Bressolle_2011_table_2:row15:col1'])
- dropped unlinked row (NIL): '(DV vs PRED)' — extend the ontology if this is a real PK parameter (source ['Bressolle_2011_table_2:row13:col1', 'Bressolle_2011_table_2:row16:col1'])
- dropped duplicate Q22 ('CL', value '0.0979') — already have one for this compound
- dropped duplicate Q63 ('V 1', value '0.153') — already have one for this compound
- dropped duplicate Q64 ('V 2', value '0.473') — already have one for this compound
- dropped duplicate Q30 ('Q', value '0.050') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nalbuphine
- population split: 'basic model' subgroup of Bressolle_2011 (paper reports 4 populations: basic model, final covariate model (allometric model), iiv (%), mean)
- gap-filled Q49 (kabs) from Zhu_2024's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_5:row6:col1 = '115, 145'
- unparsed cell tab_5:row6:col3 = '118, 144'
- unparsed cell tab_5:row7:col2 = '166, 255'
- unparsed cell tab_5:row7:col4 = '164, 251'
- unparsed cell tab_5:row8:col2 = '129, 173'
- unparsed cell tab_5:row8:col4 = '128, 180'
- unparsed cell tab_5:row9:col1 = '55.0, 96.2'
- unparsed cell tab_5:row9:col3 = '54.6, 96.9'
- unparsed cell tab_5:row11:col2 = '0.0140,'
- unparsed cell tab_5:row11:col4 = '0.0128,'
- unparsed cell tab_5:row13:col2 = '0.0405,'
- unparsed cell tab_5:row13:col4 = '0.0436,'
- unparsed cell tab_5:row16:col2 = '0.0280,'
- unparsed cell tab_5:row16:col4 = '0.0272,'
- unparsed cell tab_5:row18:col2 = '0.0353,'
- unparsed cell tab_5:row18:col4 = '0.0340,'
- unparsed cell Bressolle_2011_table_2:row2:col2 = '31.2 (39.9), 13.6'
- unparsed cell Bressolle_2011_table_2:row3:col5 = '18.4 (36.7), 7.86'
- unparsed cell Bressolle_2011_table_2:row4:col2 = '39.1 (38.3), 37.0'
- unparsed cell Bressolle_2011_table_2:row5:col5 = '30.7 (53.1), 28.5'
- unparsed cell Bressolle_2011_table_2:row6:col2 = '68.8 (57.5), 28.6'
- unparsed cell Bressolle_2011_table_2:row8:col2 = '22.4 (28.7), 44.7'
- unparsed cell Bressolle_2011_table_2:row9:col5 = '34.8 (53.5), 34.4'
- companion parameter table 2 transcribed (18 record(s))
- companion parameter table 3 transcribed (12 record(s))
- companion parameter table 4 transcribed (13 record(s))
- LLM selected parameter table(s) 2, 3, 4, 6

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Zhu_2024:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_5:row7:col3', 'Bressolle_2011_table_2:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_5:row8:col3', 'Bressolle_2011_table_2:row6:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 131.0 | not captured | not captured | ['tab_5:row6:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 208 L | not captured | not captured | ['tab_5:row7:col3', 'Bressolle_2011_table_2:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 153 L | not captured | not captured | ['tab_5:row8:col3', 'Bressolle_2011_table_2:row6:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_nalbuphine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bressolle_2011` / `Bressolle_2011::basic_model`)


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
